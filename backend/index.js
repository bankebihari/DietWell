const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 2000; //dynamically choosing the port if our .env port is busy then by default aur backend choose 2000 port by default
app.use(express.json());

app.use(cookieParser());
// for parsing and converting data to json format
const cors = require("cors"); // cors is user to communicating between frontend and backend bassically used for cross origin communication like our frontend is running on port no 3000 and backend is running on 2000 port no then cors is used to communicate
const allowedOrigins = [
  'https://deployment-1-99ih.onrender.com',
  'https://deployment-rsku.onrender.com',
  'http://localhost:3000', // Uncomment for local dev if needed
];

const corsOptions = {
  origin: function (origin, callback) {
    // Check if origin is in the allowed list or if there is no origin (like in server-to-server requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);  // Allow the request
    } else {
      callback(new Error('CORS policy violation: Origin not allowed'));  // Restrict access
    }
  },
  credentials: true,  // Allow cookies and credentials
};

app.use(cors(corsOptions));


app.use(cors(corsOptions));
// app.use(cors());//same as above
//nondegit 
const dbConnect = require("./config/database"); //importing function which we created to connect database

dbConnect(); //calling the function to connect database

const route = require("./routes/routes"); // importing the route
app.use(route); //mounting our route to our app

app.listen(PORT, () => {
  
  console.log(`server started at ${PORT}`);
}); // starting our development server of backend
