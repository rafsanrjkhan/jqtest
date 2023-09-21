// alert("hiii")
// $("h1").text("Ki khobor jQuery");
// $(".my-div h1").text("My Div Paragraph through jquery")
// $("#p1").text("Ki khobor p1");
// $("p").html("<b>Goodbye</b>")
// $("p1").text("Goodbye")
// $("p").append("Goodbye")
// $("p2").prepend("Goodbye")
var para1 = $("<p></p>").text("paragraph after")
$("#p1").after(para1)
var para2 = $("<p></p>").text("paragraph before")
$("#p2").before(para2)

