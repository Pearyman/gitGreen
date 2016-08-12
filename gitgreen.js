/*
 * Developer : Yanan Li (liyananhappy@hotmail.com)
 * Date : 06/09/2015
 *
 * Copyright 2015
 * Licensed under MIT
 *
 * Version: 1.00
 */

var fs = require('fs');
var child_process = require('child_process');
var currentTime = parseInt(new Date().getTime().toString().substr(0, 10));
var lastTime = currentTime - 365 * 24 * 60 * 60;
var push = setInterval(function() {
    currentTime = parseInt(currentTime - 86400);
    fs.writeFile('gitgreen.txt', currentTime, function(err) {
        if (err) {
            console.log('write failed!');
        } else {
            console.log('write succeed');
            console.log(currentTime);
            child_process.exec("git add .; GIT_AUTHOR_DATE='" + currentTime + "' GIT_COMMITTER_DATE='" + currentTime + "' git commit -m 'update'; git push origin master;", function(err, opt) {
                if (err) throw err;
                console.log("done!!");
            })
        }
    })
}, 40000);
if (currentTime == lastTime) {
    clearInterval(push);
    console.log("finish!!!")
}
