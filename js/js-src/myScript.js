
function ajaxRequest(myCallback){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(args){
        myCallback(this.responseText);
    };
    xmlhttp.open("GET", "/some/url/?q=Cookbook", true);
    xmlhttp.send();
}

function myCallback(myText){
    var myTextToDisplay = myText;
    $("#myID").html(myTextToDisplay);
}