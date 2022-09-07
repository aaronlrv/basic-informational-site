let fs = require("fs");
let http = require("http");

http
  .createServer(function (request, response) {
    console.log(request.url);
    response.writeHead(200, { "Content-Type": "text/html" });

    if (request.url === "/") {
      var file = fs.createReadStream("index.html");
      file.pipe(response);
      return;
    }

    if (request.url === "/about-me") {
      var file = fs.createReadStream("about-me.html");
      file.pipe(response);
      return;
    }

    if (request.url === "/contact") {
      var file = fs.createReadStream("contact.html");
      file.pipe(response);
      return;
    }
  })
  .listen(8080);

console.log("listening on port 8080...");

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// });
