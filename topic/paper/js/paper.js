var paper = (function() {
  $('.page-container').css('margin-top', '16px');
})();

jQuery(document).ready(function() {
  UIIdleTimeout.init();
  initDashboardDaterange('YYYYMMDD');
  initDom();
  HeadFix();
});