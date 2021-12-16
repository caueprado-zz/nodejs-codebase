var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ping', function(req, res, next) {
  res.send('<p>pong</p>')
});

router.get('/client', (req, res, next) => {
  const soapClient = require('../soapClient');
  const result = soapClient.add()
  console.log("result" + result)
  res.send('<p>Add: </p>' + result)
});

router.get('/display', (req, res, next) => {
  const soapClient = require('../soapClient');
  const result = soapClient.latLonListCityNamesRequest()
  console.log("result" + result)
  res.send('<p>Add: </p>' + result)
});

router.post('/', (req, res, next) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    const s3Client = require('../s3Client');  
    const url = await s3Client.uploadFile(files.filetoupload.originalFilename, files.filetoupload.filepath);
    res.send(`File uploaded at ${url}`);
  });
});

router.post('/', (req, res, next) => {
  const formidable = require('formidable');
  const form = new formidable.IncomingForm();

});

module.exports = router;
