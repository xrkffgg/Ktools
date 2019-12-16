export default {
  methods : {
    // 判断是否 F11
    isFullscreenForNoScroll(){
      var explorer = window.navigator.userAgent.toLowerCase();
      if(explorer.indexOf('chrome')>0){//webkit
        if (document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width) {
            // alert("全屏");
          return true
        } else {
            // alert("不全屏");
          return false
        }
      }else{//IE 9+  fireFox
        if (window.outerHeight === window.screen.height && window.outerWidth === window.screen.width) {
            // alert("全屏");
          return true
        } else {
            // alert("不全屏");
          return false
        }
      }
    },
  }
}