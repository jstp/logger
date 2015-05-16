"use strict"


var example = require("washington")
var Logger  = require("../logger")

var GREY    = "\u001b[30m"
var CLEAR   = "\u001b[0m"


example("protocol is grey and ends with ':'", function (check) {
  var logger = new Logger({
    log: function (text) {
      check(
        text,
        GREY + "jstp:" + CLEAR
      )
    }
  })

  logger.send({
    protocol: ["jstp"]
  })
})
