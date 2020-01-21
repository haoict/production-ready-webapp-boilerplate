#!/bin/sh

wdio run ./wdio/chrome.conf.js --spec $1 && wdio run ./wdio/smartphone.chrome.conf.js --spec $1
