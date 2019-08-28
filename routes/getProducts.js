var express = require("express");
var request = require('request');

var router = express.Router();

router.get("/", function(req, res, next) {


    var products = ['mpm00002409494','2000374310697P','2000374590785','2000374667913P','2000374782241P','MPM00002893384','2000374667920P','2000369724928P','2000372456991P','2000374166539P','2000361562092P','2000362599233','2000366140776P','2000344308730P','MPM00002283928','2000332711597P','2000358604842P','2000371627057P','2000363509187P','2000366225442P','2000371861437P','2000374999151P','2000372650320P','2000374759274P','2000361925590P','2000374103466P','MPM00000196201','MPM00000105850','MPM00003519332','MPM00003428714','MPM00000306769','MPM00000847454']


    return new Promise((resolve, reject) => {
        var url="https://simple.ripley.cl/api/v2/products?partNumbers="
        for(let a=0; a<products.length; a++){
            url += products[a]+",";
        }
        url+='&format=json'
        console.log(url)

            var headers = { 'User-Agent':       'Super Agent/0.0.1','Content-Type':     'application/x-www-form-urlencoded' }
            var options = { url     : url, method  : 'GET', jar : true, headers : headers }
            request(options,  (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    resolve(body);
                }else{
                    reject(error);
                }
            });        
    }).then(response => { res.json(response)});
});

module.exports = router;