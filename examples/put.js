"use strict"


var example = require("washington")
var Logger  = require("../logger")

var BOLD    = "\u001b[1m"
var YELLOW  = "\u001b[33m"
var GREY    = "\u001b[30m"
var CLEAR   = "\u001b[0m"


example("PUT is yellow, the resource is shown", function (check) {
  var logger = new Logger({
    log: function (text) {
      check(
        text,
        GREY + "jstp:" + CLEAR +
        YELLOW + "PUT" + CLEAR +
          GREY + "/" + CLEAR + "some" +
          GREY + "/" + CLEAR + "deep" +
          GREY + "/" + CLEAR + "resource"
      )
    }
  })

  logger.send({
    protocol: ["jstp"],
    method: "PUT",
    resource: ["some", "deep", "resource"]
  })
})
