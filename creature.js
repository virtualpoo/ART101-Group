//Make Slugwalk Float And Bounce//
$(function () {
    var $slugwalk = $(".creature");
    $slugwalk.css("position", "absolute");

    var speed = 3;

    var DirectionX;
    if (Math.random() < 0.5) {
        DirectionX = -1;
    }
    else {
        DirectionX = 1;
    };


    var DirectionY;
    if (Math.random() < 0.5) {
        DirectionY = -1;
    }
    else {
        DirectionY = 1;
    };

    var MaxX = $(window).width() - $slugwalk.width();
    var MaxY = $(window).height() - $slugwalk.height();

    var PositionX = Math.random() * MaxX;
    var PositionY = Math.random() * MaxY;

    $slugwalk.css({
        left: PositionX + "px",
        top: PositionY + "px"
    });

    function SlugwalkMove() {
        PositionX += speed * DirectionX;
        PositionY += speed * DirectionY;

        //fit to window if user resizes
        MaxX = $(window).width() - $slugwalk.width();
        MaxY = $(window).height() - $slugwalk.height();

        if (PositionX <= 0) {
            PositionX = 0;
            DirectionX = -DirectionX;
        }
        else if (PositionX >= MaxX) {
            PositionX = MaxX;
            DirectionX = -DirectionX;
        }

        if (PositionY <= 0) {
            PositionY = -0;
            DirectionY = -DirectionY;
        }
        else if (PositionY >= MaxY) {
            PositionY = MaxY;
            DirectionY = -DirectionY;
        }

        $slugwalk.css({
            left: PositionX + "px",
            top: PositionY + "px"
        });
    };

    setInterval(SlugwalkMove, 20);
});


//Food Inter//
var $fruitImg = null;
var isReadyToEat = false;

var friendshiplevel = 0
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


//interactions
let hungrymessage = ["I'm so hungry...","I want some fruit...", "My stomach is growling...","Uugghh..."];


//request system, based on color fruit requested
let colorRequests = ["Blue","Pink","Yellow","Purple","Orange"];
let requestedColor = ""

function generateRequest() {

    const i = Math.floor(Math.random() * colorRequests.length);
    requestedColor = colorRequests[i];
    //display message with random fruit request
    $("#request").html("I want some " + requestedColor + " Fruit...");
   

};

//call
generateRequest();

// Function to check response

function checkColor(requestedColor) {
    if (requestedColor === "Blue") {
        if ($fruitImg.attr("id") === "BlueCursor") { // if requested blue and ID is BlueCursor
            $("#messagep").html('Just what I wanted! Thanks!');
            friendshiplevel += 1;
            generateRequest(); // new request
            // Play LIKE sound
        document.getElementById("likeSound").play();
        } else {
            $("#messagep").html("I didn't want that...");
            friendshiplevel -= 1;

        // Play DISLIKE sound
        document.getElementById("dislikeSound").play();
        }

    } else if (requestedColor === "Orange") {
        if ($fruitImg.attr("id") === "OrangeCursor") {
            $("#messagep").html('Just what I wanted! Thanks!');
            friendshiplevel += 1;
            generateRequest();
            document.getElementById("likeSound").play();
        } else {
            $("#messagep").html("I didn't want that...");
            friendshiplevel -= 1;
              document.getElementById("dislikeSound").play();
        }

    } else if (requestedColor === "Purple") {
        if ($fruitImg.attr("id") === "PurpleCursor") {
            $("#messagep").html('Just what I wanted! Thanks!');
            friendshiplevel += 1;
            generateRequest();
            document.getElementById("likeSound").play();
        } else {
            $("#messagep").html("I didn't want that...");
            friendshiplevel -= 1;
              document.getElementById("dislikeSound").play();
        }

    } else if (requestedColor === "Pink") {
        if ($fruitImg.attr("id") === "PinkCursor") {
            $("#messagep").html('Just what I wanted! Thanks!');
            friendshiplevel += 1;
            generateRequest();
            document.getElementById("likeSound").play();
        } else {
            $("#messagep").html("I didn't want that...");
            friendshiplevel -= 1;
              document.getElementById("dislikeSound").play();
        }

    } else if (requestedColor === "Yellow") {
        if ($fruitImg.attr("id") === "YellowCursor") {
            $("#messagep").html('Just what I wanted! Thanks!');
            friendshiplevel += 1;
            generateRequest();
            document.getElementById("likeSound").play();
        } else {
            $("#messagep").html("I didn't want that...");
            friendshiplevel -= 1;
              document.getElementById("dislikeSound").play();
        }
    }
};




//general fruit cursor function
function fruitCursor (id, src){
    if ($fruitImg) {
            $fruitImg.remove("img");};

       $fruitImg = $("<img>", {
            id: id,
            src: src,
            width: '100px',
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
};             

//specific values based on clicked fruit
$("#GetBlueFruit").click(function() {
    fruitCursor("BlueCursor", "pictures/Blue_Cursor.PNG");
    });

    $("#GetOrangeFruit").click(function() {
    fruitCursor("OrangeCursor", "pictures/Orange_Cursor.PNG");
    });

    $("#GetPinkFruit").click(function() {
    fruitCursor("PinkCursor", "pictures/Pink_Cursor.PNG");
    });

    $("#GetPurpleFruit").click(function() {
    fruitCursor("PurpleCursor", "pictures/Purple_Cursor.PNG");
    });

    $("#GetYellowFruit").click(function() {
    fruitCursor("YellowCursor", "pictures/Yellow_Cursor.PNG");
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
$(document).on("click", "#WaitingForEating", function() {
    if (!isReadyToEat) return;
    var $img = $(this);
    checkColor(requestedColor)
        if ($fruitImg) {
            $fruitImg.remove("img");};

        if (($fruitImg.attr("id") === "BlueCursor")) { //if blue was clicked
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

        if (($fruitImg.attr("id") === "OrangeCursor")) {
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
        };

        if (($fruitImg.attr("id") === "PinkCursor")) {
            $img
                .attr("id", "EatingPinkFruit")
                .attr("src", "pictures/Eating_Food.PNG")
                .css("width", "500");
            isReadyToEat = false;  
            
                function TurnPink($img){
                    $img
                        .attr("id", "TurnedPink")
                        .attr("src", "pictures/Turning_Pink.PNG")
                        .css("width", "500");
                };
            setTimeout(TurnPink, 2000, $img);
            console.log('turned pink')
            pinkget = false
        };

        if ($fruitImg.attr("id") === "PurpleCursor") {
            $img
                .attr("id", "EatingPurpleFruit")
                .attr("src", "pictures/Eating_Food.PNG")
                .css("width", "500");
            isReadyToEat = false;  
            
                function TurnPurple($img){
                    $img
                        .attr("id", "TurnedPurple")
                        .attr("src", "pictures/Turning_Purple.PNG")
                        .css("width", "500");
                };
            setTimeout(TurnPurple, 2000, $img);
            console.log('turned purple')
            purpleget = false};

            if (($fruitImg.attr("id") === "YellowCursor")) {
            $img
                .attr("id", "EatingYellowFruit")
                .attr("src", "pictures/Eating_Food.PNG")
                .css("width", "500");
            isReadyToEat = false;  
            
                function TurnYellow($img){
                    $img
                        .attr("id", "TurnedYellow")
                        .attr("src", "pictures/Turning_Yellow.PNG")
                        .css("width", "500");
                };
            setTimeout(TurnYellow, 2000, $img);
            console.log('turned yellow')
            yellowget = false};
            $fruitImg = null;
});






