const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const PORT = 8001;

app.get("/api/users", (req, res) => {
    return res.json(users);
});


app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", (err, data) => {
        return res.json({ status: "pending" })
    })


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