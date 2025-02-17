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

#### Repl Mode

To create the most simple use case of node, we can do a hello world in ***repl*** mode, just type: 

```bash
node 
```
in the terminal and

```js
console.log("Hello World"). 
```
Type Ctrl + c two times to quit.

#### From a File

To make a hello world from a file, create a index.js file that is the standard entrypoint for node, in the file, write:

```js
console.log("Hello World"); 
```

To run this we can simply type node and the path to the file, but since this is the standard index.js we can only run node and the path to the current directory.

```sh
node .
```

or for other cases, ex:

```sh
node app.js
```

## 4.Runtime

In Node.js, there are built-in global objects and variables that are accessible anywhere without importing any module.


| **Global**       | **Description** |
|-----------------|----------------|
| `global`       | The global object (similar to `window` in browsers) |
| `__dirname`    | Directory path of the current script |
| `__filename`   | Full path of the current script |
| `process`      | Provides process information (PID, env variables, platform) |
| `console`      | Built-in console for logging |
| `require`      | Used for importing CommonJS modules |
| `module`       | Contains information about the current module |
| `setTimeout`   | Executes a function after a delay |
| `setInterval`  | Runs a function repeatedly at intervals |
| `setImmediate` | Runs a function immediately after the current event loop |

## 5.Events

Node is:
- Assynchronous
- Event-driven

This means that, the runtime implements an event loop, 

It is important to know:
- Events
- Callback

In most cases we will listen for events, and have a callback function for this event.

## 6.File System

## 7.Modules & NPM

A module is a javascript file that exports it's code, 

### NPM

NPM (Node Package Manager) is the default package manager for Node.js. It is used to install, manage, and share JavaScript packages (also called modules or libraries) for both backend and frontend development.

To create a new package.json file use the following command:

```bash
npm init -y
```

## DOCS
https://nodejs.org/docs/latest/api/