const express = require('express')
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const { host, port, db, authApiUrl } = require('./config')

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cors());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server started on port = ${port}`);
    console.log(`On host ${host}`);
    console.log(`Our database ${db}`);
})

app.get('/test', (req,res) => {
    res.send('Our api server is working correctly');
});
