var express = require('express');
var request = require('request');
var port = 8080;
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/yahooContacts',function(req,res){
	request({
        method: 'GET',
        url: 'https://social.yahooapis.com/v1/user/me/contacts;name.contains='+req.query.search,
        qs:{
        	format:'json'
        },
        json:true,
        headers: {
            'Authorization': 'Bearer '+req.query.access_token
        }
    },function(error,response,body){
		res.json(body);
    })
})


app.listen(port,function () {
	console.log('\n');
	console.log('running on  http://localhost:' + port);
	console.log('\n');
});