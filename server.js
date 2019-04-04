const   express     = require('express'),
        cors        = require('cors'),
        bodyParser  = require('body-parser'),
        fakeData    = require('./fakeData'),
        xml     = require('xml'),
        path    = require('path');

        app         = express();


        app.use(cors());


        app.get('/', function(req, res, next){
            res.sendFile(__dirname + '/front_app/index.html');
        })

        app.get('/comments', function(req, res, next){
            res.json(fakeData.comments())
        })

        app.get('/comments/:number', function(req, res, next){
            res.json(fakeData.comments(req.params.number))
        })

        app.get('/number', function(req, res, next){
            res.json(fakeData.number())
        })

        app.get('/numbers/:numberofnumbers', function(req, res, next){
            res.json(fakeData.number(req.params.numberofnumbers))
        })

        app.get('/xmlData', function(req, res, next){
            res.contentType('application/xml');
            res.sendFile(path.join(__dirname , 'ExportXML.xml'));
        })

        app.listen(3000, function(){
            console.log('App is listening on port 3000');
        })

