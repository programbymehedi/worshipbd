/*!
 * Before After Slide Viewer - JavaScript ( jQUery plugin) for Before After Viewer
 *
 * Copyright (c) 2021 MAMEDUL ISLAM
 *
 * Licensed under the MIT license:
 *   https://opensource.org/licenses/MIT
 *
 * Project home:
 *   https://mamedul.gitlab.io/dev-projects/jquery-before-after-slider
 *
 * Version: 1.0.0
 */
!function(e) {
    "use strict";
    jQuery.fn.beforeAfter = function(t) {
        var o = jQuery.extend({
            movable: !0,
            clickMove: !0,
            alwaysShow: !0,
            position: 50,
            opacity: .4,
            activeOpacity: 1,
            hoverOpacity: .8,
            separatorColor: "#ffffff",
            bulletColor: "#ffffff",
            arrowColor: "#333333"
        }, t);
        return this.each(function() {
            !function(t) {
                if (2 == jQuery(t).children().length) {
                    var r = e(t).children()[0]
                      , n = e(t).children()[1]
                      , i = e(t).css("position")
                      , s = (e(t).css("z-index"),
                    e(t).css("overflow"))
                      , c = e(r).css("position")
                      , a = e(r).css("top")
                      , u = e(r).css("left")
                      , d = e(r).css("width")
                      , l = e(r).css("height")
                      , p = e(r).css("z-Index")
                      , h = "position:" + c + ";top:" + a + ";left:" + u + ";width:" + d + ";height:" + l + ";z-index:" + p + ";float:" + e(r).css("float")
                      , y = "position:" + e(n).css("position") + ";top:" + e(n).css("top") + ";left:" + e(n).css("left") + ";width:" + e(n).css("width") + ";height:" + e(n).css("height") + ";z-index:" + e(n).css("z-Index");
                    jQuery(t).attr("data-bareservedstyle", "position:" + i + ";overflow:" + s),
                    jQuery(r).attr("data-bareservedstyle", h),
                    jQuery(n).attr("data-bareservedstyle", y);
                    var v = isNaN(parseInt(p)) ? 0 : parseInt(p)
                      , f = "-webkit-user-select:none;-ms-user-select:none;user-select:none;";
                    jQuery(t).css({
                        position: "relative",
                        overflow: "hidden"
                    }),
                    jQuery(r).css({
                        position: "relative",
                        top: "0",
                        left: "0",
                        width: "100%"
                    }),
                    jQuery(n).css({
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "auto",
                        height: "100%",
                        "z-index": v + 1
                    });
                    var m = document.createElement("DIV");
                    m.setAttribute("style", "position:relative !important;width:100% !important;height:100%  !important;" + f),
                    jQuery(r).clone({
                        withDataAndEvents: !0
                    }).appendTo(m);
                    var j = document.createElement("DIV");
                    j.setAttribute("style", "position:absolute !important;width:" + o.position + "% !important;height:100% !important;top:0px !important;right:0px !important;overflow:hidden !important;" + f),
                    jQuery(n).clone({
                        withDataAndEvents: !0
                    }).appendTo(j);
                    var Q = document.createElement("I");
                    Q.setAttribute("style", "border:solid black;border-width:0 2px 2px 0;display:inline-block;padding:3px;transform:rotate(135deg);-webkit-transform:rotate(135deg);");
                    var g = document.createElement("I");
                    g.setAttribute("style", "border:solid black;border-width:2px 0 0 2px;display:inline-block;padding:3px;transform:rotate(135deg);-webkit-transform:rotate(135deg);");
                    var w = document.createElement("DIV");
                    w.setAttribute("style", "position:absolute;width:32px;height:32px;line-height:30px;padding:4xp;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;background-color:#fff;");
                    var b = document.createElement("DIV");
                    b.setAttribute("style", "position:relative;width:100%;height:100%;");
                    var x = document.createElement("DIV");
                    x.setAttribute("style", "position:absolute !important;width:2px !important;height:100% !important;top:0px !important;right:" + o.position + "% !important;overflow:visible !important;transform:translateX(50%) !important;background-color: #fff;cursor:e-resize;opacity:" + o.opacity + ";z-index:" + v + "2;" + f),
                    jQuery(Q).css("border-color", o.arrowColor),
                    jQuery(g).css("border-color", o.arrowColor),
                    jQuery(w).css("background-color", o.bulletColor),
                    jQuery(x).css("background-color", o.separatorColor),
                    w.append(Q),
                    w.append(g),
                    b.append(w),
                    x.append(b),
                    t.append(m),
                    t.append(j),
                    t.append(x),
                    jQuery(r).remove(),
                    jQuery(n).remove();
                    var M = function() {
                        jQuery(m).children().width() > 0 && jQuery(j).children().width(jQuery(m).children().width()),
                        jQuery(m).children().height() > 0 && jQuery(j).children().height(jQuery(m).children().height())
                    };
                    if (jQuery(window).on("resize", M),
                    o.movable) {
                        var k = !1;
                        o.clickMove && (jQuery(m).on("click", function() {
                            void 0 !== o.onMoveStart && o.onMoveStart();
                            var e = jQuery(t).width()
                              , r = jQuery(x).css("right")
                              , n = ((parseInt(r) + Math.min(.05 * e, 5)) / e * 100).toFixed(2)
                              , i = n > 100 ? 100 : n < 0 ? 0 : n;
                            i += "%",
                            jQuery(j).width(i),
                            jQuery(x).css("right", i),
                            void 0 !== o.onMoving && r != jQuery(x).css("right") && o.onMoving(),
                            void 0 !== o.onMoveEnd && o.onMoveEnd()
                        }),
                        jQuery(j).on("click", function() {
                            void 0 !== o.onMoveStart && o.onMoveStart();
                            var e = jQuery(t).width()
                              , r = jQuery(x).css("right")
                              , n = ((parseInt(r) - Math.min(.05 * e, 5)) / e * 100).toFixed(2)
                              , i = n > 100 ? 100 : n < 0 ? 0 : n;
                            i += "%",
                            jQuery(j).width(i),
                            jQuery(x).css("right", i),
                            void 0 !== o.onMoving && r != jQuery(x).css("right") && o.onMoving(),
                            void 0 !== o.onMoveEnd && o.onMoveEnd()
                        })),
                        jQuery(t).on("mouseenter", function() {
                            jQuery(x).css("opacity", o.hoverOpacity)
                        }),
                        jQuery(t).on("mouseleave", function() {
                            jQuery(x).css("opacity", o.opacity)
                        });
                        var E = function(e) {
                            var r = e.pageX || e.touches[0].clientX
                              , n = jQuery(t).offset().left
                              , i = jQuery(t).width()
                              , s = jQuery(x).css("right")
                              , c = ((n + i - r) / i * 100).toFixed(2)
                              , a = c > 100 ? 100 : c < 0 ? 0 : c;
                            a += "%",
                            jQuery(j).width(a),
                            jQuery(x).css("right", a),
                            void 0 !== o.onMoving && s != jQuery(x).css("right") && o.onMoving()
                        }
                          , I = function(e) {
                            k = !0,
                            jQuery(x).css("opacity", o.opacity),
                            void 0 !== o.onMoveEnd && o.onMoveEnd()
                        };
                        jQuery(x).on("mousedown", function(e) {
                            k = !1,
                            jQuery(x).css("opacity", o.activeOpacity),
                            void 0 !== o.onMoveStart && o.onMoveStart(),
                            jQuery(document).on("mousemove", E),
                            jQuery(document).on("mouseup", function(e) {
                                jQuery(document).off("mousemove", E),
                                k || I()
                            }),
                            jQuery(window).on("mouseup", function(e) {
                                jQuery(document).off("mousemove", E),
                                k || I()
                            })
                        }),
                        jQuery(x).on("touchstart", function(e) {
                            k = !1,
                            void 0 !== o.onMoveStart && o.onMoveStart(),
                            jQuery(x).css("opacity", o.activeOpacity),
                            jQuery(document).on("touchmove", E),
                            jQuery(document).on("touchcancel", function(e) {
                                jQuery(document).off("touchmove", E),
                                k || I()
                            }),
                            jQuery(window).on("touchcancel", function(e) {
                                jQuery(document).off("touchmove", E),
                                k || I()
                            }),
                            jQuery(document).on("touchend", function(e) {
                                jQuery(document).off("touchmove", E),
                                k || I()
                            })
                        })
                    }
                    M()
                } else
                    console.log("%cWarning: %s", "color:#e4672e;font-size:200%;", "BeforeAfter plugin need absolutely two childrens.")
            }(this)
        })
    }
}(jQuery);
