!function(e){function t(){o=!1;for(var t=0;t<a.length;t++){var n=e(a[t]).filter(function(){return e(this).is(":appeared")});if(n.trigger("appear",[n]),r){var i=r.not(n);i.trigger("disappear",[i])}r=n}}var r,a=[],n=!1,o=!1,i={interval:250,force_process:!1},f=e(window);e.expr[":"].appeared=function(t){var r=e(t);if(!r.is(":visible"))return!1;var a=f.scrollLeft(),n=f.scrollTop(),o=r.offset(),i=o.left,s=o.top;return s+r.height()>=n&&s-(r.data("appear-top-offset")||0)<=n+f.height()&&i+r.width()>=a&&i-(r.data("appear-left-offset")||0)<=a+f.width()},e.fn.extend({appear:function(r){var f=e.extend({},i,r||{}),s=this.selector||this;if(!n){var l=function(){o||(o=!0,setTimeout(t,f.interval))};e(window).scroll(l).resize(l),n=!0}return f.force_process&&setTimeout(t,f.interval),a.push(s),e(s)}}),e.extend({force_appear:function(){return!!n&&(t(),!0)}})}(jQuery),function(e){e.fn.countTo=function(t){return t=t||{},e(this).each(function(){var r=e.extend({},e.fn.countTo.defaults,{from:e(this).data("from"),to:e(this).data("to"),speed:e(this).data("speed"),refreshInterval:e(this).data("refresh-interval"),decimals:e(this).data("decimals")},t),a=Math.ceil(r.speed/r.refreshInterval),n=(r.to-r.from)/a,o=this,i=e(this),f=0,s=r.from,l=i.data("countTo")||{};function u(e){var t=r.formatter.call(o,e,r);i.text(t)}i.data("countTo",l),l.interval&&clearInterval(l.interval),l.interval=setInterval(function(){f++,u(s+=n),"function"==typeof r.onUpdate&&r.onUpdate.call(o,s);f>=a&&(i.removeData("countTo"),clearInterval(l.interval),s=r.to,"function"==typeof r.onComplete&&r.onComplete.call(o,s))},r.refreshInterval),u(s)})},e.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(e,t){return e.toFixed(t.decimals)},onUpdate:null,onComplete:null}}(jQuery),jQuery().appear&&(jQuery(".counter").appear(),jQuery("body").on("appear",".counter",function(e,t){jQuery(t).each(function(e){jQuery(this).hasClass("counted")||jQuery(this).countTo().addClass("counted")})}));