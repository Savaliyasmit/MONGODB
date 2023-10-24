/* 
crete database
syntax:-use db_name
use first


create collection
syntax:-db.createCollection("name")
db.createCollection("student")

show database collection
show collections 

jump another database
use local

*/

// student
// insertOne and insertMany
//
db.student.insertOne({
      firstName:"smit",
      Lastname :"savaliya",
      rollno:1,
      studentUniform:false

})

db.student.insertOne({
    firstName:"bhavik",
    Lastname :"dhamaliya",
    rollno:2,
    studentUniform:false,

})

// insertMany
db.student.insertMany([{
    firstName:"druv",
      Lastname :"savaliya",
      rollno:3,
      studentUniform:true,
      address:{
            state:"gujarat",
            city:"surat",
            pincode:1032033

      }


},
{
    firstName:"parth",
      Lastname :"chander",
      rollno:4,
      studentUniform:false,
      address:{
            state:"amreli",
            city:"randhiya",
            pincode:3482824

      }

},

])

db.student.insertOne(
{
      firstName:"thirth",
      LastName :"savani",
      rollNo:1,
      studentUniform:false,
      studentRole:["supervisor"]

}
)


db.student.insertOne({
      firstName:"delete",
       LastName:"delete",
       rollNo:6
})
db.student.insertOne({
      firstName:"delete",
       LastName:"delete",
       rollNo:6
})

db.student.insertOne({
   
      firstName:"you",
      lastName:"why",
      roll:["teacher" , "student" , "son" , "father"]
})