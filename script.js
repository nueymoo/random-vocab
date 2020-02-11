$(document).ready(function() {
    var bgcolor = ["#4caf50" , "#009688" , "#3f51b5" ,"#e91e63" ,"#5c6bc0","#795548" ,"#607d8b","#bf360c" ,"#1a237e","#9e9d24","#1b5e20"]
    
    var words = ["take off" , "school" , "fruit" , "dog"]
    var numberWords = Math.floor(Math.random() * words.length)
    
    var twosecond = setTimeout(function() {
        $(".card1").addClass("bounce")   
    }, 2000)
    var fivesecound = setTimeout(function(){
        $(".question").addClass("pulse")
        $(".card1").removeClass("bounce").addClass("bounceleft")
    },10000)
    
    $(".card1").html(words[numberWords])
    numberWords = Math.floor(Math.random() * words.length)
    $(".card2").html(words[numberWords])

    $(".next").on("click", function() {
       $(".card1").removeClass("bounce").removeClass("bounceleft").addClass("rollOut")
        $(".question").removeClass("pulse")
       var number = Math.floor(Math.random() * bgcolor.length)
       $(".next").addClass("nextclick")
       
       setTimeout(function(){
        $(".card1").removeClass("rollOut")
        var card2 = $(".card2").html()
            $(".card1").html(card2)
            numberWords = Math.floor(Math.random() * words.length)
            $(".card2").html(words[numberWords])
            $("body").css("background-color" , bgcolor[number])
            $(".next").removeClass("nextclick")  
        }, 800)

        clearTimeout(twosecond)
        clearTimeout(fivesecound)
        
        twosecond = setTimeout(function() {
            $(".card1").addClass("bounce")   
        }, 5000)

        fivesecound = setTimeout(function(){
            $(".question").addClass("pulse")
            $(".card1").removeClass("bounce").addClass("bounceleft")
        },10000)
   });

   $(".question").on("click", function(){
       var card1 = $(".card1").html()
       var searchurl = `https://www.oxfordlearnersdictionaries.com/search/english/?q=${card1.trim()}`
   window.open(searchurl,"_blank")
        

   })
});