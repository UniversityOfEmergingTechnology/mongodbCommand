
// show dbs - will show all databases

// CRUD OPERATIONS

// To insert a single document, we use 
// db.collection.insertOne()

// to insert mutiple documents
// db.newCollection.insertMany([
//     {
//        title: "Jurassic World: Fallen Kingdom",
//        genres: [ "Action", "Sci-Fi" ],
//        runtime: 130,
//        rated: "PG-13",
//        year: 2018,
//        directors: [ "J. A. Bayona" ],
//        cast: [ "Chris Pratt", "Bryce Dallas Howard", "Rafe Spall" ],
//        type: "movie"
//      },
//      {
//        title: "Tag",
//        genres: [ "Comedy", "Action" ],
//        runtime: 105,
//        rated: "R",
//        year: 2018,
//        directors: [ "Jeff Tomsic" ],
//        cast: [ "Annabelle Wallis", "Jeremy Renner", "Jon Hamm" ],
//        type: "movie"
//      }
//  ])


// query all documents

// db.newCollection.find()
// db.newCollection.find({rated: "PG-13"})

// special operators
// db.newCollection.find({cast : {$in : ["Chris Pratt" , "Jon Hamm"]}})
// db.newCollection.find({$or : [{runtime : 130} , {genres : "Action"}]})

// we need only one document
// db.newCollection.findOne({type : "movie"})




// update the document
// db.newCollection.updateOne({rated : "PG-13"} , {$set : {rated: "Mudit"}})

// db.newCollection.updateMany(
//     { type: "movie" },
//     {
//       $set: {
//         type : "mudit-movies"
//       },
//       $currentDate: {
//         lastUpdated: true
//       }
//     }
//   )


// replace the document
// db.newCollection.replaceOne({_id : ObjectId('64859731293a74a46079a1b1')} , {name : "Mudit" , description : "This is updated document pal"})


// delete the document
// db.newCollection.deleteOne({cast : "Jon Hamm"})
// db.newCollection.deleteMany({type : "mudit-movies"})

// sort the document
// db.movies.find().skip(1)
// db.movies.find().limit(1)
// db.movies.find().sort({runtime : -1}) descending order
// db.movies.find().sort({runtime : 1}) ascending order



// agregation pipeline
// db.books.insertMany([
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Novel" },
//     { title: "Moby Dick", author: "Herman Melville", year: 1851, genre: "Novel" },
//     { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
//     { title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Dystopian" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Southern Gothic" },
//     { title: "Animal Farm", author: "George Orwell", year: 1945, genre: "Political Satire" }
//   ])
//  db.books.aggregate([
//     { 
//       $group: {
//         _id: "$genre", 
//         count: { $sum: 1 }
//       }
//     }
//   ])  

//   db.books.aggregate([
//     { 
//       $group: {
//         _id: "$genre", 
//         count: { $sum: 1 }
//       }
//     },
//     {
//         $sort: {
//             count : -1
//         }
//     }
//   ])  