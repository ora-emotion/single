var single = (function () {

    var
        configMap = {},
        stateMap = { $container : null },
        jqueryMap = {},

        setJqueryMap, asideScroll, onClick, initModule
    ;

    setJqueryMap = function () {
        var $container = stateMap.$container;

        jqueryMap = {
      		  $container   : $container,
      			$header      : $container.find('header'),
      			$aside       : $container.find('aside'),
      			$bitch       : $container.find('.bitch'),
      			$bitch_close : $container.find('.wechat-modal .modal-close-btn')
    		};
    };

    asideScroll = function () {
        var
            header_ht = jqueryMap.$header.height()
        ;

        $(window).scroll(function () {
            if ( $(window).scrollTop() > header_ht ) {
                jqueryMap.$aside.css({
                    position   : 'fixed',
                    top        : 0,
                    marginLeft : 770
                });
            } else {
                jqueryMap.$aside.css({
                    position   : 'absolute',
                    top        : 242,
                    marginLeft : 770
                });
            }
        });

    };

    onClick = function () {
  	  var
  		 $bitch       = jqueryMap.$bitch,
  		 $bitch_close = jqueryMap.$bitch_close,
  		 $bitch_modal = jqueryMap.$bitch_modal,
  		 wechatModal  = new Modal($('.wechat-modal'), {
  		   width       : 280,
  			 height      : 120,
  			 titleHeight : 30
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

    initModule = function ( $container ) {
        stateMap.$container = $container;
        setJqueryMap();

        asideScroll();
        onClick();
    };

    return { initModule : initModule }
}())
