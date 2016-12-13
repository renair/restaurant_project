$COMENTBOX = $("#comentbox");
var EMAIL_REGERXP = /[\w.+\-!?/:#$%&*();|<>]{3,}@[a-z0-9]+\.[a-z0-9]+(\.?[a-z0-9]+)*/i;

function loadComments(comments){
    $COMENTBOX.html("");
    $.get("files/comment.htm",function(data){
        comments.forEach(function(element){
            $node = $(data);
            $node.find(".name").text(element.name);
            $node.find(".js-mark").text(element.mark);
            $node.find(".date").text(element.date);
            $node.find(".text").text(element.text);
            $COMENTBOX.append($node);
        });
    },"text");
}

Comments = [
    {
        user:"Mark Johnson",
        date:"3.9.2016",
        mark:5,
        text:"Hello everybody! I strongly recomend to visit this restaurant! It's the most beautiful restaurant i've ever seen! Come heare and leave your comments!!!"
    },
    {
        user:"Ted Petrov",
        date:"22.4.2016",
        mark:3,
        text:"Hello this is second comment:)"
    },
    {
        user:"",
        date:"",
        mark:0,
        text:"This is the third comment"
    },
    {
        user:"",
        date:"",
        mark:0,
        text:"Coment #4"
    },
    {
        user:"",
        date:"",
        mark:0,
        text:"Coment #5"
    },
    {
        user:"",
        date:"",
        mark:0,
        text:"Coment #6"
    },
    {
        user:"",
        date:"",
        mark:0,
        text:""
    },
    {
        user:"",
        date:"",
        mark:0,
        text:""
    },
    {
        user:"",
        date:"",
        mark:0,
        text:""
    },
    {
        user:"",
        date:"",
        mark:0,
        text:""
    },
    {
        user:"",
        date:"",
        mark:0,
        text:""
    },
    {
        user:"",
        date:"",
        mark:0,
        text:""
    },
    {
        user:"",
        date:"",
        mark:0,
        text:""
    },
    {
        user:"",
        date:"",
        mark:0,
        text:""
    },
    {
        user:"",
        date:"",
        mark:0,
        text:""
    },
];

//default action whitch occure onload
loadComments(Comments.slice(0,10));

/*$(".page-ch").click(function(event){
    var num = +event.currentTarget.innerHTML - 1;
    loadComments(Comments.slice(num*5, (num+1)*5));
});*/

$(".user-name").keyup(function(){
    var $node = $(".user-name");
    var text = $node.val();
    if(text.length > 4 && text.length < 20){
        $node.addClass("email-valid");
        $node.removeClass("email-invalid");
    }
    else if(!text.length){
        $node.removeClass("email-valid");
        $node.removeClass("email-invalid");
    }
    else{
        $node.removeClass("email-valid");
        $node.addClass("email-invalid");
    }
});

$(".comment-text").keydown(function(event){
    var $node = $(".comment-text");
    var text = $node.val();
    if(text.length > 500){
        event.preventDefault();
        $node.val(text.slice(0,499));
        alert("Not allowed more then 500 symbols.");
    }
});

$("#find-comment").click(function(){
    var res = [];
    var text = $("#comment-text").val();
    for(var i = 0; i < Comments.length;++i){
        if(Comments[i].text.includes(text)){
            res.push(Comments[i]);
        }
    }
    loadComments(res);
});
