var request = require('request');

export default function getproductsCB() {
 return new Promise(function(resolve, reject) {
  request({
     method:'POST',
     url:'https://backend1-a08788.appdrag.site/api/getproducts', 
     form: {"AD_PageNbr" : "1","AD_PageSize" : "500"}
  }, function(err,httpResponse,body) {
    if ( err != null ) {
     resolve(err);
    }
    else {
     resolve(body);
    }
  });
 });
}
