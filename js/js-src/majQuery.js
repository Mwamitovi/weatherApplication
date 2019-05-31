
function sendRequestWithJQuery(myCallback, showErrorMessage, configData){
    $.ajax({
        url: configData.url,
        dataType: "json",
        success: function(responseResult){
            myCallback(responseResult);
        },
        error: showErrorMessage,
        timeout: configData.remainingTime
    });
}

function myCallback(ajaxResponse){
    var out = "";
    for(i=0; i<ajaxResponse.length; i++){
        out += ajaxRequest([i].book + ajaxResponse[i].author)
    }
    $("#my-fixture").html(out);
}