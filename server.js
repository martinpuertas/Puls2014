var express = require("express");
var web = express();
var servidor;
servidor = web.listen(8080, function() {
	console.log("Servidor arrancado");
});
web.get("/", function (req, res) {
	res.sendFile("index.html");
});