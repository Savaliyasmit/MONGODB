// delete spcify row 
db.student.deleteOne({rollNo:6})

// delete a whole document field
 db.student.deleteMany({rollNo})