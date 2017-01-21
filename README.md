# React Redux Starter template

## Table of Contents
1. [Features](#features)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Development](#development)
1. [Developer Tools](#developer-tools)
1. [Routing](#routing)
1. [Testing](#testing)



## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/reactjs/redux)
* [Redux-saga](https://github.com/redux-saga/redux-saga)
* [react-router](https://github.com/rackt/react-router)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [immutable.js](https://github.com/karma-runner/karma)


## Requirements
* node 
* yarn or npm 

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can create a new project based on `react-template` by doing the following:

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/supernova23/react-template.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic installs, but `npm install` will work just as well.

```bash
$ yarn install    # Install project dependencies
$ yarn start      # Compile and launch (same as `npm start`)
```

If everything works, type `localhost:3000` into your web browser you should see :

` Hello World `


## Development

#### Developer Tools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn’t require installing any packages.

However, adding the DevTools components to your project is simple. First, grab the packages from npm:

```bash
npm i --save-dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

### Routing
We use `react-router` [route definitions](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute) .

## Testing
We use `jest` for testing  [jest](https://github.com/facebook/jest) .

