const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Use this line of code to access form data from html files.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    console.log(`${__dirname}/index.html`)
    res.sendFile(`${__dirname}/index.html`)
})

app.post("/", (req, res) => {
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send(`${num1} + ${num2} = ${result}.`)
})

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(`${__dirname}/bmiCalculator.html`);
})

app.post("/bmiCalculator", (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = Math.round(weight / Math.pow(height, 2), 2);

    res.send(`Your BMI is ${bmi}`);
})

app.listen(3000, () => {
    console.log("server running on port 3000");
})