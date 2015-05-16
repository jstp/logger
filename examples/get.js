"use strict"


var example = require("washington")
var Logger  = require("../logger")

var BOLD    = "\u001b[1m"
var BLUE    = "\u001b[34m"
var GREY    = "\u001b[30m"
var CLEAR   = "\u001b[0m"


example("GET is blue, the resource is shown", function (check) {
  var logger = new Logger({
    log: function (text) {
      check(
        text,
        GREY + "jstp:" + CLEAR +
        BLUE + "GET" + CLEAR +
          GREY + "/" + CLEAR + "some" +
          GREY + "/" + CLEAR + "deep" +
          GREY + "/" + CLEAR + "resource"
      )
    }
  })

  logger.send({
    protocol: ["jstp"],
    method: "GET",
    resource: ["some", "deep", "resource"]
  })
})
