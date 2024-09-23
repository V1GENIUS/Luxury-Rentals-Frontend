var http = require('http');
var data = [
    {name : 'vivek' , age : '21'},
    { name : 'pratima' , age :'23' },
    {name : 'darling' , age : '25'}
    
]
http.createServer(function(req , res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();

}).listen(7200)

