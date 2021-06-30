var http = require('http');
var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('<h1>LostElectus Sistem Aktif <a href="https://discord.gg/sX4PzVAbxx"> Discord <a></h1>');
});
server.listen(4310);