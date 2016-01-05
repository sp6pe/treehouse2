var fs = require("fs");

function mergeValues(values,content){
	//Cycle over keys of values
	for(var key in values){
		//replace all {{key}} with the value from the values objs
		content = content.replace("{{"+ key + "}}",values[key]);
	}

	//return merged content	
	return content;
}



function view(templateName, values, response){
	//read from template files 
	var fileContents = fs.readFileSync('./views/'+templateName+'.html', {encoding:'utf8'});
  	
  	//insert values in to the content 
  	fileContents = mergeValues(values,fileContents);


	//Write out the contents to the repsonse 
  	response.write(fileContents);
	
	
}

module.exports. view = view;