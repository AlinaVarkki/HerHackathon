require('dotenv').config();
const { Connection, Request } = require("tedious");
const express = require('express');
const formidable = require('express-formidable');

const mysql = require('mysql');
const app = express();

app.use(formidable());

app.listen(3001, function(){
    console.log('yay server running on port 3001');
})

// Create connection to database
const config = {
    authentication: {
        options: {
            userName: "herhackathon", // update me
            password: process.env.password // update me
        },
        type: "default"
    },
    server: process.env.server, // update me
    options: {
        database: process.env.database, //update me
        encrypt: true
    }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
    if (err) {
        console.error(err.message);
    } else {
        queryDatabase();
    }
});

connection.connect();

function queryDatabase() {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(
        `SELECT * FROM [dbo].[Activities]  WHERE ActivityName LIKE ('Cycling')`,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
        }
    );

    request.on("row", columns => {
        columns.forEach(column => {
            console.log(column.value);
        });
    });

    connection.execSql(request);
}

app.post('/getActivities', (req, res) => {
    console.log('received request');
    let count;
    let activities = []

    const request = new Request(
        `SELECT * FROM [dbo].[Activities] `,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
                count = rowCount;
            }
        }
    );

    request.on("row", columns => {
        columns.forEach(column => {
            // console.log("%s\t%s", column.metadata.colName, column.value);
            // console.log(column.value)
            activities.push(column.value);
            // res.send(column.value);
        });
    });

    request.on("requestCompleted", () => {
        console.log("here");
        console.log(activities);
        res.send(activities);
    })

    connection.execSql(request);
})
