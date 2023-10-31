// $limit : limit 10 mens first of all documents diplay first 10 documents
db.allbooks.aggregate([{$limit: 10 }])

// $project using selected field display 
db.allbooks.aggregate([{$project:{pages:1 , author:1 , _id:0 }}])

//$sort all sorts all documents in the spcified sort orders 1 acsending order -1 descending order
db.allbooks.aggregate([{$sort: {pages:-1}}])

// $match use for filters a querys match
db.allbooks.aggregate([{$match: {pages:209}},
    {$limit: 1},
    {$sort:{pages:-1}},
    {$project: {country:1,language:1}}
    ])
//$addFields in documents
db.allbooks.aggregate([{
    $addFields: {month:"june"}
},
{
    $project: {month:1 , _id:0}
}
])

// $count count a documents filed
db.allbooks.aggregate([{
    $match: {pages : 209}
},
{
$count:"totalpages"
}
])