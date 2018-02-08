# SteemSites
[![Travis](https://travis-ci.org/Yhozen/steemsites.svg?branch=master&style=flat-square)](https://yhozen.github.io/steemsites/)
[![Code Climate](https://codeclimate.com/github/Yhozen/steemsites/badges/gpa.svg?style=flat-square)](https://codeclimate.com/github/Yhozen/steemsites)
![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)

Make websites without a host nor a domain, powered by Steem blockchain and WebTorrent.
You'll need a [steem account](https://steemit.com/pick_account)

Usage
------
#### Access a site

Just write a weblink and go

#### Create or update a site

First create a static page and put all the content in a folder. It's important to have an index.html

Then go to steemit.com/@[USERNAME]/permissions and grab the private posting key (other keys could work but for security reasons it's better to use just the posting key so no one can steal your coins).  

Go to [steemsites](https://steemsites.js.org) drop the folder with the content anywhere, go down to the publish section and put your username, posting key, permlink (will act like the link to your page), and a name. If you are ready press publish and you will see your page listed on discover sites.

To update the page it's the same process, just choose the same permlink that the previous version

Contributions
------



Know Issues
------

Some restrictive NATs won't let you download the pages (a TURN server would fix this)
