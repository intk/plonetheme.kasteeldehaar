/* This is a bundle that uses RequireJS to pull in dependencies.
   These dependencies are defined in the registry.xml file */


/* do not include jquery multiple times */


var menuLoaded = sessionStorage.getItem('menuLoaded');

if (menuLoaded != null && menuLoaded != undefined) {
  jQuery("html").addClass("no-logo-animation");
} else {
  sessionStorage.menuLoaded = true;
}

jQuery(document).ready(function() {
  var $ = jQuery;
  setTimeout(function() {
    if (jQuery("body").hasClass('frontend')) {
      jQuery("#portal-logo").addClass("hide-logo");
    } else {
      jQuery(".cd-nav-trigger").show();
      jQuery("#portal-logo").hide();
    }
  }, 2000);

  var _isLateralNavAnimating = false;
  
  //open/close lateral navigation
  jQuery('#portal-logo').on('click', function(event) {
    event.preventDefault();
    //stop if nav animation is running 

    if (slickSlideshow != undefined) {
      if (slickSlideshow.playing) {
        slickSlideshow.pauseCurrentSlide();
      }
    }

    if( !_isLateralNavAnimating ) {
      if(jQuery(this).parents('.csstransitions').length > 0 ) _isLateralNavAnimating = true; 
      
      jQuery('body').toggleClass('navigation-is-open');
      jQuery('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        //animation is over
        _isLateralNavAnimating = false;
      });
    }
  });


  /* Slideshow button */
  jQuery(".slideshow-btn-down").click(function() {
    jQuery('.website-wrapper').animate({
        scrollTop: jQuery(".portlet-weekday").offset().top
      }, 600, function() {
        // slide
        var sliding = true;
        if (slickSlideshow != undefined) {
          if (slickSlideshow.playing) {
            slickSlideshow.pauseCurrentSlide();
          }
        };
      });
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
    jQuery(document).ready(function() {
      jQuery('body').addClass('kasteeldehaar-main');
    });
  }
});

