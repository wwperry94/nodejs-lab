const path = require("path");
const fs = require("fs");
const request = require("request");

request('https://reddit.com/r/popular.json', (err, res, body) => {

    let parsed = JSON.parse(body);
    parsed.data.children.forEach(item => {
        let dataType = path.extname(item.data.url);

        if (err) {
            console.log(err);

        } else if (dataType === '.jpg' || dataType === '.gif' || dataType === '.png') {

            request(item.data.url).pipe(fs.createWriteStream(`./downloads/${item.data.id}${dataType}`))


        }
    })
})