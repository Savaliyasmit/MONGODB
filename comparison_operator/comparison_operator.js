// there are all use only value

// you set like range
db.allbooks.find({pages:{$gt:500 ,$lt: 800}})

// eq mens qual operator
db.allbooks.find({pages:{$eq:209}})

// neq manes not eqal operator
db.allbooks.find({pages:{$ne:209}})

//gt mens graterthan value
db.allbooks.find({pages:{$gt:1000}})

// gte mens graterthan euqal value
db.allbooks.find({pages:{$gte: 928}})
   
// lt lessthan value
db.allbooks.find({pages:{$lt: 100}})

//lte less than qual 
db.allbooks.find({pages:{$lte: 88}})

// in operator like work array ti find
db.allbooks.find({year:{$in: [1952,1351]}})

// nin mens not in 
db.allbooks.find({pages:{$nin:[88,209]}})


