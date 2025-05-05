// importando os modulos app e BrowserWindows do Electron
const { app, BrowserWindow } = require('electron')

// Define a funcao createwindow que é responsavel e cria uma janela e aplicativo electron

const createWindow = () => {
    // Cria uma nova instancia do BrowserWindow com as dimensoes  especificas
  
    const win = new BrowserWindow({
    width: 800, // define a largura da janela
    height: 600   // define a altura da janela
  })

  win.loadFile('index.html')
}


//Quando o aplicativo estiver pronto, chama a função createwindow para criar a janela principal 


app.whenReady().then(() => {
//Executa  a função createwindow para criar a janela principal



  createWindow()
})