var http = require('http')

http.createServer(function(req, res){
    res.write("welcome back!")
    res.end()
}).listen(8080)