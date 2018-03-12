



// JavaScript function that wraps everything
$(document).ready(function() {



    //attach character stats to character buttons//
//$( "div" ).data( "test", { first: 16, last: "pizza!" } );-  sample from MDN//

$("#LazerPow").data({"Offense": 5, "Defense": 5, "HPts": 150});
$("#TurboVoid").data({"Offense": 7, "Defense": 3, "HPts": 145 });
$("#StarMax").data({"Offense": 4, "Defense": 12, "HPts": 175 });
$("#MegaSurge").data({"Offense": 3, "Defense": 15, "HPts": 160 }); 

    var LazerPow= {Offense: 5, Defense: 7, HPts: 150 };
    var TurboVoid= {Offense: 7, Defense: 5, HPts: 140 };
    var StarMax = {Offense: 4, Defense: 12, HPts: 175 };
    var MegaSurge= {Offense: 3, Defense: 15, HPts: 160 };

    var LazerStats = $("#LazerPow").data();
    var TurboStats = $("#TurboVoid").data();
    var StarStats = $("#StarMax").data();
    var MegaStats = $("#MegaSurge").data();

    //Player Selection//

    $(".ShipBtn").one("click", function(event){
    switch ($(this).attr('id')) {
        
        case 'LazerPow': 
        $("#LazerPow").appendTo("#player").fadeIn(400);
        $(".ShipBtn").off();
        $("#selectBox button").addClass("enemyOption");
        enemySelect()
        return;
    

        case 'TurboVoid':
        $("#TurboVoid").appendTo("#player").fadeIn(400);
        $(".ShipBtn").off();
        $("#selectBox button").addClass("enemyOption");
        enemySelect()
        return;
    
        case 'StarMax':
        $("#StarMax").appendTo("#player").fadeIn(400);
        $(".ShipBtn").off();
        $("#selectBox button").addClass("enemyOption");
        enemySelect()
        return;
        
        case 'MegaSurge':
        $("#MegaSurge").appendTo("#player").fadeIn(400);
        $(".ShipBtn").off();
        $("#selectBox button").addClass("enemyOption");
        enemySelect()
        return;

    }; //switch case
})//player selection

//opponent selection
    function enemySelect(){
    $(".enemyOption").on("click", function (event) {
    switch ($(this).attr('id')){
        
        case 'LazerPow':
        $("#LazerPow").appendTo("#enemy").fadeIn(400);
        $(".enemyOption").off();
        break;
    
        case 'TurboVoid':
        $("#TurboVoid").appendTo("#enemy").fadeIn(400);
        $(".enemyOption").off();
        break;
    
        case 'StarMax':
         $("#StarMax").appendTo("#enemy").fadeIn(400);
         $(".enemyOption").off();
        break;
    
        case 'MegaSurge':
        $("#MegaSurge").appendTo("#enemy").fadeIn(400);
        $(".enemyOption").off();
        break;
       
    }; //switch case
    
    //moving unselected characters to the bench
    $("#selectBox button").appendTo("#bench").addClass("benchItem").fadeIn(400);

})//onclick
    }//enemySelect

    //var LazerPow= {Offense: 5, Defense: 5, HPts: 150 };
   // var TurboVoid= {Offense: 7, Defense: 3, HPts: 140 };
    //var StarMax = {Offense: 4, Defense: 12, HPts: 175 };
    //var MegaSurge= {Offense: 3, Defense: 15, HPts: 160 };

//Game Logic//


var clickCount= 0;


function Attack(){
    $(".attackButton").on("click", function (event) {

    var baseAttack= $("#player button").data("Offense")
    var playerHPts= $("#player button").data("HPts")  
    var counterStrike = $("#enemy button").data("Defense")
    var enemyHPts= $("#enemy button").data("HPts");

         //counter to store number of attacks//
        var clickNumber= clickCount ++;

        var attackPower= baseAttack + baseAttack * clickCount;
        var playerHealth = playerHPts -= counterStrike;
        var enemyHealth = enemyHPts -= attackPower;
                

        if (playerHealth >= 0){
            //$("#player button").data({"Offense":attackPower});
            $("#player button").data({"HPts":playerHealth});
            $("#player span:last-child").text(playerHealth);
        }

        if (enemyHealth >= 0){
            $("#enemy button").data({"HPts":enemyHealth});
            $("#enemy span:last-child").text(enemyHealth);
        }

        if (playerHealth <= 0){
            alert("You have been defeated, Space Loser!")
            $("#player button").data({"HPts": playerHealth});
            $("#player span:last-child").text(0);
            alert("Game Over")

        }
        if (enemyHealth <=0 && $("#bench button").length <= 2){
            alert("You have defeated an enemy!")
            $("#enemy button").data({HPts: enemyHealth});
            $("#enemy span:last-child").text(0);
            $("#enemy button").appendTo("#graveYard");
            enemySelect2()
        }

        if (enemyHealth <=0 && $("#bench button").length == 0){
            alert("You have defeated your enemies! The entirety of Space is your domain!")
            $("#enemy button").data({HPts: enemyHealth});
            $("#enemy span:last-child").text(0);
            $("#enemy button").appendTo("#graveYard");
        }
    })

    function enemySelect2(){
        $(".benchItem").on("click", function (event) {
            switch ($(this).attr('id')){    
    
                case 'LazerPow':
                $("#LazerPow").appendTo("#enemy").fadeIn(400);
                $(".benchItem").off();
                break;
            
                case 'TurboVoid':
                $("#TurboVoid").appendTo("#enemy").fadeIn(400);
                $(".benchItem").off();
                break;
            
                case 'StarMax':
                 $("#StarMax").appendTo("#enemy").fadeIn(400);
                 $(".benchItem").off();
                break;
            
                case 'MegaSurge':
                $("#MegaSurge").appendTo("#enemy").fadeIn(400);
                $(".benchItem").off();
                break;
             };//switch
         })//click
    }//enemyselect2

function finalEnemy(){
    $("#bench button").appendTo("#enemy");
}

}//attack
Attack()


});//docready