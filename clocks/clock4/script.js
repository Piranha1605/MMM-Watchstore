$(document).ready(function() {
  var padder = function(n) {
    return (n<10 ? '0': '') + n;
  };
  var changeMe = function(ele, val) {
    if (ele.data('val') === val) {
      return; 
    }
    ele.data('val', val);
    ele.parent().toggleClass('flip');
    ele.fadeOut(100, function() {
      $(this).html(val).fadeIn(100); 
    });
    ele.html(val);
  };
  var hourC = $('.hour .clock-val');
  var minC = $('.minute .clock-val');
  var secC = $('.second .clock-val');
  window.setInterval(function(){
    var d = new Date();
  
    changeMe(hourC, padder(d.getHours()));
    changeMe(minC, padder(d.getMinutes()));
    changeMe(secC, padder(d.getSeconds()));
  }, 1000);
});