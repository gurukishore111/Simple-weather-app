const http = require("http");

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=TamilNadu&appid=c938d067ade1d4bcd0a71e8ca78cce03";

let server = http.createServer((request, response) => {
  let Request = require("request");
  Request(url, (err, res, body) => {
    var data = JSON.parse(body);
    response.write("<html><body><div id ='container'>");
    response.write("<h1>" + "Live Weather App" + "</br>" + "</h1>");
    response.write(
      "<h2>" + "City name:---->" + data["name"] + "</br>" + "</h2>"
    );
    response.write(
      "<h2>" + "Temperture:---->" + data.main["temp"] + "</br>" + "</h2>"
    );
    response.write(
      "<h2>" + "Humidity:---->" + data.main["humidity"] + "</br>" + "</h2>"
    );
    response.write(
      "<h2>" + "Sea Level:---->" + data.main["sea_level"] + "</br>" + "</h2>"
    );
    response.write(
      "<h2>" + "Feels Like:---->" + data.main["feels_like"] + "</br>" + "</h2>"
    );

    response.write("</div></body></html?");
  });
});

server.listen(9000);

console.log("Listening port ...........9000");
