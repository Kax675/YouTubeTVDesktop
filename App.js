const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
     fullscreen: true,
     frame: false,
  })

  win.loadURL('https://youtube.com/tv')
  win.webContents.userAgent = 'Mozilla/5.0 (compatible; U; NETFLIX) AppleWebKit/533.3 (KHTML, like Gecko) Qt/4.7.0 Safari/533.3 Netflix/3.2 (DEVTYPE=RKU-42XXX-; CERTVER=0) QtWebKit/2.2, Roku 3/7.0 (Roku, 4200X, Wireless)'
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
