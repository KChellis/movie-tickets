function Ticket(name, time, age, veteran){
  this.name=name;
  this.time=time;
  this.age=age;
  this.veteran=veteran;
}
Ticket.prototype.ticketPrice= function(){
  var price = 14;
  if (this.time !== "evening") {
    price -= 3;
  }
  if (this.age<10 || this.age>55) {
    price -= 3;
  }
  if (this.veteran) {
    price -= 3;
  }
  return "$" + price;
}
