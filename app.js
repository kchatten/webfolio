// IMPORT MODULES / MIDDLEWARE
const express = require(`express`);
const hhRouter = require('./routes/hhRouter')

// CREATE EXPRESS APPLICATION
const app = express();

app.set('view engine', 'ejs')

// DEFINE PORT
const port = 3000;

// MIDDLEWARE
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use('/habitheroes', hhRouter);

// APP GETS
app.get("/", (req, res) => {
    res.render('index.ejs'); 
})
// CLEAN UP
app.listen(port, () => {
        console.log(`Server is running on ${port}`);
})
