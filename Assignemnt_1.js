//get all documents
db.Movies.find({})
//get all documents with writer set to "Quentin Tarantino"
db.Movies.find({Writer:"Quentin Tarantino"})
//get all documents where actors include "Brad Pitt"
db.Movies.find({actors:"Brad Pitt"})
// get all documents with franchise set to "The Hobbit"
db.Movies.find({franchise:"The Hobbit"})
//get all movies released in the 90
db.Movies.find({year: {$lt:2000}})
//get all movies released before the year 2000 or after 2010
db.Movies.find({year: {$lt:2000},year:{$gt:2010}})



//add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of 
//dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
db.Movies.updateOne({title:"The Hobbit: The Desolation of smaug"},{$set: {Synopsis:"The dwarves,along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring"}})
//add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim 
//Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring
db.Movies.updateOne({title:"The Hobbit: An Unexpected Journey"},{$set: {Synopsis:"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
//add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.Movies.updateOne({actors:"Pulp Fiction"},{$set: {actors:"Samuel L. Jackson"}})



//find all movies that have a synopsis that contains the word "Bilbo"
 db.Movies.find({synopsis: {$in:["Bilbo"]}})
 //find all movies that have a synopsis that contains the word "Gandalf"
 db.Movies.find({synopsis: {$in:["Gandalf"]}})
//find all movies that have a synopsis that contains the word "dwarves" 
 db.Movies.createIndex({synopsis:"text"})
 db.Movies.find({$text:{$search:"dwarves"}})
 //find all movies that have a synopsis that contains the word "gold" and "dragon'
  db.Movies.createIndex({synopsis:"text"})
  db.Movies.find({$text:{$search:["gold","dragon"]}})


//delete the movie "Pee Wee Herman's Big Adventure"
db.Movies.remove({title:"Pee Wee Herman's Big Adventure"})
//delete the movie "Avatar"
db.Movies.remove({title:"Avatar"})


//find all users
db.users.find({})
//find all posts
db.posts.find({})
//find all posts that was authored by "GoodGuyGreg"
db.posts.find({username:"GoodGuyGreg"})
//find all posts that was authored by "ScumbagSteve"
db.posts.find({username:"ScumbagSteve"})
//find all comments
db.comments.find({})
//find all comments that was authored by "GoodGuyGreg"
db.comments.find({username:"GoodGuyGreg"})
//find all comments that was authored by "ScumbagSteve"
db.comments.find({username:"ScumbagSteve"})
//find all comments belonging to the post "Reports a bug in your code"
db.comments.createIndex({post:"text"})
db.comments.find({$text:{$search:["Reports a bug in your code"]}})


