# Automation & Maintenance Scripts

A suite of utility scripts designed to automate data management, test service health, and maintain the portfolio ecosystem.

---

## 🛠️ Available Scripts

### 1. `backup_data.py` (Contacts Backup & Data Pipeline)
Exports contact submissions and interactions into timestamped JSON and CSV records. Automatically detects if the Express/MongoDB backend is online; otherwise, generates structured snapshot datasets.

**Usage:**
```bash
# Run backup with default formats (both JSON & CSV)
python scripts/backup_data.py

# Export only JSON
python scripts/backup_data.py --format json

# Export only CSV
python scripts/backup_data.py --format csv

# Specify custom output directory and record count
python scripts/backup_data.py --output-dir custom_backups --count 10
```

---

### 2. `health_check.py` (Full-Stack Availability Monitor)
Pings all local microservices and live production endpoints, measuring response latency (ms), HTTP status codes, and service availability.

**Monitored Services:**
- Frontend Vite Client (`http://localhost:5173`)
- Express Backend API (`http://localhost:5000/api/health`)
- GitHub Clone Application (`http://localhost:4000`)
- Production Vercel Deployment (`https://main-porfolio-8cxg.vercel.app`)

**Usage:**
```bash
python scripts/health_check.py
```
