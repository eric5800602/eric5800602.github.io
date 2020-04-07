for(var i=0; i<5; i++){
    $("#intro"+i).hide();
    $("#photo"+i).hide();
}
$("#about_animate6").hide();
$("#about_animate7").hide();
$("#prefix_up0").hide();
$("#prefix_down0").hide();
var index_person=0;
var mutex = true;
$(document).ready(()=>{
    idx = 1;
    var about = setInterval(function (){
        $("#about_animate"+idx++).animate({ opacity: 1 });
        if(idx == 6){
            clearInterval(about);
            setTimeout(function(){
            $("#about_animate6").transition({
                animation : 'slide right',
                duration  : 1000,
                interval  : 500
              })
            setTimeout(function(){
                $("#about_animate7").transition({
                    animation : 'slide right',
                    duration  : 1000,
                    interval  : 500
                    });
                },200);
                $("#about_animate8").animate({
                    "opacity" : "1"
                });
                $("#dot").animate({
                    "opacity" : "1"
                });
                $("#index").animate({
                    "opacity" : "1"
                });
                $("#about_animate9").animate({
                    "line-height": "+=4.8vh",
                    "opacity" : "1"},
                    750,
                    "easeInOutQuad"
                    );
                $("#about_animate10").animate({
                    "line-height": "+=4.8vh",
                    "opacity" : "1"},
                    750,
                    "easeInOutQuad"
                    );
                $("#about_animate11").animate({
                    "line-height": "+=4.8vh",
                    "opacity" : "1"},
                    750,
                    "easeInOutQuad"
                    );
                $("#about_animate12").animate({
                    "line-height": "+=4.8vh",
                    "opacity" : "1"},
                    750,
                    "easeInOutQuad"
                    );
            },500);
            setTimeout(function(){
                $("#intro0").fadeIn();
                $("#photo0").fadeIn(function(){
                    $("#prefix_up0").transition('slide down in','0.5s')
                    $("#prefix_down0").transition('slide up in','0.5s')
                });
            },1300);
        };
    },500);
})

function change_index(parameter){
    if(mutex){
        mutex = false;
    }
    else{
        return;
    }
    if(parameter == index_person){return;}
    $("#prefix_up"+index_person).animate({
        "opacity" : "0"
    });
    $("#prefix_down"+index_person).animate({
        "opacity" : "0"
    });
    if(index_person > parameter){
        $("#intro"+index_person).transition('fly up','0.75s');
        $("#photo"+index_person).transition('fly up','0.75s');
    }
    else{
        $("#intro"+index_person).transition('fly down','0.75s');
        $("#photo"+index_person).transition('fly down','0.75s');
    }
    setTimeout(function(){
        var old = index_person;
        for(var i=0; i< 5;i++){
            $("#prefix_up"+i).css("opacity","0");
            $("#prefix_down"+i).css("opacity","0");
        }
        switch (parameter){
            case 0:
                $("#index").animate({
                    "top" : "1.5vh"
                })
                index_person = 0;
                break;
            case 1:
                $("#index").animate({
                    "top" : "6.75vh"
                })
                index_person = 1;
                break;
            case 2:
                $("#index").animate({
                    "top" : "12.25vh"
                })
                index_person = 2;
                break;
            case 3:
                $("#index").animate({
                    "top" : "17.75vh"
                })
                index_person = 3;
                break;
            case 4:
                $("#index").animate({
                    "top" : "23vh"
                })
                index_person = 4;
                break;
        }
        if(old > parameter){
            $("#intro"+index_person).transition('fly down','1.25s');
            $("#photo"+index_person).transition('fly down','1.25s',function(){
                $("#prefix_up"+index_person).css("opacity","1");
                $("#prefix_down"+index_person).css("opacity","1");
                $("#prefix_up"+index_person).transition('slide down in','0.5s');
                $("#prefix_down"+index_person).transition('slide up in','0.5s',function(){
                    mutex = true;
                });
            });
        }
        else{
            $("#intro"+index_person).transition('fly up','1.25s');
            $("#photo"+index_person).transition('fly up','1.25s',function(){
                $("#prefix_up"+index_person).css("opacity","1");
                $("#prefix_down"+index_person).css("opacity","1");
                $("#prefix_up"+index_person).transition('slide down in','0.5s');
                $("#prefix_down"+index_person).transition('slide up in','0.5s',function(){
                    mutex = true;
                });
            });
        }
    },500);
}