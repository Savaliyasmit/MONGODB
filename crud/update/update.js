// update sepcify field
db.student.updateOne({firstName:"parth"} , {
    $set : {rollno:5}
})

// update many update all fileds 
db.student.updateMany({firstName:"smit", },{
    $set : {studentUniform:false}
})

//update many 
db.student.updateMany({firstName:"thirth"},{
         $set : {studentUniform:true}
})




