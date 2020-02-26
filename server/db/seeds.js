use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name:"Gordon",
    email:"gordon@email.com",
    booked_in:true
  },
  {
    name:"John",
    email:"john@johnsite.com",
    booked_in:false
  }
])
