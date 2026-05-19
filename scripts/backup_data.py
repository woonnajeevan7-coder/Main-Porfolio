import json
import os
from datetime import datetime

def backup_contacts():
    """
    A simple script to demonstrate data processing/automation.
    In a real scenario, this would fetch data from MongoDB.
    For this bonus, it simulates backing up contact data to a JSON file.
    """
    sample_data = [
        {"name": "John Doe", "email": "john@example.com", "message": "Hi there!", "date": str(datetime.now())},
    ]
    
    backup_dir = "backups"
    if not os.path.exists(backup_dir):
        os.makedirs(backup_dir)
        
    filename = f"{backup_dir}/contacts_backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    
    with open(filename, 'w') as f:
        json.dump(sample_data, f, indent=4)
        
    print(f"Backup created: {filename}")

if __name__ == "__main__":
    backup_contacts()
