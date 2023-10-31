import express from "express";
import { json } from "body-parser"

const app = express()
const port = 3000
app.use(json)

app.get('/api/users/getCurrentUser', (req, res) => {
    res.send("its working!!!")
})

app.listen(port, () => console.log(`listening on port ${port}!!!!!!`))