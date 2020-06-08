(function() {
  var digits, hour1, hour2, minute1, minute2, period, second1, second2, updateClock;

  digits = $('.d');

  hour1 = $('.h1');

  hour2 = $('.h2');

  minute1 = $('.m1');

  minute2 = $('.m2');

  second1 = $('.s1');

  second2 = $('.s2');

  period = $('.per');

  updateClock = function() {
    var d, h, m, p, s;
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    if (h >= 12) {
      p = 'pm';
    } else {
      p = 'am';
    }
    if (h >= 13) {
      h = '' + h - 12;
    } else {
      h = '' + h;
    }
    if (h < 10) {
      h = '0' + h;
    } else {
      h = '' + h;
    }
    if (h === '00') {
      h = '12';
    }
    if (m < 10) {
      m = '0' + m;
    } else {
      m = '' + m;
    }
    if (s < 10) {
      s = '0' + s;
    } else {
      s = '' + s;
    }
    digits.removeClass('d0 d1 d2 d3 d4 d5 d6 d7 d8 d9');
    hour1.addClass('d' + h.charAt(0));
    hour2.addClass('d' + h.charAt(1));
    minute1.addClass('d' + m.charAt(0));
    minute2.addClass('d' + m.charAt(1));
    second1.addClass('d' + s.charAt(0));
    second2.addClass('d' + s.charAt(1));
    period.removeClass('am pm');
    return period.addClass(p);
  };

  updateClock();

  setInterval(updateClock, 250);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUE7O0VBQUEsTUFBQSxHQUFTLENBQUEsQ0FBRSxJQUFGOztFQUNULEtBQUEsR0FBUSxDQUFBLENBQUUsS0FBRjs7RUFDUixLQUFBLEdBQVEsQ0FBQSxDQUFFLEtBQUY7O0VBQ1IsT0FBQSxHQUFVLENBQUEsQ0FBRSxLQUFGOztFQUNWLE9BQUEsR0FBVSxDQUFBLENBQUUsS0FBRjs7RUFDVixPQUFBLEdBQVUsQ0FBQSxDQUFFLEtBQUY7O0VBQ1YsT0FBQSxHQUFVLENBQUEsQ0FBRSxLQUFGOztFQUNWLE1BQUEsR0FBUyxDQUFBLENBQUUsTUFBRjs7RUFDVCxXQUFBLEdBQWMsUUFBQSxDQUFBLENBQUE7QUFDWixRQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQTtJQUFBLENBQUEsR0FBSSxJQUFJLElBQUosQ0FBQTtJQUNKLENBQUEsR0FBSSxDQUFDLENBQUMsUUFBRixDQUFBO0lBQ0osQ0FBQSxHQUFJLENBQUMsQ0FBQyxVQUFGLENBQUE7SUFDSixDQUFBLEdBQUksQ0FBQyxDQUFDLFVBQUYsQ0FBQTtJQUNKLElBQUcsQ0FBQSxJQUFLLEVBQVI7TUFBZ0IsQ0FBQSxHQUFJLEtBQXBCO0tBQUEsTUFBQTtNQUE4QixDQUFBLEdBQUksS0FBbEM7O0lBQ0EsSUFBRyxDQUFBLElBQUssRUFBUjtNQUFnQixDQUFBLEdBQUksRUFBQSxHQUFLLENBQUwsR0FBUyxHQUE3QjtLQUFBLE1BQUE7TUFBcUMsQ0FBQSxHQUFJLEVBQUEsR0FBSyxFQUE5Qzs7SUFDQSxJQUFHLENBQUEsR0FBSSxFQUFQO01BQWUsQ0FBQSxHQUFJLEdBQUEsR0FBTSxFQUF6QjtLQUFBLE1BQUE7TUFBZ0MsQ0FBQSxHQUFJLEVBQUEsR0FBSyxFQUF6Qzs7SUFDQSxJQUFHLENBQUEsS0FBSyxJQUFSO01BQWtCLENBQUEsR0FBSSxLQUF0Qjs7SUFDQSxJQUFHLENBQUEsR0FBSSxFQUFQO01BQWUsQ0FBQSxHQUFJLEdBQUEsR0FBTSxFQUF6QjtLQUFBLE1BQUE7TUFBZ0MsQ0FBQSxHQUFJLEVBQUEsR0FBSyxFQUF6Qzs7SUFDQSxJQUFHLENBQUEsR0FBSSxFQUFQO01BQWUsQ0FBQSxHQUFJLEdBQUEsR0FBTSxFQUF6QjtLQUFBLE1BQUE7TUFBZ0MsQ0FBQSxHQUFJLEVBQUEsR0FBSyxFQUF6Qzs7SUFDQSxNQUFNLENBQUMsV0FBUCxDQUFtQiwrQkFBbkI7SUFDQSxLQUFLLENBQUMsUUFBTixDQUFlLEdBQUEsR0FBTSxDQUFDLENBQUMsTUFBRixDQUFTLENBQVQsQ0FBckI7SUFDQSxLQUFLLENBQUMsUUFBTixDQUFlLEdBQUEsR0FBTSxDQUFDLENBQUMsTUFBRixDQUFTLENBQVQsQ0FBckI7SUFDQSxPQUFPLENBQUMsUUFBUixDQUFpQixHQUFBLEdBQU0sQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFULENBQXZCO0lBQ0EsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsR0FBQSxHQUFNLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBVCxDQUF2QjtJQUNBLE9BQU8sQ0FBQyxRQUFSLENBQWlCLEdBQUEsR0FBTSxDQUFDLENBQUMsTUFBRixDQUFTLENBQVQsQ0FBdkI7SUFDQSxPQUFPLENBQUMsUUFBUixDQUFpQixHQUFBLEdBQU0sQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFULENBQXZCO0lBQ0EsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsT0FBbkI7V0FDQSxNQUFNLENBQUMsUUFBUCxDQUFnQixDQUFoQjtFQW5CWTs7RUFvQmQsV0FBQSxDQUFBOztFQUNBLFdBQUEsQ0FBWSxXQUFaLEVBQXlCLEdBQXpCO0FBN0JBIiwic291cmNlc0NvbnRlbnQiOlsiZGlnaXRzID0gJCAnLmQnXG5ob3VyMSA9ICQgJy5oMSdcbmhvdXIyID0gJCAnLmgyJ1xubWludXRlMSA9ICQgJy5tMSdcbm1pbnV0ZTIgPSAkICcubTInXG5zZWNvbmQxID0gJCAnLnMxJ1xuc2Vjb25kMiA9ICQgJy5zMidcbnBlcmlvZCA9ICQgJy5wZXInXG51cGRhdGVDbG9jayA9IC0+XHRcbiAgZCA9IG5ldyBEYXRlKClcbiAgaCA9IGQuZ2V0SG91cnMoKVxuICBtID0gZC5nZXRNaW51dGVzKClcbiAgcyA9IGQuZ2V0U2Vjb25kcygpXG4gIGlmIGggPj0gMTIgdGhlbiBwID0gJ3BtJyBlbHNlIHAgPSAnYW0nXG4gIGlmIGggPj0gMTMgdGhlbiBoID0gJycgKyBoIC0gMTIgZWxzZSBoID0gJycgKyBoXG4gIGlmIGggPCAxMCB0aGVuIGggPSAnMCcgKyBoIGVsc2UgaCA9ICcnICsgaFxuICBpZiBoID09ICcwMCcgdGhlbiBoID0gJzEyJ1xuICBpZiBtIDwgMTAgdGhlbiBtID0gJzAnICsgbSBlbHNlIG0gPSAnJyArIG1cbiAgaWYgcyA8IDEwIHRoZW4gcyA9ICcwJyArIHMgZWxzZSBzID0gJycgKyBzIFx0XHRcbiAgZGlnaXRzLnJlbW92ZUNsYXNzICdkMCBkMSBkMiBkMyBkNCBkNSBkNiBkNyBkOCBkOSdcbiAgaG91cjEuYWRkQ2xhc3MgJ2QnICsgaC5jaGFyQXQgMFxuICBob3VyMi5hZGRDbGFzcyAnZCcgKyBoLmNoYXJBdCAxXG4gIG1pbnV0ZTEuYWRkQ2xhc3MgJ2QnICsgbS5jaGFyQXQgMFxuICBtaW51dGUyLmFkZENsYXNzICdkJyArIG0uY2hhckF0IDFcbiAgc2Vjb25kMS5hZGRDbGFzcyAnZCcgKyBzLmNoYXJBdCAwXG4gIHNlY29uZDIuYWRkQ2xhc3MgJ2QnICsgcy5jaGFyQXQgMVxuICBwZXJpb2QucmVtb3ZlQ2xhc3MgJ2FtIHBtJ1xuICBwZXJpb2QuYWRkQ2xhc3MgcFxudXBkYXRlQ2xvY2soKVxuc2V0SW50ZXJ2YWwgdXBkYXRlQ2xvY2ssIDI1MCJdfQ==
//# sourceURL=coffeescript