/**
 * @file name    : single05.js
 * @created time : 2018-01-17 20:13:23
 * @author       : smpower
 * @email        : bzsjxhywrf@outlook.com
 * @github       : https://github.com/smpower/
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    manerr   : 50,
  newcap : true, nomen   : true, plueplue : true
  regexp : true, sloppy  : true, vars     : true,
  white  : true
*/

/*global single */

var single = (function () {

  // ---------------------- BEGIN MODULE SCOPE VARIABLES ---------------------
  var
    configMap = {},
    stateMap = { $container : null },
    jqueryMap = {},

    setJqueryMap, onClick, swiper, initModule
  ;
  // ----------------------- END MODULE SCOPE VARIABLES ----------------------

  // -------------------------- BEGIN UTILITY METHODS ------------------------
  // example: getTrimmedString
  // -------------------------- BEGIN UTILITY METHODS ------------------------

  // ---------------------------- BEGIN DOM METHODS --------------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
		  $container        : $container,
			$header           : $container.find('header'),
			$aside            : $container.find('aside'),
			$bitch            : $container.find('.main-section01-btn'),
			$bitch_close      : $container.find('.wechat-modal .modal-close-btn'),
      $swiper_container : $container.find('.main-section03-banner .swiper-container')
		};
  };
  // End DOM method /setJqueryMap/
  // Begin DOM method /swiper/
  swiper = function () {
    var mySwiper = new Swiper(jqueryMap.$swiper_container, {
      autoplay   : 10000,                  // 自动播放
      pagination : '.swiper-pagination',   // 显示分页器
      loop       : true
    });
  };
  // End DOM method /swiper/
  // ----------------------------- END DOM METHODS ---------------------------

  // -------------------------- BEGIN EVENT HANDLERS -------------------------
  onClick = function () {
	  var
		 $bitch       = jqueryMap.$bitch,
		 $bitch_close = jqueryMap.$bitch_close,
		 $bitch_modal = jqueryMap.$bitch_modal,
		 wechatModal  = new Modal($('.wechat-modal'), {
		   width       : 280,
			 height      : 120,
			 titleHeight : 40
		 })
		;

    // 显示微信模态框
		$bitch.unbind('click').click(function showBitches() {
			wechatModal.showModal();
		});

		// 隐藏微信模态框 - 点击关闭按钮
		$bitch_close.unbind('click').click(function hideBitches() {
		  wechatModal.hideModal();
		});
	};
  // --------------------------- END EVENT HANDLERS --------------------------

  // -------------------------- BEGIN PUBLIC METHODS -------------------------
  // Begin public method /initModule/
  // Purpose   : Initializes module
  // Arguments :
  //   * $container the jquery element used by this feature
  // Returns   : true
  // Throws    : none
  //
  initModule = function ( $container ) {
	  stateMap.$container = $container;
		setJqueryMap();

		onClick();
    swiper();
	};
  // End public method /initModule/

  // return public methods
  return { initModule : initModule }
  // --------------------------- END PUBLIC METHODS --------------------------
}())
