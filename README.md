# SteemSites
[![Travis](https://travis-ci.org/Yhozen/steemsites.svg?branch=master&style=flat-square)](https://yhozen.github.io/steemsites/)
[![Code Climate](https://codeclimate.com/github/Yhozen/steemsites/badges/gpa.svg?style=flat-square)](https://codeclimate.com/github/Yhozen/steemsites)
![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)

Make websites without a host nor a domain, powered by Steem blockchain and WebTorrent.
webpack configuration forked from [React webpack boilerplate](https://github.com/vasanthk/react-es6-webpack-boilerplate)

### Usage

```
npm install
npm start
Open http://localhost:5000
```
To get the magnet link simply go to instant.io and drop the whole folder that contain the webpage. An index.html is needed

### Know issues

Code inside a script tag won't be able to access to previous global variables without 'window'. 

IE: 
``` 
$(document).ready(function(){
  $('.parallax').parallax();
}); 
``` 
won't work but
    
```
var $ = window.$
$(document).ready(function(){
  $('.parallax').parallax();
}); 
```
will work

