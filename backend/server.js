express = require('express');
const cors = require('cors');

const app = new express();
app.use(cors());

const PORT=3000;

app.get("/nomes", async (req, res) => {
    res.json([{"nome": "Eva"}, {"nome": "Adão"}]);
}
);

app.listen(PORT, () => {
    console.log("Servidor na porta " + PORT);
});