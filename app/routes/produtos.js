module.exports = function(app){
    app.get("/produtos", function(req, res){
        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);

        ProdutosDAO.lista(function(err, results){
            res.format({
                html: function(){
                    res.render("produtos/lista", {lista: results});
                },
                json: function(){
                    res.json(results);
                }
            });
            
        });

        connection.end();
    });

    app.get("/produtos/form", function(req, res){
        res.render("produtos/form");
    });

    app.post("/produtos", function(req, res){
        var produto = req.body;
        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);

        ProdutosDAO.salva(produto, function(err, results){
            console.log(produto);
            console.log(err);
            res.redirect("/produtos");
        });

        connection.end();
    });
}
