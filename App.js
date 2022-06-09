const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
     fullscreen: true,
     frame: false,
     webPreferences: {
        webviewTag: true,
        nodeIntegration: true,
        contextIsolation: false,

     }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
