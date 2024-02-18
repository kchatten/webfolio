// IMPORT MODULES
const express = require(`express`);

// CREATE EXPRESS APPLICATION
const app = express();

// DEFINE PORT
const port = 3000;

// MIDDLEWARE
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// APP SETS
app.set("view engine", "ejs")

app.set(`views`, `public`)

// APP GETS
app.get("/", (req, res) => {
    res.render(`index.ejs`); 
})

app.get("page2", (req, res) => {
    res.render(`.ejs`); 
})


// CLEAN UP
app.listen(port, () => {
        console.log(`Server is running on ${port}`);
})

