/* This is a bundle that uses RequireJS to pull in dependencies.
   These dependencies are defined in the registry.xml file */


/* do not include jquery multiple times */
 
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

var cookie = getCookie('sessionid');
if (cookie != "") {
  $("html").addClass("no-logo-animation");
} else {
  var cookie_uuid = guid();
  document.cookie = "sessionid="+cookie_uuid+"; expires=0; path=/";
}

$(document).ready(function() {
  setTimeout(function() {
    if ($("body").hasClass('frontend')) {
      $("#portal-logo").addClass("hide-logo");
    } else {
      $(".cd-nav-trigger").show();
      $("#portal-logo").hide();
    }
  }, 2000);

  var _isLateralNavAnimating = false;
  
  //open/close lateral navigation
  $('#portal-logo').on('click', function(event) {
    event.preventDefault();
    //stop if nav animation is running 

    if (slickSlideshow != undefined) {
      if (slickSlideshow.playing) {
        slickSlideshow.pauseCurrentSlide();
      }
    }

    if( !_isLateralNavAnimating ) {
      if($(this).parents('.csstransitions').length > 0 ) _isLateralNavAnimating = true; 
      
      $('body').toggleClass('navigation-is-open');
      $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        //animation is over
        _isLateralNavAnimating = false;
      });
    }
  });
});


if (window.jQuery) {
  define('jquery', [], function() {
    return window.jQuery;
  });
}

require([
  'jquery',
], function($, dep1, logger){
  'use strict';

  // initialize only if we are in top frame
  if (window.parent === window) {
    $(document).ready(function() {
      $('body').addClass('kasteeldehaar-main');
    });
  }
});

