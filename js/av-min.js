! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AV = e() : t.AV = e() }(this, function() {
    return function(t) {
        function e(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports } var n = {}; return e.m = t, e.c = n, e.i = function(t) { return t }, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 35) }([function(t, e, n) { var r, i;
        (function() {
            function n(t) {
                function e(e, n, r, i, s, o) { for (; s >= 0 && s < o; s += t) { var a = i ? i[s] : s;
                        r = n(r, e[a], a, e) } return r } return function(n, r, i, s) { r = S(r, s, 4); var o = !x(n) && O.keys(n),
                        a = (o || n).length,
                        u = t > 0 ? 0 : a - 1; return arguments.length < 3 && (i = n[o ? o[u] : u], u += t), e(n, r, i, o, u, a) } }

            function s(t) { return function(e, n, r) { n = A(n, r); for (var i = j(e), s = t > 0 ? 0 : i - 1; s >= 0 && s < i; s += t)
                        if (n(e[s], s, e)) return s; return -1 } }

            function o(t, e, n) { return function(r, i, s) { var o = 0,
                        a = j(r); if ("number" == typeof s) t > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
                    else if (n && s && a) return s = n(r, i), r[s] === i ? s : -1; if (i !== i) return s = e(p.call(r, o, a), O.isNaN), s >= 0 ? s + o : -1; for (s = t > 0 ? o : a - 1; s >= 0 && s < a; s += t)
                        if (r[s] === i) return s; return -1 } }

            function a(t, e) { var n = P.length,
                    r = t.constructor,
                    i = O.isFunction(r) && r.prototype || h,
                    s = "constructor"; for (O.has(t, s) && !O.contains(e, s) && e.push(s); n--;)(s = P[n]) in t && t[s] !== i[s] && !O.contains(e, s) && e.push(s) } var u = this,
                c = u._,
                l = Array.prototype,
                h = Object.prototype,
                f = Function.prototype,
                d = l.push,
                p = l.slice,
                _ = h.toString,
                v = h.hasOwnProperty,
                m = Array.isArray,
                y = Object.keys,
                g = f.bind,
                b = Object.create,
                w = function() {},
                O = function(t) { return t instanceof O ? t : this instanceof O ? void(this._wrapped = t) : new O(t) };
            void 0 !== t && t.exports && (e = t.exports = O), e._ = O, O.VERSION = "1.8.3"; var S = function(t, e, n) { if (void 0 === e) return t; switch (null == n ? 3 : n) {
                        case 1:
                            return function(n) { return t.call(e, n) };
                        case 2:
                            return function(n, r) { return t.call(e, n, r) };
                        case 3:
                            return function(n, r, i) { return t.call(e, n, r, i) };
                        case 4:
                            return function(n, r, i, s) { return t.call(e, n, r, i, s) } } return function() { return t.apply(e, arguments) } },
                A = function(t, e, n) { return null == t ? O.identity : O.isFunction(t) ? S(t, e, n) : O.isObject(t) ? O.matcher(t) : O.property(t) };
            O.iteratee = function(t, e) { return A(t, e, 1 / 0) }; var E = function(t, e) { return function(n) { var r = arguments.length; if (r < 2 || null == n) return n; for (var i = 1; i < r; i++)
                            for (var s = arguments[i], o = t(s), a = o.length, u = 0; u < a; u++) { var c = o[u];
                                e && void 0 !== n[c] || (n[c] = s[c]) }
                        return n } },
                T = function(t) { if (!O.isObject(t)) return {}; if (b) return b(t);
                    w.prototype = t; var e = new w; return w.prototype = null, e },
                N = function(t) { return function(e) { return null == e ? void 0 : e[t] } },
                C = Math.pow(2, 53) - 1,
                j = N("length"),
                x = function(t) { var e = j(t); return "number" == typeof e && e >= 0 && e <= C };
            O.each = O.forEach = function(t, e, n) { e = S(e, n); var r, i; if (x(t))
                    for (r = 0, i = t.length; r < i; r++) e(t[r], r, t);
                else { var s = O.keys(t); for (r = 0, i = s.length; r < i; r++) e(t[s[r]], s[r], t) } return t }, O.map = O.collect = function(t, e, n) { e = A(e, n); for (var r = !x(t) && O.keys(t), i = (r || t).length, s = Array(i), o = 0; o < i; o++) { var a = r ? r[o] : o;
                    s[o] = e(t[a], a, t) } return s }, O.reduce = O.foldl = O.inject = n(1), O.reduceRight = O.foldr = n(-1), O.find = O.detect = function(t, e, n) { var r; if (void 0 !== (r = x(t) ? O.findIndex(t, e, n) : O.findKey(t, e, n)) && -1 !== r) return t[r] }, O.filter = O.select = function(t, e, n) { var r = []; return e = A(e, n), O.each(t, function(t, n, i) { e(t, n, i) && r.push(t) }), r }, O.reject = function(t, e, n) { return O.filter(t, O.negate(A(e)), n) }, O.every = O.all = function(t, e, n) { e = A(e, n); for (var r = !x(t) && O.keys(t), i = (r || t).length, s = 0; s < i; s++) { var o = r ? r[s] : s; if (!e(t[o], o, t)) return !1 } return !0 }, O.some = O.any = function(t, e, n) { e = A(e, n); for (var r = !x(t) && O.keys(t), i = (r || t).length, s = 0; s < i; s++) { var o = r ? r[s] : s; if (e(t[o], o, t)) return !0 } return !1 }, O.contains = O.includes = O.include = function(t, e, n, r) { return x(t) || (t = O.values(t)), ("number" != typeof n || r) && (n = 0), O.indexOf(t, e, n) >= 0 }, O.invoke = function(t, e) { var n = p.call(arguments, 2),
                    r = O.isFunction(e); return O.map(t, function(t) { var i = r ? e : t[e]; return null == i ? i : i.apply(t, n) }) }, O.pluck = function(t, e) { return O.map(t, O.property(e)) }, O.where = function(t, e) { return O.filter(t, O.matcher(e)) }, O.findWhere = function(t, e) { return O.find(t, O.matcher(e)) }, O.max = function(t, e, n) { var r, i, s = -1 / 0,
                    o = -1 / 0; if (null == e && null != t) { t = x(t) ? t : O.values(t); for (var a = 0, u = t.length; a < u; a++)(r = t[a]) > s && (s = r) } else e = A(e, n), O.each(t, function(t, n, r) {
                    ((i = e(t, n, r)) > o || i === -1 / 0 && s === -1 / 0) && (s = t, o = i) }); return s }, O.min = function(t, e, n) { var r, i, s = 1 / 0,
                    o = 1 / 0; if (null == e && null != t) { t = x(t) ? t : O.values(t); for (var a = 0, u = t.length; a < u; a++)(r = t[a]) < s && (s = r) } else e = A(e, n), O.each(t, function(t, n, r) {
                    ((i = e(t, n, r)) < o || i === 1 / 0 && s === 1 / 0) && (s = t, o = i) }); return s }, O.shuffle = function(t) { for (var e, n = x(t) ? t : O.values(t), r = n.length, i = Array(r), s = 0; s < r; s++) e = O.random(0, s), e !== s && (i[s] = i[e]), i[e] = n[s]; return i }, O.sample = function(t, e, n) { return null == e || n ? (x(t) || (t = O.values(t)), t[O.random(t.length - 1)]) : O.shuffle(t).slice(0, Math.max(0, e)) }, O.sortBy = function(t, e, n) { return e = A(e, n), O.pluck(O.map(t, function(t, n, r) { return { value: t, index: n, criteria: e(t, n, r) } }).sort(function(t, e) { var n = t.criteria,
                        r = e.criteria; if (n !== r) { if (n > r || void 0 === n) return 1; if (n < r || void 0 === r) return -1 } return t.index - e.index }), "value") }; var U = function(t) { return function(e, n, r) { var i = {}; return n = A(n, r), O.each(e, function(r, s) { var o = n(r, s, e);
                        t(i, r, o) }), i } };
            O.groupBy = U(function(t, e, n) { O.has(t, n) ? t[n].push(e) : t[n] = [e] }), O.indexBy = U(function(t, e, n) { t[n] = e }), O.countBy = U(function(t, e, n) { O.has(t, n) ? t[n]++ : t[n] = 1 }), O.toArray = function(t) { return t ? O.isArray(t) ? p.call(t) : x(t) ? O.map(t, O.identity) : O.values(t) : [] }, O.size = function(t) { return null == t ? 0 : x(t) ? t.length : O.keys(t).length }, O.partition = function(t, e, n) { e = A(e, n); var r = [],
                    i = []; return O.each(t, function(t, n, s) {
                    (e(t, n, s) ? r : i).push(t) }), [r, i] }, O.first = O.head = O.take = function(t, e, n) { if (null != t) return null == e || n ? t[0] : O.initial(t, t.length - e) }, O.initial = function(t, e, n) { return p.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e))) }, O.last = function(t, e, n) { if (null != t) return null == e || n ? t[t.length - 1] : O.rest(t, Math.max(0, t.length - e)) }, O.rest = O.tail = O.drop = function(t, e, n) { return p.call(t, null == e || n ? 1 : e) }, O.compact = function(t) { return O.filter(t, O.identity) }; var k = function(t, e, n, r) { for (var i = [], s = 0, o = r || 0, a = j(t); o < a; o++) { var u = t[o]; if (x(u) && (O.isArray(u) || O.isArguments(u))) { e || (u = k(u, e, n)); var c = 0,
                            l = u.length; for (i.length += l; c < l;) i[s++] = u[c++] } else n || (i[s++] = u) } return i };
            O.flatten = function(t, e) { return k(t, e, !1) }, O.without = function(t) { return O.difference(t, p.call(arguments, 1)) }, O.uniq = O.unique = function(t, e, n, r) { O.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = A(n, r)); for (var i = [], s = [], o = 0, a = j(t); o < a; o++) { var u = t[o],
                        c = n ? n(u, o, t) : u;
                    e ? (o && s === c || i.push(u), s = c) : n ? O.contains(s, c) || (s.push(c), i.push(u)) : O.contains(i, u) || i.push(u) } return i }, O.union = function() { return O.uniq(k(arguments, !0, !0)) }, O.intersection = function(t) { for (var e = [], n = arguments.length, r = 0, i = j(t); r < i; r++) { var s = t[r]; if (!O.contains(e, s)) { for (var o = 1; o < n && O.contains(arguments[o], s); o++);
                        o === n && e.push(s) } } return e }, O.difference = function(t) { var e = k(arguments, !0, !0, 1); return O.filter(t, function(t) { return !O.contains(e, t) }) }, O.zip = function() { return O.unzip(arguments) }, O.unzip = function(t) { for (var e = t && O.max(t, j).length || 0, n = Array(e), r = 0; r < e; r++) n[r] = O.pluck(t, r); return n }, O.object = function(t, e) { for (var n = {}, r = 0, i = j(t); r < i; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1]; return n }, O.findIndex = s(1), O.findLastIndex = s(-1), O.sortedIndex = function(t, e, n, r) { n = A(n, r, 1); for (var i = n(e), s = 0, o = j(t); s < o;) { var a = Math.floor((s + o) / 2);
                    n(t[a]) < i ? s = a + 1 : o = a } return s }, O.indexOf = o(1, O.findIndex, O.sortedIndex), O.lastIndexOf = o(-1, O.findLastIndex), O.range = function(t, e, n) { null == e && (e = t || 0, t = 0), n = n || 1; for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), s = 0; s < r; s++, t += n) i[s] = t; return i }; var I = function(t, e, n, r, i) { if (!(r instanceof e)) return t.apply(n, i); var s = T(t.prototype),
                    o = t.apply(s, i); return O.isObject(o) ? o : s };
            O.bind = function(t, e) { if (g && t.bind === g) return g.apply(t, p.call(arguments, 1)); if (!O.isFunction(t)) throw new TypeError("Bind must be called on a function"); var n = p.call(arguments, 2),
                    r = function() { return I(t, r, e, this, n.concat(p.call(arguments))) }; return r }, O.partial = function(t) { var e = p.call(arguments, 1),
                    n = function() { for (var r = 0, i = e.length, s = Array(i), o = 0; o < i; o++) s[o] = e[o] === O ? arguments[r++] : e[o]; for (; r < arguments.length;) s.push(arguments[r++]); return I(t, n, this, this, s) }; return n }, O.bindAll = function(t) { var e, n, r = arguments.length; if (r <= 1) throw new Error("bindAll must be passed function names"); for (e = 1; e < r; e++) n = arguments[e], t[n] = O.bind(t[n], t); return t }, O.memoize = function(t, e) { var n = function(r) { var i = n.cache,
                        s = "" + (e ? e.apply(this, arguments) : r); return O.has(i, s) || (i[s] = t.apply(this, arguments)), i[s] }; return n.cache = {}, n }, O.delay = function(t, e) { var n = p.call(arguments, 2); return setTimeout(function() { return t.apply(null, n) }, e) }, O.defer = O.partial(O.delay, O, 1), O.throttle = function(t, e, n) { var r, i, s, o = null,
                    a = 0;
                n || (n = {}); var u = function() { a = !1 === n.leading ? 0 : O.now(), o = null, s = t.apply(r, i), o || (r = i = null) }; return function() { var c = O.now();
                    a || !1 !== n.leading || (a = c); var l = e - (c - a); return r = this, i = arguments, l <= 0 || l > e ? (o && (clearTimeout(o), o = null), a = c, s = t.apply(r, i), o || (r = i = null)) : o || !1 === n.trailing || (o = setTimeout(u, l)), s } }, O.debounce = function(t, e, n) { var r, i, s, o, a, u = function() { var c = O.now() - o;
                    c < e && c >= 0 ? r = setTimeout(u, e - c) : (r = null, n || (a = t.apply(s, i), r || (s = i = null))) }; return function() { s = this, i = arguments, o = O.now(); var c = n && !r; return r || (r = setTimeout(u, e)), c && (a = t.apply(s, i), s = i = null), a } }, O.wrap = function(t, e) { return O.partial(e, t) }, O.negate = function(t) { return function() { return !t.apply(this, arguments) } }, O.compose = function() { var t = arguments,
                    e = t.length - 1; return function() { for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r); return r } }, O.after = function(t, e) { return function() { if (--t < 1) return e.apply(this, arguments) } }, O.before = function(t, e) { var n; return function() { return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n } }, O.once = O.partial(O.before, 2); var R = !{ toString: null }.propertyIsEnumerable("toString"),
                P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            O.keys = function(t) { if (!O.isObject(t)) return []; if (y) return y(t); var e = []; for (var n in t) O.has(t, n) && e.push(n); return R && a(t, e), e }, O.allKeys = function(t) { if (!O.isObject(t)) return []; var e = []; for (var n in t) e.push(n); return R && a(t, e), e }, O.values = function(t) { for (var e = O.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]]; return r }, O.mapObject = function(t, e, n) { e = A(e, n); for (var r, i = O.keys(t), s = i.length, o = {}, a = 0; a < s; a++) r = i[a], o[r] = e(t[r], r, t); return o }, O.pairs = function(t) { for (var e = O.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = [e[i], t[e[i]]]; return r }, O.invert = function(t) { for (var e = {}, n = O.keys(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r]; return e }, O.functions = O.methods = function(t) { var e = []; for (var n in t) O.isFunction(t[n]) && e.push(n); return e.sort() }, O.extend = E(O.allKeys), O.extendOwn = O.assign = E(O.keys), O.findKey = function(t, e, n) { e = A(e, n); for (var r, i = O.keys(t), s = 0, o = i.length; s < o; s++)
                    if (r = i[s], e(t[r], r, t)) return r }, O.pick = function(t, e, n) { var r, i, s = {},
                    o = t; if (null == o) return s;
                O.isFunction(e) ? (i = O.allKeys(o), r = S(e, n)) : (i = k(arguments, !1, !1, 1), r = function(t, e, n) { return e in n }, o = Object(o)); for (var a = 0, u = i.length; a < u; a++) { var c = i[a],
                        l = o[c];
                    r(l, c, o) && (s[c] = l) } return s }, O.omit = function(t, e, n) { if (O.isFunction(e)) e = O.negate(e);
                else { var r = O.map(k(arguments, !1, !1, 1), String);
                    e = function(t, e) { return !O.contains(r, e) } } return O.pick(t, e, n) }, O.defaults = E(O.allKeys, !0), O.create = function(t, e) { var n = T(t); return e && O.extendOwn(n, e), n }, O.clone = function(t) { return O.isObject(t) ? O.isArray(t) ? t.slice() : O.extend({}, t) : t }, O.tap = function(t, e) { return e(t), t }, O.isMatch = function(t, e) { var n = O.keys(e),
                    r = n.length; if (null == t) return !r; for (var i = Object(t), s = 0; s < r; s++) { var o = n[s]; if (e[o] !== i[o] || !(o in i)) return !1 } return !0 }; var D = function(t, e, n, r) { if (t === e) return 0 !== t || 1 / t == 1 / e; if (null == t || null == e) return t === e;
                t instanceof O && (t = t._wrapped), e instanceof O && (e = e._wrapped); var i = _.call(t); if (i !== _.call(e)) return !1; switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t == +e } var s = "[object Array]" === i; if (!s) { if ("object" != typeof t || "object" != typeof e) return !1; var o = t.constructor,
                        a = e.constructor; if (o !== a && !(O.isFunction(o) && o instanceof o && O.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1 } n = n || [], r = r || []; for (var u = n.length; u--;)
                    if (n[u] === t) return r[u] === e; if (n.push(t), r.push(e), s) { if ((u = t.length) !== e.length) return !1; for (; u--;)
                        if (!D(t[u], e[u], n, r)) return !1 } else { var c, l = O.keys(t); if (u = l.length, O.keys(e).length !== u) return !1; for (; u--;)
                        if (c = l[u], !O.has(e, c) || !D(t[c], e[c], n, r)) return !1 } return n.pop(), r.pop(), !0 };
            O.isEqual = function(t, e) { return D(t, e) }, O.isEmpty = function(t) { return null == t || (x(t) && (O.isArray(t) || O.isString(t) || O.isArguments(t)) ? 0 === t.length : 0 === O.keys(t).length) }, O.isElement = function(t) { return !(!t || 1 !== t.nodeType) }, O.isArray = m || function(t) { return "[object Array]" === _.call(t) }, O.isObject = function(t) { var e = typeof t; return "function" === e || "object" === e && !!t }, O.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) { O["is" + t] = function(e) { return _.call(e) === "[object " + t + "]" } }), O.isArguments(arguments) || (O.isArguments = function(t) { return O.has(t, "callee") }), "function" != typeof /./ && "object" != typeof Int8Array && (O.isFunction = function(t) { return "function" == typeof t || !1 }), O.isFinite = function(t) { return isFinite(t) && !isNaN(parseFloat(t)) }, O.isNaN = function(t) { return O.isNumber(t) && t !== +t }, O.isBoolean = function(t) { return !0 === t || !1 === t || "[object Boolean]" === _.call(t) }, O.isNull = function(t) { return null === t }, O.isUndefined = function(t) { return void 0 === t }, O.has = function(t, e) { return null != t && v.call(t, e) }, O.noConflict = function() { return u._ = c, this }, O.identity = function(t) { return t }, O.constant = function(t) { return function() { return t } }, O.noop = function() {}, O.property = N, O.propertyOf = function(t) { return null == t ? function() {} : function(e) { return t[e] } }, O.matcher = O.matches = function(t) { return t = O.extendOwn({}, t),
                    function(e) { return O.isMatch(e, t) } }, O.times = function(t, e, n) { var r = Array(Math.max(0, t));
                e = S(e, n, 1); for (var i = 0; i < t; i++) r[i] = e(i); return r }, O.random = function(t, e) { return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1)) }, O.now = Date.now || function() { return (new Date).getTime() }; var L = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                q = O.invert(L),
                M = function(t) { var e = function(e) { return t[e] },
                        n = "(?:" + O.keys(t).join("|") + ")",
                        r = RegExp(n),
                        i = RegExp(n, "g"); return function(t) { return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t } };
            O.escape = M(L), O.unescape = M(q), O.result = function(t, e, n) { var r = null == t ? void 0 : t[e]; return void 0 === r && (r = n), O.isFunction(r) ? r.call(t) : r }; var F = 0;
            O.uniqueId = function(t) { var e = ++F + ""; return t ? t + e : e }, O.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var J = /(.)^/,
                B = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                Q = /\\|'|\r|\n|\u2028|\u2029/g,
                V = function(t) { return "\\" + B[t] };
            O.template = function(t, e, n) {!e && n && (e = n), e = O.defaults({}, e, O.templateSettings); var r = RegExp([(e.escape || J).source, (e.interpolate || J).source, (e.evaluate || J).source].join("|") + "|$", "g"),
                    i = 0,
                    s = "__p+='";
                t.replace(r, function(e, n, r, o, a) { return s += t.slice(i, a).replace(Q, V), i = a + e.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), e }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n"; try { var o = new Function(e.variable || "obj", "_", s) } catch (t) { throw t.source = s, t } var a = function(t) { return o.call(this, t, O) }; return a.source = "function(" + (e.variable || "obj") + "){\n" + s + "}", a }, O.chain = function(t) { var e = O(t); return e._chain = !0, e }; var W = function(t, e) { return t._chain ? O(e).chain() : e };
            O.mixin = function(t) { O.each(O.functions(t), function(e) { var n = O[e] = t[e];
                    O.prototype[e] = function() { var t = [this._wrapped]; return d.apply(t, arguments), W(this, n.apply(O, t)) } }) }, O.mixin(O), O.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) { var e = l[t];
                O.prototype[t] = function() { var n = this._wrapped; return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], W(this, n) } }), O.each(["concat", "join", "slice"], function(t) { var e = l[t];
                O.prototype[t] = function() { return W(this, e.apply(this._wrapped, arguments)) } }), O.prototype.value = function() { return this._wrapped }, O.prototype.valueOf = O.prototype.toJSON = O.prototype.value, O.prototype.toString = function() { return "" + this._wrapped }, r = [], void 0 !== (i = function() { return O }.apply(e, r)) && (t.exports = i) }).call(this) }, function(t, e, n) { "use strict"; var r = (n(0), n(46).Promise);
        r._continueWhile = function(t, e) { return t() ? e().then(function() { return r._continueWhile(t, e) }) : r.resolve() }, t.exports = r }, function(t, e, n) { "use strict"; var r = n(50),
            i = n(0),
            s = i.extend,
            o = n(1),
            a = n(4),
            u = n(5),
            c = n(3),
            l = c.getSessionToken,
            h = c.ajax,
            f = function(t, e) { var n = (new Date).getTime(),
                    i = r(n + t); return e ? i + "," + n + ",master" : i + "," + n },
            d = function(t, e) { e ? t["X-LC-Sign"] = f(u.applicationKey) : t["X-LC-Key"] = u.applicationKey },
            p = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments[1],
                    n = { "X-LC-Id": u.applicationId, "Content-Type": "application/json;charset=UTF-8" },
                    r = !1; return "boolean" == typeof t.useMasterKey ? r = t.useMasterKey : "boolean" == typeof u._config.useMasterKey && (r = u._config.useMasterKey), r ? u.masterKey ? e ? n["X-LC-Sign"] = f(u.masterKey, !0) : n["X-LC-Key"] = u.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), d(n, e)) : d(n, e), u.hookKey && (n["X-LC-Hook-Key"] = u.hookKey), null !== u._config.production && (n["X-LC-Prod"] = String(u._config.production)), n["X-LC-UA"] = u._sharedConfig.userAgent, o.resolve().then(function() { var e = l(t); if (e) n["X-LC-Session"] = e;
                    else if (!u._config.disableCurrentUser) return u.User.currentAsync().then(function(t) { return t && t._sessionToken && (n["X-LC-Session"] = t._sessionToken), n }); return n }) },
            _ = function(t) { var e = t.service,
                    n = void 0 === e ? "api" : e,
                    r = t.version,
                    i = void 0 === r ? "1.1" : r,
                    s = t.path,
                    o = u._config.serverURLs[n]; if (!o) throw new Error("undefined server URL for " + n); return "/" !== o.charAt(o.length - 1) && (o += "/"), o += i, s && (o += s), o },
            v = function(t) { return new o(function(e, n) { var r = { code: t.code || -1, error: t.message || t.responseText }; if (t.response && t.response.code) r = t.response;
                    else if (t.responseText) try { r = JSON.parse(t.responseText) } catch (t) {} n(new a(r.code, r.error)) }) },
            m = function(t) { var e = t.service,
                    n = t.version,
                    r = t.method,
                    i = t.path,
                    s = t.query,
                    o = t.data,
                    a = void 0 === o ? {} : o,
                    c = t.authOptions,
                    l = t.signKey,
                    f = void 0 === l || l; if (!u.applicationId || !u.applicationKey && !u.masterKey) throw new Error("Not initialized");
                u._appRouter.refresh(); var d = _({ service: e, path: i, version: n }); return p(c, f).then(function(t) { return h({ method: r, url: d, query: s, data: a, headers: t }).catch(v) }) },
            y = function(t, e, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    o = arguments[5],
                    a = arguments[6],
                    u = ""; if (t && (u += "/" + t), e && (u += "/" + e), n && (u += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query"); if (i && i._where) throw new Error("_where should be in the query"); return r && "get" === r.toLowerCase() && (a = s({}, a, i), i = null), m({ method: r, path: u, query: a, data: i, authOptions: o }) };
        u.request = m, t.exports = { _request: y, request: m } }, function(t, e, n) { "use strict";

        function r(t) { var e = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
                n = e.exec(t); if (!n) return null; var r = n[1] || 0,
                i = (n[2] || 1) - 1,
                s = n[3] || 0,
                o = n[4] || 0,
                a = n[5] || 0,
                u = n[6] || 0,
                c = n[8] || 0; return new Date(Date.UTC(r, i, s, o, a, u, c)) } var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            s = n(0),
            o = n(7),
            a = n(6)("leancloud:request"),
            u = n(1),
            c = 0,
            l = function(t) { var e = t.method,
                    n = t.url,
                    r = t.query,
                    s = t.data,
                    l = t.headers,
                    h = void 0 === l ? {} : l,
                    f = t.onprogress,
                    d = c++;
                a("request(" + d + ")", e, n, r, s, h); var p = {}; if (r)
                    for (var _ in r) "object" === i(r[_]) ? p[_] = JSON.stringify(r[_]) : p[_] = r[_]; return new u(function(t, r) { var i = o(e, n).set(h).query(p).send(s);
                    f && i.on("progress", f), i.end(function(e, n) { return n && a("response(" + d + ")", n.status, n.body || n.text, n.header), e ? (n && (e.statusCode = n.status, e.responseText = n.text, e.response = n.body), r(e)) : t(n.body) }) }) },
            h = function(t) { return s.isNull(t) || s.isUndefined(t) },
            f = function(t) { return s.isArray(t) ? t : void 0 === t || null === t ? [] : [t] },
            d = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.keys,
                    n = t.include,
                    r = t.includeACL,
                    i = {}; return e && (i.keys = f(e).join(",")), n && (i.include = f(n).join(",")), r && (i.returnACL = r), i },
            p = function(t) { return t.sessionToken ? t.sessionToken : t.user && "function" == typeof t.user.getSessionToken ? t.user.getSessionToken() : void 0 },
            _ = function(t) { return function(e) { return t(e), e } },
            v = function() {},
            m = function(t, e, n) { var r; return r = e && e.hasOwnProperty("constructor") ? e.constructor : function() { t.apply(this, arguments) }, s.extend(r, t), v.prototype = t.prototype, r.prototype = new v, e && s.extend(r.prototype, e), n && s.extend(r, n), r.prototype.constructor = r, r.__super__ = t.prototype, r };
        t.exports = { ajax: l, isNullOrUndefined: h, ensureArray: f, transformFetchOptions: d, getSessionToken: p, tap: _, inherits: m, parseDate: r } }, function(t, e, n) { "use strict";

        function r(t, e) { var n = new Error(e); return n.code = t, n } n(0).extend(r, { OTHER_CAUSE: -1, INTERNAL_SERVER_ERROR: 1, CONNECTION_FAILED: 100, OBJECT_NOT_FOUND: 101, INVALID_QUERY: 102, INVALID_CLASS_NAME: 103, MISSING_OBJECT_ID: 104, INVALID_KEY_NAME: 105, INVALID_POINTER: 106, INVALID_JSON: 107, COMMAND_UNAVAILABLE: 108, NOT_INITIALIZED: 109, INCORRECT_TYPE: 111, INVALID_CHANNEL_NAME: 112, PUSH_MISCONFIGURED: 115, OBJECT_TOO_LARGE: 116, OPERATION_FORBIDDEN: 119, CACHE_MISS: 120, INVALID_NESTED_KEY: 121, INVALID_FILE_NAME: 122, INVALID_ACL: 123, TIMEOUT: 124, INVALID_EMAIL_ADDRESS: 125, MISSING_CONTENT_TYPE: 126, MISSING_CONTENT_LENGTH: 127, INVALID_CONTENT_LENGTH: 128, FILE_TOO_LARGE: 129, FILE_SAVE_ERROR: 130, FILE_DELETE_ERROR: 153, DUPLICATE_VALUE: 137, INVALID_ROLE_NAME: 139, EXCEEDED_QUOTA: 140, SCRIPT_FAILED: 141, VALIDATION_ERROR: 142, INVALID_IMAGE_DATA: 150, UNSAVED_FILE_ERROR: 151, INVALID_PUSH_TIME_ERROR: 152, USERNAME_MISSING: 200, PASSWORD_MISSING: 201, USERNAME_TAKEN: 202, EMAIL_TAKEN: 203, EMAIL_MISSING: 204, EMAIL_NOT_FOUND: 205, SESSION_MISSING: 206, MUST_CREATE_USER_THROUGH_SIGNUP: 207, ACCOUNT_ALREADY_LINKED: 208, LINKED_ID_MISSING: 250, INVALID_LINKED_SESSION: 251, UNSUPPORTED_SERVICE: 252, X_DOMAIN_REQUEST: 602 }), t.exports = r }, function(t, e, n) { "use strict";
        (function(e) { var r = n(0),
                i = n(37),
                s = n(3),
                o = s.inherits,
                a = s.parseDate,
                u = e.AV || {};
            u._config = { serverURLs: {}, useMasterKey: !1, production: null, realtime: null }, u._sharedConfig = { userAgent: i, liveQueryRealtime: null }, u._getAVPath = function(t) { if (!u.applicationId) throw new Error("You need to call AV.initialize before using AV."); if (t || (t = ""), !r.isString(t)) throw new Error("Tried to get a localStorage path that wasn't a String."); return "/" === t[0] && (t = t.substring(1)), "AV/" + u.applicationId + "/" + t }; var c = function() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) },
                l = function() { return "" + c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c() };
            u._installationId = null, u._getInstallationId = function() { if (u._installationId) return u.Promise.resolve(u._installationId); var t = u._getAVPath("installationId"); return u.localStorage.getItemAsync(t).then(function(e) { return u._installationId = e, u._installationId ? e : (u._installationId = e = l(), u.localStorage.setItemAsync(t, e).then(function() { return e })) }) }, u._subscriptionId = null, u._refreshSubscriptionId = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u._getAVPath("subscriptionId"),
                    e = u._subscriptionId = l(); return u.localStorage.setItemAsync(t, e).then(function() { return e }) }, u._getSubscriptionId = function() { if (u._subscriptionId) return u.Promise.resolve(u._subscriptionId); var t = u._getAVPath("subscriptionId"); return u.localStorage.getItemAsync(t).then(function(e) { return u._subscriptionId = e, u._subscriptionId || (e = u._refreshSubscriptionId(t)), e }) }, u._parseDate = a, u._extend = function(t, e) { var n = o(this, t, e); return n.extend = this.extend, n }, u._encode = function(t, e, n) { var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]; if (t instanceof u.Object) { if (n) throw new Error("AV.Objects not allowed here"); return e && !r.include(e, t) && t._hasData ? t._toFullJSON(e.concat(t), i) : t._toPointer() } if (t instanceof u.ACL) return t.toJSON(); if (r.isDate(t)) return i ? { __type: "Date", iso: t.toJSON() } : t.toJSON(); if (t instanceof u.GeoPoint) return t.toJSON(); if (r.isArray(t)) return r.map(t, function(t) { return u._encode(t, e, n, i) }); if (r.isRegExp(t)) return t.source; if (t instanceof u.Relation) return t.toJSON(); if (t instanceof u.Op) return t.toJSON(); if (t instanceof u.File) { if (!t.url() && !t.id) throw new Error("Tried to save an object containing an unsaved file."); return t._toFullJSON(e, i) } return r.isObject(t) ? r.mapObject(t, function(t, r) { return u._encode(t, e, n, i) }) : t }, u._decode = function(t, e) { if (!r.isObject(t) || r.isDate(t)) return t; if (r.isArray(t)) return r.map(t, function(t) { return u._decode(t) }); if (t instanceof u.Object) return t; if (t instanceof u.File) return t; if (t instanceof u.Op) return t; if (t instanceof u.GeoPoint) return t; if (t instanceof u.ACL) return t; if ("ACL" === e) return new u.ACL(t); if (t.__op) return u.Op._decode(t); var n; if ("Pointer" === t.__type) { n = t.className; var i = u.Object._create(n); if (Object.keys(t).length > 3) { var s = r.clone(t);
                        delete s.__type, delete s.className, i._finishFetch(s, !0) } else i._finishFetch({ objectId: t.objectId }, !1); return i } if ("Object" === t.__type) { n = t.className; var o = r.clone(t);
                    delete o.__type, delete o.className; var a = u.Object._create(n); return a._finishFetch(o, !0), a } if ("Date" === t.__type) return u._parseDate(t.iso); if ("GeoPoint" === t.__type) return new u.GeoPoint({ latitude: t.latitude, longitude: t.longitude }); if ("Relation" === t.__type) { if (!e) throw new Error("key missing decoding a Relation"); var c = new u.Relation(null, e); return c.targetClassName = t.className, c } if ("File" === t.__type) { var l = new u.File(t.name),
                        h = r.clone(t); return delete h.__type, l._finishFetch(h), l } return r.mapObject(t, u._decode) }, u.parseJSON = u._decode, u._encodeObjectOrArray = function(t) { var e = function(t) { return t && t._toFullJSON && (t = t._toFullJSON([])), r.mapObject(t, function(t) { return u._encode(t, []) }) }; return r.isArray(t) ? t.map(function(t) { return e(t) }) : e(t) }, u._arrayEach = r.each, u._traverse = function(t, e, n) { if (t instanceof u.Object) { if (n = n || [], r.indexOf(n, t) >= 0) return; return n.push(t), u._traverse(t.attributes, e, n), e(t) } return t instanceof u.Relation || t instanceof u.File ? e(t) : r.isArray(t) ? (r.each(t, function(r, i) { var s = u._traverse(r, e, n);
                    s && (t[i] = s) }), e(t)) : r.isObject(t) ? (u._each(t, function(r, i) { var s = u._traverse(r, e, n);
                    s && (t[i] = s) }), e(t)) : e(t) }, u._objectEach = u._each = function(t, e) { r.isObject(t) ? r.each(r.keys(t), function(n) { e(t[n], n) }) : r.each(t, e) }, t.exports = u }).call(e, n(9)) }, function(t, e, n) {
        function r() { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)) }

        function i(t) { var n = this.useColors; if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) { var r = "color: " + this.color;
                t.splice(1, 0, r, "color: inherit"); var i = 0,
                    s = 0;
                t[0].replace(/%[a-zA-Z%]/g, function(t) { "%%" !== t && (i++, "%c" === t && (s = i)) }), t.splice(s, 0, r) } }

        function s() { return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments) }

        function o(t) { try { null == t ? e.storage.removeItem("debug") : e.storage.debug = t } catch (t) {} }

        function a() { var t; try { t = e.storage.debug } catch (t) {} return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t } e = t.exports = n(45), e.log = s, e.formatArgs = i, e.save = o, e.load = a, e.useColors = r, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() { try { return window.localStorage } catch (t) {} }(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function(t) { try { return JSON.stringify(t) } catch (t) { return "[UnexpectedJSONParseError]: " + t.message } }, e.enable(a()) }, function(t, e, n) {
        function r() {}

        function i(t) { if (!_(t)) return t; var e = []; for (var n in t) s(e, n, t[n]); return e.join("&") }

        function s(t, e, n) { if (null != n)
                if (Array.isArray(n)) n.forEach(function(n) { s(t, e, n) });
                else if (_(n))
                for (var r in n) s(t, e + "[" + r + "]", n[r]);
            else t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n));
            else null === n && t.push(encodeURIComponent(e)) }

        function o(t) { for (var e, n, r = {}, i = t.split("&"), s = 0, o = i.length; s < o; ++s) e = i[s], n = e.indexOf("="), -1 == n ? r[decodeURIComponent(e)] = "" : r[decodeURIComponent(e.slice(0, n))] = decodeURIComponent(e.slice(n + 1)); return r }

        function a(t) { var e, n, r, i, s = t.split(/\r?\n/),
                o = {};
            s.pop(); for (var a = 0, u = s.length; a < u; ++a) n = s[a], e = n.indexOf(":"), r = n.slice(0, e).toLowerCase(), i = b(n.slice(e + 1)), o[r] = i; return o }

        function u(t) { return /[\/+]json\b/.test(t) }

        function c(t) { this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText; var e = this.xhr.status;
            1223 === e && (e = 204), this._setStatusProperties(e), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null }

        function l(t, e) { var n = this;
            this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function() { var t = null,
                    e = null; try { e = new c(n) } catch (e) { return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t) } n.emit("response", e); var r; try { n._isResponseOK(e) || (r = new Error(e.statusText || "Unsuccessful HTTP response"), r.original = t, r.response = e, r.status = e.status) } catch (t) { r = t } r ? n.callback(r, e) : n.callback(null, e) }) }

        function h(t, e, n) { var r = g("DELETE", t); return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r } var f; "undefined" != typeof window ? f = window : "undefined" != typeof self ? f = self : (console.warn("Using browser-only version of superagent in non-browser environment"), f = this); var d = n(43),
            p = n(53),
            _ = n(8),
            v = n(52),
            m = n(54),
            y = n(55),
            g = e = t.exports = function(t, n) { return "function" == typeof n ? new e.Request("GET", t).end(n) : 1 == arguments.length ? new e.Request("GET", t) : new e.Request(t, n) };
        e.Request = l, g.getXHR = function() { if (!(!f.XMLHttpRequest || f.location && "file:" == f.location.protocol && f.ActiveXObject)) return new XMLHttpRequest; try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} try { return new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch (t) {} try { return new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch (t) {} try { return new ActiveXObject("Msxml2.XMLHTTP") } catch (t) {} throw Error("Browser-only verison of superagent could not find XHR") }; var b = "".trim ? function(t) { return t.trim() } : function(t) { return t.replace(/(^\s*|\s*$)/g, "") };
        g.serializeObject = i, g.parseString = o, g.types = { html: "text/html", json: "application/json", xml: "application/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" }, g.serialize = { "application/x-www-form-urlencoded": i, "application/json": JSON.stringify }, g.parse = { "application/x-www-form-urlencoded": o, "application/json": JSON.parse }, m(c.prototype), c.prototype._parseBody = function(t) { var e = g.parse[this.type]; return this.req._parser ? this.req._parser(this, t) : (!e && u(this.type) && (e = g.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null) }, c.prototype.toError = function() { var t = this.req,
                e = t.method,
                n = t.url,
                r = "cannot " + e + " " + n + " (" + this.status + ")",
                i = new Error(r); return i.status = this.status, i.method = e, i.url = n, i }, g.Response = c, d(l.prototype), p(l.prototype), l.prototype.type = function(t) { return this.set("Content-Type", g.types[t] || t), this }, l.prototype.accept = function(t) { return this.set("Accept", g.types[t] || t), this }, l.prototype.auth = function(t, e, n) { switch ("object" == typeof e && null !== e && (n = e), n || (n = { type: "function" == typeof btoa ? "basic" : "auto" }), n.type) {
                case "basic":
                    this.set("Authorization", "Basic " + btoa(t + ":" + e)); break;
                case "auto":
                    this.username = t, this.password = e; break;
                case "bearer":
                    this.set("Authorization", "Bearer " + t) } return this }, l.prototype.query = function(t) { return "string" != typeof t && (t = i(t)), t && this._query.push(t), this }, l.prototype.attach = function(t, e, n) { if (e) { if (this._data) throw Error("superagent can't mix .send() and .attach()");
                this._getFormData().append(t, e, n || e.name) } return this }, l.prototype._getFormData = function() { return this._formData || (this._formData = new f.FormData), this._formData }, l.prototype.callback = function(t, e) { if (this._maxRetries && this._retries++ < this._maxRetries && y(t, e)) return this._retry(); var n = this._callback;
            this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), n(t, e) }, l.prototype.crossDomainError = function() { var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
            t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t) }, l.prototype.buffer = l.prototype.ca = l.prototype.agent = function() { return console.warn("This is not supported in browser version of superagent"), this }, l.prototype.pipe = l.prototype.write = function() { throw Error("Streaming is not supported in browser version of superagent") }, l.prototype._appendQueryString = function() { var t = this._query.join("&"); if (t && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + t), this._sort) { var e = this.url.indexOf("?"); if (e >= 0) { var n = this.url.substring(e + 1).split("&");
                    v(this._sort) ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, e) + "?" + n.join("&") } } }, l.prototype._isHost = function(t) { return t && "object" == typeof t && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t) }, l.prototype.end = function(t) { return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || r, this._appendQueryString(), this._end() }, l.prototype._end = function() { var t = this,
                e = this.xhr = g.getXHR(),
                n = this._formData || this._data;
            this._setTimeouts(), e.onreadystatechange = function() { var n = e.readyState; if (n >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 == n) { var r; try { r = e.status } catch (t) { r = 0 } if (!r) { if (t.timedout || t._aborted) return; return t.crossDomainError() } t.emit("end") } }; var r = function(e, n) { n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = e, t.emit("progress", n) }; if (this.hasListeners("progress")) try { e.onprogress = r.bind(null, "download"), e.upload && (e.upload.onprogress = r.bind(null, "upload")) } catch (t) {}
            try { this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0) } catch (t) { return this.callback(t) } if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) { var i = this._header["content-type"],
                    s = this._serializer || g.serialize[i ? i.split(";")[0] : ""];!s && u(i) && (s = g.serialize["application/json"]), s && (n = s(n)) } for (var o in this.header) null != this.header[o] && this.header.hasOwnProperty(o) && e.setRequestHeader(o, this.header[o]); return this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 !== n ? n : null), this }, g.get = function(t, e, n) { var r = g("GET", t); return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r }, g.head = function(t, e, n) { var r = g("HEAD", t); return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r }, g.options = function(t, e, n) { var r = g("OPTIONS", t); return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r }, g.del = h, g.delete = h, g.patch = function(t, e, n) { var r = g("PATCH", t); return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r }, g.post = function(t, e, n) { var r = g("POST", t); return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r }, g.put = function(t, e, n) { var r = g("PUT", t); return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r } }, function(t, e) {
        function n(t) { return null !== t && "object" == typeof t } t.exports = n }, function(t, e) { var n;
        n = function() { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) } t.exports = n }, function(t, e, n) { "use strict"; var r = n(11),
            i = n(5),
            s = e.removeAsync = r.removeItemAsync.bind(r),
            o = function(t, e) { try { t = JSON.parse(t) } catch (t) { return null } if (t) { return t.expiredAt && t.expiredAt < Date.now() ? s(e).then(function() { return null }) : t.value } return null };
        e.getAsync = function(t) { return t = "AV/" + i.applicationId + "/" + t, r.getItemAsync(t).then(function(e) { return o(e, t) }) }, e.setAsync = function(t, e, n) { var s = { value: e }; return "number" == typeof n && (s.expiredAt = Date.now() + n), r.setItemAsync("AV/" + i.applicationId + "/" + t, JSON.stringify(s)) } }, function(t, e, n) { "use strict"; var r = n(0),
            i = n(1),
            s = n(41),
            o = ["getItem", "setItem", "removeItem", "clear"];
        s.async ? r(o).each(function(t) { "function" != typeof s[t] && (s[t] = function() { var e = new Error("Synchronous API [" + t + "] is not available in this runtime."); throw e.code = "SYNC_API_NOT_AVAILABLE", e }) }) : r(o).each(function(t) { "function" == typeof s[t] && (s[t + "Async"] = function() { return i.resolve(s[t].apply(s, arguments)) }) }), t.exports = s }, function(t, e, n) { "use strict";
        t.exports = "3.0.4" }, function(t, e) { var n = { utf8: { stringToBytes: function(t) { return n.bin.stringToBytes(unescape(encodeURIComponent(t))) }, bytesToString: function(t) { return decodeURIComponent(escape(n.bin.bytesToString(t))) } }, bin: { stringToBytes: function(t) { for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n)); return e }, bytesToString: function(t) { for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n])); return e.join("") } } };
        t.exports = n }, function(t, e, n) { "use strict"; var r = n(0);
        t.exports = function(t) { t.ACL = function(e) { var n = this; if (n.permissionsById = {}, r.isObject(e))
                    if (e instanceof t.User) n.setReadAccess(e, !0), n.setWriteAccess(e, !0);
                    else { if (r.isFunction(e)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
                        t._objectEach(e, function(e, i) { if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
                            n.permissionsById[i] = {}, t._objectEach(e, function(t, e) { if ("read" !== e && "write" !== e) throw new Error("Tried to create an ACL with an invalid permission type."); if (!r.isBoolean(t)) throw new Error("Tried to create an ACL with an invalid permission value.");
                                n.permissionsById[i][e] = t }) }) } }, t.ACL.prototype.toJSON = function() { return r.clone(this.permissionsById) }, t.ACL.prototype._setAccess = function(e, n, i) { if (n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string."); if (!r.isBoolean(i)) throw new Error("allowed must be either true or false."); var s = this.permissionsById[n]; if (!s) { if (!i) return;
                    s = {}, this.permissionsById[n] = s } i ? this.permissionsById[n][e] = !0 : (delete s[e], r.isEmpty(s) && delete this.permissionsById[n]) }, t.ACL.prototype._getAccess = function(e, n) { n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName()); var r = this.permissionsById[n]; return !!r && !!r[e] }, t.ACL.prototype.setReadAccess = function(t, e) { this._setAccess("read", t, e) }, t.ACL.prototype.getReadAccess = function(t) { return this._getAccess("read", t) }, t.ACL.prototype.setWriteAccess = function(t, e) { this._setAccess("write", t, e) }, t.ACL.prototype.getWriteAccess = function(t) { return this._getAccess("write", t) }, t.ACL.prototype.setPublicReadAccess = function(t) { this.setReadAccess("*", t) }, t.ACL.prototype.getPublicReadAccess = function() { return this.getReadAccess("*") }, t.ACL.prototype.setPublicWriteAccess = function(t) { this.setWriteAccess("*", t) }, t.ACL.prototype.getPublicWriteAccess = function() { return this.getWriteAccess("*") }, t.ACL.prototype.getRoleReadAccess = function(e) { if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getReadAccess("role:" + e); throw new Error("role must be a AV.Role or a String") }, t.ACL.prototype.getRoleWriteAccess = function(e) { if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getWriteAccess("role:" + e); throw new Error("role must be a AV.Role or a String") }, t.ACL.prototype.setRoleReadAccess = function(e, n) { if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setReadAccess("role:" + e, n); throw new Error("role must be a AV.Role or a String") }, t.ACL.prototype.setRoleWriteAccess = function(e, n) { if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setWriteAccess("role:" + e, n); throw new Error("role must be a AV.Role or a String") } } }, function(t, e, n) { "use strict"; var r = n(3),
            i = r.tap;
        t.exports = function(t) { t.Captcha = function(t, e) { this._options = t, this._authOptions = e, this.url = void 0, this.captchaToken = void 0, this.validateToken = void 0 }, t.Captcha.prototype.refresh = function() { var e = this; return t.Cloud._requestCaptcha(this._options, this._authOptions).then(function(t) { var n = t.captchaToken,
                        r = t.url; return Object.assign(e, { captchaToken: n, url: r }), r }) }, t.Captcha.prototype.verify = function(e) { var n = this; return t.Cloud.verifyCaptcha(e, this.captchaToken).then(i(function(t) { return n.validateToken = t })) }, t.Captcha.prototype.bind = function(t, e) { var n = this,
                    r = t.textInput,
                    i = t.image,
                    s = t.verifyButton,
                    o = e.success,
                    a = e.error; if ("string" == typeof r && !(r = document.getElementById(r))) throw new Error("textInput with id " + r + " not found"); if ("string" == typeof i && !(i = document.getElementById(i))) throw new Error("image with id " + i + " not found"); if ("string" == typeof s && !(s = document.getElementById(s))) throw new Error("verifyButton with id " + s + " not found");
                this.__refresh = function() { return n.refresh().then(function(t) { i.src = t, r && (r.value = "", r.focus()) }).catch(function(t) { return console.warn("refresh captcha fail: " + t.message) }) }, i && (this.__image = i, i.src = this.url, i.addEventListener("click", this.__refresh)), this.__verify = function() { var t = r.value;
                    n.verify(t).catch(function(t) { throw n.__refresh(), t }).then(o, a).catch(function(t) { return console.warn("verify captcha fail: " + t.message) }) }, r && s && (this.__verifyButton = s, s.addEventListener("click", this.__verify)) }, t.Captcha.prototype.unbind = function() { this.__image && this.__image.removeEventListener("click", this.__refresh), this.__verifyButton && this.__verifyButton.removeEventListener("click", this.__verify) }, t.Captcha.request = function(e, n) { var r = new t.Captcha(e, n); return r.refresh().then(function() { return r }) } } }, function(t, e, n) { "use strict"; var r = n(0),
            i = n(2),
            s = i._request,
            o = i.request,
            a = n(1);
        t.exports = function(t) { t.Cloud = t.Cloud || {}, r.extend(t.Cloud, { run: function(e, n, r) { return o({ service: "engine", method: "POST", path: "/functions/" + e, data: t._encode(n, null, !0), authOptions: r }).then(function(e) { return t._decode(e).result }) }, rpc: function(e, n, i) { return r.isArray(n) ? a.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : o({ service: "engine", method: "POST", path: "/call/" + e, data: t._encodeObjectOrArray(n), authOptions: i }).then(function(e) { return t._decode(e).result }) }, getServerDate: function() { return s("date", null, null, "GET").then(function(e) { return t._decode(e) }) }, requestSmsCode: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (r.isString(t) && (t = { mobilePhoneNumber: t }), !t.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber."); return e.validateToken && (t = r.extend({}, t, { validate_token: e.validateToken })), s("requestSmsCode", null, null, "POST", t, e) }, verifySmsCode: function(t, e) { if (!t) throw new Error("Missing sms code."); var n = {}; return r.isString(e) && (n.mobilePhoneNumber = e), s("verifySmsCode", t, null, "POST", n) }, _requestCaptcha: function(t, e) { return s("requestCaptcha", null, null, "GET", t, e).then(function(t) { var e = t.captcha_url; return { captchaToken: t.captcha_token, url: e } }) }, requestCaptcha: t.Captcha.request, verifyCaptcha: function(t, e) { return s("verifyCaptcha", null, null, "POST", { captcha_code: t, captcha_token: e }).then(function(t) { return t.validate_token }) } }) } }, function(t, e, n) { "use strict"; var r = n(0),
            i = n(2),
            s = i._request,
            o = n(5);
        t.exports = o.Object.extend("_Conversation", { constructor: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o.Object.prototype.constructor.call(this, null, null), this.set("name", t), void 0 !== e.isSystem && this.set("sys", !!e.isSystem), void 0 !== e.isTransient && this.set("tr", !!e.isTransient) }, getCreator: function() { return this.get("c") }, getLastMessageAt: function() { return this.get("lm") }, getMembers: function() { return this.get("m") }, addMember: function(t) { return this.add("m", t) }, getMutedMembers: function() { return this.get("mu") }, getName: function() { return this.get("name") }, isTransient: function() { return this.get("tr") }, isSystem: function() { return this.get("sys") }, send: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; "function" == typeof e.toJSON && (e = e.toJSON()), "string" != typeof e && (e = JSON.stringify(e)); var i = { from_peer: t, conv_id: this.id, transient: !1, message: e }; return void 0 !== n.toClients && (i.to_peers = n.toClients), void 0 !== n.transient && (i.transient = !!n.transient), void 0 !== n.pushData && (i.push_data = n.pushData), s("rtm", "messages", null, "POST", i, r) }, broadcast: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; "function" == typeof e.toJSON && (e = e.toJSON()), "string" != typeof e && (e = JSON.stringify(e)); var o = { from_peer: t, conv_id: this.id, message: e }; if (void 0 !== n.pushData && (o.push = n.pushData), void 0 !== n.validTill) { var a = n.validTill;
                    r.isDate(a) && (a = a.getTime()), n.valid_till = a } return s("rtm", "broadcast", null, "POST", o, i) } }) }, function(t, e, n) { "use strict"; var r = n(0);
        t.exports = function(t) { var e = /\s+/,
                n = Array.prototype.slice;
            t.Events = { on: function(t, n, r) { var i, s, o, a, u; if (!n) return this; for (t = t.split(e), i = this._callbacks || (this._callbacks = {}), s = t.shift(); s;) u = i[s], o = u ? u.tail : {}, o.next = a = {}, o.context = r, o.callback = n, i[s] = { tail: a, next: u ? u.next : o }, s = t.shift(); return this }, off: function(t, n, i) { var s, o, a, u, c, l; if (o = this._callbacks) { if (!(t || n || i)) return delete this._callbacks, this; for (t = t ? t.split(e) : r.keys(o), s = t.shift(); s;)
                            if (a = o[s], delete o[s], a && (n || i)) { for (u = a.tail, a = a.next; a !== u;) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(s, c, l), a = a.next;
                                s = t.shift() }
                        return this } }, trigger: function(t) { var r, i, s, o, a, u, c; if (!(s = this._callbacks)) return this; for (u = s.all, t = t.split(e), c = n.call(arguments, 1), r = t.shift(); r;) { if (i = s[r])
                            for (o = i.tail;
                                (i = i.next) !== o;) i.callback.apply(i.context || this, c); if (i = u)
                            for (o = i.tail, a = [r].concat(c);
                                (i = i.next) !== o;) i.callback.apply(i.context || this, a);
                        r = t.shift() } return this } }, t.Events.bind = t.Events.on, t.Events.unbind = t.Events.off } }, function(t, e, n) { "use strict"; var r = n(0),
            i = n(38),
            s = n(39),
            o = n(40),
            a = n(4),
            u = n(2)._request,
            c = n(1),
            l = n(3),
            h = l.tap,
            f = l.transformFetchOptions,
            d = n(6)("leancloud:file"),
            p = n(42);
        t.exports = function(t) { var e = function() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) },
                n = function(t) { return t.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] },
                l = function(t) { if (t < 26) return String.fromCharCode(65 + t); if (t < 52) return String.fromCharCode(t - 26 + 97); if (t < 62) return String.fromCharCode(t - 52 + 48); if (62 === t) return "+"; if (63 === t) return "/"; throw new Error("Tried to encode large digit " + t + " in base64.") },
                _ = function(t) { var e = []; return e.length = Math.ceil(t.length / 3), r.times(e.length, function(n) { var r = t[3 * n],
                            i = t[3 * n + 1] || 0,
                            s = t[3 * n + 2] || 0,
                            o = 3 * n + 1 < t.length,
                            a = 3 * n + 2 < t.length;
                        e[n] = [l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), o ? l(i << 2 & 60 | s >> 6 & 3) : "=", a ? l(63 & s) : "="].join("") }), e.join("") };
            t.File = function(e, i, s) { if (this.attributes = { name: e, url: "", metaData: {}, base64: "" }, r.isString(i)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
                r.isArray(i) && (this.attributes.metaData.size = i.length, i = { base64: _(i) }), this._extName = "", this._data = i, "undefined" != typeof Blob && i instanceof Blob && (i.size && (this.attributes.metaData.size = i.size), i.name && (this._extName = n(i.name))); var o = void 0; if (i && i.owner) o = i.owner;
                else if (!t._config.disableCurrentUser) try { o = t.User.current() } catch (t) { if ("SYNC_API_NOT_AVAILABLE" !== t.code) throw t;
                    console.warn("Get current user failed. It seems this runtime use an async storage system, please create AV.File in the callback of AV.User.currentAsync().") } this.attributes.metaData.owner = o ? o.id : "unknown", this.set("mime_type", s) }, t.File.withURL = function(e, n, r, i) { if (!e || !n) throw new Error("Please provide file name and url"); var s = new t.File(e, null, i); if (r)
                    for (var o in r) s.attributes.metaData[o] || (s.attributes.metaData[o] = r[o]); return s.attributes.url = n, s.attributes.metaData.__source = "external", s }, t.File.createWithoutData = function(e) { var n = new t.File; return n.id = e, n }, r.extend(t.File.prototype, { className: "_File", _toFullJSON: function(e) { var n = this,
                        i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        s = r.clone(this.attributes); return t._objectEach(s, function(n, r) { s[r] = t._encode(n, e, void 0, i) }), t._objectEach(this._operations, function(t, e) { s[e] = t }), r.has(this, "id") && (s.objectId = this.id), r(["createdAt", "updatedAt"]).each(function(t) { if (r.has(n, t)) { var e = n[t];
                            s[t] = r.isDate(e) ? e.toJSON() : e } }), i && (s.__type = "File"), s }, toFullJSON: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return this._toFullJSON(t) }, toJSON: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this]; return this._toFullJSON(n, !1) }, getACL: function() { return this._acl }, setACL: function(e) { if (!(e instanceof t.ACL)) return new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.");
                    this._acl = e }, name: function() { return this.get("name") }, url: function() { return this.get("url") }, get: function(t) { switch (t) {
                        case "objectId":
                            return this.id;
                        case "url":
                        case "name":
                        case "mime_type":
                        case "metaData":
                        case "createdAt":
                        case "updatedAt":
                            return this.attributes[t];
                        default:
                            return this.attributes.metaData[t] } }, set: function() { for (var t = this, e = function(e, n) { switch (e) {
                                case "name":
                                case "url":
                                case "mime_type":
                                case "base64":
                                case "metaData":
                                    t.attributes[e] = n; break;
                                default:
                                    t.attributes.metaData[e] = n } }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i]; switch (r.length) {
                        case 1:
                            for (var s in r[0]) e(s, r[0][s]); break;
                        case 2:
                            e(r[0], r[1]) } }, metaData: function(t, e) { return t && e ? (this.attributes.metaData[t] = e, this) : t && !e ? this.attributes.metaData[t] : this.attributes.metaData }, thumbnailURL: function(t, e, n, r, i) { var s = this.attributes.url; if (!s) throw new Error("Invalid url."); if (!t || !e || t <= 0 || e <= 0) throw new Error("Invalid width or height value."); if (n = n || 100, r = r || !0, n <= 0 || n > 100) throw new Error("Invalid quality value."); return i = i || "png", s + "?imageView/" + (r ? 2 : 1) + "/w/" + t + "/h/" + e + "/q/" + n + "/format/" + i }, size: function() { return this.metaData().size }, ownerId: function() { return this.metaData().owner }, destroy: function(t) { return this.id ? u("files", null, this.id, "DELETE", null, t) : c.reject(new Error("The file id is not eixsts.")) }, _fileToken: function(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fileTokens",
                        i = this.attributes.name,
                        s = n(i);!s && this._extName && (i += this._extName, s = this._extName); var o = e() + e() + e() + e() + e() + s,
                        a = { key: o, name: i, ACL: this._acl, mime_type: t, metaData: this.attributes.metaData }; return this._qiniu_key = o, u(r, null, null, "POST", a) }, save: function(t) { var e = this; if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it."); if (!this._previousSave)
                        if (this._data) { var n = this.get("mime_type");
                            this._previousSave = this._fileToken(n).then(function(r) { return r.mime_type && (n = r.mime_type, e.set("mime_type", n)), e._token = r.token, c.resolve().then(function() { var t = e._data; if (t && t.base64) return p(t.base64, n); if (t && t.blob) return !t.blob.type && n && (t.blob.type = n), t.blob.name || (t.blob.name = e.get("name")), t.blob; if ("undefined" != typeof Blob && t instanceof Blob) return t; throw new TypeError("malformed file data") }).then(function(n) { switch (r.provider) {
                                        case "s3":
                                            return o(r, n, e, t);
                                        case "qcloud":
                                            return i(r, n, e, t);
                                        case "qiniu":
                                        default:
                                            return s(r, n, e, t) } }).then(h(function() { return e._callback(!0) }), function(t) { throw e._callback(!1), t }) }) } else if (this.attributes.url && "external" === this.attributes.metaData.__source) { var r = { name: this.attributes.name, ACL: this._acl, metaData: this.attributes.metaData, mime_type: this.mimeType, url: this.attributes.url };
                        this._previousSave = u("files", this.attributes.name, null, "post", r).then(function(t) { return e.attributes.name = t.name, e.attributes.url = t.url, e.id = t.objectId, t.size && (e.attributes.metaData.size = t.size), e }) } return this._previousSave }, _callback: function(t) { u("fileCallback", null, null, "post", { token: this._token, result: t }).catch(d), delete this._token, delete this._data }, fetch: function(t, e) { return u("files", null, this.id, "GET", f(t), e).then(this._finishFetch.bind(this)) }, _finishFetch: function(e) { var n = t.Object.prototype.parse(e); return n.attributes = { name: n.name, url: n.url, mime_type: n.mime_type, bucket: n.bucket }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, r.extend(this, n), this } }) } }, function(t, e, n) { "use strict"; var r = n(0);
        t.exports = function(t) { t.GeoPoint = function(e, n) { r.isArray(e) ? (t.GeoPoint._validate(e[0], e[1]), this.latitude = e[0], this.longitude = e[1]) : r.isObject(e) ? (t.GeoPoint._validate(e.latitude, e.longitude), this.latitude = e.latitude, this.longitude = e.longitude) : r.isNumber(e) && r.isNumber(n) ? (t.GeoPoint._validate(e, n), this.latitude = e, this.longitude = n) : (this.latitude = 0, this.longitude = 0); var i = this;
                this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function() { return i._latitude }), this.__defineGetter__("longitude", function() { return i._longitude }), this.__defineSetter__("latitude", function(e) { t.GeoPoint._validate(e, i.longitude), i._latitude = e }), this.__defineSetter__("longitude", function(e) { t.GeoPoint._validate(i.latitude, e), i._longitude = e })) }, t.GeoPoint._validate = function(t, e) { if (t < -90) throw new Error("AV.GeoPoint latitude " + t + " < -90.0."); if (t > 90) throw new Error("AV.GeoPoint latitude " + t + " > 90.0."); if (e < -180) throw new Error("AV.GeoPoint longitude " + e + " < -180.0."); if (e > 180) throw new Error("AV.GeoPoint longitude " + e + " > 180.0.") }, t.GeoPoint.current = function() { return new t.Promise(function(e, n) { navigator.geolocation.getCurrentPosition(function(n) { e(new t.GeoPoint({ latitude: n.coords.latitude, longitude: n.coords.longitude })) }, n) }) }, r.extend(t.GeoPoint.prototype, { toJSON: function() { return t.GeoPoint._validate(this.latitude, this.longitude), { __type: "GeoPoint", latitude: this.latitude, longitude: this.longitude } }, radiansTo: function(t) { var e = Math.PI / 180,
                        n = this.latitude * e,
                        r = this.longitude * e,
                        i = t.latitude * e,
                        s = t.longitude * e,
                        o = n - i,
                        a = r - s,
                        u = Math.sin(o / 2),
                        c = Math.sin(a / 2),
                        l = u * u + Math.cos(n) * Math.cos(i) * c * c; return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l)) }, kilometersTo: function(t) { return 6371 * this.radiansTo(t) }, milesTo: function(t) { return 3958.8 * this.radiansTo(t) } }) } }, function(t, e, n) { "use strict";

        function r(t, e) { if ("us" === e) return h("https://us-api.leancloud.cn"); var n = void 0; switch (t.slice(-9)) {
                case "-9Nh9j0Va":
                    return h("https://e1-api.leancloud.cn");
                case "-MdYXbMMI":
                    return h("https://us-api.leancloud.cn");
                default:
                    return n = t.slice(0, 8).toLowerCase(), { push: "https://" + n + ".push.lncld.net", stats: "https://" + n + ".stats.lncld.net", engine: "https://" + n + ".engine.lncld.net", api: "https://" + n + ".api.lncld.net" } } } var i = n(5),
            s = n(34),
            o = n(3),
            a = o.isNullOrUndefined,
            u = n(0),
            c = u.extend,
            l = u.isObject,
            h = function(t) { return { push: t, stats: t, engine: t, api: t } },
            f = !1;
        i.init = function(t) { if (!l(t)) return i.init({ appId: t, appKey: arguments.length <= 1 ? void 0 : arguments[1], masterKey: arguments.length <= 2 ? void 0 : arguments[2], region: arguments.length <= 3 ? void 0 : arguments[3] }); var e = t.appId,
                n = t.appKey,
                o = t.masterKey,
                a = (t.hookKey, t.region),
                u = void 0 === a ? "cn" : a,
                h = t.serverURLs,
                d = t.disableCurrentUser,
                p = t.production,
                _ = t.realtime; if (i.applicationId) throw new Error("SDK is already initialized.");
            o && console.warn("MasterKey is not supposed to be used in browser."), i._config.applicationId = e, i._config.applicationKey = n, i._config.masterKey = o, void 0 !== p && (i._config.production = p), void 0 !== d && (i._config.disableCurrentUser = d), i._appRouter = new s(i); var v = f || void 0 !== h || "cn" !== u;
            i._setServerURLs(c({}, r(e, u), i._config.serverURLs, h), v), _ ? i._config.realtime = _ : i._sharedConfig.liveQueryRealtime && (i._config.realtime = new i._sharedConfig.liveQueryRealtime({ appId: e, region: u })) }, i.setProduction = function(t) { a(t) ? i._config.production = null : i._config.production = t ? 1 : 0 }, i._setServerURLs = function(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; "string" != typeof t ? c(i._config.serverURLs, t) : i._config.serverURLs = h(t), e && (i._appRouter ? i._appRouter.disable() : f = !0) }, i.setServerURLs = function(t) { return i._setServerURLs(t) }, i.initialize = i.init, ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(function(t) { return Object.defineProperty(i, t, { get: function() { return i._config[t] }, set: function(e) { i._config[t] = e } }) }) }, function(t, e, n) { "use strict"; var r = n(0),
            i = n(4),
            s = n(2),
            o = s.request;
        t.exports = function(t) { t.Insight = t.Insight || {}, r.extend(t.Insight, { startJob: function(e, n) { if (!e || !e.sql) throw new Error("Please provide the sql to run the job."); var r = { jobConfig: e, appId: t.applicationId }; return o({ path: "/bigquery/jobs", method: "POST", data: t._encode(r, null, !0), authOptions: n, signKey: !1 }).then(function(e) { return t._decode(e).id }) }, on: function(t, e) {} }), t.Insight.JobQuery = function(t, e) { if (!t) throw new Error("Please provide the job id.");
                this.id = t, this.className = e, this._skip = 0, this._limit = 100 }, r.extend(t.Insight.JobQuery.prototype, { skip: function(t) { return this._skip = t, this }, limit: function(t) { return this._limit = t, this }, find: function(e) { var n = { skip: this._skip, limit: this._limit }; return o({ path: "/bigquery/jobs/" + this.id, method: "GET", query: n, authOptions: e, signKey: !1 }).then(function(e) { return e.error ? t.Promise.reject(new i(e.code, e.error)) : t.Promise.resolve(e) }) } }) } }, function(t, e, n) { "use strict"; var r = n(47),
            i = n(1),
            s = n(3),
            o = s.inherits,
            a = n(2),
            u = a.request;
        t.exports = function(t) { t.LiveQuery = o(r, { constructor: function(t, e) { r.apply(this), this.id = t, this._client = e, this._client.register(this), e.on("message", this._dispatch.bind(this)) }, _dispatch: function(e) { var n = this;
                    e.forEach(function(e) { var r = e.op,
                            i = e.object,
                            s = e.query_id,
                            o = e.updatedKeys; if (s === n.id) { var a = t.parseJSON(Object.assign({ __type: "_File" === i.className ? "File" : "Object" }, i));
                            o ? n.emit(r, a, o) : n.emit(r, a) } }) }, unsubscribe: function() { return this._client.deregister(this), u({ method: "POST", path: "/LiveQuery/unsubscribe", data: { id: this._client.id, query_id: this.id } }) } }, { init: function(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.subscriptionId,
                        s = void 0 === r ? t._getSubscriptionId() : r; if (!t._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query"); if (!(e instanceof t.Query)) throw new TypeError("LiveQuery must be inited with a Query"); var o = e.toJSON(),
                        a = o.where,
                        c = o.keys,
                        l = o.returnACL; return i.resolve(s).then(function(n) { return u({ method: "POST", path: "/LiveQuery/subscribe", data: { query: { where: a, keys: c, returnACL: l, className: e.className }, id: n } }).then(function(e) { var r = e.query_id; return t._config.realtime.createLiveQueryClient(n).then(function(e) { return new t.LiveQuery(r, e) }) }) }) } }) } }, function(t, e, n) { "use strict";

        function r(t, e) { return t && t[e] ? i.isFunction(t[e]) ? t[e]() : t[e] : null } var i = n(0),
            s = n(4),
            o = n(2),
            a = o._request,
            u = n(3),
            c = u.isNullOrUndefined,
            l = u.ensureArray,
            h = u.transformFetchOptions,
            f = ["objectId", "createdAt", "updatedAt"],
            d = function(t) { if (-1 !== f.indexOf(t)) throw new Error("key[" + t + "] is reserved") };
        t.exports = function(t) { t.Object = function(e, n) { if (i.isString(e)) return t.Object._create.apply(this, arguments);
                e = e || {}, n && n.parse && (e = this.parse(e), e = this._mergeMagicFields(e)); var s = r(this, "defaults");
                s && (e = i.extend({}, s, e)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = i.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, { silent: !0 }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = i.clone(this.attributes), this.initialize.apply(this, arguments) }, t.Object.saveAll = function(e, n) { return t.Object._deepSaveAsync(e, null, n) }, t.Object.fetchAll = function(e, n) { return t.Promise.resolve().then(function() { return a("batch", null, null, "POST", { requests: i.map(e, function(t) { if (!t.className) throw new Error("object must have className to fetch"); if (!t.id) throw new Error("object must have id to fetch"); if (t.dirty()) throw new Error("object is modified but not saved"); return { method: "GET", path: "/1.1/classes/" + t.className + "/" + t.id } }) }, n) }).then(function(t) { return i.forEach(e, function(e, n) { if (!t[n].success) { var r = new Error(t[n].error.error); throw r.code = t[n].error.code, r } e._finishFetch(e.parse(t[n].success)) }), e }) }, i.extend(t.Object.prototype, t.Events, { _fetchWhenSave: !1, initialize: function() {}, fetchWhenSave: function(t) { if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !i.isBoolean(t)) throw new Error("Expect boolean value for fetchWhenSave");
                    this._fetchWhenSave = t }, getObjectId: function() { return this.id }, getCreatedAt: function() { return this.createdAt || this.get("createdAt") }, getUpdatedAt: function() { return this.updatedAt || this.get("updatedAt") }, toJSON: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []; return this._toFullJSON(n, !1) }, toFullJSON: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return this._toFullJSON(t) }, _toFullJSON: function(e) { var n = this,
                        r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        s = i.clone(this.attributes); if (i.isArray(e)) var o = e.concat(this); return t._objectEach(s, function(e, n) { s[n] = t._encode(e, o, void 0, r) }), t._objectEach(this._operations, function(t, e) { s[e] = t }), i.has(this, "id") && (s.objectId = this.id), i(["createdAt", "updatedAt"]).each(function(t) { if (i.has(n, t)) { var e = n[t];
                            s[t] = i.isDate(e) ? e.toJSON() : e } }), r && (s.__type = "Object", i.isArray(e) && e.length && (s.__type = "Pointer"), s.className = this.className), s }, _refreshCache: function() { var e = this;
                    e._refreshingCache || (e._refreshingCache = !0, t._objectEach(this.attributes, function(n, r) { n instanceof t.Object ? n._refreshCache() : i.isObject(n) && e._resetCacheForKey(r) && e.set(r, new t.Op.Set(n), { silent: !0 }) }), delete e._refreshingCache) }, dirty: function(t) { this._refreshCache(); var e = i.last(this._opSetQueue); return t ? !!e[t] : !this.id || i.keys(e).length > 0 }, _toPointer: function() { return { __type: "Pointer", className: this.className, objectId: this.id } }, get: function(t) { switch (t) {
                        case "objectId":
                            return this.id;
                        case "createdAt":
                        case "updatedAt":
                            return this[t];
                        default:
                            return this.attributes[t] } }, relation: function(e) { var n = this.get(e); if (n) { if (!(n instanceof t.Relation)) throw new Error("Called relation() on non-relation field " + e); return n._ensureParentAndKey(this, e), n } return new t.Relation(this, e) }, escape: function(t) { var e = this._escapedAttributes[t]; if (e) return e; var n, r = this.attributes[t]; return n = c(r) ? "" : i.escape(r.toString()), this._escapedAttributes[t] = n, n }, has: function(t) { return !c(this.attributes[t]) }, _mergeMagicFields: function(e) { var n = this,
                        r = ["objectId", "createdAt", "updatedAt"]; return t._arrayEach(r, function(r) { e[r] && ("objectId" === r ? n.id = e[r] : "createdAt" !== r && "updatedAt" !== r || i.isDate(e[r]) ? n[r] = e[r] : n[r] = t._parseDate(e[r]), delete e[r]) }), e }, _startSave: function() { this._opSetQueue.push({}) }, _cancelSave: function() { var e = i.first(this._opSetQueue);
                    this._opSetQueue = i.rest(this._opSetQueue); var n = i.first(this._opSetQueue);
                    t._objectEach(e, function(t, r) { var i = e[r],
                            s = n[r];
                        i && s ? n[r] = s._mergeWithPrevious(i) : i && (n[r] = i) }), this._saving = this._saving - 1 }, _finishSave: function(e) { var n = {};
                    t._traverse(this.attributes, function(e) { e instanceof t.Object && e.id && e._hasData && (n[e.id] = e) }); var r = i.first(this._opSetQueue);
                    this._opSetQueue = i.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(e); var s = this;
                    t._objectEach(e, function(e, r) { s._serverData[r] = t._decode(e, r); var i = t._traverse(s._serverData[r], function(e) { if (e instanceof t.Object && n[e.id]) return n[e.id] });
                        i && (s._serverData[r] = i) }), this._rebuildAllEstimatedData(), this._saving = this._saving - 1 }, _finishFetch: function(e, n) { this._opSetQueue = [{}], this._mergeMagicFields(e); var r = this;
                    t._objectEach(e, function(e, n) { r._serverData[n] = t._decode(e, n) }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n }, _applyOpSet: function(e, n) { var r = this;
                    t._objectEach(e, function(e, i) { n[i] = e._estimate(n[i], r, i), n[i] === t.Op._UNSET && delete n[i] }) }, _resetCacheForKey: function(e) { var n = this.attributes[e]; if (i.isObject(n) && !(n instanceof t.Object) && !(n instanceof t.File)) { n = n.toJSON ? n.toJSON() : n; var r = JSON.stringify(n); if (this._hashedJSON[e] !== r) { var s = !!this._hashedJSON[e]; return this._hashedJSON[e] = r, s } } return !1 }, _rebuildEstimatedDataForKey: function(e) { var n = this;
                    delete this.attributes[e], this._serverData[e] && (this.attributes[e] = this._serverData[e]), t._arrayEach(this._opSetQueue, function(r) { var i = r[e];
                        i && (n.attributes[e] = i._estimate(n.attributes[e], n, e), n.attributes[e] === t.Op._UNSET ? delete n.attributes[e] : n._resetCacheForKey(e)) }) }, _rebuildAllEstimatedData: function() { var e = this,
                        n = i.clone(this.attributes);
                    this.attributes = i.clone(this._serverData), t._arrayEach(this._opSetQueue, function(n) { e._applyOpSet(n, e.attributes), t._objectEach(n, function(t, n) { e._resetCacheForKey(n) }) }), t._objectEach(n, function(t, n) { e.attributes[n] !== t && e.trigger("change:" + n, e, e.attributes[n], {}) }), t._objectEach(this.attributes, function(t, r) { i.has(n, r) || e.trigger("change:" + r, e, t, {}) }) }, set: function(e, n, r) { var s; if (i.isObject(e) || c(e) ? (s = i.mapObject(e, function(e, n) { return d(n), t._decode(e, n) }), r = n) : (s = {}, d(e), s[e] = t._decode(n, e)), r = r || {}, !s) return this;
                    s instanceof t.Object && (s = s.attributes), r.unset && t._objectEach(s, function(e, n) { s[n] = new t.Op.Unset }); var o = i.clone(s),
                        a = this;
                    t._objectEach(o, function(e, n) { e instanceof t.Op && (o[n] = e._estimate(a.attributes[n], a, n), o[n] === t.Op._UNSET && delete o[n]) }), this._validate(s, r), r.changes = {}; var u = this._escapedAttributes;
                    this._previousAttributes; return t._arrayEach(i.keys(s), function(e) { var n = s[e];
                        n instanceof t.Relation && (n.parent = a), n instanceof t.Op || (n = new t.Op.Set(n)); var o = !0;
                        n instanceof t.Op.Set && i.isEqual(a.attributes[e], n.value) && (o = !1), o && (delete u[e], r.silent ? a._silent[e] = !0 : r.changes[e] = !0); var c = i.last(a._opSetQueue);
                        c[e] = n._mergeWithPrevious(c[e]), a._rebuildEstimatedDataForKey(e), o ? (a.changed[e] = a.attributes[e], r.silent || (a._pending[e] = !0)) : (delete a.changed[e], delete a._pending[e]) }), r.silent || this.change(r), this }, unset: function(t, e) { return e = e || {}, e.unset = !0, this.set(t, null, e) }, increment: function(e, n) { return (i.isUndefined(n) || i.isNull(n)) && (n = 1), this.set(e, new t.Op.Increment(n)) }, add: function(e, n) { return this.set(e, new t.Op.Add(l(n))) }, addUnique: function(e, n) { return this.set(e, new t.Op.AddUnique(l(n))) }, remove: function(e, n) { return this.set(e, new t.Op.Remove(l(n))) }, op: function(t) { return i.last(this._opSetQueue)[t] }, clear: function(t) { t = t || {}, t.unset = !0; var e = i.extend(this.attributes, this._operations); return this.set(e, t) }, _getSaveJSON: function() { var e = i.clone(i.first(this._opSetQueue)); return t._objectEach(e, function(t, n) { e[n] = t.toJSON() }), e }, _canBeSerialized: function() { return t.Object._canBeSerializedAsValue(this.attributes) }, fetch: function(t, e) { var n = this; return a("classes", this.className, this.id, "GET", h(t), e).then(function(t) { return n._finishFetch(n.parse(t), !0), n }) }, save: function(e, n, r) { var s, o, u;
                    i.isObject(e) || c(e) ? (s = e, u = n) : (s = {}, s[e] = n, u = r), u = i.clone(u) || {}, u.wait && (o = i.clone(this.attributes)); var l = i.clone(u) || {};
                    l.wait && (l.silent = !0), s && this.set(s, l); var h = this;
                    h._refreshCache(); var f = [],
                        d = []; return t.Object._findUnsavedChildren(h.attributes, f, d), f.length + d.length > 0 ? t.Object._deepSaveAsync(this.attributes, h, u).then(function() { return h.save(null, u) }) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || t.Promise.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function(t) {}).then(function() { var t = h.id ? "PUT" : "POST",
                            e = h._getSaveJSON(),
                            n = {}; if ((h._fetchWhenSave || u.fetchWhenSave) && (n.new = "true"), u.query) { var r; if ("function" == typeof u.query.toJSON && (r = u.query.toJSON()) && (n.where = r.where), !n.where) { throw new Error("options.query is not an AV.Query") } } i.extend(e, h._flags); var c = "classes",
                            f = h.className; "_User" !== h.className || h.id || (c = "users", f = null); var d = u._makeRequest || a,
                            p = d(c, f, h.id, t, e, u, n); return p = p.then(function(t) { var e = h.parse(t); return u.wait && (e = i.extend(s || {}, e)), h._finishSave(e), u.wait && h.set(o, l), h }, function(t) { throw h._cancelSave(), t }) }), this._allPreviousSaves) }, destroy: function(t) { t = t || {}; var e = this,
                        n = function() { e.trigger("destroy", e, e.collection, t) }; return this.id ? (t.wait || n(), a("classes", this.className, this.id, "DELETE", this._flags, t).then(function() { return t.wait && n(), e })) : n() }, parse: function(e) { var n = i.clone(e); return i(["createdAt", "updatedAt"]).each(function(e) { n[e] && (n[e] = t._parseDate(n[e])) }), n.updatedAt || (n.updatedAt = n.createdAt), n }, clone: function() { return new this.constructor(this.attributes) }, isNew: function() { return !this.id }, change: function(e) { e = e || {}; var n = this._changing;
                    this._changing = !0; var r = this;
                    t._objectEach(this._silent, function(t) { r._pending[t] = !0 }); var s = i.extend({}, e.changes, this._silent); if (this._silent = {}, t._objectEach(s, function(t, n) { r.trigger("change:" + n, r, r.get(n), e) }), n) return this; for (var o = function(t, e) { r._pending[e] || r._silent[e] || delete r.changed[e] }; !i.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, e), t._objectEach(this.changed, o), r._previousAttributes = i.clone(this.attributes); return this._changing = !1, this }, hasChanged: function(t) { return arguments.length ? this.changed && i.has(this.changed, t) : !i.isEmpty(this.changed) }, changedAttributes: function(e) { if (!e) return !!this.hasChanged() && i.clone(this.changed); var n = {},
                        r = this._previousAttributes; return t._objectEach(e, function(t, e) { i.isEqual(r[e], t) || (n[e] = t) }), n }, previous: function(t) { return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null }, previousAttributes: function() { return i.clone(this._previousAttributes) }, isValid: function() { try { this.validate(this.attributes) } catch (t) { return !1 } return !0 }, validate: function(e) { if (i.has(e, "ACL") && !(e.ACL instanceof t.ACL)) throw new s(s.OTHER_CAUSE, "ACL must be a AV.ACL.") }, _validate: function(t, e) {!e.silent && this.validate && (t = i.extend({}, this.attributes, t), this.validate(t)) }, getACL: function() { return this.get("ACL") }, setACL: function(t, e) { return this.set("ACL", t, e) }, disableBeforeHook: function() { this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete") }, disableAfterHook: function() { this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete") }, ignoreHook: function(e) { i.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], e) || console.trace("Unsupported hookName: " + e), t.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(e) } }), t.Object.createWithoutData = function(e, n, r) { var i = new t.Object(e); return i.id = n, i._hasData = r, i }, t.Object.destroyAll = function(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!e || 0 === e.length) return t.Promise.resolve(); var r = i.groupBy(e, function(t) { return JSON.stringify({ className: t.className, flags: t._flags }) }),
                    s = { requests: i.map(r, function(t) { var e = i.map(t, "id").join(","); return { method: "DELETE", path: "/1.1/classes/" + t[0].className + "/" + e, body: t[0]._flags } }) }; return a("batch", null, null, "POST", s, n) }, t.Object._getSubclass = function(e) { if (!i.isString(e)) throw new Error("AV.Object._getSubclass requires a string argument."); var n = t.Object._classMap[e]; return n || (n = t.Object.extend(e), t.Object._classMap[e] = n), n }, t.Object._create = function(e, n, r) { return new(t.Object._getSubclass(e))(n, r) }, t.Object._classMap = {}, t.Object._extend = t._extend, t.Object.new = function(e, n) { return new t.Object(e, n) }, t.Object.extend = function(e, n, r) { if (!i.isString(e)) { if (e && i.has(e, "className")) return t.Object.extend(e.className, e, n); throw new Error("AV.Object.extend's first argument should be the className.") } "User" === e && (e = "_User"); var s = null; if (i.has(t.Object._classMap, e)) { var o = t.Object._classMap[e]; if (!n && !r) return o;
                    s = o._extend(n, r) } else n = n || {}, n._className = e, s = this._extend(n, r); return s.extend = function(n) { if (i.isString(n) || n && i.has(n, "className")) return t.Object.extend.apply(s, arguments); var r = [e].concat(i.toArray(arguments)); return t.Object.extend.apply(s, r) }, s.new = function(t, e) { return new s(t, e) }, t.Object._classMap[e] = s, s }, Object.defineProperty(t.Object.prototype, "className", { get: function() { var t = this._className || this.constructor._LCClassName || this.constructor.name; return "User" === t ? "_User" : t } }), t.Object.register = function(e, n) { if (!(e.prototype instanceof t.Object)) throw new Error("registered class is not a subclass of AV.Object"); var r = n || e.name; if (!r.length) throw new Error("registered class must be named");
                n && (e._LCClassName = n), t.Object._classMap[r] = e }, t.Object._findUnsavedChildren = function(e, n, r) { t._traverse(e, function(e) { return e instanceof t.Object ? (e._refreshCache(), void(e.dirty() && n.push(e))) : e instanceof t.File ? void(e.url() || e.id || r.push(e)) : void 0 }) }, t.Object._canBeSerializedAsValue = function(e) { var n = !0; return e instanceof t.Object || e instanceof t.File ? n = !!e.id : i.isArray(e) ? t._arrayEach(e, function(e) { t.Object._canBeSerializedAsValue(e) || (n = !1) }) : i.isObject(e) && t._objectEach(e, function(e) { t.Object._canBeSerializedAsValue(e) || (n = !1) }), n }, t.Object._deepSaveAsync = function(e, n, r) { var o = [],
                    u = [];
                t.Object._findUnsavedChildren(e, o, u), n && (o = i.filter(o, function(t) { return t != n })); var c = t.Promise.resolve();
                i.each(u, function(t) { c = c.then(function() { return t.save() }) }); var l = i.uniq(o),
                    h = i.uniq(l); return c.then(function() { return t.Promise._continueWhile(function() { return h.length > 0 }, function() { var e = [],
                            n = []; if (t._arrayEach(h, function(t) { if (e.length > 20) return void n.push(t);
                                t._canBeSerialized() ? e.push(t) : n.push(t) }), h = n, 0 === e.length) return t.Promise.reject(new s(s.OTHER_CAUSE, "Tried to save a batch with a cycle.")); var o = t.Promise.resolve(i.map(e, function(e) { return e._allPreviousSaves || t.Promise.resolve() })),
                            u = o.then(function() { return a("batch", null, null, "POST", { requests: i.map(e, function(t) { var e = t._getSaveJSON();
                                        i.extend(e, t._flags); var n = "POST",
                                            r = "/1.1/classes/" + t.className; return t.id && (r = r + "/" + t.id, n = "PUT"), t._startSave(), { method: n, path: r, body: e } }) }, r).then(function(n) { var r; if (t._arrayEach(e, function(t, e) { n[e].success ? t._finishSave(t.parse(n[e].success)) : (r = r || n[e].error, t._cancelSave()) }), r) return t.Promise.reject(new s(r.code, r.error)) }) }); return t._arrayEach(e, function(t) { t._allPreviousSaves = u }), u }) }).then(function() { return e }) } } }, function(t, e, n) { "use strict"; var r = n(0);
        t.exports = function(t) { t.Op = function() { this._initialize.apply(this, arguments) }, r.extend(t.Op.prototype, { _initialize: function() {} }), r.extend(t.Op, { _extend: t._extend, _opDecoderMap: {}, _registerDecoder: function(e, n) { t.Op._opDecoderMap[e] = n }, _decode: function(e) { var n = t.Op._opDecoderMap[e.__op]; return n ? n(e) : void 0 } }), t.Op._registerDecoder("Batch", function(e) { var n = null; return t._arrayEach(e.ops, function(e) { e = t.Op._decode(e), n = e._mergeWithPrevious(n) }), n }), t.Op.Set = t.Op._extend({ _initialize: function(t) { this._value = t }, value: function() { return this._value }, toJSON: function() { return t._encode(this.value()) }, _mergeWithPrevious: function(t) { return this }, _estimate: function(t) { return this.value() } }), t.Op._UNSET = {}, t.Op.Unset = t.Op._extend({ toJSON: function() { return { __op: "Delete" } }, _mergeWithPrevious: function(t) { return this }, _estimate: function(e) { return t.Op._UNSET } }), t.Op._registerDecoder("Delete", function(e) { return new t.Op.Unset }), t.Op.Increment = t.Op._extend({ _initialize: function(t) { this._amount = t }, amount: function() { return this._amount }, toJSON: function() { return { __op: "Increment", amount: this._amount } }, _mergeWithPrevious: function(e) { if (e) { if (e instanceof t.Op.Unset) return new t.Op.Set(this.amount()); if (e instanceof t.Op.Set) return new t.Op.Set(e.value() + this.amount()); if (e instanceof t.Op.Increment) return new t.Op.Increment(this.amount() + e.amount()); throw new Error("Op is invalid after previous op.") } return this }, _estimate: function(t) { return t ? t + this.amount() : this.amount() } }), t.Op._registerDecoder("Increment", function(e) { return new t.Op.Increment(e.amount) }), t.Op.Add = t.Op._extend({ _initialize: function(t) { this._objects = t }, objects: function() { return this._objects }, toJSON: function() { return { __op: "Add", objects: t._encode(this.objects()) } }, _mergeWithPrevious: function(e) { if (e) { if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects()); if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value())); if (e instanceof t.Op.Add) return new t.Op.Add(e.objects().concat(this.objects())); throw new Error("Op is invalid after previous op.") } return this }, _estimate: function(t) { return t ? t.concat(this.objects()) : r.clone(this.objects()) } }), t.Op._registerDecoder("Add", function(e) { return new t.Op.Add(t._decode(e.objects)) }), t.Op.AddUnique = t.Op._extend({ _initialize: function(t) { this._objects = r.uniq(t) }, objects: function() { return this._objects }, toJSON: function() { return { __op: "AddUnique", objects: t._encode(this.objects()) } }, _mergeWithPrevious: function(e) { if (e) { if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects()); if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value())); if (e instanceof t.Op.AddUnique) return new t.Op.AddUnique(this._estimate(e.objects())); throw new Error("Op is invalid after previous op.") } return this }, _estimate: function(e) { if (e) { var n = r.clone(e); return t._arrayEach(this.objects(), function(e) { if (e instanceof t.Object && e.id) { var i = r.find(n, function(n) { return n instanceof t.Object && n.id === e.id }); if (i) { var s = r.indexOf(n, i);
                                    n[s] = e } else n.push(e) } else r.contains(n, e) || n.push(e) }), n } return r.clone(this.objects()) } }), t.Op._registerDecoder("AddUnique", function(e) { return new t.Op.AddUnique(t._decode(e.objects)) }), t.Op.Remove = t.Op._extend({ _initialize: function(t) { this._objects = r.uniq(t) }, objects: function() { return this._objects }, toJSON: function() { return { __op: "Remove", objects: t._encode(this.objects()) } }, _mergeWithPrevious: function(e) { if (e) { if (e instanceof t.Op.Unset) return e; if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value())); if (e instanceof t.Op.Remove) return new t.Op.Remove(r.union(e.objects(), this.objects())); throw new Error("Op is invalid after previous op.") } return this }, _estimate: function(e) { if (e) { var n = r.difference(e, this.objects()); return t._arrayEach(this.objects(), function(e) { e instanceof t.Object && e.id && (n = r.reject(n, function(n) { return n instanceof t.Object && n.id === e.id })) }), n } return [] } }), t.Op._registerDecoder("Remove", function(e) { return new t.Op.Remove(t._decode(e.objects)) }), t.Op.Relation = t.Op._extend({ _initialize: function(e, n) { this._targetClassName = null; var i = this,
                        s = function(e) { if (e instanceof t.Object) { if (!e.id) throw new Error("You can't add an unsaved AV.Object to a relation."); if (i._targetClassName || (i._targetClassName = e.className), i._targetClassName !== e.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + e.className + "."); return e.id } return e };
                    this.relationsToAdd = r.uniq(r.map(e, s)), this.relationsToRemove = r.uniq(r.map(n, s)) }, added: function() { var e = this; return r.map(this.relationsToAdd, function(n) { var r = t.Object._create(e._targetClassName); return r.id = n, r }) }, removed: function() { var e = this; return r.map(this.relationsToRemove, function(n) { var r = t.Object._create(e._targetClassName); return r.id = n, r }) }, toJSON: function() { var t = null,
                        e = null,
                        n = this,
                        i = function(t) { return { __type: "Pointer", className: n._targetClassName, objectId: t } },
                        s = null; return this.relationsToAdd.length > 0 && (s = r.map(this.relationsToAdd, i), t = { __op: "AddRelation", objects: s }), this.relationsToRemove.length > 0 && (s = r.map(this.relationsToRemove, i), e = { __op: "RemoveRelation", objects: s }), t && e ? { __op: "Batch", ops: [t, e] } : t || e || {} }, _mergeWithPrevious: function(e) { if (e) { if (e instanceof t.Op.Unset) throw new Error("You can't modify a relation after deleting it."); if (e instanceof t.Op.Relation) { if (e._targetClassName && e._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + e._targetClassName + ", but " + this._targetClassName + " was passed in."); var n = r.union(r.difference(e.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                                i = r.union(r.difference(e.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                                s = new t.Op.Relation(n, i); return s._targetClassName = this._targetClassName, s } throw new Error("Op is invalid after previous op.") } return this }, _estimate: function(e, n, r) { if (e) { if (e instanceof t.Relation) { if (this._targetClassName)
                                if (e.targetClassName) { if (e.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in.") } else e.targetClassName = this._targetClassName; return e } throw new Error("Op is invalid after previous op.") } new t.Relation(n, r).targetClassName = this._targetClassName } }), t.Op._registerDecoder("AddRelation", function(e) { return new t.Op.Relation(t._decode(e.objects), []) }), t.Op._registerDecoder("RemoveRelation", function(e) { return new t.Op.Relation([], t._decode(e.objects)) }) } }, function(t, e, n) { "use strict" }, function(t, e, n) { "use strict"; var r = n(2).request;
        t.exports = function(t) { t.Installation = t.Object.extend("_Installation"), t.Push = t.Push || {}, t.Push.send = function(t, e) { if (t.where && (t.where = t.where.toJSON().where), t.where && t.cql) throw new Error("Both where and cql can't be set"); if (t.push_time && (t.push_time = t.push_time.toJSON()), t.expiration_time && (t.expiration_time = t.expiration_time.toJSON()), t.expiration_time && t.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set"); return r({ service: "push", method: "POST", path: "/push", data: t, authOptions: e }) } } }, function(t, e, n) { "use strict"; var r = n(0),
            i = n(6)("leancloud:query"),
            s = n(1),
            o = n(4),
            a = n(2),
            u = a._request,
            c = n(3),
            l = c.ensureArray,
            h = c.transformFetchOptions,
            f = function(t, e) { if (void 0 === t) throw new Error(e) };
        t.exports = function(t) { t.Query = function(e) { r.isString(e) && (e = t.Object._getSubclass(e)), this.objectClass = e, this.className = e.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._extraOptions = {} }, t.Query.or = function() { var e = r.toArray(arguments),
                    n = null;
                t._arrayEach(e, function(t) { if (r.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class") }); var i = new t.Query(n); return i._orQuery(e), i }, t.Query.and = function() { var e = r.toArray(arguments),
                    n = null;
                t._arrayEach(e, function(t) { if (r.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class") }); var i = new t.Query(n); return i._andQuery(e), i }, t.Query.doCloudQuery = function(e, n, i) { var s = { cql: e }; return r.isArray(n) ? s.pvalues = n : i = n, u("cloudQuery", null, null, "GET", s, i).then(function(e) { var n = new t.Query(e.className); return { results: r.map(e.results, function(t) { var r = n._newObject(e); return r._finishFetch && r._finishFetch(n._processResult(t), !0), r }), count: e.count, className: e.className } }) }, t.Query._extend = t._extend, r.extend(t.Query.prototype, { _processResult: function(t) { return t }, get: function(t, e) { if (!t) { throw new o(o.OBJECT_NOT_FOUND, "Object not found.") } var n = this._newObject();
                    n.id = t; var i = this.toJSON(),
                        s = {}; return i.keys && (s.keys = i.keys), i.include && (s.include = i.include), i.includeACL && (s.includeACL = i.includeACL), u("classes", this.className, t, "GET", h(s), e).then(function(t) { if (r.isEmpty(t)) throw new o(o.OBJECT_NOT_FOUND, "Object not found."); return n._finishFetch(n.parse(t), !0), n }) }, toJSON: function() { var e = { where: this._where }; return this._include.length > 0 && (e.include = this._include.join(",")), this._select.length > 0 && (e.keys = this._select.join(",")), void 0 !== this._includeACL && (e.returnACL = this._includeACL), this._limit >= 0 && (e.limit = this._limit), this._skip > 0 && (e.skip = this._skip), void 0 !== this._order && (e.order = this._order), t._objectEach(this._extraOptions, function(t, n) { e[n] = t }), e }, _newObject: function(e) { return e && e.className ? new t.Object(e.className) : new this.objectClass }, _createRequest: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.toJSON(),
                        e = arguments[1]; if (JSON.stringify(t).length > 2e3) { var n = { requests: [{ method: "GET", path: "/1.1/classes/" + this.className, params: t }] }; return u("batch", null, null, "POST", n, e).then(function(t) { var e = t[0]; if (e.success) return e.success; var n = new Error(e.error.error || "Unknown batch error"); throw n.code = e.error.code, n }) } return u("classes", this.className, null, "GET", t, e) }, _parseResponse: function(t) { var e = this; return r.map(t.results, function(n) { var r = e._newObject(t); return r._finishFetch && r._finishFetch(e._processResult(n), !0), r }) }, find: function(t) { return this._createRequest(void 0, t).then(this._parseResponse.bind(this)) }, scan: function() { var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.orderedBy,
                        o = e.batchSize,
                        a = arguments[1],
                        c = this.toJSON();
                    i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete c.limit), n && (c.scan_key = n), o && (c.limit = o); var l = s.resolve([]),
                        h = void 0,
                        f = !1; return { next: function() { return l = l.then(function(e) { return f ? [] : e.length > 1 ? e : h || 0 === e.length ? u("scan/classes", t.className, null, "GET", h ? r.extend({}, c, { cursor: h }) : c, a).then(function(e) { return h = e.cursor, t._parseResponse(e) }).then(function(t) { return t.length || (f = !0), e.concat(t) }) : (f = !0, e) }), l.then(function(t) { return t.shift() }).then(function(t) { return { value: t, done: f } }) } } }, destroyAll: function(e) { return this.find(e).then(function(n) { return t.Object.destroyAll(n, e) }) }, count: function(t) { var e = this.toJSON(); return e.limit = 0, e.count = 1, this._createRequest(e, t).then(function(t) { return t.count }) }, first: function(t) { var e = this,
                        n = this.toJSON(); return n.limit = 1, this._createRequest(n, t).then(function(t) { return r.map(t.results, function(t) { var n = e._newObject(); return n._finishFetch && n._finishFetch(e._processResult(t), !0), n })[0] }) }, skip: function(t) { return f(t, "undefined is not a valid skip value"), this._skip = t, this }, limit: function(t) { return f(t, "undefined is not a valid limit value"), this._limit = t, this }, equalTo: function(e, n) { return f(e, "undefined is not a valid key"), f(n, "undefined is not a valid value"), this._where[e] = t._encode(n), this }, _addCondition: function(e, n, r) { return f(e, "undefined is not a valid condition key"), f(n, "undefined is not a valid condition"), f(r, "undefined is not a valid condition value"), this._where[e] || (this._where[e] = {}), this._where[e][n] = t._encode(r), this }, sizeEqualTo: function(t, e) { this._addCondition(t, "$size", e) }, notEqualTo: function(t, e) { return this._addCondition(t, "$ne", e), this }, lessThan: function(t, e) { return this._addCondition(t, "$lt", e), this }, greaterThan: function(t, e) { return this._addCondition(t, "$gt", e), this }, lessThanOrEqualTo: function(t, e) { return this._addCondition(t, "$lte", e), this }, greaterThanOrEqualTo: function(t, e) { return this._addCondition(t, "$gte", e), this }, containedIn: function(t, e) { return this._addCondition(t, "$in", e), this }, notContainedIn: function(t, e) { return this._addCondition(t, "$nin", e), this }, containsAll: function(t, e) { return this._addCondition(t, "$all", e), this }, exists: function(t) { return this._addCondition(t, "$exists", !0), this }, doesNotExist: function(t) { return this._addCondition(t, "$exists", !1), this }, matches: function(t, e, n) { return this._addCondition(t, "$regex", e), n || (n = ""), e.ignoreCase && (n += "i"), e.multiline && (n += "m"), n && n.length && this._addCondition(t, "$options", n), this }, matchesQuery: function(t, e) { var n = e.toJSON(); return n.className = e.className, this._addCondition(t, "$inQuery", n), this }, doesNotMatchQuery: function(t, e) { var n = e.toJSON(); return n.className = e.className, this._addCondition(t, "$notInQuery", n), this }, matchesKeyInQuery: function(t, e, n) { var r = n.toJSON(); return r.className = n.className, this._addCondition(t, "$select", { key: e, query: r }), this }, doesNotMatchKeyInQuery: function(t, e, n) { var r = n.toJSON(); return r.className = n.className, this._addCondition(t, "$dontSelect", { key: e, query: r }), this }, _orQuery: function(t) { var e = r.map(t, function(t) { return t.toJSON().where }); return this._where.$or = e, this }, _andQuery: function(t) { var e = r.map(t, function(t) { return t.toJSON().where }); return this._where.$and = e, this }, _quote: function(t) { return "\\Q" + t.replace("\\E", "\\E\\\\E\\Q") + "\\E" }, contains: function(t, e) { return this._addCondition(t, "$regex", this._quote(e)), this }, startsWith: function(t, e) { return this._addCondition(t, "$regex", "^" + this._quote(e)), this }, endsWith: function(t, e) { return this._addCondition(t, "$regex", this._quote(e) + "$"), this }, ascending: function(t) { return f(t, "undefined is not a valid key"), this._order = t, this }, addAscending: function(t) { return f(t, "undefined is not a valid key"), this._order ? this._order += "," + t : this._order = t, this }, descending: function(t) { return f(t, "undefined is not a valid key"), this._order = "-" + t, this }, addDescending: function(t) { return f(t, "undefined is not a valid key"), this._order ? this._order += ",-" + t : this._order = "-" + t, this }, near: function(e, n) { return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), this._addCondition(e, "$nearSphere", n), this }, withinRadians: function(t, e, n) { return this.near(t, e), this._addCondition(t, "$maxDistance", n), this }, withinMiles: function(t, e, n) { return this.withinRadians(t, e, n / 3958.8) }, withinKilometers: function(t, e, n) { return this.withinRadians(t, e, n / 6371) }, withinGeoBox: function(e, n, r) { return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), r instanceof t.GeoPoint || (r = new t.GeoPoint(r)), this._addCondition(e, "$within", { $box: [n, r] }), this }, include: function(t) { var e = this; return f(t, "undefined is not a valid key"), r(arguments).forEach(function(t) { e._include = e._include.concat(l(t)) }), this }, includeACL: function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return this._includeACL = t, this }, select: function(t) { var e = this; return f(t, "undefined is not a valid key"), r(arguments).forEach(function(t) { e._select = e._select.concat(l(t)) }), this }, each: function(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (this._order || this._skip || this._limit >= 0) { var i = new Error("Cannot iterate on a query with sort, skip, or limit."); return t.Promise.reject(i) } var s = new t.Query(this.objectClass);
                    s._limit = n.batchSize || 100, s._where = r.clone(this._where), s._include = r.clone(this._include), s.ascending("objectId"); var o = !1; return t.Promise._continueWhile(function() { return !o }, function() { return s.find(n).then(function(n) { var i = t.Promise.resolve(); return r.each(n, function(t) { i = i.then(function() { return e(t) }) }), i.then(function() { n.length >= s._limit ? s.greaterThan("objectId", n[n.length - 1].id) : o = !0 }) }) }) }, subscribe: function(e) { return t.LiveQuery.init(this, e) } }), t.FriendShipQuery = t.Query._extend({ _objectClass: t.User, _newObject: function() { return new t.User }, _processResult: function(t) { if (t && t[this._friendshipTag]) { var e = t[this._friendshipTag]; return "Pointer" === e.__type && "_User" === e.className && (delete e.__type, delete e.className), e } return null } }) } }, function(t, e, n) { "use strict"; var r = n(0);
        t.exports = function(t) { t.Relation = function(t, e) { if (!r.isString(e)) throw new TypeError("key must be a string");
                this.parent = t, this.key = e, this.targetClassName = null }, t.Relation.reverseQuery = function(e, n, r) { var i = new t.Query(e); return i.equalTo(n, r._toPointer()), i }, r.extend(t.Relation.prototype, { _ensureParentAndKey: function(t, e) { if (this.parent = this.parent || t, this.key = this.key || e, this.parent !== t) throw new Error("Internal Error. Relation retrieved from two different Objects."); if (this.key !== e) throw new Error("Internal Error. Relation retrieved from two different keys.") }, add: function(e) { r.isArray(e) || (e = [e]); var n = new t.Op.Relation(e, []);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName }, remove: function(e) { r.isArray(e) || (e = [e]); var n = new t.Op.Relation([], e);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName }, toJSON: function() { return { __type: "Relation", className: this.targetClassName } }, query: function() { var e, n; return this.targetClassName ? (e = t.Object._getSubclass(this.targetClassName), n = new t.Query(e)) : (e = t.Object._getSubclass(this.parent.className), n = new t.Query(e), n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n } }) } }, function(t, e, n) { "use strict"; var r = n(0),
            i = n(4);
        t.exports = function(t) { t.Role = t.Object.extend("_Role", { constructor: function(e, n) { if (r.isString(e) ? (t.Object.prototype.constructor.call(this, null, null), this.setName(e)) : t.Object.prototype.constructor.call(this, e, n), n) { if (!(n instanceof t.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
                        this.setACL(n) } }, getName: function() { return this.get("name") }, setName: function(t, e) { return this.set("name", t, e) }, getUsers: function() { return this.relation("users") }, getRoles: function() { return this.relation("roles") }, validate: function(e, n) { if ("name" in e && e.name !== this.getName()) { var s = e.name; if (this.id && this.id !== e.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved."); if (!r.isString(s)) return new i(i.OTHER_CAUSE, "A role's name must be a String."); if (!/^[0-9a-zA-Z\-_ ]+$/.test(s)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.") } return !!t.Object.prototype.validate && t.Object.prototype.validate.call(this, e, n) } }) } }, function(t, e, n) { "use strict"; var r = n(0),
            i = n(2)._request;
        t.exports = function(t) { t.SearchSortBuilder = function() { this._sortFields = [] }, r.extend(t.SearchSortBuilder.prototype, { _addField: function(t, e, n, r) { var i = {}; return i[t] = { order: e || "asc", mode: n || "avg", missing: "_" + (r || "last") }, this._sortFields.push(i), this }, ascending: function(t, e, n) { return this._addField(t, "asc", e, n) }, descending: function(t, e, n) { return this._addField(t, "desc", e, n) }, whereNear: function(t, e, n) { n = n || {}; var r = {},
                        i = { lat: e.latitude, lon: e.longitude },
                        s = { order: n.order || "asc", mode: n.mode || "avg", unit: n.unit || "km" }; return s[t] = i, r._geo_distance = s, this._sortFields.push(r), this }, build: function() { return JSON.stringify(t._encode(this._sortFields)) } }), t.SearchQuery = t.Query._extend({ _sid: null, _hits: 0, _queryString: null, _highlights: null, _sortBuilder: null, _createRequest: function(t, e) { return i("search/select", null, null, "GET", t || this.toJSON(), e) }, sid: function(t) { return this._sid = t, this }, queryString: function(t) { return this._queryString = t, this }, highlights: function(t) { var e; return e = t && r.isString(t) ? arguments : t, this._highlights = e, this }, sortBy: function(t) { return this._sortBuilder = t, this }, hits: function() { return this._hits || (this._hits = 0), this._hits }, _processResult: function(t) { return delete t.className, delete t._app_url, delete t._deeplink, t }, hasMore: function() { return !this._hitEnd }, reset: function() { this._hitEnd = !1, this._sid = null, this._hits = 0 }, find: function() { var t = this; return this._createRequest().then(function(e) { return e.sid ? (t._oldSid = t._sid, t._sid = e.sid) : (t._sid = null, t._hitEnd = !0), t._hits = e.hits || 0, r.map(e.results, function(n) { n.className && (e.className = n.className); var r = t._newObject(e); return r.appURL = n._app_url, r._finishFetch(t._processResult(n), !0), r }) }) }, toJSON: function() { var e = t.SearchQuery.__super__.toJSON.call(this); if (delete e.where, this.className && (e.clazz = this.className), this._sid && (e.sid = this._sid), !this._queryString) throw new Error("Please set query string."); if (e.q = this._queryString, this._highlights && (e.highlights = this._highlights.join(",")), this._sortBuilder && e.order) throw new Error("sort and order can not be set at same time."); return this._sortBuilder && (e.sort = this._sortBuilder.build()), e } }) } }, function(t, e, n) { "use strict"; var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            i = n(0),
            s = n(2)._request,
            o = n(3),
            a = o.getSessionToken;
        t.exports = function(t) { var e = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return a(e) ? t.User._fetchUserBySessionToken(a(e)) : t.User.currentAsync() },
                n = function(n) { return e(n).then(function(e) { return t.Object.createWithoutData("_User", e.id)._toPointer() }) };
            t.Status = function(t, e) { return this.data = {}, this.inboxType = "default", this.query = null, t && "object" === (void 0 === t ? "undefined" : r(t)) ? this.data = t : (t && (this.data.image = t), e && (this.data.message = e)), this }, i.extend(t.Status.prototype, { get: function(t) { return this.data[t] }, set: function(t, e) { return this.data[t] = e, this }, destroy: function(e) { return this.id ? s("statuses", null, this.id, "DELETE", e) : t.Promise.reject(new Error("The status id is not exists.")) }, toObject: function() { return this.id ? t.Object.createWithoutData("_Status", this.id) : null }, _getDataJSON: function() { var e = i.clone(this.data); return t._encode(e) }, send: function() { var e = this,
                        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if (!a(r) && !t.User.current()) throw new Error("Please signin an user."); return this.query ? n(r).then(function(t) { var n = e.query.toJSON();
                        n.className = e.query.className; var i = {}; return i.query = n, e.data = e.data || {}, e.data.source = e.data.source || t, i.data = e._getDataJSON(), i.inboxType = e.inboxType || "default", s("statuses", null, null, "POST", i, r) }).then(function(n) { return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e }) : t.Status.sendStatusToFollowers(this, r) }, _finishFetch: function(e) { this.id = e.objectId, this.createdAt = t._parseDate(e.createdAt), this.updatedAt = t._parseDate(e.updatedAt), this.messageId = e.messageId, delete e.messageId, delete e.objectId, delete e.createdAt, delete e.updatedAt, this.data = t._decode(e) } }), t.Status.sendStatusToFollowers = function(e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!a(r) && !t.User.current()) throw new Error("Please signin an user."); return n(r).then(function(n) { var i = {};
                    i.className = "_Follower", i.keys = "follower", i.where = { user: n }; var o = {}; return o.query = i, e.data = e.data || {}, e.data.source = e.data.source || n, o.data = e._getDataJSON(), o.inboxType = e.inboxType || "default", s("statuses", null, null, "POST", o, r).then(function(n) { return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e }) }) }, t.Status.sendPrivateStatus = function(e, r) { var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; if (!a(o) && !t.User.current()) throw new Error("Please signin an user."); if (!r) throw new Error("Invalid target user."); var u = i.isString(r) ? r : r.id; if (!u) throw new Error("Invalid target user."); return n(o).then(function(n) { var r = {};
                    r.className = "_User", r.where = { objectId: u }; var i = {}; return i.query = r, e.data = e.data || {}, e.data.source = e.data.source || n, i.data = e._getDataJSON(), i.inboxType = "private", e.inboxType = "private", s("statuses", null, null, "POST", i, o).then(function(n) { return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e }) }) }, t.Status.countUnreadStatuses = function(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; if (i.isString(r) || (o = r), !a(o) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId."); return e(o).then(function(e) { var n = {}; return n.inboxType = t._encode(r), n.owner = t._encode(e), s("subscribe/statuses/count", null, null, "GET", n, o) }) }, t.Status.resetUnreadCount = function(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; if (i.isString(r) || (o = r), !a(o) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId."); return e(o).then(function(e) { var n = {}; return n.inboxType = t._encode(r), n.owner = t._encode(e), s("subscribe/statuses/resetUnreadCount", null, null, "POST", n, o) }) }, t.Status.statusQuery = function(e) { var n = new t.Query("_Status"); return e && n.equalTo("source", e), n }, t.InboxQuery = t.Query._extend({ _objectClass: t.Status, _sinceId: 0, _maxId: 0, _inboxType: "default", _owner: null, _newObject: function() { return new t.Status }, _createRequest: function(t, e) { return s("subscribe/statuses", null, null, "GET", t || this.toJSON(), e) }, sinceId: function(t) { return this._sinceId = t, this }, maxId: function(t) { return this._maxId = t, this }, owner: function(t) { return this._owner = t, this }, inboxType: function(t) { return this._inboxType = t, this }, toJSON: function() { var e = t.InboxQuery.__super__.toJSON.call(this); return e.owner = t._encode(this._owner), e.inboxType = t._encode(this._inboxType), e.sinceId = t._encode(this._sinceId), e.maxId = t._encode(this._maxId), e } }), t.Status.inboxQuery = function(e, n) { var r = new t.InboxQuery(t.Status); return e && (r._owner = e), n && (r._inboxType = n), r } } }, function(t, e, n) { "use strict"; var r = n(0),
            i = n(4),
            s = n(2)._request,
            o = n(1),
            a = function() { if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp"); return new o(function(t, e) { wx.login({ success: function(n) { var r = n.code,
                                i = n.errMsg;
                            r ? t(r) : e(new Error(i)) }, fail: function() { return e(new Error("wx.login å¤±è´¥")) } }) }) };
        t.exports = function(t) { t.User = t.Object.extend("_User", { _isCurrentUser: !1, _mergeMagicFields: function(e) { e.sessionToken && (this._sessionToken = e.sessionToken, delete e.sessionToken), t.User.__super__._mergeMagicFields.call(this, e) }, _cleanupAuthData: function() { if (this.isCurrent()) { var e = this.get("authData");
                        e && t._objectEach(this.get("authData"), function(t, n) { e[n] || delete e[n] }) } }, _synchronizeAllAuthData: function() { if (this.get("authData")) { var e = this;
                        t._objectEach(this.get("authData"), function(t, n) { e._synchronizeAuthData(n) }) } }, _synchronizeAuthData: function(e) { if (this.isCurrent()) { var n;
                        r.isString(e) ? (n = e, e = t.User._authProviders[n]) : n = e.getAuthType(); var i = this.get("authData"); if (i && e) { e.restoreAuthentication(i[n]) || this._unlinkFrom(e) } } }, _handleSaveResult: function(e) { return e && !t._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !e && !this.isCurrent() || t._config.disableCurrentUser ? o.resolve() : o.resolve(t.User._saveCurrentUser(this)) }, _linkWith: function(e, n) { var i, s = this; if (r.isString(e) ? (i = e, e = t.User._authProviders[e]) : i = e.getAuthType(), n) { var o = this.get("authData") || {}; return o[i] = n, this.save({ authData: o }).then(function(t) { return t._handleSaveResult(!0).then(function() { return t }) }) } return e.authenticate().then(function(t) { return s._linkWith(e, t) }) }, linkWithWeapp: function() { var t = this; return a().then(function(e) { return t._linkWith("lc_weapp", { code: e }) }) }, _unlinkFrom: function(e) { var n = this; return r.isString(e) && (e = t.User._authProviders[e]), this._linkWith(e, null).then(function(t) { return n._synchronizeAuthData(e), t }) }, _isLinked: function(t) { var e; return e = r.isString(t) ? t : t.getAuthType(), !!(this.get("authData") || {})[e] }, logOut: function() { this._logOutWithAll(), this._isCurrentUser = !1 }, _logOutWithAll: function() { if (this.get("authData")) { var e = this;
                        t._objectEach(this.get("authData"), function(t, n) { e._logOutWith(n) }) } }, _logOutWith: function(e) { this.isCurrent() && (r.isString(e) && (e = t.User._authProviders[e]), e && e.deauthenticate && e.deauthenticate()) }, signUp: function(t, e) { var n = t && t.username || this.get("username"); if (!n || "" === n) throw new i(i.OTHER_CAUSE, "Cannot sign up user with an empty name."); var r = t && t.password || this.get("password"); if (!r || "" === r) throw new i(i.OTHER_CAUSE, "Cannot sign up user with an empty password."); return this.save(t, e).then(function(t) { return t._handleSaveResult(!0).then(function() { return t }) }) }, signUpOrlogInWithMobilePhone: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t && t.mobilePhoneNumber || this.get("mobilePhoneNumber"); if (!n || "" === n) throw new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber."); var r = t && t.smsCode || this.get("smsCode"); if (!r || "" === r) throw new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode."); return e._makeRequest = function(t, e, n, r, i) { return s("usersByMobilePhone", null, null, "POST", i) }, this.save(t, e).then(function(t) { return delete t.attributes.smsCode, delete t._serverData.smsCode, t._handleSaveResult(!0).then(function() { return t }) }) }, logIn: function() { var t = this; return s("login", null, null, "POST", this.toJSON()).then(function(e) { var n = t.parse(e); return t._finishFetch(n), t._handleSaveResult(!0).then(function() { return n.smsCode || delete t.attributes.smsCode, t }) }) }, save: function(e, n, i) { var s, o; return r.isObject(e) || r.isNull(e) || r.isUndefined(e) ? (s = e, o = n) : (s = {}, s[e] = n, o = i), o = o || {}, t.Object.prototype.save.call(this, s, o).then(function(t) { return t._handleSaveResult(!1).then(function() { return t }) }) }, follow: function(e, n) { if (!this.id) throw new Error("Please signin."); var i = void 0,
                        o = void 0;
                    e.user ? (i = e.user, o = e.attributes) : i = e; var a = r.isString(i) ? i : i.id; if (!a) throw new Error("Invalid target user."); var u = "users/" + this.id + "/friendship/" + a; return s(u, null, null, "POST", t._encode(o), n) }, unfollow: function(t, e) { if (!this.id) throw new Error("Please signin."); var n = void 0;
                    n = t.user ? t.user : t; var i = r.isString(n) ? n : n.id; if (!i) throw new Error("Invalid target user."); var o = "users/" + this.id + "/friendship/" + i; return s(o, null, null, "DELETE", null, e) }, followerQuery: function() { return t.User.followerQuery(this.id) }, followeeQuery: function() { return t.User.followeeQuery(this.id) }, fetch: function(e, n) { return t.Object.prototype.fetch.call(this, e, n).then(function(t) { return t._handleSaveResult(!1).then(function() { return t }) }) }, updatePassword: function(t, e, n) { var r = "users/" + this.id + "/updatePassword"; return s(r, null, null, "PUT", { old_password: t, new_password: e }, n) }, isCurrent: function() { return this._isCurrentUser }, getUsername: function() { return this.get("username") }, getMobilePhoneNumber: function() { return this.get("mobilePhoneNumber") }, setMobilePhoneNumber: function(t, e) { return this.set("mobilePhoneNumber", t, e) }, setUsername: function(t, e) { return this.set("username", t, e) }, setPassword: function(t, e) { return this.set("password", t, e) }, getEmail: function() { return this.get("email") }, setEmail: function(t, e) { return this.set("email", t, e) }, authenticated: function() { return console.warn("DEPRECATED: å¦‚æžœè¦åˆ¤æ–­å½“å‰ç”¨æˆ·çš„ç™»å½•çŠ¶æ€æ˜¯å¦æœ‰æ•ˆï¼Œè¯·ä½¿ç”¨ currentUser.isAuthenticated().then()ï¼Œå¦‚æžœè¦åˆ¤æ–­è¯¥ç”¨æˆ·æ˜¯å¦æ˜¯å½“å‰ç™»å½•ç”¨æˆ·ï¼Œè¯·ä½¿ç”¨ user.id === currentUser.idã€‚"), !!this._sessionToken && !t._config.disableCurrentUser && t.User.current() && t.User.current().id === this.id }, isAuthenticated: function() { var e = this; return o.resolve().then(function() { return !!e._sessionToken && t.User._fetchUserBySessionToken(e._sessionToken).then(function() { return !0 }, function(t) { if (211 === t.code) return !1; throw t }) }) }, getSessionToken: function() { return this._sessionToken }, refreshSessionToken: function(t) { var e = this; return s("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, t).then(function(t) { return e._finishFetch(t), e._handleSaveResult(!0).then(function() { return e }) }) }, getRoles: function(e) { return t.Relation.reverseQuery("_Role", "users", this).find(e) } }, { _currentUser: null, _currentUserMatchesDisk: !1, _CURRENT_USER_KEY: "currentUser", _authProviders: {}, signUp: function(e, n, r, i) { return r = r || {}, r.username = e, r.password = n, t.Object._create("_User").signUp(r, i) }, logIn: function(e, n, r) { var i = t.Object._create("_User"); return i._finishFetch({ username: e, password: n }), i.logIn(r) }, become: function(t) { return this._fetchUserBySessionToken(t).then(function(t) { return t._handleSaveResult(!0).then(function() { return t }) }) }, _fetchUserBySessionToken: function(e) { var n = t.Object._create("_User"); return s("users", "me", null, "GET", { session_token: e }).then(function(t) { var e = n.parse(t); return n._finishFetch(e), n }) }, logInWithMobilePhoneSmsCode: function(e, n, r) { var i = t.Object._create("_User"); return i._finishFetch({ mobilePhoneNumber: e, smsCode: n }), i.logIn(r) }, signUpOrlogInWithMobilePhone: function(e, n, r, i) { return r = r || {}, r.mobilePhoneNumber = e, r.smsCode = n, t.Object._create("_User").signUpOrlogInWithMobilePhone(r, i) }, logInWithMobilePhone: function(e, n, r) { var i = t.Object._create("_User"); return i._finishFetch({ mobilePhoneNumber: e, password: n }), i.logIn(r) }, signUpOrlogInWithAuthData: function(e, n) { return t.User._logInWith(n, e) }, loginWithWeapp: function() { var t = this; return a().then(function(e) { return t.signUpOrlogInWithAuthData({ code: e }, "lc_weapp") }) }, associateWithAuthData: function(t, e, n) { return t._linkWith(e, n) }, logOut: function() { return t._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), o.resolve(null)) : (null !== t.User._currentUser && (t.User._currentUser._logOutWithAll(), t.User._currentUser._isCurrentUser = !1), t.User._currentUserMatchesDisk = !0, t.User._currentUser = null, t.localStorage.removeItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function() { return t._refreshSubscriptionId() })) }, followerQuery: function(e) { if (!e || !r.isString(e)) throw new Error("Invalid user object id."); var n = new t.FriendShipQuery("_Follower"); return n._friendshipTag = "follower", n.equalTo("user", t.Object.createWithoutData("_User", e)), n }, followeeQuery: function(e) { if (!e || !r.isString(e)) throw new Error("Invalid user object id."); var n = new t.FriendShipQuery("_Followee"); return n._friendshipTag = "followee", n.equalTo("user", t.Object.createWithoutData("_User", e)), n }, requestPasswordReset: function(t) { return s("requestPasswordReset", null, null, "POST", { email: t }) }, requestEmailVerify: function(t) { return s("requestEmailVerify", null, null, "POST", { email: t }) }, requestMobilePhoneVerify: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = { mobilePhoneNumber: t }; return e.validateToken && (n.validate_token = e.validateToken), s("requestMobilePhoneVerify", null, null, "POST", n, e) }, requestPasswordResetBySmsCode: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = { mobilePhoneNumber: t }; return e.validateToken && (n.validate_token = e.validateToken), s("requestPasswordResetBySmsCode", null, null, "POST", n, e) }, resetPasswordBySmsCode: function(t, e) { return s("resetPasswordBySmsCode", null, t, "PUT", { password: e }) }, verifyMobilePhone: function(t) { return s("verifyMobilePhone", null, t, "POST", null) }, requestLoginSmsCode: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = { mobilePhoneNumber: t }; return e.validateToken && (n.validate_token = e.validateToken), s("requestLoginSmsCode", null, null, "POST", n, e) }, currentAsync: function() { return t._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), o.resolve(null)) : t.User._currentUser ? o.resolve(t.User._currentUser) : t.User._currentUserMatchesDisk ? o.resolve(t.User._currentUser) : t.localStorage.getItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function(e) { if (!e) return null;
                        t.User._currentUserMatchesDisk = !0, t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0; var n = JSON.parse(e); return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser }) }, current: function() { if (t._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null; if (t.User._currentUser) return t.User._currentUser; if (t.User._currentUserMatchesDisk) return t.User._currentUser;
                    t.User._currentUserMatchesDisk = !0; var e = t.localStorage.getItem(t._getAVPath(t.User._CURRENT_USER_KEY)); if (!e) return null;
                    t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0; var n = JSON.parse(e); return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser }, _saveCurrentUser: function(e) { var n; return n = t.User._currentUser !== e ? t.User.logOut() : o.resolve(), n.then(function() { e._isCurrentUser = !0, t.User._currentUser = e; var n = e.toJSON(); return n._id = e.id, n._sessionToken = e._sessionToken, t.localStorage.setItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function() { return t.User._currentUserMatchesDisk = !0, t._refreshSubscriptionId() }) }) }, _registerAuthenticationProvider: function(e) { t.User._authProviders[e.getAuthType()] = e, !t._config.disableCurrentUser && t.User.current() && t.User.current()._synchronizeAuthData(e.getAuthType()) }, _logInWith: function(e, n) { return t.Object._create("_User")._linkWith(e, n) } }) } }, function(t, e, n) { "use strict";

        function r(t) { var e = this;
            this.AV = t, this.lockedUntil = 0, o.getAsync("serverURLs").then(function(t) { if (!t) return e.lock(0); var n = t.serverURLs,
                    r = t.lockedUntil;
                e.AV._setServerURLs(n, !1), e.lockedUntil = r }).catch(function() { return e.lock(0) }) } var i = n(3),
            s = i.ajax,
            o = n(10);
        r.prototype.disable = function() { this.disabled = !0 }, r.prototype.lock = function(t) { this.lockedUntil = Date.now() + t }, r.prototype.refresh = function() { var t = this; if (!(this.disabled || Date.now() < this.lockedUntil)) { this.lock(10); return s({ method: "get", url: "https://app-router.leancloud.cn/2/route", query: { appId: this.AV.applicationId } }).then(function(e) { if (!t.disabled) { var n = e.ttl; if (!n) throw new Error("missing ttl");
                        n *= 1e3; var r = { push: "https://" + e.push_server, stats: "https://" + e.stats_server, engine: "https://" + e.engine_server, api: "https://" + e.api_server }; return t.AV._setServerURLs(r, !1), t.lock(n), o.setAsync("serverURLs", { serverURLs: r, lockedUntil: t.lockedUntil }, n) } }).catch(function(e) { console.warn("refresh server URLs failed: " + e.message), t.lock(600) }) } }, t.exports = r }, function(t, e, n) {
        "use strict";
        /*!
         * LeanCloud JavaScript SDK
         * https://leancloud.cn
         *
         * Copyright 2016 LeanCloud.cn, Inc.
         * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
         */
        n(26);
        var r = n(5);
        r._ = n(0), r.version = n(12), r.Promise = n(1), r.localStorage = n(11), r.Cache = n(10), r.Error = n(4), n(21), n(18)(r), n(20)(r), n(14)(r), n(25)(r), n(29)(r), n(19)(r), n(24)(r), n(30)(r), n(33)(r), n(28)(r), n(23)(r), n(15)(r), n(16)(r), n(27)(r), n(32)(r), n(31)(r), n(22)(r), r.Conversation = n(17), t.exports = r
    }, function(t, e, n) { "use strict";
        t.exports = [] }, function(t, e, n) { "use strict"; var r = n(12),
            i = ["Browser"].concat(n(36));
        t.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")" }, function(t, e, n) { "use strict"; var r = n(7),
            i = n(6)("cos"),
            s = n(1);
        t.exports = function(t, e, n) { var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId; var a = t.upload_url + "?sign=" + encodeURIComponent(t.token); return new s(function(t, s) { var u = r("POST", a).field("fileContent", e).field("op", "upload");
                o.onprogress && u.on("progress", o.onprogress), u.end(function(e, r) { if (r && i(r.status, r.body, r.text), e) return r && (e.statusCode = r.status, e.responseText = r.text, e.response = r.body), s(e);
                    t(n) }) }) } }, function(t, e, n) { "use strict"; var r = n(7),
            i = n(1),
            s = n(6)("qiniu");
        t.exports = function(t, e, n) { var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId; var a = t.token; return new i(function(t, i) { var u = r("POST", "https://up.qbox.me").field("file", e).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
                o.onprogress && u.on("progress", o.onprogress), u.end(function(e, r) { if (r && s(r.status, r.body, r.text), e) return r && (e.statusCode = r.status, e.responseText = r.text, e.response = r.body), i(e);
                    t(n) }) }) } }, function(t, e, n) { "use strict"; var r = n(7),
            i = n(1),
            s = function(t, e) { return e && (t.statusCode = e.status, t.responseText = e.text, t.response = e.body), t };
        t.exports = function(t, e, n) { var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; return n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId, new i(function(i, a) { var u = r("PUT", t.upload_url).set("Content-Type", n.get("mime_type"));
                o.onprogress && u.on("progress", o.onprogress), u.on("response", function(t) { if (t.ok) return i(n);
                    a(s(t.error, t)) }), u.on("error", function(t, e) { return a(s(t, e)) }), u.send(e).end() }) } }, function(t, e, n) { "use strict";
        (function(e) { var r = n(0),
                i = (n(1), {}),
                s = ["getItem", "setItem", "removeItem", "clear"],
                o = e.localStorage; try { var a = "__storejs__"; if (o.setItem(a, a), o.getItem(a) != a) throw new Error;
                o.removeItem(a) } catch (t) { o = n(49) } r(s).each(function(t) { i[t] = function() { return o[t].apply(o, arguments) } }), i.async = !1, t.exports = i }).call(e, n(9)) }, function(t, e, n) { "use strict"; var r = function(t, e) { var n;
            t.indexOf("base64") < 0 ? n = atob(t) : t.split(",")[0].indexOf("base64") >= 0 ? (e = e || t.split(",")[0].split(":")[1].split(";")[0], n = atob(t.split(",")[1])) : n = unescape(t.split(",")[1]); for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i); return new Blob([r], { type: e }) };
        t.exports = r }, function(t, e, n) {
        function r(t) { if (t) return i(t) }

        function i(t) { for (var e in r.prototype) t[e] = r.prototype[e]; return t } t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this }, r.prototype.once = function(t, e) {
            function n() { this.off(t, n), e.apply(this, arguments) } return n.fn = e, this.on(t, n), this }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this; var n = this._callbacks["$" + t]; if (!n) return this; if (1 == arguments.length) return delete this._callbacks["$" + t], this; for (var r, i = 0; i < n.length; i++)
                if ((r = n[i]) === e || r.fn === e) { n.splice(i, 1); break }
            return this }, r.prototype.emit = function(t) { this._callbacks = this._callbacks || {}; var e = [].slice.call(arguments, 1),
                n = this._callbacks["$" + t]; if (n) { n = n.slice(0); for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, e) } return this }, r.prototype.listeners = function(t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [] }, r.prototype.hasListeners = function(t) { return !!this.listeners(t).length } }, function(t, e) {! function() { var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                n = { rotl: function(t, e) { return t << e | t >>> 32 - e }, rotr: function(t, e) { return t << 32 - e | t >>> e }, endian: function(t) { if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24); for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]); return t }, randomBytes: function(t) { for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random())); return e }, bytesToWords: function(t) { for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32; return e }, wordsToBytes: function(t) { for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255); return e }, bytesToHex: function(t) { for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16)); return e.join("") }, hexToBytes: function(t) { for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16)); return e }, bytesToBase64: function(t) { for (var n = [], r = 0; r < t.length; r += 3)
                            for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], s = 0; s < 4; s++) 8 * r + 6 * s <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - s) & 63)) : n.push("="); return n.join("") }, base64ToBytes: function(t) { t = t.replace(/[^A-Z0-9+\/]/gi, ""); for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i); return n } };
            t.exports = n }() }, function(t, e, n) {
        function r(t) { var n, r = 0; for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0; return e.colors[Math.abs(r) % e.colors.length] }

        function i(t) {
            function n() { if (n.enabled) { var t = n,
                        r = +new Date,
                        i = r - (c || r);
                    t.diff = i, t.prev = c, t.curr = r, c = r; for (var s = new Array(arguments.length), o = 0; o < s.length; o++) s[o] = arguments[o];
                    s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O"); var a = 0;
                    s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) { if ("%%" === n) return n;
                        a++; var i = e.formatters[r]; if ("function" == typeof i) { var o = s[a];
                            n = i.call(t, o), s.splice(a, 1), a-- } return n }), e.formatArgs.call(t, s);
                    (n.log || e.log || console.log.bind(console)).apply(t, s) } } return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), "function" == typeof e.init && e.init(n), n }

        function s(t) { e.save(t), e.names = [], e.skips = []; for (var n = ("string" == typeof t ? t : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (t = n[i].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$"))) }

        function o() { e.enable("") }

        function a(t) { var n, r; for (n = 0, r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t)) return !1; for (n = 0, r = e.names.length; n < r; n++)
                if (e.names[n].test(t)) return !0; return !1 }

        function u(t) { return t instanceof Error ? t.stack || t.message : t } e = t.exports = i.debug = i.default = i, e.coerce = u, e.disable = o, e.enable = s, e.enabled = a, e.humanize = n(51), e.names = [], e.skips = [], e.formatters = {}; var c }, function(t, e, n) {
        (function(e) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
             * @version   4.1.1
             */
            ! function(e, n) { t.exports = n() }(0, function() { "use strict";

                function t(t) { var e = typeof t; return null !== t && ("object" === e || "function" === e) }

                function r(t) { return "function" == typeof t }

                function i(t) { V = t }

                function s(t) { W = t }

                function o() { return void 0 !== Q ? function() { Q(u) } : a() }

                function a() { var t = setTimeout; return function() { return t(u, 1) } }

                function u() { for (var t = 0; t < B; t += 2) {
                        (0, X[t])(X[t + 1]), X[t] = void 0, X[t + 1] = void 0 } B = 0 }

                function c(t, e) { var n = arguments,
                        r = this,
                        i = new this.constructor(h);
                    void 0 === i[Z] && x(i); var s = r._state; return s ? function() { var t = n[s - 1];
                        W(function() { return N(s, i, t, r._result) }) }() : S(r, i, t, e), i }

                function l(t) { var e = this; if (t && "object" == typeof t && t.constructor === e) return t; var n = new e(h); return g(n, t), n }

                function h() {}

                function f() { return new TypeError("You cannot resolve a promise with itself") }

                function d() { return new TypeError("A promises callback cannot return that same promise.") }

                function p(t) { try { return t.then } catch (t) { return rt.error = t, rt } }

                function _(t, e, n, r) { try { t.call(e, n, r) } catch (t) { return t } }

                function v(t, e, n) { W(function(t) { var r = !1,
                            i = _(n, e, function(n) { r || (r = !0, e !== n ? g(t, n) : w(t, n)) }, function(e) { r || (r = !0, O(t, e)) }, "Settle: " + (t._label || " unknown promise"));!r && i && (r = !0, O(t, i)) }, t) }

                function m(t, e) { e._state === et ? w(t, e._result) : e._state === nt ? O(t, e._result) : S(e, void 0, function(e) { return g(t, e) }, function(e) { return O(t, e) }) }

                function y(t, e, n) { e.constructor === t.constructor && n === c && e.constructor.resolve === l ? m(t, e) : n === rt ? (O(t, rt.error), rt.error = null) : void 0 === n ? w(t, e) : r(n) ? v(t, e, n) : w(t, e) }

                function g(e, n) { e === n ? O(e, f()) : t(n) ? y(e, n, p(n)) : w(e, n) }

                function b(t) { t._onerror && t._onerror(t._result), A(t) }

                function w(t, e) { t._state === tt && (t._result = e, t._state = et, 0 !== t._subscribers.length && W(A, t)) }

                function O(t, e) { t._state === tt && (t._state = nt, t._result = e, W(b, t)) }

                function S(t, e, n, r) { var i = t._subscribers,
                        s = i.length;
                    t._onerror = null, i[s] = e, i[s + et] = n, i[s + nt] = r, 0 === s && t._state && W(A, t) }

                function A(t) { var e = t._subscribers,
                        n = t._state; if (0 !== e.length) { for (var r = void 0, i = void 0, s = t._result, o = 0; o < e.length; o += 3) r = e[o], i = e[o + n], r ? N(n, r, i, s) : i(s);
                        t._subscribers.length = 0 } }

                function E() { this.error = null }

                function T(t, e) { try { return t(e) } catch (t) { return it.error = t, it } }

                function N(t, e, n, i) { var s = r(n),
                        o = void 0,
                        a = void 0,
                        u = void 0,
                        c = void 0; if (s) { if (o = T(n, i), o === it ? (c = !0, a = o.error, o.error = null) : u = !0, e === o) return void O(e, d()) } else o = i, u = !0;
                    e._state !== tt || (s && u ? g(e, o) : c ? O(e, a) : t === et ? w(e, o) : t === nt && O(e, o)) }

                function C(t, e) { try { e(function(e) { g(t, e) }, function(e) { O(t, e) }) } catch (e) { O(t, e) } }

                function j() { return st++ }

                function x(t) { t[Z] = st++, t._state = void 0, t._result = void 0, t._subscribers = [] }

                function U(t, e) { this._instanceConstructor = t, this.promise = new t(h), this.promise[Z] || x(this.promise), J(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && w(this.promise, this._result))) : O(this.promise, k()) }

                function k() { return new Error("Array Methods must be provided an Array") }

                function I(t) { return new U(this, t).promise }

                function R(t) { var e = this; return new e(J(t) ? function(n, r) { for (var i = t.length, s = 0; s < i; s++) e.resolve(t[s]).then(n, r) } : function(t, e) { return e(new TypeError("You must pass an array to race.")) }) }

                function P(t) { var e = this,
                        n = new e(h); return O(n, t), n }

                function D() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }

                function L() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }

                function q(t) { this[Z] = j(), this._result = this._state = void 0, this._subscribers = [], h !== t && ("function" != typeof t && D(), this instanceof q ? C(this, t) : L()) }

                function M() { var t = void 0; if (void 0 !== e) t = e;
                    else if ("undefined" != typeof self) t = self;
                    else try { t = Function("return this")() } catch (t) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                    var n = t.Promise; if (n) { var r = null; try { r = Object.prototype.toString.call(n.resolve()) } catch (t) {} if ("[object Promise]" === r && !n.cast) return } t.Promise = q } var F = void 0;
                F = Array.isArray ? Array.isArray : function(t) { return "[object Array]" === Object.prototype.toString.call(t) }; var J = F,
                    B = 0,
                    Q = void 0,
                    V = void 0,
                    W = function(t, e) { X[B] = t, X[B + 1] = e, 2 === (B += 2) && (V ? V(u) : Y()) },
                    K = "undefined" != typeof window ? window : void 0,
                    G = K || {},
                    z = G.MutationObserver || G.WebKitMutationObserver,
                    H = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                    $ = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    X = new Array(1e3),
                    Y = void 0;
                Y = H ? function() { return function() { return process.nextTick(u) } }() : z ? function() { var t = 0,
                        e = new z(u),
                        n = document.createTextNode(""); return e.observe(n, { characterData: !0 }),
                        function() { n.data = t = ++t % 2 } }() : $ ? function() { var t = new MessageChannel; return t.port1.onmessage = u,
                        function() { return t.port2.postMessage(0) } }() : void 0 === K ? function() { try { var t = n(57); return Q = t.runOnLoop || t.runOnContext, o() } catch (t) { return a() } }() : a(); var Z = Math.random().toString(36).substring(16),
                    tt = void 0,
                    et = 1,
                    nt = 2,
                    rt = new E,
                    it = new E,
                    st = 0; return U.prototype._enumerate = function(t) { for (var e = 0; this._state === tt && e < t.length; e++) this._eachEntry(t[e], e) }, U.prototype._eachEntry = function(t, e) { var n = this._instanceConstructor,
                        r = n.resolve; if (r === l) { var i = p(t); if (i === c && t._state !== tt) this._settledAt(t._state, e, t._result);
                        else if ("function" != typeof i) this._remaining--, this._result[e] = t;
                        else if (n === q) { var s = new n(h);
                            y(s, t, i), this._willSettleAt(s, e) } else this._willSettleAt(new n(function(e) { return e(t) }), e) } else this._willSettleAt(r(t), e) }, U.prototype._settledAt = function(t, e, n) { var r = this.promise;
                    r._state === tt && (this._remaining--, t === nt ? O(r, n) : this._result[e] = n), 0 === this._remaining && w(r, this._result) }, U.prototype._willSettleAt = function(t, e) { var n = this;
                    S(t, void 0, function(t) { return n._settledAt(et, e, t) }, function(t) { return n._settledAt(nt, e, t) }) }, q.all = I, q.race = R, q.resolve = l, q.reject = P, q._setScheduler = i, q._setAsap = s, q._asap = W, q.prototype = { constructor: q, then: c, catch: function(t) { return this.then(null, t) } }, q.polyfill = M, q.Promise = q, q })
        }).call(e, n(9))
    }, function(t, e, n) { "use strict";

        function r() {}

        function i(t, e, n) { this.fn = t, this.context = e, this.once = n || !1 }

        function s() { this._events = new r, this._eventsCount = 0 } var o = Object.prototype.hasOwnProperty,
            a = "~";
        Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (a = !1)), s.prototype.eventNames = function() { var t, e, n = []; if (0 === this._eventsCount) return n; for (e in t = this._events) o.call(t, e) && n.push(a ? e.slice(1) : e); return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n }, s.prototype.listeners = function(t, e) { var n = a ? a + t : t,
                r = this._events[n]; if (e) return !!r; if (!r) return []; if (r.fn) return [r.fn]; for (var i = 0, s = r.length, o = new Array(s); i < s; i++) o[i] = r[i].fn; return o }, s.prototype.emit = function(t, e, n, r, i, s) { var o = a ? a + t : t; if (!this._events[o]) return !1; var u, c, l = this._events[o],
                h = arguments.length; if (l.fn) { switch (l.once && this.removeListener(t, l.fn, void 0, !0), h) {
                    case 1:
                        return l.fn.call(l.context), !0;
                    case 2:
                        return l.fn.call(l.context, e), !0;
                    case 3:
                        return l.fn.call(l.context, e, n), !0;
                    case 4:
                        return l.fn.call(l.context, e, n, r), !0;
                    case 5:
                        return l.fn.call(l.context, e, n, r, i), !0;
                    case 6:
                        return l.fn.call(l.context, e, n, r, i, s), !0 } for (c = 1, u = new Array(h - 1); c < h; c++) u[c - 1] = arguments[c];
                l.fn.apply(l.context, u) } else { var f, d = l.length; for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), h) {
                    case 1:
                        l[c].fn.call(l[c].context); break;
                    case 2:
                        l[c].fn.call(l[c].context, e); break;
                    case 3:
                        l[c].fn.call(l[c].context, e, n); break;
                    case 4:
                        l[c].fn.call(l[c].context, e, n, r); break;
                    default:
                        if (!u)
                            for (f = 1, u = new Array(h - 1); f < h; f++) u[f - 1] = arguments[f];
                        l[c].fn.apply(l[c].context, u) } } return !0 }, s.prototype.on = function(t, e, n) { var r = new i(e, n || this),
                s = a ? a + t : t; return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], r] : this._events[s].push(r) : (this._events[s] = r, this._eventsCount++), this }, s.prototype.once = function(t, e, n) { var r = new i(e, n || this, !0),
                s = a ? a + t : t; return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], r] : this._events[s].push(r) : (this._events[s] = r, this._eventsCount++), this }, s.prototype.removeListener = function(t, e, n, i) { var s = a ? a + t : t; if (!this._events[s]) return this; if (!e) return 0 == --this._eventsCount ? this._events = new r : delete this._events[s], this; var o = this._events[s]; if (o.fn) o.fn !== e || i && !o.once || n && o.context !== n || (0 == --this._eventsCount ? this._events = new r : delete this._events[s]);
            else { for (var u = 0, c = [], l = o.length; u < l; u++)(o[u].fn !== e || i && !o[u].once || n && o[u].context !== n) && c.push(o[u]);
                c.length ? this._events[s] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r : delete this._events[s] } return this }, s.prototype.removeAllListeners = function(t) { var e; return t ? (e = a ? a + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new r : delete this._events[e])) : (this._events = new r, this._eventsCount = 0), this }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prototype.setMaxListeners = function() { return this }, s.prefixed = a, s.EventEmitter = s, t.exports = s }, function(t, e) {
        function n(t) { return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t) }

        function r(t) { return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        t.exports = function(t) { return null != t && (n(t) || r(t) || !!t._isBuffer) }
    }, function(t, e, n) {! function(e) { var n = {},
                r = {};
            n.length = 0, n.getItem = function(t) { return r[t] || null }, n.setItem = function(t, e) { void 0 === e ? n.removeItem(t) : (r.hasOwnProperty(t) || n.length++, r[t] = "" + e) }, n.removeItem = function(t) { r.hasOwnProperty(t) && (delete r[t], n.length--) }, n.key = function(t) { return Object.keys(r)[t] || null }, n.clear = function() { r = {}, n.length = 0 }, t.exports = n }() }, function(t, e, n) {! function() { var e = n(44),
                r = n(13).utf8,
                i = n(48),
                s = n(13).bin,
                o = function(t, n) { t.constructor == String ? t = n && "binary" === n.encoding ? s.stringToBytes(t) : r.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString()); for (var a = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, l = -271733879, h = -1732584194, f = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
                    a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u; for (var p = o._ff, _ = o._gg, v = o._hh, m = o._ii, d = 0; d < a.length; d += 16) { var y = c,
                            g = l,
                            b = h,
                            w = f;
                        c = p(c, l, h, f, a[d + 0], 7, -680876936), f = p(f, c, l, h, a[d + 1], 12, -389564586), h = p(h, f, c, l, a[d + 2], 17, 606105819), l = p(l, h, f, c, a[d + 3], 22, -1044525330), c = p(c, l, h, f, a[d + 4], 7, -176418897), f = p(f, c, l, h, a[d + 5], 12, 1200080426), h = p(h, f, c, l, a[d + 6], 17, -1473231341), l = p(l, h, f, c, a[d + 7], 22, -45705983), c = p(c, l, h, f, a[d + 8], 7, 1770035416), f = p(f, c, l, h, a[d + 9], 12, -1958414417), h = p(h, f, c, l, a[d + 10], 17, -42063), l = p(l, h, f, c, a[d + 11], 22, -1990404162), c = p(c, l, h, f, a[d + 12], 7, 1804603682), f = p(f, c, l, h, a[d + 13], 12, -40341101), h = p(h, f, c, l, a[d + 14], 17, -1502002290), l = p(l, h, f, c, a[d + 15], 22, 1236535329), c = _(c, l, h, f, a[d + 1], 5, -165796510), f = _(f, c, l, h, a[d + 6], 9, -1069501632), h = _(h, f, c, l, a[d + 11], 14, 643717713), l = _(l, h, f, c, a[d + 0], 20, -373897302), c = _(c, l, h, f, a[d + 5], 5, -701558691), f = _(f, c, l, h, a[d + 10], 9, 38016083), h = _(h, f, c, l, a[d + 15], 14, -660478335), l = _(l, h, f, c, a[d + 4], 20, -405537848), c = _(c, l, h, f, a[d + 9], 5, 568446438), f = _(f, c, l, h, a[d + 14], 9, -1019803690), h = _(h, f, c, l, a[d + 3], 14, -187363961), l = _(l, h, f, c, a[d + 8], 20, 1163531501), c = _(c, l, h, f, a[d + 13], 5, -1444681467), f = _(f, c, l, h, a[d + 2], 9, -51403784), h = _(h, f, c, l, a[d + 7], 14, 1735328473), l = _(l, h, f, c, a[d + 12], 20, -1926607734), c = v(c, l, h, f, a[d + 5], 4, -378558), f = v(f, c, l, h, a[d + 8], 11, -2022574463), h = v(h, f, c, l, a[d + 11], 16, 1839030562), l = v(l, h, f, c, a[d + 14], 23, -35309556), c = v(c, l, h, f, a[d + 1], 4, -1530992060), f = v(f, c, l, h, a[d + 4], 11, 1272893353), h = v(h, f, c, l, a[d + 7], 16, -155497632), l = v(l, h, f, c, a[d + 10], 23, -1094730640), c = v(c, l, h, f, a[d + 13], 4, 681279174), f = v(f, c, l, h, a[d + 0], 11, -358537222), h = v(h, f, c, l, a[d + 3], 16, -722521979), l = v(l, h, f, c, a[d + 6], 23, 76029189), c = v(c, l, h, f, a[d + 9], 4, -640364487), f = v(f, c, l, h, a[d + 12], 11, -421815835), h = v(h, f, c, l, a[d + 15], 16, 530742520), l = v(l, h, f, c, a[d + 2], 23, -995338651), c = m(c, l, h, f, a[d + 0], 6, -198630844), f = m(f, c, l, h, a[d + 7], 10, 1126891415), h = m(h, f, c, l, a[d + 14], 15, -1416354905), l = m(l, h, f, c, a[d + 5], 21, -57434055), c = m(c, l, h, f, a[d + 12], 6, 1700485571), f = m(f, c, l, h, a[d + 3], 10, -1894986606), h = m(h, f, c, l, a[d + 10], 15, -1051523), l = m(l, h, f, c, a[d + 1], 21, -2054922799), c = m(c, l, h, f, a[d + 8], 6, 1873313359), f = m(f, c, l, h, a[d + 15], 10, -30611744), h = m(h, f, c, l, a[d + 6], 15, -1560198380), l = m(l, h, f, c, a[d + 13], 21, 1309151649), c = m(c, l, h, f, a[d + 4], 6, -145523070), f = m(f, c, l, h, a[d + 11], 10, -1120210379), h = m(h, f, c, l, a[d + 2], 15, 718787259), l = m(l, h, f, c, a[d + 9], 21, -343485551), c = c + y >>> 0, l = l + g >>> 0, h = h + b >>> 0, f = f + w >>> 0 } return e.endian([c, l, h, f]) };
            o._ff = function(t, e, n, r, i, s, o) { var a = t + (e & n | ~e & r) + (i >>> 0) + o; return (a << s | a >>> 32 - s) + e }, o._gg = function(t, e, n, r, i, s, o) { var a = t + (e & r | n & ~r) + (i >>> 0) + o; return (a << s | a >>> 32 - s) + e }, o._hh = function(t, e, n, r, i, s, o) { var a = t + (e ^ n ^ r) + (i >>> 0) + o; return (a << s | a >>> 32 - s) + e }, o._ii = function(t, e, n, r, i, s, o) { var a = t + (n ^ (e | ~r)) + (i >>> 0) + o; return (a << s | a >>> 32 - s) + e }, o._blocksize = 16, o._digestsize = 16, t.exports = function(t, n) { if (void 0 === t || null === t) throw new Error("Illegal argument " + t); var r = e.wordsToBytes(o(t, n)); return n && n.asBytes ? r : n && n.asString ? s.bytesToString(r) : e.bytesToHex(r) } }() }, function(t, e) {
        function n(t) { if (t = String(t), !(t.length > 100)) { var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t); if (e) { var n = parseFloat(e[1]); switch ((e[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * l;
                        case "days":
                        case "day":
                        case "d":
                            return n * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * u;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * a;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * o;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return } } } }

        function r(t) { return t >= c ? Math.round(t / c) + "d" : t >= u ? Math.round(t / u) + "h" : t >= a ? Math.round(t / a) + "m" : t >= o ? Math.round(t / o) + "s" : t + "ms" }

        function i(t) { return s(t, c, "day") || s(t, u, "hour") || s(t, a, "minute") || s(t, o, "second") || t + " ms" }

        function s(t, e, n) { if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s" } var o = 1e3,
            a = 60 * o,
            u = 60 * a,
            c = 24 * u,
            l = 365.25 * c;
        t.exports = function(t, e) { e = e || {}; var s = typeof t; if ("string" === s && t.length > 0) return n(t); if ("number" === s && !1 === isNaN(t)) return e.long ? i(t) : r(t); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t)) } }, function(t, e, n) {
        function r(t) { return "[object Function]" === (i(t) ? Object.prototype.toString.call(t) : "") } var i = n(8);
        t.exports = r }, function(t, e, n) {
        function r(t) { if (t) return i(t) }

        function i(t) { for (var e in r.prototype) t[e] = r.prototype[e]; return t } var s = n(8);
        t.exports = r, r.prototype.clearTimeout = function() { return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this }, r.prototype.parse = function(t) { return this._parser = t, this }, r.prototype.responseType = function(t) { return this._responseType = t, this }, r.prototype.serialize = function(t) { return this._serializer = t, this }, r.prototype.timeout = function(t) { if (!t || "object" != typeof t) return this._timeout = t, this._responseTimeout = 0, this; for (var e in t) switch (e) {
                case "deadline":
                    this._timeout = t.deadline; break;
                case "response":
                    this._responseTimeout = t.response; break;
                default:
                    console.warn("Unknown timeout option", e) }
            return this }, r.prototype.retry = function(t) { return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this }, r.prototype._retry = function() { return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end() }, r.prototype.then = function(t, e) { if (!this._fullfilledPromise) { var n = this;
                this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(t, e) { n.end(function(n, r) { n ? e(n) : t(r) }) }) } return this._fullfilledPromise.then(t, e) }, r.prototype.catch = function(t) { return this.then(void 0, t) }, r.prototype.use = function(t) { return t(this), this }, r.prototype.ok = function(t) { if ("function" != typeof t) throw Error("Callback required"); return this._okCallback = t, this }, r.prototype._isResponseOK = function(t) { return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300) }, r.prototype.get = function(t) { return this._header[t.toLowerCase()] }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function(t, e) { if (s(t)) { for (var n in t) this.set(n, t[n]); return this } return this._header[t.toLowerCase()] = e, this.header[t] = e, this }, r.prototype.unset = function(t) { return delete this._header[t.toLowerCase()], delete this.header[t], this }, r.prototype.field = function(t, e) { if (null === t || void 0 === t) throw new Error(".field(name, val) name can not be empty"); if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), s(t)) { for (var n in t) this.field(n, t[n]); return this } if (Array.isArray(e)) { for (var r in e) this.field(t, e[r]); return this } if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty"); return "boolean" == typeof e && (e = "" + e), this._getFormData().append(t, e), this }, r.prototype.abort = function() { return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this) }, r.prototype.withCredentials = function(t) { return void 0 == t && (t = !0), this._withCredentials = t, this }, r.prototype.redirects = function(t) { return this._maxRedirects = t, this }, r.prototype.toJSON = function() { return { method: this.method, url: this.url, data: this._data, headers: this._header } }, r.prototype.send = function(t) { var e = s(t),
                n = this._header["content-type"]; if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
            else if (t && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls"); if (e && s(this._data))
                for (var r in t) this._data[r] = t[r];
            else "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + t : t : (this._data || "") + t) : this._data = t; return !e || this._isHost(t) ? this : (n || this.type("json"), this) }, r.prototype.sortQuery = function(t) { return this._sort = void 0 === t || t, this }, r.prototype._timeoutError = function(t, e, n) { if (!this._aborted) { var r = new Error(t + e + "ms exceeded");
                r.timeout = e, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r) } }, r.prototype._setTimeouts = function() { var t = this;
            this._timeout && !this._timer && (this._timer = setTimeout(function() { t._timeoutError("Timeout of ", t._timeout, "ETIME") }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() { t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT") }, this._responseTimeout)) } }, function(t, e, n) {
        function r(t) { if (t) return i(t) }

        function i(t) { for (var e in r.prototype) t[e] = r.prototype[e]; return t } var s = n(56);
        t.exports = r, r.prototype.get = function(t) { return this.header[t.toLowerCase()] }, r.prototype._setHeaderProperties = function(t) { var e = t["content-type"] || "";
            this.type = s.type(e); var n = s.params(e); for (var r in n) this[r] = n[r];
            this.links = {}; try { t.link && (this.links = s.parseLinks(t.link)) } catch (t) {} }, r.prototype._setStatusProperties = function(t) { var e = t / 100 | 0;
            this.status = this.statusCode = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.redirect = 3 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.forbidden = 403 == t, this.notFound = 404 == t } }, function(t, e) { var n = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
        t.exports = function(t, e) { return !!(t && t.code && ~n.indexOf(t.code)) || (!!(e && e.status && e.status >= 500) || (!!(t && "timeout" in t && "ECONNABORTED" == t.code) || !!(t && "crossDomain" in t))) } }, function(t, e) { e.type = function(t) { return t.split(/ *; */).shift() }, e.params = function(t) { return t.split(/ *; */).reduce(function(t, e) { var n = e.split(/ *= */),
                    r = n.shift(),
                    i = n.shift(); return r && i && (t[r] = i), t }, {}) }, e.parseLinks = function(t) { return t.split(/ *, */).reduce(function(t, e) { var n = e.split(/ *; */),
                    r = n[0].slice(1, -1); return t[n[1].split(/ *= */)[1].slice(1, -1)] = r, t }, {}) }, e.cleanHeader = function(t, e) { return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, e && delete t.cookie, t } }, function(t, e) {}])
});
//# sourceMappingURL=av-min.js.map