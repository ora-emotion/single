/*
 * single.js
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, single */

var single = (function () {
  var
    configMap = {},
    stateMap = { $body : null },
    jqueryMap = {},

    setJqueryMap, checkDevice, asideScroll, initModule;

  setJqueryMap = function () {
    var $body = stateMap.$body;
    jqueryMap = {
      $body       : $body,
      $header     : $body.find('.header'),
      $source     : $body.find('.source'),
      $aside      : $body.find('.aside'),
      $aside_card : $body.find('.aside-card')
    };
  };

  checkDevice = function () {};

  asideScroll = function () {
    var
      header_ht  = jqueryMap.$header.height(),
      source_ht  = jqueryMap.$source.height();

      $(window).scroll(function () {
        if ( $(window).scrollTop() > header_ht + source_ht ) {
          jqueryMap.$aside.css({
            position    : 'fixed',
            top         : 0,
            marginLeft : 930
          });
        } else {
          jqueryMap.$aside.css({ position : '', margin : '' });
        }
      });
  };

  initModule = function ( $body ) {
    stateMap.$body = $body;
    setJqueryMap();

    asideScroll();
    checkDevice();
  };

  return { initModule : initModule };
}());
