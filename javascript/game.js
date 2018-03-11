



//player and enemy variables//
var player= {}
var enemy ={}

//attach character stats to character buttons//
//$( "div" ).data( "test", { first: 16, last: "pizza!" } );-  sample from MDN//

$("#LazerPow").data("LazerPow", {Offense: 10, Defense: 7, HPts: 150 });
$("#TurboVoid").data("TurboVoid", {Offense: 15, Defense: 5, HPts: 140 });
$("#StarMax").data("StarMax", {Offense: 10, Defense: 12, HPts: 175 });
$("#MegaSurge").data("MegaSurge", {Offense: 12, Defense: 15, HPts: 160 });

//store character stats in variables
var LazerStats = $("#LazerPow").data();
var TurboStats = $("#TurboVoid").data();
var StarStats = $("#StarMax").data();
var MegaStats = $("#MegaSurge").data();


// JavaScript function that wraps everything
$(document).ready(function() {

//Player Selection//

    $(".ShipBtn").one("click", function(event){
    switch ($(this).attr('id')) {
        
        case 'LazerPow': player= LazerStats;
        $("#LazerPow").fadeOut(400);
        var lazerClone= $("#LazerPow").clone();
        $(lazerClone).addClass(".lazerClone");
        $(lazerClone).appendTo("#player").fadeIn(400);
        
        return;
    

        case 'TurboVoid': player= TurboStats;
        $("#TurboVoid").fadeOut(300);
        var turboClone= $("#TurboVoid").clone();
        $(turboClone).addClass(".turboClone");
        $(turboClone).appendTo("#player").fadeIn(400);
        return;
    
        case 'StarMax': player= StarStats;
        $("#StarMax").fadeOut(300);
        var starClone= $("#StarMax").clone();
        $(starClone).addClass(".starClone");
        $(starClone).appendTo("#player").fadeIn(400);
        return;
        
        case 'MegaSurge': player= MegaStats;
        $("#MegaSurge").fadeOut(300);
        var megaClone= $("#MegaSurge").clone();
        $(megaClone).addClass(".megaClone");
        $(megaClone).appendTo("#player").fadeIn(400);
        return;

    };
})

//opponent selection
    $("button").on("dblclick", function (event) {
    switch ($(this).attr('id')){
        
        case 'LazerPow': enemy=LazerStats;
        $("#LazerPow").fadeOut(400);
        var lazerClone= $("#LazerPow").clone();
        $(lazerClone).addClass(".lazerClone");
        $(lazerClone).appendTo("#enemy").fadeIn(400);
        break;
    
        case 'TurboVoid': enemy=TurboStats;
        $("#TurboVoid").fadeOut(300);
        var turboClone= $("#TurboVoid").clone();
        $(turboClone).addClass(".turboClone");
        $(turboClone).appendTo("#enemy").fadeIn(400);
        break;
    
        case 'StarMax': enemy= StarStats;
         $("#StarMax").fadeOut(300);
        var starClone= $("#StarMax").clone();
        $(starClone).addClass(".starClone");
        $(starClone).appendTo("#enemy").fadeIn(400);
        break;
    
        case 'MegaSurge': MegaStats;
        $("#MegaSurge").fadeOut(300);
        var megaClone= $("#MegaSurge").clone();
        $(megaClone).addClass(".megaClone");
        $(megaClone).appendTo("#enemy").fadeIn(400);
        break;
    };
})


});