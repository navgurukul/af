jQuery(document).ready(function(e){e("#submit").click(function(){var a=e("input[name=name]"),r=e("input[name=email]"),t=e("textarea[name=comment]"),n=!1;if(""==a.val()?(a.addClass("error"),n=!0):a.removeClass("error"),""==r.val()?(r.addClass("error"),n=!0):r.removeClass("error"),/^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i.test(r.val())?r.removeClass("error"):(r.addClass("error"),n=!0),""==t.val()?(t.addClass("error"),n=!0):t.removeClass("error"),1==n)return!1;var o="name="+a.val()+"&email="+r.val()+"&comment="+encodeURIComponent(t.val());return e(".text").attr("disabled","true"),e(".loading").show(),e.ajax({url:"contact.php",type:"GET",data:o,cache:!1,success:function(a){1==a?(e(".done").fadeIn("slow"),e(".form").find("input[type=text], textarea").val("")):alert("Sorry, unexpected error. Please try again later.")}}),!1})});