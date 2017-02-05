var http = require("http");

var configuracoes = {
    hostname: "localhost",
    port: 3000,
    path: "/produtos",
    method: "post",
    headers: {
        "Accept":"application/json",
        "Content-type":"application/json"
    }
}

var produto = {
    titulo: "",
    descricao: "Descricao do meu titulo teste",
    preco: 67
}

var client = http.request(configuracoes, function(res){
    console.log(res.statusCode);
    res.on("data", function(body){
        console.log("Corpo: " + body);
    });
});

client.end(JSON.stringify(produto));