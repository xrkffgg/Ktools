/*
 * Tween.js
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间）。
 * you can visit 'https://www.zhangxinxu.com/study/201612/how-to-use-tween-js.html' to get effect
*/
var Tween = {
    Linear: function(t, b, c, d) { 
        return c * t / d + b; 
    },
    Quad: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c *(t /= d)*(t-2) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return c * ((t = t/d - 1) * t * t + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t*t + b;
            return c / 2*((t -= 2) * t * t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t*t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c * ((t = t/d - 1) * t * t*t - 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return c * ((t = t/d - 1) * t * t * t * t + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2*((t -= 2) * t * t * t * t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t, b, c, d) {
            return (t==d) ? b + c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t/d - 1) * t) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t, b, c, d, a, p) {
            var s;
            if (t==0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                s = p / 4;
                a = c;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOut: function(t, b, c, d, a, p) {
            var s;
            if (t==0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                a = c; 
                s = p / 4;
            } else {
                s = p/(2*Math.PI) * Math.asin(c/a);
            }
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        },
        easeInOut: function(t, b, c, d, a, p) {
            var s;
            if (t==0) return b;
            if ((t /= d / 2) == 2) return b+c;
            if (typeof p == "undefined") p = d * (.3 * 1.5);
            if (!a || a < Math.abs(c)) {
                a = c; 
                s = p / 4;
            } else {
                s = p / (2  *Math.PI) * Math.asin(c / a);
            }
            if (t < 1) return -.5 * (a * Math.pow(2, 10* (t -=1 )) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p ) * .5 + c + b;
        }
    },
    Back: {
        easeIn: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOut: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * ((t = t/d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOut: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158; 
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2*((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t, b, c, d) {
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOut: function(t, b, c, d) {
            if (t < d / 2) {
                return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            } else {
                return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        }
    }
  }
Math.tween = Tween;

/**!
 * @author zhangxinxu(.com)
 * @description 基于SVG feDisplacementMap滤镜实现的任意元素点击水波效果
 * @link http://www.zhangxinxu.com/wordpress/?p=6626
 * @license MIT 保留这段注释和说明
 */

var dataDisplacementImg = function () {
    var t = document.createElement("canvas");
    if (!t.getContext) {
        return
    }
    var e = t.getContext("2d");
    var r = 512,
        a = 512,
        i = 250,
        n = 100;
    var o = i - n;
    t.width = r;
    t.height = a;
    var l = function (t, r, a, o) {
        var l = 2 * Math.PI / o.length;
        var f = 0;
        var s = null;
        var c = null,
            u = null;
        for (var d = 0; d < o.length; d++) {
            c = o[d];
            u = o[(d + 1) % o.length];
            var p = t + Math.cos(f) * a;
            var g = t + Math.cos(f + l) * a;
            var v = r + Math.sin(f) * a;
            var h = r + Math.sin(f + l) * a;
            e.beginPath();
            s = e.createLinearGradient(p, v, g, h);
            s.addColorStop(0, c);
            s.addColorStop(1, u);
            e.strokeStyle = s;
            e.arc(t, r, a, f, f + l);
            e.lineWidth = i - n;
            e.stroke();
            e.closePath();
            f += l
        }
    };
    e.beginPath();
    e.arc(r / 2, a / 2, i, 0, Math.PI * 2);
    e.fillStyle = "#7f7f7f";
    e.fill();
    l(r / 2, a / 2, n + o / 2, ["rgb(255,0,0)", "rgb(0, 255, 0)", "rgb(255,0,0)", "rgb(0, 255, 0)"]);
    var f = e.createRadialGradient(r / 2, a / 2, n, r / 2, a / 2, i);
    f.addColorStop(0, "rgba(127,127,127,1)");
    f.addColorStop(17 / o, "rgba(115,115,115,.8)");
    f.addColorStop(25 / o, "rgba(115,115,115,0.1)");
    f.addColorStop(28 / o, "rgba(115,115,115,0.1)");
    f.addColorStop(37 / o, "rgba(115,104,104,.8)");
    f.addColorStop(43 / o, "rgba(115,104,104,1)");
    f.addColorStop(44 / o, "rgba(127,127,127,1)");
    f.addColorStop(50 / o, "rgba(127,127,127,.6)");
    f.addColorStop(54 / o, "rgba(127,127,127,0)");
    f.addColorStop(61 / o, "rgba(0,0,0,0)");
    f.addColorStop(67 / o, "rgba(0,0,0,1)");
    f.addColorStop(78 / o, "rgba(0,0,0,1)");
    f.addColorStop(88 / o, "rgba(0,0,0,0)");
    f.addColorStop(100 / o, "rgba(0,0,0,0)");
    f.addColorStop(108 / o, "rgba(0,0,0,1)");
    f.addColorStop(117 / o, "rgba(0,0,0,1)");
    f.addColorStop(136 / o, "rgba(0,0,0,0)");
    f.addColorStop(1, "rgba(0,0,0,0)");
    e.beginPath();
    e.arc(r / 2, a / 2, i, 0, Math.PI * 2);
    e.fillStyle = f;
    e.fill();
    return t.toDataURL()
}();

if (!window.Tween) {
    Tween = {}
}

if (!Tween.Linear) {
    Tween.Linear = function (t, e, r, a) {
        return r * t / a + e
    }
}
if (!Math.animation) {
    Math.animation = function (t, e, r, a, i) {
        var n = function (t) {
            return typeof t == "undefined"
        };
        var o = function (t) {
            return typeof t == "function"
        };
        var l = function (t) {
            return typeof t == "number"
        };
        var f = function (t) {
            return typeof t == "string"
        };
        var s = function (t) {
            if (l(t)) {
                return t
            } else if (f(t)) {
                if (/\d+m?s$/.test(t)) {
                    if (/ms/.test(t)) {
                        return 1 * t.replace("ms", "")
                    }
                    return 1e3 * t.replace("s", "")
                } else if (/^\d+$/.test(t)) {
                    return +t
                }
            }
            return -1
        };
        var c = Tween;
        var u = {
            duration: 300,
            easing: "Linear",
            callback: function () {}
        };
        var d = function (t) {
            if (o(t)) {
                u.callback = t
            } else if (s(t) != -1) {
                u.duration = s(t)
            } else if (f(t)) {
                u.easing = t
            }
        };
        d(r);
        d(a);
        d(i);
        if (!window.requestAnimationFrame) {
            requestAnimationFrame = function (t) {
                return setTimeout(t, 17)
            }
        }
        var p = 0;
        var g = Math.ceil(u.duration / 17);
        var v = null;
        u.easing = u.easing.slice(0, 1).toUpperCase() + u.easing.slice(1);
        var h = u.easing.split(".");
        var m;
        if (h.length == 1) {
            m = c[h[0]]
        } else if (h.length == 2) {
            m = c[h[0]] && c[h[0]][h[1]]
        }
        var b = function () {
            var r = m(p, t, e - t, g);
            p++;
            if (p <= g) {
                u.callback(r);
                v = requestAnimationFrame(b)
            } else {
                u.callback(e, true)
            }
        };
        b();
        return function () {
            return v
        }
    }
}
var E_ONLY = null;

var rippleEffect = function (t) {
    if (!t || !history.pushState) {
        return
    }
    var e = navigator.userAgent;
    if (/Safari|iPhone/i.test(e) && /chrome/i.test(e) == false) {
        window.console && console.info("Safari support but bug, so avoid!");
        return
    }
    if (typeof t == "string") {
        [].slice.call(document.querySelectorAll(t)).forEach(function (t) {
            rippleEffect(t)
        });
        return
    }
    var r = "filterRipple";
    var a = document.getElementById(r);
    if (!a) {
        document.body.insertAdjacentHTML("afterbegin",
            '<svg style="position:absolute;height:0;clip:rect(0 0 0 0);"><defs><filter id="' + r +
            '"><feImage xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + dataDisplacementImg +
            '" x="0" y="0" width="512" height="512" result="ripple"></feImage><feDisplacementMap xChannelSelector="G" yChannelSelector="R" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="0"></feDisplacementMap><feComposite operator="in" in2="ripple"></feComposite><feComposite in2="SourceGraphic"></feComposite></filter></defs></svg>'
        )
    }
    var i = document.querySelector("#" + r + " feImage");
    var n = document.querySelector("#" + r + " feDisplacementMap");
    var o = null;
    var l = null;
    t.addEventListener("click", function (e) {
        if (o) {
            cancelAnimationFrame(o())
        }
        if (l) {
            cancelAnimationFrame(l())
        }
        if (E_ONLY && E_ONLY != this) {
            E_ONLY.style.filter = ""
        }
        t.style.filter = "url(#" + r + ")";
        var a = t.offsetWidth;
        var f = t.offsetHeight;
        var s = e.clientX;
        var c = e.clientY;
        var u = t.getBoundingClientRect();
        var d = u.left;
        var p = u.top;
        var g = s - d;
        var v = c - p;
        i.setAttribute("x", g);
        i.setAttribute("y", v);
        i.setAttribute("width", 0);
        i.setAttribute("height", 0);
        var h = Math.min(512, Math.max(a, f) * 2);
        var m = 30 * h / 512;
        var b = 2e3 * h / 512,
            w = 2100 * h / 512;
        l = Math.animation(m, 0, b, function (t) {
            n.setAttribute("scale", t)
        });
        o = Math.animation(0, h, w, function (e, r) {
            i.setAttribute("x", g - e / 2);
            i.setAttribute("y", v - e / 2);
            i.setAttribute("width", e);
            i.setAttribute("height", e);
            if (r) {
                t.style.filter = ""
            }
        });
        E_ONLY = this
    })
};

export {
    rippleEffect
}