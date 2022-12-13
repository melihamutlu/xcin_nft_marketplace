!(function (c) {
  function e(n) {
    return n < 10 ? "0" + n : n;
  }
  (c.fn.showclock = function () {
    var n = new Date(),
      o = c(this).data("date").split("-"),
      t = [0, 0];
    if (
      (null != c(this).data("time") && (t = c(this).data("time").split(":")),
      (a =
        new Date(o[0], o[1] - 1, o[2], t[0], t[1]).getTime() / 1e3 -
        n.getTime() / 1e3) <= 0 || isNaN(a))
    )
      return this.hide(), this;
    var s = Math.floor(a / 86400);
    a %= 86400;
    o = Math.floor(a / 3600);
    a %= 3600;
    var t = Math.floor(a / 60),
      a = Math.floor(a % 60),
      n = "";
    0 != s &&
      ((n += "<div class='countdown-container days'>"),
      (n += "<span class='countdown-value days-bottom'>" + e(s) + "</span>"),
      (n += "<span class='countdown-heading days-top'>:</span>"),
      (n += "</div>")),
      (n += "<div class='countdown-container hours'>"),
      (n += "<span class='countdown-value hours-bottom'>" + e(o) + "</span>"),
      (n += "<span class='countdown-heading hours-top'>:</span>"),
      (n += "</div>"),
      (n += "<div class='countdown-container minutes'>"),
      (n += "<span class='countdown-value minutes-bottom'>" + e(t) + "</span>"),
      (n += "<span class='countdown-heading minutes-top'>:</span>"),
      (n += "</div>"),
      (n += "<div class='countdown-container seconds'>"),
      (n += "<span class='countdown-value seconds-bottom'>" + e(a) + "</span>"),
      (n += "<span class='countdown-heading seconds-top'></span>"),
      this.html((n += "</div>"));
  }),
    (c.fn.countdown = function () {
      var n = c(this);
      n.showclock(),
        setInterval(function () {
          n.showclock();
        }, 1e3);
    });
})(jQuery),
  jQuery(document).ready(function () {
    0 < jQuery(".countdown").length &&
      jQuery(".countdown").each(function () {
        jQuery(this).countdown();
      });
  });
