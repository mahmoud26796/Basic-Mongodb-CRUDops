const { MongoClient, MongoDBNamespace } = require('mongodb');
const { mongo } = require('mongoose');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'proj-1';

const client = new MongoClient(connectionUrl);

client.connect((err) => {
  if (err) {
    console.log('connection failed');
  }

  console.log('every thing worked zai el foll');

  const db = client.db(dbName);

  db.collection('Users').insertOne({
    name: 'Mahmoud',
    age: 28
  }, (err, data) => {
    if (err) {
      console.log('Failed Inserting Data To DB');
    }
    console.log(data.insertedId);
  });

  db.collection('Users').insertMany(
    [
      {
        name: 'Muhammed',
        age: 25
      },
      {
        name: 'Osama',
        age: 27
      },
      {
        name: 'Tamer',
        age: 22
      },
      {
        name: 'Yasser',
        age: 24
      },
      {
        name: 'Gasser',
        age: 21
      },
      {
        name: 'Sami',
        age: 28
      },
      {
        name: 'Rami',
        age: 28
      },
      {
        name: 'Kami',
        age: 28
      },
    ],
    (err, data) => {
      if (err) {
        console.log('Failed Inserting Data To DB');
      }
      console.log(data.insertedCount);

    });



  db.collection('Users').find({ age: 28 }).limit(2).toArray((err, data) => {
    if (err) {
      console.log(err);

    }
    console.log(data);

  })



  db.collection('Users').updateMany({}, {
    $inc: { age: 10 }
  })
    .then(data => console.log(data.modifiedCount))
    .catch(e => console.log(e));

  const id = new mongo.ObjectId('66b6ae8620f006babc82d970');
  db.collection('Users').deleteOne({ _id: id })
    .then(data => console.log(data.deletedCount)
    )
    .catch(e => console.log(e)
    )

  db.collection('Users').deleteMany({})
    .then(data => console.log(data.deletedCount)
    )
    .catch(e => console.log(e)
    )
});

