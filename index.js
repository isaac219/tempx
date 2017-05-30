#! /usr/bin/env node

//save arguments as variables
var argument = process.argv.slice(2);
var firstParam = argument[0];
var secondParam = argument[1];
var fs = require('fs');

//find extension type of new file 
var filetype = firstParam.substr(firstParam.lastIndexOf('.') + 1);

//path to templates
var template = 'template.' + filetype;
var pathToTemplate = __dirname + '/templates/' + template;

//cases for various commands
switch(firstParam) {
	case 'list':
		var templatesFolder = (__dirname + '/templates');
		console.log("Current templates in " + templatesFolder + ":");
		list("template", templatesFolder);
		break;
	case 'template':
		var editable = __dirname + '/templates/template.' + secondParam;
		terminal('vi', editable);
		break;

	case 'delete':
		var deletable = __dirname + '/templates/template.' + secondParam;
		terminal('rm', deletable);
		break;
	//default case of creating a new file 	
	default:
		if(secondParam ==null) {
			fs.exists(pathToTemplate, (exists) => {
				console.log(exists ? ('Using ' + template + ' as template.') : 'no template, but file still created!');
				readTempThenWrite(firstParam,pathToTemplate);
			});
		}
		else {
			console.log("Invalid syntax");
		}
		break;
}

//read template, create empty file if no template is found
function readTempThenWrite(file,path) {
  fs.readFile(path, 'utf8', (err, templateData) => {
  if (err) {
	writeToFile(file,'');
  }
  else {
  	writeToFile(file,templateData);
  }
 
 });
}

//create and write to file 
function writeToFile(file,data) {
	fs.writeFile(file, data, function(err) {
    	if(err) {
     		return console.log(err);
    	}
    	console.log(file + " sketched successfully at " + process.cwd());
	}); 
}

//open vim through node
function terminal(command, argument) {
	var spawn = require('child_process').spawn;
	var child = spawn(command, [argument],{stdio: 'inherit'});
	child.on('exit', function (e, code) {
	    console.log("finished");
	});
}

//list all files in directory with keyword
function list(keyWord,directory) {
	var filesInDir = fs.readdirSync(directory);
	for(var i = 0; i < filesInDir.length; ++i) {
		if(filesInDir[i].includes(keyWord)) {
			console.log(filesInDir[i]);
		}
	} 

}


