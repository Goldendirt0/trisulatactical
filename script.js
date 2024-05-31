/*
 jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license  Bootstrap v4.5.3 (https://getbootstrap.com/)
 Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
!function(p, l) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = p.document ? l(p, !0) : function(p) {
        if (!p.document)
            throw Error("jQuery requires a window with a document");
        return l(p)
    }
    : l(p)
}("undefined" != typeof window ? window : this, function(p, l) {
    function I(b, h, a) {
        var c, n, f = (a = a || B).createElement("script");
        if (f.text = b,
        h)
            for (c in Hb)
                (n = h[c] || h.getAttribute && h.getAttribute(c)) && f.setAttribute(c, n);
        a.head.appendChild(f).parentNode.removeChild(f)
    }
    function A(b) {
        return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? oa[va.call(b)] || "object" : typeof b
    }
    function D(b) {
        var h = !!b && "length"in b && b.length
          , a = A(b);
        return !C(b) && !W(b) && ("array" === a || 0 === h || "number" == typeof h && 0 < h && h - 1 in b)
    }
    function w(b, h) {
        return b.nodeName && b.nodeName.toLowerCase() === h.toLowerCase()
    }
    function L(b, h, a) {
        return C(h) ? f.grep(b, function(b, c) {
            return !!h.call(b, c, b) !== a
        }) : h.nodeType ? f.grep(b, function(b) {
            return b === h !== a
        }) : "string" != typeof h ? f.grep(b, function(b) {
            return -1 < Ta.call(h, b) !== a
        }) : f.filter(h, b, a)
    }
    function F(b, h) {
        for (; (b = b[h]) && 1 !== b.nodeType; )
            ;
        return b
    }
    function H(b) {
        return b
    }
    function x(b) {
        throw b;
    }
    function N(b, h, a, c) {
        var n;
        try {
            b && C(n = b.promise) ? n.call(b).done(h).fail(a) : b && C(n = b.then) ? n.call(b, h, a) : h.apply(void 0, [b].slice(c))
        } catch (R) {
            a.apply(void 0, [R])
        }
    }
    function S() {
        B.removeEventListener("DOMContentLoaded", S);
        p.removeEventListener("load", S);
        f.ready()
    }
    function pa(b, h) {
        return h.toUpperCase()
    }
    function T(b) {
        return b.replace(Ib, "ms-").replace(Jb, pa)
    }
    function ia() {
        this.expando = f.expando + ia.uid++
    }
    function wa(b, h, a) {
        var c, n;
        if (void 0 === a && 1 === b.nodeType)
            if (c = "data-" + h.replace(Kb, "-$\x26").toLowerCase(),
            "string" == typeof (a = b.getAttribute(c))) {
                try {
                    a = "true" === (n = a) || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : Lb.test(n) ? JSON.parse(n) : n)
                } catch (R) {}
                X.set(b, h, a)
            } else
                a = void 0;
        return a
    }
    function ha(b, h, a, c) {
        var n, d, v = 20, e = c ? function() {
            return c.cur()
        }
        : function() {
            return f.css(b, h, "")
        }
        , k = e(), g = a && a[3] || (f.cssNumber[h] ? "" : "px"), m = b.nodeType && (f.cssNumber[h] || "px" !== g && +k) && ba.exec(f.css(b, h));
        if (m && m[3] !== g) {
            k /= 2;
            g = g || m[3];
            for (m = +k || 1; v--; )
                f.style(b, h, m + g),
                0 >= (1 - d) * (1 - (d = e() / k || .5)) && (v = 0),
                m /= d;
            m *= 2;
            f.style(b, h, m + g);
            a = a || []
        }
        return a && (m = +m || +k || 0,
        n = a[1] ? m + (a[1] + 1) * a[2] : +a[2],
        c && (c.unit = g,
        c.start = m,
        c.end = n)),
        n
    }
    function ca(b, h) {
        for (var a, c, d, e, k, g, m, r = [], q = 0, da = b.length; q < da; q++)
            (c = b[q]).style && (a = c.style.display,
            h ? ("none" === a && (r[q] = u.get(c, "display") || null,
            r[q] || (c.style.display = "")),
            "" === c.style.display && Ua(c) && (r[q] = (m = k = e = void 0,
            k = (d = c).ownerDocument,
            g = d.nodeName,
            (m = La[g]) || (e = k.body.appendChild(k.createElement(g)),
            m = f.css(e, "display"),
            e.parentNode.removeChild(e),
            "none" === m && (m = "block"),
            La[g] = m)))) : "none" !== a && (r[q] = "none",
            u.set(c, "display", a)));
        for (q = 0; q < da; q++)
            null != r[q] && (b[q].style.display = r[q]);
        return b
    }
    function M(b, h) {
        var a;
        return a = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(h || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(h || "*") : [],
        void 0 === h || h && w(b, h) ? f.merge([b], a) : a
    }
    function qa(b, h) {
        for (var a = 0, c = b.length; a < c; a++)
            u.set(b[a], "globalEval", !h || u.get(h[a], "globalEval"))
    }
    function Va(b, a, c, d, e) {
        for (var h, n, v, k, G = a.createDocumentFragment(), g = [], m = 0, r = b.length; m < r; m++)
            if ((h = b[m]) || 0 === h)
                if ("object" === A(h))
                    f.merge(g, h.nodeType ? [h] : h);
                else if (Mb.test(h)) {
                    n = n || G.appendChild(a.createElement("div"));
                    v = (sb.exec(h) || ["", ""])[1].toLowerCase();
                    v = U[v] || U._default;
                    n.innerHTML = v[1] + f.htmlPrefilter(h) + v[2];
                    for (v = v[0]; v--; )
                        n = n.lastChild;
                    f.merge(g, n.childNodes);
                    (n = G.firstChild).textContent = ""
                } else
                    g.push(a.createTextNode(h));
        G.textContent = "";
        for (m = 0; h = g[m++]; )
            if (d && -1 < f.inArray(h, d))
                e && e.push(h);
            else if (k = xa(h),
            n = M(G.appendChild(h), "script"),
            k && qa(n),
            c)
                for (v = 0; h = n[v++]; )
                    Aa.test(h.type || "") && c.push(h);
        return G
    }
    function Ga() {
        return !0
    }
    function ya() {
        return !1
    }
    function tb(b, h) {
        a: {
            try {
                var a = B.activeElement;
                break a
            } catch (v) {}
            a = void 0
        }
        return b === a == ("focus" === h)
    }
    function Ma(b, h, a, c, d, e) {
        var n, v;
        if ("object" == typeof h) {
            for (v in "string" != typeof a && (c = c || a,
            a = void 0),
            h)
                Ma(b, v, a, c, h[v], e);
            return b
        }
        if (null == c && null == d ? (d = a,
        c = a = void 0) : null == d && ("string" == typeof a ? (d = c,
        c = void 0) : (d = c,
        c = a,
        a = void 0)),
        !1 === d)
            d = ya;
        else if (!d)
            return b;
        return 1 === e && (n = d,
        (d = function(b) {
            return f().off(b),
            n.apply(this, arguments)
        }
        ).guid = n.guid || (n.guid = f.guid++)),
        b.each(function() {
            f.event.add(this, h, d, c, a)
        })
    }
    function Na(b, a, c) {
        c ? (u.set(b, a, !1),
        f.event.add(b, a, {
            namespace: !1,
            handler: function(b) {
                var h, n, d = u.get(this, a);
                if (1 & b.isTrigger && this[a])
                    if (d.length)
                        (f.event.special[a] || {}).delegateType && b.stopPropagation();
                    else {
                        if (d = Z.call(arguments),
                        u.set(this, a, d),
                        h = c(this, a),
                        this[a](),
                        d !== (n = u.get(this, a)) || h ? u.set(this, a, !1) : n = {},
                        d !== n)
                            return b.stopImmediatePropagation(),
                            b.preventDefault(),
                            n && n.value
                    }
                else
                    d.length && (u.set(this, a, {
                        value: f.event.trigger(f.extend(d[0], f.Event.prototype), d.slice(1), this)
                    }),
                    b.stopImmediatePropagation())
            }
        })) : void 0 === u.get(b, a) && f.event.add(b, a, Ga)
    }
    function eb(b, a) {
        return w(b, "table") && w(11 !== a.nodeType ? a : a.firstChild, "tr") && f(b).children("tbody")[0] || b
    }
    function ub(b) {
        return b.type = (null !== b.getAttribute("type")) + "/" + b.type,
        b
    }
    function Wa(b) {
        return "true/" === (b.type || "").slice(0, 5) ? b.type = b.type.slice(5) : b.removeAttribute("type"),
        b
    }
    function fb(b, a) {
        var h, c, d, e, k;
        if (1 === a.nodeType) {
            if (u.hasData(b) && (k = u.get(b).events))
                for (c in u.remove(a, "handle events"),
                k) {
                    var g = 0;
                    for (h = k[c].length; g < h; g++)
                        f.event.add(a, c, k[c][g])
                }
            X.hasData(b) && (d = X.access(b),
            e = f.extend({}, d),
            X.set(a, e))
        }
    }
    function ja(b, a, c, v) {
        a = vb(a);
        var h, n, e, k = 0, g = b.length, m = g - 1, r = a[0], da = C(r);
        if (da || 1 < g && "string" == typeof r && !y.checkClone && Xa.test(r))
            return b.each(function(h) {
                var n = b.eq(h);
                da && (a[0] = r.call(this, h, n.html()));
                ja(n, a, c, v)
            });
        if (g && (n = (h = Va(a, b[0].ownerDocument, !1, b, v)).firstChild,
        1 === h.childNodes.length && (h = n),
        n || v)) {
            for (e = (n = f.map(M(h, "script"), ub)).length; k < g; k++) {
                var q = h;
                k !== m && (q = f.clone(q, !0, !0),
                e && f.merge(n, M(q, "script")));
                c.call(b[k], q, k)
            }
            if (e)
                for (h = n[n.length - 1].ownerDocument,
                f.map(n, Wa),
                k = 0; k < e; k++)
                    q = n[k],
                    Aa.test(q.type || "") && !u.access(q, "globalEval") && f.contains(h, q) && (q.src && "module" !== (q.type || "").toLowerCase() ? f._evalUrl && !q.noModule && f._evalUrl(q.src, {
                        nonce: q.nonce || q.getAttribute("nonce")
                    }, h) : I(q.textContent.replace(d, ""), q, h))
        }
        return b
    }
    function gb(b, a, c) {
        for (var h = a ? f.filter(a, b) : b, n = 0; null != (a = h[n]); n++)
            c || 1 !== a.nodeType || f.cleanData(M(a)),
            a.parentNode && (c && xa(a) && qa(M(a, "script")),
            a.parentNode.removeChild(a));
        return b
    }
    function Ha(b, h, c) {
        var n, d, g, m, J = b.style;
        return (c = c || a(b)) && ("" !== (m = c.getPropertyValue(h) || c[h]) || xa(b) || (m = f.style(b, h)),
        !y.pixelBoxStyles() && e.test(m) && k.test(h) && (n = J.width,
        d = J.minWidth,
        g = J.maxWidth,
        J.minWidth = J.maxWidth = J.width = m,
        m = c.width,
        J.width = n,
        J.minWidth = d,
        J.maxWidth = g)),
        void 0 !== m ? m + "" : m
    }
    function Ya(b, a) {
        return {
            get: function() {
                if (!b())
                    return (this.get = a).apply(this, arguments);
                delete this.get
            }
        }
    }
    function Za(b) {
        var a;
        if (!(a = f.cssProps[b] || q[b])) {
            if (!(b in r)) {
                a: {
                    a = b;
                    for (var c = a[0].toUpperCase() + a.slice(1), d = m.length; d--; )
                        if ((a = m[d] + c)in r)
                            break a;
                    a = void 0
                }
                b = q[b] = a || b
            }
            a = b
        }
        return a
    }
    function wb(b, a, c) {
        return (b = ba.exec(a)) ? Math.max(0, b[2] - (c || 0)) + (b[3] || "px") : a
    }
    function hb(b, a, c, d, e, k) {
        var h = "width" === a ? 1 : 0
          , n = 0
          , v = 0;
        if (c === (d ? "border" : "content"))
            return 0;
        for (; 4 > h; h += 2)
            "margin" === c && (v += f.css(b, c + ka[h], !0, e)),
            d ? ("content" === c && (v -= f.css(b, "padding" + ka[h], !0, e)),
            "margin" !== c && (v -= f.css(b, "border" + ka[h] + "Width", !0, e))) : (v += f.css(b, "padding" + ka[h], !0, e),
            "padding" !== c ? v += f.css(b, "border" + ka[h] + "Width", !0, e) : n += f.css(b, "border" + ka[h] + "Width", !0, e));
        return !d && 0 <= k && (v += Math.max(0, Math.ceil(b["offset" + a[0].toUpperCase() + a.slice(1)] - k - v - n - .5)) || 0),
        v
    }
    function $a(b, h, c) {
        var d = a(b)
          , n = (!y.boxSizingReliable() || c) && "border-box" === f.css(b, "boxSizing", !1, d)
          , k = n
          , g = Ha(b, h, d)
          , m = "offset" + h[0].toUpperCase() + h.slice(1);
        if (e.test(g)) {
            if (!c)
                return g;
            g = "auto"
        }
        return (!y.boxSizingReliable() && n || !y.reliableTrDimensions() && w(b, "tr") || "auto" === g || !parseFloat(g) && "inline" === f.css(b, "display", !1, d)) && b.getClientRects().length && (n = "border-box" === f.css(b, "boxSizing", !1, d),
        (k = m in b) && (g = b[m])),
        (g = parseFloat(g) || 0) + hb(b, h, c || (n ? "border" : "content"), k, d, g) + "px"
    }
    function V(b, a, c, d, f) {
        return new V.prototype.init(b,a,c,d,f)
    }
    function ab() {
        ra && (!1 === B.hidden && p.requestAnimationFrame ? p.requestAnimationFrame(ab) : p.setTimeout(ab, f.fx.interval),
        f.fx.tick())
    }
    function ib() {
        return p.setTimeout(function() {
            P = void 0
        }),
        P = Date.now()
    }
    function bb(b, a) {
        var h, c = 0, d = {
            height: b
        };
        for (a = a ? 1 : 0; 4 > c; c += 2 - a)
            d["margin" + (h = ka[c])] = d["padding" + h] = b;
        return a && (d.opacity = d.width = b),
        d
    }
    function jb(b, a, c) {
        for (var h, d = (g.tweeners[a] || []).concat(g.tweeners["*"]), n = 0, f = d.length; n < f; n++)
            if (h = d[n].call(c, a, b))
                return h
    }
    function g(b, a, c) {
        var h, d = 0, n = g.prefilters.length, e = f.Deferred().always(function() {
            delete k.elem
        }), k = function() {
            if (h)
                return !1;
            var a = P || ib();
            a = Math.max(0, m.startTime + m.duration - a);
            for (var c = 1 - (a / m.duration || 0), d = 0, n = m.tweens.length; d < n; d++)
                m.tweens[d].run(c);
            return e.notifyWith(b, [m, c, a]),
            1 > c && n ? a : (n || e.notifyWith(b, [m, 1, 0]),
            e.resolveWith(b, [m]),
            !1)
        }, m = e.promise({
            elem: b,
            props: f.extend({}, a),
            opts: f.extend(!0, {
                specialEasing: {},
                easing: f.easing._default
            }, c),
            originalProperties: a,
            originalOptions: c,
            startTime: P || ib(),
            duration: c.duration,
            tweens: [],
            createTween: function(a, h) {
                a = f.Tween(b, m.opts, a, h, m.opts.specialEasing[a] || m.opts.easing);
                return m.tweens.push(a),
                a
            },
            stop: function(a) {
                var c = 0
                  , d = a ? m.tweens.length : 0;
                if (h)
                    return this;
                for (h = !0; c < d; c++)
                    m.tweens[c].run(1);
                return a ? (e.notifyWith(b, [m, 1, 0]),
                e.resolveWith(b, [m, a])) : e.rejectWith(b, [m, a]),
                this
            }
        });
        c = m.props;
        !function(b, a) {
            var h, c, d, n, e;
            for (h in b)
                if (d = a[c = T(h)],
                n = b[h],
                Array.isArray(n) && (d = n[1],
                n = b[h] = n[0]),
                h !== c && (b[c] = n,
                delete b[h]),
                (e = f.cssHooks[c]) && "expand"in e)
                    for (h in n = e.expand(n),
                    delete b[c],
                    n)
                        h in b || (b[h] = n[h],
                        a[h] = d);
                else
                    a[c] = d
        }(c, m.opts.specialEasing);
        for (; d < n; d++)
            if (a = g.prefilters[d].call(m, b, c, m.opts))
                return C(a.stop) && (f._queueHooks(m.elem, m.opts.queue).stop = a.stop.bind(a)),
                a;
        return f.map(c, jb, m),
        C(m.opts.start) && m.opts.start.call(b, m),
        m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always),
        f.fx.timer(f.extend(k, {
            elem: b,
            anim: m,
            queue: m.opts.queue
        })),
        m
    }
    function t(b) {
        return (b.match(aa) || []).join(" ")
    }
    function la(b) {
        return b.getAttribute && b.getAttribute("class") || ""
    }
    function sa(b) {
        return Array.isArray(b) ? b : "string" == typeof b && b.match(aa) || []
    }
    function kb(b, a, c, d) {
        var h;
        if (Array.isArray(a))
            f.each(a, function(a, h) {
                c || hc.test(b) ? d(b, h) : kb(b + "[" + ("object" == typeof h && null != h ? a : "") + "]", h, c, d)
            });
        else if (c || "object" !== A(a))
            d(b, a);
        else
            for (h in a)
                kb(b + "[" + h + "]", a[h], c, d)
    }
    function Ia(b) {
        return function(a, c) {
            "string" != typeof a && (c = a,
            a = "*");
            var h = 0
              , d = a.toLowerCase().match(aa) || [];
            if (C(c))
                for (; a = d[h++]; )
                    "+" === a[0] ? (a = a.slice(1) || "*",
                    (b[a] = b[a] || []).unshift(c)) : (b[a] = b[a] || []).push(c)
        }
    }
    function xb(b, a, c, d) {
        function h(k) {
            var v;
            return n[k] = !0,
            f.each(b[k] || [], function(b, f) {
                b = f(a, c, d);
                return "string" != typeof b || e || n[b] ? e ? !(v = b) : void 0 : (a.dataTypes.unshift(b),
                h(b),
                !1)
            }),
            v
        }
        var n = {}
          , e = b === Nb;
        return h(a.dataTypes[0]) || !n["*"] && h("*")
    }
    function Oa(b, a) {
        var h, c, d = f.ajaxSettings.flatOptions || {};
        for (h in a)
            void 0 !== a[h] && ((d[h] ? b : c || (c = {}))[h] = a[h]);
        return c && f.extend(!0, b, c),
        b
    }
    var ma = []
      , lb = Object.getPrototypeOf
      , Z = ma.slice
      , vb = ma.flat ? function(b) {
        return ma.flat.call(b)
    }
    : function(b) {
        return ma.concat.apply([], b)
    }
      , Pa = ma.push
      , Ta = ma.indexOf
      , oa = {}
      , va = oa.toString
      , cb = oa.hasOwnProperty
      , yb = cb.toString
      , zb = yb.call(Object)
      , y = {}
      , C = function(b) {
        return "function" == typeof b && "number" != typeof b.nodeType && "function" != typeof b.item
    }
      , W = function(b) {
        return null != b && b === b.window
    }
      , B = p.document
      , Hb = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    }
      , f = function(b, a) {
        return new f.fn.init(b,a)
    };
    f.fn = f.prototype = {
        jquery: "3.6.0",
        constructor: f,
        length: 0,
        toArray: function() {
            return Z.call(this)
        },
        get: function(b) {
            return null == b ? Z.call(this) : 0 > b ? this[b + this.length] : this[b]
        },
        pushStack: function(b) {
            b = f.merge(this.constructor(), b);
            return b.prevObject = this,
            b
        },
        each: function(b) {
            return f.each(this, b)
        },
        map: function(b) {
            return this.pushStack(f.map(this, function(a, c) {
                return b.call(a, c, a)
            }))
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(f.grep(this, function(b, a) {
                return (a + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(f.grep(this, function(b, a) {
                return a % 2
            }))
        },
        eq: function(b) {
            var a = this.length;
            b = +b + (0 > b ? a : 0);
            return this.pushStack(0 <= b && b < a ? [this[b]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Pa,
        sort: ma.sort,
        splice: ma.splice
    };
    f.extend = f.fn.extend = function() {
        var b, a, c, d, e, k = arguments[0] || {}, g = 1, m = arguments.length, r = !1;
        "boolean" == typeof k && (r = k,
        k = arguments[g] || {},
        g++);
        "object" == typeof k || C(k) || (k = {});
        for (g === m && (k = this,
        g--); g < m; g++)
            if (null != (b = arguments[g]))
                for (a in b) {
                    var q = b[a];
                    "__proto__" !== a && k !== q && (r && q && (f.isPlainObject(q) || (d = Array.isArray(q))) ? (c = k[a],
                    e = d && !Array.isArray(c) ? [] : d || f.isPlainObject(c) ? c : {},
                    d = !1,
                    k[a] = f.extend(r, e, q)) : void 0 !== q && (k[a] = q))
                }
        return k
    }
    ;
    f.extend({
        expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(b) {
            throw Error(b);
        },
        noop: function() {},
        isPlainObject: function(b) {
            var a, c;
            return !(!b || "[object Object]" !== va.call(b)) && (!(a = lb(b)) || "function" == typeof (c = cb.call(a, "constructor") && a.constructor) && yb.call(c) === zb)
        },
        isEmptyObject: function(b) {
            for (var a in b)
                return !1;
            return !0
        },
        globalEval: function(b, a, c) {
            I(b, {
                nonce: a && a.nonce
            }, c)
        },
        each: function(b, a) {
            var h, c = 0;
            if (D(b))
                for (h = b.length; c < h && !1 !== a.call(b[c], c, b[c]); c++)
                    ;
            else
                for (c in b)
                    if (!1 === a.call(b[c], c, b[c]))
                        break;
            return b
        },
        makeArray: function(b, a) {
            a = a || [];
            return null != b && (D(Object(b)) ? f.merge(a, "string" == typeof b ? [b] : b) : Pa.call(a, b)),
            a
        },
        inArray: function(b, a, c) {
            return null == a ? -1 : Ta.call(a, b, c)
        },
        merge: function(b, a) {
            for (var h = +a.length, c = 0, d = b.length; c < h; c++)
                b[d++] = a[c];
            return b.length = d,
            b
        },
        grep: function(b, a, c) {
            var h = []
              , d = 0
              , n = b.length;
            for (c = !c; d < n; d++)
                !a(b[d], d) !== c && h.push(b[d]);
            return h
        },
        map: function(b, a, c) {
            var h, d, n = 0, f = [];
            if (D(b))
                for (h = b.length; n < h; n++)
                    null != (d = a(b[n], n, c)) && f.push(d);
            else
                for (n in b)
                    null != (d = a(b[n], n, c)) && f.push(d);
            return vb(f)
        },
        guid: 1,
        support: y
    });
    "function" == typeof Symbol && (f.fn[Symbol.iterator] = ma[Symbol.iterator]);
    f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(b, a) {
        oa["[object " + a + "]"] = a.toLowerCase()
    });
    var na = function(b) {
        function a(b, a, c, h) {
            var d, f, n, e, k = a && a.ownerDocument;
            var g = a ? a.nodeType : 9;
            if (c = c || [],
            "string" != typeof b || !b || 1 !== g && 9 !== g && 11 !== g)
                return c;
            if (!h && (I(a),
            a = a || K,
            N)) {
                if (11 !== g && (e = ya.exec(b)))
                    if (d = e[1])
                        if (9 === g) {
                            if (!(f = a.getElementById(d)))
                                return c;
                            if (f.id === d)
                                return c.push(f),
                                c
                        } else {
                            if (k && (f = k.getElementById(d)) && mb(a, f) && f.id === d)
                                return c.push(f),
                                c
                        }
                    else {
                        if (e[2])
                            return W.apply(c, a.getElementsByTagName(b)),
                            c;
                        if ((d = e[3]) && z.getElementsByClassName && a.getElementsByClassName)
                            return W.apply(c, a.getElementsByClassName(d)),
                            c
                    }
                if (!(!z.qsa || U[b + " "] || y && y.test(b) || 1 === g && "object" === a.nodeName.toLowerCase())) {
                    if (d = b,
                    k = a,
                    1 === g && (ka.test(b) || ia.test(b))) {
                        (k = la.test(b) && da(a.parentNode) || a) === a && z.scope || ((n = a.getAttribute("id")) ? n = n.replace(va, wa) : a.setAttribute("id", n = O));
                        for (g = (d = P(b)).length; g--; )
                            d[g] = (n ? "#" + n : ":scope") + " " + l(d[g]);
                        d = d.join(",")
                    }
                    try {
                        return W.apply(c, k.querySelectorAll(d)),
                        c
                    } catch (Bc) {
                        U(b, !0)
                    } finally {
                        n === O && a.removeAttribute("id")
                    }
                }
            }
            return D(b.replace(aa, "$1"), a, c, h)
        }
        function c() {
            var b = [];
            return function Wb(a, c) {
                return b.push(a + " ") > u.cacheLength && delete Wb[b.shift()],
                Wb[a + " "] = c
            }
        }
        function d(b) {
            return b[O] = !0,
            b
        }
        function f(b) {
            var a = K.createElement("fieldset");
            try {
                return !!b(a)
            } catch (Ac) {
                return !1
            } finally {
                a.parentNode && a.parentNode.removeChild(a)
            }
        }
        function e(b, a) {
            b = b.split("|");
            for (var c = b.length; c--; )
                u.attrHandle[b[c]] = a
        }
        function k(b, a) {
            var c = a && b
              , h = c && 1 === b.nodeType && 1 === a.nodeType && b.sourceIndex - a.sourceIndex;
            if (h)
                return h;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === a)
                        return -1;
            return b ? 1 : -1
        }
        function g(b) {
            return function(a) {
                return "input" === a.nodeName.toLowerCase() && a.type === b
            }
        }
        function m(b) {
            return function(a) {
                var c = a.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && a.type === b
            }
        }
        function r(b) {
            return function(a) {
                return "form"in a ? a.parentNode && !1 === a.disabled ? "label"in a ? "label"in a.parentNode ? a.parentNode.disabled === b : a.disabled === b : a.isDisabled === b || a.isDisabled !== !b && Aa(a) === b : a.disabled === b : "label"in a && a.disabled === b
            }
        }
        function q(b) {
            return d(function(a) {
                return a = +a,
                d(function(c, h) {
                    for (var d, f = b([], c.length, a), n = f.length; n--; )
                        c[d = f[n]] && (c[d] = !(h[d] = c[d]))
                })
            })
        }
        function da(b) {
            return b && "undefined" != typeof b.getElementsByTagName && b
        }
        function p() {}
        function l(b) {
            for (var a = 0, c = b.length, h = ""; a < c; a++)
                h += b[a].value;
            return h
        }
        function t(b, a, c) {
            var h = a.dir
              , d = a.next
              , f = d || h
              , n = c && "parentNode" === f
              , e = M++;
            return a.first ? function(a, c, d) {
                for (; a = a[h]; )
                    if (1 === a.nodeType || n)
                        return b(a, c, d);
                return !1
            }
            : function(a, c, k) {
                var g, v, m, G = [Ca, e];
                if (k)
                    for (; a = a[h]; ) {
                        if ((1 === a.nodeType || n) && b(a, c, k))
                            return !0
                    }
                else
                    for (; a = a[h]; )
                        if (1 === a.nodeType || n)
                            if (v = (m = a[O] || (a[O] = {}))[a.uniqueID] || (m[a.uniqueID] = {}),
                            d && d === a.nodeName.toLowerCase())
                                a = a[h] || a;
                            else {
                                if ((g = v[f]) && g[0] === Ca && g[1] === e)
                                    return G[2] = g[2];
                                if ((v[f] = G)[2] = b(a, c, k))
                                    return !0
                            }
                return !1
            }
        }
        function Q(b) {
            return 1 < b.length ? function(a, c, h) {
                for (var d = b.length; d--; )
                    if (!b[d](a, c, h))
                        return !1;
                return !0
            }
            : b[0]
        }
        function Ea(b, a, c, h, d) {
            for (var f, n = [], e = 0, k = b.length, g = null != a; e < k; e++)
                (f = b[e]) && (c && !c(f, h, d) || (n.push(f),
                g && a.push(e)));
            return n
        }
        function x(b, c, h, f, n, e) {
            return f && !f[O] && (f = x(f)),
            n && !n[O] && (n = x(n, e)),
            d(function(d, e, k, g) {
                var v, m = [], G = [], Ob = e.length, R;
                if (!(R = d)) {
                    R = c || "*";
                    for (var E = k.nodeType ? [k] : k, r = [], J = 0, q = E.length; J < q; J++)
                        a(R, E[J], r);
                    R = r
                }
                R = !b || !d && c ? R : Ea(R, m, b, k, g);
                E = h ? n || (d ? b : Ob || f) ? [] : e : R;
                if (h && h(R, E, k, g),
                f) {
                    var Ba = Ea(E, G);
                    f(Ba, [], k, g);
                    for (k = Ba.length; k--; )
                        (v = Ba[k]) && (E[G[k]] = !(R[G[k]] = v))
                }
                if (d) {
                    if (n || b) {
                        if (n) {
                            Ba = [];
                            for (k = E.length; k--; )
                                (v = E[k]) && Ba.push(R[k] = v);
                            n(null, E = [], Ba, g)
                        }
                        for (k = E.length; k--; )
                            (v = E[k]) && -1 < (Ba = n ? Fa(d, v) : m[k]) && (d[Ba] = !(e[Ba] = v))
                    }
                } else
                    E = Ea(E === e ? E.splice(Ob, E.length) : E),
                    n ? n(null, e, E, g) : W.apply(e, E)
            })
        }
        function za(b) {
            var a, c, h = b.length, d = u.relative[b[0].type];
            var f = d || u.relative[" "];
            for (var n = d ? 1 : 0, e = t(function(b) {
                return b === a
            }, f, !0), k = t(function(b) {
                return -1 < Fa(a, b)
            }, f, !0), g = [function(b, c, h) {
                b = !d && (h || c !== L) || ((a = c).nodeType ? e(b, c, h) : k(b, c, h));
                return a = null,
                b
            }
            ]; n < h; n++)
                if (f = u.relative[b[n].type])
                    g = [t(Q(g), f)];
                else {
                    if ((f = u.filter[b[n].type].apply(null, b[n].matches))[O]) {
                        for (c = ++n; c < h && !u.relative[b[c].type]; c++)
                            ;
                        return x(1 < n && Q(g), 1 < n && l(b.slice(0, n - 1).concat({
                            value: " " === b[n - 2].type ? "*" : ""
                        })).replace(aa, "$1"), f, n < c && za(b.slice(n, c)), c < h && za(b = b.slice(c)), c < h && l(b))
                    }
                    g.push(f)
                }
            return Q(g)
        }
        var ua, z, u, B, A, P, C, D, L, w, H, I, K, F, N, y, ra, qa, mb, O = "sizzle" + 1 * new Date, S = b.document, Ca = 0, M = 0, T = c(), Gb = c(), pa = c(), U = c(), X = function(b, a) {
            return b === a && (H = !0),
            0
        }, Z = {}.hasOwnProperty, V = [], ca = V.pop, ea = V.push, W = V.push, ba = V.slice, Fa = function(b, a) {
            for (var c = 0, h = b.length; c < h; c++)
                if (b[c] === a)
                    return c;
            return -1
        }, ja = /[\x20\t\r\n\f]+/g, aa = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, Sa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ia = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, ka = /[\x20\t\r\n\f]|>/, ma = /:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, na = /^(?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+$/, fa = {
            ID: /^#((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,
            CLASS: /^\.((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,
            TAG: /^((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+|[*])/,
            ATTR: /^\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\]/,
            PSEUDO: /^:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
        }, oa = /HTML$/i, sa = /^(?:input|select|textarea|button)$/i, ta = /^h\d$/i, ha = /^[^{]+\{\s*\[native \w/, ya = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, la = /[+~]/, Y = /\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\([^\r\n\f])/g, Da = function(b, a) {
            b = "0x" + b.slice(1) - 65536;
            return a || (0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320))
        }, va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, wa = function(b, a) {
            return a ? "\x00" === b ? "\ufffd" : b.slice(0, -1) + "\\" + b.charCodeAt(b.length - 1).toString(16) + " " : "\\" + b
        }, xa = function() {
            I()
        }, Aa = t(function(b) {
            return !0 === b.disabled && "fieldset" === b.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            W.apply(V = ba.call(S.childNodes), S.childNodes),
            V[S.childNodes.length].nodeType
        } catch (Ob) {
            W = {
                apply: V.length ? function(b, a) {
                    ea.apply(b, ba.call(a))
                }
                : function(b, a) {
                    for (var c = b.length, h = 0; b[c++] = a[h++]; )
                        ;
                    b.length = c - 1
                }
            }
        }
        for (ua in z = a.support = {},
        A = a.isXML = function(b) {
            var a = b && (b.ownerDocument || b).documentElement;
            return !oa.test(b && b.namespaceURI || a && a.nodeName || "HTML")
        }
        ,
        I = a.setDocument = function(b) {
            var a, c;
            b = b ? b.ownerDocument || b : S;
            return b != K && 9 === b.nodeType && b.documentElement && (F = (K = b).documentElement,
            N = !A(K),
            S != K && (c = K.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)),
            z.scope = f(function(b) {
                return F.appendChild(b).appendChild(K.createElement("div")),
                "undefined" != typeof b.querySelectorAll && !b.querySelectorAll(":scope fieldset div").length
            }),
            z.attributes = f(function(b) {
                return b.className = "i",
                !b.getAttribute("className")
            }),
            z.getElementsByTagName = f(function(b) {
                return b.appendChild(K.createComment("")),
                !b.getElementsByTagName("*").length
            }),
            z.getElementsByClassName = ha.test(K.getElementsByClassName),
            z.getById = f(function(b) {
                return F.appendChild(b).id = O,
                !K.getElementsByName || !K.getElementsByName(O).length
            }),
            z.getById ? (u.filter.ID = function(b) {
                var a = b.replace(Y, Da);
                return function(b) {
                    return b.getAttribute("id") === a
                }
            }
            ,
            u.find.ID = function(b, a) {
                if ("undefined" != typeof a.getElementById && N)
                    return (b = a.getElementById(b)) ? [b] : []
            }
            ) : (u.filter.ID = function(b) {
                var a = b.replace(Y, Da);
                return function(b) {
                    return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === a
                }
            }
            ,
            u.find.ID = function(b, a) {
                if ("undefined" != typeof a.getElementById && N) {
                    var c, h = a.getElementById(b);
                    if (h) {
                        if ((c = h.getAttributeNode("id")) && c.value === b)
                            return [h];
                        var d = a.getElementsByName(b);
                        for (a = 0; h = d[a++]; )
                            if ((c = h.getAttributeNode("id")) && c.value === b)
                                return [h]
                    }
                    return []
                }
            }
            ),
            u.find.TAG = z.getElementsByTagName ? function(b, a) {
                return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b) : z.qsa ? a.querySelectorAll(b) : void 0
            }
            : function(b, a) {
                var c = []
                  , h = 0;
                a = a.getElementsByTagName(b);
                if ("*" === b) {
                    for (; b = a[h++]; )
                        1 === b.nodeType && c.push(b);
                    return c
                }
                return a
            }
            ,
            u.find.CLASS = z.getElementsByClassName && function(b, a) {
                if ("undefined" != typeof a.getElementsByClassName && N)
                    return a.getElementsByClassName(b)
            }
            ,
            ra = [],
            y = [],
            (z.qsa = ha.test(K.querySelectorAll)) && (f(function(b) {
                var a;
                F.appendChild(b).innerHTML = "\x3ca id\x3d'" + O + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + O + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
                b.querySelectorAll("[msallowcapture^\x3d'']").length && y.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                b.querySelectorAll("[selected]").length || y.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                b.querySelectorAll("[id~\x3d" + O + "-]").length || y.push("~\x3d");
                (a = K.createElement("input")).setAttribute("name", "");
                b.appendChild(a);
                b.querySelectorAll("[name\x3d'']").length || y.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                b.querySelectorAll(":checked").length || y.push(":checked");
                b.querySelectorAll("a#" + O + "+*").length || y.push(".#.+[+~]");
                b.querySelectorAll("\\\f");
                y.push("[\\r\\n\\f]")
            }),
            f(function(b) {
                b.innerHTML = "\x3ca href\x3d'' disabled\x3d'disabled'\x3e\x3c/a\x3e\x3cselect disabled\x3d'disabled'\x3e\x3coption/\x3e\x3c/select\x3e";
                var a = K.createElement("input");
                a.setAttribute("type", "hidden");
                b.appendChild(a).setAttribute("name", "D");
                b.querySelectorAll("[name\x3dd]").length && y.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
                2 !== b.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled");
                F.appendChild(b).disabled = !0;
                2 !== b.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled");
                b.querySelectorAll("*,:x");
                y.push(",.*:")
            })),
            (z.matchesSelector = ha.test(qa = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && f(function(b) {
                z.disconnectedMatch = qa.call(b, "*");
                qa.call(b, "[s!\x3d'']:x");
                ra.push("!\x3d", ":((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            }),
            y = y.length && new RegExp(y.join("|")),
            ra = ra.length && new RegExp(ra.join("|")),
            a = ha.test(F.compareDocumentPosition),
            mb = a || ha.test(F.contains) ? function(b, a) {
                var c = 9 === b.nodeType ? b.documentElement : b;
                a = a && a.parentNode;
                return b === a || !(!a || 1 !== a.nodeType || !(c.contains ? c.contains(a) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(a)))
            }
            : function(b, a) {
                if (a)
                    for (; a = a.parentNode; )
                        if (a === b)
                            return !0;
                return !1
            }
            ,
            X = a ? function(b, a) {
                if (b === a)
                    return H = !0,
                    0;
                var c = !b.compareDocumentPosition - !a.compareDocumentPosition;
                return c || (1 & (c = (b.ownerDocument || b) == (a.ownerDocument || a) ? b.compareDocumentPosition(a) : 1) || !z.sortDetached && a.compareDocumentPosition(b) === c ? b == K || b.ownerDocument == S && mb(S, b) ? -1 : a == K || a.ownerDocument == S && mb(S, a) ? 1 : w ? Fa(w, b) - Fa(w, a) : 0 : 4 & c ? -1 : 1)
            }
            : function(b, a) {
                if (b === a)
                    return H = !0,
                    0;
                var c = 0
                  , h = b.parentNode
                  , d = a.parentNode
                  , f = [b]
                  , n = [a];
                if (!h || !d)
                    return b == K ? -1 : a == K ? 1 : h ? -1 : d ? 1 : w ? Fa(w, b) - Fa(w, a) : 0;
                if (h === d)
                    return k(b, a);
                for (; b = b.parentNode; )
                    f.unshift(b);
                for (b = a; b = b.parentNode; )
                    n.unshift(b);
                for (; f[c] === n[c]; )
                    c++;
                return c ? k(f[c], n[c]) : f[c] == S ? -1 : n[c] == S ? 1 : 0
            }
            ),
            K
        }
        ,
        a.matches = function(b, c) {
            return a(b, null, null, c)
        }
        ,
        a.matchesSelector = function(b, c) {
            if (I(b),
            !(!z.matchesSelector || !N || U[c + " "] || ra && ra.test(c) || y && y.test(c)))
                try {
                    var h = qa.call(b, c);
                    if (h || z.disconnectedMatch || b.document && 11 !== b.document.nodeType)
                        return h
                } catch (Ba) {
                    U(c, !0)
                }
            return 0 < a(c, K, null, [b]).length
        }
        ,
        a.contains = function(b, a) {
            return (b.ownerDocument || b) != K && I(b),
            mb(b, a)
        }
        ,
        a.attr = function(b, a) {
            (b.ownerDocument || b) != K && I(b);
            var c = u.attrHandle[a.toLowerCase()];
            c = c && Z.call(u.attrHandle, a.toLowerCase()) ? c(b, a, !N) : void 0;
            return void 0 !== c ? c : z.attributes || !N ? b.getAttribute(a) : (c = b.getAttributeNode(a)) && c.specified ? c.value : null
        }
        ,
        a.escape = function(b) {
            return (b + "").replace(va, wa)
        }
        ,
        a.error = function(b) {
            throw Error("Syntax error, unrecognized expression: " + b);
        }
        ,
        a.uniqueSort = function(b) {
            var a, c = [], h = 0, d = 0;
            if (H = !z.detectDuplicates,
            w = !z.sortStable && b.slice(0),
            b.sort(X),
            H) {
                for (; a = b[d++]; )
                    a === b[d] && (h = c.push(d));
                for (; h--; )
                    b.splice(c[h], 1)
            }
            return w = null,
            b
        }
        ,
        B = a.getText = function(b) {
            var a, c = "", h = 0;
            if (a = b.nodeType)
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof b.textContent)
                        return b.textContent;
                    for (b = b.firstChild; b; b = b.nextSibling)
                        c += B(b)
                } else {
                    if (3 === a || 4 === a)
                        return b.nodeValue
                }
            else
                for (; a = b[h++]; )
                    c += B(a);
            return c
        }
        ,
        (u = a.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: fa,
            attrHandle: {},
            find: {},
            relative: {
                "\x3e": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(b) {
                    return b[1] = b[1].replace(Y, Da),
                    b[3] = (b[3] || b[4] || b[5] || "").replace(Y, Da),
                    "~\x3d" === b[2] && (b[3] = " " + b[3] + " "),
                    b.slice(0, 4)
                },
                CHILD: function(b) {
                    return b[1] = b[1].toLowerCase(),
                    "nth" === b[1].slice(0, 3) ? (b[3] || a.error(b[0]),
                    b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])),
                    b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && a.error(b[0]),
                    b
                },
                PSEUDO: function(b) {
                    var a, c = !b[6] && b[2];
                    return fa.CHILD.test(b[0]) ? null : (b[3] ? b[2] = b[4] || b[5] || "" : c && ma.test(c) && (a = P(c, !0)) && (a = c.indexOf(")", c.length - a) - c.length) && (b[0] = b[0].slice(0, a),
                    b[2] = c.slice(0, a)),
                    b.slice(0, 3))
                }
            },
            filter: {
                TAG: function(b) {
                    var a = b.replace(Y, Da).toLowerCase();
                    return "*" === b ? function() {
                        return !0
                    }
                    : function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    }
                },
                CLASS: function(b) {
                    var a = T[b + " "];
                    return a || (a = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"),
                    T(b, function(b) {
                        return a.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") || "")
                    }))
                },
                ATTR: function(b, c, h) {
                    return function(d) {
                        d = a.attr(d, b);
                        return null == d ? "!\x3d" === c : !c || (d += "",
                        "\x3d" === c ? d === h : "!\x3d" === c ? d !== h : "^\x3d" === c ? h && 0 === d.indexOf(h) : "*\x3d" === c ? h && -1 < d.indexOf(h) : "$\x3d" === c ? h && d.slice(-h.length) === h : "~\x3d" === c ? -1 < (" " + d.replace(ja, " ") + " ").indexOf(h) : "|\x3d" === c && (d === h || d.slice(0, h.length + 1) === h + "-"))
                    }
                },
                CHILD: function(b, a, c, h, d) {
                    var f = "nth" !== b.slice(0, 3)
                      , n = "last" !== b.slice(-4)
                      , e = "of-type" === a;
                    return 1 === h && 0 === d ? function(b) {
                        return !!b.parentNode
                    }
                    : function(a, c, k) {
                        var g, v, m, G;
                        c = f !== n ? "nextSibling" : "previousSibling";
                        var E = a.parentNode
                          , R = e && a.nodeName.toLowerCase()
                          , r = !k && !e
                          , J = !1;
                        if (E) {
                            if (f) {
                                for (; c; ) {
                                    for (m = a; m = m[c]; )
                                        if (e ? m.nodeName.toLowerCase() === R : 1 === m.nodeType)
                                            return !1;
                                    var q = c = "only" === b && !q && "nextSibling"
                                }
                                return !0
                            }
                            if (q = [n ? E.firstChild : E.lastChild],
                            n && r)
                                for (J = (G = (g = (k = (v = (m = E)[O] || (m[O] = {}))[m.uniqueID] || (v[m.uniqueID] = {}))[b] || [])[0] === Ca && g[1]) && g[2],
                                m = G && E.childNodes[G]; m = ++G && m && m[c] || (J = G = 0) || q.pop(); ) {
                                    if (1 === m.nodeType && ++J && m === a) {
                                        k[b] = [Ca, G, J];
                                        break
                                    }
                                }
                            else if (r && (J = G = (g = ((v = (m = a)[O] || (m[O] = {}))[m.uniqueID] || (v[m.uniqueID] = {}))[b] || [])[0] === Ca && g[1]),
                            !1 === J)
                                for (; (m = ++G && m && m[c] || (J = G = 0) || q.pop()) && ((e ? m.nodeName.toLowerCase() !== R : 1 !== m.nodeType) || !++J || (r && ((k = (v = m[O] || (m[O] = {}))[m.uniqueID] || (v[m.uniqueID] = {}))[b] = [Ca, J]),
                                m !== a)); )
                                    ;
                            return (J -= d) === h || 0 == J % h && 0 <= J / h
                        }
                    }
                },
                PSEUDO: function(b, c) {
                    var h, f = u.pseudos[b] || u.setFilters[b.toLowerCase()] || a.error("unsupported pseudo: " + b);
                    return f[O] ? f(c) : 1 < f.length ? (h = [b, b, "", c],
                    u.setFilters.hasOwnProperty(b.toLowerCase()) ? d(function(b, a) {
                        for (var h, d = f(b, c), n = d.length; n--; )
                            b[h = Fa(b, d[n])] = !(a[h] = d[n])
                    }) : function(b) {
                        return f(b, 0, h)
                    }
                    ) : f
                }
            },
            pseudos: {
                not: d(function(b) {
                    var a = []
                      , c = []
                      , h = C(b.replace(aa, "$1"));
                    return h[O] ? d(function(b, a, c, d) {
                        var f;
                        c = h(b, null, d, []);
                        for (d = b.length; d--; )
                            (f = c[d]) && (b[d] = !(a[d] = f))
                    }) : function(b, d, f) {
                        return a[0] = b,
                        h(a, null, f, c),
                        a[0] = null,
                        !c.pop()
                    }
                }),
                has: d(function(b) {
                    return function(c) {
                        return 0 < a(b, c).length
                    }
                }),
                contains: d(function(b) {
                    return b = b.replace(Y, Da),
                    function(a) {
                        return -1 < (a.textContent || B(a)).indexOf(b)
                    }
                }),
                lang: d(function(b) {
                    return na.test(b || "") || a.error("unsupported lang: " + b),
                    b = b.replace(Y, Da).toLowerCase(),
                    function(a) {
                        var c;
                        do
                            if (c = N ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang"))
                                return (c = c.toLowerCase()) === b || 0 === c.indexOf(b + "-");
                        while ((a = a.parentNode) && 1 === a.nodeType);
                        return !1
                    }
                }),
                target: function(a) {
                    var c = b.location && b.location.hash;
                    return c && c.slice(1) === a.id
                },
                root: function(b) {
                    return b === F
                },
                focus: function(b) {
                    return b === K.activeElement && (!K.hasFocus || K.hasFocus()) && !!(b.type || b.href || ~b.tabIndex)
                },
                enabled: r(!1),
                disabled: r(!0),
                checked: function(b) {
                    var a = b.nodeName.toLowerCase();
                    return "input" === a && !!b.checked || "option" === a && !!b.selected
                },
                selected: function(b) {
                    return b.parentNode && b.parentNode.selectedIndex,
                    !0 === b.selected
                },
                empty: function(b) {
                    for (b = b.firstChild; b; b = b.nextSibling)
                        if (6 > b.nodeType)
                            return !1;
                    return !0
                },
                parent: function(b) {
                    return !u.pseudos.empty(b)
                },
                header: function(b) {
                    return ta.test(b.nodeName)
                },
                input: function(b) {
                    return sa.test(b.nodeName)
                },
                button: function(b) {
                    var a = b.nodeName.toLowerCase();
                    return "input" === a && "button" === b.type || "button" === a
                },
                text: function(b) {
                    var a;
                    return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (a = b.getAttribute("type")) || "text" === a.toLowerCase())
                },
                first: q(function() {
                    return [0]
                }),
                last: q(function(b, a) {
                    return [a - 1]
                }),
                eq: q(function(b, a, c) {
                    return [0 > c ? c + a : c]
                }),
                even: q(function(b, a) {
                    for (var c = 0; c < a; c += 2)
                        b.push(c);
                    return b
                }),
                odd: q(function(b, a) {
                    for (var c = 1; c < a; c += 2)
                        b.push(c);
                    return b
                }),
                lt: q(function(b, a, c) {
                    for (a = 0 > c ? c + a : a < c ? a : c; 0 <= --a; )
                        b.push(a);
                    return b
                }),
                gt: q(function(b, a, c) {
                    for (c = 0 > c ? c + a : c; ++c < a; )
                        b.push(c);
                    return b
                })
            }
        }).pseudos.nth = u.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            u.pseudos[ua] = g(ua);
        for (ua in {
            submit: !0,
            reset: !0
        })
            u.pseudos[ua] = m(ua);
        return p.prototype = u.filters = u.pseudos,
        u.setFilters = new p,
        P = a.tokenize = function(b, c) {
            var h, d, f, n, e, k;
            if (e = Gb[b + " "])
                return c ? 0 : e.slice(0);
            e = b;
            var g = [];
            for (k = u.preFilter; e; ) {
                for (n in h && !(d = Sa.exec(e)) || (d && (e = e.slice(d[0].length) || e),
                g.push(f = [])),
                h = !1,
                (d = ia.exec(e)) && (h = d.shift(),
                f.push({
                    value: h,
                    type: d[0].replace(aa, " ")
                }),
                e = e.slice(h.length)),
                u.filter)
                    !(d = fa[n].exec(e)) || k[n] && !(d = k[n](d)) || (h = d.shift(),
                    f.push({
                        value: h,
                        type: n,
                        matches: d
                    }),
                    e = e.slice(h.length));
                if (!h)
                    break
            }
            return c ? e.length : e ? a.error(b) : Gb(b, g).slice(0)
        }
        ,
        C = a.compile = function(b, c) {
            var h, f, n, e, k = [], g = [], v = pa[b + " "];
            if (!v) {
                c || (c = P(b));
                for (h = c.length; h--; )
                    (v = za(c[h]))[O] ? k.push(v) : g.push(v);
                (v = pa(b, (f = 0 < k.length,
                n = 0 < g.length,
                e = function(b, c, h, d, e) {
                    var v, m, G = 0, E = "0", R = b && [], r = [], J = L, q = b || n && u.find.TAG("*", e), da = Ca += null == J ? 1 : Math.random() || .1, fc = q.length;
                    for (e && (L = c == K || c || e); E !== fc && null != (v = q[E]); E++) {
                        if (n && v) {
                            var p = 0;
                            for (c || v.ownerDocument == K || (I(v),
                            h = !N); m = g[p++]; )
                                if (m(v, c || K, h)) {
                                    d.push(v);
                                    break
                                }
                            e && (Ca = da)
                        }
                        f && ((v = !m && v) && G--,
                        b && R.push(v))
                    }
                    if (G += E,
                    f && E !== G) {
                        for (p = 0; m = k[p++]; )
                            m(R, r, c, h);
                        if (b) {
                            if (0 < G)
                                for (; E--; )
                                    R[E] || r[E] || (r[E] = ca.call(d));
                            r = Ea(r)
                        }
                        W.apply(d, r);
                        e && !b && 0 < r.length && 1 < G + k.length && a.uniqueSort(d)
                    }
                    return e && (Ca = da,
                    L = J),
                    R
                }
                ,
                f ? d(e) : e))).selector = b
            }
            return v
        }
        ,
        D = a.select = function(b, a, c, h) {
            var d, f, n, e, k, g = "function" == typeof b && b, v = !h && P(b = g.selector || b);
            if (c = c || [],
            1 === v.length) {
                if (2 < (f = v[0] = v[0].slice(0)).length && "ID" === (n = f[0]).type && 9 === a.nodeType && N && u.relative[f[1].type]) {
                    if (!(a = (u.find.ID(n.matches[0].replace(Y, Da), a) || [])[0]))
                        return c;
                    g && (a = a.parentNode);
                    b = b.slice(f.shift().value.length)
                }
                for (d = fa.needsContext.test(b) ? 0 : f.length; d-- && (n = f[d],
                !u.relative[e = n.type]); )
                    if ((k = u.find[e]) && (h = k(n.matches[0].replace(Y, Da), la.test(f[0].type) && da(a.parentNode) || a))) {
                        if (f.splice(d, 1),
                        !(b = h.length && l(f)))
                            return W.apply(c, h),
                            c;
                        break
                    }
            }
            return (g || C(b, v))(h, a, !N, c, !a || la.test(b) && da(a.parentNode) || a),
            c
        }
        ,
        z.sortStable = O.split("").sort(X).join("") === O,
        z.detectDuplicates = !!H,
        I(),
        z.sortDetached = f(function(b) {
            return 1 & b.compareDocumentPosition(K.createElement("fieldset"))
        }),
        f(function(b) {
            return b.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e",
            "#" === b.firstChild.getAttribute("href")
        }) || e("type|href|height|width", function(b, a, c) {
            if (!c)
                return b.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
        }),
        z.attributes && f(function(b) {
            return b.innerHTML = "\x3cinput/\x3e",
            b.firstChild.setAttribute("value", ""),
            "" === b.firstChild.getAttribute("value")
        }) || e("value", function(b, a, c) {
            if (!c && "input" === b.nodeName.toLowerCase())
                return b.defaultValue
        }),
        f(function(b) {
            return null == b.getAttribute("disabled")
        }) || e("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(b, a, c) {
            var h;
            if (!c)
                return !0 === b[a] ? a.toLowerCase() : (h = b.getAttributeNode(a)) && h.specified ? h.value : null
        }),
        a
    }(p);
    f.find = na;
    f.expr = na.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.uniqueSort = f.unique = na.uniqueSort;
    f.text = na.getText;
    f.isXMLDoc = na.isXML;
    f.contains = na.contains;
    f.escapeSelector = na.escape;
    var ea = function(b, a, c) {
        for (var h = [], d = void 0 !== c; (b = b[a]) && 9 !== b.nodeType; )
            if (1 === b.nodeType) {
                if (d && f(b).is(c))
                    break;
                h.push(b)
            }
        return h
    }
      , Ab = function(b, a) {
        for (var c = []; b; b = b.nextSibling)
            1 === b.nodeType && b !== a && c.push(b);
        return c
    }
      , Bb = f.expr.match.needsContext
      , Cb = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    f.filter = function(b, a, c) {
        var h = a[0];
        return c && (b = ":not(" + b + ")"),
        1 === a.length && 1 === h.nodeType ? f.find.matchesSelector(h, b) ? [h] : [] : f.find.matches(b, f.grep(a, function(b) {
            return 1 === b.nodeType
        }))
    }
    ;
    f.fn.extend({
        find: function(b) {
            var a, c = this.length, d = this;
            if ("string" != typeof b)
                return this.pushStack(f(b).filter(function() {
                    for (a = 0; a < c; a++)
                        if (f.contains(d[a], this))
                            return !0
                }));
            var e = this.pushStack([]);
            for (a = 0; a < c; a++)
                f.find(b, d[a], e);
            return 1 < c ? f.uniqueSort(e) : e
        },
        filter: function(b) {
            return this.pushStack(L(this, b || [], !1))
        },
        not: function(b) {
            return this.pushStack(L(this, b || [], !0))
        },
        is: function(b) {
            return !!L(this, "string" == typeof b && Bb.test(b) ? f(b) : b || [], !1).length
        }
    });
    var Qb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (f.fn.init = function(b, a, c) {
        var h, d;
        if (!b)
            return this;
        if (c = c || ta,
        "string" == typeof b) {
            if (!(h = "\x3c" === b[0] && "\x3e" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : Qb.exec(b)) || !h[1] && a)
                return !a || a.jquery ? (a || c).find(b) : this.constructor(a).find(b);
            if (h[1]) {
                if (a = a instanceof f ? a[0] : a,
                f.merge(this, f.parseHTML(h[1], a && a.nodeType ? a.ownerDocument || a : B, !0)),
                Cb.test(h[1]) && f.isPlainObject(a))
                    for (h in a)
                        C(this[h]) ? this[h](a[h]) : this.attr(h, a[h]);
                return this
            }
            return (d = B.getElementById(h[2])) && (this[0] = d,
            this.length = 1),
            this
        }
        return b.nodeType ? (this[0] = b,
        this.length = 1,
        this) : C(b) ? void 0 !== c.ready ? c.ready(b) : b(f) : f.makeArray(b, this)
    }
    ).prototype = f.fn;
    var ta = f(B);
    var Rb = /^(?:parents|prev(?:Until|All))/
      , nb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    f.fn.extend({
        has: function(b) {
            var a = f(b, this)
              , c = a.length;
            return this.filter(function() {
                for (var b = 0; b < c; b++)
                    if (f.contains(this, a[b]))
                        return !0
            })
        },
        closest: function(b, a) {
            var c, h = 0, d = this.length, e = [], k = "string" != typeof b && f(b);
            if (!Bb.test(b))
                for (; h < d; h++)
                    for (c = this[h]; c && c !== a; c = c.parentNode)
                        if (11 > c.nodeType && (k ? -1 < k.index(c) : 1 === c.nodeType && f.find.matchesSelector(c, b))) {
                            e.push(c);
                            break
                        }
            return this.pushStack(1 < e.length ? f.uniqueSort(e) : e)
        },
        index: function(b) {
            return b ? "string" == typeof b ? Ta.call(f(b), this[0]) : Ta.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(b, a) {
            return this.pushStack(f.uniqueSort(f.merge(this.get(), f(b, a))))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    f.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return ea(b, "parentNode")
        },
        parentsUntil: function(b, a, c) {
            return ea(b, "parentNode", c)
        },
        next: function(b) {
            return F(b, "nextSibling")
        },
        prev: function(b) {
            return F(b, "previousSibling")
        },
        nextAll: function(b) {
            return ea(b, "nextSibling")
        },
        prevAll: function(b) {
            return ea(b, "previousSibling")
        },
        nextUntil: function(b, a, c) {
            return ea(b, "nextSibling", c)
        },
        prevUntil: function(b, a, c) {
            return ea(b, "previousSibling", c)
        },
        siblings: function(b) {
            return Ab((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return Ab(b.firstChild)
        },
        contents: function(b) {
            return null != b.contentDocument && lb(b.contentDocument) ? b.contentDocument : (w(b, "template") && (b = b.content || b),
            f.merge([], b.childNodes))
        }
    }, function(b, a) {
        f.fn[b] = function(c, h) {
            var d = f.map(this, a, c);
            return "Until" !== b.slice(-5) && (h = c),
            h && "string" == typeof h && (d = f.filter(h, d)),
            1 < this.length && (nb[b] || f.uniqueSort(d),
            Rb.test(b) && d.reverse()),
            this.pushStack(d)
        }
    });
    var aa = /[^\x20\t\r\n\f]+/g;
    f.Callbacks = function(b) {
        var a, c;
        b = "string" == typeof b ? (a = b,
        c = {},
        f.each(a.match(aa) || [], function(b, a) {
            c[a] = !0
        }),
        c) : f.extend({}, b);
        var d, e, k, g, m = [], r = [], q = -1, p = function() {
            g = g || b.once;
            for (k = d = !0; r.length; q = -1)
                for (e = r.shift(); ++q < m.length; )
                    !1 === m[q].apply(e[0], e[1]) && b.stopOnFalse && (q = m.length,
                    e = !1);
            b.memory || (e = !1);
            d = !1;
            g && (m = e ? [] : "")
        }, da = {
            add: function() {
                return m && (e && !d && (q = m.length - 1,
                r.push(e)),
                function gc(a) {
                    f.each(a, function(a, c) {
                        C(c) ? b.unique && da.has(c) || m.push(c) : c && c.length && "string" !== A(c) && gc(c)
                    })
                }(arguments),
                e && !d && p()),
                this
            },
            remove: function() {
                return f.each(arguments, function(b, a) {
                    for (var c; -1 < (c = f.inArray(a, m, c)); )
                        m.splice(c, 1),
                        c <= q && q--
                }),
                this
            },
            has: function(b) {
                return b ? -1 < f.inArray(b, m) : 0 < m.length
            },
            empty: function() {
                return m && (m = []),
                this
            },
            disable: function() {
                return g = r = [],
                m = e = "",
                this
            },
            disabled: function() {
                return !m
            },
            lock: function() {
                return g = r = [],
                e || d || (m = e = ""),
                this
            },
            locked: function() {
                return !!g
            },
            fireWith: function(b, a) {
                return g || (a = [b, (a = a || []).slice ? a.slice() : a],
                r.push(a),
                d || p()),
                this
            },
            fire: function() {
                return da.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!k
            }
        };
        return da
    }
    ;
    f.extend({
        Deferred: function(b) {
            var a = [["notify", "progress", f.Callbacks("memory"), f.Callbacks("memory"), 2], ["resolve", "done", f.Callbacks("once memory"), f.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", f.Callbacks("once memory"), f.Callbacks("once memory"), 1, "rejected"]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                "catch": function(b) {
                    return d.then(null, b)
                },
                pipe: function() {
                    var b = arguments;
                    return f.Deferred(function(c) {
                        f.each(a, function(a, h) {
                            var d = C(b[h[4]]) && b[h[4]];
                            e[h[1]](function() {
                                var b = d && d.apply(this, arguments);
                                b && C(b.promise) ? b.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[h[0] + "With"](this, d ? [b] : arguments)
                            })
                        });
                        b = null
                    }).promise()
                },
                then: function(b, c, h) {
                    function d(b, a, c, h) {
                        return function() {
                            var n = this
                              , k = arguments
                              , g = function() {
                                var f;
                                if (!(b < e)) {
                                    if ((f = c.apply(n, k)) === a.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    var g = f && ("object" == typeof f || "function" == typeof f) && f.then;
                                    C(g) ? h ? g.call(f, d(e, a, H, h), d(e, a, x, h)) : (e++,
                                    g.call(f, d(e, a, H, h), d(e, a, x, h), d(e, a, H, a.notifyWith))) : (c !== H && (n = void 0,
                                    k = [f]),
                                    (h || a.resolveWith)(n, k))
                                }
                            }
                              , m = h ? g : function() {
                                try {
                                    g()
                                } catch (Xb) {
                                    f.Deferred.exceptionHook && f.Deferred.exceptionHook(Xb, m.stackTrace),
                                    e <= b + 1 && (c !== x && (n = void 0,
                                    k = [Xb]),
                                    a.rejectWith(n, k))
                                }
                            }
                            ;
                            b ? m() : (f.Deferred.getStackHook && (m.stackTrace = f.Deferred.getStackHook()),
                            p.setTimeout(m))
                        }
                    }
                    var e = 0;
                    return f.Deferred(function(f) {
                        a[0][3].add(d(0, f, C(h) ? h : H, f.notifyWith));
                        a[1][3].add(d(0, f, C(b) ? b : H));
                        a[2][3].add(d(0, f, C(c) ? c : x))
                    }).promise()
                },
                promise: function(b) {
                    return null != b ? f.extend(b, d) : d
                }
            }
              , e = {};
            return f.each(a, function(b, h) {
                var f = h[2]
                  , n = h[5];
                d[h[1]] = f.add;
                n && f.add(function() {
                    c = n
                }, a[3 - b][2].disable, a[3 - b][3].disable, a[0][2].lock, a[0][3].lock);
                f.add(h[3].fire);
                e[h[0]] = function() {
                    return e[h[0] + "With"](this === e ? void 0 : this, arguments),
                    this
                }
                ;
                e[h[0] + "With"] = f.fireWith
            }),
            d.promise(e),
            b && b.call(e, e),
            e
        },
        when: function(b) {
            var a = arguments.length
              , c = a
              , d = Array(c)
              , e = Z.call(arguments)
              , k = f.Deferred()
              , g = function(b) {
                return function(c) {
                    d[b] = this;
                    e[b] = 1 < arguments.length ? Z.call(arguments) : c;
                    --a || k.resolveWith(d, e)
                }
            };
            if (1 >= a && (N(b, k.done(g(c)).resolve, k.reject, !a),
            "pending" === k.state() || C(e[c] && e[c].then)))
                return k.then();
            for (; c--; )
                N(e[c], g(c), k.reject);
            return k.promise()
        }
    });
    var Qa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    f.Deferred.exceptionHook = function(b, a) {
        p.console && p.console.warn && b && Qa.test(b.name) && p.console.warn("jQuery.Deferred exception: " + b.message, b.stack, a)
    }
    ;
    f.readyException = function(b) {
        p.setTimeout(function() {
            throw b;
        })
    }
    ;
    var ob = f.Deferred();
    f.fn.ready = function(b) {
        return ob.then(b)["catch"](function(b) {
            f.readyException(b)
        }),
        this
    }
    ;
    f.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(b) {
            (!0 === b ? --f.readyWait : f.isReady) || (f.isReady = !0) !== b && 0 < --f.readyWait || ob.resolveWith(B, [f])
        }
    });
    f.ready.then = ob.then;
    "complete" === B.readyState || "loading" !== B.readyState && !B.documentElement.doScroll ? p.setTimeout(f.ready) : (B.addEventListener("DOMContentLoaded", S),
    p.addEventListener("load", S));
    var fa = function(b, a, c, d, e, k, g) {
        var h = 0
          , n = b.length
          , m = null == c;
        if ("object" === A(c))
            for (h in e = !0,
            c)
                fa(b, a, h, c[h], !0, k, g);
        else if (void 0 !== d && (e = !0,
        C(d) || (g = !0),
        m && (g ? (a.call(b, d),
        a = null) : (m = a,
        a = function(b, a, c) {
            return m.call(f(b), c)
        }
        )),
        a))
            for (; h < n; h++)
                a(b[h], c, g ? d : d.call(b[h], h, a(b[h], c)));
        return e ? b : m ? a.call(b) : n ? a(b[0], c) : k
    }
      , Ib = /^-ms-/
      , Jb = /-([a-z])/g
      , Ra = function(b) {
        return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
    };
    ia.uid = 1;
    ia.prototype = {
        cache: function(b) {
            var a = b[this.expando];
            return a || (a = {},
            Ra(b) && (b.nodeType ? b[this.expando] = a : Object.defineProperty(b, this.expando, {
                value: a,
                configurable: !0
            }))),
            a
        },
        set: function(b, a, c) {
            var h;
            b = this.cache(b);
            if ("string" == typeof a)
                b[T(a)] = c;
            else
                for (h in a)
                    b[T(h)] = a[h];
            return b
        },
        get: function(b, a) {
            return void 0 === a ? this.cache(b) : b[this.expando] && b[this.expando][T(a)]
        },
        access: function(b, a, c) {
            return void 0 === a || a && "string" == typeof a && void 0 === c ? this.get(b, a) : (this.set(b, a, c),
            void 0 !== c ? c : a)
        },
        remove: function(b, a) {
            var c = b[this.expando];
            if (void 0 !== c) {
                if (void 0 !== a) {
                    var h = (a = Array.isArray(a) ? a.map(T) : (a = T(a))in c ? [a] : a.match(aa) || []).length;
                    for (; h--; )
                        delete c[a[h]]
                }
                (void 0 === a || f.isEmptyObject(c)) && (b.nodeType ? b[this.expando] = void 0 : delete b[this.expando])
            }
        },
        hasData: function(b) {
            b = b[this.expando];
            return void 0 !== b && !f.isEmptyObject(b)
        }
    };
    var u = new ia
      , X = new ia
      , Lb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Kb = /[A-Z]/g;
    f.extend({
        hasData: function(b) {
            return X.hasData(b) || u.hasData(b)
        },
        data: function(b, a, c) {
            return X.access(b, a, c)
        },
        removeData: function(b, a) {
            X.remove(b, a)
        },
        _data: function(b, a, c) {
            return u.access(b, a, c)
        },
        _removeData: function(b, a) {
            u.remove(b, a)
        }
    });
    f.fn.extend({
        data: function(b, a) {
            var c, h, d, f = this[0], e = f && f.attributes;
            if (void 0 === b) {
                if (this.length && (d = X.get(f),
                1 === f.nodeType && !u.get(f, "hasDataAttrs"))) {
                    for (c = e.length; c--; )
                        e[c] && 0 === (h = e[c].name).indexOf("data-") && (h = T(h.slice(5)),
                        wa(f, h, d[h]));
                    u.set(f, "hasDataAttrs", !0)
                }
                return d
            }
            return "object" == typeof b ? this.each(function() {
                X.set(this, b)
            }) : fa(this, function(a) {
                var c;
                if (f && void 0 === a)
                    return void 0 !== (c = X.get(f, b)) ? c : void 0 !== (c = wa(f, b)) ? c : void 0;
                this.each(function() {
                    X.set(this, b, a)
                })
            }, null, a, 1 < arguments.length, null, !0)
        },
        removeData: function(b) {
            return this.each(function() {
                X.remove(this, b)
            })
        }
    });
    f.extend({
        queue: function(b, a, c) {
            var h;
            if (b)
                return a = (a || "fx") + "queue",
                h = u.get(b, a),
                c && (!h || Array.isArray(c) ? h = u.access(b, a, f.makeArray(c)) : h.push(c)),
                h || []
        },
        dequeue: function(b, a) {
            a = a || "fx";
            var c = f.queue(b, a)
              , h = c.length
              , d = c.shift()
              , e = f._queueHooks(b, a);
            "inprogress" === d && (d = c.shift(),
            h--);
            d && ("fx" === a && c.unshift("inprogress"),
            delete e.stop,
            d.call(b, function() {
                f.dequeue(b, a)
            }, e));
            !h && e && e.empty.fire()
        },
        _queueHooks: function(b, a) {
            var c = a + "queueHooks";
            return u.get(b, c) || u.access(b, c, {
                empty: f.Callbacks("once memory").add(function() {
                    u.remove(b, [a + "queue", c])
                })
            })
        }
    });
    f.fn.extend({
        queue: function(b, a) {
            var c = 2;
            return "string" != typeof b && (a = b,
            b = "fx",
            c--),
            arguments.length < c ? f.queue(this[0], b) : void 0 === a ? this : this.each(function() {
                var c = f.queue(this, b, a);
                f._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && f.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                f.dequeue(this, b)
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, a) {
            var c, h = 1, d = f.Deferred(), e = this, k = this.length, g = function() {
                --h || d.resolveWith(e, [e])
            };
            "string" != typeof b && (a = b,
            b = void 0);
            for (b = b || "fx"; k--; )
                (c = u.get(e[k], b + "queueHooks")) && c.empty && (h++,
                c.empty.add(g));
            return g(),
            d.promise(a)
        }
    });
    var Db = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ba = new RegExp("^(?:([+-])\x3d|)(" + Db + ")([a-z%]*)$","i")
      , ka = ["Top", "Right", "Bottom", "Left"]
      , Y = B.documentElement
      , xa = function(b) {
        return f.contains(b.ownerDocument, b)
    }
      , Sb = {
        composed: !0
    };
    Y.getRootNode && (xa = function(b) {
        return f.contains(b.ownerDocument, b) || b.getRootNode(Sb) === b.ownerDocument
    }
    );
    var Ua = function(b, a) {
        return "none" === (b = a || b).style.display || "" === b.style.display && xa(b) && "none" === f.css(b, "display")
    }
      , La = {};
    f.fn.extend({
        show: function() {
            return ca(this, !0)
        },
        hide: function() {
            return ca(this)
        },
        toggle: function(b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                Ua(this) ? f(this).show() : f(this).hide()
            })
        }
    });
    var db, Ja = /^(?:checkbox|radio)$/i, sb = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Aa = /^$|^module$|\/(?:java|ecma)script/i;
    var Ka = B.createDocumentFragment().appendChild(B.createElement("div"));
    (db = B.createElement("input")).setAttribute("type", "radio");
    db.setAttribute("checked", "checked");
    db.setAttribute("name", "t");
    Ka.appendChild(db);
    y.checkClone = Ka.cloneNode(!0).cloneNode(!0).lastChild.checked;
    Ka.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e";
    y.noCloneChecked = !!Ka.cloneNode(!0).lastChild.defaultValue;
    Ka.innerHTML = "\x3coption\x3e\x3c/option\x3e";
    y.option = !!Ka.lastChild;
    var U = {
        thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
        col: [2, "\x3ctable\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
        tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
        td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
        _default: [0, "", ""]
    };
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
    U.th = U.td;
    y.option || (U.optgroup = U.option = [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"]);
    var Mb = /<|&#?\w+;/
      , Eb = /^([^.]*)(?:\.(.+)|)/;
    f.event = {
        global: {},
        add: function(b, a, c, d, e) {
            var h, k, g, n, m, v, G, r;
            var q = u.get(b);
            if (Ra(b))
                for (c.handler && (c = (h = c).handler,
                e = h.selector),
                e && f.find.matchesSelector(Y, e),
                c.guid || (c.guid = f.guid++),
                (n = q.events) || (n = q.events = Object.create(null)),
                (k = q.handle) || (k = q.handle = function(a) {
                    return "undefined" != typeof f && f.event.triggered !== a.type ? f.event.dispatch.apply(b, arguments) : void 0
                }
                ),
                q = (a = (a || "").match(aa) || [""]).length; q--; ) {
                    var p = r = (g = Eb.exec(a[q]) || [])[1];
                    g = (g[2] || "").split(".").sort();
                    p && (v = f.event.special[p] || {},
                    p = (e ? v.delegateType : v.bindType) || p,
                    v = f.event.special[p] || {},
                    m = f.extend({
                        type: p,
                        origType: r,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && f.expr.match.needsContext.test(e),
                        namespace: g.join(".")
                    }, h),
                    (G = n[p]) || ((G = n[p] = []).delegateCount = 0,
                    v.setup && !1 !== v.setup.call(b, d, g, k) || b.addEventListener && b.addEventListener(p, k)),
                    v.add && (v.add.call(b, m),
                    m.handler.guid || (m.handler.guid = c.guid)),
                    e ? G.splice(G.delegateCount++, 0, m) : G.push(m),
                    f.event.global[p] = !0)
                }
        },
        remove: function(b, a, c, d, e) {
            var h, k, g, n, m, v, G, r, q = u.hasData(b) && u.get(b);
            if (q && (n = q.events)) {
                for (m = (a = (a || "").match(aa) || [""]).length; m--; )
                    if (v = r = (g = Eb.exec(a[m]) || [])[1],
                    G = (g[2] || "").split(".").sort(),
                    v) {
                        var p = f.event.special[v] || {};
                        var l = n[v = (d ? p.delegateType : p.bindType) || v] || [];
                        g = g[2] && new RegExp("(^|\\.)" + G.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (k = h = l.length; h--; ) {
                            var t = l[h];
                            !e && r !== t.origType || c && c.guid !== t.guid || g && !g.test(t.namespace) || d && d !== t.selector && ("**" !== d || !t.selector) || (l.splice(h, 1),
                            t.selector && l.delegateCount--,
                            p.remove && p.remove.call(b, t))
                        }
                        k && !l.length && (p.teardown && !1 !== p.teardown.call(b, G, q.handle) || f.removeEvent(b, v, q.handle),
                        delete n[v])
                    } else
                        for (v in n)
                            f.event.remove(b, v + a[m], c, d, !0);
                f.isEmptyObject(n) && u.remove(b, "handle events")
            }
        },
        dispatch: function(b) {
            var a, c, d, e, k = Array(arguments.length), g = f.event.fix(b);
            var m = (u.get(this, "events") || Object.create(null))[g.type] || [];
            var r = f.event.special[g.type] || {};
            k[0] = g;
            for (a = 1; a < arguments.length; a++)
                k[a] = arguments[a];
            if (g.delegateTarget = this,
            !r.preDispatch || !1 !== r.preDispatch.call(this, g)) {
                var q = f.event.handlers.call(this, g, m);
                for (a = 0; (d = q[a++]) && !g.isPropagationStopped(); )
                    for (g.currentTarget = d.elem,
                    m = 0; (e = d.handlers[m++]) && !g.isImmediatePropagationStopped(); )
                        g.rnamespace && !1 !== e.namespace && !g.rnamespace.test(e.namespace) || (g.handleObj = e,
                        g.data = e.data,
                        void 0 !== (c = ((f.event.special[e.origType] || {}).handle || e.handler).apply(d.elem, k)) && !1 === (g.result = c) && (g.preventDefault(),
                        g.stopPropagation()));
                return r.postDispatch && r.postDispatch.call(this, g),
                g.result
            }
        },
        handlers: function(b, a) {
            var c, d, h, e = [], k = a.delegateCount, g = b.target;
            if (k && g.nodeType && !("click" === b.type && 1 <= b.button))
                for (; g !== this; g = g.parentNode || this)
                    if (1 === g.nodeType && ("click" !== b.type || !0 !== g.disabled)) {
                        var m = [];
                        var r = {};
                        for (c = 0; c < k; c++)
                            void 0 === r[h = (d = a[c]).selector + " "] && (r[h] = d.needsContext ? -1 < f(h, this).index(g) : f.find(h, this, null, [g]).length),
                            r[h] && m.push(d);
                        m.length && e.push({
                            elem: g,
                            handlers: m
                        })
                    }
            return g = this,
            k < a.length && e.push({
                elem: g,
                handlers: a.slice(k)
            }),
            e
        },
        addProp: function(b, a) {
            Object.defineProperty(f.Event.prototype, b, {
                enumerable: !0,
                configurable: !0,
                get: C(a) ? function() {
                    if (this.originalEvent)
                        return a(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[b]
                }
                ,
                set: function(a) {
                    Object.defineProperty(this, b, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: a
                    })
                }
            })
        },
        fix: function(b) {
            return b[f.expando] ? b : new f.Event(b)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(b) {
                    b = this || b;
                    return Ja.test(b.type) && b.click && w(b, "input") && Na(b, "click", Ga),
                    !1
                },
                trigger: function(b) {
                    b = this || b;
                    return Ja.test(b.type) && b.click && w(b, "input") && Na(b, "click"),
                    !0
                },
                _default: function(b) {
                    b = b.target;
                    return Ja.test(b.type) && b.click && w(b, "input") && u.get(b, "click") || w(b, "a")
                }
            },
            beforeunload: {
                postDispatch: function(b) {
                    void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
                }
            }
        }
    };
    f.removeEvent = function(b, a, c) {
        b.removeEventListener && b.removeEventListener(a, c)
    }
    ;
    f.Event = function(b, a) {
        if (!(this instanceof f.Event))
            return new f.Event(b,a);
        b && b.type ? (this.originalEvent = b,
        this.type = b.type,
        this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? Ga : ya,
        this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target,
        this.currentTarget = b.currentTarget,
        this.relatedTarget = b.relatedTarget) : this.type = b;
        a && f.extend(this, a);
        this.timeStamp = b && b.timeStamp || Date.now();
        this[f.expando] = !0
    }
    ;
    f.Event.prototype = {
        constructor: f.Event,
        isDefaultPrevented: ya,
        isPropagationStopped: ya,
        isImmediatePropagationStopped: ya,
        isSimulated: !1,
        preventDefault: function() {
            var b = this.originalEvent;
            this.isDefaultPrevented = Ga;
            b && !this.isSimulated && b.preventDefault()
        },
        stopPropagation: function() {
            var b = this.originalEvent;
            this.isPropagationStopped = Ga;
            b && !this.isSimulated && b.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var b = this.originalEvent;
            this.isImmediatePropagationStopped = Ga;
            b && !this.isSimulated && b.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    f.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, f.event.addProp);
    f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, a) {
        f.event.special[b] = {
            setup: function() {
                return Na(this, b, tb),
                !1
            },
            trigger: function() {
                return Na(this, b),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: a
        }
    });
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(b, a) {
        f.event.special[b] = {
            delegateType: a,
            bindType: a,
            handle: function(b) {
                var c, d = b.relatedTarget, h = b.handleObj;
                return d && (d === this || f.contains(this, d)) || (b.type = h.origType,
                c = h.handler.apply(this, arguments),
                b.type = a),
                c
            }
        }
    });
    f.fn.extend({
        on: function(b, a, c, d) {
            return Ma(this, b, a, c, d)
        },
        one: function(b, a, c, d) {
            return Ma(this, b, a, c, d, 1)
        },
        off: function(b, a, c) {
            var d, h;
            if (b && b.preventDefault && b.handleObj)
                return d = b.handleObj,
                f(b.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof b) {
                for (h in b)
                    this.off(h, a, b[h]);
                return this
            }
            return !1 !== a && "function" != typeof a || (c = a,
            a = void 0),
            !1 === c && (c = ya),
            this.each(function() {
                f.event.remove(this, b, c, a)
            })
        }
    });
    var Fb = /<script|<style|<link/i
      , Xa = /checked\s*(?:[^=]|=\s*.checked.)/i
      , d = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    f.extend({
        htmlPrefilter: function(b) {
            return b
        },
        clone: function(b, a, c) {
            var d, h, e, k = b.cloneNode(!0), g = xa(b);
            if (!(y.noCloneChecked || 1 !== b.nodeType && 11 !== b.nodeType || f.isXMLDoc(b))) {
                var n = M(k);
                var m = 0;
                for (d = (h = M(b)).length; m < d; m++) {
                    var r = h[m];
                    var q = n[m];
                    void 0;
                    "input" === (e = q.nodeName.toLowerCase()) && Ja.test(r.type) ? q.checked = r.checked : "input" !== e && "textarea" !== e || (q.defaultValue = r.defaultValue)
                }
            }
            if (a)
                if (c)
                    for (h = h || M(b),
                    n = n || M(k),
                    m = 0,
                    d = h.length; m < d; m++)
                        fb(h[m], n[m]);
                else
                    fb(b, k);
            return 0 < (n = M(k, "script")).length && qa(n, !g && M(b, "script")),
            k
        },
        cleanData: function(b) {
            for (var a, c, d, e = f.event.special, k = 0; void 0 !== (c = b[k]); k++)
                if (Ra(c)) {
                    if (a = c[u.expando]) {
                        if (a.events)
                            for (d in a.events)
                                e[d] ? f.event.remove(c, d) : f.removeEvent(c, d, a.handle);
                        c[u.expando] = void 0
                    }
                    c[X.expando] && (c[X.expando] = void 0)
                }
        }
    });
    f.fn.extend({
        detach: function(b) {
            return gb(this, b, !0)
        },
        remove: function(b) {
            return gb(this, b)
        },
        text: function(b) {
            return fa(this, function(b) {
                return void 0 === b ? f.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
                })
            }, null, b, arguments.length)
        },
        append: function() {
            return ja(this, arguments, function(b) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || eb(this, b).appendChild(b)
            })
        },
        prepend: function() {
            return ja(this, arguments, function(b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var a = eb(this, b);
                    a.insertBefore(b, a.firstChild)
                }
            })
        },
        before: function() {
            return ja(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this)
            })
        },
        after: function() {
            return ja(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        empty: function() {
            for (var b, a = 0; null != (b = this[a]); a++)
                1 === b.nodeType && (f.cleanData(M(b, !1)),
                b.textContent = "");
            return this
        },
        clone: function(b, a) {
            return b = null != b && b,
            a = null == a ? b : a,
            this.map(function() {
                return f.clone(this, b, a)
            })
        },
        html: function(b) {
            return fa(this, function(b) {
                var a = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === b && 1 === a.nodeType)
                    return a.innerHTML;
                if ("string" == typeof b && !Fb.test(b) && !U[(sb.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = f.htmlPrefilter(b);
                    try {
                        for (; c < d; c++)
                            1 === (a = this[c] || {}).nodeType && (f.cleanData(M(a, !1)),
                            a.innerHTML = b);
                        a = 0
                    } catch (R) {}
                }
                a && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return ja(this, arguments, function(a) {
                var c = this.parentNode;
                0 > f.inArray(this, b) && (f.cleanData(M(this)),
                c && c.replaceChild(a, this))
            }, b)
        }
    });
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, a) {
        f.fn[b] = function(b) {
            for (var c = [], d = f(b), h = d.length - 1, e = 0; e <= h; e++)
                b = e === h ? this : this.clone(!0),
                f(d[e])[a](b),
                Pa.apply(c, b.get());
            return this.pushStack(c)
        }
    });
    var e = new RegExp("^(" + Db + ")(?!px)[a-z%]+$","i")
      , a = function(b) {
        var a = b.ownerDocument.defaultView;
        return a && a.opener || (a = p),
        a.getComputedStyle(b)
    }
      , c = function(b, a, c) {
        var d, h = {};
        for (d in a)
            h[d] = b.style[d],
            b.style[d] = a[d];
        for (d in c = c.call(b),
        a)
            b.style[d] = h[d];
        return c
    }
      , k = new RegExp(ka.join("|"),"i");
    !function() {
        function b() {
            if (r) {
                m.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                r.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                Y.appendChild(m).appendChild(r);
                var b = p.getComputedStyle(r);
                a = "1%" !== b.top;
                g = 12 === Math.round(parseFloat(b.marginLeft));
                r.style.right = "60%";
                e = 36 === Math.round(parseFloat(b.right));
                c = 36 === Math.round(parseFloat(b.width));
                r.style.position = "absolute";
                d = 12 === Math.round(parseFloat(r.offsetWidth / 3));
                Y.removeChild(m);
                r = null
            }
        }
        var a, c, d, e, k, g, m = B.createElement("div"), r = B.createElement("div");
        r.style && (r.style.backgroundClip = "content-box",
        r.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === r.style.backgroundClip,
        f.extend(y, {
            boxSizingReliable: function() {
                return b(),
                c
            },
            pixelBoxStyles: function() {
                return b(),
                e
            },
            pixelPosition: function() {
                return b(),
                a
            },
            reliableMarginLeft: function() {
                return b(),
                g
            },
            scrollboxSize: function() {
                return b(),
                d
            },
            reliableTrDimensions: function() {
                var b, a, c, d;
                return null == k && (b = B.createElement("table"),
                a = B.createElement("tr"),
                c = B.createElement("div"),
                b.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                a.style.cssText = "border:1px solid",
                a.style.height = "1px",
                c.style.height = "9px",
                c.style.display = "block",
                Y.appendChild(b).appendChild(a).appendChild(c),
                d = p.getComputedStyle(a),
                k = parseInt(d.height, 10) + parseInt(d.borderTopWidth, 10) + parseInt(d.borderBottomWidth, 10) === a.offsetHeight,
                Y.removeChild(b)),
                k
            }
        }))
    }();
    var m = ["Webkit", "Moz", "ms"]
      , r = B.createElement("div").style
      , q = {}
      , Q = /^(none|table(?!-c[ea]).+)/
      , za = /^--/
      , Ea = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ua = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    f.extend({
        cssHooks: {
            opacity: {
                get: function(b, a) {
                    if (a)
                        return b = Ha(b, "opacity"),
                        "" === b ? "1" : b
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(b, a, c, d) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
                var h, e, k, g = T(a), m = za.test(a), n = b.style;
                if (m || (a = Za(g)),
                k = f.cssHooks[a] || f.cssHooks[g],
                void 0 === c)
                    return k && "get"in k && void 0 !== (h = k.get(b, !1, d)) ? h : n[a];
                "string" === (e = typeof c) && (h = ba.exec(c)) && h[1] && (c = ha(b, a, h),
                e = "number");
                null != c && c == c && ("number" !== e || m || (c += h && h[3] || (f.cssNumber[g] ? "" : "px")),
                y.clearCloneStyle || "" !== c || 0 !== a.indexOf("background") || (n[a] = "inherit"),
                k && "set"in k && void 0 === (c = k.set(b, c, d)) || (m ? n.setProperty(a, c) : n[a] = c))
            }
        },
        css: function(b, a, c, d) {
            var h, e, k, g = T(a);
            return za.test(a) || (a = Za(g)),
            (k = f.cssHooks[a] || f.cssHooks[g]) && "get"in k && (h = k.get(b, !0, c)),
            void 0 === h && (h = Ha(b, a, d)),
            "normal" === h && a in ua && (h = ua[a]),
            "" === c || c ? (e = parseFloat(h),
            !0 === c || isFinite(e) ? e || 0 : h) : h
        }
    });
    f.each(["height", "width"], function(b, d) {
        f.cssHooks[d] = {
            get: function(b, a, h) {
                if (a)
                    return !Q.test(f.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? $a(b, d, h) : c(b, Ea, function() {
                        return $a(b, d, h)
                    })
            },
            set: function(b, c, h) {
                var e, k = a(b), g = !y.scrollboxSize() && "absolute" === k.position, m = (g || h) && "border-box" === f.css(b, "boxSizing", !1, k);
                h = h ? hb(b, d, h, m, k) : 0;
                return m && g && (h -= Math.ceil(b["offset" + d[0].toUpperCase() + d.slice(1)] - parseFloat(k[d]) - hb(b, d, "border", !1, k) - .5)),
                h && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (b.style[d] = c,
                c = f.css(b, d)),
                wb(0, c, h)
            }
        }
    });
    f.cssHooks.marginLeft = Ya(y.reliableMarginLeft, function(b, a) {
        if (a)
            return (parseFloat(Ha(b, "marginLeft")) || b.getBoundingClientRect().left - c(b, {
                marginLeft: 0
            }, function() {
                return b.getBoundingClientRect().left
            })) + "px"
    });
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, a) {
        f.cssHooks[b + a] = {
            expand: function(c) {
                var d = 0
                  , h = {};
                for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    h[b + ka[d] + a] = c[d] || c[d - 2] || c[0];
                return h
            }
        };
        "margin" !== b && (f.cssHooks[b + a].set = wb)
    });
    f.fn.extend({
        css: function(b, c) {
            return fa(this, function(b, c, d) {
                var h, e = {}, k = 0;
                if (Array.isArray(c)) {
                    d = a(b);
                    for (h = c.length; k < h; k++)
                        e[c[k]] = f.css(b, c[k], !1, d);
                    return e
                }
                return void 0 !== d ? f.style(b, c, d) : f.css(b, c)
            }, b, c, 1 < arguments.length)
        }
    });
    ((f.Tween = V).prototype = {
        constructor: V,
        init: function(b, a, c, d, e, k) {
            this.elem = b;
            this.prop = c;
            this.easing = e || f.easing._default;
            this.options = a;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = k || (f.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var b = V.propHooks[this.prop];
            return b && b.get ? b.get(this) : V.propHooks._default.get(this)
        },
        run: function(b) {
            var a, c = V.propHooks[this.prop];
            return this.options.duration ? this.pos = a = f.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = a = b,
            this.now = (this.end - this.start) * a + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : V.propHooks._default.set(this),
            this
        }
    }).init.prototype = V.prototype;
    (V.propHooks = {
        _default: {
            get: function(b) {
                var a;
                return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (a = f.css(b.elem, b.prop, "")) && "auto" !== a ? a : 0
            },
            set: function(b) {
                f.fx.step[b.prop] ? f.fx.step[b.prop](b) : 1 !== b.elem.nodeType || !f.cssHooks[b.prop] && null == b.elem.style[Za(b.prop)] ? b.elem[b.prop] = b.now : f.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    }).scrollTop = V.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    f.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return .5 - Math.cos(b * Math.PI) / 2
        },
        _default: "swing"
    };
    f.fx = V.prototype.init;
    f.fx.step = {};
    var P, ra, Gb = /^(?:toggle|show|hide)$/, Fa = /queueHooks$/;
    f.Animation = f.extend(g, {
        tweeners: {
            "*": [function(b, a) {
                var c = this.createTween(b, a);
                return ha(c.elem, b, ba.exec(a), c),
                c
            }
            ]
        },
        tweener: function(b, a) {
            C(b) ? (a = b,
            b = ["*"]) : b = b.match(aa);
            for (var c, d = 0, h = b.length; d < h; d++)
                c = b[d],
                g.tweeners[c] = g.tweeners[c] || [],
                g.tweeners[c].unshift(a)
        },
        prefilters: [function(b, a, c) {
            var d, h, e, k, g, m, n, r = "width"in a || "height"in a, q = this, p = {}, l = b.style, t = b.nodeType && Ua(b), Q = u.get(b, "fxshow");
            for (d in c.queue || (null == (k = f._queueHooks(b, "fx")).unqueued && (k.unqueued = 0,
            g = k.empty.fire,
            k.empty.fire = function() {
                k.unqueued || g()
            }
            ),
            k.unqueued++,
            q.always(function() {
                q.always(function() {
                    k.unqueued--;
                    f.queue(b, "fx").length || k.empty.fire()
                })
            })),
            a)
                if (h = a[d],
                Gb.test(h)) {
                    if (delete a[d],
                    e = e || "toggle" === h,
                    h === (t ? "hide" : "show")) {
                        if ("show" !== h || !Q || void 0 === Q[d])
                            continue;
                        t = !0
                    }
                    p[d] = Q && Q[d] || f.style(b, d)
                }
            if ((a = !f.isEmptyObject(a)) || !f.isEmptyObject(p))
                for (d in r && 1 === b.nodeType && (c.overflow = [l.overflow, l.overflowX, l.overflowY],
                null == (m = Q && Q.display) && (m = u.get(b, "display")),
                "none" === (n = f.css(b, "display")) && (m ? n = m : (ca([b], !0),
                m = b.style.display || m,
                n = f.css(b, "display"),
                ca([b]))),
                ("inline" === n || "inline-block" === n && null != m) && "none" === f.css(b, "float") && (a || (q.done(function() {
                    l.display = m
                }),
                null == m && (n = l.display,
                m = "none" === n ? "" : n)),
                l.display = "inline-block")),
                c.overflow && (l.overflow = "hidden",
                q.always(function() {
                    l.overflow = c.overflow[0];
                    l.overflowX = c.overflow[1];
                    l.overflowY = c.overflow[2]
                })),
                a = !1,
                p)
                    a || (Q ? "hidden"in Q && (t = Q.hidden) : Q = u.access(b, "fxshow", {
                        display: m
                    }),
                    e && (Q.hidden = !t),
                    t && ca([b], !0),
                    q.done(function() {
                        for (d in t || ca([b]),
                        u.remove(b, "fxshow"),
                        p)
                            f.style(b, d, p[d])
                    })),
                    a = jb(t ? Q[d] : 0, d, q),
                    d in Q || (Q[d] = a.start,
                    t && (a.end = a.start,
                    a.start = 0))
        }
        ],
        prefilter: function(b, a) {
            a ? g.prefilters.unshift(b) : g.prefilters.push(b)
        }
    });
    f.speed = function(b, a, c) {
        var d = b && "object" == typeof b ? f.extend({}, b) : {
            complete: c || !c && a || C(b) && b,
            duration: b,
            easing: c && a || a && !C(a) && a
        };
        return f.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in f.fx.speeds ? d.duration = f.fx.speeds[d.duration] : d.duration = f.fx.speeds._default),
        null != d.queue && !0 !== d.queue || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            C(d.old) && d.old.call(this);
            d.queue && f.dequeue(this, d.queue)
        }
        ,
        d
    }
    ;
    f.fn.extend({
        fadeTo: function(b, a, c, d) {
            return this.filter(Ua).css("opacity", 0).show().end().animate({
                opacity: a
            }, b, c, d)
        },
        animate: function(b, a, c, d) {
            var h = f.isEmptyObject(b)
              , e = f.speed(a, c, d);
            a = function() {
                var a = g(this, f.extend({}, b), e);
                (h || u.get(this, "finish")) && a.stop(!0)
            }
            ;
            return a.finish = a,
            h || !1 === e.queue ? this.each(a) : this.queue(e.queue, a)
        },
        stop: function(b, a, c) {
            var d = function(b) {
                var a = b.stop;
                delete b.stop;
                a(c)
            };
            return "string" != typeof b && (c = a,
            a = b,
            b = void 0),
            a && this.queue(b || "fx", []),
            this.each(function() {
                var a = !0
                  , h = null != b && b + "queueHooks"
                  , e = f.timers
                  , k = u.get(this);
                if (h)
                    k[h] && k[h].stop && d(k[h]);
                else
                    for (h in k)
                        k[h] && k[h].stop && Fa.test(h) && d(k[h]);
                for (h = e.length; h--; )
                    e[h].elem !== this || null != b && e[h].queue !== b || (e[h].anim.stop(c),
                    a = !1,
                    e.splice(h, 1));
                !a && c || f.dequeue(this, b)
            })
        },
        finish: function(b) {
            return !1 !== b && (b = b || "fx"),
            this.each(function() {
                var a = u.get(this)
                  , c = a[b + "queue"];
                var d = a[b + "queueHooks"];
                var e = f.timers
                  , k = c ? c.length : 0;
                a.finish = !0;
                f.queue(this, b, []);
                d && d.stop && d.stop.call(this, !0);
                for (d = e.length; d--; )
                    e[d].elem === this && e[d].queue === b && (e[d].anim.stop(!0),
                    e.splice(d, 1));
                for (d = 0; d < k; d++)
                    c[d] && c[d].finish && c[d].finish.call(this);
                delete a.finish
            })
        }
    });
    f.each(["toggle", "show", "hide"], function(b, a) {
        var c = f.fn[a];
        f.fn[a] = function(b, d, h) {
            return null == b || "boolean" == typeof b ? c.apply(this, arguments) : this.animate(bb(a, !0), b, d, h)
        }
    });
    f.each({
        slideDown: bb("show"),
        slideUp: bb("hide"),
        slideToggle: bb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, a) {
        f.fn[b] = function(b, c, d) {
            return this.animate(a, b, c, d)
        }
    });
    f.timers = [];
    f.fx.tick = function() {
        var b, a = 0, c = f.timers;
        for (P = Date.now(); a < c.length; a++)
            (b = c[a])() || c[a] !== b || c.splice(a--, 1);
        c.length || f.fx.stop();
        P = void 0
    }
    ;
    f.fx.timer = function(b) {
        f.timers.push(b);
        f.fx.start()
    }
    ;
    f.fx.interval = 13;
    f.fx.start = function() {
        ra || (ra = !0,
        ab())
    }
    ;
    f.fx.stop = function() {
        ra = null
    }
    ;
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    f.fn.delay = function(b, a) {
        return b = f.fx && f.fx.speeds[b] || b,
        a = a || "fx",
        this.queue(a, function(a, c) {
            var d = p.setTimeout(a, b);
            c.stop = function() {
                p.clearTimeout(d)
            }
        })
    }
    ;
    var Sa = B.createElement("input");
    var jc = B.createElement("select").appendChild(B.createElement("option"));
    Sa.type = "checkbox";
    y.checkOn = "" !== Sa.value;
    y.optSelected = jc.selected;
    (Sa = B.createElement("input")).value = "t";
    Sa.type = "radio";
    y.radioValue = "t" === Sa.value;
    var pb = f.expr.attrHandle;
    f.fn.extend({
        attr: function(b, a) {
            return fa(this, f.attr, b, a, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                f.removeAttr(this, b)
            })
        }
    });
    f.extend({
        attr: function(b, a, c) {
            var d, e, h = b.nodeType;
            if (3 !== h && 8 !== h && 2 !== h)
                return "undefined" == typeof b.getAttribute ? f.prop(b, a, c) : (1 === h && f.isXMLDoc(b) || (e = f.attrHooks[a.toLowerCase()] || (f.expr.match.bool.test(a) ? kc : void 0)),
                void 0 !== c ? null === c ? void f.removeAttr(b, a) : e && "set"in e && void 0 !== (d = e.set(b, c, a)) ? d : (b.setAttribute(a, c + ""),
                c) : e && "get"in e && null !== (d = e.get(b, a)) ? d : null == (d = f.find.attr(b, a)) ? void 0 : d)
        },
        attrHooks: {
            type: {
                set: function(b, a) {
                    if (!y.radioValue && "radio" === a && w(b, "input")) {
                        var c = b.value;
                        return b.setAttribute("type", a),
                        c && (b.value = c),
                        a
                    }
                }
            }
        },
        removeAttr: function(b, a) {
            var c = 0
              , d = a && a.match(aa);
            if (d && 1 === b.nodeType)
                for (; a = d[c++]; )
                    b.removeAttribute(a)
        }
    });
    var kc = {
        set: function(b, a, c) {
            return !1 === a ? f.removeAttr(b, c) : b.setAttribute(c, c),
            c
        }
    };
    f.each(f.expr.match.bool.source.match(/\w+/g), function(b, a) {
        var c = pb[a] || f.find.attr;
        pb[a] = function(b, a, d) {
            var e, h, f = a.toLowerCase();
            return d || (h = pb[f],
            pb[f] = e,
            e = null != c(b, a, d) ? f : null,
            pb[f] = h),
            e
        }
    });
    var lc = /^(?:input|select|textarea|button)$/i
      , mc = /^(?:a|area)$/i;
    f.fn.extend({
        prop: function(b, a) {
            return fa(this, f.prop, b, a, 1 < arguments.length)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[f.propFix[b] || b]
            })
        }
    });
    f.extend({
        prop: function(b, a, c) {
            var d, e, h = b.nodeType;
            if (3 !== h && 8 !== h && 2 !== h)
                return 1 === h && f.isXMLDoc(b) || (a = f.propFix[a] || a,
                e = f.propHooks[a]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(b, c, a)) ? d : b[a] = c : e && "get"in e && null !== (d = e.get(b, a)) ? d : b[a]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var a = f.find.attr(b, "tabindex");
                    return a ? parseInt(a, 10) : lc.test(b.nodeName) || mc.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    y.optSelected || (f.propHooks.selected = {
        get: function(b) {
            b = b.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        },
        set: function(b) {
            b = b.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    });
    f.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        f.propFix[this.toLowerCase()] = this
    });
    f.fn.extend({
        addClass: function(b) {
            var a, c, d, e, k, g, m, r = 0;
            if (C(b))
                return this.each(function(a) {
                    f(this).addClass(b.call(this, a, la(this)))
                });
            if ((a = sa(b)).length)
                for (; c = this[r++]; )
                    if (e = la(c),
                    d = 1 === c.nodeType && " " + t(e) + " ") {
                        for (g = 0; k = a[g++]; )
                            0 > d.indexOf(" " + k + " ") && (d += k + " ");
                        e !== (m = t(d)) && c.setAttribute("class", m)
                    }
            return this
        },
        removeClass: function(b) {
            var a, c, d, e, k, g, m, r = 0;
            if (C(b))
                return this.each(function(a) {
                    f(this).removeClass(b.call(this, a, la(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((a = sa(b)).length)
                for (; c = this[r++]; )
                    if (e = la(c),
                    d = 1 === c.nodeType && " " + t(e) + " ") {
                        for (g = 0; k = a[g++]; )
                            for (; -1 < d.indexOf(" " + k + " "); )
                                d = d.replace(" " + k + " ", " ");
                        e !== (m = t(d)) && c.setAttribute("class", m)
                    }
            return this
        },
        toggleClass: function(b, a) {
            var c = typeof b
              , d = "string" === c || Array.isArray(b);
            return "boolean" == typeof a && d ? a ? this.addClass(b) : this.removeClass(b) : C(b) ? this.each(function(c) {
                f(this).toggleClass(b.call(this, c, la(this), a), a)
            }) : this.each(function() {
                var a, e;
                if (d) {
                    var h = 0;
                    var k = f(this);
                    for (e = sa(b); a = e[h++]; )
                        k.hasClass(a) ? k.removeClass(a) : k.addClass(a)
                } else
                    void 0 !== b && "boolean" !== c || ((a = la(this)) && u.set(this, "__className__", a),
                    this.setAttribute && this.setAttribute("class", a || !1 === b ? "" : u.get(this, "__className__") || ""))
            })
        },
        hasClass: function(b) {
            var a, c = 0;
            for (b = " " + b + " "; a = this[c++]; )
                if (1 === a.nodeType && -1 < (" " + t(la(a)) + " ").indexOf(b))
                    return !0;
            return !1
        }
    });
    var nc = /\r/g;
    f.fn.extend({
        val: function(b) {
            var a, c, d, e = this[0];
            return arguments.length ? (d = C(b),
            this.each(function(c) {
                var e;
                1 === this.nodeType && (null == (e = d ? b.call(this, c, f(this).val()) : b) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = f.map(e, function(b) {
                    return null == b ? "" : b + ""
                })),
                (a = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]) && "set"in a && void 0 !== a.set(this, e, "value") || (this.value = e))
            })) : e ? (a = f.valHooks[e.type] || f.valHooks[e.nodeName.toLowerCase()]) && "get"in a && void 0 !== (c = a.get(e, "value")) ? c : "string" == typeof (c = e.value) ? c.replace(nc, "") : null == c ? "" : c : void 0
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var a = f.find.attr(b, "value");
                    return null != a ? a : t(f.text(b))
                }
            },
            select: {
                get: function(b) {
                    var a, c, d = b.options, e = b.selectedIndex, k = "select-one" === b.type, g = k ? null : [], m = k ? e + 1 : d.length;
                    for (c = 0 > e ? m : k ? e : 0; c < m; c++)
                        if (!(!(a = d[c]).selected && c !== e || a.disabled || a.parentNode.disabled && w(a.parentNode, "optgroup"))) {
                            if (b = f(a).val(),
                            k)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(b, a) {
                    var c, d, e = b.options;
                    a = f.makeArray(a);
                    for (var h = e.length; h--; )
                        ((d = e[h]).selected = -1 < f.inArray(f.valHooks.option.get(d), a)) && (c = !0);
                    return c || (b.selectedIndex = -1),
                    a
                }
            }
        }
    });
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            set: function(a, c) {
                if (Array.isArray(c))
                    return a.checked = -1 < f.inArray(f(a).val(), c)
            }
        };
        y.checkOn || (f.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    y.focusin = "onfocusin"in p;
    var Yb = /^(?:focusinfocus|focusoutblur)$/
      , Zb = function(a) {
        a.stopPropagation()
    };
    f.extend(f.event, {
        trigger: function(a, c, d, e) {
            var b, h, k, g, m, n, r = [d || B], q = cb.call(a, "type") ? a.type : a;
            var v = cb.call(a, "namespace") ? a.namespace.split(".") : [];
            if (b = n = h = d = d || B,
            3 !== d.nodeType && 8 !== d.nodeType && !Yb.test(q + f.event.triggered) && (-1 < q.indexOf(".") && (q = (v = q.split(".")).shift(),
            v.sort()),
            k = 0 > q.indexOf(":") && "on" + q,
            (a = a[f.expando] ? a : new f.Event(q,"object" == typeof a && a)).isTrigger = e ? 2 : 3,
            a.namespace = v.join("."),
            a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            a.result = void 0,
            a.target || (a.target = d),
            c = null == c ? [a] : f.makeArray(c, [a]),
            m = f.event.special[q] || {},
            e || !m.trigger || !1 !== m.trigger.apply(d, c))) {
                if (!e && !m.noBubble && !W(d)) {
                    var l = m.delegateType || q;
                    for (Yb.test(l + q) || (b = b.parentNode); b; b = b.parentNode)
                        r.push(b),
                        h = b;
                    h === (d.ownerDocument || B) && r.push(h.defaultView || h.parentWindow || p)
                }
                for (v = 0; (b = r[v++]) && !a.isPropagationStopped(); )
                    n = b,
                    a.type = 1 < v ? l : m.bindType || q,
                    (g = (u.get(b, "events") || Object.create(null))[a.type] && u.get(b, "handle")) && g.apply(b, c),
                    (g = k && b[k]) && g.apply && Ra(b) && (a.result = g.apply(b, c),
                    !1 === a.result && a.preventDefault());
                return a.type = q,
                e || a.isDefaultPrevented() || m._default && !1 !== m._default.apply(r.pop(), c) || !Ra(d) || k && C(d[q]) && !W(d) && ((h = d[k]) && (d[k] = null),
                f.event.triggered = q,
                a.isPropagationStopped() && n.addEventListener(q, Zb),
                d[q](),
                a.isPropagationStopped() && n.removeEventListener(q, Zb),
                f.event.triggered = void 0,
                h && (d[k] = h)),
                a.result
            }
        },
        simulate: function(a, c, d) {
            a = f.extend(new f.Event, d, {
                type: a,
                isSimulated: !0
            });
            f.event.trigger(a, null, c)
        }
    });
    f.fn.extend({
        trigger: function(a, c) {
            return this.each(function() {
                f.event.trigger(a, c, this)
            })
        },
        triggerHandler: function(a, c) {
            var b = this[0];
            if (b)
                return f.event.trigger(a, c, b, !0)
        }
    });
    y.focusin || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, c) {
        var b = function(a) {
            f.event.simulate(c, a.target, f.event.fix(a))
        };
        f.event.special[c] = {
            setup: function() {
                var d = this.ownerDocument || this.document || this
                  , e = u.access(d, c);
                e || d.addEventListener(a, b, !0);
                u.access(d, c, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this.document || this
                  , e = u.access(d, c) - 1;
                e ? u.access(d, c, e) : (d.removeEventListener(a, b, !0),
                u.remove(d, c))
            }
        }
    });
    var qb = p.location
      , $b = Date.now()
      , Tb = /\?/;
    f.parseXML = function(a) {
        var b;
        if (!a || "string" != typeof a)
            return null;
        try {
            var c = (new p.DOMParser).parseFromString(a, "text/xml")
        } catch (v) {}
        return b = c && c.getElementsByTagName("parsererror")[0],
        c && !b || f.error("Invalid XML: " + (b ? f.map(b.childNodes, function(a) {
            return a.textContent
        }).join("\n") : a)),
        c
    }
    ;
    var hc = /\[\]$/
      , ac = /\r?\n/g
      , oc = /^(?:submit|button|image|reset|file)$/i
      , pc = /^(?:input|select|textarea|keygen)/i;
    f.param = function(a, c) {
        var b, d = [], e = function(a, b) {
            b = C(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(null == b ? "" : b)
        };
        if (null == a)
            return "";
        if (Array.isArray(a) || a.jquery && !f.isPlainObject(a))
            f.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (b in a)
                kb(b, a[b], c, e);
        return d.join("\x26")
    }
    ;
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = f.prop(this, "elements");
                return a ? f.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !f(this).is(":disabled") && pc.test(this.nodeName) && !oc.test(a) && (this.checked || !Ja.test(a))
            }).map(function(a, c) {
                a = f(this).val();
                return null == a ? null : Array.isArray(a) ? f.map(a, function(a) {
                    return {
                        name: c.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: a.replace(ac, "\r\n")
                }
            }).get()
        }
    });
    var qc = /%20/g
      , rc = /#.*$/
      , sc = /([?&])_=[^&]*/
      , tc = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , uc = /^(?:GET|HEAD)$/
      , vc = /^\/\//
      , bc = {}
      , Nb = {}
      , cc = "*/".concat("*")
      , Ub = B.createElement("a");
    Ub.href = qb.href;
    f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
            accepts: {
                "*": cc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": f.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, c) {
            return c ? Oa(Oa(a, f.ajaxSettings), c) : Oa(f.ajaxSettings, a)
        },
        ajaxPrefilter: Ia(bc),
        ajaxTransport: Ia(Nb),
        ajax: function(a, c) {
            function b(a, b, c, h) {
                var n, r, q, v, G, E = b;
                P || (P = !0,
                g && p.clearTimeout(g),
                d = void 0,
                k = h || "",
                z.readyState = 0 < a ? 4 : 0,
                n = 200 <= a && 300 > a || 304 === a,
                c && (v = function(a, b, c) {
                    for (var d, e, f, k, h = a.contents, g = a.dataTypes; "*" === g[0]; )
                        g.shift(),
                        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                    if (d)
                        for (e in h)
                            if (h[e] && h[e].test(d)) {
                                g.unshift(e);
                                break
                            }
                    if (g[0]in c)
                        f = g[0];
                    else {
                        for (e in c) {
                            if (!g[0] || a.converters[e + " " + g[0]]) {
                                f = e;
                                break
                            }
                            k || (k = e)
                        }
                        f = f || k
                    }
                    if (f)
                        return f !== g[0] && g.unshift(f),
                        c[f]
                }(l, z, c)),
                !n && -1 < f.inArray("script", l.dataTypes) && 0 > f.inArray("json", l.dataTypes) && (l.converters["text script"] = function() {}
                ),
                v = function(a, b, c, d) {
                    var e, f, k, h, g, m = {}, n = a.dataTypes.slice();
                    if (n[1])
                        for (k in a.converters)
                            m[k.toLowerCase()] = a.converters[k];
                    for (f = n.shift(); f; )
                        if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                        !g && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                        g = f,
                        f = n.shift())
                            if ("*" === f)
                                f = g;
                            else if ("*" !== g && g !== f) {
                                if (!(k = m[g + " " + f] || m["* " + f]))
                                    for (e in m)
                                        if ((h = e.split(" "))[1] === f && (k = m[g + " " + h[0]] || m["* " + h[0]])) {
                                            !0 === k ? k = m[e] : !0 !== m[e] && (f = h[0],
                                            n.unshift(h[1]));
                                            break
                                        }
                                if (!0 !== k)
                                    if (k && a["throws"])
                                        b = k(b);
                                    else
                                        try {
                                            b = k(b)
                                        } catch (ic) {
                                            return {
                                                state: "parsererror",
                                                error: k ? ic : "No conversion from " + g + " to " + f
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: b
                    }
                }(l, v, z, n),
                n ? (l.ifModified && ((G = z.getResponseHeader("Last-Modified")) && (f.lastModified[e] = G),
                (G = z.getResponseHeader("etag")) && (f.etag[e] = G)),
                204 === a || "HEAD" === l.type ? E = "nocontent" : 304 === a ? E = "notmodified" : (E = v.state,
                r = v.data,
                n = !(q = v.error))) : (q = E,
                !a && E || (E = "error",
                0 > a && (a = 0))),
                z.status = a,
                z.statusText = (b || E) + "",
                n ? u.resolveWith(t, [r, E, z]) : u.rejectWith(t, [z, E, q]),
                z.statusCode(x),
                x = void 0,
                m && Q.trigger(n ? "ajaxSuccess" : "ajaxError", [z, l, n ? r : q]),
                Ea.fireWith(t, [z, E]),
                m && (Q.trigger("ajaxComplete", [z, l]),
                --f.active || f.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a,
            a = void 0);
            c = c || {};
            var d, e, k, h, g, m, r, q, l = f.ajaxSetup({}, c), t = l.context || l, Q = l.context && (t.nodeType || t.jquery) ? f(t) : f.event, u = f.Deferred(), Ea = f.Callbacks("once memory"), x = l.statusCode || {}, za = {}, ua = {}, y = "canceled", z = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (P) {
                        if (!h)
                            for (h = {}; b = tc.exec(k); )
                                h[b[1].toLowerCase() + " "] = (h[b[1].toLowerCase() + " "] || []).concat(b[2]);
                        b = h[a.toLowerCase() + " "]
                    }
                    return null == b ? null : b.join(", ")
                },
                getAllResponseHeaders: function() {
                    return P ? k : null
                },
                setRequestHeader: function(a, b) {
                    return null == P && (a = ua[a.toLowerCase()] = ua[a.toLowerCase()] || a,
                    za[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return null == P && (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (P)
                            z.always(a[z.status]);
                        else
                            for (b in a)
                                x[b] = [x[b], a[b]];
                    return this
                },
                abort: function(a) {
                    a = a || y;
                    return d && d.abort(a),
                    b(0, a),
                    this
                }
            };
            if (u.promise(z),
            l.url = ((a || l.url || qb.href) + "").replace(vc, qb.protocol + "//"),
            l.type = c.method || c.type || l.method || l.type,
            l.dataTypes = (l.dataType || "*").toLowerCase().match(aa) || [""],
            null == l.crossDomain) {
                a = B.createElement("a");
                try {
                    a.href = l.url,
                    a.href = a.href,
                    l.crossDomain = Ub.protocol + "//" + Ub.host != a.protocol + "//" + a.host
                } catch (Pb) {
                    l.crossDomain = !0
                }
            }
            if (l.data && l.processData && "string" != typeof l.data && (l.data = f.param(l.data, l.traditional)),
            xb(bc, l, c, z),
            P)
                return z;
            for (r in (m = f.event && l.global) && 0 == f.active++ && f.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !uc.test(l.type),
            e = l.url.replace(rc, ""),
            l.hasContent ? l.data && l.processData && 0 === (l.contentType || "").indexOf("application/x-www-form-urlencoded") && (l.data = l.data.replace(qc, "+")) : (q = l.url.slice(e.length),
            l.data && (l.processData || "string" == typeof l.data) && (e += (Tb.test(e) ? "\x26" : "?") + l.data,
            delete l.data),
            !1 === l.cache && (e = e.replace(sc, "$1"),
            q = (Tb.test(e) ? "\x26" : "?") + "_\x3d" + $b++ + q),
            l.url = e + q),
            l.ifModified && (f.lastModified[e] && z.setRequestHeader("If-Modified-Since", f.lastModified[e]),
            f.etag[e] && z.setRequestHeader("If-None-Match", f.etag[e])),
            (l.data && l.hasContent && !1 !== l.contentType || c.contentType) && z.setRequestHeader("Content-Type", l.contentType),
            z.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + cc + "; q\x3d0.01" : "") : l.accepts["*"]),
            l.headers)
                z.setRequestHeader(r, l.headers[r]);
            if (l.beforeSend && (!1 === l.beforeSend.call(t, z, l) || P))
                return z.abort();
            if (y = "abort",
            Ea.add(l.complete),
            z.done(l.success),
            z.fail(l.error),
            d = xb(Nb, l, c, z)) {
                if (z.readyState = 1,
                m && Q.trigger("ajaxSend", [z, l]),
                P)
                    return z;
                l.async && 0 < l.timeout && (g = p.setTimeout(function() {
                    z.abort("timeout")
                }, l.timeout));
                try {
                    var P = !1;
                    d.send(za, b)
                } catch (Pb) {
                    if (P)
                        throw Pb;
                    b(-1, Pb)
                }
            } else
                b(-1, "No Transport");
            return z
        },
        getJSON: function(a, c, d) {
            return f.get(a, c, d, "json")
        },
        getScript: function(a, c) {
            return f.get(a, void 0, c, "script")
        }
    });
    f.each(["get", "post"], function(a, c) {
        f[c] = function(a, b, d, e) {
            return C(b) && (e = e || d,
            d = b,
            b = void 0),
            f.ajax(f.extend({
                url: a,
                type: c,
                dataType: e,
                data: b,
                success: d
            }, f.isPlainObject(a) && a))
        }
    });
    f.ajaxPrefilter(function(a) {
        for (var b in a.headers)
            "content-type" === b.toLowerCase() && (a.contentType = a.headers[b] || "")
    });
    f._evalUrl = function(a, c, d) {
        return f.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(a) {
                f.globalEval(a, c, d)
            }
        })
    }
    ;
    f.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (C(a) && (a = a.call(this[0])),
            b = f(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this
        },
        wrapInner: function(a) {
            return C(a) ? this.each(function(b) {
                f(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = f(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = C(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                f(this).replaceWith(this.childNodes)
            }),
            this
        }
    });
    f.expr.pseudos.hidden = function(a) {
        return !f.expr.pseudos.visible(a)
    }
    ;
    f.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }
    ;
    f.ajaxSettings.xhr = function() {
        try {
            return new p.XMLHttpRequest
        } catch (b) {}
    }
    ;
    var wc = {
        0: 200,
        1223: 204
    }
      , rb = f.ajaxSettings.xhr();
    y.cors = !!rb && "withCredentials"in rb;
    y.ajax = rb = !!rb;
    f.ajaxTransport(function(a) {
        var b, c;
        if (y.cors || rb && !a.crossDomain)
            return {
                send: function(d, e) {
                    var f, k = a.xhr();
                    if (k.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (f in a.xhrFields)
                            k[f] = a.xhrFields[f];
                    for (f in a.mimeType && k.overrideMimeType && k.overrideMimeType(a.mimeType),
                    a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest"),
                    d)
                        k.setRequestHeader(f, d[f]);
                    b = function(a) {
                        return function() {
                            b && (b = c = k.onload = k.onerror = k.onabort = k.ontimeout = k.onreadystatechange = null,
                            "abort" === a ? k.abort() : "error" === a ? "number" != typeof k.status ? e(0, "error") : e(k.status, k.statusText) : e(wc[k.status] || k.status, k.statusText, "text" !== (k.responseType || "text") || "string" != typeof k.responseText ? {
                                binary: k.response
                            } : {
                                text: k.responseText
                            }, k.getAllResponseHeaders()))
                        }
                    }
                    ;
                    k.onload = b();
                    c = k.onerror = k.ontimeout = b("error");
                    void 0 !== k.onabort ? k.onabort = c : k.onreadystatechange = function() {
                        4 === k.readyState && p.setTimeout(function() {
                            b && c()
                        })
                    }
                    ;
                    b = b("abort");
                    try {
                        k.send(a.hasContent && a.data || null)
                    } catch (J) {
                        if (b)
                            throw J;
                    }
                },
                abort: function() {
                    b && b()
                }
            }
    });
    f.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return f.globalEval(a),
                a
            }
        }
    });
    f.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    f.ajaxTransport("script", function(a) {
        var b, c;
        if (a.crossDomain || a.scriptAttrs)
            return {
                send: function(d, e) {
                    b = f("\x3cscript\x3e").attr(a.scriptAttrs || {}).prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove();
                        c = null;
                        a && e("error" === a.type ? 404 : 200, a.type)
                    }
                    );
                    B.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
    });
    var dc, ec = [], Vb = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ec.pop() || f.expando + "_" + $b++;
            return this[a] = !0,
            a
        }
    });
    f.ajaxPrefilter("json jsonp", function(a, c, d) {
        var b, e, k, g = !1 !== a.jsonp && (Vb.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Vb.test(a.data) && "data");
        if (g || "jsonp" === a.dataTypes[0])
            return b = a.jsonpCallback = C(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
            g ? a[g] = a[g].replace(Vb, "$1" + b) : !1 !== a.jsonp && (a.url += (Tb.test(a.url) ? "\x26" : "?") + a.jsonp + "\x3d" + b),
            a.converters["script json"] = function() {
                return k || f.error(b + " was not called"),
                k[0]
            }
            ,
            a.dataTypes[0] = "json",
            e = p[b],
            p[b] = function() {
                k = arguments
            }
            ,
            d.always(function() {
                void 0 === e ? f(p).removeProp(b) : p[b] = e;
                a[b] && (a.jsonpCallback = c.jsonpCallback,
                ec.push(b));
                k && C(e) && e(k[0]);
                k = e = void 0
            }),
            "script"
    });
    y.createHTMLDocument = ((dc = B.implementation.createHTMLDocument("").body).innerHTML = "\x3cform\x3e\x3c/form\x3e\x3cform\x3e\x3c/form\x3e",
    2 === dc.childNodes.length);
    f.parseHTML = function(a, c, d) {
        return "string" != typeof a ? [] : ("boolean" == typeof c && (d = c,
        c = !1),
        c || (y.createHTMLDocument ? ((b = (c = B.implementation.createHTMLDocument("")).createElement("base")).href = B.location.href,
        c.head.appendChild(b)) : c = B),
        k = !d && [],
        (e = Cb.exec(a)) ? [c.createElement(e[1])] : (e = Va([a], c, k),
        k && k.length && f(k).remove(),
        f.merge([], e.childNodes)));
        var b, e, k
    }
    ;
    f.fn.load = function(a, c, d) {
        var b, e, k, g = this, h = a.indexOf(" ");
        return -1 < h && (b = t(a.slice(h)),
        a = a.slice(0, h)),
        C(c) ? (d = c,
        c = void 0) : c && "object" == typeof c && (e = "POST"),
        0 < g.length && f.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: c
        }).done(function(a) {
            k = arguments;
            g.html(b ? f("\x3cdiv\x3e").append(f.parseHTML(a)).find(b) : a)
        }).always(d && function(a, b) {
            g.each(function() {
                d.apply(this, k || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ;
    f.expr.pseudos.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    f.offset = {
        setOffset: function(a, c, d) {
            var b, e, k, g = f.css(a, "position"), h = f(a), m = {};
            "static" === g && (a.style.position = "relative");
            var n = h.offset();
            var r = f.css(a, "top");
            var q = f.css(a, "left");
            ("absolute" === g || "fixed" === g) && -1 < (r + q).indexOf("auto") ? (k = (b = h.position()).top,
            e = b.left) : (k = parseFloat(r) || 0,
            e = parseFloat(q) || 0);
            C(c) && (c = c.call(a, d, f.extend({}, n)));
            null != c.top && (m.top = c.top - n.top + k);
            null != c.left && (m.left = c.left - n.left + e);
            "using"in c ? c.using.call(a, m) : h.css(m)
        }
    };
    f.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    f.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0];
            return d ? d.getClientRects().length ? (b = d.getBoundingClientRect(),
            c = d.ownerDocument.defaultView,
            {
                top: b.top + c.pageYOffset,
                left: b.left + c.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var a, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === f.css(c, "position"))
                    var e = c.getBoundingClientRect();
                else {
                    e = this.offset();
                    var k = c.ownerDocument;
                    for (a = c.offsetParent || k.documentElement; a && (a === k.body || a === k.documentElement) && "static" === f.css(a, "position"); )
                        a = a.parentNode;
                    a && a !== c && 1 === a.nodeType && ((d = f(a).offset()).top += f.css(a, "borderTopWidth", !0),
                    d.left += f.css(a, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - d.top - f.css(c, "marginTop", !0),
                    left: e.left - d.left - f.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === f.css(a, "position"); )
                    a = a.offsetParent;
                return a || Y
            })
        }
    });
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var b = "pageYOffset" === c;
        f.fn[a] = function(d) {
            return fa(this, function(a, d, e) {
                var k;
                if (W(a) ? k = a : 9 === a.nodeType && (k = a.defaultView),
                void 0 === e)
                    return k ? k[c] : a[d];
                k ? k.scrollTo(b ? k.pageXOffset : e, b ? e : k.pageYOffset) : a[d] = e
            }, a, d, arguments.length)
        }
    });
    f.each(["top", "left"], function(a, c) {
        f.cssHooks[c] = Ya(y.pixelPosition, function(a, b) {
            if (b)
                return b = Ha(a, c),
                e.test(b) ? f(a).position()[c] + "px" : b
        })
    });
    f.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        f.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(b, d) {
            f.fn[d] = function(e, k) {
                var g = arguments.length && (b || "boolean" != typeof e)
                  , h = b || (!0 === e || !0 === k ? "margin" : "border");
                return fa(this, function(b, c, e) {
                    var k;
                    return W(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (k = b.documentElement,
                    Math.max(b.body["scroll" + a], k["scroll" + a], b.body["offset" + a], k["offset" + a], k["client" + a])) : void 0 === e ? f.css(b, c, h) : f.style(b, c, e, h)
                }, c, g ? e : void 0, g)
            }
        })
    });
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, c) {
        f.fn[c] = function(a) {
            return this.on(c, a)
        }
    });
    f.fn.extend({
        bind: function(a, c, d) {
            return this.on(a, null, c, d)
        },
        unbind: function(a, c) {
            return this.off(a, null, c)
        },
        delegate: function(a, c, d, e) {
            return this.on(c, a, d, e)
        },
        undelegate: function(a, c, d) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", d)
        },
        hover: function(a, c) {
            return this.mouseenter(a).mouseleave(c || a)
        }
    });
    f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, c) {
        f.fn[c] = function(a, b) {
            return 0 < arguments.length ? this.on(c, null, a, b) : this.trigger(c)
        }
    });
    var xc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    f.proxy = function(a, c) {
        var b, d, e;
        if ("string" == typeof c && (b = a[c],
        c = a,
        a = b),
        C(a))
            return d = Z.call(arguments, 2),
            (e = function() {
                return a.apply(c || this, d.concat(Z.call(arguments)))
            }
            ).guid = a.guid = a.guid || f.guid++,
            e
    }
    ;
    f.holdReady = function(a) {
        a ? f.readyWait++ : f.ready(!0)
    }
    ;
    f.isArray = Array.isArray;
    f.parseJSON = JSON.parse;
    f.nodeName = w;
    f.isFunction = C;
    f.isWindow = W;
    f.camelCase = T;
    f.type = A;
    f.now = Date.now;
    f.isNumeric = function(a) {
        var b = f.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
    }
    ;
    f.trim = function(a) {
        return null == a ? "" : (a + "").replace(xc, "")
    }
    ;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return f
    });
    var yc = p.jQuery
      , zc = p.$;
    return f.noConflict = function(a) {
        return p.$ === f && (p.$ = zc),
        a && p.jQuery === f && (p.jQuery = yc),
        f
    }
    ,
    "undefined" == typeof l && (p.jQuery = p.$ = f),
    f
});
!function(p, l) {
    "object" == typeof exports && "undefined" != typeof module ? l(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], l) : l((p = "undefined" != typeof globalThis ? globalThis : p || self).bootstrap = {}, p.jQuery)
}(this, function(p, l) {
    function I(d, e) {
        for (var a = 0; a < e.length; a++) {
            var c = e[a];
            c.enumerable = c.enumerable || !1;
            c.configurable = !0;
            "value"in c && (c.writable = !0);
            Object.defineProperty(d, c.key, c)
        }
    }
    function A(d, e, a) {
        return e && I(d.prototype, e),
        a && I(d, a),
        d
    }
    function D() {
        return (D = Object.assign || function(d) {
            for (var e = 1; e < arguments.length; e++) {
                var a = arguments[e], c;
                for (c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && (d[c] = a[c])
            }
            return d
        }
        ).apply(this, arguments)
    }
    function w(d) {
        return d && "[object Function]" === {}.toString.call(d)
    }
    function L(d, e) {
        if (1 !== d.nodeType)
            return [];
        d = d.ownerDocument.defaultView.getComputedStyle(d, null);
        return e ? d[e] : d
    }
    function F(d) {
        return "HTML" === d.nodeName ? d : d.parentNode || d.host
    }
    function H(d) {
        if (!d)
            return document.body;
        switch (d.nodeName) {
        case "HTML":
        case "BODY":
            return d.ownerDocument.body;
        case "#document":
            return d.body
        }
        var e = L(d);
        return /(auto|scroll|overlay)/.test(e.overflow + e.overflowY + e.overflowX) ? d : H(F(d))
    }
    function x(d) {
        return 11 === d ? zb : 10 === d ? y : zb || y
    }
    function N(d) {
        if (!d)
            return document.documentElement;
        for (var e = x(10) ? document.body : null, a = d.offsetParent || null; a === e && d.nextElementSibling; )
            a = (d = d.nextElementSibling).offsetParent;
        return (e = a && a.nodeName) && "BODY" !== e && "HTML" !== e ? -1 !== ["TH", "TD", "TABLE"].indexOf(a.nodeName) && "static" === L(a, "position") ? N(a) : a : d ? d.ownerDocument.documentElement : document.documentElement
    }
    function S(d) {
        return null !== d.parentNode ? S(d.parentNode) : d
    }
    function pa(d, e) {
        if (!(d && d.nodeType && e && e.nodeType))
            return document.documentElement;
        var a = d.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
          , c = a ? d : e;
        a = a ? e : d;
        var k = document.createRange();
        k.setStart(c, 0);
        k.setEnd(a, 0);
        var f;
        k = k.commonAncestorContainer;
        if (d !== k && e !== k || c.contains(a))
            return "BODY" === (f = k.nodeName) || "HTML" !== f && N(k.firstElementChild) !== k ? N(k) : k;
        c = S(d);
        return c.host ? pa(c.host, e) : pa(d, S(e).host)
    }
    function T(d) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , a = d.nodeName;
        return "BODY" === a || "HTML" === a ? (a = d.ownerDocument.documentElement,
        (d.ownerDocument.scrollingElement || a)[e]) : d[e]
    }
    function ia(d, e) {
        var a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , c = T(e, "top")
          , k = T(e, "left");
        a = a ? -1 : 1;
        return d.top += c * a,
        d.bottom += c * a,
        d.left += k * a,
        d.right += k * a,
        d
    }
    function wa(d, e) {
        e = "x" === e ? "Left" : "Top";
        var a = "Left" === e ? "Right" : "Bottom";
        return parseFloat(d["border" + e + "Width"]) + parseFloat(d["border" + a + "Width"])
    }
    function ha(d, e, a, c) {
        return Math.max(e["offset" + d], e["scroll" + d], a["client" + d], a["offset" + d], a["scroll" + d], x(10) ? parseInt(a["offset" + d]) + parseInt(c["margin" + ("Height" === d ? "Top" : "Left")]) + parseInt(c["margin" + ("Height" === d ? "Bottom" : "Right")]) : 0)
    }
    function ca(d) {
        var e = d.body;
        d = d.documentElement;
        var a = x(10) && getComputedStyle(d);
        return {
            height: ha("Height", e, d, a),
            width: ha("Width", e, d, a)
        }
    }
    function M(d) {
        return B({}, d, {
            right: d.left + d.width,
            bottom: d.top + d.height
        })
    }
    function qa(d) {
        var e = {};
        try {
            if (x(10)) {
                e = d.getBoundingClientRect();
                var a = T(d, "top")
                  , c = T(d, "left");
                e.top += a;
                e.left += c;
                e.bottom += a;
                e.right += c
            } else
                e = d.getBoundingClientRect()
        } catch (k) {}
        e = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        };
        c = "HTML" === d.nodeName ? ca(d.ownerDocument) : {};
        a = d.offsetWidth - (c.width || d.clientWidth || e.width);
        c = d.offsetHeight - (c.height || d.clientHeight || e.height);
        if (a || c)
            d = L(d),
            a -= wa(d, "x"),
            c -= wa(d, "y"),
            e.width -= a,
            e.height -= c;
        return M(e)
    }
    function Va(d, e) {
        var a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , c = x(10)
          , k = "HTML" === e.nodeName
          , f = qa(d)
          , g = qa(e)
          , q = H(d)
          , l = L(e)
          , p = parseFloat(l.borderTopWidth)
          , t = parseFloat(l.borderLeftWidth);
        a && k && (g.top = Math.max(g.top, 0),
        g.left = Math.max(g.left, 0));
        f = M({
            top: f.top - g.top - p,
            left: f.left - g.left - t,
            width: f.width,
            height: f.height
        });
        if (f.marginTop = 0,
        f.marginLeft = 0,
        !c && k)
            k = parseFloat(l.marginTop),
            l = parseFloat(l.marginLeft),
            f.top -= p - k,
            f.bottom -= p - k,
            f.left -= t - l,
            f.right -= t - l,
            f.marginTop = k,
            f.marginLeft = l;
        return (c && !a ? e.contains(q) : e === q && "BODY" !== q.nodeName) && (f = ia(f, e)),
        f
    }
    function Ga(d) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , a = d.ownerDocument.documentElement
          , c = Va(d, a)
          , k = Math.max(a.clientWidth, window.innerWidth || 0)
          , f = Math.max(a.clientHeight, window.innerHeight || 0)
          , g = e ? 0 : T(a);
        e = e ? 0 : T(a, "left");
        return M({
            top: g - c.top + c.marginTop,
            left: e - c.left + c.marginLeft,
            width: k,
            height: f
        })
    }
    function ya(d) {
        var e = d.nodeName;
        if ("BODY" === e || "HTML" === e)
            return !1;
        if ("fixed" === L(d, "position"))
            return !0;
        d = F(d);
        return !!d && ya(d)
    }
    function tb(d) {
        if (!d || !d.parentElement || x())
            return document.documentElement;
        for (d = d.parentElement; d && "none" === L(d, "transform"); )
            d = d.parentElement;
        return d || document.documentElement
    }
    function Ma(d, e, a, c) {
        var k = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , f = {
            top: 0,
            left: 0
        }
          , g = k ? tb(d) : pa(d, e && e.referenceNode ? e.referenceNode : e);
        if ("viewport" === c)
            f = Ga(g, k);
        else {
            var q = void 0;
            "scrollParent" === c ? "BODY" === (q = H(F(e))).nodeName && (q = d.ownerDocument.documentElement) : q = "window" === c ? d.ownerDocument.documentElement : c;
            k = Va(q, g, k);
            "HTML" !== q.nodeName || ya(g) ? f = k : (q = ca(d.ownerDocument),
            g = q.height,
            q = q.width,
            f.top += k.top - k.marginTop,
            f.bottom = g + k.top,
            f.left += k.left - k.marginLeft,
            f.right = q + k.left)
        }
        k = "number" == typeof (a = a || 0);
        return f.left += k ? a : a.left || 0,
        f.top += k ? a : a.top || 0,
        f.right -= k ? a : a.right || 0,
        f.bottom -= k ? a : a.bottom || 0,
        f
    }
    function Na(d, e, a, c, f) {
        var k = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === d.indexOf("auto"))
            return d;
        k = Ma(a, c, k, f);
        var g = {
            top: {
                width: k.width,
                height: e.top - k.top
            },
            right: {
                width: k.right - e.right,
                height: k.height
            },
            bottom: {
                width: k.width,
                height: k.bottom - e.bottom
            },
            left: {
                width: e.left - k.left,
                height: k.height
            }
        };
        k = Object.keys(g).map(function(a) {
            var c = g[a];
            return B({
                key: a
            }, g[a], {
                area: c.width * c.height
            })
        }).sort(function(a, c) {
            return c.area - a.area
        });
        var q = k.filter(function(c) {
            var d = c.height;
            return c.width >= a.clientWidth && d >= a.clientHeight
        });
        k = 0 < q.length ? q[0].key : k[0].key;
        q = d.split("-")[1];
        return k + (q ? "-" + q : "")
    }
    function eb(d, e, a) {
        var c = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          , k = c ? tb(e) : pa(e, a && a.referenceNode ? a.referenceNode : a);
        return Va(a, k, c)
    }
    function ub(d) {
        var e = d.ownerDocument.defaultView.getComputedStyle(d)
          , a = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0);
        e = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: d.offsetWidth + e,
            height: d.offsetHeight + a
        }
    }
    function Wa(d) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return d.replace(/left|right|bottom|top/g, function(a) {
            return e[a]
        })
    }
    function fb(d, e, a) {
        a = a.split("-")[0];
        d = ub(d);
        var c = {
            width: d.width,
            height: d.height
        }
          , k = -1 !== ["right", "left"].indexOf(a)
          , f = k ? "top" : "left"
          , g = k ? "left" : "top"
          , q = k ? "height" : "width";
        return c[f] = e[f] + e[q] / 2 - d[q] / 2,
        c[g] = a === g ? e[g] - d[k ? "width" : "height"] : e[Wa(g)],
        c
    }
    function ja(d, e) {
        return Array.prototype.find ? d.find(e) : d.filter(e)[0]
    }
    function gb(d, e, a) {
        return (void 0 === a ? d : d.slice(0, function(a, d, e) {
            if (Array.prototype.findIndex)
                return a.findIndex(function(a) {
                    return a[d] === e
                });
            var c = ja(a, function(a) {
                return a[d] === e
            });
            return a.indexOf(c)
        }(d, "name", a))).forEach(function(a) {
            a.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var c = a.function || a.fn;
            a.enabled && w(c) && (e.offsets.popper = M(e.offsets.popper),
            e.offsets.reference = M(e.offsets.reference),
            e = c(e, a))
        }),
        e
    }
    function Ha(d, e) {
        return d.some(function(a) {
            var c = a.name;
            return a.enabled && c === e
        })
    }
    function Ya(d) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], a = d.charAt(0).toUpperCase() + d.slice(1), c = 0; c < e.length; c++) {
            var f = e[c];
            f = f ? "" + f + a : d;
            if ("undefined" != typeof document.body.style[f])
                return f
        }
        return null
    }
    function Za(d) {
        return (d = d.ownerDocument) ? d.defaultView : window
    }
    function wb(d, e, a, c) {
        a.updateBound = c;
        Za(d).addEventListener("resize", a.updateBound, {
            passive: !0
        });
        d = H(d);
        return function za(a, c, d, e) {
            var f = "BODY" === a.nodeName;
            a = f ? a.ownerDocument.defaultView : a;
            a.addEventListener(c, d, {
                passive: !0
            });
            f || za(H(a.parentNode), c, d, e);
            e.push(a)
        }(d, "scroll", a.updateBound, a.scrollParents),
        a.scrollElement = d,
        a.eventsEnabled = !0,
        a
    }
    function hb() {
        var d, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (d = this.reference,
        e = this.state,
        Za(d).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function(a) {
            a.removeEventListener("scroll", e.updateBound)
        }),
        e.updateBound = null,
        e.scrollParents = [],
        e.scrollElement = null,
        e.eventsEnabled = !1,
        e))
    }
    function $a(d) {
        return "" !== d && !isNaN(parseFloat(d)) && isFinite(d)
    }
    function V(d, e) {
        Object.keys(e).forEach(function(a) {
            var c = "";
            -1 !== "width height top right bottom left".split(" ").indexOf(a) && $a(e[a]) && (c = "px");
            d.style[a] = e[a] + c
        })
    }
    function ab(d, e, a) {
        var c = ja(d, function(a) {
            return a.name === e
        });
        d = !!c && d.some(function(d) {
            return d.name === a && d.enabled && d.order < c.order
        });
        if (!d) {
            var f = "`" + e + "`";
            console.warn("`" + a + "` modifier is required by " + f + " modifier in order to work, be sure to include it before " + f + "!")
        }
        return d
    }
    function ib(d) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , a = na.indexOf(d);
        a = na.slice(a + 1).concat(na.slice(0, a));
        return e ? a.reverse() : a
    }
    function bb(d, e, a, c) {
        var f = [0, 0]
          , g = -1 !== ["right", "left"].indexOf(c);
        d = d.split(/(\+|\-)/).map(function(a) {
            return a.trim()
        });
        c = d.indexOf(ja(d, function(a) {
            return -1 !== a.search(/,|\s/)
        }));
        d[c] && -1 === d[c].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var r = /\s*,\s*|\s+/;
        d = -1 !== c ? [d.slice(0, c).concat([d[c].split(r)[0]]), [d[c].split(r)[1]].concat(d.slice(c + 1))] : [d];
        return (d = d.map(function(c, d) {
            var f = (1 === d ? !g : g) ? "height" : "width"
              , k = !1;
            return c.reduce(function(a, c) {
                return "" === a[a.length - 1] && -1 !== ["+", "-"].indexOf(c) ? (a[a.length - 1] = c,
                k = !0,
                a) : k ? (a[a.length - 1] += c,
                k = !1,
                a) : a.concat(c)
            }, []).map(function(c) {
                var d = c.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
                var k = +d[1];
                d = d[2];
                if (k)
                    if (0 === d.indexOf("%")) {
                        switch (d) {
                        case "%p":
                            c = e;
                            break;
                        default:
                            c = a
                        }
                        k *= M(c)[f] / 100
                    } else
                        k = "vh" === d || "vw" === d ? ("vh" === d ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * k : k;
                else
                    k = c;
                return k
            })
        })).forEach(function(a, c) {
            a.forEach(function(d, e) {
                $a(d) && (f[c] += d * ("-" === a[e - 1] ? -1 : 1))
            })
        }),
        f
    }
    function jb(d, e, a) {
        if (0 === d.length)
            return d;
        if (a && "function" == typeof a)
            return a(d);
        d = (new window.DOMParser).parseFromString(d, "text/html");
        var c = Object.keys(e)
          , f = [].slice.call(d.body.querySelectorAll("*"));
        a = function(a, d) {
            var k = f[a];
            a = k.nodeName.toLowerCase();
            if (-1 === c.indexOf(k.nodeName.toLowerCase()))
                return k.parentNode.removeChild(k),
                "continue";
            d = [].slice.call(k.attributes);
            var g = [].concat(e["*"] || [], e[a] || []);
            d.forEach(function(a) {
                (function(a, c) {
                    var d = a.nodeName.toLowerCase();
                    if (-1 !== c.indexOf(d))
                        return -1 === ob.indexOf(d) || !(!a.nodeValue.match(fa) && !a.nodeValue.match(Ib));
                    a = c.filter(function(a) {
                        return a instanceof RegExp
                    });
                    c = 0;
                    for (var e = a.length; c < e; c++)
                        if (d.match(a[c]))
                            return !0;
                    return !1
                }
                )(a, g) || k.removeAttribute(a.nodeName)
            })
        }
        ;
        for (var g = 0, r = f.length; g < r; g++)
            a(g);
        return d.body.innerHTML
    }
    var g = l && "object" == typeof l && "default"in l ? l : {
        default: l
    }
      , t = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(d) {
            do
                d += ~~(1E6 * Math.random());
            while (document.getElementById(d));
            return d
        },
        getSelectorFromElement: function(d) {
            var e = d.getAttribute("data-target");
            e && "#" !== e || (e = (d = d.getAttribute("href")) && "#" !== d ? d.trim() : "");
            try {
                return document.querySelector(e) ? e : null
            } catch (a) {
                return null
            }
        },
        getTransitionDurationFromElement: function(d) {
            if (!d)
                return 0;
            var e = g.default(d).css("transition-duration");
            d = g.default(d).css("transition-delay");
            var a = parseFloat(e)
              , c = parseFloat(d);
            return a || c ? (e = e.split(",")[0],
            d = d.split(",")[0],
            1E3 * (parseFloat(e) + parseFloat(d))) : 0
        },
        reflow: function(d) {
            return d.offsetHeight
        },
        triggerTransitionEnd: function(d) {
            g.default(d).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return !0
        },
        isElement: function(d) {
            return (d[0] || d).nodeType
        },
        typeCheckConfig: function(d, e, a) {
            for (var c in a)
                if (Object.prototype.hasOwnProperty.call(a, c)) {
                    var f = a[c]
                      , g = e[c];
                    g = g && t.isElement(g) ? "element" : null === (r = g) || "undefined" == typeof r ? "" + r : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!(new RegExp(f)).test(g))
                        throw Error(d.toUpperCase() + ': Option "' + c + '" provided type "' + g + '" but expected type "' + f + '".');
                }
            var r
        },
        findShadowRoot: function(d) {
            return document.documentElement.attachShadow ? "function" == typeof d.getRootNode ? (d = d.getRootNode(),
            d instanceof ShadowRoot ? d : null) : d instanceof ShadowRoot ? d : d.parentNode ? t.findShadowRoot(d.parentNode) : null : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof g.default)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var d = g.default.fn.jquery.split(" ")[0].split(".");
            if (2 > d[0] && 9 > d[1] || 1 === d[0] && 9 === d[1] && 1 > d[2] || 4 <= d[0])
                throw Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }
    };
    t.jQueryDetection();
    g.default.fn.emulateTransitionEnd = function(d) {
        var e = this
          , a = !1;
        return g.default(this).one(t.TRANSITION_END, function() {
            a = !0
        }),
        setTimeout(function() {
            a || t.triggerTransitionEnd(e)
        }, d),
        this
    }
    ;
    g.default.event.special[t.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(d) {
            if (g.default(d.target).is(this))
                return d.handleObj.handler.apply(this, arguments)
        }
    };
    var la = g.default.fn.alert
      , sa = function() {
        function d(a) {
            this._element = a
        }
        var e = d.prototype;
        return e.close = function(a) {
            var c = this._element;
            a && (c = this._getRootElement(a));
            this._triggerCloseEvent(c).isDefaultPrevented() || this._removeElement(c)
        }
        ,
        e.dispose = function() {
            g.default.removeData(this._element, "bs.alert");
            this._element = null
        }
        ,
        e._getRootElement = function(a) {
            var c = t.getSelectorFromElement(a)
              , d = !1;
            return c && (d = document.querySelector(c)),
            d || (d = g.default(a).closest(".alert")[0]),
            d
        }
        ,
        e._triggerCloseEvent = function(a) {
            var c = g.default.Event("close.bs.alert");
            return g.default(a).trigger(c),
            c
        }
        ,
        e._removeElement = function(a) {
            var c = this;
            if (g.default(a).removeClass("show"),
            g.default(a).hasClass("fade")) {
                var d = t.getTransitionDurationFromElement(a);
                g.default(a).one(t.TRANSITION_END, function(d) {
                    return c._destroyElement(a, d)
                }).emulateTransitionEnd(d)
            } else
                this._destroyElement(a)
        }
        ,
        e._destroyElement = function(a) {
            g.default(a).detach().trigger("closed.bs.alert").remove()
        }
        ,
        d._jQueryInterface = function(a) {
            return this.each(function() {
                var c = g.default(this)
                  , e = c.data("bs.alert");
                e || (e = new d(this),
                c.data("bs.alert", e));
                "close" === a && e[a](this)
            })
        }
        ,
        d._handleDismiss = function(a) {
            return function(c) {
                c && c.preventDefault();
                a.close(this)
            }
        }
        ,
        A(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }]),
        d
    }();
    g.default(document).on("click.bs.alert.data-api", '[data-dismiss\x3d"alert"]', sa._handleDismiss(new sa));
    g.default.fn.alert = sa._jQueryInterface;
    g.default.fn.alert.Constructor = sa;
    g.default.fn.alert.noConflict = function() {
        return g.default.fn.alert = la,
        sa._jQueryInterface
    }
    ;
    var kb = g.default.fn.button
      , Ia = function() {
        function d(a) {
            this._element = a;
            this.shouldAvoidTriggerChange = !1
        }
        var e = d.prototype;
        return e.toggle = function() {
            var a = !0
              , c = !0
              , d = g.default(this._element).closest('[data-toggle\x3d"buttons"]')[0];
            if (d) {
                var e = this._element.querySelector('input:not([type\x3d"hidden"])');
                e && ("radio" === e.type && (e.checked && this._element.classList.contains("active") ? a = !1 : (c = d.querySelector(".active")) && g.default(c).removeClass("active")),
                a && ("checkbox" !== e.type && "radio" !== e.type || (e.checked = !this._element.classList.contains("active")),
                this.shouldAvoidTriggerChange || g.default(e).trigger("change")),
                e.focus(),
                c = !1)
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (c && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")),
            a && g.default(this._element).toggleClass("active"))
        }
        ,
        e.dispose = function() {
            g.default.removeData(this._element, "bs.button");
            this._element = null
        }
        ,
        d._jQueryInterface = function(a, c) {
            return this.each(function() {
                var e = g.default(this)
                  , f = e.data("bs.button");
                f || (f = new d(this),
                e.data("bs.button", f));
                f.shouldAvoidTriggerChange = c;
                "toggle" === a && f[a]()
            })
        }
        ,
        A(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }]),
        d
    }();
    g.default(document).on("click.bs.button.data-api", '[data-toggle^\x3d"button"]', function(d) {
        var e = d.target
          , a = e;
        if (g.default(e).hasClass("btn") || (e = g.default(e).closest(".btn")[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
            d.preventDefault();
        else {
            var c = e.querySelector('input:not([type\x3d"hidden"])');
            if (c && (c.hasAttribute("disabled") || c.classList.contains("disabled")))
                return void d.preventDefault();
            "INPUT" !== a.tagName && "LABEL" === e.tagName || Ia._jQueryInterface.call(g.default(e), "toggle", "INPUT" === a.tagName)
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^\x3d"button"]', function(d) {
        var e = g.default(d.target).closest(".btn")[0];
        g.default(e).toggleClass("focus", /^focus(in)?$/.test(d.type))
    });
    g.default(window).on("load.bs.button.data-api", function() {
        for (var d = [].slice.call(document.querySelectorAll('[data-toggle\x3d"buttons"] .btn')), e = 0, a = d.length; e < a; e++) {
            var c = d[e]
              , f = c.querySelector('input:not([type\x3d"hidden"])');
            f.checked || f.hasAttribute("checked") ? c.classList.add("active") : c.classList.remove("active")
        }
        e = 0;
        for (a = (d = [].slice.call(document.querySelectorAll('[data-toggle\x3d"button"]'))).length; e < a; e++)
            c = d[e],
            "true" === c.getAttribute("aria-pressed") ? c.classList.add("active") : c.classList.remove("active")
    });
    g.default.fn.button = Ia._jQueryInterface;
    g.default.fn.button.Constructor = Ia;
    g.default.fn.button.noConflict = function() {
        return g.default.fn.button = kb,
        Ia._jQueryInterface
    }
    ;
    var xb = g.default.fn.carousel
      , Oa = {
        interval: 5E3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , ma = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , lb = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , Z = function() {
        function d(a, c) {
            this._activeElement = this._interval = this._items = null;
            this._isSliding = this._isPaused = !1;
            this.touchTimeout = null;
            this.touchDeltaX = this.touchStartX = 0;
            this._config = this._getConfig(c);
            this._element = a;
            this._indicatorsElement = this._element.querySelector(".carousel-indicators");
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints;
            this._pointerEvent = !(!window.PointerEvent && !window.MSPointerEvent);
            this._addEventListeners()
        }
        var e = d.prototype;
        return e.next = function() {
            this._isSliding || this._slide("next")
        }
        ,
        e.nextWhenVisible = function() {
            var a = g.default(this._element);
            !document.hidden && a.is(":visible") && "hidden" !== a.css("visibility") && this.next()
        }
        ,
        e.prev = function() {
            this._isSliding || this._slide("prev")
        }
        ,
        e.pause = function(a) {
            a || (this._isPaused = !0);
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (t.triggerTransitionEnd(this._element),
            this.cycle(!0));
            clearInterval(this._interval);
            this._interval = null
        }
        ,
        e.cycle = function(a) {
            a || (this._isPaused = !1);
            this._interval && (clearInterval(this._interval),
            this._interval = null);
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        e.to = function(a) {
            var c = this;
            this._activeElement = this._element.querySelector(".active.carousel-item");
            var d = this._getItemIndex(this._activeElement);
            if (!(a > this._items.length - 1 || 0 > a))
                if (this._isSliding)
                    g.default(this._element).one("slid.bs.carousel", function() {
                        return c.to(a)
                    });
                else {
                    if (d === a)
                        return this.pause(),
                        void this.cycle();
                    this._slide(a > d ? "next" : "prev", this._items[a])
                }
        }
        ,
        e.dispose = function() {
            g.default(this._element).off(".bs.carousel");
            g.default.removeData(this._element, "bs.carousel");
            this._indicatorsElement = this._activeElement = this._isSliding = this._isPaused = this._interval = this._element = this._config = this._items = null
        }
        ,
        e._getConfig = function(a) {
            return a = D({}, Oa, a),
            t.typeCheckConfig("carousel", a, ma),
            a
        }
        ,
        e._handleSwipe = function() {
            var a = Math.abs(this.touchDeltaX);
            40 >= a || (a /= this.touchDeltaX,
            this.touchDeltaX = 0,
            0 < a && this.prev(),
            0 > a && this.next())
        }
        ,
        e._addEventListeners = function() {
            var a = this;
            this._config.keyboard && g.default(this._element).on("keydown.bs.carousel", function(c) {
                return a._keydown(c)
            });
            "hover" === this._config.pause && g.default(this._element).on("mouseenter.bs.carousel", function(c) {
                return a.pause(c)
            }).on("mouseleave.bs.carousel", function(c) {
                return a.cycle(c)
            });
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        e._addTouchEventListeners = function() {
            var a = this;
            if (this._touchSupported) {
                var c = function(c) {
                    a._pointerEvent && lb[c.originalEvent.pointerType.toUpperCase()] ? a.touchStartX = c.originalEvent.clientX : a._pointerEvent || (a.touchStartX = c.originalEvent.touches[0].clientX)
                }
                  , d = function(c) {
                    a._pointerEvent && lb[c.originalEvent.pointerType.toUpperCase()] && (a.touchDeltaX = c.originalEvent.clientX - a.touchStartX);
                    a._handleSwipe();
                    "hover" === a._config.pause && (a.pause(),
                    a.touchTimeout && clearTimeout(a.touchTimeout),
                    a.touchTimeout = setTimeout(function(c) {
                        return a.cycle(c)
                    }, 500 + a._config.interval))
                };
                g.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(a) {
                    return a.preventDefault()
                });
                this._pointerEvent ? (g.default(this._element).on("pointerdown.bs.carousel", function(a) {
                    return c(a)
                }),
                g.default(this._element).on("pointerup.bs.carousel", function(a) {
                    return d(a)
                }),
                this._element.classList.add("pointer-event")) : (g.default(this._element).on("touchstart.bs.carousel", function(a) {
                    return c(a)
                }),
                g.default(this._element).on("touchmove.bs.carousel", function(c) {
                    c.originalEvent.touches && 1 < c.originalEvent.touches.length ? a.touchDeltaX = 0 : a.touchDeltaX = c.originalEvent.touches[0].clientX - a.touchStartX
                }),
                g.default(this._element).on("touchend.bs.carousel", function(a) {
                    return d(a)
                }))
            }
        }
        ,
        e._keydown = function(a) {
            if (!/input|textarea/i.test(a.target.tagName))
                switch (a.which) {
                case 37:
                    a.preventDefault();
                    this.prev();
                    break;
                case 39:
                    a.preventDefault(),
                    this.next()
                }
        }
        ,
        e._getItemIndex = function(a) {
            return this._items = a && a.parentNode ? [].slice.call(a.parentNode.querySelectorAll(".carousel-item")) : [],
            this._items.indexOf(a)
        }
        ,
        e._getItemByDirection = function(a, c) {
            var d = "next" === a
              , e = "prev" === a
              , f = this._getItemIndex(c)
              , g = this._items.length - 1;
            if ((e && 0 === f || d && f === g) && !this._config.wrap)
                return c;
            a = (f + ("prev" === a ? -1 : 1)) % this._items.length;
            return -1 === a ? this._items[this._items.length - 1] : this._items[a]
        }
        ,
        e._triggerSlideEvent = function(a, c) {
            var d = this._getItemIndex(a)
              , e = this._getItemIndex(this._element.querySelector(".active.carousel-item"));
            a = g.default.Event("slide.bs.carousel", {
                relatedTarget: a,
                direction: c,
                from: e,
                to: d
            });
            return g.default(this._element).trigger(a),
            a
        }
        ,
        e._setActiveIndicatorElement = function(a) {
            if (this._indicatorsElement) {
                var c = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                g.default(c).removeClass("active");
                (a = this._indicatorsElement.children[this._getItemIndex(a)]) && g.default(a).addClass("active")
            }
        }
        ,
        e._slide = function(a, c) {
            var d, e, f, q = this, l = this._element.querySelector(".active.carousel-item"), p = this._getItemIndex(l), u = c || l && this._getItemByDirection(a, l), x = this._getItemIndex(u);
            c = !!this._interval;
            if ("next" === a ? (d = "carousel-item-left",
            e = "carousel-item-next",
            f = "left") : (d = "carousel-item-right",
            e = "carousel-item-prev",
            f = "right"),
            u && g.default(u).hasClass("active"))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(u, f).isDefaultPrevented() && l && u) {
                this._isSliding = !0;
                c && this.pause();
                this._setActiveIndicatorElement(u);
                var y = g.default.Event("slid.bs.carousel", {
                    relatedTarget: u,
                    direction: f,
                    from: p,
                    to: x
                });
                g.default(this._element).hasClass("slide") ? (g.default(u).addClass(e),
                t.reflow(u),
                g.default(l).addClass(d),
                g.default(u).addClass(d),
                (a = parseInt(u.getAttribute("data-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                this._config.interval = a) : this._config.interval = this._config.defaultInterval || this._config.interval,
                a = t.getTransitionDurationFromElement(l),
                g.default(l).one(t.TRANSITION_END, function() {
                    g.default(u).removeClass(d + " " + e).addClass("active");
                    g.default(l).removeClass("active " + e + " " + d);
                    q._isSliding = !1;
                    setTimeout(function() {
                        return g.default(q._element).trigger(y)
                    }, 0)
                }).emulateTransitionEnd(a)) : (g.default(l).removeClass("active"),
                g.default(u).addClass("active"),
                this._isSliding = !1,
                g.default(this._element).trigger(y));
                c && this.cycle()
            }
        }
        ,
        d._jQueryInterface = function(a) {
            return this.each(function() {
                var c = g.default(this).data("bs.carousel")
                  , e = D({}, Oa, g.default(this).data());
                "object" == typeof a && (e = D({}, e, a));
                var f = "string" == typeof a ? a : e.slide;
                if (c || (c = new d(this,e),
                g.default(this).data("bs.carousel", c)),
                "number" == typeof a)
                    c.to(a);
                else if ("string" == typeof f) {
                    if ("undefined" == typeof c[f])
                        throw new TypeError('No method named "' + f + '"');
                    c[f]()
                } else
                    e.interval && e.ride && (c.pause(),
                    c.cycle())
            })
        }
        ,
        d._dataApiClickHandler = function(a) {
            var c = t.getSelectorFromElement(this);
            if (c && (c = g.default(c)[0]) && g.default(c).hasClass("carousel")) {
                var e = D({}, g.default(c).data(), g.default(this).data())
                  , f = this.getAttribute("data-slide-to");
                f && (e.interval = !1);
                d._jQueryInterface.call(g.default(c), e);
                f && g.default(c).data("bs.carousel").to(f);
                a.preventDefault()
            }
        }
        ,
        A(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return Oa
            }
        }]),
        d
    }();
    g.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", Z._dataApiClickHandler);
    g.default(window).on("load.bs.carousel.data-api", function() {
        for (var d = [].slice.call(document.querySelectorAll('[data-ride\x3d"carousel"]')), e = 0, a = d.length; e < a; e++) {
            var c = g.default(d[e]);
            Z._jQueryInterface.call(c, c.data())
        }
    });
    g.default.fn.carousel = Z._jQueryInterface;
    g.default.fn.carousel.Constructor = Z;
    g.default.fn.carousel.noConflict = function() {
        return g.default.fn.carousel = xb,
        Z._jQueryInterface
    }
    ;
    var vb = g.default.fn.collapse
      , Pa = {
        toggle: !0,
        parent: ""
    }
      , Ta = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , oa = function() {
        function d(a, c) {
            this._isTransitioning = !1;
            this._element = a;
            this._config = this._getConfig(c);
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle\x3d"collapse"][href\x3d"#' + a.id + '"],[data-toggle\x3d"collapse"][data-target\x3d"#' + a.id + '"]'));
            c = [].slice.call(document.querySelectorAll('[data-toggle\x3d"collapse"]'));
            for (var d = 0, e = c.length; d < e; d++) {
                var f = c[d]
                  , g = t.getSelectorFromElement(f)
                  , l = [].slice.call(document.querySelectorAll(g)).filter(function(c) {
                    return c === a
                });
                null !== g && 0 < l.length && (this._selector = g,
                this._triggerArray.push(f))
            }
            this._parent = this._config.parent ? this._getParent() : null;
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            this._config.toggle && this.toggle()
        }
        var e = d.prototype;
        return e.toggle = function() {
            g.default(this._element).hasClass("show") ? this.hide() : this.show()
        }
        ,
        e.show = function() {
            var a, c, e = this;
            if (!(this._isTransitioning || g.default(this._element).hasClass("show") || (this._parent && 0 === (a = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(a) {
                return "string" == typeof e._config.parent ? a.getAttribute("data-parent") === e._config.parent : a.classList.contains("collapse")
            })).length && (a = null),
            a && (c = g.default(a).not(this._selector).data("bs.collapse")) && c._isTransitioning))) {
                var f = g.default.Event("show.bs.collapse");
                if (g.default(this._element).trigger(f),
                !f.isDefaultPrevented()) {
                    a && (d._jQueryInterface.call(g.default(a).not(this._selector), "hide"),
                    c || g.default(a).data("bs.collapse", null));
                    var r = this._getDimension();
                    g.default(this._element).removeClass("collapse").addClass("collapsing");
                    this._element.style[r] = 0;
                    this._triggerArray.length && g.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0);
                    this.setTransitioning(!0);
                    a = "scroll" + (r[0].toUpperCase() + r.slice(1));
                    c = t.getTransitionDurationFromElement(this._element);
                    g.default(this._element).one(t.TRANSITION_END, function() {
                        g.default(e._element).removeClass("collapsing").addClass("collapse show");
                        e._element.style[r] = "";
                        e.setTransitioning(!1);
                        g.default(e._element).trigger("shown.bs.collapse")
                    }).emulateTransitionEnd(c);
                    this._element.style[r] = this._element[a] + "px"
                }
            }
        }
        ,
        e.hide = function() {
            var a = this;
            if (!this._isTransitioning && g.default(this._element).hasClass("show")) {
                var c = g.default.Event("hide.bs.collapse");
                if (g.default(this._element).trigger(c),
                !c.isDefaultPrevented()) {
                    c = this._getDimension();
                    this._element.style[c] = this._element.getBoundingClientRect()[c] + "px";
                    t.reflow(this._element);
                    g.default(this._element).addClass("collapsing").removeClass("collapse show");
                    var d = this._triggerArray.length;
                    if (0 < d)
                        for (var e = 0; e < d; e++) {
                            var f = this._triggerArray[e]
                              , q = t.getSelectorFromElement(f);
                            null !== q && (g.default([].slice.call(document.querySelectorAll(q))).hasClass("show") || g.default(f).addClass("collapsed").attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0);
                    this._element.style[c] = "";
                    c = t.getTransitionDurationFromElement(this._element);
                    g.default(this._element).one(t.TRANSITION_END, function() {
                        a.setTransitioning(!1);
                        g.default(a._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    }).emulateTransitionEnd(c)
                }
            }
        }
        ,
        e.setTransitioning = function(a) {
            this._isTransitioning = a
        }
        ,
        e.dispose = function() {
            g.default.removeData(this._element, "bs.collapse");
            this._isTransitioning = this._triggerArray = this._element = this._parent = this._config = null
        }
        ,
        e._getConfig = function(a) {
            return (a = D({}, Pa, a)).toggle = !!a.toggle,
            t.typeCheckConfig("collapse", a, Ta),
            a
        }
        ,
        e._getDimension = function() {
            return g.default(this._element).hasClass("width") ? "width" : "height"
        }
        ,
        e._getParent = function() {
            var a, c = this;
            t.isElement(this._config.parent) ? (a = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (a = this._config.parent[0])) : a = document.querySelector(this._config.parent);
            var e = [].slice.call(a.querySelectorAll('[data-toggle\x3d"collapse"][data-parent\x3d"' + this._config.parent + '"]'));
            return g.default(e).each(function(a, e) {
                c._addAriaAndCollapsedClass(d._getTargetFromElement(e), [e])
            }),
            a
        }
        ,
        e._addAriaAndCollapsedClass = function(a, c) {
            a = g.default(a).hasClass("show");
            c.length && g.default(c).toggleClass("collapsed", !a).attr("aria-expanded", a)
        }
        ,
        d._getTargetFromElement = function(a) {
            return (a = t.getSelectorFromElement(a)) ? document.querySelector(a) : null
        }
        ,
        d._jQueryInterface = function(a) {
            return this.each(function() {
                var c = g.default(this)
                  , e = c.data("bs.collapse")
                  , f = D({}, Pa, c.data(), "object" == typeof a && a ? a : {});
                if (!e && f.toggle && "string" == typeof a && /show|hide/.test(a) && (f.toggle = !1),
                e || (e = new d(this,f),
                c.data("bs.collapse", e)),
                "string" == typeof a) {
                    if ("undefined" == typeof e[a])
                        throw new TypeError('No method named "' + a + '"');
                    e[a]()
                }
            })
        }
        ,
        A(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return Pa
            }
        }]),
        d
    }();
    g.default(document).on("click.bs.collapse.data-api", '[data-toggle\x3d"collapse"]', function(d) {
        "A" === d.currentTarget.tagName && d.preventDefault();
        var e = g.default(this);
        d = t.getSelectorFromElement(this);
        d = [].slice.call(document.querySelectorAll(d));
        g.default(d).each(function() {
            var a = g.default(this)
              , c = a.data("bs.collapse") ? "toggle" : e.data();
            oa._jQueryInterface.call(a, c)
        })
    });
    g.default.fn.collapse = oa._jQueryInterface;
    g.default.fn.collapse.Constructor = oa;
    g.default.fn.collapse.noConflict = function() {
        return g.default.fn.collapse = vb,
        oa._jQueryInterface
    }
    ;
    var va = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
      , cb = function() {
        for (var d = ["Edge", "Trident", "Firefox"], e = 0; e < d.length; e += 1)
            if (va && 0 <= navigator.userAgent.indexOf(d[e]))
                return 1;
        return 0
    }()
      , yb = va && window.Promise ? function(d) {
        var e = !1;
        return function() {
            e || (e = !0,
            window.Promise.resolve().then(function() {
                e = !1;
                d()
            }))
        }
    }
    : function(d) {
        var e = !1;
        return function() {
            e || (e = !0,
            setTimeout(function() {
                e = !1;
                d()
            }, cb))
        }
    }
      , zb = va && !(!window.MSInputMethodContext || !document.documentMode)
      , y = va && /MSIE 10/.test(navigator.userAgent)
      , C = function() {
        function d(d, a) {
            for (var c = 0; c < a.length; c++) {
                var e = a[c];
                e.enumerable = e.enumerable || !1;
                e.configurable = !0;
                "value"in e && (e.writable = !0);
                Object.defineProperty(d, e.key, e)
            }
        }
        return function(e, a, c) {
            return a && d(e.prototype, a),
            c && d(e, c),
            e
        }
    }()
      , W = function(d, e, a) {
        return e in d ? Object.defineProperty(d, e, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : d[e] = a,
        d
    }
      , B = Object.assign || function(d) {
        for (var e = 1; e < arguments.length; e++) {
            var a = arguments[e], c;
            for (c in a)
                Object.prototype.hasOwnProperty.call(a, c) && (d[c] = a[c])
        }
        return d
    }
      , Hb = va && /Firefox/i.test(navigator.userAgent)
      , f = "auto-start auto auto-end top-start top top-end right-start right right-end bottom-end bottom bottom-start left-end left left-start".split(" ")
      , na = f.slice(3)
      , ea = function() {
        function d(e, a) {
            var c = this
              , f = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            if (!(this instanceof d))
                throw new TypeError("Cannot call a class as a function");
            this.scheduleUpdate = function() {
                return requestAnimationFrame(c.update)
            }
            ;
            this.update = yb(this.update.bind(this));
            this.options = B({}, d.Defaults, f);
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            };
            this.reference = e && e.jquery ? e[0] : e;
            this.popper = a && a.jquery ? a[0] : a;
            this.options.modifiers = {};
            Object.keys(B({}, d.Defaults.modifiers, f.modifiers)).forEach(function(a) {
                c.options.modifiers[a] = B({}, d.Defaults.modifiers[a] || {}, f.modifiers ? f.modifiers[a] : {})
            });
            this.modifiers = Object.keys(this.options.modifiers).map(function(a) {
                return B({
                    name: a
                }, c.options.modifiers[a])
            }).sort(function(a, c) {
                return a.order - c.order
            });
            this.modifiers.forEach(function(a) {
                a.enabled && w(a.onLoad) && a.onLoad(c.reference, c.popper, c.options, a, c.state)
            });
            this.update();
            var g = this.options.eventsEnabled;
            g && this.enableEventListeners();
            this.state.eventsEnabled = g
        }
        return C(d, [{
            key: "update",
            value: function() {
                if (!this.state.isDestroyed) {
                    var d = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    d.offsets.reference = eb(this.state, this.popper, this.reference, this.options.positionFixed);
                    d.placement = Na(this.options.placement, d.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
                    d.originalPlacement = d.placement;
                    d.positionFixed = this.options.positionFixed;
                    d.offsets.popper = fb(this.popper, d.offsets.reference, d.placement);
                    d.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
                    d = gb(this.modifiers, d);
                    this.state.isCreated ? this.options.onUpdate(d) : (this.state.isCreated = !0,
                    this.options.onCreate(d))
                }
            }
        }, {
            key: "destroy",
            value: function() {
                return this.state.isDestroyed = !0,
                Ha(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                this.popper.style.position = "",
                this.popper.style.top = "",
                this.popper.style.left = "",
                this.popper.style.right = "",
                this.popper.style.bottom = "",
                this.popper.style.willChange = "",
                this.popper.style[Ya("transform")] = ""),
                this.disableEventListeners(),
                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                this
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                this.state.eventsEnabled || (this.state = wb(this.reference, this.options, this.state, this.scheduleUpdate))
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return hb.call(this)
            }
        }]),
        d
    }();
    ea.Utils = ("undefined" != typeof window ? window : global).PopperUtils;
    ea.placements = f;
    ea.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(d) {
                    var e = d.placement
                      , a = e.split("-")[0];
                    if (e = e.split("-")[1]) {
                        var c = d.offsets
                          , f = c.reference;
                        c = c.popper;
                        var g = -1 !== ["bottom", "top"].indexOf(a);
                        a = g ? "left" : "top";
                        g = g ? "width" : "height";
                        f = {
                            start: W({}, a, f[a]),
                            end: W({}, a, f[a] + f[g] - c[g])
                        };
                        d.offsets.popper = B({}, c, f[e])
                    }
                    return d
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(d, e) {
                    e = e.offset;
                    var a = d.offsets
                      , c = a.popper;
                    a = a.reference;
                    var f = d.placement.split("-")[0]
                      , g = void 0;
                    return g = $a(+e) ? [+e, 0] : bb(e, c, a, f),
                    "left" === f ? (c.top += g[0],
                    c.left -= g[1]) : "right" === f ? (c.top += g[0],
                    c.left += g[1]) : "top" === f ? (c.left += g[0],
                    c.top -= g[1]) : "bottom" === f && (c.left += g[0],
                    c.top += g[1]),
                    d.popper = c,
                    d
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(d, e) {
                    var a = e.boundariesElement || N(d.instance.popper);
                    d.instance.reference === a && (a = N(a));
                    var c = Ya("transform")
                      , f = d.instance.popper.style
                      , g = f.top
                      , l = f.left
                      , q = f[c];
                    f.top = "";
                    f.left = "";
                    f[c] = "";
                    var p = Ma(d.instance.popper, d.instance.reference, e.padding, a, d.positionFixed);
                    f.top = g;
                    f.left = l;
                    f[c] = q;
                    e.boundaries = p;
                    var t = d.offsets.popper
                      , u = {
                        primary: function(a) {
                            var c = t[a];
                            return t[a] < p[a] && !e.escapeWithReference && (c = Math.max(t[a], p[a])),
                            W({}, a, c)
                        },
                        secondary: function(a) {
                            var c = "right" === a ? "left" : "top"
                              , d = t[c];
                            return t[a] > p[a] && !e.escapeWithReference && (d = Math.min(t[c], p[a] - ("right" === a ? t.width : t.height))),
                            W({}, c, d)
                        }
                    };
                    return e.priority.forEach(function(a) {
                        var c = -1 !== ["left", "top"].indexOf(a) ? "primary" : "secondary";
                        t = B({}, t, u[c](a))
                    }),
                    d.offsets.popper = t,
                    d
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(d) {
                    var e = d.offsets
                      , a = e.popper;
                    e = e.reference;
                    var c = d.placement.split("-")[0]
                      , f = Math.floor
                      , g = -1 !== ["top", "bottom"].indexOf(c);
                    c = g ? "right" : "bottom";
                    var l = g ? "left" : "top";
                    g = g ? "width" : "height";
                    return a[c] < f(e[l]) && (d.offsets.popper[l] = f(e[l]) - a[g]),
                    a[l] > f(e[c]) && (d.offsets.popper[l] = f(e[c])),
                    d
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(d, e) {
                    var a;
                    if (!ab(d.instance.modifiers, "arrow", "keepTogether"))
                        return d;
                    e = e.element;
                    if ("string" == typeof e) {
                        if (!(e = d.instance.popper.querySelector(e)))
                            return d
                    } else if (!d.instance.popper.contains(e))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        d;
                    var c = d.placement.split("-")[0]
                      , f = d.offsets
                      , g = f.popper
                      , l = f.reference
                      , q = -1 !== ["left", "right"].indexOf(c);
                    c = q ? "height" : "width";
                    var p = q ? "Top" : "Left";
                    f = p.toLowerCase();
                    var t = q ? "left" : "top"
                      , u = q ? "bottom" : "right";
                    q = ub(e)[c];
                    l[u] - q < g[f] && (d.offsets.popper[f] -= g[f] - (l[u] - q));
                    l[f] + q > g[u] && (d.offsets.popper[f] += l[f] + q - g[u]);
                    d.offsets.popper = M(d.offsets.popper);
                    l = l[f] + l[c] / 2 - q / 2;
                    var x = L(d.instance.popper);
                    u = parseFloat(x["margin" + p]);
                    p = parseFloat(x["border" + p + "Width"]);
                    p = l - d.offsets.popper[f] - u - p;
                    return p = Math.max(Math.min(g[c] - q, p), 0),
                    d.arrowElement = e,
                    d.offsets.arrow = (W(a = {}, f, Math.round(p)),
                    W(a, t, ""),
                    a),
                    d
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(d, e) {
                    if (Ha(d.instance.modifiers, "inner") || d.flipped && d.placement === d.originalPlacement)
                        return d;
                    var a = Ma(d.instance.popper, d.instance.reference, e.padding, e.boundariesElement, d.positionFixed)
                      , c = d.placement.split("-")[0]
                      , f = Wa(c)
                      , g = d.placement.split("-")[1] || ""
                      , l = [];
                    switch (e.behavior) {
                    case "flip":
                        l = [c, f];
                        break;
                    case "clockwise":
                        l = ib(c);
                        break;
                    case "counterclockwise":
                        l = ib(c, !0);
                        break;
                    default:
                        l = e.behavior
                    }
                    return l.forEach(function(k, m) {
                        if (c !== k || l.length === m + 1)
                            return d;
                        c = d.placement.split("-")[0];
                        f = Wa(c);
                        var q = d.offsets.popper;
                        k = d.offsets.reference;
                        var r = Math.floor;
                        k = "left" === c && r(q.right) > r(k.left) || "right" === c && r(q.left) < r(k.right) || "top" === c && r(q.bottom) > r(k.top) || "bottom" === c && r(q.top) < r(k.bottom);
                        var p = r(q.left) < r(a.left)
                          , t = r(q.right) > r(a.right)
                          , u = r(q.top) < r(a.top);
                        r = r(q.bottom) > r(a.bottom);
                        q = "left" === c && p || "right" === c && t || "top" === c && u || "bottom" === c && r;
                        var x = -1 !== ["top", "bottom"].indexOf(c)
                          , y = !!e.flipVariationsByContent && (x && "start" === g && t || x && "end" === g && p || !x && "start" === g && r || !x && "end" === g && u);
                        p = !!e.flipVariations && (x && "start" === g && p || x && "end" === g && t || !x && "start" === g && u || !x && "end" === g && r) || y;
                        (k || q || p) && (d.flipped = !0,
                        (k || q) && (c = l[m + 1]),
                        p && (g = "end" === g ? "start" : "start" === g ? "end" : g),
                        d.placement = c + (g ? "-" + g : ""),
                        d.offsets.popper = B({}, d.offsets.popper, fb(d.instance.popper, d.offsets.reference, d.placement)),
                        d = gb(d.instance.modifiers, d, "flip"))
                    }),
                    d
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(d) {
                    var e = d.placement
                      , a = e.split("-")[0]
                      , c = d.offsets
                      , f = c.popper;
                    c = c.reference;
                    var g = -1 !== ["left", "right"].indexOf(a)
                      , l = -1 === ["top", "left"].indexOf(a);
                    return f[g ? "left" : "top"] = c[a] - (l ? f[g ? "width" : "height"] : 0),
                    d.placement = Wa(e),
                    d.offsets.popper = M(f),
                    d
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(d) {
                    if (!ab(d.instance.modifiers, "hide", "preventOverflow"))
                        return d;
                    var e = d.offsets.reference
                      , a = ja(d.instance.modifiers, function(a) {
                        return "preventOverflow" === a.name
                    }).boundaries;
                    if (e.bottom < a.top || e.left > a.right || e.top > a.bottom || e.right < a.left) {
                        if (!0 === d.hide)
                            return d;
                        d.hide = !0;
                        d.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === d.hide)
                            return d;
                        d.hide = !1;
                        d.attributes["x-out-of-boundaries"] = !1
                    }
                    return d
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(d, e) {
                    var a = e.x
                      , c = e.y
                      , f = d.offsets.popper
                      , g = ja(d.instance.modifiers, function(a) {
                        return "applyStyle" === a.name
                    }).gpuAcceleration;
                    void 0 !== g && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    e = void 0 !== g ? g : e.gpuAcceleration;
                    g = N(d.instance.popper);
                    var l = qa(g);
                    f = {
                        position: f.position
                    };
                    var q = function(a, c) {
                        var d = a.offsets
                          , e = d.popper
                          , f = Math.round
                          , g = Math.floor
                          , k = function(a) {
                            return a
                        };
                        d = f(d.reference.width);
                        var m = f(e.width)
                          , l = -1 !== ["left", "right"].indexOf(a.placement);
                        a = -1 !== a.placement.indexOf("-");
                        g = c ? l || a || d % 2 == m % 2 ? f : g : k;
                        f = c ? f : k;
                        return {
                            left: g(1 == d % 2 && 1 == m % 2 && !a && c ? e.left - 1 : e.left),
                            top: f(e.top),
                            bottom: f(e.bottom),
                            right: g(e.right)
                        }
                    }(d, 2 > window.devicePixelRatio || !Hb);
                    a = "bottom" === a ? "top" : "bottom";
                    c = "right" === c ? "left" : "right";
                    var p = Ya("transform")
                      , t = void 0
                      , u = void 0;
                    (u = "bottom" === a ? "HTML" === g.nodeName ? -g.clientHeight + q.bottom : -l.height + q.bottom : q.top,
                    t = "right" === c ? "HTML" === g.nodeName ? -g.clientWidth + q.right : -l.width + q.right : q.left,
                    e && p) ? (f[p] = "translate3d(" + t + "px, " + u + "px, 0)",
                    f[a] = 0,
                    f[c] = 0,
                    f.willChange = "transform") : (f[a] = u * ("bottom" === a ? -1 : 1),
                    f[c] = t * ("right" === c ? -1 : 1),
                    f.willChange = a + ", " + c);
                    return d.attributes = B({}, {
                        "x-placement": d.placement
                    }, d.attributes),
                    d.styles = B({}, f, d.styles),
                    d.arrowStyles = B({}, d.offsets.arrow, d.arrowStyles),
                    d
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(d) {
                    var e, a;
                    return V(d.instance.popper, d.styles),
                    e = d.instance.popper,
                    a = d.attributes,
                    Object.keys(a).forEach(function(c) {
                        !1 !== a[c] ? e.setAttribute(c, a[c]) : e.removeAttribute(c)
                    }),
                    d.arrowElement && Object.keys(d.arrowStyles).length && V(d.arrowElement, d.arrowStyles),
                    d
                },
                onLoad: function(d, e, a, c, f) {
                    c = eb(f, e, d, a.positionFixed);
                    d = Na(a.placement, c, e, d, a.modifiers.flip.boundariesElement, a.modifiers.flip.padding);
                    return e.setAttribute("x-placement", d),
                    V(e, {
                        position: a.positionFixed ? "fixed" : "absolute"
                    }),
                    a
                },
                gpuAcceleration: void 0
            }
        }
    };
    var Ab = g.default.fn.dropdown
      , Bb = /38|40|27/
      , Cb = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , Qb = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , ta = function() {
        function d(a, c) {
            this._element = a;
            this._popper = null;
            this._config = this._getConfig(c);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();
            this._addEventListeners()
        }
        var e = d.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !g.default(this._element).hasClass("disabled")) {
                var a = g.default(this._menu).hasClass("show");
                d._clearMenus();
                a || this.show(!0)
            }
        }
        ,
        e.show = function(a) {
            if (void 0 === a && (a = !1),
            !(this._element.disabled || g.default(this._element).hasClass("disabled") || g.default(this._menu).hasClass("show"))) {
                var c = {
                    relatedTarget: this._element
                }
                  , e = g.default.Event("show.bs.dropdown", c)
                  , f = d._getParentFromElement(this._element);
                if (g.default(f).trigger(e),
                !e.isDefaultPrevented()) {
                    if (!this._inNavbar && a) {
                        if ("undefined" == typeof ea)
                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        a = this._element;
                        "parent" === this._config.reference ? a = f : t.isElement(this._config.reference) && (a = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0]));
                        "scrollParent" !== this._config.boundary && g.default(f).addClass("position-static");
                        this._popper = new ea(a,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === g.default(f).closest(".navbar-nav").length && g.default(document.body).children().on("mouseover", null, g.default.noop);
                    this._element.focus();
                    this._element.setAttribute("aria-expanded", !0);
                    g.default(this._menu).toggleClass("show");
                    g.default(f).toggleClass("show").trigger(g.default.Event("shown.bs.dropdown", c))
                }
            }
        }
        ,
        e.hide = function() {
            if (!this._element.disabled && !g.default(this._element).hasClass("disabled") && g.default(this._menu).hasClass("show")) {
                var a = {
                    relatedTarget: this._element
                }
                  , c = g.default.Event("hide.bs.dropdown", a)
                  , e = d._getParentFromElement(this._element);
                g.default(e).trigger(c);
                c.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                g.default(this._menu).toggleClass("show"),
                g.default(e).toggleClass("show").trigger(g.default.Event("hidden.bs.dropdown", a)))
            }
        }
        ,
        e.dispose = function() {
            g.default.removeData(this._element, "bs.dropdown");
            g.default(this._element).off(".bs.dropdown");
            this._menu = this._element = null;
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        e.update = function() {
            this._inNavbar = this._detectNavbar();
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e._addEventListeners = function() {
            var a = this;
            g.default(this._element).on("click.bs.dropdown", function(c) {
                c.preventDefault();
                c.stopPropagation();
                a.toggle()
            })
        }
        ,
        e._getConfig = function(a) {
            return a = D({}, this.constructor.Default, g.default(this._element).data(), a),
            t.typeCheckConfig("dropdown", a, this.constructor.DefaultType),
            a
        }
        ,
        e._getMenuElement = function() {
            if (!this._menu) {
                var a = d._getParentFromElement(this._element);
                a && (this._menu = a.querySelector(".dropdown-menu"))
            }
            return this._menu
        }
        ,
        e._getPlacement = function() {
            var a = g.default(this._element.parentNode)
              , c = "bottom-start";
            return a.hasClass("dropup") ? c = g.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : a.hasClass("dropright") ? c = "right-start" : a.hasClass("dropleft") ? c = "left-start" : g.default(this._menu).hasClass("dropdown-menu-right") && (c = "bottom-end"),
            c
        }
        ,
        e._detectNavbar = function() {
            return 0 < g.default(this._element).closest(".navbar").length
        }
        ,
        e._getOffset = function() {
            var a = this
              , c = {};
            return "function" == typeof this._config.offset ? c.fn = function(c) {
                return c.offsets = D({}, c.offsets, a._config.offset(c.offsets, a._element) || {}),
                c
            }
            : c.offset = this._config.offset,
            c
        }
        ,
        e._getPopperConfig = function() {
            var a = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (a.modifiers.applyStyle = {
                enabled: !1
            }),
            D({}, a, this._config.popperConfig)
        }
        ,
        d._jQueryInterface = function(a) {
            return this.each(function() {
                var c = g.default(this).data("bs.dropdown");
                if (c || (c = new d(this,"object" == typeof a ? a : null),
                g.default(this).data("bs.dropdown", c)),
                "string" == typeof a) {
                    if ("undefined" == typeof c[a])
                        throw new TypeError('No method named "' + a + '"');
                    c[a]()
                }
            })
        }
        ,
        d._clearMenus = function(a) {
            if (!a || 3 !== a.which && ("keyup" !== a.type || 9 === a.which))
                for (var c = [].slice.call(document.querySelectorAll('[data-toggle\x3d"dropdown"]')), e = 0, f = c.length; e < f; e++) {
                    var l = d._getParentFromElement(c[e])
                      , q = g.default(c[e]).data("bs.dropdown")
                      , p = {
                        relatedTarget: c[e]
                    };
                    if (a && "click" === a.type && (p.clickEvent = a),
                    q) {
                        var t = q._menu;
                        if (g.default(l).hasClass("show") && !(a && ("click" === a.type && /input|textarea/i.test(a.target.tagName) || "keyup" === a.type && 9 === a.which) && g.default.contains(l, a.target))) {
                            var u = g.default.Event("hide.bs.dropdown", p);
                            g.default(l).trigger(u);
                            u.isDefaultPrevented() || ("ontouchstart"in document.documentElement && g.default(document.body).children().off("mouseover", null, g.default.noop),
                            c[e].setAttribute("aria-expanded", "false"),
                            q._popper && q._popper.destroy(),
                            g.default(t).removeClass("show"),
                            g.default(l).removeClass("show").trigger(g.default.Event("hidden.bs.dropdown", p)))
                        }
                    }
                }
        }
        ,
        d._getParentFromElement = function(a) {
            var c, d = t.getSelectorFromElement(a);
            return d && (c = document.querySelector(d)),
            c || a.parentNode
        }
        ,
        d._dataApiKeydownHandler = function(a) {
            if (!((/input|textarea/i.test(a.target.tagName) ? 32 === a.which || 27 !== a.which && (40 !== a.which && 38 !== a.which || g.default(a.target).closest(".dropdown-menu").length) : !Bb.test(a.which)) || this.disabled || g.default(this).hasClass("disabled"))) {
                var c = d._getParentFromElement(this)
                  , e = g.default(c).hasClass("show");
                if (e || 27 !== a.which) {
                    if (a.preventDefault(),
                    a.stopPropagation(),
                    !e || 27 === a.which || 32 === a.which)
                        return 27 === a.which && g.default(c.querySelector('[data-toggle\x3d"dropdown"]')).trigger("focus"),
                        void g.default(this).trigger("click");
                    c = [].slice.call(c.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(a) {
                        return g.default(a).is(":visible")
                    });
                    0 !== c.length && (e = c.indexOf(a.target),
                    38 === a.which && 0 < e && e--,
                    40 === a.which && e < c.length - 1 && e++,
                    0 > e && (e = 0),
                    c[e].focus())
                }
            }
        }
        ,
        A(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return Cb
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Qb
            }
        }]),
        d
    }();
    g.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle\x3d"dropdown"]', ta._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", ta._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", ta._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle\x3d"dropdown"]', function(d) {
        d.preventDefault();
        d.stopPropagation();
        ta._jQueryInterface.call(g.default(this), "toggle")
    }).on("click.bs.dropdown.data-api", ".dropdown form", function(d) {
        d.stopPropagation()
    });
    g.default.fn.dropdown = ta._jQueryInterface;
    g.default.fn.dropdown.Constructor = ta;
    g.default.fn.dropdown.noConflict = function() {
        return g.default.fn.dropdown = Ab,
        ta._jQueryInterface
    }
    ;
    var Rb = g.default.fn.modal
      , nb = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , aa = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , Qa = function() {
        function d(a, c) {
            this._config = this._getConfig(c);
            this._element = a;
            this._dialog = a.querySelector(".modal-dialog");
            this._backdrop = null;
            this._isTransitioning = this._ignoreBackdropClick = this._isBodyOverflowing = this._isShown = !1;
            this._scrollbarWidth = 0
        }
        var e = d.prototype;
        return e.toggle = function(a) {
            return this._isShown ? this.hide() : this.show(a)
        }
        ,
        e.show = function(a) {
            var c = this;
            if (!this._isShown && !this._isTransitioning) {
                g.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
                var d = g.default.Event("show.bs.modal", {
                    relatedTarget: a
                });
                g.default(this._element).trigger(d);
                this._isShown || d.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss\x3d"modal"]', function(a) {
                    return c.hide(a)
                }),
                g.default(this._dialog).on("mousedown.dismiss.bs.modal", function() {
                    g.default(c._element).one("mouseup.dismiss.bs.modal", function(a) {
                        g.default(a.target).is(c._element) && (c._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return c._showElement(a)
                }))
            }
        }
        ,
        e.hide = function(a) {
            var c = this;
            if (a && a.preventDefault(),
            this._isShown && !this._isTransitioning)
                if (a = g.default.Event("hide.bs.modal"),
                g.default(this._element).trigger(a),
                this._isShown && !a.isDefaultPrevented())
                    this._isShown = !1,
                    a = g.default(this._element).hasClass("fade"),
                    (a && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    g.default(document).off("focusin.bs.modal"),
                    g.default(this._element).removeClass("show"),
                    g.default(this._element).off("click.dismiss.bs.modal"),
                    g.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                    a) ? (a = t.getTransitionDurationFromElement(this._element),
                    g.default(this._element).one(t.TRANSITION_END, function(a) {
                        return c._hideModal(a)
                    }).emulateTransitionEnd(a)) : this._hideModal()
        }
        ,
        e.dispose = function() {
            [window, this._element, this._dialog].forEach(function(a) {
                return g.default(a).off(".bs.modal")
            });
            g.default(document).off("focusin.bs.modal");
            g.default.removeData(this._element, "bs.modal");
            this._scrollbarWidth = this._isTransitioning = this._ignoreBackdropClick = this._isBodyOverflowing = this._isShown = this._backdrop = this._dialog = this._element = this._config = null
        }
        ,
        e.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        e._getConfig = function(a) {
            return a = D({}, nb, a),
            t.typeCheckConfig("modal", a, aa),
            a
        }
        ,
        e._triggerBackdropTransition = function() {
            var a = this;
            if ("static" === this._config.backdrop) {
                var c = g.default.Event("hidePrevented.bs.modal");
                if (g.default(this._element).trigger(c),
                !c.isDefaultPrevented()) {
                    var d = this._element.scrollHeight > document.documentElement.clientHeight;
                    d || (this._element.style.overflowY = "hidden");
                    this._element.classList.add("modal-static");
                    var e = t.getTransitionDurationFromElement(this._dialog);
                    g.default(this._element).off(t.TRANSITION_END);
                    g.default(this._element).one(t.TRANSITION_END, function() {
                        a._element.classList.remove("modal-static");
                        d || g.default(a._element).one(t.TRANSITION_END, function() {
                            a._element.style.overflowY = ""
                        }).emulateTransitionEnd(a._element, e)
                    }).emulateTransitionEnd(e);
                    this._element.focus()
                }
            } else
                this.hide()
        }
        ,
        e._showElement = function(a) {
            var c = this
              , d = g.default(this._element).hasClass("fade")
              , e = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
            this._element.style.display = "block";
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", !0);
            this._element.setAttribute("role", "dialog");
            g.default(this._dialog).hasClass("modal-dialog-scrollable") && e ? e.scrollTop = 0 : this._element.scrollTop = 0;
            d && t.reflow(this._element);
            g.default(this._element).addClass("show");
            this._config.focus && this._enforceFocus();
            var f = g.default.Event("shown.bs.modal", {
                relatedTarget: a
            });
            a = function() {
                c._config.focus && c._element.focus();
                c._isTransitioning = !1;
                g.default(c._element).trigger(f)
            }
            ;
            d ? (d = t.getTransitionDurationFromElement(this._dialog),
            g.default(this._dialog).one(t.TRANSITION_END, a).emulateTransitionEnd(d)) : a()
        }
        ,
        e._enforceFocus = function() {
            var a = this;
            g.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function(c) {
                document !== c.target && a._element !== c.target && 0 === g.default(a._element).has(c.target).length && a._element.focus()
            })
        }
        ,
        e._setEscapeEvent = function() {
            var a = this;
            this._isShown ? g.default(this._element).on("keydown.dismiss.bs.modal", function(c) {
                a._config.keyboard && 27 === c.which ? (c.preventDefault(),
                a.hide()) : a._config.keyboard || 27 !== c.which || a._triggerBackdropTransition()
            }) : this._isShown || g.default(this._element).off("keydown.dismiss.bs.modal")
        }
        ,
        e._setResizeEvent = function() {
            var a = this;
            this._isShown ? g.default(window).on("resize.bs.modal", function(c) {
                return a.handleUpdate(c)
            }) : g.default(window).off("resize.bs.modal")
        }
        ,
        e._hideModal = function() {
            var a = this;
            this._element.style.display = "none";
            this._element.setAttribute("aria-hidden", !0);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            this._isTransitioning = !1;
            this._showBackdrop(function() {
                g.default(document.body).removeClass("modal-open");
                a._resetAdjustments();
                a._resetScrollbar();
                g.default(a._element).trigger("hidden.bs.modal")
            })
        }
        ,
        e._removeBackdrop = function() {
            this._backdrop && (g.default(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        e._showBackdrop = function(a) {
            var c = this
              , d = g.default(this._element).hasClass("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                d && this._backdrop.classList.add(d),
                g.default(this._backdrop).appendTo(document.body),
                g.default(this._element).on("click.dismiss.bs.modal", function(a) {
                    c._ignoreBackdropClick ? c._ignoreBackdropClick = !1 : a.target === a.currentTarget && c._triggerBackdropTransition()
                }),
                d && t.reflow(this._backdrop),
                g.default(this._backdrop).addClass("show"),
                a) {
                    if (!d)
                        return void a();
                    d = t.getTransitionDurationFromElement(this._backdrop);
                    g.default(this._backdrop).one(t.TRANSITION_END, a).emulateTransitionEnd(d)
                }
            } else if (!this._isShown && this._backdrop)
                if (g.default(this._backdrop).removeClass("show"),
                d = function() {
                    c._removeBackdrop();
                    a && a()
                }
                ,
                g.default(this._element).hasClass("fade")) {
                    var e = t.getTransitionDurationFromElement(this._backdrop);
                    g.default(this._backdrop).one(t.TRANSITION_END, d).emulateTransitionEnd(e)
                } else
                    d();
            else
                a && a()
        }
        ,
        e._adjustDialog = function() {
            var a = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
            this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        e._resetAdjustments = function() {
            this._element.style.paddingLeft = "";
            this._element.style.paddingRight = ""
        }
        ,
        e._checkScrollbar = function() {
            var a = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(a.left + a.right) < window.innerWidth;
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        e._setScrollbar = function() {
            var a = this;
            if (this._isBodyOverflowing) {
                var c = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"))
                  , d = [].slice.call(document.querySelectorAll(".sticky-top"));
                g.default(c).each(function(c, d) {
                    c = d.style.paddingRight;
                    var e = g.default(d).css("padding-right");
                    g.default(d).data("padding-right", c).css("padding-right", parseFloat(e) + a._scrollbarWidth + "px")
                });
                g.default(d).each(function(c, d) {
                    c = d.style.marginRight;
                    var e = g.default(d).css("margin-right");
                    g.default(d).data("margin-right", c).css("margin-right", parseFloat(e) - a._scrollbarWidth + "px")
                });
                c = document.body.style.paddingRight;
                d = g.default(document.body).css("padding-right");
                g.default(document.body).data("padding-right", c).css("padding-right", parseFloat(d) + this._scrollbarWidth + "px")
            }
            g.default(document.body).addClass("modal-open")
        }
        ,
        e._resetScrollbar = function() {
            var a = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
            g.default(a).each(function(a, d) {
                a = g.default(d).data("padding-right");
                g.default(d).removeData("padding-right");
                d.style.paddingRight = a || ""
            });
            a = [].slice.call(document.querySelectorAll(".sticky-top"));
            g.default(a).each(function(a, d) {
                a = g.default(d).data("margin-right");
                "undefined" != typeof a && g.default(d).css("margin-right", a).removeData("margin-right")
            });
            a = g.default(document.body).data("padding-right");
            g.default(document.body).removeData("padding-right");
            document.body.style.paddingRight = a || ""
        }
        ,
        e._getScrollbarWidth = function() {
            var a = document.createElement("div");
            a.className = "modal-scrollbar-measure";
            document.body.appendChild(a);
            var c = a.getBoundingClientRect().width - a.clientWidth;
            return document.body.removeChild(a),
            c
        }
        ,
        d._jQueryInterface = function(a, c) {
            return this.each(function() {
                var e = g.default(this).data("bs.modal")
                  , f = D({}, nb, g.default(this).data(), "object" == typeof a && a ? a : {});
                if (e || (e = new d(this,f),
                g.default(this).data("bs.modal", e)),
                "string" == typeof a) {
                    if ("undefined" == typeof e[a])
                        throw new TypeError('No method named "' + a + '"');
                    e[a](c)
                } else
                    f.show && e.show(c)
            })
        }
        ,
        A(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return nb
            }
        }]),
        d
    }();
    g.default(document).on("click.bs.modal.data-api", '[data-toggle\x3d"modal"]', function(d) {
        var e, a = this, c = t.getSelectorFromElement(this);
        c && (e = document.querySelector(c));
        c = g.default(e).data("bs.modal") ? "toggle" : D({}, g.default(e).data(), g.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || d.preventDefault();
        var f = g.default(e).one("show.bs.modal", function(c) {
            c.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                g.default(a).is(":visible") && a.focus()
            })
        });
        Qa._jQueryInterface.call(g.default(e), c, this)
    });
    g.default.fn.modal = Qa._jQueryInterface;
    g.default.fn.modal.Constructor = Qa;
    g.default.fn.modal.noConflict = function() {
        return g.default.fn.modal = Rb,
        Qa._jQueryInterface
    }
    ;
    var ob = "background cite href itemtype longdesc poster src xlink:href".split(" ")
      , fa = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi
      , Ib = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , Jb = g.default.fn.tooltip
      , Ra = /(^|\s)bs-tooltip\S+/g
      , u = ["sanitize", "whiteList", "sanitizeFn"]
      , X = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , Lb = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Kb = {
        animation: !0,
        template: '\x3cdiv class\x3d"tooltip" role\x3d"tooltip"\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3cdiv class\x3d"tooltip-inner"\x3e\x3c/div\x3e\x3c/div\x3e',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: "src srcset alt title width height".split(" "),
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , Db = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , ba = function() {
        function d(a, c) {
            if ("undefined" == typeof ea)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0;
            this._timeout = 0;
            this._hoverState = "";
            this._activeTrigger = {};
            this._popper = null;
            this.element = a;
            this.config = this._getConfig(c);
            this.tip = null;
            this._setListeners()
        }
        var e = d.prototype;
        return e.enable = function() {
            this._isEnabled = !0
        }
        ,
        e.disable = function() {
            this._isEnabled = !1
        }
        ,
        e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        e.toggle = function(a) {
            if (this._isEnabled)
                if (a) {
                    var c = this.constructor.DATA_KEY
                      , d = g.default(a.currentTarget).data(c);
                    d || (d = new this.constructor(a.currentTarget,this._getDelegateConfig()),
                    g.default(a.currentTarget).data(c, d));
                    d._activeTrigger.click = !d._activeTrigger.click;
                    d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                } else {
                    if (g.default(this.getTipElement()).hasClass("show"))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        e.dispose = function() {
            clearTimeout(this._timeout);
            g.default.removeData(this.element, this.constructor.DATA_KEY);
            g.default(this.element).off(this.constructor.EVENT_KEY);
            g.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
            this.tip && g.default(this.tip).remove();
            this._activeTrigger = this._hoverState = this._timeout = this._isEnabled = null;
            this._popper && this._popper.destroy();
            this.tip = this.config = this.element = this._popper = null
        }
        ,
        e.show = function() {
            var a = this;
            if ("none" === g.default(this.element).css("display"))
                throw Error("Please use show on visible elements");
            var c = g.default.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                g.default(this.element).trigger(c);
                var d = t.findShadowRoot(this.element);
                d = g.default.contains(null !== d ? d : this.element.ownerDocument.documentElement, this.element);
                if (!c.isDefaultPrevented() && d) {
                    c = this.getTipElement();
                    d = t.getUID(this.constructor.NAME);
                    c.setAttribute("id", d);
                    this.element.setAttribute("aria-describedby", d);
                    this.setContent();
                    this.config.animation && g.default(c).addClass("fade");
                    d = "function" == typeof this.config.placement ? this.config.placement.call(this, c, this.element) : this.config.placement;
                    d = this._getAttachment(d);
                    this.addAttachmentClass(d);
                    var e = this._getContainer();
                    g.default(c).data(this.constructor.DATA_KEY, this);
                    g.default.contains(this.element.ownerDocument.documentElement, this.tip) || g.default(c).appendTo(e);
                    g.default(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new ea(this.element,c,this._getPopperConfig(d));
                    g.default(c).addClass("show");
                    "ontouchstart"in document.documentElement && g.default(document.body).children().on("mouseover", null, g.default.noop);
                    c = function() {
                        a.config.animation && a._fixTransition();
                        var c = a._hoverState;
                        a._hoverState = null;
                        g.default(a.element).trigger(a.constructor.Event.SHOWN);
                        "out" === c && a._leave(null, a)
                    }
                    ;
                    g.default(this.tip).hasClass("fade") ? (d = t.getTransitionDurationFromElement(this.tip),
                    g.default(this.tip).one(t.TRANSITION_END, c).emulateTransitionEnd(d)) : c()
                }
            }
        }
        ,
        e.hide = function(a) {
            var c = this
              , d = this.getTipElement()
              , e = g.default.Event(this.constructor.Event.HIDE)
              , f = function() {
                "show" !== c._hoverState && d.parentNode && d.parentNode.removeChild(d);
                c._cleanTipClass();
                c.element.removeAttribute("aria-describedby");
                g.default(c.element).trigger(c.constructor.Event.HIDDEN);
                null !== c._popper && c._popper.destroy();
                a && a()
            };
            (g.default(this.element).trigger(e),
            e.isDefaultPrevented()) || ((g.default(d).removeClass("show"),
            "ontouchstart"in document.documentElement && g.default(document.body).children().off("mouseover", null, g.default.noop),
            this._activeTrigger.click = !1,
            this._activeTrigger.focus = !1,
            this._activeTrigger.hover = !1,
            g.default(this.tip).hasClass("fade")) ? (e = t.getTransitionDurationFromElement(d),
            g.default(d).one(t.TRANSITION_END, f).emulateTransitionEnd(e)) : f(),
            this._hoverState = "")
        }
        ,
        e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e.isWithContent = function() {
            return !!this.getTitle()
        }
        ,
        e.addAttachmentClass = function(a) {
            g.default(this.getTipElement()).addClass("bs-tooltip-" + a)
        }
        ,
        e.getTipElement = function() {
            return this.tip = this.tip || g.default(this.config.template)[0],
            this.tip
        }
        ,
        e.setContent = function() {
            var a = this.getTipElement();
            this.setElementContent(g.default(a.querySelectorAll(".tooltip-inner")), this.getTitle());
            g.default(a).removeClass("fade show")
        }
        ,
        e.setElementContent = function(a, c) {
            "object" != typeof c || !c.nodeType && !c.jquery ? this.config.html ? (this.config.sanitize && (c = jb(c, this.config.whiteList, this.config.sanitizeFn)),
            a.html(c)) : a.text(c) : this.config.html ? g.default(c).parent().is(a) || a.empty().append(c) : a.text(g.default(c).text())
        }
        ,
        e.getTitle = function() {
            var a = this.element.getAttribute("data-original-title");
            return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            a
        }
        ,
        e._getPopperConfig = function(a) {
            var c = this;
            return D({}, {
                placement: a,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(a) {
                    a.originalPlacement !== a.placement && c._handlePopperPlacementChange(a)
                },
                onUpdate: function(a) {
                    return c._handlePopperPlacementChange(a)
                }
            }, this.config.popperConfig)
        }
        ,
        e._getOffset = function() {
            var a = this
              , c = {};
            return "function" == typeof this.config.offset ? c.fn = function(c) {
                return c.offsets = D({}, c.offsets, a.config.offset(c.offsets, a.element) || {}),
                c
            }
            : c.offset = this.config.offset,
            c
        }
        ,
        e._getContainer = function() {
            return !1 === this.config.container ? document.body : t.isElement(this.config.container) ? g.default(this.config.container) : g.default(document).find(this.config.container)
        }
        ,
        e._getAttachment = function(a) {
            return Lb[a.toUpperCase()]
        }
        ,
        e._setListeners = function() {
            var a = this;
            this.config.trigger.split(" ").forEach(function(c) {
                if ("click" === c)
                    g.default(a.element).on(a.constructor.Event.CLICK, a.config.selector, function(c) {
                        return a.toggle(c)
                    });
                else if ("manual" !== c) {
                    var d = "hover" === c ? a.constructor.Event.MOUSEENTER : a.constructor.Event.FOCUSIN;
                    c = "hover" === c ? a.constructor.Event.MOUSELEAVE : a.constructor.Event.FOCUSOUT;
                    g.default(a.element).on(d, a.config.selector, function(c) {
                        return a._enter(c)
                    }).on(c, a.config.selector, function(c) {
                        return a._leave(c)
                    })
                }
            });
            this._hideModalHandler = function() {
                a.element && a.hide()
            }
            ;
            g.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
            this.config.selector ? this.config = D({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        e._fixTitle = function() {
            var a = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        e._enter = function(a, c) {
            var d = this.constructor.DATA_KEY;
            (c = c || g.default(a.currentTarget).data(d)) || (c = new this.constructor(a.currentTarget,this._getDelegateConfig()),
            g.default(a.currentTarget).data(d, c));
            a && (c._activeTrigger["focusin" === a.type ? "focus" : "hover"] = !0);
            g.default(c.getTipElement()).hasClass("show") || "show" === c._hoverState ? c._hoverState = "show" : (clearTimeout(c._timeout),
            c._hoverState = "show",
            c.config.delay && c.config.delay.show ? c._timeout = setTimeout(function() {
                "show" === c._hoverState && c.show()
            }, c.config.delay.show) : c.show())
        }
        ,
        e._leave = function(a, c) {
            var d = this.constructor.DATA_KEY;
            (c = c || g.default(a.currentTarget).data(d)) || (c = new this.constructor(a.currentTarget,this._getDelegateConfig()),
            g.default(a.currentTarget).data(d, c));
            a && (c._activeTrigger["focusout" === a.type ? "focus" : "hover"] = !1);
            c._isWithActiveTrigger() || (clearTimeout(c._timeout),
            c._hoverState = "out",
            c.config.delay && c.config.delay.hide ? c._timeout = setTimeout(function() {
                "out" === c._hoverState && c.hide()
            }, c.config.delay.hide) : c.hide())
        }
        ,
        e._isWithActiveTrigger = function() {
            for (var a in this._activeTrigger)
                if (this._activeTrigger[a])
                    return !0;
            return !1
        }
        ,
        e._getConfig = function(a) {
            var c = g.default(this.element).data();
            return Object.keys(c).forEach(function(a) {
                -1 !== u.indexOf(a) && delete c[a]
            }),
            "number" == typeof (a = D({}, this.constructor.Default, c, "object" == typeof a && a ? a : {})).delay && (a.delay = {
                show: a.delay,
                hide: a.delay
            }),
            "number" == typeof a.title && (a.title = a.title.toString()),
            "number" == typeof a.content && (a.content = a.content.toString()),
            t.typeCheckConfig("tooltip", a, this.constructor.DefaultType),
            a.sanitize && (a.template = jb(a.template, a.whiteList, a.sanitizeFn)),
            a
        }
        ,
        e._getDelegateConfig = function() {
            var a = {};
            if (this.config)
                for (var c in this.config)
                    this.constructor.Default[c] !== this.config[c] && (a[c] = this.config[c]);
            return a
        }
        ,
        e._cleanTipClass = function() {
            var a = g.default(this.getTipElement())
              , c = a.attr("class").match(Ra);
            null !== c && c.length && a.removeClass(c.join(""))
        }
        ,
        e._handlePopperPlacementChange = function(a) {
            this.tip = a.instance.popper;
            this._cleanTipClass();
            this.addAttachmentClass(this._getAttachment(a.placement))
        }
        ,
        e._fixTransition = function() {
            var a = this.getTipElement()
              , c = this.config.animation;
            null === a.getAttribute("x-placement") && (g.default(a).removeClass("fade"),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = c)
        }
        ,
        d._jQueryInterface = function(a) {
            return this.each(function() {
                var c = g.default(this)
                  , e = c.data("bs.tooltip")
                  , f = "object" == typeof a && a;
                if ((e || !/dispose|hide/.test(a)) && (e || (e = new d(this,f),
                c.data("bs.tooltip", e)),
                "string" == typeof a)) {
                    if ("undefined" == typeof e[a])
                        throw new TypeError('No method named "' + a + '"');
                    e[a]()
                }
            })
        }
        ,
        A(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return Kb
            }
        }, {
            key: "NAME",
            get: function() {
                return "tooltip"
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.tooltip"
            }
        }, {
            key: "Event",
            get: function() {
                return Db
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return X
            }
        }]),
        d
    }();
    g.default.fn.tooltip = ba._jQueryInterface;
    g.default.fn.tooltip.Constructor = ba;
    g.default.fn.tooltip.noConflict = function() {
        return g.default.fn.tooltip = Jb,
        ba._jQueryInterface
    }
    ;
    var ka = g.default.fn.popover
      , Y = /(^|\s)bs-popover\S+/g
      , xa = D({}, ba.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '\x3cdiv class\x3d"popover" role\x3d"tooltip"\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3ch3 class\x3d"popover-header"\x3e\x3c/h3\x3e\x3cdiv class\x3d"popover-body"\x3e\x3c/div\x3e\x3c/div\x3e'
    })
      , Sb = D({}, ba.DefaultType, {
        content: "(string|element|function)"
    })
      , Ua = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , La = function(d) {
        function e() {
            return d.apply(this, arguments) || this
        }
        e.prototype = Object.create(d.prototype);
        e.prototype.constructor = e;
        e.__proto__ = d;
        var a = e.prototype;
        return a.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        a.addAttachmentClass = function(a) {
            g.default(this.getTipElement()).addClass("bs-popover-" + a)
        }
        ,
        a.getTipElement = function() {
            return this.tip = this.tip || g.default(this.config.template)[0],
            this.tip
        }
        ,
        a.setContent = function() {
            var a = g.default(this.getTipElement());
            this.setElementContent(a.find(".popover-header"), this.getTitle());
            var d = this._getContent();
            "function" == typeof d && (d = d.call(this.element));
            this.setElementContent(a.find(".popover-body"), d);
            a.removeClass("fade show")
        }
        ,
        a._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        a._cleanTipClass = function() {
            var a = g.default(this.getTipElement())
              , d = a.attr("class").match(Y);
            null !== d && 0 < d.length && a.removeClass(d.join(""))
        }
        ,
        e._jQueryInterface = function(a) {
            return this.each(function() {
                var c = g.default(this).data("bs.popover")
                  , d = "object" == typeof a ? a : null;
                if ((c || !/dispose|hide/.test(a)) && (c || (c = new e(this,d),
                g.default(this).data("bs.popover", c)),
                "string" == typeof a)) {
                    if ("undefined" == typeof c[a])
                        throw new TypeError('No method named "' + a + '"');
                    c[a]()
                }
            })
        }
        ,
        A(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return xa
            }
        }, {
            key: "NAME",
            get: function() {
                return "popover"
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.popover"
            }
        }, {
            key: "Event",
            get: function() {
                return Ua
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Sb
            }
        }]),
        e
    }(ba);
    g.default.fn.popover = La._jQueryInterface;
    g.default.fn.popover.Constructor = La;
    g.default.fn.popover.noConflict = function() {
        return g.default.fn.popover = ka,
        La._jQueryInterface
    }
    ;
    var db = g.default.fn.scrollspy
      , Ja = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , sb = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , Aa = function() {
        function d(a, c) {
            var d = this;
            this._element = a;
            this._scrollElement = "BODY" === a.tagName ? window : a;
            this._config = this._getConfig(c);
            this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item";
            this._offsets = [];
            this._targets = [];
            this._activeTarget = null;
            this._scrollHeight = 0;
            g.default(this._scrollElement).on("scroll.bs.scrollspy", function(a) {
                return d._process(a)
            });
            this.refresh();
            this._process()
        }
        var e = d.prototype;
        return e.refresh = function() {
            var a = this
              , c = this._scrollElement === this._scrollElement.window ? "offset" : "position"
              , d = "auto" === this._config.method ? c : this._config.method
              , e = "position" === d ? this._getScrollTop() : 0;
            this._offsets = [];
            this._targets = [];
            this._scrollHeight = this._getScrollHeight();
            [].slice.call(document.querySelectorAll(this._selector)).map(function(a) {
                var c;
                a = t.getSelectorFromElement(a);
                if (a && (c = document.querySelector(a)),
                c) {
                    var f = c.getBoundingClientRect();
                    if (f.width || f.height)
                        return [g.default(c)[d]().top + e, a]
                }
                return null
            }).filter(function(a) {
                return a
            }).sort(function(a, c) {
                return a[0] - c[0]
            }).forEach(function(c) {
                a._offsets.push(c[0]);
                a._targets.push(c[1])
            })
        }
        ,
        e.dispose = function() {
            g.default.removeData(this._element, "bs.scrollspy");
            g.default(this._scrollElement).off(".bs.scrollspy");
            this._scrollHeight = this._activeTarget = this._targets = this._offsets = this._selector = this._config = this._scrollElement = this._element = null
        }
        ,
        e._getConfig = function(a) {
            if ("string" != typeof (a = D({}, Ja, "object" == typeof a && a ? a : {})).target && t.isElement(a.target)) {
                var c = g.default(a.target).attr("id");
                c || (c = t.getUID("scrollspy"),
                g.default(a.target).attr("id", c));
                a.target = "#" + c
            }
            return t.typeCheckConfig("scrollspy", a, sb),
            a
        }
        ,
        e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        e._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        e._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        e._process = function() {
            var a = this._getScrollTop() + this._config.offset
              , c = this._getScrollHeight()
              , d = this._config.offset + c - this._getOffsetHeight();
            if (this._scrollHeight !== c && this.refresh(),
            a >= d)
                a = this._targets[this._targets.length - 1],
                this._activeTarget !== a && this._activate(a);
            else {
                if (this._activeTarget && a < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (c = this._offsets.length; c--; )
                    this._activeTarget !== this._targets[c] && a >= this._offsets[c] && ("undefined" == typeof this._offsets[c + 1] || a < this._offsets[c + 1]) && this._activate(this._targets[c])
            }
        }
        ,
        e._activate = function(a) {
            this._activeTarget = a;
            this._clear();
            var c = this._selector.split(",").map(function(c) {
                return c + '[data-target\x3d"' + a + '"],' + c + '[href\x3d"' + a + '"]'
            });
            c = g.default([].slice.call(document.querySelectorAll(c.join(","))));
            c.hasClass("dropdown-item") ? (c.closest(".dropdown").find(".dropdown-toggle").addClass("active"),
            c.addClass("active")) : (c.addClass("active"),
            c.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),
            c.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active"));
            g.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: a
            })
        }
        ,
        e._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(a) {
                return a.classList.contains("active")
            }).forEach(function(a) {
                return a.classList.remove("active")
            })
        }
        ,
        d._jQueryInterface = function(a) {
            return this.each(function() {
                var c = g.default(this).data("bs.scrollspy");
                if (c || (c = new d(this,"object" == typeof a && a),
                g.default(this).data("bs.scrollspy", c)),
                "string" == typeof a) {
                    if ("undefined" == typeof c[a])
                        throw new TypeError('No method named "' + a + '"');
                    c[a]()
                }
            })
        }
        ,
        A(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "Default",
            get: function() {
                return Ja
            }
        }]),
        d
    }();
    g.default(window).on("load.bs.scrollspy.data-api", function() {
        for (var d = [].slice.call(document.querySelectorAll('[data-spy\x3d"scroll"]')), e = d.length; e--; ) {
            var a = g.default(d[e]);
            Aa._jQueryInterface.call(a, a.data())
        }
    });
    g.default.fn.scrollspy = Aa._jQueryInterface;
    g.default.fn.scrollspy.Constructor = Aa;
    g.default.fn.scrollspy.noConflict = function() {
        return g.default.fn.scrollspy = db,
        Aa._jQueryInterface
    }
    ;
    var Ka = g.default.fn.tab
      , U = function() {
        function d(a) {
            this._element = a
        }
        var e = d.prototype;
        return e.show = function() {
            var a = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g.default(this._element).hasClass("active") || g.default(this._element).hasClass("disabled"))) {
                var c, d = g.default(this._element).closest(".nav, .list-group")[0], e = t.getSelectorFromElement(this._element);
                if (d) {
                    var f = "UL" === d.nodeName || "OL" === d.nodeName ? "\x3e li \x3e .active" : ".active";
                    var l = (l = g.default.makeArray(g.default(d).find(f)))[l.length - 1]
                }
                f = g.default.Event("hide.bs.tab", {
                    relatedTarget: this._element
                });
                var p = g.default.Event("show.bs.tab", {
                    relatedTarget: l
                });
                (l && g.default(l).trigger(f),
                g.default(this._element).trigger(p),
                p.isDefaultPrevented() || f.isDefaultPrevented()) || (e && (c = document.querySelector(e)),
                this._activate(this._element, d),
                d = function() {
                    var c = g.default.Event("hidden.bs.tab", {
                        relatedTarget: a._element
                    })
                      , d = g.default.Event("shown.bs.tab", {
                        relatedTarget: l
                    });
                    g.default(l).trigger(c);
                    g.default(a._element).trigger(d)
                }
                ,
                c ? this._activate(c, c.parentNode, d) : d())
            }
        }
        ,
        e.dispose = function() {
            g.default.removeData(this._element, "bs.tab");
            this._element = null
        }
        ,
        e._activate = function(a, c, d) {
            var e = this
              , f = (!c || "UL" !== c.nodeName && "OL" !== c.nodeName ? g.default(c).children(".active") : g.default(c).find("\x3e li \x3e .active"))[0]
              , k = d && f && g.default(f).hasClass("fade");
            c = function() {
                return e._transitionComplete(a, f, d)
            }
            ;
            f && k ? (k = t.getTransitionDurationFromElement(f),
            g.default(f).removeClass("show").one(t.TRANSITION_END, c).emulateTransitionEnd(k)) : c()
        }
        ,
        e._transitionComplete = function(a, c, d) {
            if (c) {
                g.default(c).removeClass("active");
                var e = g.default(c.parentNode).find("\x3e .dropdown-menu .active")[0];
                e && g.default(e).removeClass("active");
                "tab" === c.getAttribute("role") && c.setAttribute("aria-selected", !1)
            }
            if (g.default(a).addClass("active"),
            "tab" === a.getAttribute("role") && a.setAttribute("aria-selected", !0),
            t.reflow(a),
            a.classList.contains("fade") && a.classList.add("show"),
            a.parentNode && g.default(a.parentNode).hasClass("dropdown-menu")) {
                if (c = g.default(a).closest(".dropdown")[0])
                    c = [].slice.call(c.querySelectorAll(".dropdown-toggle")),
                    g.default(c).addClass("active");
                a.setAttribute("aria-expanded", !0)
            }
            d && d()
        }
        ,
        d._jQueryInterface = function(a) {
            return this.each(function() {
                var c = g.default(this)
                  , e = c.data("bs.tab");
                if (e || (e = new d(this),
                c.data("bs.tab", e)),
                "string" == typeof a) {
                    if ("undefined" == typeof e[a])
                        throw new TypeError('No method named "' + a + '"');
                    e[a]()
                }
            })
        }
        ,
        A(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }]),
        d
    }();
    g.default(document).on("click.bs.tab.data-api", '[data-toggle\x3d"tab"], [data-toggle\x3d"pill"], [data-toggle\x3d"list"]', function(d) {
        d.preventDefault();
        U._jQueryInterface.call(g.default(this), "show")
    });
    g.default.fn.tab = U._jQueryInterface;
    g.default.fn.tab.Constructor = U;
    g.default.fn.tab.noConflict = function() {
        return g.default.fn.tab = Ka,
        U._jQueryInterface
    }
    ;
    var Mb = g.default.fn.toast
      , Eb = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Fb = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , Xa = function() {
        function d(a, c) {
            this._element = a;
            this._config = this._getConfig(c);
            this._timeout = null;
            this._setListeners()
        }
        var e = d.prototype;
        return e.show = function() {
            var a = this
              , c = g.default.Event("show.bs.toast");
            if (g.default(this._element).trigger(c),
            !c.isDefaultPrevented())
                if (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                c = function() {
                    a._element.classList.remove("showing");
                    a._element.classList.add("show");
                    g.default(a._element).trigger("shown.bs.toast");
                    a._config.autohide && (a._timeout = setTimeout(function() {
                        a.hide()
                    }, a._config.delay))
                }
                ,
                this._element.classList.remove("hide"),
                t.reflow(this._element),
                this._element.classList.add("showing"),
                this._config.animation) {
                    var d = t.getTransitionDurationFromElement(this._element);
                    g.default(this._element).one(t.TRANSITION_END, c).emulateTransitionEnd(d)
                } else
                    c()
        }
        ,
        e.hide = function() {
            if (this._element.classList.contains("show")) {
                var a = g.default.Event("hide.bs.toast");
                g.default(this._element).trigger(a);
                a.isDefaultPrevented() || this._close()
            }
        }
        ,
        e.dispose = function() {
            this._clearTimeout();
            this._element.classList.contains("show") && this._element.classList.remove("show");
            g.default(this._element).off("click.dismiss.bs.toast");
            g.default.removeData(this._element, "bs.toast");
            this._config = this._element = null
        }
        ,
        e._getConfig = function(a) {
            return a = D({}, Fb, g.default(this._element).data(), "object" == typeof a && a ? a : {}),
            t.typeCheckConfig("toast", a, this.constructor.DefaultType),
            a
        }
        ,
        e._setListeners = function() {
            var a = this;
            g.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss\x3d"toast"]', function() {
                return a.hide()
            })
        }
        ,
        e._close = function() {
            var a = this
              , c = function() {
                a._element.classList.add("hide");
                g.default(a._element).trigger("hidden.bs.toast")
            };
            if (this._element.classList.remove("show"),
            this._config.animation) {
                var d = t.getTransitionDurationFromElement(this._element);
                g.default(this._element).one(t.TRANSITION_END, c).emulateTransitionEnd(d)
            } else
                c()
        }
        ,
        e._clearTimeout = function() {
            clearTimeout(this._timeout);
            this._timeout = null
        }
        ,
        d._jQueryInterface = function(a) {
            return this.each(function() {
                var c = g.default(this)
                  , e = c.data("bs.toast");
                if (e || (e = new d(this,"object" == typeof a && a),
                c.data("bs.toast", e)),
                "string" == typeof a) {
                    if ("undefined" == typeof e[a])
                        throw new TypeError('No method named "' + a + '"');
                    e[a](this)
                }
            })
        }
        ,
        A(d, null, [{
            key: "VERSION",
            get: function() {
                return "4.5.3"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Eb
            }
        }, {
            key: "Default",
            get: function() {
                return Fb
            }
        }]),
        d
    }();
    g.default.fn.toast = Xa._jQueryInterface;
    g.default.fn.toast.Constructor = Xa;
    g.default.fn.toast.noConflict = function() {
        return g.default.fn.toast = Mb,
        Xa._jQueryInterface
    }
    ;
    p.Alert = sa;
    p.Button = Ia;
    p.Carousel = Z;
    p.Collapse = oa;
    p.Dropdown = ta;
    p.Modal = Qa;
    p.Popover = La;
    p.Scrollspy = Aa;
    p.Tab = U;
    p.Toast = Xa;
    p.Tooltip = ba;
    p.Util = t;
    Object.defineProperty(p, "__esModule", {
        value: !0
    })
});
(function(p) {
    p.cookieBar = function(l, I) {
        var A = "cookies" == l ? "cookies" : "set" == l ? "set" : !1;
        l = p.extend({
            message: "This website uses cookies. By navigating around this site you consent to cookies being stored on your machine.",
            acceptButton: !0,
            acceptText: "Accept",
            acceptFunction: function(l) {
                "enabled" != l && "accepted" != l && (window.location = window.location.href)
            },
            declineButton: !1,
            declineText: "Disable Cookies",
            declineFunction: function(l) {
                if ("enabled" == l || "accepted" == l)
                    window.location = window.location.href
            },
            policyButton: !1,
            policyText: "Edit your cookie settings",
            policyURL: "/en-us/contact/cookies.html",
            autoEnable: !0,
            acceptOnContinue: !1,
            acceptOnScroll: !1,
            acceptAnyClick: !1,
            expireDays: 365,
            renewOnVisit: !1,
            forceShow: !1,
            effect: "slide",
            element: "body",
            append: !1,
            fixed: !0,
            bottom: !1,
            zindex: "9999999",
            domain: String(window.location.hostname),
            referrer: String(document.referrer)
        }, l);
        var D = new Date;
        D.setTime(D.getTime() + 864E5 * l.expireDays);
        D = D.toGMTString();
        var w = "cb-enabled\x3d{value}; expires\x3d" + D + "; path\x3d/", L, F = "", H = document.cookie.split("; ");
        for (L = 0; L < H.length; L++) {
            var x = H[L].split("\x3d");
            "cb-enabled" == x[0] && (F = x[1])
        }
        "" == F && "cookies" != A && l.autoEnable ? (F = "enabled",
        document.cookie = w.replace("{value}", "enabled")) : "accepted" != F && "declined" != F || "cookies" == A || !l.renewOnVisit || (document.cookie = w.replace("{value}", F));
        l.acceptOnContinue && 0 <= l.referrer.indexOf(l.domain) && -1 == String(window.location.href).indexOf(l.policyURL) && "cookies" != A && "set" != A && "accepted" != F && "declined" != F && (A = "set",
        I = "accepted");
        if ("cookies" == A)
            return "enabled" == F || "accepted" == F ? !0 : !1;
        if ("set" != A || "accepted" != I && "declined" != I) {
            I = l.message.replace("{policy_url}", l.policyURL);
            A = l.acceptButton ? '\x3ca href\x3d"" class\x3d"cb-enable"\x3e' + l.acceptText + "\x3c/a\x3e" : "";
            D = l.declineButton ? '\x3ca href\x3d"" class\x3d"cb-disable"\x3e' + l.declineText + "\x3c/a\x3e" : "";
            var N = l.policyButton ? '\x3ca href\x3d"' + l.policyURL + '" class\x3d"cb-policy"\x3e' + l.policyText + "\x3c/a\x3e" : ""
              , S = l.fixed ? l.bottom ? ' class\x3d"fixed bottom"' : ' class\x3d"fixed"' : ""
              , pa = "" != l.zindex ? ' style\x3d"z-index:' + l.zindex + ';"' : "";
            if (l.forceShow || "enabled" == F || "" == F)
                l.append ? p(l.element).append('\x3cdiv id\x3d"cookie-bar"' + S + pa + "\x3e\x3cp\x3e" + I + A + D + N + "\x3c/p\x3e\x3c/div\x3e") : p(l.element).prepend('\x3cdiv id\x3d"cookie-bar"' + S + pa + "\x3e\x3cp\x3e" + I + A + D + N + "\x3c/p\x3e\x3c/div\x3e");
            var T = function(x) {
                l.acceptOnScroll && p(document).off("scroll");
                "function" === typeof x && x(F);
                "slide" == l.effect ? p("#cookie-bar").slideUp(300, function() {
                    p("#cookie-bar").remove()
                }) : "fade" == l.effect ? p("#cookie-bar").fadeOut(300, function() {
                    p("#cookie-bar").remove()
                }) : p("#cookie-bar").hide(0, function() {
                    p("#cookie-bar").remove()
                });
                p(document).unbind("click", wa)
            }
              , ia = function() {
                document.cookie = w.replace("{value}", "accepted");
                T(l.acceptFunction)
            }
              , wa = function(l) {
                p(l.target).hasClass("cb-policy") || ia()
            };
            p(document).on("click touchstart", "#cookie-bar .cb-enable", function(l) {
                l.preventDefault();
                ia();
                return !1
            });
            p(document).on("click touchstart", "#cookie-bar .cb-disable", function(p) {
                p.preventDefault();
                p = new Date;
                p.setTime(p.getTime() - 864E6);
                p = p.toGMTString();
                H = document.cookie.split("; ");
                for (L = 0; L < H.length; L++)
                    x = H[L].split("\x3d"),
                    0 <= x[0].indexOf("_") ? document.cookie = x[0] + "\x3d0; expires\x3d" + p + "; domain\x3d" + l.domain.replace("www", "") + "; path\x3d/" : document.cookie = x[0] + "\x3d0; expires\x3d" + p + "; path\x3d/";
                document.cookie = w.replace("{value}", "declined");
                T(l.declineFunction);
                return !1
            });
            if (l.acceptOnScroll) {
                var ha = p(document).scrollTop(), ca, M;
                p(document).on("scroll", function() {
                    ca = p(document).scrollTop();
                    M = ca > ha ? ca - ha : ha - ca;
                    M >= Math.round(l.acceptOnScroll) && ia()
                })
            }
            l.acceptAnyClick && p(document).bind("click", wa)
        } else
            return document.cookie = w.replace("{value}", I),
            "accepted" == I ? !0 : !1
    }
}
)(jQuery);
$(function() {
    function p(l, p, A) {
        A || (A = ",");
        _TempListFirstSplitArray = l.split(A);
        return _TempListFirstSplitArray[p - 1]
    }
    function l(l) {
        if ($(l).length) {
            var p = $(window).scrollTop()
              , x = p + $(window).height();
            l = $(l).offset().top;
            return l <= x && l >= p
        }
        return !1
    }
    function I() {
        $(".typedSectionHeading").each(function() {
            l($(this)) && $(this).addClass("goType")
        })
    }
    function A(l, w) {
        l || (l = 0);
        w || (w = "");
        $(".withSub,#customBurger").attr("aria-expanded", !1);
        var x = ""
          , F = 0;
        0 == l ? ($("#windowShade").hide(),
        $(".navLevel1,.navLevel2,.navLevel3,.navLevel4").removeClass("show"),
        $("a.navItem.withSub").removeClass("clicked"),
        $(document).unbind("keydown"),
        H = []) : 1 == l ? (992 > $(window).width() ? $("#windowShade").show() : $("#windowShade").hide(),
        $(".navLevel2,.navLevel3,.navLevel4").removeClass("show"),
        H = []) : 2 == l ? ($(".navLevel2,.navLevel3,.navLevel4").removeClass("show"),
        $(".navLevel1").css("height", "80px"),
        H = ["navMenu_1_MainMenu"]) : 3 == l ? ($(".navLevel3,.navLevel4").removeClass("show"),
        $(".navLevel1,.navLevel2").css("height", "80px"),
        H.length = 2) : 4 == l && ($(".navLevel4").removeClass("show"),
        $(".navLevel1,.navLevel2,.navLevel3").css("height", "80px"),
        H.length = 3);
        1 < l && $("#windowShade").show();
        if (0 < l) {
            $(w).addClass("show").css("height", "auto");
            $(w).children("a:first").focus();
            1 < l && (x = H[H.length - 1],
            F = p(x, 2, "_"));
            l = w.substr(1, w.length);
            H.push(l);
            for (l = 0; l < H.length; l++)
                $('[aria-controls\x3d"' + H[l] + '"]').attr("aria-expanded", !0);
            $(document).unbind("keydown");
            $(document).bind("keydown", function(l) {
                27 === l.keyCode && A(F, "#" + x)
            })
        }
    }
    function D() {
        $(".testimonialBlock").each(function() {
            if (!F) {
                var p = $(this)
                  , A = 0;
                $(p).children(".quotationBlock").each(function(l) {
                    var x = $(this);
                    $(x).height() > A && (A = $(x).height(),
                    $(p).height(A));
                    0 < l && $(x).removeClass("on")
                });
                F = !0
            }
            l($(this)) && w & !L && (L = !0,
            $("a.testimonialNav").each(function(l) {
                var p = $(this);
                setTimeout(function() {
                    $(p).click()
                }, 1E4 * (l + 1))
            }),
            w = !1)
        })
    }
    var w = !0
      , L = !1
      , F = !1
      , H = [];
    $(".customToggleTrigger").click(function() {
        $(this).hasClass("toggleOn") ? ($(this).removeClass("toggleOn"),
        $($(this).attr("myTarget")).collapse("hide")) : ($(this).addClass("toggleOn"),
        $($(this).attr("myTarget")).collapse("show"))
    });
    $("#customBurger").click(function() {
        A(1, "#navMenu_1_MainMenu")
    });
    $("#searchIconOutsideOfNav").click(function(l) {
        l.preventDefault();
        A(2, "#navMenu_2_Search")
    });
    $("#windowShade,.customCloser,#miniWindowShade").click(function() {
        A(0)
    });
    $("a.navItem.withSub").click(function(l) {
        l.preventDefault();
        l = p($(this).attr("aria-controls"), 2, "_");
        var x = l - 1
          , w = "#" + $(this).attr("aria-controls")
          , F = "#" + $(this).parent(".navMenuCard").prop("id");
        $("div.navLevel" + x + " a.navItem.withSub").removeClass("clicked");
        $(w).hasClass("show") ? A(x, F) : ($(this).addClass("clicked"),
        A(l, w))
    });
    $(".customBack").click(function() {
        var l = p($(this).attr("aria-controls"), 2, "_")
          , w = "#" + $(this).attr("aria-controls");
        $(this).parent(".navMenuCardTopper").parent(".navMenuCard").attr("id");
        A(l, w)
    });
    $(".testimonialNav").click(function(l) {
        l.preventDefault();
        $("a.testimonialNav").removeClass("on");
        $(this).addClass("on");
        l = "#" + $(this).attr("myTarget");
        $(".testimonialBlock .quotationBlock").removeClass("on");
        $(l).addClass("on")
    });
    $(window).scroll(function() {
        l("#homeWhatWeDoSection") && $("#homeWhatWeDoSection").addClass("slowZoom");
        I();
        D()
    });
    $(window).resize(function() {
        A(0, 0)
    });
    A(0, 0);
    I();
    D();
    $(".cardText").parent().addClass("d-flex flex-column align-items-start")
});
$(document).ready(function() {
    $.cookieBar({
        policyButton: !0
    });
    $(".video-placeholder").on("click", function() {
        var p = "https://www.youtube.com/embed/" + $(this).data("video-id") + "?autoplay\x3d1";
        p = $("\x3ciframe\x3e").attr("src", p).attr("width", "100%").attr("height", "600").attr("frameborder", "0").attr("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share").attr("allowfullscreen", !0);
        $(this).replaceWith(p)
    })
});
(function() {
    if (void 0 != $(".footer-copyright").attr("data-stock-url") || null != $(".footer-copyright").attr("data-stock-url")) {
        var p = $(".footer-copyright").attr("data-stock-url")
          , l = $("#stockPrice")
          , I = l.text();
        $.ajax({
            url: p,
            dataType: "html",
            crossOrigin: !0,
            error: function() {
                l.html(I + " [ N/A ]")
            },
            success: function(p) {
                l.html(I + " " + $(p).text())
            },
            type: "GET"
        })
    }
}
)();
(function() {
    function p(l) {
        var p = []
          , A = function(p, A) {
            var w = $(".tab-content__navigation-link", l).filter('[data-tab-id\x3d"' + p + '"]')
              , H = $(".tab-content__container", l).filter('[data-content-id\x3d"' + p + '"]')
              , x = $(".tab-content__accordion-link", l).filter('[data-accordion-id\x3d"' + p + '"]');
            $(".tab-content__navigation-link", l).removeClass("active");
            $(".tab-content__container", l).removeClass("active");
            $(".tab-content__accordion-link", l).removeClass("active");
            p && (w.addClass("active"),
            H.addClass("active"),
            x.addClass("active"),
            A && (0 < x.offset().top ? setTimeout(function() {
                $("html, body").animate({
                    scrollTop: x.offset().top
                }, 300)
            }, 500) : $("html, body").animate({
                scrollTop: l.offset().top
            }, 300)))
        }
          , D = function(w) {
            $(window).on("hashchange", function(l) {
                l.preventDefault();
                l = location.hash.slice(1);
                var w = $.inArray(l, p);
                "" !== l && -1 === w || A(l, !0);
                return !1
            });
            $(".tab-content__accordion-link", l).on("click", function(p) {
                if ($(this).attr("href") === location.hash || $(this).hasClass("active"))
                    p.preventDefault(),
                    p = $(window).scrollTop(),
                    window.location.hash = "",
                    $(window).scrollTop(p),
                    $(".tab-content__container", l).removeClass("active"),
                    $(".tab-content__accordion-link", l).removeClass("active")
            });
            w()
        };
        (function() {
            $(".tab-content__accordion-link", l).each(function(l, x) {
                p.push($(x).data("accordion-id"))
            });
            var w = location.hash.slice(1)
              , I = $.inArray(w, p)
              , F = $(".tab-content").data("closetabs");
            D(function() {
                -1 !== I ? A(w) : F || A(p[0])
            })
        }
        )()
    }
    $(".tab-content").each(function(l) {
        p($(this))
    })
}
)();
$(document).ready(function() {
    (function() {
        window.sajari = function(l, p, A) {
            function D() {
                var p = []
                  , w = function() {
                    p.push(arguments)
                };
                w.arr = p;
                l.sajari = l.sajari || {};
                l.sajari.ui = l.sajari.ui || [];
                l.sajari.ui.push(w);
                return w
            }
            var w = p.createElement("link");
            w.href = A;
            w.as = "script";
            w.rel = "preload";
            w.crossorigin = !0;
            var I = p.createElement("script");
            I.async = !0;
            I.src = A;
            p.head.appendChild(w);
            p.head.appendChild(I);
            p = D();
            p.init = function(l) {
                var p = D();
                p(l);
                return p
            }
            ;
            return p
        }(window, document, "//cdn.sajari.net/js/integrations/website-search-1.4.js")
    }
    )();
    var p = function(l) {
        return (l = (new RegExp("[?\x26]" + l.replace(/[\[\]]/g, "\\$\x26") + "(\x3d([^\x26#]*)|\x26|#|$)")).exec(window.location.href)) && l[2] ? decodeURIComponent(l[2].replace(/\+/g, " ")) : ""
    };
    sajari.init({
        mode: "search-box",
        project: "1515701582264101906",
        collection: "lockheedmartin-com",
        instantPipeline: "autocomplete",
        inputPlaceholder: "Search Lockheedmartin.com",
        maxSuggestions: 5,
        attachSearchBox: document.getElementById("lm-search"),
        inputVoiceToText: !0
    })("sub", "pipeline.search-sent", function(l, p) {
        window.location = "/en-us/search.html?q\x3d" + encodeURIComponent(p.q)
    });
    $(document).ready(function() {
        $("li.search a").click(function() {
            $("div.css-mcmwgi input").css({
                width: "250px"
            });
            $("#downshift-0-input").focus()
        })
    });
    $(document).ready(function() {
        $("#search-box").length && (sajari.init({
            mode: "inline",
            project: "1515701582264101906",
            collection: "lockheedmartin-com",
            pipeline: "website",
            instantPipeline: "autocomplete",
            inputVoiceToText: !0,
            attachSearchBox: document.getElementById("search-box"),
            attachSearchResponse: document.getElementById("search-response"),
            inputPlaceholder: "Search",
            inputAutoFocus: !1,
            maxSuggestions: 5,
            results: {
                showImages: !1
            },
            values: {
                "q.override": !0,
                resultsPerPage: "10",
                q: p("q")
            },
            tabFilters: null,
            styling: {
                theme: {
                    colors: {
                        brand: {
                            primary: "#333"
                        }
                    }
                }
            }
        })("sub", "pipeline.response-updated", function(l, p) {
            1100 > $("#search-box").width() ? ($("#search-callout").insertAfter($(".sj-summary")),
            $("#search-callout").css({
                width: "100%",
                "float": "none",
                "margin-left": "0px",
                "margin-top": "0px"
            }),
            $("#search-response").css({
                width: "100%",
                "float": "none"
            })) : ($("#search-callout").insertAfter($("#search-response")),
            $("#search-callout").css({
                width: "30%",
                "float": "right",
                "margin-left": "15px",
                "margin-top": "20px"
            }),
            $("#search-response").css({
                width: "60%",
                "float": "left"
            }));
            $("#search-callout").show()
        }),
        $(window).resize(function() {
            1100 > $("#search-box").width() ? ($("#search-callout").insertAfter($(".sj-summary")),
            $("#search-callout").css({
                width: "100%",
                "float": "none",
                "margin-left": "0px",
                "margin-top": "0px"
            }),
            $("#search-response").css({
                width: "100%",
                "float": "none"
            })) : ($("#search-callout").insertAfter($("#search-response")),
            $("#search-callout").css({
                width: "30%",
                "float": "right",
                "margin-left": "15px",
                "margin-top": "20px"
            }),
            $("#search-response").css({
                width: "60%",
                "float": "left"
            }));
            $("#search-callout").show()
        }));
        $("input[data-sj-search-query]").attr("aria-label", "search this site")
    })
});
