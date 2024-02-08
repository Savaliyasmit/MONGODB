  // $limit : limit 10 mens first of all documents diplay first 10 documents
db.allbooks.aggregate([{ $limit: 10 }]);

// $project using selected field display
db.allbooks.aggregate([{ $project: { pages: 1, author: 1, _id: 0 } }]);

//$sort all sorts all documents in the spcified sort orders 1 acsending order -1 descending order
db.allbooks.aggregate([{ $sort: { pages: -1 } }]);

// $match use for filters a querys match
db.allbooks.aggregate([
  { $match: { pages: 209 } },
  { $limit: 1 },
  { $sort: { pages: -1 } },
  { $project: { country: 1, language: 1 } },
]);
//$addFields in documents
db.allbooks.aggregate([
  {
    $addFields: { month: "june" },
  },
  {
    $project: { month: 1, _id: 0 },
  },
]);

// $count count a documents filed
db.allbooks.aggregate([
  {
    $match: { pages: 209 },
  },
  {
    $count: "totalpages",
  },
]);

// carts use for this without populate
db.carts.aggregate([
  { $match: { "isDelete": false } },
  {
      $lookup: {
          from: "products",
          localField: "cartItem",
          foreignField: "_id",
          as: "CartItem"
      }
  },
  { $unwind: "$CartItem" },
  {
      $project: {
          "_id": 1,
          "user": 1,
          "CartItem._id": 1,
          "CartItem.productImage": 1,
          "CartItem.price": 1,
          "CartItem.title": 1,
          "quantity": 1,
          "totalAmount": { $multiply: ["$quantity", "$CartItem.price"] },
          
      }
  },
  {
       $group: {
          _id: null,
          totalSum: { $sum: "$totalAmount" },
          cartItems:{$push: "$$ROOT"},
           itemCount: { $sum: 1 } 
      }
  },
  {$project: {"_id":0}}


])


db.reviews.aggregate([
  {$match: {"isDelete":false}},
  {
  $lookup: {
         from: "products",
         localField: "product",
         foreignField: "_id",
         as: "product"
       }
 },{$unwind: "$product"},
 {$project: {"id":1,"user":1,"product._id":1,"product.title":1,"product.price":1,"review":1,"product.productImage":1,"createdAt":1,"updatedAt":1}},
 {$group: { _id: null,reviews:{$push:"$$ROOT"},totalReviews:{$sum:1}}},
 // {$unwind: "$reviews"},
 {$project: {"_id":0}}
])