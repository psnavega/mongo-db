import app from "./src/app.js";

var port = process.env.PORT ||  3000;

app.listen(port,() => {
    console.log(`Escutando porta ${port}`);
});