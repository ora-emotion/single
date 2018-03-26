/**
 * @file name    : util.js
 * @created time : 2018-01-24 11:10:16
 * @author       : smpower
 * @email        : bzsjxhywrf@outlook.com
 * @github       : https://github.com/smpower/
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    manerr   : 50,
  newcap : true, nomen   : true, plueplue : true
  regexp : true, sloppy  : true, vars     : true,
  white
*/

/*global util */

var util = (function () {
  // 商桥插件
  brief = function () {
    var _hmt, hm, s;

    _hmt   = _hmt || [];
    hm     = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?9efdfba09708c900c79031787d1f9f81";
    s      = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  };

  return { brief : brief }
}());
