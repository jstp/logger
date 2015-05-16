"use strict"


var example = require("washington")
var Logger  = require("../logger")

var BOLD    = "\u001b[1m"
var RED     = "\u001b[31m"
var GREY    = "\u001b[30m"
var CLEAR   = "\u001b[0m"


example("DELETE is yellow, the resource is shown", function (check) {
  var logger = new Logger({
    log: function (text) {
      check(
        text,
        GREY + "jstp:" + CLEAR +
        RED + "DELETE" + CLEAR +
          GREY + "/" + CLEAR + "some" +
          GREY + "/" + CLEAR + "deep" +
          GREY + "/" + CLEAR + "resource"
      )
    }
  })

  logger.send({
    protocol: ["jstp"],
    method: "DELETE",
    resource: ["some", "deep", "resource"]
  })
})
