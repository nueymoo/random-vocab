$(document).ready(function() {
    var bgcolor = ["#4caf50" , "#009688" , "#3f51b5" ,"#e91e63" ,"#5c6bc0","#795548" ,"#607d8b","#bf360c" ,"#1a237e","#9e9d24","#1b5e20"]
    $(".next").on("click", function() {
       $(".card1").addClass("rollOut")
       var number = Math.floor(Math.random() * bgcolor.length)
       $(".next").addClass("nextclick")
       setTimeout(function(){
        $(".card1").removeClass("rollOut")
        var card2 = $(".card2").html()
            $(".card1").html(card2)
            $(".card2").html("bird")
            $("body").css("background-color" , bgcolor[number])
            $(".next").removeClass("nextclick")
        }, 800)

   });
});