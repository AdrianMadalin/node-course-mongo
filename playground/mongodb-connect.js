// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let url = 'mongodb://localhost:27017/todos';

// Connect using MongoClient
MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log(`Unable to connect to dbs`);
        return;
    }
    ;
    //
    // db.collection('Todos').insertOne({
    //     text: 'Buy food',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(`Unable to add to dbs`);
    //     }
    //     console.log(JSON.stringify(result.ops));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Adi',
    //     age: 31,
    //     location: 'Bucharest'
    // },(err,res)=>{
    //     if (err) {
    //         return console.log(`Unable to add to dbs`);
    //     }
    //     console.log(JSON.stringify(res.ops));
    // });
    //
    // db.addUser('adi','pass').then((res)=>{
    //     console.log(res);
    // });

    // db.collection('Todos').find({_id: ObjectID('5a54ae43853887148844831f')}).toArray().then((docs)=>{
    //     if (err) {
    //         return console.log(`Unable to add to dbs`);
    //     }
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });

    let users = [
        {
            name: 'Adi',
            age: 31,
            location: 'Bucharest'
        },
        {
            name: 'Radu',
            age: 30,
            location: 'Bucharest'
        },
        {
            name: 'Cristi',
            age: 40,
            location: 'Bucharest'
        }
    ];

    db.collection('Users').find({name: 'Adi'}).count().then((count) => {
        if (err) {
            return console.log(`Unable to add to dbs`);
        }
        console.log(`Todo count ${count}`);
    });

    db.collection('Users').find({name: 'Adi'}).toArray().then((docs) => {
        if (err) {
            return console.log(`Unable to add to dbs`);
        }
        console.log(`${JSON.stringify(docs, undefined, 2)}`);
    });
/*
    db.collection('Users').insertMany(users).then((res) => {
        console.log(res);

    });
*/
    db.close();
});


