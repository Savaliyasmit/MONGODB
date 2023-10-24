//fillterfunction

// 1.count   how many documents
db.student.find().count()

//2.skip  a two document skip after all display
db.student.find().skip(3)

//3.limit   limit yse display document 1 ,3
db.student.find().limit(1)

db.student.find().skip(2).limit(1)
// output :-dhruv savaliya

// 4.skip   1 mens sort and -1 mens descrnding order
db.student.find().sort({rollno:1})
db.student.find().sort({rollno:-1})


