var $popup = $("#order-popup");
$popup.hide();
var $panel = $("#orderPanel");

$panel.find(".close-btn").click(function(){
    $popup.hide();
});
var orderNo = 234234;
var workFrom = 9;
var workTo = 23;
var orderTime = [
    generateSchedule(workFrom, workTo),
    generateSchedule(workFrom, workTo),
    generateSchedule(workFrom, workTo),
    generateSchedule(workFrom, workTo),
    generateSchedule(workFrom, workTo)
];

$("#map-image").click(function(event){
    var X = event.offsetX;
    var Y = event.offsetY;
    console.log(X+";"+Y);
    
    if(X > 58 & X < 116 & Y > 24 & Y < 68){
        console.log("Table 1");
        openOrderPanel("#"+orderNo, 1);
    }
    if(X > 129 & X < 187 & Y > 24 & Y < 68){
        console.log("Table 2");
        openOrderPanel("#"+orderNo, 2);
    }
    if(X > 198 & X < 257 & Y > 24 & Y < 68){
        console.log("Table 3");
        openOrderPanel("#"+orderNo, 3);
    }
    if(X > 270 & X < 327 & Y > 24 & Y < 68){
        console.log("Table 4");
        openOrderPanel("#"+orderNo, 4);
    }
    if(X > 340 & X < 400 & Y > 24 & Y < 68){
        console.log("Table 5");
        openOrderPanel("#"+orderNo, 5);
    }
    
    orderNo++;
});

function openOrderPanel(orderName, tableNo) {
    $panel.find(".name").text(orderName);
    $panel.find(".tableNo").text(tableNo);
    $panel.find("button").remove();
    for(var i = workFrom;i < workTo;++i){
        var $button = $('<button class="btn btn-default order-button col-sm-4" disabled></button>');
        if(orderTime[tableNo-1]["h"+i]){
            $button.addClass("email-valid");
            $button.removeAttr("disabled");
        }
        else{
            $button.addClass("email-invalid");
        }
        $button.text(i+':00-'+(i+1)+':00');
        $button.attr("table",tableNo-1);
        $button.attr("hour","h"+i);
        $panel.find(".row").append($button);
    }
    $panel.find("button").click(function(){
        $this = $(this);
        alert("Order "+orderName+" done!\nWait for you on: "+$this.text());
        $popup.hide();
        orderTime[+$this.attr("table")][$this.attr("hour")] = false;
    });
    $popup.show();
}

function generateSchedule(from, to){
    var res = [];
    for(var i = from; i < to;++i){
        res["h"+i] = Math.random() > 0.5;
    }
    return res;
}