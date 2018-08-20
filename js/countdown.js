$(document).ready(function(){
  var today = new Date();
  var wedding_day = new Date(2019, 04, 04);

  var one_day = 1000*60*60*24;
  var days_until = Math.ceil((wedding_day.getTime()-today.getTime())/(one_day));

  var clock = $('.wed-countdown').FlipClock( 3600 * 24 * days_until,{
      clockFace: 'DailyCounter',
      countdown: true
  });
});
