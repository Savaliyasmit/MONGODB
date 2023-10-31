// $unwind :"$fieldnme to remove array convert object"
// exp $unwind:"$fieldname"

db.studentdetails.aggregate([
    {
    $lookup: {
           from: "facultydetails",
           localField: "faculty",
           foreignField:"name",
           as: "faculatys"
         }
}])

// first lookup
// project
// group
// max , min

db.studentdetails.aggregate([
    {
    $lookup: {
           from: "facultydetails",
           localField: "faculty",
           foreignField:"name",
           as: "faculatys"
         }
    },
    {
    $project: {
        "firstname":1,
        "lastname":1,
        "rollno":1,
        "faculatys.salary":1
        
    }
    },
    {
        $group: { _id: {salary: "$faculatys.salary"},
            details:{$push: {lastname: "$lastname", firstname: "$firstname"}},
            maxSalary: {$max: "$faculatys.salary"}
        }
    }
    
])



db.studentdetails.aggregate([
    {
    $lookup: {
           from: "facultydetails",
           localField: "faculty",
           foreignField:"name",
           as: "faculatys"
         }
    },
    {
        $unwind:{$faculatys}
    },
    {
    $project: {
        // "firstname":1,
        // "lastname":1,
        // "rollno":1,
        // "faculatys.salary":1
        "faculatys.age":1
    }
    },
    {$match: {"faculatys.age":{$gt:22}}},
    {
        $group: { _id: {age: "$faculatys.age"},
           
           
        }
    }
    
])

