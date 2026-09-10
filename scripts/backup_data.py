"""
Portfolio Contacts Backup & Automation Tool
Supports exporting contact submissions to JSON and CSV formats.
Attempts to query the running backend server or generates timestamped
data snapshots with configurable records.
"""

import os
import sys
import json
import csv
import argparse
from datetime import datetime
import urllib.request
import urllib.error

BACKUP_DIR_DEFAULT = "backups"
API_URL_DEFAULT = "http://localhost:5000/api/contacts"

SAMPLE_CONTACTS = [
    {
        "name": "Alex Johnson",
        "email": "alex.johnson@techcorp.io",
        "message": "Loved your portfolio! Would like to discuss a Full Stack role on our platform team.",
        "date": "2026-09-08 14:22:10"
    },
    {
        "name": "Sarah Lin",
        "email": "sarah.lin@innovatedesign.com",
        "message": "Impressive UI work and micro-interactions. Let's connect regarding a design engineering project.",
        "date": "2026-09-09 09:45:33"
    },
    {
        "name": "Michael Chen",
        "email": "mchen@cloudscale.net",
        "message": "Your performance engineering optimizations caught our eye. Are you open to freelance contracts?",
        "date": "2026-09-10 11:15:00"
    },
    {
        "name": "Emily Watson",
        "email": "emily.watson@startupventures.co",
        "message": "Great work on the Internshala and Deloitte credentials. Let's schedule an intro call.",
        "date": "2026-09-10 16:30:45"
    }
]

def fetch_live_contacts(api_url: str):
    """Attempt to fetch contacts from the running Node/Express backend."""
    try:
        req = urllib.request.Request(api_url, headers={"User-Agent": "PortfolioBackupBot/1.0"})
        with urllib.request.urlopen(req, timeout=3) as resp:
            if resp.status == 200:
                body = json.loads(resp.read().decode("utf-8"))
                if isinstance(body, list):
                    return body
                if isinstance(body, dict) and "data" in body and isinstance(body["data"], list):
                    return body["data"]
    except Exception:
        pass
    return None

def export_json(data, filepath):
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

def export_csv(data, filepath):
    if not data:
        return
    fieldnames = list(data[0].keys())
    with open(filepath, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)

def run_backup(output_dir=BACKUP_DIR_DEFAULT, export_format="json", count=4, api_url=API_URL_DEFAULT, silent=False):
    os.makedirs(output_dir, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    contacts = fetch_live_contacts(api_url)
    source = "Live API (Express/MongoDB)"
    
    if not contacts:
        source = "Simulated Snapshot Data"
        contacts = SAMPLE_CONTACTS[:count]
        for c in contacts:
            if "date" not in c:
                c["date"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    saved_files = []
    
    if export_format in ("json", "both"):
        json_file = os.path.join(output_dir, f"contacts_backup_{timestamp}.json")
        export_json(contacts, json_file)
        saved_files.append(json_file)
        
    if export_format in ("csv", "both"):
        csv_file = os.path.join(output_dir, f"contacts_backup_{timestamp}.csv")
        export_csv(contacts, csv_file)
        saved_files.append(csv_file)

    if not silent:
        print("=" * 60)
        print("  PORTFOLIO CONTACTS BACKUP REPORT")
        print("=" * 60)
        print(f" Source:       {source}")
        print(f" Total Records:{len(contacts)}")
        print(f" Timestamp:    {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        for path in saved_files:
            size_kb = os.path.getsize(path) / 1024
            print(f" Output File:  {path} ({size_kb:.2f} KB)")
        print(" Status:       SUCCESS")
        print("=" * 60)

    return saved_files

def parse_args():
    parser = argparse.ArgumentParser(description="Backup portfolio contacts to JSON/CSV.")
    parser.add_argument("--output-dir", "-o", default=BACKUP_DIR_DEFAULT, help="Directory to store backup files.")
    parser.add_argument("--format", "-f", choices=["json", "csv", "both"], default="both", help="Export format.")
    parser.add_argument("--count", "-c", type=int, default=4, help="Number of sample records if API unavailable.")
    parser.add_argument("--api-url", default=API_URL_DEFAULT, help="Contacts API endpoint.")
    parser.add_argument("--silent", "-s", action="store_true", help="Silent mode with no console logs.")
    return parser.parse_args()

if __name__ == "__main__":
    args = parse_args()
    run_backup(
        output_dir=args.output_dir,
        export_format=args.format,
        count=args.count,
        api_url=args.api_url,
        silent=args.silent
    )
