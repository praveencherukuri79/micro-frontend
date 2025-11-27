var gv = Object.defineProperty;
var vv = (e, t, n) => t in e ? gv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var na = (e, t, n) => vv(e, typeof t != "symbol" ? t + "" : t, n);
function yv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Vp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Vn(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Hp = { exports: {} }, Jl = {}, Kp = { exports: {} }, ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi = Symbol.for("react.element"), xv = Symbol.for("react.portal"), Sv = Symbol.for("react.fragment"), Cv = Symbol.for("react.strict_mode"), wv = Symbol.for("react.profiler"), kv = Symbol.for("react.provider"), bv = Symbol.for("react.context"), Ev = Symbol.for("react.forward_ref"), Rv = Symbol.for("react.suspense"), Pv = Symbol.for("react.memo"), $v = Symbol.for("react.lazy"), Rd = Symbol.iterator;
function Tv(e) {
  return e === null || typeof e != "object" ? null : (e = Rd && e[Rd] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Gp = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Yp = Object.assign, Qp = {};
function io(e, t, n) {
  this.props = e, this.context = t, this.refs = Qp, this.updater = n || Gp;
}
io.prototype.isReactComponent = {};
io.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
io.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xp() {
}
Xp.prototype = io.prototype;
function qu(e, t, n) {
  this.props = e, this.context = t, this.refs = Qp, this.updater = n || Gp;
}
var Zu = qu.prototype = new Xp();
Zu.constructor = qu;
Yp(Zu, io.prototype);
Zu.isPureReactComponent = !0;
var Pd = Array.isArray, qp = Object.prototype.hasOwnProperty, Ju = { current: null }, Zp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jp(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) qp.call(t, r) && !Zp.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: xi, type: e, key: i, ref: l, props: o, _owner: Ju.current };
}
function _v(e, t) {
  return { $$typeof: xi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ec(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xi;
}
function Mv(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var $d = /\/+/g;
function ra(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Mv("" + e.key) : t.toString(36);
}
function nl(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case xi:
        case xv:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + ra(l, 0) : r, Pd(o) ? (n = "", e != null && (n = e.replace($d, "$&/") + "/"), nl(o, t, n, "", function(u) {
    return u;
  })) : o != null && (ec(o) && (o = _v(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace($d, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Pd(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var a = r + ra(i, s);
    l += nl(i, t, n, a, o);
  }
  else if (a = Tv(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done; ) i = i.value, a = r + ra(i, s++), l += nl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Ii(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return nl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Ov(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pt = { current: null }, rl = { transition: null }, Iv = { ReactCurrentDispatcher: pt, ReactCurrentBatchConfig: rl, ReactCurrentOwner: Ju };
function em() {
  throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = { map: Ii, forEach: function(e, t, n) {
  Ii(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ii(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ii(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ec(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ee.Component = io;
ee.Fragment = Sv;
ee.Profiler = wv;
ee.PureComponent = qu;
ee.StrictMode = Cv;
ee.Suspense = Rv;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iv;
ee.act = em;
ee.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Yp({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Ju.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) qp.call(t, a) && !Zp.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: xi, type: e.type, key: o, ref: i, props: r, _owner: l };
};
ee.createContext = function(e) {
  return e = { $$typeof: bv, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: kv, _context: e }, e.Consumer = e;
};
ee.createElement = Jp;
ee.createFactory = function(e) {
  var t = Jp.bind(null, e);
  return t.type = e, t;
};
ee.createRef = function() {
  return { current: null };
};
ee.forwardRef = function(e) {
  return { $$typeof: Ev, render: e };
};
ee.isValidElement = ec;
ee.lazy = function(e) {
  return { $$typeof: $v, _payload: { _status: -1, _result: e }, _init: Ov };
};
ee.memo = function(e, t) {
  return { $$typeof: Pv, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function(e) {
  var t = rl.transition;
  rl.transition = {};
  try {
    e();
  } finally {
    rl.transition = t;
  }
};
ee.unstable_act = em;
ee.useCallback = function(e, t) {
  return pt.current.useCallback(e, t);
};
ee.useContext = function(e) {
  return pt.current.useContext(e);
};
ee.useDebugValue = function() {
};
ee.useDeferredValue = function(e) {
  return pt.current.useDeferredValue(e);
};
ee.useEffect = function(e, t) {
  return pt.current.useEffect(e, t);
};
ee.useId = function() {
  return pt.current.useId();
};
ee.useImperativeHandle = function(e, t, n) {
  return pt.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function(e, t) {
  return pt.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function(e, t) {
  return pt.current.useLayoutEffect(e, t);
};
ee.useMemo = function(e, t) {
  return pt.current.useMemo(e, t);
};
ee.useReducer = function(e, t, n) {
  return pt.current.useReducer(e, t, n);
};
ee.useRef = function(e) {
  return pt.current.useRef(e);
};
ee.useState = function(e) {
  return pt.current.useState(e);
};
ee.useSyncExternalStore = function(e, t, n) {
  return pt.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function() {
  return pt.current.useTransition();
};
ee.version = "18.3.1";
Kp.exports = ee;
var S = Kp.exports;
const Qt = /* @__PURE__ */ Vp(S), Ua = /* @__PURE__ */ yv({
  __proto__: null,
  default: Qt
}, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nv = S, zv = Symbol.for("react.element"), Lv = Symbol.for("react.fragment"), Fv = Object.prototype.hasOwnProperty, Av = Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jv = { key: !0, ref: !0, __self: !0, __source: !0 };
function tm(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Fv.call(t, r) && !jv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: zv, type: e, key: i, ref: l, props: o, _owner: Av.current };
}
Jl.Fragment = Lv;
Jl.jsx = tm;
Jl.jsxs = tm;
Hp.exports = Jl;
var E = Hp.exports;
const Xo = {
  black: "#000",
  white: "#fff"
}, xr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Sr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Cr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, wr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, kr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, yo = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Dv = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function ar(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Bv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" })), Yr = "$$material";
function y() {
  return y = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, y.apply(null, arguments);
}
function U(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Wv(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Uv(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Vv = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Uv(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Wv(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), lt = "-ms-", Sl = "-moz-", le = "-webkit-", nm = "comm", tc = "rule", nc = "decl", Hv = "@import", rm = "@keyframes", Kv = "@layer", Gv = Math.abs, es = String.fromCharCode, Yv = Object.assign;
function Qv(e, t) {
  return et(e, 0) ^ 45 ? (((t << 2 ^ et(e, 0)) << 2 ^ et(e, 1)) << 2 ^ et(e, 2)) << 2 ^ et(e, 3) : 0;
}
function om(e) {
  return e.trim();
}
function Xv(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function se(e, t, n) {
  return e.replace(t, n);
}
function Va(e, t) {
  return e.indexOf(t);
}
function et(e, t) {
  return e.charCodeAt(t) | 0;
}
function qo(e, t, n) {
  return e.slice(t, n);
}
function rn(e) {
  return e.length;
}
function rc(e) {
  return e.length;
}
function Ni(e, t) {
  return t.push(e), e;
}
function qv(e, t) {
  return e.map(t).join("");
}
var ts = 1, Qr = 1, im = 0, St = 0, je = 0, lo = "";
function ns(e, t, n, r, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ts, column: Qr, length: l, return: "" };
}
function xo(e, t) {
  return Yv(ns("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Zv() {
  return je;
}
function Jv() {
  return je = St > 0 ? et(lo, --St) : 0, Qr--, je === 10 && (Qr = 1, ts--), je;
}
function bt() {
  return je = St < im ? et(lo, St++) : 0, Qr++, je === 10 && (Qr = 1, ts++), je;
}
function sn() {
  return et(lo, St);
}
function ol() {
  return St;
}
function Si(e, t) {
  return qo(lo, e, t);
}
function Zo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function lm(e) {
  return ts = Qr = 1, im = rn(lo = e), St = 0, [];
}
function sm(e) {
  return lo = "", e;
}
function il(e) {
  return om(Si(St - 1, Ha(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ey(e) {
  for (; (je = sn()) && je < 33; )
    bt();
  return Zo(e) > 2 || Zo(je) > 3 ? "" : " ";
}
function ty(e, t) {
  for (; --t && bt() && !(je < 48 || je > 102 || je > 57 && je < 65 || je > 70 && je < 97); )
    ;
  return Si(e, ol() + (t < 6 && sn() == 32 && bt() == 32));
}
function Ha(e) {
  for (; bt(); )
    switch (je) {
      case e:
        return St;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ha(je);
        break;
      case 40:
        e === 41 && Ha(e);
        break;
      case 92:
        bt();
        break;
    }
  return St;
}
function ny(e, t) {
  for (; bt() && e + je !== 57; )
    if (e + je === 84 && sn() === 47)
      break;
  return "/*" + Si(t, St - 1) + "*" + es(e === 47 ? e : bt());
}
function ry(e) {
  for (; !Zo(sn()); )
    bt();
  return Si(e, St);
}
function oy(e) {
  return sm(ll("", null, null, null, [""], e = lm(e), 0, [0], e));
}
function ll(e, t, n, r, o, i, l, s, a) {
  for (var u = 0, c = 0, d = l, p = 0, C = 0, v = 0, x = 1, R = 1, h = 1, m = 0, f = "", g = o, b = i, w = r, k = f; R; )
    switch (v = m, m = bt()) {
      case 40:
        if (v != 108 && et(k, d - 1) == 58) {
          Va(k += se(il(m), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += il(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += ey(v);
        break;
      case 92:
        k += ty(ol() - 1, 7);
        continue;
      case 47:
        switch (sn()) {
          case 42:
          case 47:
            Ni(iy(ny(bt(), ol()), t, n), a);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * x:
        s[u++] = rn(k) * h;
      case 125 * x:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            R = 0;
          case 59 + c:
            h == -1 && (k = se(k, /\f/g, "")), C > 0 && rn(k) - d && Ni(C > 32 ? _d(k + ";", r, n, d - 1) : _d(se(k, " ", "") + ";", r, n, d - 2), a);
            break;
          case 59:
            k += ";";
          default:
            if (Ni(w = Td(k, t, n, u, c, o, s, f, g = [], b = [], d), i), m === 123)
              if (c === 0)
                ll(k, t, w, w, g, i, d, s, b);
              else
                switch (p === 99 && et(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ll(e, w, w, r && Ni(Td(e, w, w, 0, 0, o, s, f, o, g = [], d), b), o, b, d, s, r ? g : b);
                    break;
                  default:
                    ll(k, w, w, w, [""], b, 0, s, b);
                }
        }
        u = c = C = 0, x = h = 1, f = k = "", d = l;
        break;
      case 58:
        d = 1 + rn(k), C = v;
      default:
        if (x < 1) {
          if (m == 123)
            --x;
          else if (m == 125 && x++ == 0 && Jv() == 125)
            continue;
        }
        switch (k += es(m), m * x) {
          case 38:
            h = c > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            s[u++] = (rn(k) - 1) * h, h = 1;
            break;
          case 64:
            sn() === 45 && (k += il(bt())), p = sn(), c = d = rn(f = k += ry(ol())), m++;
            break;
          case 45:
            v === 45 && rn(k) == 2 && (x = 0);
        }
    }
  return i;
}
function Td(e, t, n, r, o, i, l, s, a, u, c) {
  for (var d = o - 1, p = o === 0 ? i : [""], C = rc(p), v = 0, x = 0, R = 0; v < r; ++v)
    for (var h = 0, m = qo(e, d + 1, d = Gv(x = l[v])), f = e; h < C; ++h)
      (f = om(x > 0 ? p[h] + " " + m : se(m, /&\f/g, p[h]))) && (a[R++] = f);
  return ns(e, t, n, o === 0 ? tc : s, a, u, c);
}
function iy(e, t, n) {
  return ns(e, t, n, nm, es(Zv()), qo(e, 2, -2), 0);
}
function _d(e, t, n, r) {
  return ns(e, t, n, nc, qo(e, 0, r), qo(e, r + 1, -1), r);
}
function jr(e, t) {
  for (var n = "", r = rc(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function ly(e, t, n, r) {
  switch (e.type) {
    case Kv:
      if (e.children.length) break;
    case Hv:
    case nc:
      return e.return = e.return || e.value;
    case nm:
      return "";
    case rm:
      return e.return = e.value + "{" + jr(e.children, r) + "}";
    case tc:
      e.value = e.props.join(",");
  }
  return rn(n = jr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function sy(e) {
  var t = rc(e);
  return function(n, r, o, i) {
    for (var l = "", s = 0; s < t; s++)
      l += e[s](n, r, o, i) || "";
    return l;
  };
}
function ay(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function am(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var uy = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = sn(), o === 38 && i === 12 && (n[r] = 1), !Zo(i); )
    bt();
  return Si(t, St);
}, cy = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Zo(o)) {
      case 0:
        o === 38 && sn() === 12 && (n[r] = 1), t[r] += uy(St - 1, n, r);
        break;
      case 2:
        t[r] += il(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = sn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += es(o);
    }
  while (o = bt());
  return t;
}, dy = function(t, n) {
  return sm(cy(lm(t), n));
}, Md = /* @__PURE__ */ new WeakMap(), fy = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Md.get(r)) && !o) {
      Md.set(t, !0);
      for (var i = [], l = dy(n, i), s = r.props, a = 0, u = 0; a < l.length; a++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[a] ? l[a].replace(/&\f/g, s[c]) : s[c] + " " + l[a];
    }
  }
}, py = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function um(e, t) {
  switch (Qv(e, t)) {
    case 5103:
      return le + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return le + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return le + e + Sl + e + lt + e + e;
    case 6828:
    case 4268:
      return le + e + lt + e + e;
    case 6165:
      return le + e + lt + "flex-" + e + e;
    case 5187:
      return le + e + se(e, /(\w+).+(:[^]+)/, le + "box-$1$2" + lt + "flex-$1$2") + e;
    case 5443:
      return le + e + lt + "flex-item-" + se(e, /flex-|-self/, "") + e;
    case 4675:
      return le + e + lt + "flex-line-pack" + se(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return le + e + lt + se(e, "shrink", "negative") + e;
    case 5292:
      return le + e + lt + se(e, "basis", "preferred-size") + e;
    case 6060:
      return le + "box-" + se(e, "-grow", "") + le + e + lt + se(e, "grow", "positive") + e;
    case 4554:
      return le + se(e, /([^-])(transform)/g, "$1" + le + "$2") + e;
    case 6187:
      return se(se(se(e, /(zoom-|grab)/, le + "$1"), /(image-set)/, le + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return se(e, /(image-set\([^]*)/, le + "$1$`$1");
    case 4968:
      return se(se(e, /(.+:)(flex-)?(.*)/, le + "box-pack:$3" + lt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + le + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(e, /(.+)-inline(.+)/, le + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (rn(e) - 1 - t > 6) switch (et(e, t + 1)) {
        case 109:
          if (et(e, t + 4) !== 45) break;
        case 102:
          return se(e, /(.+:)(.+)-([^]+)/, "$1" + le + "$2-$3$1" + Sl + (et(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Va(e, "stretch") ? um(se(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (et(e, t + 1) !== 115) break;
    case 6444:
      switch (et(e, rn(e) - 3 - (~Va(e, "!important") && 10))) {
        case 107:
          return se(e, ":", ":" + le) + e;
        case 101:
          return se(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + le + (et(e, 14) === 45 ? "inline-" : "") + "box$3$1" + le + "$2$3$1" + lt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (et(e, t + 11)) {
        case 114:
          return le + e + lt + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return le + e + lt + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return le + e + lt + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return le + e + lt + e + e;
  }
  return e;
}
var my = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case nc:
      t.return = um(t.value, t.length);
      break;
    case rm:
      return jr([xo(t, {
        value: se(t.value, "@", "@" + le)
      })], o);
    case tc:
      if (t.length) return qv(t.props, function(i) {
        switch (Xv(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return jr([xo(t, {
              props: [se(i, /:(read-\w+)/, ":" + Sl + "$1")]
            })], o);
          case "::placeholder":
            return jr([xo(t, {
              props: [se(i, /:(plac\w+)/, ":" + le + "input-$1")]
            }), xo(t, {
              props: [se(i, /:(plac\w+)/, ":" + Sl + "$1")]
            }), xo(t, {
              props: [se(i, /:(plac\w+)/, lt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, hy = [my], cm = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(x) {
      var R = x.getAttribute("data-emotion");
      R.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || hy, i = {}, l, s = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(x) {
      for (var R = x.getAttribute("data-emotion").split(" "), h = 1; h < R.length; h++)
        i[R[h]] = !0;
      s.push(x);
    }
  );
  var a, u = [fy, py];
  {
    var c, d = [ly, ay(function(x) {
      c.insert(x);
    })], p = sy(u.concat(o, d)), C = function(R) {
      return jr(oy(R), p);
    };
    a = function(R, h, m, f) {
      c = m, C(R ? R + "{" + h.styles + "}" : h.styles), f && (v.inserted[h.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new Vv({
      key: n,
      container: l,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: a
  };
  return v.sheet.hydrate(s), v;
}, dm = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye = typeof Symbol == "function" && Symbol.for, oc = Ye ? Symbol.for("react.element") : 60103, ic = Ye ? Symbol.for("react.portal") : 60106, rs = Ye ? Symbol.for("react.fragment") : 60107, os = Ye ? Symbol.for("react.strict_mode") : 60108, is = Ye ? Symbol.for("react.profiler") : 60114, ls = Ye ? Symbol.for("react.provider") : 60109, ss = Ye ? Symbol.for("react.context") : 60110, lc = Ye ? Symbol.for("react.async_mode") : 60111, as = Ye ? Symbol.for("react.concurrent_mode") : 60111, us = Ye ? Symbol.for("react.forward_ref") : 60112, cs = Ye ? Symbol.for("react.suspense") : 60113, gy = Ye ? Symbol.for("react.suspense_list") : 60120, ds = Ye ? Symbol.for("react.memo") : 60115, fs = Ye ? Symbol.for("react.lazy") : 60116, vy = Ye ? Symbol.for("react.block") : 60121, yy = Ye ? Symbol.for("react.fundamental") : 60117, xy = Ye ? Symbol.for("react.responder") : 60118, Sy = Ye ? Symbol.for("react.scope") : 60119;
function Tt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case oc:
        switch (e = e.type, e) {
          case lc:
          case as:
          case rs:
          case is:
          case os:
          case cs:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ss:
              case us:
              case fs:
              case ds:
              case ls:
                return e;
              default:
                return t;
            }
        }
      case ic:
        return t;
    }
  }
}
function fm(e) {
  return Tt(e) === as;
}
me.AsyncMode = lc;
me.ConcurrentMode = as;
me.ContextConsumer = ss;
me.ContextProvider = ls;
me.Element = oc;
me.ForwardRef = us;
me.Fragment = rs;
me.Lazy = fs;
me.Memo = ds;
me.Portal = ic;
me.Profiler = is;
me.StrictMode = os;
me.Suspense = cs;
me.isAsyncMode = function(e) {
  return fm(e) || Tt(e) === lc;
};
me.isConcurrentMode = fm;
me.isContextConsumer = function(e) {
  return Tt(e) === ss;
};
me.isContextProvider = function(e) {
  return Tt(e) === ls;
};
me.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oc;
};
me.isForwardRef = function(e) {
  return Tt(e) === us;
};
me.isFragment = function(e) {
  return Tt(e) === rs;
};
me.isLazy = function(e) {
  return Tt(e) === fs;
};
me.isMemo = function(e) {
  return Tt(e) === ds;
};
me.isPortal = function(e) {
  return Tt(e) === ic;
};
me.isProfiler = function(e) {
  return Tt(e) === is;
};
me.isStrictMode = function(e) {
  return Tt(e) === os;
};
me.isSuspense = function(e) {
  return Tt(e) === cs;
};
me.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === rs || e === as || e === is || e === os || e === cs || e === gy || typeof e == "object" && e !== null && (e.$$typeof === fs || e.$$typeof === ds || e.$$typeof === ls || e.$$typeof === ss || e.$$typeof === us || e.$$typeof === yy || e.$$typeof === xy || e.$$typeof === Sy || e.$$typeof === vy);
};
me.typeOf = Tt;
dm.exports = me;
var Cy = dm.exports, pm = Cy, wy = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ky = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, mm = {};
mm[pm.ForwardRef] = wy;
mm[pm.Memo] = ky;
var by = !0;
function hm(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var sc = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  by === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, ac = function(t, n, r) {
  sc(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ey(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ry = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Py = /[A-Z]|^ms/g, $y = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gm = function(t) {
  return t.charCodeAt(1) === 45;
}, Od = function(t) {
  return t != null && typeof t != "boolean";
}, oa = /* @__PURE__ */ am(function(e) {
  return gm(e) ? e : e.replace(Py, "-$&").toLowerCase();
}), Id = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace($y, function(r, o, i) {
          return on = {
            name: o,
            styles: i,
            next: on
          }, o;
        });
  }
  return Ry[t] !== 1 && !gm(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Jo(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return on = {
          name: o.name,
          styles: o.styles,
          next: on
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var l = i.next;
        if (l !== void 0)
          for (; l !== void 0; )
            on = {
              name: l.name,
              styles: l.styles,
              next: on
            }, l = l.next;
        var s = i.styles + ";";
        return s;
      }
      return Ty(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = on, u = n(e);
        return on = a, Jo(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null)
    return c;
  var d = t[c];
  return d !== void 0 ? d : c;
}
function Ty(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Jo(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object") {
        var s = l;
        t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : Od(s) && (r += oa(i) + ":" + Id(i, s) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
        for (var a = 0; a < l.length; a++)
          Od(l[a]) && (r += oa(i) + ":" + Id(i, l[a]) + ";");
      else {
        var u = Jo(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += oa(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var Nd = /label:\s*([^\s;{]+)\s*(;|$)/g, on;
function Ci(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  on = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Jo(n, t, i);
  else {
    var l = i;
    o += l[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Jo(n, t, e[s]), r) {
      var a = i;
      o += a[s];
    }
  Nd.lastIndex = 0;
  for (var u = "", c; (c = Nd.exec(o)) !== null; )
    u += "-" + c[1];
  var d = Ey(o) + u;
  return {
    name: d,
    styles: o,
    next: on
  };
}
var _y = function(t) {
  return t();
}, vm = Ua.useInsertionEffect ? Ua.useInsertionEffect : !1, ym = vm || _y, zd = vm || S.useLayoutEffect, xm = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ cm({
    key: "css"
  }) : null
), My = xm.Provider, uc = function(t) {
  return /* @__PURE__ */ S.forwardRef(function(n, r) {
    var o = S.useContext(xm);
    return t(n, o, r);
  });
}, so = /* @__PURE__ */ S.createContext({}), cc = {}.hasOwnProperty, Ka = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Oy = function(t, n) {
  var r = {};
  for (var o in n)
    cc.call(n, o) && (r[o] = n[o]);
  return r[Ka] = t, r;
}, Iy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return sc(n, r, o), ym(function() {
    return ac(n, r, o);
  }), null;
}, Ny = /* @__PURE__ */ uc(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Ka], i = [r], l = "";
  typeof e.className == "string" ? l = hm(t.registered, i, e.className) : e.className != null && (l = e.className + " ");
  var s = Ci(i, void 0, S.useContext(so));
  l += t.key + "-" + s.name;
  var a = {};
  for (var u in e)
    cc.call(e, u) && u !== "css" && u !== Ka && (a[u] = e[u]);
  return a.className = l, n && (a.ref = n), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Iy, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ S.createElement(o, a));
}), zy = Ny, ia = { exports: {} }, Ld;
function Sm() {
  return Ld || (Ld = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var o = arguments[r];
          for (var i in o) ({}).hasOwnProperty.call(o, i) && (n[i] = o[i]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ia)), ia.exports;
}
Sm();
var Fd = function(t, n) {
  var r = arguments;
  if (n == null || !cc.call(n, "css"))
    return S.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = zy, i[1] = Oy(t, n);
  for (var l = 2; l < o; l++)
    i[l] = r[l];
  return S.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Fd || (Fd = {}));
var Ly = /* @__PURE__ */ uc(function(e, t) {
  var n = e.styles, r = Ci([n], void 0, S.useContext(so)), o = S.useRef();
  return zd(function() {
    var i = t.key + "-global", l = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), a !== null && (s = !0, a.setAttribute("data-emotion", i), l.hydrate([a])), o.current = [l, s], function() {
      l.flush();
    };
  }, [t]), zd(function() {
    var i = o.current, l = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && ac(t, r.next, !0), l.tags.length) {
      var a = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = a, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
});
function Cm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ci(t);
}
function ps() {
  var e = Cm.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Fy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ay = /* @__PURE__ */ am(
  function(e) {
    return Fy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), jy = Ay, Dy = function(t) {
  return t !== "theme";
}, Ad = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? jy : Dy;
}, jd = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, By = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return sc(n, r, o), ym(function() {
    return ac(n, r, o);
  }), null;
}, Wy = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var s = jd(t, n, r), a = s || Ad(o), u = !a("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      var p = c[0];
      d.push(p[0]);
      for (var C = c.length, v = 1; v < C; v++)
        d.push(c[v], p[v]);
    }
    var x = uc(function(R, h, m) {
      var f = u && R.as || o, g = "", b = [], w = R;
      if (R.theme == null) {
        w = {};
        for (var k in R)
          w[k] = R[k];
        w.theme = S.useContext(so);
      }
      typeof R.className == "string" ? g = hm(h.registered, b, R.className) : R.className != null && (g = R.className + " ");
      var P = Ci(d.concat(b), h.registered, w);
      g += h.key + "-" + P.name, l !== void 0 && (g += " " + l);
      var N = u && s === void 0 ? Ad(f) : a, T = {};
      for (var A in R)
        u && A === "as" || N(A) && (T[A] = R[A]);
      return T.className = g, m && (T.ref = m), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(By, {
        cache: h,
        serialized: P,
        isStringTag: typeof f == "string"
      }), /* @__PURE__ */ S.createElement(f, T));
    });
    return x.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", x.defaultProps = t.defaultProps, x.__emotion_real = x, x.__emotion_base = o, x.__emotion_styles = d, x.__emotion_forwardProp = s, Object.defineProperty(x, "toString", {
      value: function() {
        return "." + l;
      }
    }), x.withComponent = function(R, h) {
      var m = e(R, y({}, n, h, {
        shouldForwardProp: jd(x, h, !0)
      }));
      return m.apply(void 0, d);
    }, x;
  };
}, Uy = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ga = Wy.bind(null);
Uy.forEach(function(e) {
  Ga[e] = Ga(e);
});
function Vy(e, t) {
  const n = cm({
    key: "css",
    prepend: e
  });
  if (t) {
    const r = n.insert;
    n.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), r(...o));
  }
  return n;
}
const la = /* @__PURE__ */ new Map();
function Hy(e) {
  const {
    injectFirst: t,
    enableCssLayer: n,
    children: r
  } = e, o = S.useMemo(() => {
    const i = `${t}-${n}`;
    if (typeof document == "object" && la.has(i))
      return la.get(i);
    const l = Vy(t, n);
    return la.set(i, l), l;
  }, [t, n]);
  return t || n ? /* @__PURE__ */ E.jsx(My, {
    value: o,
    children: r
  }) : r;
}
function Ky(e) {
  return e == null || Object.keys(e).length === 0;
}
function wm(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Ky(o) ? n : o) : t;
  return /* @__PURE__ */ E.jsx(Ly, {
    styles: r
  });
}
function dc(e, t) {
  return Ga(e, t);
}
const km = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Dd = [];
function Cl(e) {
  return Dd[0] = e, Ci(Dd);
}
const Gy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: wm,
  StyledEngineProvider: Hy,
  ThemeContext: so,
  css: Cm,
  default: dc,
  internal_processStyles: km,
  internal_serializeStyles: Cl,
  keyframes: ps
}, Symbol.toStringTag, { value: "Module" }));
function hn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function bm(e) {
  if (/* @__PURE__ */ S.isValidElement(e) || !hn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = bm(e[n]);
  }), t;
}
function Et(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? y({}, e) : e;
  return hn(e) && hn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ S.isValidElement(t[o]) ? r[o] = t[o] : hn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && hn(e[o]) ? r[o] = Et(e[o], t[o], n) : n.clone ? r[o] = hn(t[o]) ? bm(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et,
  isPlainObject: hn
}, Symbol.toStringTag, { value: "Module" })), Qy = ["values", "unit", "step"], Xy = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => y({}, n, {
    [r.key]: r.val
  }), {});
};
function Em(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, o = U(e, Qy), i = Xy(t), l = Object.keys(i);
  function s(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function a(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, C) {
    const v = l.indexOf(C);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[l[v]] == "number" ? t[l[v]] : C) - r / 100}${n})`;
  }
  function c(p) {
    return l.indexOf(p) + 1 < l.length ? u(p, l[l.indexOf(p) + 1]) : s(p);
  }
  function d(p) {
    const C = l.indexOf(p);
    return C === 0 ? s(l[1]) : C === l.length - 1 ? a(l[C]) : u(p, l[l.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return y({
    keys: l,
    values: i,
    up: s,
    down: a,
    between: u,
    only: c,
    not: d,
    unit: n
  }, o);
}
const qy = {
  borderRadius: 4
};
function Ao(e, t) {
  return t ? Et(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const fc = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Bd = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${fc[e]}px)`
};
function jt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Bd;
    return t.reduce((l, s, a) => (l[i.up(i.keys[a])] = n(t[a]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Bd;
    return Object.keys(t).reduce((l, s) => {
      if (Object.keys(i.values || fc).indexOf(s) !== -1) {
        const a = i.up(s);
        l[a] = n(t[s], s);
      } else {
        const a = s;
        l[a] = t[a];
      }
      return l;
    }, {});
  }
  return n(t);
}
function Zy(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Wd(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Jy(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function ms({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || Jy(e, t), o = Object.keys(r);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((l, s, a) => (Array.isArray(e) ? (l[s] = e[a] != null ? e[a] : e[i], i = a) : typeof e == "object" ? (l[s] = e[s] != null ? e[s] : e[i], i = s) : l[s] = e, l), {});
}
function D(e) {
  if (typeof e != "string")
    throw new Error(ar(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const e0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D
}, Symbol.toStringTag, { value: "Module" }));
function hs(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function wl(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = hs(e, n) || r, t && (o = t(o, r, e)), o;
}
function Fe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (l) => {
    if (l[t] == null)
      return null;
    const s = l[t], a = l.theme, u = hs(a, r) || {};
    return jt(l, s, (d) => {
      let p = wl(u, o, d);
      return d === p && typeof d == "string" && (p = wl(u, o, `${t}${d === "default" ? "" : D(d)}`, d)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function t0(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const n0 = {
  m: "margin",
  p: "padding"
}, r0 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ud = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, o0 = t0((e) => {
  if (e.length > 2)
    if (Ud[e])
      e = Ud[e];
    else
      return [e];
  const [t, n] = e.split(""), r = n0[t], o = r0[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), pc = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], mc = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...pc, ...mc];
function wi(e, t, n, r) {
  var o;
  const i = (o = hs(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (l) => typeof l == "string" ? l : i * l : Array.isArray(i) ? (l) => typeof l == "string" ? l : i[l] : typeof i == "function" ? i : () => {
  };
}
function Rm(e) {
  return wi(e, "spacing", 8);
}
function ki(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function i0(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = ki(t, n), r), {});
}
function l0(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = o0(n), i = i0(o, r), l = e[n];
  return jt(e, l, i);
}
function Pm(e, t) {
  const n = Rm(e.theme);
  return Object.keys(e).map((r) => l0(e, t, r, n)).reduce(Ao, {});
}
function Ie(e) {
  return Pm(e, pc);
}
Ie.propTypes = {};
Ie.filterProps = pc;
function Ne(e) {
  return Pm(e, mc);
}
Ne.propTypes = {};
Ne.filterProps = mc;
function s0(e = 8) {
  if (e.mui)
    return e;
  const t = Rm({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const l = t(i);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = !0, n;
}
function gs(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Ao(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Nt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ut(e, t) {
  return Fe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const a0 = Ut("border", Nt), u0 = Ut("borderTop", Nt), c0 = Ut("borderRight", Nt), d0 = Ut("borderBottom", Nt), f0 = Ut("borderLeft", Nt), p0 = Ut("borderColor"), m0 = Ut("borderTopColor"), h0 = Ut("borderRightColor"), g0 = Ut("borderBottomColor"), v0 = Ut("borderLeftColor"), y0 = Ut("outline", Nt), x0 = Ut("outlineColor"), vs = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = wi(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: ki(t, r)
    });
    return jt(e, e.borderRadius, n);
  }
  return null;
};
vs.propTypes = {};
vs.filterProps = ["borderRadius"];
gs(a0, u0, c0, d0, f0, p0, m0, h0, g0, v0, vs, y0, x0);
const ys = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = wi(e.theme, "spacing", 8), n = (r) => ({
      gap: ki(t, r)
    });
    return jt(e, e.gap, n);
  }
  return null;
};
ys.propTypes = {};
ys.filterProps = ["gap"];
const xs = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = wi(e.theme, "spacing", 8), n = (r) => ({
      columnGap: ki(t, r)
    });
    return jt(e, e.columnGap, n);
  }
  return null;
};
xs.propTypes = {};
xs.filterProps = ["columnGap"];
const Ss = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = wi(e.theme, "spacing", 8), n = (r) => ({
      rowGap: ki(t, r)
    });
    return jt(e, e.rowGap, n);
  }
  return null;
};
Ss.propTypes = {};
Ss.filterProps = ["rowGap"];
const S0 = Fe({
  prop: "gridColumn"
}), C0 = Fe({
  prop: "gridRow"
}), w0 = Fe({
  prop: "gridAutoFlow"
}), k0 = Fe({
  prop: "gridAutoColumns"
}), b0 = Fe({
  prop: "gridAutoRows"
}), E0 = Fe({
  prop: "gridTemplateColumns"
}), R0 = Fe({
  prop: "gridTemplateRows"
}), P0 = Fe({
  prop: "gridTemplateAreas"
}), $0 = Fe({
  prop: "gridArea"
});
gs(ys, xs, Ss, S0, C0, w0, k0, b0, E0, R0, P0, $0);
function Dr(e, t) {
  return t === "grey" ? t : e;
}
const T0 = Fe({
  prop: "color",
  themeKey: "palette",
  transform: Dr
}), _0 = Fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Dr
}), M0 = Fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Dr
});
gs(T0, _0, M0);
function wt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const O0 = Fe({
  prop: "width",
  transform: wt
}), hc = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || fc[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: wt(n)
      };
    };
    return jt(e, e.maxWidth, t);
  }
  return null;
};
hc.filterProps = ["maxWidth"];
const I0 = Fe({
  prop: "minWidth",
  transform: wt
}), N0 = Fe({
  prop: "height",
  transform: wt
}), z0 = Fe({
  prop: "maxHeight",
  transform: wt
}), L0 = Fe({
  prop: "minHeight",
  transform: wt
});
Fe({
  prop: "size",
  cssProperty: "width",
  transform: wt
});
Fe({
  prop: "size",
  cssProperty: "height",
  transform: wt
});
const F0 = Fe({
  prop: "boxSizing"
});
gs(O0, hc, I0, N0, z0, L0, F0);
const bi = {
  // borders
  border: {
    themeKey: "borders",
    transform: Nt
  },
  borderTop: {
    themeKey: "borders",
    transform: Nt
  },
  borderRight: {
    themeKey: "borders",
    transform: Nt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Nt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Nt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Nt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: vs
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Dr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Dr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Dr
  },
  // spacing
  p: {
    style: Ne
  },
  pt: {
    style: Ne
  },
  pr: {
    style: Ne
  },
  pb: {
    style: Ne
  },
  pl: {
    style: Ne
  },
  px: {
    style: Ne
  },
  py: {
    style: Ne
  },
  padding: {
    style: Ne
  },
  paddingTop: {
    style: Ne
  },
  paddingRight: {
    style: Ne
  },
  paddingBottom: {
    style: Ne
  },
  paddingLeft: {
    style: Ne
  },
  paddingX: {
    style: Ne
  },
  paddingY: {
    style: Ne
  },
  paddingInline: {
    style: Ne
  },
  paddingInlineStart: {
    style: Ne
  },
  paddingInlineEnd: {
    style: Ne
  },
  paddingBlock: {
    style: Ne
  },
  paddingBlockStart: {
    style: Ne
  },
  paddingBlockEnd: {
    style: Ne
  },
  m: {
    style: Ie
  },
  mt: {
    style: Ie
  },
  mr: {
    style: Ie
  },
  mb: {
    style: Ie
  },
  ml: {
    style: Ie
  },
  mx: {
    style: Ie
  },
  my: {
    style: Ie
  },
  margin: {
    style: Ie
  },
  marginTop: {
    style: Ie
  },
  marginRight: {
    style: Ie
  },
  marginBottom: {
    style: Ie
  },
  marginLeft: {
    style: Ie
  },
  marginX: {
    style: Ie
  },
  marginY: {
    style: Ie
  },
  marginInline: {
    style: Ie
  },
  marginInlineStart: {
    style: Ie
  },
  marginInlineEnd: {
    style: Ie
  },
  marginBlock: {
    style: Ie
  },
  marginBlockStart: {
    style: Ie
  },
  marginBlockEnd: {
    style: Ie
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ys
  },
  rowGap: {
    style: Ss
  },
  columnGap: {
    style: xs
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: wt
  },
  maxWidth: {
    style: hc
  },
  minWidth: {
    transform: wt
  },
  height: {
    transform: wt
  },
  maxHeight: {
    transform: wt
  },
  minHeight: {
    transform: wt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function A0(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function j0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $m() {
  function e(n, r, o, i) {
    const l = {
      [n]: r,
      theme: o
    }, s = i[n];
    if (!s)
      return {
        [n]: r
      };
    const {
      cssProperty: a = n,
      themeKey: u,
      transform: c,
      style: d
    } = s;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = hs(o, u) || {};
    return d ? d(l) : jt(l, r, (v) => {
      let x = wl(p, c, v);
      return v === x && typeof v == "string" && (x = wl(p, c, `${n}${v === "default" ? "" : D(v)}`, v)), a === !1 ? x : {
        [a]: x
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {},
      nested: l
    } = n || {};
    if (!o)
      return null;
    const s = (r = i.unstable_sxConfig) != null ? r : bi;
    function a(u) {
      let c = u;
      if (typeof u == "function")
        c = u(i);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const d = Zy(i.breakpoints), p = Object.keys(d);
      let C = d;
      return Object.keys(c).forEach((v) => {
        const x = j0(c[v], i);
        if (x != null)
          if (typeof x == "object")
            if (s[v])
              C = Ao(C, e(v, x, i, s));
            else {
              const R = jt({
                theme: i
              }, x, (h) => ({
                [v]: h
              }));
              A0(R, x) ? C[v] = t({
                sx: x,
                theme: i,
                nested: !0
              }) : C = Ao(C, R);
            }
          else
            C = Ao(C, e(v, x, i, s));
      }), !l && i.modularCssLayers ? {
        "@layer sx": Wd(p, C)
      } : Wd(p, C);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const ao = $m();
ao.filterProps = ["sx"];
function Tm(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const D0 = ["breakpoints", "palette", "spacing", "shape"];
function Ei(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, l = U(e, D0), s = Em(n), a = s0(o);
  let u = Et({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: y({
      mode: "light"
    }, r),
    spacing: a,
    shape: y({}, qy, i)
  }, l);
  return u.applyStyles = Tm, u = t.reduce((c, d) => Et(c, d), u), u.unstable_sxConfig = y({}, bi, l == null ? void 0 : l.unstable_sxConfig), u.unstable_sx = function(d) {
    return ao({
      sx: d,
      theme: this
    });
  }, u;
}
const B0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ei,
  private_createBreakpoints: Em,
  unstable_applyStyles: Tm
}, Symbol.toStringTag, { value: "Module" }));
function W0(e) {
  return Object.keys(e).length === 0;
}
function gc(e = null) {
  const t = S.useContext(so);
  return !t || W0(t) ? e : t;
}
const U0 = Ei();
function Cs(e = U0) {
  return gc(e);
}
function sa(e) {
  const t = Cl(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function _m({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Cs(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((l) => sa(typeof l == "function" ? l(o) : l)) : i = sa(i)), /* @__PURE__ */ E.jsx(wm, {
    styles: i
  });
}
const V0 = ["sx"], H0 = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : bi;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function ws(e) {
  const {
    sx: t
  } = e, n = U(e, V0), {
    systemProps: r,
    otherProps: o
  } = H0(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...l) => {
    const s = t(...l);
    return hn(s) ? y({}, r, s) : r;
  } : i = y({}, r, t), y({}, o, {
    sx: i
  });
}
const K0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ao,
  extendSxProp: ws,
  unstable_createStyleFunctionSx: $m,
  unstable_defaultSxConfig: bi
}, Symbol.toStringTag, { value: "Module" })), Vd = (e) => e, G0 = () => {
  let e = Vd;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Vd;
    }
  };
}, Mm = G0();
function Om(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Om(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function H() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Om(e)) && (r && (r += " "), r += t);
  return r;
}
const Y0 = ["className", "component"];
function Q0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = dc("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(ao);
  return /* @__PURE__ */ S.forwardRef(function(a, u) {
    const c = Cs(n), d = ws(a), {
      className: p,
      component: C = "div"
    } = d, v = U(d, Y0);
    return /* @__PURE__ */ E.jsx(i, y({
      as: C,
      ref: u,
      className: H(p, o ? o(r) : r),
      theme: t && c[t] || c
    }, v));
  });
}
const X0 = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ce(e, t, n = "Mui") {
  const r = X0[t];
  return r ? `${n}-${r}` : `${Mm.generate(e)}-${t}`;
}
function de(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ce(e, o, n);
  }), r;
}
var Im = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vc = Symbol.for("react.transitional.element"), yc = Symbol.for("react.portal"), ks = Symbol.for("react.fragment"), bs = Symbol.for("react.strict_mode"), Es = Symbol.for("react.profiler"), Rs = Symbol.for("react.consumer"), Ps = Symbol.for("react.context"), $s = Symbol.for("react.forward_ref"), Ts = Symbol.for("react.suspense"), _s = Symbol.for("react.suspense_list"), Ms = Symbol.for("react.memo"), Os = Symbol.for("react.lazy"), q0 = Symbol.for("react.view_transition"), Z0 = Symbol.for("react.client.reference");
function Vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case vc:
        switch (e = e.type, e) {
          case ks:
          case Es:
          case bs:
          case Ts:
          case _s:
          case q0:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ps:
              case $s:
              case Os:
              case Ms:
                return e;
              case Rs:
                return e;
              default:
                return t;
            }
        }
      case yc:
        return t;
    }
  }
}
ge.ContextConsumer = Rs;
ge.ContextProvider = Ps;
ge.Element = vc;
ge.ForwardRef = $s;
ge.Fragment = ks;
ge.Lazy = Os;
ge.Memo = Ms;
ge.Portal = yc;
ge.Profiler = Es;
ge.StrictMode = bs;
ge.Suspense = Ts;
ge.SuspenseList = _s;
ge.isContextConsumer = function(e) {
  return Vt(e) === Rs;
};
ge.isContextProvider = function(e) {
  return Vt(e) === Ps;
};
ge.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vc;
};
ge.isForwardRef = function(e) {
  return Vt(e) === $s;
};
ge.isFragment = function(e) {
  return Vt(e) === ks;
};
ge.isLazy = function(e) {
  return Vt(e) === Os;
};
ge.isMemo = function(e) {
  return Vt(e) === Ms;
};
ge.isPortal = function(e) {
  return Vt(e) === yc;
};
ge.isProfiler = function(e) {
  return Vt(e) === Es;
};
ge.isStrictMode = function(e) {
  return Vt(e) === bs;
};
ge.isSuspense = function(e) {
  return Vt(e) === Ts;
};
ge.isSuspenseList = function(e) {
  return Vt(e) === _s;
};
ge.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ks || e === Es || e === bs || e === Ts || e === _s || typeof e == "object" && e !== null && (e.$$typeof === Os || e.$$typeof === Ms || e.$$typeof === Ps || e.$$typeof === Rs || e.$$typeof === $s || e.$$typeof === Z0 || e.getModuleId !== void 0);
};
ge.typeOf = Vt;
Im.exports = ge;
var Hd = Im.exports;
const J0 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Nm(e) {
  const t = `${e}`.match(J0);
  return t && t[1] || "";
}
function zm(e, t = "") {
  return e.displayName || e.name || Nm(e) || t;
}
function Kd(e, t, n) {
  const r = zm(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function e1(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return zm(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Hd.ForwardRef:
          return Kd(e, e.render, "ForwardRef");
        case Hd.Memo:
          return Kd(e, e.type, "memo");
        default:
          return;
      }
  }
}
const t1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: e1,
  getFunctionName: Nm
}, Symbol.toStringTag, { value: "Module" })), n1 = ["ownerState"], r1 = ["variants"], o1 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function i1(e) {
  return Object.keys(e).length === 0;
}
function l1(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function aa(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Gd(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const s1 = Ei(), a1 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function zi({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return i1(t) ? e : t[n] || t;
}
function u1(e) {
  return e ? (t, n) => n[e] : null;
}
function sl(e, t, n) {
  let {
    ownerState: r
  } = t, o = U(t, n1);
  const i = typeof e == "function" ? e(y({
    ownerState: r
  }, o)) : e;
  if (Array.isArray(i))
    return i.flatMap((l) => sl(l, y({
      ownerState: r
    }, o), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: l = []
    } = i;
    let a = U(i, r1);
    return l.forEach((u) => {
      let c = !0;
      if (typeof u.props == "function" ? c = u.props(y({
        ownerState: r
      }, o, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && o[d] !== u.props[d] && (c = !1);
      }), c) {
        Array.isArray(a) || (a = [a]);
        const d = typeof u.style == "function" ? u.style(y({
          ownerState: r
        }, o, r)) : u.style;
        a.push(n ? Gd(Cl(d), n) : d);
      }
    }), a;
  }
  return n ? Gd(Cl(i), n) : i;
}
function c1(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = s1,
    rootShouldForwardProp: r = aa,
    slotShouldForwardProp: o = aa
  } = e, i = (l) => ao(y({}, l, {
    theme: zi(y({}, l, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (l, s = {}) => {
    km(l, (w) => w.filter((k) => !(k != null && k.__mui_systemSx)));
    const {
      name: a,
      slot: u,
      skipVariantsResolver: c,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = u1(a1(u))
    } = s, C = U(s, o1), v = a && a.startsWith("Mui") || u ? "components" : "custom", x = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), R = d || !1;
    let h, m = aa;
    u === "Root" || u === "root" ? m = r : u ? m = o : l1(l) && (m = void 0);
    const f = dc(l, y({
      shouldForwardProp: m,
      label: h
    }, C)), g = (w) => typeof w == "function" && w.__emotion_real !== w || hn(w) ? (k) => {
      const P = zi({
        theme: k.theme,
        defaultTheme: n,
        themeId: t
      });
      return sl(w, y({}, k, {
        theme: P
      }), P.modularCssLayers ? v : void 0);
    } : w, b = (w, ...k) => {
      let P = g(w);
      const N = k ? k.map(g) : [];
      a && p && N.push((z) => {
        const _ = zi(y({}, z, {
          defaultTheme: n,
          themeId: t
        }));
        if (!_.components || !_.components[a] || !_.components[a].styleOverrides)
          return null;
        const O = _.components[a].styleOverrides, L = {};
        return Object.entries(O).forEach(([F, j]) => {
          L[F] = sl(j, y({}, z, {
            theme: _
          }), _.modularCssLayers ? "theme" : void 0);
        }), p(z, L);
      }), a && !x && N.push((z) => {
        var _;
        const O = zi(y({}, z, {
          defaultTheme: n,
          themeId: t
        })), L = O == null || (_ = O.components) == null || (_ = _[a]) == null ? void 0 : _.variants;
        return sl({
          variants: L
        }, y({}, z, {
          theme: O
        }), O.modularCssLayers ? "theme" : void 0);
      }), R || N.push(i);
      const T = N.length - k.length;
      if (Array.isArray(w) && T > 0) {
        const z = new Array(T).fill("");
        P = [...w, ...z], P.raw = [...w.raw, ...z];
      }
      const A = f(P, ...N);
      return l.muiName && (A.muiName = l.muiName), A;
    };
    return f.withConfig && (b.withConfig = f.withConfig), b;
  };
}
const d1 = c1();
function ei(e, t) {
  const n = y({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = y({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = y({}, i), Object.keys(o).forEach((l) => {
        n[r][l] = ei(o[l], i[l]);
      }));
    } else n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function f1(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : ei(t.components[n].defaultProps, r);
}
function p1({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Cs(n);
  return r && (o = o[r] || o), f1({
    theme: o,
    name: t,
    props: e
  });
}
const Bn = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function Lm(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const m1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lm
}, Symbol.toStringTag, { value: "Module" }));
function Yd(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Fm(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function ua(e, t) {
  var n, r;
  return /* @__PURE__ */ S.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function Rt(e) {
  return e && e.ownerDocument || document;
}
function ur(e) {
  return Rt(e).defaultView || window;
}
function Ya(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Qd = 0;
function h1(e) {
  const [t, n] = S.useState(e), r = e || t;
  return S.useEffect(() => {
    t == null && (Qd += 1, n(`mui-${Qd}`));
  }, [t]), r;
}
const Xd = Ua.useId;
function Ri(e) {
  if (Xd !== void 0) {
    const t = Xd();
    return e ?? t;
  }
  return h1(e);
}
function Qa({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = S.useRef(e !== void 0), [i, l] = S.useState(t), s = o ? e : i, a = S.useCallback((u) => {
    o || l(u);
  }, []);
  return [s, a];
}
function tr(e) {
  const t = S.useRef(e);
  return Bn(() => {
    t.current = e;
  }), S.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function ut(...e) {
  return S.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Ya(n, t);
    });
  }, e);
}
const qd = {};
function g1(e, t) {
  const n = S.useRef(qd);
  return n.current === qd && (n.current = e(t)), n;
}
const v1 = [];
function y1(e) {
  S.useEffect(e, v1);
}
class Is {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Is();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Am() {
  const e = g1(Is.create).current;
  return y1(e.disposeEffect), e;
}
let Ns = !0, Xa = !1;
const x1 = new Is(), S1 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function C1(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && S1[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function w1(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ns = !0);
}
function ca() {
  Ns = !1;
}
function k1() {
  this.visibilityState === "hidden" && Xa && (Ns = !0);
}
function b1(e) {
  e.addEventListener("keydown", w1, !0), e.addEventListener("mousedown", ca, !0), e.addEventListener("pointerdown", ca, !0), e.addEventListener("touchstart", ca, !0), e.addEventListener("visibilitychange", k1, !0);
}
function E1(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Ns || C1(t);
}
function jm() {
  const e = S.useCallback((o) => {
    o != null && b1(o.ownerDocument);
  }, []), t = S.useRef(!1);
  function n() {
    return t.current ? (Xa = !0, x1.start(100, () => {
      Xa = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(o) {
    return E1(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Dm(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const R1 = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
function he(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, l) => {
        if (l) {
          const s = t(l);
          s !== "" && i.push(s), n && n[l] && i.push(n[l]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
function kl(e) {
  return typeof e == "string";
}
function P1(e, t, n) {
  return e === void 0 || kl(e) ? t : y({}, t, {
    ownerState: y({}, t.ownerState, n)
  });
}
function Bm(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Zd(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function $1(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const C = H(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = y({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), x = y({}, n, o, r);
    return C.length > 0 && (x.className = C), Object.keys(v).length > 0 && (x.style = v), {
      props: x,
      internalRef: void 0
    };
  }
  const l = Bm(y({}, o, r)), s = Zd(r), a = Zd(o), u = t(l), c = H(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = y({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), p = y({}, u, n, a, s);
  return c.length > 0 && (p.className = c), Object.keys(d).length > 0 && (p.style = d), {
    props: p,
    internalRef: u.ref
  };
}
function T1(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
const _1 = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Xr(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, l = U(e, _1), s = i ? {} : T1(r, o), {
    props: a,
    internalRef: u
  } = $1(y({}, l, {
    externalSlotProps: s
  })), c = ut(u, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return P1(n, y({}, a, {
    ref: c
  }), o);
}
function Pi(e) {
  if (parseInt(S.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const Wm = /* @__PURE__ */ S.createContext(null);
function Um() {
  return S.useContext(Wm);
}
const M1 = typeof Symbol == "function" && Symbol.for, O1 = M1 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function I1(e, t) {
  return typeof t == "function" ? t(e) : y({}, e, t);
}
function N1(e) {
  const {
    children: t,
    theme: n
  } = e, r = Um(), o = S.useMemo(() => {
    const i = r === null ? n : I1(r, n);
    return i != null && (i[O1] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ E.jsx(Wm.Provider, {
    value: o,
    children: t
  });
}
const z1 = ["value"], Vm = /* @__PURE__ */ S.createContext();
function L1(e) {
  let {
    value: t
  } = e, n = U(e, z1);
  return /* @__PURE__ */ E.jsx(Vm.Provider, y({
    value: t ?? !0
  }, n));
}
const Hm = () => {
  const e = S.useContext(Vm);
  return e ?? !1;
}, Km = /* @__PURE__ */ S.createContext(void 0);
function F1({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ E.jsx(Km.Provider, {
    value: e,
    children: t
  });
}
function A1(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? ei(o.defaultProps, r) : !o.styleOverrides && !o.variants ? ei(o, r) : r;
}
function j1({
  props: e,
  name: t
}) {
  const n = S.useContext(Km);
  return A1({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
function D1(e) {
  const t = gc(), n = Ri() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Bn(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const l = i.firstChild;
    if (o) {
      var s;
      if (l && (s = l.hasAttribute) != null && s.call(l, "data-mui-layer-order") && l.getAttribute("data-mui-layer-order") === n)
        return;
      const u = document.createElement("style");
      u.setAttribute("data-mui-layer-order", n), u.textContent = o, i.prepend(u);
    } else {
      var a;
      (a = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || a.remove();
    }
  }, [o, n]), o ? /* @__PURE__ */ E.jsx(_m, {
    styles: o
  }) : null;
}
const Jd = {};
function ef(e, t, n, r = !1) {
  return S.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), l = e ? y({}, t, {
        [e]: i
      }) : i;
      return r ? () => l : l;
    }
    return e ? y({}, t, {
      [e]: n
    }) : y({}, t, n);
  }, [e, t, n, r]);
}
function B1(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = gc(Jd), i = Um() || Jd, l = ef(r, o, n), s = ef(r, i, n, !0), a = l.direction === "rtl", u = D1(l);
  return /* @__PURE__ */ E.jsx(N1, {
    theme: s,
    children: /* @__PURE__ */ E.jsx(so.Provider, {
      value: l,
      children: /* @__PURE__ */ E.jsx(L1, {
        value: a,
        children: /* @__PURE__ */ E.jsxs(F1, {
          value: l == null ? void 0 : l.components,
          children: [u, t]
        })
      })
    })
  });
}
const W1 = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], U1 = Ei(), V1 = d1("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`maxWidth${D(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
  }
}), H1 = (e) => p1({
  props: e,
  name: "MuiContainer",
  defaultTheme: U1
}), K1 = (e, t) => {
  const n = (a) => ce(t, a), {
    classes: r,
    fixed: o,
    disableGutters: i,
    maxWidth: l
  } = e, s = {
    root: ["root", l && `maxWidth${D(String(l))}`, o && "fixed", i && "disableGutters"]
  };
  return he(s, n, r);
};
function G1(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = V1,
    useThemeProps: n = H1,
    componentName: r = "MuiContainer"
  } = e, o = t(({
    theme: l,
    ownerState: s
  }) => y({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !s.disableGutters && {
    paddingLeft: l.spacing(2),
    paddingRight: l.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [l.breakpoints.up("sm")]: {
      paddingLeft: l.spacing(3),
      paddingRight: l.spacing(3)
    }
  }), ({
    theme: l,
    ownerState: s
  }) => s.fixed && Object.keys(l.breakpoints.values).reduce((a, u) => {
    const c = u, d = l.breakpoints.values[c];
    return d !== 0 && (a[l.breakpoints.up(c)] = {
      maxWidth: `${d}${l.breakpoints.unit}`
    }), a;
  }, {}), ({
    theme: l,
    ownerState: s
  }) => y({}, s.maxWidth === "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [l.breakpoints.up("xs")]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(l.breakpoints.values.xs, 444)
    }
  }, s.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  s.maxWidth !== "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [l.breakpoints.up(s.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: `${l.breakpoints.values[s.maxWidth]}${l.breakpoints.unit}`
    }
  }));
  return /* @__PURE__ */ S.forwardRef(function(s, a) {
    const u = n(s), {
      className: c,
      component: d = "div",
      disableGutters: p = !1,
      fixed: C = !1,
      maxWidth: v = "lg"
    } = u, x = U(u, W1), R = y({}, u, {
      component: d,
      disableGutters: p,
      fixed: C,
      maxWidth: v
    }), h = K1(R, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ E.jsx(o, y({
        as: d,
        ownerState: R,
        className: H(h.root, c),
        ref: a
      }, x))
    );
  });
}
function Y1(e, t) {
  return y({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var Ae = {}, Gm = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Gm);
var Ym = Gm.exports;
const Q1 = /* @__PURE__ */ Vn(Bv), X1 = /* @__PURE__ */ Vn(m1);
var Qm = Ym;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
var st = Ae.alpha = Jm;
Ae.blend = ux;
Ae.colorChannel = void 0;
var q1 = Ae.darken = Sc;
Ae.decomposeColor = Dt;
Ae.emphasize = eh;
var Z1 = Ae.getContrastRatio = ox;
Ae.getLuminance = bl;
Ae.hexToRgb = Xm;
Ae.hslToRgb = Zm;
var J1 = Ae.lighten = Cc;
Ae.private_safeAlpha = ix;
Ae.private_safeColorChannel = void 0;
Ae.private_safeDarken = lx;
Ae.private_safeEmphasize = ax;
Ae.private_safeLighten = sx;
Ae.recomposeColor = uo;
Ae.rgbToHex = rx;
var tf = Qm(Q1), ex = Qm(X1);
function xc(e, t = 0, n = 1) {
  return (0, ex.default)(e, t, n);
}
function Xm(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function tx(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Dt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Dt(Xm(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, tf.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error((0, tf.default)(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const qm = (e) => {
  const t = Dt(e);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
Ae.colorChannel = qm;
const nx = (e, t) => {
  try {
    return qm(e);
  } catch {
    return e;
  }
};
Ae.private_safeColorChannel = nx;
function uo(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function rx(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Dt(e);
  return `#${t.map((n, r) => tx(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Zm(e) {
  e = Dt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), l = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const a = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e.type === "hsla" && (s += "a", a.push(t[3])), uo({
    type: s,
    values: a
  });
}
function bl(e) {
  e = Dt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Dt(Zm(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ox(e, t) {
  const n = bl(e), r = bl(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Jm(e, t) {
  return e = Dt(e), t = xc(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, uo(e);
}
function ix(e, t, n) {
  try {
    return Jm(e, t);
  } catch {
    return e;
  }
}
function Sc(e, t) {
  if (e = Dt(e), t = xc(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return uo(e);
}
function lx(e, t, n) {
  try {
    return Sc(e, t);
  } catch {
    return e;
  }
}
function Cc(e, t) {
  if (e = Dt(e), t = xc(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return uo(e);
}
function sx(e, t, n) {
  try {
    return Cc(e, t);
  } catch {
    return e;
  }
}
function eh(e, t = 0.15) {
  return bl(e) > 0.5 ? Sc(e, t) : Cc(e, t);
}
function ax(e, t, n) {
  try {
    return eh(e, t);
  } catch {
    return e;
  }
}
function ux(e, t, n, r = 1) {
  const o = (a, u) => Math.round((a ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r), i = Dt(e), l = Dt(t), s = [o(i.values[0], l.values[0]), o(i.values[1], l.values[1]), o(i.values[2], l.values[2])];
  return uo({
    type: "rgb",
    values: s
  });
}
const cx = ["mode", "contrastThreshold", "tonalOffset"], nf = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Xo.white,
    default: Xo.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, da = {
  text: {
    primary: Xo.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Xo.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function rf(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = J1(e.main, o) : t === "dark" && (e.dark = q1(e.main, i)));
}
function dx(e = "light") {
  return e === "dark" ? {
    main: Cr[200],
    light: Cr[50],
    dark: Cr[400]
  } : {
    main: Cr[700],
    light: Cr[400],
    dark: Cr[800]
  };
}
function fx(e = "light") {
  return e === "dark" ? {
    main: Sr[200],
    light: Sr[50],
    dark: Sr[400]
  } : {
    main: Sr[500],
    light: Sr[300],
    dark: Sr[700]
  };
}
function px(e = "light") {
  return e === "dark" ? {
    main: xr[500],
    light: xr[300],
    dark: xr[700]
  } : {
    main: xr[700],
    light: xr[400],
    dark: xr[800]
  };
}
function mx(e = "light") {
  return e === "dark" ? {
    main: wr[400],
    light: wr[300],
    dark: wr[700]
  } : {
    main: wr[700],
    light: wr[500],
    dark: wr[900]
  };
}
function hx(e = "light") {
  return e === "dark" ? {
    main: kr[400],
    light: kr[300],
    dark: kr[700]
  } : {
    main: kr[800],
    light: kr[500],
    dark: kr[900]
  };
}
function gx(e = "light") {
  return e === "dark" ? {
    main: yo[400],
    light: yo[300],
    dark: yo[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: yo[500],
    dark: yo[900]
  };
}
function vx(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = U(e, cx), i = e.primary || dx(t), l = e.secondary || fx(t), s = e.error || px(t), a = e.info || mx(t), u = e.success || hx(t), c = e.warning || gx(t);
  function d(x) {
    return Z1(x, da.text.primary) >= n ? da.text.primary : nf.text.primary;
  }
  const p = ({
    color: x,
    name: R,
    mainShade: h = 500,
    lightShade: m = 300,
    darkShade: f = 700
  }) => {
    if (x = y({}, x), !x.main && x[h] && (x.main = x[h]), !x.hasOwnProperty("main"))
      throw new Error(ar(11, R ? ` (${R})` : "", h));
    if (typeof x.main != "string")
      throw new Error(ar(12, R ? ` (${R})` : "", JSON.stringify(x.main)));
    return rf(x, "light", m, r), rf(x, "dark", f, r), x.contrastText || (x.contrastText = d(x.main)), x;
  }, C = {
    dark: da,
    light: nf
  };
  return Et(y({
    // A collection of common colors.
    common: y({}, Xo),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: a,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Dv,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, C[t]), o);
}
const yx = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function xx(e) {
  return Math.round(e * 1e5) / 1e5;
}
const of = {
  textTransform: "uppercase"
}, lf = '"Roboto", "Helvetica", "Arial", sans-serif';
function Sx(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = lf,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: l = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: d
  } = n, p = U(n, yx), C = o / 14, v = d || ((h) => `${h / u * C}rem`), x = (h, m, f, g, b) => y({
    fontFamily: r,
    fontWeight: h,
    fontSize: v(m),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: f
  }, r === lf ? {
    letterSpacing: `${xx(g / m)}em`
  } : {}, b, c), R = {
    h1: x(i, 96, 1.167, -1.5),
    h2: x(i, 60, 1.2, -0.5),
    h3: x(l, 48, 1.167, 0),
    h4: x(l, 34, 1.235, 0.25),
    h5: x(l, 24, 1.334, 0),
    h6: x(s, 20, 1.6, 0.15),
    subtitle1: x(l, 16, 1.75, 0.15),
    subtitle2: x(s, 14, 1.57, 0.1),
    body1: x(l, 16, 1.5, 0.15),
    body2: x(l, 14, 1.43, 0.15),
    button: x(s, 14, 1.75, 0.4, of),
    caption: x(l, 12, 1.66, 0.4),
    overline: x(l, 12, 2.66, 1, of),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Et(y({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: l,
    fontWeightMedium: s,
    fontWeightBold: a
  }, R), p, {
    clone: !1
    // No need to clone deep
  });
}
const Cx = 0.2, wx = 0.14, kx = 0.12;
function Re(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Cx})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${wx})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${kx})`].join(",");
}
const bx = ["none", Re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ex = ["duration", "easing", "delay"], Rx = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Px = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function sf(e) {
  return `${Math.round(e)}ms`;
}
function $x(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Tx(e) {
  const t = y({}, Rx, e.easing), n = y({}, Px, e.duration);
  return y({
    getAutoHeightDuration: $x,
    create: (o = ["all"], i = {}) => {
      const {
        duration: l = n.standard,
        easing: s = t.easeInOut,
        delay: a = 0
      } = i;
      return U(i, Ex), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof l == "string" ? l : sf(l)} ${s} ${typeof a == "string" ? a : sf(a)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const _x = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Mx = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function wc(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, l = U(e, Mx);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(ar(18));
  const s = vx(r), a = Ei(e);
  let u = Et(a, {
    mixins: Y1(a.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: bx.slice(),
    typography: Sx(s, i),
    transitions: Tx(o),
    zIndex: y({}, _x)
  });
  return u = Et(u, l), u = t.reduce((c, d) => Et(c, d), u), u.unstable_sxConfig = y({}, bi, l == null ? void 0 : l.unstable_sxConfig), u.unstable_sx = function(d) {
    return ao({
      sx: d,
      theme: this
    });
  }, u;
}
const kc = wc();
function bc() {
  const e = Cs(kc);
  return e[Yr] || e;
}
var $i = {}, fa = { exports: {} }, af;
function Ox() {
  return af || (af = 1, function(e) {
    function t(n, r) {
      if (n == null) return {};
      var o = {};
      for (var i in n) if ({}.hasOwnProperty.call(n, i)) {
        if (r.indexOf(i) !== -1) continue;
        o[i] = n[i];
      }
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(fa)), fa.exports;
}
const Ix = /* @__PURE__ */ Vn(Gy), Nx = /* @__PURE__ */ Vn(Yy), zx = /* @__PURE__ */ Vn(e0), Lx = /* @__PURE__ */ Vn(t1), Fx = /* @__PURE__ */ Vn(B0), Ax = /* @__PURE__ */ Vn(K0);
var co = Ym;
Object.defineProperty($i, "__esModule", {
  value: !0
});
var jx = $i.default = Zx;
$i.shouldForwardProp = al;
$i.systemDefaultTheme = void 0;
var Ot = co(Sm()), qa = co(Ox()), El = Kx(Ix), Dx = Nx;
co(zx);
co(Lx);
var Bx = co(Fx), Wx = co(Ax);
const Ux = ["ownerState"], Vx = ["variants"], Hx = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function th(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (th = function(r) {
    return r ? n : t;
  })(e);
}
function Kx(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var n = th(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
    var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
    l && (l.get || l.set) ? Object.defineProperty(r, i, l) : r[i] = e[i];
  }
  return r.default = e, n && n.set(e, r), r;
}
function Gx(e) {
  return Object.keys(e).length === 0;
}
function Yx(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function al(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function uf(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const Qx = $i.systemDefaultTheme = (0, Bx.default)(), Xx = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Li({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Gx(t) ? e : t[n] || t;
}
function qx(e) {
  return e ? (t, n) => n[e] : null;
}
function ul(e, t, n) {
  let {
    ownerState: r
  } = t, o = (0, qa.default)(t, Ux);
  const i = typeof e == "function" ? e((0, Ot.default)({
    ownerState: r
  }, o)) : e;
  if (Array.isArray(i))
    return i.flatMap((l) => ul(l, (0, Ot.default)({
      ownerState: r
    }, o), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: l = []
    } = i;
    let a = (0, qa.default)(i, Vx);
    return l.forEach((u) => {
      let c = !0;
      if (typeof u.props == "function" ? c = u.props((0, Ot.default)({
        ownerState: r
      }, o, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && o[d] !== u.props[d] && (c = !1);
      }), c) {
        Array.isArray(a) || (a = [a]);
        const d = typeof u.style == "function" ? u.style((0, Ot.default)({
          ownerState: r
        }, o, r)) : u.style;
        a.push(n ? uf((0, El.internal_serializeStyles)(d), n) : d);
      }
    }), a;
  }
  return n ? uf((0, El.internal_serializeStyles)(i), n) : i;
}
function Zx(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Qx,
    rootShouldForwardProp: r = al,
    slotShouldForwardProp: o = al
  } = e, i = (l) => (0, Wx.default)((0, Ot.default)({}, l, {
    theme: Li((0, Ot.default)({}, l, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (l, s = {}) => {
    (0, El.internal_processStyles)(l, (w) => w.filter((k) => !(k != null && k.__mui_systemSx)));
    const {
      name: a,
      slot: u,
      skipVariantsResolver: c,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = qx(Xx(u))
    } = s, C = (0, qa.default)(s, Hx), v = a && a.startsWith("Mui") || u ? "components" : "custom", x = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), R = d || !1;
    let h, m = al;
    u === "Root" || u === "root" ? m = r : u ? m = o : Yx(l) && (m = void 0);
    const f = (0, El.default)(l, (0, Ot.default)({
      shouldForwardProp: m,
      label: h
    }, C)), g = (w) => typeof w == "function" && w.__emotion_real !== w || (0, Dx.isPlainObject)(w) ? (k) => {
      const P = Li({
        theme: k.theme,
        defaultTheme: n,
        themeId: t
      });
      return ul(w, (0, Ot.default)({}, k, {
        theme: P
      }), P.modularCssLayers ? v : void 0);
    } : w, b = (w, ...k) => {
      let P = g(w);
      const N = k ? k.map(g) : [];
      a && p && N.push((z) => {
        const _ = Li((0, Ot.default)({}, z, {
          defaultTheme: n,
          themeId: t
        }));
        if (!_.components || !_.components[a] || !_.components[a].styleOverrides)
          return null;
        const O = _.components[a].styleOverrides, L = {};
        return Object.entries(O).forEach(([F, j]) => {
          L[F] = ul(j, (0, Ot.default)({}, z, {
            theme: _
          }), _.modularCssLayers ? "theme" : void 0);
        }), p(z, L);
      }), a && !x && N.push((z) => {
        var _;
        const O = Li((0, Ot.default)({}, z, {
          defaultTheme: n,
          themeId: t
        })), L = O == null || (_ = O.components) == null || (_ = _[a]) == null ? void 0 : _.variants;
        return ul({
          variants: L
        }, (0, Ot.default)({}, z, {
          theme: O
        }), O.modularCssLayers ? "theme" : void 0);
      }), R || N.push(i);
      const T = N.length - k.length;
      if (Array.isArray(w) && T > 0) {
        const z = new Array(T).fill("");
        P = [...w, ...z], P.raw = [...w.raw, ...z];
      }
      const A = f(P, ...N);
      return l.muiName && (A.muiName = l.muiName), A;
    };
    return f.withConfig && (b.withConfig = f.withConfig), b;
  };
}
function Ec(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Jt = (e) => Ec(e) && e !== "classes", V = jx({
  themeId: Yr,
  defaultTheme: kc,
  rootShouldForwardProp: Jt
}), Jx = ["theme"];
function eS(e) {
  let {
    theme: t
  } = e, n = U(e, Jx);
  const r = t[Yr];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = y({}, r, {
    vars: null
  }) : t && !t.vars && (o = y({}, t, {
    vars: null
  }))), /* @__PURE__ */ E.jsx(B1, y({}, n, {
    themeId: r ? Yr : void 0,
    theme: o
  }));
}
const cf = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function fe(e) {
  return j1(e);
}
function tS(e) {
  return ce("MuiSvgIcon", e);
}
de("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const nS = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], rS = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${D(t)}`, `fontSize${D(n)}`]
  };
  return he(o, tS, r);
}, oS = V("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${D(n.color)}`], t[`fontSize${D(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, l, s, a, u, c, d, p, C, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (l = i.pxToRem) == null ? void 0 : l.call(i, 20)) || "1.25rem",
      medium: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (c = u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (d = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? d : {
      action: (C = (e.vars || e).palette) == null || (C = C.action) == null ? void 0 : C.active,
      disabled: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.disabled,
      inherit: void 0
    }[t.color]
  };
}), Za = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: l = "inherit",
    component: s = "svg",
    fontSize: a = "medium",
    htmlColor: u,
    inheritViewBox: c = !1,
    titleAccess: d,
    viewBox: p = "0 0 24 24"
  } = r, C = U(r, nS), v = /* @__PURE__ */ S.isValidElement(o) && o.type === "svg", x = y({}, r, {
    color: l,
    component: s,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: p,
    hasSvgAsChild: v
  }), R = {};
  c || (R.viewBox = p);
  const h = rS(x);
  return /* @__PURE__ */ E.jsxs(oS, y({
    as: s,
    className: H(h.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: n
  }, R, C, v && o.props, {
    ownerState: x,
    children: [v ? o.props.children : o, d ? /* @__PURE__ */ E.jsx("title", {
      children: d
    }) : null]
  }));
});
Za.muiName = "SvgIcon";
function fo(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ E.jsx(Za, y({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return n.muiName = Za.muiName, /* @__PURE__ */ S.memo(/* @__PURE__ */ S.forwardRef(n));
}
function Ja(e, t) {
  return Ja = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ja(e, t);
}
function nh(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ja(e, t);
}
var rh = { exports: {} }, _t = {}, oh = { exports: {} }, ih = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t($, I) {
    var W = $.length;
    $.push(I);
    e: for (; 0 < W; ) {
      var Z = W - 1 >>> 1, X = $[Z];
      if (0 < o(X, I)) $[Z] = I, $[W] = X, W = Z;
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var I = $[0], W = $.pop();
    if (W !== I) {
      $[0] = W;
      e: for (var Z = 0, X = $.length, ae = X >>> 1; Z < ae; ) {
        var Q = 2 * (Z + 1) - 1, ue = $[Q], te = Q + 1, Oe = $[te];
        if (0 > o(ue, W)) te < X && 0 > o(Oe, ue) ? ($[Z] = Oe, $[te] = W, Z = te) : ($[Z] = ue, $[Q] = W, Z = Q);
        else if (te < X && 0 > o(Oe, W)) $[Z] = Oe, $[te] = W, Z = te;
        else break e;
      }
    }
    return I;
  }
  function o($, I) {
    var W = $.sortIndex - I.sortIndex;
    return W !== 0 ? W : $.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, s = l.now();
    e.unstable_now = function() {
      return l.now() - s;
    };
  }
  var a = [], u = [], c = 1, d = null, p = 3, C = !1, v = !1, x = !1, R = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f($) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= $) r(u), I.sortIndex = I.expirationTime, t(a, I);
      else break;
      I = n(u);
    }
  }
  function g($) {
    if (x = !1, f($), !v) if (n(a) !== null) v = !0, F(b);
    else {
      var I = n(u);
      I !== null && j(g, I.startTime - $);
    }
  }
  function b($, I) {
    v = !1, x && (x = !1, h(P), P = -1), C = !0;
    var W = p;
    try {
      for (f(I), d = n(a); d !== null && (!(d.expirationTime > I) || $ && !A()); ) {
        var Z = d.callback;
        if (typeof Z == "function") {
          d.callback = null, p = d.priorityLevel;
          var X = Z(d.expirationTime <= I);
          I = e.unstable_now(), typeof X == "function" ? d.callback = X : d === n(a) && r(a), f(I);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var ae = !0;
      else {
        var Q = n(u);
        Q !== null && j(g, Q.startTime - I), ae = !1;
      }
      return ae;
    } finally {
      d = null, p = W, C = !1;
    }
  }
  var w = !1, k = null, P = -1, N = 5, T = -1;
  function A() {
    return !(e.unstable_now() - T < N);
  }
  function z() {
    if (k !== null) {
      var $ = e.unstable_now();
      T = $;
      var I = !0;
      try {
        I = k(!0, $);
      } finally {
        I ? _() : (w = !1, k = null);
      }
    } else w = !1;
  }
  var _;
  if (typeof m == "function") _ = function() {
    m(z);
  };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(), L = O.port2;
    O.port1.onmessage = z, _ = function() {
      L.postMessage(null);
    };
  } else _ = function() {
    R(z, 0);
  };
  function F($) {
    k = $, w || (w = !0, _());
  }
  function j($, I) {
    P = R(function() {
      $(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    v || C || (v = !0, F(b));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function($) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = p;
    }
    var W = p;
    p = I;
    try {
      return $();
    } finally {
      p = W;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function($, I) {
    switch ($) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        $ = 3;
    }
    var W = p;
    p = $;
    try {
      return I();
    } finally {
      p = W;
    }
  }, e.unstable_scheduleCallback = function($, I, W) {
    var Z = e.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? Z + W : Z) : W = Z, $) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = W + X, $ = { id: c++, callback: I, priorityLevel: $, startTime: W, expirationTime: X, sortIndex: -1 }, W > Z ? ($.sortIndex = W, t(u, $), n(a) === null && $ === n(u) && (x ? (h(P), P = -1) : x = !0, j(g, W - Z))) : ($.sortIndex = X, t(a, $), v || C || (v = !0, F(b))), $;
  }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function($) {
    var I = p;
    return function() {
      var W = p;
      p = I;
      try {
        return $.apply(this, arguments);
      } finally {
        p = W;
      }
    };
  };
})(ih);
oh.exports = ih;
var iS = oh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lS = S, $t = iS;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var lh = /* @__PURE__ */ new Set(), ti = {};
function hr(e, t) {
  qr(e, t), qr(e + "Capture", t);
}
function qr(e, t) {
  for (ti[e] = t, e = 0; e < t.length; e++) lh.add(t[e]);
}
var xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), eu = Object.prototype.hasOwnProperty, sS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, df = {}, ff = {};
function aS(e) {
  return eu.call(ff, e) ? !0 : eu.call(df, e) ? !1 : sS.test(e) ? ff[e] = !0 : (df[e] = !0, !1);
}
function uS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function cS(e, t, n, r) {
  if (t === null || typeof t > "u" || uS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function mt(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var nt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  nt[e] = new mt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  nt[t] = new mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  nt[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  nt[e] = new mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  nt[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  nt[e] = new mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  nt[e] = new mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  nt[e] = new mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  nt[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rc = /[\-:]([a-z])/g;
function Pc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Rc,
    Pc
  );
  nt[t] = new mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Rc, Pc);
  nt[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Rc, Pc);
  nt[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  nt[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
nt.xlinkHref = new mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  nt[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $c(e, t, n, r) {
  var o = nt.hasOwnProperty(t) ? nt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (cS(t, n, o, r) && (n = null), r || o === null ? aS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kn = lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fi = Symbol.for("react.element"), Pr = Symbol.for("react.portal"), $r = Symbol.for("react.fragment"), Tc = Symbol.for("react.strict_mode"), tu = Symbol.for("react.profiler"), sh = Symbol.for("react.provider"), ah = Symbol.for("react.context"), _c = Symbol.for("react.forward_ref"), nu = Symbol.for("react.suspense"), ru = Symbol.for("react.suspense_list"), Mc = Symbol.for("react.memo"), Pn = Symbol.for("react.lazy"), uh = Symbol.for("react.offscreen"), pf = Symbol.iterator;
function So(e) {
  return e === null || typeof e != "object" ? null : (e = pf && e[pf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Me = Object.assign, pa;
function Io(e) {
  if (pa === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    pa = t && t[1] || "";
  }
  return `
` + pa + e;
}
var ma = !1;
function ha(e, t) {
  if (!e || ma) return "";
  ma = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; ) s--;
      for (; 1 <= l && 0 <= s; l--, s--) if (o[l] !== i[s]) {
        if (l !== 1 || s !== 1)
          do
            if (l--, s--, 0 > s || o[l] !== i[s]) {
              var a = `
` + o[l].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= l && 0 <= s);
        break;
      }
    }
  } finally {
    ma = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Io(e) : "";
}
function dS(e) {
  switch (e.tag) {
    case 5:
      return Io(e.type);
    case 16:
      return Io("Lazy");
    case 13:
      return Io("Suspense");
    case 19:
      return Io("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ha(e.type, !1), e;
    case 11:
      return e = ha(e.type.render, !1), e;
    case 1:
      return e = ha(e.type, !0), e;
    default:
      return "";
  }
}
function ou(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $r:
      return "Fragment";
    case Pr:
      return "Portal";
    case tu:
      return "Profiler";
    case Tc:
      return "StrictMode";
    case nu:
      return "Suspense";
    case ru:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ah:
      return (e.displayName || "Context") + ".Consumer";
    case sh:
      return (e._context.displayName || "Context") + ".Provider";
    case _c:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Mc:
      return t = e.displayName || null, t !== null ? t : ou(e.type) || "Memo";
    case Pn:
      t = e._payload, e = e._init;
      try {
        return ou(e(t));
      } catch {
      }
  }
  return null;
}
function fS(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ou(t);
    case 8:
      return t === Tc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Wn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ch(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function pS(e) {
  var t = ch(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ai(e) {
  e._valueTracker || (e._valueTracker = pS(e));
}
function dh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ch(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Rl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function iu(e, t) {
  var n = t.checked;
  return Me({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function mf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Wn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function fh(e, t) {
  t = t.checked, t != null && $c(e, "checked", t, !1);
}
function lu(e, t) {
  fh(e, t);
  var n = Wn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? su(e, t.type, n) : t.hasOwnProperty("defaultValue") && su(e, t.type, Wn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function hf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function su(e, t, n) {
  (t !== "number" || Rl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var No = Array.isArray;
function Br(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function au(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return Me({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(M(92));
      if (No(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Wn(n) };
}
function ph(e, t) {
  var n = Wn(t.value), r = Wn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function vf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function uu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? mh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ji, hh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ji = ji || document.createElement("div"), ji.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ji.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ni(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jo = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, mS = ["Webkit", "ms", "Moz", "O"];
Object.keys(jo).forEach(function(e) {
  mS.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), jo[t] = jo[e];
  });
});
function gh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jo.hasOwnProperty(e) && jo[e] ? ("" + t).trim() : t + "px";
}
function vh(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = gh(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var hS = Me({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function cu(e, t) {
  if (t) {
    if (hS[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function du(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fu = null;
function Oc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var pu = null, Wr = null, Ur = null;
function yf(e) {
  if (e = Mi(e)) {
    if (typeof pu != "function") throw Error(M(280));
    var t = e.stateNode;
    t && (t = js(t), pu(e.stateNode, e.type, t));
  }
}
function yh(e) {
  Wr ? Ur ? Ur.push(e) : Ur = [e] : Wr = e;
}
function xh() {
  if (Wr) {
    var e = Wr, t = Ur;
    if (Ur = Wr = null, yf(e), t) for (e = 0; e < t.length; e++) yf(t[e]);
  }
}
function Sh(e, t) {
  return e(t);
}
function Ch() {
}
var ga = !1;
function wh(e, t, n) {
  if (ga) return e(t, n);
  ga = !0;
  try {
    return Sh(e, t, n);
  } finally {
    ga = !1, (Wr !== null || Ur !== null) && (Ch(), xh());
  }
}
function ri(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = js(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var mu = !1;
if (xn) try {
  var Co = {};
  Object.defineProperty(Co, "passive", { get: function() {
    mu = !0;
  } }), window.addEventListener("test", Co, Co), window.removeEventListener("test", Co, Co);
} catch {
  mu = !1;
}
function gS(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Do = !1, Pl = null, $l = !1, hu = null, vS = { onError: function(e) {
  Do = !0, Pl = e;
} };
function yS(e, t, n, r, o, i, l, s, a) {
  Do = !1, Pl = null, gS.apply(vS, arguments);
}
function xS(e, t, n, r, o, i, l, s, a) {
  if (yS.apply(this, arguments), Do) {
    if (Do) {
      var u = Pl;
      Do = !1, Pl = null;
    } else throw Error(M(198));
    $l || ($l = !0, hu = u);
  }
}
function gr(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function kh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xf(e) {
  if (gr(e) !== e) throw Error(M(188));
}
function SS(e) {
  var t = e.alternate;
  if (!t) {
    if (t = gr(e), t === null) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return xf(o), e;
        if (i === r) return xf(o), t;
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          l = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            l = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function bh(e) {
  return e = SS(e), e !== null ? Eh(e) : null;
}
function Eh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Eh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rh = $t.unstable_scheduleCallback, Sf = $t.unstable_cancelCallback, CS = $t.unstable_shouldYield, wS = $t.unstable_requestPaint, Le = $t.unstable_now, kS = $t.unstable_getCurrentPriorityLevel, Ic = $t.unstable_ImmediatePriority, Ph = $t.unstable_UserBlockingPriority, Tl = $t.unstable_NormalPriority, bS = $t.unstable_LowPriority, $h = $t.unstable_IdlePriority, zs = null, an = null;
function ES(e) {
  if (an && typeof an.onCommitFiberRoot == "function") try {
    an.onCommitFiberRoot(zs, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Xt = Math.clz32 ? Math.clz32 : $S, RS = Math.log, PS = Math.LN2;
function $S(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (RS(e) / PS | 0) | 0;
}
var Di = 64, Bi = 4194304;
function zo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _l(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = zo(s) : (i &= l, i !== 0 && (r = zo(i)));
  } else l = n & ~o, l !== 0 ? r = zo(l) : i !== 0 && (r = zo(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Xt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function TS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function _S(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - Xt(i), s = 1 << l, a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = TS(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function gu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Th() {
  var e = Di;
  return Di <<= 1, !(Di & 4194240) && (Di = 64), e;
}
function va(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ti(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xt(t), e[t] = n;
}
function MS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Nc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var pe = 0;
function _h(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Mh, zc, Oh, Ih, Nh, vu = !1, Wi = [], In = null, Nn = null, zn = null, oi = /* @__PURE__ */ new Map(), ii = /* @__PURE__ */ new Map(), Tn = [], OS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Cf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      In = null;
      break;
    case "dragenter":
    case "dragleave":
      Nn = null;
      break;
    case "mouseover":
    case "mouseout":
      zn = null;
      break;
    case "pointerover":
    case "pointerout":
      oi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ii.delete(t.pointerId);
  }
}
function wo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Mi(t), t !== null && zc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function IS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return In = wo(In, e, t, n, r, o), !0;
    case "dragenter":
      return Nn = wo(Nn, e, t, n, r, o), !0;
    case "mouseover":
      return zn = wo(zn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return oi.set(i, wo(oi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ii.set(i, wo(ii.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function zh(e) {
  var t = nr(e.target);
  if (t !== null) {
    var n = gr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = kh(n), t !== null) {
          e.blockedOn = t, Nh(e.priority, function() {
            Oh(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function cl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fu = r, n.target.dispatchEvent(r), fu = null;
    } else return t = Mi(n), t !== null && zc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function wf(e, t, n) {
  cl(e) && n.delete(t);
}
function NS() {
  vu = !1, In !== null && cl(In) && (In = null), Nn !== null && cl(Nn) && (Nn = null), zn !== null && cl(zn) && (zn = null), oi.forEach(wf), ii.forEach(wf);
}
function ko(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vu || (vu = !0, $t.unstable_scheduleCallback($t.unstable_NormalPriority, NS)));
}
function li(e) {
  function t(o) {
    return ko(o, e);
  }
  if (0 < Wi.length) {
    ko(Wi[0], e);
    for (var n = 1; n < Wi.length; n++) {
      var r = Wi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (In !== null && ko(In, e), Nn !== null && ko(Nn, e), zn !== null && ko(zn, e), oi.forEach(t), ii.forEach(t), n = 0; n < Tn.length; n++) r = Tn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tn.length && (n = Tn[0], n.blockedOn === null); ) zh(n), n.blockedOn === null && Tn.shift();
}
var Vr = kn.ReactCurrentBatchConfig, Ml = !0;
function zS(e, t, n, r) {
  var o = pe, i = Vr.transition;
  Vr.transition = null;
  try {
    pe = 1, Lc(e, t, n, r);
  } finally {
    pe = o, Vr.transition = i;
  }
}
function LS(e, t, n, r) {
  var o = pe, i = Vr.transition;
  Vr.transition = null;
  try {
    pe = 4, Lc(e, t, n, r);
  } finally {
    pe = o, Vr.transition = i;
  }
}
function Lc(e, t, n, r) {
  if (Ml) {
    var o = yu(e, t, n, r);
    if (o === null) Pa(e, t, r, Ol, n), Cf(e, r);
    else if (IS(o, e, t, n, r)) r.stopPropagation();
    else if (Cf(e, r), t & 4 && -1 < OS.indexOf(e)) {
      for (; o !== null; ) {
        var i = Mi(o);
        if (i !== null && Mh(i), i = yu(e, t, n, r), i === null && Pa(e, t, r, Ol, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Pa(e, t, r, null, n);
  }
}
var Ol = null;
function yu(e, t, n, r) {
  if (Ol = null, e = Oc(r), e = nr(e), e !== null) if (t = gr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = kh(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ol = e, null;
}
function Lh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (kS()) {
        case Ic:
          return 1;
        case Ph:
          return 4;
        case Tl:
        case bS:
          return 16;
        case $h:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mn = null, Fc = null, dl = null;
function Fh() {
  if (dl) return dl;
  var e, t = Fc, n = t.length, r, o = "value" in Mn ? Mn.value : Mn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return dl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function fl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ui() {
  return !0;
}
function kf() {
  return !1;
}
function Mt(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ui : kf, this.isPropagationStopped = kf, this;
  }
  return Me(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ui);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ui);
  }, persist: function() {
  }, isPersistent: Ui }), t;
}
var po = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ac = Mt(po), _i = Me({}, po, { view: 0, detail: 0 }), FS = Mt(_i), ya, xa, bo, Ls = Me({}, _i, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: jc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== bo && (bo && e.type === "mousemove" ? (ya = e.screenX - bo.screenX, xa = e.screenY - bo.screenY) : xa = ya = 0, bo = e), ya);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xa;
} }), bf = Mt(Ls), AS = Me({}, Ls, { dataTransfer: 0 }), jS = Mt(AS), DS = Me({}, _i, { relatedTarget: 0 }), Sa = Mt(DS), BS = Me({}, po, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), WS = Mt(BS), US = Me({}, po, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), VS = Mt(US), HS = Me({}, po, { data: 0 }), Ef = Mt(HS), KS = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, GS = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, YS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function QS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = YS[e]) ? !!t[e] : !1;
}
function jc() {
  return QS;
}
var XS = Me({}, _i, { key: function(e) {
  if (e.key) {
    var t = KS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? GS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: jc, charCode: function(e) {
  return e.type === "keypress" ? fl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), qS = Mt(XS), ZS = Me({}, Ls, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rf = Mt(ZS), JS = Me({}, _i, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: jc }), eC = Mt(JS), tC = Me({}, po, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), nC = Mt(tC), rC = Me({}, Ls, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), oC = Mt(rC), iC = [9, 13, 27, 32], Dc = xn && "CompositionEvent" in window, Bo = null;
xn && "documentMode" in document && (Bo = document.documentMode);
var lC = xn && "TextEvent" in window && !Bo, Ah = xn && (!Dc || Bo && 8 < Bo && 11 >= Bo), Pf = " ", $f = !1;
function jh(e, t) {
  switch (e) {
    case "keyup":
      return iC.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Dh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Tr = !1;
function sC(e, t) {
  switch (e) {
    case "compositionend":
      return Dh(t);
    case "keypress":
      return t.which !== 32 ? null : ($f = !0, Pf);
    case "textInput":
      return e = t.data, e === Pf && $f ? null : e;
    default:
      return null;
  }
}
function aC(e, t) {
  if (Tr) return e === "compositionend" || !Dc && jh(e, t) ? (e = Fh(), dl = Fc = Mn = null, Tr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ah && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var uC = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Tf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!uC[e.type] : t === "textarea";
}
function Bh(e, t, n, r) {
  yh(r), t = Il(t, "onChange"), 0 < t.length && (n = new Ac("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Wo = null, si = null;
function cC(e) {
  Zh(e, 0);
}
function Fs(e) {
  var t = Or(e);
  if (dh(t)) return e;
}
function dC(e, t) {
  if (e === "change") return t;
}
var Wh = !1;
if (xn) {
  var Ca;
  if (xn) {
    var wa = "oninput" in document;
    if (!wa) {
      var _f = document.createElement("div");
      _f.setAttribute("oninput", "return;"), wa = typeof _f.oninput == "function";
    }
    Ca = wa;
  } else Ca = !1;
  Wh = Ca && (!document.documentMode || 9 < document.documentMode);
}
function Mf() {
  Wo && (Wo.detachEvent("onpropertychange", Uh), si = Wo = null);
}
function Uh(e) {
  if (e.propertyName === "value" && Fs(si)) {
    var t = [];
    Bh(t, si, e, Oc(e)), wh(cC, t);
  }
}
function fC(e, t, n) {
  e === "focusin" ? (Mf(), Wo = t, si = n, Wo.attachEvent("onpropertychange", Uh)) : e === "focusout" && Mf();
}
function pC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fs(si);
}
function mC(e, t) {
  if (e === "click") return Fs(t);
}
function hC(e, t) {
  if (e === "input" || e === "change") return Fs(t);
}
function gC(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Zt = typeof Object.is == "function" ? Object.is : gC;
function ai(e, t) {
  if (Zt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!eu.call(t, o) || !Zt(e[o], t[o])) return !1;
  }
  return !0;
}
function Of(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function If(e, t) {
  var n = Of(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Of(n);
  }
}
function Vh(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Hh() {
  for (var e = window, t = Rl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Rl(e.document);
  }
  return t;
}
function Bc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function vC(e) {
  var t = Hh(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Vh(n.ownerDocument.documentElement, n)) {
    if (r !== null && Bc(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = If(n, i);
        var l = If(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var yC = xn && "documentMode" in document && 11 >= document.documentMode, _r = null, xu = null, Uo = null, Su = !1;
function Nf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Su || _r == null || _r !== Rl(r) || (r = _r, "selectionStart" in r && Bc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Uo && ai(Uo, r) || (Uo = r, r = Il(xu, "onSelect"), 0 < r.length && (t = new Ac("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = _r)));
}
function Vi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Mr = { animationend: Vi("Animation", "AnimationEnd"), animationiteration: Vi("Animation", "AnimationIteration"), animationstart: Vi("Animation", "AnimationStart"), transitionend: Vi("Transition", "TransitionEnd") }, ka = {}, Kh = {};
xn && (Kh = document.createElement("div").style, "AnimationEvent" in window || (delete Mr.animationend.animation, delete Mr.animationiteration.animation, delete Mr.animationstart.animation), "TransitionEvent" in window || delete Mr.transitionend.transition);
function As(e) {
  if (ka[e]) return ka[e];
  if (!Mr[e]) return e;
  var t = Mr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Kh) return ka[e] = t[n];
  return e;
}
var Gh = As("animationend"), Yh = As("animationiteration"), Qh = As("animationstart"), Xh = As("transitionend"), qh = /* @__PURE__ */ new Map(), zf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Hn(e, t) {
  qh.set(e, t), hr(t, [e]);
}
for (var ba = 0; ba < zf.length; ba++) {
  var Ea = zf[ba], xC = Ea.toLowerCase(), SC = Ea[0].toUpperCase() + Ea.slice(1);
  Hn(xC, "on" + SC);
}
Hn(Gh, "onAnimationEnd");
Hn(Yh, "onAnimationIteration");
Hn(Qh, "onAnimationStart");
Hn("dblclick", "onDoubleClick");
Hn("focusin", "onFocus");
Hn("focusout", "onBlur");
Hn(Xh, "onTransitionEnd");
qr("onMouseEnter", ["mouseout", "mouseover"]);
qr("onMouseLeave", ["mouseout", "mouseover"]);
qr("onPointerEnter", ["pointerout", "pointerover"]);
qr("onPointerLeave", ["pointerout", "pointerover"]);
hr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
hr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Lo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), CC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));
function Lf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, xS(r, t, void 0, e), e.currentTarget = null;
}
function Zh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Lf(o, s, u), i = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Lf(o, s, u), i = a;
      }
    }
  }
  if ($l) throw e = hu, $l = !1, hu = null, e;
}
function we(e, t) {
  var n = t[Eu];
  n === void 0 && (n = t[Eu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Jh(t, e, 2, !1), n.add(r));
}
function Ra(e, t, n) {
  var r = 0;
  t && (r |= 4), Jh(n, e, r, t);
}
var Hi = "_reactListening" + Math.random().toString(36).slice(2);
function ui(e) {
  if (!e[Hi]) {
    e[Hi] = !0, lh.forEach(function(n) {
      n !== "selectionchange" && (CC.has(n) || Ra(n, !1, e), Ra(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hi] || (t[Hi] = !0, Ra("selectionchange", !1, t));
  }
}
function Jh(e, t, n, r) {
  switch (Lh(t)) {
    case 1:
      var o = zS;
      break;
    case 4:
      o = LS;
      break;
    default:
      o = Lc;
  }
  n = o.bind(null, t, n, e), o = void 0, !mu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Pa(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var a = l.tag;
        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        l = l.return;
      }
      for (; s !== null; ) {
        if (l = nr(s), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  wh(function() {
    var u = i, c = Oc(n), d = [];
    e: {
      var p = qh.get(e);
      if (p !== void 0) {
        var C = Ac, v = e;
        switch (e) {
          case "keypress":
            if (fl(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = qS;
            break;
          case "focusin":
            v = "focus", C = Sa;
            break;
          case "focusout":
            v = "blur", C = Sa;
            break;
          case "beforeblur":
          case "afterblur":
            C = Sa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = bf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = jS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = eC;
            break;
          case Gh:
          case Yh:
          case Qh:
            C = WS;
            break;
          case Xh:
            C = nC;
            break;
          case "scroll":
            C = FS;
            break;
          case "wheel":
            C = oC;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = VS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = Rf;
        }
        var x = (t & 4) !== 0, R = !x && e === "scroll", h = x ? p !== null ? p + "Capture" : null : p;
        x = [];
        for (var m = u, f; m !== null; ) {
          f = m;
          var g = f.stateNode;
          if (f.tag === 5 && g !== null && (f = g, h !== null && (g = ri(m, h), g != null && x.push(ci(m, g, f)))), R) break;
          m = m.return;
        }
        0 < x.length && (p = new C(p, v, null, n, c), d.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", p && n !== fu && (v = n.relatedTarget || n.fromElement) && (nr(v) || v[Sn])) break e;
        if ((C || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, C ? (v = n.relatedTarget || n.toElement, C = u, v = v ? nr(v) : null, v !== null && (R = gr(v), v !== R || v.tag !== 5 && v.tag !== 6) && (v = null)) : (C = null, v = u), C !== v)) {
          if (x = bf, g = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (x = Rf, g = "onPointerLeave", h = "onPointerEnter", m = "pointer"), R = C == null ? p : Or(C), f = v == null ? p : Or(v), p = new x(g, m + "leave", C, n, c), p.target = R, p.relatedTarget = f, g = null, nr(c) === u && (x = new x(h, m + "enter", v, n, c), x.target = f, x.relatedTarget = R, g = x), R = g, C && v) t: {
            for (x = C, h = v, m = 0, f = x; f; f = br(f)) m++;
            for (f = 0, g = h; g; g = br(g)) f++;
            for (; 0 < m - f; ) x = br(x), m--;
            for (; 0 < f - m; ) h = br(h), f--;
            for (; m--; ) {
              if (x === h || h !== null && x === h.alternate) break t;
              x = br(x), h = br(h);
            }
            x = null;
          }
          else x = null;
          C !== null && Ff(d, p, C, x, !1), v !== null && R !== null && Ff(d, R, v, x, !0);
        }
      }
      e: {
        if (p = u ? Or(u) : window, C = p.nodeName && p.nodeName.toLowerCase(), C === "select" || C === "input" && p.type === "file") var b = dC;
        else if (Tf(p)) if (Wh) b = hC;
        else {
          b = pC;
          var w = fC;
        }
        else (C = p.nodeName) && C.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (b = mC);
        if (b && (b = b(e, u))) {
          Bh(d, b, n, c);
          break e;
        }
        w && w(e, p, u), e === "focusout" && (w = p._wrapperState) && w.controlled && p.type === "number" && su(p, "number", p.value);
      }
      switch (w = u ? Or(u) : window, e) {
        case "focusin":
          (Tf(w) || w.contentEditable === "true") && (_r = w, xu = u, Uo = null);
          break;
        case "focusout":
          Uo = xu = _r = null;
          break;
        case "mousedown":
          Su = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Su = !1, Nf(d, n, c);
          break;
        case "selectionchange":
          if (yC) break;
        case "keydown":
        case "keyup":
          Nf(d, n, c);
      }
      var k;
      if (Dc) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Tr ? jh(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Ah && n.locale !== "ko" && (Tr || P !== "onCompositionStart" ? P === "onCompositionEnd" && Tr && (k = Fh()) : (Mn = c, Fc = "value" in Mn ? Mn.value : Mn.textContent, Tr = !0)), w = Il(u, P), 0 < w.length && (P = new Ef(P, e, null, n, c), d.push({ event: P, listeners: w }), k ? P.data = k : (k = Dh(n), k !== null && (P.data = k)))), (k = lC ? sC(e, n) : aC(e, n)) && (u = Il(u, "onBeforeInput"), 0 < u.length && (c = new Ef("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = k));
    }
    Zh(d, t);
  });
}
function ci(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ri(e, n), i != null && r.unshift(ci(e, i, o)), i = ri(e, t), i != null && r.push(ci(e, i, o))), e = e.return;
  }
  return r;
}
function br(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ff(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = ri(n, i), a != null && l.unshift(ci(n, a, s))) : o || (a = ri(n, i), a != null && l.push(ci(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var wC = /\r\n?/g, kC = /\u0000|\uFFFD/g;
function Af(e) {
  return (typeof e == "string" ? e : "" + e).replace(wC, `
`).replace(kC, "");
}
function Ki(e, t, n) {
  if (t = Af(t), Af(e) !== t && n) throw Error(M(425));
}
function Nl() {
}
var Cu = null, wu = null;
function ku(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var bu = typeof setTimeout == "function" ? setTimeout : void 0, bC = typeof clearTimeout == "function" ? clearTimeout : void 0, jf = typeof Promise == "function" ? Promise : void 0, EC = typeof queueMicrotask == "function" ? queueMicrotask : typeof jf < "u" ? function(e) {
  return jf.resolve(null).then(e).catch(RC);
} : bu;
function RC(e) {
  setTimeout(function() {
    throw e;
  });
}
function $a(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), li(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  li(t);
}
function Ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Df(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var mo = Math.random().toString(36).slice(2), ln = "__reactFiber$" + mo, di = "__reactProps$" + mo, Sn = "__reactContainer$" + mo, Eu = "__reactEvents$" + mo, PC = "__reactListeners$" + mo, $C = "__reactHandles$" + mo;
function nr(e) {
  var t = e[ln];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Sn] || n[ln]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Df(e); e !== null; ) {
        if (n = e[ln]) return n;
        e = Df(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Mi(e) {
  return e = e[ln] || e[Sn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Or(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function js(e) {
  return e[di] || null;
}
var Ru = [], Ir = -1;
function Kn(e) {
  return { current: e };
}
function ke(e) {
  0 > Ir || (e.current = Ru[Ir], Ru[Ir] = null, Ir--);
}
function xe(e, t) {
  Ir++, Ru[Ir] = e.current, e.current = t;
}
var Un = {}, ct = Kn(Un), vt = Kn(!1), cr = Un;
function Zr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function yt(e) {
  return e = e.childContextTypes, e != null;
}
function zl() {
  ke(vt), ke(ct);
}
function Bf(e, t, n) {
  if (ct.current !== Un) throw Error(M(168));
  xe(ct, t), xe(vt, n);
}
function eg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(M(108, fS(e) || "Unknown", o));
  return Me({}, n, r);
}
function Ll(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Un, cr = ct.current, xe(ct, e), xe(vt, vt.current), !0;
}
function Wf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n ? (e = eg(e, t, cr), r.__reactInternalMemoizedMergedChildContext = e, ke(vt), ke(ct), xe(ct, e)) : ke(vt), xe(vt, n);
}
var mn = null, Ds = !1, Ta = !1;
function tg(e) {
  mn === null ? mn = [e] : mn.push(e);
}
function TC(e) {
  Ds = !0, tg(e);
}
function Gn() {
  if (!Ta && mn !== null) {
    Ta = !0;
    var e = 0, t = pe;
    try {
      var n = mn;
      for (pe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mn = null, Ds = !1;
    } catch (o) {
      throw mn !== null && (mn = mn.slice(e + 1)), Rh(Ic, Gn), o;
    } finally {
      pe = t, Ta = !1;
    }
  }
  return null;
}
var Nr = [], zr = 0, Fl = null, Al = 0, zt = [], Lt = 0, dr = null, gn = 1, vn = "";
function Xn(e, t) {
  Nr[zr++] = Al, Nr[zr++] = Fl, Fl = e, Al = t;
}
function ng(e, t, n) {
  zt[Lt++] = gn, zt[Lt++] = vn, zt[Lt++] = dr, dr = e;
  var r = gn;
  e = vn;
  var o = 32 - Xt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Xt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, gn = 1 << 32 - Xt(t) + o | n << o | r, vn = i + e;
  } else gn = 1 << i | n << o | r, vn = e;
}
function Wc(e) {
  e.return !== null && (Xn(e, 1), ng(e, 1, 0));
}
function Uc(e) {
  for (; e === Fl; ) Fl = Nr[--zr], Nr[zr] = null, Al = Nr[--zr], Nr[zr] = null;
  for (; e === dr; ) dr = zt[--Lt], zt[Lt] = null, vn = zt[--Lt], zt[Lt] = null, gn = zt[--Lt], zt[Lt] = null;
}
var Pt = null, kt = null, Pe = !1, Yt = null;
function rg(e, t) {
  var n = Ft(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Uf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pt = e, kt = Ln(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pt = e, kt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dr !== null ? { id: gn, overflow: vn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Pt = e, kt = null, !0) : !1;
    default:
      return !1;
  }
}
function Pu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $u(e) {
  if (Pe) {
    var t = kt;
    if (t) {
      var n = t;
      if (!Uf(e, t)) {
        if (Pu(e)) throw Error(M(418));
        t = Ln(n.nextSibling);
        var r = Pt;
        t && Uf(e, t) ? rg(r, n) : (e.flags = e.flags & -4097 | 2, Pe = !1, Pt = e);
      }
    } else {
      if (Pu(e)) throw Error(M(418));
      e.flags = e.flags & -4097 | 2, Pe = !1, Pt = e;
    }
  }
}
function Vf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Pt = e;
}
function Gi(e) {
  if (e !== Pt) return !1;
  if (!Pe) return Vf(e), Pe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ku(e.type, e.memoizedProps)), t && (t = kt)) {
    if (Pu(e)) throw og(), Error(M(418));
    for (; t; ) rg(e, t), t = Ln(t.nextSibling);
  }
  if (Vf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              kt = Ln(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      kt = null;
    }
  } else kt = Pt ? Ln(e.stateNode.nextSibling) : null;
  return !0;
}
function og() {
  for (var e = kt; e; ) e = Ln(e.nextSibling);
}
function Jr() {
  kt = Pt = null, Pe = !1;
}
function Vc(e) {
  Yt === null ? Yt = [e] : Yt.push(e);
}
var _C = kn.ReactCurrentBatchConfig;
function Eo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Yi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hf(e) {
  var t = e._init;
  return t(e._payload);
}
function ig(e) {
  function t(h, m) {
    if (e) {
      var f = h.deletions;
      f === null ? (h.deletions = [m], h.flags |= 16) : f.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), m = m.sibling;
    return null;
  }
  function r(h, m) {
    for (h = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
    return h;
  }
  function o(h, m) {
    return h = Dn(h, m), h.index = 0, h.sibling = null, h;
  }
  function i(h, m, f) {
    return h.index = f, e ? (f = h.alternate, f !== null ? (f = f.index, f < m ? (h.flags |= 2, m) : f) : (h.flags |= 2, m)) : (h.flags |= 1048576, m);
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, m, f, g) {
    return m === null || m.tag !== 6 ? (m = La(f, h.mode, g), m.return = h, m) : (m = o(m, f), m.return = h, m);
  }
  function a(h, m, f, g) {
    var b = f.type;
    return b === $r ? c(h, m, f.props.children, g, f.key) : m !== null && (m.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Pn && Hf(b) === m.type) ? (g = o(m, f.props), g.ref = Eo(h, m, f), g.return = h, g) : (g = xl(f.type, f.key, f.props, null, h.mode, g), g.ref = Eo(h, m, f), g.return = h, g);
  }
  function u(h, m, f, g) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== f.containerInfo || m.stateNode.implementation !== f.implementation ? (m = Fa(f, h.mode, g), m.return = h, m) : (m = o(m, f.children || []), m.return = h, m);
  }
  function c(h, m, f, g, b) {
    return m === null || m.tag !== 7 ? (m = sr(f, h.mode, g, b), m.return = h, m) : (m = o(m, f), m.return = h, m);
  }
  function d(h, m, f) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = La("" + m, h.mode, f), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Fi:
          return f = xl(m.type, m.key, m.props, null, h.mode, f), f.ref = Eo(h, null, m), f.return = h, f;
        case Pr:
          return m = Fa(m, h.mode, f), m.return = h, m;
        case Pn:
          var g = m._init;
          return d(h, g(m._payload), f);
      }
      if (No(m) || So(m)) return m = sr(m, h.mode, f, null), m.return = h, m;
      Yi(h, m);
    }
    return null;
  }
  function p(h, m, f, g) {
    var b = m !== null ? m.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return b !== null ? null : s(h, m, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Fi:
          return f.key === b ? a(h, m, f, g) : null;
        case Pr:
          return f.key === b ? u(h, m, f, g) : null;
        case Pn:
          return b = f._init, p(
            h,
            m,
            b(f._payload),
            g
          );
      }
      if (No(f) || So(f)) return b !== null ? null : c(h, m, f, g, null);
      Yi(h, f);
    }
    return null;
  }
  function C(h, m, f, g, b) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return h = h.get(f) || null, s(m, h, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Fi:
          return h = h.get(g.key === null ? f : g.key) || null, a(m, h, g, b);
        case Pr:
          return h = h.get(g.key === null ? f : g.key) || null, u(m, h, g, b);
        case Pn:
          var w = g._init;
          return C(h, m, f, w(g._payload), b);
      }
      if (No(g) || So(g)) return h = h.get(f) || null, c(m, h, g, b, null);
      Yi(m, g);
    }
    return null;
  }
  function v(h, m, f, g) {
    for (var b = null, w = null, k = m, P = m = 0, N = null; k !== null && P < f.length; P++) {
      k.index > P ? (N = k, k = null) : N = k.sibling;
      var T = p(h, k, f[P], g);
      if (T === null) {
        k === null && (k = N);
        break;
      }
      e && k && T.alternate === null && t(h, k), m = i(T, m, P), w === null ? b = T : w.sibling = T, w = T, k = N;
    }
    if (P === f.length) return n(h, k), Pe && Xn(h, P), b;
    if (k === null) {
      for (; P < f.length; P++) k = d(h, f[P], g), k !== null && (m = i(k, m, P), w === null ? b = k : w.sibling = k, w = k);
      return Pe && Xn(h, P), b;
    }
    for (k = r(h, k); P < f.length; P++) N = C(k, h, P, f[P], g), N !== null && (e && N.alternate !== null && k.delete(N.key === null ? P : N.key), m = i(N, m, P), w === null ? b = N : w.sibling = N, w = N);
    return e && k.forEach(function(A) {
      return t(h, A);
    }), Pe && Xn(h, P), b;
  }
  function x(h, m, f, g) {
    var b = So(f);
    if (typeof b != "function") throw Error(M(150));
    if (f = b.call(f), f == null) throw Error(M(151));
    for (var w = b = null, k = m, P = m = 0, N = null, T = f.next(); k !== null && !T.done; P++, T = f.next()) {
      k.index > P ? (N = k, k = null) : N = k.sibling;
      var A = p(h, k, T.value, g);
      if (A === null) {
        k === null && (k = N);
        break;
      }
      e && k && A.alternate === null && t(h, k), m = i(A, m, P), w === null ? b = A : w.sibling = A, w = A, k = N;
    }
    if (T.done) return n(
      h,
      k
    ), Pe && Xn(h, P), b;
    if (k === null) {
      for (; !T.done; P++, T = f.next()) T = d(h, T.value, g), T !== null && (m = i(T, m, P), w === null ? b = T : w.sibling = T, w = T);
      return Pe && Xn(h, P), b;
    }
    for (k = r(h, k); !T.done; P++, T = f.next()) T = C(k, h, P, T.value, g), T !== null && (e && T.alternate !== null && k.delete(T.key === null ? P : T.key), m = i(T, m, P), w === null ? b = T : w.sibling = T, w = T);
    return e && k.forEach(function(z) {
      return t(h, z);
    }), Pe && Xn(h, P), b;
  }
  function R(h, m, f, g) {
    if (typeof f == "object" && f !== null && f.type === $r && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Fi:
          e: {
            for (var b = f.key, w = m; w !== null; ) {
              if (w.key === b) {
                if (b = f.type, b === $r) {
                  if (w.tag === 7) {
                    n(h, w.sibling), m = o(w, f.props.children), m.return = h, h = m;
                    break e;
                  }
                } else if (w.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Pn && Hf(b) === w.type) {
                  n(h, w.sibling), m = o(w, f.props), m.ref = Eo(h, w, f), m.return = h, h = m;
                  break e;
                }
                n(h, w);
                break;
              } else t(h, w);
              w = w.sibling;
            }
            f.type === $r ? (m = sr(f.props.children, h.mode, g, f.key), m.return = h, h = m) : (g = xl(f.type, f.key, f.props, null, h.mode, g), g.ref = Eo(h, m, f), g.return = h, h = g);
          }
          return l(h);
        case Pr:
          e: {
            for (w = f.key; m !== null; ) {
              if (m.key === w) if (m.tag === 4 && m.stateNode.containerInfo === f.containerInfo && m.stateNode.implementation === f.implementation) {
                n(h, m.sibling), m = o(m, f.children || []), m.return = h, h = m;
                break e;
              } else {
                n(h, m);
                break;
              }
              else t(h, m);
              m = m.sibling;
            }
            m = Fa(f, h.mode, g), m.return = h, h = m;
          }
          return l(h);
        case Pn:
          return w = f._init, R(h, m, w(f._payload), g);
      }
      if (No(f)) return v(h, m, f, g);
      if (So(f)) return x(h, m, f, g);
      Yi(h, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, m !== null && m.tag === 6 ? (n(h, m.sibling), m = o(m, f), m.return = h, h = m) : (n(h, m), m = La(f, h.mode, g), m.return = h, h = m), l(h)) : n(h, m);
  }
  return R;
}
var eo = ig(!0), lg = ig(!1), jl = Kn(null), Dl = null, Lr = null, Hc = null;
function Kc() {
  Hc = Lr = Dl = null;
}
function Gc(e) {
  var t = jl.current;
  ke(jl), e._currentValue = t;
}
function Tu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Hr(e, t) {
  Dl = e, Hc = Lr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (gt = !0), e.firstContext = null);
}
function Bt(e) {
  var t = e._currentValue;
  if (Hc !== e) if (e = { context: e, memoizedValue: t, next: null }, Lr === null) {
    if (Dl === null) throw Error(M(308));
    Lr = e, Dl.dependencies = { lanes: 0, firstContext: e };
  } else Lr = Lr.next = e;
  return t;
}
var rr = null;
function Yc(e) {
  rr === null ? rr = [e] : rr.push(e);
}
function sg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Yc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Cn(e, r);
}
function Cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var $n = !1;
function Qc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ag(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function yn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Fn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, re & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Cn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Yc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Cn(e, n);
}
function pl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Nc(e, n);
  }
}
function Kf(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Bl(e, t, n, r) {
  var o = e.updateQueue;
  $n = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, l === null ? i = u : l.next = u, l = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== l && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var d = o.baseState;
    l = 0, c = u = a = null, s = i;
    do {
      var p = s.lane, C = s.eventTime;
      if ((r & p) === p) {
        c !== null && (c = c.next = {
          eventTime: C,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var v = e, x = s;
          switch (p = t, C = n, x.tag) {
            case 1:
              if (v = x.payload, typeof v == "function") {
                d = v.call(C, d, p);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = x.payload, p = typeof v == "function" ? v.call(C, d, p) : v, p == null) break e;
              d = Me({}, d, p);
              break e;
            case 2:
              $n = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [s] : p.push(s));
      } else C = { eventTime: C, lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = C, a = d) : c = c.next = C, l |= p;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        p = s, s = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    pr |= l, e.lanes = l, e.memoizedState = d;
  }
}
function Gf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(M(191, o));
      o.call(r);
    }
  }
}
var Oi = {}, un = Kn(Oi), fi = Kn(Oi), pi = Kn(Oi);
function or(e) {
  if (e === Oi) throw Error(M(174));
  return e;
}
function Xc(e, t) {
  switch (xe(pi, t), xe(fi, e), xe(un, Oi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uu(t, e);
  }
  ke(un), xe(un, t);
}
function to() {
  ke(un), ke(fi), ke(pi);
}
function ug(e) {
  or(pi.current);
  var t = or(un.current), n = uu(t, e.type);
  t !== n && (xe(fi, e), xe(un, n));
}
function qc(e) {
  fi.current === e && (ke(un), ke(fi));
}
var Te = Kn(0);
function Wl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var _a = [];
function Zc() {
  for (var e = 0; e < _a.length; e++) _a[e]._workInProgressVersionPrimary = null;
  _a.length = 0;
}
var ml = kn.ReactCurrentDispatcher, Ma = kn.ReactCurrentBatchConfig, fr = 0, _e = null, We = null, Ke = null, Ul = !1, Vo = !1, mi = 0, MC = 0;
function ot() {
  throw Error(M(321));
}
function Jc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Zt(e[n], t[n])) return !1;
  return !0;
}
function ed(e, t, n, r, o, i) {
  if (fr = i, _e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ml.current = e === null || e.memoizedState === null ? zC : LC, e = n(r, o), Vo) {
    i = 0;
    do {
      if (Vo = !1, mi = 0, 25 <= i) throw Error(M(301));
      i += 1, Ke = We = null, t.updateQueue = null, ml.current = FC, e = n(r, o);
    } while (Vo);
  }
  if (ml.current = Vl, t = We !== null && We.next !== null, fr = 0, Ke = We = _e = null, Ul = !1, t) throw Error(M(300));
  return e;
}
function td() {
  var e = mi !== 0;
  return mi = 0, e;
}
function nn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ke === null ? _e.memoizedState = Ke = e : Ke = Ke.next = e, Ke;
}
function Wt() {
  if (We === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = We.next;
  var t = Ke === null ? _e.memoizedState : Ke.next;
  if (t !== null) Ke = t, We = e;
  else {
    if (e === null) throw Error(M(310));
    We = e, e = { memoizedState: We.memoizedState, baseState: We.baseState, baseQueue: We.baseQueue, queue: We.queue, next: null }, Ke === null ? _e.memoizedState = Ke = e : Ke = Ke.next = e;
  }
  return Ke;
}
function hi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oa(e) {
  var t = Wt(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = We, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = l = null, a = null, u = i;
    do {
      var c = u.lane;
      if ((fr & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = d, l = r) : a = a.next = d, _e.lanes |= c, pr |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, Zt(r, t.memoizedState) || (gt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, _e.lanes |= i, pr |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ia(e) {
  var t = Wt(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    Zt(i, t.memoizedState) || (gt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function cg() {
}
function dg(e, t) {
  var n = _e, r = Wt(), o = t(), i = !Zt(r.memoizedState, o);
  if (i && (r.memoizedState = o, gt = !0), r = r.queue, nd(mg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ke !== null && Ke.memoizedState.tag & 1) {
    if (n.flags |= 2048, gi(9, pg.bind(null, n, r, o, t), void 0, null), Ge === null) throw Error(M(349));
    fr & 30 || fg(n, t, o);
  }
  return o;
}
function fg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function pg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, hg(t) && gg(e);
}
function mg(e, t, n) {
  return n(function() {
    hg(t) && gg(e);
  });
}
function hg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Zt(e, n);
  } catch {
    return !0;
  }
}
function gg(e) {
  var t = Cn(e, 1);
  t !== null && qt(t, e, 1, -1);
}
function Yf(e) {
  var t = nn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hi, lastRenderedState: e }, t.queue = e, e = e.dispatch = NC.bind(null, _e, e), [t.memoizedState, e];
}
function gi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function vg() {
  return Wt().memoizedState;
}
function hl(e, t, n, r) {
  var o = nn();
  _e.flags |= e, o.memoizedState = gi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Bs(e, t, n, r) {
  var o = Wt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (We !== null) {
    var l = We.memoizedState;
    if (i = l.destroy, r !== null && Jc(r, l.deps)) {
      o.memoizedState = gi(t, n, i, r);
      return;
    }
  }
  _e.flags |= e, o.memoizedState = gi(1 | t, n, i, r);
}
function Qf(e, t) {
  return hl(8390656, 8, e, t);
}
function nd(e, t) {
  return Bs(2048, 8, e, t);
}
function yg(e, t) {
  return Bs(4, 2, e, t);
}
function xg(e, t) {
  return Bs(4, 4, e, t);
}
function Sg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Cg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Bs(4, 4, Sg.bind(null, t, e), n);
}
function rd() {
}
function wg(e, t) {
  var n = Wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function kg(e, t) {
  var n = Wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function bg(e, t, n) {
  return fr & 21 ? (Zt(n, t) || (n = Th(), _e.lanes |= n, pr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, gt = !0), e.memoizedState = n);
}
function OC(e, t) {
  var n = pe;
  pe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ma.transition;
  Ma.transition = {};
  try {
    e(!1), t();
  } finally {
    pe = n, Ma.transition = r;
  }
}
function Eg() {
  return Wt().memoizedState;
}
function IC(e, t, n) {
  var r = jn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Rg(e)) Pg(t, n);
  else if (n = sg(e, t, n, r), n !== null) {
    var o = ft();
    qt(n, e, r, o), $g(n, t, r);
  }
}
function NC(e, t, n) {
  var r = jn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rg(e)) Pg(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = s, Zt(s, l)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Yc(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = sg(e, t, o, r), n !== null && (o = ft(), qt(n, e, r, o), $g(n, t, r));
  }
}
function Rg(e) {
  var t = e.alternate;
  return e === _e || t !== null && t === _e;
}
function Pg(e, t) {
  Vo = Ul = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function $g(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Nc(e, n);
  }
}
var Vl = { readContext: Bt, useCallback: ot, useContext: ot, useEffect: ot, useImperativeHandle: ot, useInsertionEffect: ot, useLayoutEffect: ot, useMemo: ot, useReducer: ot, useRef: ot, useState: ot, useDebugValue: ot, useDeferredValue: ot, useTransition: ot, useMutableSource: ot, useSyncExternalStore: ot, useId: ot, unstable_isNewReconciler: !1 }, zC = { readContext: Bt, useCallback: function(e, t) {
  return nn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Bt, useEffect: Qf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, hl(
    4194308,
    4,
    Sg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return hl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return hl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = IC.bind(null, _e, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Yf, useDebugValue: rd, useDeferredValue: function(e) {
  return nn().memoizedState = e;
}, useTransition: function() {
  var e = Yf(!1), t = e[0];
  return e = OC.bind(null, e[1]), nn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = _e, o = nn();
  if (Pe) {
    if (n === void 0) throw Error(M(407));
    n = n();
  } else {
    if (n = t(), Ge === null) throw Error(M(349));
    fr & 30 || fg(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Qf(mg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, gi(9, pg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = nn(), t = Ge.identifierPrefix;
  if (Pe) {
    var n = vn, r = gn;
    n = (r & ~(1 << 32 - Xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = mi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = MC++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, LC = {
  readContext: Bt,
  useCallback: wg,
  useContext: Bt,
  useEffect: nd,
  useImperativeHandle: Cg,
  useInsertionEffect: yg,
  useLayoutEffect: xg,
  useMemo: kg,
  useReducer: Oa,
  useRef: vg,
  useState: function() {
    return Oa(hi);
  },
  useDebugValue: rd,
  useDeferredValue: function(e) {
    var t = Wt();
    return bg(t, We.memoizedState, e);
  },
  useTransition: function() {
    var e = Oa(hi)[0], t = Wt().memoizedState;
    return [e, t];
  },
  useMutableSource: cg,
  useSyncExternalStore: dg,
  useId: Eg,
  unstable_isNewReconciler: !1
}, FC = { readContext: Bt, useCallback: wg, useContext: Bt, useEffect: nd, useImperativeHandle: Cg, useInsertionEffect: yg, useLayoutEffect: xg, useMemo: kg, useReducer: Ia, useRef: vg, useState: function() {
  return Ia(hi);
}, useDebugValue: rd, useDeferredValue: function(e) {
  var t = Wt();
  return We === null ? t.memoizedState = e : bg(t, We.memoizedState, e);
}, useTransition: function() {
  var e = Ia(hi)[0], t = Wt().memoizedState;
  return [e, t];
}, useMutableSource: cg, useSyncExternalStore: dg, useId: Eg, unstable_isNewReconciler: !1 };
function Kt(e, t) {
  if (e && e.defaultProps) {
    t = Me({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function _u(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Me({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ws = { isMounted: function(e) {
  return (e = e._reactInternals) ? gr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ft(), o = jn(e), i = yn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Fn(e, i, o), t !== null && (qt(t, e, o, r), pl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ft(), o = jn(e), i = yn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Fn(e, i, o), t !== null && (qt(t, e, o, r), pl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ft(), r = jn(e), o = yn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Fn(e, o, r), t !== null && (qt(t, e, r, n), pl(t, e, r));
} };
function Xf(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !ai(n, r) || !ai(o, i) : !0;
}
function Tg(e, t, n) {
  var r = !1, o = Un, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Bt(i) : (o = yt(t) ? cr : ct.current, r = t.contextTypes, i = (r = r != null) ? Zr(e, o) : Un), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ws, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function qf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
}
function Mu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Qc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Bt(i) : (i = yt(t) ? cr : ct.current, o.context = Zr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (_u(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ws.enqueueReplaceState(o, o.state, null), Bl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function no(e, t) {
  try {
    var n = "", r = t;
    do
      n += dS(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Na(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ou(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var AC = typeof WeakMap == "function" ? WeakMap : Map;
function _g(e, t, n) {
  n = yn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Kl || (Kl = !0, Wu = r), Ou(e, t);
  }, n;
}
function Mg(e, t, n) {
  n = yn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Ou(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ou(e, t), typeof r != "function" && (An === null ? An = /* @__PURE__ */ new Set([this]) : An.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Zf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new AC();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = ZC.bind(null, e, t, n), t.then(e, e));
}
function Jf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ep(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yn(-1, 1), t.tag = 2, Fn(n, t, 1))), n.lanes |= 1), e);
}
var jC = kn.ReactCurrentOwner, gt = !1;
function dt(e, t, n, r) {
  t.child = e === null ? lg(t, null, n, r) : eo(t, e.child, n, r);
}
function tp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Hr(t, o), r = ed(e, t, n, r, i, o), n = td(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wn(e, t, o)) : (Pe && n && Wc(t), t.flags |= 1, dt(e, t, r, o), t.child);
}
function np(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !dd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Og(e, t, i, r, o)) : (e = xl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ai, n(l, r) && e.ref === t.ref) return wn(e, t, o);
  }
  return t.flags |= 1, e = Dn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Og(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ai(i, r) && e.ref === t.ref) if (gt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (gt = !0);
    else return t.lanes = e.lanes, wn(e, t, o);
  }
  return Iu(e, t, n, r, o);
}
function Ig(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(Ar, Ct), Ct |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, xe(Ar, Ct), Ct |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, xe(Ar, Ct), Ct |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, xe(Ar, Ct), Ct |= r;
  return dt(e, t, o, n), t.child;
}
function Ng(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Iu(e, t, n, r, o) {
  var i = yt(n) ? cr : ct.current;
  return i = Zr(t, i), Hr(t, o), n = ed(e, t, n, r, i, o), r = td(), e !== null && !gt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wn(e, t, o)) : (Pe && r && Wc(t), t.flags |= 1, dt(e, t, n, o), t.child);
}
function rp(e, t, n, r, o) {
  if (yt(n)) {
    var i = !0;
    Ll(t);
  } else i = !1;
  if (Hr(t, o), t.stateNode === null) gl(e, t), Tg(t, n, r), Mu(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Bt(u) : (u = yt(n) ? cr : ct.current, u = Zr(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && qf(t, l, r, u), $n = !1;
    var p = t.memoizedState;
    l.state = p, Bl(t, r, l, o), a = t.memoizedState, s !== r || p !== a || vt.current || $n ? (typeof c == "function" && (_u(t, n, c, r), a = t.memoizedState), (s = $n || Xf(t, n, s, r, p, a, u)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, ag(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Kt(t.type, s), l.props = u, d = t.pendingProps, p = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Bt(a) : (a = yt(n) ? cr : ct.current, a = Zr(t, a));
    var C = n.getDerivedStateFromProps;
    (c = typeof C == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || p !== a) && qf(t, l, r, a), $n = !1, p = t.memoizedState, l.state = p, Bl(t, r, l, o);
    var v = t.memoizedState;
    s !== d || p !== v || vt.current || $n ? (typeof C == "function" && (_u(t, n, C, r), v = t.memoizedState), (u = $n || Xf(t, n, u, r, p, v, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), l.props = r, l.state = v, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Nu(e, t, n, r, i, o);
}
function Nu(e, t, n, r, o, i) {
  Ng(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Wf(t, n, !1), wn(e, t, i);
  r = t.stateNode, jC.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = eo(t, e.child, null, i), t.child = eo(t, null, s, i)) : dt(e, t, s, i), t.memoizedState = r.state, o && Wf(t, n, !0), t.child;
}
function zg(e) {
  var t = e.stateNode;
  t.pendingContext ? Bf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bf(e, t.context, !1), Xc(e, t.containerInfo);
}
function op(e, t, n, r, o) {
  return Jr(), Vc(o), t.flags |= 256, dt(e, t, n, r), t.child;
}
var zu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lg(e, t, n) {
  var r = t.pendingProps, o = Te.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), xe(Te, o & 1), e === null)
    return $u(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Hs(l, r, 0, null), e = sr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Lu(n), t.memoizedState = zu, e) : od(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return DC(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Dn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Dn(s, i) : (i = sr(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Lu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = zu, r;
  }
  return i = e.child, e = i.sibling, r = Dn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function od(e, t) {
  return t = Hs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Qi(e, t, n, r) {
  return r !== null && Vc(r), eo(t, e.child, null, n), e = od(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function DC(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Na(Error(M(422))), Qi(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Hs({ mode: "visible", children: r.children }, o, 0, null), i = sr(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && eo(t, e.child, null, l), t.child.memoizedState = Lu(l), t.memoizedState = zu, i);
  if (!(t.mode & 1)) return Qi(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(M(419)), r = Na(i, r, void 0), Qi(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, gt || s) {
    if (r = Ge, r !== null) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Cn(e, o), qt(r, e, o, -1));
    }
    return cd(), r = Na(Error(M(421))), Qi(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = JC.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, kt = Ln(o.nextSibling), Pt = t, Pe = !0, Yt = null, e !== null && (zt[Lt++] = gn, zt[Lt++] = vn, zt[Lt++] = dr, gn = e.id, vn = e.overflow, dr = t), t = od(t, r.children), t.flags |= 4096, t);
}
function ip(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Tu(e.return, t, n);
}
function za(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Fg(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (dt(e, t, r.children, n), r = Te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ip(e, n, t);
      else if (e.tag === 19) ip(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (xe(Te, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Wl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), za(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Wl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      za(t, !0, n, null, i);
      break;
    case "together":
      za(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function gl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function wn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), pr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = Dn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Dn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function BC(e, t, n) {
  switch (t.tag) {
    case 3:
      zg(t), Jr();
      break;
    case 5:
      ug(t);
      break;
    case 1:
      yt(t.type) && Ll(t);
      break;
    case 4:
      Xc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      xe(jl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (xe(Te, Te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Lg(e, t, n) : (xe(Te, Te.current & 1), e = wn(e, t, n), e !== null ? e.sibling : null);
      xe(Te, Te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Fg(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), xe(Te, Te.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ig(e, t, n);
  }
  return wn(e, t, n);
}
var Ag, Fu, jg, Dg;
Ag = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Fu = function() {
};
jg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, or(un.current);
    var i = null;
    switch (n) {
      case "input":
        o = iu(e, o), r = iu(e, r), i = [];
        break;
      case "select":
        o = Me({}, o, { value: void 0 }), r = Me({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = au(e, o), r = au(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Nl);
    }
    cu(n, r);
    var l;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var s = o[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ti.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ti.hasOwnProperty(u) ? (a != null && u === "onScroll" && we("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Dg = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ro(e, t) {
  if (!Pe) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function it(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function WC(e, t, n) {
  var r = t.pendingProps;
  switch (Uc(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return it(t), null;
    case 1:
      return yt(t.type) && zl(), it(t), null;
    case 3:
      return r = t.stateNode, to(), ke(vt), ke(ct), Zc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Yt !== null && (Hu(Yt), Yt = null))), Fu(e, t), it(t), null;
    case 5:
      qc(t);
      var o = or(pi.current);
      if (n = t.type, e !== null && t.stateNode != null) jg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return it(t), null;
        }
        if (e = or(un.current), Gi(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ln] = t, r[di] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              we("cancel", r), we("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              we("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Lo.length; o++) we(Lo[o], r);
              break;
            case "source":
              we("error", r);
              break;
            case "img":
            case "image":
            case "link":
              we(
                "error",
                r
              ), we("load", r);
              break;
            case "details":
              we("toggle", r);
              break;
            case "input":
              mf(r, i), we("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, we("invalid", r);
              break;
            case "textarea":
              gf(r, i), we("invalid", r);
          }
          cu(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Ki(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Ki(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : ti.hasOwnProperty(l) && s != null && l === "onScroll" && we("scroll", r);
          }
          switch (n) {
            case "input":
              Ai(r), hf(r, i, !0);
              break;
            case "textarea":
              Ai(r), vf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Nl);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = mh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ln] = t, e[di] = r, Ag(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = du(n, r), n) {
              case "dialog":
                we("cancel", e), we("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Lo.length; o++) we(Lo[o], e);
                o = r;
                break;
              case "source":
                we("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                we(
                  "error",
                  e
                ), we("load", e), o = r;
                break;
              case "details":
                we("toggle", e), o = r;
                break;
              case "input":
                mf(e, r), o = iu(e, r), we("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Me({}, r, { value: void 0 }), we("invalid", e);
                break;
              case "textarea":
                gf(e, r), o = au(e, r), we("invalid", e);
                break;
              default:
                o = r;
            }
            cu(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? vh(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && hh(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ni(e, a) : typeof a == "number" && ni(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ti.hasOwnProperty(i) ? a != null && i === "onScroll" && we("scroll", e) : a != null && $c(e, i, a, l));
            }
            switch (n) {
              case "input":
                Ai(e), hf(e, r, !1);
                break;
              case "textarea":
                Ai(e), vf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Br(e, !!r.multiple, i, !1) : r.defaultValue != null && Br(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Nl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return it(t), null;
    case 6:
      if (e && t.stateNode != null) Dg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (n = or(pi.current), or(un.current), Gi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ln] = t, (i = r.nodeValue !== n) && (e = Pt, e !== null)) switch (e.tag) {
            case 3:
              Ki(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ki(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ln] = t, t.stateNode = r;
      }
      return it(t), null;
    case 13:
      if (ke(Te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Pe && kt !== null && t.mode & 1 && !(t.flags & 128)) og(), Jr(), t.flags |= 98560, i = !1;
        else if (i = Gi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(M(317));
            i[ln] = t;
          } else Jr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          it(t), i = !1;
        } else Yt !== null && (Hu(Yt), Yt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Te.current & 1 ? Ue === 0 && (Ue = 3) : cd())), t.updateQueue !== null && (t.flags |= 4), it(t), null);
    case 4:
      return to(), Fu(e, t), e === null && ui(t.stateNode.containerInfo), it(t), null;
    case 10:
      return Gc(t.type._context), it(t), null;
    case 17:
      return yt(t.type) && zl(), it(t), null;
    case 19:
      if (ke(Te), i = t.memoizedState, i === null) return it(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Ro(i, !1);
      else {
        if (Ue !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Wl(e), l !== null) {
            for (t.flags |= 128, Ro(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return xe(Te, Te.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Le() > ro && (t.flags |= 128, r = !0, Ro(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Wl(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ro(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Pe) return it(t), null;
        } else 2 * Le() - i.renderingStartTime > ro && n !== 1073741824 && (t.flags |= 128, r = !0, Ro(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Le(), t.sibling = null, n = Te.current, xe(Te, r ? n & 1 | 2 : n & 1), t) : (it(t), null);
    case 22:
    case 23:
      return ud(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ct & 1073741824 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : it(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function UC(e, t) {
  switch (Uc(t), t.tag) {
    case 1:
      return yt(t.type) && zl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return to(), ke(vt), ke(ct), Zc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return qc(t), null;
    case 13:
      if (ke(Te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(M(340));
        Jr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ke(Te), null;
    case 4:
      return to(), null;
    case 10:
      return Gc(t.type._context), null;
    case 22:
    case 23:
      return ud(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xi = !1, at = !1, VC = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Fr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ze(e, t, r);
  }
  else n.current = null;
}
function Au(e, t, n) {
  try {
    n();
  } catch (r) {
    ze(e, t, r);
  }
}
var lp = !1;
function HC(e, t) {
  if (Cu = Ml, e = Hh(), Bc(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, s = -1, a = -1, u = 0, c = 0, d = e, p = null;
        t: for (; ; ) {
          for (var C; d !== n || o !== 0 && d.nodeType !== 3 || (s = l + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (C = d.firstChild) !== null; )
            p = d, d = C;
          for (; ; ) {
            if (d === e) break t;
            if (p === n && ++u === o && (s = l), p === i && ++c === r && (a = l), (C = d.nextSibling) !== null) break;
            d = p, p = d.parentNode;
          }
          d = C;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wu = { focusedElem: e, selectionRange: n }, Ml = !1, B = t; B !== null; ) if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, B = e;
  else for (; B !== null; ) {
    t = B;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var x = v.memoizedProps, R = v.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Kt(t.type, x), R);
            h.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var f = t.stateNode.containerInfo;
          f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(M(163));
      }
    } catch (g) {
      ze(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, B = e;
      break;
    }
    B = t.return;
  }
  return v = lp, lp = !1, v;
}
function Ho(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Au(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Us(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ju(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Bg(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Bg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ln], delete t[di], delete t[Eu], delete t[PC], delete t[$C])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Wg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wg(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Nl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Du(e, t, n), e = e.sibling; e !== null; ) Du(e, t, n), e = e.sibling;
}
function Bu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Bu(e, t, n), e = e.sibling; e !== null; ) Bu(e, t, n), e = e.sibling;
}
var Je = null, Gt = !1;
function En(e, t, n) {
  for (n = n.child; n !== null; ) Ug(e, t, n), n = n.sibling;
}
function Ug(e, t, n) {
  if (an && typeof an.onCommitFiberUnmount == "function") try {
    an.onCommitFiberUnmount(zs, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      at || Fr(n, t);
    case 6:
      var r = Je, o = Gt;
      Je = null, En(e, t, n), Je = r, Gt = o, Je !== null && (Gt ? (e = Je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Je.removeChild(n.stateNode));
      break;
    case 18:
      Je !== null && (Gt ? (e = Je, n = n.stateNode, e.nodeType === 8 ? $a(e.parentNode, n) : e.nodeType === 1 && $a(e, n), li(e)) : $a(Je, n.stateNode));
      break;
    case 4:
      r = Je, o = Gt, Je = n.stateNode.containerInfo, Gt = !0, En(e, t, n), Je = r, Gt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!at && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Au(n, t, l), o = o.next;
        } while (o !== r);
      }
      En(e, t, n);
      break;
    case 1:
      if (!at && (Fr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        ze(n, t, s);
      }
      En(e, t, n);
      break;
    case 21:
      En(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (at = (r = at) || n.memoizedState !== null, En(e, t, n), at = r) : En(e, t, n);
      break;
    default:
      En(e, t, n);
  }
}
function ap(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new VC()), t.forEach(function(r) {
      var o = ew.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ht(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            Je = s.stateNode, Gt = !1;
            break e;
          case 3:
            Je = s.stateNode.containerInfo, Gt = !0;
            break e;
          case 4:
            Je = s.stateNode.containerInfo, Gt = !0;
            break e;
        }
        s = s.return;
      }
      if (Je === null) throw Error(M(160));
      Ug(i, l, o), Je = null, Gt = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      ze(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Vg(t, e), t = t.sibling;
}
function Vg(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ht(t, e), tn(e), r & 4) {
        try {
          Ho(3, e, e.return), Us(3, e);
        } catch (x) {
          ze(e, e.return, x);
        }
        try {
          Ho(5, e, e.return);
        } catch (x) {
          ze(e, e.return, x);
        }
      }
      break;
    case 1:
      Ht(t, e), tn(e), r & 512 && n !== null && Fr(n, n.return);
      break;
    case 5:
      if (Ht(t, e), tn(e), r & 512 && n !== null && Fr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ni(o, "");
        } catch (x) {
          ze(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && fh(o, i), du(s, l);
          var u = du(s, i);
          for (l = 0; l < a.length; l += 2) {
            var c = a[l], d = a[l + 1];
            c === "style" ? vh(o, d) : c === "dangerouslySetInnerHTML" ? hh(o, d) : c === "children" ? ni(o, d) : $c(o, c, d, u);
          }
          switch (s) {
            case "input":
              lu(o, i);
              break;
            case "textarea":
              ph(o, i);
              break;
            case "select":
              var p = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var C = i.value;
              C != null ? Br(o, !!i.multiple, C, !1) : p !== !!i.multiple && (i.defaultValue != null ? Br(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Br(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[di] = i;
        } catch (x) {
          ze(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Ht(t, e), tn(e), r & 4) {
        if (e.stateNode === null) throw Error(M(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (x) {
          ze(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Ht(t, e), tn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        li(t.containerInfo);
      } catch (x) {
        ze(e, e.return, x);
      }
      break;
    case 4:
      Ht(t, e), tn(e);
      break;
    case 13:
      Ht(t, e), tn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (sd = Le())), r & 4 && ap(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (at = (u = at) || c, Ht(t, e), at = u) : Ht(t, e), tn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (B = e, c = e.child; c !== null; ) {
          for (d = B = c; B !== null; ) {
            switch (p = B, C = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ho(4, p, p.return);
                break;
              case 1:
                Fr(p, p.return);
                var v = p.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (x) {
                    ze(r, n, x);
                  }
                }
                break;
              case 5:
                Fr(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  cp(d);
                  continue;
                }
            }
            C !== null ? (C.return = p, B = C) : cp(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = gh("display", l));
              } catch (x) {
                ze(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (x) {
              ze(e, e.return, x);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), d = d.return;
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      Ht(t, e), tn(e), r & 4 && ap(e);
      break;
    case 21:
      break;
    default:
      Ht(
        t,
        e
      ), tn(e);
  }
}
function tn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ni(o, ""), r.flags &= -33);
          var i = sp(e);
          Bu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = sp(e);
          Du(e, s, l);
          break;
        default:
          throw Error(M(161));
      }
    } catch (a) {
      ze(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function KC(e, t, n) {
  B = e, Hg(e);
}
function Hg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Xi;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || at;
        s = Xi;
        var u = at;
        if (Xi = l, (at = a) && !u) for (B = o; B !== null; ) l = B, a = l.child, l.tag === 22 && l.memoizedState !== null ? dp(o) : a !== null ? (a.return = l, B = a) : dp(o);
        for (; i !== null; ) B = i, Hg(i), i = i.sibling;
        B = o, Xi = s, at = u;
      }
      up(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : up(e);
  }
}
function up(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            at || Us(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !at) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Kt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Gf(t, i, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Gf(t, l, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var d = c.dehydrated;
                  d !== null && li(d);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(M(163));
        }
        at || t.flags & 512 && ju(t);
      } catch (p) {
        ze(t, t.return, p);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function cp(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function dp(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Us(4, t);
          } catch (a) {
            ze(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ze(t, o, a);
            }
          }
          var i = t.return;
          try {
            ju(t);
          } catch (a) {
            ze(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ju(t);
          } catch (a) {
            ze(t, l, a);
          }
      }
    } catch (a) {
      ze(t, t.return, a);
    }
    if (t === e) {
      B = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, B = s;
      break;
    }
    B = t.return;
  }
}
var GC = Math.ceil, Hl = kn.ReactCurrentDispatcher, id = kn.ReactCurrentOwner, At = kn.ReactCurrentBatchConfig, re = 0, Ge = null, De = null, tt = 0, Ct = 0, Ar = Kn(0), Ue = 0, vi = null, pr = 0, Vs = 0, ld = 0, Ko = null, ht = null, sd = 0, ro = 1 / 0, pn = null, Kl = !1, Wu = null, An = null, qi = !1, On = null, Gl = 0, Go = 0, Uu = null, vl = -1, yl = 0;
function ft() {
  return re & 6 ? Le() : vl !== -1 ? vl : vl = Le();
}
function jn(e) {
  return e.mode & 1 ? re & 2 && tt !== 0 ? tt & -tt : _C.transition !== null ? (yl === 0 && (yl = Th()), yl) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lh(e.type)), e) : 1;
}
function qt(e, t, n, r) {
  if (50 < Go) throw Go = 0, Uu = null, Error(M(185));
  Ti(e, n, r), (!(re & 2) || e !== Ge) && (e === Ge && (!(re & 2) && (Vs |= n), Ue === 4 && _n(e, tt)), xt(e, r), n === 1 && re === 0 && !(t.mode & 1) && (ro = Le() + 500, Ds && Gn()));
}
function xt(e, t) {
  var n = e.callbackNode;
  _S(e, t);
  var r = _l(e, e === Ge ? tt : 0);
  if (r === 0) n !== null && Sf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Sf(n), t === 1) e.tag === 0 ? TC(fp.bind(null, e)) : tg(fp.bind(null, e)), EC(function() {
      !(re & 6) && Gn();
    }), n = null;
    else {
      switch (_h(r)) {
        case 1:
          n = Ic;
          break;
        case 4:
          n = Ph;
          break;
        case 16:
          n = Tl;
          break;
        case 536870912:
          n = $h;
          break;
        default:
          n = Tl;
      }
      n = Jg(n, Kg.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Kg(e, t) {
  if (vl = -1, yl = 0, re & 6) throw Error(M(327));
  var n = e.callbackNode;
  if (Kr() && e.callbackNode !== n) return null;
  var r = _l(e, e === Ge ? tt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Yl(e, r);
  else {
    t = r;
    var o = re;
    re |= 2;
    var i = Yg();
    (Ge !== e || tt !== t) && (pn = null, ro = Le() + 500, lr(e, t));
    do
      try {
        XC();
        break;
      } catch (s) {
        Gg(e, s);
      }
    while (!0);
    Kc(), Hl.current = i, re = o, De !== null ? t = 0 : (Ge = null, tt = 0, t = Ue);
  }
  if (t !== 0) {
    if (t === 2 && (o = gu(e), o !== 0 && (r = o, t = Vu(e, o))), t === 1) throw n = vi, lr(e, 0), _n(e, r), xt(e, Le()), n;
    if (t === 6) _n(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !YC(o) && (t = Yl(e, r), t === 2 && (i = gu(e), i !== 0 && (r = i, t = Vu(e, i))), t === 1)) throw n = vi, lr(e, 0), _n(e, r), xt(e, Le()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          qn(e, ht, pn);
          break;
        case 3:
          if (_n(e, r), (r & 130023424) === r && (t = sd + 500 - Le(), 10 < t)) {
            if (_l(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ft(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = bu(qn.bind(null, e, ht, pn), t);
            break;
          }
          qn(e, ht, pn);
          break;
        case 4:
          if (_n(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Xt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = Le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * GC(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = bu(qn.bind(null, e, ht, pn), r);
            break;
          }
          qn(e, ht, pn);
          break;
        case 5:
          qn(e, ht, pn);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return xt(e, Le()), e.callbackNode === n ? Kg.bind(null, e) : null;
}
function Vu(e, t) {
  var n = Ko;
  return e.current.memoizedState.isDehydrated && (lr(e, t).flags |= 256), e = Yl(e, t), e !== 2 && (t = ht, ht = n, t !== null && Hu(t)), e;
}
function Hu(e) {
  ht === null ? ht = e : ht.push.apply(ht, e);
}
function YC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Zt(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function _n(e, t) {
  for (t &= ~ld, t &= ~Vs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fp(e) {
  if (re & 6) throw Error(M(327));
  Kr();
  var t = _l(e, 0);
  if (!(t & 1)) return xt(e, Le()), null;
  var n = Yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gu(e);
    r !== 0 && (t = r, n = Vu(e, r));
  }
  if (n === 1) throw n = vi, lr(e, 0), _n(e, t), xt(e, Le()), n;
  if (n === 6) throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, ht, pn), xt(e, Le()), null;
}
function ad(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    re = n, re === 0 && (ro = Le() + 500, Ds && Gn());
  }
}
function mr(e) {
  On !== null && On.tag === 0 && !(re & 6) && Kr();
  var t = re;
  re |= 1;
  var n = At.transition, r = pe;
  try {
    if (At.transition = null, pe = 1, e) return e();
  } finally {
    pe = r, At.transition = n, re = t, !(re & 6) && Gn();
  }
}
function ud() {
  Ct = Ar.current, ke(Ar);
}
function lr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, bC(n)), De !== null) for (n = De.return; n !== null; ) {
    var r = n;
    switch (Uc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && zl();
        break;
      case 3:
        to(), ke(vt), ke(ct), Zc();
        break;
      case 5:
        qc(r);
        break;
      case 4:
        to();
        break;
      case 13:
        ke(Te);
        break;
      case 19:
        ke(Te);
        break;
      case 10:
        Gc(r.type._context);
        break;
      case 22:
      case 23:
        ud();
    }
    n = n.return;
  }
  if (Ge = e, De = e = Dn(e.current, null), tt = Ct = t, Ue = 0, vi = null, ld = Vs = pr = 0, ht = Ko = null, rr !== null) {
    for (t = 0; t < rr.length; t++) if (n = rr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    rr = null;
  }
  return e;
}
function Gg(e, t) {
  do {
    var n = De;
    try {
      if (Kc(), ml.current = Vl, Ul) {
        for (var r = _e.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ul = !1;
      }
      if (fr = 0, Ke = We = _e = null, Vo = !1, mi = 0, id.current = null, n === null || n.return === null) {
        Ue = 1, vi = t, De = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, a = t;
        if (t = tt, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var C = Jf(l);
          if (C !== null) {
            C.flags &= -257, ep(C, l, s, i, t), C.mode & 1 && Zf(i, u, t), t = C, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Zf(i, u, t), cd();
              break e;
            }
            a = Error(M(426));
          }
        } else if (Pe && s.mode & 1) {
          var R = Jf(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), ep(R, l, s, i, t), Vc(no(a, s));
            break e;
          }
        }
        i = a = no(a, s), Ue !== 4 && (Ue = 2), Ko === null ? Ko = [i] : Ko.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = _g(i, a, t);
              Kf(i, h);
              break e;
            case 1:
              s = a;
              var m = i.type, f = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (An === null || !An.has(f)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = Mg(i, s, t);
                Kf(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Xg(n);
    } catch (b) {
      t = b, De === n && n !== null && (De = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yg() {
  var e = Hl.current;
  return Hl.current = Vl, e === null ? Vl : e;
}
function cd() {
  (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), Ge === null || !(pr & 268435455) && !(Vs & 268435455) || _n(Ge, tt);
}
function Yl(e, t) {
  var n = re;
  re |= 2;
  var r = Yg();
  (Ge !== e || tt !== t) && (pn = null, lr(e, t));
  do
    try {
      QC();
      break;
    } catch (o) {
      Gg(e, o);
    }
  while (!0);
  if (Kc(), re = n, Hl.current = r, De !== null) throw Error(M(261));
  return Ge = null, tt = 0, Ue;
}
function QC() {
  for (; De !== null; ) Qg(De);
}
function XC() {
  for (; De !== null && !CS(); ) Qg(De);
}
function Qg(e) {
  var t = Zg(e.alternate, e, Ct);
  e.memoizedProps = e.pendingProps, t === null ? Xg(e) : De = t, id.current = null;
}
function Xg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = UC(n, t), n !== null) {
        n.flags &= 32767, De = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ue = 6, De = null;
        return;
      }
    } else if (n = WC(n, t, Ct), n !== null) {
      De = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      De = t;
      return;
    }
    De = t = e;
  } while (t !== null);
  Ue === 0 && (Ue = 5);
}
function qn(e, t, n) {
  var r = pe, o = At.transition;
  try {
    At.transition = null, pe = 1, qC(e, t, n, r);
  } finally {
    At.transition = o, pe = r;
  }
  return null;
}
function qC(e, t, n, r) {
  do
    Kr();
  while (On !== null);
  if (re & 6) throw Error(M(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (MS(e, i), e === Ge && (De = Ge = null, tt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || qi || (qi = !0, Jg(Tl, function() {
    return Kr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = At.transition, At.transition = null;
    var l = pe;
    pe = 1;
    var s = re;
    re |= 4, id.current = null, HC(e, n), Vg(n, e), vC(wu), Ml = !!Cu, wu = Cu = null, e.current = n, KC(n), wS(), re = s, pe = l, At.transition = i;
  } else e.current = n;
  if (qi && (qi = !1, On = e, Gl = o), i = e.pendingLanes, i === 0 && (An = null), ES(n.stateNode), xt(e, Le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Kl) throw Kl = !1, e = Wu, Wu = null, e;
  return Gl & 1 && e.tag !== 0 && Kr(), i = e.pendingLanes, i & 1 ? e === Uu ? Go++ : (Go = 0, Uu = e) : Go = 0, Gn(), null;
}
function Kr() {
  if (On !== null) {
    var e = _h(Gl), t = At.transition, n = pe;
    try {
      if (At.transition = null, pe = 16 > e ? 16 : e, On === null) var r = !1;
      else {
        if (e = On, On = null, Gl = 0, re & 6) throw Error(M(331));
        var o = re;
        for (re |= 4, B = e.current; B !== null; ) {
          var i = B, l = i.child;
          if (B.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (B = u; B !== null; ) {
                  var c = B;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ho(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, B = d;
                  else for (; B !== null; ) {
                    c = B;
                    var p = c.sibling, C = c.return;
                    if (Bg(c), c === u) {
                      B = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = C, B = p;
                      break;
                    }
                    B = C;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var R = x.sibling;
                    x.sibling = null, x = R;
                  } while (x !== null);
                }
              }
              B = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, B = l;
          else e: for (; B !== null; ) {
            if (i = B, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ho(9, i, i.return);
            }
            var h = i.sibling;
            if (h !== null) {
              h.return = i.return, B = h;
              break e;
            }
            B = i.return;
          }
        }
        var m = e.current;
        for (B = m; B !== null; ) {
          l = B;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) f.return = l, B = f;
          else e: for (l = m; B !== null; ) {
            if (s = B, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Us(9, s);
              }
            } catch (b) {
              ze(s, s.return, b);
            }
            if (s === l) {
              B = null;
              break e;
            }
            var g = s.sibling;
            if (g !== null) {
              g.return = s.return, B = g;
              break e;
            }
            B = s.return;
          }
        }
        if (re = o, Gn(), an && typeof an.onPostCommitFiberRoot == "function") try {
          an.onPostCommitFiberRoot(zs, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      pe = n, At.transition = t;
    }
  }
  return !1;
}
function pp(e, t, n) {
  t = no(n, t), t = _g(e, t, 1), e = Fn(e, t, 1), t = ft(), e !== null && (Ti(e, 1, t), xt(e, t));
}
function ze(e, t, n) {
  if (e.tag === 3) pp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      pp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (An === null || !An.has(r))) {
        e = no(n, e), e = Mg(t, e, 1), t = Fn(t, e, 1), e = ft(), t !== null && (Ti(t, 1, e), xt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ZC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & n, Ge === e && (tt & n) === n && (Ue === 4 || Ue === 3 && (tt & 130023424) === tt && 500 > Le() - sd ? lr(e, 0) : ld |= n), xt(e, t);
}
function qg(e, t) {
  t === 0 && (e.mode & 1 ? (t = Bi, Bi <<= 1, !(Bi & 130023424) && (Bi = 4194304)) : t = 1);
  var n = ft();
  e = Cn(e, t), e !== null && (Ti(e, t, n), xt(e, n));
}
function JC(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), qg(e, n);
}
function ew(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), qg(e, n);
}
var Zg;
Zg = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || vt.current) gt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return gt = !1, BC(e, t, n);
    gt = !!(e.flags & 131072);
  }
  else gt = !1, Pe && t.flags & 1048576 && ng(t, Al, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      gl(e, t), e = t.pendingProps;
      var o = Zr(t, ct.current);
      Hr(t, n), o = ed(null, t, r, e, o, n);
      var i = td();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(r) ? (i = !0, Ll(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Qc(t), o.updater = Ws, t.stateNode = o, o._reactInternals = t, Mu(t, r, e, n), t = Nu(null, t, r, !0, i, n)) : (t.tag = 0, Pe && i && Wc(t), dt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (gl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = nw(r), e = Kt(r, e), o) {
          case 0:
            t = Iu(null, t, r, e, n);
            break e;
          case 1:
            t = rp(null, t, r, e, n);
            break e;
          case 11:
            t = tp(null, t, r, e, n);
            break e;
          case 14:
            t = np(null, t, r, Kt(r.type, e), n);
            break e;
        }
        throw Error(M(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Kt(r, o), Iu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Kt(r, o), rp(e, t, r, o, n);
    case 3:
      e: {
        if (zg(t), e === null) throw Error(M(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, ag(e, t), Bl(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = no(Error(M(423)), t), t = op(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = no(Error(M(424)), t), t = op(e, t, r, n, o);
          break e;
        } else for (kt = Ln(t.stateNode.containerInfo.firstChild), Pt = t, Pe = !0, Yt = null, n = lg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Jr(), r === o) {
            t = wn(e, t, n);
            break e;
          }
          dt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ug(t), e === null && $u(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, ku(r, o) ? l = null : i !== null && ku(r, i) && (t.flags |= 32), Ng(e, t), dt(e, t, l, n), t.child;
    case 6:
      return e === null && $u(t), null;
    case 13:
      return Lg(e, t, n);
    case 4:
      return Xc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = eo(t, null, r, n) : dt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Kt(r, o), tp(e, t, r, o, n);
    case 7:
      return dt(e, t, t.pendingProps, n), t.child;
    case 8:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, xe(jl, r._currentValue), r._currentValue = l, i !== null) if (Zt(i.value, l)) {
          if (i.children === o.children && !vt.current) {
            t = wn(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            l = i.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = yn(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Tu(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(M(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Tu(l, n, t), l = i.sibling;
          } else l = i.child;
          if (l !== null) l.return = i;
          else for (l = i; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (i = l.sibling, i !== null) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        dt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Hr(t, n), o = Bt(o), r = r(o), t.flags |= 1, dt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Kt(r, t.pendingProps), o = Kt(r.type, o), np(e, t, r, o, n);
    case 15:
      return Og(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Kt(r, o), gl(e, t), t.tag = 1, yt(r) ? (e = !0, Ll(t)) : e = !1, Hr(t, n), Tg(t, r, o), Mu(t, r, o, n), Nu(null, t, r, !0, e, n);
    case 19:
      return Fg(e, t, n);
    case 22:
      return Ig(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Jg(e, t) {
  return Rh(e, t);
}
function tw(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ft(e, t, n, r) {
  return new tw(e, t, n, r);
}
function dd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function nw(e) {
  if (typeof e == "function") return dd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === _c) return 11;
    if (e === Mc) return 14;
  }
  return 2;
}
function Dn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function xl(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") dd(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case $r:
      return sr(n.children, o, i, t);
    case Tc:
      l = 8, o |= 8;
      break;
    case tu:
      return e = Ft(12, n, t, o | 2), e.elementType = tu, e.lanes = i, e;
    case nu:
      return e = Ft(13, n, t, o), e.elementType = nu, e.lanes = i, e;
    case ru:
      return e = Ft(19, n, t, o), e.elementType = ru, e.lanes = i, e;
    case uh:
      return Hs(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case sh:
          l = 10;
          break e;
        case ah:
          l = 9;
          break e;
        case _c:
          l = 11;
          break e;
        case Mc:
          l = 14;
          break e;
        case Pn:
          l = 16, r = null;
          break e;
      }
      throw Error(M(130, e == null ? e : typeof e, ""));
  }
  return t = Ft(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function sr(e, t, n, r) {
  return e = Ft(7, e, r, t), e.lanes = n, e;
}
function Hs(e, t, n, r) {
  return e = Ft(22, e, r, t), e.elementType = uh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function La(e, t, n) {
  return e = Ft(6, e, null, t), e.lanes = n, e;
}
function Fa(e, t, n) {
  return t = Ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function rw(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = va(0), this.expirationTimes = va(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = va(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function fd(e, t, n, r, o, i, l, s, a) {
  return e = new rw(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ft(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qc(i), e;
}
function ow(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Pr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ev(e) {
  if (!e) return Un;
  e = e._reactInternals;
  e: {
    if (gr(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (yt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (yt(n)) return eg(e, n, t);
  }
  return t;
}
function tv(e, t, n, r, o, i, l, s, a) {
  return e = fd(n, r, !0, e, o, i, l, s, a), e.context = ev(null), n = e.current, r = ft(), o = jn(n), i = yn(r, o), i.callback = t ?? null, Fn(n, i, o), e.current.lanes = o, Ti(e, o, r), xt(e, r), e;
}
function Ks(e, t, n, r) {
  var o = t.current, i = ft(), l = jn(o);
  return n = ev(n), t.context === null ? t.context = n : t.pendingContext = n, t = yn(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Fn(o, t, l), e !== null && (qt(e, o, l, i), pl(e, o, l)), l;
}
function Ql(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pd(e, t) {
  mp(e, t), (e = e.alternate) && mp(e, t);
}
function iw() {
  return null;
}
var nv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function md(e) {
  this._internalRoot = e;
}
Gs.prototype.render = md.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Ks(e, t, null, null);
};
Gs.prototype.unmount = md.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mr(function() {
      Ks(null, e, null, null);
    }), t[Sn] = null;
  }
};
function Gs(e) {
  this._internalRoot = e;
}
Gs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ih();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tn.length && t !== 0 && t < Tn[n].priority; n++) ;
    Tn.splice(n, 0, e), n === 0 && zh(e);
  }
};
function hd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ys(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function hp() {
}
function lw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Ql(l);
        i.call(u);
      };
    }
    var l = tv(t, r, e, 0, null, !1, !1, "", hp);
    return e._reactRootContainer = l, e[Sn] = l.current, ui(e.nodeType === 8 ? e.parentNode : e), mr(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Ql(a);
      s.call(u);
    };
  }
  var a = fd(e, 0, !1, null, null, !1, !1, "", hp);
  return e._reactRootContainer = a, e[Sn] = a.current, ui(e.nodeType === 8 ? e.parentNode : e), mr(function() {
    Ks(t, a, n, r);
  }), a;
}
function Qs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = Ql(l);
        s.call(a);
      };
    }
    Ks(t, l, e, o);
  } else l = lw(n, t, e, o, r);
  return Ql(l);
}
Mh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zo(t.pendingLanes);
        n !== 0 && (Nc(t, n | 1), xt(t, Le()), !(re & 6) && (ro = Le() + 500, Gn()));
      }
      break;
    case 13:
      mr(function() {
        var r = Cn(e, 1);
        if (r !== null) {
          var o = ft();
          qt(r, e, 1, o);
        }
      }), pd(e, 1);
  }
};
zc = function(e) {
  if (e.tag === 13) {
    var t = Cn(e, 134217728);
    if (t !== null) {
      var n = ft();
      qt(t, e, 134217728, n);
    }
    pd(e, 134217728);
  }
};
Oh = function(e) {
  if (e.tag === 13) {
    var t = jn(e), n = Cn(e, t);
    if (n !== null) {
      var r = ft();
      qt(n, e, t, r);
    }
    pd(e, t);
  }
};
Ih = function() {
  return pe;
};
Nh = function(e, t) {
  var n = pe;
  try {
    return pe = e, t();
  } finally {
    pe = n;
  }
};
pu = function(e, t, n) {
  switch (t) {
    case "input":
      if (lu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = js(r);
            if (!o) throw Error(M(90));
            dh(r), lu(r, o);
          }
        }
      }
      break;
    case "textarea":
      ph(e, n);
      break;
    case "select":
      t = n.value, t != null && Br(e, !!n.multiple, t, !1);
  }
};
Sh = ad;
Ch = mr;
var sw = { usingClientEntryPoint: !1, Events: [Mi, Or, js, yh, xh, ad] }, Po = { findFiberByHostInstance: nr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, aw = { bundleType: Po.bundleType, version: Po.version, rendererPackageName: Po.rendererPackageName, rendererConfig: Po.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: kn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bh(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Po.findFiberByHostInstance || iw, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zi.isDisabled && Zi.supportsFiber) try {
    zs = Zi.inject(aw), an = Zi;
  } catch {
  }
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sw;
_t.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hd(t)) throw Error(M(200));
  return ow(e, t, null, n);
};
_t.createRoot = function(e, t) {
  if (!hd(e)) throw Error(M(299));
  var n = !1, r = "", o = nv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = fd(e, 1, !1, null, null, n, !1, r, o), e[Sn] = t.current, ui(e.nodeType === 8 ? e.parentNode : e), new md(t);
};
_t.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = bh(t), e = e === null ? null : e.stateNode, e;
};
_t.flushSync = function(e) {
  return mr(e);
};
_t.hydrate = function(e, t, n) {
  if (!Ys(t)) throw Error(M(200));
  return Qs(null, e, t, !0, n);
};
_t.hydrateRoot = function(e, t, n) {
  if (!hd(e)) throw Error(M(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = nv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = tv(t, null, e, 1, n ?? null, o, !1, i, l), e[Sn] = t.current, ui(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Gs(t);
};
_t.render = function(e, t, n) {
  if (!Ys(t)) throw Error(M(200));
  return Qs(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function(e) {
  if (!Ys(e)) throw Error(M(40));
  return e._reactRootContainer ? (mr(function() {
    Qs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Sn] = null;
    });
  }), !0) : !1;
};
_t.unstable_batchedUpdates = ad;
_t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ys(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Qs(e, t, n, !1, r);
};
_t.version = "18.3.1-next-f1338f8080-20240426";
function rv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rv);
    } catch (e) {
      console.error(e);
    }
}
rv(), rh.exports = _t;
var gd = rh.exports;
const Ji = /* @__PURE__ */ Vp(gd), gp = {
  disabled: !1
}, Xl = Qt.createContext(null);
var uw = function(t) {
  return t.scrollTop;
}, Fo = "unmounted", Zn = "exited", Jn = "entering", Rr = "entered", Ku = "exiting", cn = /* @__PURE__ */ function(e) {
  nh(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = o, s = l && !l.isMounting ? r.enter : r.appear, a;
    return i.appearStatus = null, r.in ? s ? (a = Zn, i.appearStatus = Jn) : a = Rr : r.unmountOnExit || r.mountOnEnter ? a = Fo : a = Zn, i.state = {
      status: a
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var l = o.in;
    return l && i.status === Fo ? {
      status: Zn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== Jn && l !== Rr && (i = Jn) : (l === Jn || l === Rr) && (i = Ku);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, l, s;
    return i = l = s = o, o != null && typeof o != "number" && (i = o.exit, l = o.enter, s = o.appear !== void 0 ? o.appear : l), {
      exit: i,
      enter: l,
      appear: s
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Jn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : Ji.findDOMNode(this);
          l && uw(l);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Zn && this.setState({
      status: Fo
    });
  }, n.performEnter = function(o) {
    var i = this, l = this.props.enter, s = this.context ? this.context.isMounting : o, a = this.props.nodeRef ? [s] : [Ji.findDOMNode(this), s], u = a[0], c = a[1], d = this.getTimeouts(), p = s ? d.appear : d.enter;
    if (!o && !l || gp.disabled) {
      this.safeSetState({
        status: Rr
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Jn
    }, function() {
      i.props.onEntering(u, c), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: Rr
        }, function() {
          i.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, l = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Ji.findDOMNode(this);
    if (!i || gp.disabled) {
      this.safeSetState({
        status: Zn
      }, function() {
        o.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Ku
    }, function() {
      o.props.onExiting(s), o.onTransitionEnd(l.exit, function() {
        o.safeSetState({
          status: Zn
        }, function() {
          o.props.onExited(s);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, l = !0;
    return this.nextCallback = function(s) {
      l && (l = !1, i.nextCallback = null, o(s));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var l = this.props.nodeRef ? this.props.nodeRef.current : Ji.findDOMNode(this), s = o == null && !this.props.addEndListener;
    if (!l || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var a = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], u = a[0], c = a[1];
      this.props.addEndListener(u, c);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Fo)
      return null;
    var i = this.props, l = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = U(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Qt.createElement(Xl.Provider, {
        value: null
      }, typeof l == "function" ? l(o, s) : Qt.cloneElement(Qt.Children.only(l), s))
    );
  }, t;
}(Qt.Component);
cn.contextType = Xl;
cn.propTypes = {};
function Er() {
}
cn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Er,
  onEntering: Er,
  onEntered: Er,
  onExit: Er,
  onExiting: Er,
  onExited: Er
};
cn.UNMOUNTED = Fo;
cn.EXITED = Zn;
cn.ENTERING = Jn;
cn.ENTERED = Rr;
cn.EXITING = Ku;
function cw(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vd(e, t) {
  var n = function(i) {
    return t && S.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && S.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function dw(e, t) {
  e = e || {}, t = t || {};
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var l, s = {};
  for (var a in t) {
    if (r[a])
      for (l = 0; l < r[a].length; l++) {
        var u = r[a][l];
        s[r[a][l]] = n(u);
      }
    s[a] = n(a);
  }
  for (l = 0; l < o.length; l++)
    s[o[l]] = n(o[l]);
  return s;
}
function ir(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function fw(e, t) {
  return vd(e.children, function(n) {
    return S.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: ir(n, "appear", e),
      enter: ir(n, "enter", e),
      exit: ir(n, "exit", e)
    });
  });
}
function pw(e, t, n) {
  var r = vd(e.children), o = dw(t, r);
  return Object.keys(o).forEach(function(i) {
    var l = o[i];
    if (S.isValidElement(l)) {
      var s = i in t, a = i in r, u = t[i], c = S.isValidElement(u) && !u.props.in;
      a && (!s || c) ? o[i] = S.cloneElement(l, {
        onExited: n.bind(null, l),
        in: !0,
        exit: ir(l, "exit", e),
        enter: ir(l, "enter", e)
      }) : !a && s && !c ? o[i] = S.cloneElement(l, {
        in: !1
      }) : a && s && S.isValidElement(u) && (o[i] = S.cloneElement(l, {
        onExited: n.bind(null, l),
        in: u.props.in,
        exit: ir(l, "exit", e),
        enter: ir(l, "enter", e)
      }));
    }
  }), o;
}
var mw = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, hw = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, yd = /* @__PURE__ */ function(e) {
  nh(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = i.handleExited.bind(cw(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: l,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var l = i.children, s = i.handleExited, a = i.firstRender;
    return {
      children: a ? fw(o, s) : pw(o, l, s),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var l = vd(this.props.children);
    o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var a = y({}, s.children);
      return delete a[o.key], {
        children: a
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, l = o.childFactory, s = U(o, ["component", "childFactory"]), a = this.state.contextValue, u = mw(this.state.children).map(l);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Qt.createElement(Xl.Provider, {
      value: a
    }, u) : /* @__PURE__ */ Qt.createElement(Xl.Provider, {
      value: a
    }, /* @__PURE__ */ Qt.createElement(i, s, u));
  }, t;
}(Qt.Component);
yd.propTypes = {};
yd.defaultProps = hw;
const ov = (e) => e.scrollTop;
function ql(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: l = {}
  } = e;
  return {
    duration: (n = l.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = l.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: l.transitionDelay
  };
}
function gw(e) {
  return ce("MuiPaper", e);
}
de("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const vw = ["className", "component", "elevation", "square", "variant"], yw = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return he(i, gw, o);
}, xw = V("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return y({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && y({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${st("#fff", cf(t.elevation))}, ${st("#fff", cf(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), iv = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: l = 1,
    square: s = !1,
    variant: a = "elevation"
  } = r, u = U(r, vw), c = y({}, r, {
    component: i,
    elevation: l,
    square: s,
    variant: a
  }), d = yw(c);
  return /* @__PURE__ */ E.jsx(xw, y({
    as: i,
    ownerState: c,
    className: H(d.root, o),
    ref: n
  }, u));
});
function Sw(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: l,
    in: s,
    onExited: a,
    timeout: u
  } = e, [c, d] = S.useState(!1), p = H(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), C = {
    width: l,
    height: l,
    top: -(l / 2) + i,
    left: -(l / 2) + o
  }, v = H(n.child, c && n.childLeaving, r && n.childPulsate);
  return !s && !c && d(!0), S.useEffect(() => {
    if (!s && a != null) {
      const x = setTimeout(a, u);
      return () => {
        clearTimeout(x);
      };
    }
  }, [a, s, u]), /* @__PURE__ */ E.jsx("span", {
    className: p,
    style: C,
    children: /* @__PURE__ */ E.jsx("span", {
      className: v
    })
  });
}
const It = de("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Cw = ["center", "classes", "className"];
let Xs = (e) => e, vp, yp, xp, Sp;
const Gu = 550, ww = 80, kw = ps(vp || (vp = Xs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), bw = ps(yp || (yp = Xs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Ew = ps(xp || (xp = Xs`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Rw = V("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Pw = V(Sw, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Sp || (Sp = Xs`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), It.rippleVisible, kw, Gu, ({
  theme: e
}) => e.transitions.easing.easeInOut, It.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, It.child, It.childLeaving, bw, Gu, ({
  theme: e
}) => e.transitions.easing.easeInOut, It.childPulsate, Ew, ({
  theme: e
}) => e.transitions.easing.easeInOut), $w = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: l
  } = r, s = U(r, Cw), [a, u] = S.useState([]), c = S.useRef(0), d = S.useRef(null);
  S.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [a]);
  const p = S.useRef(!1), C = Am(), v = S.useRef(null), x = S.useRef(null), R = S.useCallback((g) => {
    const {
      pulsate: b,
      rippleX: w,
      rippleY: k,
      rippleSize: P,
      cb: N
    } = g;
    u((T) => [...T, /* @__PURE__ */ E.jsx(Pw, {
      classes: {
        ripple: H(i.ripple, It.ripple),
        rippleVisible: H(i.rippleVisible, It.rippleVisible),
        ripplePulsate: H(i.ripplePulsate, It.ripplePulsate),
        child: H(i.child, It.child),
        childLeaving: H(i.childLeaving, It.childLeaving),
        childPulsate: H(i.childPulsate, It.childPulsate)
      },
      timeout: Gu,
      pulsate: b,
      rippleX: w,
      rippleY: k,
      rippleSize: P
    }, c.current)]), c.current += 1, d.current = N;
  }, [i]), h = S.useCallback((g = {}, b = {}, w = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: P = o || b.pulsate,
      fakeElement: N = !1
      // For test purposes
    } = b;
    if ((g == null ? void 0 : g.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (g == null ? void 0 : g.type) === "touchstart" && (p.current = !0);
    const T = N ? null : x.current, A = T ? T.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let z, _, O;
    if (P || g === void 0 || g.clientX === 0 && g.clientY === 0 || !g.clientX && !g.touches)
      z = Math.round(A.width / 2), _ = Math.round(A.height / 2);
    else {
      const {
        clientX: L,
        clientY: F
      } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
      z = Math.round(L - A.left), _ = Math.round(F - A.top);
    }
    if (P)
      O = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3), O % 2 === 0 && (O += 1);
    else {
      const L = Math.max(Math.abs((T ? T.clientWidth : 0) - z), z) * 2 + 2, F = Math.max(Math.abs((T ? T.clientHeight : 0) - _), _) * 2 + 2;
      O = Math.sqrt(L ** 2 + F ** 2);
    }
    g != null && g.touches ? v.current === null && (v.current = () => {
      R({
        pulsate: k,
        rippleX: z,
        rippleY: _,
        rippleSize: O,
        cb: w
      });
    }, C.start(ww, () => {
      v.current && (v.current(), v.current = null);
    })) : R({
      pulsate: k,
      rippleX: z,
      rippleY: _,
      rippleSize: O,
      cb: w
    });
  }, [o, R, C]), m = S.useCallback(() => {
    h({}, {
      pulsate: !0
    });
  }, [h]), f = S.useCallback((g, b) => {
    if (C.clear(), (g == null ? void 0 : g.type) === "touchend" && v.current) {
      v.current(), v.current = null, C.start(0, () => {
        f(g, b);
      });
      return;
    }
    v.current = null, u((w) => w.length > 0 ? w.slice(1) : w), d.current = b;
  }, [C]);
  return S.useImperativeHandle(n, () => ({
    pulsate: m,
    start: h,
    stop: f
  }), [m, h, f]), /* @__PURE__ */ E.jsx(Rw, y({
    className: H(It.root, i.root, l),
    ref: x
  }, s, {
    children: /* @__PURE__ */ E.jsx(yd, {
      component: null,
      exit: !0,
      children: a
    })
  }));
});
function Tw(e) {
  return ce("MuiButtonBase", e);
}
const _w = de("MuiButtonBase", ["root", "disabled", "focusVisible"]), Mw = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Ow = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, l = he({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Tw, o);
  return n && r && (l.root += ` ${r}`), l;
}, Iw = V("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${_w.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Yu = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: l,
    className: s,
    component: a = "button",
    disabled: u = !1,
    disableRipple: c = !1,
    disableTouchRipple: d = !1,
    focusRipple: p = !1,
    LinkComponent: C = "a",
    onBlur: v,
    onClick: x,
    onContextMenu: R,
    onDragLeave: h,
    onFocus: m,
    onFocusVisible: f,
    onKeyDown: g,
    onKeyUp: b,
    onMouseDown: w,
    onMouseLeave: k,
    onMouseUp: P,
    onTouchEnd: N,
    onTouchMove: T,
    onTouchStart: A,
    tabIndex: z = 0,
    TouchRippleProps: _,
    touchRippleRef: O,
    type: L
  } = r, F = U(r, Mw), j = S.useRef(null), $ = S.useRef(null), I = ut($, O), {
    isFocusVisibleRef: W,
    onFocus: Z,
    onBlur: X,
    ref: ae
  } = jm(), [Q, ue] = S.useState(!1);
  u && Q && ue(!1), S.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ue(!0), j.current.focus();
    }
  }), []);
  const [te, Oe] = S.useState(!1);
  S.useEffect(() => {
    Oe(!0);
  }, []);
  const Qe = te && !c && !u;
  S.useEffect(() => {
    Q && p && !c && te && $.current.pulsate();
  }, [c, p, Q, te]);
  function $e(G, fn, go = d) {
    return tr((vo) => (fn && fn(vo), !go && $.current && $.current[G](vo), !0));
  }
  const rt = $e("start", w), oe = $e("stop", R), ve = $e("stop", h), q = $e("stop", P), J = $e("stop", (G) => {
    Q && G.preventDefault(), k && k(G);
  }), Y = $e("start", A), Se = $e("stop", N), be = $e("stop", T), Xe = $e("stop", (G) => {
    X(G), W.current === !1 && ue(!1), v && v(G);
  }, !1), Ve = tr((G) => {
    j.current || (j.current = G.currentTarget), Z(G), W.current === !0 && (ue(!0), f && f(G)), m && m(G);
  }), Be = () => {
    const G = j.current;
    return a && a !== "button" && !(G.tagName === "A" && G.href);
  }, ne = S.useRef(!1), qe = tr((G) => {
    p && !ne.current && Q && $.current && G.key === " " && (ne.current = !0, $.current.stop(G, () => {
      $.current.start(G);
    })), G.target === G.currentTarget && Be() && G.key === " " && G.preventDefault(), g && g(G), G.target === G.currentTarget && Be() && G.key === "Enter" && !u && (G.preventDefault(), x && x(G));
  }), He = tr((G) => {
    p && G.key === " " && $.current && Q && !G.defaultPrevented && (ne.current = !1, $.current.stop(G, () => {
      $.current.pulsate(G);
    })), b && b(G), x && G.target === G.currentTarget && Be() && G.key === " " && !G.defaultPrevented && x(G);
  });
  let Ee = a;
  Ee === "button" && (F.href || F.to) && (Ee = C);
  const en = {};
  Ee === "button" ? (en.type = L === void 0 ? "button" : L, en.disabled = u) : (!F.href && !F.to && (en.role = "button"), u && (en["aria-disabled"] = u));
  const bn = ut(n, ae, j), dn = y({}, r, {
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: d,
    focusRipple: p,
    tabIndex: z,
    focusVisible: Q
  }), ye = Ow(dn);
  return /* @__PURE__ */ E.jsxs(Iw, y({
    as: Ee,
    className: H(ye.root, s),
    ownerState: dn,
    onBlur: Xe,
    onClick: x,
    onContextMenu: oe,
    onFocus: Ve,
    onKeyDown: qe,
    onKeyUp: He,
    onMouseDown: rt,
    onMouseLeave: J,
    onMouseUp: q,
    onDragLeave: ve,
    onTouchEnd: Se,
    onTouchMove: be,
    onTouchStart: Y,
    ref: bn,
    tabIndex: u ? -1 : z,
    type: L
  }, en, F, {
    children: [l, Qe ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ E.jsx($w, y({
        ref: I,
        center: i
      }, _))
    ) : null]
  }));
});
function Nw(e) {
  return ce("MuiTypography", e);
}
de("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const zw = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Lw = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: l
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${D(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return he(s, Nw, l);
}, Fw = V("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${D(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Cp = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Aw = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, jw = (e) => Aw[e] || e, er = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTypography"
  }), o = jw(r.color), i = ws(y({}, r, {
    color: o
  })), {
    align: l = "inherit",
    className: s,
    component: a,
    gutterBottom: u = !1,
    noWrap: c = !1,
    paragraph: d = !1,
    variant: p = "body1",
    variantMapping: C = Cp
  } = i, v = U(i, zw), x = y({}, i, {
    align: l,
    color: o,
    className: s,
    component: a,
    gutterBottom: u,
    noWrap: c,
    paragraph: d,
    variant: p,
    variantMapping: C
  }), R = a || (d ? "p" : C[p] || Cp[p]) || "span", h = Lw(x);
  return /* @__PURE__ */ E.jsx(Fw, y({
    as: R,
    ref: n,
    ownerState: x,
    className: H(h.root, s)
  }, v));
});
function Dw(e) {
  return typeof e == "function" ? e() : e;
}
const Bw = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [l, s] = S.useState(null), a = ut(/* @__PURE__ */ S.isValidElement(r) ? Pi(r) : null, n);
  if (Bn(() => {
    i || s(Dw(o) || document.body);
  }, [o, i]), Bn(() => {
    if (l && !i)
      return Ya(n, l), () => {
        Ya(n, null);
      };
  }, [n, l, i]), i) {
    if (/* @__PURE__ */ S.isValidElement(r)) {
      const u = {
        ref: a
      };
      return /* @__PURE__ */ S.cloneElement(r, u);
    }
    return /* @__PURE__ */ E.jsx(S.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ E.jsx(S.Fragment, {
    children: l && /* @__PURE__ */ gd.createPortal(r, l)
  });
}), Ww = fo(/* @__PURE__ */ E.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Uw(e) {
  return ce("MuiChip", e);
}
const ie = de("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Vw = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], Hw = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    iconColor: i,
    onDelete: l,
    clickable: s,
    variant: a
  } = e, u = {
    root: ["root", a, n && "disabled", `size${D(r)}`, `color${D(o)}`, s && "clickable", s && `clickableColor${D(o)}`, l && "deletable", l && `deletableColor${D(o)}`, `${a}${D(o)}`],
    label: ["label", `label${D(r)}`],
    avatar: ["avatar", `avatar${D(r)}`, `avatarColor${D(o)}`],
    icon: ["icon", `icon${D(r)}`, `iconColor${D(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${D(r)}`, `deleteIconColor${D(o)}`, `deleteIcon${D(a)}Color${D(o)}`]
  };
  return he(u, Uw, t);
}, Kw = V("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: o,
      clickable: i,
      onDelete: l,
      size: s,
      variant: a
    } = n;
    return [{
      [`& .${ie.avatar}`]: t.avatar
    }, {
      [`& .${ie.avatar}`]: t[`avatar${D(s)}`]
    }, {
      [`& .${ie.avatar}`]: t[`avatarColor${D(r)}`]
    }, {
      [`& .${ie.icon}`]: t.icon
    }, {
      [`& .${ie.icon}`]: t[`icon${D(s)}`]
    }, {
      [`& .${ie.icon}`]: t[`iconColor${D(o)}`]
    }, {
      [`& .${ie.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${ie.deleteIcon}`]: t[`deleteIcon${D(s)}`]
    }, {
      [`& .${ie.deleteIcon}`]: t[`deleteIconColor${D(r)}`]
    }, {
      [`& .${ie.deleteIcon}`]: t[`deleteIcon${D(a)}Color${D(r)}`]
    }, t.root, t[`size${D(s)}`], t[`color${D(r)}`], i && t.clickable, i && r !== "default" && t[`clickableColor${D(r)})`], l && t.deletable, l && r !== "default" && t[`deletableColor${D(r)}`], t[a], t[`${a}${D(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return y({
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${ie.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ie.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ie.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${ie.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${ie.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${ie.icon}`]: y({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && y({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : n
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${ie.deleteIcon}`]: y({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : st(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : st(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : st(e.palette[t.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (e.vars || e).palette[t.color].contrastText
      }
    })
  }, t.size === "small" && {
    height: 24
  }, t.color !== "default" && {
    backgroundColor: (e.vars || e).palette[t.color].main,
    color: (e.vars || e).palette[t.color].contrastText
  }, t.onDelete && {
    [`&.${ie.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : st(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${ie.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => y({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : st(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${ie.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : st(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${ie.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => y({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${ie.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${ie.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${ie.avatar}`]: {
    marginLeft: 4
  },
  [`& .${ie.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${ie.icon}`]: {
    marginLeft: 4
  },
  [`& .${ie.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${ie.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${ie.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : st(e.palette[t.color].main, 0.7)}`,
  [`&.${ie.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${ie.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : st(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${ie.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : st(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), Gw = V("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${D(r)}`]];
  }
})(({
  ownerState: e
}) => y({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, e.size === "small" && e.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function wp(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const kp = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: l,
    color: s = "default",
    component: a,
    deleteIcon: u,
    disabled: c = !1,
    icon: d,
    label: p,
    onClick: C,
    onDelete: v,
    onKeyDown: x,
    onKeyUp: R,
    size: h = "medium",
    variant: m = "filled",
    tabIndex: f,
    skipFocusWhenDisabled: g = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, b = U(r, Vw), w = S.useRef(null), k = ut(w, n), P = (I) => {
    I.stopPropagation(), v && v(I);
  }, N = (I) => {
    I.currentTarget === I.target && wp(I) && I.preventDefault(), x && x(I);
  }, T = (I) => {
    I.currentTarget === I.target && (v && wp(I) ? v(I) : I.key === "Escape" && w.current && w.current.blur()), R && R(I);
  }, A = l !== !1 && C ? !0 : l, z = A || v ? Yu : a || "div", _ = y({}, r, {
    component: z,
    disabled: c,
    size: h,
    color: s,
    iconColor: /* @__PURE__ */ S.isValidElement(d) && d.props.color || s,
    onDelete: !!v,
    clickable: A,
    variant: m
  }), O = Hw(_), L = z === Yu ? y({
    component: a || "div",
    focusVisibleClassName: O.focusVisible
  }, v && {
    disableRipple: !0
  }) : {};
  let F = null;
  v && (F = u && /* @__PURE__ */ S.isValidElement(u) ? /* @__PURE__ */ S.cloneElement(u, {
    className: H(u.props.className, O.deleteIcon),
    onClick: P
  }) : /* @__PURE__ */ E.jsx(Ww, {
    className: H(O.deleteIcon),
    onClick: P
  }));
  let j = null;
  o && /* @__PURE__ */ S.isValidElement(o) && (j = /* @__PURE__ */ S.cloneElement(o, {
    className: H(O.avatar, o.props.className)
  }));
  let $ = null;
  return d && /* @__PURE__ */ S.isValidElement(d) && ($ = /* @__PURE__ */ S.cloneElement(d, {
    className: H(O.icon, d.props.className)
  })), /* @__PURE__ */ E.jsxs(Kw, y({
    as: z,
    className: H(O.root, i),
    disabled: A && c ? !0 : void 0,
    onClick: C,
    onKeyDown: N,
    onKeyUp: T,
    ref: k,
    tabIndex: g && c ? -1 : f,
    ownerState: _
  }, L, b, {
    children: [j || $, /* @__PURE__ */ E.jsx(Gw, {
      className: H(O.label),
      ownerState: _,
      children: p
    }), F]
  }));
}), Yw = ["onChange", "maxRows", "minRows", "style", "value"];
function el(e) {
  return parseInt(e, 10) || 0;
}
const Qw = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Xw(e) {
  for (const t in e)
    return !1;
  return !0;
}
function bp(e) {
  return Xw(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const qw = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: l,
    value: s
  } = t, a = U(t, Yw), {
    current: u
  } = S.useRef(s != null), c = S.useRef(null), d = ut(n, c), p = S.useRef(null), C = S.useRef(null), v = S.useCallback(() => {
    const f = c.current, g = C.current;
    if (!f || !g)
      return;
    const w = ur(f).getComputedStyle(f);
    if (w.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    g.style.width = w.width, g.value = f.value || t.placeholder || "x", g.value.slice(-1) === `
` && (g.value += " ");
    const k = w.boxSizing, P = el(w.paddingBottom) + el(w.paddingTop), N = el(w.borderBottomWidth) + el(w.borderTopWidth), T = g.scrollHeight;
    g.value = "x";
    const A = g.scrollHeight;
    let z = T;
    i && (z = Math.max(Number(i) * A, z)), o && (z = Math.min(Number(o) * A, z)), z = Math.max(z, A);
    const _ = z + (k === "border-box" ? P + N : 0), O = Math.abs(z - T) <= 1;
    return {
      outerHeightStyle: _,
      overflowing: O
    };
  }, [o, i, t.placeholder]), x = tr(() => {
    const f = c.current, g = v();
    if (!f || !g || bp(g))
      return !1;
    const b = g.outerHeightStyle;
    return p.current != null && p.current !== b;
  }), R = S.useCallback(() => {
    const f = c.current, g = v();
    if (!f || !g || bp(g))
      return;
    const b = g.outerHeightStyle;
    p.current !== b && (p.current = b, f.style.height = `${b}px`), f.style.overflow = g.overflowing ? "hidden" : "";
  }, [v]), h = S.useRef(-1);
  Bn(() => {
    const f = Fm(R), g = c == null ? void 0 : c.current;
    if (!g)
      return;
    const b = ur(g);
    b.addEventListener("resize", f);
    let w;
    return typeof ResizeObserver < "u" && (w = new ResizeObserver(() => {
      x() && (w.unobserve(g), cancelAnimationFrame(h.current), R(), h.current = requestAnimationFrame(() => {
        w.observe(g);
      }));
    }), w.observe(g)), () => {
      f.clear(), cancelAnimationFrame(h.current), b.removeEventListener("resize", f), w && w.disconnect();
    };
  }, [v, R, x]), Bn(() => {
    R();
  });
  const m = (f) => {
    u || R(), r && r(f);
  };
  return /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsx("textarea", y({
      value: s,
      onChange: m,
      ref: d,
      rows: i,
      style: l
    }, a)), /* @__PURE__ */ E.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: C,
      tabIndex: -1,
      style: y({}, Qw.shadow, l, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
function ho({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const qs = /* @__PURE__ */ S.createContext(void 0);
function vr() {
  return S.useContext(qs);
}
function lv(e) {
  return /* @__PURE__ */ E.jsx(_m, y({}, e, {
    defaultTheme: kc,
    themeId: Yr
  }));
}
function Ep(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Zl(e, t = !1) {
  return e && (Ep(e.value) && e.value !== "" || t && Ep(e.defaultValue) && e.defaultValue !== "");
}
function Zw(e) {
  return e.startAdornment;
}
function Jw(e) {
  return ce("MuiInputBase", e);
}
const oo = de("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), ek = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Zs = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${D(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Js = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, tk = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: i,
    focused: l,
    formControl: s,
    fullWidth: a,
    hiddenLabel: u,
    multiline: c,
    readOnly: d,
    size: p,
    startAdornment: C,
    type: v
  } = e, x = {
    root: ["root", `color${D(n)}`, r && "disabled", o && "error", a && "fullWidth", l && "focused", s && "formControl", p && p !== "medium" && `size${D(p)}`, c && "multiline", C && "adornedStart", i && "adornedEnd", u && "hiddenLabel", d && "readOnly"],
    input: ["input", r && "disabled", v === "search" && "inputTypeSearch", c && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", C && "inputAdornedStart", i && "inputAdornedEnd", d && "readOnly"]
  };
  return he(x, Jw, t);
}, ea = V("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Zs
})(({
  theme: e,
  ownerState: t
}) => y({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${oo.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && y({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), ta = V("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Js
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = y({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), o = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return y({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${oo.formControl} &`]: {
      "&::-webkit-input-placeholder": o,
      "&::-moz-placeholder": o,
      // Firefox 19+
      "&:-ms-input-placeholder": o,
      // IE11
      "&::-ms-input-placeholder": o,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${oo.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), nk = /* @__PURE__ */ E.jsx(lv, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), xd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r;
  const o = fe({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: l,
    autoFocus: s,
    className: a,
    components: u = {},
    componentsProps: c = {},
    defaultValue: d,
    disabled: p,
    disableInjectingGlobalStyles: C,
    endAdornment: v,
    fullWidth: x = !1,
    id: R,
    inputComponent: h = "input",
    inputProps: m = {},
    inputRef: f,
    maxRows: g,
    minRows: b,
    multiline: w = !1,
    name: k,
    onBlur: P,
    onChange: N,
    onClick: T,
    onFocus: A,
    onKeyDown: z,
    onKeyUp: _,
    placeholder: O,
    readOnly: L,
    renderSuffix: F,
    rows: j,
    slotProps: $ = {},
    slots: I = {},
    startAdornment: W,
    type: Z = "text",
    value: X
  } = o, ae = U(o, ek), Q = m.value != null ? m.value : X, {
    current: ue
  } = S.useRef(Q != null), te = S.useRef(), Oe = S.useCallback((ye) => {
  }, []), Qe = ut(te, f, m.ref, Oe), [$e, rt] = S.useState(!1), oe = vr(), ve = ho({
    props: o,
    muiFormControl: oe,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ve.focused = oe ? oe.focused : $e, S.useEffect(() => {
    !oe && p && $e && (rt(!1), P && P());
  }, [oe, p, $e, P]);
  const q = oe && oe.onFilled, J = oe && oe.onEmpty, Y = S.useCallback((ye) => {
    Zl(ye) ? q && q() : J && J();
  }, [q, J]);
  Bn(() => {
    ue && Y({
      value: Q
    });
  }, [Q, Y, ue]);
  const Se = (ye) => {
    if (ve.disabled) {
      ye.stopPropagation();
      return;
    }
    A && A(ye), m.onFocus && m.onFocus(ye), oe && oe.onFocus ? oe.onFocus(ye) : rt(!0);
  }, be = (ye) => {
    P && P(ye), m.onBlur && m.onBlur(ye), oe && oe.onBlur ? oe.onBlur(ye) : rt(!1);
  }, Xe = (ye, ...G) => {
    if (!ue) {
      const fn = ye.target || te.current;
      if (fn == null)
        throw new Error(ar(1));
      Y({
        value: fn.value
      });
    }
    m.onChange && m.onChange(ye, ...G), N && N(ye, ...G);
  };
  S.useEffect(() => {
    Y(te.current);
  }, []);
  const Ve = (ye) => {
    te.current && ye.currentTarget === ye.target && te.current.focus(), T && T(ye);
  };
  let Be = h, ne = m;
  w && Be === "input" && (j ? ne = y({
    type: void 0,
    minRows: j,
    maxRows: j
  }, ne) : ne = y({
    type: void 0,
    maxRows: g,
    minRows: b
  }, ne), Be = qw);
  const qe = (ye) => {
    Y(ye.animationName === "mui-auto-fill-cancel" ? te.current : {
      value: "x"
    });
  };
  S.useEffect(() => {
    oe && oe.setAdornedStart(!!W);
  }, [oe, W]);
  const He = y({}, o, {
    color: ve.color || "primary",
    disabled: ve.disabled,
    endAdornment: v,
    error: ve.error,
    focused: ve.focused,
    formControl: oe,
    fullWidth: x,
    hiddenLabel: ve.hiddenLabel,
    multiline: w,
    size: ve.size,
    startAdornment: W,
    type: Z
  }), Ee = tk(He), en = I.root || u.Root || ea, bn = $.root || c.root || {}, dn = I.input || u.Input || ta;
  return ne = y({}, ne, (r = $.input) != null ? r : c.input), /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [!C && nk, /* @__PURE__ */ E.jsxs(en, y({}, bn, !kl(en) && {
      ownerState: y({}, He, bn.ownerState)
    }, {
      ref: n,
      onClick: Ve
    }, ae, {
      className: H(Ee.root, bn.className, a, L && "MuiInputBase-readOnly"),
      children: [W, /* @__PURE__ */ E.jsx(qs.Provider, {
        value: null,
        children: /* @__PURE__ */ E.jsx(dn, y({
          ownerState: He,
          "aria-invalid": ve.error,
          "aria-describedby": i,
          autoComplete: l,
          autoFocus: s,
          defaultValue: d,
          disabled: ve.disabled,
          id: R,
          onAnimationStart: qe,
          name: k,
          placeholder: O,
          readOnly: L,
          required: ve.required,
          rows: j,
          value: Q,
          onKeyDown: z,
          onKeyUp: _,
          type: Z
        }, ne, !kl(dn) && {
          as: Be,
          ownerState: y({}, He, ne.ownerState)
        }, {
          ref: Qe,
          className: H(Ee.input, ne.className, L && "MuiInputBase-readOnly"),
          onBlur: be,
          onChange: Xe,
          onFocus: Se
        }))
      }), v, F ? F(y({}, ve, {
        startAdornment: W
      })) : null]
    }))]
  });
});
function rk(e) {
  return ce("MuiInput", e);
}
const $o = y({}, oo, de("MuiInput", ["root", "underline", "input"]));
function ok(e) {
  return ce("MuiOutlinedInput", e);
}
const Rn = y({}, oo, de("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
function ik(e) {
  return ce("MuiFilledInput", e);
}
const Yn = y({}, oo, de("MuiFilledInput", ["root", "underline", "input"])), lk = fo(/* @__PURE__ */ E.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), sk = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], ak = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, uk = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = bc(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: l = !0,
    children: s,
    easing: a,
    in: u,
    onEnter: c,
    onEntered: d,
    onEntering: p,
    onExit: C,
    onExited: v,
    onExiting: x,
    style: R,
    timeout: h = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = cn
  } = t, f = U(t, sk), g = S.useRef(null), b = ut(g, Pi(s), n), w = (O) => (L) => {
    if (O) {
      const F = g.current;
      L === void 0 ? O(F) : O(F, L);
    }
  }, k = w(p), P = w((O, L) => {
    ov(O);
    const F = ql({
      style: R,
      timeout: h,
      easing: a
    }, {
      mode: "enter"
    });
    O.style.webkitTransition = r.transitions.create("opacity", F), O.style.transition = r.transitions.create("opacity", F), c && c(O, L);
  }), N = w(d), T = w(x), A = w((O) => {
    const L = ql({
      style: R,
      timeout: h,
      easing: a
    }, {
      mode: "exit"
    });
    O.style.webkitTransition = r.transitions.create("opacity", L), O.style.transition = r.transitions.create("opacity", L), C && C(O);
  }), z = w(v), _ = (O) => {
    i && i(g.current, O);
  };
  return /* @__PURE__ */ E.jsx(m, y({
    appear: l,
    in: u,
    nodeRef: g,
    onEnter: P,
    onEntered: N,
    onEntering: k,
    onExit: A,
    onExited: z,
    onExiting: T,
    addEndListener: _,
    timeout: h
  }, f, {
    children: (O, L) => /* @__PURE__ */ S.cloneElement(s, y({
      style: y({
        opacity: 0,
        visibility: O === "exited" && !u ? "hidden" : void 0
      }, ak[O], R, s.props.style),
      ref: b
    }, L))
  }));
});
function ck(e) {
  return ce("MuiBackdrop", e);
}
de("MuiBackdrop", ["root", "invisible"]);
const dk = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], fk = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return he({
    root: ["root", n && "invisible"]
  }, ck, t);
}, pk = V("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => y({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), mk = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i;
  const l = fe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: s,
    className: a,
    component: u = "div",
    components: c = {},
    componentsProps: d = {},
    invisible: p = !1,
    open: C,
    slotProps: v = {},
    slots: x = {},
    TransitionComponent: R = uk,
    transitionDuration: h
  } = l, m = U(l, dk), f = y({}, l, {
    component: u,
    invisible: p
  }), g = fk(f), b = (r = v.root) != null ? r : d.root;
  return /* @__PURE__ */ E.jsx(R, y({
    in: C,
    timeout: h
  }, m, {
    children: /* @__PURE__ */ E.jsx(pk, y({
      "aria-hidden": !0
    }, b, {
      as: (o = (i = x.root) != null ? i : c.Root) != null ? o : u,
      className: H(g.root, a, b == null ? void 0 : b.className),
      ownerState: y({}, f, b == null ? void 0 : b.ownerState),
      classes: g,
      ref: n,
      children: s
    }))
  }));
}), hk = de("MuiBox", ["root"]), gk = wc(), Qn = Q0({
  themeId: Yr,
  defaultTheme: gk,
  defaultClassName: hk.root,
  generateClassName: Mm.generate
});
function vk(e) {
  return ce("MuiButton", e);
}
const tl = de("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), yk = /* @__PURE__ */ S.createContext({}), xk = /* @__PURE__ */ S.createContext(void 0), Sk = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Ck = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: l
  } = e, s = {
    root: ["root", i, `${i}${D(t)}`, `size${D(o)}`, `${i}Size${D(o)}`, `color${D(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${D(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${D(o)}`]
  }, a = he(s, vk, l);
  return y({}, l, a);
}, sv = (e) => y({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), wk = V(Yu, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${D(n.color)}`], t[`size${D(n.size)}`], t[`${n.variant}Size${D(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return y({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": y({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": y({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${tl.focusVisible}`]: y({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${tl.disabled}`]: y({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${st(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${tl.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${tl.disabled}`]: {
    boxShadow: "none"
  }
}), kk = V("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${D(n.size)}`]];
  }
})(({
  ownerState: e
}) => y({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, sv(e))), bk = V("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${D(n.size)}`]];
  }
})(({
  ownerState: e
}) => y({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, sv(e))), Ek = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = S.useContext(yk), o = S.useContext(xk), i = ei(r, t), l = fe({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: a = "primary",
    component: u = "button",
    className: c,
    disabled: d = !1,
    disableElevation: p = !1,
    disableFocusRipple: C = !1,
    endIcon: v,
    focusVisibleClassName: x,
    fullWidth: R = !1,
    size: h = "medium",
    startIcon: m,
    type: f,
    variant: g = "text"
  } = l, b = U(l, Sk), w = y({}, l, {
    color: a,
    component: u,
    disabled: d,
    disableElevation: p,
    disableFocusRipple: C,
    fullWidth: R,
    size: h,
    type: f,
    variant: g
  }), k = Ck(w), P = m && /* @__PURE__ */ E.jsx(kk, {
    className: k.startIcon,
    ownerState: w,
    children: m
  }), N = v && /* @__PURE__ */ E.jsx(bk, {
    className: k.endIcon,
    ownerState: w,
    children: v
  }), T = o || "";
  return /* @__PURE__ */ E.jsxs(wk, y({
    ownerState: w,
    className: H(r.className, k.root, c, T),
    component: u,
    disabled: d,
    focusRipple: !C,
    focusVisibleClassName: H(k.focusVisible, x),
    ref: n,
    type: f
  }, b, {
    classes: k,
    children: [P, s, N]
  }));
});
function Rk(e) {
  return ce("MuiCard", e);
}
de("MuiCard", ["root"]);
const Pk = ["className", "raised"], $k = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, Rk, t);
}, Tk = V(iv, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  overflow: "hidden"
})), _k = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1
  } = r, l = U(r, Pk), s = y({}, r, {
    raised: i
  }), a = $k(s);
  return /* @__PURE__ */ E.jsx(Tk, y({
    className: H(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: s
  }, l));
});
function Mk(e) {
  return ce("MuiCardContent", e);
}
de("MuiCardContent", ["root"]);
const Ok = ["className", "component"], Ik = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, Mk, t);
}, Nk = V("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
})), zk = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div"
  } = r, l = U(r, Ok), s = y({}, r, {
    component: i
  }), a = Ik(s);
  return /* @__PURE__ */ E.jsx(Nk, y({
    as: i,
    className: H(a.root, o),
    ownerState: s,
    ref: n
  }, l));
});
function Lk(e) {
  return ce("MuiCardMedia", e);
}
de("MuiCardMedia", ["root", "media", "img"]);
const Fk = ["children", "className", "component", "image", "src", "style"], Ak = (e) => {
  const {
    classes: t,
    isMediaComponent: n,
    isImageComponent: r
  } = e;
  return he({
    root: ["root", n && "media", r && "img"]
  }, Lk, t);
}, jk = V("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      isMediaComponent: r,
      isImageComponent: o
    } = n;
    return [t.root, r && t.media, o && t.img];
  }
})(({
  ownerState: e
}) => y({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}, e.isMediaComponent && {
  width: "100%"
}, e.isImageComponent && {
  // ⚠️ object-fit is not supported by IE11.
  objectFit: "cover"
})), Dk = ["video", "audio", "picture", "iframe", "img"], Bk = ["picture", "img"], Wk = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiCardMedia"
  }), {
    children: o,
    className: i,
    component: l = "div",
    image: s,
    src: a,
    style: u
  } = r, c = U(r, Fk), d = Dk.indexOf(l) !== -1, p = !d && s ? y({
    backgroundImage: `url("${s}")`
  }, u) : u, C = y({}, r, {
    component: l,
    isMediaComponent: d,
    isImageComponent: Bk.indexOf(l) !== -1
  }), v = Ak(C);
  return /* @__PURE__ */ E.jsx(jk, y({
    className: H(v.root, i),
    as: l,
    role: !d && s ? "img" : void 0,
    ref: n,
    style: p,
    ownerState: C,
    src: d ? s || a : void 0
  }, c, {
    children: o
  }));
}), Uk = G1({
  createStyledComponent: V("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[`maxWidth${D(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => fe({
    props: e,
    name: "MuiContainer"
  })
}), Vk = (e, t) => y({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%"
}, t && !e.vars && {
  colorScheme: e.palette.mode
}), Hk = (e) => y({
  color: (e.vars || e).palette.text.primary
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Kk = (e, t = !1) => {
  var n;
  const r = {};
  t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([l, s]) => {
    var a;
    r[e.getColorSchemeSelector(l).replace(/\s*&/, "")] = {
      colorScheme: (a = s.palette) == null ? void 0 : a.mode
    };
  });
  let o = y({
    html: Vk(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: y({
      margin: 0
    }, Hk(e), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    })
  }, r);
  const i = (n = e.components) == null || (n = n.MuiCssBaseline) == null ? void 0 : n.styleOverrides;
  return i && (o = [o, i]), o;
};
function Gk(e) {
  const t = fe({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsx(lv, {
      styles: (o) => Kk(o, r)
    }), n]
  });
}
function Yk(e) {
  const t = Rt(e);
  return t.body === e ? ur(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Yo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Rp(e) {
  return parseInt(ur(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Qk(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Pp(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (l) => {
    const s = i.indexOf(l) === -1, a = !Qk(l);
    s && a && Yo(l, o);
  });
}
function Aa(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Xk(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Yk(r)) {
      const l = Dm(Rt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Rp(r) + l}px`;
      const s = Rt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${Rp(a) + l}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = Rt(r).body;
    else {
      const l = r.parentElement, s = ur(r);
      i = (l == null ? void 0 : l.nodeName) === "HTML" && s.getComputedStyle(l).overflowY === "scroll" ? l : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: l,
      property: s
    }) => {
      i ? l.style.setProperty(s, i) : l.style.removeProperty(s);
    });
  };
}
function qk(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Zk {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Yo(t.modalRef, !1);
    const o = qk(n);
    Pp(n, t.mount, t.modalRef, o, !0);
    const i = Aa(this.containers, (l) => l.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Aa(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = Xk(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Aa(this.containers, (l) => l.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Yo(t.modalRef, n), Pp(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const l = i.modals[i.modals.length - 1];
      l.modalRef && Yo(l.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Jk = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function e2(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function t2(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function n2(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || t2(e));
}
function r2(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Jk)).forEach((r, o) => {
    const i = e2(r);
    i === -1 || !n2(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function o2() {
  return !0;
}
function i2(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = r2,
    isEnabled: l = o2,
    open: s
  } = e, a = S.useRef(!1), u = S.useRef(null), c = S.useRef(null), d = S.useRef(null), p = S.useRef(null), C = S.useRef(!1), v = S.useRef(null), x = ut(Pi(t), v), R = S.useRef(null);
  S.useEffect(() => {
    !s || !v.current || (C.current = !n);
  }, [n, s]), S.useEffect(() => {
    if (!s || !v.current)
      return;
    const f = Rt(v.current);
    return v.current.contains(f.activeElement) || (v.current.hasAttribute("tabIndex") || v.current.setAttribute("tabIndex", "-1"), C.current && v.current.focus()), () => {
      o || (d.current && d.current.focus && (a.current = !0, d.current.focus()), d.current = null);
    };
  }, [s]), S.useEffect(() => {
    if (!s || !v.current)
      return;
    const f = Rt(v.current), g = (k) => {
      R.current = k, !(r || !l() || k.key !== "Tab") && f.activeElement === v.current && k.shiftKey && (a.current = !0, c.current && c.current.focus());
    }, b = () => {
      const k = v.current;
      if (k === null)
        return;
      if (!f.hasFocus() || !l() || a.current) {
        a.current = !1;
        return;
      }
      if (k.contains(f.activeElement) || r && f.activeElement !== u.current && f.activeElement !== c.current)
        return;
      if (f.activeElement !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!C.current)
        return;
      let P = [];
      if ((f.activeElement === u.current || f.activeElement === c.current) && (P = i(v.current)), P.length > 0) {
        var N, T;
        const A = !!((N = R.current) != null && N.shiftKey && ((T = R.current) == null ? void 0 : T.key) === "Tab"), z = P[0], _ = P[P.length - 1];
        typeof z != "string" && typeof _ != "string" && (A ? _.focus() : z.focus());
      } else
        k.focus();
    };
    f.addEventListener("focusin", b), f.addEventListener("keydown", g, !0);
    const w = setInterval(() => {
      f.activeElement && f.activeElement.tagName === "BODY" && b();
    }, 50);
    return () => {
      clearInterval(w), f.removeEventListener("focusin", b), f.removeEventListener("keydown", g, !0);
    };
  }, [n, r, o, l, s, i]);
  const h = (f) => {
    d.current === null && (d.current = f.relatedTarget), C.current = !0, p.current = f.target;
    const g = t.props.onFocus;
    g && g(f);
  }, m = (f) => {
    d.current === null && (d.current = f.relatedTarget), C.current = !0;
  };
  return /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsx("div", {
      tabIndex: s ? 0 : -1,
      onFocus: m,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ S.cloneElement(t, {
      ref: x,
      onFocus: h
    }), /* @__PURE__ */ E.jsx("div", {
      tabIndex: s ? 0 : -1,
      onFocus: m,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function l2(e) {
  return typeof e == "function" ? e() : e;
}
function s2(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const a2 = new Zk();
function u2(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = a2,
    closeAfterTransition: i = !1,
    onTransitionEnter: l,
    onTransitionExited: s,
    children: a,
    onClose: u,
    open: c,
    rootRef: d
  } = e, p = S.useRef({}), C = S.useRef(null), v = S.useRef(null), x = ut(v, d), [R, h] = S.useState(!c), m = s2(a);
  let f = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (f = !1);
  const g = () => Rt(C.current), b = () => (p.current.modalRef = v.current, p.current.mount = C.current, p.current), w = () => {
    o.mount(b(), {
      disableScrollLock: r
    }), v.current && (v.current.scrollTop = 0);
  }, k = tr(() => {
    const F = l2(t) || g().body;
    o.add(b(), F), v.current && w();
  }), P = S.useCallback(() => o.isTopModal(b()), [o]), N = tr((F) => {
    C.current = F, F && (c && P() ? w() : v.current && Yo(v.current, f));
  }), T = S.useCallback(() => {
    o.remove(b(), f);
  }, [f, o]);
  S.useEffect(() => () => {
    T();
  }, [T]), S.useEffect(() => {
    c ? k() : (!m || !i) && T();
  }, [c, T, m, i, k]);
  const A = (F) => (j) => {
    var $;
    ($ = F.onKeyDown) == null || $.call(F, j), !(j.key !== "Escape" || j.which === 229 || // Wait until IME is settled.
    !P()) && (n || (j.stopPropagation(), u && u(j, "escapeKeyDown")));
  }, z = (F) => (j) => {
    var $;
    ($ = F.onClick) == null || $.call(F, j), j.target === j.currentTarget && u && u(j, "backdropClick");
  };
  return {
    getRootProps: (F = {}) => {
      const j = Bm(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const $ = y({}, j, F);
      return y({
        role: "presentation"
      }, $, {
        onKeyDown: A($),
        ref: x
      });
    },
    getBackdropProps: (F = {}) => {
      const j = F;
      return y({
        "aria-hidden": !0
      }, j, {
        onClick: z(j),
        open: c
      });
    },
    getTransitionProps: () => {
      const F = () => {
        h(!1), l && l();
      }, j = () => {
        h(!0), s && s(), i && T();
      };
      return {
        onEnter: Yd(F, a == null ? void 0 : a.props.onEnter),
        onExited: Yd(j, a == null ? void 0 : a.props.onExited)
      };
    },
    rootRef: x,
    portalRef: N,
    isTopModal: P,
    exited: R,
    hasTransition: m
  };
}
function c2(e) {
  return ce("MuiModal", e);
}
de("MuiModal", ["root", "hidden", "backdrop"]);
const d2 = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], f2 = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return he({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, c2, r);
}, p2 = V("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), m2 = V(mk, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), h2 = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i, l, s, a;
  const u = fe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: c = m2,
    BackdropProps: d,
    className: p,
    closeAfterTransition: C = !1,
    children: v,
    container: x,
    component: R,
    components: h = {},
    componentsProps: m = {},
    disableAutoFocus: f = !1,
    disableEnforceFocus: g = !1,
    disableEscapeKeyDown: b = !1,
    disablePortal: w = !1,
    disableRestoreFocus: k = !1,
    disableScrollLock: P = !1,
    hideBackdrop: N = !1,
    keepMounted: T = !1,
    onBackdropClick: A,
    open: z,
    slotProps: _,
    slots: O
    // eslint-disable-next-line react/prop-types
  } = u, L = U(u, d2), F = y({}, u, {
    closeAfterTransition: C,
    disableAutoFocus: f,
    disableEnforceFocus: g,
    disableEscapeKeyDown: b,
    disablePortal: w,
    disableRestoreFocus: k,
    disableScrollLock: P,
    hideBackdrop: N,
    keepMounted: T
  }), {
    getRootProps: j,
    getBackdropProps: $,
    getTransitionProps: I,
    portalRef: W,
    isTopModal: Z,
    exited: X,
    hasTransition: ae
  } = u2(y({}, F, {
    rootRef: n
  })), Q = y({}, F, {
    exited: X
  }), ue = f2(Q), te = {};
  if (v.props.tabIndex === void 0 && (te.tabIndex = "-1"), ae) {
    const {
      onEnter: q,
      onExited: J
    } = I();
    te.onEnter = q, te.onExited = J;
  }
  const Oe = (r = (o = O == null ? void 0 : O.root) != null ? o : h.Root) != null ? r : p2, Qe = (i = (l = O == null ? void 0 : O.backdrop) != null ? l : h.Backdrop) != null ? i : c, $e = (s = _ == null ? void 0 : _.root) != null ? s : m.root, rt = (a = _ == null ? void 0 : _.backdrop) != null ? a : m.backdrop, oe = Xr({
    elementType: Oe,
    externalSlotProps: $e,
    externalForwardedProps: L,
    getSlotProps: j,
    additionalProps: {
      ref: n,
      as: R
    },
    ownerState: Q,
    className: H(p, $e == null ? void 0 : $e.className, ue == null ? void 0 : ue.root, !Q.open && Q.exited && (ue == null ? void 0 : ue.hidden))
  }), ve = Xr({
    elementType: Qe,
    externalSlotProps: rt,
    additionalProps: d,
    getSlotProps: (q) => $(y({}, q, {
      onClick: (J) => {
        A && A(J), q != null && q.onClick && q.onClick(J);
      }
    })),
    className: H(rt == null ? void 0 : rt.className, d == null ? void 0 : d.className, ue == null ? void 0 : ue.backdrop),
    ownerState: Q
  });
  return !T && !z && (!ae || X) ? null : /* @__PURE__ */ E.jsx(Bw, {
    ref: W,
    container: x,
    disablePortal: w,
    children: /* @__PURE__ */ E.jsxs(Oe, y({}, oe, {
      children: [!N && c ? /* @__PURE__ */ E.jsx(Qe, y({}, ve)) : null, /* @__PURE__ */ E.jsx(i2, {
        disableEnforceFocus: g,
        disableAutoFocus: f,
        disableRestoreFocus: k,
        isEnabled: Z,
        open: z,
        children: /* @__PURE__ */ S.cloneElement(v, te)
      })]
    }))
  });
}), g2 = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], v2 = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = he({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, ik, t);
  return y({}, t, o);
}, y2 = V(ea, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Zs(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", l = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return y({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : l,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${Yn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${Yn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Yn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Yn.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Yn.disabled}, .${Yn.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Yn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && y({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), x2 = V(ta, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Js
})(({
  theme: e,
  ownerState: t
}) => y({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), Sd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i, l;
  const s = fe({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: a = {},
    componentsProps: u,
    fullWidth: c = !1,
    // declare here to prevent spreading to DOM
    inputComponent: d = "input",
    multiline: p = !1,
    slotProps: C,
    slots: v = {},
    type: x = "text"
  } = s, R = U(s, g2), h = y({}, s, {
    fullWidth: c,
    inputComponent: d,
    multiline: p,
    type: x
  }), m = v2(s), f = {
    root: {
      ownerState: h
    },
    input: {
      ownerState: h
    }
  }, g = C ?? u ? Et(f, C ?? u) : f, b = (r = (o = v.root) != null ? o : a.Root) != null ? r : y2, w = (i = (l = v.input) != null ? l : a.Input) != null ? i : x2;
  return /* @__PURE__ */ E.jsx(xd, y({
    slots: {
      root: b,
      input: w
    },
    componentsProps: g,
    fullWidth: c,
    inputComponent: d,
    multiline: p,
    ref: n,
    type: x
  }, R, {
    classes: m
  }));
});
Sd.muiName = "Input";
function S2(e) {
  return ce("MuiFormControl", e);
}
de("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const C2 = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], w2 = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${D(n)}`, r && "fullWidth"]
  };
  return he(o, S2, t);
}, k2 = V("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => y({}, t.root, t[`margin${D(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => y({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), b2 = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: l = "primary",
    component: s = "div",
    disabled: a = !1,
    error: u = !1,
    focused: c,
    fullWidth: d = !1,
    hiddenLabel: p = !1,
    margin: C = "none",
    required: v = !1,
    size: x = "medium",
    variant: R = "outlined"
  } = r, h = U(r, C2), m = y({}, r, {
    color: l,
    component: s,
    disabled: a,
    error: u,
    fullWidth: d,
    hiddenLabel: p,
    margin: C,
    required: v,
    size: x,
    variant: R
  }), f = w2(m), [g, b] = S.useState(() => {
    let _ = !1;
    return o && S.Children.forEach(o, (O) => {
      if (!ua(O, ["Input", "Select"]))
        return;
      const L = ua(O, ["Select"]) ? O.props.input : O;
      L && Zw(L.props) && (_ = !0);
    }), _;
  }), [w, k] = S.useState(() => {
    let _ = !1;
    return o && S.Children.forEach(o, (O) => {
      ua(O, ["Input", "Select"]) && (Zl(O.props, !0) || Zl(O.props.inputProps, !0)) && (_ = !0);
    }), _;
  }), [P, N] = S.useState(!1);
  a && P && N(!1);
  const T = c !== void 0 && !a ? c : P;
  let A;
  const z = S.useMemo(() => ({
    adornedStart: g,
    setAdornedStart: b,
    color: l,
    disabled: a,
    error: u,
    filled: w,
    focused: T,
    fullWidth: d,
    hiddenLabel: p,
    size: x,
    onBlur: () => {
      N(!1);
    },
    onEmpty: () => {
      k(!1);
    },
    onFilled: () => {
      k(!0);
    },
    onFocus: () => {
      N(!0);
    },
    registerEffect: A,
    required: v,
    variant: R
  }), [g, l, a, u, w, T, d, p, A, v, x, R]);
  return /* @__PURE__ */ E.jsx(qs.Provider, {
    value: z,
    children: /* @__PURE__ */ E.jsx(k2, y({
      as: s,
      ownerState: m,
      className: H(f.root, i),
      ref: n
    }, h, {
      children: o
    }))
  });
});
function E2(e) {
  return ce("MuiFormHelperText", e);
}
const $p = de("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Tp;
const R2 = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], P2 = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: i,
    filled: l,
    focused: s,
    required: a
  } = e, u = {
    root: ["root", o && "disabled", i && "error", r && `size${D(r)}`, n && "contained", s && "focused", l && "filled", a && "required"]
  };
  return he(u, E2, t);
}, $2 = V("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${D(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${$p.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${$p.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), T2 = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: l = "p"
  } = r, s = U(r, R2), a = vr(), u = ho({
    props: r,
    muiFormControl: a,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), c = y({}, r, {
    component: l,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), d = P2(c);
  return /* @__PURE__ */ E.jsx($2, y({
    as: l,
    ownerState: c,
    className: H(d.root, i),
    ref: n
  }, s, {
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Tp || (Tp = /* @__PURE__ */ E.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  }));
});
function _2(e) {
  return ce("MuiFormLabel", e);
}
const Qo = de("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), M2 = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], O2 = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: l,
    required: s
  } = e, a = {
    root: ["root", `color${D(n)}`, o && "disabled", i && "error", l && "filled", r && "focused", s && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return he(a, _2, t);
}, I2 = V("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => y({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => y({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${Qo.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Qo.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Qo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), N2 = V("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Qo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), z2 = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    component: l = "label"
  } = r, s = U(r, M2), a = vr(), u = ho({
    props: r,
    muiFormControl: a,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), c = y({}, r, {
    color: u.color || "primary",
    component: l,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), d = O2(c);
  return /* @__PURE__ */ E.jsxs(I2, y({
    as: l,
    ownerState: c,
    className: H(d.root, i),
    ref: n
  }, s, {
    children: [o, u.required && /* @__PURE__ */ E.jsxs(N2, {
      ownerState: c,
      "aria-hidden": !0,
      className: d.asterisk,
      children: [" ", "*"]
    })]
  }));
}), _p = /* @__PURE__ */ S.createContext();
function L2(e) {
  return ce("MuiGrid", e);
}
const F2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], A2 = ["column-reverse", "column", "row-reverse", "row"], j2 = ["nowrap", "wrap-reverse", "wrap"], To = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], yi = de("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...F2.map((e) => `spacing-xs-${e}`),
  // direction values
  ...A2.map((e) => `direction-xs-${e}`),
  // wrap values
  ...j2.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...To.map((e) => `grid-xs-${e}`),
  ...To.map((e) => `grid-sm-${e}`),
  ...To.map((e) => `grid-md-${e}`),
  ...To.map((e) => `grid-lg-${e}`),
  ...To.map((e) => `grid-xl-${e}`)
]), D2 = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function Gr(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function B2({
  theme: e,
  ownerState: t
}) {
  let n;
  return e.breakpoints.keys.reduce((r, o) => {
    let i = {};
    if (t[o] && (n = t[o]), !n)
      return r;
    if (n === !0)
      i = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (n === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const l = ms({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), s = typeof l == "object" ? l[o] : l;
      if (s == null)
        return r;
      const a = `${Math.round(n / s * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const c = e.spacing(t.columnSpacing);
        if (c !== "0px") {
          const d = `calc(${a} + ${Gr(c)})`;
          u = {
            flexBasis: d,
            maxWidth: d
          };
        }
      }
      i = y({
        flexBasis: a,
        flexGrow: 0,
        maxWidth: a
      }, u);
    }
    return e.breakpoints.values[o] === 0 ? Object.assign(r, i) : r[e.breakpoints.up(o)] = i, r;
  }, {});
}
function W2({
  theme: e,
  ownerState: t
}) {
  const n = ms({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return jt({
    theme: e
  }, n, (r) => {
    const o = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (o[`& > .${yi.item}`] = {
      maxWidth: "none"
    }), o;
  });
}
function av({
  breakpoints: e,
  values: t
}) {
  let n = "";
  Object.keys(t).forEach((o) => {
    n === "" && t[o] !== 0 && (n = o);
  });
  const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return r.slice(0, r.indexOf(n));
}
function U2({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    rowSpacing: r
  } = t;
  let o = {};
  if (n && r !== 0) {
    const i = ms({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let l;
    typeof i == "object" && (l = av({
      breakpoints: e.breakpoints.values,
      values: i
    })), o = jt({
      theme: e
    }, i, (s, a) => {
      var u;
      const c = e.spacing(s);
      return c !== "0px" ? {
        marginTop: `-${Gr(c)}`,
        [`& > .${yi.item}`]: {
          paddingTop: Gr(c)
        }
      } : (u = l) != null && u.includes(a) ? {} : {
        marginTop: 0,
        [`& > .${yi.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return o;
}
function V2({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    columnSpacing: r
  } = t;
  let o = {};
  if (n && r !== 0) {
    const i = ms({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let l;
    typeof i == "object" && (l = av({
      breakpoints: e.breakpoints.values,
      values: i
    })), o = jt({
      theme: e
    }, i, (s, a) => {
      var u;
      const c = e.spacing(s);
      return c !== "0px" ? {
        width: `calc(100% + ${Gr(c)})`,
        marginLeft: `-${Gr(c)}`,
        [`& > .${yi.item}`]: {
          paddingLeft: Gr(c)
        }
      } : (u = l) != null && u.includes(a) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${yi.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return o;
}
function H2(e, t, n = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return t.forEach((o) => {
    const i = e[o];
    Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`]);
  }), r;
}
const K2 = V("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      container: r,
      direction: o,
      item: i,
      spacing: l,
      wrap: s,
      zeroMinWidth: a,
      breakpoints: u
    } = n;
    let c = [];
    r && (c = H2(l, u, t));
    const d = [];
    return u.forEach((p) => {
      const C = n[p];
      C && d.push(t[`grid-${p}-${String(C)}`]);
    }), [t.root, r && t.container, i && t.item, a && t.zeroMinWidth, ...c, o !== "row" && t[`direction-xs-${String(o)}`], s !== "wrap" && t[`wrap-xs-${String(s)}`], ...d];
  }
})(({
  ownerState: e
}) => y({
  boxSizing: "border-box"
}, e.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, e.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, e.zeroMinWidth && {
  minWidth: 0
}, e.wrap !== "wrap" && {
  flexWrap: e.wrap
}), W2, U2, V2, B2);
function G2(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return t.forEach((r) => {
    const o = e[r];
    if (Number(o) > 0) {
      const i = `spacing-${r}-${String(o)}`;
      n.push(i);
    }
  }), n;
}
const Y2 = (e) => {
  const {
    classes: t,
    container: n,
    direction: r,
    item: o,
    spacing: i,
    wrap: l,
    zeroMinWidth: s,
    breakpoints: a
  } = e;
  let u = [];
  n && (u = G2(i, a));
  const c = [];
  a.forEach((p) => {
    const C = e[p];
    C && c.push(`grid-${p}-${String(C)}`);
  });
  const d = {
    root: ["root", n && "container", o && "item", s && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, l !== "wrap" && `wrap-xs-${String(l)}`, ...c]
  };
  return he(d, L2, t);
}, Mp = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: o
  } = bc(), i = ws(r), {
    className: l,
    columns: s,
    columnSpacing: a,
    component: u = "div",
    container: c = !1,
    direction: d = "row",
    item: p = !1,
    rowSpacing: C,
    spacing: v = 0,
    wrap: x = "wrap",
    zeroMinWidth: R = !1
  } = i, h = U(i, D2), m = C || v, f = a || v, g = S.useContext(_p), b = c ? s || 12 : g, w = {}, k = y({}, h);
  o.keys.forEach((T) => {
    h[T] != null && (w[T] = h[T], delete k[T]);
  });
  const P = y({}, i, {
    columns: b,
    container: c,
    direction: d,
    item: p,
    rowSpacing: m,
    columnSpacing: f,
    wrap: x,
    zeroMinWidth: R,
    spacing: v
  }, w, {
    breakpoints: o.keys
  }), N = Y2(P);
  return /* @__PURE__ */ E.jsx(_p.Provider, {
    value: b,
    children: /* @__PURE__ */ E.jsx(K2, y({
      ownerState: P,
      className: H(N.root, l),
      as: u,
      ref: n
    }, k))
  });
}), Q2 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Qu(e) {
  return `scale(${e}, ${e ** 2})`;
}
const X2 = {
  entering: {
    opacity: 1,
    transform: Qu(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, ja = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), uv = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: l,
    in: s,
    onEnter: a,
    onEntered: u,
    onEntering: c,
    onExit: d,
    onExited: p,
    onExiting: C,
    style: v,
    timeout: x = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = cn
  } = t, h = U(t, Q2), m = Am(), f = S.useRef(), g = bc(), b = S.useRef(null), w = ut(b, Pi(i), n), k = (L) => (F) => {
    if (L) {
      const j = b.current;
      F === void 0 ? L(j) : L(j, F);
    }
  }, P = k(c), N = k((L, F) => {
    ov(L);
    const {
      duration: j,
      delay: $,
      easing: I
    } = ql({
      style: v,
      timeout: x,
      easing: l
    }, {
      mode: "enter"
    });
    let W;
    x === "auto" ? (W = g.transitions.getAutoHeightDuration(L.clientHeight), f.current = W) : W = j, L.style.transition = [g.transitions.create("opacity", {
      duration: W,
      delay: $
    }), g.transitions.create("transform", {
      duration: ja ? W : W * 0.666,
      delay: $,
      easing: I
    })].join(","), a && a(L, F);
  }), T = k(u), A = k(C), z = k((L) => {
    const {
      duration: F,
      delay: j,
      easing: $
    } = ql({
      style: v,
      timeout: x,
      easing: l
    }, {
      mode: "exit"
    });
    let I;
    x === "auto" ? (I = g.transitions.getAutoHeightDuration(L.clientHeight), f.current = I) : I = F, L.style.transition = [g.transitions.create("opacity", {
      duration: I,
      delay: j
    }), g.transitions.create("transform", {
      duration: ja ? I : I * 0.666,
      delay: ja ? j : j || I * 0.333,
      easing: $
    })].join(","), L.style.opacity = 0, L.style.transform = Qu(0.75), d && d(L);
  }), _ = k(p), O = (L) => {
    x === "auto" && m.start(f.current || 0, L), r && r(b.current, L);
  };
  return /* @__PURE__ */ E.jsx(R, y({
    appear: o,
    in: s,
    nodeRef: b,
    onEnter: N,
    onEntered: T,
    onEntering: P,
    onExit: z,
    onExited: _,
    onExiting: A,
    addEndListener: O,
    timeout: x === "auto" ? null : x
  }, h, {
    children: (L, F) => /* @__PURE__ */ S.cloneElement(i, y({
      style: y({
        opacity: 0,
        transform: Qu(0.75),
        visibility: L === "exited" && !s ? "hidden" : void 0
      }, X2[L], v, i.props.style),
      ref: w
    }, F))
  }));
});
uv.muiSupportAuto = !0;
const q2 = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], Z2 = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = he({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, rk, t);
  return y({}, t, o);
}, J2 = V(ea, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Zs(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), y({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${$o.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${$o.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${$o.disabled}, .${$o.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${$o.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), eb = V(ta, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Js
})({}), Cd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i, l;
  const s = fe({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: a,
    components: u = {},
    componentsProps: c,
    fullWidth: d = !1,
    inputComponent: p = "input",
    multiline: C = !1,
    slotProps: v,
    slots: x = {},
    type: R = "text"
  } = s, h = U(s, q2), m = Z2(s), g = {
    root: {
      ownerState: {
        disableUnderline: a
      }
    }
  }, b = v ?? c ? Et(v ?? c, g) : g, w = (r = (o = x.root) != null ? o : u.Root) != null ? r : J2, k = (i = (l = x.input) != null ? l : u.Input) != null ? i : eb;
  return /* @__PURE__ */ E.jsx(xd, y({
    slots: {
      root: w,
      input: k
    },
    slotProps: b,
    fullWidth: d,
    inputComponent: p,
    multiline: C,
    ref: n,
    type: R
  }, h, {
    classes: m
  }));
});
Cd.muiName = "Input";
function tb(e) {
  return ce("MuiInputAdornment", e);
}
const Op = de("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Ip;
const nb = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], rb = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${D(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, ob = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: l
  } = e, s = {
    root: ["root", n && "disablePointerEvents", o && `position${D(o)}`, l, r && "hiddenLabel", i && `size${D(i)}`]
  };
  return he(s, tb, t);
}, ib = V("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: rb
})(({
  theme: e,
  ownerState: t
}) => y({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${Op.positionStart}&:not(.${Op.hiddenLabel})`]: {
    marginTop: 16
  }
}, t.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, t.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, t.disablePointerEvents === !0 && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
})), lb = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: l = "div",
    disablePointerEvents: s = !1,
    disableTypography: a = !1,
    position: u,
    variant: c
  } = r, d = U(r, nb), p = vr() || {};
  let C = c;
  c && p.variant, p && !C && (C = p.variant);
  const v = y({}, r, {
    hiddenLabel: p.hiddenLabel,
    size: p.size,
    disablePointerEvents: s,
    position: u,
    variant: C
  }), x = ob(v);
  return /* @__PURE__ */ E.jsx(qs.Provider, {
    value: null,
    children: /* @__PURE__ */ E.jsx(ib, y({
      as: l,
      ownerState: v,
      className: H(x.root, i),
      ref: n
    }, d, {
      children: typeof o == "string" && !a ? /* @__PURE__ */ E.jsx(er, {
        color: "text.secondary",
        children: o
      }) : /* @__PURE__ */ E.jsxs(S.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Ip || (Ip = /* @__PURE__ */ E.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, o]
      })
    }))
  });
});
function sb(e) {
  return ce("MuiInputLabel", e);
}
de("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const ab = ["disableAnimation", "margin", "shrink", "variant", "className"], ub = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: l,
    required: s
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "normal" && `size${D(r)}`, l],
    asterisk: [s && "asterisk"]
  }, u = he(a, sb, t);
  return y({}, t, u);
}, cb = V(z2, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Qo.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && y({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && y({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && y({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), db = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    shrink: i,
    className: l
  } = r, s = U(r, ab), a = vr();
  let u = i;
  typeof u > "u" && a && (u = a.filled || a.focused || a.adornedStart);
  const c = ho({
    props: r,
    muiFormControl: a,
    states: ["size", "variant", "required", "focused"]
  }), d = y({}, r, {
    disableAnimation: o,
    formControl: a,
    shrink: u,
    size: c.size,
    variant: c.variant,
    required: c.required,
    focused: c.focused
  }), p = ub(d);
  return /* @__PURE__ */ E.jsx(cb, y({
    "data-shrink": u,
    ownerState: d,
    ref: n,
    className: H(p.root, l)
  }, s, {
    classes: p
  }));
}), fb = /* @__PURE__ */ S.createContext({});
function pb(e) {
  return ce("MuiList", e);
}
de("MuiList", ["root", "padding", "dense", "subheader"]);
const mb = ["children", "className", "component", "dense", "disablePadding", "subheader"], hb = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return he({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, pb, t);
}, gb = V("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => y({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), vb = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: l = "ul",
    dense: s = !1,
    disablePadding: a = !1,
    subheader: u
  } = r, c = U(r, mb), d = S.useMemo(() => ({
    dense: s
  }), [s]), p = y({}, r, {
    component: l,
    dense: s,
    disablePadding: a
  }), C = hb(p);
  return /* @__PURE__ */ E.jsx(fb.Provider, {
    value: d,
    children: /* @__PURE__ */ E.jsxs(gb, y({
      as: l,
      className: H(C.root, i),
      ref: n,
      ownerState: p
    }, c, {
      children: [u, o]
    }))
  });
}), yb = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Da(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Np(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function cv(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function _o(e, t, n, r, o, i) {
  let l = !1, s = o(e, t, t ? n : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (l)
        return !1;
      l = !0;
    }
    const a = r ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !cv(s, i) || a)
      s = o(e, s, n);
    else
      return s.focus(), !0;
  }
  return !1;
}
const xb = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: l,
    className: s,
    disabledItemsFocusable: a = !1,
    disableListWrap: u = !1,
    onKeyDown: c,
    variant: d = "selectedMenu"
  } = t, p = U(t, yb), C = S.useRef(null), v = S.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Bn(() => {
    o && C.current.focus();
  }, [o]), S.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (f, {
      direction: g
    }) => {
      const b = !C.current.style.width;
      if (f.clientHeight < C.current.clientHeight && b) {
        const w = `${Dm(Rt(f))}px`;
        C.current.style[g === "rtl" ? "paddingLeft" : "paddingRight"] = w, C.current.style.width = `calc(100% + ${w})`;
      }
      return C.current;
    }
  }), []);
  const x = (f) => {
    const g = C.current, b = f.key, w = Rt(g).activeElement;
    if (b === "ArrowDown")
      f.preventDefault(), _o(g, w, u, a, Da);
    else if (b === "ArrowUp")
      f.preventDefault(), _o(g, w, u, a, Np);
    else if (b === "Home")
      f.preventDefault(), _o(g, null, u, a, Da);
    else if (b === "End")
      f.preventDefault(), _o(g, null, u, a, Np);
    else if (b.length === 1) {
      const k = v.current, P = b.toLowerCase(), N = performance.now();
      k.keys.length > 0 && (N - k.lastTime > 500 ? (k.keys = [], k.repeating = !0, k.previousKeyMatched = !0) : k.repeating && P !== k.keys[0] && (k.repeating = !1)), k.lastTime = N, k.keys.push(P);
      const T = w && !k.repeating && cv(w, k);
      k.previousKeyMatched && (T || _o(g, w, !1, a, Da, k)) ? f.preventDefault() : k.previousKeyMatched = !1;
    }
    c && c(f);
  }, R = ut(C, n);
  let h = -1;
  S.Children.forEach(l, (f, g) => {
    if (!/* @__PURE__ */ S.isValidElement(f)) {
      h === g && (h += 1, h >= l.length && (h = -1));
      return;
    }
    f.props.disabled || (d === "selectedMenu" && f.props.selected || h === -1) && (h = g), h === g && (f.props.disabled || f.props.muiSkipListHighlight || f.type.muiSkipListHighlight) && (h += 1, h >= l.length && (h = -1));
  });
  const m = S.Children.map(l, (f, g) => {
    if (g === h) {
      const b = {};
      return i && (b.autoFocus = !0), f.props.tabIndex === void 0 && d === "selectedMenu" && (b.tabIndex = 0), /* @__PURE__ */ S.cloneElement(f, b);
    }
    return f;
  });
  return /* @__PURE__ */ E.jsx(vb, y({
    role: "menu",
    ref: R,
    className: s,
    onKeyDown: x,
    tabIndex: o ? 0 : -1
  }, p, {
    children: m
  }));
});
function Sb(e) {
  return ce("MuiPopover", e);
}
de("MuiPopover", ["root", "paper"]);
const Cb = ["onEntering"], wb = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], kb = ["slotProps"];
function zp(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Lp(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Fp(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ba(e) {
  return typeof e == "function" ? e() : e;
}
const bb = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    paper: ["paper"]
  }, Sb, t);
}, Eb = V(h2, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), dv = V(iv, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Rb = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i;
  const l = fe({
    props: t,
    name: "MuiPopover"
  }), {
    action: s,
    anchorEl: a,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: c,
    anchorReference: d = "anchorEl",
    children: p,
    className: C,
    container: v,
    elevation: x = 8,
    marginThreshold: R = 16,
    open: h,
    PaperProps: m = {},
    slots: f,
    slotProps: g,
    transformOrigin: b = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w = uv,
    transitionDuration: k = "auto",
    TransitionProps: {
      onEntering: P
    } = {},
    disableScrollLock: N = !1
  } = l, T = U(l.TransitionProps, Cb), A = U(l, wb), z = (r = g == null ? void 0 : g.paper) != null ? r : m, _ = S.useRef(), O = ut(_, z.ref), L = y({}, l, {
    anchorOrigin: u,
    anchorReference: d,
    elevation: x,
    marginThreshold: R,
    externalPaperSlotProps: z,
    transformOrigin: b,
    TransitionComponent: w,
    transitionDuration: k,
    TransitionProps: T
  }), F = bb(L), j = S.useCallback(() => {
    if (d === "anchorPosition")
      return c;
    const q = Ba(a), Y = (q && q.nodeType === 1 ? q : Rt(_.current).body).getBoundingClientRect();
    return {
      top: Y.top + zp(Y, u.vertical),
      left: Y.left + Lp(Y, u.horizontal)
    };
  }, [a, u.horizontal, u.vertical, c, d]), $ = S.useCallback((q) => ({
    vertical: zp(q, b.vertical),
    horizontal: Lp(q, b.horizontal)
  }), [b.horizontal, b.vertical]), I = S.useCallback((q) => {
    const J = {
      width: q.offsetWidth,
      height: q.offsetHeight
    }, Y = $(J);
    if (d === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Fp(Y)
      };
    const Se = j();
    let be = Se.top - Y.vertical, Xe = Se.left - Y.horizontal;
    const Ve = be + J.height, Be = Xe + J.width, ne = ur(Ba(a)), qe = ne.innerHeight - R, He = ne.innerWidth - R;
    if (R !== null && be < R) {
      const Ee = be - R;
      be -= Ee, Y.vertical += Ee;
    } else if (R !== null && Ve > qe) {
      const Ee = Ve - qe;
      be -= Ee, Y.vertical += Ee;
    }
    if (R !== null && Xe < R) {
      const Ee = Xe - R;
      Xe -= Ee, Y.horizontal += Ee;
    } else if (Be > He) {
      const Ee = Be - He;
      Xe -= Ee, Y.horizontal += Ee;
    }
    return {
      top: `${Math.round(be)}px`,
      left: `${Math.round(Xe)}px`,
      transformOrigin: Fp(Y)
    };
  }, [a, d, j, $, R]), [W, Z] = S.useState(h), X = S.useCallback(() => {
    const q = _.current;
    if (!q)
      return;
    const J = I(q);
    J.top !== null && (q.style.top = J.top), J.left !== null && (q.style.left = J.left), q.style.transformOrigin = J.transformOrigin, Z(!0);
  }, [I]);
  S.useEffect(() => (N && window.addEventListener("scroll", X), () => window.removeEventListener("scroll", X)), [a, N, X]);
  const ae = (q, J) => {
    P && P(q, J), X();
  }, Q = () => {
    Z(!1);
  };
  S.useEffect(() => {
    h && X();
  }), S.useImperativeHandle(s, () => h ? {
    updatePosition: () => {
      X();
    }
  } : null, [h, X]), S.useEffect(() => {
    if (!h)
      return;
    const q = Fm(() => {
      X();
    }), J = ur(a);
    return J.addEventListener("resize", q), () => {
      q.clear(), J.removeEventListener("resize", q);
    };
  }, [a, h, X]);
  let ue = k;
  k === "auto" && !w.muiSupportAuto && (ue = void 0);
  const te = v || (a ? Rt(Ba(a)).body : void 0), Oe = (o = f == null ? void 0 : f.root) != null ? o : Eb, Qe = (i = f == null ? void 0 : f.paper) != null ? i : dv, $e = Xr({
    elementType: Qe,
    externalSlotProps: y({}, z, {
      style: W ? z.style : y({}, z.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: x,
      ref: O
    },
    ownerState: L,
    className: H(F.paper, z == null ? void 0 : z.className)
  }), rt = Xr({
    elementType: Oe,
    externalSlotProps: (g == null ? void 0 : g.root) || {},
    externalForwardedProps: A,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: te,
      open: h
    },
    ownerState: L,
    className: H(F.root, C)
  }), {
    slotProps: oe
  } = rt, ve = U(rt, kb);
  return /* @__PURE__ */ E.jsx(Oe, y({}, ve, !kl(Oe) && {
    slotProps: oe,
    disableScrollLock: N
  }, {
    children: /* @__PURE__ */ E.jsx(w, y({
      appear: !0,
      in: h,
      onEntering: ae,
      onExited: Q,
      timeout: ue
    }, T, {
      children: /* @__PURE__ */ E.jsx(Qe, y({}, $e, {
        children: p
      }))
    }))
  }));
});
function Pb(e) {
  return ce("MuiMenu", e);
}
de("MuiMenu", ["root", "paper", "list"]);
const $b = ["onEntering"], Tb = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], _b = {
  vertical: "top",
  horizontal: "right"
}, Mb = {
  vertical: "top",
  horizontal: "left"
}, Ob = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Pb, t);
}, Ib = V(Rb, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Nb = V(dv, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), zb = V(xb, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Lb = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o;
  const i = fe({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: l = !0,
    children: s,
    className: a,
    disableAutoFocusItem: u = !1,
    MenuListProps: c = {},
    onClose: d,
    open: p,
    PaperProps: C = {},
    PopoverClasses: v,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: R
    } = {},
    variant: h = "selectedMenu",
    slots: m = {},
    slotProps: f = {}
  } = i, g = U(i.TransitionProps, $b), b = U(i, Tb), w = Hm(), k = y({}, i, {
    autoFocus: l,
    disableAutoFocusItem: u,
    MenuListProps: c,
    onEntering: R,
    PaperProps: C,
    transitionDuration: x,
    TransitionProps: g,
    variant: h
  }), P = Ob(k), N = l && !u && p, T = S.useRef(null), A = ($, I) => {
    T.current && T.current.adjustStyleForScrollbar($, {
      direction: w ? "rtl" : "ltr"
    }), R && R($, I);
  }, z = ($) => {
    $.key === "Tab" && ($.preventDefault(), d && d($, "tabKeyDown"));
  };
  let _ = -1;
  S.Children.map(s, ($, I) => {
    /* @__PURE__ */ S.isValidElement($) && ($.props.disabled || (h === "selectedMenu" && $.props.selected || _ === -1) && (_ = I));
  });
  const O = (r = m.paper) != null ? r : Nb, L = (o = f.paper) != null ? o : C, F = Xr({
    elementType: m.root,
    externalSlotProps: f.root,
    ownerState: k,
    className: [P.root, a]
  }), j = Xr({
    elementType: O,
    externalSlotProps: L,
    ownerState: k,
    className: P.paper
  });
  return /* @__PURE__ */ E.jsx(Ib, y({
    onClose: d,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? _b : Mb,
    slots: {
      paper: O,
      root: m.root
    },
    slotProps: {
      root: F,
      paper: j
    },
    open: p,
    ref: n,
    transitionDuration: x,
    TransitionProps: y({
      onEntering: A
    }, g),
    ownerState: k
  }, b, {
    classes: v,
    children: /* @__PURE__ */ E.jsx(zb, y({
      onKeyDown: z,
      actions: T,
      autoFocus: l && (_ === -1 || u),
      autoFocusItem: N,
      variant: h
    }, c, {
      className: H(P.list, c.className),
      children: s
    }))
  }));
});
function Fb(e) {
  return ce("MuiNativeSelect", e);
}
const wd = de("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Ab = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], jb = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: l
  } = e, s = {
    select: ["select", n, r && "disabled", o && "multiple", l && "error"],
    icon: ["icon", `icon${D(n)}`, i && "iconOpen", r && "disabled"]
  };
  return he(s, Fb, t);
}, fv = ({
  ownerState: e,
  theme: t
}) => y({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": y({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${wd.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), Db = V("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Jt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${wd.multiple}`]: t.multiple
    }];
  }
})(fv), pv = ({
  ownerState: e,
  theme: t
}) => y({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${wd.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), Bb = V("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${D(n.variant)}`], n.open && t.iconOpen];
  }
})(pv), Wb = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: l,
    inputRef: s,
    variant: a = "standard"
  } = t, u = U(t, Ab), c = y({}, t, {
    disabled: o,
    variant: a,
    error: i
  }), d = jb(c);
  return /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsx(Db, y({
      ownerState: c,
      className: H(d.select, r),
      disabled: o,
      ref: s || n
    }, u)), t.multiple ? null : /* @__PURE__ */ E.jsx(Bb, {
      as: l,
      ownerState: c,
      className: d.icon
    })]
  });
});
var Ap;
const Ub = ["children", "classes", "className", "label", "notched"], Vb = V("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Jt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), Hb = V("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Jt
})(({
  ownerState: e,
  theme: t
}) => y({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && y({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function Kb(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, o = U(e, Ub), i = n != null && n !== "", l = y({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ E.jsx(Vb, y({
    "aria-hidden": !0,
    className: t,
    ownerState: l
  }, o, {
    children: /* @__PURE__ */ E.jsx(Hb, {
      ownerState: l,
      children: i ? /* @__PURE__ */ E.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ap || (Ap = /* @__PURE__ */ E.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const Gb = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], Yb = (e) => {
  const {
    classes: t
  } = e, r = he({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, ok, t);
  return y({}, t, r);
}, Qb = V(ea, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Zs
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return y({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Rn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Rn.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Rn.focused} .${Rn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Rn.error} .${Rn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Rn.disabled} .${Rn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && y({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), Xb = V(Kb, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), qb = V(ta, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Js
})(({
  theme: e,
  ownerState: t
}) => y({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), kd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i, l, s;
  const a = fe({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: c = !1,
    inputComponent: d = "input",
    label: p,
    multiline: C = !1,
    notched: v,
    slots: x = {},
    type: R = "text"
  } = a, h = U(a, Gb), m = Yb(a), f = vr(), g = ho({
    props: a,
    muiFormControl: f,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), b = y({}, a, {
    color: g.color || "primary",
    disabled: g.disabled,
    error: g.error,
    focused: g.focused,
    formControl: f,
    fullWidth: c,
    hiddenLabel: g.hiddenLabel,
    multiline: C,
    size: g.size,
    type: R
  }), w = (r = (o = x.root) != null ? o : u.Root) != null ? r : Qb, k = (i = (l = x.input) != null ? l : u.Input) != null ? i : qb;
  return /* @__PURE__ */ E.jsx(xd, y({
    slots: {
      root: w,
      input: k
    },
    renderSuffix: (P) => /* @__PURE__ */ E.jsx(Xb, {
      ownerState: b,
      className: m.notchedOutline,
      label: p != null && p !== "" && g.required ? s || (s = /* @__PURE__ */ E.jsxs(S.Fragment, {
        children: [p, " ", "*"]
      })) : p,
      notched: typeof v < "u" ? v : !!(P.startAdornment || P.filled || P.focused)
    }),
    fullWidth: c,
    inputComponent: d,
    multiline: C,
    ref: n,
    type: R
  }, h, {
    classes: y({}, m, {
      notchedOutline: null
    })
  }));
});
kd.muiName = "Input";
const Zb = fo(/* @__PURE__ */ E.jsx("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star"), Jb = fo(/* @__PURE__ */ E.jsx("path", {
  d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
}), "StarBorder");
function eE(e) {
  return ce("MuiRating", e);
}
const Mo = de("MuiRating", ["root", "sizeSmall", "sizeMedium", "sizeLarge", "readOnly", "disabled", "focusVisible", "visuallyHidden", "pristine", "label", "labelEmptyValueActive", "icon", "iconEmpty", "iconFilled", "iconHover", "iconFocus", "iconActive", "decimal"]), tE = ["value"], nE = ["className", "defaultValue", "disabled", "emptyIcon", "emptyLabelText", "getLabelText", "highlightSelectedOnly", "icon", "IconContainerComponent", "max", "name", "onChange", "onChangeActive", "onMouseLeave", "onMouseMove", "precision", "readOnly", "size", "value"];
function rE(e) {
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function Wa(e, t) {
  if (e == null)
    return e;
  const n = Math.round(e / t) * t;
  return Number(n.toFixed(rE(t)));
}
const oE = (e) => {
  const {
    classes: t,
    size: n,
    readOnly: r,
    disabled: o,
    emptyValueFocused: i,
    focusVisible: l
  } = e, s = {
    root: ["root", `size${D(n)}`, o && "disabled", l && "focusVisible", r && "readOnly"],
    label: ["label", "pristine"],
    labelEmptyValue: [i && "labelEmptyValueActive"],
    icon: ["icon"],
    iconEmpty: ["iconEmpty"],
    iconFilled: ["iconFilled"],
    iconHover: ["iconHover"],
    iconFocus: ["iconFocus"],
    iconActive: ["iconActive"],
    decimal: ["decimal"],
    visuallyHidden: ["visuallyHidden"]
  };
  return he(s, eE, t);
}, iE = V("span", {
  name: "MuiRating",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Mo.visuallyHidden}`]: t.visuallyHidden
    }, t.root, t[`size${D(n.size)}`], n.readOnly && t.readOnly];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  display: "inline-flex",
  // Required to position the pristine input absolutely
  position: "relative",
  fontSize: e.typography.pxToRem(24),
  color: "#faaf00",
  cursor: "pointer",
  textAlign: "left",
  width: "min-content",
  WebkitTapHighlightColor: "transparent",
  [`&.${Mo.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity,
    pointerEvents: "none"
  },
  [`&.${Mo.focusVisible} .${Mo.iconActive}`]: {
    outline: "1px solid #999"
  },
  [`& .${Mo.visuallyHidden}`]: R1
}, t.size === "small" && {
  fontSize: e.typography.pxToRem(18)
}, t.size === "large" && {
  fontSize: e.typography.pxToRem(30)
}, t.readOnly && {
  pointerEvents: "none"
})), mv = V("label", {
  name: "MuiRating",
  slot: "Label",
  overridesResolver: ({
    ownerState: e
  }, t) => [t.label, e.emptyValueFocused && t.labelEmptyValueActive]
})(({
  ownerState: e
}) => y({
  cursor: "inherit"
}, e.emptyValueFocused && {
  top: 0,
  bottom: 0,
  position: "absolute",
  outline: "1px solid #999",
  width: "100%"
})), lE = V("span", {
  name: "MuiRating",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.iconEmpty && t.iconEmpty, n.iconFilled && t.iconFilled, n.iconHover && t.iconHover, n.iconFocus && t.iconFocus, n.iconActive && t.iconActive];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  // Fit wrapper to actual icon size.
  display: "flex",
  transition: e.transitions.create("transform", {
    duration: e.transitions.duration.shortest
  }),
  // Fix mouseLeave issue.
  // https://github.com/facebook/react/issues/4492
  pointerEvents: "none"
}, t.iconActive && {
  transform: "scale(1.2)"
}, t.iconEmpty && {
  color: (e.vars || e).palette.action.disabled
})), sE = V("span", {
  name: "MuiRating",
  slot: "Decimal",
  shouldForwardProp: (e) => Ec(e) && e !== "iconActive",
  overridesResolver: (e, t) => {
    const {
      iconActive: n
    } = e;
    return [t.decimal, n && t.iconActive];
  }
})(({
  iconActive: e
}) => y({
  position: "relative"
}, e && {
  transform: "scale(1.2)"
}));
function aE(e) {
  const t = U(e, tE);
  return /* @__PURE__ */ E.jsx("span", y({}, t));
}
function jp(e) {
  const {
    classes: t,
    disabled: n,
    emptyIcon: r,
    focus: o,
    getLabelText: i,
    highlightSelectedOnly: l,
    hover: s,
    icon: a,
    IconContainerComponent: u,
    isActive: c,
    itemValue: d,
    labelProps: p,
    name: C,
    onBlur: v,
    onChange: x,
    onClick: R,
    onFocus: h,
    readOnly: m,
    ownerState: f,
    ratingValue: g,
    ratingValueRounded: b
  } = e, w = l ? d === g : d <= g, k = d <= s, P = d <= o, N = d === b, T = Ri(), A = /* @__PURE__ */ E.jsx(lE, {
    as: u,
    value: d,
    className: H(t.icon, w ? t.iconFilled : t.iconEmpty, k && t.iconHover, P && t.iconFocus, c && t.iconActive),
    ownerState: y({}, f, {
      iconEmpty: !w,
      iconFilled: w,
      iconHover: k,
      iconFocus: P,
      iconActive: c
    }),
    children: r && !w ? r : a
  });
  return m ? /* @__PURE__ */ E.jsx("span", y({}, p, {
    children: A
  })) : /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsxs(mv, y({
      ownerState: y({}, f, {
        emptyValueFocused: void 0
      }),
      htmlFor: T
    }, p, {
      children: [A, /* @__PURE__ */ E.jsx("span", {
        className: t.visuallyHidden,
        children: i(d)
      })]
    })), /* @__PURE__ */ E.jsx("input", {
      className: t.visuallyHidden,
      onFocus: h,
      onBlur: v,
      onChange: x,
      onClick: R,
      disabled: n,
      value: d,
      id: T,
      type: "radio",
      name: C,
      checked: N
    })]
  });
}
const uE = /* @__PURE__ */ E.jsx(Zb, {
  fontSize: "inherit"
}), cE = /* @__PURE__ */ E.jsx(Jb, {
  fontSize: "inherit"
});
function dE(e) {
  return `${e} Star${e !== 1 ? "s" : ""}`;
}
const fE = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    name: "MuiRating",
    props: t
  }), {
    className: o,
    defaultValue: i = null,
    disabled: l = !1,
    emptyIcon: s = cE,
    emptyLabelText: a = "Empty",
    getLabelText: u = dE,
    highlightSelectedOnly: c = !1,
    icon: d = uE,
    IconContainerComponent: p = aE,
    max: C = 5,
    name: v,
    onChange: x,
    onChangeActive: R,
    onMouseLeave: h,
    onMouseMove: m,
    precision: f = 1,
    readOnly: g = !1,
    size: b = "medium",
    value: w
  } = r, k = U(r, nE), P = Ri(v), [N, T] = Qa({
    controlled: w,
    default: i,
    name: "Rating"
  }), A = Wa(N, f), z = Hm(), [{
    hover: _,
    focus: O
  }, L] = S.useState({
    hover: -1,
    focus: -1
  });
  let F = A;
  _ !== -1 && (F = _), O !== -1 && (F = O);
  const {
    isFocusVisibleRef: j,
    onBlur: $,
    onFocus: I,
    ref: W
  } = jm(), [Z, X] = S.useState(!1), ae = S.useRef(), Q = ut(W, ae, n), ue = (Y) => {
    m && m(Y);
    const Se = ae.current, {
      right: be,
      left: Xe,
      width: Ve
    } = Se.getBoundingClientRect();
    let Be;
    z ? Be = (be - Y.clientX) / Ve : Be = (Y.clientX - Xe) / Ve;
    let ne = Wa(C * Be + f / 2, f);
    ne = Lm(ne, f, C), L((qe) => qe.hover === ne && qe.focus === ne ? qe : {
      hover: ne,
      focus: ne
    }), X(!1), R && _ !== ne && R(Y, ne);
  }, te = (Y) => {
    h && h(Y);
    const Se = -1;
    L({
      hover: Se,
      focus: Se
    }), R && _ !== Se && R(Y, Se);
  }, Oe = (Y) => {
    let Se = Y.target.value === "" ? null : parseFloat(Y.target.value);
    _ !== -1 && (Se = _), T(Se), x && x(Y, Se);
  }, Qe = (Y) => {
    Y.clientX === 0 && Y.clientY === 0 || (L({
      hover: -1,
      focus: -1
    }), T(null), x && parseFloat(Y.target.value) === A && x(Y, null));
  }, $e = (Y) => {
    I(Y), j.current === !0 && X(!0);
    const Se = parseFloat(Y.target.value);
    L((be) => ({
      hover: be.hover,
      focus: Se
    }));
  }, rt = (Y) => {
    if (_ !== -1)
      return;
    $(Y), j.current === !1 && X(!1);
    const Se = -1;
    L((be) => ({
      hover: be.hover,
      focus: Se
    }));
  }, [oe, ve] = S.useState(!1), q = y({}, r, {
    defaultValue: i,
    disabled: l,
    emptyIcon: s,
    emptyLabelText: a,
    emptyValueFocused: oe,
    focusVisible: Z,
    getLabelText: u,
    icon: d,
    IconContainerComponent: p,
    max: C,
    precision: f,
    readOnly: g,
    size: b
  }), J = oE(q);
  return /* @__PURE__ */ E.jsxs(iE, y({
    ref: Q,
    onMouseMove: ue,
    onMouseLeave: te,
    className: H(J.root, o, g && "MuiRating-readOnly"),
    ownerState: q,
    role: g ? "img" : null,
    "aria-label": g ? u(F) : null
  }, k, {
    children: [Array.from(new Array(C)).map((Y, Se) => {
      const be = Se + 1, Xe = {
        classes: J,
        disabled: l,
        emptyIcon: s,
        focus: O,
        getLabelText: u,
        highlightSelectedOnly: c,
        hover: _,
        icon: d,
        IconContainerComponent: p,
        name: P,
        onBlur: rt,
        onChange: Oe,
        onClick: Qe,
        onFocus: $e,
        ratingValue: F,
        ratingValueRounded: A,
        readOnly: g,
        ownerState: q
      }, Ve = be === Math.ceil(F) && (_ !== -1 || O !== -1);
      if (f < 1) {
        const Be = Array.from(new Array(1 / f));
        return /* @__PURE__ */ E.jsx(sE, {
          className: H(J.decimal, Ve && J.iconActive),
          ownerState: q,
          iconActive: Ve,
          children: Be.map((ne, qe) => {
            const He = Wa(be - 1 + (qe + 1) * f, f);
            return /* @__PURE__ */ E.jsx(jp, y({}, Xe, {
              // The icon is already displayed as active
              isActive: !1,
              itemValue: He,
              labelProps: {
                style: Be.length - 1 === qe ? {} : {
                  width: He === F ? `${(qe + 1) * f * 100}%` : "0%",
                  overflow: "hidden",
                  position: "absolute"
                }
              }
            }), He);
          })
        }, be);
      }
      return /* @__PURE__ */ E.jsx(jp, y({}, Xe, {
        isActive: Ve,
        itemValue: be
      }), be);
    }), !g && !l && /* @__PURE__ */ E.jsxs(mv, {
      className: H(J.label, J.labelEmptyValue),
      ownerState: q,
      children: [/* @__PURE__ */ E.jsx("input", {
        className: J.visuallyHidden,
        value: "",
        id: `${P}-empty`,
        type: "radio",
        name: P,
        checked: A == null,
        onFocus: () => ve(!0),
        onBlur: () => ve(!1),
        onChange: Oe
      }), /* @__PURE__ */ E.jsx("span", {
        className: J.visuallyHidden,
        children: a
      })]
    })]
  }));
});
function pE(e) {
  return ce("MuiSelect", e);
}
const Oo = de("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Dp;
const mE = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], hE = V("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Oo.select}`]: t.select
      },
      {
        [`&.${Oo.select}`]: t[n.variant]
      },
      {
        [`&.${Oo.error}`]: t.error
      },
      {
        [`&.${Oo.multiple}`]: t.multiple
      }
    ];
  }
})(fv, {
  // Win specificity over the input base
  [`&.${Oo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), gE = V("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${D(n.variant)}`], n.open && t.iconOpen];
  }
})(pv), vE = V("input", {
  shouldForwardProp: (e) => Ec(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Bp(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function yE(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const xE = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: l
  } = e, s = {
    select: ["select", n, r && "disabled", o && "multiple", l && "error"],
    icon: ["icon", `icon${D(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return he(s, pE, t);
}, SE = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r;
  const {
    "aria-describedby": o,
    "aria-label": i,
    autoFocus: l,
    autoWidth: s,
    children: a,
    className: u,
    defaultOpen: c,
    defaultValue: d,
    disabled: p,
    displayEmpty: C,
    error: v = !1,
    IconComponent: x,
    inputRef: R,
    labelId: h,
    MenuProps: m = {},
    multiple: f,
    name: g,
    onBlur: b,
    onChange: w,
    onClose: k,
    onFocus: P,
    onOpen: N,
    open: T,
    readOnly: A,
    renderValue: z,
    SelectDisplayProps: _ = {},
    tabIndex: O,
    value: L,
    variant: F = "standard"
  } = t, j = U(t, mE), [$, I] = Qa({
    controlled: L,
    default: d,
    name: "Select"
  }), [W, Z] = Qa({
    controlled: T,
    default: c,
    name: "Select"
  }), X = S.useRef(null), ae = S.useRef(null), [Q, ue] = S.useState(null), {
    current: te
  } = S.useRef(T != null), [Oe, Qe] = S.useState(), $e = ut(n, R), rt = S.useCallback((K) => {
    ae.current = K, K && ue(K);
  }, []), oe = Q == null ? void 0 : Q.parentNode;
  S.useImperativeHandle($e, () => ({
    focus: () => {
      ae.current.focus();
    },
    node: X.current,
    value: $
  }), [$]), S.useEffect(() => {
    c && W && Q && !te && (Qe(s ? null : oe.clientWidth), ae.current.focus());
  }, [Q, s]), S.useEffect(() => {
    l && ae.current.focus();
  }, [l]), S.useEffect(() => {
    if (!h)
      return;
    const K = Rt(ae.current).getElementById(h);
    if (K) {
      const Ce = () => {
        getSelection().isCollapsed && ae.current.focus();
      };
      return K.addEventListener("click", Ce), () => {
        K.removeEventListener("click", Ce);
      };
    }
  }, [h]);
  const ve = (K, Ce) => {
    K ? N && N(Ce) : k && k(Ce), te || (Qe(s ? null : oe.clientWidth), Z(K));
  }, q = (K) => {
    K.button === 0 && (K.preventDefault(), ae.current.focus(), ve(!0, K));
  }, J = (K) => {
    ve(!1, K);
  }, Y = S.Children.toArray(a), Se = (K) => {
    const Ce = Y.find((Ze) => Ze.props.value === K.target.value);
    Ce !== void 0 && (I(Ce.props.value), w && w(K, Ce));
  }, be = (K) => (Ce) => {
    let Ze;
    if (Ce.currentTarget.hasAttribute("tabindex")) {
      if (f) {
        Ze = Array.isArray($) ? $.slice() : [];
        const yr = $.indexOf(K.props.value);
        yr === -1 ? Ze.push(K.props.value) : Ze.splice(yr, 1);
      } else
        Ze = K.props.value;
      if (K.props.onClick && K.props.onClick(Ce), $ !== Ze && (I(Ze), w)) {
        const yr = Ce.nativeEvent || Ce, Ed = new yr.constructor(yr.type, yr);
        Object.defineProperty(Ed, "target", {
          writable: !0,
          value: {
            value: Ze,
            name: g
          }
        }), w(Ed, K);
      }
      f || ve(!1, Ce);
    }
  }, Xe = (K) => {
    A || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(K.key) !== -1 && (K.preventDefault(), ve(!0, K));
  }, Ve = Q !== null && W, Be = (K) => {
    !Ve && b && (Object.defineProperty(K, "target", {
      writable: !0,
      value: {
        value: $,
        name: g
      }
    }), b(K));
  };
  delete j["aria-invalid"];
  let ne, qe;
  const He = [];
  let Ee = !1;
  (Zl({
    value: $
  }) || C) && (z ? ne = z($) : Ee = !0);
  const en = Y.map((K) => {
    if (!/* @__PURE__ */ S.isValidElement(K))
      return null;
    let Ce;
    if (f) {
      if (!Array.isArray($))
        throw new Error(ar(2));
      Ce = $.some((Ze) => Bp(Ze, K.props.value)), Ce && Ee && He.push(K.props.children);
    } else
      Ce = Bp($, K.props.value), Ce && Ee && (qe = K.props.children);
    return /* @__PURE__ */ S.cloneElement(K, {
      "aria-selected": Ce ? "true" : "false",
      onClick: be(K),
      onKeyUp: (Ze) => {
        Ze.key === " " && Ze.preventDefault(), K.props.onKeyUp && K.props.onKeyUp(Ze);
      },
      role: "option",
      selected: Ce,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": K.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  Ee && (f ? He.length === 0 ? ne = null : ne = He.reduce((K, Ce, Ze) => (K.push(Ce), Ze < He.length - 1 && K.push(", "), K), []) : ne = qe);
  let bn = Oe;
  !s && te && Q && (bn = oe.clientWidth);
  let dn;
  typeof O < "u" ? dn = O : dn = p ? null : 0;
  const ye = _.id || (g ? `mui-component-select-${g}` : void 0), G = y({}, t, {
    variant: F,
    value: $,
    open: Ve,
    error: v
  }), fn = xE(G), go = y({}, m.PaperProps, (r = m.slotProps) == null ? void 0 : r.paper), vo = Ri();
  return /* @__PURE__ */ E.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ E.jsx(hE, y({
      ref: rt,
      tabIndex: dn,
      role: "combobox",
      "aria-controls": vo,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Ve ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [h, ye].filter(Boolean).join(" ") || void 0,
      "aria-describedby": o,
      onKeyDown: Xe,
      onMouseDown: p || A ? null : q,
      onBlur: Be,
      onFocus: P
    }, _, {
      ownerState: G,
      className: H(_.className, fn.select, u),
      id: ye,
      children: yE(ne) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Dp || (Dp = /* @__PURE__ */ E.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : ne
    })), /* @__PURE__ */ E.jsx(vE, y({
      "aria-invalid": v,
      value: Array.isArray($) ? $.join(",") : $,
      name: g,
      ref: X,
      "aria-hidden": !0,
      onChange: Se,
      tabIndex: -1,
      disabled: p,
      className: fn.nativeInput,
      autoFocus: l,
      ownerState: G
    }, j)), /* @__PURE__ */ E.jsx(gE, {
      as: x,
      className: fn.icon,
      ownerState: G
    }), /* @__PURE__ */ E.jsx(Lb, y({
      id: `menu-${g || ""}`,
      anchorEl: oe,
      open: Ve,
      onClose: J,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, m, {
      MenuListProps: y({
        "aria-labelledby": h,
        role: "listbox",
        "aria-multiselectable": f ? "true" : void 0,
        disableListWrap: !0,
        id: vo
      }, m.MenuListProps),
      slotProps: y({}, m.slotProps, {
        paper: y({}, go, {
          style: y({
            minWidth: bn
          }, go != null ? go.style : null)
        })
      }),
      children: en
    }))]
  });
}), CE = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], wE = ["root"], kE = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, bd = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Jt(e) && e !== "variant",
  slot: "Root"
}, bE = V(Cd, bd)(""), EE = V(kd, bd)(""), RE = V(Sd, bd)(""), hv = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: l = {},
    className: s,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: c = lk,
    id: d,
    input: p,
    inputProps: C,
    label: v,
    labelId: x,
    MenuProps: R,
    multiple: h = !1,
    native: m = !1,
    onClose: f,
    onOpen: g,
    open: b,
    renderValue: w,
    SelectDisplayProps: k,
    variant: P = "outlined"
  } = r, N = U(r, CE), T = m ? Wb : SE, A = vr(), z = ho({
    props: r,
    muiFormControl: A,
    states: ["variant", "error"]
  }), _ = z.variant || P, O = y({}, r, {
    variant: _,
    classes: l
  }), L = kE(O), F = U(L, wE), j = p || {
    standard: /* @__PURE__ */ E.jsx(bE, {
      ownerState: O
    }),
    outlined: /* @__PURE__ */ E.jsx(EE, {
      label: v,
      ownerState: O
    }),
    filled: /* @__PURE__ */ E.jsx(RE, {
      ownerState: O
    })
  }[_], $ = ut(n, Pi(j));
  return /* @__PURE__ */ E.jsx(S.Fragment, {
    children: /* @__PURE__ */ S.cloneElement(j, y({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: T,
      inputProps: y({
        children: i,
        error: z.error,
        IconComponent: c,
        variant: _,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: h
      }, m ? {
        id: d
      } : {
        autoWidth: o,
        defaultOpen: a,
        displayEmpty: u,
        labelId: x,
        MenuProps: R,
        onClose: f,
        onOpen: g,
        open: b,
        renderValue: w,
        SelectDisplayProps: y({
          id: d
        }, k)
      }, C, {
        classes: C ? Et(F, C.classes) : F
      }, p ? p.props.inputProps : {})
    }, (h && m || u) && _ === "outlined" ? {
      notched: !0
    } : {}, {
      ref: $,
      className: H(j.props.className, s, L.root)
    }, !p && {
      variant: _
    }, N))
  });
});
hv.muiName = "Select";
function PE(e) {
  return ce("MuiTextField", e);
}
de("MuiTextField", ["root"]);
const $E = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], TE = {
  standard: Cd,
  filled: Sd,
  outlined: kd
}, _E = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, PE, t);
}, ME = V(b2, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), OE = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: l,
    className: s,
    color: a = "primary",
    defaultValue: u,
    disabled: c = !1,
    error: d = !1,
    FormHelperTextProps: p,
    fullWidth: C = !1,
    helperText: v,
    id: x,
    InputLabelProps: R,
    inputProps: h,
    InputProps: m,
    inputRef: f,
    label: g,
    maxRows: b,
    minRows: w,
    multiline: k = !1,
    name: P,
    onBlur: N,
    onChange: T,
    onFocus: A,
    placeholder: z,
    required: _ = !1,
    rows: O,
    select: L = !1,
    SelectProps: F,
    type: j,
    value: $,
    variant: I = "outlined"
  } = r, W = U(r, $E), Z = y({}, r, {
    autoFocus: i,
    color: a,
    disabled: c,
    error: d,
    fullWidth: C,
    multiline: k,
    required: _,
    select: L,
    variant: I
  }), X = _E(Z), ae = {};
  I === "outlined" && (R && typeof R.shrink < "u" && (ae.notched = R.shrink), ae.label = g), L && ((!F || !F.native) && (ae.id = void 0), ae["aria-describedby"] = void 0);
  const Q = Ri(x), ue = v && Q ? `${Q}-helper-text` : void 0, te = g && Q ? `${Q}-label` : void 0, Oe = TE[I], Qe = /* @__PURE__ */ E.jsx(Oe, y({
    "aria-describedby": ue,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: C,
    multiline: k,
    name: P,
    rows: O,
    maxRows: b,
    minRows: w,
    type: j,
    value: $,
    id: Q,
    inputRef: f,
    onBlur: N,
    onChange: T,
    onFocus: A,
    placeholder: z,
    inputProps: h
  }, ae, m));
  return /* @__PURE__ */ E.jsxs(ME, y({
    className: H(X.root, s),
    disabled: c,
    error: d,
    fullWidth: C,
    ref: n,
    required: _,
    color: a,
    variant: I,
    ownerState: Z
  }, W, {
    children: [g != null && g !== "" && /* @__PURE__ */ E.jsx(db, y({
      htmlFor: Q,
      id: te
    }, R, {
      children: g
    })), L ? /* @__PURE__ */ E.jsx(hv, y({
      "aria-describedby": ue,
      id: Q,
      labelId: te,
      value: $,
      input: Qe
    }, F, {
      children: l
    })) : Qe, v && /* @__PURE__ */ E.jsx(T2, y({
      id: ue
    }, p, {
      children: v
    }))]
  }));
});
var Xu = {}, Wp = gd;
Xu.createRoot = Wp.createRoot, Xu.hydrateRoot = Wp.hydrateRoot;
const IE = fo(/* @__PURE__ */ E.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search"), NE = fo(/* @__PURE__ */ E.jsx("path", {
  d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"
}), "ShoppingCart"), Up = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 299.99,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 399.99,
    category: "Electronics",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Feature-rich smartwatch with health tracking"
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    category: "Accessories",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Ergonomic aluminum laptop stand"
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 159.99,
    category: "Electronics",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    description: "RGB mechanical keyboard with premium switches"
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 79.99,
    category: "Electronics",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    description: "Ergonomic wireless mouse with precision tracking"
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: 69.99,
    category: "Accessories",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400",
    description: "7-in-1 USB-C hub with multiple ports"
  }
];
function zE() {
  const [e, t] = S.useState(""), [n, r] = S.useState("All"), o = ["All", ...Array.from(new Set(Up.map((s) => s.category)))], i = Up.filter((s) => {
    const a = s.name.toLowerCase().includes(e.toLowerCase()), u = n === "All" || s.category === n;
    return a && u;
  }), l = (s) => {
    console.log("Added product to cart:", s);
  };
  return /* @__PURE__ */ E.jsxs(Uk, { maxWidth: "lg", sx: { py: 4 }, children: [
    /* @__PURE__ */ E.jsx(er, { variant: "h3", gutterBottom: !0, fontWeight: 600, mb: 4, children: "Our Products" }),
    /* @__PURE__ */ E.jsxs(Qn, { sx: { mb: 4 }, children: [
      /* @__PURE__ */ E.jsx(
        OE,
        {
          fullWidth: !0,
          placeholder: "Search products...",
          value: e,
          onChange: (s) => t(s.target.value),
          InputProps: {
            startAdornment: /* @__PURE__ */ E.jsx(lb, { position: "start", children: /* @__PURE__ */ E.jsx(IE, {}) })
          },
          sx: { mb: 2 }
        }
      ),
      /* @__PURE__ */ E.jsx(Qn, { sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: o.map((s) => /* @__PURE__ */ E.jsx(
        kp,
        {
          label: s,
          onClick: () => r(s),
          color: n === s ? "primary" : "default",
          variant: n === s ? "filled" : "outlined"
        },
        s
      )) })
    ] }),
    /* @__PURE__ */ E.jsx(Mp, { container: !0, spacing: 3, children: i.map((s) => /* @__PURE__ */ E.jsx(Mp, { item: !0, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ E.jsxs(
      _k,
      {
        sx: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "translateY(-4px)"
          }
        },
        children: [
          /* @__PURE__ */ E.jsx(
            Wk,
            {
              component: "img",
              height: "200",
              image: s.image,
              alt: s.name,
              sx: { objectFit: "cover" }
            }
          ),
          /* @__PURE__ */ E.jsxs(zk, { sx: { flexGrow: 1, display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ E.jsx(Qn, { sx: { mb: 1 }, children: /* @__PURE__ */ E.jsx(kp, { label: s.category, size: "small", color: "primary", variant: "outlined" }) }),
            /* @__PURE__ */ E.jsx(er, { variant: "h6", gutterBottom: !0, fontWeight: 600, children: s.name }),
            /* @__PURE__ */ E.jsx(er, { variant: "body2", color: "text.secondary", paragraph: !0, children: s.description }),
            /* @__PURE__ */ E.jsxs(Qn, { sx: { mt: "auto" }, children: [
              /* @__PURE__ */ E.jsxs(Qn, { sx: { display: "flex", alignItems: "center", mb: 1 }, children: [
                /* @__PURE__ */ E.jsx(fE, { value: s.rating, precision: 0.1, readOnly: !0, size: "small" }),
                /* @__PURE__ */ E.jsxs(er, { variant: "body2", color: "text.secondary", sx: { ml: 1 }, children: [
                  "(",
                  s.rating,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ E.jsxs(Qn, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
                /* @__PURE__ */ E.jsxs(er, { variant: "h6", color: "primary", fontWeight: 600, children: [
                  "$",
                  s.price
                ] }),
                /* @__PURE__ */ E.jsx(
                  Ek,
                  {
                    variant: "contained",
                    size: "small",
                    startIcon: /* @__PURE__ */ E.jsx(NE, {}),
                    onClick: () => l(s.id),
                    children: "Add to Cart"
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    ) }, s.id)) }),
    i.length === 0 && /* @__PURE__ */ E.jsx(Qn, { sx: { textAlign: "center", py: 8 }, children: /* @__PURE__ */ E.jsx(er, { variant: "h6", color: "text.secondary", children: "No products found matching your criteria." }) })
  ] });
}
const LE = (e = "light") => wc({
  palette: {
    mode: e,
    ...e === "light" ? {
      primary: {
        main: "#1976d2",
        light: "#42a5f5",
        dark: "#1565c0"
      },
      secondary: {
        main: "#9c27b0",
        light: "#ba68c8",
        dark: "#7b1fa2"
      },
      background: {
        default: "#f5f5f5",
        paper: "#ffffff"
      },
      text: {
        primary: "#212121",
        secondary: "#757575"
      }
    } : {
      primary: {
        main: "#90caf9",
        light: "#e3f2fd",
        dark: "#42a5f5"
      },
      secondary: {
        main: "#ce93d8",
        light: "#f3e5f5",
        dark: "#ab47bc"
      },
      background: {
        default: "#121212",
        paper: "#1e1e1e"
      },
      text: {
        primary: "#ffffff",
        secondary: "#b0b0b0"
      }
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: e === "light" ? "0 2px 8px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.3)"
        }
      }
    }
  }
}), FE = (e) => e === "light" || e === "dark", AE = (e) => e && FE(e) ? e : "light", jE = (e) => {
  if (e)
    try {
      e.unmount();
    } catch (t) {
      console.error("Error unmounting React root:", t);
    }
}, DE = (e, t) => {
  if (!customElements.get(e))
    try {
      customElements.define(e, t);
    } catch (n) {
      console.error(`Error registering web component ${e}:`, n);
    }
};
class BE extends HTMLElement {
  constructor() {
    super(...arguments);
    na(this, "root", null);
    na(this, "themeMode", "light");
  }
  static get observedAttributes() {
    return ["theme"];
  }
  connectedCallback() {
    this.mount();
  }
  disconnectedCallback() {
    jE(this.root), this.root = null;
  }
  attributeChangedCallback(n, r, o) {
    n === "theme" && r !== o && (this.themeMode = AE(o), this.mount());
  }
  mount() {
    this.root && this.root.unmount(), this.innerHTML = "";
    const n = document.createElement("div");
    this.appendChild(n);
    const r = LE(this.themeMode);
    this.root = Xu.createRoot(n), this.root.render(
      /* @__PURE__ */ E.jsx(Qt.StrictMode, { children: /* @__PURE__ */ E.jsxs(eS, { theme: r, children: [
        /* @__PURE__ */ E.jsx(Gk, {}),
        /* @__PURE__ */ E.jsx(zE, {})
      ] }) })
    );
  }
}
DE("products-widget", BE);
export {
  BE as default
};
