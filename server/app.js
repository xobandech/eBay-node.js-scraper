const axios = require("axios");
const jsdom = require("jsdom");
const express = require("express")
const { JSDOM } = jsdom;

const { findItems } = require("./functions")





findItems("https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2047675.m570.l1313&_nkw=iphone&_sacat=0")
