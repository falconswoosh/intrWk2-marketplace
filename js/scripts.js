// Business (or back-end) logic:

//var add = function(number1, number2) {
//  return number1 + number2;
//};

//var subtract = function(number3, number4) {
  //return number3 - number4;
//};

//var multiply = function(number5, number6) {
//  return number5 * number6;
//};

//var divide = function(number7, number8) {
//  return number7/ number8;
//};


//User interface (or front-end) logic

  //$("form#add").submit(function(event) {
  //    event.preventDefault();
  //    var number1 = parseInt($("#add1").val());
  //    var number2 = parseInt($("#add2").val());
  //    var result = add(number1, number2);
  //    $("#output").text(result);
  //  });
  //$("form#subtract").submit(function(event) {
  //    event.preventDefault();
  //    var number3 = parseInt($("#subtract1").val());
  //    var number4 = parseInt($("#subtract2").val());
  //    var result = subtract(number3, number4);
  //    $("#output").text(result);
  //  });
  //$("form#multiply").submit(function(event) {
  //    event.preventDefault();
  //    var number5 = parseInt($("#multiply1").val());
  //    var number6 = parseInt($("#multiply2").val());
  //    var result = multiply(number5, number6);
  //    $("#output").text(result);
  //    });
  //$("form#divide").submit(function(event) {
//    event.preventDefault();
//    var number7 = parseInt($("#divide1").val());
//    var number8 = parseInt($("#divide2").val());
//    var result = divide(number7, number8);
//    $("#output").text(result);
//    });

$(document).ready(function() {
  $("button#receipt").click(function() {
    $(radio).removeClass();
      });
var beverage = $("#beverage").val();
var flavor = $("input:radio[name=flavor]:checked").val();

$("form#receipt").submit(function(event) {
   event.preventDefault();
   var result = (beverage + " " + flavor);
$("#output").text(result);
 });
});
