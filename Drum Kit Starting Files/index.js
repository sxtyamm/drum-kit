// alert("hello");

// document.querySelector("button").addEventListener("click",clickedfntn);
// //we are not using clickedfntn() and use clickfntn becuse in () case function got triggered itself without anny click
// function clickedfntn()
// {
//     alert("i got clicked!");
// }
// or we can also use anomious fntn such as .. 

// document.querySelector("button").addEventListener("click",function ()
// {
//     alert("i got clicked!");
// });

// above is just for first button .. we are looping for all the buttons ..
var noOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<noOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
                                                                    // {
                                                                    //     // alert("i got clicked"); 
                                                                    //     var audio= new Audio("sounds/tom-1.mp3");
                                                                    //     audio.play();
                                                                    //     // console.log(this);
                                                                    //     this.style.color="white";
                                                                    // }  
            {
                var innerHTML = this.innerHTML;
                genaudio(innerHTML);
                addanimation(innerHTML);
            }
    );
}

document.addEventListener("keydown",function(Event)
{
   
    genaudio(Event.key);
    addanimation(Event.key);
}


);

function genaudio( innerHTML )
{
    switch (innerHTML) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(innerHTML);
            break;
    }
}

function addanimation(key)
{
    var pressedkey=document.querySelector("."+key);
    pressedkey.classList.add("pressed");
    setInterval( function()
    {
        pressedkey.classList.remove("pressed");
    } , 100 );
}