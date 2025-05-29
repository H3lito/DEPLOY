express= require('express');

const app = new express();

const PORT=3000;

app.get("/nomes", async (req, res) => {
    res.json([{"nome": "Eva"}, {"nome": "Adão"}]);
}
);

app.listen(PORT, () => {
    console.log("Servidor na porta " + PORT);
});