var vv = Object.defineProperty;
var yv = (e, t, n) => t in e ? vv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ra = (e, t, n) => yv(e, typeof t != "symbol" ? t + "" : t, n);
function xv(e, t) {
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
function Qp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Kn(e) {
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
var Yp = { exports: {} }, Jl = {}, Xp = { exports: {} }, X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi = Symbol.for("react.element"), Sv = Symbol.for("react.portal"), Cv = Symbol.for("react.fragment"), wv = Symbol.for("react.strict_mode"), kv = Symbol.for("react.profiler"), Ev = Symbol.for("react.provider"), bv = Symbol.for("react.context"), Pv = Symbol.for("react.forward_ref"), Rv = Symbol.for("react.suspense"), Tv = Symbol.for("react.memo"), _v = Symbol.for("react.lazy"), $d = Symbol.iterator;
function $v(e) {
  return e === null || typeof e != "object" ? null : (e = $d && e[$d] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qp = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zp = Object.assign, Jp = {};
function oo(e, t, n) {
  this.props = e, this.context = t, this.refs = Jp, this.updater = n || qp;
}
oo.prototype.isReactComponent = {};
oo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
oo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function em() {
}
em.prototype = oo.prototype;
function Ju(e, t, n) {
  this.props = e, this.context = t, this.refs = Jp, this.updater = n || qp;
}
var ec = Ju.prototype = new em();
ec.constructor = Ju;
Zp(ec, oo.prototype);
ec.isPureReactComponent = !0;
var Md = Array.isArray, tm = Object.prototype.hasOwnProperty, tc = { current: null }, nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function rm(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) tm.call(t, r) && !nm.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: yi, type: e, key: i, ref: l, props: o, _owner: tc.current };
}
function Mv(e, t) {
  return { $$typeof: yi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function nc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yi;
}
function Ov(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Od = /\/+/g;
function oa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ov("" + e.key) : t.toString(36);
}
function tl(e, t, n, r, o) {
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
        case yi:
        case Sv:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + oa(l, 0) : r, Md(o) ? (n = "", e != null && (n = e.replace(Od, "$&/") + "/"), tl(o, t, n, "", function(u) {
    return u;
  })) : o != null && (nc(o) && (o = Mv(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Od, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Md(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var a = r + oa(i, s);
    l += tl(i, t, n, a, o);
  }
  else if (a = $v(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done; ) i = i.value, a = r + oa(i, s++), l += tl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function $i(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return tl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Iv(e) {
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
var ot = { current: null }, nl = { transition: null }, Nv = { ReactCurrentDispatcher: ot, ReactCurrentBatchConfig: nl, ReactCurrentOwner: tc };
function om() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = { map: $i, forEach: function(e, t, n) {
  $i(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return $i(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return $i(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!nc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
X.Component = oo;
X.Fragment = Cv;
X.Profiler = kv;
X.PureComponent = Ju;
X.StrictMode = wv;
X.Suspense = Rv;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nv;
X.act = om;
X.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zp({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = tc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) tm.call(t, a) && !nm.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: yi, type: e.type, key: o, ref: i, props: r, _owner: l };
};
X.createContext = function(e) {
  return e = { $$typeof: bv, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ev, _context: e }, e.Consumer = e;
};
X.createElement = rm;
X.createFactory = function(e) {
  var t = rm.bind(null, e);
  return t.type = e, t;
};
X.createRef = function() {
  return { current: null };
};
X.forwardRef = function(e) {
  return { $$typeof: Pv, render: e };
};
X.isValidElement = nc;
X.lazy = function(e) {
  return { $$typeof: _v, _payload: { _status: -1, _result: e }, _init: Iv };
};
X.memo = function(e, t) {
  return { $$typeof: Tv, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function(e) {
  var t = nl.transition;
  nl.transition = {};
  try {
    e();
  } finally {
    nl.transition = t;
  }
};
X.unstable_act = om;
X.useCallback = function(e, t) {
  return ot.current.useCallback(e, t);
};
X.useContext = function(e) {
  return ot.current.useContext(e);
};
X.useDebugValue = function() {
};
X.useDeferredValue = function(e) {
  return ot.current.useDeferredValue(e);
};
X.useEffect = function(e, t) {
  return ot.current.useEffect(e, t);
};
X.useId = function() {
  return ot.current.useId();
};
X.useImperativeHandle = function(e, t, n) {
  return ot.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function(e, t) {
  return ot.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function(e, t) {
  return ot.current.useLayoutEffect(e, t);
};
X.useMemo = function(e, t) {
  return ot.current.useMemo(e, t);
};
X.useReducer = function(e, t, n) {
  return ot.current.useReducer(e, t, n);
};
X.useRef = function(e) {
  return ot.current.useRef(e);
};
X.useState = function(e) {
  return ot.current.useState(e);
};
X.useSyncExternalStore = function(e, t, n) {
  return ot.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function() {
  return ot.current.useTransition();
};
X.version = "18.3.1";
Xp.exports = X;
var S = Xp.exports;
const Vt = /* @__PURE__ */ Qp(S), Va = /* @__PURE__ */ xv({
  __proto__: null,
  default: Vt
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
var zv = S, Lv = Symbol.for("react.element"), Fv = Symbol.for("react.fragment"), jv = Object.prototype.hasOwnProperty, Av = zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bv = { key: !0, ref: !0, __self: !0, __source: !0 };
function im(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) jv.call(t, r) && !Bv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Lv, type: e, key: i, ref: l, props: o, _owner: Av.current };
}
Jl.Fragment = Fv;
Jl.jsx = im;
Jl.jsxs = im;
Yp.exports = Jl;
var b = Yp.exports;
const Yo = {
  black: "#000",
  white: "#fff"
}, yr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, xr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Sr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Cr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, wr = {
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
function sr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Wv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sr
}, Symbol.toStringTag, { value: "Module" })), Qr = "$$material";
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, x.apply(null, arguments);
}
function W(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Uv(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Hv(e) {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Hv(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Uv(o);
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
}(), Xe = "-ms-", xl = "-moz-", te = "-webkit-", lm = "comm", rc = "rule", oc = "decl", Kv = "@import", sm = "@keyframes", Gv = "@layer", Qv = Math.abs, es = String.fromCharCode, Yv = Object.assign;
function Xv(e, t) {
  return Ve(e, 0) ^ 45 ? (((t << 2 ^ Ve(e, 0)) << 2 ^ Ve(e, 1)) << 2 ^ Ve(e, 2)) << 2 ^ Ve(e, 3) : 0;
}
function am(e) {
  return e.trim();
}
function qv(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ne(e, t, n) {
  return e.replace(t, n);
}
function Ka(e, t) {
  return e.indexOf(t);
}
function Ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xo(e, t, n) {
  return e.slice(t, n);
}
function Jt(e) {
  return e.length;
}
function ic(e) {
  return e.length;
}
function Mi(e, t) {
  return t.push(e), e;
}
function Zv(e, t) {
  return e.map(t).join("");
}
var ts = 1, Yr = 1, um = 0, pt = 0, ze = 0, io = "";
function ns(e, t, n, r, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ts, column: Yr, length: l, return: "" };
}
function xo(e, t) {
  return Yv(ns("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Jv() {
  return ze;
}
function ey() {
  return ze = pt > 0 ? Ve(io, --pt) : 0, Yr--, ze === 10 && (Yr = 1, ts--), ze;
}
function vt() {
  return ze = pt < um ? Ve(io, pt++) : 0, Yr++, ze === 10 && (Yr = 1, ts++), ze;
}
function rn() {
  return Ve(io, pt);
}
function rl() {
  return pt;
}
function xi(e, t) {
  return Xo(io, e, t);
}
function qo(e) {
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
function cm(e) {
  return ts = Yr = 1, um = Jt(io = e), pt = 0, [];
}
function dm(e) {
  return io = "", e;
}
function ol(e) {
  return am(xi(pt - 1, Ga(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ty(e) {
  for (; (ze = rn()) && ze < 33; )
    vt();
  return qo(e) > 2 || qo(ze) > 3 ? "" : " ";
}
function ny(e, t) {
  for (; --t && vt() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return xi(e, rl() + (t < 6 && rn() == 32 && vt() == 32));
}
function Ga(e) {
  for (; vt(); )
    switch (ze) {
      case e:
        return pt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ga(ze);
        break;
      case 40:
        e === 41 && Ga(e);
        break;
      case 92:
        vt();
        break;
    }
  return pt;
}
function ry(e, t) {
  for (; vt() && e + ze !== 57; )
    if (e + ze === 84 && rn() === 47)
      break;
  return "/*" + xi(t, pt - 1) + "*" + es(e === 47 ? e : vt());
}
function oy(e) {
  for (; !qo(rn()); )
    vt();
  return xi(e, pt);
}
function iy(e) {
  return dm(il("", null, null, null, [""], e = cm(e), 0, [0], e));
}
function il(e, t, n, r, o, i, l, s, a) {
  for (var u = 0, c = 0, d = l, h = 0, C = 0, y = 0, v = 1, P = 1, p = 1, f = 0, m = "", g = o, E = i, k = r, w = m; P; )
    switch (y = f, f = vt()) {
      case 40:
        if (y != 108 && Ve(w, d - 1) == 58) {
          Ka(w += ne(ol(f), "&", "&\f"), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += ol(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += ty(y);
        break;
      case 92:
        w += ny(rl() - 1, 7);
        continue;
      case 47:
        switch (rn()) {
          case 42:
          case 47:
            Mi(ly(ry(vt(), rl()), t, n), a);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * v:
        s[u++] = Jt(w) * p;
      case 125 * v:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            P = 0;
          case 59 + c:
            p == -1 && (w = ne(w, /\f/g, "")), C > 0 && Jt(w) - d && Mi(C > 32 ? Nd(w + ";", r, n, d - 1) : Nd(ne(w, " ", "") + ";", r, n, d - 2), a);
            break;
          case 59:
            w += ";";
          default:
            if (Mi(k = Id(w, t, n, u, c, o, s, m, g = [], E = [], d), i), f === 123)
              if (c === 0)
                il(w, t, k, k, g, i, d, s, E);
              else
                switch (h === 99 && Ve(w, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    il(e, k, k, r && Mi(Id(e, k, k, 0, 0, o, s, m, o, g = [], d), E), o, E, d, s, r ? g : E);
                    break;
                  default:
                    il(w, k, k, k, [""], E, 0, s, E);
                }
        }
        u = c = C = 0, v = p = 1, m = w = "", d = l;
        break;
      case 58:
        d = 1 + Jt(w), C = y;
      default:
        if (v < 1) {
          if (f == 123)
            --v;
          else if (f == 125 && v++ == 0 && ey() == 125)
            continue;
        }
        switch (w += es(f), f * v) {
          case 38:
            p = c > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            s[u++] = (Jt(w) - 1) * p, p = 1;
            break;
          case 64:
            rn() === 45 && (w += ol(vt())), h = rn(), c = d = Jt(m = w += oy(rl())), f++;
            break;
          case 45:
            y === 45 && Jt(w) == 2 && (v = 0);
        }
    }
  return i;
}
function Id(e, t, n, r, o, i, l, s, a, u, c) {
  for (var d = o - 1, h = o === 0 ? i : [""], C = ic(h), y = 0, v = 0, P = 0; y < r; ++y)
    for (var p = 0, f = Xo(e, d + 1, d = Qv(v = l[y])), m = e; p < C; ++p)
      (m = am(v > 0 ? h[p] + " " + f : ne(f, /&\f/g, h[p]))) && (a[P++] = m);
  return ns(e, t, n, o === 0 ? rc : s, a, u, c);
}
function ly(e, t, n) {
  return ns(e, t, n, lm, es(Jv()), Xo(e, 2, -2), 0);
}
function Nd(e, t, n, r) {
  return ns(e, t, n, oc, Xo(e, 0, r), Xo(e, r + 1, -1), r);
}
function Ar(e, t) {
  for (var n = "", r = ic(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function sy(e, t, n, r) {
  switch (e.type) {
    case Gv:
      if (e.children.length) break;
    case Kv:
    case oc:
      return e.return = e.return || e.value;
    case lm:
      return "";
    case sm:
      return e.return = e.value + "{" + Ar(e.children, r) + "}";
    case rc:
      e.value = e.props.join(",");
  }
  return Jt(n = Ar(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ay(e) {
  var t = ic(e);
  return function(n, r, o, i) {
    for (var l = "", s = 0; s < t; s++)
      l += e[s](n, r, o, i) || "";
    return l;
  };
}
function uy(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function fm(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var cy = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = rn(), o === 38 && i === 12 && (n[r] = 1), !qo(i); )
    vt();
  return xi(t, pt);
}, dy = function(t, n) {
  var r = -1, o = 44;
  do
    switch (qo(o)) {
      case 0:
        o === 38 && rn() === 12 && (n[r] = 1), t[r] += cy(pt - 1, n, r);
        break;
      case 2:
        t[r] += ol(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = rn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += es(o);
    }
  while (o = vt());
  return t;
}, fy = function(t, n) {
  return dm(dy(cm(t), n));
}, zd = /* @__PURE__ */ new WeakMap(), py = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !zd.get(r)) && !o) {
      zd.set(t, !0);
      for (var i = [], l = fy(n, i), s = r.props, a = 0, u = 0; a < l.length; a++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[a] ? l[a].replace(/&\f/g, s[c]) : s[c] + " " + l[a];
    }
  }
}, my = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function pm(e, t) {
  switch (Xv(e, t)) {
    case 5103:
      return te + "print-" + e + e;
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
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + xl + e + Xe + e + e;
    case 6828:
    case 4268:
      return te + e + Xe + e + e;
    case 6165:
      return te + e + Xe + "flex-" + e + e;
    case 5187:
      return te + e + ne(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + Xe + "flex-$1$2") + e;
    case 5443:
      return te + e + Xe + "flex-item-" + ne(e, /flex-|-self/, "") + e;
    case 4675:
      return te + e + Xe + "flex-line-pack" + ne(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return te + e + Xe + ne(e, "shrink", "negative") + e;
    case 5292:
      return te + e + Xe + ne(e, "basis", "preferred-size") + e;
    case 6060:
      return te + "box-" + ne(e, "-grow", "") + te + e + Xe + ne(e, "grow", "positive") + e;
    case 4554:
      return te + ne(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return ne(ne(ne(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ne(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return ne(ne(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + Xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + te + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(e, /(.+)-inline(.+)/, te + "$1$2") + e;
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
      if (Jt(e) - 1 - t > 6) switch (Ve(e, t + 1)) {
        case 109:
          if (Ve(e, t + 4) !== 45) break;
        case 102:
          return ne(e, /(.+:)(.+)-([^]+)/, "$1" + te + "$2-$3$1" + xl + (Ve(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Ka(e, "stretch") ? pm(ne(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ve(e, t + 1) !== 115) break;
    case 6444:
      switch (Ve(e, Jt(e) - 3 - (~Ka(e, "!important") && 10))) {
        case 107:
          return ne(e, ":", ":" + te) + e;
        case 101:
          return ne(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + te + (Ve(e, 14) === 45 ? "inline-" : "") + "box$3$1" + te + "$2$3$1" + Xe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ve(e, t + 11)) {
        case 114:
          return te + e + Xe + ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + Xe + ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + Xe + ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + Xe + e + e;
  }
  return e;
}
var hy = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case oc:
      t.return = pm(t.value, t.length);
      break;
    case sm:
      return Ar([xo(t, {
        value: ne(t.value, "@", "@" + te)
      })], o);
    case rc:
      if (t.length) return Zv(t.props, function(i) {
        switch (qv(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ar([xo(t, {
              props: [ne(i, /:(read-\w+)/, ":" + xl + "$1")]
            })], o);
          case "::placeholder":
            return Ar([xo(t, {
              props: [ne(i, /:(plac\w+)/, ":" + te + "input-$1")]
            }), xo(t, {
              props: [ne(i, /:(plac\w+)/, ":" + xl + "$1")]
            }), xo(t, {
              props: [ne(i, /:(plac\w+)/, Xe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, gy = [hy], mm = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var P = v.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || gy, i = {}, l, s = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var P = v.getAttribute("data-emotion").split(" "), p = 1; p < P.length; p++)
        i[P[p]] = !0;
      s.push(v);
    }
  );
  var a, u = [py, my];
  {
    var c, d = [sy, uy(function(v) {
      c.insert(v);
    })], h = ay(u.concat(o, d)), C = function(P) {
      return Ar(iy(P), h);
    };
    a = function(P, p, f, m) {
      c = f, C(P ? P + "{" + p.styles + "}" : p.styles), m && (y.inserted[p.name] = !0);
    };
  }
  var y = {
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
  return y.sheet.hydrate(s), y;
}, hm = { exports: {} }, ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We = typeof Symbol == "function" && Symbol.for, lc = We ? Symbol.for("react.element") : 60103, sc = We ? Symbol.for("react.portal") : 60106, rs = We ? Symbol.for("react.fragment") : 60107, os = We ? Symbol.for("react.strict_mode") : 60108, is = We ? Symbol.for("react.profiler") : 60114, ls = We ? Symbol.for("react.provider") : 60109, ss = We ? Symbol.for("react.context") : 60110, ac = We ? Symbol.for("react.async_mode") : 60111, as = We ? Symbol.for("react.concurrent_mode") : 60111, us = We ? Symbol.for("react.forward_ref") : 60112, cs = We ? Symbol.for("react.suspense") : 60113, vy = We ? Symbol.for("react.suspense_list") : 60120, ds = We ? Symbol.for("react.memo") : 60115, fs = We ? Symbol.for("react.lazy") : 60116, yy = We ? Symbol.for("react.block") : 60121, xy = We ? Symbol.for("react.fundamental") : 60117, Sy = We ? Symbol.for("react.responder") : 60118, Cy = We ? Symbol.for("react.scope") : 60119;
function Ct(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case lc:
        switch (e = e.type, e) {
          case ac:
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
      case sc:
        return t;
    }
  }
}
function gm(e) {
  return Ct(e) === as;
}
ae.AsyncMode = ac;
ae.ConcurrentMode = as;
ae.ContextConsumer = ss;
ae.ContextProvider = ls;
ae.Element = lc;
ae.ForwardRef = us;
ae.Fragment = rs;
ae.Lazy = fs;
ae.Memo = ds;
ae.Portal = sc;
ae.Profiler = is;
ae.StrictMode = os;
ae.Suspense = cs;
ae.isAsyncMode = function(e) {
  return gm(e) || Ct(e) === ac;
};
ae.isConcurrentMode = gm;
ae.isContextConsumer = function(e) {
  return Ct(e) === ss;
};
ae.isContextProvider = function(e) {
  return Ct(e) === ls;
};
ae.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lc;
};
ae.isForwardRef = function(e) {
  return Ct(e) === us;
};
ae.isFragment = function(e) {
  return Ct(e) === rs;
};
ae.isLazy = function(e) {
  return Ct(e) === fs;
};
ae.isMemo = function(e) {
  return Ct(e) === ds;
};
ae.isPortal = function(e) {
  return Ct(e) === sc;
};
ae.isProfiler = function(e) {
  return Ct(e) === is;
};
ae.isStrictMode = function(e) {
  return Ct(e) === os;
};
ae.isSuspense = function(e) {
  return Ct(e) === cs;
};
ae.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === rs || e === as || e === is || e === os || e === cs || e === vy || typeof e == "object" && e !== null && (e.$$typeof === fs || e.$$typeof === ds || e.$$typeof === ls || e.$$typeof === ss || e.$$typeof === us || e.$$typeof === xy || e.$$typeof === Sy || e.$$typeof === Cy || e.$$typeof === yy);
};
ae.typeOf = Ct;
hm.exports = ae;
var wy = hm.exports, vm = wy, ky = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ey = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ym = {};
ym[vm.ForwardRef] = ky;
ym[vm.Memo] = Ey;
var by = !0;
function xm(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var uc = function(t, n, r) {
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
}, cc = function(t, n, r) {
  uc(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Py(e) {
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
}, Ty = /[A-Z]|^ms/g, _y = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Sm = function(t) {
  return t.charCodeAt(1) === 45;
}, Ld = function(t) {
  return t != null && typeof t != "boolean";
}, ia = /* @__PURE__ */ fm(function(e) {
  return Sm(e) ? e : e.replace(Ty, "-$&").toLowerCase();
}), Fd = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(_y, function(r, o, i) {
          return en = {
            name: o,
            styles: i,
            next: en
          }, o;
        });
  }
  return Ry[t] !== 1 && !Sm(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Zo(e, t, n) {
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
        return en = {
          name: o.name,
          styles: o.styles,
          next: en
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var l = i.next;
        if (l !== void 0)
          for (; l !== void 0; )
            en = {
              name: l.name,
              styles: l.styles,
              next: en
            }, l = l.next;
        var s = i.styles + ";";
        return s;
      }
      return $y(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = en, u = n(e);
        return en = a, Zo(e, t, u);
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
function $y(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Zo(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object") {
        var s = l;
        t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : Ld(s) && (r += ia(i) + ":" + Fd(i, s) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
        for (var a = 0; a < l.length; a++)
          Ld(l[a]) && (r += ia(i) + ":" + Fd(i, l[a]) + ";");
      else {
        var u = Zo(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += ia(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var jd = /label:\s*([^\s;{]+)\s*(;|$)/g, en;
function Si(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  en = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Zo(n, t, i);
  else {
    var l = i;
    o += l[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Zo(n, t, e[s]), r) {
      var a = i;
      o += a[s];
    }
  jd.lastIndex = 0;
  for (var u = "", c; (c = jd.exec(o)) !== null; )
    u += "-" + c[1];
  var d = Py(o) + u;
  return {
    name: d,
    styles: o,
    next: en
  };
}
var My = function(t) {
  return t();
}, Cm = Va.useInsertionEffect ? Va.useInsertionEffect : !1, wm = Cm || My, Ad = Cm || S.useLayoutEffect, km = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ mm({
    key: "css"
  }) : null
), Oy = km.Provider, dc = function(t) {
  return /* @__PURE__ */ S.forwardRef(function(n, r) {
    var o = S.useContext(km);
    return t(n, o, r);
  });
}, lo = /* @__PURE__ */ S.createContext({}), fc = {}.hasOwnProperty, Qa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Iy = function(t, n) {
  var r = {};
  for (var o in n)
    fc.call(n, o) && (r[o] = n[o]);
  return r[Qa] = t, r;
}, Ny = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return uc(n, r, o), wm(function() {
    return cc(n, r, o);
  }), null;
}, zy = /* @__PURE__ */ dc(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Qa], i = [r], l = "";
  typeof e.className == "string" ? l = xm(t.registered, i, e.className) : e.className != null && (l = e.className + " ");
  var s = Si(i, void 0, S.useContext(lo));
  l += t.key + "-" + s.name;
  var a = {};
  for (var u in e)
    fc.call(e, u) && u !== "css" && u !== Qa && (a[u] = e[u]);
  return a.className = l, n && (a.ref = n), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Ny, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ S.createElement(o, a));
}), Ly = zy, la = { exports: {} }, Bd;
function Em() {
  return Bd || (Bd = 1, function(e) {
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
  }(la)), la.exports;
}
Em();
var Dd = function(t, n) {
  var r = arguments;
  if (n == null || !fc.call(n, "css"))
    return S.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Ly, i[1] = Iy(t, n);
  for (var l = 2; l < o; l++)
    i[l] = r[l];
  return S.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Dd || (Dd = {}));
var Fy = /* @__PURE__ */ dc(function(e, t) {
  var n = e.styles, r = Si([n], void 0, S.useContext(lo)), o = S.useRef();
  return Ad(function() {
    var i = t.key + "-global", l = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), a !== null && (s = !0, a.setAttribute("data-emotion", i), l.hydrate([a])), o.current = [l, s], function() {
      l.flush();
    };
  }, [t]), Ad(function() {
    var i = o.current, l = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && cc(t, r.next, !0), l.tags.length) {
      var a = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = a, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
});
function bm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Si(t);
}
function ps() {
  var e = bm.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var jy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ay = /* @__PURE__ */ fm(
  function(e) {
    return jy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), By = Ay, Dy = function(t) {
  return t !== "theme";
}, Wd = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? By : Dy;
}, Ud = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Wy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return uc(n, r, o), wm(function() {
    return cc(n, r, o);
  }), null;
}, Uy = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var s = Ud(t, n, r), a = s || Wd(o), u = !a("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      var h = c[0];
      d.push(h[0]);
      for (var C = c.length, y = 1; y < C; y++)
        d.push(c[y], h[y]);
    }
    var v = dc(function(P, p, f) {
      var m = u && P.as || o, g = "", E = [], k = P;
      if (P.theme == null) {
        k = {};
        for (var w in P)
          k[w] = P[w];
        k.theme = S.useContext(lo);
      }
      typeof P.className == "string" ? g = xm(p.registered, E, P.className) : P.className != null && (g = P.className + " ");
      var R = Si(d.concat(E), p.registered, k);
      g += p.key + "-" + R.name, l !== void 0 && (g += " " + l);
      var M = u && s === void 0 ? Wd(m) : a, _ = {};
      for (var A in P)
        u && A === "as" || M(A) && (_[A] = P[A]);
      return _.className = g, f && (_.ref = f), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Wy, {
        cache: p,
        serialized: R,
        isStringTag: typeof m == "string"
      }), /* @__PURE__ */ S.createElement(m, _));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = d, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + l;
      }
    }), v.withComponent = function(P, p) {
      var f = e(P, x({}, n, p, {
        shouldForwardProp: Ud(v, p, !0)
      }));
      return f.apply(void 0, d);
    }, v;
  };
}, Hy = [
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
], Ya = Uy.bind(null);
Hy.forEach(function(e) {
  Ya[e] = Ya(e);
});
function Vy(e, t) {
  const n = mm({
    key: "css",
    prepend: e
  });
  if (t) {
    const r = n.insert;
    n.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), r(...o));
  }
  return n;
}
const sa = /* @__PURE__ */ new Map();
function Ky(e) {
  const {
    injectFirst: t,
    enableCssLayer: n,
    children: r
  } = e, o = S.useMemo(() => {
    const i = `${t}-${n}`;
    if (typeof document == "object" && sa.has(i))
      return sa.get(i);
    const l = Vy(t, n);
    return sa.set(i, l), l;
  }, [t, n]);
  return t || n ? /* @__PURE__ */ b.jsx(Oy, {
    value: o,
    children: r
  }) : r;
}
function Gy(e) {
  return e == null || Object.keys(e).length === 0;
}
function Pm(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Gy(o) ? n : o) : t;
  return /* @__PURE__ */ b.jsx(Fy, {
    styles: r
  });
}
function pc(e, t) {
  return Ya(e, t);
}
const Rm = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Hd = [];
function Sl(e) {
  return Hd[0] = e, Si(Hd);
}
const Qy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Pm,
  StyledEngineProvider: Ky,
  ThemeContext: lo,
  css: bm,
  default: pc,
  internal_processStyles: Rm,
  internal_serializeStyles: Sl,
  keyframes: ps
}, Symbol.toStringTag, { value: "Module" }));
function hn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Tm(e) {
  if (/* @__PURE__ */ S.isValidElement(e) || !hn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Tm(e[n]);
  }), t;
}
function yt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? x({}, e) : e;
  return hn(e) && hn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ S.isValidElement(t[o]) ? r[o] = t[o] : hn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && hn(e[o]) ? r[o] = yt(e[o], t[o], n) : n.clone ? r[o] = hn(t[o]) ? Tm(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yt,
  isPlainObject: hn
}, Symbol.toStringTag, { value: "Module" })), Xy = ["values", "unit", "step"], qy = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => x({}, n, {
    [r.key]: r.val
  }), {});
};
function _m(e) {
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
  } = e, o = W(e, Xy), i = qy(t), l = Object.keys(i);
  function s(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function a(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function u(h, C) {
    const y = l.indexOf(C);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(y !== -1 && typeof t[l[y]] == "number" ? t[l[y]] : C) - r / 100}${n})`;
  }
  function c(h) {
    return l.indexOf(h) + 1 < l.length ? u(h, l[l.indexOf(h) + 1]) : s(h);
  }
  function d(h) {
    const C = l.indexOf(h);
    return C === 0 ? s(l[1]) : C === l.length - 1 ? a(l[C]) : u(h, l[l.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return x({
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
const Zy = {
  borderRadius: 4
};
function Fo(e, t) {
  return t ? yt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const mc = {
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
}, Vd = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${mc[e]}px)`
};
function Nt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Vd;
    return t.reduce((l, s, a) => (l[i.up(i.keys[a])] = n(t[a]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Vd;
    return Object.keys(t).reduce((l, s) => {
      if (Object.keys(i.values || mc).indexOf(s) !== -1) {
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
function Jy(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Kd(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function e0(e, t) {
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
  const r = n || e0(e, t), o = Object.keys(r);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((l, s, a) => (Array.isArray(e) ? (l[s] = e[a] != null ? e[a] : e[i], i = a) : typeof e == "object" ? (l[s] = e[s] != null ? e[s] : e[i], i = s) : l[s] = e, l), {});
}
function V(e) {
  if (typeof e != "string")
    throw new Error(sr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const t0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: V
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
function Cl(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = hs(e, n) || r, t && (o = t(o, r, e)), o;
}
function Ie(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (l) => {
    if (l[t] == null)
      return null;
    const s = l[t], a = l.theme, u = hs(a, r) || {};
    return Nt(l, s, (d) => {
      let h = Cl(u, o, d);
      return d === h && typeof d == "string" && (h = Cl(u, o, `${t}${d === "default" ? "" : V(d)}`, d)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function n0(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const r0 = {
  m: "margin",
  p: "padding"
}, o0 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Gd = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, i0 = n0((e) => {
  if (e.length > 2)
    if (Gd[e])
      e = Gd[e];
    else
      return [e];
  const [t, n] = e.split(""), r = r0[t], o = o0[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), hc = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], gc = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...hc, ...gc];
function Ci(e, t, n, r) {
  var o;
  const i = (o = hs(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (l) => typeof l == "string" ? l : i * l : Array.isArray(i) ? (l) => typeof l == "string" ? l : i[l] : typeof i == "function" ? i : () => {
  };
}
function $m(e) {
  return Ci(e, "spacing", 8);
}
function wi(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function l0(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = wi(t, n), r), {});
}
function s0(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = i0(n), i = l0(o, r), l = e[n];
  return Nt(e, l, i);
}
function Mm(e, t) {
  const n = $m(e.theme);
  return Object.keys(e).map((r) => s0(e, t, r, n)).reduce(Fo, {});
}
function Te(e) {
  return Mm(e, hc);
}
Te.propTypes = {};
Te.filterProps = hc;
function _e(e) {
  return Mm(e, gc);
}
_e.propTypes = {};
_e.filterProps = gc;
function a0(e = 8) {
  if (e.mui)
    return e;
  const t = $m({
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
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Fo(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function _t(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function jt(e, t) {
  return Ie({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const u0 = jt("border", _t), c0 = jt("borderTop", _t), d0 = jt("borderRight", _t), f0 = jt("borderBottom", _t), p0 = jt("borderLeft", _t), m0 = jt("borderColor"), h0 = jt("borderTopColor"), g0 = jt("borderRightColor"), v0 = jt("borderBottomColor"), y0 = jt("borderLeftColor"), x0 = jt("outline", _t), S0 = jt("outlineColor"), vs = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ci(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: wi(t, r)
    });
    return Nt(e, e.borderRadius, n);
  }
  return null;
};
vs.propTypes = {};
vs.filterProps = ["borderRadius"];
gs(u0, c0, d0, f0, p0, m0, h0, g0, v0, y0, vs, x0, S0);
const ys = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ci(e.theme, "spacing", 8), n = (r) => ({
      gap: wi(t, r)
    });
    return Nt(e, e.gap, n);
  }
  return null;
};
ys.propTypes = {};
ys.filterProps = ["gap"];
const xs = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ci(e.theme, "spacing", 8), n = (r) => ({
      columnGap: wi(t, r)
    });
    return Nt(e, e.columnGap, n);
  }
  return null;
};
xs.propTypes = {};
xs.filterProps = ["columnGap"];
const Ss = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ci(e.theme, "spacing", 8), n = (r) => ({
      rowGap: wi(t, r)
    });
    return Nt(e, e.rowGap, n);
  }
  return null;
};
Ss.propTypes = {};
Ss.filterProps = ["rowGap"];
const C0 = Ie({
  prop: "gridColumn"
}), w0 = Ie({
  prop: "gridRow"
}), k0 = Ie({
  prop: "gridAutoFlow"
}), E0 = Ie({
  prop: "gridAutoColumns"
}), b0 = Ie({
  prop: "gridAutoRows"
}), P0 = Ie({
  prop: "gridTemplateColumns"
}), R0 = Ie({
  prop: "gridTemplateRows"
}), T0 = Ie({
  prop: "gridTemplateAreas"
}), _0 = Ie({
  prop: "gridArea"
});
gs(ys, xs, Ss, C0, w0, k0, E0, b0, P0, R0, T0, _0);
function Br(e, t) {
  return t === "grey" ? t : e;
}
const $0 = Ie({
  prop: "color",
  themeKey: "palette",
  transform: Br
}), M0 = Ie({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Br
}), O0 = Ie({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Br
});
gs($0, M0, O0);
function ht(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const I0 = Ie({
  prop: "width",
  transform: ht
}), vc = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || mc[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: ht(n)
      };
    };
    return Nt(e, e.maxWidth, t);
  }
  return null;
};
vc.filterProps = ["maxWidth"];
const N0 = Ie({
  prop: "minWidth",
  transform: ht
}), z0 = Ie({
  prop: "height",
  transform: ht
}), L0 = Ie({
  prop: "maxHeight",
  transform: ht
}), F0 = Ie({
  prop: "minHeight",
  transform: ht
});
Ie({
  prop: "size",
  cssProperty: "width",
  transform: ht
});
Ie({
  prop: "size",
  cssProperty: "height",
  transform: ht
});
const j0 = Ie({
  prop: "boxSizing"
});
gs(I0, vc, N0, z0, L0, F0, j0);
const ki = {
  // borders
  border: {
    themeKey: "borders",
    transform: _t
  },
  borderTop: {
    themeKey: "borders",
    transform: _t
  },
  borderRight: {
    themeKey: "borders",
    transform: _t
  },
  borderBottom: {
    themeKey: "borders",
    transform: _t
  },
  borderLeft: {
    themeKey: "borders",
    transform: _t
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
    transform: _t
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
    transform: Br
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Br
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Br
  },
  // spacing
  p: {
    style: _e
  },
  pt: {
    style: _e
  },
  pr: {
    style: _e
  },
  pb: {
    style: _e
  },
  pl: {
    style: _e
  },
  px: {
    style: _e
  },
  py: {
    style: _e
  },
  padding: {
    style: _e
  },
  paddingTop: {
    style: _e
  },
  paddingRight: {
    style: _e
  },
  paddingBottom: {
    style: _e
  },
  paddingLeft: {
    style: _e
  },
  paddingX: {
    style: _e
  },
  paddingY: {
    style: _e
  },
  paddingInline: {
    style: _e
  },
  paddingInlineStart: {
    style: _e
  },
  paddingInlineEnd: {
    style: _e
  },
  paddingBlock: {
    style: _e
  },
  paddingBlockStart: {
    style: _e
  },
  paddingBlockEnd: {
    style: _e
  },
  m: {
    style: Te
  },
  mt: {
    style: Te
  },
  mr: {
    style: Te
  },
  mb: {
    style: Te
  },
  ml: {
    style: Te
  },
  mx: {
    style: Te
  },
  my: {
    style: Te
  },
  margin: {
    style: Te
  },
  marginTop: {
    style: Te
  },
  marginRight: {
    style: Te
  },
  marginBottom: {
    style: Te
  },
  marginLeft: {
    style: Te
  },
  marginX: {
    style: Te
  },
  marginY: {
    style: Te
  },
  marginInline: {
    style: Te
  },
  marginInlineStart: {
    style: Te
  },
  marginInlineEnd: {
    style: Te
  },
  marginBlock: {
    style: Te
  },
  marginBlockStart: {
    style: Te
  },
  marginBlockEnd: {
    style: Te
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
    transform: ht
  },
  maxWidth: {
    style: vc
  },
  minWidth: {
    transform: ht
  },
  height: {
    transform: ht
  },
  maxHeight: {
    transform: ht
  },
  minHeight: {
    transform: ht
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
function B0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Om() {
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
    const h = hs(o, u) || {};
    return d ? d(l) : Nt(l, r, (y) => {
      let v = Cl(h, c, y);
      return y === v && typeof y == "string" && (v = Cl(h, c, `${n}${y === "default" ? "" : V(y)}`, y)), a === !1 ? v : {
        [a]: v
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
    const s = (r = i.unstable_sxConfig) != null ? r : ki;
    function a(u) {
      let c = u;
      if (typeof u == "function")
        c = u(i);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const d = Jy(i.breakpoints), h = Object.keys(d);
      let C = d;
      return Object.keys(c).forEach((y) => {
        const v = B0(c[y], i);
        if (v != null)
          if (typeof v == "object")
            if (s[y])
              C = Fo(C, e(y, v, i, s));
            else {
              const P = Nt({
                theme: i
              }, v, (p) => ({
                [y]: p
              }));
              A0(P, v) ? C[y] = t({
                sx: v,
                theme: i,
                nested: !0
              }) : C = Fo(C, P);
            }
          else
            C = Fo(C, e(y, v, i, s));
      }), !l && i.modularCssLayers ? {
        "@layer sx": Kd(h, C)
      } : Kd(h, C);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const so = Om();
so.filterProps = ["sx"];
function Im(e, t) {
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
  } = e, l = W(e, D0), s = _m(n), a = a0(o);
  let u = yt({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: x({
      mode: "light"
    }, r),
    spacing: a,
    shape: x({}, Zy, i)
  }, l);
  return u.applyStyles = Im, u = t.reduce((c, d) => yt(c, d), u), u.unstable_sxConfig = x({}, ki, l == null ? void 0 : l.unstable_sxConfig), u.unstable_sx = function(d) {
    return so({
      sx: d,
      theme: this
    });
  }, u;
}
const W0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ei,
  private_createBreakpoints: _m,
  unstable_applyStyles: Im
}, Symbol.toStringTag, { value: "Module" }));
function U0(e) {
  return Object.keys(e).length === 0;
}
function yc(e = null) {
  const t = S.useContext(lo);
  return !t || U0(t) ? e : t;
}
const H0 = Ei();
function Cs(e = H0) {
  return yc(e);
}
function aa(e) {
  const t = Sl(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Nm({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Cs(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((l) => aa(typeof l == "function" ? l(o) : l)) : i = aa(i)), /* @__PURE__ */ b.jsx(Pm, {
    styles: i
  });
}
const V0 = ["sx"], K0 = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : ki;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function ws(e) {
  const {
    sx: t
  } = e, n = W(e, V0), {
    systemProps: r,
    otherProps: o
  } = K0(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...l) => {
    const s = t(...l);
    return hn(s) ? x({}, r, s) : r;
  } : i = x({}, r, t), x({}, o, {
    sx: i
  });
}
const G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: so,
  extendSxProp: ws,
  unstable_createStyleFunctionSx: Om,
  unstable_defaultSxConfig: ki
}, Symbol.toStringTag, { value: "Module" })), Qd = (e) => e, Q0 = () => {
  let e = Qd;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Qd;
    }
  };
}, zm = Q0();
function Lm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Lm(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Q() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Lm(e)) && (r && (r += " "), r += t);
  return r;
}
const Y0 = ["className", "component"];
function X0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = pc("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(so);
  return /* @__PURE__ */ S.forwardRef(function(a, u) {
    const c = Cs(n), d = ws(a), {
      className: h,
      component: C = "div"
    } = d, y = W(d, Y0);
    return /* @__PURE__ */ b.jsx(i, x({
      as: C,
      ref: u,
      className: Q(h, o ? o(r) : r),
      theme: t && c[t] || c
    }, y));
  });
}
const q0 = {
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
function oe(e, t, n = "Mui") {
  const r = q0[t];
  return r ? `${n}-${r}` : `${zm.generate(e)}-${t}`;
}
function ie(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = oe(e, o, n);
  }), r;
}
var Fm = { exports: {} }, pe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc = Symbol.for("react.transitional.element"), Sc = Symbol.for("react.portal"), ks = Symbol.for("react.fragment"), Es = Symbol.for("react.strict_mode"), bs = Symbol.for("react.profiler"), Ps = Symbol.for("react.consumer"), Rs = Symbol.for("react.context"), Ts = Symbol.for("react.forward_ref"), _s = Symbol.for("react.suspense"), $s = Symbol.for("react.suspense_list"), Ms = Symbol.for("react.memo"), Os = Symbol.for("react.lazy"), Z0 = Symbol.for("react.view_transition"), J0 = Symbol.for("react.client.reference");
function At(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case xc:
        switch (e = e.type, e) {
          case ks:
          case bs:
          case Es:
          case _s:
          case $s:
          case Z0:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Rs:
              case Ts:
              case Os:
              case Ms:
                return e;
              case Ps:
                return e;
              default:
                return t;
            }
        }
      case Sc:
        return t;
    }
  }
}
pe.ContextConsumer = Ps;
pe.ContextProvider = Rs;
pe.Element = xc;
pe.ForwardRef = Ts;
pe.Fragment = ks;
pe.Lazy = Os;
pe.Memo = Ms;
pe.Portal = Sc;
pe.Profiler = bs;
pe.StrictMode = Es;
pe.Suspense = _s;
pe.SuspenseList = $s;
pe.isContextConsumer = function(e) {
  return At(e) === Ps;
};
pe.isContextProvider = function(e) {
  return At(e) === Rs;
};
pe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xc;
};
pe.isForwardRef = function(e) {
  return At(e) === Ts;
};
pe.isFragment = function(e) {
  return At(e) === ks;
};
pe.isLazy = function(e) {
  return At(e) === Os;
};
pe.isMemo = function(e) {
  return At(e) === Ms;
};
pe.isPortal = function(e) {
  return At(e) === Sc;
};
pe.isProfiler = function(e) {
  return At(e) === bs;
};
pe.isStrictMode = function(e) {
  return At(e) === Es;
};
pe.isSuspense = function(e) {
  return At(e) === _s;
};
pe.isSuspenseList = function(e) {
  return At(e) === $s;
};
pe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ks || e === bs || e === Es || e === _s || e === $s || typeof e == "object" && e !== null && (e.$$typeof === Os || e.$$typeof === Ms || e.$$typeof === Rs || e.$$typeof === Ps || e.$$typeof === Ts || e.$$typeof === J0 || e.getModuleId !== void 0);
};
pe.typeOf = At;
Fm.exports = pe;
var Yd = Fm.exports;
const e1 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function jm(e) {
  const t = `${e}`.match(e1);
  return t && t[1] || "";
}
function Am(e, t = "") {
  return e.displayName || e.name || jm(e) || t;
}
function Xd(e, t, n) {
  const r = Am(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function t1(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Am(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yd.ForwardRef:
          return Xd(e, e.render, "ForwardRef");
        case Yd.Memo:
          return Xd(e, e.type, "memo");
        default:
          return;
      }
  }
}
const n1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: t1,
  getFunctionName: jm
}, Symbol.toStringTag, { value: "Module" })), r1 = ["ownerState"], o1 = ["variants"], i1 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function l1(e) {
  return Object.keys(e).length === 0;
}
function s1(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ua(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function qd(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const a1 = Ei(), u1 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Oi({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return l1(t) ? e : t[n] || t;
}
function c1(e) {
  return e ? (t, n) => n[e] : null;
}
function ll(e, t, n) {
  let {
    ownerState: r
  } = t, o = W(t, r1);
  const i = typeof e == "function" ? e(x({
    ownerState: r
  }, o)) : e;
  if (Array.isArray(i))
    return i.flatMap((l) => ll(l, x({
      ownerState: r
    }, o), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: l = []
    } = i;
    let a = W(i, o1);
    return l.forEach((u) => {
      let c = !0;
      if (typeof u.props == "function" ? c = u.props(x({
        ownerState: r
      }, o, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && o[d] !== u.props[d] && (c = !1);
      }), c) {
        Array.isArray(a) || (a = [a]);
        const d = typeof u.style == "function" ? u.style(x({
          ownerState: r
        }, o, r)) : u.style;
        a.push(n ? qd(Sl(d), n) : d);
      }
    }), a;
  }
  return n ? qd(Sl(i), n) : i;
}
function d1(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = a1,
    rootShouldForwardProp: r = ua,
    slotShouldForwardProp: o = ua
  } = e, i = (l) => so(x({}, l, {
    theme: Oi(x({}, l, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (l, s = {}) => {
    Rm(l, (k) => k.filter((w) => !(w != null && w.__mui_systemSx)));
    const {
      name: a,
      slot: u,
      skipVariantsResolver: c,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = c1(u1(u))
    } = s, C = W(s, i1), y = a && a.startsWith("Mui") || u ? "components" : "custom", v = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), P = d || !1;
    let p, f = ua;
    u === "Root" || u === "root" ? f = r : u ? f = o : s1(l) && (f = void 0);
    const m = pc(l, x({
      shouldForwardProp: f,
      label: p
    }, C)), g = (k) => typeof k == "function" && k.__emotion_real !== k || hn(k) ? (w) => {
      const R = Oi({
        theme: w.theme,
        defaultTheme: n,
        themeId: t
      });
      return ll(k, x({}, w, {
        theme: R
      }), R.modularCssLayers ? y : void 0);
    } : k, E = (k, ...w) => {
      let R = g(k);
      const M = w ? w.map(g) : [];
      a && h && M.push((I) => {
        const O = Oi(x({}, I, {
          defaultTheme: n,
          themeId: t
        }));
        if (!O.components || !O.components[a] || !O.components[a].styleOverrides)
          return null;
        const N = O.components[a].styleOverrides, z = {};
        return Object.entries(N).forEach(([F, B]) => {
          z[F] = ll(B, x({}, I, {
            theme: O
          }), O.modularCssLayers ? "theme" : void 0);
        }), h(I, z);
      }), a && !v && M.push((I) => {
        var O;
        const N = Oi(x({}, I, {
          defaultTheme: n,
          themeId: t
        })), z = N == null || (O = N.components) == null || (O = O[a]) == null ? void 0 : O.variants;
        return ll({
          variants: z
        }, x({}, I, {
          theme: N
        }), N.modularCssLayers ? "theme" : void 0);
      }), P || M.push(i);
      const _ = M.length - w.length;
      if (Array.isArray(k) && _ > 0) {
        const I = new Array(_).fill("");
        R = [...k, ...I], R.raw = [...k.raw, ...I];
      }
      const A = m(R, ...M);
      return l.muiName && (A.muiName = l.muiName), A;
    };
    return m.withConfig && (E.withConfig = m.withConfig), E;
  };
}
const f1 = d1();
function Jo(e, t) {
  const n = x({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = x({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = x({}, i), Object.keys(o).forEach((l) => {
        n[r][l] = Jo(o[l], i[l]);
      }));
    } else n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function p1(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Jo(t.components[n].defaultProps, r);
}
function m1({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Cs(n);
  return r && (o = o[r] || o), p1({
    theme: o,
    name: t,
    props: e
  });
}
const Un = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function h1(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const g1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: h1
}, Symbol.toStringTag, { value: "Module" }));
function Zd(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Bm(e, t = 166) {
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
function ca(e, t) {
  var n, r;
  return /* @__PURE__ */ S.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function Ze(e) {
  return e && e.ownerDocument || document;
}
function ar(e) {
  return Ze(e).defaultView || window;
}
function Xa(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Jd = 0;
function v1(e) {
  const [t, n] = S.useState(e), r = e || t;
  return S.useEffect(() => {
    t == null && (Jd += 1, n(`mui-${Jd}`));
  }, [t]), r;
}
const ef = Va.useId;
function Cc(e) {
  if (ef !== void 0) {
    const t = ef();
    return e ?? t;
  }
  return v1(e);
}
function tf({
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
function nn(e) {
  const t = S.useRef(e);
  return Un(() => {
    t.current = e;
  }), S.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Je(...e) {
  return S.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Xa(n, t);
    });
  }, e);
}
const nf = {};
function y1(e, t) {
  const n = S.useRef(nf);
  return n.current === nf && (n.current = e(t)), n;
}
const x1 = [];
function S1(e) {
  S.useEffect(e, x1);
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
function wc() {
  const e = y1(Is.create).current;
  return S1(e.disposeEffect), e;
}
let Ns = !0, qa = !1;
const C1 = new Is(), w1 = {
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
function k1(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && w1[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function E1(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ns = !0);
}
function da() {
  Ns = !1;
}
function b1() {
  this.visibilityState === "hidden" && qa && (Ns = !0);
}
function P1(e) {
  e.addEventListener("keydown", E1, !0), e.addEventListener("mousedown", da, !0), e.addEventListener("pointerdown", da, !0), e.addEventListener("touchstart", da, !0), e.addEventListener("visibilitychange", b1, !0);
}
function R1(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Ns || k1(t);
}
function T1() {
  const e = S.useCallback((o) => {
    o != null && P1(o.ownerDocument);
  }, []), t = S.useRef(!1);
  function n() {
    return t.current ? (qa = !0, C1.start(100, () => {
      qa = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(o) {
    return R1(o) ? (t.current = !0, !0) : !1;
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
function ue(e, t, n = void 0) {
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
function wl(e) {
  return typeof e == "string";
}
function Wm(e, t, n) {
  return e === void 0 || wl(e) ? t : x({}, t, {
    ownerState: x({}, t.ownerState, n)
  });
}
function kl(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function rf(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Um(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const C = Q(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = x({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), v = x({}, n, o, r);
    return C.length > 0 && (v.className = C), Object.keys(y).length > 0 && (v.style = y), {
      props: v,
      internalRef: void 0
    };
  }
  const l = kl(x({}, o, r)), s = rf(r), a = rf(o), u = t(l), c = Q(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = x({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), h = x({}, u, n, a, s);
  return c.length > 0 && (h.className = c), Object.keys(d).length > 0 && (h.style = d), {
    props: h,
    internalRef: u.ref
  };
}
function Hm(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
const _1 = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function ur(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, l = W(e, _1), s = i ? {} : Hm(r, o), {
    props: a,
    internalRef: u
  } = Um(x({}, l, {
    externalSlotProps: s
  })), c = Je(u, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Wm(n, x({}, a, {
    ref: c
  }), o);
}
function ao(e) {
  if (parseInt(S.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const Vm = /* @__PURE__ */ S.createContext(null);
function Km() {
  return S.useContext(Vm);
}
const $1 = typeof Symbol == "function" && Symbol.for, M1 = $1 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function O1(e, t) {
  return typeof t == "function" ? t(e) : x({}, e, t);
}
function I1(e) {
  const {
    children: t,
    theme: n
  } = e, r = Km(), o = S.useMemo(() => {
    const i = r === null ? n : O1(r, n);
    return i != null && (i[M1] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ b.jsx(Vm.Provider, {
    value: o,
    children: t
  });
}
const N1 = ["value"], Gm = /* @__PURE__ */ S.createContext();
function z1(e) {
  let {
    value: t
  } = e, n = W(e, N1);
  return /* @__PURE__ */ b.jsx(Gm.Provider, x({
    value: t ?? !0
  }, n));
}
const L1 = () => {
  const e = S.useContext(Gm);
  return e ?? !1;
}, Qm = /* @__PURE__ */ S.createContext(void 0);
function F1({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ b.jsx(Qm.Provider, {
    value: e,
    children: t
  });
}
function j1(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Jo(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Jo(o, r) : r;
}
function A1({
  props: e,
  name: t
}) {
  const n = S.useContext(Qm);
  return j1({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
function B1(e) {
  const t = yc(), n = Cc() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Un(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ b.jsx(Nm, {
    styles: o
  }) : null;
}
const of = {};
function lf(e, t, n, r = !1) {
  return S.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), l = e ? x({}, t, {
        [e]: i
      }) : i;
      return r ? () => l : l;
    }
    return e ? x({}, t, {
      [e]: n
    }) : x({}, t, n);
  }, [e, t, n, r]);
}
function D1(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = yc(of), i = Km() || of, l = lf(r, o, n), s = lf(r, i, n, !0), a = l.direction === "rtl", u = B1(l);
  return /* @__PURE__ */ b.jsx(I1, {
    theme: s,
    children: /* @__PURE__ */ b.jsx(lo.Provider, {
      value: l,
      children: /* @__PURE__ */ b.jsx(z1, {
        value: a,
        children: /* @__PURE__ */ b.jsxs(F1, {
          value: l == null ? void 0 : l.components,
          children: [u, t]
        })
      })
    })
  });
}
const W1 = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], U1 = Ei(), H1 = f1("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`maxWidth${V(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
  }
}), V1 = (e) => m1({
  props: e,
  name: "MuiContainer",
  defaultTheme: U1
}), K1 = (e, t) => {
  const n = (a) => oe(t, a), {
    classes: r,
    fixed: o,
    disableGutters: i,
    maxWidth: l
  } = e, s = {
    root: ["root", l && `maxWidth${V(String(l))}`, o && "fixed", i && "disableGutters"]
  };
  return ue(s, n, r);
};
function G1(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = H1,
    useThemeProps: n = V1,
    componentName: r = "MuiContainer"
  } = e, o = t(({
    theme: l,
    ownerState: s
  }) => x({
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
  }) => x({}, s.maxWidth === "xs" && {
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
      disableGutters: h = !1,
      fixed: C = !1,
      maxWidth: y = "lg"
    } = u, v = W(u, W1), P = x({}, u, {
      component: d,
      disableGutters: h,
      fixed: C,
      maxWidth: y
    }), p = K1(P, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ b.jsx(o, x({
        as: d,
        ownerState: P,
        className: Q(p.root, c),
        ref: a
      }, v))
    );
  });
}
function Q1(e, t) {
  return x({
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
var Ne = {}, Ym = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ym);
var Xm = Ym.exports;
const Y1 = /* @__PURE__ */ Kn(Wv), X1 = /* @__PURE__ */ Kn(g1);
var qm = Xm;
Object.defineProperty(Ne, "__esModule", {
  value: !0
});
var On = Ne.alpha = th;
Ne.blend = ax;
Ne.colorChannel = void 0;
var Za = Ne.darken = Ec;
Ne.decomposeColor = zt;
var q1 = Ne.emphasize = nh, Z1 = Ne.getContrastRatio = rx;
Ne.getLuminance = El;
Ne.hexToRgb = Zm;
Ne.hslToRgb = eh;
var Ja = Ne.lighten = bc;
Ne.private_safeAlpha = ox;
Ne.private_safeColorChannel = void 0;
Ne.private_safeDarken = ix;
Ne.private_safeEmphasize = sx;
Ne.private_safeLighten = lx;
Ne.recomposeColor = uo;
Ne.rgbToHex = nx;
var sf = qm(Y1), J1 = qm(X1);
function kc(e, t = 0, n = 1) {
  return (0, J1.default)(e, t, n);
}
function Zm(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ex(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function zt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return zt(Zm(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, sf.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error((0, sf.default)(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const Jm = (e) => {
  const t = zt(e);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
Ne.colorChannel = Jm;
const tx = (e, t) => {
  try {
    return Jm(e);
  } catch {
    return e;
  }
};
Ne.private_safeColorChannel = tx;
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
function nx(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = zt(e);
  return `#${t.map((n, r) => ex(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function eh(e) {
  e = zt(e);
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
function El(e) {
  e = zt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? zt(eh(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function rx(e, t) {
  const n = El(e), r = El(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function th(e, t) {
  return e = zt(e), t = kc(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, uo(e);
}
function ox(e, t, n) {
  try {
    return th(e, t);
  } catch {
    return e;
  }
}
function Ec(e, t) {
  if (e = zt(e), t = kc(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return uo(e);
}
function ix(e, t, n) {
  try {
    return Ec(e, t);
  } catch {
    return e;
  }
}
function bc(e, t) {
  if (e = zt(e), t = kc(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return uo(e);
}
function lx(e, t, n) {
  try {
    return bc(e, t);
  } catch {
    return e;
  }
}
function nh(e, t = 0.15) {
  return El(e) > 0.5 ? Ec(e, t) : bc(e, t);
}
function sx(e, t, n) {
  try {
    return nh(e, t);
  } catch {
    return e;
  }
}
function ax(e, t, n, r = 1) {
  const o = (a, u) => Math.round((a ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r), i = zt(e), l = zt(t), s = [o(i.values[0], l.values[0]), o(i.values[1], l.values[1]), o(i.values[2], l.values[2])];
  return uo({
    type: "rgb",
    values: s
  });
}
const ux = ["mode", "contrastThreshold", "tonalOffset"], af = {
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
    paper: Yo.white,
    default: Yo.white
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
}, fa = {
  text: {
    primary: Yo.white,
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
    active: Yo.white,
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
function uf(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Ja(e.main, o) : t === "dark" && (e.dark = Za(e.main, i)));
}
function cx(e = "light") {
  return e === "dark" ? {
    main: Sr[200],
    light: Sr[50],
    dark: Sr[400]
  } : {
    main: Sr[700],
    light: Sr[400],
    dark: Sr[800]
  };
}
function dx(e = "light") {
  return e === "dark" ? {
    main: xr[200],
    light: xr[50],
    dark: xr[400]
  } : {
    main: xr[500],
    light: xr[300],
    dark: xr[700]
  };
}
function fx(e = "light") {
  return e === "dark" ? {
    main: yr[500],
    light: yr[300],
    dark: yr[700]
  } : {
    main: yr[700],
    light: yr[400],
    dark: yr[800]
  };
}
function px(e = "light") {
  return e === "dark" ? {
    main: Cr[400],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: Cr[700],
    light: Cr[500],
    dark: Cr[900]
  };
}
function mx(e = "light") {
  return e === "dark" ? {
    main: wr[400],
    light: wr[300],
    dark: wr[700]
  } : {
    main: wr[800],
    light: wr[500],
    dark: wr[900]
  };
}
function hx(e = "light") {
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
function gx(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = W(e, ux), i = e.primary || cx(t), l = e.secondary || dx(t), s = e.error || fx(t), a = e.info || px(t), u = e.success || mx(t), c = e.warning || hx(t);
  function d(v) {
    return Z1(v, fa.text.primary) >= n ? fa.text.primary : af.text.primary;
  }
  const h = ({
    color: v,
    name: P,
    mainShade: p = 500,
    lightShade: f = 300,
    darkShade: m = 700
  }) => {
    if (v = x({}, v), !v.main && v[p] && (v.main = v[p]), !v.hasOwnProperty("main"))
      throw new Error(sr(11, P ? ` (${P})` : "", p));
    if (typeof v.main != "string")
      throw new Error(sr(12, P ? ` (${P})` : "", JSON.stringify(v.main)));
    return uf(v, "light", f, r), uf(v, "dark", m, r), v.contrastText || (v.contrastText = d(v.main)), v;
  }, C = {
    dark: fa,
    light: af
  };
  return yt(x({
    // A collection of common colors.
    common: x({}, Yo),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: a,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
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
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, C[t]), o);
}
const vx = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function yx(e) {
  return Math.round(e * 1e5) / 1e5;
}
const cf = {
  textTransform: "uppercase"
}, df = '"Roboto", "Helvetica", "Arial", sans-serif';
function xx(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = df,
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
  } = n, h = W(n, vx), C = o / 14, y = d || ((p) => `${p / u * C}rem`), v = (p, f, m, g, E) => x({
    fontFamily: r,
    fontWeight: p,
    fontSize: y(f),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: m
  }, r === df ? {
    letterSpacing: `${yx(g / f)}em`
  } : {}, E, c), P = {
    h1: v(i, 96, 1.167, -1.5),
    h2: v(i, 60, 1.2, -0.5),
    h3: v(l, 48, 1.167, 0),
    h4: v(l, 34, 1.235, 0.25),
    h5: v(l, 24, 1.334, 0),
    h6: v(s, 20, 1.6, 0.15),
    subtitle1: v(l, 16, 1.75, 0.15),
    subtitle2: v(s, 14, 1.57, 0.1),
    body1: v(l, 16, 1.5, 0.15),
    body2: v(l, 14, 1.43, 0.15),
    button: v(s, 14, 1.75, 0.4, cf),
    caption: v(l, 12, 1.66, 0.4),
    overline: v(l, 12, 2.66, 1, cf),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return yt(x({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: l,
    fontWeightMedium: s,
    fontWeightBold: a
  }, P), h, {
    clone: !1
    // No need to clone deep
  });
}
const Sx = 0.2, Cx = 0.14, wx = 0.12;
function Ce(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Sx})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Cx})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${wx})`].join(",");
}
const kx = ["none", Ce(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ce(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ce(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ce(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ce(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ce(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ce(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ce(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ce(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ce(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ce(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ce(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ce(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ce(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ce(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ce(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ce(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ce(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ce(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ce(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ce(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ce(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ce(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ce(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ex = ["duration", "easing", "delay"], bx = {
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
function ff(e) {
  return `${Math.round(e)}ms`;
}
function Rx(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Tx(e) {
  const t = x({}, bx, e.easing), n = x({}, Px, e.duration);
  return x({
    getAutoHeightDuration: Rx,
    create: (o = ["all"], i = {}) => {
      const {
        duration: l = n.standard,
        easing: s = t.easeInOut,
        delay: a = 0
      } = i;
      return W(i, Ex), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof l == "string" ? l : ff(l)} ${s} ${typeof a == "string" ? a : ff(a)}`).join(",");
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
}, $x = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Pc(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, l = W(e, $x);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(sr(18));
  const s = gx(r), a = Ei(e);
  let u = yt(a, {
    mixins: Q1(a.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: kx.slice(),
    typography: xx(s, i),
    transitions: Tx(o),
    zIndex: x({}, _x)
  });
  return u = yt(u, l), u = t.reduce((c, d) => yt(c, d), u), u.unstable_sxConfig = x({}, ki, l == null ? void 0 : l.unstable_sxConfig), u.unstable_sx = function(d) {
    return so({
      sx: d,
      theme: this
    });
  }, u;
}
const Rc = Pc();
function zs() {
  const e = Cs(Rc);
  return e[Qr] || e;
}
var bi = {}, pa = { exports: {} }, pf;
function Mx() {
  return pf || (pf = 1, function(e) {
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
  }(pa)), pa.exports;
}
const Ox = /* @__PURE__ */ Kn(Qy), Ix = /* @__PURE__ */ Kn(Yy), Nx = /* @__PURE__ */ Kn(t0), zx = /* @__PURE__ */ Kn(n1), Lx = /* @__PURE__ */ Kn(W0), Fx = /* @__PURE__ */ Kn(G0);
var co = Xm;
Object.defineProperty(bi, "__esModule", {
  value: !0
});
var jx = bi.default = qx;
bi.shouldForwardProp = sl;
bi.systemDefaultTheme = void 0;
var Rt = co(Em()), eu = co(Mx()), bl = Vx(Ox), Ax = Ix;
co(Nx);
co(zx);
var Bx = co(Lx), Dx = co(Fx);
const Wx = ["ownerState"], Ux = ["variants"], Hx = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function rh(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (rh = function(r) {
    return r ? n : t;
  })(e);
}
function Vx(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var n = rh(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
    var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
    l && (l.get || l.set) ? Object.defineProperty(r, i, l) : r[i] = e[i];
  }
  return r.default = e, n && n.set(e, r), r;
}
function Kx(e) {
  return Object.keys(e).length === 0;
}
function Gx(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function sl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function mf(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const Qx = bi.systemDefaultTheme = (0, Bx.default)(), Yx = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ii({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Kx(t) ? e : t[n] || t;
}
function Xx(e) {
  return e ? (t, n) => n[e] : null;
}
function al(e, t, n) {
  let {
    ownerState: r
  } = t, o = (0, eu.default)(t, Wx);
  const i = typeof e == "function" ? e((0, Rt.default)({
    ownerState: r
  }, o)) : e;
  if (Array.isArray(i))
    return i.flatMap((l) => al(l, (0, Rt.default)({
      ownerState: r
    }, o), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: l = []
    } = i;
    let a = (0, eu.default)(i, Ux);
    return l.forEach((u) => {
      let c = !0;
      if (typeof u.props == "function" ? c = u.props((0, Rt.default)({
        ownerState: r
      }, o, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && o[d] !== u.props[d] && (c = !1);
      }), c) {
        Array.isArray(a) || (a = [a]);
        const d = typeof u.style == "function" ? u.style((0, Rt.default)({
          ownerState: r
        }, o, r)) : u.style;
        a.push(n ? mf((0, bl.internal_serializeStyles)(d), n) : d);
      }
    }), a;
  }
  return n ? mf((0, bl.internal_serializeStyles)(i), n) : i;
}
function qx(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Qx,
    rootShouldForwardProp: r = sl,
    slotShouldForwardProp: o = sl
  } = e, i = (l) => (0, Dx.default)((0, Rt.default)({}, l, {
    theme: Ii((0, Rt.default)({}, l, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (l, s = {}) => {
    (0, bl.internal_processStyles)(l, (k) => k.filter((w) => !(w != null && w.__mui_systemSx)));
    const {
      name: a,
      slot: u,
      skipVariantsResolver: c,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = Xx(Yx(u))
    } = s, C = (0, eu.default)(s, Hx), y = a && a.startsWith("Mui") || u ? "components" : "custom", v = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), P = d || !1;
    let p, f = sl;
    u === "Root" || u === "root" ? f = r : u ? f = o : Gx(l) && (f = void 0);
    const m = (0, bl.default)(l, (0, Rt.default)({
      shouldForwardProp: f,
      label: p
    }, C)), g = (k) => typeof k == "function" && k.__emotion_real !== k || (0, Ax.isPlainObject)(k) ? (w) => {
      const R = Ii({
        theme: w.theme,
        defaultTheme: n,
        themeId: t
      });
      return al(k, (0, Rt.default)({}, w, {
        theme: R
      }), R.modularCssLayers ? y : void 0);
    } : k, E = (k, ...w) => {
      let R = g(k);
      const M = w ? w.map(g) : [];
      a && h && M.push((I) => {
        const O = Ii((0, Rt.default)({}, I, {
          defaultTheme: n,
          themeId: t
        }));
        if (!O.components || !O.components[a] || !O.components[a].styleOverrides)
          return null;
        const N = O.components[a].styleOverrides, z = {};
        return Object.entries(N).forEach(([F, B]) => {
          z[F] = al(B, (0, Rt.default)({}, I, {
            theme: O
          }), O.modularCssLayers ? "theme" : void 0);
        }), h(I, z);
      }), a && !v && M.push((I) => {
        var O;
        const N = Ii((0, Rt.default)({}, I, {
          defaultTheme: n,
          themeId: t
        })), z = N == null || (O = N.components) == null || (O = O[a]) == null ? void 0 : O.variants;
        return al({
          variants: z
        }, (0, Rt.default)({}, I, {
          theme: N
        }), N.modularCssLayers ? "theme" : void 0);
      }), P || M.push(i);
      const _ = M.length - w.length;
      if (Array.isArray(k) && _ > 0) {
        const I = new Array(_).fill("");
        R = [...k, ...I], R.raw = [...k.raw, ...I];
      }
      const A = m(R, ...M);
      return l.muiName && (A.muiName = l.muiName), A;
    };
    return m.withConfig && (E.withConfig = m.withConfig), E;
  };
}
function oh(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Yt = (e) => oh(e) && e !== "classes", U = jx({
  themeId: Qr,
  defaultTheme: Rc,
  rootShouldForwardProp: Yt
}), Zx = ["theme"];
function Jx(e) {
  let {
    theme: t
  } = e, n = W(e, Zx);
  const r = t[Qr];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = x({}, r, {
    vars: null
  }) : t && !t.vars && (o = x({}, t, {
    vars: null
  }))), /* @__PURE__ */ b.jsx(D1, x({}, n, {
    themeId: r ? Qr : void 0,
    theme: o
  }));
}
const hf = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function le(e) {
  return A1(e);
}
function eS(e) {
  return oe("MuiSvgIcon", e);
}
ie("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const tS = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], nS = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${V(t)}`, `fontSize${V(n)}`]
  };
  return ue(o, eS, r);
}, rS = U("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${V(n.color)}`], t[`fontSize${V(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, l, s, a, u, c, d, h, C, y;
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
    color: (d = (h = (e.vars || e).palette) == null || (h = h[t.color]) == null ? void 0 : h.main) != null ? d : {
      action: (C = (e.vars || e).palette) == null || (C = C.action) == null ? void 0 : C.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), tu = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
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
    viewBox: h = "0 0 24 24"
  } = r, C = W(r, tS), y = /* @__PURE__ */ S.isValidElement(o) && o.type === "svg", v = x({}, r, {
    color: l,
    component: s,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: h,
    hasSvgAsChild: y
  }), P = {};
  c || (P.viewBox = h);
  const p = nS(v);
  return /* @__PURE__ */ b.jsxs(rS, x({
    as: s,
    className: Q(p.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: n
  }, P, C, y && o.props, {
    ownerState: v,
    children: [y ? o.props.children : o, d ? /* @__PURE__ */ b.jsx("title", {
      children: d
    }) : null]
  }));
});
tu.muiName = "SvgIcon";
function sn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ b.jsx(tu, x({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return n.muiName = tu.muiName, /* @__PURE__ */ S.memo(/* @__PURE__ */ S.forwardRef(n));
}
function nu(e, t) {
  return nu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, nu(e, t);
}
function ih(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, nu(e, t);
}
var lh = { exports: {} }, wt = {}, sh = { exports: {} }, ah = {};
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
  function t(T, L) {
    var D = T.length;
    T.push(L);
    e: for (; 0 < D; ) {
      var q = D - 1 >>> 1, Y = T[q];
      if (0 < o(Y, L)) T[q] = L, T[D] = Y, D = q;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var L = T[0], D = T.pop();
    if (D !== L) {
      T[0] = D;
      e: for (var q = 0, Y = T.length, fe = Y >>> 1; q < fe; ) {
        var G = 2 * (q + 1) - 1, ce = T[G], ee = G + 1, Fe = T[ee];
        if (0 > o(ce, D)) ee < Y && 0 > o(Fe, ce) ? (T[q] = Fe, T[ee] = D, q = ee) : (T[q] = ce, T[G] = D, q = G);
        else if (ee < Y && 0 > o(Fe, D)) T[q] = Fe, T[ee] = D, q = ee;
        else break e;
      }
    }
    return L;
  }
  function o(T, L) {
    var D = T.sortIndex - L.sortIndex;
    return D !== 0 ? D : T.id - L.id;
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
  var a = [], u = [], c = 1, d = null, h = 3, C = !1, y = !1, v = !1, P = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= T) r(u), L.sortIndex = L.expirationTime, t(a, L);
      else break;
      L = n(u);
    }
  }
  function g(T) {
    if (v = !1, m(T), !y) if (n(a) !== null) y = !0, F(E);
    else {
      var L = n(u);
      L !== null && B(g, L.startTime - T);
    }
  }
  function E(T, L) {
    y = !1, v && (v = !1, p(R), R = -1), C = !0;
    var D = h;
    try {
      for (m(L), d = n(a); d !== null && (!(d.expirationTime > L) || T && !A()); ) {
        var q = d.callback;
        if (typeof q == "function") {
          d.callback = null, h = d.priorityLevel;
          var Y = q(d.expirationTime <= L);
          L = e.unstable_now(), typeof Y == "function" ? d.callback = Y : d === n(a) && r(a), m(L);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var fe = !0;
      else {
        var G = n(u);
        G !== null && B(g, G.startTime - L), fe = !1;
      }
      return fe;
    } finally {
      d = null, h = D, C = !1;
    }
  }
  var k = !1, w = null, R = -1, M = 5, _ = -1;
  function A() {
    return !(e.unstable_now() - _ < M);
  }
  function I() {
    if (w !== null) {
      var T = e.unstable_now();
      _ = T;
      var L = !0;
      try {
        L = w(!0, T);
      } finally {
        L ? O() : (k = !1, w = null);
      }
    } else k = !1;
  }
  var O;
  if (typeof f == "function") O = function() {
    f(I);
  };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(), z = N.port2;
    N.port1.onmessage = I, O = function() {
      z.postMessage(null);
    };
  } else O = function() {
    P(I, 0);
  };
  function F(T) {
    w = T, k || (k = !0, O());
  }
  function B(T, L) {
    R = P(function() {
      T(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    y || C || (y = !0, F(E));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(T) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = h;
    }
    var D = h;
    h = L;
    try {
      return T();
    } finally {
      h = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, L) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var D = h;
    h = T;
    try {
      return L();
    } finally {
      h = D;
    }
  }, e.unstable_scheduleCallback = function(T, L, D) {
    var q = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? q + D : q) : D = q, T) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = D + Y, T = { id: c++, callback: L, priorityLevel: T, startTime: D, expirationTime: Y, sortIndex: -1 }, D > q ? (T.sortIndex = D, t(u, T), n(a) === null && T === n(u) && (v ? (p(R), R = -1) : v = !0, B(g, D - q))) : (T.sortIndex = Y, t(a, T), y || C || (y = !0, F(E))), T;
  }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(T) {
    var L = h;
    return function() {
      var D = h;
      h = L;
      try {
        return T.apply(this, arguments);
      } finally {
        h = D;
      }
    };
  };
})(ah);
sh.exports = ah;
var oS = sh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iS = S, St = oS;
function $(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var uh = /* @__PURE__ */ new Set(), ei = {};
function hr(e, t) {
  Xr(e, t), Xr(e + "Capture", t);
}
function Xr(e, t) {
  for (ei[e] = t, e = 0; e < t.length; e++) uh.add(t[e]);
}
var xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ru = Object.prototype.hasOwnProperty, lS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, gf = {}, vf = {};
function sS(e) {
  return ru.call(vf, e) ? !0 : ru.call(gf, e) ? !1 : lS.test(e) ? vf[e] = !0 : (gf[e] = !0, !1);
}
function aS(e, t, n, r) {
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
function uS(e, t, n, r) {
  if (t === null || typeof t > "u" || aS(e, t, n, r)) return !0;
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
function it(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ge[e] = new it(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ge[t] = new it(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ge[e] = new it(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ge[e] = new it(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ge[e] = new it(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ge[e] = new it(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ge[e] = new it(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ge[e] = new it(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ge[e] = new it(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Tc = /[\-:]([a-z])/g;
function _c(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Tc,
    _c
  );
  Ge[t] = new it(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Tc, _c);
  Ge[t] = new it(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Tc, _c);
  Ge[t] = new it(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ge[e] = new it(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new it("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ge[e] = new it(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $c(e, t, n, r) {
  var o = Ge.hasOwnProperty(t) ? Ge[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (uS(t, n, o, r) && (n = null), r || o === null ? sS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kn = iS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ni = Symbol.for("react.element"), Rr = Symbol.for("react.portal"), Tr = Symbol.for("react.fragment"), Mc = Symbol.for("react.strict_mode"), ou = Symbol.for("react.profiler"), ch = Symbol.for("react.provider"), dh = Symbol.for("react.context"), Oc = Symbol.for("react.forward_ref"), iu = Symbol.for("react.suspense"), lu = Symbol.for("react.suspense_list"), Ic = Symbol.for("react.memo"), Tn = Symbol.for("react.lazy"), fh = Symbol.for("react.offscreen"), yf = Symbol.iterator;
function So(e) {
  return e === null || typeof e != "object" ? null : (e = yf && e[yf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Re = Object.assign, ma;
function Oo(e) {
  if (ma === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ma = t && t[1] || "";
  }
  return `
` + ma + e;
}
var ha = !1;
function ga(e, t) {
  if (!e || ha) return "";
  ha = !0;
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
    ha = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Oo(e) : "";
}
function cS(e) {
  switch (e.tag) {
    case 5:
      return Oo(e.type);
    case 16:
      return Oo("Lazy");
    case 13:
      return Oo("Suspense");
    case 19:
      return Oo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ga(e.type, !1), e;
    case 11:
      return e = ga(e.type.render, !1), e;
    case 1:
      return e = ga(e.type, !0), e;
    default:
      return "";
  }
}
function su(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tr:
      return "Fragment";
    case Rr:
      return "Portal";
    case ou:
      return "Profiler";
    case Mc:
      return "StrictMode";
    case iu:
      return "Suspense";
    case lu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case dh:
      return (e.displayName || "Context") + ".Consumer";
    case ch:
      return (e._context.displayName || "Context") + ".Provider";
    case Oc:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ic:
      return t = e.displayName || null, t !== null ? t : su(e.type) || "Memo";
    case Tn:
      t = e._payload, e = e._init;
      try {
        return su(e(t));
      } catch {
      }
  }
  return null;
}
function dS(e) {
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
      return su(t);
    case 8:
      return t === Mc ? "StrictMode" : "Mode";
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
function Hn(e) {
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
function ph(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function fS(e) {
  var t = ph(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function zi(e) {
  e._valueTracker || (e._valueTracker = fS(e));
}
function mh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ph(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Pl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function au(e, t) {
  var n = t.checked;
  return Re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function xf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Hn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hh(e, t) {
  t = t.checked, t != null && $c(e, "checked", t, !1);
}
function uu(e, t) {
  hh(e, t);
  var n = Hn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? cu(e, t.type, n) : t.hasOwnProperty("defaultValue") && cu(e, t.type, Hn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Sf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function cu(e, t, n) {
  (t !== "number" || Pl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Io = Array.isArray;
function Dr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Hn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function du(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return Re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Cf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error($(92));
      if (Io(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Hn(n) };
}
function gh(e, t) {
  var n = Hn(t.value), r = Hn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function wf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? vh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Li, yh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Li = Li || document.createElement("div"), Li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Li.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ti(e, t) {
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
}, pS = ["Webkit", "ms", "Moz", "O"];
Object.keys(jo).forEach(function(e) {
  pS.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), jo[t] = jo[e];
  });
});
function xh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jo.hasOwnProperty(e) && jo[e] ? ("" + t).trim() : t + "px";
}
function Sh(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = xh(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var mS = Re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function pu(e, t) {
  if (t) {
    if (mS[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function mu(e, t) {
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
var hu = null;
function Nc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var gu = null, Wr = null, Ur = null;
function kf(e) {
  if (e = Ti(e)) {
    if (typeof gu != "function") throw Error($(280));
    var t = e.stateNode;
    t && (t = Bs(t), gu(e.stateNode, e.type, t));
  }
}
function Ch(e) {
  Wr ? Ur ? Ur.push(e) : Ur = [e] : Wr = e;
}
function wh() {
  if (Wr) {
    var e = Wr, t = Ur;
    if (Ur = Wr = null, kf(e), t) for (e = 0; e < t.length; e++) kf(t[e]);
  }
}
function kh(e, t) {
  return e(t);
}
function Eh() {
}
var va = !1;
function bh(e, t, n) {
  if (va) return e(t, n);
  va = !0;
  try {
    return kh(e, t, n);
  } finally {
    va = !1, (Wr !== null || Ur !== null) && (Eh(), wh());
  }
}
function ni(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bs(n);
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
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var vu = !1;
if (xn) try {
  var Co = {};
  Object.defineProperty(Co, "passive", { get: function() {
    vu = !0;
  } }), window.addEventListener("test", Co, Co), window.removeEventListener("test", Co, Co);
} catch {
  vu = !1;
}
function hS(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ao = !1, Rl = null, Tl = !1, yu = null, gS = { onError: function(e) {
  Ao = !0, Rl = e;
} };
function vS(e, t, n, r, o, i, l, s, a) {
  Ao = !1, Rl = null, hS.apply(gS, arguments);
}
function yS(e, t, n, r, o, i, l, s, a) {
  if (vS.apply(this, arguments), Ao) {
    if (Ao) {
      var u = Rl;
      Ao = !1, Rl = null;
    } else throw Error($(198));
    Tl || (Tl = !0, yu = u);
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
function Ph(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ef(e) {
  if (gr(e) !== e) throw Error($(188));
}
function xS(e) {
  var t = e.alternate;
  if (!t) {
    if (t = gr(e), t === null) throw Error($(188));
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
        if (i === n) return Ef(o), e;
        if (i === r) return Ef(o), t;
        i = i.sibling;
      }
      throw Error($(188));
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
        if (!l) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function Rh(e) {
  return e = xS(e), e !== null ? Th(e) : null;
}
function Th(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Th(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _h = St.unstable_scheduleCallback, bf = St.unstable_cancelCallback, SS = St.unstable_shouldYield, CS = St.unstable_requestPaint, Oe = St.unstable_now, wS = St.unstable_getCurrentPriorityLevel, zc = St.unstable_ImmediatePriority, $h = St.unstable_UserBlockingPriority, _l = St.unstable_NormalPriority, kS = St.unstable_LowPriority, Mh = St.unstable_IdlePriority, Ls = null, on = null;
function ES(e) {
  if (on && typeof on.onCommitFiberRoot == "function") try {
    on.onCommitFiberRoot(Ls, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Kt = Math.clz32 ? Math.clz32 : RS, bS = Math.log, PS = Math.LN2;
function RS(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (bS(e) / PS | 0) | 0;
}
var Fi = 64, ji = 4194304;
function No(e) {
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
function $l(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = No(s) : (i &= l, i !== 0 && (r = No(i)));
  } else l = n & ~o, l !== 0 ? r = No(l) : i !== 0 && (r = No(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Kt(t), o = 1 << n, r |= e[n], t &= ~o;
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
    var l = 31 - Kt(i), s = 1 << l, a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = TS(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function xu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Oh() {
  var e = Fi;
  return Fi <<= 1, !(Fi & 4194240) && (Fi = 64), e;
}
function ya(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Pi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Kt(t), e[t] = n;
}
function $S(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Kt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Lc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Kt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var se = 0;
function Ih(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Nh, Fc, zh, Lh, Fh, Su = !1, Ai = [], zn = null, Ln = null, Fn = null, ri = /* @__PURE__ */ new Map(), oi = /* @__PURE__ */ new Map(), $n = [], MS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Pf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zn = null;
      break;
    case "dragenter":
    case "dragleave":
      Ln = null;
      break;
    case "mouseover":
    case "mouseout":
      Fn = null;
      break;
    case "pointerover":
    case "pointerout":
      ri.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oi.delete(t.pointerId);
  }
}
function wo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ti(t), t !== null && Fc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function OS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return zn = wo(zn, e, t, n, r, o), !0;
    case "dragenter":
      return Ln = wo(Ln, e, t, n, r, o), !0;
    case "mouseover":
      return Fn = wo(Fn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return ri.set(i, wo(ri.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, oi.set(i, wo(oi.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function jh(e) {
  var t = tr(e.target);
  if (t !== null) {
    var n = gr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ph(n), t !== null) {
          e.blockedOn = t, Fh(e.priority, function() {
            zh(n);
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
function ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Cu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      hu = r, n.target.dispatchEvent(r), hu = null;
    } else return t = Ti(n), t !== null && Fc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Rf(e, t, n) {
  ul(e) && n.delete(t);
}
function IS() {
  Su = !1, zn !== null && ul(zn) && (zn = null), Ln !== null && ul(Ln) && (Ln = null), Fn !== null && ul(Fn) && (Fn = null), ri.forEach(Rf), oi.forEach(Rf);
}
function ko(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Su || (Su = !0, St.unstable_scheduleCallback(St.unstable_NormalPriority, IS)));
}
function ii(e) {
  function t(o) {
    return ko(o, e);
  }
  if (0 < Ai.length) {
    ko(Ai[0], e);
    for (var n = 1; n < Ai.length; n++) {
      var r = Ai[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (zn !== null && ko(zn, e), Ln !== null && ko(Ln, e), Fn !== null && ko(Fn, e), ri.forEach(t), oi.forEach(t), n = 0; n < $n.length; n++) r = $n[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $n.length && (n = $n[0], n.blockedOn === null); ) jh(n), n.blockedOn === null && $n.shift();
}
var Hr = kn.ReactCurrentBatchConfig, Ml = !0;
function NS(e, t, n, r) {
  var o = se, i = Hr.transition;
  Hr.transition = null;
  try {
    se = 1, jc(e, t, n, r);
  } finally {
    se = o, Hr.transition = i;
  }
}
function zS(e, t, n, r) {
  var o = se, i = Hr.transition;
  Hr.transition = null;
  try {
    se = 4, jc(e, t, n, r);
  } finally {
    se = o, Hr.transition = i;
  }
}
function jc(e, t, n, r) {
  if (Ml) {
    var o = Cu(e, t, n, r);
    if (o === null) Ta(e, t, r, Ol, n), Pf(e, r);
    else if (OS(o, e, t, n, r)) r.stopPropagation();
    else if (Pf(e, r), t & 4 && -1 < MS.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ti(o);
        if (i !== null && Nh(i), i = Cu(e, t, n, r), i === null && Ta(e, t, r, Ol, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ta(e, t, r, null, n);
  }
}
var Ol = null;
function Cu(e, t, n, r) {
  if (Ol = null, e = Nc(r), e = tr(e), e !== null) if (t = gr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ph(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ol = e, null;
}
function Ah(e) {
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
      switch (wS()) {
        case zc:
          return 1;
        case $h:
          return 4;
        case _l:
        case kS:
          return 16;
        case Mh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var In = null, Ac = null, cl = null;
function Bh() {
  if (cl) return cl;
  var e, t = Ac, n = t.length, r, o = "value" in In ? In.value : In.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return cl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function dl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Bi() {
  return !0;
}
function Tf() {
  return !1;
}
function kt(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Bi : Tf, this.isPropagationStopped = Tf, this;
  }
  return Re(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Bi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Bi);
  }, persist: function() {
  }, isPersistent: Bi }), t;
}
var fo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Bc = kt(fo), Ri = Re({}, fo, { view: 0, detail: 0 }), LS = kt(Ri), xa, Sa, Eo, Fs = Re({}, Ri, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Dc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Eo && (Eo && e.type === "mousemove" ? (xa = e.screenX - Eo.screenX, Sa = e.screenY - Eo.screenY) : Sa = xa = 0, Eo = e), xa);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Sa;
} }), _f = kt(Fs), FS = Re({}, Fs, { dataTransfer: 0 }), jS = kt(FS), AS = Re({}, Ri, { relatedTarget: 0 }), Ca = kt(AS), BS = Re({}, fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), DS = kt(BS), WS = Re({}, fo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), US = kt(WS), HS = Re({}, fo, { data: 0 }), $f = kt(HS), VS = {
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
}, KS = {
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
}, GS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function QS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = GS[e]) ? !!t[e] : !1;
}
function Dc() {
  return QS;
}
var YS = Re({}, Ri, { key: function(e) {
  if (e.key) {
    var t = VS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = dl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? KS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Dc, charCode: function(e) {
  return e.type === "keypress" ? dl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? dl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), XS = kt(YS), qS = Re({}, Fs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Mf = kt(qS), ZS = Re({}, Ri, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Dc }), JS = kt(ZS), eC = Re({}, fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tC = kt(eC), nC = Re({}, Fs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), rC = kt(nC), oC = [9, 13, 27, 32], Wc = xn && "CompositionEvent" in window, Bo = null;
xn && "documentMode" in document && (Bo = document.documentMode);
var iC = xn && "TextEvent" in window && !Bo, Dh = xn && (!Wc || Bo && 8 < Bo && 11 >= Bo), Of = " ", If = !1;
function Wh(e, t) {
  switch (e) {
    case "keyup":
      return oC.indexOf(t.keyCode) !== -1;
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
function Uh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var _r = !1;
function lC(e, t) {
  switch (e) {
    case "compositionend":
      return Uh(t);
    case "keypress":
      return t.which !== 32 ? null : (If = !0, Of);
    case "textInput":
      return e = t.data, e === Of && If ? null : e;
    default:
      return null;
  }
}
function sC(e, t) {
  if (_r) return e === "compositionend" || !Wc && Wh(e, t) ? (e = Bh(), cl = Ac = In = null, _r = !1, e) : null;
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
      return Dh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var aC = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Nf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!aC[e.type] : t === "textarea";
}
function Hh(e, t, n, r) {
  Ch(r), t = Il(t, "onChange"), 0 < t.length && (n = new Bc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Do = null, li = null;
function uC(e) {
  tg(e, 0);
}
function js(e) {
  var t = Or(e);
  if (mh(t)) return e;
}
function cC(e, t) {
  if (e === "change") return t;
}
var Vh = !1;
if (xn) {
  var wa;
  if (xn) {
    var ka = "oninput" in document;
    if (!ka) {
      var zf = document.createElement("div");
      zf.setAttribute("oninput", "return;"), ka = typeof zf.oninput == "function";
    }
    wa = ka;
  } else wa = !1;
  Vh = wa && (!document.documentMode || 9 < document.documentMode);
}
function Lf() {
  Do && (Do.detachEvent("onpropertychange", Kh), li = Do = null);
}
function Kh(e) {
  if (e.propertyName === "value" && js(li)) {
    var t = [];
    Hh(t, li, e, Nc(e)), bh(uC, t);
  }
}
function dC(e, t, n) {
  e === "focusin" ? (Lf(), Do = t, li = n, Do.attachEvent("onpropertychange", Kh)) : e === "focusout" && Lf();
}
function fC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return js(li);
}
function pC(e, t) {
  if (e === "click") return js(t);
}
function mC(e, t) {
  if (e === "input" || e === "change") return js(t);
}
function hC(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Qt = typeof Object.is == "function" ? Object.is : hC;
function si(e, t) {
  if (Qt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ru.call(t, o) || !Qt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ff(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function jf(e, t) {
  var n = Ff(e);
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
    n = Ff(n);
  }
}
function Gh(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Qh() {
  for (var e = window, t = Pl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Pl(e.document);
  }
  return t;
}
function Uc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function gC(e) {
  var t = Qh(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Gh(n.ownerDocument.documentElement, n)) {
    if (r !== null && Uc(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = jf(n, i);
        var l = jf(
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
var vC = xn && "documentMode" in document && 11 >= document.documentMode, $r = null, wu = null, Wo = null, ku = !1;
function Af(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ku || $r == null || $r !== Pl(r) || (r = $r, "selectionStart" in r && Uc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wo && si(Wo, r) || (Wo = r, r = Il(wu, "onSelect"), 0 < r.length && (t = new Bc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $r)));
}
function Di(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Mr = { animationend: Di("Animation", "AnimationEnd"), animationiteration: Di("Animation", "AnimationIteration"), animationstart: Di("Animation", "AnimationStart"), transitionend: Di("Transition", "TransitionEnd") }, Ea = {}, Yh = {};
xn && (Yh = document.createElement("div").style, "AnimationEvent" in window || (delete Mr.animationend.animation, delete Mr.animationiteration.animation, delete Mr.animationstart.animation), "TransitionEvent" in window || delete Mr.transitionend.transition);
function As(e) {
  if (Ea[e]) return Ea[e];
  if (!Mr[e]) return e;
  var t = Mr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yh) return Ea[e] = t[n];
  return e;
}
var Xh = As("animationend"), qh = As("animationiteration"), Zh = As("animationstart"), Jh = As("transitionend"), eg = /* @__PURE__ */ new Map(), Bf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Gn(e, t) {
  eg.set(e, t), hr(t, [e]);
}
for (var ba = 0; ba < Bf.length; ba++) {
  var Pa = Bf[ba], yC = Pa.toLowerCase(), xC = Pa[0].toUpperCase() + Pa.slice(1);
  Gn(yC, "on" + xC);
}
Gn(Xh, "onAnimationEnd");
Gn(qh, "onAnimationIteration");
Gn(Zh, "onAnimationStart");
Gn("dblclick", "onDoubleClick");
Gn("focusin", "onFocus");
Gn("focusout", "onBlur");
Gn(Jh, "onTransitionEnd");
Xr("onMouseEnter", ["mouseout", "mouseover"]);
Xr("onMouseLeave", ["mouseout", "mouseover"]);
Xr("onPointerEnter", ["pointerout", "pointerover"]);
Xr("onPointerLeave", ["pointerout", "pointerover"]);
hr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
hr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), SC = new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));
function Df(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, yS(r, t, void 0, e), e.currentTarget = null;
}
function tg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Df(o, s, u), i = a;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
        Df(o, s, u), i = a;
      }
    }
  }
  if (Tl) throw e = yu, Tl = !1, yu = null, e;
}
function ve(e, t) {
  var n = t[Tu];
  n === void 0 && (n = t[Tu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ng(t, e, 2, !1), n.add(r));
}
function Ra(e, t, n) {
  var r = 0;
  t && (r |= 4), ng(n, e, r, t);
}
var Wi = "_reactListening" + Math.random().toString(36).slice(2);
function ai(e) {
  if (!e[Wi]) {
    e[Wi] = !0, uh.forEach(function(n) {
      n !== "selectionchange" && (SC.has(n) || Ra(n, !1, e), Ra(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wi] || (t[Wi] = !0, Ra("selectionchange", !1, t));
  }
}
function ng(e, t, n, r) {
  switch (Ah(t)) {
    case 1:
      var o = NS;
      break;
    case 4:
      o = zS;
      break;
    default:
      o = jc;
  }
  n = o.bind(null, t, n, e), o = void 0, !vu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ta(e, t, n, r, o) {
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
        if (l = tr(s), l === null) return;
        if (a = l.tag, a === 5 || a === 6) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  bh(function() {
    var u = i, c = Nc(n), d = [];
    e: {
      var h = eg.get(e);
      if (h !== void 0) {
        var C = Bc, y = e;
        switch (e) {
          case "keypress":
            if (dl(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = XS;
            break;
          case "focusin":
            y = "focus", C = Ca;
            break;
          case "focusout":
            y = "blur", C = Ca;
            break;
          case "beforeblur":
          case "afterblur":
            C = Ca;
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
            C = _f;
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
            C = JS;
            break;
          case Xh:
          case qh:
          case Zh:
            C = DS;
            break;
          case Jh:
            C = tC;
            break;
          case "scroll":
            C = LS;
            break;
          case "wheel":
            C = rC;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = US;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = Mf;
        }
        var v = (t & 4) !== 0, P = !v && e === "scroll", p = v ? h !== null ? h + "Capture" : null : h;
        v = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var g = m.stateNode;
          if (m.tag === 5 && g !== null && (m = g, p !== null && (g = ni(f, p), g != null && v.push(ui(f, g, m)))), P) break;
          f = f.return;
        }
        0 < v.length && (h = new C(h, y, null, n, c), d.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", h && n !== hu && (y = n.relatedTarget || n.fromElement) && (tr(y) || y[Sn])) break e;
        if ((C || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, C ? (y = n.relatedTarget || n.toElement, C = u, y = y ? tr(y) : null, y !== null && (P = gr(y), y !== P || y.tag !== 5 && y.tag !== 6) && (y = null)) : (C = null, y = u), C !== y)) {
          if (v = _f, g = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (v = Mf, g = "onPointerLeave", p = "onPointerEnter", f = "pointer"), P = C == null ? h : Or(C), m = y == null ? h : Or(y), h = new v(g, f + "leave", C, n, c), h.target = P, h.relatedTarget = m, g = null, tr(c) === u && (v = new v(p, f + "enter", y, n, c), v.target = m, v.relatedTarget = P, g = v), P = g, C && y) t: {
            for (v = C, p = y, f = 0, m = v; m; m = kr(m)) f++;
            for (m = 0, g = p; g; g = kr(g)) m++;
            for (; 0 < f - m; ) v = kr(v), f--;
            for (; 0 < m - f; ) p = kr(p), m--;
            for (; f--; ) {
              if (v === p || p !== null && v === p.alternate) break t;
              v = kr(v), p = kr(p);
            }
            v = null;
          }
          else v = null;
          C !== null && Wf(d, h, C, v, !1), y !== null && P !== null && Wf(d, P, y, v, !0);
        }
      }
      e: {
        if (h = u ? Or(u) : window, C = h.nodeName && h.nodeName.toLowerCase(), C === "select" || C === "input" && h.type === "file") var E = cC;
        else if (Nf(h)) if (Vh) E = mC;
        else {
          E = fC;
          var k = dC;
        }
        else (C = h.nodeName) && C.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = pC);
        if (E && (E = E(e, u))) {
          Hh(d, E, n, c);
          break e;
        }
        k && k(e, h, u), e === "focusout" && (k = h._wrapperState) && k.controlled && h.type === "number" && cu(h, "number", h.value);
      }
      switch (k = u ? Or(u) : window, e) {
        case "focusin":
          (Nf(k) || k.contentEditable === "true") && ($r = k, wu = u, Wo = null);
          break;
        case "focusout":
          Wo = wu = $r = null;
          break;
        case "mousedown":
          ku = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ku = !1, Af(d, n, c);
          break;
        case "selectionchange":
          if (vC) break;
        case "keydown":
        case "keyup":
          Af(d, n, c);
      }
      var w;
      if (Wc) e: {
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
      else _r ? Wh(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (Dh && n.locale !== "ko" && (_r || R !== "onCompositionStart" ? R === "onCompositionEnd" && _r && (w = Bh()) : (In = c, Ac = "value" in In ? In.value : In.textContent, _r = !0)), k = Il(u, R), 0 < k.length && (R = new $f(R, e, null, n, c), d.push({ event: R, listeners: k }), w ? R.data = w : (w = Uh(n), w !== null && (R.data = w)))), (w = iC ? lC(e, n) : sC(e, n)) && (u = Il(u, "onBeforeInput"), 0 < u.length && (c = new $f("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = w));
    }
    tg(d, t);
  });
}
function ui(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ni(e, n), i != null && r.unshift(ui(e, i, o)), i = ni(e, t), i != null && r.push(ui(e, i, o))), e = e.return;
  }
  return r;
}
function kr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wf(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = ni(n, i), a != null && l.unshift(ui(n, a, s))) : o || (a = ni(n, i), a != null && l.push(ui(n, a, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var CC = /\r\n?/g, wC = /\u0000|\uFFFD/g;
function Uf(e) {
  return (typeof e == "string" ? e : "" + e).replace(CC, `
`).replace(wC, "");
}
function Ui(e, t, n) {
  if (t = Uf(t), Uf(e) !== t && n) throw Error($(425));
}
function Nl() {
}
var Eu = null, bu = null;
function Pu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ru = typeof setTimeout == "function" ? setTimeout : void 0, kC = typeof clearTimeout == "function" ? clearTimeout : void 0, Hf = typeof Promise == "function" ? Promise : void 0, EC = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hf < "u" ? function(e) {
  return Hf.resolve(null).then(e).catch(bC);
} : Ru;
function bC(e) {
  setTimeout(function() {
    throw e;
  });
}
function _a(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), ii(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ii(t);
}
function jn(e) {
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
function Vf(e) {
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
var po = Math.random().toString(36).slice(2), tn = "__reactFiber$" + po, ci = "__reactProps$" + po, Sn = "__reactContainer$" + po, Tu = "__reactEvents$" + po, PC = "__reactListeners$" + po, RC = "__reactHandles$" + po;
function tr(e) {
  var t = e[tn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Sn] || n[tn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Vf(e); e !== null; ) {
        if (n = e[tn]) return n;
        e = Vf(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ti(e) {
  return e = e[tn] || e[Sn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Or(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function Bs(e) {
  return e[ci] || null;
}
var _u = [], Ir = -1;
function Qn(e) {
  return { current: e };
}
function ye(e) {
  0 > Ir || (e.current = _u[Ir], _u[Ir] = null, Ir--);
}
function he(e, t) {
  Ir++, _u[Ir] = e.current, e.current = t;
}
var Vn = {}, et = Qn(Vn), ct = Qn(!1), cr = Vn;
function qr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function dt(e) {
  return e = e.childContextTypes, e != null;
}
function zl() {
  ye(ct), ye(et);
}
function Kf(e, t, n) {
  if (et.current !== Vn) throw Error($(168));
  he(et, t), he(ct, n);
}
function rg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error($(108, dS(e) || "Unknown", o));
  return Re({}, n, r);
}
function Ll(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vn, cr = et.current, he(et, e), he(ct, ct.current), !0;
}
function Gf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n ? (e = rg(e, t, cr), r.__reactInternalMemoizedMergedChildContext = e, ye(ct), ye(et), he(et, e)) : ye(ct), he(ct, n);
}
var mn = null, Ds = !1, $a = !1;
function og(e) {
  mn === null ? mn = [e] : mn.push(e);
}
function TC(e) {
  Ds = !0, og(e);
}
function Yn() {
  if (!$a && mn !== null) {
    $a = !0;
    var e = 0, t = se;
    try {
      var n = mn;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mn = null, Ds = !1;
    } catch (o) {
      throw mn !== null && (mn = mn.slice(e + 1)), _h(zc, Yn), o;
    } finally {
      se = t, $a = !1;
    }
  }
  return null;
}
var Nr = [], zr = 0, Fl = null, jl = 0, $t = [], Mt = 0, dr = null, gn = 1, vn = "";
function qn(e, t) {
  Nr[zr++] = jl, Nr[zr++] = Fl, Fl = e, jl = t;
}
function ig(e, t, n) {
  $t[Mt++] = gn, $t[Mt++] = vn, $t[Mt++] = dr, dr = e;
  var r = gn;
  e = vn;
  var o = 32 - Kt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Kt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, gn = 1 << 32 - Kt(t) + o | n << o | r, vn = i + e;
  } else gn = 1 << i | n << o | r, vn = e;
}
function Hc(e) {
  e.return !== null && (qn(e, 1), ig(e, 1, 0));
}
function Vc(e) {
  for (; e === Fl; ) Fl = Nr[--zr], Nr[zr] = null, jl = Nr[--zr], Nr[zr] = null;
  for (; e === dr; ) dr = $t[--Mt], $t[Mt] = null, vn = $t[--Mt], $t[Mt] = null, gn = $t[--Mt], $t[Mt] = null;
}
var xt = null, gt = null, we = !1, Ht = null;
function lg(e, t) {
  var n = Ot(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Qf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xt = e, gt = jn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xt = e, gt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dr !== null ? { id: gn, overflow: vn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ot(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xt = e, gt = null, !0) : !1;
    default:
      return !1;
  }
}
function $u(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mu(e) {
  if (we) {
    var t = gt;
    if (t) {
      var n = t;
      if (!Qf(e, t)) {
        if ($u(e)) throw Error($(418));
        t = jn(n.nextSibling);
        var r = xt;
        t && Qf(e, t) ? lg(r, n) : (e.flags = e.flags & -4097 | 2, we = !1, xt = e);
      }
    } else {
      if ($u(e)) throw Error($(418));
      e.flags = e.flags & -4097 | 2, we = !1, xt = e;
    }
  }
}
function Yf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  xt = e;
}
function Hi(e) {
  if (e !== xt) return !1;
  if (!we) return Yf(e), we = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Pu(e.type, e.memoizedProps)), t && (t = gt)) {
    if ($u(e)) throw sg(), Error($(418));
    for (; t; ) lg(e, t), t = jn(t.nextSibling);
  }
  if (Yf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              gt = jn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      gt = null;
    }
  } else gt = xt ? jn(e.stateNode.nextSibling) : null;
  return !0;
}
function sg() {
  for (var e = gt; e; ) e = jn(e.nextSibling);
}
function Zr() {
  gt = xt = null, we = !1;
}
function Kc(e) {
  Ht === null ? Ht = [e] : Ht.push(e);
}
var _C = kn.ReactCurrentBatchConfig;
function bo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function Vi(e, t) {
  throw e = Object.prototype.toString.call(t), Error($(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Xf(e) {
  var t = e._init;
  return t(e._payload);
}
function ag(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions;
      m === null ? (p.deletions = [f], p.flags |= 16) : m.push(f);
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
    return p = Wn(p, f), p.index = 0, p.sibling = null, p;
  }
  function i(p, f, m) {
    return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < f ? (p.flags |= 2, f) : m) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, f, m, g) {
    return f === null || f.tag !== 6 ? (f = Fa(m, p.mode, g), f.return = p, f) : (f = o(f, m), f.return = p, f);
  }
  function a(p, f, m, g) {
    var E = m.type;
    return E === Tr ? c(p, f, m.props.children, g, m.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Tn && Xf(E) === f.type) ? (g = o(f, m.props), g.ref = bo(p, f, m), g.return = p, g) : (g = yl(m.type, m.key, m.props, null, p.mode, g), g.ref = bo(p, f, m), g.return = p, g);
  }
  function u(p, f, m, g) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = ja(m, p.mode, g), f.return = p, f) : (f = o(f, m.children || []), f.return = p, f);
  }
  function c(p, f, m, g, E) {
    return f === null || f.tag !== 7 ? (f = lr(m, p.mode, g, E), f.return = p, f) : (f = o(f, m), f.return = p, f);
  }
  function d(p, f, m) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Fa("" + f, p.mode, m), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ni:
          return m = yl(f.type, f.key, f.props, null, p.mode, m), m.ref = bo(p, null, f), m.return = p, m;
        case Rr:
          return f = ja(f, p.mode, m), f.return = p, f;
        case Tn:
          var g = f._init;
          return d(p, g(f._payload), m);
      }
      if (Io(f) || So(f)) return f = lr(f, p.mode, m, null), f.return = p, f;
      Vi(p, f);
    }
    return null;
  }
  function h(p, f, m, g) {
    var E = f !== null ? f.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return E !== null ? null : s(p, f, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ni:
          return m.key === E ? a(p, f, m, g) : null;
        case Rr:
          return m.key === E ? u(p, f, m, g) : null;
        case Tn:
          return E = m._init, h(
            p,
            f,
            E(m._payload),
            g
          );
      }
      if (Io(m) || So(m)) return E !== null ? null : c(p, f, m, g, null);
      Vi(p, m);
    }
    return null;
  }
  function C(p, f, m, g, E) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return p = p.get(m) || null, s(f, p, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ni:
          return p = p.get(g.key === null ? m : g.key) || null, a(f, p, g, E);
        case Rr:
          return p = p.get(g.key === null ? m : g.key) || null, u(f, p, g, E);
        case Tn:
          var k = g._init;
          return C(p, f, m, k(g._payload), E);
      }
      if (Io(g) || So(g)) return p = p.get(m) || null, c(f, p, g, E, null);
      Vi(f, g);
    }
    return null;
  }
  function y(p, f, m, g) {
    for (var E = null, k = null, w = f, R = f = 0, M = null; w !== null && R < m.length; R++) {
      w.index > R ? (M = w, w = null) : M = w.sibling;
      var _ = h(p, w, m[R], g);
      if (_ === null) {
        w === null && (w = M);
        break;
      }
      e && w && _.alternate === null && t(p, w), f = i(_, f, R), k === null ? E = _ : k.sibling = _, k = _, w = M;
    }
    if (R === m.length) return n(p, w), we && qn(p, R), E;
    if (w === null) {
      for (; R < m.length; R++) w = d(p, m[R], g), w !== null && (f = i(w, f, R), k === null ? E = w : k.sibling = w, k = w);
      return we && qn(p, R), E;
    }
    for (w = r(p, w); R < m.length; R++) M = C(w, p, R, m[R], g), M !== null && (e && M.alternate !== null && w.delete(M.key === null ? R : M.key), f = i(M, f, R), k === null ? E = M : k.sibling = M, k = M);
    return e && w.forEach(function(A) {
      return t(p, A);
    }), we && qn(p, R), E;
  }
  function v(p, f, m, g) {
    var E = So(m);
    if (typeof E != "function") throw Error($(150));
    if (m = E.call(m), m == null) throw Error($(151));
    for (var k = E = null, w = f, R = f = 0, M = null, _ = m.next(); w !== null && !_.done; R++, _ = m.next()) {
      w.index > R ? (M = w, w = null) : M = w.sibling;
      var A = h(p, w, _.value, g);
      if (A === null) {
        w === null && (w = M);
        break;
      }
      e && w && A.alternate === null && t(p, w), f = i(A, f, R), k === null ? E = A : k.sibling = A, k = A, w = M;
    }
    if (_.done) return n(
      p,
      w
    ), we && qn(p, R), E;
    if (w === null) {
      for (; !_.done; R++, _ = m.next()) _ = d(p, _.value, g), _ !== null && (f = i(_, f, R), k === null ? E = _ : k.sibling = _, k = _);
      return we && qn(p, R), E;
    }
    for (w = r(p, w); !_.done; R++, _ = m.next()) _ = C(w, p, R, _.value, g), _ !== null && (e && _.alternate !== null && w.delete(_.key === null ? R : _.key), f = i(_, f, R), k === null ? E = _ : k.sibling = _, k = _);
    return e && w.forEach(function(I) {
      return t(p, I);
    }), we && qn(p, R), E;
  }
  function P(p, f, m, g) {
    if (typeof m == "object" && m !== null && m.type === Tr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ni:
          e: {
            for (var E = m.key, k = f; k !== null; ) {
              if (k.key === E) {
                if (E = m.type, E === Tr) {
                  if (k.tag === 7) {
                    n(p, k.sibling), f = o(k, m.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Tn && Xf(E) === k.type) {
                  n(p, k.sibling), f = o(k, m.props), f.ref = bo(p, k, m), f.return = p, p = f;
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            m.type === Tr ? (f = lr(m.props.children, p.mode, g, m.key), f.return = p, p = f) : (g = yl(m.type, m.key, m.props, null, p.mode, g), g.ref = bo(p, f, m), g.return = p, p = g);
          }
          return l(p);
        case Rr:
          e: {
            for (k = m.key; f !== null; ) {
              if (f.key === k) if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                n(p, f.sibling), f = o(f, m.children || []), f.return = p, p = f;
                break e;
              } else {
                n(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = ja(m, p.mode, g), f.return = p, p = f;
          }
          return l(p);
        case Tn:
          return k = m._init, P(p, f, k(m._payload), g);
      }
      if (Io(m)) return y(p, f, m, g);
      if (So(m)) return v(p, f, m, g);
      Vi(p, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(p, f.sibling), f = o(f, m), f.return = p, p = f) : (n(p, f), f = Fa(m, p.mode, g), f.return = p, p = f), l(p)) : n(p, f);
  }
  return P;
}
var Jr = ag(!0), ug = ag(!1), Al = Qn(null), Bl = null, Lr = null, Gc = null;
function Qc() {
  Gc = Lr = Bl = null;
}
function Yc(e) {
  var t = Al.current;
  ye(Al), e._currentValue = t;
}
function Ou(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Vr(e, t) {
  Bl = e, Gc = Lr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ut = !0), e.firstContext = null);
}
function Lt(e) {
  var t = e._currentValue;
  if (Gc !== e) if (e = { context: e, memoizedValue: t, next: null }, Lr === null) {
    if (Bl === null) throw Error($(308));
    Lr = e, Bl.dependencies = { lanes: 0, firstContext: e };
  } else Lr = Lr.next = e;
  return t;
}
var nr = null;
function Xc(e) {
  nr === null ? nr = [e] : nr.push(e);
}
function cg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Xc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Cn(e, r);
}
function Cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var _n = !1;
function qc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function dg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function yn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function An(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, J & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Cn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Xc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Cn(e, n);
}
function fl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lc(e, n);
  }
}
function qf(e, t) {
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
function Dl(e, t, n, r) {
  var o = e.updateQueue;
  _n = !1;
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
      var h = s.lane, C = s.eventTime;
      if ((r & h) === h) {
        c !== null && (c = c.next = {
          eventTime: C,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var y = e, v = s;
          switch (h = t, C = n, v.tag) {
            case 1:
              if (y = v.payload, typeof y == "function") {
                d = y.call(C, d, h);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = v.payload, h = typeof y == "function" ? y.call(C, d, h) : y, h == null) break e;
              d = Re({}, d, h);
              break e;
            case 2:
              _n = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [s] : h.push(s));
      } else C = { eventTime: C, lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = C, a = d) : c = c.next = C, l |= h;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        h = s, s = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
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
function Zf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error($(191, o));
      o.call(r);
    }
  }
}
var _i = {}, ln = Qn(_i), di = Qn(_i), fi = Qn(_i);
function rr(e) {
  if (e === _i) throw Error($(174));
  return e;
}
function Zc(e, t) {
  switch (he(fi, t), he(di, e), he(ln, _i), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = fu(t, e);
  }
  ye(ln), he(ln, t);
}
function eo() {
  ye(ln), ye(di), ye(fi);
}
function fg(e) {
  rr(fi.current);
  var t = rr(ln.current), n = fu(t, e.type);
  t !== n && (he(di, e), he(ln, n));
}
function Jc(e) {
  di.current === e && (ye(ln), ye(di));
}
var be = Qn(0);
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
var Ma = [];
function ed() {
  for (var e = 0; e < Ma.length; e++) Ma[e]._workInProgressVersionPrimary = null;
  Ma.length = 0;
}
var pl = kn.ReactCurrentDispatcher, Oa = kn.ReactCurrentBatchConfig, fr = 0, Pe = null, je = null, Be = null, Ul = !1, Uo = !1, pi = 0, $C = 0;
function Qe() {
  throw Error($(321));
}
function td(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Qt(e[n], t[n])) return !1;
  return !0;
}
function nd(e, t, n, r, o, i) {
  if (fr = i, Pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pl.current = e === null || e.memoizedState === null ? NC : zC, e = n(r, o), Uo) {
    i = 0;
    do {
      if (Uo = !1, pi = 0, 25 <= i) throw Error($(301));
      i += 1, Be = je = null, t.updateQueue = null, pl.current = LC, e = n(r, o);
    } while (Uo);
  }
  if (pl.current = Hl, t = je !== null && je.next !== null, fr = 0, Be = je = Pe = null, Ul = !1, t) throw Error($(300));
  return e;
}
function rd() {
  var e = pi !== 0;
  return pi = 0, e;
}
function Zt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Be === null ? Pe.memoizedState = Be = e : Be = Be.next = e, Be;
}
function Ft() {
  if (je === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = je.next;
  var t = Be === null ? Pe.memoizedState : Be.next;
  if (t !== null) Be = t, je = e;
  else {
    if (e === null) throw Error($(310));
    je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, Be === null ? Pe.memoizedState = Be = e : Be = Be.next = e;
  }
  return Be;
}
function mi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ia(e) {
  var t = Ft(), n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = je, o = r.baseQueue, i = n.pending;
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
        a === null ? (s = a = d, l = r) : a = a.next = d, Pe.lanes |= c, pr |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? l = r : a.next = s, Qt(r, t.memoizedState) || (ut = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Pe.lanes |= i, pr |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Na(e) {
  var t = Ft(), n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    Qt(i, t.memoizedState) || (ut = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function pg() {
}
function mg(e, t) {
  var n = Pe, r = Ft(), o = t(), i = !Qt(r.memoizedState, o);
  if (i && (r.memoizedState = o, ut = !0), r = r.queue, od(vg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Be !== null && Be.memoizedState.tag & 1) {
    if (n.flags |= 2048, hi(9, gg.bind(null, n, r, o, t), void 0, null), De === null) throw Error($(349));
    fr & 30 || hg(n, t, o);
  }
  return o;
}
function hg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function gg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, yg(t) && xg(e);
}
function vg(e, t, n) {
  return n(function() {
    yg(t) && xg(e);
  });
}
function yg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qt(e, n);
  } catch {
    return !0;
  }
}
function xg(e) {
  var t = Cn(e, 1);
  t !== null && Gt(t, e, 1, -1);
}
function Jf(e) {
  var t = Zt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: mi, lastRenderedState: e }, t.queue = e, e = e.dispatch = IC.bind(null, Pe, e), [t.memoizedState, e];
}
function hi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Sg() {
  return Ft().memoizedState;
}
function ml(e, t, n, r) {
  var o = Zt();
  Pe.flags |= e, o.memoizedState = hi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ws(e, t, n, r) {
  var o = Ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (je !== null) {
    var l = je.memoizedState;
    if (i = l.destroy, r !== null && td(r, l.deps)) {
      o.memoizedState = hi(t, n, i, r);
      return;
    }
  }
  Pe.flags |= e, o.memoizedState = hi(1 | t, n, i, r);
}
function ep(e, t) {
  return ml(8390656, 8, e, t);
}
function od(e, t) {
  return Ws(2048, 8, e, t);
}
function Cg(e, t) {
  return Ws(4, 2, e, t);
}
function wg(e, t) {
  return Ws(4, 4, e, t);
}
function kg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Eg(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ws(4, 4, kg.bind(null, t, e), n);
}
function id() {
}
function bg(e, t) {
  var n = Ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && td(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pg(e, t) {
  var n = Ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && td(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Rg(e, t, n) {
  return fr & 21 ? (Qt(n, t) || (n = Oh(), Pe.lanes |= n, pr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ut = !0), e.memoizedState = n);
}
function MC(e, t) {
  var n = se;
  se = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Oa.transition;
  Oa.transition = {};
  try {
    e(!1), t();
  } finally {
    se = n, Oa.transition = r;
  }
}
function Tg() {
  return Ft().memoizedState;
}
function OC(e, t, n) {
  var r = Dn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, _g(e)) $g(t, n);
  else if (n = cg(e, t, n, r), n !== null) {
    var o = rt();
    Gt(n, e, r, o), Mg(n, t, r);
  }
}
function IC(e, t, n) {
  var r = Dn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_g(e)) $g(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = s, Qt(s, l)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Xc(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = cg(e, t, o, r), n !== null && (o = rt(), Gt(n, e, r, o), Mg(n, t, r));
  }
}
function _g(e) {
  var t = e.alternate;
  return e === Pe || t !== null && t === Pe;
}
function $g(e, t) {
  Uo = Ul = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Mg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lc(e, n);
  }
}
var Hl = { readContext: Lt, useCallback: Qe, useContext: Qe, useEffect: Qe, useImperativeHandle: Qe, useInsertionEffect: Qe, useLayoutEffect: Qe, useMemo: Qe, useReducer: Qe, useRef: Qe, useState: Qe, useDebugValue: Qe, useDeferredValue: Qe, useTransition: Qe, useMutableSource: Qe, useSyncExternalStore: Qe, useId: Qe, unstable_isNewReconciler: !1 }, NC = { readContext: Lt, useCallback: function(e, t) {
  return Zt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Lt, useEffect: ep, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ml(
    4194308,
    4,
    kg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ml(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ml(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Zt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Zt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = OC.bind(null, Pe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Zt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Jf, useDebugValue: id, useDeferredValue: function(e) {
  return Zt().memoizedState = e;
}, useTransition: function() {
  var e = Jf(!1), t = e[0];
  return e = MC.bind(null, e[1]), Zt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Pe, o = Zt();
  if (we) {
    if (n === void 0) throw Error($(407));
    n = n();
  } else {
    if (n = t(), De === null) throw Error($(349));
    fr & 30 || hg(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, ep(vg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, hi(9, gg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Zt(), t = De.identifierPrefix;
  if (we) {
    var n = vn, r = gn;
    n = (r & ~(1 << 32 - Kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = pi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = $C++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, zC = {
  readContext: Lt,
  useCallback: bg,
  useContext: Lt,
  useEffect: od,
  useImperativeHandle: Eg,
  useInsertionEffect: Cg,
  useLayoutEffect: wg,
  useMemo: Pg,
  useReducer: Ia,
  useRef: Sg,
  useState: function() {
    return Ia(mi);
  },
  useDebugValue: id,
  useDeferredValue: function(e) {
    var t = Ft();
    return Rg(t, je.memoizedState, e);
  },
  useTransition: function() {
    var e = Ia(mi)[0], t = Ft().memoizedState;
    return [e, t];
  },
  useMutableSource: pg,
  useSyncExternalStore: mg,
  useId: Tg,
  unstable_isNewReconciler: !1
}, LC = { readContext: Lt, useCallback: bg, useContext: Lt, useEffect: od, useImperativeHandle: Eg, useInsertionEffect: Cg, useLayoutEffect: wg, useMemo: Pg, useReducer: Na, useRef: Sg, useState: function() {
  return Na(mi);
}, useDebugValue: id, useDeferredValue: function(e) {
  var t = Ft();
  return je === null ? t.memoizedState = e : Rg(t, je.memoizedState, e);
}, useTransition: function() {
  var e = Na(mi)[0], t = Ft().memoizedState;
  return [e, t];
}, useMutableSource: pg, useSyncExternalStore: mg, useId: Tg, unstable_isNewReconciler: !1 };
function Wt(e, t) {
  if (e && e.defaultProps) {
    t = Re({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Iu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Us = { isMounted: function(e) {
  return (e = e._reactInternals) ? gr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = rt(), o = Dn(e), i = yn(r, o);
  i.payload = t, n != null && (i.callback = n), t = An(e, i, o), t !== null && (Gt(t, e, o, r), fl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = rt(), o = Dn(e), i = yn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = An(e, i, o), t !== null && (Gt(t, e, o, r), fl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = rt(), r = Dn(e), o = yn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = An(e, o, r), t !== null && (Gt(t, e, r, n), fl(t, e, r));
} };
function tp(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !si(n, r) || !si(o, i) : !0;
}
function Og(e, t, n) {
  var r = !1, o = Vn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Lt(i) : (o = dt(t) ? cr : et.current, r = t.contextTypes, i = (r = r != null) ? qr(e, o) : Vn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Us, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function np(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Us.enqueueReplaceState(t, t.state, null);
}
function Nu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, qc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Lt(i) : (i = dt(t) ? cr : et.current, o.context = qr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Iu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Us.enqueueReplaceState(o, o.state, null), Dl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function to(e, t) {
  try {
    var n = "", r = t;
    do
      n += cS(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function za(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var FC = typeof WeakMap == "function" ? WeakMap : Map;
function Ig(e, t, n) {
  n = yn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Kl || (Kl = !0, Vu = r), zu(e, t);
  }, n;
}
function Ng(e, t, n) {
  n = yn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      zu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    zu(e, t), typeof r != "function" && (Bn === null ? Bn = /* @__PURE__ */ new Set([this]) : Bn.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function rp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new FC();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = qC.bind(null, e, t, n), t.then(e, e));
}
function op(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ip(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yn(-1, 1), t.tag = 2, An(n, t, 1))), n.lanes |= 1), e);
}
var jC = kn.ReactCurrentOwner, ut = !1;
function nt(e, t, n, r) {
  t.child = e === null ? ug(t, null, n, r) : Jr(t, e.child, n, r);
}
function lp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Vr(t, o), r = nd(e, t, n, r, i, o), n = rd(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wn(e, t, o)) : (we && n && Hc(t), t.flags |= 1, nt(e, t, r, o), t.child);
}
function sp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !pd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, zg(e, t, i, r, o)) : (e = yl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : si, n(l, r) && e.ref === t.ref) return wn(e, t, o);
  }
  return t.flags |= 1, e = Wn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function zg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (si(i, r) && e.ref === t.ref) if (ut = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (ut = !0);
    else return t.lanes = e.lanes, wn(e, t, o);
  }
  return Lu(e, t, n, r, o);
}
function Lg(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, he(jr, mt), mt |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, he(jr, mt), mt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, he(jr, mt), mt |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, he(jr, mt), mt |= r;
  return nt(e, t, o, n), t.child;
}
function Fg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Lu(e, t, n, r, o) {
  var i = dt(n) ? cr : et.current;
  return i = qr(t, i), Vr(t, o), n = nd(e, t, n, r, i, o), r = rd(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wn(e, t, o)) : (we && r && Hc(t), t.flags |= 1, nt(e, t, n, o), t.child);
}
function ap(e, t, n, r, o) {
  if (dt(n)) {
    var i = !0;
    Ll(t);
  } else i = !1;
  if (Vr(t, o), t.stateNode === null) hl(e, t), Og(t, n, r), Nu(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var a = l.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Lt(u) : (u = dt(n) ? cr : et.current, u = qr(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && np(t, l, r, u), _n = !1;
    var h = t.memoizedState;
    l.state = h, Dl(t, r, l, o), a = t.memoizedState, s !== r || h !== a || ct.current || _n ? (typeof c == "function" && (Iu(t, n, c, r), a = t.memoizedState), (s = _n || tp(t, n, s, r, h, a, u)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, dg(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Wt(t.type, s), l.props = u, d = t.pendingProps, h = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Lt(a) : (a = dt(n) ? cr : et.current, a = qr(t, a));
    var C = n.getDerivedStateFromProps;
    (c = typeof C == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || h !== a) && np(t, l, r, a), _n = !1, h = t.memoizedState, l.state = h, Dl(t, r, l, o);
    var y = t.memoizedState;
    s !== d || h !== y || ct.current || _n ? (typeof C == "function" && (Iu(t, n, C, r), y = t.memoizedState), (u = _n || tp(t, n, u, r, h, y, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Fu(e, t, n, r, i, o);
}
function Fu(e, t, n, r, o, i) {
  Fg(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Gf(t, n, !1), wn(e, t, i);
  r = t.stateNode, jC.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Jr(t, e.child, null, i), t.child = Jr(t, null, s, i)) : nt(e, t, s, i), t.memoizedState = r.state, o && Gf(t, n, !0), t.child;
}
function jg(e) {
  var t = e.stateNode;
  t.pendingContext ? Kf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Kf(e, t.context, !1), Zc(e, t.containerInfo);
}
function up(e, t, n, r, o) {
  return Zr(), Kc(o), t.flags |= 256, nt(e, t, n, r), t.child;
}
var ju = { dehydrated: null, treeContext: null, retryLane: 0 };
function Au(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ag(e, t, n) {
  var r = t.pendingProps, o = be.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), he(be, o & 1), e === null)
    return Mu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Ks(l, r, 0, null), e = lr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Au(n), t.memoizedState = ju, e) : ld(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return AC(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Wn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Wn(s, i) : (i = lr(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Au(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = ju, r;
  }
  return i = e.child, e = i.sibling, r = Wn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ld(e, t) {
  return t = Ks({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ki(e, t, n, r) {
  return r !== null && Kc(r), Jr(t, e.child, null, n), e = ld(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function AC(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = za(Error($(422))), Ki(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ks({ mode: "visible", children: r.children }, o, 0, null), i = lr(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Jr(t, e.child, null, l), t.child.memoizedState = Au(l), t.memoizedState = ju, i);
  if (!(t.mode & 1)) return Ki(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error($(419)), r = za(i, r, void 0), Ki(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, ut || s) {
    if (r = De, r !== null) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Cn(e, o), Gt(r, e, o, -1));
    }
    return fd(), r = za(Error($(421))), Ki(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ZC.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, gt = jn(o.nextSibling), xt = t, we = !0, Ht = null, e !== null && ($t[Mt++] = gn, $t[Mt++] = vn, $t[Mt++] = dr, gn = e.id, vn = e.overflow, dr = t), t = ld(t, r.children), t.flags |= 4096, t);
}
function cp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ou(e.return, t, n);
}
function La(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Bg(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (nt(e, t, r.children, n), r = be.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && cp(e, n, t);
      else if (e.tag === 19) cp(e, n, t);
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
  if (he(be, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Wl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), La(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Wl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      La(t, !0, n, null, i);
      break;
    case "together":
      La(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function hl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function wn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), pr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (e = t.child, n = Wn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Wn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function BC(e, t, n) {
  switch (t.tag) {
    case 3:
      jg(t), Zr();
      break;
    case 5:
      fg(t);
      break;
    case 1:
      dt(t.type) && Ll(t);
      break;
    case 4:
      Zc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      he(Al, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (he(be, be.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ag(e, t, n) : (he(be, be.current & 1), e = wn(e, t, n), e !== null ? e.sibling : null);
      he(be, be.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Bg(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), he(be, be.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Lg(e, t, n);
  }
  return wn(e, t, n);
}
var Dg, Bu, Wg, Ug;
Dg = function(e, t) {
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
Bu = function() {
};
Wg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, rr(ln.current);
    var i = null;
    switch (n) {
      case "input":
        o = au(e, o), r = au(e, r), i = [];
        break;
      case "select":
        o = Re({}, o, { value: void 0 }), r = Re({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = du(e, o), r = du(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Nl);
    }
    pu(n, r);
    var l;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var s = o[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ei.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ei.hasOwnProperty(u) ? (a != null && u === "onScroll" && ve("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ug = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Po(e, t) {
  if (!we) switch (e.tailMode) {
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
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function DC(e, t, n) {
  var r = t.pendingProps;
  switch (Vc(t), t.tag) {
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
      return Ye(t), null;
    case 1:
      return dt(t.type) && zl(), Ye(t), null;
    case 3:
      return r = t.stateNode, eo(), ye(ct), ye(et), ed(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Hi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ht !== null && (Qu(Ht), Ht = null))), Bu(e, t), Ye(t), null;
    case 5:
      Jc(t);
      var o = rr(fi.current);
      if (n = t.type, e !== null && t.stateNode != null) Wg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return Ye(t), null;
        }
        if (e = rr(ln.current), Hi(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[tn] = t, r[ci] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ve("cancel", r), ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ve("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < zo.length; o++) ve(zo[o], r);
              break;
            case "source":
              ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ve(
                "error",
                r
              ), ve("load", r);
              break;
            case "details":
              ve("toggle", r);
              break;
            case "input":
              xf(r, i), ve("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ve("invalid", r);
              break;
            case "textarea":
              Cf(r, i), ve("invalid", r);
          }
          pu(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Ui(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Ui(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : ei.hasOwnProperty(l) && s != null && l === "onScroll" && ve("scroll", r);
          }
          switch (n) {
            case "input":
              zi(r), Sf(r, i, !0);
              break;
            case "textarea":
              zi(r), wf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Nl);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[tn] = t, e[ci] = r, Dg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = mu(n, r), n) {
              case "dialog":
                ve("cancel", e), ve("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < zo.length; o++) ve(zo[o], e);
                o = r;
                break;
              case "source":
                ve("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ve(
                  "error",
                  e
                ), ve("load", e), o = r;
                break;
              case "details":
                ve("toggle", e), o = r;
                break;
              case "input":
                xf(e, r), o = au(e, r), ve("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Re({}, r, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                Cf(e, r), o = du(e, r), ve("invalid", e);
                break;
              default:
                o = r;
            }
            pu(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? Sh(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && yh(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ti(e, a) : typeof a == "number" && ti(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ei.hasOwnProperty(i) ? a != null && i === "onScroll" && ve("scroll", e) : a != null && $c(e, i, a, l));
            }
            switch (n) {
              case "input":
                zi(e), Sf(e, r, !1);
                break;
              case "textarea":
                zi(e), wf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Hn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Dr(e, !!r.multiple, i, !1) : r.defaultValue != null && Dr(
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
      return Ye(t), null;
    case 6:
      if (e && t.stateNode != null) Ug(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (n = rr(fi.current), rr(ln.current), Hi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[tn] = t, (i = r.nodeValue !== n) && (e = xt, e !== null)) switch (e.tag) {
            case 3:
              Ui(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ui(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[tn] = t, t.stateNode = r;
      }
      return Ye(t), null;
    case 13:
      if (ye(be), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (we && gt !== null && t.mode & 1 && !(t.flags & 128)) sg(), Zr(), t.flags |= 98560, i = !1;
        else if (i = Hi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error($(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error($(317));
            i[tn] = t;
          } else Zr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ye(t), i = !1;
        } else Ht !== null && (Qu(Ht), Ht = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || be.current & 1 ? Ae === 0 && (Ae = 3) : fd())), t.updateQueue !== null && (t.flags |= 4), Ye(t), null);
    case 4:
      return eo(), Bu(e, t), e === null && ai(t.stateNode.containerInfo), Ye(t), null;
    case 10:
      return Yc(t.type._context), Ye(t), null;
    case 17:
      return dt(t.type) && zl(), Ye(t), null;
    case 19:
      if (ye(be), i = t.memoizedState, i === null) return Ye(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Po(i, !1);
      else {
        if (Ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Wl(e), l !== null) {
            for (t.flags |= 128, Po(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return he(be, be.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Oe() > no && (t.flags |= 128, r = !0, Po(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Wl(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Po(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !we) return Ye(t), null;
        } else 2 * Oe() - i.renderingStartTime > no && n !== 1073741824 && (t.flags |= 128, r = !0, Po(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Oe(), t.sibling = null, n = be.current, he(be, r ? n & 1 | 2 : n & 1), t) : (Ye(t), null);
    case 22:
    case 23:
      return dd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? mt & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function WC(e, t) {
  switch (Vc(t), t.tag) {
    case 1:
      return dt(t.type) && zl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return eo(), ye(ct), ye(et), ed(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Jc(t), null;
    case 13:
      if (ye(be), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error($(340));
        Zr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(be), null;
    case 4:
      return eo(), null;
    case 10:
      return Yc(t.type._context), null;
    case 22:
    case 23:
      return dd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gi = !1, qe = !1, UC = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function Fr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    $e(e, t, r);
  }
  else n.current = null;
}
function Du(e, t, n) {
  try {
    n();
  } catch (r) {
    $e(e, t, r);
  }
}
var dp = !1;
function HC(e, t) {
  if (Eu = Ml, e = Qh(), Uc(e)) {
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
        var l = 0, s = -1, a = -1, u = 0, c = 0, d = e, h = null;
        t: for (; ; ) {
          for (var C; d !== n || o !== 0 && d.nodeType !== 3 || (s = l + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (C = d.firstChild) !== null; )
            h = d, d = C;
          for (; ; ) {
            if (d === e) break t;
            if (h === n && ++u === o && (s = l), h === i && ++c === r && (a = l), (C = d.nextSibling) !== null) break;
            d = h, h = d.parentNode;
          }
          d = C;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bu = { focusedElem: e, selectionRange: n }, Ml = !1, j = t; j !== null; ) if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
  else for (; j !== null; ) {
    t = j;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var v = y.memoizedProps, P = y.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Wt(t.type, v), P);
            p.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error($(163));
      }
    } catch (g) {
      $e(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, j = e;
      break;
    }
    j = t.return;
  }
  return y = dp, dp = !1, y;
}
function Ho(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Du(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Hs(e, t) {
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
function Wu(e) {
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
function Hg(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Hg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[tn], delete t[ci], delete t[Tu], delete t[PC], delete t[RC])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Vg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vg(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Uu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Nl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Uu(e, t, n), e = e.sibling; e !== null; ) Uu(e, t, n), e = e.sibling;
}
function Hu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Hu(e, t, n), e = e.sibling; e !== null; ) Hu(e, t, n), e = e.sibling;
}
var He = null, Ut = !1;
function Pn(e, t, n) {
  for (n = n.child; n !== null; ) Kg(e, t, n), n = n.sibling;
}
function Kg(e, t, n) {
  if (on && typeof on.onCommitFiberUnmount == "function") try {
    on.onCommitFiberUnmount(Ls, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      qe || Fr(n, t);
    case 6:
      var r = He, o = Ut;
      He = null, Pn(e, t, n), He = r, Ut = o, He !== null && (Ut ? (e = He, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : He.removeChild(n.stateNode));
      break;
    case 18:
      He !== null && (Ut ? (e = He, n = n.stateNode, e.nodeType === 8 ? _a(e.parentNode, n) : e.nodeType === 1 && _a(e, n), ii(e)) : _a(He, n.stateNode));
      break;
    case 4:
      r = He, o = Ut, He = n.stateNode.containerInfo, Ut = !0, Pn(e, t, n), He = r, Ut = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Du(n, t, l), o = o.next;
        } while (o !== r);
      }
      Pn(e, t, n);
      break;
    case 1:
      if (!qe && (Fr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        $e(n, t, s);
      }
      Pn(e, t, n);
      break;
    case 21:
      Pn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (qe = (r = qe) || n.memoizedState !== null, Pn(e, t, n), qe = r) : Pn(e, t, n);
      break;
    default:
      Pn(e, t, n);
  }
}
function pp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new UC()), t.forEach(function(r) {
      var o = JC.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Dt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            He = s.stateNode, Ut = !1;
            break e;
          case 3:
            He = s.stateNode.containerInfo, Ut = !0;
            break e;
          case 4:
            He = s.stateNode.containerInfo, Ut = !0;
            break e;
        }
        s = s.return;
      }
      if (He === null) throw Error($(160));
      Kg(i, l, o), He = null, Ut = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      $e(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Gg(t, e), t = t.sibling;
}
function Gg(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Dt(t, e), qt(e), r & 4) {
        try {
          Ho(3, e, e.return), Hs(3, e);
        } catch (v) {
          $e(e, e.return, v);
        }
        try {
          Ho(5, e, e.return);
        } catch (v) {
          $e(e, e.return, v);
        }
      }
      break;
    case 1:
      Dt(t, e), qt(e), r & 512 && n !== null && Fr(n, n.return);
      break;
    case 5:
      if (Dt(t, e), qt(e), r & 512 && n !== null && Fr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ti(o, "");
        } catch (v) {
          $e(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && hh(o, i), mu(s, l);
          var u = mu(s, i);
          for (l = 0; l < a.length; l += 2) {
            var c = a[l], d = a[l + 1];
            c === "style" ? Sh(o, d) : c === "dangerouslySetInnerHTML" ? yh(o, d) : c === "children" ? ti(o, d) : $c(o, c, d, u);
          }
          switch (s) {
            case "input":
              uu(o, i);
              break;
            case "textarea":
              gh(o, i);
              break;
            case "select":
              var h = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var C = i.value;
              C != null ? Dr(o, !!i.multiple, C, !1) : h !== !!i.multiple && (i.defaultValue != null ? Dr(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Dr(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[ci] = i;
        } catch (v) {
          $e(e, e.return, v);
        }
      }
      break;
    case 6:
      if (Dt(t, e), qt(e), r & 4) {
        if (e.stateNode === null) throw Error($(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          $e(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Dt(t, e), qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ii(t.containerInfo);
      } catch (v) {
        $e(e, e.return, v);
      }
      break;
    case 4:
      Dt(t, e), qt(e);
      break;
    case 13:
      Dt(t, e), qt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ud = Oe())), r & 4 && pp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (qe = (u = qe) || c, Dt(t, e), qe = u) : Dt(t, e), qt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (j = e, c = e.child; c !== null; ) {
          for (d = j = c; j !== null; ) {
            switch (h = j, C = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ho(4, h, h.return);
                break;
              case 1:
                Fr(h, h.return);
                var y = h.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    $e(r, n, v);
                  }
                }
                break;
              case 5:
                Fr(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  hp(d);
                  continue;
                }
            }
            C !== null ? (C.return = h, j = C) : hp(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = xh("display", l));
              } catch (v) {
                $e(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (v) {
              $e(e, e.return, v);
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
      Dt(t, e), qt(e), r & 4 && pp(e);
      break;
    case 21:
      break;
    default:
      Dt(
        t,
        e
      ), qt(e);
  }
}
function qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ti(o, ""), r.flags &= -33);
          var i = fp(e);
          Hu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = fp(e);
          Uu(e, s, l);
          break;
        default:
          throw Error($(161));
      }
    } catch (a) {
      $e(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function VC(e, t, n) {
  j = e, Qg(e);
}
function Qg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Gi;
      if (!l) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || qe;
        s = Gi;
        var u = qe;
        if (Gi = l, (qe = a) && !u) for (j = o; j !== null; ) l = j, a = l.child, l.tag === 22 && l.memoizedState !== null ? gp(o) : a !== null ? (a.return = l, j = a) : gp(o);
        for (; i !== null; ) j = i, Qg(i), i = i.sibling;
        j = o, Gi = s, qe = u;
      }
      mp(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, j = i) : mp(e);
  }
}
function mp(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            qe || Hs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !qe) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Wt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Zf(t, i, r);
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
              Zf(t, l, n);
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
                  d !== null && ii(d);
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
            throw Error($(163));
        }
        qe || t.flags & 512 && Wu(t);
      } catch (h) {
        $e(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function hp(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function gp(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hs(4, t);
          } catch (a) {
            $e(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              $e(t, o, a);
            }
          }
          var i = t.return;
          try {
            Wu(t);
          } catch (a) {
            $e(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Wu(t);
          } catch (a) {
            $e(t, l, a);
          }
      }
    } catch (a) {
      $e(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, j = s;
      break;
    }
    j = t.return;
  }
}
var KC = Math.ceil, Vl = kn.ReactCurrentDispatcher, sd = kn.ReactCurrentOwner, It = kn.ReactCurrentBatchConfig, J = 0, De = null, Le = null, Ke = 0, mt = 0, jr = Qn(0), Ae = 0, gi = null, pr = 0, Vs = 0, ad = 0, Vo = null, at = null, ud = 0, no = 1 / 0, pn = null, Kl = !1, Vu = null, Bn = null, Qi = !1, Nn = null, Gl = 0, Ko = 0, Ku = null, gl = -1, vl = 0;
function rt() {
  return J & 6 ? Oe() : gl !== -1 ? gl : gl = Oe();
}
function Dn(e) {
  return e.mode & 1 ? J & 2 && Ke !== 0 ? Ke & -Ke : _C.transition !== null ? (vl === 0 && (vl = Oh()), vl) : (e = se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ah(e.type)), e) : 1;
}
function Gt(e, t, n, r) {
  if (50 < Ko) throw Ko = 0, Ku = null, Error($(185));
  Pi(e, n, r), (!(J & 2) || e !== De) && (e === De && (!(J & 2) && (Vs |= n), Ae === 4 && Mn(e, Ke)), ft(e, r), n === 1 && J === 0 && !(t.mode & 1) && (no = Oe() + 500, Ds && Yn()));
}
function ft(e, t) {
  var n = e.callbackNode;
  _S(e, t);
  var r = $l(e, e === De ? Ke : 0);
  if (r === 0) n !== null && bf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && bf(n), t === 1) e.tag === 0 ? TC(vp.bind(null, e)) : og(vp.bind(null, e)), EC(function() {
      !(J & 6) && Yn();
    }), n = null;
    else {
      switch (Ih(r)) {
        case 1:
          n = zc;
          break;
        case 4:
          n = $h;
          break;
        case 16:
          n = _l;
          break;
        case 536870912:
          n = Mh;
          break;
        default:
          n = _l;
      }
      n = nv(n, Yg.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Yg(e, t) {
  if (gl = -1, vl = 0, J & 6) throw Error($(327));
  var n = e.callbackNode;
  if (Kr() && e.callbackNode !== n) return null;
  var r = $l(e, e === De ? Ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ql(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var i = qg();
    (De !== e || Ke !== t) && (pn = null, no = Oe() + 500, ir(e, t));
    do
      try {
        YC();
        break;
      } catch (s) {
        Xg(e, s);
      }
    while (!0);
    Qc(), Vl.current = i, J = o, Le !== null ? t = 0 : (De = null, Ke = 0, t = Ae);
  }
  if (t !== 0) {
    if (t === 2 && (o = xu(e), o !== 0 && (r = o, t = Gu(e, o))), t === 1) throw n = gi, ir(e, 0), Mn(e, r), ft(e, Oe()), n;
    if (t === 6) Mn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !GC(o) && (t = Ql(e, r), t === 2 && (i = xu(e), i !== 0 && (r = i, t = Gu(e, i))), t === 1)) throw n = gi, ir(e, 0), Mn(e, r), ft(e, Oe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          Zn(e, at, pn);
          break;
        case 3:
          if (Mn(e, r), (r & 130023424) === r && (t = ud + 500 - Oe(), 10 < t)) {
            if ($l(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              rt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ru(Zn.bind(null, e, at, pn), t);
            break;
          }
          Zn(e, at, pn);
          break;
        case 4:
          if (Mn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Kt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = Oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * KC(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ru(Zn.bind(null, e, at, pn), r);
            break;
          }
          Zn(e, at, pn);
          break;
        case 5:
          Zn(e, at, pn);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return ft(e, Oe()), e.callbackNode === n ? Yg.bind(null, e) : null;
}
function Gu(e, t) {
  var n = Vo;
  return e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256), e = Ql(e, t), e !== 2 && (t = at, at = n, t !== null && Qu(t)), e;
}
function Qu(e) {
  at === null ? at = e : at.push.apply(at, e);
}
function GC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Qt(i(), o)) return !1;
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
function Mn(e, t) {
  for (t &= ~ad, t &= ~Vs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function vp(e) {
  if (J & 6) throw Error($(327));
  Kr();
  var t = $l(e, 0);
  if (!(t & 1)) return ft(e, Oe()), null;
  var n = Ql(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xu(e);
    r !== 0 && (t = r, n = Gu(e, r));
  }
  if (n === 1) throw n = gi, ir(e, 0), Mn(e, t), ft(e, Oe()), n;
  if (n === 6) throw Error($(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zn(e, at, pn), ft(e, Oe()), null;
}
function cd(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    J = n, J === 0 && (no = Oe() + 500, Ds && Yn());
  }
}
function mr(e) {
  Nn !== null && Nn.tag === 0 && !(J & 6) && Kr();
  var t = J;
  J |= 1;
  var n = It.transition, r = se;
  try {
    if (It.transition = null, se = 1, e) return e();
  } finally {
    se = r, It.transition = n, J = t, !(J & 6) && Yn();
  }
}
function dd() {
  mt = jr.current, ye(jr);
}
function ir(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, kC(n)), Le !== null) for (n = Le.return; n !== null; ) {
    var r = n;
    switch (Vc(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && zl();
        break;
      case 3:
        eo(), ye(ct), ye(et), ed();
        break;
      case 5:
        Jc(r);
        break;
      case 4:
        eo();
        break;
      case 13:
        ye(be);
        break;
      case 19:
        ye(be);
        break;
      case 10:
        Yc(r.type._context);
        break;
      case 22:
      case 23:
        dd();
    }
    n = n.return;
  }
  if (De = e, Le = e = Wn(e.current, null), Ke = mt = t, Ae = 0, gi = null, ad = Vs = pr = 0, at = Vo = null, nr !== null) {
    for (t = 0; t < nr.length; t++) if (n = nr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    nr = null;
  }
  return e;
}
function Xg(e, t) {
  do {
    var n = Le;
    try {
      if (Qc(), pl.current = Hl, Ul) {
        for (var r = Pe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ul = !1;
      }
      if (fr = 0, Be = je = Pe = null, Uo = !1, pi = 0, sd.current = null, n === null || n.return === null) {
        Ae = 1, gi = t, Le = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, a = t;
        if (t = Ke, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var C = op(l);
          if (C !== null) {
            C.flags &= -257, ip(C, l, s, i, t), C.mode & 1 && rp(i, u, t), t = C, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              rp(i, u, t), fd();
              break e;
            }
            a = Error($(426));
          }
        } else if (we && s.mode & 1) {
          var P = op(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), ip(P, l, s, i, t), Kc(to(a, s));
            break e;
          }
        }
        i = a = to(a, s), Ae !== 4 && (Ae = 2), Vo === null ? Vo = [i] : Vo.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Ig(i, a, t);
              qf(i, p);
              break e;
            case 1:
              s = a;
              var f = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Bn === null || !Bn.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = Ng(i, s, t);
                qf(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Jg(n);
    } catch (E) {
      t = E, Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qg() {
  var e = Vl.current;
  return Vl.current = Hl, e === null ? Hl : e;
}
function fd() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4), De === null || !(pr & 268435455) && !(Vs & 268435455) || Mn(De, Ke);
}
function Ql(e, t) {
  var n = J;
  J |= 2;
  var r = qg();
  (De !== e || Ke !== t) && (pn = null, ir(e, t));
  do
    try {
      QC();
      break;
    } catch (o) {
      Xg(e, o);
    }
  while (!0);
  if (Qc(), J = n, Vl.current = r, Le !== null) throw Error($(261));
  return De = null, Ke = 0, Ae;
}
function QC() {
  for (; Le !== null; ) Zg(Le);
}
function YC() {
  for (; Le !== null && !SS(); ) Zg(Le);
}
function Zg(e) {
  var t = tv(e.alternate, e, mt);
  e.memoizedProps = e.pendingProps, t === null ? Jg(e) : Le = t, sd.current = null;
}
function Jg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = WC(n, t), n !== null) {
        n.flags &= 32767, Le = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ae = 6, Le = null;
        return;
      }
    } else if (n = DC(n, t, mt), n !== null) {
      Le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function Zn(e, t, n) {
  var r = se, o = It.transition;
  try {
    It.transition = null, se = 1, XC(e, t, n, r);
  } finally {
    It.transition = o, se = r;
  }
  return null;
}
function XC(e, t, n, r) {
  do
    Kr();
  while (Nn !== null);
  if (J & 6) throw Error($(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error($(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if ($S(e, i), e === De && (Le = De = null, Ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qi || (Qi = !0, nv(_l, function() {
    return Kr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = It.transition, It.transition = null;
    var l = se;
    se = 1;
    var s = J;
    J |= 4, sd.current = null, HC(e, n), Gg(n, e), gC(bu), Ml = !!Eu, bu = Eu = null, e.current = n, VC(n), CS(), J = s, se = l, It.transition = i;
  } else e.current = n;
  if (Qi && (Qi = !1, Nn = e, Gl = o), i = e.pendingLanes, i === 0 && (Bn = null), ES(n.stateNode), ft(e, Oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Kl) throw Kl = !1, e = Vu, Vu = null, e;
  return Gl & 1 && e.tag !== 0 && Kr(), i = e.pendingLanes, i & 1 ? e === Ku ? Ko++ : (Ko = 0, Ku = e) : Ko = 0, Yn(), null;
}
function Kr() {
  if (Nn !== null) {
    var e = Ih(Gl), t = It.transition, n = se;
    try {
      if (It.transition = null, se = 16 > e ? 16 : e, Nn === null) var r = !1;
      else {
        if (e = Nn, Nn = null, Gl = 0, J & 6) throw Error($(331));
        var o = J;
        for (J |= 4, j = e.current; j !== null; ) {
          var i = j, l = i.child;
          if (j.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ho(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, j = d;
                  else for (; j !== null; ) {
                    c = j;
                    var h = c.sibling, C = c.return;
                    if (Hg(c), c === u) {
                      j = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = C, j = h;
                      break;
                    }
                    j = C;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var P = v.sibling;
                    v.sibling = null, v = P;
                  } while (v !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, j = l;
          else e: for (; j !== null; ) {
            if (i = j, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ho(9, i, i.return);
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, j = p;
              break e;
            }
            j = i.return;
          }
        }
        var f = e.current;
        for (j = f; j !== null; ) {
          l = j;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) m.return = l, j = m;
          else e: for (l = f; j !== null; ) {
            if (s = j, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Hs(9, s);
              }
            } catch (E) {
              $e(s, s.return, E);
            }
            if (s === l) {
              j = null;
              break e;
            }
            var g = s.sibling;
            if (g !== null) {
              g.return = s.return, j = g;
              break e;
            }
            j = s.return;
          }
        }
        if (J = o, Yn(), on && typeof on.onPostCommitFiberRoot == "function") try {
          on.onPostCommitFiberRoot(Ls, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      se = n, It.transition = t;
    }
  }
  return !1;
}
function yp(e, t, n) {
  t = to(n, t), t = Ig(e, t, 1), e = An(e, t, 1), t = rt(), e !== null && (Pi(e, 1, t), ft(e, t));
}
function $e(e, t, n) {
  if (e.tag === 3) yp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      yp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bn === null || !Bn.has(r))) {
        e = to(n, e), e = Ng(t, e, 1), t = An(t, e, 1), e = rt(), t !== null && (Pi(t, 1, e), ft(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function qC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = rt(), e.pingedLanes |= e.suspendedLanes & n, De === e && (Ke & n) === n && (Ae === 4 || Ae === 3 && (Ke & 130023424) === Ke && 500 > Oe() - ud ? ir(e, 0) : ad |= n), ft(e, t);
}
function ev(e, t) {
  t === 0 && (e.mode & 1 ? (t = ji, ji <<= 1, !(ji & 130023424) && (ji = 4194304)) : t = 1);
  var n = rt();
  e = Cn(e, t), e !== null && (Pi(e, t, n), ft(e, n));
}
function ZC(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ev(e, n);
}
function JC(e, t) {
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
      throw Error($(314));
  }
  r !== null && r.delete(t), ev(e, n);
}
var tv;
tv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ct.current) ut = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ut = !1, BC(e, t, n);
    ut = !!(e.flags & 131072);
  }
  else ut = !1, we && t.flags & 1048576 && ig(t, jl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      hl(e, t), e = t.pendingProps;
      var o = qr(t, et.current);
      Vr(t, n), o = nd(null, t, r, e, o, n);
      var i = rd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, dt(r) ? (i = !0, Ll(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, qc(t), o.updater = Us, t.stateNode = o, o._reactInternals = t, Nu(t, r, e, n), t = Fu(null, t, r, !0, i, n)) : (t.tag = 0, we && i && Hc(t), nt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (hl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = t2(r), e = Wt(r, e), o) {
          case 0:
            t = Lu(null, t, r, e, n);
            break e;
          case 1:
            t = ap(null, t, r, e, n);
            break e;
          case 11:
            t = lp(null, t, r, e, n);
            break e;
          case 14:
            t = sp(null, t, r, Wt(r.type, e), n);
            break e;
        }
        throw Error($(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Wt(r, o), Lu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Wt(r, o), ap(e, t, r, o, n);
    case 3:
      e: {
        if (jg(t), e === null) throw Error($(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, dg(e, t), Dl(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = to(Error($(423)), t), t = up(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = to(Error($(424)), t), t = up(e, t, r, n, o);
          break e;
        } else for (gt = jn(t.stateNode.containerInfo.firstChild), xt = t, we = !0, Ht = null, n = ug(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Zr(), r === o) {
            t = wn(e, t, n);
            break e;
          }
          nt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return fg(t), e === null && Mu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Pu(r, o) ? l = null : i !== null && Pu(r, i) && (t.flags |= 32), Fg(e, t), nt(e, t, l, n), t.child;
    case 6:
      return e === null && Mu(t), null;
    case 13:
      return Ag(e, t, n);
    case 4:
      return Zc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jr(t, null, r, n) : nt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Wt(r, o), lp(e, t, r, o, n);
    case 7:
      return nt(e, t, t.pendingProps, n), t.child;
    case 8:
      return nt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return nt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, he(Al, r._currentValue), r._currentValue = l, i !== null) if (Qt(i.value, l)) {
          if (i.children === o.children && !ct.current) {
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
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ou(
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
            if (l = i.return, l === null) throw Error($(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Ou(l, n, t), l = i.sibling;
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
        nt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Vr(t, n), o = Lt(o), r = r(o), t.flags |= 1, nt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Wt(r, t.pendingProps), o = Wt(r.type, o), sp(e, t, r, o, n);
    case 15:
      return zg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Wt(r, o), hl(e, t), t.tag = 1, dt(r) ? (e = !0, Ll(t)) : e = !1, Vr(t, n), Og(t, r, o), Nu(t, r, o, n), Fu(null, t, r, !0, e, n);
    case 19:
      return Bg(e, t, n);
    case 22:
      return Lg(e, t, n);
  }
  throw Error($(156, t.tag));
};
function nv(e, t) {
  return _h(e, t);
}
function e2(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ot(e, t, n, r) {
  return new e2(e, t, n, r);
}
function pd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function t2(e) {
  if (typeof e == "function") return pd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Oc) return 11;
    if (e === Ic) return 14;
  }
  return 2;
}
function Wn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ot(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function yl(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") pd(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Tr:
      return lr(n.children, o, i, t);
    case Mc:
      l = 8, o |= 8;
      break;
    case ou:
      return e = Ot(12, n, t, o | 2), e.elementType = ou, e.lanes = i, e;
    case iu:
      return e = Ot(13, n, t, o), e.elementType = iu, e.lanes = i, e;
    case lu:
      return e = Ot(19, n, t, o), e.elementType = lu, e.lanes = i, e;
    case fh:
      return Ks(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ch:
          l = 10;
          break e;
        case dh:
          l = 9;
          break e;
        case Oc:
          l = 11;
          break e;
        case Ic:
          l = 14;
          break e;
        case Tn:
          l = 16, r = null;
          break e;
      }
      throw Error($(130, e == null ? e : typeof e, ""));
  }
  return t = Ot(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function lr(e, t, n, r) {
  return e = Ot(7, e, r, t), e.lanes = n, e;
}
function Ks(e, t, n, r) {
  return e = Ot(22, e, r, t), e.elementType = fh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Fa(e, t, n) {
  return e = Ot(6, e, null, t), e.lanes = n, e;
}
function ja(e, t, n) {
  return t = Ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function n2(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ya(0), this.expirationTimes = ya(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ya(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function md(e, t, n, r, o, i, l, s, a) {
  return e = new n2(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ot(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qc(i), e;
}
function r2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Rr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function rv(e) {
  if (!e) return Vn;
  e = e._reactInternals;
  e: {
    if (gr(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (dt(n)) return rg(e, n, t);
  }
  return t;
}
function ov(e, t, n, r, o, i, l, s, a) {
  return e = md(n, r, !0, e, o, i, l, s, a), e.context = rv(null), n = e.current, r = rt(), o = Dn(n), i = yn(r, o), i.callback = t ?? null, An(n, i, o), e.current.lanes = o, Pi(e, o, r), ft(e, r), e;
}
function Gs(e, t, n, r) {
  var o = t.current, i = rt(), l = Dn(o);
  return n = rv(n), t.context === null ? t.context = n : t.pendingContext = n, t = yn(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = An(o, t, l), e !== null && (Gt(e, o, l, i), fl(e, o, l)), l;
}
function Yl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hd(e, t) {
  xp(e, t), (e = e.alternate) && xp(e, t);
}
function o2() {
  return null;
}
var iv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function gd(e) {
  this._internalRoot = e;
}
Qs.prototype.render = gd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  Gs(e, t, null, null);
};
Qs.prototype.unmount = gd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mr(function() {
      Gs(null, e, null, null);
    }), t[Sn] = null;
  }
};
function Qs(e) {
  this._internalRoot = e;
}
Qs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Lh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $n.length && t !== 0 && t < $n[n].priority; n++) ;
    $n.splice(n, 0, e), n === 0 && jh(e);
  }
};
function vd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ys(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Sp() {
}
function i2(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Yl(l);
        i.call(u);
      };
    }
    var l = ov(t, r, e, 0, null, !1, !1, "", Sp);
    return e._reactRootContainer = l, e[Sn] = l.current, ai(e.nodeType === 8 ? e.parentNode : e), mr(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Yl(a);
      s.call(u);
    };
  }
  var a = md(e, 0, !1, null, null, !1, !1, "", Sp);
  return e._reactRootContainer = a, e[Sn] = a.current, ai(e.nodeType === 8 ? e.parentNode : e), mr(function() {
    Gs(t, a, n, r);
  }), a;
}
function Xs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = Yl(l);
        s.call(a);
      };
    }
    Gs(t, l, e, o);
  } else l = i2(n, t, e, o, r);
  return Yl(l);
}
Nh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = No(t.pendingLanes);
        n !== 0 && (Lc(t, n | 1), ft(t, Oe()), !(J & 6) && (no = Oe() + 500, Yn()));
      }
      break;
    case 13:
      mr(function() {
        var r = Cn(e, 1);
        if (r !== null) {
          var o = rt();
          Gt(r, e, 1, o);
        }
      }), hd(e, 1);
  }
};
Fc = function(e) {
  if (e.tag === 13) {
    var t = Cn(e, 134217728);
    if (t !== null) {
      var n = rt();
      Gt(t, e, 134217728, n);
    }
    hd(e, 134217728);
  }
};
zh = function(e) {
  if (e.tag === 13) {
    var t = Dn(e), n = Cn(e, t);
    if (n !== null) {
      var r = rt();
      Gt(n, e, t, r);
    }
    hd(e, t);
  }
};
Lh = function() {
  return se;
};
Fh = function(e, t) {
  var n = se;
  try {
    return se = e, t();
  } finally {
    se = n;
  }
};
gu = function(e, t, n) {
  switch (t) {
    case "input":
      if (uu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Bs(r);
            if (!o) throw Error($(90));
            mh(r), uu(r, o);
          }
        }
      }
      break;
    case "textarea":
      gh(e, n);
      break;
    case "select":
      t = n.value, t != null && Dr(e, !!n.multiple, t, !1);
  }
};
kh = cd;
Eh = mr;
var l2 = { usingClientEntryPoint: !1, Events: [Ti, Or, Bs, Ch, wh, cd] }, Ro = { findFiberByHostInstance: tr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, s2 = { bundleType: Ro.bundleType, version: Ro.version, rendererPackageName: Ro.rendererPackageName, rendererConfig: Ro.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: kn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Rh(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ro.findFiberByHostInstance || o2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yi.isDisabled && Yi.supportsFiber) try {
    Ls = Yi.inject(s2), on = Yi;
  } catch {
  }
}
wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l2;
wt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vd(t)) throw Error($(200));
  return r2(e, t, null, n);
};
wt.createRoot = function(e, t) {
  if (!vd(e)) throw Error($(299));
  var n = !1, r = "", o = iv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = md(e, 1, !1, null, null, n, !1, r, o), e[Sn] = t.current, ai(e.nodeType === 8 ? e.parentNode : e), new gd(t);
};
wt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error($(188)) : (e = Object.keys(e).join(","), Error($(268, e)));
  return e = Rh(t), e = e === null ? null : e.stateNode, e;
};
wt.flushSync = function(e) {
  return mr(e);
};
wt.hydrate = function(e, t, n) {
  if (!Ys(t)) throw Error($(200));
  return Xs(null, e, t, !0, n);
};
wt.hydrateRoot = function(e, t, n) {
  if (!vd(e)) throw Error($(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = iv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = ov(t, null, e, 1, n ?? null, o, !1, i, l), e[Sn] = t.current, ai(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Qs(t);
};
wt.render = function(e, t, n) {
  if (!Ys(t)) throw Error($(200));
  return Xs(null, e, t, !1, n);
};
wt.unmountComponentAtNode = function(e) {
  if (!Ys(e)) throw Error($(40));
  return e._reactRootContainer ? (mr(function() {
    Xs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Sn] = null;
    });
  }), !0) : !1;
};
wt.unstable_batchedUpdates = cd;
wt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ys(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return Xs(e, t, n, !1, r);
};
wt.version = "18.3.1-next-f1338f8080-20240426";
function lv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lv);
    } catch (e) {
      console.error(e);
    }
}
lv(), lh.exports = wt;
var yd = lh.exports;
const Xi = /* @__PURE__ */ Qp(yd), Cp = {
  disabled: !1
}, Xl = Vt.createContext(null);
var a2 = function(t) {
  return t.scrollTop;
}, Lo = "unmounted", Jn = "exited", er = "entering", Pr = "entered", Yu = "exiting", an = /* @__PURE__ */ function(e) {
  ih(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = o, s = l && !l.isMounting ? r.enter : r.appear, a;
    return i.appearStatus = null, r.in ? s ? (a = Jn, i.appearStatus = er) : a = Pr : r.unmountOnExit || r.mountOnEnter ? a = Lo : a = Jn, i.state = {
      status: a
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var l = o.in;
    return l && i.status === Lo ? {
      status: Jn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== er && l !== Pr && (i = er) : (l === er || l === Pr) && (i = Yu);
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
      if (this.cancelNextCallback(), i === er) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : Xi.findDOMNode(this);
          l && a2(l);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Jn && this.setState({
      status: Lo
    });
  }, n.performEnter = function(o) {
    var i = this, l = this.props.enter, s = this.context ? this.context.isMounting : o, a = this.props.nodeRef ? [s] : [Xi.findDOMNode(this), s], u = a[0], c = a[1], d = this.getTimeouts(), h = s ? d.appear : d.enter;
    if (!o && !l || Cp.disabled) {
      this.safeSetState({
        status: Pr
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: er
    }, function() {
      i.props.onEntering(u, c), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: Pr
        }, function() {
          i.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, l = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Xi.findDOMNode(this);
    if (!i || Cp.disabled) {
      this.safeSetState({
        status: Jn
      }, function() {
        o.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Yu
    }, function() {
      o.props.onExiting(s), o.onTransitionEnd(l.exit, function() {
        o.safeSetState({
          status: Jn
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
    var l = this.props.nodeRef ? this.props.nodeRef.current : Xi.findDOMNode(this), s = o == null && !this.props.addEndListener;
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
    if (o === Lo)
      return null;
    var i = this.props, l = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = W(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Vt.createElement(Xl.Provider, {
        value: null
      }, typeof l == "function" ? l(o, s) : Vt.cloneElement(Vt.Children.only(l), s))
    );
  }, t;
}(Vt.Component);
an.contextType = Xl;
an.propTypes = {};
function Er() {
}
an.defaultProps = {
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
an.UNMOUNTED = Lo;
an.EXITED = Jn;
an.ENTERING = er;
an.ENTERED = Pr;
an.EXITING = Yu;
function u2(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xd(e, t) {
  var n = function(i) {
    return t && S.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && S.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function c2(e, t) {
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
function or(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function d2(e, t) {
  return xd(e.children, function(n) {
    return S.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: or(n, "appear", e),
      enter: or(n, "enter", e),
      exit: or(n, "exit", e)
    });
  });
}
function f2(e, t, n) {
  var r = xd(e.children), o = c2(t, r);
  return Object.keys(o).forEach(function(i) {
    var l = o[i];
    if (S.isValidElement(l)) {
      var s = i in t, a = i in r, u = t[i], c = S.isValidElement(u) && !u.props.in;
      a && (!s || c) ? o[i] = S.cloneElement(l, {
        onExited: n.bind(null, l),
        in: !0,
        exit: or(l, "exit", e),
        enter: or(l, "enter", e)
      }) : !a && s && !c ? o[i] = S.cloneElement(l, {
        in: !1
      }) : a && s && S.isValidElement(u) && (o[i] = S.cloneElement(l, {
        onExited: n.bind(null, l),
        in: u.props.in,
        exit: or(l, "exit", e),
        enter: or(l, "enter", e)
      }));
    }
  }), o;
}
var p2 = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, m2 = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Sd = /* @__PURE__ */ function(e) {
  ih(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = i.handleExited.bind(u2(i));
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
      children: a ? d2(o, s) : f2(o, l, s),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var l = xd(this.props.children);
    o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var a = x({}, s.children);
      return delete a[o.key], {
        children: a
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, l = o.childFactory, s = W(o, ["component", "childFactory"]), a = this.state.contextValue, u = p2(this.state.children).map(l);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Vt.createElement(Xl.Provider, {
      value: a
    }, u) : /* @__PURE__ */ Vt.createElement(Xl.Provider, {
      value: a
    }, /* @__PURE__ */ Vt.createElement(i, s, u));
  }, t;
}(Vt.Component);
Sd.propTypes = {};
Sd.defaultProps = m2;
const sv = (e) => e.scrollTop;
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
function h2(e) {
  return oe("MuiPaper", e);
}
ie("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const g2 = ["className", "component", "elevation", "square", "variant"], v2 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ue(i, h2, o);
}, y2 = U("div", {
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
  return x({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && x({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${On("#fff", hf(t.elevation))}, ${On("#fff", hf(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), qs = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: l = 1,
    square: s = !1,
    variant: a = "elevation"
  } = r, u = W(r, g2), c = x({}, r, {
    component: i,
    elevation: l,
    square: s,
    variant: a
  }), d = v2(c);
  return /* @__PURE__ */ b.jsx(y2, x({
    as: i,
    ownerState: c,
    className: Q(d.root, o),
    ref: n
  }, u));
}), x2 = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], S2 = ["component", "slots", "slotProps"], C2 = ["component"];
function wp(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    getSlotOwnerState: l,
    internalForwardedProps: s
  } = t, a = W(t, x2), {
    component: u,
    slots: c = {
      [e]: void 0
    },
    slotProps: d = {
      [e]: void 0
    }
  } = i, h = W(i, S2), C = c[e] || r, y = Hm(d[e], o), v = Um(x({
    className: n
  }, a, {
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: y
  })), {
    props: {
      component: P
    },
    internalRef: p
  } = v, f = W(v.props, C2), m = Je(p, y == null ? void 0 : y.ref, t.ref), g = l ? l(f) : {}, E = x({}, o, g), k = e === "root" ? P || u : P, w = Wm(C, x({}, e === "root" && !u && !c[e] && s, e !== "root" && !c[e] && s, f, k && {
    as: k
  }, {
    ref: m
  }), E);
  return Object.keys(g).forEach((R) => {
    delete w[R];
  }), [C, w];
}
function w2(e) {
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
  } = e, [c, d] = S.useState(!1), h = Q(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), C = {
    width: l,
    height: l,
    top: -(l / 2) + i,
    left: -(l / 2) + o
  }, y = Q(n.child, c && n.childLeaving, r && n.childPulsate);
  return !s && !c && d(!0), S.useEffect(() => {
    if (!s && a != null) {
      const v = setTimeout(a, u);
      return () => {
        clearTimeout(v);
      };
    }
  }, [a, s, u]), /* @__PURE__ */ b.jsx("span", {
    className: h,
    style: C,
    children: /* @__PURE__ */ b.jsx("span", {
      className: y
    })
  });
}
const Tt = ie("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), k2 = ["center", "classes", "className"];
let Zs = (e) => e, kp, Ep, bp, Pp;
const Xu = 550, E2 = 80, b2 = ps(kp || (kp = Zs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), P2 = ps(Ep || (Ep = Zs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), R2 = ps(bp || (bp = Zs`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), T2 = U("span", {
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
}), _2 = U(w2, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Pp || (Pp = Zs`
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
`), Tt.rippleVisible, b2, Xu, ({
  theme: e
}) => e.transitions.easing.easeInOut, Tt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Tt.child, Tt.childLeaving, P2, Xu, ({
  theme: e
}) => e.transitions.easing.easeInOut, Tt.childPulsate, R2, ({
  theme: e
}) => e.transitions.easing.easeInOut), $2 = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: l
  } = r, s = W(r, k2), [a, u] = S.useState([]), c = S.useRef(0), d = S.useRef(null);
  S.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [a]);
  const h = S.useRef(!1), C = wc(), y = S.useRef(null), v = S.useRef(null), P = S.useCallback((g) => {
    const {
      pulsate: E,
      rippleX: k,
      rippleY: w,
      rippleSize: R,
      cb: M
    } = g;
    u((_) => [..._, /* @__PURE__ */ b.jsx(_2, {
      classes: {
        ripple: Q(i.ripple, Tt.ripple),
        rippleVisible: Q(i.rippleVisible, Tt.rippleVisible),
        ripplePulsate: Q(i.ripplePulsate, Tt.ripplePulsate),
        child: Q(i.child, Tt.child),
        childLeaving: Q(i.childLeaving, Tt.childLeaving),
        childPulsate: Q(i.childPulsate, Tt.childPulsate)
      },
      timeout: Xu,
      pulsate: E,
      rippleX: k,
      rippleY: w,
      rippleSize: R
    }, c.current)]), c.current += 1, d.current = M;
  }, [i]), p = S.useCallback((g = {}, E = {}, k = () => {
  }) => {
    const {
      pulsate: w = !1,
      center: R = o || E.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = E;
    if ((g == null ? void 0 : g.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (g == null ? void 0 : g.type) === "touchstart" && (h.current = !0);
    const _ = M ? null : v.current, A = _ ? _.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let I, O, N;
    if (R || g === void 0 || g.clientX === 0 && g.clientY === 0 || !g.clientX && !g.touches)
      I = Math.round(A.width / 2), O = Math.round(A.height / 2);
    else {
      const {
        clientX: z,
        clientY: F
      } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
      I = Math.round(z - A.left), O = Math.round(F - A.top);
    }
    if (R)
      N = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3), N % 2 === 0 && (N += 1);
    else {
      const z = Math.max(Math.abs((_ ? _.clientWidth : 0) - I), I) * 2 + 2, F = Math.max(Math.abs((_ ? _.clientHeight : 0) - O), O) * 2 + 2;
      N = Math.sqrt(z ** 2 + F ** 2);
    }
    g != null && g.touches ? y.current === null && (y.current = () => {
      P({
        pulsate: w,
        rippleX: I,
        rippleY: O,
        rippleSize: N,
        cb: k
      });
    }, C.start(E2, () => {
      y.current && (y.current(), y.current = null);
    })) : P({
      pulsate: w,
      rippleX: I,
      rippleY: O,
      rippleSize: N,
      cb: k
    });
  }, [o, P, C]), f = S.useCallback(() => {
    p({}, {
      pulsate: !0
    });
  }, [p]), m = S.useCallback((g, E) => {
    if (C.clear(), (g == null ? void 0 : g.type) === "touchend" && y.current) {
      y.current(), y.current = null, C.start(0, () => {
        m(g, E);
      });
      return;
    }
    y.current = null, u((k) => k.length > 0 ? k.slice(1) : k), d.current = E;
  }, [C]);
  return S.useImperativeHandle(n, () => ({
    pulsate: f,
    start: p,
    stop: m
  }), [f, p, m]), /* @__PURE__ */ b.jsx(T2, x({
    className: Q(Tt.root, i.root, l),
    ref: v
  }, s, {
    children: /* @__PURE__ */ b.jsx(Sd, {
      component: null,
      exit: !0,
      children: a
    })
  }));
});
function M2(e) {
  return oe("MuiButtonBase", e);
}
const O2 = ie("MuiButtonBase", ["root", "disabled", "focusVisible"]), I2 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], N2 = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, l = ue({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, M2, o);
  return n && r && (l.root += ` ${r}`), l;
}, z2 = U("button", {
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
  [`&.${O2.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), av = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
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
    focusRipple: h = !1,
    LinkComponent: C = "a",
    onBlur: y,
    onClick: v,
    onContextMenu: P,
    onDragLeave: p,
    onFocus: f,
    onFocusVisible: m,
    onKeyDown: g,
    onKeyUp: E,
    onMouseDown: k,
    onMouseLeave: w,
    onMouseUp: R,
    onTouchEnd: M,
    onTouchMove: _,
    onTouchStart: A,
    tabIndex: I = 0,
    TouchRippleProps: O,
    touchRippleRef: N,
    type: z
  } = r, F = W(r, I2), B = S.useRef(null), T = S.useRef(null), L = Je(T, N), {
    isFocusVisibleRef: D,
    onFocus: q,
    onBlur: Y,
    ref: fe
  } = T1(), [G, ce] = S.useState(!1);
  u && G && ce(!1), S.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ce(!0), B.current.focus();
    }
  }), []);
  const [ee, Fe] = S.useState(!1);
  S.useEffect(() => {
    Fe(!0);
  }, []);
  const tt = ee && !c && !u;
  S.useEffect(() => {
    G && h && !c && ee && T.current.pulsate();
  }, [c, h, G, ee]);
  function Me(K, dn, go = d) {
    return nn((vo) => (dn && dn(vo), !go && T.current && T.current[K](vo), !0));
  }
  const lt = Me("start", k), re = Me("stop", P), ke = Me("stop", p), Z = Me("stop", R), de = Me("stop", (K) => {
    G && K.preventDefault(), w && w(K);
  }), xe = Me("start", A), En = Me("stop", M), Et = Me("stop", _), bt = Me("stop", (K) => {
    Y(K), D.current === !1 && ce(!1), y && y(K);
  }, !1), Bt = nn((K) => {
    B.current || (B.current = K.currentTarget), q(K), D.current === !0 && (ce(!0), m && m(K)), f && f(K);
  }), Pt = () => {
    const K = B.current;
    return a && a !== "button" && !(K.tagName === "A" && K.href);
  }, Ee = S.useRef(!1), un = nn((K) => {
    h && !Ee.current && G && T.current && K.key === " " && (Ee.current = !0, T.current.stop(K, () => {
      T.current.start(K);
    })), K.target === K.currentTarget && Pt() && K.key === " " && K.preventDefault(), g && g(K), K.target === K.currentTarget && Pt() && K.key === "Enter" && !u && (K.preventDefault(), v && v(K));
  }), st = nn((K) => {
    h && K.key === " " && T.current && G && !K.defaultPrevented && (Ee.current = !1, T.current.stop(K, () => {
      T.current.pulsate(K);
    })), E && E(K), v && K.target === K.currentTarget && Pt() && K.key === " " && !K.defaultPrevented && v(K);
  });
  let Se = a;
  Se === "button" && (F.href || F.to) && (Se = C);
  const Xt = {};
  Se === "button" ? (Xt.type = z === void 0 ? "button" : z, Xt.disabled = u) : (!F.href && !F.to && (Xt.role = "button"), u && (Xt["aria-disabled"] = u));
  const bn = Je(n, fe, B), cn = x({}, r, {
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: d,
    focusRipple: h,
    tabIndex: I,
    focusVisible: G
  }), me = N2(cn);
  return /* @__PURE__ */ b.jsxs(z2, x({
    as: Se,
    className: Q(me.root, s),
    ownerState: cn,
    onBlur: bt,
    onClick: v,
    onContextMenu: re,
    onFocus: Bt,
    onKeyDown: un,
    onKeyUp: st,
    onMouseDown: lt,
    onMouseLeave: de,
    onMouseUp: Z,
    onDragLeave: ke,
    onTouchEnd: En,
    onTouchMove: Et,
    onTouchStart: xe,
    ref: bn,
    tabIndex: u ? -1 : I,
    type: z
  }, Xt, F, {
    children: [l, tt ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ b.jsx($2, x({
        ref: L,
        center: i
      }, O))
    ) : null]
  }));
});
function L2(e) {
  return oe("MuiAlert", e);
}
const Rp = ie("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function F2(e) {
  return oe("MuiIconButton", e);
}
const j2 = ie("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), A2 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], B2 = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, l = {
    root: ["root", n && "disabled", r !== "default" && `color${V(r)}`, o && `edge${V(o)}`, `size${V(i)}`]
  };
  return ue(l, F2, t);
}, D2 = U(av, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${V(n.color)}`], n.edge && t[`edge${V(n.edge)}`], t[`size${V(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : On(e.palette.action.active, e.palette.action.hoverOpacity),
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
  return x({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && x({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": x({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : On(r.main, e.palette.action.hoverOpacity)
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
    [`&.${j2.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), W2 = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
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
  } = r, d = W(r, A2), h = x({}, r, {
    edge: o,
    color: s,
    disabled: a,
    disableFocusRipple: u,
    size: c
  }), C = B2(h);
  return /* @__PURE__ */ b.jsx(D2, x({
    className: Q(C.root, l),
    centerRipple: !0,
    focusRipple: !u,
    disabled: a,
    ref: n
  }, d, {
    ownerState: h,
    children: i
  }));
}), U2 = sn(/* @__PURE__ */ b.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), H2 = sn(/* @__PURE__ */ b.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), V2 = sn(/* @__PURE__ */ b.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), K2 = sn(/* @__PURE__ */ b.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), G2 = sn(/* @__PURE__ */ b.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Q2 = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], Y2 = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${V(n || r)}`, `${t}${V(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return ue(i, L2, o);
}, X2 = U(qs, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${V(n.color || n.severity)}`]];
  }
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? Za : Ja, n = e.palette.mode === "light" ? Ja : Za;
  return x({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(([, r]) => r.main && r.light).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${Rp.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(([, r]) => r.main && r.light).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${Rp.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(([, r]) => r.main && r.dark).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: x({
        fontWeight: e.typography.fontWeightMedium
      }, e.vars ? {
        color: e.vars.palette.Alert[`${r}FilledColor`],
        backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
      } : {
        backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
        color: e.palette.getContrastText(e.palette[r].main)
      })
    }))]
  });
}), q2 = U("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), Z2 = U("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), Tp = U("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), _p = {
  success: /* @__PURE__ */ b.jsx(U2, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ b.jsx(H2, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ b.jsx(V2, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ b.jsx(K2, {
    fontSize: "inherit"
  })
}, J2 = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: l,
    closeText: s = "Close",
    color: a,
    components: u = {},
    componentsProps: c = {},
    icon: d,
    iconMapping: h = _p,
    onClose: C,
    role: y = "alert",
    severity: v = "success",
    slotProps: P = {},
    slots: p = {},
    variant: f = "standard"
  } = r, m = W(r, Q2), g = x({}, r, {
    color: a,
    severity: v,
    variant: f,
    colorSeverity: a || v
  }), E = Y2(g), k = {
    slots: x({
      closeButton: u.CloseButton,
      closeIcon: u.CloseIcon
    }, p),
    slotProps: x({}, c, P)
  }, [w, R] = wp("closeButton", {
    elementType: W2,
    externalForwardedProps: k,
    ownerState: g
  }), [M, _] = wp("closeIcon", {
    elementType: G2,
    externalForwardedProps: k,
    ownerState: g
  });
  return /* @__PURE__ */ b.jsxs(X2, x({
    role: y,
    elevation: 0,
    ownerState: g,
    className: Q(E.root, l),
    ref: n
  }, m, {
    children: [d !== !1 ? /* @__PURE__ */ b.jsx(q2, {
      ownerState: g,
      className: E.icon,
      children: d || h[v] || _p[v]
    }) : null, /* @__PURE__ */ b.jsx(Z2, {
      ownerState: g,
      className: E.message,
      children: i
    }), o != null ? /* @__PURE__ */ b.jsx(Tp, {
      ownerState: g,
      className: E.action,
      children: o
    }) : null, o == null && C ? /* @__PURE__ */ b.jsx(Tp, {
      ownerState: g,
      className: E.action,
      children: /* @__PURE__ */ b.jsx(w, x({
        size: "small",
        "aria-label": s,
        title: s,
        color: "inherit",
        onClick: C
      }, R, {
        children: /* @__PURE__ */ b.jsx(M, x({
          fontSize: "small"
        }, _))
      }))
    }) : null]
  }));
});
function ew(e) {
  return oe("MuiTypography", e);
}
ie("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const tw = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], nw = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: l
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${V(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return ue(s, ew, l);
}, rw = U("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${V(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
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
})), $p = {
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
}, ow = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, iw = (e) => ow[e] || e, br = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiTypography"
  }), o = iw(r.color), i = ws(x({}, r, {
    color: o
  })), {
    align: l = "inherit",
    className: s,
    component: a,
    gutterBottom: u = !1,
    noWrap: c = !1,
    paragraph: d = !1,
    variant: h = "body1",
    variantMapping: C = $p
  } = i, y = W(i, tw), v = x({}, i, {
    align: l,
    color: o,
    className: s,
    component: a,
    gutterBottom: u,
    noWrap: c,
    paragraph: d,
    variant: h,
    variantMapping: C
  }), P = a || (d ? "p" : C[h] || $p[h]) || "span", p = nw(v);
  return /* @__PURE__ */ b.jsx(rw, x({
    as: P,
    ref: n,
    ownerState: v,
    className: Q(p.root, s)
  }, y));
});
function lw(e) {
  return typeof e == "function" ? e() : e;
}
const sw = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [l, s] = S.useState(null), a = Je(/* @__PURE__ */ S.isValidElement(r) ? ao(r) : null, n);
  if (Un(() => {
    i || s(lw(o) || document.body);
  }, [o, i]), Un(() => {
    if (l && !i)
      return Xa(n, l), () => {
        Xa(n, null);
      };
  }, [n, l, i]), i) {
    if (/* @__PURE__ */ S.isValidElement(r)) {
      const u = {
        ref: a
      };
      return /* @__PURE__ */ S.cloneElement(r, u);
    }
    return /* @__PURE__ */ b.jsx(S.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ b.jsx(S.Fragment, {
    children: l && /* @__PURE__ */ yd.createPortal(r, l)
  });
}), aw = ["onChange", "maxRows", "minRows", "style", "value"];
function qi(e) {
  return parseInt(e, 10) || 0;
}
const uw = {
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
function cw(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Mp(e) {
  return cw(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const dw = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: l,
    value: s
  } = t, a = W(t, aw), {
    current: u
  } = S.useRef(s != null), c = S.useRef(null), d = Je(n, c), h = S.useRef(null), C = S.useRef(null), y = S.useCallback(() => {
    const m = c.current, g = C.current;
    if (!m || !g)
      return;
    const k = ar(m).getComputedStyle(m);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    g.style.width = k.width, g.value = m.value || t.placeholder || "x", g.value.slice(-1) === `
` && (g.value += " ");
    const w = k.boxSizing, R = qi(k.paddingBottom) + qi(k.paddingTop), M = qi(k.borderBottomWidth) + qi(k.borderTopWidth), _ = g.scrollHeight;
    g.value = "x";
    const A = g.scrollHeight;
    let I = _;
    i && (I = Math.max(Number(i) * A, I)), o && (I = Math.min(Number(o) * A, I)), I = Math.max(I, A);
    const O = I + (w === "border-box" ? R + M : 0), N = Math.abs(I - _) <= 1;
    return {
      outerHeightStyle: O,
      overflowing: N
    };
  }, [o, i, t.placeholder]), v = nn(() => {
    const m = c.current, g = y();
    if (!m || !g || Mp(g))
      return !1;
    const E = g.outerHeightStyle;
    return h.current != null && h.current !== E;
  }), P = S.useCallback(() => {
    const m = c.current, g = y();
    if (!m || !g || Mp(g))
      return;
    const E = g.outerHeightStyle;
    h.current !== E && (h.current = E, m.style.height = `${E}px`), m.style.overflow = g.overflowing ? "hidden" : "";
  }, [y]), p = S.useRef(-1);
  Un(() => {
    const m = Bm(P), g = c == null ? void 0 : c.current;
    if (!g)
      return;
    const E = ar(g);
    E.addEventListener("resize", m);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      v() && (k.unobserve(g), cancelAnimationFrame(p.current), P(), p.current = requestAnimationFrame(() => {
        k.observe(g);
      }));
    }), k.observe(g)), () => {
      m.clear(), cancelAnimationFrame(p.current), E.removeEventListener("resize", m), k && k.disconnect();
    };
  }, [y, P, v]), Un(() => {
    P();
  });
  const f = (m) => {
    u || P(), r && r(m);
  };
  return /* @__PURE__ */ b.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ b.jsx("textarea", x({
      value: s,
      onChange: f,
      ref: d,
      rows: i,
      style: l
    }, a)), /* @__PURE__ */ b.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: C,
      tabIndex: -1,
      style: x({}, uw.shadow, l, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
function mo({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const Cd = /* @__PURE__ */ S.createContext(void 0);
function ho() {
  return S.useContext(Cd);
}
function uv(e) {
  return /* @__PURE__ */ b.jsx(Nm, x({}, e, {
    defaultTheme: Rc,
    themeId: Qr
  }));
}
function Op(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Zl(e, t = !1) {
  return e && (Op(e.value) && e.value !== "" || t && Op(e.defaultValue) && e.defaultValue !== "");
}
function fw(e) {
  return e.startAdornment;
}
function pw(e) {
  return oe("MuiInputBase", e);
}
const ro = ie("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), mw = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Js = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${V(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, ea = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, hw = (e) => {
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
    size: h,
    startAdornment: C,
    type: y
  } = e, v = {
    root: ["root", `color${V(n)}`, r && "disabled", o && "error", a && "fullWidth", l && "focused", s && "formControl", h && h !== "medium" && `size${V(h)}`, c && "multiline", C && "adornedStart", i && "adornedEnd", u && "hiddenLabel", d && "readOnly"],
    input: ["input", r && "disabled", y === "search" && "inputTypeSearch", c && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", C && "inputAdornedStart", i && "inputAdornedEnd", d && "readOnly"]
  };
  return ue(v, pw, t);
}, ta = U("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Js
})(({
  theme: e,
  ownerState: t
}) => x({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${ro.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && x({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), na = U("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: ea
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = x({
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
  return x({
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
    [`label[data-shrink=false] + .${ro.formControl} &`]: {
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
    [`&.${ro.disabled}`]: {
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
}), gw = /* @__PURE__ */ b.jsx(uv, {
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
}), wd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r;
  const o = le({
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
    disabled: h,
    disableInjectingGlobalStyles: C,
    endAdornment: y,
    fullWidth: v = !1,
    id: P,
    inputComponent: p = "input",
    inputProps: f = {},
    inputRef: m,
    maxRows: g,
    minRows: E,
    multiline: k = !1,
    name: w,
    onBlur: R,
    onChange: M,
    onClick: _,
    onFocus: A,
    onKeyDown: I,
    onKeyUp: O,
    placeholder: N,
    readOnly: z,
    renderSuffix: F,
    rows: B,
    slotProps: T = {},
    slots: L = {},
    startAdornment: D,
    type: q = "text",
    value: Y
  } = o, fe = W(o, mw), G = f.value != null ? f.value : Y, {
    current: ce
  } = S.useRef(G != null), ee = S.useRef(), Fe = S.useCallback((me) => {
  }, []), tt = Je(ee, m, f.ref, Fe), [Me, lt] = S.useState(!1), re = ho(), ke = mo({
    props: o,
    muiFormControl: re,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ke.focused = re ? re.focused : Me, S.useEffect(() => {
    !re && h && Me && (lt(!1), R && R());
  }, [re, h, Me, R]);
  const Z = re && re.onFilled, de = re && re.onEmpty, xe = S.useCallback((me) => {
    Zl(me) ? Z && Z() : de && de();
  }, [Z, de]);
  Un(() => {
    ce && xe({
      value: G
    });
  }, [G, xe, ce]);
  const En = (me) => {
    if (ke.disabled) {
      me.stopPropagation();
      return;
    }
    A && A(me), f.onFocus && f.onFocus(me), re && re.onFocus ? re.onFocus(me) : lt(!0);
  }, Et = (me) => {
    R && R(me), f.onBlur && f.onBlur(me), re && re.onBlur ? re.onBlur(me) : lt(!1);
  }, bt = (me, ...K) => {
    if (!ce) {
      const dn = me.target || ee.current;
      if (dn == null)
        throw new Error(sr(1));
      xe({
        value: dn.value
      });
    }
    f.onChange && f.onChange(me, ...K), M && M(me, ...K);
  };
  S.useEffect(() => {
    xe(ee.current);
  }, []);
  const Bt = (me) => {
    ee.current && me.currentTarget === me.target && ee.current.focus(), _ && _(me);
  };
  let Pt = p, Ee = f;
  k && Pt === "input" && (B ? Ee = x({
    type: void 0,
    minRows: B,
    maxRows: B
  }, Ee) : Ee = x({
    type: void 0,
    maxRows: g,
    minRows: E
  }, Ee), Pt = dw);
  const un = (me) => {
    xe(me.animationName === "mui-auto-fill-cancel" ? ee.current : {
      value: "x"
    });
  };
  S.useEffect(() => {
    re && re.setAdornedStart(!!D);
  }, [re, D]);
  const st = x({}, o, {
    color: ke.color || "primary",
    disabled: ke.disabled,
    endAdornment: y,
    error: ke.error,
    focused: ke.focused,
    formControl: re,
    fullWidth: v,
    hiddenLabel: ke.hiddenLabel,
    multiline: k,
    size: ke.size,
    startAdornment: D,
    type: q
  }), Se = hw(st), Xt = L.root || u.Root || ta, bn = T.root || c.root || {}, cn = L.input || u.Input || na;
  return Ee = x({}, Ee, (r = T.input) != null ? r : c.input), /* @__PURE__ */ b.jsxs(S.Fragment, {
    children: [!C && gw, /* @__PURE__ */ b.jsxs(Xt, x({}, bn, !wl(Xt) && {
      ownerState: x({}, st, bn.ownerState)
    }, {
      ref: n,
      onClick: Bt
    }, fe, {
      className: Q(Se.root, bn.className, a, z && "MuiInputBase-readOnly"),
      children: [D, /* @__PURE__ */ b.jsx(Cd.Provider, {
        value: null,
        children: /* @__PURE__ */ b.jsx(cn, x({
          ownerState: st,
          "aria-invalid": ke.error,
          "aria-describedby": i,
          autoComplete: l,
          autoFocus: s,
          defaultValue: d,
          disabled: ke.disabled,
          id: P,
          onAnimationStart: un,
          name: w,
          placeholder: N,
          readOnly: z,
          required: ke.required,
          rows: B,
          value: G,
          onKeyDown: I,
          onKeyUp: O,
          type: q
        }, Ee, !wl(cn) && {
          as: Pt,
          ownerState: x({}, st, Ee.ownerState)
        }, {
          ref: tt,
          className: Q(Se.input, Ee.className, z && "MuiInputBase-readOnly"),
          onBlur: Et,
          onChange: bt,
          onFocus: En
        }))
      }), y, F ? F(x({}, ke, {
        startAdornment: D
      })) : null]
    }))]
  });
});
function vw(e) {
  return oe("MuiInput", e);
}
const To = x({}, ro, ie("MuiInput", ["root", "underline", "input"]));
function yw(e) {
  return oe("MuiOutlinedInput", e);
}
const Rn = x({}, ro, ie("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
function xw(e) {
  return oe("MuiFilledInput", e);
}
const Xn = x({}, ro, ie("MuiFilledInput", ["root", "underline", "input"])), Sw = sn(/* @__PURE__ */ b.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Cw = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], ww = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, kw = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = zs(), o = {
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
    onEntering: h,
    onExit: C,
    onExited: y,
    onExiting: v,
    style: P,
    timeout: p = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: f = an
  } = t, m = W(t, Cw), g = S.useRef(null), E = Je(g, ao(s), n), k = (N) => (z) => {
    if (N) {
      const F = g.current;
      z === void 0 ? N(F) : N(F, z);
    }
  }, w = k(h), R = k((N, z) => {
    sv(N);
    const F = ql({
      style: P,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    N.style.webkitTransition = r.transitions.create("opacity", F), N.style.transition = r.transitions.create("opacity", F), c && c(N, z);
  }), M = k(d), _ = k(v), A = k((N) => {
    const z = ql({
      style: P,
      timeout: p,
      easing: a
    }, {
      mode: "exit"
    });
    N.style.webkitTransition = r.transitions.create("opacity", z), N.style.transition = r.transitions.create("opacity", z), C && C(N);
  }), I = k(y), O = (N) => {
    i && i(g.current, N);
  };
  return /* @__PURE__ */ b.jsx(f, x({
    appear: l,
    in: u,
    nodeRef: g,
    onEnter: R,
    onEntered: M,
    onEntering: w,
    onExit: A,
    onExited: I,
    onExiting: _,
    addEndListener: O,
    timeout: p
  }, m, {
    children: (N, z) => /* @__PURE__ */ S.cloneElement(s, x({
      style: x({
        opacity: 0,
        visibility: N === "exited" && !u ? "hidden" : void 0
      }, ww[N], P, s.props.style),
      ref: E
    }, z))
  }));
});
function Ew(e) {
  return oe("MuiBackdrop", e);
}
ie("MuiBackdrop", ["root", "invisible"]);
const bw = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Pw = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ue({
    root: ["root", n && "invisible"]
  }, Ew, t);
}, Rw = U("div", {
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
}) => x({
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
})), Tw = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i;
  const l = le({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: s,
    className: a,
    component: u = "div",
    components: c = {},
    componentsProps: d = {},
    invisible: h = !1,
    open: C,
    slotProps: y = {},
    slots: v = {},
    TransitionComponent: P = kw,
    transitionDuration: p
  } = l, f = W(l, bw), m = x({}, l, {
    component: u,
    invisible: h
  }), g = Pw(m), E = (r = y.root) != null ? r : d.root;
  return /* @__PURE__ */ b.jsx(P, x({
    in: C,
    timeout: p
  }, f, {
    children: /* @__PURE__ */ b.jsx(Rw, x({
      "aria-hidden": !0
    }, E, {
      as: (o = (i = v.root) != null ? i : c.Root) != null ? o : u,
      className: Q(g.root, a, E == null ? void 0 : E.className),
      ownerState: x({}, m, E == null ? void 0 : E.ownerState),
      classes: g,
      ref: n,
      children: s
    }))
  }));
}), _w = ie("MuiBox", ["root"]), $w = Pc(), Zi = X0({
  themeId: Qr,
  defaultTheme: $w,
  defaultClassName: _w.root,
  generateClassName: zm.generate
});
function Mw(e) {
  return oe("MuiButton", e);
}
const Ji = ie("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Ow = /* @__PURE__ */ S.createContext({}), Iw = /* @__PURE__ */ S.createContext(void 0), Nw = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], zw = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: l
  } = e, s = {
    root: ["root", i, `${i}${V(t)}`, `size${V(o)}`, `${i}Size${V(o)}`, `color${V(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${V(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${V(o)}`]
  }, a = ue(s, Mw, l);
  return x({}, l, a);
}, cv = (e) => x({}, e.size === "small" && {
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
}), Lw = U(av, {
  shouldForwardProp: (e) => Yt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${V(n.color)}`], t[`size${V(n.size)}`], t[`${n.variant}Size${V(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return x({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": x({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : On(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : On(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : On(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    "&:active": x({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Ji.focusVisible}`]: x({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Ji.disabled}`]: x({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${On(e.palette[t.color].main, 0.5)}`
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
  [`&.${Ji.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Ji.disabled}`]: {
    boxShadow: "none"
  }
}), Fw = U("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${V(n.size)}`]];
  }
})(({
  ownerState: e
}) => x({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, cv(e))), jw = U("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${V(n.size)}`]];
  }
})(({
  ownerState: e
}) => x({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, cv(e))), Aw = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = S.useContext(Ow), o = S.useContext(Iw), i = Jo(r, t), l = le({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: a = "primary",
    component: u = "button",
    className: c,
    disabled: d = !1,
    disableElevation: h = !1,
    disableFocusRipple: C = !1,
    endIcon: y,
    focusVisibleClassName: v,
    fullWidth: P = !1,
    size: p = "medium",
    startIcon: f,
    type: m,
    variant: g = "text"
  } = l, E = W(l, Nw), k = x({}, l, {
    color: a,
    component: u,
    disabled: d,
    disableElevation: h,
    disableFocusRipple: C,
    fullWidth: P,
    size: p,
    type: m,
    variant: g
  }), w = zw(k), R = f && /* @__PURE__ */ b.jsx(Fw, {
    className: w.startIcon,
    ownerState: k,
    children: f
  }), M = y && /* @__PURE__ */ b.jsx(jw, {
    className: w.endIcon,
    ownerState: k,
    children: y
  }), _ = o || "";
  return /* @__PURE__ */ b.jsxs(Lw, x({
    ownerState: k,
    className: Q(r.className, w.root, c, _),
    component: u,
    disabled: d,
    focusRipple: !C,
    focusVisibleClassName: Q(w.focusVisible, v),
    ref: n,
    type: m
  }, E, {
    classes: w,
    children: [R, s, M]
  }));
});
function Bw(e) {
  return oe("MuiCard", e);
}
ie("MuiCard", ["root"]);
const Dw = ["className", "raised"], Ww = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, Bw, t);
}, Uw = U(qs, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  overflow: "hidden"
})), Aa = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1
  } = r, l = W(r, Dw), s = x({}, r, {
    raised: i
  }), a = Ww(s);
  return /* @__PURE__ */ b.jsx(Uw, x({
    className: Q(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: s
  }, l));
});
function Hw(e) {
  return oe("MuiCardContent", e);
}
ie("MuiCardContent", ["root"]);
const Vw = ["className", "component"], Kw = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, Hw, t);
}, Gw = U("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
})), Ba = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div"
  } = r, l = W(r, Vw), s = x({}, r, {
    component: i
  }), a = Kw(s);
  return /* @__PURE__ */ b.jsx(Gw, x({
    as: i,
    className: Q(a.root, o),
    ownerState: s,
    ref: n
  }, l));
});
function Ip(e) {
  return e.substring(2).toLowerCase();
}
function Qw(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function Yw(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, l = S.useRef(!1), s = S.useRef(null), a = S.useRef(!1), u = S.useRef(!1);
  S.useEffect(() => (setTimeout(() => {
    a.current = !0;
  }, 0), () => {
    a.current = !1;
  }), []);
  const c = Je(ao(t), s), d = nn((y) => {
    const v = u.current;
    u.current = !1;
    const P = Ze(s.current);
    if (!a.current || !s.current || "clientX" in y && Qw(y, P))
      return;
    if (l.current) {
      l.current = !1;
      return;
    }
    let p;
    y.composedPath ? p = y.composedPath().indexOf(s.current) > -1 : p = !P.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      y.target
    ) || s.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      y.target
    ), !p && (n || !v) && o(y);
  }), h = (y) => (v) => {
    u.current = !0;
    const P = t.props[y];
    P && P(v);
  }, C = {
    ref: c
  };
  return i !== !1 && (C[i] = h(i)), S.useEffect(() => {
    if (i !== !1) {
      const y = Ip(i), v = Ze(s.current), P = () => {
        l.current = !0;
      };
      return v.addEventListener(y, d), v.addEventListener("touchmove", P), () => {
        v.removeEventListener(y, d), v.removeEventListener("touchmove", P);
      };
    }
  }, [d, i]), r !== !1 && (C[r] = h(r)), S.useEffect(() => {
    if (r !== !1) {
      const y = Ip(r), v = Ze(s.current);
      return v.addEventListener(y, d), () => {
        v.removeEventListener(y, d);
      };
    }
  }, [d, r]), /* @__PURE__ */ b.jsx(S.Fragment, {
    children: /* @__PURE__ */ S.cloneElement(t, C)
  });
}
const Xw = G1({
  createStyledComponent: U("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[`maxWidth${V(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => le({
    props: e,
    name: "MuiContainer"
  })
}), qw = (e, t) => x({
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
}), Zw = (e) => x({
  color: (e.vars || e).palette.text.primary
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Jw = (e, t = !1) => {
  var n;
  const r = {};
  t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([l, s]) => {
    var a;
    r[e.getColorSchemeSelector(l).replace(/\s*&/, "")] = {
      colorScheme: (a = s.palette) == null ? void 0 : a.mode
    };
  });
  let o = x({
    html: qw(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: x({
      margin: 0
    }, Zw(e), {
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
function ek(e) {
  const t = le({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ b.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ b.jsx(uv, {
      styles: (o) => Jw(o, r)
    }), n]
  });
}
function tk(e) {
  const t = Ze(e);
  return t.body === e ? ar(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Go(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Np(e) {
  return parseInt(ar(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function nk(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function zp(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (l) => {
    const s = i.indexOf(l) === -1, a = !nk(l);
    s && a && Go(l, o);
  });
}
function Da(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function rk(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (tk(r)) {
      const l = Dm(Ze(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Np(r) + l}px`;
      const s = Ze(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${Np(a) + l}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = Ze(r).body;
    else {
      const l = r.parentElement, s = ar(r);
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
function ok(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class ik {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Go(t.modalRef, !1);
    const o = ok(n);
    zp(n, t.mount, t.modalRef, o, !0);
    const i = Da(this.containers, (l) => l.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Da(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = rk(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Da(this.containers, (l) => l.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Go(t.modalRef, n), zp(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const l = i.modals[i.modals.length - 1];
      l.modalRef && Go(l.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const lk = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function sk(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function ak(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function uk(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || ak(e));
}
function ck(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(lk)).forEach((r, o) => {
    const i = sk(r);
    i === -1 || !uk(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function dk() {
  return !0;
}
function fk(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = ck,
    isEnabled: l = dk,
    open: s
  } = e, a = S.useRef(!1), u = S.useRef(null), c = S.useRef(null), d = S.useRef(null), h = S.useRef(null), C = S.useRef(!1), y = S.useRef(null), v = Je(ao(t), y), P = S.useRef(null);
  S.useEffect(() => {
    !s || !y.current || (C.current = !n);
  }, [n, s]), S.useEffect(() => {
    if (!s || !y.current)
      return;
    const m = Ze(y.current);
    return y.current.contains(m.activeElement) || (y.current.hasAttribute("tabIndex") || y.current.setAttribute("tabIndex", "-1"), C.current && y.current.focus()), () => {
      o || (d.current && d.current.focus && (a.current = !0, d.current.focus()), d.current = null);
    };
  }, [s]), S.useEffect(() => {
    if (!s || !y.current)
      return;
    const m = Ze(y.current), g = (w) => {
      P.current = w, !(r || !l() || w.key !== "Tab") && m.activeElement === y.current && w.shiftKey && (a.current = !0, c.current && c.current.focus());
    }, E = () => {
      const w = y.current;
      if (w === null)
        return;
      if (!m.hasFocus() || !l() || a.current) {
        a.current = !1;
        return;
      }
      if (w.contains(m.activeElement) || r && m.activeElement !== u.current && m.activeElement !== c.current)
        return;
      if (m.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!C.current)
        return;
      let R = [];
      if ((m.activeElement === u.current || m.activeElement === c.current) && (R = i(y.current)), R.length > 0) {
        var M, _;
        const A = !!((M = P.current) != null && M.shiftKey && ((_ = P.current) == null ? void 0 : _.key) === "Tab"), I = R[0], O = R[R.length - 1];
        typeof I != "string" && typeof O != "string" && (A ? O.focus() : I.focus());
      } else
        w.focus();
    };
    m.addEventListener("focusin", E), m.addEventListener("keydown", g, !0);
    const k = setInterval(() => {
      m.activeElement && m.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), m.removeEventListener("focusin", E), m.removeEventListener("keydown", g, !0);
    };
  }, [n, r, o, l, s, i]);
  const p = (m) => {
    d.current === null && (d.current = m.relatedTarget), C.current = !0, h.current = m.target;
    const g = t.props.onFocus;
    g && g(m);
  }, f = (m) => {
    d.current === null && (d.current = m.relatedTarget), C.current = !0;
  };
  return /* @__PURE__ */ b.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ b.jsx("div", {
      tabIndex: s ? 0 : -1,
      onFocus: f,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ S.cloneElement(t, {
      ref: v,
      onFocus: p
    }), /* @__PURE__ */ b.jsx("div", {
      tabIndex: s ? 0 : -1,
      onFocus: f,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function pk(e) {
  return typeof e == "function" ? e() : e;
}
function mk(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const hk = new ik();
function gk(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = hk,
    closeAfterTransition: i = !1,
    onTransitionEnter: l,
    onTransitionExited: s,
    children: a,
    onClose: u,
    open: c,
    rootRef: d
  } = e, h = S.useRef({}), C = S.useRef(null), y = S.useRef(null), v = Je(y, d), [P, p] = S.useState(!c), f = mk(a);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const g = () => Ze(C.current), E = () => (h.current.modalRef = y.current, h.current.mount = C.current, h.current), k = () => {
    o.mount(E(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, w = nn(() => {
    const F = pk(t) || g().body;
    o.add(E(), F), y.current && k();
  }), R = S.useCallback(() => o.isTopModal(E()), [o]), M = nn((F) => {
    C.current = F, F && (c && R() ? k() : y.current && Go(y.current, m));
  }), _ = S.useCallback(() => {
    o.remove(E(), m);
  }, [m, o]);
  S.useEffect(() => () => {
    _();
  }, [_]), S.useEffect(() => {
    c ? w() : (!f || !i) && _();
  }, [c, _, f, i, w]);
  const A = (F) => (B) => {
    var T;
    (T = F.onKeyDown) == null || T.call(F, B), !(B.key !== "Escape" || B.which === 229 || // Wait until IME is settled.
    !R()) && (n || (B.stopPropagation(), u && u(B, "escapeKeyDown")));
  }, I = (F) => (B) => {
    var T;
    (T = F.onClick) == null || T.call(F, B), B.target === B.currentTarget && u && u(B, "backdropClick");
  };
  return {
    getRootProps: (F = {}) => {
      const B = kl(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const T = x({}, B, F);
      return x({
        role: "presentation"
      }, T, {
        onKeyDown: A(T),
        ref: v
      });
    },
    getBackdropProps: (F = {}) => {
      const B = F;
      return x({
        "aria-hidden": !0
      }, B, {
        onClick: I(B),
        open: c
      });
    },
    getTransitionProps: () => {
      const F = () => {
        p(!1), l && l();
      }, B = () => {
        p(!0), s && s(), i && _();
      };
      return {
        onEnter: Zd(F, a == null ? void 0 : a.props.onEnter),
        onExited: Zd(B, a == null ? void 0 : a.props.onExited)
      };
    },
    rootRef: v,
    portalRef: M,
    isTopModal: R,
    exited: P,
    hasTransition: f
  };
}
function vk(e) {
  return oe("MuiModal", e);
}
ie("MuiModal", ["root", "hidden", "backdrop"]);
const yk = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], xk = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ue({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, vk, r);
}, Sk = U("div", {
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
}) => x({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Ck = U(Tw, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), wk = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i, l, s, a;
  const u = le({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: c = Ck,
    BackdropProps: d,
    className: h,
    closeAfterTransition: C = !1,
    children: y,
    container: v,
    component: P,
    components: p = {},
    componentsProps: f = {},
    disableAutoFocus: m = !1,
    disableEnforceFocus: g = !1,
    disableEscapeKeyDown: E = !1,
    disablePortal: k = !1,
    disableRestoreFocus: w = !1,
    disableScrollLock: R = !1,
    hideBackdrop: M = !1,
    keepMounted: _ = !1,
    onBackdropClick: A,
    open: I,
    slotProps: O,
    slots: N
    // eslint-disable-next-line react/prop-types
  } = u, z = W(u, yk), F = x({}, u, {
    closeAfterTransition: C,
    disableAutoFocus: m,
    disableEnforceFocus: g,
    disableEscapeKeyDown: E,
    disablePortal: k,
    disableRestoreFocus: w,
    disableScrollLock: R,
    hideBackdrop: M,
    keepMounted: _
  }), {
    getRootProps: B,
    getBackdropProps: T,
    getTransitionProps: L,
    portalRef: D,
    isTopModal: q,
    exited: Y,
    hasTransition: fe
  } = gk(x({}, F, {
    rootRef: n
  })), G = x({}, F, {
    exited: Y
  }), ce = xk(G), ee = {};
  if (y.props.tabIndex === void 0 && (ee.tabIndex = "-1"), fe) {
    const {
      onEnter: Z,
      onExited: de
    } = L();
    ee.onEnter = Z, ee.onExited = de;
  }
  const Fe = (r = (o = N == null ? void 0 : N.root) != null ? o : p.Root) != null ? r : Sk, tt = (i = (l = N == null ? void 0 : N.backdrop) != null ? l : p.Backdrop) != null ? i : c, Me = (s = O == null ? void 0 : O.root) != null ? s : f.root, lt = (a = O == null ? void 0 : O.backdrop) != null ? a : f.backdrop, re = ur({
    elementType: Fe,
    externalSlotProps: Me,
    externalForwardedProps: z,
    getSlotProps: B,
    additionalProps: {
      ref: n,
      as: P
    },
    ownerState: G,
    className: Q(h, Me == null ? void 0 : Me.className, ce == null ? void 0 : ce.root, !G.open && G.exited && (ce == null ? void 0 : ce.hidden))
  }), ke = ur({
    elementType: tt,
    externalSlotProps: lt,
    additionalProps: d,
    getSlotProps: (Z) => T(x({}, Z, {
      onClick: (de) => {
        A && A(de), Z != null && Z.onClick && Z.onClick(de);
      }
    })),
    className: Q(lt == null ? void 0 : lt.className, d == null ? void 0 : d.className, ce == null ? void 0 : ce.backdrop),
    ownerState: G
  });
  return !_ && !I && (!fe || Y) ? null : /* @__PURE__ */ b.jsx(sw, {
    ref: D,
    container: v,
    disablePortal: k,
    children: /* @__PURE__ */ b.jsxs(Fe, x({}, re, {
      children: [!M && c ? /* @__PURE__ */ b.jsx(tt, x({}, ke)) : null, /* @__PURE__ */ b.jsx(fk, {
        disableEnforceFocus: g,
        disableAutoFocus: m,
        disableRestoreFocus: w,
        isEnabled: q,
        open: I,
        children: /* @__PURE__ */ S.cloneElement(y, ee)
      })]
    }))
  });
}), kk = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Ek = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ue({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, xw, t);
  return x({}, t, o);
}, bk = U(ta, {
  shouldForwardProp: (e) => Yt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Js(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", l = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return x({
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
    [`&.${Xn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${Xn.disabled}`]: {
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
    [`&.${Xn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Xn.error}`]: {
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
    [`&:hover:not(.${Xn.disabled}, .${Xn.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Xn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && x({
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
}), Pk = U(na, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: ea
})(({
  theme: e,
  ownerState: t
}) => x({
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
})), kd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i, l;
  const s = le({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: a = {},
    componentsProps: u,
    fullWidth: c = !1,
    // declare here to prevent spreading to DOM
    inputComponent: d = "input",
    multiline: h = !1,
    slotProps: C,
    slots: y = {},
    type: v = "text"
  } = s, P = W(s, kk), p = x({}, s, {
    fullWidth: c,
    inputComponent: d,
    multiline: h,
    type: v
  }), f = Ek(s), m = {
    root: {
      ownerState: p
    },
    input: {
      ownerState: p
    }
  }, g = C ?? u ? yt(m, C ?? u) : m, E = (r = (o = y.root) != null ? o : a.Root) != null ? r : bk, k = (i = (l = y.input) != null ? l : a.Input) != null ? i : Pk;
  return /* @__PURE__ */ b.jsx(wd, x({
    slots: {
      root: E,
      input: k
    },
    componentsProps: g,
    fullWidth: c,
    inputComponent: d,
    multiline: h,
    ref: n,
    type: v
  }, P, {
    classes: f
  }));
});
kd.muiName = "Input";
function Rk(e) {
  return oe("MuiFormControl", e);
}
ie("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Tk = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], _k = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${V(n)}`, r && "fullWidth"]
  };
  return ue(o, Rk, t);
}, $k = U("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => x({}, t.root, t[`margin${V(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => x({
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
})), Mk = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
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
    hiddenLabel: h = !1,
    margin: C = "none",
    required: y = !1,
    size: v = "medium",
    variant: P = "outlined"
  } = r, p = W(r, Tk), f = x({}, r, {
    color: l,
    component: s,
    disabled: a,
    error: u,
    fullWidth: d,
    hiddenLabel: h,
    margin: C,
    required: y,
    size: v,
    variant: P
  }), m = _k(f), [g, E] = S.useState(() => {
    let O = !1;
    return o && S.Children.forEach(o, (N) => {
      if (!ca(N, ["Input", "Select"]))
        return;
      const z = ca(N, ["Select"]) ? N.props.input : N;
      z && fw(z.props) && (O = !0);
    }), O;
  }), [k, w] = S.useState(() => {
    let O = !1;
    return o && S.Children.forEach(o, (N) => {
      ca(N, ["Input", "Select"]) && (Zl(N.props, !0) || Zl(N.props.inputProps, !0)) && (O = !0);
    }), O;
  }), [R, M] = S.useState(!1);
  a && R && M(!1);
  const _ = c !== void 0 && !a ? c : R;
  let A;
  const I = S.useMemo(() => ({
    adornedStart: g,
    setAdornedStart: E,
    color: l,
    disabled: a,
    error: u,
    filled: k,
    focused: _,
    fullWidth: d,
    hiddenLabel: h,
    size: v,
    onBlur: () => {
      M(!1);
    },
    onEmpty: () => {
      w(!1);
    },
    onFilled: () => {
      w(!0);
    },
    onFocus: () => {
      M(!0);
    },
    registerEffect: A,
    required: y,
    variant: P
  }), [g, l, a, u, k, _, d, h, A, y, v, P]);
  return /* @__PURE__ */ b.jsx(Cd.Provider, {
    value: I,
    children: /* @__PURE__ */ b.jsx($k, x({
      as: s,
      ownerState: f,
      className: Q(m.root, i),
      ref: n
    }, p, {
      children: o
    }))
  });
});
function Ok(e) {
  return oe("MuiFormHelperText", e);
}
const Lp = ie("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Fp;
const Ik = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], Nk = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${V(r)}`, n && "contained", s && "focused", l && "filled", a && "required"]
  };
  return ue(u, Ok, t);
}, zk = U("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${V(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Lp.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Lp.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Lk = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: l = "p"
  } = r, s = W(r, Ik), a = ho(), u = mo({
    props: r,
    muiFormControl: a,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), c = x({}, r, {
    component: l,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), d = Nk(c);
  return /* @__PURE__ */ b.jsx(zk, x({
    as: l,
    ownerState: c,
    className: Q(d.root, i),
    ref: n
  }, s, {
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Fp || (Fp = /* @__PURE__ */ b.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  }));
});
function Fk(e) {
  return oe("MuiFormLabel", e);
}
const Qo = ie("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), jk = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Ak = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: l,
    required: s
  } = e, a = {
    root: ["root", `color${V(n)}`, o && "disabled", i && "error", l && "filled", r && "focused", s && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return ue(a, Fk, t);
}, Bk = U("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => x({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => x({
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
})), Dk = U("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Qo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Wk = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    component: l = "label"
  } = r, s = W(r, jk), a = ho(), u = mo({
    props: r,
    muiFormControl: a,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), c = x({}, r, {
    color: u.color || "primary",
    component: l,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), d = Ak(c);
  return /* @__PURE__ */ b.jsxs(Bk, x({
    as: l,
    ownerState: c,
    className: Q(d.root, i),
    ref: n
  }, s, {
    children: [o, u.required && /* @__PURE__ */ b.jsxs(Dk, {
      ownerState: c,
      "aria-hidden": !0,
      className: d.asterisk,
      children: [" ", "*"]
    })]
  }));
}), jp = /* @__PURE__ */ S.createContext();
function Uk(e) {
  return oe("MuiGrid", e);
}
const Hk = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Vk = ["column-reverse", "column", "row-reverse", "row"], Kk = ["nowrap", "wrap-reverse", "wrap"], _o = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vi = ie("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...Hk.map((e) => `spacing-xs-${e}`),
  // direction values
  ...Vk.map((e) => `direction-xs-${e}`),
  // wrap values
  ...Kk.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ..._o.map((e) => `grid-xs-${e}`),
  ..._o.map((e) => `grid-sm-${e}`),
  ..._o.map((e) => `grid-md-${e}`),
  ..._o.map((e) => `grid-lg-${e}`),
  ..._o.map((e) => `grid-xl-${e}`)
]), Gk = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function Gr(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function Qk({
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
      i = x({
        flexBasis: a,
        flexGrow: 0,
        maxWidth: a
      }, u);
    }
    return e.breakpoints.values[o] === 0 ? Object.assign(r, i) : r[e.breakpoints.up(o)] = i, r;
  }, {});
}
function Yk({
  theme: e,
  ownerState: t
}) {
  const n = ms({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return Nt({
    theme: e
  }, n, (r) => {
    const o = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (o[`& > .${vi.item}`] = {
      maxWidth: "none"
    }), o;
  });
}
function dv({
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
function Xk({
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
    typeof i == "object" && (l = dv({
      breakpoints: e.breakpoints.values,
      values: i
    })), o = Nt({
      theme: e
    }, i, (s, a) => {
      var u;
      const c = e.spacing(s);
      return c !== "0px" ? {
        marginTop: `-${Gr(c)}`,
        [`& > .${vi.item}`]: {
          paddingTop: Gr(c)
        }
      } : (u = l) != null && u.includes(a) ? {} : {
        marginTop: 0,
        [`& > .${vi.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return o;
}
function qk({
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
    typeof i == "object" && (l = dv({
      breakpoints: e.breakpoints.values,
      values: i
    })), o = Nt({
      theme: e
    }, i, (s, a) => {
      var u;
      const c = e.spacing(s);
      return c !== "0px" ? {
        width: `calc(100% + ${Gr(c)})`,
        marginLeft: `-${Gr(c)}`,
        [`& > .${vi.item}`]: {
          paddingLeft: Gr(c)
        }
      } : (u = l) != null && u.includes(a) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${vi.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return o;
}
function Zk(e, t, n = {}) {
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
const Jk = U("div", {
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
    r && (c = Zk(l, u, t));
    const d = [];
    return u.forEach((h) => {
      const C = n[h];
      C && d.push(t[`grid-${h}-${String(C)}`]);
    }), [t.root, r && t.container, i && t.item, a && t.zeroMinWidth, ...c, o !== "row" && t[`direction-xs-${String(o)}`], s !== "wrap" && t[`wrap-xs-${String(s)}`], ...d];
  }
})(({
  ownerState: e
}) => x({
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
}), Yk, Xk, qk, Qk);
function eE(e, t) {
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
const tE = (e) => {
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
  n && (u = eE(i, a));
  const c = [];
  a.forEach((h) => {
    const C = e[h];
    C && c.push(`grid-${h}-${String(C)}`);
  });
  const d = {
    root: ["root", n && "container", o && "item", s && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, l !== "wrap" && `wrap-xs-${String(l)}`, ...c]
  };
  return ue(d, Uk, t);
}, fn = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: o
  } = zs(), i = ws(r), {
    className: l,
    columns: s,
    columnSpacing: a,
    component: u = "div",
    container: c = !1,
    direction: d = "row",
    item: h = !1,
    rowSpacing: C,
    spacing: y = 0,
    wrap: v = "wrap",
    zeroMinWidth: P = !1
  } = i, p = W(i, Gk), f = C || y, m = a || y, g = S.useContext(jp), E = c ? s || 12 : g, k = {}, w = x({}, p);
  o.keys.forEach((_) => {
    p[_] != null && (k[_] = p[_], delete w[_]);
  });
  const R = x({}, i, {
    columns: E,
    container: c,
    direction: d,
    item: h,
    rowSpacing: f,
    columnSpacing: m,
    wrap: v,
    zeroMinWidth: P,
    spacing: y
  }, k, {
    breakpoints: o.keys
  }), M = tE(R);
  return /* @__PURE__ */ b.jsx(jp.Provider, {
    value: E,
    children: /* @__PURE__ */ b.jsx(Jk, x({
      ownerState: R,
      className: Q(M.root, l),
      as: u,
      ref: n
    }, w))
  });
}), nE = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function qu(e) {
  return `scale(${e}, ${e ** 2})`;
}
const rE = {
  entering: {
    opacity: 1,
    transform: qu(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Wa = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ed = /* @__PURE__ */ S.forwardRef(function(t, n) {
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
    onExited: h,
    onExiting: C,
    style: y,
    timeout: v = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: P = an
  } = t, p = W(t, nE), f = wc(), m = S.useRef(), g = zs(), E = S.useRef(null), k = Je(E, ao(i), n), w = (z) => (F) => {
    if (z) {
      const B = E.current;
      F === void 0 ? z(B) : z(B, F);
    }
  }, R = w(c), M = w((z, F) => {
    sv(z);
    const {
      duration: B,
      delay: T,
      easing: L
    } = ql({
      style: y,
      timeout: v,
      easing: l
    }, {
      mode: "enter"
    });
    let D;
    v === "auto" ? (D = g.transitions.getAutoHeightDuration(z.clientHeight), m.current = D) : D = B, z.style.transition = [g.transitions.create("opacity", {
      duration: D,
      delay: T
    }), g.transitions.create("transform", {
      duration: Wa ? D : D * 0.666,
      delay: T,
      easing: L
    })].join(","), a && a(z, F);
  }), _ = w(u), A = w(C), I = w((z) => {
    const {
      duration: F,
      delay: B,
      easing: T
    } = ql({
      style: y,
      timeout: v,
      easing: l
    }, {
      mode: "exit"
    });
    let L;
    v === "auto" ? (L = g.transitions.getAutoHeightDuration(z.clientHeight), m.current = L) : L = F, z.style.transition = [g.transitions.create("opacity", {
      duration: L,
      delay: B
    }), g.transitions.create("transform", {
      duration: Wa ? L : L * 0.666,
      delay: Wa ? B : B || L * 0.333,
      easing: T
    })].join(","), z.style.opacity = 0, z.style.transform = qu(0.75), d && d(z);
  }), O = w(h), N = (z) => {
    v === "auto" && f.start(m.current || 0, z), r && r(E.current, z);
  };
  return /* @__PURE__ */ b.jsx(P, x({
    appear: o,
    in: s,
    nodeRef: E,
    onEnter: M,
    onEntered: _,
    onEntering: R,
    onExit: I,
    onExited: O,
    onExiting: A,
    addEndListener: N,
    timeout: v === "auto" ? null : v
  }, p, {
    children: (z, F) => /* @__PURE__ */ S.cloneElement(i, x({
      style: x({
        opacity: 0,
        transform: qu(0.75),
        visibility: z === "exited" && !s ? "hidden" : void 0
      }, rE[z], y, i.props.style),
      ref: k
    }, F))
  }));
});
Ed.muiSupportAuto = !0;
const oE = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], iE = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ue({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, vw, t);
  return x({}, t, o);
}, lE = U(ta, {
  shouldForwardProp: (e) => Yt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Js(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), x({
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
    [`&.${To.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${To.error}`]: {
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
    [`&:hover:not(.${To.disabled}, .${To.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${To.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), sE = U(na, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: ea
})({}), bd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i, l;
  const s = le({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: a,
    components: u = {},
    componentsProps: c,
    fullWidth: d = !1,
    inputComponent: h = "input",
    multiline: C = !1,
    slotProps: y,
    slots: v = {},
    type: P = "text"
  } = s, p = W(s, oE), f = iE(s), g = {
    root: {
      ownerState: {
        disableUnderline: a
      }
    }
  }, E = y ?? c ? yt(y ?? c, g) : g, k = (r = (o = v.root) != null ? o : u.Root) != null ? r : lE, w = (i = (l = v.input) != null ? l : u.Input) != null ? i : sE;
  return /* @__PURE__ */ b.jsx(wd, x({
    slots: {
      root: k,
      input: w
    },
    slotProps: E,
    fullWidth: d,
    inputComponent: h,
    multiline: C,
    ref: n,
    type: P
  }, p, {
    classes: f
  }));
});
bd.muiName = "Input";
function aE(e) {
  return oe("MuiInputLabel", e);
}
ie("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const uE = ["disableAnimation", "margin", "shrink", "variant", "className"], cE = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: l,
    required: s
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "normal" && `size${V(r)}`, l],
    asterisk: [s && "asterisk"]
  }, u = ue(a, aE, t);
  return x({}, t, u);
}, dE = U(Wk, {
  shouldForwardProp: (e) => Yt(e) || e === "classes",
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
}) => x({
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
}, t.variant === "filled" && x({
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
}, t.shrink && x({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && x({
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
}))), fE = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    shrink: i,
    className: l
  } = r, s = W(r, uE), a = ho();
  let u = i;
  typeof u > "u" && a && (u = a.filled || a.focused || a.adornedStart);
  const c = mo({
    props: r,
    muiFormControl: a,
    states: ["size", "variant", "required", "focused"]
  }), d = x({}, r, {
    disableAnimation: o,
    formControl: a,
    shrink: u,
    size: c.size,
    variant: c.variant,
    required: c.required,
    focused: c.focused
  }), h = cE(d);
  return /* @__PURE__ */ b.jsx(dE, x({
    "data-shrink": u,
    ownerState: d,
    ref: n,
    className: Q(h.root, l)
  }, s, {
    classes: h
  }));
}), pE = /* @__PURE__ */ S.createContext({});
function mE(e) {
  return oe("MuiList", e);
}
ie("MuiList", ["root", "padding", "dense", "subheader"]);
const hE = ["children", "className", "component", "dense", "disablePadding", "subheader"], gE = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ue({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, mE, t);
}, vE = U("ul", {
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
}) => x({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), yE = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: l = "ul",
    dense: s = !1,
    disablePadding: a = !1,
    subheader: u
  } = r, c = W(r, hE), d = S.useMemo(() => ({
    dense: s
  }), [s]), h = x({}, r, {
    component: l,
    dense: s,
    disablePadding: a
  }), C = gE(h);
  return /* @__PURE__ */ b.jsx(pE.Provider, {
    value: d,
    children: /* @__PURE__ */ b.jsxs(vE, x({
      as: l,
      className: Q(C.root, i),
      ref: n,
      ownerState: h
    }, c, {
      children: [u, o]
    }))
  });
}), xE = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Ua(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Ap(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function fv(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function $o(e, t, n, r, o, i) {
  let l = !1, s = o(e, t, t ? n : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (l)
        return !1;
      l = !0;
    }
    const a = r ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !fv(s, i) || a)
      s = o(e, s, n);
    else
      return s.focus(), !0;
  }
  return !1;
}
const SE = /* @__PURE__ */ S.forwardRef(function(t, n) {
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
  } = t, h = W(t, xE), C = S.useRef(null), y = S.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Un(() => {
    o && C.current.focus();
  }, [o]), S.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (m, {
      direction: g
    }) => {
      const E = !C.current.style.width;
      if (m.clientHeight < C.current.clientHeight && E) {
        const k = `${Dm(Ze(m))}px`;
        C.current.style[g === "rtl" ? "paddingLeft" : "paddingRight"] = k, C.current.style.width = `calc(100% + ${k})`;
      }
      return C.current;
    }
  }), []);
  const v = (m) => {
    const g = C.current, E = m.key, k = Ze(g).activeElement;
    if (E === "ArrowDown")
      m.preventDefault(), $o(g, k, u, a, Ua);
    else if (E === "ArrowUp")
      m.preventDefault(), $o(g, k, u, a, Ap);
    else if (E === "Home")
      m.preventDefault(), $o(g, null, u, a, Ua);
    else if (E === "End")
      m.preventDefault(), $o(g, null, u, a, Ap);
    else if (E.length === 1) {
      const w = y.current, R = E.toLowerCase(), M = performance.now();
      w.keys.length > 0 && (M - w.lastTime > 500 ? (w.keys = [], w.repeating = !0, w.previousKeyMatched = !0) : w.repeating && R !== w.keys[0] && (w.repeating = !1)), w.lastTime = M, w.keys.push(R);
      const _ = k && !w.repeating && fv(k, w);
      w.previousKeyMatched && (_ || $o(g, k, !1, a, Ua, w)) ? m.preventDefault() : w.previousKeyMatched = !1;
    }
    c && c(m);
  }, P = Je(C, n);
  let p = -1;
  S.Children.forEach(l, (m, g) => {
    if (!/* @__PURE__ */ S.isValidElement(m)) {
      p === g && (p += 1, p >= l.length && (p = -1));
      return;
    }
    m.props.disabled || (d === "selectedMenu" && m.props.selected || p === -1) && (p = g), p === g && (m.props.disabled || m.props.muiSkipListHighlight || m.type.muiSkipListHighlight) && (p += 1, p >= l.length && (p = -1));
  });
  const f = S.Children.map(l, (m, g) => {
    if (g === p) {
      const E = {};
      return i && (E.autoFocus = !0), m.props.tabIndex === void 0 && d === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ S.cloneElement(m, E);
    }
    return m;
  });
  return /* @__PURE__ */ b.jsx(yE, x({
    role: "menu",
    ref: P,
    className: s,
    onKeyDown: v,
    tabIndex: o ? 0 : -1
  }, h, {
    children: f
  }));
});
function CE(e) {
  return oe("MuiPopover", e);
}
ie("MuiPopover", ["root", "paper"]);
const wE = ["onEntering"], kE = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], EE = ["slotProps"];
function Bp(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Dp(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Wp(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ha(e) {
  return typeof e == "function" ? e() : e;
}
const bE = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"]
  }, CE, t);
}, PE = U(wk, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), pv = U(qs, {
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
}), RE = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i;
  const l = le({
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
    children: h,
    className: C,
    container: y,
    elevation: v = 8,
    marginThreshold: P = 16,
    open: p,
    PaperProps: f = {},
    slots: m,
    slotProps: g,
    transformOrigin: E = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: k = Ed,
    transitionDuration: w = "auto",
    TransitionProps: {
      onEntering: R
    } = {},
    disableScrollLock: M = !1
  } = l, _ = W(l.TransitionProps, wE), A = W(l, kE), I = (r = g == null ? void 0 : g.paper) != null ? r : f, O = S.useRef(), N = Je(O, I.ref), z = x({}, l, {
    anchorOrigin: u,
    anchorReference: d,
    elevation: v,
    marginThreshold: P,
    externalPaperSlotProps: I,
    transformOrigin: E,
    TransitionComponent: k,
    transitionDuration: w,
    TransitionProps: _
  }), F = bE(z), B = S.useCallback(() => {
    if (d === "anchorPosition")
      return c;
    const Z = Ha(a), xe = (Z && Z.nodeType === 1 ? Z : Ze(O.current).body).getBoundingClientRect();
    return {
      top: xe.top + Bp(xe, u.vertical),
      left: xe.left + Dp(xe, u.horizontal)
    };
  }, [a, u.horizontal, u.vertical, c, d]), T = S.useCallback((Z) => ({
    vertical: Bp(Z, E.vertical),
    horizontal: Dp(Z, E.horizontal)
  }), [E.horizontal, E.vertical]), L = S.useCallback((Z) => {
    const de = {
      width: Z.offsetWidth,
      height: Z.offsetHeight
    }, xe = T(de);
    if (d === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Wp(xe)
      };
    const En = B();
    let Et = En.top - xe.vertical, bt = En.left - xe.horizontal;
    const Bt = Et + de.height, Pt = bt + de.width, Ee = ar(Ha(a)), un = Ee.innerHeight - P, st = Ee.innerWidth - P;
    if (P !== null && Et < P) {
      const Se = Et - P;
      Et -= Se, xe.vertical += Se;
    } else if (P !== null && Bt > un) {
      const Se = Bt - un;
      Et -= Se, xe.vertical += Se;
    }
    if (P !== null && bt < P) {
      const Se = bt - P;
      bt -= Se, xe.horizontal += Se;
    } else if (Pt > st) {
      const Se = Pt - st;
      bt -= Se, xe.horizontal += Se;
    }
    return {
      top: `${Math.round(Et)}px`,
      left: `${Math.round(bt)}px`,
      transformOrigin: Wp(xe)
    };
  }, [a, d, B, T, P]), [D, q] = S.useState(p), Y = S.useCallback(() => {
    const Z = O.current;
    if (!Z)
      return;
    const de = L(Z);
    de.top !== null && (Z.style.top = de.top), de.left !== null && (Z.style.left = de.left), Z.style.transformOrigin = de.transformOrigin, q(!0);
  }, [L]);
  S.useEffect(() => (M && window.addEventListener("scroll", Y), () => window.removeEventListener("scroll", Y)), [a, M, Y]);
  const fe = (Z, de) => {
    R && R(Z, de), Y();
  }, G = () => {
    q(!1);
  };
  S.useEffect(() => {
    p && Y();
  }), S.useImperativeHandle(s, () => p ? {
    updatePosition: () => {
      Y();
    }
  } : null, [p, Y]), S.useEffect(() => {
    if (!p)
      return;
    const Z = Bm(() => {
      Y();
    }), de = ar(a);
    return de.addEventListener("resize", Z), () => {
      Z.clear(), de.removeEventListener("resize", Z);
    };
  }, [a, p, Y]);
  let ce = w;
  w === "auto" && !k.muiSupportAuto && (ce = void 0);
  const ee = y || (a ? Ze(Ha(a)).body : void 0), Fe = (o = m == null ? void 0 : m.root) != null ? o : PE, tt = (i = m == null ? void 0 : m.paper) != null ? i : pv, Me = ur({
    elementType: tt,
    externalSlotProps: x({}, I, {
      style: D ? I.style : x({}, I.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: v,
      ref: N
    },
    ownerState: z,
    className: Q(F.paper, I == null ? void 0 : I.className)
  }), lt = ur({
    elementType: Fe,
    externalSlotProps: (g == null ? void 0 : g.root) || {},
    externalForwardedProps: A,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: ee,
      open: p
    },
    ownerState: z,
    className: Q(F.root, C)
  }), {
    slotProps: re
  } = lt, ke = W(lt, EE);
  return /* @__PURE__ */ b.jsx(Fe, x({}, ke, !wl(Fe) && {
    slotProps: re,
    disableScrollLock: M
  }, {
    children: /* @__PURE__ */ b.jsx(k, x({
      appear: !0,
      in: p,
      onEntering: fe,
      onExited: G,
      timeout: ce
    }, _, {
      children: /* @__PURE__ */ b.jsx(tt, x({}, Me, {
        children: h
      }))
    }))
  }));
});
function TE(e) {
  return oe("MuiMenu", e);
}
ie("MuiMenu", ["root", "paper", "list"]);
const _E = ["onEntering"], $E = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], ME = {
  vertical: "top",
  horizontal: "right"
}, OE = {
  vertical: "top",
  horizontal: "left"
}, IE = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, TE, t);
}, NE = U(RE, {
  shouldForwardProp: (e) => Yt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), zE = U(pv, {
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
}), LE = U(SE, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), FE = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o;
  const i = le({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: l = !0,
    children: s,
    className: a,
    disableAutoFocusItem: u = !1,
    MenuListProps: c = {},
    onClose: d,
    open: h,
    PaperProps: C = {},
    PopoverClasses: y,
    transitionDuration: v = "auto",
    TransitionProps: {
      onEntering: P
    } = {},
    variant: p = "selectedMenu",
    slots: f = {},
    slotProps: m = {}
  } = i, g = W(i.TransitionProps, _E), E = W(i, $E), k = L1(), w = x({}, i, {
    autoFocus: l,
    disableAutoFocusItem: u,
    MenuListProps: c,
    onEntering: P,
    PaperProps: C,
    transitionDuration: v,
    TransitionProps: g,
    variant: p
  }), R = IE(w), M = l && !u && h, _ = S.useRef(null), A = (T, L) => {
    _.current && _.current.adjustStyleForScrollbar(T, {
      direction: k ? "rtl" : "ltr"
    }), P && P(T, L);
  }, I = (T) => {
    T.key === "Tab" && (T.preventDefault(), d && d(T, "tabKeyDown"));
  };
  let O = -1;
  S.Children.map(s, (T, L) => {
    /* @__PURE__ */ S.isValidElement(T) && (T.props.disabled || (p === "selectedMenu" && T.props.selected || O === -1) && (O = L));
  });
  const N = (r = f.paper) != null ? r : zE, z = (o = m.paper) != null ? o : C, F = ur({
    elementType: f.root,
    externalSlotProps: m.root,
    ownerState: w,
    className: [R.root, a]
  }), B = ur({
    elementType: N,
    externalSlotProps: z,
    ownerState: w,
    className: R.paper
  });
  return /* @__PURE__ */ b.jsx(NE, x({
    onClose: d,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: k ? "right" : "left"
    },
    transformOrigin: k ? ME : OE,
    slots: {
      paper: N,
      root: f.root
    },
    slotProps: {
      root: F,
      paper: B
    },
    open: h,
    ref: n,
    transitionDuration: v,
    TransitionProps: x({
      onEntering: A
    }, g),
    ownerState: w
  }, E, {
    classes: y,
    children: /* @__PURE__ */ b.jsx(LE, x({
      onKeyDown: I,
      actions: _,
      autoFocus: l && (O === -1 || u),
      autoFocusItem: M,
      variant: p
    }, c, {
      className: Q(R.list, c.className),
      children: s
    }))
  }));
});
function jE(e) {
  return oe("MuiNativeSelect", e);
}
const Pd = ie("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), AE = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], BE = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: l
  } = e, s = {
    select: ["select", n, r && "disabled", o && "multiple", l && "error"],
    icon: ["icon", `icon${V(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ue(s, jE, t);
}, mv = ({
  ownerState: e,
  theme: t
}) => x({
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
  "&:focus": x({}, t.vars ? {
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
  [`&.${Pd.disabled}`]: {
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
}), DE = U("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Yt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Pd.multiple}`]: t.multiple
    }];
  }
})(mv), hv = ({
  ownerState: e,
  theme: t
}) => x({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Pd.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), WE = U("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${V(n.variant)}`], n.open && t.iconOpen];
  }
})(hv), UE = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: l,
    inputRef: s,
    variant: a = "standard"
  } = t, u = W(t, AE), c = x({}, t, {
    disabled: o,
    variant: a,
    error: i
  }), d = BE(c);
  return /* @__PURE__ */ b.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ b.jsx(DE, x({
      ownerState: c,
      className: Q(d.select, r),
      disabled: o,
      ref: s || n
    }, u)), t.multiple ? null : /* @__PURE__ */ b.jsx(WE, {
      as: l,
      ownerState: c,
      className: d.icon
    })]
  });
});
var Up;
const HE = ["children", "classes", "className", "label", "notched"], VE = U("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Yt
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
}), KE = U("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Yt
})(({
  ownerState: e,
  theme: t
}) => x({
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
}, e.withLabel && x({
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
function GE(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, o = W(e, HE), i = n != null && n !== "", l = x({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ b.jsx(VE, x({
    "aria-hidden": !0,
    className: t,
    ownerState: l
  }, o, {
    children: /* @__PURE__ */ b.jsx(KE, {
      ownerState: l,
      children: i ? /* @__PURE__ */ b.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Up || (Up = /* @__PURE__ */ b.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const QE = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], YE = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, yw, t);
  return x({}, t, r);
}, XE = U(ta, {
  shouldForwardProp: (e) => Yt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Js
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return x({
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
  }, t.multiline && x({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), qE = U(GE, {
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
}), ZE = U(na, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: ea
})(({
  theme: e,
  ownerState: t
}) => x({
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
})), Rd = /* @__PURE__ */ S.forwardRef(function(t, n) {
  var r, o, i, l, s;
  const a = le({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: c = !1,
    inputComponent: d = "input",
    label: h,
    multiline: C = !1,
    notched: y,
    slots: v = {},
    type: P = "text"
  } = a, p = W(a, QE), f = YE(a), m = ho(), g = mo({
    props: a,
    muiFormControl: m,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), E = x({}, a, {
    color: g.color || "primary",
    disabled: g.disabled,
    error: g.error,
    focused: g.focused,
    formControl: m,
    fullWidth: c,
    hiddenLabel: g.hiddenLabel,
    multiline: C,
    size: g.size,
    type: P
  }), k = (r = (o = v.root) != null ? o : u.Root) != null ? r : XE, w = (i = (l = v.input) != null ? l : u.Input) != null ? i : ZE;
  return /* @__PURE__ */ b.jsx(wd, x({
    slots: {
      root: k,
      input: w
    },
    renderSuffix: (R) => /* @__PURE__ */ b.jsx(qE, {
      ownerState: E,
      className: f.notchedOutline,
      label: h != null && h !== "" && g.required ? s || (s = /* @__PURE__ */ b.jsxs(S.Fragment, {
        children: [h, " ", "*"]
      })) : h,
      notched: typeof y < "u" ? y : !!(R.startAdornment || R.filled || R.focused)
    }),
    fullWidth: c,
    inputComponent: d,
    multiline: C,
    ref: n,
    type: P
  }, p, {
    classes: x({}, f, {
      notchedOutline: null
    })
  }));
});
Rd.muiName = "Input";
function JE(e) {
  return oe("MuiSelect", e);
}
const Mo = ie("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Hp;
const eb = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], tb = U("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Mo.select}`]: t.select
      },
      {
        [`&.${Mo.select}`]: t[n.variant]
      },
      {
        [`&.${Mo.error}`]: t.error
      },
      {
        [`&.${Mo.multiple}`]: t.multiple
      }
    ];
  }
})(mv, {
  // Win specificity over the input base
  [`&.${Mo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), nb = U("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${V(n.variant)}`], n.open && t.iconOpen];
  }
})(hv), rb = U("input", {
  shouldForwardProp: (e) => oh(e) && e !== "classes",
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
function Vp(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function ob(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const ib = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: l
  } = e, s = {
    select: ["select", n, r && "disabled", o && "multiple", l && "error"],
    icon: ["icon", `icon${V(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return ue(s, JE, t);
}, lb = /* @__PURE__ */ S.forwardRef(function(t, n) {
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
    disabled: h,
    displayEmpty: C,
    error: y = !1,
    IconComponent: v,
    inputRef: P,
    labelId: p,
    MenuProps: f = {},
    multiple: m,
    name: g,
    onBlur: E,
    onChange: k,
    onClose: w,
    onFocus: R,
    onOpen: M,
    open: _,
    readOnly: A,
    renderValue: I,
    SelectDisplayProps: O = {},
    tabIndex: N,
    value: z,
    variant: F = "standard"
  } = t, B = W(t, eb), [T, L] = tf({
    controlled: z,
    default: d,
    name: "Select"
  }), [D, q] = tf({
    controlled: _,
    default: c,
    name: "Select"
  }), Y = S.useRef(null), fe = S.useRef(null), [G, ce] = S.useState(null), {
    current: ee
  } = S.useRef(_ != null), [Fe, tt] = S.useState(), Me = Je(n, P), lt = S.useCallback((H) => {
    fe.current = H, H && ce(H);
  }, []), re = G == null ? void 0 : G.parentNode;
  S.useImperativeHandle(Me, () => ({
    focus: () => {
      fe.current.focus();
    },
    node: Y.current,
    value: T
  }), [T]), S.useEffect(() => {
    c && D && G && !ee && (tt(s ? null : re.clientWidth), fe.current.focus());
  }, [G, s]), S.useEffect(() => {
    l && fe.current.focus();
  }, [l]), S.useEffect(() => {
    if (!p)
      return;
    const H = Ze(fe.current).getElementById(p);
    if (H) {
      const ge = () => {
        getSelection().isCollapsed && fe.current.focus();
      };
      return H.addEventListener("click", ge), () => {
        H.removeEventListener("click", ge);
      };
    }
  }, [p]);
  const ke = (H, ge) => {
    H ? M && M(ge) : w && w(ge), ee || (tt(s ? null : re.clientWidth), q(H));
  }, Z = (H) => {
    H.button === 0 && (H.preventDefault(), fe.current.focus(), ke(!0, H));
  }, de = (H) => {
    ke(!1, H);
  }, xe = S.Children.toArray(a), En = (H) => {
    const ge = xe.find((Ue) => Ue.props.value === H.target.value);
    ge !== void 0 && (L(ge.props.value), k && k(H, ge));
  }, Et = (H) => (ge) => {
    let Ue;
    if (ge.currentTarget.hasAttribute("tabindex")) {
      if (m) {
        Ue = Array.isArray(T) ? T.slice() : [];
        const vr = T.indexOf(H.props.value);
        vr === -1 ? Ue.push(H.props.value) : Ue.splice(vr, 1);
      } else
        Ue = H.props.value;
      if (H.props.onClick && H.props.onClick(ge), T !== Ue && (L(Ue), k)) {
        const vr = ge.nativeEvent || ge, _d = new vr.constructor(vr.type, vr);
        Object.defineProperty(_d, "target", {
          writable: !0,
          value: {
            value: Ue,
            name: g
          }
        }), k(_d, H);
      }
      m || ke(!1, ge);
    }
  }, bt = (H) => {
    A || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(H.key) !== -1 && (H.preventDefault(), ke(!0, H));
  }, Bt = G !== null && D, Pt = (H) => {
    !Bt && E && (Object.defineProperty(H, "target", {
      writable: !0,
      value: {
        value: T,
        name: g
      }
    }), E(H));
  };
  delete B["aria-invalid"];
  let Ee, un;
  const st = [];
  let Se = !1;
  (Zl({
    value: T
  }) || C) && (I ? Ee = I(T) : Se = !0);
  const Xt = xe.map((H) => {
    if (!/* @__PURE__ */ S.isValidElement(H))
      return null;
    let ge;
    if (m) {
      if (!Array.isArray(T))
        throw new Error(sr(2));
      ge = T.some((Ue) => Vp(Ue, H.props.value)), ge && Se && st.push(H.props.children);
    } else
      ge = Vp(T, H.props.value), ge && Se && (un = H.props.children);
    return /* @__PURE__ */ S.cloneElement(H, {
      "aria-selected": ge ? "true" : "false",
      onClick: Et(H),
      onKeyUp: (Ue) => {
        Ue.key === " " && Ue.preventDefault(), H.props.onKeyUp && H.props.onKeyUp(Ue);
      },
      role: "option",
      selected: ge,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": H.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  Se && (m ? st.length === 0 ? Ee = null : Ee = st.reduce((H, ge, Ue) => (H.push(ge), Ue < st.length - 1 && H.push(", "), H), []) : Ee = un);
  let bn = Fe;
  !s && ee && G && (bn = re.clientWidth);
  let cn;
  typeof N < "u" ? cn = N : cn = h ? null : 0;
  const me = O.id || (g ? `mui-component-select-${g}` : void 0), K = x({}, t, {
    variant: F,
    value: T,
    open: Bt,
    error: y
  }), dn = ib(K), go = x({}, f.PaperProps, (r = f.slotProps) == null ? void 0 : r.paper), vo = Cc();
  return /* @__PURE__ */ b.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ b.jsx(tb, x({
      ref: lt,
      tabIndex: cn,
      role: "combobox",
      "aria-controls": vo,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": Bt ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [p, me].filter(Boolean).join(" ") || void 0,
      "aria-describedby": o,
      onKeyDown: bt,
      onMouseDown: h || A ? null : Z,
      onBlur: Pt,
      onFocus: R
    }, O, {
      ownerState: K,
      className: Q(O.className, dn.select, u),
      id: me,
      children: ob(Ee) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Hp || (Hp = /* @__PURE__ */ b.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Ee
    })), /* @__PURE__ */ b.jsx(rb, x({
      "aria-invalid": y,
      value: Array.isArray(T) ? T.join(",") : T,
      name: g,
      ref: Y,
      "aria-hidden": !0,
      onChange: En,
      tabIndex: -1,
      disabled: h,
      className: dn.nativeInput,
      autoFocus: l,
      ownerState: K
    }, B)), /* @__PURE__ */ b.jsx(nb, {
      as: v,
      className: dn.icon,
      ownerState: K
    }), /* @__PURE__ */ b.jsx(FE, x({
      id: `menu-${g || ""}`,
      anchorEl: re,
      open: Bt,
      onClose: de,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, f, {
      MenuListProps: x({
        "aria-labelledby": p,
        role: "listbox",
        "aria-multiselectable": m ? "true" : void 0,
        disableListWrap: !0,
        id: vo
      }, f.MenuListProps),
      slotProps: x({}, f.slotProps, {
        paper: x({}, go, {
          style: x({
            minWidth: bn
          }, go != null ? go.style : null)
        })
      }),
      children: Xt
    }))]
  });
}), sb = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], ab = ["root"], ub = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Td = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Yt(e) && e !== "variant",
  slot: "Root"
}, cb = U(bd, Td)(""), db = U(Rd, Td)(""), fb = U(kd, Td)(""), gv = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: l = {},
    className: s,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: c = Sw,
    id: d,
    input: h,
    inputProps: C,
    label: y,
    labelId: v,
    MenuProps: P,
    multiple: p = !1,
    native: f = !1,
    onClose: m,
    onOpen: g,
    open: E,
    renderValue: k,
    SelectDisplayProps: w,
    variant: R = "outlined"
  } = r, M = W(r, sb), _ = f ? UE : lb, A = ho(), I = mo({
    props: r,
    muiFormControl: A,
    states: ["variant", "error"]
  }), O = I.variant || R, N = x({}, r, {
    variant: O,
    classes: l
  }), z = ub(N), F = W(z, ab), B = h || {
    standard: /* @__PURE__ */ b.jsx(cb, {
      ownerState: N
    }),
    outlined: /* @__PURE__ */ b.jsx(db, {
      label: y,
      ownerState: N
    }),
    filled: /* @__PURE__ */ b.jsx(fb, {
      ownerState: N
    })
  }[O], T = Je(n, ao(B));
  return /* @__PURE__ */ b.jsx(S.Fragment, {
    children: /* @__PURE__ */ S.cloneElement(B, x({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: _,
      inputProps: x({
        children: i,
        error: I.error,
        IconComponent: c,
        variant: O,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: p
      }, f ? {
        id: d
      } : {
        autoWidth: o,
        defaultOpen: a,
        displayEmpty: u,
        labelId: v,
        MenuProps: P,
        onClose: m,
        onOpen: g,
        open: E,
        renderValue: k,
        SelectDisplayProps: x({
          id: d
        }, w)
      }, C, {
        classes: C ? yt(F, C.classes) : F
      }, h ? h.props.inputProps : {})
    }, (p && f || u) && O === "outlined" ? {
      notched: !0
    } : {}, {
      ref: T,
      className: Q(B.props.className, s, z.root)
    }, !h && {
      variant: O
    }, M))
  });
});
gv.muiName = "Select";
function pb(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, l = wc();
  S.useEffect(() => {
    if (!o)
      return;
    function p(f) {
      f.defaultPrevented || (f.key === "Escape" || f.key === "Esc") && (r == null || r(f, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", p), () => {
      document.removeEventListener("keydown", p);
    };
  }, [o, r]);
  const s = nn((p, f) => {
    r == null || r(p, f);
  }), a = nn((p) => {
    !r || p == null || l.start(p, () => {
      s(null, "timeout");
    });
  });
  S.useEffect(() => (o && a(t), l.clear), [o, t, a, l]);
  const u = (p) => {
    r == null || r(p, "clickaway");
  }, c = l.clear, d = S.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), h = (p) => (f) => {
    const m = p.onBlur;
    m == null || m(f), d();
  }, C = (p) => (f) => {
    const m = p.onFocus;
    m == null || m(f), c();
  }, y = (p) => (f) => {
    const m = p.onMouseEnter;
    m == null || m(f), c();
  }, v = (p) => (f) => {
    const m = p.onMouseLeave;
    m == null || m(f), d();
  };
  return S.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", d), window.addEventListener("blur", c), () => {
        window.removeEventListener("focus", d), window.removeEventListener("blur", c);
      };
  }, [n, o, d, c]), {
    getRootProps: (p = {}) => {
      const f = x({}, kl(e), kl(p));
      return x({
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation"
      }, p, f, {
        onBlur: h(f),
        onFocus: C(f),
        onMouseEnter: y(f),
        onMouseLeave: v(f)
      });
    },
    onClickAway: u
  };
}
function mb(e) {
  return oe("MuiSnackbarContent", e);
}
ie("MuiSnackbarContent", ["root", "message", "action"]);
const hb = ["action", "className", "message", "role"], gb = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, mb, t);
}, vb = U(qs, {
  name: "MuiSnackbarContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98, n = q1(e.palette.background.default, t);
  return x({}, e.typography.body2, {
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    flexGrow: 1,
    [e.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  });
}), yb = U("div", {
  name: "MuiSnackbarContent",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0"
}), xb = U("div", {
  name: "MuiSnackbarContent",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), Sb = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: l,
    role: s = "alert"
  } = r, a = W(r, hb), u = r, c = gb(u);
  return /* @__PURE__ */ b.jsxs(vb, x({
    role: s,
    square: !0,
    elevation: 6,
    className: Q(c.root, i),
    ownerState: u,
    ref: n
  }, a, {
    children: [/* @__PURE__ */ b.jsx(yb, {
      className: c.message,
      ownerState: u,
      children: l
    }), o ? /* @__PURE__ */ b.jsx(xb, {
      className: c.action,
      ownerState: u,
      children: o
    }) : null]
  }));
});
function Cb(e) {
  return oe("MuiSnackbar", e);
}
ie("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const wb = ["onEnter", "onExited"], kb = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"], Eb = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${V(n.vertical)}${V(n.horizontal)}`]
  };
  return ue(r, Cb, t);
}, Kp = U("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${V(n.anchorOrigin.vertical)}${V(n.anchorOrigin.horizontal)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = {
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)"
  };
  return x({
    zIndex: (e.vars || e).zIndex.snackbar,
    position: "fixed",
    display: "flex",
    left: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center"
  }, t.anchorOrigin.vertical === "top" ? {
    top: 8
  } : {
    bottom: 8
  }, t.anchorOrigin.horizontal === "left" && {
    justifyContent: "flex-start"
  }, t.anchorOrigin.horizontal === "right" && {
    justifyContent: "flex-end"
  }, {
    [e.breakpoints.up("sm")]: x({}, t.anchorOrigin.vertical === "top" ? {
      top: 24
    } : {
      bottom: 24
    }, t.anchorOrigin.horizontal === "center" && n, t.anchorOrigin.horizontal === "left" && {
      left: 24,
      right: "auto"
    }, t.anchorOrigin.horizontal === "right" && {
      right: 24,
      left: "auto"
    })
  });
}), bb = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
    props: t,
    name: "MuiSnackbar"
  }), o = zs(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    action: l,
    anchorOrigin: {
      vertical: s,
      horizontal: a
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration: u = null,
    children: c,
    className: d,
    ClickAwayListenerProps: h,
    ContentProps: C,
    disableWindowBlurListener: y = !1,
    message: v,
    open: P,
    TransitionComponent: p = Ed,
    transitionDuration: f = i,
    TransitionProps: {
      onEnter: m,
      onExited: g
    } = {}
  } = r, E = W(r.TransitionProps, wb), k = W(r, kb), w = x({}, r, {
    anchorOrigin: {
      vertical: s,
      horizontal: a
    },
    autoHideDuration: u,
    disableWindowBlurListener: y,
    TransitionComponent: p,
    transitionDuration: f
  }), R = Eb(w), {
    getRootProps: M,
    onClickAway: _
  } = pb(x({}, w)), [A, I] = S.useState(!0), O = ur({
    elementType: Kp,
    getSlotProps: M,
    externalForwardedProps: k,
    ownerState: w,
    additionalProps: {
      ref: n
    },
    className: [R.root, d]
  }), N = (F) => {
    I(!0), g && g(F);
  }, z = (F, B) => {
    I(!1), m && m(F, B);
  };
  return !P && A ? null : /* @__PURE__ */ b.jsx(Yw, x({
    onClickAway: _
  }, h, {
    children: /* @__PURE__ */ b.jsx(Kp, x({}, O, {
      children: /* @__PURE__ */ b.jsx(p, x({
        appear: !0,
        in: P,
        timeout: f,
        direction: s === "top" ? "down" : "up",
        onEnter: z,
        onExited: N
      }, E, {
        children: c || /* @__PURE__ */ b.jsx(Sb, x({
          message: v,
          action: l
        }, C))
      }))
    }))
  }));
});
function Pb(e) {
  return oe("MuiTextField", e);
}
ie("MuiTextField", ["root"]);
const Rb = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], Tb = {
  standard: bd,
  filled: kd,
  outlined: Rd
}, _b = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, Pb, t);
}, $b = U(Mk, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), el = /* @__PURE__ */ S.forwardRef(function(t, n) {
  const r = le({
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
    FormHelperTextProps: h,
    fullWidth: C = !1,
    helperText: y,
    id: v,
    InputLabelProps: P,
    inputProps: p,
    InputProps: f,
    inputRef: m,
    label: g,
    maxRows: E,
    minRows: k,
    multiline: w = !1,
    name: R,
    onBlur: M,
    onChange: _,
    onFocus: A,
    placeholder: I,
    required: O = !1,
    rows: N,
    select: z = !1,
    SelectProps: F,
    type: B,
    value: T,
    variant: L = "outlined"
  } = r, D = W(r, Rb), q = x({}, r, {
    autoFocus: i,
    color: a,
    disabled: c,
    error: d,
    fullWidth: C,
    multiline: w,
    required: O,
    select: z,
    variant: L
  }), Y = _b(q), fe = {};
  L === "outlined" && (P && typeof P.shrink < "u" && (fe.notched = P.shrink), fe.label = g), z && ((!F || !F.native) && (fe.id = void 0), fe["aria-describedby"] = void 0);
  const G = Cc(v), ce = y && G ? `${G}-helper-text` : void 0, ee = g && G ? `${G}-label` : void 0, Fe = Tb[L], tt = /* @__PURE__ */ b.jsx(Fe, x({
    "aria-describedby": ce,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: C,
    multiline: w,
    name: R,
    rows: N,
    maxRows: E,
    minRows: k,
    type: B,
    value: T,
    id: G,
    inputRef: m,
    onBlur: M,
    onChange: _,
    onFocus: A,
    placeholder: I,
    inputProps: p
  }, fe, f));
  return /* @__PURE__ */ b.jsxs($b, x({
    className: Q(Y.root, s),
    disabled: c,
    error: d,
    fullWidth: C,
    ref: n,
    required: O,
    color: a,
    variant: L,
    ownerState: q
  }, D, {
    children: [g != null && g !== "" && /* @__PURE__ */ b.jsx(fE, x({
      htmlFor: G,
      id: ee
    }, P, {
      children: g
    })), z ? /* @__PURE__ */ b.jsx(gv, x({
      "aria-describedby": ce,
      id: G,
      labelId: ee,
      value: T,
      input: tt
    }, F, {
      children: l
    })) : tt, y && /* @__PURE__ */ b.jsx(Lk, x({
      id: ce
    }, h, {
      children: y
    }))]
  }));
});
var Zu = {}, Gp = yd;
Zu.createRoot = Gp.createRoot, Zu.hydrateRoot = Gp.hydrateRoot;
const Mb = sn(/* @__PURE__ */ b.jsx("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), Ob = sn(/* @__PURE__ */ b.jsx("path", {
  d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
}), "LocationOn"), Ib = sn(/* @__PURE__ */ b.jsx("path", {
  d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"
}), "Phone"), Nb = sn(/* @__PURE__ */ b.jsx("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send");
function zb() {
  const [e, t] = S.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  }), [n, r] = S.useState(!1), o = (s) => {
    t({
      ...e,
      [s.target.name]: s.target.value
    });
  }, i = (s) => {
    s.preventDefault(), console.log("Form submitted:", e), r(!0), t({ name: "", email: "", subject: "", message: "" });
  }, l = [
    {
      icon: /* @__PURE__ */ b.jsx(Mb, { sx: { fontSize: 40 } }),
      title: "Email",
      detail: "support@modulefedstore.com",
      link: "mailto:support@modulefedstore.com"
    },
    {
      icon: /* @__PURE__ */ b.jsx(Ib, { sx: { fontSize: 40 } }),
      title: "Phone",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: /* @__PURE__ */ b.jsx(Ob, { sx: { fontSize: 40 } }),
      title: "Address",
      detail: "123 Commerce St, Tech City, TC 12345",
      link: "#"
    }
  ];
  return /* @__PURE__ */ b.jsxs(Xw, { maxWidth: "lg", sx: { py: 4 }, children: [
    /* @__PURE__ */ b.jsx(br, { variant: "h3", gutterBottom: !0, fontWeight: 600, mb: 2, children: "Contact Us" }),
    /* @__PURE__ */ b.jsx(br, { variant: "h6", color: "text.secondary", paragraph: !0, mb: 6, children: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible." }),
    /* @__PURE__ */ b.jsxs(fn, { container: !0, spacing: 4, children: [
      /* @__PURE__ */ b.jsx(fn, { item: !0, xs: 12, md: 4, children: /* @__PURE__ */ b.jsx(Zi, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: l.map((s, a) => /* @__PURE__ */ b.jsx(Aa, { children: /* @__PURE__ */ b.jsxs(Ba, { sx: { textAlign: "center", py: 3 }, children: [
        /* @__PURE__ */ b.jsx(Zi, { sx: { color: "primary.main", mb: 2 }, children: s.icon }),
        /* @__PURE__ */ b.jsx(br, { variant: "h6", gutterBottom: !0, fontWeight: 600, children: s.title }),
        /* @__PURE__ */ b.jsx(
          br,
          {
            variant: "body1",
            color: "text.secondary",
            component: "a",
            href: s.link,
            sx: {
              textDecoration: "none",
              "&:hover": { color: "primary.main" }
            },
            children: s.detail
          }
        )
      ] }) }, a)) }) }),
      /* @__PURE__ */ b.jsx(fn, { item: !0, xs: 12, md: 8, children: /* @__PURE__ */ b.jsx(Aa, { children: /* @__PURE__ */ b.jsxs(Ba, { sx: { p: 4 }, children: [
        /* @__PURE__ */ b.jsx(br, { variant: "h5", gutterBottom: !0, fontWeight: 600, mb: 3, children: "Send us a Message" }),
        /* @__PURE__ */ b.jsx("form", { onSubmit: i, children: /* @__PURE__ */ b.jsxs(fn, { container: !0, spacing: 3, children: [
          /* @__PURE__ */ b.jsx(fn, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ b.jsx(
            el,
            {
              fullWidth: !0,
              label: "Name",
              name: "name",
              value: e.name,
              onChange: o,
              required: !0
            }
          ) }),
          /* @__PURE__ */ b.jsx(fn, { item: !0, xs: 12, sm: 6, children: /* @__PURE__ */ b.jsx(
            el,
            {
              fullWidth: !0,
              label: "Email",
              name: "email",
              type: "email",
              value: e.email,
              onChange: o,
              required: !0
            }
          ) }),
          /* @__PURE__ */ b.jsx(fn, { item: !0, xs: 12, children: /* @__PURE__ */ b.jsx(
            el,
            {
              fullWidth: !0,
              label: "Subject",
              name: "subject",
              value: e.subject,
              onChange: o,
              required: !0
            }
          ) }),
          /* @__PURE__ */ b.jsx(fn, { item: !0, xs: 12, children: /* @__PURE__ */ b.jsx(
            el,
            {
              fullWidth: !0,
              label: "Message",
              name: "message",
              multiline: !0,
              rows: 6,
              value: e.message,
              onChange: o,
              required: !0
            }
          ) }),
          /* @__PURE__ */ b.jsx(fn, { item: !0, xs: 12, children: /* @__PURE__ */ b.jsx(
            Aw,
            {
              type: "submit",
              variant: "contained",
              size: "large",
              endIcon: /* @__PURE__ */ b.jsx(Nb, {}),
              fullWidth: !0,
              sx: { py: 1.5 },
              children: "Send Message"
            }
          ) })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ b.jsx(Zi, { sx: { mt: 6 }, children: /* @__PURE__ */ b.jsx(Aa, { children: /* @__PURE__ */ b.jsx(Ba, { sx: { p: 0 }, children: /* @__PURE__ */ b.jsx(
      Zi,
      {
        sx: {
          height: 400,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        },
        children: /* @__PURE__ */ b.jsx(br, { variant: "h5", children: "Map Integration Area" })
      }
    ) }) }) }),
    /* @__PURE__ */ b.jsx(
      bb,
      {
        open: n,
        autoHideDuration: 6e3,
        onClose: () => r(!1),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        children: /* @__PURE__ */ b.jsx(J2, { onClose: () => r(!1), severity: "success", sx: { width: "100%" }, children: "Thank you for your message! We'll get back to you soon." })
      }
    )
  ] });
}
const Lb = (e) => e === "light" || e === "dark", Fb = (e) => e && Lb(e) ? e : "light", jb = (e) => {
  if (e)
    try {
      e.unmount();
    } catch (t) {
      console.error("Error unmounting React root:", t);
    }
}, Ab = (e, t) => {
  if (!customElements.get(e))
    try {
      customElements.define(e, t);
    } catch (n) {
      console.error(`Error registering web component ${e}:`, n);
    }
}, Bb = (e = "light") => Pc({
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
class Db extends HTMLElement {
  constructor() {
    super(...arguments);
    ra(this, "root", null);
    ra(this, "themeMode", "light");
  }
  static get observedAttributes() {
    return ["theme"];
  }
  connectedCallback() {
    this.mount();
  }
  disconnectedCallback() {
    jb(this.root), this.root = null;
  }
  attributeChangedCallback(n, r, o) {
    n === "theme" && r !== o && (this.themeMode = Fb(o), this.mount());
  }
  mount() {
    this.root && this.root.unmount(), this.innerHTML = "";
    const n = document.createElement("div");
    this.appendChild(n);
    const r = Bb(this.themeMode);
    this.root = Zu.createRoot(n), this.root.render(
      /* @__PURE__ */ b.jsx(Vt.StrictMode, { children: /* @__PURE__ */ b.jsxs(Jx, { theme: r, children: [
        /* @__PURE__ */ b.jsx(ek, {}),
        /* @__PURE__ */ b.jsx(zb, {})
      ] }) })
    );
  }
}
Ab("contact-widget", Db);
export {
  Db as default
};
