var express=require("express");

var app=express();

var request = require("request");

app.set("view engine","ejs");
app.get("/",function(req,res)
{
	res.render("search");
});

app.get("/results",function(req,res)
{    
    var query=req.query.search;
	var url="http://www.omdbapi.com/?s="+query+"&apikey=thewdb";
	console.log(url);
	request(url,function(error,response,body)
	{
		if (error) {
        console.log("Priya Vats");
		console.log(error);
        return;
        }
		
		else if(!error && response.statusCode == 200)
		{
		
		var data = JSON.parse(body);
		
		//console.log(results);	
	    //res.send(results["Search"][0]);
		
		
		res.render("results",{data : data});
		}
	});
	
	
}); 

app.listen(3030,function()
{   
	console.log("Movie app is started !");
}); 
