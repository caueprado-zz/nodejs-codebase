const soap = require('soap');
//index.js
function createClient() {
    var url = 'http://www.gcomputer.net/webservices/dilbert.asmx?wsdl';

    soap.createClient(url, function(err, client) {
        if(err) return console.log(err);
        console.log(client);
    });
}

async function add() {
    var url = 'http://www.dneonline.com/calculator.asmx?wsdl';
    return soap.createClient(url, function(err, client) {
        client.Add({ intA: 2019, intB: 2 }, function(err, result) {
            if(err) return console.log(err);
            return result;
        });
    });
}


function latLonListCityNamesRequest() {
    var url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php?wsdl';
    return soap.createClient(url, function(err, client) {
        client.LatLonListCityNames({ displayLevel: 2 }, function(err, result) {
            if(err) return console.log(err);
            return result;
        });
    });
}



module.exports = { createClient, add, latLonListCityNamesRequest }