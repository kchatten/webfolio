// IMPORT MODULES
const express = require(`express`);
const mariadb = require(`mariadb`);

const authRoutes = require(`./routes/authRoutes`);


// CREATE EXPRESS APPLICATION
const app = express();

// MIDDLEWARE

app.use(express.urlencoded({extended : true}));
app.use(express.json());

// MOUNTS

app.use(`/auth`, authRoutes); // Mount authRoutes module to /auth path

// MARIADB POOL

const pool = mariadb.createPool({
    host: 'localhost',
    port: '3306',
    user: 'Owner',
    password: 'aMf5@r705',
    database: 'gameproj'
  });

// APP SETS

app.set("view engine", "ejs")

app.set(`views`, `public/views`)

// APP GETS

app.get("/", (req, res) => {
    res.render(`index.ejs`); 
})

app.get("/user", async (req,res) =>{
    try{
    res.render(`user.ejs`);
    } catch (error){
        res.status(500).send('Internal Service Error');
    }
})


// DEFINE PORT

const port = 3000;

app.listen(port, () => {
        console.log(`Server is running on ${port}`);
})

