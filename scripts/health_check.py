"""
Full-Stack Portfolio Health & Uptime Monitor
Pings local microservices and live production endpoints,
reporting latency, HTTP status codes, and service availability.
"""

import time
import urllib.request
import urllib.error
import json
import sys

SERVICES = [
    {
        "name": "Frontend Client (Vite Dev)",
        "url": "http://localhost:5173/",
        "required": False
    },
    {
        "name": "Backend API (Express Health)",
        "url": "http://localhost:5000/api/health",
        "required": False
    },
    {
        "name": "GitHub Clone Client",
        "url": "http://localhost:4000/",
        "required": False
    },
    {
        "name": "Vercel Production Deployment",
        "url": "https://main-porfolio-8cxg.vercel.app/",
        "required": False
    }
]

def check_service(service):
    name = service["name"]
    url = service["url"]
    start_time = time.time()
    
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "PortfolioHealthCheck/1.0"}
    )
    
    try:
        with urllib.request.urlopen(req, timeout=5) as response:
            latency_ms = (time.time() - start_time) * 1000
            status_code = response.status
            body_peek = response.read(64).decode("utf-8", errors="ignore").strip()
            
            # If JSON endpoint, check payload
            details = f"HTTP {status_code}"
            if "status" in body_peek or "OK" in body_peek:
                details += " (Healthy)"
            elif "<!doctype html" in body_peek.lower() or "<html" in body_peek.lower():
                details += " (HTML Rendered)"

            return {
                "name": name,
                "url": url,
                "status": "UP",
                "code": status_code,
                "latency": latency_ms,
                "details": details
            }
    except urllib.error.HTTPError as e:
        latency_ms = (time.time() - start_time) * 1000
        return {
            "name": name,
            "url": url,
            "status": "WARN",
            "code": e.code,
            "latency": latency_ms,
            "details": f"HTTP Error {e.code}"
        }
    except Exception as e:
        latency_ms = (time.time() - start_time) * 1000
        return {
            "name": name,
            "url": url,
            "status": "DOWN",
            "code": "---",
            "latency": latency_ms,
            "details": "Connection Refused / Offline"
        }

def run_health_check():
    print("\n" + "=" * 75)
    print("           PORTFOLIO ECOSYSTEM - HEALTH & AVAILABILITY MONITOR")
    print("=" * 75)
    print(f"{'SERVICE':<32} | {'STATUS':<6} | {'CODE':<5} | {'LATENCY':<8} | {'DETAILS'}")
    print("-" * 75)

    all_results = []
    for service in SERVICES:
        res = check_service(service)
        all_results.append(res)
        
        status_sym = "[OK]" if res["status"] == "UP" else ("[WARN]" if res["status"] == "WARN" else "[DOWN]")
        lat_str = f"{res['latency']:.1f}ms"
        print(f"{res['name']:<32} | {status_sym:<6} | {str(res['code']):<5} | {lat_str:<8} | {res['details']}")

    print("=" * 75)
    online_count = sum(1 for r in all_results if r["status"] == "UP")
    total_count = len(all_results)
    print(f" Summary: {online_count}/{total_count} services active and responding.")
    print("=" * 75 + "\n")

if __name__ == "__main__":
    run_health_check()
