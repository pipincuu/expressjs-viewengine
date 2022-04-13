const express = require("express");

const app = express()
const port = 8080;

const people = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs')

app.get("/", (request, response) => {
    response.render("index");
});

app.get("/registration", (request, response) => {
    response.render("register");
})

app.post("/registration", (request, response) => {
    const namadepan = request.body.namadepan;
    const namabelakang = request.body.namabelakang;
    const email = request.body.email;
    const password = request.body.password;

    people.push({
        namadepan, 
        namabelakang,
        email,
        password,
    });

    console.log(people);

    response.redirect("/view-usertable");
});

app.get("/view-user", (request, response) => {
    response.json(people);
});

app.get("/view-usertable", (request, response) => {
    response.render("hasil-register", {
        people,
    });
});

app.listen(port, () => {
    console.log(`Working on http://localhost:${port}`);
})