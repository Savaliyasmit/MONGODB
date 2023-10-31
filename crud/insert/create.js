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


// db.createCollection("studentdetails")
db.studentdetails.insertMany([
{    id:"00001", 
     firstName:"smit",
      lastname :"savaliya",
      rollno:1,
      faculty: "raj parkhiya" , 
      studentperformce:"very good"
},
{      id:"00002",
      firsttname :"dhamaliya",
      firstname:"bhavik",
      rollno:2,
      faculty:"milan rajpara",
      studentperformce:"godd"

      
},
{   id:"00003",
firstname:"druv",
  lastname :"savaliya",
   rollno:3,
   faculty:"harsh lathiya",
   studentperformce:"very excellent"
},
{   id:"00004",
   firstname:"parth",
   lastname :"chander",
   rollno:4,
   faculty:"nihar mavani",
   studentperformce:"verybad"
}


])


// faculty details
db.facultydetails.insertMany([{
      id:"00001",
     name:"raj parkhiya",
     age:50,
     subject:"maths",
     batch:"home batch",
     time:"8 to 9",
     salary:25000

},
{
      id:"00002",
      name:"milan rajpara",
      age:25,
      subject:"english",
      batch:"home batch",
      time:"9 to 10",
      salary:8000
},
{
      id:"00003",
      name:"harsh lathiya",
      age:64,
      subject:"state",
      batch:"home batch",
      salary:25000
},
{
      id:"00004",
      name:"nihar mavani",
      age:80,
      subject:"HINDI",
      time:"8 to 9",
      salary:25000
}
])