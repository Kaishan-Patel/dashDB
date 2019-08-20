# dashDB

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install express
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

<p align="center">
  <img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="Nodemon Logo">
</p>

# nodemon

nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does **not** require *any* additional changes to your code or method of development. nodemon is a replacement wrapper for `node`, to use `nodemon` replace the word `node` on the command line when executing your script.

[![NPM version](https://badge.fury.io/js/nodemon.svg)](https://npmjs.org/package/nodemon)
[![Travis Status](https://travis-ci.org/remy/nodemon.svg?branch=master)](https://travis-ci.org/remy/nodemon) [![Backers on Open Collective](https://opencollective.com/nodemon/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/nodemon/sponsors/badge.svg)](#sponsors)

# Installation

Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):

```bash
npm install -g nodemon
```

And nodemon will be installed globally to your system path.

You can also install nodemon as a development dependency:

```bash
npm install --save-dev nodemon
```

With a local installation, nodemon will not be available in your system path. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as `npm start`) or using `npx nodemon`.

# Usage

nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:

```bash
nodemon server.js
```

# mysql

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.6 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install mysql
```
