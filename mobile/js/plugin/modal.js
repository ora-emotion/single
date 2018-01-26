var Modal = function (modal, config_map) {
  var key_name, configMap, jqueryMap, modalShowStyle, modalHideStyle;

  configMap = {
    width       : 300,
    height      : 300,
    titleWidth  : '100%',
    titleHeight : 40,
    show_time   : 200,
    hide_time   : 200
  };

  jqueryMap = {
    modal : modal,
    $layer : modal.find('.modal-layer'),
    $box   : modal.find('.modal-box'),
    $title : modal.find('.modal-box-title'),
    $close : modal.find('.modal-box-close')
  };

  for (key_name in config_map) {
    if (config_map.hasOwnProperty(key_name)) {
      configMap[key_name] = config_map[key_name];
    }
  }

  // 初始化模态框样式
  initStyle = function () {
    // 模态框样式
    jqueryMap.$box.css({
      width  : configMap.width,
      height : configMap.height
    });

    // 模态框标题样式
    jqueryMap.$title.css({
      width      : configMap.titleWidth,
      height     : configMap.titleHeight,
      lineHeight : configMap.titleHeight + 'px'
    });

    // 关闭按钮位置
    jqueryMap.$close.css({
      top   : (jqueryMap.$title.height()/2) - (jqueryMap.$close.height()/2),
      right : (jqueryMap.$title.height()/2) - (jqueryMap.$close.height()/2)
    });
  };

  // 模态框显示时的样式
  modalShowStyle = function (fn) {
    // 模态框根容器样式
    jqueryMap.modal.css({ display : 'flex', opacity : 1 });
    jqueryMap.modal.animate({ opacity : 1 }, configMap.show_time);

    // 模态层样式
    jqueryMap.$layer.animate({ opacity : .5 }, configMap.show_time);

    // 模态框样式
    jqueryMap.$box.animate({ opacity : 1 }, configMap.show_time);

  };

  // 模态框隐藏式的样式
  modalHideStyle = function (fn) {
    // 模态框
    jqueryMap.$box.animate({ opacity : 0 }, configMap.hide_time);

    // 模态层
    jqueryMap.$layer.animate({ opacity : 0 }, configMap.hide_time);

    // 模态框根容器
    jqueryMap.modal.animate({ opacity : 0 }, configMap.hide_time, function () {
      jqueryMap.modal.css({ display : 'none' });
    });

    // 根容器
    if (fn) { fn(); }
  };

  this.showModal = function (fn) {
    modalShowStyle(fn);
  };

  this.hideModal = function (fn) {
    modalHideStyle(fn);
  };

  initStyle();

}
