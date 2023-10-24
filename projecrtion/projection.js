
// using display spcified field like email and username
// 1 mens yes this field  and 0 mens not this firld display
db.users.find({},{username:1,email:1,_id:0 })
  