db.allbooks.aggregate([
  {
    $group: {
      _id: { pages: "$pages" },
      author: { $push: "$author" },
    },
  },
]);

// you have use group multiple field
db.allbooks.aggregate([
  {
    $group: {
      _id: { year: "$year", title: "$pages" },
      title: { $push: "$title" },
      author: { $push: "$author" },
      country: { $push: "$country" },
    },
  },
]);

//
db.allbooks.aggregate([
  { $match: { year: { $gt: 1990 } } },
  {
    $group: {
      _id: { year: "$year", coun: "$country" },
      //   title:{$push:"$title"},
      //  author:{$push:"$author"},
      //  country:{$push:"$country"}
      language: { $push: "$language" },
    },
  },
]);

db.users.aggregate([
  { $match: { "address.city": { $eq: "Lebsackbury" } } },
  {
    $group: {
      _id: { name: "$name" },
      city: { $push: "$address.city" },
    },
  },
]);

// sum,count,avg,min,max,first,last thus is groupquery
db.studentdetails.aggregate([
  {
    $lookup: {
      from: "facultydetails",
      localField: "faculty",
      foreignField: "name",
      as: "faculatys",
    },
  },
  {
    $unwind: "$faculatys",
  },
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$faculatys.salary" },
      avgSalary: { $avg: "$faculatys.salary" },
      Salarymin: { $min: "$faculatys.salary" },
      salarymax: { $max: "$faculatys.salary" },
      firstnameof: { $first: "$faculatys.salary" },
      lastnameof: { $last: "$faculatys.salary" },
    },
  },
]);

// 
db.books.aggregate([
  {
    $group: {
      _id: { author: "$author" },
      bookDetails: {
        $push: { country: "$country", title: "$title", pages: "$pages" },
      },
    },
  },
]);

// you called entre document in group by
db.books.aggregate([
  {
    $group: {
      _id: { author: "$author" },
      books: { $push: "$$ROOT" },
    },
  },
]);
