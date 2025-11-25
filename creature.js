//Food Inter//
var $fruitImg = null;
var isReadyToEat = false;

var blueget=false
var orangeget=false
//hover over fruit animation
$(".Fruit").hover(function(){
    $(this).animate({
        width: '300px',
    })
},
function(){
  $(this).animate({
        width: '250px',})
});

//currently empty, scales w/ css (no animation)
$("").hover(
function(){$(this).css("transform", "scale(1.5)");},
function(){$(this).css("transform", "scale(1)");},
);


//Get Food//
$(function BlueFruit() {

    $("#GetBlueFruit").click(function () {
       blueget=true; //marks if blue was clicked
       $fruitImg = $("<img>", {
            id: "BlueCursor",
            src: "pictures/Blue_Cursor.PNG",
            width: '100px',
            alt: "Fruit",
        })
        
        .css({
            pointerEvents: "none",
            position: "absolute",
        });

        $("body").append($fruitImg);

        $(document).on("mousemove.fruitFollow", function (event) {
            if (!$fruitImg) return;
            $fruitImg.css({
                left: event.pageX + "px",
                top: event.pageY + "px"
             });
        });
    });
});

$(function OrangeFruit() {

    $("#GetOrangeFruit").click(function () {
        orangeget=true;
        $fruitImg = $("<img>", {
            id: "OrangeCursor",
            src: "pictures/Orange_Cursor.PNG",
            width: '100px',
            alt: "Fruit",
        })
        
        .css({
            pointerEvents: "none",
            position: "absolute",
        });

        $("body").append($fruitImg);

        $(document).on("mousemove.fruitFollow", function (event) {
            if (!$fruitImg) return;
            $fruitImg.css({
                left: event.pageX + "px",
                top: event.pageY + "px"
             });
        });
});
});

//On mouse hover, changes image
$("#NeedsFood").hover(
    function(){
        if (!$fruitImg) return;

        $(this)
            .attr("id", "WaitingForEating")
            .attr("src", "pictures/Waiting_For_Food.PNG")
            .css("width", "500px");

        isReadyToEat = true;
    }
);


//Eat Food, when creature image clicked, changes image during eating, then changes color based on fruit picked//
$("#WaitingForEating").click(
    $(function () {
    $(document).on("click", "#WaitingForEating", function () {
        if (!isReadyToEat) return;

        var $img = $(this);

        if ($fruitImg) {
            $fruitImg.remove();};
            $fruitImg = null;

        if (blueget) { //if blue was clicked
            $img
                .attr("id", "EatingBlueFruit")
                .attr("src", "pictures/Eating_Food.PNG")
                .css("width", "500");
            isReadyToEat = false;  

        
                function TurnBlue($img){
                    $img
                        .attr("id", "TurnedBlue")
                        .attr("src", "pictures/Turning_Blue.PNG")
                        .css("width", "500");
                };
            setTimeout(TurnBlue, 2000, $img);
            console.log('turnedblue')
            blueget = false};

        if (orangeget) {
            $img
                .attr("id", "EatingOrangeFruit")
                .attr("src", "pictures/Eating_Food.PNG")
                .css("width", "500");
            isReadyToEat = false;  
            
                function TurnOrange($img){
                    $img
                        .attr("id", "TurnedOrange")
                        .attr("src", "pictures/Turning_Orange.PNG")
                        .css("width", "500");
                };
            setTimeout(TurnOrange, 2000, $img);
            console.log('turned orange')
            orangeget = false
        }
});
}));





