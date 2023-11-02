import express from "express";

const app = express();
const port = 3000;

app.use(express.json()); // Use built-in JSON middleware

app.get('/api/users/getCurrentUser', (req, res) => {
    res.send("It's working!!!");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
