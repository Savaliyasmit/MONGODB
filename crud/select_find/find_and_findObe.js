
// 2. find and find one use for retrive infromation
db.student.find()
db.student.findOne()

db.student.find({firstName:"smit" ,Lastname:"savaliya"})
db.student.find({firstName:"smit" ,Lastname:"savaliya"})

// find fist object have
db.student.findOne({firstName:"smit" ,Lastname:"savaliya"})

//acess nested object
db.student.find({"address.state": "amreli"})

// acess object filed array 
db.student.find({ "studentRole": "supervisor" })


