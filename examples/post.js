"use strict"


var example = require("washington")
var Logger  = require("../logger")

var BOLD    = "\u001b[1m"
var GREEN   = "\u001b[32m"
var GREY    = "\u001b[30m"
var CLEAR   = "\u001b[0m"


example("POST is green, the resource is shown", function (check) {
  var logger = new Logger({
    log: function (text) {
      check(
        text,
        GREY + "jstp:" + CLEAR +
        GREEN + "POST" + CLEAR +
          GREY + "/" + CLEAR + "some" +
          GREY + "/" + CLEAR + "deep" +
          GREY + "/" + CLEAR + "resource"
      )
    }
  })

  logger.send({
    protocol: ["jstp"],
    method: "POST",
    resource: ["some", "deep", "resource"]
  })
})
