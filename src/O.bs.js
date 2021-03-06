// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Caml_option = require("rescript/lib/js/caml_option.js");

function flatMapFirst(fn, __x) {
  return Belt_Option.flatMap(__x, (function (value) {
                var match = Curry._1(fn, value);
                if (match !== undefined) {
                  return Caml_option.some(value);
                }
                
              }));
}

exports.flatMapFirst = flatMapFirst;
/* No side effect */
