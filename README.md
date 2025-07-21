# ClassScan

Electron-based desktop app for automated barcode-based classroom attendance.

## Overview

ClassScan automates attendance logging by leveraging Code 128 barcodes on existing student ID cards and affordable USB “gun” scanners. In pilot studies, this approach reduced attendance time from ~3 minutes to under 1 minute per 30-student class while maintaining ≥ 98 % accuracy—delivering a low-cost, scalable solution for K–12 schools.

## Features

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
- **Settings & Hardware**  
  Select and configure connected USB scanners (VID/PID), customize file paths.

## Requirements

- **Node.js** v14+  
- **npm** or **yarn**  
- **Windows** 10/11 or **macOS** 10.15+

## Installation

```bash
git clone https://github.com/genkizkhan/classscan-electron-app.git
cd classscan-electron-app
npm install
npm run start
```
