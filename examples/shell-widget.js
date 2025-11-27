var jh = Object.defineProperty;
var Ah = (e, t, n) => t in e ? jh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $r = (e, t, n) => Ah(e, typeof t != "symbol" ? t + "" : t, n);
function Bh(e, t) {
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
function Fh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function pn(e) {
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
var cd = { exports: {} }, ol = {}, fd = { exports: {} }, B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To = Symbol.for("react.element"), Dh = Symbol.for("react.portal"), Wh = Symbol.for("react.fragment"), Uh = Symbol.for("react.strict_mode"), Vh = Symbol.for("react.profiler"), Hh = Symbol.for("react.provider"), Gh = Symbol.for("react.context"), Kh = Symbol.for("react.forward_ref"), Qh = Symbol.for("react.suspense"), Yh = Symbol.for("react.memo"), Xh = Symbol.for("react.lazy"), dc = Symbol.iterator;
function Zh(e) {
  return e === null || typeof e != "object" ? null : (e = dc && e[dc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var dd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, pd = Object.assign, md = {};
function xr(e, t, n) {
  this.props = e, this.context = t, this.refs = md, this.updater = n || dd;
}
xr.prototype.isReactComponent = {};
xr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
xr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hd() {
}
hd.prototype = xr.prototype;
function Va(e, t, n) {
  this.props = e, this.context = t, this.refs = md, this.updater = n || dd;
}
var Ha = Va.prototype = new hd();
Ha.constructor = Va;
pd(Ha, xr.prototype);
Ha.isPureReactComponent = !0;
var pc = Array.isArray, gd = Object.prototype.hasOwnProperty, Ga = { current: null }, vd = { key: !0, ref: !0, __self: !0, __source: !0 };
function yd(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) gd.call(t, r) && !vd.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: To, type: e, key: i, ref: l, props: o, _owner: Ga.current };
}
function qh(e, t) {
  return { $$typeof: To, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ka(e) {
  return typeof e == "object" && e !== null && e.$$typeof === To;
}
function Jh(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var mc = /\/+/g;
function os(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Jh("" + e.key) : t.toString(36);
}
function ci(e, t, n, r, o) {
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
        case To:
        case Dh:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + os(l, 0) : r, pc(o) ? (n = "", e != null && (n = e.replace(mc, "$&/") + "/"), ci(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Ka(o) && (o = qh(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(mc, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", pc(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var a = r + os(i, s);
    l += ci(i, t, n, a, o);
  }
  else if (a = Zh(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done; ) i = i.value, a = r + os(i, s++), l += ci(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Fo(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return ci(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function eg(e) {
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
var Ie = { current: null }, fi = { transition: null }, tg = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: fi, ReactCurrentOwner: Ga };
function xd() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = { map: Fo, forEach: function(e, t, n) {
  Fo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Fo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Fo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ka(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
B.Component = xr;
B.Fragment = Wh;
B.Profiler = Vh;
B.PureComponent = Va;
B.StrictMode = Uh;
B.Suspense = Qh;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tg;
B.act = xd;
B.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = pd({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Ga.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) gd.call(t, a) && !vd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: To, type: e.type, key: o, ref: i, props: r, _owner: l };
};
B.createContext = function(e) {
  return e = { $$typeof: Gh, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Hh, _context: e }, e.Consumer = e;
};
B.createElement = yd;
B.createFactory = function(e) {
  var t = yd.bind(null, e);
  return t.type = e, t;
};
B.createRef = function() {
  return { current: null };
};
B.forwardRef = function(e) {
  return { $$typeof: Kh, render: e };
};
B.isValidElement = Ka;
B.lazy = function(e) {
  return { $$typeof: Xh, _payload: { _status: -1, _result: e }, _init: eg };
};
B.memo = function(e, t) {
  return { $$typeof: Yh, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function(e) {
  var t = fi.transition;
  fi.transition = {};
  try {
    e();
  } finally {
    fi.transition = t;
  }
};
B.unstable_act = xd;
B.useCallback = function(e, t) {
  return Ie.current.useCallback(e, t);
};
B.useContext = function(e) {
  return Ie.current.useContext(e);
};
B.useDebugValue = function() {
};
B.useDeferredValue = function(e) {
  return Ie.current.useDeferredValue(e);
};
B.useEffect = function(e, t) {
  return Ie.current.useEffect(e, t);
};
B.useId = function() {
  return Ie.current.useId();
};
B.useImperativeHandle = function(e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function(e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function(e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
B.useMemo = function(e, t) {
  return Ie.current.useMemo(e, t);
};
B.useReducer = function(e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
B.useRef = function(e) {
  return Ie.current.useRef(e);
};
B.useState = function(e) {
  return Ie.current.useState(e);
};
B.useSyncExternalStore = function(e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function() {
  return Ie.current.useTransition();
};
B.version = "18.3.1";
fd.exports = B;
var E = fd.exports;
const Sn = /* @__PURE__ */ Fh(E), Ds = /* @__PURE__ */ Bh({
  __proto__: null,
  default: Sn
}, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ng = E, rg = Symbol.for("react.element"), og = Symbol.for("react.fragment"), ig = Object.prototype.hasOwnProperty, lg = ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, sg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sd(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) ig.call(t, r) && !sg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: rg, type: e, key: i, ref: l, props: o, _owner: lg.current };
}
ol.Fragment = og;
ol.jsx = Sd;
ol.jsxs = Sd;
cd.exports = ol;
var T = cd.exports;
const no = {
  black: "#000",
  white: "#fff"
}, Nn = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ln = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, In = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, jn = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, An = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Or = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, ag = {
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
function ro(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ro
}, Symbol.toStringTag, { value: "Module" })), ur = "$$material";
function w() {
  return w = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, w.apply(null, arguments);
}
function G(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function cg(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function fg(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var dg = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(fg(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = cg(o);
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
}(), $e = "-ms-", Ri = "-moz-", W = "-webkit-", kd = "comm", Qa = "rule", Ya = "decl", pg = "@import", wd = "@keyframes", mg = "@layer", hg = Math.abs, il = String.fromCharCode, gg = Object.assign;
function vg(e, t) {
  return Ce(e, 0) ^ 45 ? (((t << 2 ^ Ce(e, 0)) << 2 ^ Ce(e, 1)) << 2 ^ Ce(e, 2)) << 2 ^ Ce(e, 3) : 0;
}
function Cd(e) {
  return e.trim();
}
function yg(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function U(e, t, n) {
  return e.replace(t, n);
}
function Ws(e, t) {
  return e.indexOf(t);
}
function Ce(e, t) {
  return e.charCodeAt(t) | 0;
}
function oo(e, t, n) {
  return e.slice(t, n);
}
function Pt(e) {
  return e.length;
}
function Xa(e) {
  return e.length;
}
function Do(e, t) {
  return t.push(e), e;
}
function xg(e, t) {
  return e.map(t).join("");
}
var ll = 1, cr = 1, Ed = 0, Ue = 0, pe = 0, Sr = "";
function sl(e, t, n, r, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ll, column: cr, length: l, return: "" };
}
function Mr(e, t) {
  return gg(sl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Sg() {
  return pe;
}
function kg() {
  return pe = Ue > 0 ? Ce(Sr, --Ue) : 0, cr--, pe === 10 && (cr = 1, ll--), pe;
}
function Qe() {
  return pe = Ue < Ed ? Ce(Sr, Ue++) : 0, cr++, pe === 10 && (cr = 1, ll++), pe;
}
function $t() {
  return Ce(Sr, Ue);
}
function di() {
  return Ue;
}
function Ro(e, t) {
  return oo(Sr, e, t);
}
function io(e) {
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
function _d(e) {
  return ll = cr = 1, Ed = Pt(Sr = e), Ue = 0, [];
}
function Pd(e) {
  return Sr = "", e;
}
function pi(e) {
  return Cd(Ro(Ue - 1, Us(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wg(e) {
  for (; (pe = $t()) && pe < 33; )
    Qe();
  return io(e) > 2 || io(pe) > 3 ? "" : " ";
}
function Cg(e, t) {
  for (; --t && Qe() && !(pe < 48 || pe > 102 || pe > 57 && pe < 65 || pe > 70 && pe < 97); )
    ;
  return Ro(e, di() + (t < 6 && $t() == 32 && Qe() == 32));
}
function Us(e) {
  for (; Qe(); )
    switch (pe) {
      case e:
        return Ue;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Us(pe);
        break;
      case 40:
        e === 41 && Us(e);
        break;
      case 92:
        Qe();
        break;
    }
  return Ue;
}
function Eg(e, t) {
  for (; Qe() && e + pe !== 57; )
    if (e + pe === 84 && $t() === 47)
      break;
  return "/*" + Ro(t, Ue - 1) + "*" + il(e === 47 ? e : Qe());
}
function _g(e) {
  for (; !io($t()); )
    Qe();
  return Ro(e, Ue);
}
function Pg(e) {
  return Pd(mi("", null, null, null, [""], e = _d(e), 0, [0], e));
}
function mi(e, t, n, r, o, i, l, s, a) {
  for (var u = 0, c = 0, d = l, m = 0, y = 0, v = 0, g = 1, P = 1, p = 1, f = 0, h = "", x = o, C = i, k = r, S = h; P; )
    switch (v = f, f = Qe()) {
      case 40:
        if (v != 108 && Ce(S, d - 1) == 58) {
          Ws(S += U(pi(f), "&", "&\f"), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += pi(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += wg(v);
        break;
      case 92:
        S += Cg(di() - 1, 7);
        continue;
      case 47:
        switch ($t()) {
          case 42:
          case 47:
            Do(Tg(Eg(Qe(), di()), t, n), a);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * g:
        s[u++] = Pt(S) * p;
      case 125 * g:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            P = 0;
          case 59 + c:
            p == -1 && (S = U(S, /\f/g, "")), y > 0 && Pt(S) - d && Do(y > 32 ? gc(S + ";", r, n, d - 1) : gc(U(S, " ", "") + ";", r, n, d - 2), a);
            break;
          case 59:
            S += ";";
          default:
            if (Do(k = hc(S, t, n, u, c, o, s, h, x = [], C = [], d), i), f === 123)
              if (c === 0)
                mi(S, t, k, k, x, i, d, s, C);
              else
                switch (m === 99 && Ce(S, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mi(e, k, k, r && Do(hc(e, k, k, 0, 0, o, s, h, o, x = [], d), C), o, C, d, s, r ? x : C);
                    break;
                  default:
                    mi(S, k, k, k, [""], C, 0, s, C);
                }
        }
        u = c = y = 0, g = p = 1, h = S = "", d = l;
        break;
      case 58:
        d = 1 + Pt(S), y = v;
      default:
        if (g < 1) {
          if (f == 123)
            --g;
          else if (f == 125 && g++ == 0 && kg() == 125)
            continue;
        }
        switch (S += il(f), f * g) {
          case 38:
            p = c > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            s[u++] = (Pt(S) - 1) * p, p = 1;
            break;
          case 64:
            $t() === 45 && (S += pi(Qe())), m = $t(), c = d = Pt(h = S += _g(di())), f++;
            break;
          case 45:
            v === 45 && Pt(S) == 2 && (g = 0);
        }
    }
  return i;
}
function hc(e, t, n, r, o, i, l, s, a, u, c) {
  for (var d = o - 1, m = o === 0 ? i : [""], y = Xa(m), v = 0, g = 0, P = 0; v < r; ++v)
    for (var p = 0, f = oo(e, d + 1, d = hg(g = l[v])), h = e; p < y; ++p)
      (h = Cd(g > 0 ? m[p] + " " + f : U(f, /&\f/g, m[p]))) && (a[P++] = h);
  return sl(e, t, n, o === 0 ? Qa : s, a, u, c);
}
function Tg(e, t, n) {
  return sl(e, t, n, kd, il(Sg()), oo(e, 2, -2), 0);
}
function gc(e, t, n, r) {
  return sl(e, t, n, Ya, oo(e, 0, r), oo(e, r + 1, -1), r);
}
function er(e, t) {
  for (var n = "", r = Xa(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Rg(e, t, n, r) {
  switch (e.type) {
    case mg:
      if (e.children.length) break;
    case pg:
    case Ya:
      return e.return = e.return || e.value;
    case kd:
      return "";
    case wd:
      return e.return = e.value + "{" + er(e.children, r) + "}";
    case Qa:
      e.value = e.props.join(",");
  }
  return Pt(n = er(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function $g(e) {
  var t = Xa(e);
  return function(n, r, o, i) {
    for (var l = "", s = 0; s < t; s++)
      l += e[s](n, r, o, i) || "";
    return l;
  };
}
function Og(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Td(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Mg = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = $t(), o === 38 && i === 12 && (n[r] = 1), !io(i); )
    Qe();
  return Ro(t, Ue);
}, zg = function(t, n) {
  var r = -1, o = 44;
  do
    switch (io(o)) {
      case 0:
        o === 38 && $t() === 12 && (n[r] = 1), t[r] += Mg(Ue - 1, n, r);
        break;
      case 2:
        t[r] += pi(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = $t() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += il(o);
    }
  while (o = Qe());
  return t;
}, bg = function(t, n) {
  return Pd(zg(_d(t), n));
}, vc = /* @__PURE__ */ new WeakMap(), Ng = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !vc.get(r)) && !o) {
      vc.set(t, !0);
      for (var i = [], l = bg(n, i), s = r.props, a = 0, u = 0; a < l.length; a++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[a] ? l[a].replace(/&\f/g, s[c]) : s[c] + " " + l[a];
    }
  }
}, Lg = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Rd(e, t) {
  switch (vg(e, t)) {
    case 5103:
      return W + "print-" + e + e;
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
      return W + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return W + e + Ri + e + $e + e + e;
    case 6828:
    case 4268:
      return W + e + $e + e + e;
    case 6165:
      return W + e + $e + "flex-" + e + e;
    case 5187:
      return W + e + U(e, /(\w+).+(:[^]+)/, W + "box-$1$2" + $e + "flex-$1$2") + e;
    case 5443:
      return W + e + $e + "flex-item-" + U(e, /flex-|-self/, "") + e;
    case 4675:
      return W + e + $e + "flex-line-pack" + U(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return W + e + $e + U(e, "shrink", "negative") + e;
    case 5292:
      return W + e + $e + U(e, "basis", "preferred-size") + e;
    case 6060:
      return W + "box-" + U(e, "-grow", "") + W + e + $e + U(e, "grow", "positive") + e;
    case 4554:
      return W + U(e, /([^-])(transform)/g, "$1" + W + "$2") + e;
    case 6187:
      return U(U(U(e, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, W + "$1$`$1");
    case 4968:
      return U(U(e, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + $e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, W + "$1$2") + e;
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
      if (Pt(e) - 1 - t > 6) switch (Ce(e, t + 1)) {
        case 109:
          if (Ce(e, t + 4) !== 45) break;
        case 102:
          return U(e, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + Ri + (Ce(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Ws(e, "stretch") ? Rd(U(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ce(e, t + 1) !== 115) break;
    case 6444:
      switch (Ce(e, Pt(e) - 3 - (~Ws(e, "!important") && 10))) {
        case 107:
          return U(e, ":", ":" + W) + e;
        case 101:
          return U(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + W + (Ce(e, 14) === 45 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + $e + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ce(e, t + 11)) {
        case 114:
          return W + e + $e + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return W + e + $e + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return W + e + $e + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return W + e + $e + e + e;
  }
  return e;
}
var Ig = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Ya:
      t.return = Rd(t.value, t.length);
      break;
    case wd:
      return er([Mr(t, {
        value: U(t.value, "@", "@" + W)
      })], o);
    case Qa:
      if (t.length) return xg(t.props, function(i) {
        switch (yg(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return er([Mr(t, {
              props: [U(i, /:(read-\w+)/, ":" + Ri + "$1")]
            })], o);
          case "::placeholder":
            return er([Mr(t, {
              props: [U(i, /:(plac\w+)/, ":" + W + "input-$1")]
            }), Mr(t, {
              props: [U(i, /:(plac\w+)/, ":" + Ri + "$1")]
            }), Mr(t, {
              props: [U(i, /:(plac\w+)/, $e + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, jg = [Ig], $d = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var P = g.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || jg, i = {}, l, s = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var P = g.getAttribute("data-emotion").split(" "), p = 1; p < P.length; p++)
        i[P[p]] = !0;
      s.push(g);
    }
  );
  var a, u = [Ng, Lg];
  {
    var c, d = [Rg, Og(function(g) {
      c.insert(g);
    })], m = $g(u.concat(o, d)), y = function(P) {
      return er(Pg(P), m);
    };
    a = function(P, p, f, h) {
      c = f, y(P ? P + "{" + p.styles + "}" : p.styles), h && (v.inserted[p.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new dg({
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
}, Od = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke = typeof Symbol == "function" && Symbol.for, Za = ke ? Symbol.for("react.element") : 60103, qa = ke ? Symbol.for("react.portal") : 60106, al = ke ? Symbol.for("react.fragment") : 60107, ul = ke ? Symbol.for("react.strict_mode") : 60108, cl = ke ? Symbol.for("react.profiler") : 60114, fl = ke ? Symbol.for("react.provider") : 60109, dl = ke ? Symbol.for("react.context") : 60110, Ja = ke ? Symbol.for("react.async_mode") : 60111, pl = ke ? Symbol.for("react.concurrent_mode") : 60111, ml = ke ? Symbol.for("react.forward_ref") : 60112, hl = ke ? Symbol.for("react.suspense") : 60113, Ag = ke ? Symbol.for("react.suspense_list") : 60120, gl = ke ? Symbol.for("react.memo") : 60115, vl = ke ? Symbol.for("react.lazy") : 60116, Bg = ke ? Symbol.for("react.block") : 60121, Fg = ke ? Symbol.for("react.fundamental") : 60117, Dg = ke ? Symbol.for("react.responder") : 60118, Wg = ke ? Symbol.for("react.scope") : 60119;
function Ze(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Za:
        switch (e = e.type, e) {
          case Ja:
          case pl:
          case al:
          case cl:
          case ul:
          case hl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case dl:
              case ml:
              case vl:
              case gl:
              case fl:
                return e;
              default:
                return t;
            }
        }
      case qa:
        return t;
    }
  }
}
function Md(e) {
  return Ze(e) === pl;
}
H.AsyncMode = Ja;
H.ConcurrentMode = pl;
H.ContextConsumer = dl;
H.ContextProvider = fl;
H.Element = Za;
H.ForwardRef = ml;
H.Fragment = al;
H.Lazy = vl;
H.Memo = gl;
H.Portal = qa;
H.Profiler = cl;
H.StrictMode = ul;
H.Suspense = hl;
H.isAsyncMode = function(e) {
  return Md(e) || Ze(e) === Ja;
};
H.isConcurrentMode = Md;
H.isContextConsumer = function(e) {
  return Ze(e) === dl;
};
H.isContextProvider = function(e) {
  return Ze(e) === fl;
};
H.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Za;
};
H.isForwardRef = function(e) {
  return Ze(e) === ml;
};
H.isFragment = function(e) {
  return Ze(e) === al;
};
H.isLazy = function(e) {
  return Ze(e) === vl;
};
H.isMemo = function(e) {
  return Ze(e) === gl;
};
H.isPortal = function(e) {
  return Ze(e) === qa;
};
H.isProfiler = function(e) {
  return Ze(e) === cl;
};
H.isStrictMode = function(e) {
  return Ze(e) === ul;
};
H.isSuspense = function(e) {
  return Ze(e) === hl;
};
H.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === al || e === pl || e === cl || e === ul || e === hl || e === Ag || typeof e == "object" && e !== null && (e.$$typeof === vl || e.$$typeof === gl || e.$$typeof === fl || e.$$typeof === dl || e.$$typeof === ml || e.$$typeof === Fg || e.$$typeof === Dg || e.$$typeof === Wg || e.$$typeof === Bg);
};
H.typeOf = Ze;
Od.exports = H;
var Ug = Od.exports, zd = Ug, Vg = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Hg = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, bd = {};
bd[zd.ForwardRef] = Vg;
bd[zd.Memo] = Hg;
var Gg = !0;
function Nd(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var eu = function(t, n, r) {
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
  Gg === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, tu = function(t, n, r) {
  eu(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Kg(e) {
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
var Qg = {
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
}, Yg = /[A-Z]|^ms/g, Xg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ld = function(t) {
  return t.charCodeAt(1) === 45;
}, yc = function(t) {
  return t != null && typeof t != "boolean";
}, is = /* @__PURE__ */ Td(function(e) {
  return Ld(e) ? e : e.replace(Yg, "-$&").toLowerCase();
}), xc = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Xg, function(r, o, i) {
          return Tt = {
            name: o,
            styles: i,
            next: Tt
          }, o;
        });
  }
  return Qg[t] !== 1 && !Ld(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function lo(e, t, n) {
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
        return Tt = {
          name: o.name,
          styles: o.styles,
          next: Tt
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var l = i.next;
        if (l !== void 0)
          for (; l !== void 0; )
            Tt = {
              name: l.name,
              styles: l.styles,
              next: Tt
            }, l = l.next;
        var s = i.styles + ";";
        return s;
      }
      return Zg(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = Tt, u = n(e);
        return Tt = a, lo(e, t, u);
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
function Zg(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += lo(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object") {
        var s = l;
        t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : yc(s) && (r += is(i) + ":" + xc(i, s) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
        for (var a = 0; a < l.length; a++)
          yc(l[a]) && (r += is(i) + ":" + xc(i, l[a]) + ";");
      else {
        var u = lo(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += is(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var Sc = /label:\s*([^\s;{]+)\s*(;|$)/g, Tt;
function $o(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Tt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += lo(n, t, i);
  else {
    var l = i;
    o += l[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += lo(n, t, e[s]), r) {
      var a = i;
      o += a[s];
    }
  Sc.lastIndex = 0;
  for (var u = "", c; (c = Sc.exec(o)) !== null; )
    u += "-" + c[1];
  var d = Kg(o) + u;
  return {
    name: d,
    styles: o,
    next: Tt
  };
}
var qg = function(t) {
  return t();
}, Id = Ds.useInsertionEffect ? Ds.useInsertionEffect : !1, jd = Id || qg, kc = Id || E.useLayoutEffect, Ad = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ $d({
    key: "css"
  }) : null
), Jg = Ad.Provider, nu = function(t) {
  return /* @__PURE__ */ E.forwardRef(function(n, r) {
    var o = E.useContext(Ad);
    return t(n, o, r);
  });
}, kr = /* @__PURE__ */ E.createContext({}), ru = {}.hasOwnProperty, Vs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", e0 = function(t, n) {
  var r = {};
  for (var o in n)
    ru.call(n, o) && (r[o] = n[o]);
  return r[Vs] = t, r;
}, t0 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return eu(n, r, o), jd(function() {
    return tu(n, r, o);
  }), null;
}, n0 = /* @__PURE__ */ nu(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Vs], i = [r], l = "";
  typeof e.className == "string" ? l = Nd(t.registered, i, e.className) : e.className != null && (l = e.className + " ");
  var s = $o(i, void 0, E.useContext(kr));
  l += t.key + "-" + s.name;
  var a = {};
  for (var u in e)
    ru.call(e, u) && u !== "css" && u !== Vs && (a[u] = e[u]);
  return a.className = l, n && (a.ref = n), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(t0, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ E.createElement(o, a));
}), r0 = n0, ls = { exports: {} }, wc;
function Bd() {
  return wc || (wc = 1, function(e) {
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
  }(ls)), ls.exports;
}
Bd();
var Cc = function(t, n) {
  var r = arguments;
  if (n == null || !ru.call(n, "css"))
    return E.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = r0, i[1] = e0(t, n);
  for (var l = 2; l < o; l++)
    i[l] = r[l];
  return E.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Cc || (Cc = {}));
var o0 = /* @__PURE__ */ nu(function(e, t) {
  var n = e.styles, r = $o([n], void 0, E.useContext(kr)), o = E.useRef();
  return kc(function() {
    var i = t.key + "-global", l = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), a !== null && (s = !0, a.setAttribute("data-emotion", i), l.hydrate([a])), o.current = [l, s], function() {
      l.flush();
    };
  }, [t]), kc(function() {
    var i = o.current, l = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && tu(t, r.next, !0), l.tags.length) {
      var a = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = a, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
});
function Fd() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return $o(t);
}
function yl() {
  var e = Fd.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var i0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, l0 = /* @__PURE__ */ Td(
  function(e) {
    return i0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), s0 = l0, a0 = function(t) {
  return t !== "theme";
}, Ec = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? s0 : a0;
}, _c = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, u0 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return eu(n, r, o), jd(function() {
    return tu(n, r, o);
  }), null;
}, c0 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var s = _c(t, n, r), a = s || Ec(o), u = !a("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      var m = c[0];
      d.push(m[0]);
      for (var y = c.length, v = 1; v < y; v++)
        d.push(c[v], m[v]);
    }
    var g = nu(function(P, p, f) {
      var h = u && P.as || o, x = "", C = [], k = P;
      if (P.theme == null) {
        k = {};
        for (var S in P)
          k[S] = P[S];
        k.theme = E.useContext(kr);
      }
      typeof P.className == "string" ? x = Nd(p.registered, C, P.className) : P.className != null && (x = P.className + " ");
      var R = $o(d.concat(C), p.registered, k);
      x += p.key + "-" + R.name, l !== void 0 && (x += " " + l);
      var z = u && s === void 0 ? Ec(h) : a, O = {};
      for (var F in P)
        u && F === "as" || z(F) && (O[F] = P[F]);
      return O.className = x, f && (O.ref = f), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(u0, {
        cache: p,
        serialized: R,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ E.createElement(h, O));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + l;
      }
    }), g.withComponent = function(P, p) {
      var f = e(P, w({}, n, p, {
        shouldForwardProp: _c(g, p, !0)
      }));
      return f.apply(void 0, d);
    }, g;
  };
}, f0 = [
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
], Hs = c0.bind(null);
f0.forEach(function(e) {
  Hs[e] = Hs(e);
});
function d0(e, t) {
  const n = $d({
    key: "css",
    prepend: e
  });
  if (t) {
    const r = n.insert;
    n.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), r(...o));
  }
  return n;
}
const ss = /* @__PURE__ */ new Map();
function p0(e) {
  const {
    injectFirst: t,
    enableCssLayer: n,
    children: r
  } = e, o = E.useMemo(() => {
    const i = `${t}-${n}`;
    if (typeof document == "object" && ss.has(i))
      return ss.get(i);
    const l = d0(t, n);
    return ss.set(i, l), l;
  }, [t, n]);
  return t || n ? /* @__PURE__ */ T.jsx(Jg, {
    value: o,
    children: r
  }) : r;
}
function m0(e) {
  return e == null || Object.keys(e).length === 0;
}
function Dd(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(m0(o) ? n : o) : t;
  return /* @__PURE__ */ T.jsx(o0, {
    styles: r
  });
}
function ou(e, t) {
  return Hs(e, t);
}
const Wd = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Pc = [];
function $i(e) {
  return Pc[0] = e, $o(Pc);
}
const h0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Dd,
  StyledEngineProvider: p0,
  ThemeContext: kr,
  css: Fd,
  default: ou,
  internal_processStyles: Wd,
  internal_serializeStyles: $i,
  keyframes: yl
}, Symbol.toStringTag, { value: "Module" }));
function jt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ud(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !jt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ud(e[n]);
  }), t;
}
function Ot(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? w({}, e) : e;
  return jt(e) && jt(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ E.isValidElement(t[o]) ? r[o] = t[o] : jt(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && jt(e[o]) ? r[o] = Ot(e[o], t[o], n) : n.clone ? r[o] = jt(t[o]) ? Ud(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const g0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ot,
  isPlainObject: jt
}, Symbol.toStringTag, { value: "Module" })), v0 = ["values", "unit", "step"], y0 = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => w({}, n, {
    [r.key]: r.val
  }), {});
};
function Vd(e) {
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
  } = e, o = G(e, v0), i = y0(t), l = Object.keys(i);
  function s(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function a(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function u(m, y) {
    const v = l.indexOf(y);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(v !== -1 && typeof t[l[v]] == "number" ? t[l[v]] : y) - r / 100}${n})`;
  }
  function c(m) {
    return l.indexOf(m) + 1 < l.length ? u(m, l[l.indexOf(m) + 1]) : s(m);
  }
  function d(m) {
    const y = l.indexOf(m);
    return y === 0 ? s(l[1]) : y === l.length - 1 ? a(l[y]) : u(m, l[l.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return w({
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
const x0 = {
  borderRadius: 4
};
function Hr(e, t) {
  return t ? Ot(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const iu = {
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
}, Tc = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${iu[e]}px)`
};
function ct(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Tc;
    return t.reduce((l, s, a) => (l[i.up(i.keys[a])] = n(t[a]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Tc;
    return Object.keys(t).reduce((l, s) => {
      if (Object.keys(i.values || iu).indexOf(s) !== -1) {
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
function S0(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Rc(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function k0(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function xl({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || k0(e, t), o = Object.keys(r);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((l, s, a) => (Array.isArray(e) ? (l[s] = e[a] != null ? e[a] : e[i], i = a) : typeof e == "object" ? (l[s] = e[s] != null ? e[s] : e[i], i = s) : l[s] = e, l), {});
}
function N(e) {
  if (typeof e != "string")
    throw new Error(ro(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const w0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: N
}, Symbol.toStringTag, { value: "Module" }));
function fr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Oi(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = fr(e, n) || r, t && (o = t(o, r, e)), o;
}
function fe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (l) => {
    if (l[t] == null)
      return null;
    const s = l[t], a = l.theme, u = fr(a, r) || {};
    return ct(l, s, (d) => {
      let m = Oi(u, o, d);
      return d === m && typeof d == "string" && (m = Oi(u, o, `${t}${d === "default" ? "" : N(d)}`, d)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function C0(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const E0 = {
  m: "margin",
  p: "padding"
}, _0 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, $c = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, P0 = C0((e) => {
  if (e.length > 2)
    if ($c[e])
      e = $c[e];
    else
      return [e];
  const [t, n] = e.split(""), r = E0[t], o = _0[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), lu = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], su = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...lu, ...su];
function Oo(e, t, n, r) {
  var o;
  const i = (o = fr(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (l) => typeof l == "string" ? l : i * l : Array.isArray(i) ? (l) => typeof l == "string" ? l : i[l] : typeof i == "function" ? i : () => {
  };
}
function Hd(e) {
  return Oo(e, "spacing", 8);
}
function Mo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function T0(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Mo(t, n), r), {});
}
function R0(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = P0(n), i = T0(o, r), l = e[n];
  return ct(e, l, i);
}
function Gd(e, t) {
  const n = Hd(e.theme);
  return Object.keys(e).map((r) => R0(e, t, r, n)).reduce(Hr, {});
}
function se(e) {
  return Gd(e, lu);
}
se.propTypes = {};
se.filterProps = lu;
function ae(e) {
  return Gd(e, su);
}
ae.propTypes = {};
ae.filterProps = su;
function $0(e = 8) {
  if (e.mui)
    return e;
  const t = Hd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const l = t(i);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = !0, n;
}
function Sl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Hr(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function it(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function mt(e, t) {
  return fe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const O0 = mt("border", it), M0 = mt("borderTop", it), z0 = mt("borderRight", it), b0 = mt("borderBottom", it), N0 = mt("borderLeft", it), L0 = mt("borderColor"), I0 = mt("borderTopColor"), j0 = mt("borderRightColor"), A0 = mt("borderBottomColor"), B0 = mt("borderLeftColor"), F0 = mt("outline", it), D0 = mt("outlineColor"), kl = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Oo(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Mo(t, r)
    });
    return ct(e, e.borderRadius, n);
  }
  return null;
};
kl.propTypes = {};
kl.filterProps = ["borderRadius"];
Sl(O0, M0, z0, b0, N0, L0, I0, j0, A0, B0, kl, F0, D0);
const wl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Oo(e.theme, "spacing", 8), n = (r) => ({
      gap: Mo(t, r)
    });
    return ct(e, e.gap, n);
  }
  return null;
};
wl.propTypes = {};
wl.filterProps = ["gap"];
const Cl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Oo(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Mo(t, r)
    });
    return ct(e, e.columnGap, n);
  }
  return null;
};
Cl.propTypes = {};
Cl.filterProps = ["columnGap"];
const El = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Oo(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Mo(t, r)
    });
    return ct(e, e.rowGap, n);
  }
  return null;
};
El.propTypes = {};
El.filterProps = ["rowGap"];
const W0 = fe({
  prop: "gridColumn"
}), U0 = fe({
  prop: "gridRow"
}), V0 = fe({
  prop: "gridAutoFlow"
}), H0 = fe({
  prop: "gridAutoColumns"
}), G0 = fe({
  prop: "gridAutoRows"
}), K0 = fe({
  prop: "gridTemplateColumns"
}), Q0 = fe({
  prop: "gridTemplateRows"
}), Y0 = fe({
  prop: "gridTemplateAreas"
}), X0 = fe({
  prop: "gridArea"
});
Sl(wl, Cl, El, W0, U0, V0, H0, G0, K0, Q0, Y0, X0);
function tr(e, t) {
  return t === "grey" ? t : e;
}
const Z0 = fe({
  prop: "color",
  themeKey: "palette",
  transform: tr
}), q0 = fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: tr
}), J0 = fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: tr
});
Sl(Z0, q0, J0);
function Ge(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ev = fe({
  prop: "width",
  transform: Ge
}), au = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || iu[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Ge(n)
      };
    };
    return ct(e, e.maxWidth, t);
  }
  return null;
};
au.filterProps = ["maxWidth"];
const tv = fe({
  prop: "minWidth",
  transform: Ge
}), nv = fe({
  prop: "height",
  transform: Ge
}), rv = fe({
  prop: "maxHeight",
  transform: Ge
}), ov = fe({
  prop: "minHeight",
  transform: Ge
});
fe({
  prop: "size",
  cssProperty: "width",
  transform: Ge
});
fe({
  prop: "size",
  cssProperty: "height",
  transform: Ge
});
const iv = fe({
  prop: "boxSizing"
});
Sl(ev, au, tv, nv, rv, ov, iv);
const zo = {
  // borders
  border: {
    themeKey: "borders",
    transform: it
  },
  borderTop: {
    themeKey: "borders",
    transform: it
  },
  borderRight: {
    themeKey: "borders",
    transform: it
  },
  borderBottom: {
    themeKey: "borders",
    transform: it
  },
  borderLeft: {
    themeKey: "borders",
    transform: it
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
    transform: it
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: kl
  },
  // palette
  color: {
    themeKey: "palette",
    transform: tr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: tr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: tr
  },
  // spacing
  p: {
    style: ae
  },
  pt: {
    style: ae
  },
  pr: {
    style: ae
  },
  pb: {
    style: ae
  },
  pl: {
    style: ae
  },
  px: {
    style: ae
  },
  py: {
    style: ae
  },
  padding: {
    style: ae
  },
  paddingTop: {
    style: ae
  },
  paddingRight: {
    style: ae
  },
  paddingBottom: {
    style: ae
  },
  paddingLeft: {
    style: ae
  },
  paddingX: {
    style: ae
  },
  paddingY: {
    style: ae
  },
  paddingInline: {
    style: ae
  },
  paddingInlineStart: {
    style: ae
  },
  paddingInlineEnd: {
    style: ae
  },
  paddingBlock: {
    style: ae
  },
  paddingBlockStart: {
    style: ae
  },
  paddingBlockEnd: {
    style: ae
  },
  m: {
    style: se
  },
  mt: {
    style: se
  },
  mr: {
    style: se
  },
  mb: {
    style: se
  },
  ml: {
    style: se
  },
  mx: {
    style: se
  },
  my: {
    style: se
  },
  margin: {
    style: se
  },
  marginTop: {
    style: se
  },
  marginRight: {
    style: se
  },
  marginBottom: {
    style: se
  },
  marginLeft: {
    style: se
  },
  marginX: {
    style: se
  },
  marginY: {
    style: se
  },
  marginInline: {
    style: se
  },
  marginInlineStart: {
    style: se
  },
  marginInlineEnd: {
    style: se
  },
  marginBlock: {
    style: se
  },
  marginBlockStart: {
    style: se
  },
  marginBlockEnd: {
    style: se
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
    style: wl
  },
  rowGap: {
    style: El
  },
  columnGap: {
    style: Cl
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
    transform: Ge
  },
  maxWidth: {
    style: au
  },
  minWidth: {
    transform: Ge
  },
  height: {
    transform: Ge
  },
  maxHeight: {
    transform: Ge
  },
  minHeight: {
    transform: Ge
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
function lv(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function sv(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Kd() {
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
    const m = fr(o, u) || {};
    return d ? d(l) : ct(l, r, (v) => {
      let g = Oi(m, c, v);
      return v === g && typeof v == "string" && (g = Oi(m, c, `${n}${v === "default" ? "" : N(v)}`, v)), a === !1 ? g : {
        [a]: g
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
    const s = (r = i.unstable_sxConfig) != null ? r : zo;
    function a(u) {
      let c = u;
      if (typeof u == "function")
        c = u(i);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const d = S0(i.breakpoints), m = Object.keys(d);
      let y = d;
      return Object.keys(c).forEach((v) => {
        const g = sv(c[v], i);
        if (g != null)
          if (typeof g == "object")
            if (s[v])
              y = Hr(y, e(v, g, i, s));
            else {
              const P = ct({
                theme: i
              }, g, (p) => ({
                [v]: p
              }));
              lv(P, g) ? y[v] = t({
                sx: g,
                theme: i,
                nested: !0
              }) : y = Hr(y, P);
            }
          else
            y = Hr(y, e(v, g, i, s));
      }), !l && i.modularCssLayers ? {
        "@layer sx": Rc(m, y)
      } : Rc(m, y);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const wr = Kd();
wr.filterProps = ["sx"];
function Qd(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const av = ["breakpoints", "palette", "spacing", "shape"];
function bo(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, l = G(e, av), s = Vd(n), a = $0(o);
  let u = Ot({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: w({
      mode: "light"
    }, r),
    spacing: a,
    shape: w({}, x0, i)
  }, l);
  return u.applyStyles = Qd, u = t.reduce((c, d) => Ot(c, d), u), u.unstable_sxConfig = w({}, zo, l == null ? void 0 : l.unstable_sxConfig), u.unstable_sx = function(d) {
    return wr({
      sx: d,
      theme: this
    });
  }, u;
}
const uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bo,
  private_createBreakpoints: Vd,
  unstable_applyStyles: Qd
}, Symbol.toStringTag, { value: "Module" }));
function cv(e) {
  return Object.keys(e).length === 0;
}
function uu(e = null) {
  const t = E.useContext(kr);
  return !t || cv(t) ? e : t;
}
const fv = bo();
function _l(e = fv) {
  return uu(e);
}
function as(e) {
  const t = $i(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Yd({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = _l(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((l) => as(typeof l == "function" ? l(o) : l)) : i = as(i)), /* @__PURE__ */ T.jsx(Dd, {
    styles: i
  });
}
const dv = ["sx"], pv = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : zo;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function Pl(e) {
  const {
    sx: t
  } = e, n = G(e, dv), {
    systemProps: r,
    otherProps: o
  } = pv(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...l) => {
    const s = t(...l);
    return jt(s) ? w({}, r, s) : r;
  } : i = w({}, r, t), w({}, o, {
    sx: i
  });
}
const mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wr,
  extendSxProp: Pl,
  unstable_createStyleFunctionSx: Kd,
  unstable_defaultSxConfig: zo
}, Symbol.toStringTag, { value: "Module" })), Oc = (e) => e, hv = () => {
  let e = Oc;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Oc;
    }
  };
}, Xd = hv();
function Zd(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Zd(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function X() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Zd(e)) && (r && (r += " "), r += t);
  return r;
}
const gv = ["className", "component"];
function vv(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = ou("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(wr);
  return /* @__PURE__ */ E.forwardRef(function(a, u) {
    const c = _l(n), d = Pl(a), {
      className: m,
      component: y = "div"
    } = d, v = G(d, gv);
    return /* @__PURE__ */ T.jsx(i, w({
      as: y,
      ref: u,
      className: X(m, o ? o(r) : r),
      theme: t && c[t] || c
    }, v));
  });
}
const yv = {
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
function qe(e, t, n = "Mui") {
  const r = yv[t];
  return r ? `${n}-${r}` : `${Xd.generate(e)}-${t}`;
}
function Je(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = qe(e, o, n);
  }), r;
}
var qd = { exports: {} }, Y = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cu = Symbol.for("react.transitional.element"), fu = Symbol.for("react.portal"), Tl = Symbol.for("react.fragment"), Rl = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), Ol = Symbol.for("react.consumer"), Ml = Symbol.for("react.context"), zl = Symbol.for("react.forward_ref"), bl = Symbol.for("react.suspense"), Nl = Symbol.for("react.suspense_list"), Ll = Symbol.for("react.memo"), Il = Symbol.for("react.lazy"), xv = Symbol.for("react.view_transition"), Sv = Symbol.for("react.client.reference");
function ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case cu:
        switch (e = e.type, e) {
          case Tl:
          case $l:
          case Rl:
          case bl:
          case Nl:
          case xv:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ml:
              case zl:
              case Il:
              case Ll:
                return e;
              case Ol:
                return e;
              default:
                return t;
            }
        }
      case fu:
        return t;
    }
  }
}
Y.ContextConsumer = Ol;
Y.ContextProvider = Ml;
Y.Element = cu;
Y.ForwardRef = zl;
Y.Fragment = Tl;
Y.Lazy = Il;
Y.Memo = Ll;
Y.Portal = fu;
Y.Profiler = $l;
Y.StrictMode = Rl;
Y.Suspense = bl;
Y.SuspenseList = Nl;
Y.isContextConsumer = function(e) {
  return ht(e) === Ol;
};
Y.isContextProvider = function(e) {
  return ht(e) === Ml;
};
Y.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cu;
};
Y.isForwardRef = function(e) {
  return ht(e) === zl;
};
Y.isFragment = function(e) {
  return ht(e) === Tl;
};
Y.isLazy = function(e) {
  return ht(e) === Il;
};
Y.isMemo = function(e) {
  return ht(e) === Ll;
};
Y.isPortal = function(e) {
  return ht(e) === fu;
};
Y.isProfiler = function(e) {
  return ht(e) === $l;
};
Y.isStrictMode = function(e) {
  return ht(e) === Rl;
};
Y.isSuspense = function(e) {
  return ht(e) === bl;
};
Y.isSuspenseList = function(e) {
  return ht(e) === Nl;
};
Y.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Tl || e === $l || e === Rl || e === bl || e === Nl || typeof e == "object" && e !== null && (e.$$typeof === Il || e.$$typeof === Ll || e.$$typeof === Ml || e.$$typeof === Ol || e.$$typeof === zl || e.$$typeof === Sv || e.getModuleId !== void 0);
};
Y.typeOf = ht;
qd.exports = Y;
var Mc = qd.exports;
const kv = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Jd(e) {
  const t = `${e}`.match(kv);
  return t && t[1] || "";
}
function ep(e, t = "") {
  return e.displayName || e.name || Jd(e) || t;
}
function zc(e, t, n) {
  const r = ep(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function wv(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ep(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Mc.ForwardRef:
          return zc(e, e.render, "ForwardRef");
        case Mc.Memo:
          return zc(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Cv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wv,
  getFunctionName: Jd
}, Symbol.toStringTag, { value: "Module" })), Ev = ["ownerState"], _v = ["variants"], Pv = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Tv(e) {
  return Object.keys(e).length === 0;
}
function Rv(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function us(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function bc(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const $v = bo(), Ov = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Wo({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Tv(t) ? e : t[n] || t;
}
function Mv(e) {
  return e ? (t, n) => n[e] : null;
}
function hi(e, t, n) {
  let {
    ownerState: r
  } = t, o = G(t, Ev);
  const i = typeof e == "function" ? e(w({
    ownerState: r
  }, o)) : e;
  if (Array.isArray(i))
    return i.flatMap((l) => hi(l, w({
      ownerState: r
    }, o), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: l = []
    } = i;
    let a = G(i, _v);
    return l.forEach((u) => {
      let c = !0;
      if (typeof u.props == "function" ? c = u.props(w({
        ownerState: r
      }, o, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && o[d] !== u.props[d] && (c = !1);
      }), c) {
        Array.isArray(a) || (a = [a]);
        const d = typeof u.style == "function" ? u.style(w({
          ownerState: r
        }, o, r)) : u.style;
        a.push(n ? bc($i(d), n) : d);
      }
    }), a;
  }
  return n ? bc($i(i), n) : i;
}
function zv(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = $v,
    rootShouldForwardProp: r = us,
    slotShouldForwardProp: o = us
  } = e, i = (l) => wr(w({}, l, {
    theme: Wo(w({}, l, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (l, s = {}) => {
    Wd(l, (k) => k.filter((S) => !(S != null && S.__mui_systemSx)));
    const {
      name: a,
      slot: u,
      skipVariantsResolver: c,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = Mv(Ov(u))
    } = s, y = G(s, Pv), v = a && a.startsWith("Mui") || u ? "components" : "custom", g = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), P = d || !1;
    let p, f = us;
    u === "Root" || u === "root" ? f = r : u ? f = o : Rv(l) && (f = void 0);
    const h = ou(l, w({
      shouldForwardProp: f,
      label: p
    }, y)), x = (k) => typeof k == "function" && k.__emotion_real !== k || jt(k) ? (S) => {
      const R = Wo({
        theme: S.theme,
        defaultTheme: n,
        themeId: t
      });
      return hi(k, w({}, S, {
        theme: R
      }), R.modularCssLayers ? v : void 0);
    } : k, C = (k, ...S) => {
      let R = x(k);
      const z = S ? S.map(x) : [];
      a && m && z.push((A) => {
        const I = Wo(w({}, A, {
          defaultTheme: n,
          themeId: t
        }));
        if (!I.components || !I.components[a] || !I.components[a].styleOverrides)
          return null;
        const K = I.components[a].styleOverrides, le = {};
        return Object.entries(K).forEach(([he, ze]) => {
          le[he] = hi(ze, w({}, A, {
            theme: I
          }), I.modularCssLayers ? "theme" : void 0);
        }), m(A, le);
      }), a && !g && z.push((A) => {
        var I;
        const K = Wo(w({}, A, {
          defaultTheme: n,
          themeId: t
        })), le = K == null || (I = K.components) == null || (I = I[a]) == null ? void 0 : I.variants;
        return hi({
          variants: le
        }, w({}, A, {
          theme: K
        }), K.modularCssLayers ? "theme" : void 0);
      }), P || z.push(i);
      const O = z.length - S.length;
      if (Array.isArray(k) && O > 0) {
        const A = new Array(O).fill("");
        R = [...k, ...A], R.raw = [...k.raw, ...A];
      }
      const F = h(R, ...z);
      return l.muiName && (F.muiName = l.muiName), F;
    };
    return h.withConfig && (C.withConfig = h.withConfig), C;
  };
}
const bv = zv();
function so(e, t) {
  const n = w({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = w({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = w({}, i), Object.keys(o).forEach((l) => {
        n[r][l] = so(o[l], i[l]);
      }));
    } else n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Nv(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : so(t.components[n].defaultProps, r);
}
function Lv({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = _l(n);
  return r && (o = o[r] || o), Nv({
    theme: o,
    name: t,
    props: e
  });
}
const tp = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function Iv(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Iv
}, Symbol.toStringTag, { value: "Module" }));
function Av(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Nc = 0;
function Bv(e) {
  const [t, n] = E.useState(e), r = e || t;
  return E.useEffect(() => {
    t == null && (Nc += 1, n(`mui-${Nc}`));
  }, [t]), r;
}
const Lc = Ds.useId;
function Fv(e) {
  return Lc !== void 0 ? Lc() : Bv(e);
}
function Uo(e) {
  const t = E.useRef(e);
  return tp(() => {
    t.current = e;
  }), E.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Mi(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Av(n, t);
    });
  }, e);
}
const Ic = {};
function Dv(e, t) {
  const n = E.useRef(Ic);
  return n.current === Ic && (n.current = e(t)), n;
}
const Wv = [];
function Uv(e) {
  E.useEffect(e, Wv);
}
class jl {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new jl();
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
function Vv() {
  const e = Dv(jl.create).current;
  return Uv(e.disposeEffect), e;
}
let Al = !0, Gs = !1;
const Hv = new jl(), Gv = {
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
function Kv(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Gv[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Qv(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Al = !0);
}
function cs() {
  Al = !1;
}
function Yv() {
  this.visibilityState === "hidden" && Gs && (Al = !0);
}
function Xv(e) {
  e.addEventListener("keydown", Qv, !0), e.addEventListener("mousedown", cs, !0), e.addEventListener("pointerdown", cs, !0), e.addEventListener("touchstart", cs, !0), e.addEventListener("visibilitychange", Yv, !0);
}
function Zv(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Al || Kv(t);
}
function np() {
  const e = E.useCallback((o) => {
    o != null && Xv(o.ownerDocument);
  }, []), t = E.useRef(!1);
  function n() {
    return t.current ? (Gs = !0, Hv.start(100, () => {
      Gs = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(o) {
    return Zv(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
const rp = (e) => {
  const t = E.useRef({});
  return E.useEffect(() => {
    t.current = e;
  }), t.current;
};
function gt(e, t, n = void 0) {
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
function qv(e) {
  return typeof e == "string";
}
function Jv(e, t, n) {
  return e === void 0 || qv(e) ? t : w({}, t, {
    ownerState: w({}, t.ownerState, n)
  });
}
function ey(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function jc(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ty(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const y = X(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = w({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), g = w({}, n, o, r);
    return y.length > 0 && (g.className = y), Object.keys(v).length > 0 && (g.style = v), {
      props: g,
      internalRef: void 0
    };
  }
  const l = ey(w({}, o, r)), s = jc(r), a = jc(o), u = t(l), c = X(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = w({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), m = w({}, u, n, a, s);
  return c.length > 0 && (m.className = c), Object.keys(d).length > 0 && (m.style = d), {
    props: m,
    internalRef: u.ref
  };
}
function ny(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
const ry = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Ac(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, l = G(e, ry), s = i ? {} : ny(r, o), {
    props: a,
    internalRef: u
  } = ty(w({}, l, {
    externalSlotProps: s
  })), c = Mi(u, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Jv(n, w({}, a, {
    ref: c
  }), o);
}
const op = /* @__PURE__ */ E.createContext(null);
function ip() {
  return E.useContext(op);
}
const oy = typeof Symbol == "function" && Symbol.for, iy = oy ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ly(e, t) {
  return typeof t == "function" ? t(e) : w({}, e, t);
}
function sy(e) {
  const {
    children: t,
    theme: n
  } = e, r = ip(), o = E.useMemo(() => {
    const i = r === null ? n : ly(r, n);
    return i != null && (i[iy] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ T.jsx(op.Provider, {
    value: o,
    children: t
  });
}
const ay = ["value"], uy = /* @__PURE__ */ E.createContext();
function cy(e) {
  let {
    value: t
  } = e, n = G(e, ay);
  return /* @__PURE__ */ T.jsx(uy.Provider, w({
    value: t ?? !0
  }, n));
}
const lp = /* @__PURE__ */ E.createContext(void 0);
function fy({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ T.jsx(lp.Provider, {
    value: e,
    children: t
  });
}
function dy(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? so(o.defaultProps, r) : !o.styleOverrides && !o.variants ? so(o, r) : r;
}
function py({
  props: e,
  name: t
}) {
  const n = E.useContext(lp);
  return dy({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
function my(e) {
  const t = uu(), n = Fv() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, tp(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ T.jsx(Yd, {
    styles: o
  }) : null;
}
const Bc = {};
function Fc(e, t, n, r = !1) {
  return E.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), l = e ? w({}, t, {
        [e]: i
      }) : i;
      return r ? () => l : l;
    }
    return e ? w({}, t, {
      [e]: n
    }) : w({}, t, n);
  }, [e, t, n, r]);
}
function hy(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = uu(Bc), i = ip() || Bc, l = Fc(r, o, n), s = Fc(r, i, n, !0), a = l.direction === "rtl", u = my(l);
  return /* @__PURE__ */ T.jsx(sy, {
    theme: s,
    children: /* @__PURE__ */ T.jsx(kr.Provider, {
      value: l,
      children: /* @__PURE__ */ T.jsx(cy, {
        value: a,
        children: /* @__PURE__ */ T.jsxs(fy, {
          value: l == null ? void 0 : l.components,
          children: [u, t]
        })
      })
    })
  });
}
const gy = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], vy = bo(), yy = bv("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`maxWidth${N(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
  }
}), xy = (e) => Lv({
  props: e,
  name: "MuiContainer",
  defaultTheme: vy
}), Sy = (e, t) => {
  const n = (a) => qe(t, a), {
    classes: r,
    fixed: o,
    disableGutters: i,
    maxWidth: l
  } = e, s = {
    root: ["root", l && `maxWidth${N(String(l))}`, o && "fixed", i && "disableGutters"]
  };
  return gt(s, n, r);
};
function ky(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = yy,
    useThemeProps: n = xy,
    componentName: r = "MuiContainer"
  } = e, o = t(({
    theme: l,
    ownerState: s
  }) => w({
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
  }) => w({}, s.maxWidth === "xs" && {
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
  return /* @__PURE__ */ E.forwardRef(function(s, a) {
    const u = n(s), {
      className: c,
      component: d = "div",
      disableGutters: m = !1,
      fixed: y = !1,
      maxWidth: v = "lg"
    } = u, g = G(u, gy), P = w({}, u, {
      component: d,
      disableGutters: m,
      fixed: y,
      maxWidth: v
    }), p = Sy(P, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ T.jsx(o, w({
        as: d,
        ownerState: P,
        className: X(p.root, c),
        ref: a
      }, g))
    );
  });
}
function wy(e, t) {
  return w({
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
var de = {}, sp = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(sp);
var ap = sp.exports;
const Cy = /* @__PURE__ */ pn(ug), Ey = /* @__PURE__ */ pn(jv);
var up = ap;
Object.defineProperty(de, "__esModule", {
  value: !0
});
var At = de.alpha = pp;
de.blend = jy;
de.colorChannel = void 0;
var _y = de.darken = pu;
de.decomposeColor = ft;
de.emphasize = mp;
var Py = de.getContrastRatio = zy;
de.getLuminance = zi;
de.hexToRgb = cp;
de.hslToRgb = dp;
var Ty = de.lighten = mu;
de.private_safeAlpha = by;
de.private_safeColorChannel = void 0;
de.private_safeDarken = Ny;
de.private_safeEmphasize = Iy;
de.private_safeLighten = Ly;
de.recomposeColor = Cr;
de.rgbToHex = My;
var Dc = up(Cy), Ry = up(Ey);
function du(e, t = 0, n = 1) {
  return (0, Ry.default)(e, t, n);
}
function cp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function $y(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function ft(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ft(cp(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, Dc.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error((0, Dc.default)(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const fp = (e) => {
  const t = ft(e);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
de.colorChannel = fp;
const Oy = (e, t) => {
  try {
    return fp(e);
  } catch {
    return e;
  }
};
de.private_safeColorChannel = Oy;
function Cr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function My(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = ft(e);
  return `#${t.map((n, r) => $y(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function dp(e) {
  e = ft(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), l = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const a = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e.type === "hsla" && (s += "a", a.push(t[3])), Cr({
    type: s,
    values: a
  });
}
function zi(e) {
  e = ft(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ft(dp(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function zy(e, t) {
  const n = zi(e), r = zi(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function pp(e, t) {
  return e = ft(e), t = du(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Cr(e);
}
function by(e, t, n) {
  try {
    return pp(e, t);
  } catch {
    return e;
  }
}
function pu(e, t) {
  if (e = ft(e), t = du(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Cr(e);
}
function Ny(e, t, n) {
  try {
    return pu(e, t);
  } catch {
    return e;
  }
}
function mu(e, t) {
  if (e = ft(e), t = du(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Cr(e);
}
function Ly(e, t, n) {
  try {
    return mu(e, t);
  } catch {
    return e;
  }
}
function mp(e, t = 0.15) {
  return zi(e) > 0.5 ? pu(e, t) : mu(e, t);
}
function Iy(e, t, n) {
  try {
    return mp(e, t);
  } catch {
    return e;
  }
}
function jy(e, t, n, r = 1) {
  const o = (a, u) => Math.round((a ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r), i = ft(e), l = ft(t), s = [o(i.values[0], l.values[0]), o(i.values[1], l.values[1]), o(i.values[2], l.values[2])];
  return Cr({
    type: "rgb",
    values: s
  });
}
const Ay = ["mode", "contrastThreshold", "tonalOffset"], Wc = {
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
    paper: no.white,
    default: no.white
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
}, fs = {
  text: {
    primary: no.white,
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
    active: no.white,
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
function Uc(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Ty(e.main, o) : t === "dark" && (e.dark = _y(e.main, i)));
}
function By(e = "light") {
  return e === "dark" ? {
    main: In[200],
    light: In[50],
    dark: In[400]
  } : {
    main: In[700],
    light: In[400],
    dark: In[800]
  };
}
function Fy(e = "light") {
  return e === "dark" ? {
    main: Ln[200],
    light: Ln[50],
    dark: Ln[400]
  } : {
    main: Ln[500],
    light: Ln[300],
    dark: Ln[700]
  };
}
function Dy(e = "light") {
  return e === "dark" ? {
    main: Nn[500],
    light: Nn[300],
    dark: Nn[700]
  } : {
    main: Nn[700],
    light: Nn[400],
    dark: Nn[800]
  };
}
function Wy(e = "light") {
  return e === "dark" ? {
    main: jn[400],
    light: jn[300],
    dark: jn[700]
  } : {
    main: jn[700],
    light: jn[500],
    dark: jn[900]
  };
}
function Uy(e = "light") {
  return e === "dark" ? {
    main: An[400],
    light: An[300],
    dark: An[700]
  } : {
    main: An[800],
    light: An[500],
    dark: An[900]
  };
}
function Vy(e = "light") {
  return e === "dark" ? {
    main: Or[400],
    light: Or[300],
    dark: Or[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Or[500],
    dark: Or[900]
  };
}
function Hy(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = G(e, Ay), i = e.primary || By(t), l = e.secondary || Fy(t), s = e.error || Dy(t), a = e.info || Wy(t), u = e.success || Uy(t), c = e.warning || Vy(t);
  function d(g) {
    return Py(g, fs.text.primary) >= n ? fs.text.primary : Wc.text.primary;
  }
  const m = ({
    color: g,
    name: P,
    mainShade: p = 500,
    lightShade: f = 300,
    darkShade: h = 700
  }) => {
    if (g = w({}, g), !g.main && g[p] && (g.main = g[p]), !g.hasOwnProperty("main"))
      throw new Error(ro(11, P ? ` (${P})` : "", p));
    if (typeof g.main != "string")
      throw new Error(ro(12, P ? ` (${P})` : "", JSON.stringify(g.main)));
    return Uc(g, "light", f, r), Uc(g, "dark", h, r), g.contrastText || (g.contrastText = d(g.main)), g;
  }, y = {
    dark: fs,
    light: Wc
  };
  return Ot(w({
    // A collection of common colors.
    common: w({}, no),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: a,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: ag,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, y[t]), o);
}
const Gy = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Ky(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Vc = {
  textTransform: "uppercase"
}, Hc = '"Roboto", "Helvetica", "Arial", sans-serif';
function Qy(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Hc,
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
  } = n, m = G(n, Gy), y = o / 14, v = d || ((p) => `${p / u * y}rem`), g = (p, f, h, x, C) => w({
    fontFamily: r,
    fontWeight: p,
    fontSize: v(f),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h
  }, r === Hc ? {
    letterSpacing: `${Ky(x / f)}em`
  } : {}, C, c), P = {
    h1: g(i, 96, 1.167, -1.5),
    h2: g(i, 60, 1.2, -0.5),
    h3: g(l, 48, 1.167, 0),
    h4: g(l, 34, 1.235, 0.25),
    h5: g(l, 24, 1.334, 0),
    h6: g(s, 20, 1.6, 0.15),
    subtitle1: g(l, 16, 1.75, 0.15),
    subtitle2: g(s, 14, 1.57, 0.1),
    body1: g(l, 16, 1.5, 0.15),
    body2: g(l, 14, 1.43, 0.15),
    button: g(s, 14, 1.75, 0.4, Vc),
    caption: g(l, 12, 1.66, 0.4),
    overline: g(l, 12, 2.66, 1, Vc),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ot(w({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: l,
    fontWeightMedium: s,
    fontWeightBold: a
  }, P), m, {
    clone: !1
    // No need to clone deep
  });
}
const Yy = 0.2, Xy = 0.14, Zy = 0.12;
function ee(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Yy})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Xy})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Zy})`].join(",");
}
const qy = ["none", ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Jy = ["duration", "easing", "delay"], e1 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, t1 = {
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
function Gc(e) {
  return `${Math.round(e)}ms`;
}
function n1(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function r1(e) {
  const t = w({}, e1, e.easing), n = w({}, t1, e.duration);
  return w({
    getAutoHeightDuration: n1,
    create: (o = ["all"], i = {}) => {
      const {
        duration: l = n.standard,
        easing: s = t.easeInOut,
        delay: a = 0
      } = i;
      return G(i, Jy), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof l == "string" ? l : Gc(l)} ${s} ${typeof a == "string" ? a : Gc(a)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const o1 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, i1 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function hu(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, l = G(e, i1);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(ro(18));
  const s = Hy(r), a = bo(e);
  let u = Ot(a, {
    mixins: wy(a.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: qy.slice(),
    typography: Qy(s, i),
    transitions: r1(o),
    zIndex: w({}, o1)
  });
  return u = Ot(u, l), u = t.reduce((c, d) => Ot(c, d), u), u.unstable_sxConfig = w({}, zo, l == null ? void 0 : l.unstable_sxConfig), u.unstable_sx = function(d) {
    return wr({
      sx: d,
      theme: this
    });
  }, u;
}
const gu = hu();
function l1() {
  const e = _l(gu);
  return e[ur] || e;
}
var No = {}, ds = { exports: {} }, Kc;
function s1() {
  return Kc || (Kc = 1, function(e) {
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
  }(ds)), ds.exports;
}
const a1 = /* @__PURE__ */ pn(h0), u1 = /* @__PURE__ */ pn(g0), c1 = /* @__PURE__ */ pn(w0), f1 = /* @__PURE__ */ pn(Cv), d1 = /* @__PURE__ */ pn(uv), p1 = /* @__PURE__ */ pn(mv);
var Er = ap;
Object.defineProperty(No, "__esModule", {
  value: !0
});
var m1 = No.default = T1;
No.shouldForwardProp = gi;
No.systemDefaultTheme = void 0;
var rt = Er(Bd()), Ks = Er(s1()), bi = k1(a1), h1 = u1;
Er(c1);
Er(f1);
var g1 = Er(d1), v1 = Er(p1);
const y1 = ["ownerState"], x1 = ["variants"], S1 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function hp(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (hp = function(r) {
    return r ? n : t;
  })(e);
}
function k1(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var n = hp(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
    var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
    l && (l.get || l.set) ? Object.defineProperty(r, i, l) : r[i] = e[i];
  }
  return r.default = e, n && n.set(e, r), r;
}
function w1(e) {
  return Object.keys(e).length === 0;
}
function C1(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function gi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Qc(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const E1 = No.systemDefaultTheme = (0, g1.default)(), _1 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Vo({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return w1(t) ? e : t[n] || t;
}
function P1(e) {
  return e ? (t, n) => n[e] : null;
}
function vi(e, t, n) {
  let {
    ownerState: r
  } = t, o = (0, Ks.default)(t, y1);
  const i = typeof e == "function" ? e((0, rt.default)({
    ownerState: r
  }, o)) : e;
  if (Array.isArray(i))
    return i.flatMap((l) => vi(l, (0, rt.default)({
      ownerState: r
    }, o), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: l = []
    } = i;
    let a = (0, Ks.default)(i, x1);
    return l.forEach((u) => {
      let c = !0;
      if (typeof u.props == "function" ? c = u.props((0, rt.default)({
        ownerState: r
      }, o, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && o[d] !== u.props[d] && (c = !1);
      }), c) {
        Array.isArray(a) || (a = [a]);
        const d = typeof u.style == "function" ? u.style((0, rt.default)({
          ownerState: r
        }, o, r)) : u.style;
        a.push(n ? Qc((0, bi.internal_serializeStyles)(d), n) : d);
      }
    }), a;
  }
  return n ? Qc((0, bi.internal_serializeStyles)(i), n) : i;
}
function T1(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = E1,
    rootShouldForwardProp: r = gi,
    slotShouldForwardProp: o = gi
  } = e, i = (l) => (0, v1.default)((0, rt.default)({}, l, {
    theme: Vo((0, rt.default)({}, l, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (l, s = {}) => {
    (0, bi.internal_processStyles)(l, (k) => k.filter((S) => !(S != null && S.__mui_systemSx)));
    const {
      name: a,
      slot: u,
      skipVariantsResolver: c,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = P1(_1(u))
    } = s, y = (0, Ks.default)(s, S1), v = a && a.startsWith("Mui") || u ? "components" : "custom", g = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), P = d || !1;
    let p, f = gi;
    u === "Root" || u === "root" ? f = r : u ? f = o : C1(l) && (f = void 0);
    const h = (0, bi.default)(l, (0, rt.default)({
      shouldForwardProp: f,
      label: p
    }, y)), x = (k) => typeof k == "function" && k.__emotion_real !== k || (0, h1.isPlainObject)(k) ? (S) => {
      const R = Vo({
        theme: S.theme,
        defaultTheme: n,
        themeId: t
      });
      return vi(k, (0, rt.default)({}, S, {
        theme: R
      }), R.modularCssLayers ? v : void 0);
    } : k, C = (k, ...S) => {
      let R = x(k);
      const z = S ? S.map(x) : [];
      a && m && z.push((A) => {
        const I = Vo((0, rt.default)({}, A, {
          defaultTheme: n,
          themeId: t
        }));
        if (!I.components || !I.components[a] || !I.components[a].styleOverrides)
          return null;
        const K = I.components[a].styleOverrides, le = {};
        return Object.entries(K).forEach(([he, ze]) => {
          le[he] = vi(ze, (0, rt.default)({}, A, {
            theme: I
          }), I.modularCssLayers ? "theme" : void 0);
        }), m(A, le);
      }), a && !g && z.push((A) => {
        var I;
        const K = Vo((0, rt.default)({}, A, {
          defaultTheme: n,
          themeId: t
        })), le = K == null || (I = K.components) == null || (I = I[a]) == null ? void 0 : I.variants;
        return vi({
          variants: le
        }, (0, rt.default)({}, A, {
          theme: K
        }), K.modularCssLayers ? "theme" : void 0);
      }), P || z.push(i);
      const O = z.length - S.length;
      if (Array.isArray(k) && O > 0) {
        const A = new Array(O).fill("");
        R = [...k, ...A], R.raw = [...k.raw, ...A];
      }
      const F = h(R, ...z);
      return l.muiName && (F.muiName = l.muiName), F;
    };
    return h.withConfig && (C.withConfig = h.withConfig), C;
  };
}
function R1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const gp = (e) => R1(e) && e !== "classes", Pe = m1({
  themeId: ur,
  defaultTheme: gu,
  rootShouldForwardProp: gp
}), $1 = ["theme"];
function O1(e) {
  let {
    theme: t
  } = e, n = G(e, $1);
  const r = t[ur];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = w({}, r, {
    vars: null
  }) : t && !t.vars && (o = w({}, t, {
    vars: null
  }))), /* @__PURE__ */ T.jsx(hy, w({}, n, {
    themeId: r ? ur : void 0,
    theme: o
  }));
}
const Yc = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function Ve(e) {
  return py(e);
}
function M1(e) {
  return qe("MuiSvgIcon", e);
}
Je("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const z1 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], b1 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${N(t)}`, `fontSize${N(n)}`]
  };
  return gt(o, M1, r);
}, N1 = Pe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${N(n.color)}`], t[`fontSize${N(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, l, s, a, u, c, d, m, y, v;
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
    color: (d = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? d : {
      action: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.active,
      disabled: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.disabled,
      inherit: void 0
    }[t.color]
  };
}), Qs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ve({
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
    viewBox: m = "0 0 24 24"
  } = r, y = G(r, z1), v = /* @__PURE__ */ E.isValidElement(o) && o.type === "svg", g = w({}, r, {
    color: l,
    component: s,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: m,
    hasSvgAsChild: v
  }), P = {};
  c || (P.viewBox = m);
  const p = b1(g);
  return /* @__PURE__ */ T.jsxs(N1, w({
    as: s,
    className: X(p.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: n
  }, P, y, v && o.props, {
    ownerState: g,
    children: [v ? o.props.children : o, d ? /* @__PURE__ */ T.jsx("title", {
      children: d
    }) : null]
  }));
});
Qs.muiName = "SvgIcon";
function _r(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ T.jsx(Qs, w({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return n.muiName = Qs.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(n));
}
function Ys(e, t) {
  return Ys = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ys(e, t);
}
function L1(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ys(e, t);
}
var vp = { exports: {} }, et = {}, yp = { exports: {} }, xp = {};
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
  function t($, b) {
    var L = $.length;
    $.push(b);
    e: for (; 0 < L; ) {
      var Q = L - 1 >>> 1, ne = $[Q];
      if (0 < o(ne, b)) $[Q] = b, $[L] = ne, L = Q;
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var b = $[0], L = $.pop();
    if (L !== b) {
      $[0] = L;
      e: for (var Q = 0, ne = $.length, bt = ne >>> 1; Q < bt; ) {
        var ye = 2 * (Q + 1) - 1, nt = $[ye], be = ye + 1, Kt = $[be];
        if (0 > o(nt, L)) be < ne && 0 > o(Kt, nt) ? ($[Q] = Kt, $[be] = L, Q = be) : ($[Q] = nt, $[ye] = L, Q = ye);
        else if (be < ne && 0 > o(Kt, L)) $[Q] = Kt, $[be] = L, Q = be;
        else break e;
      }
    }
    return b;
  }
  function o($, b) {
    var L = $.sortIndex - b.sortIndex;
    return L !== 0 ? L : $.id - b.id;
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
  var a = [], u = [], c = 1, d = null, m = 3, y = !1, v = !1, g = !1, P = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h($) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= $) r(u), b.sortIndex = b.expirationTime, t(a, b);
      else break;
      b = n(u);
    }
  }
  function x($) {
    if (g = !1, h($), !v) if (n(a) !== null) v = !0, he(C);
    else {
      var b = n(u);
      b !== null && ze(x, b.startTime - $);
    }
  }
  function C($, b) {
    v = !1, g && (g = !1, p(R), R = -1), y = !0;
    var L = m;
    try {
      for (h(b), d = n(a); d !== null && (!(d.expirationTime > b) || $ && !F()); ) {
        var Q = d.callback;
        if (typeof Q == "function") {
          d.callback = null, m = d.priorityLevel;
          var ne = Q(d.expirationTime <= b);
          b = e.unstable_now(), typeof ne == "function" ? d.callback = ne : d === n(a) && r(a), h(b);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var bt = !0;
      else {
        var ye = n(u);
        ye !== null && ze(x, ye.startTime - b), bt = !1;
      }
      return bt;
    } finally {
      d = null, m = L, y = !1;
    }
  }
  var k = !1, S = null, R = -1, z = 5, O = -1;
  function F() {
    return !(e.unstable_now() - O < z);
  }
  function A() {
    if (S !== null) {
      var $ = e.unstable_now();
      O = $;
      var b = !0;
      try {
        b = S(!0, $);
      } finally {
        b ? I() : (k = !1, S = null);
      }
    } else k = !1;
  }
  var I;
  if (typeof f == "function") I = function() {
    f(A);
  };
  else if (typeof MessageChannel < "u") {
    var K = new MessageChannel(), le = K.port2;
    K.port1.onmessage = A, I = function() {
      le.postMessage(null);
    };
  } else I = function() {
    P(A, 0);
  };
  function he($) {
    S = $, k || (k = !0, I());
  }
  function ze($, b) {
    R = P(function() {
      $(e.unstable_now());
    }, b);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    v || y || (v = !0, he(C));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function($) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = m;
    }
    var L = m;
    m = b;
    try {
      return $();
    } finally {
      m = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function($, b) {
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
    var L = m;
    m = $;
    try {
      return b();
    } finally {
      m = L;
    }
  }, e.unstable_scheduleCallback = function($, b, L) {
    var Q = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? Q + L : Q) : L = Q, $) {
      case 1:
        var ne = -1;
        break;
      case 2:
        ne = 250;
        break;
      case 5:
        ne = 1073741823;
        break;
      case 4:
        ne = 1e4;
        break;
      default:
        ne = 5e3;
    }
    return ne = L + ne, $ = { id: c++, callback: b, priorityLevel: $, startTime: L, expirationTime: ne, sortIndex: -1 }, L > Q ? ($.sortIndex = L, t(u, $), n(a) === null && $ === n(u) && (g ? (p(R), R = -1) : g = !0, ze(x, L - Q))) : ($.sortIndex = ne, t(a, $), v || y || (v = !0, he(C))), $;
  }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function($) {
    var b = m;
    return function() {
      var L = m;
      m = b;
      try {
        return $.apply(this, arguments);
      } finally {
        m = L;
      }
    };
  };
})(xp);
yp.exports = xp;
var I1 = yp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1 = E, Xe = I1;
function _(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Sp = /* @__PURE__ */ new Set(), ao = {};
function zn(e, t) {
  dr(e, t), dr(e + "Capture", t);
}
function dr(e, t) {
  for (ao[e] = t, e = 0; e < t.length; e++) Sp.add(t[e]);
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xs = Object.prototype.hasOwnProperty, A1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xc = {}, Zc = {};
function B1(e) {
  return Xs.call(Zc, e) ? !0 : Xs.call(Xc, e) ? !1 : A1.test(e) ? Zc[e] = !0 : (Xc[e] = !0, !1);
}
function F1(e, t, n, r) {
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
function D1(e, t, n, r) {
  if (t === null || typeof t > "u" || F1(e, t, n, r)) return !0;
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
function je(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  _e[e] = new je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  _e[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  _e[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  _e[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  _e[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  _e[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  _e[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  _e[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  _e[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vu = /[\-:]([a-z])/g;
function yu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    vu,
    yu
  );
  _e[t] = new je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(vu, yu);
  _e[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(vu, yu);
  _e[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  _e[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  _e[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xu(e, t, n, r) {
  var o = _e.hasOwnProperty(t) ? _e[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D1(t, n, o, r) && (n = null), r || o === null ? B1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ho = Symbol.for("react.element"), Dn = Symbol.for("react.portal"), Wn = Symbol.for("react.fragment"), Su = Symbol.for("react.strict_mode"), Zs = Symbol.for("react.profiler"), kp = Symbol.for("react.provider"), wp = Symbol.for("react.context"), ku = Symbol.for("react.forward_ref"), qs = Symbol.for("react.suspense"), Js = Symbol.for("react.suspense_list"), wu = Symbol.for("react.memo"), Xt = Symbol.for("react.lazy"), Cp = Symbol.for("react.offscreen"), qc = Symbol.iterator;
function zr(e) {
  return e === null || typeof e != "object" ? null : (e = qc && e[qc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ie = Object.assign, ps;
function Dr(e) {
  if (ps === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ps = t && t[1] || "";
  }
  return `
` + ps + e;
}
var ms = !1;
function hs(e, t) {
  if (!e || ms) return "";
  ms = !0;
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
    ms = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Dr(e) : "";
}
function W1(e) {
  switch (e.tag) {
    case 5:
      return Dr(e.type);
    case 16:
      return Dr("Lazy");
    case 13:
      return Dr("Suspense");
    case 19:
      return Dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = hs(e.type, !1), e;
    case 11:
      return e = hs(e.type.render, !1), e;
    case 1:
      return e = hs(e.type, !0), e;
    default:
      return "";
  }
}
function ea(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wn:
      return "Fragment";
    case Dn:
      return "Portal";
    case Zs:
      return "Profiler";
    case Su:
      return "StrictMode";
    case qs:
      return "Suspense";
    case Js:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case wp:
      return (e.displayName || "Context") + ".Consumer";
    case kp:
      return (e._context.displayName || "Context") + ".Provider";
    case ku:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case wu:
      return t = e.displayName || null, t !== null ? t : ea(e.type) || "Memo";
    case Xt:
      t = e._payload, e = e._init;
      try {
        return ea(e(t));
      } catch {
      }
  }
  return null;
}
function U1(e) {
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
      return ea(t);
    case 8:
      return t === Su ? "StrictMode" : "Mode";
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
function fn(e) {
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
function Ep(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function V1(e) {
  var t = Ep(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Go(e) {
  e._valueTracker || (e._valueTracker = V1(e));
}
function _p(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ep(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ni(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ta(e, t) {
  var n = t.checked;
  return ie({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Jc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = fn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Pp(e, t) {
  t = t.checked, t != null && xu(e, "checked", t, !1);
}
function na(e, t) {
  Pp(e, t);
  var n = fn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ra(e, t.type, n) : t.hasOwnProperty("defaultValue") && ra(e, t.type, fn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ef(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ra(e, t, n) {
  (t !== "number" || Ni(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wr = Array.isArray;
function nr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + fn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function oa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ie({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function tf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(_(92));
      if (Wr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: fn(n) };
}
function Tp(e, t) {
  var n = fn(t.value), r = fn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function nf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ia(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Rp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ko, $p = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ko = Ko || document.createElement("div"), Ko.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ko.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function uo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Gr = {
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
}, H1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gr).forEach(function(e) {
  H1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Gr[t] = Gr[e];
  });
});
function Op(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Gr.hasOwnProperty(e) && Gr[e] ? ("" + t).trim() : t + "px";
}
function Mp(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Op(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var G1 = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function la(e, t) {
  if (t) {
    if (G1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function sa(e, t) {
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
var aa = null;
function Cu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ua = null, rr = null, or = null;
function rf(e) {
  if (e = jo(e)) {
    if (typeof ua != "function") throw Error(_(280));
    var t = e.stateNode;
    t && (t = Ul(t), ua(e.stateNode, e.type, t));
  }
}
function zp(e) {
  rr ? or ? or.push(e) : or = [e] : rr = e;
}
function bp() {
  if (rr) {
    var e = rr, t = or;
    if (or = rr = null, rf(e), t) for (e = 0; e < t.length; e++) rf(t[e]);
  }
}
function Np(e, t) {
  return e(t);
}
function Lp() {
}
var gs = !1;
function Ip(e, t, n) {
  if (gs) return e(t, n);
  gs = !0;
  try {
    return Np(e, t, n);
  } finally {
    gs = !1, (rr !== null || or !== null) && (Lp(), bp());
  }
}
function co(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ul(n);
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
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var ca = !1;
if (Wt) try {
  var br = {};
  Object.defineProperty(br, "passive", { get: function() {
    ca = !0;
  } }), window.addEventListener("test", br, br), window.removeEventListener("test", br, br);
} catch {
  ca = !1;
}
function K1(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Kr = !1, Li = null, Ii = !1, fa = null, Q1 = { onError: function(e) {
  Kr = !0, Li = e;
} };
function Y1(e, t, n, r, o, i, l, s, a) {
  Kr = !1, Li = null, K1.apply(Q1, arguments);
}
function X1(e, t, n, r, o, i, l, s, a) {
  if (Y1.apply(this, arguments), Kr) {
    if (Kr) {
      var u = Li;
      Kr = !1, Li = null;
    } else throw Error(_(198));
    Ii || (Ii = !0, fa = u);
  }
}
function bn(e) {
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
function jp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function of(e) {
  if (bn(e) !== e) throw Error(_(188));
}
function Z1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = bn(e), t === null) throw Error(_(188));
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
        if (i === n) return of(o), e;
        if (i === r) return of(o), t;
        i = i.sibling;
      }
      throw Error(_(188));
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
        if (!l) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Ap(e) {
  return e = Z1(e), e !== null ? Bp(e) : null;
}
function Bp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Fp = Xe.unstable_scheduleCallback, lf = Xe.unstable_cancelCallback, q1 = Xe.unstable_shouldYield, J1 = Xe.unstable_requestPaint, ce = Xe.unstable_now, ex = Xe.unstable_getCurrentPriorityLevel, Eu = Xe.unstable_ImmediatePriority, Dp = Xe.unstable_UserBlockingPriority, ji = Xe.unstable_NormalPriority, tx = Xe.unstable_LowPriority, Wp = Xe.unstable_IdlePriority, Bl = null, Mt = null;
function nx(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function") try {
    Mt.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var kt = Math.clz32 ? Math.clz32 : ix, rx = Math.log, ox = Math.LN2;
function ix(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (rx(e) / ox | 0) | 0;
}
var Qo = 64, Yo = 4194304;
function Ur(e) {
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
function Ai(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = Ur(s) : (i &= l, i !== 0 && (r = Ur(i)));
  } else l = n & ~o, l !== 0 ? r = Ur(l) : i !== 0 && (r = Ur(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function lx(e, t) {
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
function sx(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - kt(i), s = 1 << l, a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = lx(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function da(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Up() {
  var e = Qo;
  return Qo <<= 1, !(Qo & 4194240) && (Qo = 64), e;
}
function vs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Lo(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
}
function ax(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - kt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function _u(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var V = 0;
function Vp(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Hp, Pu, Gp, Kp, Qp, pa = !1, Xo = [], nn = null, rn = null, on = null, fo = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new Map(), qt = [], ux = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function sf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      fo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      po.delete(t.pointerId);
  }
}
function Nr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = jo(t), t !== null && Pu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function cx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return nn = Nr(nn, e, t, n, r, o), !0;
    case "dragenter":
      return rn = Nr(rn, e, t, n, r, o), !0;
    case "mouseover":
      return on = Nr(on, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return fo.set(i, Nr(fo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, po.set(i, Nr(po.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Yp(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = bn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = jp(n), t !== null) {
          e.blockedOn = t, Qp(e.priority, function() {
            Gp(n);
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
function yi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ma(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      aa = r, n.target.dispatchEvent(r), aa = null;
    } else return t = jo(n), t !== null && Pu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function af(e, t, n) {
  yi(e) && n.delete(t);
}
function fx() {
  pa = !1, nn !== null && yi(nn) && (nn = null), rn !== null && yi(rn) && (rn = null), on !== null && yi(on) && (on = null), fo.forEach(af), po.forEach(af);
}
function Lr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, pa || (pa = !0, Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, fx)));
}
function mo(e) {
  function t(o) {
    return Lr(o, e);
  }
  if (0 < Xo.length) {
    Lr(Xo[0], e);
    for (var n = 1; n < Xo.length; n++) {
      var r = Xo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (nn !== null && Lr(nn, e), rn !== null && Lr(rn, e), on !== null && Lr(on, e), fo.forEach(t), po.forEach(t), n = 0; n < qt.length; n++) r = qt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && (n = qt[0], n.blockedOn === null); ) Yp(n), n.blockedOn === null && qt.shift();
}
var ir = Gt.ReactCurrentBatchConfig, Bi = !0;
function dx(e, t, n, r) {
  var o = V, i = ir.transition;
  ir.transition = null;
  try {
    V = 1, Tu(e, t, n, r);
  } finally {
    V = o, ir.transition = i;
  }
}
function px(e, t, n, r) {
  var o = V, i = ir.transition;
  ir.transition = null;
  try {
    V = 4, Tu(e, t, n, r);
  } finally {
    V = o, ir.transition = i;
  }
}
function Tu(e, t, n, r) {
  if (Bi) {
    var o = ma(e, t, n, r);
    if (o === null) Ts(e, t, r, Fi, n), sf(e, r);
    else if (cx(o, e, t, n, r)) r.stopPropagation();
    else if (sf(e, r), t & 4 && -1 < ux.indexOf(e)) {
      for (; o !== null; ) {
        var i = jo(o);
        if (i !== null && Hp(i), i = ma(e, t, n, r), i === null && Ts(e, t, r, Fi, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ts(e, t, r, null, n);
  }
}
var Fi = null;
function ma(e, t, n, r) {
  if (Fi = null, e = Cu(r), e = kn(e), e !== null) if (t = bn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = jp(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Fi = e, null;
}
function Xp(e) {
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
      switch (ex()) {
        case Eu:
          return 1;
        case Dp:
          return 4;
        case ji:
        case tx:
          return 16;
        case Wp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null, Ru = null, xi = null;
function Zp() {
  if (xi) return xi;
  var e, t = Ru, n = t.length, r, o = "value" in en ? en.value : en.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return xi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Si(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Zo() {
  return !0;
}
function uf() {
  return !1;
}
function tt(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Zo : uf, this.isPropagationStopped = uf, this;
  }
  return ie(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Zo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Zo);
  }, persist: function() {
  }, isPersistent: Zo }), t;
}
var Pr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, $u = tt(Pr), Io = ie({}, Pr, { view: 0, detail: 0 }), mx = tt(Io), ys, xs, Ir, Fl = ie({}, Io, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ou, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ir && (Ir && e.type === "mousemove" ? (ys = e.screenX - Ir.screenX, xs = e.screenY - Ir.screenY) : xs = ys = 0, Ir = e), ys);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xs;
} }), cf = tt(Fl), hx = ie({}, Fl, { dataTransfer: 0 }), gx = tt(hx), vx = ie({}, Io, { relatedTarget: 0 }), Ss = tt(vx), yx = ie({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xx = tt(yx), Sx = ie({}, Pr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), kx = tt(Sx), wx = ie({}, Pr, { data: 0 }), ff = tt(wx), Cx = {
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
}, Ex = {
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
}, _x = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Px(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _x[e]) ? !!t[e] : !1;
}
function Ou() {
  return Px;
}
var Tx = ie({}, Io, { key: function(e) {
  if (e.key) {
    var t = Cx[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Si(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ex[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ou, charCode: function(e) {
  return e.type === "keypress" ? Si(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rx = tt(Tx), $x = ie({}, Fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), df = tt($x), Ox = ie({}, Io, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ou }), Mx = tt(Ox), zx = ie({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bx = tt(zx), Nx = ie({}, Fl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Lx = tt(Nx), Ix = [9, 13, 27, 32], Mu = Wt && "CompositionEvent" in window, Qr = null;
Wt && "documentMode" in document && (Qr = document.documentMode);
var jx = Wt && "TextEvent" in window && !Qr, qp = Wt && (!Mu || Qr && 8 < Qr && 11 >= Qr), pf = " ", mf = !1;
function Jp(e, t) {
  switch (e) {
    case "keyup":
      return Ix.indexOf(t.keyCode) !== -1;
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
function em(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function Ax(e, t) {
  switch (e) {
    case "compositionend":
      return em(t);
    case "keypress":
      return t.which !== 32 ? null : (mf = !0, pf);
    case "textInput":
      return e = t.data, e === pf && mf ? null : e;
    default:
      return null;
  }
}
function Bx(e, t) {
  if (Un) return e === "compositionend" || !Mu && Jp(e, t) ? (e = Zp(), xi = Ru = en = null, Un = !1, e) : null;
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
      return qp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fx = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function hf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fx[e.type] : t === "textarea";
}
function tm(e, t, n, r) {
  zp(r), t = Di(t, "onChange"), 0 < t.length && (n = new $u("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Yr = null, ho = null;
function Dx(e) {
  dm(e, 0);
}
function Dl(e) {
  var t = Gn(e);
  if (_p(t)) return e;
}
function Wx(e, t) {
  if (e === "change") return t;
}
var nm = !1;
if (Wt) {
  var ks;
  if (Wt) {
    var ws = "oninput" in document;
    if (!ws) {
      var gf = document.createElement("div");
      gf.setAttribute("oninput", "return;"), ws = typeof gf.oninput == "function";
    }
    ks = ws;
  } else ks = !1;
  nm = ks && (!document.documentMode || 9 < document.documentMode);
}
function vf() {
  Yr && (Yr.detachEvent("onpropertychange", rm), ho = Yr = null);
}
function rm(e) {
  if (e.propertyName === "value" && Dl(ho)) {
    var t = [];
    tm(t, ho, e, Cu(e)), Ip(Dx, t);
  }
}
function Ux(e, t, n) {
  e === "focusin" ? (vf(), Yr = t, ho = n, Yr.attachEvent("onpropertychange", rm)) : e === "focusout" && vf();
}
function Vx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dl(ho);
}
function Hx(e, t) {
  if (e === "click") return Dl(t);
}
function Gx(e, t) {
  if (e === "input" || e === "change") return Dl(t);
}
function Kx(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ct = typeof Object.is == "function" ? Object.is : Kx;
function go(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Xs.call(t, o) || !Ct(e[o], t[o])) return !1;
  }
  return !0;
}
function yf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xf(e, t) {
  var n = yf(e);
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
    n = yf(n);
  }
}
function om(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? om(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function im() {
  for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ni(e.document);
  }
  return t;
}
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Qx(e) {
  var t = im(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && om(n.ownerDocument.documentElement, n)) {
    if (r !== null && zu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = xf(n, i);
        var l = xf(
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
var Yx = Wt && "documentMode" in document && 11 >= document.documentMode, Vn = null, ha = null, Xr = null, ga = !1;
function Sf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ga || Vn == null || Vn !== Ni(r) || (r = Vn, "selectionStart" in r && zu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Xr && go(Xr, r) || (Xr = r, r = Di(ha, "onSelect"), 0 < r.length && (t = new $u("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Vn)));
}
function qo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Hn = { animationend: qo("Animation", "AnimationEnd"), animationiteration: qo("Animation", "AnimationIteration"), animationstart: qo("Animation", "AnimationStart"), transitionend: qo("Transition", "TransitionEnd") }, Cs = {}, lm = {};
Wt && (lm = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);
function Wl(e) {
  if (Cs[e]) return Cs[e];
  if (!Hn[e]) return e;
  var t = Hn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in lm) return Cs[e] = t[n];
  return e;
}
var sm = Wl("animationend"), am = Wl("animationiteration"), um = Wl("animationstart"), cm = Wl("transitionend"), fm = /* @__PURE__ */ new Map(), kf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mn(e, t) {
  fm.set(e, t), zn(t, [e]);
}
for (var Es = 0; Es < kf.length; Es++) {
  var _s = kf[Es], Xx = _s.toLowerCase(), Zx = _s[0].toUpperCase() + _s.slice(1);
  mn(Xx, "on" + Zx);
}
mn(sm, "onAnimationEnd");
mn(am, "onAnimationIteration");
mn(um, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(cm, "onTransitionEnd");
dr("onMouseEnter", ["mouseout", "mouseover"]);
dr("onMouseLeave", ["mouseout", "mouseover"]);
dr("onPointerEnter", ["pointerout", "pointerover"]);
dr("onPointerLeave", ["pointerout", "pointerover"]);
zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
function wf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, X1(r, t, void 0, e), e.currentTarget = null;
}
function dm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
        wf(o, s, u), i = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
        wf(o, s, u), i = a;
      }
    }
  }
  if (Ii) throw e = fa, Ii = !1, fa = null, e;
}
function q(e, t) {
  var n = t[ka];
  n === void 0 && (n = t[ka] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (pm(t, e, 2, !1), n.add(r));
}
function Ps(e, t, n) {
  var r = 0;
  t && (r |= 4), pm(n, e, r, t);
}
var Jo = "_reactListening" + Math.random().toString(36).slice(2);
function vo(e) {
  if (!e[Jo]) {
    e[Jo] = !0, Sp.forEach(function(n) {
      n !== "selectionchange" && (qx.has(n) || Ps(n, !1, e), Ps(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Jo] || (t[Jo] = !0, Ps("selectionchange", !1, t));
  }
}
function pm(e, t, n, r) {
  switch (Xp(t)) {
    case 1:
      var o = dx;
      break;
    case 4:
      o = px;
      break;
    default:
      o = Tu;
  }
  n = o.bind(null, t, n, e), o = void 0, !ca || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ts(e, t, n, r, o) {
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
        if (l = kn(s), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Ip(function() {
    var u = i, c = Cu(n), d = [];
    e: {
      var m = fm.get(e);
      if (m !== void 0) {
        var y = $u, v = e;
        switch (e) {
          case "keypress":
            if (Si(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Rx;
            break;
          case "focusin":
            v = "focus", y = Ss;
            break;
          case "focusout":
            v = "blur", y = Ss;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ss;
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
            y = cf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = gx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Mx;
            break;
          case sm:
          case am:
          case um:
            y = xx;
            break;
          case cm:
            y = bx;
            break;
          case "scroll":
            y = mx;
            break;
          case "wheel":
            y = Lx;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = kx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = df;
        }
        var g = (t & 4) !== 0, P = !g && e === "scroll", p = g ? m !== null ? m + "Capture" : null : m;
        g = [];
        for (var f = u, h; f !== null; ) {
          h = f;
          var x = h.stateNode;
          if (h.tag === 5 && x !== null && (h = x, p !== null && (x = co(f, p), x != null && g.push(yo(f, x, h)))), P) break;
          f = f.return;
        }
        0 < g.length && (m = new y(m, v, null, n, c), d.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== aa && (v = n.relatedTarget || n.fromElement) && (kn(v) || v[Ut])) break e;
        if ((y || m) && (m = c.window === c ? c : (m = c.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = u, v = v ? kn(v) : null, v !== null && (P = bn(v), v !== P || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = u), y !== v)) {
          if (g = cf, x = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (g = df, x = "onPointerLeave", p = "onPointerEnter", f = "pointer"), P = y == null ? m : Gn(y), h = v == null ? m : Gn(v), m = new g(x, f + "leave", y, n, c), m.target = P, m.relatedTarget = h, x = null, kn(c) === u && (g = new g(p, f + "enter", v, n, c), g.target = h, g.relatedTarget = P, x = g), P = x, y && v) t: {
            for (g = y, p = v, f = 0, h = g; h; h = Bn(h)) f++;
            for (h = 0, x = p; x; x = Bn(x)) h++;
            for (; 0 < f - h; ) g = Bn(g), f--;
            for (; 0 < h - f; ) p = Bn(p), h--;
            for (; f--; ) {
              if (g === p || p !== null && g === p.alternate) break t;
              g = Bn(g), p = Bn(p);
            }
            g = null;
          }
          else g = null;
          y !== null && Cf(d, m, y, g, !1), v !== null && P !== null && Cf(d, P, v, g, !0);
        }
      }
      e: {
        if (m = u ? Gn(u) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var C = Wx;
        else if (hf(m)) if (nm) C = Gx;
        else {
          C = Vx;
          var k = Ux;
        }
        else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Hx);
        if (C && (C = C(e, u))) {
          tm(d, C, n, c);
          break e;
        }
        k && k(e, m, u), e === "focusout" && (k = m._wrapperState) && k.controlled && m.type === "number" && ra(m, "number", m.value);
      }
      switch (k = u ? Gn(u) : window, e) {
        case "focusin":
          (hf(k) || k.contentEditable === "true") && (Vn = k, ha = u, Xr = null);
          break;
        case "focusout":
          Xr = ha = Vn = null;
          break;
        case "mousedown":
          ga = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ga = !1, Sf(d, n, c);
          break;
        case "selectionchange":
          if (Yx) break;
        case "keydown":
        case "keyup":
          Sf(d, n, c);
      }
      var S;
      if (Mu) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else Un ? Jp(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (qp && n.locale !== "ko" && (Un || R !== "onCompositionStart" ? R === "onCompositionEnd" && Un && (S = Zp()) : (en = c, Ru = "value" in en ? en.value : en.textContent, Un = !0)), k = Di(u, R), 0 < k.length && (R = new ff(R, e, null, n, c), d.push({ event: R, listeners: k }), S ? R.data = S : (S = em(n), S !== null && (R.data = S)))), (S = jx ? Ax(e, n) : Bx(e, n)) && (u = Di(u, "onBeforeInput"), 0 < u.length && (c = new ff("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = S));
    }
    dm(d, t);
  });
}
function yo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Di(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = co(e, n), i != null && r.unshift(yo(e, i, o)), i = co(e, t), i != null && r.push(yo(e, i, o))), e = e.return;
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Cf(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = co(n, i), a != null && l.unshift(yo(n, a, s))) : o || (a = co(n, i), a != null && l.push(yo(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Jx = /\r\n?/g, e2 = /\u0000|\uFFFD/g;
function Ef(e) {
  return (typeof e == "string" ? e : "" + e).replace(Jx, `
`).replace(e2, "");
}
function ei(e, t, n) {
  if (t = Ef(t), Ef(e) !== t && n) throw Error(_(425));
}
function Wi() {
}
var va = null, ya = null;
function xa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Sa = typeof setTimeout == "function" ? setTimeout : void 0, t2 = typeof clearTimeout == "function" ? clearTimeout : void 0, _f = typeof Promise == "function" ? Promise : void 0, n2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof _f < "u" ? function(e) {
  return _f.resolve(null).then(e).catch(r2);
} : Sa;
function r2(e) {
  setTimeout(function() {
    throw e;
  });
}
function Rs(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), mo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  mo(t);
}
function ln(e) {
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
function Pf(e) {
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
var Tr = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + Tr, xo = "__reactProps$" + Tr, Ut = "__reactContainer$" + Tr, ka = "__reactEvents$" + Tr, o2 = "__reactListeners$" + Tr, i2 = "__reactHandles$" + Tr;
function kn(e) {
  var t = e[Rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ut] || n[Rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Pf(e); e !== null; ) {
        if (n = e[Rt]) return n;
        e = Pf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function jo(e) {
  return e = e[Rt] || e[Ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Ul(e) {
  return e[xo] || null;
}
var wa = [], Kn = -1;
function hn(e) {
  return { current: e };
}
function J(e) {
  0 > Kn || (e.current = wa[Kn], wa[Kn] = null, Kn--);
}
function Z(e, t) {
  Kn++, wa[Kn] = e.current, e.current = t;
}
var dn = {}, Me = hn(dn), Fe = hn(!1), Tn = dn;
function pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function De(e) {
  return e = e.childContextTypes, e != null;
}
function Ui() {
  J(Fe), J(Me);
}
function Tf(e, t, n) {
  if (Me.current !== dn) throw Error(_(168));
  Z(Me, t), Z(Fe, n);
}
function mm(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, U1(e) || "Unknown", o));
  return ie({}, n, r);
}
function Vi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, Tn = Me.current, Z(Me, e), Z(Fe, Fe.current), !0;
}
function Rf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n ? (e = mm(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, J(Fe), J(Me), Z(Me, e)) : J(Fe), Z(Fe, n);
}
var It = null, Vl = !1, $s = !1;
function hm(e) {
  It === null ? It = [e] : It.push(e);
}
function l2(e) {
  Vl = !0, hm(e);
}
function gn() {
  if (!$s && It !== null) {
    $s = !0;
    var e = 0, t = V;
    try {
      var n = It;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      It = null, Vl = !1;
    } catch (o) {
      throw It !== null && (It = It.slice(e + 1)), Fp(Eu, gn), o;
    } finally {
      V = t, $s = !1;
    }
  }
  return null;
}
var Qn = [], Yn = 0, Hi = null, Gi = 0, lt = [], st = 0, Rn = null, Bt = 1, Ft = "";
function vn(e, t) {
  Qn[Yn++] = Gi, Qn[Yn++] = Hi, Hi = e, Gi = t;
}
function gm(e, t, n) {
  lt[st++] = Bt, lt[st++] = Ft, lt[st++] = Rn, Rn = e;
  var r = Bt;
  e = Ft;
  var o = 32 - kt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - kt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Bt = 1 << 32 - kt(t) + o | n << o | r, Ft = i + e;
  } else Bt = 1 << i | n << o | r, Ft = e;
}
function bu(e) {
  e.return !== null && (vn(e, 1), gm(e, 1, 0));
}
function Nu(e) {
  for (; e === Hi; ) Hi = Qn[--Yn], Qn[Yn] = null, Gi = Qn[--Yn], Qn[Yn] = null;
  for (; e === Rn; ) Rn = lt[--st], lt[st] = null, Ft = lt[--st], lt[st] = null, Bt = lt[--st], lt[st] = null;
}
var Ye = null, Ke = null, te = !1, St = null;
function vm(e, t) {
  var n = at(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function $f(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ke = ln(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ke = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Rn !== null ? { id: Bt, overflow: Ft } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = at(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ye = e, Ke = null, !0) : !1;
    default:
      return !1;
  }
}
function Ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ea(e) {
  if (te) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!$f(e, t)) {
        if (Ca(e)) throw Error(_(418));
        t = ln(n.nextSibling);
        var r = Ye;
        t && $f(e, t) ? vm(r, n) : (e.flags = e.flags & -4097 | 2, te = !1, Ye = e);
      }
    } else {
      if (Ca(e)) throw Error(_(418));
      e.flags = e.flags & -4097 | 2, te = !1, Ye = e;
    }
  }
}
function Of(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ye = e;
}
function ti(e) {
  if (e !== Ye) return !1;
  if (!te) return Of(e), te = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xa(e.type, e.memoizedProps)), t && (t = Ke)) {
    if (Ca(e)) throw ym(), Error(_(418));
    for (; t; ) vm(e, t), t = ln(t.nextSibling);
  }
  if (Of(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = ln(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function ym() {
  for (var e = Ke; e; ) e = ln(e.nextSibling);
}
function mr() {
  Ke = Ye = null, te = !1;
}
function Lu(e) {
  St === null ? St = [e] : St.push(e);
}
var s2 = Gt.ReactCurrentBatchConfig;
function jr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function ni(e, t) {
  throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Mf(e) {
  var t = e._init;
  return t(e._payload);
}
function xm(e) {
  function t(p, f) {
    if (e) {
      var h = p.deletions;
      h === null ? (p.deletions = [f], p.flags |= 16) : h.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), f = f.sibling;
    return null;
  }
  function r(p, f) {
    for (p = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), f = f.sibling;
    return p;
  }
  function o(p, f) {
    return p = cn(p, f), p.index = 0, p.sibling = null, p;
  }
  function i(p, f, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < f ? (p.flags |= 2, f) : h) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, f, h, x) {
    return f === null || f.tag !== 6 ? (f = Is(h, p.mode, x), f.return = p, f) : (f = o(f, h), f.return = p, f);
  }
  function a(p, f, h, x) {
    var C = h.type;
    return C === Wn ? c(p, f, h.props.children, x, h.key) : f !== null && (f.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Xt && Mf(C) === f.type) ? (x = o(f, h.props), x.ref = jr(p, f, h), x.return = p, x) : (x = Ti(h.type, h.key, h.props, null, p.mode, x), x.ref = jr(p, f, h), x.return = p, x);
  }
  function u(p, f, h, x) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = js(h, p.mode, x), f.return = p, f) : (f = o(f, h.children || []), f.return = p, f);
  }
  function c(p, f, h, x, C) {
    return f === null || f.tag !== 7 ? (f = Pn(h, p.mode, x, C), f.return = p, f) : (f = o(f, h), f.return = p, f);
  }
  function d(p, f, h) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Is("" + f, p.mode, h), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ho:
          return h = Ti(f.type, f.key, f.props, null, p.mode, h), h.ref = jr(p, null, f), h.return = p, h;
        case Dn:
          return f = js(f, p.mode, h), f.return = p, f;
        case Xt:
          var x = f._init;
          return d(p, x(f._payload), h);
      }
      if (Wr(f) || zr(f)) return f = Pn(f, p.mode, h, null), f.return = p, f;
      ni(p, f);
    }
    return null;
  }
  function m(p, f, h, x) {
    var C = f !== null ? f.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return C !== null ? null : s(p, f, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ho:
          return h.key === C ? a(p, f, h, x) : null;
        case Dn:
          return h.key === C ? u(p, f, h, x) : null;
        case Xt:
          return C = h._init, m(
            p,
            f,
            C(h._payload),
            x
          );
      }
      if (Wr(h) || zr(h)) return C !== null ? null : c(p, f, h, x, null);
      ni(p, h);
    }
    return null;
  }
  function y(p, f, h, x, C) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return p = p.get(h) || null, s(f, p, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ho:
          return p = p.get(x.key === null ? h : x.key) || null, a(f, p, x, C);
        case Dn:
          return p = p.get(x.key === null ? h : x.key) || null, u(f, p, x, C);
        case Xt:
          var k = x._init;
          return y(p, f, h, k(x._payload), C);
      }
      if (Wr(x) || zr(x)) return p = p.get(h) || null, c(f, p, x, C, null);
      ni(f, x);
    }
    return null;
  }
  function v(p, f, h, x) {
    for (var C = null, k = null, S = f, R = f = 0, z = null; S !== null && R < h.length; R++) {
      S.index > R ? (z = S, S = null) : z = S.sibling;
      var O = m(p, S, h[R], x);
      if (O === null) {
        S === null && (S = z);
        break;
      }
      e && S && O.alternate === null && t(p, S), f = i(O, f, R), k === null ? C = O : k.sibling = O, k = O, S = z;
    }
    if (R === h.length) return n(p, S), te && vn(p, R), C;
    if (S === null) {
      for (; R < h.length; R++) S = d(p, h[R], x), S !== null && (f = i(S, f, R), k === null ? C = S : k.sibling = S, k = S);
      return te && vn(p, R), C;
    }
    for (S = r(p, S); R < h.length; R++) z = y(S, p, R, h[R], x), z !== null && (e && z.alternate !== null && S.delete(z.key === null ? R : z.key), f = i(z, f, R), k === null ? C = z : k.sibling = z, k = z);
    return e && S.forEach(function(F) {
      return t(p, F);
    }), te && vn(p, R), C;
  }
  function g(p, f, h, x) {
    var C = zr(h);
    if (typeof C != "function") throw Error(_(150));
    if (h = C.call(h), h == null) throw Error(_(151));
    for (var k = C = null, S = f, R = f = 0, z = null, O = h.next(); S !== null && !O.done; R++, O = h.next()) {
      S.index > R ? (z = S, S = null) : z = S.sibling;
      var F = m(p, S, O.value, x);
      if (F === null) {
        S === null && (S = z);
        break;
      }
      e && S && F.alternate === null && t(p, S), f = i(F, f, R), k === null ? C = F : k.sibling = F, k = F, S = z;
    }
    if (O.done) return n(
      p,
      S
    ), te && vn(p, R), C;
    if (S === null) {
      for (; !O.done; R++, O = h.next()) O = d(p, O.value, x), O !== null && (f = i(O, f, R), k === null ? C = O : k.sibling = O, k = O);
      return te && vn(p, R), C;
    }
    for (S = r(p, S); !O.done; R++, O = h.next()) O = y(S, p, R, O.value, x), O !== null && (e && O.alternate !== null && S.delete(O.key === null ? R : O.key), f = i(O, f, R), k === null ? C = O : k.sibling = O, k = O);
    return e && S.forEach(function(A) {
      return t(p, A);
    }), te && vn(p, R), C;
  }
  function P(p, f, h, x) {
    if (typeof h == "object" && h !== null && h.type === Wn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ho:
          e: {
            for (var C = h.key, k = f; k !== null; ) {
              if (k.key === C) {
                if (C = h.type, C === Wn) {
                  if (k.tag === 7) {
                    n(p, k.sibling), f = o(k, h.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Xt && Mf(C) === k.type) {
                  n(p, k.sibling), f = o(k, h.props), f.ref = jr(p, k, h), f.return = p, p = f;
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            h.type === Wn ? (f = Pn(h.props.children, p.mode, x, h.key), f.return = p, p = f) : (x = Ti(h.type, h.key, h.props, null, p.mode, x), x.ref = jr(p, f, h), x.return = p, p = x);
          }
          return l(p);
        case Dn:
          e: {
            for (k = h.key; f !== null; ) {
              if (f.key === k) if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                n(p, f.sibling), f = o(f, h.children || []), f.return = p, p = f;
                break e;
              } else {
                n(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = js(h, p.mode, x), f.return = p, p = f;
          }
          return l(p);
        case Xt:
          return k = h._init, P(p, f, k(h._payload), x);
      }
      if (Wr(h)) return v(p, f, h, x);
      if (zr(h)) return g(p, f, h, x);
      ni(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, f !== null && f.tag === 6 ? (n(p, f.sibling), f = o(f, h), f.return = p, p = f) : (n(p, f), f = Is(h, p.mode, x), f.return = p, p = f), l(p)) : n(p, f);
  }
  return P;
}
var hr = xm(!0), Sm = xm(!1), Ki = hn(null), Qi = null, Xn = null, Iu = null;
function ju() {
  Iu = Xn = Qi = null;
}
function Au(e) {
  var t = Ki.current;
  J(Ki), e._currentValue = t;
}
function _a(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function lr(e, t) {
  Qi = e, Iu = Xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), e.firstContext = null);
}
function dt(e) {
  var t = e._currentValue;
  if (Iu !== e) if (e = { context: e, memoizedValue: t, next: null }, Xn === null) {
    if (Qi === null) throw Error(_(308));
    Xn = e, Qi.dependencies = { lanes: 0, firstContext: e };
  } else Xn = Xn.next = e;
  return t;
}
var wn = null;
function Bu(e) {
  wn === null ? wn = [e] : wn.push(e);
}
function km(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Bu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Vt(e, r);
}
function Vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function Fu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wm(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, D & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Vt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Bu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Vt(e, n);
}
function ki(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _u(e, n);
  }
}
function zf(e, t) {
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
function Yi(e, t, n, r) {
  var o = e.updateQueue;
  Zt = !1;
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
      var m = s.lane, y = s.eventTime;
      if ((r & m) === m) {
        c !== null && (c = c.next = {
          eventTime: y,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var v = e, g = s;
          switch (m = t, y = n, g.tag) {
            case 1:
              if (v = g.payload, typeof v == "function") {
                d = v.call(y, d, m);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = g.payload, m = typeof v == "function" ? v.call(y, d, m) : v, m == null) break e;
              d = ie({}, d, m);
              break e;
            case 2:
              Zt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [s] : m.push(s));
      } else y = { eventTime: y, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = y, a = d) : c = c.next = y, l |= m;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    On |= l, e.lanes = l, e.memoizedState = d;
  }
}
function bf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(_(191, o));
      o.call(r);
    }
  }
}
var Ao = {}, zt = hn(Ao), So = hn(Ao), ko = hn(Ao);
function Cn(e) {
  if (e === Ao) throw Error(_(174));
  return e;
}
function Du(e, t) {
  switch (Z(ko, t), Z(So, e), Z(zt, Ao), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ia(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ia(t, e);
  }
  J(zt), Z(zt, t);
}
function gr() {
  J(zt), J(So), J(ko);
}
function Cm(e) {
  Cn(ko.current);
  var t = Cn(zt.current), n = ia(t, e.type);
  t !== n && (Z(So, e), Z(zt, n));
}
function Wu(e) {
  So.current === e && (J(zt), J(So));
}
var re = hn(0);
function Xi(e) {
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
var Os = [];
function Uu() {
  for (var e = 0; e < Os.length; e++) Os[e]._workInProgressVersionPrimary = null;
  Os.length = 0;
}
var wi = Gt.ReactCurrentDispatcher, Ms = Gt.ReactCurrentBatchConfig, $n = 0, oe = null, ge = null, xe = null, Zi = !1, Zr = !1, wo = 0, a2 = 0;
function Te() {
  throw Error(_(321));
}
function Vu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function Hu(e, t, n, r, o, i) {
  if ($n = i, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, wi.current = e === null || e.memoizedState === null ? d2 : p2, e = n(r, o), Zr) {
    i = 0;
    do {
      if (Zr = !1, wo = 0, 25 <= i) throw Error(_(301));
      i += 1, xe = ge = null, t.updateQueue = null, wi.current = m2, e = n(r, o);
    } while (Zr);
  }
  if (wi.current = qi, t = ge !== null && ge.next !== null, $n = 0, xe = ge = oe = null, Zi = !1, t) throw Error(_(300));
  return e;
}
function Gu() {
  var e = wo !== 0;
  return wo = 0, e;
}
function _t() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return xe === null ? oe.memoizedState = xe = e : xe = xe.next = e, xe;
}
function pt() {
  if (ge === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = xe === null ? oe.memoizedState : xe.next;
  if (t !== null) xe = t, ge = e;
  else {
    if (e === null) throw Error(_(310));
    ge = e, e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }, xe === null ? oe.memoizedState = xe = e : xe = xe.next = e;
  }
  return xe;
}
function Co(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zs(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ge, o = r.baseQueue, i = n.pending;
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
      if (($n & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = d, l = r) : a = a.next = d, oe.lanes |= c, On |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, Ct(r, t.memoizedState) || (Be = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, oe.lanes |= i, On |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bs(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    Ct(i, t.memoizedState) || (Be = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Em() {
}
function _m(e, t) {
  var n = oe, r = pt(), o = t(), i = !Ct(r.memoizedState, o);
  if (i && (r.memoizedState = o, Be = !0), r = r.queue, Ku(Rm.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || xe !== null && xe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Eo(9, Tm.bind(null, n, r, o, t), void 0, null), Se === null) throw Error(_(349));
    $n & 30 || Pm(n, t, o);
  }
  return o;
}
function Pm(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Tm(e, t, n, r) {
  t.value = n, t.getSnapshot = r, $m(t) && Om(e);
}
function Rm(e, t, n) {
  return n(function() {
    $m(t) && Om(e);
  });
}
function $m(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function Om(e) {
  var t = Vt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function Nf(e) {
  var t = _t();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Co, lastRenderedState: e }, t.queue = e, e = e.dispatch = f2.bind(null, oe, e), [t.memoizedState, e];
}
function Eo(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Mm() {
  return pt().memoizedState;
}
function Ci(e, t, n, r) {
  var o = _t();
  oe.flags |= e, o.memoizedState = Eo(1 | t, n, void 0, r === void 0 ? null : r);
}
function Hl(e, t, n, r) {
  var o = pt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var l = ge.memoizedState;
    if (i = l.destroy, r !== null && Vu(r, l.deps)) {
      o.memoizedState = Eo(t, n, i, r);
      return;
    }
  }
  oe.flags |= e, o.memoizedState = Eo(1 | t, n, i, r);
}
function Lf(e, t) {
  return Ci(8390656, 8, e, t);
}
function Ku(e, t) {
  return Hl(2048, 8, e, t);
}
function zm(e, t) {
  return Hl(4, 2, e, t);
}
function bm(e, t) {
  return Hl(4, 4, e, t);
}
function Nm(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Lm(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hl(4, 4, Nm.bind(null, t, e), n);
}
function Qu() {
}
function Im(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function jm(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Am(e, t, n) {
  return $n & 21 ? (Ct(n, t) || (n = Up(), oe.lanes |= n, On |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Be = !0), e.memoizedState = n);
}
function u2(e, t) {
  var n = V;
  V = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ms.transition;
  Ms.transition = {};
  try {
    e(!1), t();
  } finally {
    V = n, Ms.transition = r;
  }
}
function Bm() {
  return pt().memoizedState;
}
function c2(e, t, n) {
  var r = un(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Fm(e)) Dm(t, n);
  else if (n = km(e, t, n, r), n !== null) {
    var o = Le();
    wt(n, e, r, o), Wm(n, t, r);
  }
}
function f2(e, t, n) {
  var r = un(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fm(e)) Dm(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = s, Ct(s, l)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Bu(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = km(e, t, o, r), n !== null && (o = Le(), wt(n, e, r, o), Wm(n, t, r));
  }
}
function Fm(e) {
  var t = e.alternate;
  return e === oe || t !== null && t === oe;
}
function Dm(e, t) {
  Zr = Zi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Wm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _u(e, n);
  }
}
var qi = { readContext: dt, useCallback: Te, useContext: Te, useEffect: Te, useImperativeHandle: Te, useInsertionEffect: Te, useLayoutEffect: Te, useMemo: Te, useReducer: Te, useRef: Te, useState: Te, useDebugValue: Te, useDeferredValue: Te, useTransition: Te, useMutableSource: Te, useSyncExternalStore: Te, useId: Te, unstable_isNewReconciler: !1 }, d2 = { readContext: dt, useCallback: function(e, t) {
  return _t().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: dt, useEffect: Lf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ci(
    4194308,
    4,
    Nm.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ci(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ci(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = _t();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = _t();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = c2.bind(null, oe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = _t();
  return e = { current: e }, t.memoizedState = e;
}, useState: Nf, useDebugValue: Qu, useDeferredValue: function(e) {
  return _t().memoizedState = e;
}, useTransition: function() {
  var e = Nf(!1), t = e[0];
  return e = u2.bind(null, e[1]), _t().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = oe, o = _t();
  if (te) {
    if (n === void 0) throw Error(_(407));
    n = n();
  } else {
    if (n = t(), Se === null) throw Error(_(349));
    $n & 30 || Pm(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Lf(Rm.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Eo(9, Tm.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = _t(), t = Se.identifierPrefix;
  if (te) {
    var n = Ft, r = Bt;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = a2++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, p2 = {
  readContext: dt,
  useCallback: Im,
  useContext: dt,
  useEffect: Ku,
  useImperativeHandle: Lm,
  useInsertionEffect: zm,
  useLayoutEffect: bm,
  useMemo: jm,
  useReducer: zs,
  useRef: Mm,
  useState: function() {
    return zs(Co);
  },
  useDebugValue: Qu,
  useDeferredValue: function(e) {
    var t = pt();
    return Am(t, ge.memoizedState, e);
  },
  useTransition: function() {
    var e = zs(Co)[0], t = pt().memoizedState;
    return [e, t];
  },
  useMutableSource: Em,
  useSyncExternalStore: _m,
  useId: Bm,
  unstable_isNewReconciler: !1
}, m2 = { readContext: dt, useCallback: Im, useContext: dt, useEffect: Ku, useImperativeHandle: Lm, useInsertionEffect: zm, useLayoutEffect: bm, useMemo: jm, useReducer: bs, useRef: Mm, useState: function() {
  return bs(Co);
}, useDebugValue: Qu, useDeferredValue: function(e) {
  var t = pt();
  return ge === null ? t.memoizedState = e : Am(t, ge.memoizedState, e);
}, useTransition: function() {
  var e = bs(Co)[0], t = pt().memoizedState;
  return [e, t];
}, useMutableSource: Em, useSyncExternalStore: _m, useId: Bm, unstable_isNewReconciler: !1 };
function yt(e, t) {
  if (e && e.defaultProps) {
    t = ie({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ie({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Gl = { isMounted: function(e) {
  return (e = e._reactInternals) ? bn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Le(), o = un(e), i = Dt(r, o);
  i.payload = t, n != null && (i.callback = n), t = sn(e, i, o), t !== null && (wt(t, e, o, r), ki(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Le(), o = un(e), i = Dt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = sn(e, i, o), t !== null && (wt(t, e, o, r), ki(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Le(), r = un(e), o = Dt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = sn(e, o, r), t !== null && (wt(t, e, r, n), ki(t, e, r));
} };
function If(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !go(n, r) || !go(o, i) : !0;
}
function Um(e, t, n) {
  var r = !1, o = dn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = dt(i) : (o = De(t) ? Tn : Me.current, r = t.contextTypes, i = (r = r != null) ? pr(e, o) : dn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Gl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function jf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Gl.enqueueReplaceState(t, t.state, null);
}
function Ta(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Fu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = dt(i) : (i = De(t) ? Tn : Me.current, o.context = pr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Pa(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Gl.enqueueReplaceState(o, o.state, null), Yi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function vr(e, t) {
  try {
    var n = "", r = t;
    do
      n += W1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ns(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ra(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var h2 = typeof WeakMap == "function" ? WeakMap : Map;
function Vm(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    el || (el = !0, Aa = r), Ra(e, t);
  }, n;
}
function Hm(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Ra(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ra(e, t), typeof r != "function" && (an === null ? an = /* @__PURE__ */ new Set([this]) : an.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Af(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new h2();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = $2.bind(null, e, t, n), t.then(e, e));
}
function Bf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ff(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, sn(n, t, 1))), n.lanes |= 1), e);
}
var g2 = Gt.ReactCurrentOwner, Be = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? Sm(t, null, n, r) : hr(t, e.child, n, r);
}
function Df(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return lr(t, o), r = Hu(e, t, n, r, i, o), n = Gu(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ht(e, t, o)) : (te && n && bu(t), t.flags |= 1, Ne(e, t, r, o), t.child);
}
function Wf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !nc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Gm(e, t, i, r, o)) : (e = Ti(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : go, n(l, r) && e.ref === t.ref) return Ht(e, t, o);
  }
  return t.flags |= 1, e = cn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Gm(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (go(i, r) && e.ref === t.ref) if (Be = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Be = !0);
    else return t.lanes = e.lanes, Ht(e, t, o);
  }
  return $a(e, t, n, r, o);
}
function Km(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Z(qn, He), He |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Z(qn, He), He |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Z(qn, He), He |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Z(qn, He), He |= r;
  return Ne(e, t, o, n), t.child;
}
function Qm(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function $a(e, t, n, r, o) {
  var i = De(n) ? Tn : Me.current;
  return i = pr(t, i), lr(t, o), n = Hu(e, t, n, r, i, o), r = Gu(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ht(e, t, o)) : (te && r && bu(t), t.flags |= 1, Ne(e, t, n, o), t.child);
}
function Uf(e, t, n, r, o) {
  if (De(n)) {
    var i = !0;
    Vi(t);
  } else i = !1;
  if (lr(t, o), t.stateNode === null) Ei(e, t), Um(t, n, r), Ta(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = dt(u) : (u = De(n) ? Tn : Me.current, u = pr(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && jf(t, l, r, u), Zt = !1;
    var m = t.memoizedState;
    l.state = m, Yi(t, r, l, o), a = t.memoizedState, s !== r || m !== a || Fe.current || Zt ? (typeof c == "function" && (Pa(t, n, c, r), a = t.memoizedState), (s = Zt || If(t, n, s, r, m, a, u)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, wm(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : yt(t.type, s), l.props = u, d = t.pendingProps, m = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = dt(a) : (a = De(n) ? Tn : Me.current, a = pr(t, a));
    var y = n.getDerivedStateFromProps;
    (c = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || m !== a) && jf(t, l, r, a), Zt = !1, m = t.memoizedState, l.state = m, Yi(t, r, l, o);
    var v = t.memoizedState;
    s !== d || m !== v || Fe.current || Zt ? (typeof y == "function" && (Pa(t, n, y, r), v = t.memoizedState), (u = Zt || If(t, n, u, r, m, v, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), l.props = r, l.state = v, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Oa(e, t, n, r, i, o);
}
function Oa(e, t, n, r, o, i) {
  Qm(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Rf(t, n, !1), Ht(e, t, i);
  r = t.stateNode, g2.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = hr(t, e.child, null, i), t.child = hr(t, null, s, i)) : Ne(e, t, s, i), t.memoizedState = r.state, o && Rf(t, n, !0), t.child;
}
function Ym(e) {
  var t = e.stateNode;
  t.pendingContext ? Tf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tf(e, t.context, !1), Du(e, t.containerInfo);
}
function Vf(e, t, n, r, o) {
  return mr(), Lu(o), t.flags |= 256, Ne(e, t, n, r), t.child;
}
var Ma = { dehydrated: null, treeContext: null, retryLane: 0 };
function za(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xm(e, t, n) {
  var r = t.pendingProps, o = re.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Z(re, o & 1), e === null)
    return Ea(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Yl(l, r, 0, null), e = Pn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = za(n), t.memoizedState = Ma, e) : Yu(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return v2(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = cn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = cn(s, i) : (i = Pn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? za(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Ma, r;
  }
  return i = e.child, e = i.sibling, r = cn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Yu(e, t) {
  return t = Yl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ri(e, t, n, r) {
  return r !== null && Lu(r), hr(t, e.child, null, n), e = Yu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function v2(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ns(Error(_(422))), ri(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Yl({ mode: "visible", children: r.children }, o, 0, null), i = Pn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && hr(t, e.child, null, l), t.child.memoizedState = za(l), t.memoizedState = Ma, i);
  if (!(t.mode & 1)) return ri(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(_(419)), r = Ns(i, r, void 0), ri(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, Be || s) {
    if (r = Se, r !== null) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Vt(e, o), wt(r, e, o, -1));
    }
    return tc(), r = Ns(Error(_(421))), ri(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = O2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ke = ln(o.nextSibling), Ye = t, te = !0, St = null, e !== null && (lt[st++] = Bt, lt[st++] = Ft, lt[st++] = Rn, Bt = e.id, Ft = e.overflow, Rn = t), t = Yu(t, r.children), t.flags |= 4096, t);
}
function Hf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _a(e.return, t, n);
}
function Ls(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Zm(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ne(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Hf(e, n, t);
      else if (e.tag === 19) Hf(e, n, t);
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
  if (Z(re, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Xi(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ls(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Xi(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Ls(t, !0, n, null, i);
      break;
    case "together":
      Ls(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ei(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ht(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = cn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function y2(e, t, n) {
  switch (t.tag) {
    case 3:
      Ym(t), mr();
      break;
    case 5:
      Cm(t);
      break;
    case 1:
      De(t.type) && Vi(t);
      break;
    case 4:
      Du(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Z(Ki, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Z(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Xm(e, t, n) : (Z(re, re.current & 1), e = Ht(e, t, n), e !== null ? e.sibling : null);
      Z(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Zm(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Z(re, re.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Km(e, t, n);
  }
  return Ht(e, t, n);
}
var qm, ba, Jm, eh;
qm = function(e, t) {
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
ba = function() {
};
Jm = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Cn(zt.current);
    var i = null;
    switch (n) {
      case "input":
        o = ta(e, o), r = ta(e, r), i = [];
        break;
      case "select":
        o = ie({}, o, { value: void 0 }), r = ie({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = oa(e, o), r = oa(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wi);
    }
    la(n, r);
    var l;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var s = o[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ao.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ao.hasOwnProperty(u) ? (a != null && u === "onScroll" && q("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
eh = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ar(e, t) {
  if (!te) switch (e.tailMode) {
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
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function x2(e, t, n) {
  var r = t.pendingProps;
  switch (Nu(t), t.tag) {
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
      return Re(t), null;
    case 1:
      return De(t.type) && Ui(), Re(t), null;
    case 3:
      return r = t.stateNode, gr(), J(Fe), J(Me), Uu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ti(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, St !== null && (Da(St), St = null))), ba(e, t), Re(t), null;
    case 5:
      Wu(t);
      var o = Cn(ko.current);
      if (n = t.type, e !== null && t.stateNode != null) Jm(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Re(t), null;
        }
        if (e = Cn(zt.current), ti(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Rt] = t, r[xo] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vr.length; o++) q(Vr[o], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q(
                "error",
                r
              ), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              Jc(r, i), q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, q("invalid", r);
              break;
            case "textarea":
              tf(r, i), q("invalid", r);
          }
          la(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ei(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ei(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : ao.hasOwnProperty(l) && s != null && l === "onScroll" && q("scroll", r);
          }
          switch (n) {
            case "input":
              Go(r), ef(r, i, !0);
              break;
            case "textarea":
              Go(r), nf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Wi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Rp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Rt] = t, e[xo] = r, qm(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = sa(n, r), n) {
              case "dialog":
                q("cancel", e), q("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Vr.length; o++) q(Vr[o], e);
                o = r;
                break;
              case "source":
                q("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                q(
                  "error",
                  e
                ), q("load", e), o = r;
                break;
              case "details":
                q("toggle", e), o = r;
                break;
              case "input":
                Jc(e, r), o = ta(e, r), q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ie({}, r, { value: void 0 }), q("invalid", e);
                break;
              case "textarea":
                tf(e, r), o = oa(e, r), q("invalid", e);
                break;
              default:
                o = r;
            }
            la(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? Mp(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && $p(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && uo(e, a) : typeof a == "number" && uo(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ao.hasOwnProperty(i) ? a != null && i === "onScroll" && q("scroll", e) : a != null && xu(e, i, a, l));
            }
            switch (n) {
              case "input":
                Go(e), ef(e, r, !1);
                break;
              case "textarea":
                Go(e), nf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? nr(e, !!r.multiple, i, !1) : r.defaultValue != null && nr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Wi);
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
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) eh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (n = Cn(ko.current), Cn(zt.current), ti(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Rt] = t, (i = r.nodeValue !== n) && (e = Ye, e !== null)) switch (e.tag) {
            case 3:
              ei(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ei(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Rt] = t, t.stateNode = r;
      }
      return Re(t), null;
    case 13:
      if (J(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (te && Ke !== null && t.mode & 1 && !(t.flags & 128)) ym(), mr(), t.flags |= 98560, i = !1;
        else if (i = ti(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(_(317));
            i[Rt] = t;
          } else mr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Re(t), i = !1;
        } else St !== null && (Da(St), St = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? ve === 0 && (ve = 3) : tc())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
    case 4:
      return gr(), ba(e, t), e === null && vo(t.stateNode.containerInfo), Re(t), null;
    case 10:
      return Au(t.type._context), Re(t), null;
    case 17:
      return De(t.type) && Ui(), Re(t), null;
    case 19:
      if (J(re), i = t.memoizedState, i === null) return Re(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Ar(i, !1);
      else {
        if (ve !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Xi(e), l !== null) {
            for (t.flags |= 128, Ar(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Z(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ce() > yr && (t.flags |= 128, r = !0, Ar(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Xi(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ar(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !te) return Re(t), null;
        } else 2 * ce() - i.renderingStartTime > yr && n !== 1073741824 && (t.flags |= 128, r = !0, Ar(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ce(), t.sibling = null, n = re.current, Z(re, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
    case 22:
    case 23:
      return ec(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function S2(e, t) {
  switch (Nu(t), t.tag) {
    case 1:
      return De(t.type) && Ui(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gr(), J(Fe), J(Me), Uu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Wu(t), null;
    case 13:
      if (J(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(_(340));
        mr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return J(re), null;
    case 4:
      return gr(), null;
    case 10:
      return Au(t.type._context), null;
    case 22:
    case 23:
      return ec(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var oi = !1, Oe = !1, k2 = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ue(e, t, r);
  }
  else n.current = null;
}
function Na(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var Gf = !1;
function w2(e, t) {
  if (va = Bi, e = im(), zu(e)) {
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
        var l = 0, s = -1, a = -1, u = 0, c = 0, d = e, m = null;
        t: for (; ; ) {
          for (var y; d !== n || o !== 0 && d.nodeType !== 3 || (s = l + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (y = d.firstChild) !== null; )
            m = d, d = y;
          for (; ; ) {
            if (d === e) break t;
            if (m === n && ++u === o && (s = l), m === i && ++c === r && (a = l), (y = d.nextSibling) !== null) break;
            d = m, m = d.parentNode;
          }
          d = y;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ya = { focusedElem: e, selectionRange: n }, Bi = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
  else for (; M !== null; ) {
    t = M;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var g = v.memoizedProps, P = v.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : yt(t.type, g), P);
            p.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(_(163));
      }
    } catch (x) {
      ue(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, M = e;
      break;
    }
    M = t.return;
  }
  return v = Gf, Gf = !1, v;
}
function qr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Na(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Kl(e, t) {
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
function La(e) {
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
function th(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, th(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Rt], delete t[xo], delete t[ka], delete t[o2], delete t[i2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function nh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Kf(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || nh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ia(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ia(e, t, n), e = e.sibling; e !== null; ) Ia(e, t, n), e = e.sibling;
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), e = e.sibling;
}
var we = null, xt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) rh(e, t, n), n = n.sibling;
}
function rh(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function") try {
    Mt.onCommitFiberUnmount(Bl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Oe || Zn(n, t);
    case 6:
      var r = we, o = xt;
      we = null, Qt(e, t, n), we = r, xt = o, we !== null && (xt ? (e = we, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null && (xt ? (e = we, n = n.stateNode, e.nodeType === 8 ? Rs(e.parentNode, n) : e.nodeType === 1 && Rs(e, n), mo(e)) : Rs(we, n.stateNode));
      break;
    case 4:
      r = we, o = xt, we = n.stateNode.containerInfo, xt = !0, Qt(e, t, n), we = r, xt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Na(n, t, l), o = o.next;
        } while (o !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (!Oe && (Zn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        ue(n, t, s);
      }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null, Qt(e, t, n), Oe = r) : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function Qf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new k2()), t.forEach(function(r) {
      var o = M2.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function vt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            we = s.stateNode, xt = !1;
            break e;
          case 3:
            we = s.stateNode.containerInfo, xt = !0;
            break e;
          case 4:
            we = s.stateNode.containerInfo, xt = !0;
            break e;
        }
        s = s.return;
      }
      if (we === null) throw Error(_(160));
      rh(i, l, o), we = null, xt = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      ue(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) oh(t, e), t = t.sibling;
}
function oh(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (vt(t, e), Et(e), r & 4) {
        try {
          qr(3, e, e.return), Kl(3, e);
        } catch (g) {
          ue(e, e.return, g);
        }
        try {
          qr(5, e, e.return);
        } catch (g) {
          ue(e, e.return, g);
        }
      }
      break;
    case 1:
      vt(t, e), Et(e), r & 512 && n !== null && Zn(n, n.return);
      break;
    case 5:
      if (vt(t, e), Et(e), r & 512 && n !== null && Zn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          uo(o, "");
        } catch (g) {
          ue(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && Pp(o, i), sa(s, l);
          var u = sa(s, i);
          for (l = 0; l < a.length; l += 2) {
            var c = a[l], d = a[l + 1];
            c === "style" ? Mp(o, d) : c === "dangerouslySetInnerHTML" ? $p(o, d) : c === "children" ? uo(o, d) : xu(o, c, d, u);
          }
          switch (s) {
            case "input":
              na(o, i);
              break;
            case "textarea":
              Tp(o, i);
              break;
            case "select":
              var m = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? nr(o, !!i.multiple, y, !1) : m !== !!i.multiple && (i.defaultValue != null ? nr(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : nr(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[xo] = i;
        } catch (g) {
          ue(e, e.return, g);
        }
      }
      break;
    case 6:
      if (vt(t, e), Et(e), r & 4) {
        if (e.stateNode === null) throw Error(_(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          ue(e, e.return, g);
        }
      }
      break;
    case 3:
      if (vt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        mo(t.containerInfo);
      } catch (g) {
        ue(e, e.return, g);
      }
      break;
    case 4:
      vt(t, e), Et(e);
      break;
    case 13:
      vt(t, e), Et(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (qu = ce())), r & 4 && Qf(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (u = Oe) || c, vt(t, e), Oe = u) : vt(t, e), Et(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (M = e, c = e.child; c !== null; ) {
          for (d = M = c; M !== null; ) {
            switch (m = M, y = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                qr(4, m, m.return);
                break;
              case 1:
                Zn(m, m.return);
                var v = m.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (g) {
                    ue(r, n, g);
                  }
                }
                break;
              case 5:
                Zn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Xf(d);
                  continue;
                }
            }
            y !== null ? (y.return = m, M = y) : Xf(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Op("display", l));
              } catch (g) {
                ue(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (g) {
              ue(e, e.return, g);
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
      vt(t, e), Et(e), r & 4 && Qf(e);
      break;
    case 21:
      break;
    default:
      vt(
        t,
        e
      ), Et(e);
  }
}
function Et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (uo(o, ""), r.flags &= -33);
          var i = Kf(e);
          ja(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = Kf(e);
          Ia(e, s, l);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      ue(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function C2(e, t, n) {
  M = e, ih(e);
}
function ih(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || oi;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || Oe;
        s = oi;
        var u = Oe;
        if (oi = l, (Oe = a) && !u) for (M = o; M !== null; ) l = M, a = l.child, l.tag === 22 && l.memoizedState !== null ? Zf(o) : a !== null ? (a.return = l, M = a) : Zf(o);
        for (; i !== null; ) M = i, ih(i), i = i.sibling;
        M = o, oi = s, Oe = u;
      }
      Yf(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, M = i) : Yf(e);
  }
}
function Yf(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Oe || Kl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Oe) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && bf(t, i, r);
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
              bf(t, l, n);
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
                  d !== null && mo(d);
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
            throw Error(_(163));
        }
        Oe || t.flags & 512 && La(t);
      } catch (m) {
        ue(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function Xf(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function Zf(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Kl(4, t);
          } catch (a) {
            ue(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ue(t, o, a);
            }
          }
          var i = t.return;
          try {
            La(t);
          } catch (a) {
            ue(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            La(t);
          } catch (a) {
            ue(t, l, a);
          }
      }
    } catch (a) {
      ue(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, M = s;
      break;
    }
    M = t.return;
  }
}
var E2 = Math.ceil, Ji = Gt.ReactCurrentDispatcher, Xu = Gt.ReactCurrentOwner, ut = Gt.ReactCurrentBatchConfig, D = 0, Se = null, me = null, Ee = 0, He = 0, qn = hn(0), ve = 0, _o = null, On = 0, Ql = 0, Zu = 0, Jr = null, Ae = null, qu = 0, yr = 1 / 0, Lt = null, el = !1, Aa = null, an = null, ii = !1, tn = null, tl = 0, eo = 0, Ba = null, _i = -1, Pi = 0;
function Le() {
  return D & 6 ? ce() : _i !== -1 ? _i : _i = ce();
}
function un(e) {
  return e.mode & 1 ? D & 2 && Ee !== 0 ? Ee & -Ee : s2.transition !== null ? (Pi === 0 && (Pi = Up()), Pi) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xp(e.type)), e) : 1;
}
function wt(e, t, n, r) {
  if (50 < eo) throw eo = 0, Ba = null, Error(_(185));
  Lo(e, n, r), (!(D & 2) || e !== Se) && (e === Se && (!(D & 2) && (Ql |= n), ve === 4 && Jt(e, Ee)), We(e, r), n === 1 && D === 0 && !(t.mode & 1) && (yr = ce() + 500, Vl && gn()));
}
function We(e, t) {
  var n = e.callbackNode;
  sx(e, t);
  var r = Ai(e, e === Se ? Ee : 0);
  if (r === 0) n !== null && lf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && lf(n), t === 1) e.tag === 0 ? l2(qf.bind(null, e)) : hm(qf.bind(null, e)), n2(function() {
      !(D & 6) && gn();
    }), n = null;
    else {
      switch (Vp(r)) {
        case 1:
          n = Eu;
          break;
        case 4:
          n = Dp;
          break;
        case 16:
          n = ji;
          break;
        case 536870912:
          n = Wp;
          break;
        default:
          n = ji;
      }
      n = ph(n, lh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function lh(e, t) {
  if (_i = -1, Pi = 0, D & 6) throw Error(_(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = Ai(e, e === Se ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = nl(e, r);
  else {
    t = r;
    var o = D;
    D |= 2;
    var i = ah();
    (Se !== e || Ee !== t) && (Lt = null, yr = ce() + 500, _n(e, t));
    do
      try {
        T2();
        break;
      } catch (s) {
        sh(e, s);
      }
    while (!0);
    ju(), Ji.current = i, D = o, me !== null ? t = 0 : (Se = null, Ee = 0, t = ve);
  }
  if (t !== 0) {
    if (t === 2 && (o = da(e), o !== 0 && (r = o, t = Fa(e, o))), t === 1) throw n = _o, _n(e, 0), Jt(e, r), We(e, ce()), n;
    if (t === 6) Jt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !_2(o) && (t = nl(e, r), t === 2 && (i = da(e), i !== 0 && (r = i, t = Fa(e, i))), t === 1)) throw n = _o, _n(e, 0), Jt(e, r), We(e, ce()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          yn(e, Ae, Lt);
          break;
        case 3:
          if (Jt(e, r), (r & 130023424) === r && (t = qu + 500 - ce(), 10 < t)) {
            if (Ai(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Le(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Sa(yn.bind(null, e, Ae, Lt), t);
            break;
          }
          yn(e, Ae, Lt);
          break;
        case 4:
          if (Jt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - kt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * E2(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Sa(yn.bind(null, e, Ae, Lt), r);
            break;
          }
          yn(e, Ae, Lt);
          break;
        case 5:
          yn(e, Ae, Lt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return We(e, ce()), e.callbackNode === n ? lh.bind(null, e) : null;
}
function Fa(e, t) {
  var n = Jr;
  return e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256), e = nl(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && Da(t)), e;
}
function Da(e) {
  Ae === null ? Ae = e : Ae.push.apply(Ae, e);
}
function _2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Ct(i(), o)) return !1;
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
function Jt(e, t) {
  for (t &= ~Zu, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function qf(e) {
  if (D & 6) throw Error(_(327));
  sr();
  var t = Ai(e, 0);
  if (!(t & 1)) return We(e, ce()), null;
  var n = nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = da(e);
    r !== 0 && (t = r, n = Fa(e, r));
  }
  if (n === 1) throw n = _o, _n(e, 0), Jt(e, t), We(e, ce()), n;
  if (n === 6) throw Error(_(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, yn(e, Ae, Lt), We(e, ce()), null;
}
function Ju(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (yr = ce() + 500, Vl && gn());
  }
}
function Mn(e) {
  tn !== null && tn.tag === 0 && !(D & 6) && sr();
  var t = D;
  D |= 1;
  var n = ut.transition, r = V;
  try {
    if (ut.transition = null, V = 1, e) return e();
  } finally {
    V = r, ut.transition = n, D = t, !(D & 6) && gn();
  }
}
function ec() {
  He = qn.current, J(qn);
}
function _n(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, t2(n)), me !== null) for (n = me.return; n !== null; ) {
    var r = n;
    switch (Nu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ui();
        break;
      case 3:
        gr(), J(Fe), J(Me), Uu();
        break;
      case 5:
        Wu(r);
        break;
      case 4:
        gr();
        break;
      case 13:
        J(re);
        break;
      case 19:
        J(re);
        break;
      case 10:
        Au(r.type._context);
        break;
      case 22:
      case 23:
        ec();
    }
    n = n.return;
  }
  if (Se = e, me = e = cn(e.current, null), Ee = He = t, ve = 0, _o = null, Zu = Ql = On = 0, Ae = Jr = null, wn !== null) {
    for (t = 0; t < wn.length; t++) if (n = wn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    wn = null;
  }
  return e;
}
function sh(e, t) {
  do {
    var n = me;
    try {
      if (ju(), wi.current = qi, Zi) {
        for (var r = oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Zi = !1;
      }
      if ($n = 0, xe = ge = oe = null, Zr = !1, wo = 0, Xu.current = null, n === null || n.return === null) {
        ve = 1, _o = t, me = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, a = t;
        if (t = Ee, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = c.alternate;
            m ? (c.updateQueue = m.updateQueue, c.memoizedState = m.memoizedState, c.lanes = m.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var y = Bf(l);
          if (y !== null) {
            y.flags &= -257, Ff(y, l, s, i, t), y.mode & 1 && Af(i, u, t), t = y, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(a), t.updateQueue = g;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Af(i, u, t), tc();
              break e;
            }
            a = Error(_(426));
          }
        } else if (te && s.mode & 1) {
          var P = Bf(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), Ff(P, l, s, i, t), Lu(vr(a, s));
            break e;
          }
        }
        i = a = vr(a, s), ve !== 4 && (ve = 2), Jr === null ? Jr = [i] : Jr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Vm(i, a, t);
              zf(i, p);
              break e;
            case 1:
              s = a;
              var f = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (an === null || !an.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = Hm(i, s, t);
                zf(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ch(n);
    } catch (C) {
      t = C, me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ah() {
  var e = Ji.current;
  return Ji.current = qi, e === null ? qi : e;
}
function tc() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4), Se === null || !(On & 268435455) && !(Ql & 268435455) || Jt(Se, Ee);
}
function nl(e, t) {
  var n = D;
  D |= 2;
  var r = ah();
  (Se !== e || Ee !== t) && (Lt = null, _n(e, t));
  do
    try {
      P2();
      break;
    } catch (o) {
      sh(e, o);
    }
  while (!0);
  if (ju(), D = n, Ji.current = r, me !== null) throw Error(_(261));
  return Se = null, Ee = 0, ve;
}
function P2() {
  for (; me !== null; ) uh(me);
}
function T2() {
  for (; me !== null && !q1(); ) uh(me);
}
function uh(e) {
  var t = dh(e.alternate, e, He);
  e.memoizedProps = e.pendingProps, t === null ? ch(e) : me = t, Xu.current = null;
}
function ch(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = S2(n, t), n !== null) {
        n.flags &= 32767, me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ve = 6, me = null;
        return;
      }
    } else if (n = x2(n, t, He), n !== null) {
      me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function yn(e, t, n) {
  var r = V, o = ut.transition;
  try {
    ut.transition = null, V = 1, R2(e, t, n, r);
  } finally {
    ut.transition = o, V = r;
  }
  return null;
}
function R2(e, t, n, r) {
  do
    sr();
  while (tn !== null);
  if (D & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (ax(e, i), e === Se && (me = Se = null, Ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ii || (ii = !0, ph(ji, function() {
    return sr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = ut.transition, ut.transition = null;
    var l = V;
    V = 1;
    var s = D;
    D |= 4, Xu.current = null, w2(e, n), oh(n, e), Qx(ya), Bi = !!va, ya = va = null, e.current = n, C2(n), J1(), D = s, V = l, ut.transition = i;
  } else e.current = n;
  if (ii && (ii = !1, tn = e, tl = o), i = e.pendingLanes, i === 0 && (an = null), nx(n.stateNode), We(e, ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (el) throw el = !1, e = Aa, Aa = null, e;
  return tl & 1 && e.tag !== 0 && sr(), i = e.pendingLanes, i & 1 ? e === Ba ? eo++ : (eo = 0, Ba = e) : eo = 0, gn(), null;
}
function sr() {
  if (tn !== null) {
    var e = Vp(tl), t = ut.transition, n = V;
    try {
      if (ut.transition = null, V = 16 > e ? 16 : e, tn === null) var r = !1;
      else {
        if (e = tn, tn = null, tl = 0, D & 6) throw Error(_(331));
        var o = D;
        for (D |= 4, M = e.current; M !== null; ) {
          var i = M, l = i.child;
          if (M.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qr(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, M = d;
                  else for (; M !== null; ) {
                    c = M;
                    var m = c.sibling, y = c.return;
                    if (th(c), c === u) {
                      M = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = y, M = m;
                      break;
                    }
                    M = y;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var P = g.sibling;
                    g.sibling = null, g = P;
                  } while (g !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, M = l;
          else e: for (; M !== null; ) {
            if (i = M, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                qr(9, i, i.return);
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, M = p;
              break e;
            }
            M = i.return;
          }
        }
        var f = e.current;
        for (M = f; M !== null; ) {
          l = M;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) h.return = l, M = h;
          else e: for (l = f; M !== null; ) {
            if (s = M, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Kl(9, s);
              }
            } catch (C) {
              ue(s, s.return, C);
            }
            if (s === l) {
              M = null;
              break e;
            }
            var x = s.sibling;
            if (x !== null) {
              x.return = s.return, M = x;
              break e;
            }
            M = s.return;
          }
        }
        if (D = o, gn(), Mt && typeof Mt.onPostCommitFiberRoot == "function") try {
          Mt.onPostCommitFiberRoot(Bl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      V = n, ut.transition = t;
    }
  }
  return !1;
}
function Jf(e, t, n) {
  t = vr(n, t), t = Vm(e, t, 1), e = sn(e, t, 1), t = Le(), e !== null && (Lo(e, 1, t), We(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) Jf(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Jf(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (an === null || !an.has(r))) {
        e = vr(n, e), e = Hm(t, e, 1), t = sn(t, e, 1), e = Le(), t !== null && (Lo(t, 1, e), We(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function $2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (Ee & n) === n && (ve === 4 || ve === 3 && (Ee & 130023424) === Ee && 500 > ce() - qu ? _n(e, 0) : Zu |= n), We(e, t);
}
function fh(e, t) {
  t === 0 && (e.mode & 1 ? (t = Yo, Yo <<= 1, !(Yo & 130023424) && (Yo = 4194304)) : t = 1);
  var n = Le();
  e = Vt(e, t), e !== null && (Lo(e, t, n), We(e, n));
}
function O2(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fh(e, n);
}
function M2(e, t) {
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
      throw Error(_(314));
  }
  r !== null && r.delete(t), fh(e, n);
}
var dh;
dh = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Fe.current) Be = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Be = !1, y2(e, t, n);
    Be = !!(e.flags & 131072);
  }
  else Be = !1, te && t.flags & 1048576 && gm(t, Gi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ei(e, t), e = t.pendingProps;
      var o = pr(t, Me.current);
      lr(t, n), o = Hu(null, t, r, e, o, n);
      var i = Gu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (i = !0, Vi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Fu(t), o.updater = Gl, t.stateNode = o, o._reactInternals = t, Ta(t, r, e, n), t = Oa(null, t, r, !0, i, n)) : (t.tag = 0, te && i && bu(t), Ne(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ei(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = b2(r), e = yt(r, e), o) {
          case 0:
            t = $a(null, t, r, e, n);
            break e;
          case 1:
            t = Uf(null, t, r, e, n);
            break e;
          case 11:
            t = Df(null, t, r, e, n);
            break e;
          case 14:
            t = Wf(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(_(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : yt(r, o), $a(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : yt(r, o), Uf(e, t, r, o, n);
    case 3:
      e: {
        if (Ym(t), e === null) throw Error(_(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, wm(e, t), Yi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = vr(Error(_(423)), t), t = Vf(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = vr(Error(_(424)), t), t = Vf(e, t, r, n, o);
          break e;
        } else for (Ke = ln(t.stateNode.containerInfo.firstChild), Ye = t, te = !0, St = null, n = Sm(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (mr(), r === o) {
            t = Ht(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Cm(t), e === null && Ea(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, xa(r, o) ? l = null : i !== null && xa(r, i) && (t.flags |= 32), Qm(e, t), Ne(e, t, l, n), t.child;
    case 6:
      return e === null && Ea(t), null;
    case 13:
      return Xm(e, t, n);
    case 4:
      return Du(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = hr(t, null, r, n) : Ne(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : yt(r, o), Df(e, t, r, o, n);
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Z(Ki, r._currentValue), r._currentValue = l, i !== null) if (Ct(i.value, l)) {
          if (i.children === o.children && !Fe.current) {
            t = Ht(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            l = i.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Dt(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), _a(
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
            if (l = i.return, l === null) throw Error(_(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), _a(l, n, t), l = i.sibling;
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
        Ne(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, lr(t, n), o = dt(o), r = r(o), t.flags |= 1, Ne(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = yt(r, t.pendingProps), o = yt(r.type, o), Wf(e, t, r, o, n);
    case 15:
      return Gm(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : yt(r, o), Ei(e, t), t.tag = 1, De(r) ? (e = !0, Vi(t)) : e = !1, lr(t, n), Um(t, r, o), Ta(t, r, o, n), Oa(null, t, r, !0, e, n);
    case 19:
      return Zm(e, t, n);
    case 22:
      return Km(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function ph(e, t) {
  return Fp(e, t);
}
function z2(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function at(e, t, n, r) {
  return new z2(e, t, n, r);
}
function nc(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function b2(e) {
  if (typeof e == "function") return nc(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ku) return 11;
    if (e === wu) return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return n === null ? (n = at(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ti(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") nc(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Wn:
      return Pn(n.children, o, i, t);
    case Su:
      l = 8, o |= 8;
      break;
    case Zs:
      return e = at(12, n, t, o | 2), e.elementType = Zs, e.lanes = i, e;
    case qs:
      return e = at(13, n, t, o), e.elementType = qs, e.lanes = i, e;
    case Js:
      return e = at(19, n, t, o), e.elementType = Js, e.lanes = i, e;
    case Cp:
      return Yl(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case kp:
          l = 10;
          break e;
        case wp:
          l = 9;
          break e;
        case ku:
          l = 11;
          break e;
        case wu:
          l = 14;
          break e;
        case Xt:
          l = 16, r = null;
          break e;
      }
      throw Error(_(130, e == null ? e : typeof e, ""));
  }
  return t = at(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Pn(e, t, n, r) {
  return e = at(7, e, r, t), e.lanes = n, e;
}
function Yl(e, t, n, r) {
  return e = at(22, e, r, t), e.elementType = Cp, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Is(e, t, n) {
  return e = at(6, e, null, t), e.lanes = n, e;
}
function js(e, t, n) {
  return t = at(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function N2(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vs(0), this.expirationTimes = vs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vs(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function rc(e, t, n, r, o, i, l, s, a) {
  return e = new N2(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = at(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fu(i), e;
}
function L2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function mh(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (bn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (De(n)) return mm(e, n, t);
  }
  return t;
}
function hh(e, t, n, r, o, i, l, s, a) {
  return e = rc(n, r, !0, e, o, i, l, s, a), e.context = mh(null), n = e.current, r = Le(), o = un(n), i = Dt(r, o), i.callback = t ?? null, sn(n, i, o), e.current.lanes = o, Lo(e, o, r), We(e, r), e;
}
function Xl(e, t, n, r) {
  var o = t.current, i = Le(), l = un(o);
  return n = mh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = sn(o, t, l), e !== null && (wt(e, o, l, i), ki(e, o, l)), l;
}
function rl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ed(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function oc(e, t) {
  ed(e, t), (e = e.alternate) && ed(e, t);
}
function I2() {
  return null;
}
var gh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ic(e) {
  this._internalRoot = e;
}
Zl.prototype.render = ic.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Xl(e, t, null, null);
};
Zl.prototype.unmount = ic.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function() {
      Xl(null, e, null, null);
    }), t[Ut] = null;
  }
};
function Zl(e) {
  this._internalRoot = e;
}
Zl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Kp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++) ;
    qt.splice(n, 0, e), n === 0 && Yp(e);
  }
};
function lc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ql(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function td() {
}
function j2(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = rl(l);
        i.call(u);
      };
    }
    var l = hh(t, r, e, 0, null, !1, !1, "", td);
    return e._reactRootContainer = l, e[Ut] = l.current, vo(e.nodeType === 8 ? e.parentNode : e), Mn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = rl(a);
      s.call(u);
    };
  }
  var a = rc(e, 0, !1, null, null, !1, !1, "", td);
  return e._reactRootContainer = a, e[Ut] = a.current, vo(e.nodeType === 8 ? e.parentNode : e), Mn(function() {
    Xl(t, a, n, r);
  }), a;
}
function Jl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = rl(l);
        s.call(a);
      };
    }
    Xl(t, l, e, o);
  } else l = j2(n, t, e, o, r);
  return rl(l);
}
Hp = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ur(t.pendingLanes);
        n !== 0 && (_u(t, n | 1), We(t, ce()), !(D & 6) && (yr = ce() + 500, gn()));
      }
      break;
    case 13:
      Mn(function() {
        var r = Vt(e, 1);
        if (r !== null) {
          var o = Le();
          wt(r, e, 1, o);
        }
      }), oc(e, 1);
  }
};
Pu = function(e) {
  if (e.tag === 13) {
    var t = Vt(e, 134217728);
    if (t !== null) {
      var n = Le();
      wt(t, e, 134217728, n);
    }
    oc(e, 134217728);
  }
};
Gp = function(e) {
  if (e.tag === 13) {
    var t = un(e), n = Vt(e, t);
    if (n !== null) {
      var r = Le();
      wt(n, e, t, r);
    }
    oc(e, t);
  }
};
Kp = function() {
  return V;
};
Qp = function(e, t) {
  var n = V;
  try {
    return V = e, t();
  } finally {
    V = n;
  }
};
ua = function(e, t, n) {
  switch (t) {
    case "input":
      if (na(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ul(r);
            if (!o) throw Error(_(90));
            _p(r), na(r, o);
          }
        }
      }
      break;
    case "textarea":
      Tp(e, n);
      break;
    case "select":
      t = n.value, t != null && nr(e, !!n.multiple, t, !1);
  }
};
Np = Ju;
Lp = Mn;
var A2 = { usingClientEntryPoint: !1, Events: [jo, Gn, Ul, zp, bp, Ju] }, Br = { findFiberByHostInstance: kn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, B2 = { bundleType: Br.bundleType, version: Br.version, rendererPackageName: Br.rendererPackageName, rendererConfig: Br.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ap(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Br.findFiberByHostInstance || I2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!li.isDisabled && li.supportsFiber) try {
    Bl = li.inject(B2), Mt = li;
  } catch {
  }
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A2;
et.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lc(t)) throw Error(_(200));
  return L2(e, t, null, n);
};
et.createRoot = function(e, t) {
  if (!lc(e)) throw Error(_(299));
  var n = !1, r = "", o = gh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = rc(e, 1, !1, null, null, n, !1, r, o), e[Ut] = t.current, vo(e.nodeType === 8 ? e.parentNode : e), new ic(t);
};
et.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
  return e = Ap(t), e = e === null ? null : e.stateNode, e;
};
et.flushSync = function(e) {
  return Mn(e);
};
et.hydrate = function(e, t, n) {
  if (!ql(t)) throw Error(_(200));
  return Jl(null, e, t, !0, n);
};
et.hydrateRoot = function(e, t, n) {
  if (!lc(e)) throw Error(_(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = gh;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = hh(t, null, e, 1, n ?? null, o, !1, i, l), e[Ut] = t.current, vo(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Zl(t);
};
et.render = function(e, t, n) {
  if (!ql(t)) throw Error(_(200));
  return Jl(null, e, t, !1, n);
};
et.unmountComponentAtNode = function(e) {
  if (!ql(e)) throw Error(_(40));
  return e._reactRootContainer ? (Mn(function() {
    Jl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ut] = null;
    });
  }), !0) : !1;
};
et.unstable_batchedUpdates = Ju;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ql(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Jl(e, t, n, !1, r);
};
et.version = "18.3.1-next-f1338f8080-20240426";
function vh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vh);
    } catch (e) {
      console.error(e);
    }
}
vh(), vp.exports = et;
var F2 = vp.exports;
const nd = Sn.createContext(null);
function D2(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sc(e, t) {
  var n = function(i) {
    return t && E.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && E.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function W2(e, t) {
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
function En(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function U2(e, t) {
  return sc(e.children, function(n) {
    return E.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: En(n, "appear", e),
      enter: En(n, "enter", e),
      exit: En(n, "exit", e)
    });
  });
}
function V2(e, t, n) {
  var r = sc(e.children), o = W2(t, r);
  return Object.keys(o).forEach(function(i) {
    var l = o[i];
    if (E.isValidElement(l)) {
      var s = i in t, a = i in r, u = t[i], c = E.isValidElement(u) && !u.props.in;
      a && (!s || c) ? o[i] = E.cloneElement(l, {
        onExited: n.bind(null, l),
        in: !0,
        exit: En(l, "exit", e),
        enter: En(l, "enter", e)
      }) : !a && s && !c ? o[i] = E.cloneElement(l, {
        in: !1
      }) : a && s && E.isValidElement(u) && (o[i] = E.cloneElement(l, {
        onExited: n.bind(null, l),
        in: u.props.in,
        exit: En(l, "exit", e),
        enter: En(l, "enter", e)
      }));
    }
  }), o;
}
var H2 = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, G2 = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ac = /* @__PURE__ */ function(e) {
  L1(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = i.handleExited.bind(D2(i));
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
      children: a ? U2(o, s) : V2(o, l, s),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var l = sc(this.props.children);
    o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var a = w({}, s.children);
      return delete a[o.key], {
        children: a
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, l = o.childFactory, s = G(o, ["component", "childFactory"]), a = this.state.contextValue, u = H2(this.state.children).map(l);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Sn.createElement(nd.Provider, {
      value: a
    }, u) : /* @__PURE__ */ Sn.createElement(nd.Provider, {
      value: a
    }, /* @__PURE__ */ Sn.createElement(i, s, u));
  }, t;
}(Sn.Component);
ac.propTypes = {};
ac.defaultProps = G2;
function K2(e) {
  return qe("MuiPaper", e);
}
Je("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Q2 = ["className", "component", "elevation", "square", "variant"], Y2 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return gt(i, K2, o);
}, X2 = Pe("div", {
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
  return w({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && w({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${At("#fff", Yc(t.elevation))}, ${At("#fff", Yc(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Z2 = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: l = 1,
    square: s = !1,
    variant: a = "elevation"
  } = r, u = G(r, Q2), c = w({}, r, {
    component: i,
    elevation: l,
    square: s,
    variant: a
  }), d = Y2(c);
  return /* @__PURE__ */ T.jsx(X2, w({
    as: i,
    ownerState: c,
    className: X(d.root, o),
    ref: n
  }, u));
});
function q2(e) {
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
  } = e, [c, d] = E.useState(!1), m = X(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: l,
    height: l,
    top: -(l / 2) + i,
    left: -(l / 2) + o
  }, v = X(n.child, c && n.childLeaving, r && n.childPulsate);
  return !s && !c && d(!0), E.useEffect(() => {
    if (!s && a != null) {
      const g = setTimeout(a, u);
      return () => {
        clearTimeout(g);
      };
    }
  }, [a, s, u]), /* @__PURE__ */ T.jsx("span", {
    className: m,
    style: y,
    children: /* @__PURE__ */ T.jsx("span", {
      className: v
    })
  });
}
const ot = Je("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), J2 = ["center", "classes", "className"];
let es = (e) => e, rd, od, id, ld;
const Wa = 550, eS = 80, tS = yl(rd || (rd = es`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), nS = yl(od || (od = es`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), rS = yl(id || (id = es`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), oS = Pe("span", {
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
}), iS = Pe(q2, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(ld || (ld = es`
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
`), ot.rippleVisible, tS, Wa, ({
  theme: e
}) => e.transitions.easing.easeInOut, ot.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, ot.child, ot.childLeaving, nS, Wa, ({
  theme: e
}) => e.transitions.easing.easeInOut, ot.childPulsate, rS, ({
  theme: e
}) => e.transitions.easing.easeInOut), lS = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: l
  } = r, s = G(r, J2), [a, u] = E.useState([]), c = E.useRef(0), d = E.useRef(null);
  E.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [a]);
  const m = E.useRef(!1), y = Vv(), v = E.useRef(null), g = E.useRef(null), P = E.useCallback((x) => {
    const {
      pulsate: C,
      rippleX: k,
      rippleY: S,
      rippleSize: R,
      cb: z
    } = x;
    u((O) => [...O, /* @__PURE__ */ T.jsx(iS, {
      classes: {
        ripple: X(i.ripple, ot.ripple),
        rippleVisible: X(i.rippleVisible, ot.rippleVisible),
        ripplePulsate: X(i.ripplePulsate, ot.ripplePulsate),
        child: X(i.child, ot.child),
        childLeaving: X(i.childLeaving, ot.childLeaving),
        childPulsate: X(i.childPulsate, ot.childPulsate)
      },
      timeout: Wa,
      pulsate: C,
      rippleX: k,
      rippleY: S,
      rippleSize: R
    }, c.current)]), c.current += 1, d.current = z;
  }, [i]), p = E.useCallback((x = {}, C = {}, k = () => {
  }) => {
    const {
      pulsate: S = !1,
      center: R = o || C.pulsate,
      fakeElement: z = !1
      // For test purposes
    } = C;
    if ((x == null ? void 0 : x.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (m.current = !0);
    const O = z ? null : g.current, F = O ? O.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let A, I, K;
    if (R || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      A = Math.round(F.width / 2), I = Math.round(F.height / 2);
    else {
      const {
        clientX: le,
        clientY: he
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      A = Math.round(le - F.left), I = Math.round(he - F.top);
    }
    if (R)
      K = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), K % 2 === 0 && (K += 1);
    else {
      const le = Math.max(Math.abs((O ? O.clientWidth : 0) - A), A) * 2 + 2, he = Math.max(Math.abs((O ? O.clientHeight : 0) - I), I) * 2 + 2;
      K = Math.sqrt(le ** 2 + he ** 2);
    }
    x != null && x.touches ? v.current === null && (v.current = () => {
      P({
        pulsate: S,
        rippleX: A,
        rippleY: I,
        rippleSize: K,
        cb: k
      });
    }, y.start(eS, () => {
      v.current && (v.current(), v.current = null);
    })) : P({
      pulsate: S,
      rippleX: A,
      rippleY: I,
      rippleSize: K,
      cb: k
    });
  }, [o, P, y]), f = E.useCallback(() => {
    p({}, {
      pulsate: !0
    });
  }, [p]), h = E.useCallback((x, C) => {
    if (y.clear(), (x == null ? void 0 : x.type) === "touchend" && v.current) {
      v.current(), v.current = null, y.start(0, () => {
        h(x, C);
      });
      return;
    }
    v.current = null, u((k) => k.length > 0 ? k.slice(1) : k), d.current = C;
  }, [y]);
  return E.useImperativeHandle(n, () => ({
    pulsate: f,
    start: p,
    stop: h
  }), [f, p, h]), /* @__PURE__ */ T.jsx(oS, w({
    className: X(ot.root, i.root, l),
    ref: g
  }, s, {
    children: /* @__PURE__ */ T.jsx(ac, {
      component: null,
      exit: !0,
      children: a
    })
  }));
});
function sS(e) {
  return qe("MuiButtonBase", e);
}
const aS = Je("MuiButtonBase", ["root", "disabled", "focusVisible"]), uS = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], cS = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, l = gt({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, sS, o);
  return n && r && (l.root += ` ${r}`), l;
}, fS = Pe("button", {
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
  [`&.${aS.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), yh = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ve({
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
    focusRipple: m = !1,
    LinkComponent: y = "a",
    onBlur: v,
    onClick: g,
    onContextMenu: P,
    onDragLeave: p,
    onFocus: f,
    onFocusVisible: h,
    onKeyDown: x,
    onKeyUp: C,
    onMouseDown: k,
    onMouseLeave: S,
    onMouseUp: R,
    onTouchEnd: z,
    onTouchMove: O,
    onTouchStart: F,
    tabIndex: A = 0,
    TouchRippleProps: I,
    touchRippleRef: K,
    type: le
  } = r, he = G(r, uS), ze = E.useRef(null), $ = E.useRef(null), b = Mi($, K), {
    isFocusVisibleRef: L,
    onFocus: Q,
    onBlur: ne,
    ref: bt
  } = np(), [ye, nt] = E.useState(!1);
  u && ye && nt(!1), E.useImperativeHandle(o, () => ({
    focusVisible: () => {
      nt(!0), ze.current.focus();
    }
  }), []);
  const [be, Kt] = E.useState(!1);
  E.useEffect(() => {
    Kt(!0);
  }, []);
  const ts = be && !c && !u;
  E.useEffect(() => {
    ye && m && !c && be && $.current.pulsate();
  }, [c, m, ye, be]);
  function Nt(j, cc, Ih = d) {
    return Uo((fc) => (cc && cc(fc), !Ih && $.current && $.current[j](fc), !0));
  }
  const wh = Nt("start", k), Ch = Nt("stop", P), Eh = Nt("stop", p), _h = Nt("stop", R), Ph = Nt("stop", (j) => {
    ye && j.preventDefault(), S && S(j);
  }), Th = Nt("start", F), Rh = Nt("stop", z), $h = Nt("stop", O), Oh = Nt("stop", (j) => {
    ne(j), L.current === !1 && nt(!1), v && v(j);
  }, !1), Mh = Uo((j) => {
    ze.current || (ze.current = j.currentTarget), Q(j), L.current === !0 && (nt(!0), h && h(j)), f && f(j);
  }), ns = () => {
    const j = ze.current;
    return a && a !== "button" && !(j.tagName === "A" && j.href);
  }, rs = E.useRef(!1), zh = Uo((j) => {
    m && !rs.current && ye && $.current && j.key === " " && (rs.current = !0, $.current.stop(j, () => {
      $.current.start(j);
    })), j.target === j.currentTarget && ns() && j.key === " " && j.preventDefault(), x && x(j), j.target === j.currentTarget && ns() && j.key === "Enter" && !u && (j.preventDefault(), g && g(j));
  }), bh = Uo((j) => {
    m && j.key === " " && $.current && ye && !j.defaultPrevented && (rs.current = !1, $.current.stop(j, () => {
      $.current.pulsate(j);
    })), C && C(j), g && j.target === j.currentTarget && ns() && j.key === " " && !j.defaultPrevented && g(j);
  });
  let Bo = a;
  Bo === "button" && (he.href || he.to) && (Bo = y);
  const Rr = {};
  Bo === "button" ? (Rr.type = le === void 0 ? "button" : le, Rr.disabled = u) : (!he.href && !he.to && (Rr.role = "button"), u && (Rr["aria-disabled"] = u));
  const Nh = Mi(n, bt, ze), uc = w({}, r, {
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: d,
    focusRipple: m,
    tabIndex: A,
    focusVisible: ye
  }), Lh = cS(uc);
  return /* @__PURE__ */ T.jsxs(fS, w({
    as: Bo,
    className: X(Lh.root, s),
    ownerState: uc,
    onBlur: Oh,
    onClick: g,
    onContextMenu: Ch,
    onFocus: Mh,
    onKeyDown: zh,
    onKeyUp: bh,
    onMouseDown: wh,
    onMouseLeave: Ph,
    onMouseUp: _h,
    onDragLeave: Eh,
    onTouchEnd: Rh,
    onTouchMove: $h,
    onTouchStart: Th,
    ref: Nh,
    tabIndex: u ? -1 : A,
    type: le
  }, Rr, he, {
    children: [l, ts ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ T.jsx(lS, w({
        ref: b,
        center: i
      }, I))
    ) : null]
  }));
});
function dS(e) {
  return qe("MuiIconButton", e);
}
const pS = Je("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), mS = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], hS = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, l = {
    root: ["root", n && "disabled", r !== "default" && `color${N(r)}`, o && `edge${N(o)}`, `size${N(i)}`]
  };
  return gt(l, dS, t);
}, gS = Pe(yh, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${N(n.color)}`], n.edge && t[`edge${N(n.edge)}`], t[`size${N(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : At(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return w({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && w({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": w({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : At(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${pS.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), to = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: l,
    color: s = "default",
    disabled: a = !1,
    disableFocusRipple: u = !1,
    size: c = "medium"
  } = r, d = G(r, mS), m = w({}, r, {
    edge: o,
    color: s,
    disabled: a,
    disableFocusRipple: u,
    size: c
  }), y = hS(m);
  return /* @__PURE__ */ T.jsx(gS, w({
    className: X(y.root, l),
    centerRipple: !0,
    focusRipple: !u,
    disabled: a,
    ref: n
  }, d, {
    ownerState: m,
    children: i
  }));
});
function vS(e) {
  return qe("MuiTypography", e);
}
Je("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const yS = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], xS = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: l
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${N(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return gt(s, vS, l);
}, SS = Pe("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${N(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
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
})), sd = {
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
}, kS = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, wS = (e) => kS[e] || e, xn = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiTypography"
  }), o = wS(r.color), i = Pl(w({}, r, {
    color: o
  })), {
    align: l = "inherit",
    className: s,
    component: a,
    gutterBottom: u = !1,
    noWrap: c = !1,
    paragraph: d = !1,
    variant: m = "body1",
    variantMapping: y = sd
  } = i, v = G(i, yS), g = w({}, i, {
    align: l,
    color: o,
    className: s,
    component: a,
    gutterBottom: u,
    noWrap: c,
    paragraph: d,
    variant: m,
    variantMapping: y
  }), P = a || (d ? "p" : y[m] || sd[m]) || "span", p = xS(g);
  return /* @__PURE__ */ T.jsx(SS, w({
    as: P,
    ref: n,
    ownerState: g,
    className: X(p.root, s)
  }, v));
});
function CS(e) {
  return qe("MuiAppBar", e);
}
Je("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const ES = ["className", "color", "enableColorOnDark", "position"], _S = (e) => {
  const {
    color: t,
    position: n,
    classes: r
  } = e, o = {
    root: ["root", `color${N(t)}`, `position${N(n)}`]
  };
  return gt(o, CS, r);
}, si = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, PS = Pe(Z2, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${N(n.position)}`], t[`color${N(n.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
  return w({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0
  }, t.position === "fixed" && {
    position: "fixed",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0,
    "@media print": {
      // Prevent the app bar to be visible on each printed page.
      position: "absolute"
    }
  }, t.position === "absolute" && {
    position: "absolute",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, t.position === "sticky" && {
    // ⚠️ sticky is not supported by IE11.
    position: "sticky",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, t.position === "static" && {
    position: "static"
  }, t.position === "relative" && {
    position: "relative"
  }, !e.vars && w({}, t.color === "default" && {
    backgroundColor: n,
    color: e.palette.getContrastText(n)
  }, t.color && t.color !== "default" && t.color !== "inherit" && t.color !== "transparent" && {
    backgroundColor: e.palette[t.color].main,
    color: e.palette[t.color].contrastText
  }, t.color === "inherit" && {
    color: "inherit"
  }, e.palette.mode === "dark" && !t.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, t.color === "transparent" && w({
    backgroundColor: "transparent",
    color: "inherit"
  }, e.palette.mode === "dark" && {
    backgroundImage: "none"
  })), e.vars && w({}, t.color === "default" && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : si(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette.text.primary : si(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
  }, t.color && !t.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette[t.color].main : si(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette[t.color].contrastText : si(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText)
  }, !["inherit", "transparent"].includes(t.color) && {
    backgroundColor: "var(--AppBar-background)"
  }, {
    color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, t.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
}), TS = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiAppBar"
  }), {
    className: o,
    color: i = "primary",
    enableColorOnDark: l = !1,
    position: s = "fixed"
  } = r, a = G(r, ES), u = w({}, r, {
    color: i,
    position: s,
    enableColorOnDark: l
  }), c = _S(u);
  return /* @__PURE__ */ T.jsx(PS, w({
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: X(c.root, o, s === "fixed" && "mui-fixed"),
    ref: n
  }, a));
});
function RS(e) {
  return /* @__PURE__ */ T.jsx(Yd, w({}, e, {
    defaultTheme: gu,
    themeId: ur
  }));
}
function $S(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: r = 99,
    showZero: o = !1
  } = e, i = rp({
    badgeContent: t,
    max: r
  });
  let l = n;
  n === !1 && t === 0 && !o && (l = !0);
  const {
    badgeContent: s,
    max: a = r
  } = l ? i : e, u = s && Number(s) > a ? `${a}+` : s;
  return {
    badgeContent: s,
    invisible: l,
    max: a,
    displayValue: u
  };
}
function OS(e) {
  return qe("MuiBadge", e);
}
const Yt = Je("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), MS = ["anchorOrigin", "className", "classes", "component", "components", "componentsProps", "children", "overlap", "color", "invisible", "max", "badgeContent", "slots", "slotProps", "showZero", "variant"], As = 10, Bs = 4, zS = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: r,
    overlap: o,
    variant: i,
    classes: l = {}
  } = e, s = {
    root: ["root"],
    badge: ["badge", i, r && "invisible", `anchorOrigin${N(n.vertical)}${N(n.horizontal)}`, `anchorOrigin${N(n.vertical)}${N(n.horizontal)}${N(o)}`, `overlap${N(o)}`, t !== "default" && `color${N(t)}`]
  };
  return gt(s, OS, l);
}, bS = Pe("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), NS = Pe("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${N(n.anchorOrigin.vertical)}${N(n.anchorOrigin.horizontal)}${N(n.overlap)}`], n.color !== "default" && t[`color${N(n.color)}`], n.invisible && t.invisible];
  }
})(({
  theme: e
}) => {
  var t;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    boxSizing: "border-box",
    fontFamily: e.typography.fontFamily,
    fontWeight: e.typography.fontWeightMedium,
    fontSize: e.typography.pxToRem(12),
    minWidth: As * 2,
    lineHeight: 1,
    padding: "0 6px",
    height: As * 2,
    borderRadius: As,
    zIndex: 1,
    // Render the badge on top of potential ripples.
    transition: e.transitions.create("transform", {
      easing: e.transitions.easing.easeInOut,
      duration: e.transitions.duration.enteringScreen
    }),
    variants: [...Object.keys(((t = e.vars) != null ? t : e).palette).filter((n) => {
      var r, o;
      return ((r = e.vars) != null ? r : e).palette[n].main && ((o = e.vars) != null ? o : e).palette[n].contrastText;
    }).map((n) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText
      }
    })), {
      props: {
        variant: "dot"
      },
      style: {
        borderRadius: Bs,
        height: Bs * 2,
        minWidth: Bs * 2,
        padding: 0
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "top" && n.anchorOrigin.horizontal === "right" && n.overlap === "rectangular",
      style: {
        top: 0,
        right: 0,
        transform: "scale(1) translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`&.${Yt.invisible}`]: {
          transform: "scale(0) translate(50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "bottom" && n.anchorOrigin.horizontal === "right" && n.overlap === "rectangular",
      style: {
        bottom: 0,
        right: 0,
        transform: "scale(1) translate(50%, 50%)",
        transformOrigin: "100% 100%",
        [`&.${Yt.invisible}`]: {
          transform: "scale(0) translate(50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "top" && n.anchorOrigin.horizontal === "left" && n.overlap === "rectangular",
      style: {
        top: 0,
        left: 0,
        transform: "scale(1) translate(-50%, -50%)",
        transformOrigin: "0% 0%",
        [`&.${Yt.invisible}`]: {
          transform: "scale(0) translate(-50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "bottom" && n.anchorOrigin.horizontal === "left" && n.overlap === "rectangular",
      style: {
        bottom: 0,
        left: 0,
        transform: "scale(1) translate(-50%, 50%)",
        transformOrigin: "0% 100%",
        [`&.${Yt.invisible}`]: {
          transform: "scale(0) translate(-50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "top" && n.anchorOrigin.horizontal === "right" && n.overlap === "circular",
      style: {
        top: "14%",
        right: "14%",
        transform: "scale(1) translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`&.${Yt.invisible}`]: {
          transform: "scale(0) translate(50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "bottom" && n.anchorOrigin.horizontal === "right" && n.overlap === "circular",
      style: {
        bottom: "14%",
        right: "14%",
        transform: "scale(1) translate(50%, 50%)",
        transformOrigin: "100% 100%",
        [`&.${Yt.invisible}`]: {
          transform: "scale(0) translate(50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "top" && n.anchorOrigin.horizontal === "left" && n.overlap === "circular",
      style: {
        top: "14%",
        left: "14%",
        transform: "scale(1) translate(-50%, -50%)",
        transformOrigin: "0% 0%",
        [`&.${Yt.invisible}`]: {
          transform: "scale(0) translate(-50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "bottom" && n.anchorOrigin.horizontal === "left" && n.overlap === "circular",
      style: {
        bottom: "14%",
        left: "14%",
        transform: "scale(1) translate(-50%, 50%)",
        transformOrigin: "0% 100%",
        [`&.${Yt.invisible}`]: {
          transform: "scale(0) translate(-50%, 50%)"
        }
      }
    }, {
      props: {
        invisible: !0
      },
      style: {
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeInOut,
          duration: e.transitions.duration.leavingScreen
        })
      }
    }]
  };
}), LS = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var r, o, i, l, s, a;
  const u = Ve({
    props: t,
    name: "MuiBadge"
  }), {
    anchorOrigin: c = {
      vertical: "top",
      horizontal: "right"
    },
    className: d,
    component: m,
    components: y = {},
    componentsProps: v = {},
    children: g,
    overlap: P = "rectangular",
    color: p = "default",
    invisible: f = !1,
    max: h = 99,
    badgeContent: x,
    slots: C,
    slotProps: k,
    showZero: S = !1,
    variant: R = "standard"
  } = u, z = G(u, MS), {
    badgeContent: O,
    invisible: F,
    max: A,
    displayValue: I
  } = $S({
    max: h,
    invisible: f,
    badgeContent: x,
    showZero: S
  }), K = rp({
    anchorOrigin: c,
    color: p,
    overlap: P,
    variant: R,
    badgeContent: x
  }), le = F || O == null && R !== "dot", {
    color: he = p,
    overlap: ze = P,
    anchorOrigin: $ = c,
    variant: b = R
  } = le ? K : u, L = b !== "dot" ? I : void 0, Q = w({}, u, {
    badgeContent: O,
    invisible: le,
    max: A,
    displayValue: L,
    showZero: S,
    anchorOrigin: $,
    color: he,
    overlap: ze,
    variant: b
  }), ne = zS(Q), bt = (r = (o = C == null ? void 0 : C.root) != null ? o : y.Root) != null ? r : bS, ye = (i = (l = C == null ? void 0 : C.badge) != null ? l : y.Badge) != null ? i : NS, nt = (s = k == null ? void 0 : k.root) != null ? s : v.root, be = (a = k == null ? void 0 : k.badge) != null ? a : v.badge, Kt = Ac({
    elementType: bt,
    externalSlotProps: nt,
    externalForwardedProps: z,
    additionalProps: {
      ref: n,
      as: m
    },
    ownerState: Q,
    className: X(nt == null ? void 0 : nt.className, ne.root, d)
  }), ts = Ac({
    elementType: ye,
    externalSlotProps: be,
    ownerState: Q,
    className: X(ne.badge, be == null ? void 0 : be.className)
  });
  return /* @__PURE__ */ T.jsxs(bt, w({}, Kt, {
    children: [g, /* @__PURE__ */ T.jsx(ye, w({}, ts, {
      children: L
    }))]
  }));
}), IS = Je("MuiBox", ["root"]), jS = hu(), Jn = vv({
  themeId: ur,
  defaultTheme: jS,
  defaultClassName: IS.root,
  generateClassName: Xd.generate
});
function AS(e) {
  return qe("MuiButton", e);
}
const ai = Je("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), BS = /* @__PURE__ */ E.createContext({}), FS = /* @__PURE__ */ E.createContext(void 0), DS = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], WS = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: l
  } = e, s = {
    root: ["root", i, `${i}${N(t)}`, `size${N(o)}`, `${i}Size${N(o)}`, `color${N(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${N(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${N(o)}`]
  }, a = gt(s, AS, l);
  return w({}, l, a);
}, xh = (e) => w({}, e.size === "small" && {
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
}), US = Pe(yh, {
  shouldForwardProp: (e) => gp(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${N(n.color)}`], t[`size${N(n.size)}`], t[`${n.variant}Size${N(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return w({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": w({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : At(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : At(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : At(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    "&:active": w({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${ai.focusVisible}`]: w({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${ai.disabled}`]: w({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${At(e.palette[t.color].main, 0.5)}`
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
  [`&.${ai.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${ai.disabled}`]: {
    boxShadow: "none"
  }
}), VS = Pe("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${N(n.size)}`]];
  }
})(({
  ownerState: e
}) => w({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, xh(e))), HS = Pe("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${N(n.size)}`]];
  }
})(({
  ownerState: e
}) => w({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, xh(e))), Fn = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = E.useContext(BS), o = E.useContext(FS), i = so(r, t), l = Ve({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: a = "primary",
    component: u = "button",
    className: c,
    disabled: d = !1,
    disableElevation: m = !1,
    disableFocusRipple: y = !1,
    endIcon: v,
    focusVisibleClassName: g,
    fullWidth: P = !1,
    size: p = "medium",
    startIcon: f,
    type: h,
    variant: x = "text"
  } = l, C = G(l, DS), k = w({}, l, {
    color: a,
    component: u,
    disabled: d,
    disableElevation: m,
    disableFocusRipple: y,
    fullWidth: P,
    size: p,
    type: h,
    variant: x
  }), S = WS(k), R = f && /* @__PURE__ */ T.jsx(VS, {
    className: S.startIcon,
    ownerState: k,
    children: f
  }), z = v && /* @__PURE__ */ T.jsx(HS, {
    className: S.endIcon,
    ownerState: k,
    children: v
  }), O = o || "";
  return /* @__PURE__ */ T.jsxs(US, w({
    ownerState: k,
    className: X(r.className, S.root, c, O),
    component: u,
    disabled: d,
    focusRipple: !y,
    focusVisibleClassName: X(S.focusVisible, g),
    ref: n,
    type: h
  }, C, {
    classes: S,
    children: [R, s, z]
  }));
}), GS = ky({
  createStyledComponent: Pe("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[`maxWidth${N(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => Ve({
    props: e,
    name: "MuiContainer"
  })
}), KS = (e, t) => w({
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
}), QS = (e) => w({
  color: (e.vars || e).palette.text.primary
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), YS = (e, t = !1) => {
  var n;
  const r = {};
  t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([l, s]) => {
    var a;
    r[e.getColorSchemeSelector(l).replace(/\s*&/, "")] = {
      colorScheme: (a = s.palette) == null ? void 0 : a.mode
    };
  });
  let o = w({
    html: KS(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: w({
      margin: 0
    }, QS(e), {
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
function XS(e) {
  const t = Ve({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ T.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ T.jsx(RS, {
      styles: (o) => YS(o, r)
    }), n]
  });
}
const ad = /* @__PURE__ */ E.createContext();
function ZS(e) {
  return qe("MuiGrid", e);
}
const qS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], JS = ["column-reverse", "column", "row-reverse", "row"], ek = ["nowrap", "wrap-reverse", "wrap"], Fr = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], Po = Je("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...qS.map((e) => `spacing-xs-${e}`),
  // direction values
  ...JS.map((e) => `direction-xs-${e}`),
  // wrap values
  ...ek.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Fr.map((e) => `grid-xs-${e}`),
  ...Fr.map((e) => `grid-sm-${e}`),
  ...Fr.map((e) => `grid-md-${e}`),
  ...Fr.map((e) => `grid-lg-${e}`),
  ...Fr.map((e) => `grid-xl-${e}`)
]), tk = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function ar(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function nk({
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
      const l = xl({
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
          const d = `calc(${a} + ${ar(c)})`;
          u = {
            flexBasis: d,
            maxWidth: d
          };
        }
      }
      i = w({
        flexBasis: a,
        flexGrow: 0,
        maxWidth: a
      }, u);
    }
    return e.breakpoints.values[o] === 0 ? Object.assign(r, i) : r[e.breakpoints.up(o)] = i, r;
  }, {});
}
function rk({
  theme: e,
  ownerState: t
}) {
  const n = xl({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return ct({
    theme: e
  }, n, (r) => {
    const o = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (o[`& > .${Po.item}`] = {
      maxWidth: "none"
    }), o;
  });
}
function Sh({
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
function ok({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    rowSpacing: r
  } = t;
  let o = {};
  if (n && r !== 0) {
    const i = xl({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let l;
    typeof i == "object" && (l = Sh({
      breakpoints: e.breakpoints.values,
      values: i
    })), o = ct({
      theme: e
    }, i, (s, a) => {
      var u;
      const c = e.spacing(s);
      return c !== "0px" ? {
        marginTop: `-${ar(c)}`,
        [`& > .${Po.item}`]: {
          paddingTop: ar(c)
        }
      } : (u = l) != null && u.includes(a) ? {} : {
        marginTop: 0,
        [`& > .${Po.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return o;
}
function ik({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    columnSpacing: r
  } = t;
  let o = {};
  if (n && r !== 0) {
    const i = xl({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let l;
    typeof i == "object" && (l = Sh({
      breakpoints: e.breakpoints.values,
      values: i
    })), o = ct({
      theme: e
    }, i, (s, a) => {
      var u;
      const c = e.spacing(s);
      return c !== "0px" ? {
        width: `calc(100% + ${ar(c)})`,
        marginLeft: `-${ar(c)}`,
        [`& > .${Po.item}`]: {
          paddingLeft: ar(c)
        }
      } : (u = l) != null && u.includes(a) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${Po.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return o;
}
function lk(e, t, n = {}) {
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
const sk = Pe("div", {
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
    r && (c = lk(l, u, t));
    const d = [];
    return u.forEach((m) => {
      const y = n[m];
      y && d.push(t[`grid-${m}-${String(y)}`]);
    }), [t.root, r && t.container, i && t.item, a && t.zeroMinWidth, ...c, o !== "row" && t[`direction-xs-${String(o)}`], s !== "wrap" && t[`wrap-xs-${String(s)}`], ...d];
  }
})(({
  ownerState: e
}) => w({
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
}), rk, ok, ik, nk);
function ak(e, t) {
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
const uk = (e) => {
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
  n && (u = ak(i, a));
  const c = [];
  a.forEach((m) => {
    const y = e[m];
    y && c.push(`grid-${m}-${String(y)}`);
  });
  const d = {
    root: ["root", n && "container", o && "item", s && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, l !== "wrap" && `wrap-xs-${String(l)}`, ...c]
  };
  return gt(d, ZS, t);
}, ui = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: o
  } = l1(), i = Pl(r), {
    className: l,
    columns: s,
    columnSpacing: a,
    component: u = "div",
    container: c = !1,
    direction: d = "row",
    item: m = !1,
    rowSpacing: y,
    spacing: v = 0,
    wrap: g = "wrap",
    zeroMinWidth: P = !1
  } = i, p = G(i, tk), f = y || v, h = a || v, x = E.useContext(ad), C = c ? s || 12 : x, k = {}, S = w({}, p);
  o.keys.forEach((O) => {
    p[O] != null && (k[O] = p[O], delete S[O]);
  });
  const R = w({}, i, {
    columns: C,
    container: c,
    direction: d,
    item: m,
    rowSpacing: f,
    columnSpacing: h,
    wrap: g,
    zeroMinWidth: P,
    spacing: v
  }, k, {
    breakpoints: o.keys
  }), z = uk(R);
  return /* @__PURE__ */ T.jsx(ad.Provider, {
    value: C,
    children: /* @__PURE__ */ T.jsx(sk, w({
      ownerState: R,
      className: X(z.root, l),
      as: u,
      ref: n
    }, S))
  });
});
function ck(e) {
  return qe("MuiLink", e);
}
const fk = Je("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), kh = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, dk = (e) => kh[e] || e, pk = ({
  theme: e,
  ownerState: t
}) => {
  const n = dk(t.color), r = fr(e, `palette.${n}`, !1) || t.color, o = fr(e, `palette.${n}Channel`);
  return "vars" in e && o ? `rgba(${o} / 0.4)` : At(r, 0.4);
}, mk = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"], hk = (e) => {
  const {
    classes: t,
    component: n,
    focusVisible: r,
    underline: o
  } = e, i = {
    root: ["root", `underline${N(o)}`, n === "button" && "button", r && "focusVisible"]
  };
  return gt(i, ck, t);
}, gk = Pe(xn, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`underline${N(n.underline)}`], n.component === "button" && t.button];
  }
})(({
  theme: e,
  ownerState: t
}) => w({}, t.underline === "none" && {
  textDecoration: "none"
}, t.underline === "hover" && {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
}, t.underline === "always" && w({
  textDecoration: "underline"
}, t.color !== "inherit" && {
  textDecorationColor: pk({
    theme: e,
    ownerState: t
  })
}, {
  "&:hover": {
    textDecorationColor: "inherit"
  }
}), t.component === "button" && {
  position: "relative",
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
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${fk.focusVisible}`]: {
    outline: "auto"
  }
})), Fs = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiLink"
  }), {
    className: o,
    color: i = "primary",
    component: l = "a",
    onBlur: s,
    onFocus: a,
    TypographyClasses: u,
    underline: c = "always",
    variant: d = "inherit",
    sx: m
  } = r, y = G(r, mk), {
    isFocusVisibleRef: v,
    onBlur: g,
    onFocus: P,
    ref: p
  } = np(), [f, h] = E.useState(!1), x = Mi(n, p), C = (z) => {
    g(z), v.current === !1 && h(!1), s && s(z);
  }, k = (z) => {
    P(z), v.current === !0 && h(!0), a && a(z);
  }, S = w({}, r, {
    color: i,
    component: l,
    focusVisible: f,
    underline: c,
    variant: d
  }), R = hk(S);
  return /* @__PURE__ */ T.jsx(gk, w({
    color: i,
    className: X(R.root, o),
    classes: u,
    component: l,
    onBlur: C,
    onFocus: k,
    ref: x,
    ownerState: S,
    variant: d,
    sx: [...Object.keys(kh).includes(i) ? [] : [{
      color: i
    }], ...Array.isArray(m) ? m : [m]]
  }, y));
});
function vk(e) {
  return qe("MuiToolbar", e);
}
Je("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const yk = ["className", "component", "disableGutters", "variant"], xk = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return gt({
    root: ["root", !n && "gutters", r]
  }, vk, t);
}, Sk = Pe("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  position: "relative",
  display: "flex",
  alignItems: "center"
}, !t.disableGutters && {
  paddingLeft: e.spacing(2),
  paddingRight: e.spacing(2),
  [e.breakpoints.up("sm")]: {
    paddingLeft: e.spacing(3),
    paddingRight: e.spacing(3)
  }
}, t.variant === "dense" && {
  minHeight: 48
}), ({
  theme: e,
  ownerState: t
}) => t.variant === "regular" && e.mixins.toolbar), kk = /* @__PURE__ */ E.forwardRef(function(t, n) {
  const r = Ve({
    props: t,
    name: "MuiToolbar"
  }), {
    className: o,
    component: i = "div",
    disableGutters: l = !1,
    variant: s = "regular"
  } = r, a = G(r, yk), u = w({}, r, {
    component: i,
    disableGutters: l,
    variant: s
  }), c = xk(u);
  return /* @__PURE__ */ T.jsx(Sk, w({
    as: i,
    className: X(c.root, o),
    ref: n,
    ownerState: u
  }, a));
});
var Ua = {}, ud = F2;
Ua.createRoot = ud.createRoot, Ua.hydrateRoot = ud.hydrateRoot;
const wk = _r(/* @__PURE__ */ T.jsx("path", {
  d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6"
}), "Brightness4"), Ck = _r(/* @__PURE__ */ T.jsx("path", {
  d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4"
}), "Brightness7"), Ek = _r(/* @__PURE__ */ T.jsx("path", {
  d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
}), "GitHub"), _k = _r(/* @__PURE__ */ T.jsx("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), "LinkedIn"), Pk = _r(/* @__PURE__ */ T.jsx("path", {
  d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"
}), "ShoppingCart"), Tk = _r(/* @__PURE__ */ T.jsx("path", {
  d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
}), "Twitter"), Rk = () => /* @__PURE__ */ T.jsx(
  Jn,
  {
    component: "footer",
    sx: {
      py: 6,
      px: 2,
      mt: "auto",
      backgroundColor: (e) => e.palette.mode === "light" ? e.palette.grey[200] : e.palette.grey[900]
    },
    children: /* @__PURE__ */ T.jsxs(GS, { maxWidth: "lg", children: [
      /* @__PURE__ */ T.jsxs(ui, { container: !0, spacing: 4, children: [
        /* @__PURE__ */ T.jsxs(ui, { item: !0, xs: 12, sm: 4, children: [
          /* @__PURE__ */ T.jsx(xn, { variant: "h6", gutterBottom: !0, fontWeight: 600, children: "ModuleFed Store" }),
          /* @__PURE__ */ T.jsx(xn, { variant: "body2", color: "text.secondary", children: "A modern e-commerce platform built with Module Federation, React, and MUI." })
        ] }),
        /* @__PURE__ */ T.jsxs(ui, { item: !0, xs: 12, sm: 4, children: [
          /* @__PURE__ */ T.jsx(xn, { variant: "h6", gutterBottom: !0, fontWeight: 600, children: "Quick Links" }),
          /* @__PURE__ */ T.jsxs(Jn, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: [
            /* @__PURE__ */ T.jsx(Fs, { href: "/", color: "text.secondary", underline: "hover", children: "Home" }),
            /* @__PURE__ */ T.jsx(Fs, { href: "/products", color: "text.secondary", underline: "hover", children: "Products" }),
            /* @__PURE__ */ T.jsx(Fs, { href: "/contact", color: "text.secondary", underline: "hover", children: "Contact Us" })
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs(ui, { item: !0, xs: 12, sm: 4, children: [
          /* @__PURE__ */ T.jsx(xn, { variant: "h6", gutterBottom: !0, fontWeight: 600, children: "Connect With Us" }),
          /* @__PURE__ */ T.jsxs(Jn, { sx: { display: "flex", gap: 1 }, children: [
            /* @__PURE__ */ T.jsx(to, { color: "primary", "aria-label": "GitHub", children: /* @__PURE__ */ T.jsx(Ek, {}) }),
            /* @__PURE__ */ T.jsx(to, { color: "primary", "aria-label": "LinkedIn", children: /* @__PURE__ */ T.jsx(_k, {}) }),
            /* @__PURE__ */ T.jsx(to, { color: "primary", "aria-label": "Twitter", children: /* @__PURE__ */ T.jsx(Tk, {}) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ T.jsx(Jn, { sx: { mt: 4, pt: 3, borderTop: 1, borderColor: "divider" }, children: /* @__PURE__ */ T.jsxs(xn, { variant: "body2", color: "text.secondary", align: "center", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ModuleFed Store. Built with Module Federation & React."
      ] }) })
    ] })
  }
), $k = ({
  themeMode: e = "light",
  cartCount: t = 0,
  onToggleTheme: n,
  onNavigate: r
}) => {
  const o = (i) => {
    r ? r(i) : window.location.href = i;
  };
  return /* @__PURE__ */ T.jsx(TS, { position: "sticky", elevation: 2, children: /* @__PURE__ */ T.jsxs(kk, { children: [
    /* @__PURE__ */ T.jsx(
      xn,
      {
        variant: "h6",
        component: "div",
        sx: { flexGrow: 0, mr: 4, cursor: "pointer", fontWeight: 700 },
        onClick: () => o("/"),
        children: "ModuleFed Store 22"
      }
    ),
    /* @__PURE__ */ T.jsxs(Jn, { sx: { flexGrow: 1, display: "flex", gap: 2 }, children: [
      /* @__PURE__ */ T.jsx(Fn, { color: "inherit", onClick: () => o("/"), children: "Home" }),
      /* @__PURE__ */ T.jsx(Fn, { color: "inherit", onClick: () => o("/products"), children: "Products" }),
      /* @__PURE__ */ T.jsx(Fn, { color: "inherit", onClick: () => o("/angular-webpack"), children: "Angular (WP)" }),
      /* @__PURE__ */ T.jsx(Fn, { color: "inherit", onClick: () => o("/angular-vite"), children: "Angular (Vite)" }),
      /* @__PURE__ */ T.jsx(Fn, { color: "inherit", onClick: () => o("/vue"), children: "Vue" }),
      /* @__PURE__ */ T.jsx(Fn, { color: "inherit", onClick: () => o("/contact"), children: "Contact" })
    ] }),
    /* @__PURE__ */ T.jsxs(Jn, { sx: { display: "flex", gap: 1, alignItems: "center" }, children: [
      /* @__PURE__ */ T.jsx(to, { color: "inherit", children: /* @__PURE__ */ T.jsx(LS, { badgeContent: t, color: "secondary", children: /* @__PURE__ */ T.jsx(Pk, {}) }) }),
      /* @__PURE__ */ T.jsx(to, { onClick: n, color: "inherit", children: e === "dark" ? /* @__PURE__ */ T.jsx(Ck, {}) : /* @__PURE__ */ T.jsx(wk, {}) })
    ] })
  ] }) });
}, Ok = (e) => e === "light" || e === "dark", Mk = (e) => e && Ok(e) ? e : "light", zk = (e, t = 0) => {
  const n = parseInt(e, 10);
  return isNaN(n) ? t : n;
}, bk = (e) => {
  if (e)
    try {
      e.unmount();
    } catch (t) {
      console.error("Error unmounting React root:", t);
    }
}, Nk = (e, t) => {
  if (!customElements.get(e))
    try {
      customElements.define(e, t);
    } catch (n) {
      console.error(`Error registering web component ${e}:`, n);
    }
}, Lk = (e = "light") => hu({
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
});
class Ik extends HTMLElement {
  constructor() {
    super(...arguments);
    $r(this, "root", null);
    $r(this, "themeMode", "light");
    $r(this, "cartCount", 0);
    $r(this, "component", "header");
  }
  static get observedAttributes() {
    return ["theme", "cart-count", "component"];
  }
  connectedCallback() {
    this.mount();
  }
  disconnectedCallback() {
    bk(this.root), this.root = null;
  }
  attributeChangedCallback(n, r, o) {
    if (r !== o) {
      switch (n) {
        case "theme":
          this.themeMode = Mk(o);
          break;
        case "cart-count":
          this.cartCount = zk(o);
          break;
        case "component":
          this.component = o || "header";
          break;
      }
      this.mount();
    }
  }
  mount() {
    this.root && this.root.unmount(), this.innerHTML = "";
    const n = document.createElement("div");
    this.appendChild(n);
    const r = Lk(this.themeMode), o = () => {
      this.dispatchEvent(
        new CustomEvent("theme-toggle", {
          bubbles: !0,
          composed: !0
        })
      );
    }, i = (l) => {
      this.dispatchEvent(
        new CustomEvent("navigate", {
          detail: { path: l },
          bubbles: !0,
          composed: !0
        })
      );
    };
    this.root = Ua.createRoot(n), this.root.render(
      /* @__PURE__ */ T.jsx(Sn.StrictMode, { children: /* @__PURE__ */ T.jsxs(O1, { theme: r, children: [
        /* @__PURE__ */ T.jsx(XS, {}),
        this.component === "header" ? /* @__PURE__ */ T.jsx(
          $k,
          {
            themeMode: this.themeMode,
            cartCount: this.cartCount,
            onToggleTheme: o,
            onNavigate: i
          }
        ) : /* @__PURE__ */ T.jsx(Rk, {})
      ] }) })
    );
  }
}
Nk("shell-widget", Ik);
export {
  Ik as default
};
