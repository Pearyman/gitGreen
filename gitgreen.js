/*
 * Developer : Yanan Li (liyananhappy@hotmail.com)
 * Date : 06/09/2015
 *
 * Copyright 2015
 * Licensed under MIT
 *
 * Version: 1.00
 */

 var fs=require('fs');
 var child_process=require('child_process');
 var currentTime=parseInt(new Date().getTime().toString().substr(0,10));
 var lastTime=currentTime-365*24*60*60;

		 fs.writeFile('gitgreen.txt',currentTime,function(err){
		 	if(err){
		 		console.log('write failed!');
		 	}else{
		 		console.log('write succeed');
		 		// var doit=child_process.spawn("doit",["git add .","GIT_AUTHOR_DATE='" + currentTime + "' GIT_COMMITTER_DATE='" + currentTime + "'git commit -m 'test'","git push origin master"]);

		 	// 	doit.stdout.on('data', function (data) {
				//     console.log('stdout: ' + data);
				// });
				// doit.stderr.on('data', function (data) {
				//     console.log('stderr: ' + data);
				// });
				// doit.on('exit', function (code) {
				//     console.log('child process exited with code ' + code);
				// });
		 		child_process.exec("git add .;git push origin master;",function(err,opt){
		 			// if(err) throw err;
		 			child_process.exec("GIT_AUTHOR_DATE='" + currentTime + "' GIT_COMMITTER_DATE='" + currentTime + "'git commit -m 'new test';",function(err,opt){
			 				child_process.exec("git push origin master",function(){
			 					console.log("done!!");
			 				})
		 			})
		 			// 
		 		})
		 	}

		 })
 