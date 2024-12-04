const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const PORT = 8001;

app.get("/api/users", (req, res) => {
    return res.json(users);
});

//dynamic id 
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

//By default browser can only use get request ,To use patch and delete we use postman
app.patch("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" })
})


app.delete("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" })
})


app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`)
});