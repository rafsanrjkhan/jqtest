// alert("hiii")
// $("h1").text("Ki khobor jQuery");
// $(".my-div h1").text("My Div Paragraph through jquery")
// $("#p1").text("Ki khobor p1");
// $("p").html("<b>Goodbye</b>")
// $("p1").text("Goodbye")
// $("p").append("Goodbye")
// $("p2").prepend("Goodbye")
// var para1 = $("<p></p>").text("paragraph after")
// $("#p1").after(para1)
// var para2 = $("<p></p>").text("paragraph before")
// $("#p2").before(para2)
// var attr = document.querySelector("a").getAttribute("href");
// console.log(attr) 
// $("a").attr("href")
// $("a").removeAttr("href")
// $("a").attr("href", "https://www.youtube.com/")
// $("h1").css("color", "red");
// $("h1").css("font-size", "8rem");
// $("h1").css("font-style", "italic");
// $("h1").css({"color":"green","font-size":"3rem","font-style":"italic"});
// way 1
// document.querySelector("h1").classList.add("style1")
// way 2
// $("h1").addClass("style1 style2")
// Event Listener
// document.querySelector("button").addEventListener("click", function () {
//    document.querySelector("h1").innerHTML = "You clicked on button"
// })
// $("button").click(function () {
//    $("h1").text("you clicked on button")
// })
// $("button").click(function () {
//    $("h1").toggleClass("style1")
// })
// index.js
var totalButtons = document.querySelectorAll(".myButton").length;
for (i = 0; i < totalButtons; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked"; // Use querySelector to select the first <h1> element
    });
}


console.log()

