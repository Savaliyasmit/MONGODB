// and logical   when use two condition satisfy then find
db.allbooks.find({$and:[{pages:{$lte :276}},{country:{$eq : "India"}}]})

// or  when use multiple conditon true
db.allbooks.find({$or:[{pages:{$eq:500}},{country:{$eq:"India"}}]})

// nor    all conditon false
db.allbooks.find({$nor:[{pages:{$lt:500}},{country:{$eq:"India"}}]})

// not true false ,false true 500 graterthan  
db.allbooks.find({pages:{$not:{$gt:500}}})

// complex query
db.allbooks.find({$and:[{pages:{$not:{$gt:500}}},{country:{$eq:"India"}}]})
  
// short query  of complex
db.allbooks.find({$and:[{pages:{$lt:500}},{country:{$eq:"India"}}]})