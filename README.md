## Description
This is a simple command line tool using node.js to allow templates to be applied when creating files of a given filetype. 

## Installation

Install node, which can vary depending on your operating system.

Then run: npm install --global tempx

If you run into trouble with creating or editing templates, you need to fix your npm permissions, which can be found here: 
https://docs.npmjs.com/getting-started/fixing-npm-permissions
## Usage
Run commands using the format tempx argument1 argument2
To create a new file and apply a template, simply run 'tempx filename.extension'

### list 
lists your current templates 

### template
Allows you to edit your template for a filetype, and creates a new one if you do not currently have one. The filetype must be specified in the following argument.

### delete 
Deletes the template of the specified filetype.


### Examples

tempx list: lists templates 

tempx template html: allows you to edit the html template

tempx delete html: will delete your current html template

tempx hello.py: will create a python file with the python template applied













