// JSTP Logger
// ===========
//
// [ ![Codeship Status for jstp/logger](https://codeship.com/projects/897ccb40-de2d-0132-d439-465ff4e7e511/status?branch=master)](https://codeship.com/projects/80373)
//
// A nice logger for JSTP
//
// Installation
// ------------
//
// ```sh
// npm install --save @jstp/logger
// ```
//
// Usage
// -----
//
// ```javascript
// var Logger = require("@jstp/logger")
// var Sydney = require("sydney")
//
// var venue = new Sydney
// venue.add(new Logger)
//
// // And use it normally, it will log to the console
// ```
//
"use strict"


var Sydney = require("sydney")

var BOLD    = "\u001b[1m"
var GREEN   = "\u001b[32m"
var BLUE    = "\u001b[34m"
var YELLOW  = "\u001b[33m"
var MAGENTA = "\u001b[35m"
var RED     = "\u001b[31m"
var GREY    = "\u001b[30m"
var CLEAR   = "\u001b[0m"


var Logger = function (theConsole) {
  this.console = theConsole || console
}

Logger.prototype = Object.create(Sydney.prototype)

Logger.prototype.callback = function (event) {
  var text  = ""
  var color = undefined

  if (event.protocol instanceof Array)
    text += GREY + event.protocol[0] + ":" + CLEAR

  switch (event.method) {
    case "GET":
      color = BLUE
      break

    case "POST":
      color = GREEN
      break

    case "PUT":
      color = YELLOW
      break

    case "PATCH":
      color = MAGENTA
      break

    case "DELETE":
      color = RED
      break
  }

  if (event.method)
    text += color + event.method + CLEAR

  if (event.resource instanceof Array)
    text += GREY + "/" + CLEAR + event.resource.join(GREY + "/" + CLEAR)

  this.console.log(text)
}


module.exports = Logger
// Testing
// -------
//
// ```
// git clone git://github.com/jstp/logger
// cd logger
// npm install
// npm test
// ```
//
// License
// -------
//
// Copyright 2015 Xavier Via
//
// ISC Clause license.
//
// See [LICENSE](LICENSE) attached.
