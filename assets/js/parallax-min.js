function parallaxInit(){jQuery(".parallax").each(function(){jQuery(this).parallax("50%",.5)})}!function(n){var t=n(window),i=t.height();t.resize(function(){i=t.height()}),n.fn.parallax=function(o,a,l){var r,e,u=n(this);function c(){u.each(function(){e=u.offset().top}),r=l?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===o)&&(o="50%"),(arguments.length<2||null===a)&&(a=.5),(arguments.length<3||null===l)&&(l=!0);var c=t.scrollTop();u.each(function(){var t=n(this),l=t.offset().top;l+r(t)<c||l>c+i||u.css("backgroundPosition",o+" "+Math.round((e-c)*a)+"px")})}t.bind("scroll",c).resize(c),c()}}(jQuery),jQuery(window).bind("load",function(){parallaxInit()});