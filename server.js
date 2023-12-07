const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here


const http = require("http");
const PORT = 5000;
server = http.createServer((req, res) => {

    console.log(req.method, req.url);

    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data;
    });

    req.on('end', () => {
        if (reqBody){
            req.body = parseBody(reqBody);
        }
        sendFormPage(req, res);
    });

});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
