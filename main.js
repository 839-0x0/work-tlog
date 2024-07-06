const { app , BrowserWindow } = require('electron')

function createWindow () {
    const window = new BrowserWindow({
        width : 500,
        height : 600,
        webPreferences : {
            nodeIntegration : true,
            contextIsolation: false,
            enableRemoteModule: false,
            devTools: true
        }
    });

    window.loadFile(`${__dirname}/src/public/index.html`);
}

// アプリケーションが初期化されたらウィンドウを作成
app.whenReady().then(createWindow);

// すべてのウィンドウが閉じられたらアプリケーションを終了
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // macOS でドックアイコンがクリックされ、他にウィンドウが開いていない場合にウィンドウを再作成
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});