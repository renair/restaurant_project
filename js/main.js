var $MENU = $("#menu");
var EMAIL_REGEXP = /[\w.+\-!?/:#$%&*();|<>]{3,}@[a-z0-9]+\.[a-z0-9]+(\.?[a-z0-9]+)*/g;

//load menue
$.get("files/menu.htm",function(data){
    $menu = $(data);
    $email = $menu.find(".email");
    $pass = $menu.find(".password");
    $MENU.append($menu);
    
    $email.keyup(function(event){
        console.log(event);
        var text = $email.val();
        if(text){
            if(EMAIL_REGERXP.test(text)){
                $email.addClass("email-valid");
                $email.removeClass("email-invalid");
            }
            else{
                $email.removeClass("email-valid");
                $email.addClass("email-invalid");
            }
        }
        else{
            $email.removeClass("email-invalid");
            $email.removeClass("email-valid");
        }
    });
    
    $pass.keyup(function(){
        if($pass.val()){
            if($pass.val().length > 6){
                $pass.addClass("email-valid");
                $pass.removeClass("email-invalid");
            }
            else{
                $pass.removeClass("email-valid");
                $pass.addClass("email-invalid");
            }
        }
        else{
            $pass.removeClass("email-invalid");
            $pass.removeClass("email-valid");
        }
    });
},"text");


//sharing buttons
(function() {
  if (window.pluso) if (typeof window.pluso.start == "function") return;
  if (window.ifpluso==undefined) { window.ifpluso = 1;
    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
    var h=d[g]('body')[0];
    h.appendChild(s);
  }})();