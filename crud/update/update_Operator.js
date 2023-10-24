//$inc operater is use for increment a value 
db.student.updateMany({firstName : "parth"},{$inc:{rollno:3}})
db.student.updateMany({},{$inc:{rollno:3}})

//$unset use remove field
db.student.updateOne({},{$unset : { rollno:4 } })

//rename filed name rollno to studentRollno:3  
db.student.updateMany({},{$rename : { rollno :"studentRollno" } })   

// update  array opertor 

// 1.addToSet:you not have update duplicate value
db.student.updateOne({_id : ObjectId("6535174edc2d726240025fb8")} , {
    $addToSet: {roll:"no"}
})

// 2.pop : remove first or last element of array 1 Last , -1 first remove

// 1.remove first
db.student.updateOne({_id : ObjectId("6535174edc2d726240025fb8")} , {
    $pop: {roll:-1}
})

// 2.remove last
db.student.updateOne({_id : ObjectId("6535174edc2d726240025fb8")} , {
    $pop: {roll:1}
})

// 3.pull remove any element  match query
db.student.updateOne({_id : ObjectId("6535174edc2d726240025fb8")} , {
    $pull: {roll:"son"}
})

// 4.push add new array 
db.student.updateOne({_id : ObjectId("6535174edc2d726240025fb8")} , {
    $push: {roll:"son"}
})


// add multiple value in array usind addToSet
db.student.updateOne({_id : ObjectId("6535174edc2d726240025fb8")} , {
    $addToSet:{rollno:{$each:["test1","1","2","3"]}}
})