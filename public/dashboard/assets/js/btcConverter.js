$(document).ready(function() {
  $(".btcConvert").each(function() {
    var usd = String($(this).text());
    usd = usd.replace(/,/g, "");
    var btc = (Number(usd) / 9333.16).toPrecision(2);
    $(this).text(btc);
  });
});
