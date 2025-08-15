# ClassScan

Electron-based desktop application for automated barcode-based classroom attendance logging (sub-1-minute sessions, ≥98 % accuracy, low-cost, scalable K–12 deployment).

---

## 📖 Overview

ClassScan leverages Code 128 barcodes on existing student ID cards and affordable USB “gun” scanners to automate attendance in classrooms. In pilot studies, this approach reduced attendance time from ~3 minutes to under 1 minute per 30-student class while maintaining ≥98 % accuracy—delivering a low-cost, scalable solution for K–12 schools.

---

## ✨ Features

- **Session Management**  
  Start, pause, and end attendance sessions with a single click.

- **Real-Time Logging**  
  Live display of scanned IDs, timestamps, and student names.

- **Error Handling**  
  Immediate feedback on mis-reads or duplicates; end-of-session summary.

- **Roster Import & Mapping**  
  CSV/JSON upload of `StudentID,Name` to map barcodes to student names.

- **Export & Integration**  
  One-click export to CSV or SQLite for integration with SIS or reporting tools.

- **Hardware Configuration**  
  Discover and configure connected USB barcode scanners (VID/PID).

---

## 🛠 Prerequisites

- **Node.js** v14 or higher  
- **npm** (v6+) or **Yarn**  
- **Windows** 10/11 or **macOS** 10.15+  

---

## 🚀 Quick Start

1. **Clone the repository**  
   ```bash
   git clone https://github.com/<your-org>/classscan-electron-app.git
   cd classscan-electron-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
Launch React + Electron together, with hot reload and DevTools:
   ```bash
   npm run electron:dev
   # or
   yarn electron:dev
   ```

4. **Build for production**
Create a production React build and package installers:
  ```bash
  npm run electron:build
  # or
  yarn electron:build
  ```

• Outputs installers (.exe, .dmg) in the dist/ folder.

---

## 🗂 Project Structure
  ```javascript
    classscan-electron-app/
    ├── assets/             # App icons & installer resources
    ├── build/              # React production build (auto-generated)
    ├── dist/               # Electron installer output (auto-generated)
    ├── node_modules/       
    ├── public/             # CRA public assets
    │   └── index.html
    ├── src/                # React application source
    │   ├── components/
    │   ├── hooks/
    │   ├── styles/
    │   └── index.js
    ├── electron.js         # Electron main process entry point
    ├── package.json
    ├── .gitignore
    └── README.md
  ```

---

## ⚙️ Configuration

### Environment variables
Create a .env file in the root to override defaults (e.g. custom data paths):

```env
ATTENDANCE_DB_PATH=./data/attendance.sqlite
LOG_LEVEL=info
```

### Barcode-scanner mapping
On first run, go to Settings → Hardware to detect and save your USB scanner’s VID/PID.

---

## 🤝 Contributing 
Contributions welcome!

### Fork the repo

### Create a feature branch: git checkout -b feature/your-feature

### Commit your changes: git commit -m "feat: add awesome feature"

### Push to your branch: git push origin feature/your-feature

### Open a Pull Request

Please follow the existing code style, write tests for new functionality, and update this README as needed.

---

## CI/CD

This project uses GitHub Actions for continuous integration. The following checks run on every push and pull request to the `main` branch:

1. **Linting**: Ensures code follows the project's ESLint rules
2. **Formatting**: Verifies code is properly formatted with Prettier
3. **Tests**: Runs the test suite

The workflow file is located at `.github/workflows/ci.yml`.

### Required Repository Secrets

Make sure to set up the following repository secrets in your GitHub repository settings:

1. `NPM_TOKEN` (optional): Required if you need to install private npm packages

### Manual Triggers

You can manually trigger the workflow from the GitHub Actions tab in your repository.

---

## 📄 License
This project is released under the MIT License. See LICENSE for details.
