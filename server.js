console.log("week3");
const exp = require("express")
const app =exp();

app.get("/",function(req,res){
    res.send("home page")

});
app.get("/about_us",function(){
    res.send("about us page")

});
app.post("/login",function(req,res){
    res.send("get:")

});
var port = process.env.PORT || 8000;

app.listen(port);