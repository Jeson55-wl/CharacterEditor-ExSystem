const { app, BrowserWindow, ipcMain,dialog } = require('electron')
const fs = require('fs');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win


function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('dist/ExSystem-CharacterEditor/index.html')

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

fs.existsSync("Characters") || fs.mkdirSync("Characters");

var characters = new Array();

console.log("It Work!");

var folders = fs.readdirSync("Characters");
for(i = 0; i < folders.length; i++)
{
  var data = fs.readFileSync("Characters/" + folders[i] + "/char.json");
  var parse = JSON.parse(data);
  characters.push(parse);
}





ipcMain.on('load-image', (event, arg) => {

  console.log(__dirname + "\\Characters\\Character" + arg.CharacterID + "\\img.png")
  dialog.showOpenDialog().then((filePath) =>
  {
    fs.copyFileSync(filePath['filePaths'][0], "Characters/Character" + arg.CharacterID + "/img.png")
    event.sender.send('load-image',__dirname + "\\Characters\\Character" + arg.CharacterID + "\\img.png");
  });

  //event.sender.send('load-image',__dirname + "\\Characters\\Character" + arg.CharacterID + "\\img.png");
})


ipcMain.on('remove-character', (event, arg) => {

  path = "Characters/Character" + arg;

  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
})

ipcMain.on('load-characters', function(event)
{
  event.sender.send('load-characters', characters);
})

ipcMain.on('save-current-character', (event, arg) => {

  console.log(arg.CharacterID);
  fs.existsSync("Characters/Character" + arg.CharacterID) || fs.mkdirSync("Characters/Character" + arg.CharacterID);
  var parseData = JSON.stringify(arg);
  fs.writeFileSync("Characters/" + "Character" + arg.CharacterID + "/char.json",parseData);
})






// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
