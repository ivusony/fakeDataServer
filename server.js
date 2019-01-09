const   express     = require('express'),
        cors        = require('cors'),
        bodyParser  = require('body-parser'),
        fakeData    = require('./fakeData'),

        app         = express();


        app.use(cors());


        app.get('/', function(req, res, next){
            res.sendFile(__dirname + '/index.html');
        })

        app.get('/comments', function(req, res, next){
            res.json(fakeData.comments(10))
        })



        app.listen(3000, function(){
            console.log('App is listening on port 3000');
        })

