var name;
var total = 0;

function Ticket(name, time, age, veteran){
  this.name = name;
  this.time = time;
  this.age = age;
  this.veteran = veteran;
}
Ticket.prototype.ticketPrice = function(){
  var price = 14;
  if (this.time !== "evening") {
    price -= 3;
  }
  if (this.age < 10 || this.age > 55) {
    price -= 3;
  }
  if (this.veteran === "Yes") {
    price -= 3;
  }
  return price;
}
function clearForm(){
  $("input#name").val("");
    $("input#time").val("");
    $("input#age").val("");
    $("input#veteran").val("");
}

function ticketTotal(cost){
  return total += cost;
}


$(function(){
  $(".movie").click(function() {
    name = $(this).val();
    console.log(name);
  });

  $("#ticketForm").submit(function(event){
    event.preventDefault();
    var time = $("#time").val();
    var age = parseInt($("#age").val());
    var veteran = $("#veteran").val();

    var newTicket =
    new Ticket(name, time, age, veteran);
    var cost = newTicket.ticketPrice();
    $('#total').text(ticketTotal(cost));
    $("#cost").prepend("<tr><td>Ticket to " + newTicket.name + "</td><td>$" + cost + "</td></tr>");
    $("#movie").text(newTicket.name);
    $(".hidden").fadeIn(2000);
    clearForm();
  });
  $("#retry").click(function(){
    location.reload();
  });
});
