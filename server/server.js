const path = require("path");
const fs = require("fs");
const request = require("request");
const dataPath = path.join(__dirname, '../chirps.json');
const rDataPath = path.join(__dirname, '../popular-articles.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err);
    console.log(err);

    let dataArr = [];

    JSON.parse(body).data.children.forEach(item => {
        

        let dataArrStr = JSON.stringify(dataArr)
        fs.writeFileSync(rDataPath, dataArrStr, err => {
            if (err) console.log(err);

        })
    });
})



    // fs.readFile(dataPath, {
    //     encoding: "utf-8"
    // }, (err, data) => {
    //     let chirp = JSON.parse(data);
    //     console.log(chirp);

    // })