const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,           // allow require() in renderer
      contextIsolation: false
    }
  });

  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, 'build', 'index.html')}`;

  mainWindow.loadURL(startURL);
  if (isDev) mainWindow.webContents.openDevTools();
  
  mainWindow.on('closed', () => { mainWindow = null; });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  // On macOS it's common for apps to stay open until Cmd+Q
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
