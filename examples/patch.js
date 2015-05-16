"use strict"


var example = require("washington")
var Logger  = require("../logger")

var BOLD    = "\u001b[1m"
var MAGENTA = "\u001b[35m"
var GREY    = "\u001b[30m"
var CLEAR   = "\u001b[0m"


example("PATCH is magenta, the resource is shown", function (check) {
  var logger = new Logger({
    log: function (text) {
      check(
        text,
        GREY + "jstp:" + CLEAR +
        MAGENTA + "PATCH" + CLEAR +
          GREY + "/" + CLEAR + "some" +
          GREY + "/" + CLEAR + "deep" +
          GREY + "/" + CLEAR + "resource"
      )
    }
  })

  logger.send({
    protocol: ["jstp"],
    method: "PATCH",
    resource: ["some", "deep", "resource"]
  })
})
