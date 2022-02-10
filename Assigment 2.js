//use db.zipcodes.find() to filter results to only the results where city is ATLANTA
//and state is GA.
db.zipcodes.find({"city":"ATLANTA","state":"GA"})

//use db.zipcodes.aggregate with $match to do the same as above.
db.zipcodes.aggregate([{$match: {}}, {$group:{city:"ATLANTA",state:"GA"}}])

//use $group to find the total population in Atlanta
 db.zipcodes.aggregate([{$group: {_id:{city:"ATLANTA"}, Total:{$sum:1}}}])


 //POPULATON by STATE
 //use aggregate to calculate the total population for each state
 db.zipcodes.aggregate([{$group: {_id:"$state",Total:{$sum:1}}}])

 //sort the results by population, highest first
db.zipcodes.aggregate([{$group: {_id: "$state",highestpop:{$max:"$pop"}}}])

//limit the results to just the first 3 results. What are the top 3 cities in population?
db.zipcodes.aggregate([{$group: {_id: "$state",highestpop:{$max:"$pop", {$limit:3}}}}])


//Populations by City
//use aggregate to calculate the total population for each city (you have to use city/state combination). You can use a combination for the _id of the $group: {city: '$city', state: '$state' }
 db.zipcodes.aggregate([{$group: {_id:"$city",Total:{$sum:1}}}])

 //sort the results by population, highest first
db.zipcodes.aggregate([{$group: {_id: "$city",highestpop:{$max:"$pop"}}}])

//limit the results to just the first 3 results. What are the top 3 cities in population?
db.zipcodes.aggregate([{$group: {_id: "$city",highestpop:{$max:"$pop", {$limit:3}}}}])

//What are the top 3 cities in population in Texas?
db.zipcodes.aggregate([{$group: {_id:{state:"$Texas"}, highestpop:{$max:"$pop",{cities:"$city"}{$limit:3}}}])


//BONUS
//Write a query to get the average city population for each state.
db.zipcodes.aggregate([{$group:{_id:"$city" avgpop:{$avg:"pop"}}}])

//What are the top 3 states in terms of average city population?
db.zipcodes.aggregate([{$group:{_id:"$city" avgpop:{$avg:"pop"},{highestpop:{$max:"$avg"},{$limit:3}}}}])