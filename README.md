# Node

## 1.Intro

Node,js is a runtime that allows you to run javascript in the server. 

## 2.Instalation

To check if node is instaled in the system you can run

```bash
node -v
```

To check if npm is instaled use

```bash
npm -v
```


It is recomended to use NVM node version manager to install and manage node versions in the system. Then use NVM to install node.

```bash
nvm install 12.16.3
```

## 3.Hello World

To create the most simple use case of node, we can do a hello world in repl mode, just type node in the terminal and console.log("Hello World"). Type Ctrl + c two times to quit.

To create a hello world from a file we can create a index.js file that is the standard entrypoint for node and type console.log("Hello World"); 
To run this we can simply type node and the path to the file, but since this is the standard index.js we can only run node and the path to the current directory.

global is 