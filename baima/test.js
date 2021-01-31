(function(e) {
    function n(n) {
      for (var r, a, c = n[0], l = n[1], s = n[2], u = 0, d = []; u < c.length; u++)
        a = c[u],
        Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]),
          i[a] = 0;
      for (r in l)
        Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
      p && p(n);
      while (d.length)
        d.shift()();
      return o.push.apply(o, s || []),
        t()
    }
    function t() {
      for (var e, n = 0; n < o.length; n++) {
        for (var t = o[n], r = !0, a = 1; a < t.length; a++) {
          var c = t[a];
          0 !== i[c] && (r = !1)
        }
        r && (o.splice(n--, 1),
          e = l(l.s = t[0]))
      }
      return e
    }
    var r = {}
      , a = {
      index: 0
    }
      , i = {
      index: 0
    }
      , o = [];
    function c(e) {
      return l.p + "js/" + ({}[e] || e) + "." + {
        "chunk-0321d966": "a2cfaccf",
        "chunk-0c0e1ebc": "4f9ec320",
        "chunk-173c8750": "0c66a126",
        "chunk-068d6c4d": "10fcc52d",
        "chunk-115c73b6": "34e56c3e",
        "chunk-1301e256": "db3783f7",
        "chunk-152172a1": "4b34663a",
        "chunk-1632a96f": "50a8d85b",
        "chunk-1744dd7f": "f3ee1273",
        "chunk-1e2403e7": "cf76b48c",
        "chunk-265539d4": "a21be115",
        "chunk-2a507f92": "6dc41c2b",
        "chunk-4981390d": "4ce02e00",
        "chunk-7c2afa26": "289a3686",
        "chunk-dd20b97e": "7ce8843b",
        "chunk-2b8408c0": "7188e3aa",
        "chunk-2d0cbede": "07ace509",
        "chunk-2d0cc1c8": "e51928e3",
        "chunk-2d0e59ce": "ce990c03",
        "chunk-2d0e9326": "42a4af90",
        "chunk-2d210f45": "9d565896",
        "chunk-5610dab1": "53b5ead7",
        "chunk-714ad802": "0369e3d6",
        "chunk-2d217ddd": "3492bb54",
        "chunk-2d2380e3": "aa754502",
        "chunk-2fb00b27": "844f513a",
        "chunk-34be8907": "1f5164b3",
        "chunk-39b7c100": "63af4b55",
        "chunk-3f0257ab": "05badc2a",
        "chunk-75e9f269": "34ecd37a",
        "chunk-45424589": "4c64f681",
        "chunk-4aaf6d8d": "8c966f33",
        "chunk-660218fe": "cea1a4ee",
        "chunk-774a7f52": "1db76381",
        "chunk-7a746c05": "ffd9fb32",
        "chunk-7ac2db26": "6d0a3313",
        "chunk-84a33c6e": "2ee6767c",
        "chunk-2896bb8a": "44e6b686",
        "chunk-4a5a7976": "05602a65",
        "chunk-9d3c9510": "7b64cc76",
        "chunk-ae0d0a52": "5950217d",
        "chunk-b813648a": "70548a80",
        "chunk-c7ccf712": "1fae2c43",
        "chunk-0b25cec0": "b1f93f22",
        "chunk-1550fd55": "2822a34d",
        "chunk-ecabe6e2": "69dd38dc",
        "chunk-cc740d52": "880a0541",
        "chunk-da9b3d66": "72b7431f",
        "chunk-e957ce0c": "414d7879",
        "chunk-f3ca96a4": "80dec401",
        "chunk-47ca35e8": "6267d9a3",
        "chunk-07d064f7": "ee6197c1",
        "chunk-0b65ffb6": "05167722",
        "chunk-12950967": "1deac292",
        "chunk-e13e4362": "b8319bca",
        "chunk-c9bb4e92": "20e86830"
      }[e] + ".js"
    }
    function l(n) {
      if (r[n])
        return r[n].exports;
      var t = r[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(t.exports, t, t.exports, l),
        t.l = !0,
        t.exports
    }
    l.e = function(e) {
      var n = []
        , t = {
        "chunk-0321d966": 1,
        "chunk-0c0e1ebc": 1,
        "chunk-173c8750": 1,
        "chunk-068d6c4d": 1,
        "chunk-115c73b6": 1,
        "chunk-1301e256": 1,
        "chunk-152172a1": 1,
        "chunk-1632a96f": 1,
        "chunk-1744dd7f": 1,
        "chunk-1e2403e7": 1,
        "chunk-265539d4": 1,
        "chunk-4981390d": 1,
        "chunk-7c2afa26": 1,
        "chunk-dd20b97e": 1,
        "chunk-2b8408c0": 1,
        "chunk-5610dab1": 1,
        "chunk-714ad802": 1,
        "chunk-2fb00b27": 1,
        "chunk-34be8907": 1,
        "chunk-39b7c100": 1,
        "chunk-75e9f269": 1,
        "chunk-45424589": 1,
        "chunk-4aaf6d8d": 1,
        "chunk-660218fe": 1,
        "chunk-774a7f52": 1,
        "chunk-7a746c05": 1,
        "chunk-7ac2db26": 1,
        "chunk-84a33c6e": 1,
        "chunk-2896bb8a": 1,
        "chunk-4a5a7976": 1,
        "chunk-9d3c9510": 1,
        "chunk-ae0d0a52": 1,
        "chunk-b813648a": 1,
        "chunk-c7ccf712": 1,
        "chunk-0b25cec0": 1,
        "chunk-1550fd55": 1,
        "chunk-ecabe6e2": 1,
        "chunk-cc740d52": 1,
        "chunk-da9b3d66": 1,
        "chunk-e957ce0c": 1,
        "chunk-f3ca96a4": 1,
        "chunk-47ca35e8": 1
      };
      a[e] ? n.push(a[e]) : 0 !== a[e] && t[e] && n.push(a[e] = new Promise((function(n, t) {
          for (var r = "css/" + ({}[e] || e) + "." + {
            "chunk-0321d966": "337d73b8",
            "chunk-0c0e1ebc": "768c4192",
            "chunk-173c8750": "ede746db",
            "chunk-068d6c4d": "8582faf0",
            "chunk-115c73b6": "44c1951f",
            "chunk-1301e256": "10541cb9",
            "chunk-152172a1": "e8080b14",
            "chunk-1632a96f": "ed2fa63f",
            "chunk-1744dd7f": "f55541a9",
            "chunk-1e2403e7": "a7effce5",
            "chunk-265539d4": "88c7bb32",
            "chunk-2a507f92": "31d6cfe0",
            "chunk-4981390d": "44875cfe",
            "chunk-7c2afa26": "50f84d62",
            "chunk-dd20b97e": "b5ee3988",
            "chunk-2b8408c0": "ff374a12",
            "chunk-2d0cbede": "31d6cfe0",
            "chunk-2d0cc1c8": "31d6cfe0",
            "chunk-2d0e59ce": "31d6cfe0",
            "chunk-2d0e9326": "31d6cfe0",
            "chunk-2d210f45": "31d6cfe0",
            "chunk-5610dab1": "f618dd33",
            "chunk-714ad802": "482c218a",
            "chunk-2d217ddd": "31d6cfe0",
            "chunk-2d2380e3": "31d6cfe0",
            "chunk-2fb00b27": "569ceda1",
            "chunk-34be8907": "636947b0",
            "chunk-39b7c100": "b8754bb0",
            "chunk-3f0257ab": "31d6cfe0",
            "chunk-75e9f269": "ed4b5e01",
            "chunk-45424589": "059abab4",
            "chunk-4aaf6d8d": "46b13920",
            "chunk-660218fe": "983aa0aa",
            "chunk-774a7f52": "c4742353",
            "chunk-7a746c05": "fb92fe01",
            "chunk-7ac2db26": "c8602da6",
            "chunk-84a33c6e": "d93faeca",
            "chunk-2896bb8a": "982c713b",
            "chunk-4a5a7976": "5be10fd4",
            "chunk-9d3c9510": "0fa29d88",
            "chunk-ae0d0a52": "45356b9d",
            "chunk-b813648a": "2e7e4f86",
            "chunk-c7ccf712": "51b63028",
            "chunk-0b25cec0": "3040f367",
            "chunk-1550fd55": "07c0a254",
            "chunk-ecabe6e2": "e6411e8a",
            "chunk-cc740d52": "78cb7d58",
            "chunk-da9b3d66": "de6324ec",
            "chunk-e957ce0c": "4b1ddd55",
            "chunk-f3ca96a4": "c412edf5",
            "chunk-47ca35e8": "463b3007",
            "chunk-07d064f7": "31d6cfe0",
            "chunk-0b65ffb6": "31d6cfe0",
            "chunk-12950967": "31d6cfe0",
            "chunk-e13e4362": "31d6cfe0",
            "chunk-c9bb4e92": "31d6cfe0"
          }[e] + ".css", i = l.p + r, o = document.getElementsByTagName("link"), c = 0; c < o.length; c++) {
            var s = o[c]
              , u = s.getAttribute("data-href") || s.getAttribute("href");
            if ("stylesheet" === s.rel && (u === r || u === i))
              return n()
          }
          var d = document.getElementsByTagName("style");
          for (c = 0; c < d.length; c++) {
            s = d[c],
              u = s.getAttribute("data-href");
            if (u === r || u === i)
              return n()
          }
          var p = document.createElement("link");
          p.rel = "stylesheet",
            p.type = "text/css",
            p.onload = n,
            p.onerror = function(n) {
              var r = n && n.target && n.target.src || i
                , o = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
              o.code = "CSS_CHUNK_LOAD_FAILED",
                o.request = r,
                delete a[e],
                p.parentNode.removeChild(p),
                t(o)
            }
            ,
            p.href = i;
          var m = document.getElementsByTagName("head")[0];
          m.appendChild(p)
        }
      )).then((function() {
          a[e] = 0
        }
      )));
      var r = i[e];
      if (0 !== r)
        if (r)
          n.push(r[2]);
        else {
          var o = new Promise((function(n, t) {
              r = i[e] = [n, t]
            }
          ));
          n.push(r[2] = o);
          var s, u = document.createElement("script");
          u.charset = "utf-8",
            u.timeout = 120,
          l.nc && u.setAttribute("nonce", l.nc),
            u.src = c(e);
          var d = new Error;
          s = function(n) {
            u.onerror = u.onload = null,
              clearTimeout(p);
            var t = i[e];
            if (0 !== t) {
              if (t) {
                var r = n && ("load" === n.type ? "missing" : n.type)
                  , a = n && n.target && n.target.src;
                d.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")",
                  d.name = "ChunkLoadError",
                  d.type = r,
                  d.request = a,
                  t[1](d)
              }
              i[e] = void 0
            }
          }
          ;
          var p = setTimeout((function() {
              s({
                type: "timeout",
                target: u
              })
            }
          ), 12e4);
          u.onerror = u.onload = s,
            document.head.appendChild(u)
        }
      return Promise.all(n)
    }
      ,
      l.m = e,
      l.c = r,
      l.d = function(e, n, t) {
        l.o(e, n) || Object.defineProperty(e, n, {
          enumerable: !0,
          get: t
        })
      }
      ,
      l.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
          Object.defineProperty(e, "__esModule", {
            value: !0
          })
      }
      ,
      l.t = function(e, n) {
        if (1 & n && (e = l(e)),
        8 & n)
          return e;
        if (4 & n && "object" === typeof e && e && e.__esModule)
          return e;
        var t = Object.create(null);
        if (l.r(t),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
          }),
        2 & n && "string" != typeof e)
          for (var r in e)
            l.d(t, r, function(n) {
              return e[n]
            }
              .bind(null, r));
        return t
      }
      ,
      l.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
          }
          : function() {
            return e
          }
        ;
        return l.d(n, "a", n),
          n
      }
      ,
      l.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
      }
      ,
      l.p = "/",
      l.oe = function(e) {
        throw console.error(e),
          e
      }
    ;
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
      , u = s.push.bind(s);
    s.push = n,
      s = s.slice();
    for (var d = 0; d < s.length; d++)
      n(s[d]);
    var p = u;
    o.push([0, "chunk-vendors"]),
      t()
  }
)({
  0: function(e, n, t) {
    e.exports = t("b36b")
  },
  "0370": function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8e6e")
      , core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__)
      , core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("456d")
      , core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__)
      , core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ac6a")
      , core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__)
      , core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4f7f")
      , core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_3__)
      , core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5df3")
      , core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__)
      , core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1c4c")
      , core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_5__)
      , core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6762")
      , core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_6__)
      , core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2fdb")
      , core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_7__)
      , C_workspace_git_baima_development_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ade3")
      , core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("7f7f")
      , core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_9__)
      , core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("7514")
      , core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_10__)
      , _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("e2f0")
      , _api_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("9dee")
      , _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("a169")
      , _open_api_function__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("52a6")
      , _open_api_webhook__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("aefb")
      , _open_api_group__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("541a");
    function ownKeys(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function _objectSpread(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? ownKeys(Object(t), !0).forEach((function(n) {
            Object(C_workspace_git_baima_development_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var api = __webpack_require__("2018");
    __webpack_exports__["a"] = {
      namespaced: !0,
      state: {
        showModal: void 0,
        active: {},
        type: "function",
        list: []
      },
      mutations: {
        setActive: function(e, n) {
          e.active = n
        },
        setShowModal: function(e, n) {
          e.showModal = n
        },
        setList: function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          e.list = n
        },
        setType: function(e, n) {
          e.type = n
        }
      },
      actions: {
        refresh: function(e) {
          e.state,
            e.getters;
          var n = e.commit;
          return api.list().then((function(e) {
              n("setList", e.data)
            }
          ))
        },
        create: function(e, n) {
          e.state;
          var t = e.dispatch;
          return api.create(n).then((function(e) {
              t("refresh")
            }
          ))
        },
        update: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n._id;
          return api.update(r, n).then((function(e) {
              t("refresh")
            }
          ))
        },
        enable: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n.id
            , a = n.enable
            , i = void 0 !== a && a;
          return api.enable(r, i).then((function(e) {
              t("refresh")
            }
          ))
        },
        debug: function(e, n) {
          e.state,
            e.dispatch;
          var t = n.id
            , r = n.data
            , a = void 0 === r ? {} : r;
          return api.debug(t, a).then((function(e) {
              return e.data
            }
          ))
        },
        remove: function(e, n) {
          e.state;
          var t = e.dispatch;
          return api.remove(n).then((function(e) {
              t("refresh")
            }
          ))
        },
        setActive: function(e, n) {
          e.state,
            e.getters;
          var t = e.commit;
          t("setActive", n)
        },
        showModal: function(e, n) {
          e.state,
            e.getters;
          var t = e.commit;
          t("setShowModal", n)
        },
        setType: function(e, n) {
          e.state,
            e.getters;
          var t = e.commit;
          t("setType", n)
        }
      },
      getters: {
        active: function(e, n, t, r) {
          var a = e.active
            , i = n.list
            , o = i.find((function(e) {
              return e._id == a._id
            }
          ));
          return o
        },
        showModal: function(e, n, t, r) {
          var a = e.showModal;
          return a
        },
        list: function(e, n, t, r) {
          return e.list
        },
        modelList: function(e, n, t, r) {
          var a = n.type;
          return "function" == a ? n["function/list"] : n["webhook/list"]
        },
        type: function(e) {
          return e.type
        },
        typeName: function(e, n) {
          var t = n.type;
          return n.getTypeName(t)
        },
        getTypeName: function(e, n) {
          return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , n = {
              function: "云函数",
              webhook: "webhook"
            };
            return n[e] || e
          }
        },
        getName: function(e, n) {
          return function(e) {
            var t = n.modelList
              , r = t.find((function(n) {
                return n.key == e
              }
            ));
            return r && r.name || ""
          }
        },
        getConfig: function(e, n) {
          return function(e) {
            var t = n.type;
            return "function" == t ? n["function/getConfig"](e) : n["webhook/getConfig"](e)
          }
        }
      },
      modules: {
        webhook: {
          namespaced: !0,
          state: {
            codeMap: {}
          },
          mutations: {
            setCode: function(e, n) {
              e.map = n
            }
          },
          actions: {
            setCode: function(e, n) {
              var t = e.commit
                , r = (e.state,
                e.getters)
                , a = n.key
                , i = n.code
                , o = _objectSpread({}, r.codeMap);
              o[a] = i,
                t("setCode", o)
            },
            getCode: function(e, n) {
              var t = e.getters
                , r = (e.rootGetters,
                e.dispatch)
                , a = _config__WEBPACK_IMPORTED_MODULE_11__["a"].baimaOpen
                , i = t.get(n)
                , o = i.url;
              return o = "".concat(a).concat(o),
                Object(_api_utils__WEBPACK_IMPORTED_MODULE_12__["a"])(o).then((function(e) {
                    var t = e;
                    return r("setCode", {
                      key: n,
                      code: t
                    }),
                      t
                  }
                ))
            }
          },
          getters: {
            get: function(e, n) {
              return function(e) {
                var n = _open_api_webhook__WEBPACK_IMPORTED_MODULE_15__["a"][e];
                return n
              }
            },
            codeMap: function(e, n) {
              return e.codeMap
            },
            getConfig: function(e, n) {
              return function(e) {
                var t = n.get(e)
                  , r = t.config || {};
                return r
              }
            },
            map: function(e, n, t, r) {
              return _open_api_webhook__WEBPACK_IMPORTED_MODULE_15__["a"]
            },
            list: function(e, n, t, r) {
              var a = n.map
                , i = [];
              for (var o in a) {
                var c = a[o];
                c.key && i.push(c)
              }
              return i
            },
            getPath: function(e, n) {
              return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , n = "/".concat(e);
                return n
              }
            },
            getUrl: function(e, n, t, r) {
              return function(e) {
                var n = _config__WEBPACK_IMPORTED_MODULE_11__["a"].platformServer
                  , t = r["platform/project"]._id
                  , a = e._path
                  , i = e._model
                  , o = "".concat(n, "/api/open/").concat(t, "/").concat(i);
                return "common" == i && (o = "".concat(o).concat(a)),
                  o
              }
            }
          }
        },
        function: {
          namespaced: !0,
          state: {
            detailMap: {},
            codeMap: {}
          },
          mutations: {
            setDetail: function(e, n) {
              e.detailMap = n
            },
            setCode: function(e, n) {
              e.codeMap = n
            }
          },
          actions: {
            setDetail: function(e, n) {
              var t = e.commit
                , r = e.getters
                , a = _objectSpread({}, r.detailMap)
                , i = n.key;
              a[i] = n,
                t("setDetail", a)
            },
            setCode: function(e, n) {
              var t = e.commit
                , r = e.getters
                , a = n.key
                , i = n.code
                , o = _objectSpread({}, r.codeMap);
              o[a] = i,
                t("setCode", o)
            },
            loadDetail: function loadDetail(_ref18, model) {
              var dispatch = _ref18.dispatch
                , openHost = _config__WEBPACK_IMPORTED_MODULE_11__["a"].baimaOpen
                , target = model.target
                , url = "".concat(openHost).concat(target);
              return Object(_api_utils__WEBPACK_IMPORTED_MODULE_12__["a"])(url).then((function(res) {
                  var item = eval(res);
                  return dispatch("setDetail", item),
                    item
                }
              ))
            },
            loadCode: function(e, n) {
              var t = e.getters
                , r = e.dispatch
                , a = _config__WEBPACK_IMPORTED_MODULE_11__["a"].baimaOpen
                , i = "".concat(n.type, "-").concat(n.model, "-").concat(n.key)
                , o = t.codeMap
                , c = o[i];
              if (c)
                return c;
              var l = t.getDetail(n.model)
                , s = l.template || []
                , u = s.find((function(e) {
                  return "base" == e.key
                }
              ))
                , d = n.url;
              return d ? (d = "".concat(a).concat(d),
                Object(_api_utils__WEBPACK_IMPORTED_MODULE_12__["a"])(d).then((function(e) {
                    var n = e;
                    return r("setCode", {
                      key: i,
                      code: n
                    }),
                      n
                  }
                ))) : u ? r("loadCode", _objectSpread(_objectSpread({}, u), {}, {
                model: n.model
              })).then((function(e) {
                  var n = e;
                  r("setCode", {
                    key: i,
                    code: n
                  })
                }
              )) : ""
            }
          },
          getters: {
            map: function(e, n, t, r) {
              return _open_api_function__WEBPACK_IMPORTED_MODULE_14__["a"]
            },
            list: function(e, n, t, r) {
              var a = n.map
                , i = [];
              for (var o in a) {
                var c = a[o];
                c.key && i.push(c)
              }
              return i
            },
            detailMap: function(e, n) {
              return e.detailMap
            },
            codeMap: function(e, n) {
              return e.codeMap
            },
            get: function(e, n) {
              return function(e) {
                var t = n.list
                  , r = t.find((function(n) {
                    return n.key == e
                  }
                )) || {};
                return r
              }
            },
            getConfig: function(e, n) {
              return function(e) {
                var t = n.getDetail(e) || {};
                return t.config || {}
              }
            },
            getName: function(e, n) {
              return function(e) {
                var t = n.get(e);
                return t.name || ""
              }
            },
            getDetail: function(e, n) {
              return function(e) {
                var t = n.map
                  , r = n.detailMap
                  , a = r[e]
                  , i = t[e];
                return i && !a && _store__WEBPACK_IMPORTED_MODULE_13__["default"].dispatch("dev/api/function/loadDetail", i),
                  a
              }
            }
          }
        },
        group: {
          namespaced: !0,
          getters: {
            list: function(e, n, t, r) {
              var a = r["dev/api/modelList"]
                , i = a.map((function(e) {
                  return e.group
                }
              ));
              return i = _.flatten(i),
                i = i.filter((function(e) {
                    return !["common"].includes(e)
                  }
                )),
                Array.from(new Set(i))
            },
            getName: function(e, n, t, r) {
              return function(e) {
                var n = _open_api_group__WEBPACK_IMPORTED_MODULE_16__["a"];
                return n[e] || e
              }
            }
          }
        },
        config: {
          namespaced: !0,
          getters: {
            typeMap: function(e, n) {
              return {
                string: "字符",
                collection: "集合"
              }
            }
          }
        }
      }
    }
  },
  "03bc": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="main">\r\n    <div class="content">{{text}}</div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      text: "自定义组件",\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.main {\r\n  .content {\r\n    color: #f00;\r\n  }\r\n}\r\n</style>'
  },
  "0533": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "showDataset", (function() {
          return p
        }
      )),
      t.d(n, "queryDataset", (function() {
          return m
        }
      )),
      t.d(n, "queryData", (function() {
          return f
        }
      )),
      t.d(n, "filterData", (function() {
          return v
        }
      )),
      t.d(n, "metaData", (function() {
          return h
        }
      )),
      t.d(n, "getData", (function() {
          return g
        }
      )),
      t.d(n, "getUserData", (function() {
          return y
        }
      ));
    var r = t("2473")
      , a = t("4d00")
      , i = t.n(a)
      , o = new r["default"]
      , c = o.getProject
      , l = "/api/app"
      , s = {}
      , u = 2e3
      , d = function(e, n) {
      return s[e] || (s[e + "_reset"] = i.a.debounce((function() {
          s[e] = !1
        }
      ), u),
        s[e] = o.request(n).then((function(n) {
            return s[e + "_reset"](),
              n
          }
        ))),
        s[e]
    }
      , p = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = c()
        , r = "showDataset_".concat(e, "_").concat(JSON.stringify(n))
        , a = {
        url: "".concat(l, "/ds/").concat(t, "/").concat(e, "/show"),
        method: "post",
        data: n
      };
      return d(r, a)
    }
      , m = function(e, n) {
      var t = c()
        , r = "queryDataset_".concat(e, "_").concat(JSON.stringify(n))
        , a = {
        url: "".concat(l, "/ds/").concat(t, "/").concat(e, "/query"),
        data: n,
        method: "post"
      };
      return d(r, a)
    }
      , f = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = c()
        , r = "queryData_".concat(e, "_").concat(JSON.stringify(n))
        , a = {
        url: "".concat(l, "/d/").concat(t, "/").concat(e, "/query"),
        method: "post",
        data: n
      };
      return d(r, a)
    }
      , v = function(e, n, t, r) {
      var a = c()
        , i = "filterData_".concat(e, "_").concat(n, "_").concat(t, "_").concat(JSON.stringify(r))
        , o = {
        url: "".concat(l, "/d/").concat(a, "/").concat(e, "/filter"),
        method: "post",
        data: {
          key: n,
          value: t,
          query: r
        }
      };
      return d(i, o)
    }
      , h = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = c()
        , r = "metaData_".concat(e, "_").concat(JSON.stringify(n))
        , a = {
        url: "".concat(l, "/d/").concat(t, "/").concat(e, "/meta"),
        method: "post",
        data: n
      };
      return d(r, a)
    }
      , g = function(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        , r = c()
        , a = "getData_".concat(e, "_").concat(n, "_").concat(JSON.stringify(t))
        , i = {
        url: "".concat(l, "/d/").concat(r, "/").concat(e, "/").concat(n),
        method: "post",
        data: t
      };
      return d(a, i)
    }
      , y = function() {
      var e = c();
      return o.request({
        url: "".concat(l, "/d/").concat(e, "/user")
      })
    }
  },
  "0714": function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("29d3")
      , core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__)
      , core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8fd6")
      , core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__)
      , core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("63a5")
      , core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__)
      , core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cee2")
      , core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_3__)
      , core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9e5e")
      , core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__)
      , C_workspace_git_baima_development_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ade3")
      , _api_platform_custom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2d57")
      , _api_project_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("9f95");
    function ownKeys(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function _objectSpread(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? ownKeys(Object(t), !0).forEach((function(n) {
            Object(C_workspace_git_baima_development_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var defaultConfig = {
      logo: "/image/app/login/icon-logo.png",
      name: "白码"
    };
    __webpack_exports__["a"] = {
      namespaced: !0,
      state: {
        project: "",
        custom: {}
      },
      mutations: {
        setProject: function(e, n) {
          e.project = n
        },
        setCustom: function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          n.init = !0,
            e.custom = n
        },
        reset: function(e) {
          e.project = "",
            e.custom = {}
        }
      },
      actions: {
        init: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = e.commit;
          return r("setProject", n),
            Object(_api_platform_custom__WEBPACK_IMPORTED_MODULE_6__["a"])(n).then((function(e) {
                var n = e.data;
                return t("setup", n)
              }
            ))
        },
        setup: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = e.commit;
          r("setCustom", n);
          var a = n.config;
          t("config/set", a);
          var i = n.view;
          t("view/set", i);
          var o = n.setup;
          t("setup/init", o)
        },
        reset: function(e) {
          e.state,
            e.dispatch;
          var n = e.commit;
          n("reset")
        },
        join: function(e) {
          e.state;
          var n = e.getters
            , t = n.project
            , r = n.custom
            , a = r.role
            , i = r.invite;
          return !!(t && a && i) && Object(_api_project_user__WEBPACK_IMPORTED_MODULE_7__["a"])(t, a, i)
        }
      },
      getters: {
        project: function(e, n) {
          return e.project
        },
        custom: function(e, n) {
          return e.custom
        },
        isCustom: function(e, n) {
          var t = _objectSpread({}, n.custom);
          return delete t.init,
            !_.isEmpty(t)
        },
        logo: function(e, n) {
          var t = n.custom;
          return t.logo || defaultConfig.logo
        },
        name: function(e, n) {
          var t = n.custom;
          return t.name || defaultConfig.name
        },
        projectTitle: function(e, n) {
          var t = n.custom;
          return t.name || ""
        },
        active: function(e, n) {
          var t = e.custom;
          return !_.isEmpty(t) && n.project
        }
      },
      modules: {
        config: {
          namespaced: !0,
          state: {
            config: {},
            weixinLogin: !1
          },
          mutations: {
            set: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              e.config = n
            }
          },
          actions: {
            set: function(e, n) {
              var t = e.commit;
              t("set", n)
            }
          },
          getters: {
            config: function(e, n) {
              return e.config
            },
            weixinLogin: function(e, n) {
              var t = n.config;
              return t.weixinLogin || !1
            },
            weixinAppid: function(e, n) {
              var t = n.config;
              return t.weixinAppid || ""
            },
            weixinAppType: function(e, n) {
              var t = n.config;
              return t.weixinAppType || ""
            }
          }
        },
        view: {
          namespaced: !0,
          actions: {
            set: function(e) {
              e.state,
                e.getters;
              var n = e.dispatch
                , t = e.rootGetters
                , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , a = _objectSpread({}, r)
                , i = t["window/isMobile"];
              i ? a.mobile && (a = _objectSpread(_objectSpread({}, a), a.mobile)) : a.pc && (a = _objectSpread(_objectSpread({}, a), a.pc)),
                n("view/set", a, {
                  root: !0
                })
            }
          }
        },
        setup: {
          namespaced: !0,
          state: {
            code: ""
          },
          mutations: {
            init: function(e, n) {
              e.code = n
            }
          },
          actions: {
            init: function init(_ref7, code) {
              var commit = _ref7.commit
                , getters = _ref7.getters;
              if (commit("init", code),
              code && code.startsWith("function"))
                try {
                  eval("(".concat(code, ")()"))
                } catch (e) {
                  this.$$log(e)
                }
            }
          },
          getters: {
            code: function(e, n) {
              return e.code
            }
          }
        }
      }
    }
  },
  "0745": function(e, n, t) {},
  "07bb": function(e, n, t) {
    "use strict";
    var r = t("7268")
      , a = t.n(r);
    a.a
  },
  1: function(e, n) {},
  "121b": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <CheckboxGroup v-model="fruit">\r\n      <Checkbox label="香蕉"></Checkbox>\r\n      <Checkbox label="苹果"></Checkbox>\r\n      <Checkbox label="西瓜"></Checkbox>\r\n    </CheckboxGroup>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      fruit: ["苹果"],\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "129e": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="display-view-dropdown">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <i-select\r\n      class="bm-display-input-dropdown"\r\n      v-model="selected"\r\n      transfer\r\n      :style="textStyle"\r\n      :placeholder="placeholder"\r\n      @on-change="onChange"\r\n    >\r\n      <Option v-for="(item,index) in options" :value="index" :key="index">{{ item.label }}</Option>\r\n    </i-select>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      selected: -1,\r\n    };\r\n  },\r\n  methods: {\r\n    onChange() {\r\n      let selected = this.selected;\r\n      let item = this.options[selected];\r\n      if (item) {\r\n        this.setInputValue("selected", item.label);\r\n      }\r\n\r\n      let context = this.viewStore.getters["data/getContext"](selected);\r\n      if (context == undefined) {\r\n        context = item;\r\n      }\r\n      this.doAction("change", context, selected);\r\n    },\r\n    setInputValue(key, value) {\r\n      let adapter = this.getAdapter(key);\r\n      let adapterValue = adapter.value;\r\n      if (adapterValue && adapterValue[0] == "prop") {\r\n        let variableKey = adapterValue[1];\r\n        if (variableKey) {\r\n          this.displayStore.dispatch("property/setValue", {\r\n            key: variableKey,\r\n            value,\r\n          });\r\n        }\r\n      }\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        selected: {\r\n          ...this.string,\r\n          name: "选中选项",\r\n          key: "selected",\r\n          default: "选择1",\r\n        },\r\n        options: {\r\n          ...this.collection,\r\n          name: "选项集",\r\n          type: "manual",\r\n          key: "options",\r\n        },\r\n        "options.label": {\r\n          ...this.string,\r\n          name: "选项",\r\n          key: "options.label",\r\n        },\r\n      });\r\n\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        width: 5,\r\n        height: 1,\r\n        border: {\r\n          ...this.border,\r\n          width: 1,\r\n          radiusOnly: [5],\r\n          color: "rgb(191,191,191)",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        textSize: this.textSize,\r\n        textColor: {\r\n          ...this.mixinOption(this.primaryColor, "文字颜色"),\r\n          key: "textColor",\r\n        },\r\n        textWeight: {\r\n          ...this.select,\r\n          name: "文字粗细",\r\n          key: "textWeight",\r\n          default: "400",\r\n          value: [\r\n            { key: "400", name: "常规", value: "400" },\r\n            { key: "bold", name: "加粗", value: "bold" },\r\n          ],\r\n        },\r\n        placeholder: {\r\n          ...this.input,\r\n          name: "占位文本",\r\n          key: "placeholder",\r\n          default: "请选择",\r\n          value: "",\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        change: {\r\n          key: "change",\r\n          name: "选择数据",\r\n        },\r\n      });\r\n    },\r\n    mixinOption(optionValue, name, defaultValue) {\r\n      let result = { ...optionValue };\r\n      if (name) {\r\n        result.name = name;\r\n      }\r\n      if (defaultValue) {\r\n        result.default = defaultValue;\r\n      }\r\n      return result;\r\n    },\r\n  },\r\n  mounted() {},\r\n  computed: {\r\n    selectedIndex() {\r\n      let selected = this.getValue("selected");\r\n      let valueSelected = -1;\r\n      this.options.forEach(function (value, key) {\r\n        if (value.label && value.label == selected) {\r\n          valueSelected = key;\r\n        }\r\n      });\r\n      return valueSelected;\r\n    },\r\n    options() {\r\n      let options = this.getCollection("options");\r\n      return options || [];\r\n    },\r\n    placeholder() {\r\n      let option = this.viewOption;\r\n      return option.placeholder || "";\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let viewBody = this.viewBody;\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let primaryColor = this.v.color(option.textColor);\r\n      let align = this.v.align(option.align);\r\n      let textWeight = option.textWeight;\r\n\r\n      let style = {};\r\n      style["position"] = "absolute";\r\n      style = { ...textSize, ...style };\r\n      style["font-weight"] = textWeight;\r\n      style["color"] = `${primaryColor}`;\r\n      if (viewBody.relative) {\r\n        if (viewBody.autoHeight) {\r\n          style["position"] = "relative";\r\n        }\r\n      }\r\n\r\n      return {\r\n        ...align,\r\n        ...style,\r\n      };\r\n    },\r\n\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    border() {\r\n      return {\r\n        color: "#000",\r\n        width: 0,\r\n        style: "solid",\r\n        position: ["top", "bottom", "left", "right"],\r\n        radiusOnly: [],\r\n        radiusMore: [],\r\n        radiusState: true,\r\n      };\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "文字大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    input() {\r\n      return {\r\n        name: "输入框",\r\n        type: "input",\r\n        default: "",\r\n        key: "input",\r\n        value: [],\r\n        hideTitle: true,\r\n      };\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n    collection() {\r\n      return {\r\n        name: "列表",\r\n        key: "list",\r\n        type: "collection",\r\n        model: "collection",\r\n      };\r\n    },\r\n  },\r\n  watch: {\r\n    options(value) {\r\n      if (value) {\r\n        this.selected = 0;\r\n        this.onChange();\r\n      }\r\n    },\r\n    selectedIndex: {\r\n      immediate: true,\r\n      handler(value) {\r\n        this.selected = value;\r\n      },\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less">\r\n.display-view-dropdown {\r\n  // 在此开始写自定义样式\r\n  .bm-display-input-dropdown {\r\n    height: 100%;\r\n    .ivu-select-selection {\r\n      background: inherit;\r\n      border-radius: inherit;\r\n      height: 100%;\r\n      border: none;\r\n      .ivu-select-placeholder,\r\n      .ivu-select-selected-value {\r\n        font-size: inherit;\r\n        position: absolute;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n        line-height: inherit;\r\n        height: inherit;\r\n      }\r\n      .ivu-icon {\r\n        color: inherit;\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  1674: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <div class="demo-split">\r\n      <Split v-model="split">\r\n        <div slot="left" class="demo-split-pane">Left Pane</div>\r\n        <div slot="right" class="demo-split-pane">Right Pane</div>\r\n      </Split>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      split: 0.5,\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  .demo-split {\r\n    height: 200px;\r\n    border: 1px solid #dcdee2;\r\n  }\r\n  .demo-split-pane {\r\n    padding: 10px;\r\n  }\r\n}\r\n</style>'
  },
  "16d5": function(e, n, t) {
    "use strict";
    t("29d3"),
      t("8fd6"),
      t("63a5");
    var r = t("ade3");
    function a(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function i(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? a(Object(t), !0).forEach((function(n) {
            Object(r["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var o = {
      name: "对齐",
      type: "align",
      default: "center",
      key: "align",
      value: ["left-top", "top", "right-top", "left-center", "center", "right-center", "left-bottom", "bottom", "right-bottom"]
    }
      , c = {
      name: "文字大小",
      type: "textSize",
      default: "sm",
      key: "textSize",
      value: ["xl", "lg", "md", "sm", "xs"]
    }
      , l = {
      name: "大小",
      type: "size",
      default: "md",
      key: "size",
      value: ["xl", "lg", "md", "sm", "xs"]
    }
      , s = {
      sm: "小",
      md: "中",
      lg: "大"
    }
      , u = {
      name: "颜色",
      type: "color",
      default: "transparent",
      key: "color",
      value: [{
        key: "light-blue",
        name: "浅蓝",
        value: "rgba(0,168,255,1)"
      }, {
        key: "blue",
        name: "蓝色",
        value: "rgba(38,128,235,1)"
      }, {
        key: "green",
        name: "绿色",
        value: "rgba(72,212,151,1)"
      }, {
        key: "red",
        name: "红色",
        value: "rgba(254,89,89,1)"
      }, {
        key: "orange",
        name: "橙色",
        value: "rgba(255,167,14,1)"
      }, {
        key: "dark-green",
        name: "深绿",
        value: "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)"
      }, {
        key: "black",
        name: "黑色",
        value: "rgba(30, 18, 22, 1)"
      }, {
        key: "gray",
        name: "灰色",
        value: "rgba(221, 221, 221, 1)"
      }, {
        key: "white",
        name: "白色",
        value: "rgba(255, 255, 255, 1)"
      }, {
        key: "transparent",
        name: "透明",
        value: "url('/image/dev/img.png')"
      }]
    }
      , d = {
      name: "选择",
      type: "select",
      default: "",
      key: "select",
      value: [{
        key: "right-angle",
        name: "直角",
        value: "3px"
      }, {
        key: "fillet",
        name: "圆角",
        value: "1000px"
      }]
    }
      , p = {
      name: "选择",
      type: "selectBox",
      default: "",
      key: "selectBox",
      value: []
    }
      , m = {
      name: "已选图标",
      type: "iconBox",
      default: "",
      key: "iconBox",
      value: []
    }
      , f = {
      name: "选择",
      type: "sinpleSelectBox",
      default: "",
      key: "sinpleSelectBox",
      value: [],
      hideTitle: !0
    }
      , v = {
      name: "选择",
      type: "checkbox",
      default: "",
      key: "checkbox",
      value: []
    }
      , h = {
      name: "输入框",
      type: "input",
      default: "",
      key: "input",
      value: [],
      hideTitle: !0
    }
      , g = {
      name: "数字",
      type: "number",
      default: "",
      key: "number",
      value: [],
      hideTitle: !0
    }
      , y = i(i({}, u), {}, {
      name: "填充",
      type: "fill",
      default: "",
      key: "fill",
      value: [{
        key: "none",
        name: "无",
        value: ""
      }, {
        key: "backgroundColor",
        name: "纯色",
        value: u
      }, {
        key: "gradient",
        name: "渐变",
        value: ["#666", "#000"]
      }, {
        key: "card",
        name: "卡片",
        value: u
      }, {
        key: "image",
        name: "图片",
        value: ""
      }]
    })
      , b = i(i({}, u), {}, {
      name: "填充",
      type: "fill",
      default: "",
      key: "fill",
      value: [{
        key: "none",
        name: "无",
        value: ""
      }, {
        key: "backgroundColor",
        name: "纯色",
        value: u
      }, {
        key: "gradient",
        name: "渐变",
        value: ["#666", "#000"]
      }, {
        key: "image",
        name: "图片",
        value: "/image/flow/icon-demo.png"
      }]
    })
      , k = {
      "light-blue": {
        name: "浅蓝",
        value: "rgba(0,168,255,1)"
      },
      blue: {
        name: "蓝色",
        value: "rgba(38,128,235,1)"
      },
      green: {
        name: "绿色",
        value: "rgba(72,212,151,1)"
      },
      red: {
        name: "红色",
        value: "rgba(254,89,89,1)"
      },
      orange: {
        name: "橙色",
        value: "rgba(255,167,14,1)"
      },
      black: {
        name: "黑色",
        value: "rgba(30, 18, 22, 1)"
      },
      white: {
        name: "白色",
        value: "rgba(255, 255, 255, 1)"
      },
      gray: {
        name: "灰色",
        value: "rgba(221, 221, 221, 1)"
      },
      transparent: {
        name: "透明",
        value: "rgba(0, 0, 0, 0)"
      },
      purple: {
        name: "紫色",
        value: "rgba(182, 109, 255, 1)"
      },
      pink: {
        name: "粉红",
        value: "rgba(249, 76, 147, 1)"
      },
      yellow: {
        name: "黄色",
        value: "rgba(255, 230, 4, 1)"
      },
      default: {
        name: "默认",
        value: "rgba(0,168,255,1)"
      }
    }
      , _ = ["#2077EC", "#00A8FF", "#00CEBB", "#B8EB75", "#FEB810", "#FF5E5E", "#CF81FF", "#000000", "#BFBFBF", "#E9E9E9", "#FFFFFF", "transparent"]
      , w = i(i({}, u), {}, {
      name: "背景颜色",
      default: "white",
      key: "backgroundColor"
    })
      , x = i(i({}, u), {}, {
      name: "主颜色",
      default: "black",
      key: "primaryColor"
    })
      , O = i(i({}, u), {}, {
      name: "副颜色",
      default: "black",
      key: "secondaryColor"
    })
      , j = i(i({}, u), {}, {
      name: "边框",
      default: "rgba(0,168,255,1)",
      key: "borderColor"
    })
      , P = {
      borderColor: i(i({}, j), {}, {
        default: "rgba(153,153,153,1)"
      }),
      primaryColor: i(i({}, x), {}, {
        default: "rgba(0,0,0,1)"
      })
    }
      , S = {
      color: "#000",
      width: 0,
      style: "solid",
      position: ["top", "bottom", "left", "right"],
      radiusOnly: [],
      radiusMore: [],
      radiusState: !0
    };
    n["a"] = {
      align: o,
      textSize: c,
      size: l,
      color: u,
      select: d,
      fill: b,
      backgroundColor: w,
      primaryColor: x,
      secondaryColor: O,
      borderColor: j,
      sinpleSelectBox: f,
      input: h,
      checkbox: v,
      baseFill: y,
      colorMap: k,
      textSizeMobile: s,
      baseButton: P,
      colorPickerMap: _,
      selectBox: p,
      iconBox: m,
      border: S,
      number: g
    }
  },
  "186a": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Avatar icon="ios-person" size="large" />\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  1992: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Affix>\r\n      <span class="demo-affix">Fixed at the top</span>\r\n    </Affix>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "1e55": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="display-view-questions-details">\r\n    <div class="box">\r\n      <img class="icon" v-if="best==\'是\'" src="/image/customized/icon-list-bg.png" alt />\r\n      <div class="box-content">\r\n        <div class="item" :class="edition(item.edition)" v-for="(item,index) in list" :key="index">\r\n          <div class="head">\r\n            <div class="title">\r\n              <span class="text">{{item.name}}</span>\r\n              <img\r\n                v-if="item.edition"\r\n                :src="\'/image/customized/icon-\'+edition(item.edition)+\'.png\'"\r\n                alt\r\n              />\r\n            </div>\r\n            <div class="date">{{item.time}}</div>\r\n          </div>\r\n          <div class="content">{{item.content}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="more" v-if="page&&page!=currentPage" @click="more">更多数据</div>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      page: 1,\r\n      currentPage: 1,\r\n      row: 20,\r\n    };\r\n  },\r\n  methods: {\r\n    onClick() {\r\n      this.doAction("click", true);\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        best: {\r\n          ...this.string,\r\n          name: "最佳答案",\r\n          key: "best",\r\n        },\r\n        questionlist: {\r\n          ...this.collection,\r\n          name: "选项集",\r\n          key: "questionlist",\r\n        },\r\n        "questionlist.name": {\r\n          ...this.string,\r\n          name: "名字",\r\n          key: "questionlist.name",\r\n        },\r\n        "questionlist.edition": {\r\n          ...this.string,\r\n          name: "平台版本",\r\n          key: "questionlist.edition",\r\n        },\r\n        "questionlist.time": {\r\n          ...this.string,\r\n          name: "时间",\r\n          key: "questionlist.time",\r\n        },\r\n        "questionlist.content": {\r\n          ...this.string,\r\n          name: "内容",\r\n          key: "questionlist.content",\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n    edition(type) {\r\n      if (type == "体验版") {\r\n        return "experience";\r\n      } else if (type == "基础版") {\r\n        return "basic";\r\n      } else if (type == "企业版") {\r\n        return "enterprise";\r\n      } else if (type == "平台版") {\r\n        return "senior";\r\n      }\r\n    },\r\n    more() {\r\n      this.currentPage++;\r\n    },\r\n  },\r\n  computed: {\r\n    best() {\r\n      return this.getValue("best");\r\n    },\r\n    list: {\r\n      get() {\r\n        let list = this.getCollection("questionlist", {});\r\n        this.page = Math.ceil(list.length / this.row) || 1;\r\n        if (this.page != 1) {\r\n          if (this.page > this.currentPage || this.page == this.currentPage) {\r\n            list = list.slice(0, this.row * this.currentPage);\r\n          }\r\n        }\r\n        return list || [];\r\n      },\r\n      set() {},\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n    collection() {\r\n      return {\r\n        name: "列表",\r\n        key: "list",\r\n        type: "collection",\r\n        model: "collection",\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.display-view-questions-details {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  .box {\r\n    position: relative;\r\n    margin-top: 16px;\r\n    .icon {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n    }\r\n    .box-content {\r\n      padding-top: 3%;\r\n\r\n      .item {\r\n        position: relative;\r\n        margin-top: 21px;\r\n        border-bottom: 1px solid rgba(112, 112, 112, 0.16);\r\n        padding-left: 21px;\r\n        padding-right: 15px;\r\n\r\n        .head {\r\n          display: flex;\r\n          .title {\r\n            flex: 1;\r\n            display: inline-flex;\r\n            .text {\r\n              font-size: 16px;\r\n              font-weight: 400;\r\n              line-height: 18px;\r\n              color: rgba(51, 51, 51, 1);\r\n              margin-right: 16px;\r\n            }\r\n            img {\r\n              width: 43px;\r\n              height: 17px;\r\n            }\r\n          }\r\n          .date {\r\n            font-size: 13px;\r\n            font-weight: 400;\r\n            line-height: 18px;\r\n            color: rgba(177, 177, 177, 1);\r\n          }\r\n        }\r\n        .content {\r\n          margin-top: 15px;\r\n          padding-bottom: 16px;\r\n          font-size: 14px;\r\n          font-weight: 400;\r\n          line-height: 28px;\r\n          color: rgba(102, 102, 102, 1);\r\n          word-break: break-all;\r\n        }\r\n        &:last-child {\r\n          border-bottom: none;\r\n        }\r\n        &.experience {\r\n          .title {\r\n            .span {\r\n              background: rgba(170, 204, 242, 1);\r\n            }\r\n          }\r\n        }\r\n        &.basic {\r\n          .title {\r\n            .span {\r\n              background: linear-gradient(\r\n                270deg,\r\n                rgba(0, 206, 187, 1) 0%,\r\n                rgba(3, 207, 151, 1) 100%\r\n              );\r\n            }\r\n          }\r\n        }\r\n        &.enterprise {\r\n          .title {\r\n            .span {\r\n              background: linear-gradient(\r\n                90deg,\r\n                rgba(44, 131, 243, 1) 0%,\r\n                rgba(28, 81, 255, 1) 100%\r\n              );\r\n            }\r\n          }\r\n        }\r\n        &.senior {\r\n          .title {\r\n            .span {\r\n              background: linear-gradient(\r\n                270deg,\r\n                rgba(82, 94, 126, 1) 0%,\r\n                rgba(53, 69, 96, 1) 100%\r\n              );\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .more {\r\n    color: #0098ff;\r\n    width: 200px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n    cursor: pointer;\r\n    &:hover {\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  2: function(e, n) {},
  2018: function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "list", (function() {
          return c
        }
      )),
      t.d(n, "create", (function() {
          return l
        }
      )),
      t.d(n, "update", (function() {
          return s
        }
      )),
      t.d(n, "remove", (function() {
          return u
        }
      )),
      t.d(n, "enable", (function() {
          return d
        }
      )),
      t.d(n, "debug", (function() {
          return p
        }
      ));
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = "/api/dev"
      , c = function() {
      var e = i();
      return a.request({
        url: "".concat(o, "/api/").concat(e, "/list"),
        method: "get"
      })
    }
      , l = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/api/").concat(n, "/create"),
        data: e,
        method: "post"
      })
    }
      , s = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/api/").concat(t, "/").concat(e, "/update"),
        data: n,
        method: "post"
      })
    }
      , u = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/api/").concat(n, "/").concat(e, "/remove"),
        method: "get"
      })
    }
      , d = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/api/").concat(t, "/").concat(e, "/enable"),
        data: {
          enable: n
        },
        method: "post"
      })
    }
      , p = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/api/").concat(t, "/").concat(e, "/debug"),
        data: n,
        method: "post"
      })
    }
  },
  "20b8": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "init", (function() {
          return r
        }
      ));
    t("7f7f"),
      t("7514");
    var r = function(e) {
      var n = e.find((function(e) {
          return "/" == e.path
        }
      ));
      if (n) {
        var r, a = [{
          path: "/dev/display",
          name: "dev-display-list",
          meta: {
            menu: "display"
          },
          component: function() {
            return t.e("chunk-2b8408c0").then(t.bind(null, "7073"))
          }
        }, {
          path: "/dev/display/:id",
          name: "dev-display-editor",
          meta: {
            menu: "display"
          },
          component: function() {
            return Promise.all([t.e("chunk-c7ccf712"), t.e("chunk-cc740d52"), t.e("chunk-115c73b6"), t.e("chunk-84a33c6e")]).then(t.bind(null, "5719"))
          }
        }, {
          path: "/dev/data/",
          name: "dev-data-list",
          meta: {
            menu: "data"
          },
          component: function() {
            return Promise.all([t.e("chunk-84a33c6e"), t.e("chunk-2896bb8a"), t.e("chunk-115c73b6"), t.e("chunk-1301e256")]).then(t.bind(null, "4d79"))
          }
        }, {
          path: "/dev/data/:entity",
          meta: {
            menu: "data"
          },
          component: function() {
            return Promise.all([t.e("chunk-84a33c6e"), t.e("chunk-2896bb8a"), t.e("chunk-115c73b6"), t.e("chunk-1301e256")]).then(t.bind(null, "4d79"))
          }
        }, {
          path: "/dev/flow/",
          name: "dev-flow-list",
          meta: {
            menu: "flow"
          },
          component: function() {
            return Promise.all([t.e("chunk-84a33c6e"), t.e("chunk-2896bb8a"), t.e("chunk-45424589"), t.e("chunk-115c73b6"), t.e("chunk-4a5a7976")]).then(t.bind(null, "99b1"))
          }
        }, {
          path: "/dev/flow/:id",
          name: "dev-flow-editor",
          meta: {
            menu: "flow"
          },
          component: function() {
            return Promise.all([t.e("chunk-c7ccf712"), t.e("chunk-84a33c6e"), t.e("chunk-2896bb8a"), t.e("chunk-1550fd55"), t.e("chunk-ecabe6e2")]).then(t.bind(null, "c592"))
          }
        }, {
          path: "/dev/preview/",
          name: "dev-preview",
          meta: {
            menu: "preview"
          },
          component: function() {
            return t.e("chunk-vendors").then(t.bind(null, "1425"))
          }
        }, {
          path: "/dev/",
          name: "dev-home",
          meta: {
            menu: "home"
          },
          component: function() {
            return Promise.all([t.e("chunk-39b7c100"), t.e("chunk-2b8408c0")]).then(t.bind(null, "014d"))
          }
        }, {
          path: "/dev/template",
          name: "dev-template",
          meta: {
            menu: "home"
          },
          component: function() {
            return t.e("chunk-4aaf6d8d").then(t.bind(null, "3423"))
          }
        }, {
          path: "/dev/quick",
          name: "dev-quick",
          meta: {
            menu: "quick"
          },
          component: function() {
            return Promise.all([t.e("chunk-c7ccf712"), t.e("chunk-84a33c6e"), t.e("chunk-cc740d52"), t.e("chunk-1550fd55"), t.e("chunk-1301e256")]).then(t.bind(null, "af0d"))
          }
        }, {
          path: "/dev/quick/:route",
          meta: {
            menu: "quick"
          },
          component: function() {
            return Promise.all([t.e("chunk-c7ccf712"), t.e("chunk-84a33c6e"), t.e("chunk-cc740d52"), t.e("chunk-1550fd55"), t.e("chunk-1301e256")]).then(t.bind(null, "af0d"))
          }
        }, {
          path: "/dev/api/",
          name: "dev-api-list",
          meta: {
            menu: "api"
          },
          component: function() {
            return Promise.all([t.e("chunk-c7ccf712"), t.e("chunk-0b25cec0")]).then(t.bind(null, "206e"))
          }
        }, {
          path: "/dev/system/",
          name: "dev-system-list",
          meta: {
            menu: "system"
          },
          component: function() {
            return t.e("chunk-dd20b97e").then(t.bind(null, "a7c0"))
          }
        }, {
          path: "/dev/private/",
          name: "dev-private",
          meta: {
            menu: "private"
          },
          component: function() {
            return t.e("chunk-2b8408c0").then(t.bind(null, "c8bf"))
          }
        }, {
          path: "/dev/logo/",
          name: "dev-logo-list",
          meta: {
            menu: "logo"
          },
          component: function() {
            return t.e("chunk-84a33c6e").then(t.bind(null, "8414"))
          }
        }, {
          path: "/dev/queue/",
          name: "dev-queue",
          meta: {
            menu: "queue"
          },
          component: function() {
            return t.e("chunk-da9b3d66").then(t.bind(null, "477d"))
          }
        }], i = n.children.find((function(e) {
            return "home" == e.name
          }
        ));
        i && (i.beforeEnter = function(e, n, r) {
            var a = t("5b4a").default.store
              , i = a.getters["platform/isDev"];
            i ? r({
              path: "/dev/"
            }) : r()
          }
        ),
          (r = n.children).push.apply(r, a)
      }
    }
  },
  "212d": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <div class="item" v-for="(item,index) in list" :key="index">\r\n      <div class="head">\r\n        <div class="name">{{item.name}}</div>\r\n        <div class="examine">{{item.status}}</div>\r\n      </div>\r\n      <div class="box">\r\n        <div class="child supply" @click="onClick(index)">\r\n          <div class="head">\r\n            <div class="icon">\r\n              <img src="/image/customized/icon-supply.png" alt />\r\n            </div>\r\n            <div class="text">{{item.supply}}</div>\r\n          </div>\r\n          <div class="list-img">\r\n            <img :src="item.supplyImg1" alt />\r\n            <img :src="item.supplyImg2" alt />\r\n            <img :src="item.supplyImg3" alt />\r\n            <img :src="item.supplyImg4" alt />\r\n          </div>\r\n        </div>\r\n        <div class="child need" @click="onClick(index)">\r\n          <div class="head">\r\n            <div class="icon">\r\n              <img src="/image/customized/icon-need.png" alt />\r\n            </div>\r\n            <div class="text">{{item.need}}</div>\r\n          </div>\r\n          <div class="list-img">\r\n            <img :src="item.needImg1" alt />\r\n            <img :src="item.needImg2" alt />\r\n            <img :src="item.needImg3" alt />\r\n            <img :src="item.needImg4" alt />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="foot">\r\n        <div class="time">{{item.time}}</div>\r\n        <div class="btn" v-if="status(item.status)" @click="onDelete(index)">作废</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    status(value) {\r\n      if (value == "待审" || value == "未对接") {\r\n        return true;\r\n      }\r\n      return false;\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        list: {\r\n          type: "collection",\r\n          model: "collection",\r\n          name: "提供物资",\r\n          key: "list",\r\n        },\r\n        "list.status": {\r\n          name: "审核状态",\r\n          key: "list.status",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.name": {\r\n          name: "名字",\r\n          key: "list.name",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.time": {\r\n          name: "时间",\r\n          key: "list.time",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.supply": {\r\n          name: "供",\r\n          key: "list.supply",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.need": {\r\n          name: "需",\r\n          key: "list.need",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.supplyImg1": {\r\n          name: "图一(供)",\r\n          key: "list.supplyImg1",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.supplyImg2": {\r\n          name: "图二(供)",\r\n          key: "list.supplyImg2",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.supplyImg3": {\r\n          name: "图三(供)",\r\n          key: "list.supplyImg3",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.supplyImg4": {\r\n          name: "图四(供)",\r\n          key: "list.supplyImg4",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.needImg1": {\r\n          name: "图一(需)",\r\n          key: "list.needImg1",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.needImg2": {\r\n          name: "图二(需)",\r\n          key: "list.needImg2",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.needImg3": {\r\n          name: "图三(需)",\r\n          key: "list.needImg3",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.needImg4": {\r\n          name: "图四(需)",\r\n          key: "list.needImg4",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {});\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n        delete: {\r\n          key: "delete",\r\n          name: "作废",\r\n        },\r\n      });\r\n    },\r\n    onClick(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("click", item);\r\n    },\r\n    onDelete(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("delete", item);\r\n    },\r\n  },\r\n  computed: {\r\n    list() {\r\n      let list = this.getCollection("list", {}) || [];\r\n      return list;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  .item {\r\n    background: #fff;\r\n    padding: 0 3.3%;\r\n    margin: 3.5% 0 6% 0;\r\n    padding-bottom: 3.5%;\r\n\r\n    & > .head {\r\n      display: flex;\r\n\r\n      .name {\r\n        font-size: 110%;\r\n        font-weight: bold;\r\n        color: #333333;\r\n        flex: 1;\r\n        margin-top: 2.5%;\r\n      }\r\n\r\n      .examine {\r\n        margin-top: 2.5%;\r\n        font-size: 100%;\r\n        font-weight: 400;\r\n        color: #ff6363;\r\n      }\r\n    }\r\n\r\n    .box {\r\n      margin-top: 1%;\r\n      padding-bottom: 3.5%;\r\n\r\n      .child {\r\n        margin-bottom: 2.9%;\r\n        border-radius: 5px;\r\n        padding: 0 5% 3% 0;\r\n\r\n        .head {\r\n          display: flex;\r\n\r\n          .icon {\r\n            width: 12.5%;\r\n            padding-top: 12.5%;\r\n            height: 0;\r\n            position: relative;\r\n\r\n            img {\r\n              width: 100%;\r\n              height: 100%;\r\n              vertical-align: top;\r\n              position: absolute;\r\n              top: 0;\r\n              left: 0;\r\n            }\r\n          }\r\n\r\n          .text {\r\n            margin: 2.9% 0;\r\n            font-size: 100%;\r\n            font-weight: 400;\r\n            color: #333333;\r\n            line-height: 1.4;\r\n            flex: 1;\r\n            text-overflow: -o-ellipsis-lastline;\r\n            overflow: hidden;\r\n            text-overflow: ellipsis;\r\n            display: -webkit-box;\r\n            -webkit-line-clamp: 2;\r\n            line-clamp: 2;\r\n            -webkit-box-orient: vertical;\r\n          }\r\n        }\r\n\r\n        .list-img {\r\n          padding-left: 12.5%;\r\n          font-size: 0;\r\n\r\n          img {\r\n            max-width: 63px;\r\n            max-height: 63px;\r\n            margin-right: 3%;\r\n            width: 22.6%;\r\n            &:last-child {\r\n              margin-right: 0;\r\n            }\r\n          }\r\n        }\r\n\r\n        &.supply {\r\n          background: #f1f8ff;\r\n        }\r\n\r\n        &.need {\r\n          background: #fef5f3;\r\n        }\r\n\r\n        &:last-child {\r\n          margin-bottom: 0;\r\n        }\r\n      }\r\n    }\r\n    .foot {\r\n      display: flex;\r\n      .time {\r\n        flex: 1;\r\n        font-size: 90%;\r\n        font-weight: 400;\r\n        color: #aaa;\r\n        line-height: 1.8;\r\n      }\r\n      .btn {\r\n        border: 1px solid #ff7070;\r\n        border-radius: 100px;\r\n        font-size: 100%;\r\n        font-weight: 400;\r\n        color: #ff6363;\r\n        padding: 0 16px;\r\n        line-height: 1.8;\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  2473: function(e, n, t) {
    "use strict";
    t.r(n),
      function(e) {
        t.d(n, "projectQueue", (function() {
            return u
          }
        )),
          t.d(n, "decrypt", (function() {
              return p
            }
          )),
          t.d(n, "getHeaders", (function() {
              return f
            }
          ));
        t("bf2d"),
          t("bd27"),
          t("8fd6"),
          t("63a5");
        var r = t("d4ec")
          , a = t("bee2")
          , i = t("c20e")
          , o = t.n(i)
          , c = t("a169")
          , l = t("e52e")
          , s = t("cfcc")
          , u = {};
        function d(n) {
          var t = c["default"].getters["user/token"] || "baima20196server"
            , r = n ? 0 : -16;
          t = t.substr(r, 16);
          var a = e.from(t, "utf8");
          return a
        }
        function p(e) {
          var n = d(!1)
            , t = l.createDecipheriv("aes128", n, n)
            , r = t.update(e, "hex", "utf8");
          r += t.final("utf8");
          var a = r
            , i = s.inflate(a, {
            to: "string"
          });
          return i
        }
        function m(e) {
          var n = s.deflate(e, {
            to: "string"
          })
            , t = d(!0)
            , r = l.createCipheriv("aes-128-cbc", t, t)
            , a = r.update(n, "utf8", "hex");
          return a += r.final("hex"),
            a
        }
        function f() {
          var e = c["default"].getters["user/token"];
          return {
            "x-fv-token": e
          }
        }
        var v = function() {
          function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            Object(r["a"])(this, e),
              this.baseUrl = n,
              this.queue = {}
          }
          return Object(a["a"])(e, [{
            key: "getInsideConfig",
            value: function() {
              var e = f()
                , n = {
                baseURL: this.baseUrl,
                headers: e
              };
              return n
            }
          }, {
            key: "destroy",
            value: function(e) {
              delete this.queue[e],
                Object.keys(this.queue).length
            }
          }, {
            key: "interceptors",
            value: function(e, n) {
              var t = this;
              e.interceptors.request.use((function(e) {
                  Object.keys(t.queue).length,
                    t.queue[n] = !0;
                  var r = e.data;
                  if (r) {
                    var a = m(JSON.stringify(r));
                    e.data = {
                      encrypted: a
                    };
                    var i = c["default"].state.debug.enable;
                    i && (e.data.data = r)
                  }
                  return n.includes("[project]") ? new Promise((function(t, r) {
                      u[n] = {
                        url: n,
                        resolve: t,
                        reject: r,
                        config: e
                      }
                    }
                  )) : e
                }
              ), (function(e) {
                  return Promise.reject(e)
                }
              )),
                e.interceptors.response.use((function(e) {
                    t.destroy(n);
                    var r = e.data;
                    e.status;
                    if (r && r.error)
                      return c["default"].commit("notice/error", r),
                        Promise.reject(r);
                    var a = r.encrypted;
                    if (a) {
                      var i = p(a);
                      r.data = JSON.parse(i)
                    }
                    var o = r.cmd;
                    if (o) {
                      var l = p(o);
                      r.cmd = JSON.parse(l)
                    }
                    return r
                  }
                ), (function(e) {
                    t.destroy(n);
                    var r = e.response;
                    if (r) {
                      var a = r.data
                        , i = a && a.error
                        , o = a && a.msg || r.statusText;
                      return 102 == i ? (c["default"].dispatch("platform/queue/setQueue", a.data),
                        Promise.reject()) : (c["default"].commit("notice/error", {
                        error: i,
                        msg: o
                      }),
                        Promise.reject(a))
                    }
                    return c["default"].commit("notice/error", {
                      error: -2,
                      msg: "请求错误"
                    }),
                      Promise.reject(e)
                  }
                ))
            }
          }, {
            key: "request",
            value: function(e) {
              var n = o.a.create();
              return e = Object.assign(this.getInsideConfig(), e),
                this.interceptors(n, e.url),
                n(e)
            }
          }, {
            key: "getProject",
            value: function() {
              var e = c["default"].getters["platform/project"]._id;
              return e || "[project]"
            }
          }, {
            key: "getSystem",
            value: function() {
              return c["default"].getters["platform/project"]._store
            }
          }]),
            e
        }();
        n["default"] = v
      }
        .call(this, t("1c35").Buffer)
  },
  "289e": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "getUsers", (function() {
          return u
        }
      )),
      t.d(n, "createUser", (function() {
          return d
        }
      )),
      t.d(n, "bindUser", (function() {
          return p
        }
      )),
      t.d(n, "kickUser", (function() {
          return m
        }
      )),
      t.d(n, "banUser", (function() {
          return f
        }
      )),
      t.d(n, "activeUser", (function() {
          return v
        }
      )),
      t.d(n, "updateUser", (function() {
          return h
        }
      ));
    t("29d3"),
      t("8fd6"),
      t("63a5");
    var r = t("ade3")
      , a = (t("9e5e"),
      t("2473"));
    function i(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function o(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? i(Object(t), !0).forEach((function(n) {
            Object(r["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var c = new a["default"]("")
      , l = c.getProject
      , s = "/api/dev"
      , u = function(e) {
      var n = l();
      return c.request({
        url: "".concat(s, "/user/").concat(n, "/list"),
        method: "post",
        data: {
          list: e
        }
      })
    }
      , d = function(e, n, t) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
        , a = l();
      return c.request({
        url: "".concat(s, "/user/").concat(a, "/create"),
        method: "post",
        data: {
          role: e,
          account: n,
          pwd: t,
          name: r.name,
          phone: r.phone
        }
      })
    }
      , p = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = l();
      return c.request({
        url: "".concat(s, "/user/").concat(t, "/bind"),
        method: "post",
        data: o({
          role: e
        }, n)
      })
    }
      , m = function(e) {
      var n = l();
      return c.request({
        url: "".concat(s, "/user/").concat(n, "/").concat(e, "/kick"),
        method: "get"
      })
    }
      , f = function(e) {
      var n = l();
      return c.request({
        url: "".concat(s, "/user/").concat(n, "/").concat(e, "/ban"),
        method: "get"
      })
    }
      , v = function(e) {
      var n = l();
      return c.request({
        url: "".concat(s, "/user/").concat(n, "/").concat(e, "/active"),
        method: "get"
      })
    }
      , h = function(e, n) {
      var t = l();
      return c.request({
        url: "".concat(s, "/user/").concat(t, "/").concat(e, "/update"),
        method: "post",
        data: n
      })
    }
  },
  "28a1": function(e, n, t) {
    "use strict";
    t.d(n, "a", (function() {
        return u
      }
    )),
      t.d(n, "b", (function() {
          return d
        }
      ));
    var r = t("2473")
      , a = new r["default"]
      , i = a.getProject
      , o = "/api/common"
      , c = {}
      , l = 2e3
      , s = function(e, n) {
      return c[e] || (c[e + "_reset"] = _.debounce((function() {
          c[e] = !1
        }
      ), l),
        c[e] = a.request(n).then((function(n) {
            return c[e + "_reset"](),
              n
          }
        ))),
        c[e]
    }
      , u = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      window.windowProxy && window.windowProxy.post({
        action: "display",
        data: e
      });
      var t = i()
        , r = "display-program-".concat(e, "-").concat(n)
        , a = {
        url: "".concat(o, "/program/").concat(t, "/display/").concat(e, "/").concat(n),
        method: "get"
      };
      return s(r, a)
    }
      , d = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
        , t = arguments.length > 2 ? arguments[2] : void 0;
      window.windowProxy && window.windowProxy.post({
        action: "exec",
        data: e
      });
      var r = i();
      return a.request({
        url: "".concat(o, "/program/").concat(r, "/exec/").concat(e, "/").concat(n),
        data: t,
        method: "post"
      })
    }
  },
  "2b55": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n\t<div class="view">\r\n\t\t<div class="content" :class="{anim:animate}">\r\n\t\t\t<div class="item" v-for="(item,index) in noticeList" :key="index">{{item.content}}</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n<script>\r\n\tmodule.exports = {\r\n  data() {\r\n    return {\r\n      noticeList: [],\r\n      animate: false,\r\n      intNum: undefined,\r\n    };\r\n  },\r\n  methods: {\r\n    onClick() {\r\n      this.doAction("click", this.data);\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        news: {\r\n          type: "collection",\r\n          model: "collection",\r\n          name: "消息",\r\n          key: "news",\r\n        },\r\n        "news.content": {\r\n          name: "内容",\r\n          key: "news.content",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {});\r\n    },\r\n    scrollUp() {\r\n      if (this.noticeList.length > 1) {\r\n        this.intNum = setInterval(() => {\r\n          this.animate = true; // 向上滚动的时候需要添加css3过渡动画\r\n          setTimeout(() => {\r\n            this.noticeList.push(this.noticeList[0]);\r\n            this.noticeList.shift();\r\n            this.animate = false;\r\n          }, 2370);\r\n        }, 2400);\r\n      }\r\n    },\r\n    //鼠标移上去停止\r\n    stop() {\r\n      clearInterval(this.intNum);\r\n    },\r\n    up() {\r\n      this.scrollUp();\r\n    },\r\n  },\r\n  computed: {\r\n    list() {\r\n      let list = this.getCollection("news", {}) || [];\r\n      return list;\r\n    },\r\n  },\r\n  watch: {\r\n    list: {\r\n      handler: function (value) {\r\n        if (value.length > 0) {\r\n          this.noticeList = [...value];\r\n          this.stop();\r\n          this.scrollUp();\r\n        }\r\n      },\r\n      deep: true,\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n\t.view {\r\n\t\twidth: 93.9%;\r\n\t\theight: 0;\r\n\t\tpadding: 10px 15px;\r\n\t\tpadding-bottom: 60px;\r\n\t\tbackground: rgba(246, 246, 246, 1);\r\n\t\tborder-radius: 16px;\r\n\t\tmargin: 0 auto;\r\n\t\tborder-radius: 4px;\r\n\t\toverflow: hidden;\r\n\t\ttransition: top 0.5s;\r\n\r\n\t\t.content {\r\n\t\t\theight: 50px;\r\n\t\t\toverflow: hidden;\r\n\r\n\t\t\t&.anim {\r\n\t\t\t\theight: 100px;\r\n\t\t\t\ttransition: linear 2.4s;\r\n\t\t\t\tmargin-top: -50px;\r\n\t\t\t}\r\n\r\n\t\t\t.item {\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tcolor: rgb(102, 102, 102);\r\n\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\theight: 40px;\r\n        line-height:22px;\r\n\t\t\t\ttext-overflow: -o-ellipsis-lastline;\r\n\t\t\t\toverflow: hidden;\r\n        word-break: break-all;\r\n\t\t\t\ttext-overflow: ellipsis;\r\n\t\t\t\tdisplay: -webkit-box;\r\n\t\t\t\t-webkit-line-clamp: 2;\r\n\t\t\t\tline-clamp: 2;\r\n\t\t\t\t-webkit-box-orient: vertical;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n</style>'
  },
  "2d57": function(e, n, t) {
    "use strict";
    t.d(n, "a", (function() {
        return o
      }
    ));
    var r = t("2473")
      , a = new r["default"]
      , i = "/api/common"
      , o = function(e) {
      return a.request({
        url: "".concat(i, "/project/custom/").concat(e)
      })
    }
  },
  "2df3": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "get", (function() {
          return c
        }
      )),
      t.d(n, "update", (function() {
          return l
        }
      )),
      t.d(n, "listModule", (function() {
          return s
        }
      )),
      t.d(n, "listEntity", (function() {
          return u
        }
      )),
      t.d(n, "listField", (function() {
          return d
        }
      )),
      t.d(n, "createEntity", (function() {
          return p
        }
      )),
      t.d(n, "updateEntity", (function() {
          return m
        }
      )),
      t.d(n, "removeEntity", (function() {
          return f
        }
      )),
      t.d(n, "createField", (function() {
          return v
        }
      )),
      t.d(n, "updateField", (function() {
          return h
        }
      )),
      t.d(n, "sortField", (function() {
          return g
        }
      )),
      t.d(n, "removeField", (function() {
          return y
        }
      )),
      t.d(n, "createModule", (function() {
          return b
        }
      )),
      t.d(n, "updateModule", (function() {
          return k
        }
      )),
      t.d(n, "removeModule", (function() {
          return _
        }
      )),
      t.d(n, "addModuleItem", (function() {
          return w
        }
      )),
      t.d(n, "quickCreate", (function() {
          return x
        }
      )),
      t.d(n, "useTemplate", (function() {
          return O
        }
      )),
      t.d(n, "getTemplate", (function() {
          return j
        }
      )),
      t.d(n, "setCustom", (function() {
          return P
        }
      ));
    t("9e5e");
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = "/api/dev"
      , c = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/project/").concat(n, "?mode=").concat(e),
        method: "get"
      })
    }
      , l = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/project/").concat(n),
        method: "post",
        data: {
          name: e
        }
      })
    }
      , s = function() {
      var e = i();
      return a.request({
        url: "".concat(o, "/project/").concat(e, "/module"),
        method: "get"
      })
    }
      , u = function() {
      var e = i();
      return a.request({
        url: "".concat(o, "/project/").concat(e, "/listEntity"),
        method: "get"
      })
    }
      , d = function(e) {
      var n = i()
        , t = "".concat(o, "/project/").concat(n, "/listField");
      return e && (t = "".concat(o, "/project/").concat(n, "/").concat(e, "/listField")),
        a.request({
          url: t,
          method: "get"
        })
    }
      , p = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/project/").concat(n, "/createEntity"),
        method: "post",
        data: {
          name: e
        }
      })
    }
      , m = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/project/").concat(t, "/").concat(e, "/updateEntity"),
        method: "post",
        data: n
      })
    }
      , f = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/project/").concat(n, "/").concat(e, "/removeEntity"),
        method: "get"
      })
    }
      , v = function(e, n) {
      var t = n.name
        , r = n.type
        , c = n.relate
        , l = n.code
        , s = i();
      return a.request({
        url: "".concat(o, "/project/").concat(s, "/").concat(e, "/createField"),
        method: "post",
        data: {
          name: t,
          type: r,
          relate: c,
          code: l
        }
      })
    }
      , h = function(e, n, t) {
      var r = i();
      return a.request({
        url: "".concat(o, "/project/").concat(r, "/").concat(e, "/").concat(n, "/updateField"),
        method: "post",
        data: t
      })
    }
      , g = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/project/").concat(t, "/").concat(e, "/sortField"),
        method: "post",
        data: n
      })
    }
      , y = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/project/").concat(t, "/").concat(e, "/").concat(n, "/hideField"),
        method: "get"
      })
    }
      , b = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/project/").concat(n, "/module/create"),
        method: "post",
        data: {
          name: e
        }
      })
    }
      , k = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/project/").concat(t, "/module/").concat(e, "/update"),
        method: "post",
        data: n
      })
    }
      , _ = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/project/").concat(n, "/module/").concat(e, "/remove"),
        method: "get"
      })
    }
      , w = function(e, n, t) {
      var r = i();
      return a.request({
        url: "".concat(o, "/project/").concat(r, "/module/").concat(e, "/add"),
        method: "post",
        data: {
          type: n,
          item: t
        }
      })
    }
      , x = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/project/").concat(n, "/quickCreate"),
        method: "post",
        data: e
      })
    }
      , O = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/project/").concat(n, "/useTemplate/").concat(e),
        method: "get"
      })
    }
      , j = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/project/").concat(n, "/getTemplate/").concat(e),
        method: "get"
      })
    }
      , P = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/project/").concat(n, "/custom/set"),
        method: "post",
        data: e
      })
    }
  },
  "2f7b": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n     <List>\r\n        <ListItem>\r\n            <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />\r\n        </ListItem>\r\n        <ListItem>\r\n            <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />\r\n        </ListItem>\r\n        <ListItem>\r\n            <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />\r\n            <template slot="action">\r\n                <li>\r\n                    <a href="">Edit</a>\r\n                </li>\r\n                <li>\r\n                    <a href="">More</a>\r\n                </li>\r\n            </template>\r\n        </ListItem>\r\n        <ListItem>\r\n            <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />\r\n            <template slot="action">\r\n                <li>\r\n                    <a href="">Edit</a>\r\n                </li>\r\n                <li>\r\n                    <a href="">More</a>\r\n                </li>\r\n            </template>\r\n        </ListItem>\r\n    </List>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "30cd": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Tag>标签一</Tag>\r\n    <Tag>标签二</Tag>\r\n    <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      show: true,\r\n    };\r\n  },\r\n  methods: {\r\n    handleClose() {\r\n      this.show = false;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  3254: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <div class="item" v-for="(item, index) in list" :key="index">\r\n      <div class="title">{{ item.title }}</div>\r\n      <div class="remarks">{{ item.remarks }}</div>\r\n      <div class="foot">\r\n        <div class="item delete" @click="remove(index)" v-if="stateEdit">\r\n          <img src="/image/customized/icon-inquiry-delete.png" alt />\r\n          <span>删除</span>\r\n        </div>\r\n        <div class="item edit" @click="edit(index)"  v-if="stateRemove">\r\n          <img src="/image/customized/icon-inquiry-edit.png" alt />\r\n          <span>编辑</span>\r\n        </div>\r\n        <div class="item send" @click="send(index)"   v-if="stateSend">\r\n          <img src="/image/customized/icon-send.png" alt />\r\n          <span>发送</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        list: {\r\n          type: "collection",\r\n          model: "collection",\r\n          name: "消息",\r\n          key: "list",\r\n        },\r\n        "list.title": {\r\n          name: "标题",\r\n          key: "list.title",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.remarks": {\r\n          name: "备注",\r\n          key: "list.remarks",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        edit: {\r\n          ...this.select,\r\n          name: "编辑(按钮)",\r\n          key: "edit",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n        remove: {\r\n          ...this.select,\r\n          name: "删除(按钮)",\r\n          key: "remove",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n        send: {\r\n          ...this.select,\r\n          name: "发送(按钮)",\r\n          key: "send",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        remove: {\r\n          key: "remove",\r\n          name: "删除",\r\n        },\r\n        edit: {\r\n          key: "edit",\r\n          name: "编辑",\r\n        },\r\n        send: {\r\n          key: "send",\r\n          name: "发送",\r\n        },\r\n      });\r\n    },\r\n    remove(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("remove", item);\r\n    },\r\n    edit(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("edit", item);\r\n    },\r\n    send(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("send", item);\r\n    },\r\n  },\r\n  computed: {\r\n    stateEdit() {\r\n      let state = this.viewOption["edit"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    stateRemove() {\r\n      let state = this.viewOption["remove"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    stateSend() {\r\n      let state = this.viewOption["send"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    list() {\r\n      let list = this.getCollection("list", {}) || [];\r\n      return list;\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  & > .item {\r\n    margin: 0 5%;\r\n    padding: 0 3.6%;\r\n    padding-top: 4.4%;\r\n    margin-bottom: 4.2%;\r\n    background: #fff;\r\n    box-shadow: 0px 4px 14px rgba(75, 105, 123, 0.13);\r\n    border-radius: 12px 0 12px 12px;\r\n\r\n    &:first-child {\r\n      margin-top: 4.2%;\r\n    }\r\n\r\n    .title {\r\n      font-size: 100%;\r\n      font-weight: 400;\r\n      line-height: 1.28;\r\n      padding: 0 0.5%;\r\n      padding-bottom: 3%;\r\n      color: #333;\r\n      border-bottom: 0.18vw solid rgba(112, 112, 112, 0.16);\r\n    }\r\n\r\n    .remarks {\r\n      font-size: 95%;\r\n      font-weight: 400;\r\n      color: #b2b2b2;\r\n      line-height: 1.28;\r\n      opacity: 0.75;\r\n      padding: 3% 0;\r\n    }\r\n\r\n    .foot {\r\n      text-align: right;\r\n      padding-bottom: 3%;\r\n      text-align: right;\r\n      font-size: 0;\r\n\r\n      .item {\r\n        font-size: 100%;\r\n        word-break: break-word;\r\n        text-align: center;\r\n        width: 33.333%;\r\n        display: inline-block;\r\n        border-right: 0.18vw solid rgba(112, 112, 112, 0.16);\r\n        &.send {\r\n          span {\r\n            color: #1674fd;\r\n          }\r\n        }\r\n\r\n        &:last-child {\r\n          border-right: none;\r\n        }\r\n\r\n        img {\r\n          max-width: 16px;\r\n          max-height: 16px;\r\n          vertical-align: middle;\r\n        }\r\n\r\n        span {\r\n          font-weight: 400;\r\n          color: #333;\r\n          display: inline-block;\r\n          word-break: break-word;\r\n          padding-left: 6px;\r\n          vertical-align: middle;\r\n          font-size: small;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  3328: function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "TOKEN_KEY", (function() {
          return o
        }
      )),
      t.d(n, "local", (function() {
          return c
        }
      )),
      t.d(n, "setToken", (function() {
          return l
        }
      )),
      t.d(n, "getToken", (function() {
          return s
        }
      )),
      t.d(n, "localSave", (function() {
          return u
        }
      )),
      t.d(n, "localRead", (function() {
          return d
        }
      )),
      t.d(n, "getUrlQuery", (function() {
          return p
        }
      )),
      t.d(n, "deepEqual", (function() {
          return m
        }
      )),
      t.d(n, "isEmptyObject", (function() {
          return f
        }
      )),
      t.d(n, "compare", (function() {
          return v
        }
      )),
      t.d(n, "UA", (function() {
          return h
        }
      )),
      t.d(n, "getExistValue", (function() {
          return g
        }
      )),
      t.d(n, "deepCopy", (function() {
          return y
        }
      )),
      t.d(n, "toFixed", (function() {
          return b
        }
      )),
      t.d(n, "hasNaN", (function() {
          return k
        }
      )),
      t.d(n, "sort", (function() {
          return _
        }
      )),
      t.d(n, "optUtil", (function() {
          return w
        }
      )),
      t.d(n, "conditionUtil", (function() {
          return x
        }
      )),
      t.d(n, "compress", (function() {
          return O
        }
      )),
      t.d(n, "isCustom", (function() {
          return j
        }
      ));
    t("a29f"),
      t("9e5e"),
      t("d9e5"),
      t("7a8b"),
      t("af5e"),
      t("bf2d"),
      t("bd27"),
      t("99e7"),
      t("901c"),
      t("8fd6"),
      t("63a5");
    var r = t("53ca")
      , a = t("036b")
      , i = t.n(a)
      , o = "app_token"
      , c = function() {
      var e = t("9095").namespace("app")
        , n = e.namespace("cache");
      return e.cache = {
        get: function(e) {
          var t = n.get(e);
          if (t) {
            var r = (new Date).getTime();
            return r > t.expired ? void n.remove(e) : t.value
          }
        },
        set: function(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 60
            , a = (new Date).getTime() + 1e3 * r;
          n.set(e, {
            expired: a,
            value: t
          })
        }
      },
        e
    }()
      , l = function(e) {
      u(o, e)
    }
      , s = function() {
      var e = d(o);
      return e || !1
    }
      , u = function(e, n) {
      c.set(e, n)
    }
      , d = function(e) {
      return c.get(e)
    }
      , p = function() {
      var e = t("0b16").parse(location.href, !0);
      return e.query || {}
    }
      , m = function(e, n) {
      return !e && !n || e && n && JSON.stringify(e) == JSON.stringify(n)
    }
      , f = function(e) {
      return !e || "object" == Object(r["a"])(e) && 0 == Object.keys(e).length
    }
      , v = function(e, n) {
      if (void 0 === e)
        return -1;
      if (void 0 == n)
        return 1;
      var t = Number(e)
        , r = Number(n);
      return Number.isNaN(t.valueOf()) || Number.isNaN(r.valueOf()) ? (e + "").localeCompare(n + "") : t - r
    }
      , h = function() {
      for (var e = navigator.userAgent.toLowerCase(), n = e.includes("iphone"), t = e.includes("ipad"), r = e.includes("miniprogram"), a = e.includes("micromessenger"), i = e.includes("wxwork"), o = {}, c = ["android", "iphone", "symbianos", "windows phone", "ipad", "ipod"], l = !0, s = 0; s < c.length; s++)
        if (e.indexOf(c[s]) > 0) {
          l = !1;
          break
        }
      return l = t || l,
        o.isIos = n || t,
        o.isPc = l,
        o.isMobile = !l,
        o.isWxapp = r,
        o.isWeixin = a,
        o.isWxwork = i,
        o
    }()
      , g = function() {
      for (var e, n = 0; n < arguments.length; n++)
        if (e = n < 0 || arguments.length <= n ? void 0 : arguments[n],
        void 0 !== e)
          return e;
      return e
    }
      , y = function(e) {
      var n = e;
      return (e instanceof Object || e instanceof Array) && (n = JSON.parse(JSON.stringify(e))),
        n
    }
      , b = function(e) {
      var n = Number(e);
      if (Number.isNaN(n.valueOf()))
        return 0;
      var r = t("a169").default
        , a = r.getters["platform/project"]
        , i = a && a.option || {}
        , o = i.accuracy || 2;
      return n = Math.round(n * Math.pow(10, o)) / Math.pow(10, o),
        n
    }
      , k = function() {
      for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
        n[t] = arguments[t];
      for (var r = 0; r < n.length; r++)
        if (Number.isNaN(n[r].valueOf()))
          return !0
    }
      , _ = function(e, n, t, r) {
      var a = n[t]
        , i = n[r];
      function o(n) {
        var t = e[n];
        return t
      }
      var c = o(i._id);
      o(a._id);
      if (t > r)
        for (var l = r; l < n.length && l < t; l++) {
          var s = n[l]._id
            , u = n[l + 1] && n[l + 1]._id;
          e[s] = o(u)
        }
      else if (t < r)
        for (var d = r; d >= 0 && d > t; d--) {
          var p = n[d]._id
            , m = n[d - 1] && n[d - 1]._id;
          e[p] = o(m)
        }
      return e[a._id] = c,
        e
    }
      , w = function() {
      var e = {
        handle: function(n, t, r) {
          return e[n] ? (void 0 === t && (t = ""),
          void 0 === r && (r = ""),
            e[n](t, r)) : t
        },
        plus: function(e, n) {
          var t = new Number(e)
            , r = new Number(n);
          if (k(t, r))
            return e + n;
          var a = t + r;
          return b(a) + ""
        },
        minus: function(e, n) {
          var t = new Number(e)
            , r = new Number(n);
          if (k(t, r))
            return e;
          var a = t - r;
          return b(a) + ""
        },
        multiple: function(e, n) {
          var t = new Number(e)
            , r = new Number(n);
          if (k(t, r))
            return e;
          var a = t * r;
          return b(a) + ""
        },
        divide: function(e, n) {
          var t = new Number(e)
            , r = new Number(n);
          if (k(t, r))
            return e;
          var a = t / r;
          return b(a) + ""
        }
      };
      return e
    }()
      , x = function() {
      var e = {
        handle: function(n, t, r) {
          if (e[n]) {
            if (void 0 === t && (t = ""),
            void 0 === r && (r = ""),
              Array.isArray(t)) {
              var a = !0;
              if (0 == t.length)
                return !1;
              for (var i = 0; i < t.length; i++)
                a = a && e[n](t[i], r);
              return a
            }
            return e[n](t, r)
          }
          return t
        },
        gt: function(e, n) {
          var t = new Number(e)
            , r = new Number(n);
          return k(t, r) ? e > n : t > r
        },
        eq: function(e, n) {
          return e == n
        },
        ne: function(e, n) {
          return e != n
        },
        lt: function(e, n) {
          var t = new Number(e)
            , r = new Number(n);
          return k(t, r) ? e < n : t < r
        }
      };
      return e
    }()
      , O = function(e, n) {
      var t = n
        , r = function(e) {
        return new Promise((function(n, t) {
            i.a.getData(e, (function() {
                var e = i.a.getTag(this, "Orientation") || 0;
                n(e)
              }
            ))
          }
        ))
      }
        , a = function(e, n) {
        return new Promise((function(r, a) {
            var i = 1
              , o = new FileReader;
            o.readAsDataURL(e),
              o.onload = function(e) {
                var a = new Image;
                a.src = e.target.result,
                  a.onload = function() {
                    var e = document.createElement("canvas")
                      , o = e.getContext("2d");
                    a.width > t && (i = 1 * a.width / t),
                    a.height > t && (i = Math.max(1 * a.height / t, i));
                    var c, l, s, u, d = a.width / i, p = a.height / i, m = 0;
                    c = d,
                      l = p;
                    var f = Math.max(c, l);
                    if (f > t) {
                      var v = Math.min(c, l);
                      v = v / f * t,
                        f = t,
                        c > l ? (c = f,
                          l = v) : (c = v,
                          l = f)
                    }
                    var h = "";
                    switch (e.width = s = c,
                      e.height = u = l,
                      n) {
                      case 3:
                        m = 180,
                          c = -s,
                          l = -u;
                        break;
                      case 6:
                        e.width = u,
                          e.height = s,
                          m = 90,
                          c = s,
                          l = -u;
                        break;
                      case 8:
                        e.width = u,
                          e.height = s,
                          m = 270,
                          c = -s,
                          l = u;
                        break
                    }
                    o.rotate(m * Math.PI / 180),
                      o.drawImage(a, 0, 0, c, l),
                      h = e.toDataURL("image/png"),
                      r(h)
                  }
              }
          }
        ))
      }
        , o = function(e, n) {
        var t = e.split(",")
          , r = t[0].match(/:(.*?);/)[1]
          , a = atob(t[1])
          , i = a.length
          , o = new Uint8Array(i);
        while (i--)
          o[i] = a.charCodeAt(i);
        return new File([o],n,{
          type: r
        })
      };
      return new Promise((function(n, t) {
          r(e).then((function(t) {
              a(e, t).then((function(t) {
                  var r = o(t, e.name);
                  n(r)
                }
              ))
            }
          ))
        }
      ))
    }
      , j = function() {
      var e = document.URL;
      e = e.replace(/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?/, "");
      var n = e.match(/^\/[0-9a-f]{24}\//g);
      return n && n[0] && (n = n[0],
        n = n.replace(/\//g, "")),
        n
    }
  },
  "38c5": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <i-circle :percent="80">\r\n      <span class="demo-Circle-inner" style="font-size:24px">80%</span>\r\n    </i-circle>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "38f8": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <InputNumber :max="10" :min="1" v-model="value"></InputNumber>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      value: 1,\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  3940: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Anchor show-ink>\r\n      <AnchorLink href="#basic_usage" title="Basic Usage" />\r\n      <AnchorLink href="#static_position" title="Static Position" />\r\n      <AnchorLink href="#API" title="API">\r\n        <AnchorLink href="#Anchor_props" title="Anchor props" />\r\n        <AnchorLink href="#Anchor_events" title="Anchor events" />\r\n        <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />\r\n      </AnchorLink>\r\n    </Anchor>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  margin-top: 6px;\r\n  margin-left: 10px;\r\n}\r\n</style>'
  },
  "3a79": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "active", (function() {
          return o
        }
      ));
    var r = t("2473")
      , a = new r["default"]("")
      , i = "/api/dev"
      , o = function() {
      return a.request({
        url: "".concat(i, "/project/active"),
        method: "get"
      })
    }
  },
  "3cab": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "list", (function() {
          return c
        }
      )),
      t.d(n, "create", (function() {
          return l
        }
      )),
      t.d(n, "update", (function() {
          return s
        }
      )),
      t.d(n, "sort", (function() {
          return u
        }
      )),
      t.d(n, "bind", (function() {
          return d
        }
      )),
      t.d(n, "remove", (function() {
          return p
        }
      ));
    t("9e5e");
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = "/api/dev"
      , c = function() {
      var e = i();
      return a.request({
        url: "".concat(o, "/route/").concat(e, "/list"),
        method: "get"
      })
    }
      , l = function(e) {
      var n = e.type
        , t = e.name
        , r = e.parent
        , c = e.value
        , l = i();
      return a.request({
        url: "".concat(o, "/route/").concat(l, "/create"),
        method: "post",
        data: {
          type: n,
          name: t,
          parent: r,
          value: c
        }
      })
    }
      , s = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = i();
      return a.request({
        url: "".concat(o, "/route/").concat(t, "/").concat(e, "/update"),
        method: "post",
        data: n
      })
    }
      , u = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/route/").concat(n, "/sort"),
        method: "post",
        data: {
          routes: e
        }
      })
    }
      , d = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/route/").concat(t, "/").concat(e, "/bind"),
        method: "post",
        data: {
          programs: n
        }
      })
    }
      , p = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/route/").concat(n, "/").concat(e, "/remove"),
        method: "get"
      })
    }
  },
  "3cdf": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <div :style="textStyle" @click="onClick" class="base-number">\r\n      <countTo :start-val="startVal" :end-val="endVal" :duration="3000"></countTo>\r\n    </div>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      startVal: 0,\r\n      endVal: 0,\r\n    };\r\n  },\r\n  methods: {\r\n    onClick() {\r\n      this.doAction("click", this.endValue);\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        value: {\r\n          ...this.number,\r\n        },\r\n      });\r\n\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        width: 2,\r\n        height: 2,\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        textSize: this.textSize,\r\n        textWeight: {\r\n          ...this.select,\r\n          name: "文字粗细",\r\n          key: "textWeight",\r\n          default: "400",\r\n          value: [\r\n            { key: "400", name: "常规", value: "400" },\r\n            { key: "bold", name: "加粗", value: "bold" },\r\n          ],\r\n        },\r\n        align: {\r\n          ...this.align,\r\n        },\r\n        primaryColor: this.primaryColor,\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n  },\r\n  computed: {\r\n    endValue() {\r\n      let value = this.getValue("value");\r\n      try {\r\n        value = new Number(value);\r\n      } catch (e) {}\r\n      if (Number.isNaN(value.valueOf())) {\r\n        value = 0;\r\n      }\r\n      return value;\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let primaryColor = this.v.color(option.primaryColor);\r\n      let align = this.v.align(option.align);\r\n      let textWeight = option.textWeight;\r\n      let padding = this.viewBody.padding;\r\n      let style = {};\r\n      style["color"] = `${primaryColor}`;\r\n      style["font-weight"] = textWeight;\r\n      style[\r\n        "padding"\r\n      ] = `${padding["top"]}px ${padding["right"]}px ${padding["bottom"]}px ${padding["left"]}px`;\r\n      return {\r\n        ...textSize,\r\n        ...align,\r\n        ...style,\r\n      };\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "文字大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    align() {\r\n      return {\r\n        name: "对齐",\r\n        type: "align",\r\n        default: "center",\r\n        key: "align",\r\n        value: [\r\n          "left-top", //左上\r\n          "top", //中上\r\n          "right-top", //右上\r\n          "left-center", //左中\r\n          "center", //居中\r\n          "right-center", //右中\r\n          "left-bottom", //左下\r\n          "bottom", //中下\r\n          "right-bottom", //右下\r\n        ],\r\n      };\r\n    },\r\n    number() {\r\n      return {\r\n        name: "数字",\r\n        key: "value",\r\n        type: "number",\r\n        model: "default",\r\n        default: "0",\r\n        format: "",\r\n      };\r\n    },\r\n  },\r\n  watch: {\r\n    endValue: {\r\n      immediate: true,\r\n      handler(value) {\r\n        if (value) {\r\n          //不一样才刷新\r\n          if (!_.isEqual(this.endVal, value)) {\r\n            this.endVal = value;\r\n          }\r\n        }\r\n      },\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  // 在此开始写自定义样式\r\n  .base-number {\r\n    position: absolute;\r\n    display: inline-block;\r\n    width: 100%;\r\n    cursor: default;\r\n  }\r\n}\r\n</style>'
  },
  "3f41": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "listRoute", (function() {
          return c
        }
      ));
    var r = t("2473")
      , a = new r["default"]
      , i = a.getProject
      , o = "/api/app"
      , c = function() {
      var e = i();
      return a.request({
        url: "".concat(o, "/rt/").concat(e, "/list"),
        method: "get"
      })
    }
  },
  "3fd4": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n\r\n    <Dropdown trigger="click" transfer :placement="placement">\r\n      <a href="javascript:void(0)" :style="style">\r\n        <Icon type="ios-more"></Icon>\r\n      </a>\r\n      <div slot="list">\r\n        <div\r\n          class="ivu-dropdown-item"\r\n          v-for="(item, index) in list"\r\n          :key="index"\r\n          @click="onClick(index)"\r\n        >\r\n          {{ item.name }}\r\n        </div>\r\n      </div>\r\n    </Dropdown>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    onClick(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("foo" + index, item);\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        list: {\r\n          ...this.collection,\r\n          name: "下拉菜单",\r\n          key: "list",\r\n        },\r\n        "list.name": {\r\n          ...this.string,\r\n          name: "名称",\r\n          key: "list.name",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        textSize: this.textSize,\r\n        primaryColor: this.primaryColor,\r\n        placement: {\r\n          ...this.select,\r\n          name: "下拉菜单出现的位置",\r\n          key: "placement",\r\n          default: "bottom",\r\n          value: [\r\n            {\r\n              key: "bottom-start",\r\n              name: "下左",\r\n              value: "bottom-start",\r\n            },\r\n            { key: "bottom", name: "中", value: "bottom" },\r\n            { key: "bottom-end", name: "下右", value: "bottom-end" },\r\n          ],\r\n        },\r\n      });\r\n\r\n      let map = {};\r\n      this.list.forEach(function (value, index) {\r\n        map["foo" + index] = {\r\n          key: "foo" + index,\r\n          name: value.name,\r\n        };\r\n      });\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", map);\r\n    },\r\n    setInputValue(key, value) {\r\n      let adapter = this.getAdapter(key);\r\n      let adapterValue = adapter.value;\r\n      if (adapterValue && adapterValue[0] == "prop") {\r\n        let variableKey = adapterValue[1];\r\n        if (variableKey) {\r\n          this.displayStore.dispatch("property/setValue", {\r\n            key: variableKey,\r\n            value,\r\n          });\r\n        }\r\n      }\r\n    },\r\n  },\r\n  computed: {\r\n    list() {\r\n      let list = this.getCollection("list", {});\r\n      return list || [];\r\n    },\r\n    placement() {\r\n      let option = this.viewOption;\r\n      return option.placement;\r\n    },\r\n    style() {\r\n      let option = this.viewOption;\r\n      let style = {};\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let primaryColor = this.v.color(option.primaryColor);\r\n      style["color"] = `${primaryColor}`;\r\n      return {\r\n        ...textSize,\r\n        ...style,\r\n      };\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    align() {\r\n      return {\r\n        name: "对齐",\r\n        type: "align",\r\n        default: "center",\r\n        key: "align",\r\n        value: [\r\n          "left-top", //左上\r\n          "top", //中上\r\n          "right-top", //右上\r\n          "left-center", //左中\r\n          "center", //居中\r\n          "right-center", //右中\r\n          "left-bottom", //左下\r\n          "bottom", //中下\r\n          "right-bottom", //右下\r\n        ],\r\n      };\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n    collection() {\r\n      return {\r\n        name: "列表",\r\n        key: "list",\r\n        type: "collection",\r\n        model: "collection",\r\n      };\r\n    },\r\n    input() {\r\n      return {\r\n        name: "输入框",\r\n        type: "input",\r\n        default: "",\r\n        key: "input",\r\n        value: [],\r\n        hideTitle: true,\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  height: 100%;\r\n\r\n  // 在此开始写自定义样式\r\n  .ivu-dropdown {\r\n    width: 100%;\r\n    text-align: center;\r\n    height: 100%;\r\n    position: relative;\r\n\r\n    .ivu-dropdown-rel {\r\n      position: initial;\r\n      height: 100%;\r\n    }\r\n\r\n    .ivu-icon {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translateX(-50%) translateY(-50%);\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  "40ea": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <div class="item" v-for="(item, index) in list" :key="index">\r\n      <div class="head">\r\n        <div class="date">{{ item.date }}</div>\r\n        <div class="time">{{ item.time }}</div>\r\n\r\n        <Dropdown transfer trigger="click">\r\n          <div class="more">\r\n            <Icon type="ios-more"></Icon>\r\n          </div>\r\n          <div slot="list">\r\n            <div\r\n              class="ivu-dropdown-item"\r\n              @click="finish(index)"\r\n              v-if="stateFinish"\r\n            >\r\n              完成\r\n            </div>\r\n            <div class="ivu-dropdown-item" @click="edit(index)">编辑</div>\r\n            <div class="ivu-dropdown-item" @click="remove(index)">删除</div>\r\n          </div>\r\n        </Dropdown>\r\n        <div class="name" v-if="stateName && item.name">{{ item.name }}</div>\r\n        <div class="past" v-if="statePast && item.past">\r\n          <img src="/image/customized/icon-past.png" alt />\r\n          <span>{{ item.past }}</span>\r\n        </div>\r\n        <div class="address" v-if="stateAddress && item.address">\r\n          <img src="/image/customized/icon-address.png" alt />\r\n          <span>{{ item.address }}</span>\r\n        </div>\r\n      </div>\r\n      <div class="content">\r\n        <div class="text">{{ item.content }}</div>\r\n        <div class="type">{{ item.type }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        list: {\r\n          type: "collection",\r\n          model: "collection",\r\n          name: "活动记录",\r\n          key: "list",\r\n        },\r\n        "list.date": {\r\n          name: "日期",\r\n          key: "list.date",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.time": {\r\n          name: "时间",\r\n          key: "list.time",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.address": {\r\n          name: "位置",\r\n          key: "list.address",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.past": {\r\n          name: "提醒方式",\r\n          key: "list.past",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.name": {\r\n          name: "名字",\r\n          key: "list.name",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.content": {\r\n          name: "内容",\r\n          key: "list.content",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.type": {\r\n          name: "类型",\r\n          key: "list.type",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        finish: {\r\n          ...this.select,\r\n          name: "完成（按钮）",\r\n          key: "finish",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n        address: {\r\n          ...this.select,\r\n          name: "位置",\r\n          key: "address",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n        past: {\r\n          ...this.select,\r\n          name: "提醒方式",\r\n          key: "past",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n        name: {\r\n          ...this.select,\r\n          name: "名称",\r\n          key: "name",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        finish: {\r\n          key: "finish",\r\n          name: "完成",\r\n        },\r\n        edit: {\r\n          key: "edit",\r\n          name: "编辑",\r\n        },\r\n        remove: {\r\n          key: "remove",\r\n          name: "删除",\r\n        },\r\n      });\r\n    },\r\n    remove(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("remove", item);\r\n    },\r\n    edit(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("edit", item);\r\n    },\r\n    finish(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("finish", item);\r\n    },\r\n  },\r\n  computed: {\r\n    stateFinish() {\r\n      let state = this.viewOption["finish"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    stateAddress() {\r\n      let state = this.viewOption["address"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    statePast() {\r\n      let state = this.viewOption["past"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    stateName() {\r\n      let state = this.viewOption["name"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    list() {\r\n      let list = this.getCollection("list", {}) || [];\r\n      return list;\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  margin-top: 6px;\r\n\r\n  & > .item {\r\n    margin-bottom: 27px;\r\n    position: relative;\r\n\r\n    .head {\r\n      font-size: 0;\r\n\r\n      .date {\r\n        font-size: 16px;\r\n        font-weight: bold;\r\n        line-height: 21px;\r\n        color: #333;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        margin-right: 12px;\r\n      }\r\n\r\n      .time {\r\n        font-size: 16px;\r\n        font-weight: bold;\r\n        line-height: 21px;\r\n        color: #333;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n      }\r\n\r\n      .address {\r\n        float: right;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        margin-right: 26px;\r\n\r\n        img {\r\n          width: 19px;\r\n          height: 19px;\r\n          vertical-align: middle;\r\n        }\r\n\r\n        span {\r\n          font-size: 13px;\r\n          font-weight: 400;\r\n          line-height: 17px;\r\n          color: #747474;\r\n          vertical-align: middle;\r\n        }\r\n      }\r\n\r\n      .name {\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        float: right;\r\n        font-size: 13px;\r\n        font-weight: 400;\r\n        line-height: 17px;\r\n        color: #747474;\r\n        margin-right: 26px;\r\n      }\r\n\r\n      .past {\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        float: right;\r\n        margin-right: 26px;\r\n\r\n        img {\r\n          width: 19px;\r\n          height: 19px;\r\n          vertical-align: middle;\r\n        }\r\n\r\n        span {\r\n          font-size: 13px;\r\n          font-weight: 400;\r\n          line-height: 17px;\r\n          color: #747474;\r\n          vertical-align: middle;\r\n        }\r\n      }\r\n\r\n      .more {\r\n        cursor: pointer;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        font-size: 23px;\r\n        color: #747474;\r\n        height: 21px;\r\n\r\n        .ivu-icon {\r\n          vertical-align: top;\r\n        }\r\n      }\r\n\r\n      .ivu-dropdown {\r\n        float: right;\r\n        height: 21px;\r\n\r\n        .ivu-dropdown-rel {\r\n          height: 100%;\r\n        }\r\n      }\r\n    }\r\n\r\n    .content {\r\n      background: #f9f9f9;\r\n      border: 1px solid #e9e9e9;\r\n      border-radius: 5px;\r\n      margin-top: 7px;\r\n      padding: 10px 0;\r\n      position: relative;\r\n\r\n      display: flex;\r\n\r\n      .text {\r\n        flex: 1;\r\n        padding: 0 15px;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n        line-height: 20px;\r\n        color: #292929;\r\n        word-break: break-all;\r\n      }\r\n\r\n      .type {\r\n        position: relative;\r\n        min-width: 46px;\r\n        height: 24px;\r\n        background: #12c29f;\r\n        opacity: 1;\r\n        border-radius: 0px 3px 3px 3px;\r\n        text-align: center;\r\n        line-height: 24px;\r\n        color: #fff;\r\n        margin-right: 10px;\r\n        top: 0;\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  "421d": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <div class="line-con">\r\n      <div class="base-line" :class="point? \'border-top\':\'border-left\' " :style="textStyle"></div>\r\n    </div>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    setup() {\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        width: 6,\r\n        height: 1,\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        point: {\r\n          ...this.select,\r\n          name: "方向",\r\n          key: "point",\r\n          default: "x",\r\n          value: [\r\n            { key: "y", name: "纵向", value: "y" },\r\n            { key: "x", name: "横向", value: "x" },\r\n          ],\r\n        },\r\n        axisSite: {\r\n          ...this.select,\r\n          name: "方向",\r\n          key: "axisSite",\r\n          default: "50%",\r\n          value: [\r\n            { key: "0%", name: "0%", value: "0%" },\r\n            { key: "25%", name: "25%", value: "25%" },\r\n            { key: "50%", name: "50%", value: "50%" },\r\n            { key: "75%", name: "75%", value: "75%" },\r\n            { key: "100%", name: "100%", value: "100%" },\r\n          ],\r\n          hideTitle: true,\r\n        },\r\n        lineLong: {\r\n          ...this.select,\r\n          name: "长度",\r\n          key: "lineLong",\r\n          default: "60",\r\n          value: [],\r\n        },\r\n        color: this.color,\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n  },\r\n  computed: {\r\n    point() {\r\n      let point = this.viewOption.point;\r\n      point = point == "x" ? true : false;\r\n      return point;\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let color = this.v.color(option.color);\r\n      let lineLong = option.lineLong + "%";\r\n      let axisSite = option.axisSite;\r\n      if (axisSite == "100%") {\r\n        axisSite = "calc( 100% - 1px )";\r\n      }\r\n      let top = this.point ? axisSite : "50%";\r\n\r\n      return {\r\n        "border-color": `${color}`,\r\n        width: this.point ? lineLong : 0,\r\n        height: !this.point ? lineLong : 0,\r\n        top: top,\r\n        left: !this.point ? axisSite : "50%",\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "线条颜色",\r\n        type: "color",\r\n        default: "black",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  // 在此开始写自定义样式\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  .line-con {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    .base-line {\r\n      position: absolute;\r\n      display: inline-block;\r\n      width: 100%;\r\n      cursor: default;\r\n      height: 0;\r\n      &.border-top {\r\n        border-top: 1px solid rgba(215, 215, 215, 1);\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n      }\r\n      &.border-left {\r\n        border-left: 1px solid rgba(215, 215, 215, 1);\r\n        transform: translateY(-50%);\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  4457: function(e, n, t) {
    "use strict";
    t.r(n);
    var r = t("a169")
      , a = t("7e7f")
      , i = t.n(a);
    n["default"] = {
      install: function(e, n) {
        e.mixin({
          methods: {
            $$weixin: function() {
              return r["default"].dispatch("weixin/get")
            },
            $$loading: function(e) {
              e ? i.a.LoadingBar.start() : i.a.LoadingBar.finish()
            },
            $$log: function(e) {
              this.$$debug && console.log(e)
            }
          },
          computed: {
            $$debug: function() {
              return r["default"].state.debug.enable
            }
          }
        })
      }
    }
  },
  4519: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <i-menu mode="horizontal" :theme="theme" active-name="1">\r\n      <MenuItem name="1">\r\n        <Icon type="ios-paper" />内容管理\r\n      </MenuItem>\r\n      <MenuItem name="2">\r\n        <Icon type="ios-people" />用户管理\r\n      </MenuItem>\r\n      <Submenu name="3">\r\n        <template slot="title">\r\n          <Icon type="ios-stats" />统计分析\r\n        </template>\r\n        <MenuGroup title="使用">\r\n          <MenuItem name="3-1">新增和启动</MenuItem>\r\n          <MenuItem name="3-2">活跃分析</MenuItem>\r\n          <MenuItem name="3-3">时段分析</MenuItem>\r\n        </MenuGroup>\r\n        <MenuGroup title="留存">\r\n          <MenuItem name="3-4">用户留存</MenuItem>\r\n          <MenuItem name="3-5">流失用户</MenuItem>\r\n        </MenuGroup>\r\n      </Submenu>\r\n      <MenuItem name="4">\r\n        <Icon type="ios-construct" />综合设置\r\n      </MenuItem>\r\n    </i-menu>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      theme: "light",\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  4586: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <i-button type="primary">Primary</i-button>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  4872: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = {
        install: function(e, n) {
          var r = function() {
            return t.e("chunk-ae0d0a52").then(t.bind(null, "53f3"))
          }
            , a = function() {
            return t.e("chunk-2b8408c0").then(t.bind(null, "310e"))
          };
          e.mixin({
            components: {
              BmButton: function() {
                return t.e("chunk-34be8907").then(t.bind(null, "1153"))
              },
              BmImage: function() {
                return t.e("chunk-4aaf6d8d").then(t.bind(null, "442c"))
              },
              BmHtml: function() {
                return t.e("chunk-068d6c4d").then(t.bind(null, "18db"))
              },
              BmFile: function() {
                return t.e("chunk-ae0d0a52").then(t.bind(null, "3af0"))
              },
              BmSelect: function() {
                return t.e("chunk-7ac2db26").then(t.bind(null, "ef33"))
              },
              Relate: r,
              DataTable: function() {
                return Promise.all([t.e("chunk-3f0257ab"), t.e("chunk-75e9f269")]).then(t.bind(null, "2d1f"))
              },
              Collection: function() {
                return t.e("chunk-774a7f52").then(t.bind(null, "5946"))
              },
              Check: function() {
                return t.e("chunk-4981390d").then(t.bind(null, "99cc"))
              },
              BmPrinter: function() {
                return Promise.all([t.e("chunk-2d210f45"), t.e("chunk-714ad802")]).then(t.bind(null, "cb77"))
              },
              ModalList: function() {
                return t.e("chunk-7a746c05").then(t.bind(null, "82cc"))
              },
              BmModal: function() {
                return t.e("chunk-068d6c4d").then(t.bind(null, "26f2"))
              },
              BmSelector: function() {
                return t.e("chunk-068d6c4d").then(t.bind(null, "069d"))
              },
              BmAlert: function() {
                return t.e("chunk-4981390d").then(t.bind(null, "4bdb"))
              },
              BmPoiPicker: function() {
                return t.e("chunk-265539d4").then(t.bind(null, "c587"))
              },
              BmTips: function() {
                return t.e("chunk-34be8907").then(t.bind(null, "74e7"))
              },
              BmForm: a,
              Form: a,
              BmPicker: function() {
                return t.e("chunk-75e9f269").then(t.bind(null, "407f"))
              },
              BmScanner: function() {
                return t.e("chunk-660218fe").then(t.bind(null, "2a72"))
              }
            }
          })
        }
      }
  },
  "4c8b": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Breadcrumb>\r\n      <BreadcrumbItem to="/">Home</BreadcrumbItem>\r\n      <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>\r\n      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>\r\n    </Breadcrumb>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "4fe9": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <div :style="textStyle" @click="onClick" class="base-number">\r\n      <template v-if="animation">\r\n        <countTo :start-val="startVal" :end-val="endVal" :duration="3000"></countTo>\r\n      </template>\r\n      <template v-else>\r\n        <span>{{endVal}}</span>\r\n      </template>\r\n    </div>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      startVal: 0,\r\n      endVal: 0,\r\n      timer: undefined,\r\n    };\r\n  },\r\n  methods: {\r\n    onClick() {\r\n      this.doAction("click", this.endValue);\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        value: {\r\n          ...this.number,\r\n        },\r\n      });\r\n\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        width: 2,\r\n        height: 2,\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        textSize: this.textSize,\r\n        textWeight: {\r\n          ...this.select,\r\n          name: "文字粗细",\r\n          key: "textWeight",\r\n          default: "400",\r\n          value: [\r\n            { key: "400", name: "常规", value: "400" },\r\n            { key: "bold", name: "加粗", value: "bold" },\r\n          ],\r\n        },\r\n        align: {\r\n          ...this.align,\r\n        },\r\n        primaryColor: this.primaryColor,\r\n        animation: {\r\n          ...this.select,\r\n          name: "数字动画",\r\n          key: "animation",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "无", value: "false" },\r\n            { key: "true", name: "滚动", value: "true" },\r\n          ],\r\n        },\r\n        range: {\r\n          ...this.number,\r\n          name: "随机数范围",\r\n          key: "range",\r\n          default: "请输入",\r\n          value: "",\r\n          hideText: true,\r\n        },\r\n        interval: {\r\n          ...this.number,\r\n          name: "随机数变动的间隔(毫秒ms)",\r\n          key: "interval",\r\n          default: "请输入",\r\n          value: "",\r\n          hideText: true,\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n  },\r\n  computed: {\r\n    endValue() {\r\n      let value = this.getValue("value");\r\n      try {\r\n        value = new Number(value);\r\n      } catch (e) {}\r\n      if (Number.isNaN(value.valueOf())) {\r\n        value = 0;\r\n      }\r\n      return value;\r\n    },\r\n    animation() {\r\n      let option = this.viewOption,\r\n        value = "";\r\n      let range = option.range;\r\n      let interval = option.interval || 1000;\r\n      let _this=this;\r\n      clearTimeout(this.timer);\r\n      if (option && option.animation) {\r\n        value = JSON.parse(option.animation);\r\n      }\r\n      if (range && range > 0) {\r\n        this.timer = setInterval(() => {\r\n           _this.endVal = _this.endValue - Math.floor(Math.random() * range);\r\n        }, interval);\r\n      }\r\n      return value || false;\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let primaryColor = this.v.color(option.primaryColor);\r\n      let align = this.v.align(option.align);\r\n      let textWeight = option.textWeight;\r\n      let padding = this.viewBody.padding;\r\n      let style = {};\r\n      style["color"] = `${primaryColor}`;\r\n      style["font-weight"] = textWeight;\r\n      style[\r\n        "padding"\r\n      ] = `${padding["top"]}px ${padding["right"]}px ${padding["bottom"]}px ${padding["left"]}px`;\r\n      return {\r\n        ...textSize,\r\n        ...align,\r\n        ...style,\r\n      };\r\n    },\r\n    number() {\r\n      return {\r\n        name: "输入框",\r\n        type: "input",\r\n        default: "",\r\n        key: "number",\r\n        value: [],\r\n        hideTitle: true,\r\n      };\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "文字大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    align() {\r\n      return {\r\n        name: "对齐",\r\n        type: "align",\r\n        default: "center",\r\n        key: "align",\r\n        value: [\r\n          "left-top", //左上\r\n          "top", //中上\r\n          "right-top", //右上\r\n          "left-center", //左中\r\n          "center", //居中\r\n          "right-center", //右中\r\n          "left-bottom", //左下\r\n          "bottom", //中下\r\n          "right-bottom", //右下\r\n        ],\r\n      };\r\n    },\r\n    number() {\r\n      return {\r\n        name: "数字",\r\n        key: "value",\r\n        type: "number",\r\n        model: "default",\r\n        default: "0",\r\n        format: "",\r\n      };\r\n    },\r\n  },\r\n  watch: {\r\n    endValue: {\r\n      immediate: true,\r\n      handler(value) {\r\n        if (value) {\r\n          //不一样才刷新\r\n          if (!_.isEqual(this.endVal, value)) {\r\n            this.endVal = value;\r\n          }\r\n        }\r\n      },\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  // 在此开始写自定义样式\r\n  .base-number {\r\n    position: absolute;\r\n    display: inline-block;\r\n    width: 100%;\r\n    cursor: default;\r\n  }\r\n}\r\n</style>'
  },
  "51d3": function(e, n, t) {
    "use strict";
    t.r(n);
    t("29d3"),
      t("8fd6"),
      t("63a5");
    var r = t("ade3");
    function a(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function i(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? a(Object(t), !0).forEach((function(n) {
            Object(r["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    n["default"] = {
      install: function(e, n) {
        e.mixin({
          computed: {
            $$modal: function() {
              var e = this.$store;
              return {
                show: function(n, t) {
                  var r = i({
                    render: n
                  }, t);
                  return e.dispatch("modal/show", r),
                    r
                },
                confirm: function(n, r) {
                  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                    , o = function() {
                    return t.e("chunk-b813648a").then(t.bind(null, "67b2"))
                  }
                    , c = a.props || {};
                  c.value = r,
                    a.props = c,
                    a.title = n,
                    a.mode = "confirm",
                    a.canCancel = !0;
                  var l = i({
                    render: o
                  }, a);
                  e.dispatch("modal/show", l)
                },
                preview: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                    , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , a = function() {
                    return Promise.all([t.e("chunk-0321d966"), t.e("chunk-0c0e1ebc")]).then(t.bind(null, "525a"))
                  }
                    , o = {}
                    , c = r.props || {};
                  c.list = n,
                    c.readonly = !!r.readonly,
                    o.props = c,
                    o.mode = "preview",
                    o.canCancel = !0,
                    o = i(i({}, o), r);
                  var l = i({
                    render: a
                  }, o);
                  e.dispatch("modal/show", l)
                },
                limit: function(n) {
                  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , a = function() {
                    return t.e("chunk-2fb00b27").then(t.bind(null, "c32f"))
                  }
                    , o = {}
                    , c = r.props || {};
                  c.content = n,
                    o.props = c,
                    o.canCancel = !0,
                    o.noFooter = !0,
                    o.noExtend = !0,
                    o = i(i({}, o), r);
                  var l = i(i({
                    render: a
                  }, o), {}, {
                    width: 339,
                    class: "bm-upgrade-modal-limit"
                  });
                  e.dispatch("modal/show", l)
                },
                help: function(n) {
                  var r = function() {
                    return t.e("chunk-e957ce0c").then(t.bind(null, "21f8"))
                  }
                    , a = {
                    render: r,
                    props: {
                      type: n
                    },
                    width: 535,
                    class: "bm-platform-modal-help"
                  };
                  e.dispatch("modal/show", a)
                },
                hide: function(n) {
                  e.dispatch("modal/hide", n)
                }
              }
            }
          }
        })
      }
    }
  },
  5234: function(e, n, t) {
    "use strict";
    t.r(n);
    var r = t("8b34")
      , a = {
      en: {
        platform: {
          login: {
            button: "Login"
          }
        }
      },
      zh: {
        platform: {
          login: {
            button: "登录"
          }
        }
      }
    }
      , i = window.navigator.language.slice(0, 2)
      , o = new r["a"]({
      locale: i,
      fallbackLocale: "zh",
      messages: a
    });
    n["default"] = o
  },
  "52a6": function(e, n, t) {
    "use strict";
    var r = {
      version: 1,
      mixin: function(e, n, t, a) {
        var i = a.desc
          , o = a.group
          , c = a.icon;
        r[e] = {
          type: "function",
          key: e,
          name: n,
          desc: i,
          target: t,
          group: o,
          icon: c
        }
      }
    };
    r.mixin("common", "白码基础API", "/api/libs/common/index.js", {
      desc: "白码基础API",
      group: ["common"]
    }),
      r.mixin("wxwork", "企业微信API(内部应用)", "/api/libs/wxwork/index.js", {
        desc: "功能说明:对接企业微信内部应用API;支持考勤/打卡,人员,审批等数据对接。比起第三方企业微信支持更多功能对接。",
        group: ["wechat"],
        icon: "/api/resources/image/icon_wxwork.png"
      }),
      r.mixin("wxwork_third", "企业微信API(第三方)", "/api/libs/wxwork_third/index.js", {
        desc: "功能说明:对接企业微信第三方应用API;需要先授权集成企业微信功能;支持人员,审批等数据对接。",
        group: ["wechat"],
        icon: "/api/resources/image/icon_wxwork.png"
      }),
      r.mixin("dingtalk", "钉钉API", "/api/libs/dingtalk/index.js", {
        desc: "功能说明:钉钉内部开发API;支持考勤/打卡,人员,审批等数据对接。",
        group: ["dingtalk", "alibaba"],
        icon: "/api/resources/image/icon_dingtalk.png"
      }),
      r.mixin("weixinpay", "微信支付API", "/api/libs/weixinpay/index.js", {
        desc: "功能说明:微信支付API;支持支付,退款等API对接。",
        group: ["pay", "wechat"],
        icon: "/api/resources/image/icon_weixinpay.png"
      }),
      r.mixin("weixinmp", "微信公众号API", "/api/libs/weixinmp/index.js", {
        desc: "功能说明:微信公众号API;支持推送信息,用户管理等数据对接。",
        group: ["wechat"],
        icon: "/api/resources/image/icon_weixin.png"
      }),
      r.mixin("baidu-aip", "百度智能云API", "/api/libs/baidu-aip/index.js", {
        desc: "功能说明:百度智能云API,包含人脸识别,语音合成&语音识别,文字识别,内容审核,图像识别,图像搜索,知识图谱",
        group: ["baidu", "ai"],
        icon: "/api/resources/image/icon_baidu_aip.png"
      }),
      r.mixin("alipay", "支付宝API", "/api/libs/alipay/index.js", {
        desc: "功能说明:支付宝API;支持支付,退款等API对接。",
        group: ["pay", "alibaba"],
        icon: "/api/resources/image/icon_alipay.png"
      }),
      r.mixin("taobao", "淘宝API", "/api/libs/taobao/index.js", {
        desc: "功能说明:支持淘宝/天猫数据对接;支持订单,商品,售后,物流,仓储等API对接。",
        group: ["shop", "alibaba"],
        icon: "/api/resources/image/icon_taobao.png"
      }),
      r.mixin("jd", "京东API", "/api/libs/jd/index.js", {
        desc: "功能说明:京东API;支持订单,商品,售后,物流,仓储等API对接。",
        group: ["shop"],
        icon: "/api/resources/image/icon_jd.png"
      }),
      r.mixin("pdd", "拼多多API", "/api/libs/pdd/index.js", {
        desc: "功能说明:拼多多API;支持订单,商品,售后,物流,仓储等API对接。",
        group: ["shop"],
        icon: "/api/resources/image/icon_pdd.png"
      }),
      n["a"] = r
  },
  "538b": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "viewLoader", (function() {
          return c
        }
      )),
      t.d(n, "getDisplay", (function() {
          return l
        }
      )),
      t.d(n, "listDisplay", (function() {
          return s
        }
      )),
      t.d(n, "getView", (function() {
          return u
        }
      ));
    var r = t("2473")
      , a = new r["default"]
      , i = "/api/app"
      , o = a.getProject
      , c = {}
      , l = function(e) {
      var n = o();
      return a.request({
        url: "".concat(i, "/dp/").concat(n, "/").concat(e),
        method: "get"
      })
    }
      , s = function() {
      var e = o();
      return a.request({
        url: "".concat(i, "/dp/").concat(e, "/"),
        method: "get"
      })
    }
      , u = function(e) {
      var n = o()
        , t = c[e];
      return t || (t = a.request({
        url: "".concat(i, "/dp/").concat(n, "/view/").concat(e),
        method: "get"
      }),
        c[e] = t),
        t
    }
  },
  "541a": function(e, n, t) {
    "use strict";
    var r = {
      common: "基础",
      wechat: "微信",
      dingtalk: "钉钉",
      alibaba: "阿里系",
      wxwork: "企业微信",
      baidu: "百度",
      pay: "支付",
      ai: "人工智能",
      shop: "电商"
    };
    n["a"] = r
  },
  "542e": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "debug", (function() {
          return c
        }
      )),
      t.d(n, "release", (function() {
          return l
        }
      )),
      t.d(n, "block", (function() {
          return s
        }
      ));
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = "/api/dev"
      , c = function(e, n) {
      var t = i()
        , r = "".concat(o, "/program/").concat(t, "/").concat(e, "/debug/");
      return n && (r = "".concat(r).concat(n)),
        a.request({
          url: r,
          method: "get"
        })
    }
      , l = function(e, n) {
      var t = i()
        , r = "".concat(o, "/program/").concat(t, "/").concat(e, "/release/");
      return n && (r = "".concat(r).concat(n)),
        a.request({
          url: r,
          method: "get"
        })
    }
      , s = function(e) {
      var n = i()
        , t = "".concat(o, "/program/").concat(n, "/").concat(e, "/block");
      return a.request({
        url: t,
        method: "get"
      })
    }
  },
  "54bf": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <BackTop :height="100" :bottom="200">\r\n      <div class="top">返回顶端</div>\r\n    </BackTop>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  .top {\r\n    padding: 10px;\r\n    background: rgba(0, 153, 229, 0.7);\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n  }\r\n}\r\n</style>'
  },
  "55c8": function(e, n, t) {
    "use strict";
    t.r(n);
    var r = t("53ca")
      , a = (t("9e5e"),
      t("027e"),
      t("1da1"))
      , i = (t("5cf8"),
      t("a29f"),
      t("4d00"))
      , o = t.n(i)
      , c = t("a249")
      , l = t.n(c)
      , s = (t("ba56"),
      t("f4e6"))
      , u = t("3328")
      , d = t("6ad8")
      , p = t("2828")
      , m = t("029f")
      , f = t.n(m)
      , v = {
      bind: function(e, n) {
        var t = new f.a(e,{
          text: function() {
            return n.value.value
          }
        });
        e.__success_callback__ = n.value.success,
          e.__error_callback__ = n.value.error,
          t.on("success", (function(n) {
              var t = e.__success_callback__;
              t && t(n)
            }
          )),
          t.on("error", (function(n) {
              var t = e.__error_callback__;
              t && t(n)
            }
          )),
          e.__clipboard__ = t
      },
      update: function(e, n) {
        e.__clipboard__.text = function() {
          return n.value.value
        }
          ,
          e.__success_callback__ = n.value.success,
          e.__error_callback__ = n.value.error
      },
      unbind: function(e, n) {
        delete e.__success_callback__,
          delete e.__error_callback__,
          e.__clipboard__.destroy(),
          delete e.__clipboard__
      }
    }
      , h = t("fc34")
      , g = t.n(h)
      , y = t("de23")
      , b = t.n(y)
      , k = t("7e7f")
      , _ = t.n(k)
      , w = t("8b34")
      , x = (t("f3b6"),
      {
        platform: !0,
        component: !0,
        modal: !0,
        window: !0,
        app: !0,
        print: !0,
        pop: !0,
        custom: !0
      });
    function O(e) {
      e.use(_.a),
        e.use(w["a"]),
        Date.prototype.Format = function(e) {
          var n = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
          };
          for (var t in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))),
            n)
            new RegExp("(" + t + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[t] : ("00" + n[t]).substr(("" + n[t]).length)));
          return e
        }
        ,
        e.prototype._ = o.a,
        window._ = o.a;
      var n = t("75e9");
      l.a.extend(n, {
        thresholds: [{
          l: "s",
          r: 10,
          d: "second"
        }, {
          l: "m",
          r: 89
        }, {
          l: "mm",
          r: 10,
          d: "minute"
        }, {
          l: "h",
          r: 89
        }, {
          l: "hh",
          r: 21,
          d: "hour"
        }, {
          l: "d",
          r: 35
        }, {
          l: "dd",
          r: 25,
          d: "day"
        }, {
          l: "M",
          r: 45
        }, {
          l: "MM",
          r: 10,
          d: "month"
        }, {
          l: "y",
          r: 17
        }, {
          l: "yy",
          d: "year"
        }]
      }),
        e.prototype.moment = l.a,
        window.moment = l.a,
      u["UA"].isIos && (u["UA"].isWeixin || u["UA"].isWxapp) && Object(a["a"])(regeneratorRuntime.mark((function e() {
          var n;
          return regeneratorRuntime.wrap((function(e) {
              while (1)
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      Object(s["a"])();
                  case 2:
                    n = e.sent,
                    window.wx && window.wx.config(n);
                  case 4:
                  case "end":
                    return e.stop()
                }
            }
          ), e)
        }
      )))(),
      u["UA"].isPc && document.body.classList.add("baima-pc"),
        e.component(d["a"].name, d["a"]),
        e.component("countto", b.a),
        e.use(p["a"]),
        e.directive("clipboard", v),
        e.use(g.a),
        window.UA = u["UA"]
    }
    n["default"] = function(e) {
      for (var n in O(e),
        x) {
        var a = x[n];
        e.use(t("7c42")("./".concat(n)).default, "object" === Object(r["a"])(a) ? a : void 0)
      }
    }
  },
  5605: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <i-time :time="time" />\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      time: new Date().getTime() - 60 * 3 * 1000,\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "5b4a": function(e, n, t) {
    "use strict";
    t.r(n);
    var r = t("4cb1")
      , a = t("47ae")
      , i = function() {
      var e = this
        , n = e.$createElement
        , t = e._self._c || n;
      return t("div", {
        staticClass: "baima-app",
        class: e.classModule,
        attrs: {
          id: "app"
        }
      }, [t("router-view")], 1)
    }
      , o = []
      , c = (t("29d3"),
      t("8fd6"),
      t("63a5"),
      t("ade3"))
      , l = (t("a29f"),
      t("cee2"),
      t("3328"));
    function s(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function u(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? s(Object(t), !0).forEach((function(n) {
            Object(c["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var d = {
      metaInfo: function() {
        var e = this.$store.getters["custom/projectTitle"];
        return {
          title: e
        }
      },
      methods: {
        setupWindow: function() {
          var e = this.$store;
          function n() {
            var n = window.orientation;
            e.dispatch("window/setOrientation", n)
          }
          e.dispatch("window/resize"),
            window.onresize = function(n) {
              e.dispatch("window/resize")
            }
            ,
            window.onorientationchange = n
        },
        setupModal: function() {
          var e = this.$store;
          window.onpopstate = function(n) {
            e.getters["modal/list"].length > 0 && e.dispatch("modal/pop")
          }
        },
        setupMode: function() {
          var e = Object(l["getUrlQuery"])()
            , n = e["mode"];
          n && this.$store.dispatch("window/setMode", n)
        },
        setupWeixin: function() {
          var e = Object(l["getUrlQuery"])()
            , n = e["wx_token"];
          n && this.$store.dispatch("weixin/setToken", n);
          var t = e["wxapp_token"];
          t && this.$store.dispatch("weixin/setWxappToken", t)
        },
        setupSession: function() {
          var e = Object(l["getUrlQuery"])();
          for (var n in e)
            n.startsWith("bm_") && window.sessionStorage.setItem(n, e[n])
        },
        ready: function() {
          var e = this.$store.getters["window/isMobile"]
            , n = this;
          l["UA"].isWxwork && l["UA"].isPc && this.$store.dispatch("weixin/get").then((function(t) {
              t.invoke("getContext", {}, (function(t) {
                  if ("getContext:ok" == t.err_msg) {
                    var r = t.entry;
                    if ("normal" == r) {
                      if (e) {
                        n.dispatch("window/setMode", "pc");
                        var a = location.href;
                        a = a.replace("mode=mobile", "mode=pc"),
                          location.href = a
                      }
                    } else if (!e) {
                      n.dispatch("window/setMode", "mobile");
                      var i = location.href;
                      i = i.replace("mode=pc", "mode=mobile"),
                        location.href = i
                    }
                  }
                }
              ))
            }
          ))
        },
        success: function(e) {
          var n = e && e.title || "提示"
            , t = e && e.content || "";
          this.$Notice.open({
            title: '<div class="success">'.concat(n, "</div>"),
            desc: '<img src="/image/page/icon_success.png"/><span>'.concat(t, "&nbsp;</span>"),
            duration: 3
          })
        },
        error: function(e) {
          var n = e && e.title || "错误！"
            , t = e && e.msg || "";
          this.$Notice.open({
            title: '<div class="error">'.concat(n, "</div>"),
            desc: '<img src="/image/page/icon_error.png"/><span>'.concat(t, "&nbsp;</span>"),
            duration: 3
          })
        },
        warning: function(e) {
          var n = e && e.title || "警告！"
            , t = e && e.msg || "";
          this.$Notice.open({
            title: '<div class="warning">'.concat(n, "</div>"),
            desc: '<img src="/image/page/icon_warn.png"/><span>'.concat(t, "&nbsp;</span>"),
            duration: 3
          })
        }
      },
      computed: {
        $$error: function() {
          return this.$store.state.notice.error
        },
        $$tips: function() {
          return this.$store.state.notice.tips
        },
        $$warning: function() {
          return this.$store.state.notice.warning
        },
        classModule: function() {
          var e = [];
          return this.$$isMobile ? e.push("baima-app-mobile") : (e.push("baima-app-pc"),
          this.$$isDev && e.push("baima-app-dev")),
            e
        }
      },
      watch: {
        $$error: function(e) {
          e && e.error && this.error(e)
        },
        $$tips: function(e) {
          e && this.success(e)
        },
        $$warning: function(e) {
          e && e.warning && this.warning(e)
        },
        "$$project._id": {
          immediate: !0,
          handler: function(e) {
            if (e) {
              var n = t("2473").projectQueue;
              for (var r in n) {
                var a = n[r]
                  , i = r.replace("[project]", e)
                  , o = u(u({}, a.config), {}, {
                  url: i
                });
                a.resolve(o),
                  delete n[r]
              }
            }
          }
        }
      },
      mounted: function() {
        var e = this;
        this.setupModal(),
          this.setupMode(),
          this.setupWindow(),
          this.setupWeixin(),
          this.setupSession(),
          this.$nextTick((function() {
              e.ready()
            }
          ))
      }
    }
      , p = {
      name: "App",
      mixins: [d],
      mounted: function() {}
    }
      , m = p
      , f = (t("eb9e"),
      t("2877"))
      , v = Object(f["a"])(m, i, o, !1, null, null, null)
      , h = v.exports
      , g = t("a169")
      , y = t("b10a")
      , b = t("e2f0")
      , k = t("55c8");
    Object(k["default"])(r["default"]),
      r["default"].config.productionTip = !1,
      r["default"].prototype.$config = b["a"];
    var _ = t("5234").default
      , w = new r["default"]({
      el: "#app",
      router: y["default"],
      store: g["default"],
      i18n: _,
      render: function(e) {
        return e(h)
      }
    });
    window.vue = w;
    n["default"] = {
      Vue: r["default"],
      Vuex: a["a"],
      vue: w,
      router: y["default"],
      store: g["default"]
    }
  },
  6179: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "629c": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Carousel v-model="value" loop>\r\n      <CarouselItem>\r\n        <div class="demo-carousel">1</div>\r\n      </CarouselItem>\r\n      <CarouselItem>\r\n        <div class="demo-carousel">2</div>\r\n      </CarouselItem>\r\n      <CarouselItem>\r\n        <div class="demo-carousel">3</div>\r\n      </CarouselItem>\r\n      <CarouselItem>\r\n        <div class="demo-carousel">4</div>\r\n      </CarouselItem>\r\n    </Carousel>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      value: 0,\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  .ivu-carousel {\r\n    height: 100%;\r\n  }\r\n}\r\n</style>'
  },
  "62d1": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "list", (function() {
          return c
        }
      )),
      t.d(n, "update", (function() {
          return l
        }
      )),
      t.d(n, "remove", (function() {
          return s
        }
      )),
      t.d(n, "create", (function() {
          return u
        }
      )),
      t.d(n, "copy", (function() {
          return d
        }
      )),
      t.d(n, "get", (function() {
          return p
        }
      )),
      t.d(n, "edit", (function() {
          return m
        }
      ));
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = "/api/dev"
      , c = function() {
      var e = i();
      return a.request({
        url: "".concat(o, "/display/").concat(e),
        method: "get"
      })
    }
      , l = function(e, n, t, r) {
      var c = i();
      return a.request({
        url: "".concat(o, "/display/").concat(c, "/").concat(e, "/update"),
        method: "post",
        data: {
          type: n,
          list: t,
          option: r
        }
      })
    }
      , s = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/display/").concat(n, "/").concat(e, "/remove"),
        method: "get"
      })
    }
      , u = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "inner"
        , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        , r = i();
      return a.request({
        url: "".concat(o, "/display/").concat(r, "/create"),
        method: "post",
        data: {
          name: e,
          type: n,
          tpl: t
        }
      })
    }
      , d = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = i();
      return n._name = e,
        a.request({
          url: "".concat(o, "/display/").concat(t, "/copy"),
          method: "post",
          data: n
        })
    }
      , p = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/display/").concat(n, "/").concat(e),
        method: "get"
      })
    }
      , m = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = i();
      return a.request({
        url: "".concat(o, "/display/").concat(t, "/").concat(e, "/edit"),
        method: "post",
        data: n
      })
    }
  },
  "653b": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>\r\n    <Divider />\r\n    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>\r\n    <Divider>With Text</Divider>\r\n    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>\r\n    <Divider dashed />\r\n    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "65c5": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Transfer\r\n      :data="data"\r\n      :target-keys="targetKeys"\r\n      :render-format="render"\r\n      @on-change="handleChange"\r\n    ></Transfer>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      data: this.getMockData(),\r\n      targetKeys: this.getTargetKeys(),\r\n    };\r\n  },\r\n  methods: {\r\n    getMockData() {\r\n      let mockData = [];\r\n      for (let i = 1; i <= 20; i++) {\r\n        mockData.push({\r\n          key: i.toString(),\r\n          label: "Content " + i,\r\n          description: "The desc of content  " + i,\r\n          disabled: Math.random() * 3 < 1,\r\n        });\r\n      }\r\n      return mockData;\r\n    },\r\n    getTargetKeys() {\r\n      return this.getMockData()\r\n        .filter(() => Math.random() * 2 > 1)\r\n        .map((item) => item.key);\r\n    },\r\n    render(item) {\r\n      return item.label;\r\n    },\r\n    handleChange(newTargetKeys) {\r\n      this.targetKeys = newTargetKeys;\r\n    },\r\n    filterMethod(data, query) {\r\n      return data.label.indexOf(query) > -1;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  6620: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <i-switch></i-switch>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "668b": function(e, n, t) {
    "use strict";
    t.r(n);
    var r = t("53ca")
      , a = function e(n, t) {
      if (!(this instanceof e))
        return new e(n,t);
      this.options = this.extend({
        noPrint: ".no-print"
      }, t),
        "string" === typeof n ? this.dom = document.querySelector(n) : (this.isDOM(n),
          this.dom = this.isDOM(n) ? n : n.$el),
        this.init()
    };
    a.prototype = {
      init: function() {
        var e = this.getStyle() + this.getHtml();
        this.writeIframe(e)
      },
      extend: function(e, n) {
        for (var t in n)
          e[t] = n[t];
        return e
      },
      getStyle: function() {
        for (var e = "", n = document.querySelectorAll("style,link"), t = 0; t < n.length; t++)
          e += n[t].outerHTML;
        return e += "<style>" + (this.options.noPrint ? this.options.noPrint : ".no-print") + "{display:none;}</style>",
          e += "<style>html,body,div{height: auto!important;font-size:14px}</style>",
          e
      },
      getHtml: function() {
        for (var e = document.querySelectorAll("input"), n = document.querySelectorAll("textarea"), t = document.querySelectorAll("select"), r = document.querySelectorAll("canvas"), a = 0; a < e.length; a++)
          "checkbox" == e[a].type || "radio" == e[a].type ? 1 == e[a].checked ? e[a].setAttribute("checked", "checked") : e[a].removeAttribute("checked") : (e[a].type,
            e[a].setAttribute("value", e[a].value));
        for (var i = 0; i < n.length; i++)
          "textarea" == n[i].type && (n[i].innerHTML = n[i].value);
        for (var o = 0; o < t.length; o++)
          if ("select-one" == t[o].type) {
            var c = t[o].children;
            for (var l in c)
              "OPTION" == c[l].tagName && (1 == c[l].selected ? c[l].setAttribute("selected", "selected") : c[l].removeAttribute("selected"))
          }
        for (var s = 0; s < r.length; s++) {
          document.querySelector(".isNeedRemove") && document.querySelector(".isNeedRemove").remove();
          var u = r[s].toDataURL("image/png")
            , d = document.createElement("img");
          d.src = u,
            d.setAttribute("style", "max-width: 100%;"),
            d.className = "isNeedRemove",
            r[s].style.display = "none",
            r[s].parentNode.insertBefore(d, r[s].nextElementSibling)
        }
        return this.dom.outerHTML
      },
      writeIframe: function(e) {
        var n, t, r = document.createElement("iframe"), a = document.body.appendChild(r);
        r.id = "myIframe",
          r.setAttribute("style", "position:absolute;width:0;height:0;top:-10px;left:-10px;"),
          n = a.contentWindow || a.contentDocument,
          t = a.contentDocument || a.contentWindow.document,
          t.open(),
          t.write(e),
          t.close();
        var i = this;
        r.onload = function() {
          i.toPrint(n),
            setTimeout((function() {
                document.body.removeChild(r)
              }
            ), 100)
        }
      },
      toPrint: function(e) {
        try {
          setTimeout((function() {
              e.focus();
              try {
                e.document.execCommand("print", !1, null) || e.print()
              } catch (n) {
                e.print()
              }
              e.close()
            }
          ), 10)
        } catch (n) {
          console.log("err", n)
        }
      },
      isDOM: "object" === ("undefined" === typeof HTMLElement ? "undefined" : Object(r["a"])(HTMLElement)) ? function(e) {
          return e instanceof HTMLElement
        }
        : function(e) {
          return e && "object" === Object(r["a"])(e) && 1 === e.nodeType && "string" === typeof e.nodeName
        }
    };
    var i = {
      install: function(e, n) {
        e.prototype.$print = a
      }
    };
    n["default"] = i
  },
  "68e3": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="display-view-datepicker">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <div class="bm-display-input-data-picker" :style="textStyle">\r\n      <DatePicker\r\n        :placeholder="placeholder"\r\n        :format="format"\r\n        :type="type"\r\n        @on-change="onChange"\r\n        transfer\r\n      ></DatePicker>\r\n    </div>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    onChange(value) {\r\n      this.setInputValue("selected", value);\r\n      this.doAction("change", value);\r\n    },\r\n    setInputValue(key, value) {\r\n      let adapter = this.getAdapter(key);\r\n      let adapterValue = adapter.value;\r\n      if (adapterValue && adapterValue[0] == "prop") {\r\n        let variableKey = adapterValue[1];\r\n        if (variableKey) {\r\n          this.displayStore.dispatch("property/setValue", {\r\n            key: variableKey,\r\n            value,\r\n          });\r\n        }\r\n      }\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        selected: {\r\n          ...this.string,\r\n          name: "选中日期",\r\n          key: "selected",\r\n        },\r\n      });\r\n\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        width: 5,\r\n        height: 1,\r\n        border: {\r\n          ...this.border,\r\n          width: 1,\r\n          radiusOnly: [5],\r\n          color: "rgb(191,191,191)",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        textSize: this.textSize,\r\n        textColor: {\r\n          ...this.mixinOption(this.primaryColor, "文字颜色"),\r\n          key: "textColor",\r\n          default: "rgb(0,0,0)",\r\n        },\r\n        type: {\r\n          ...this.select,\r\n          name: "类型",\r\n          key: "type",\r\n          default: "date",\r\n          value: [\r\n            { key: "date", name: "日期", value: "date" },\r\n            { key: "daterange", name: "日期范围", value: "daterange" },\r\n          ],\r\n        },\r\n        format: {\r\n          ...this.selectBox,\r\n          name: "显示格式",\r\n          key: "format",\r\n          default: "yyyy-MM-dd",\r\n          value: [\r\n            { key: "yyyy-MM-dd", name: "yyyy-MM-dd", value: "yyyy-MM-dd" },\r\n            { key: "yyyy/MM/dd", name: "yyyy/MM/dd", value: "yyyy/MM/dd" },\r\n            {\r\n              key: "yyyy年MM月dd日",\r\n              name: "yyyy年MM月dd日",\r\n              value: "yyyy年MM月dd日",\r\n            },\r\n          ],\r\n        },\r\n        placeholder: {\r\n          ...this.input,\r\n          name: "占位文本",\r\n          key: "placeholder",\r\n          default: "请选择",\r\n          value: "",\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        change: {\r\n          key: "change",\r\n          name: "数据改变时",\r\n        },\r\n      });\r\n    },\r\n    mixinOption(optionValue, name, defaultValue) {\r\n      let result = { ...optionValue };\r\n      if (name) {\r\n        result.name = name;\r\n      }\r\n      if (defaultValue) {\r\n        result.default = defaultValue;\r\n      }\r\n      return result;\r\n    },\r\n  },\r\n  mounted() {},\r\n  computed: {\r\n    selected() {\r\n      let selected = this.getValue("selected");\r\n      return selected;\r\n    },\r\n    type() {\r\n      let option = this.viewOption;\r\n      return option.type;\r\n    },\r\n    format() {\r\n      let option = this.viewOption;\r\n      return option.format;\r\n    },\r\n    placeholder() {\r\n      let option = this.viewOption;\r\n      return option.placeholder;\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let viewBody = this.viewBody;\r\n      let primaryColor = this.v.color(option.textColor);\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let style = {};\r\n      style["position"] = "absolute";\r\n      style["color"] = `${primaryColor}`;\r\n      style = { ...textSize, ...style };\r\n      if (viewBody.relative) {\r\n        if (viewBody.autoHeight) {\r\n          style["position"] = "relative";\r\n        }\r\n      }\r\n      return {\r\n        ...style,\r\n      };\r\n    },\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    border() {\r\n      return {\r\n        color: "#000",\r\n        width: 0,\r\n        style: "solid",\r\n        position: ["top", "bottom", "left", "right"],\r\n        radiusOnly: [],\r\n        radiusMore: [],\r\n        radiusState: true,\r\n      };\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "文字大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    input() {\r\n      return {\r\n        name: "输入框",\r\n        type: "input",\r\n        default: "",\r\n        key: "input",\r\n        value: [],\r\n        hideTitle: true,\r\n      };\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n    collection() {\r\n      return {\r\n        name: "列表",\r\n        key: "list",\r\n        type: "collection",\r\n        model: "collection",\r\n      };\r\n    },\r\n    selectBox() {\r\n      return {\r\n        name: "选择",\r\n        type: "selectBox",\r\n        default: "",\r\n        key: "selectBox",\r\n        value: [],\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less">\r\n.display-view-datepicker {\r\n  // 在此开始写自定义样式\r\n  .bm-display-input-data-picker {\r\n    width: 100%;\r\n    height: 100%;\r\n    .ivu-date-picker-rel,\r\n    .ivu-input-wrapper,\r\n    .ivu-date-picker,\r\n    .ivu-input {\r\n      width: 100%;\r\n      height: 100%;\r\n      color: inherit;\r\n    }\r\n    .ivu-input {\r\n      border: none;\r\n      background: inherit;\r\n      font-size: 100%;\r\n      padding-left: 8px;\r\n    }\r\n    .ivu-input-suffix {\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n      font-size: 0;\r\n      height: initial;\r\n      i {\r\n        line-height: inherit !important;\r\n        color: inherit;\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  "69b6": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Collapse v-model="value">\r\n      <Panel name="1">\r\n        史蒂夫·乔布斯\r\n        <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>\r\n      </Panel>\r\n      <Panel name="2">\r\n        斯蒂夫·盖瑞·沃兹尼亚克\r\n        <p\r\n          slot="content"\r\n        >斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>\r\n      </Panel>\r\n      <Panel name="3">\r\n        乔纳森·伊夫\r\n        <p\r\n          slot="content"\r\n        >乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\r\n      </Panel>\r\n    </Collapse>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      value: "1",\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "6a38": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <i-table :columns="columns" :data="data" border></i-table>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      columns: [\r\n        {\r\n          title: "Name",\r\n          key: "name",\r\n        },\r\n        {\r\n          title: "Age",\r\n          key: "age",\r\n        },\r\n        {\r\n          title: "Address",\r\n          key: "address",\r\n        },\r\n      ],\r\n      data: [\r\n        {\r\n          name: "John Brown",\r\n          age: 18,\r\n          address: "New York No. 1 Lake Park",\r\n          date: "2016-10-03",\r\n        },\r\n        {\r\n          name: "Jim Green",\r\n          age: 24,\r\n          address: "London No. 1 Lake Park",\r\n          date: "2016-10-01",\r\n        },\r\n        {\r\n          name: "Joe Black",\r\n          age: 30,\r\n          address: "Sydney No. 1 Lake Park",\r\n          date: "2016-10-02",\r\n        },\r\n        {\r\n          name: "Jon Snow",\r\n          age: 26,\r\n          address: "Ottawa No. 2 Lake Park",\r\n          date: "2016-10-04",\r\n        },\r\n      ],\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  7268: function(e, n, t) {},
  "732f": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Tabs value="name1">\r\n      <TabPane label="标签一" name="name1">标签一的内容</TabPane>\r\n      <TabPane label="标签二" name="name2">标签二的内容</TabPane>\r\n      <TabPane label="标签三" name="name3">标签三的内容</TabPane>\r\n    </Tabs>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "733e": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Spin></Spin>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  7965: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <div class="item" v-for="(item, index) in list" :key="index">\r\n      <div class="head">\r\n        <div class="date">{{ item.date }}</div>\r\n        <div class="time">{{ item.time }}</div>\r\n        <div class="type">{{ item.type }}</div>\r\n      </div>\r\n      <div class="content">\r\n        <div class="text">{{ item.content }}</div>\r\n      </div>\r\n      <div class="foot">\r\n        <div class="address" v-if="stateAddress && item.address">\r\n          <img src="/image/customized/icon-address.png" alt />\r\n          <span>{{ item.address }}</span>\r\n        </div>\r\n        <div class="past" v-if="statePast && item.past">\r\n          <img src="/image/customized/icon-past.png" alt />\r\n          <span>{{ item.past }}</span>\r\n        </div>\r\n\r\n        <div class="name" v-if="stateName && item.name">\r\n          <span>{{ item.name }}</span>\r\n        </div>\r\n        <Dropdown transfer trigger="click" placement="bottom-end">\r\n          <div class="more">\r\n            <Icon type="ios-more"></Icon>\r\n          </div>\r\n          <div slot="list">\r\n            <div\r\n              class="ivu-dropdown-item"\r\n              @click="finish(index)"\r\n              v-if="stateFinish"\r\n            >\r\n              完成\r\n            </div>\r\n            <div class="ivu-dropdown-item" @click="edit(index)">编辑</div>\r\n            <div class="ivu-dropdown-item" @click="remove(index)">删除</div>\r\n          </div>\r\n        </Dropdown>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        list: {\r\n          type: "collection",\r\n          model: "collection",\r\n          name: "活动记录",\r\n          key: "list",\r\n        },\r\n        "list.date": {\r\n          name: "日期",\r\n          key: "list.date",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.time": {\r\n          name: "时间",\r\n          key: "list.time",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.address": {\r\n          name: "位置",\r\n          key: "list.address",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.past": {\r\n          name: "提醒方式",\r\n          key: "list.past",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.name": {\r\n          name: "名字",\r\n          key: "list.name",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.content": {\r\n          name: "内容",\r\n          key: "list.content",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.type": {\r\n          name: "类型",\r\n          key: "list.type",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        finish: {\r\n          ...this.select,\r\n          name: "完成（按钮）",\r\n          key: "finish",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n        address: {\r\n          ...this.select,\r\n          name: "位置",\r\n          key: "address",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n        past: {\r\n          ...this.select,\r\n          name: "提醒方式",\r\n          key: "past",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n        name: {\r\n          ...this.select,\r\n          name: "名称",\r\n          key: "name",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        finish: {\r\n          key: "finish",\r\n          name: "完成",\r\n        },\r\n        edit: {\r\n          key: "edit",\r\n          name: "编辑",\r\n        },\r\n        remove: {\r\n          key: "remove",\r\n          name: "删除",\r\n        },\r\n      });\r\n    },\r\n    remove(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("remove", item);\r\n    },\r\n    edit(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("edit", item);\r\n    },\r\n    finish(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("finish", item);\r\n    },\r\n  },\r\n  computed: {\r\n    stateFinish() {\r\n      let state = this.viewOption["finish"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    stateAddress() {\r\n      let state = this.viewOption["address"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    statePast() {\r\n      let state = this.viewOption["past"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    stateName() {\r\n      let state = this.viewOption["name"];\r\n      state = JSON.parse(state);\r\n      return state;\r\n    },\r\n    list() {\r\n      let list = this.getCollection("list", {}) || [];\r\n      return list;\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  & > .item {\r\n    background: #fff;\r\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);\r\n    position: relative;\r\n    margin-bottom: 2.4%;\r\n    padding: 2.9% 3.5% 2% 4.1%;\r\n\r\n    .head {\r\n      display: flex;\r\n\r\n      .date {\r\n        font-size: 110%;\r\n        font-weight: bold;\r\n        color: #333333;\r\n        padding: 1% 0;\r\n      }\r\n\r\n      .time {\r\n        font-size: 110%;\r\n        font-weight: bold;\r\n        color: #333333;\r\n        flex: 1;\r\n        margin-left: 2.5%;\r\n        padding: 1% 0;\r\n      }\r\n\r\n      .type {\r\n        margin-top: 0.5%;\r\n        padding: 1.5% 4%;\r\n        background: #12c29f;\r\n        border-radius: 4px;\r\n        color: #fff;\r\n        font-size: 90%;\r\n      }\r\n    }\r\n\r\n    .content {\r\n      padding-top: 2.9%;\r\n      padding-bottom: 1.3%;\r\n\r\n      .text {\r\n        font-size: 105%;\r\n        font-weight: 400;\r\n        line-height: 1.5;\r\n        color: #666;\r\n        word-break: break-all;\r\n      }\r\n\r\n      border-bottom: 0.18vw solid #d4d4d4;\r\n    }\r\n\r\n    .foot {\r\n      display: flex;\r\n      padding-top: 2%;\r\n\r\n      .ivu-dropdown {\r\n        flex: 1;\r\n        text-align: right;\r\n        font-size: 0;\r\n\r\n        .ivu-dropdown-rel {\r\n          display: inline-block;\r\n        }\r\n\r\n        .more {\r\n          font-size: 26px;\r\n          color: #c7c7c7;\r\n\r\n          .ivu-icon {\r\n            float: right;\r\n          }\r\n        }\r\n      }\r\n\r\n      .name {\r\n        flex: 1;\r\n        font-size: 95%;\r\n        font-weight: 400;\r\n        color: #747474;\r\n\r\n        span {\r\n          vertical-align: middle;\r\n        }\r\n      }\r\n\r\n      .address {\r\n        margin-right: 15px;\r\n\r\n        img {\r\n          width: 30%;\r\n          max-width: 18px;\r\n          max-height: 18px;\r\n          vertical-align: middle;\r\n        }\r\n\r\n        span {\r\n          font-size: 95%;\r\n          font-weight: 400;\r\n          color: #747474;\r\n          vertical-align: middle;\r\n        }\r\n      }\r\n\r\n      .past {\r\n        margin-right: 15px;\r\n\r\n        img {\r\n          width: 30%;\r\n          max-width: 18px;\r\n          max-height: 18px;\r\n          vertical-align: middle;\r\n        }\r\n\r\n        span {\r\n          font-size: 95%;\r\n          font-weight: 400;\r\n          color: #747474;\r\n          vertical-align: middle;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  "7c42": function(e, n, t) {
    var r = {
      "./": "55c8",
      "./app": "4457",
      "./app.js": "4457",
      "./component": "4872",
      "./component.js": "4872",
      "./custom": "dcfe",
      "./custom.js": "dcfe",
      "./index": "55c8",
      "./index.js": "55c8",
      "./modal": "51d3",
      "./modal.js": "51d3",
      "./platform": "bd70",
      "./platform.js": "bd70",
      "./pop": "b7d7",
      "./pop.js": "b7d7",
      "./print": "668b",
      "./print.js": "668b",
      "./window": "7f2b",
      "./window.js": "7f2b"
    };
    function a(e) {
      var n = i(e);
      return t(n)
    }
    function i(e) {
      if (!t.o(r, e)) {
        var n = new Error("Cannot find module '" + e + "'");
        throw n.code = "MODULE_NOT_FOUND",
          n
      }
      return r[e]
    }
    a.keys = function() {
      return Object.keys(r)
    }
      ,
      a.resolve = i,
      e.exports = a,
      a.id = "7c42"
  },
  "7c6b": function(e, n, t) {
    "use strict";
    t("29d3"),
      t("8fd6"),
      t("63a5");
    var r = t("ade3")
      , a = t("16d5")
      , i = {
      key: "load-data",
      name: "加载数据完毕"
    }
      , o = {
      key: "ready",
      name: "初始化完毕"
    }
      , c = {
      key: "click",
      name: "点击"
    }
      , l = {
      key: "leave",
      name: "离开"
    }
      , s = {
      "load-data": i,
      ready: o,
      click: c,
      leave: l,
      base: {
        ready: o,
        "load-data": i,
        leave: l
      }
    }
      , u = t("8338");
    function d(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function p(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? d(Object(t), !0).forEach((function(n) {
            Object(r["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var m = function(e, n, t) {
      var r = p({}, e);
      return n && (r.name = n),
      t && (r.default = t),
        r
    }
      , f = {}
      , v = function(e, n) {
      if (f[e])
        throw new Error("view ".concat(e, " 已存在"));
      f[e] = n
    };
    for (var h in v("base-text", {
      name: "文字",
      mode: ["common"],
      default: {
        body: {
          width: 4,
          height: 1
        }
      },
      option: {
        textSize: a["a"].textSize,
        textWeight: p(p({}, a["a"].select), {}, {
          name: "文字粗细",
          key: "textWeight",
          default: "400",
          value: [{
            key: "400",
            name: "常规",
            value: "400"
          }, {
            key: "bold",
            name: "加粗",
            value: "bold"
          }]
        }),
        longText: p(p({}, a["a"].sinpleSelectBox), {}, {
          name: "长文本",
          key: "longText",
          default: !1
        }),
        lineHeight: {
          type: "inputNumber",
          name: "行间距",
          key: "lineHeight",
          default: 1.15,
          value: "",
          hideTitle: !0
        },
        align: a["a"].align,
        primaryColor: m(a["a"].primaryColor, "文字颜色")
      },
      action: {
        click: s.click
      },
      field: {
        value: p({}, u["a"].string)
      },
      component: function() {
        return t.e("chunk-173c8750").then(t.bind(null, "94b0"))
      }
    }),
      v("base-image", {
        name: "图片",
        mode: ["common"],
        default: {
          body: {
            width: 2,
            height: 2
          }
        },
        option: {
          fitDegree: p(p({}, a["a"].select), {}, {
            name: "契合度",
            key: "fitDegree",
            default: "auto",
            value: [{
              key: "auto",
              name: "适应",
              value: "auto"
            }, {
              key: "stretching",
              name: "拉伸",
              value: "stretching"
            }, {
              key: "no-repeat",
              name: "平铺",
              value: "no-repeat"
            }]
          })
        },
        action: {
          click: s.click
        },
        field: {
          value: p({}, u["a"].image)
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "1f2e"))
        }
      }),
      v("base-button", {
        name: "按钮",
        mode: ["common"],
        default: {
          body: {
            width: 4,
            height: 1,
            border: p(p({}, a["a"].border), {}, {
              width: 1
            })
          }
        },
        option: {
          textSize: a["a"].textSize,
          textWeight: p(p({}, a["a"].select), {}, {
            name: "文字粗细",
            key: "textWeight",
            default: "400",
            value: [{
              key: "400",
              name: "常规",
              value: "400"
            }, {
              key: "bold",
              name: "加粗",
              value: "bold"
            }]
          }),
          textColor: p(p({}, m(a["a"].primaryColor, "文字颜色")), {}, {
            key: "textColor",
            default: "#000"
          })
        },
        action: {
          click: s.click
        },
        field: {
          value: p(p({}, u["a"].string), {}, {
            name: "按钮文字",
            default: "按钮"
          })
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "36c5"))
        }
      }),
      v("base-number", {
        name: "数字",
        mode: ["common"],
        default: {
          body: {
            width: 2,
            height: 2
          }
        },
        option: {
          textSize: a["a"].textSize,
          textWeight: p(p({}, a["a"].select), {}, {
            name: "文字粗细",
            key: "textWeight",
            default: "400",
            value: [{
              key: "400",
              name: "常规",
              value: "400"
            }, {
              key: "bold",
              name: "加粗",
              value: "bold"
            }]
          }),
          align: p({}, a["a"].align),
          primaryColor: m(a["a"].primaryColor, "文字颜色")
        },
        action: {
          click: s.click
        },
        field: {
          value: p({}, u["a"].number)
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "ec44"))
        }
      }),
      v("base-richtext", {
        name: "富文本",
        mode: ["common"],
        default: {
          body: {
            width: 4,
            height: 4
          }
        },
        option: {},
        action: {
          click: s.click
        },
        field: {
          value: p({}, u["a"].html)
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "3c3a"))
        }
      }),
      v("base-line", {
        name: "线",
        mode: ["common"],
        default: {
          body: {
            width: 6,
            height: 1
          }
        },
        option: {
          point: p(p({}, a["a"].select), {}, {
            name: "方向",
            key: "point",
            default: "x",
            value: [{
              key: "y",
              name: "纵向",
              value: "y"
            }, {
              key: "x",
              name: "横向",
              value: "x"
            }]
          }),
          axisSite: p(p({}, a["a"].select), {}, {
            name: "方向",
            key: "axisSite",
            default: "50%",
            value: [{
              key: "0%",
              name: "0%",
              value: "0%"
            }, {
              key: "25%",
              name: "25%",
              value: "25%"
            }, {
              key: "50%",
              name: "50%",
              value: "50%"
            }, {
              key: "75%",
              name: "75%",
              value: "75%"
            }, {
              key: "100%",
              name: "100%",
              value: "100%"
            }],
            hideTitle: !0
          }),
          lineLong: p(p({}, a["a"].select), {}, {
            name: "长度",
            key: "lineLong",
            default: "60",
            value: []
          }),
          color: m(p(p({}, a["a"].color), {}, {
            default: "black"
          }), "线条颜色")
        },
        action: {
          click: s.click
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "ebb8"))
        }
      }),
      v("base-block", {
        name: "块",
        mode: ["common"],
        type: "mixed",
        default: {
          body: {
            width: 2,
            height: 2
          }
        },
        option: {},
        action: {
          ready: s.ready,
          "load-data": s["load-data"]
        },
        component: function() {
          return t.e("chunk-84a33c6e").then(t.bind(null, "349b"))
        }
      }),
      v("base-list", {
        name: "列表",
        mode: ["common"],
        default: {
          body: {
            width: 2,
            height: 2
          }
        },
        type: "list",
        option: {},
        action: {
          ready: s.ready,
          "load-data": s["load-data"]
        },
        field: {
          list: p({}, u["a"].collection)
        },
        component: function() {
          return t.e("chunk-84a33c6e").then(t.bind(null, "b583"))
        }
      }),
      v("base-custom", {
        name: "自定义",
        mode: ["common"],
        type: "view",
        default: {
          body: {
            width: 2,
            height: 2
          }
        },
        option: {},
        field: {},
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "6772"))
        }
      }),
      f) {
      var g = f[h];
      g.type = g.type || "view",
        g.template = h
    }
    var y = f;
    function b(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function k(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? b(Object(t), !0).forEach((function(n) {
            Object(r["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var _ = {};
    for (var w in _["chart-funnel"] = {
      name: "漏斗",
      mode: ["chart"],
      default: {
        body: {
          width: 6,
          height: 6
        }
      },
      option: {},
      action: {
        click: s.click
      },
      field: {
        name: k(k({}, u["a"].stringArray), {}, {
          name: "分组",
          key: "name"
        }),
        value: k(k({}, u["a"].numberArray), {}, {
          name: "数值",
          key: "value"
        })
      },
      component: function() {
        return Promise.all([t.e("chunk-2a507f92"), t.e("chunk-7c2afa26")]).then(t.bind(null, "0ed4"))
      }
    },
      _["chart-column"] = {
        name: "柱状图",
        mode: ["chart"],
        default: {
          body: {
            width: 4,
            height: 3
          },
          data: {
            series: {
              0: {
                name: "系列1",
                data: [10, 20, 50]
              }
            }
          }
        },
        option: {
          showGrid: k(k({}, a["a"].select), {}, {
            name: "显示网格",
            key: "showGrid",
            default: "true",
            value: [{
              key: "true",
              name: "是",
              value: "true"
            }, {
              key: "false",
              name: "否",
              value: "false"
            }]
          }),
          showStyle: k(k({}, a["a"].select), {}, {
            name: "显示样式",
            key: "showStyle",
            default: "xAxis",
            value: [{
              key: "xAxis",
              name: "纵向",
              value: "xAxis"
            }, {
              key: "yAxis",
              name: "横向",
              value: "yAxis"
            }]
          })
        },
        action: {
          click: s.click
        },
        field: {
          categories: k(k({}, u["a"].stringArray), {}, {
            name: "分组",
            key: "categories"
          }),
          series: k(k({}, u["a"].collection), {}, {
            type: "manual",
            name: "柱系列列表",
            key: "series"
          }),
          "series.name": k(k({}, u["a"].string), {}, {
            name: "系列名称",
            key: "series.name"
          }),
          "series.data": k(k({}, u["a"].numberArray), {}, {
            name: "Y值",
            key: "series.data"
          })
        },
        component: function() {
          return Promise.all([t.e("chunk-2a507f92"), t.e("chunk-dd20b97e")]).then(t.bind(null, "67e5"))
        }
      },
      _["chart-pie"] = {
        name: "饼图",
        mode: ["chart"],
        default: {
          body: {
            width: 6,
            height: 4
          }
        },
        option: {
          showLegend: k(k({}, a["a"].sinpleSelectBox), {}, {
            name: "显示图例",
            key: "showLegend",
            default: ""
          })
        },
        action: {
          click: s.click
        },
        field: {
          name: k(k({}, u["a"].stringArray), {}, {
            name: "分组",
            key: "name"
          }),
          value: k(k({}, u["a"].numberArray), {}, {
            name: "数值",
            key: "value"
          })
        },
        component: function() {
          return Promise.all([t.e("chunk-2a507f92"), t.e("chunk-4981390d")]).then(t.bind(null, "2c13"))
        }
      },
      _["chart-line"] = {
        name: "折线图",
        mode: ["chart"],
        default: {
          body: {
            width: 6,
            height: 3
          },
          data: {
            series: {
              0: {
                name: "系列1",
                data: [10, 20, 50]
              }
            }
          }
        },
        option: {},
        action: {
          click: s.click
        },
        field: {
          categories: k(k({}, u["a"].stringArray), {}, {
            name: "分组",
            key: "categories"
          }),
          series: k(k({}, u["a"].collection), {}, {
            type: "manual",
            name: "线系列列表",
            key: "series"
          }),
          "series.name": k(k({}, u["a"].string), {}, {
            name: "系列名称",
            key: "series.name"
          }),
          "series.data": k(k({}, u["a"].numberArray), {}, {
            name: "Y值",
            key: "series.data"
          })
        },
        component: function() {
          return Promise.all([t.e("chunk-2a507f92"), t.e("chunk-7c2afa26")]).then(t.bind(null, "fcdd"))
        }
      },
      _) {
      var x = _[w];
      x.type = "view",
        x.template = w
    }
    var O = _;
    function j(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function P(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? j(Object(t), !0).forEach((function(n) {
            Object(r["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var S = {};
    for (var M in S["crm-schedule"] = {
      name: "日程表",
      mode: ["pc"],
      default: {
        body: {
          width: 6,
          height: 6
        }
      },
      option: {},
      action: {
        click: {
          key: "click",
          name: "点击"
        },
        print: {
          key: "print",
          name: "打印"
        }
      },
      field: {
        group: P(P({}, u["a"].stringArray), {}, {
          name: "分组",
          key: "group"
        }),
        schedule: P(P({}, u["a"].collection), {}, {
          name: "日程",
          key: "schedule"
        }),
        "schedule.date": P(P({}, u["a"].string), {}, {
          name: "日期",
          key: "schedule.date"
        }),
        "schedule.state": P(P({}, u["a"].string), {}, {
          name: "状态",
          key: "schedule.state"
        }),
        "schedule.type": P(P({}, u["a"].string), {}, {
          name: "类型",
          key: "schedule.type"
        }),
        "schedule.content": P(P({}, u["a"].string), {}, {
          name: "内容",
          key: "schedule.content"
        }),
        "schedule.href": P(P({}, u["a"].string), {}, {
          name: "跳转链接",
          key: "schedule.href"
        }),
        "schedule.id": P(P({}, u["a"].string), {}, {
          name: "id",
          key: "schedule.id"
        })
      },
      component: function() {
        return t.e("chunk-173c8750").then(t.bind(null, "7763"))
      }
    },
      S["crm-schedule-mobile"] = {
        name: "日程表",
        mode: ["mobile"],
        default: {
          body: {
            width: 6,
            height: 6
          }
        },
        option: {},
        action: {
          click: s.click
        },
        field: {
          group: P(P({}, u["a"].stringArray), {}, {
            name: "分组",
            key: "group"
          }),
          schedule: P(P({}, u["a"].collection), {}, {
            name: "日程",
            key: "schedule"
          }),
          "schedule.date": P(P({}, u["a"].string), {}, {
            name: "日期",
            key: "schedule.date"
          }),
          "schedule.state": P(P({}, u["a"].string), {}, {
            name: "状态",
            key: "schedule.state"
          }),
          "schedule.type": P(P({}, u["a"].string), {}, {
            name: "类型",
            key: "schedule.type"
          }),
          "schedule.content": P(P({}, u["a"].string), {}, {
            name: "内容",
            key: "schedule.content"
          }),
          "schedule.href": P(P({}, u["a"].string), {}, {
            name: "跳转链接",
            key: "schedule.href"
          }),
          "schedule.id": P(P({}, u["a"].string), {}, {
            name: "id",
            key: "schedule.id"
          })
        },
        component: function() {
          return t.e("chunk-1e2403e7").then(t.bind(null, "970a"))
        }
      },
      S) {
      var C = S[M];
      C.type = "view",
        C.template = M
    }
    var D = S;
    function E(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function A(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? E(Object(t), !0).forEach((function(n) {
            Object(r["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var I = function(e, n, t) {
      var r = A({}, e);
      return n && (r.name = n),
      t && (r.default = t),
        r
    }
      , q = {};
    for (var T in q["input-text"] = {
      name: "文本框",
      mode: ["common"],
      default: {
        body: {
          width: 5,
          height: 1,
          border: A(A({}, a["a"].border), {}, {
            width: 1,
            radiusOnly: [5],
            color: "rgb(191,191,191)"
          })
        }
      },
      option: {
        textSize: a["a"].textSize,
        textColor: A(A({}, I(a["a"].baseButton.primaryColor, "文字颜色")), {}, {
          key: "textColor"
        }),
        textWeight: A(A({}, a["a"].select), {}, {
          name: "文字粗细",
          key: "textWeight",
          default: "400",
          value: [{
            key: "400",
            name: "常规",
            value: "400"
          }, {
            key: "bold",
            name: "加粗",
            value: "bold"
          }]
        }),
        iconType: A(A({}, a["a"].select), {}, {
          name: "图标设置",
          key: "iconType",
          default: "none",
          value: [{
            key: "none",
            name: "无图标",
            value: "none"
          }, {
            key: "prefix",
            name: "前置图标",
            value: "prefix"
          }, {
            key: "suffix",
            name: "后置图标",
            value: "suffix"
          }]
        }),
        selectedIcon: A(A({}, a["a"].iconBox), {}, {
          name: "已选图标",
          key: "selectedIcon",
          default: "",
          value: ""
        }),
        iconColor: A(A({}, I(a["a"].baseButton.primaryColor, "图标颜色")), {}, {
          key: "iconColor"
        }),
        placeholder: A(A({}, a["a"].input), {}, {
          name: "占位文本",
          key: "placeholder",
          default: "请输入",
          value: ""
        }),
        inputPosition: A(A({}, a["a"].select), {}, {
          name: "输入位置",
          key: "inputPosition",
          default: "left",
          value: [{
            key: "left",
            name: "靠左",
            value: "left"
          }, {
            key: "right",
            name: "靠右",
            value: "right"
          }]
        }),
        textarea: A(A({}, a["a"].select), {}, {
          name: "长文本",
          key: "textarea",
          default: "false",
          value: [{
            key: "false",
            name: "否",
            value: "false"
          }, {
            key: "true",
            name: "是",
            value: "true"
          }]
        })
      },
      action: {
        change: {
          key: "change",
          name: "数据改变时"
        },
        enter: {
          key: "enter",
          name: "回车"
        },
        click: {
          key: "click",
          name: "点击图标"
        }
      },
      field: {
        value: A({}, u["a"].string)
      },
      component: function() {
        return t.e("chunk-173c8750").then(t.bind(null, "0308"))
      }
    },
      q["input-dropdown"] = {
        name: "下拉选择",
        mode: ["common"],
        default: {
          body: {
            width: 5,
            height: 1,
            border: A(A({}, a["a"].border), {}, {
              width: 1,
              radiusOnly: [5],
              color: "rgb(191,191,191)"
            })
          },
          data: {
            options: [{
              label: "选择1"
            }, {
              label: "选择2"
            }]
          }
        },
        option: {
          textSize: a["a"].textSize,
          textColor: A(A({}, I(a["a"].baseButton.primaryColor, "文字颜色")), {}, {
            key: "textColor"
          }),
          textWeight: A(A({}, a["a"].select), {}, {
            name: "文字粗细",
            key: "textWeight",
            default: "400",
            value: [{
              key: "400",
              name: "常规",
              value: "400"
            }, {
              key: "bold",
              name: "加粗",
              value: "bold"
            }]
          }),
          placeholder: A(A({}, a["a"].input), {}, {
            name: "占位文本",
            key: "placeholder",
            default: "请选择",
            value: ""
          })
        },
        action: {
          change: {
            key: "change",
            name: "选择数据"
          }
        },
        field: {
          selected: A(A({}, u["a"].string), {}, {
            name: "选中选项",
            key: "selected",
            default: "选择1"
          }),
          options: A(A({}, u["a"].collection), {}, {
            name: "选项集",
            type: "manual",
            key: "options"
          }),
          "options.label": A(A({}, u["a"].string), {}, {
            name: "选项",
            key: "options.label"
          })
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "b5bd"))
        }
      },
      q["input-radio"] = {
        name: "单选框",
        mode: ["common"],
        default: {
          body: {
            width: 5,
            height: 1
          },
          data: {
            options: [{
              label: "是"
            }, {
              label: "否"
            }]
          }
        },
        option: {
          textSize: a["a"].textSize,
          textWeight: A(A({}, a["a"].select), {}, {
            name: "文字粗细",
            key: "textWeight",
            default: "400",
            value: [{
              key: "400",
              name: "常规",
              value: "400"
            }, {
              key: "bold",
              name: "加粗",
              value: "bold"
            }]
          }),
          textColor: A(A({}, I(a["a"].baseButton.primaryColor, "文字颜色")), {}, {
            key: "textColor"
          }),
          arrangement: A(A({}, a["a"].select), {}, {
            name: "排列方式",
            key: "arrangement",
            default: "false",
            value: [{
              key: "false",
              name: "横向",
              value: "false"
            }, {
              key: "true",
              name: "垂直",
              value: "true"
            }]
          }),
          size: A(A({}, a["a"].select), {}, {
            name: "单选框的尺寸",
            key: "size",
            default: "routine",
            value: [{
              key: "small",
              name: "小",
              value: "small"
            }, {
              key: "routine",
              name: "常规",
              value: "routine"
            }, {
              key: "large",
              name: "大",
              value: "large"
            }]
          })
        },
        action: {
          change: {
            key: "change",
            name: "选择数据"
          }
        },
        field: {
          selected: A(A({}, u["a"].string), {}, {
            name: "选中选项",
            key: "selected",
            default: "是"
          }),
          options: A(A({}, u["a"].collection), {}, {
            name: "选项集",
            type: "manual",
            key: "options"
          }),
          "options.label": A(A({}, u["a"].string), {}, {
            name: "选项",
            key: "options.label"
          })
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "f8d6"))
        }
      },
      q["input-switch"] = {
        name: "开关",
        mode: ["common"],
        default: {
          body: {
            width: 5,
            height: 1
          }
        },
        option: {
          size: A(A({}, a["a"].select), {}, {
            name: "开关的尺寸",
            key: "size",
            default: "routine",
            value: [{
              key: "small",
              name: "小",
              value: "small"
            }, {
              key: "routine",
              name: "常规",
              value: "routine"
            }, {
              key: "large",
              name: "大",
              value: "large"
            }]
          }),
          textColor: A(A({}, I(a["a"].primaryColor, "文字颜色")), {}, {
            key: "textColor",
            default: "#fff"
          }),
          falseColor: A(A({}, I(a["a"].primaryColor, "关闭时背景色")), {}, {
            key: "falseColor",
            default: "#ccc"
          }),
          trueColor: A(A({}, I(a["a"].primaryColor, "开启式背景色")), {}, {
            key: "trueColor",
            default: "#0098FF"
          }),
          falseValue: A(A({}, a["a"].input), {}, {
            name: "关闭时的值",
            key: "falseValue",
            default: "",
            value: ""
          }),
          trueValue: A(A({}, a["a"].input), {}, {
            name: "开启时的值",
            key: "trueValue",
            default: "",
            value: ""
          })
        },
        action: {
          change: {
            key: "change",
            name: "切换"
          }
        },
        field: {
          switch: A(A({}, u["a"].stringArray), {}, {
            name: "开关",
            key: "switch",
            default: []
          }),
          "switch.on": A(A({}, u["a"].string), {}, {
            name: "开启时的值",
            key: "switch.on"
          }),
          "switch.off": A(A({}, u["a"].string), {}, {
            name: "关闭时的值",
            key: "switch.off"
          })
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "dd96"))
        }
      },
      q["input-date-picker"] = {
        name: "日期选择器",
        mode: ["common"],
        default: {
          body: {
            width: 5,
            height: 1,
            border: A(A({}, a["a"].border), {}, {
              width: 1,
              radiusOnly: [5],
              color: "rgb(191,191,191)"
            })
          }
        },
        option: {
          textSize: a["a"].textSize,
          textColor: A(A({}, I(a["a"].baseButton.primaryColor, "文字颜色")), {}, {
            key: "textColor",
            default: "rgb(0,0,0)"
          }),
          type: A(A({}, a["a"].select), {}, {
            name: "类型",
            key: "type",
            default: "date",
            value: [{
              key: "date",
              name: "日期",
              value: "date"
            }, {
              key: "daterange",
              name: "日期范围",
              value: "daterange"
            }]
          }),
          format: A(A({}, a["a"].selectBox), {}, {
            name: "显示格式",
            key: "format",
            default: "yyyy-MM-dd",
            value: [{
              key: "yyyy-MM-dd",
              name: "yyyy-MM-dd",
              value: "yyyy-MM-dd"
            }, {
              key: "yyyy/MM/dd",
              name: "yyyy/MM/dd",
              value: "yyyy/MM/dd"
            }, {
              key: "yyyy年MM月dd日",
              name: "yyyy年MM月dd日",
              value: "yyyy年MM月dd日"
            }]
          }),
          placeholder: A(A({}, a["a"].input), {}, {
            name: "占位文本",
            key: "placeholder",
            default: "请选择",
            value: ""
          })
        },
        action: {
          change: {
            key: "change",
            name: "数据改变时"
          }
        },
        field: {
          selected: A(A({}, u["a"].string), {}, {
            name: "选中日期",
            key: "selected"
          })
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "4304"))
        }
      },
      q) {
      var B = q[T];
      B.type = "view",
        B.template = T
    }
    var z = q;
    function L(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function W(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? L(Object(t), !0).forEach((function(n) {
            Object(r["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var $ = {};
    for (var U in $["custom-rotation"] = {
      name: "轮播图",
      mode: ["mobile"],
      default: {
        body: {
          width: 2,
          height: 2
        }
      },
      option: {
        auto: W(W({}, a["a"].select), {}, {
          name: "自动滚动",
          key: "auto",
          default: "true",
          value: [{
            key: "false",
            name: "否",
            value: "false"
          }, {
            key: "true",
            name: "是",
            value: "true"
          }]
        }),
        interval: W(W({}, a["a"].number), {}, {
          name: "轮播时间(毫秒ms)",
          key: "interval",
          default: "2000",
          value: ""
        })
      },
      action: {},
      field: {
        list: W(W({}, u["a"].collection), {}, {
          name: "轮播图",
          key: "list"
        }),
        "list.image": W(W({}, u["a"].string), {}, {
          name: "图片",
          key: "list.image"
        })
      },
      component: function() {
        return Promise.all([t.e("chunk-f3ca96a4"), t.e("chunk-173c8750")]).then(t.bind(null, "bf07"))
      }
    },
      $["custom-timeline"] = {
        name: "时间轴",
        mode: ["mobile"],
        default: {
          body: {
            width: 2,
            height: 2
          }
        },
        option: {
          edit: W(W({}, a["a"].select), {}, {
            name: "编辑(按钮)",
            key: "edit",
            default: "true",
            value: [{
              key: "false",
              name: "隐藏",
              value: "false"
            }, {
              key: "true",
              name: "显示",
              value: "true"
            }]
          }),
          remove: W(W({}, a["a"].select), {}, {
            name: "删除(按钮)",
            key: "remove",
            default: "true",
            value: [{
              key: "false",
              name: "隐藏",
              value: "false"
            }, {
              key: "true",
              name: "显示",
              value: "true"
            }]
          }),
          thumbs: W(W({}, a["a"].select), {}, {
            name: "点赞(按钮)",
            key: "thumbs",
            default: "true",
            value: [{
              key: "false",
              name: "隐藏",
              value: "false"
            }, {
              key: "true",
              name: "显示",
              value: "true"
            }]
          })
        },
        action: {
          textEvent: {
            key: "textEvent",
            name: "点击文本"
          },
          enclosure: {
            key: "enclosure",
            name: "点击附件"
          },
          edit: {
            key: "edit",
            name: "点击编辑"
          },
          remove: {
            key: "remove",
            name: "点击删除"
          },
          thumbs: {
            key: "thumbs",
            name: "点赞"
          }
        },
        field: {
          timeline: W(W({}, u["a"].collection), {}, {
            name: "时间轴",
            key: "timeline"
          }),
          "timeline.date": W(W({}, u["a"].string), {}, {
            name: "日期",
            key: "timeline.date"
          }),
          "timeline.content": W(W({}, u["a"].string), {}, {
            name: "内容",
            key: "timeline.content"
          }),
          "timeline.num": W(W({}, u["a"].number), {}, {
            name: "附件数",
            key: "timeline.num"
          }),
          "timeline.read": W(W({}, u["a"].string), {}, {
            name: "已读",
            key: "timeline.read"
          }),
          "timeline.remain": W(W({}, u["a"].string), {}, {
            name: "'查看附件'显示状态",
            key: "timeline.remain"
          })
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "8173"))
        }
      },
      $["custom-timeline-pc"] = {
        name: "时间轴",
        mode: ["pc"],
        default: {
          body: {
            width: 2,
            height: 2
          }
        },
        option: {
          edit: W(W({}, a["a"].select), {}, {
            name: "编辑(按钮)",
            key: "edit",
            default: "true",
            value: [{
              key: "false",
              name: "隐藏",
              value: "false"
            }, {
              key: "true",
              name: "显示",
              value: "true"
            }]
          }),
          remove: W(W({}, a["a"].select), {}, {
            name: "删除(按钮)",
            key: "remove",
            default: "true",
            value: [{
              key: "false",
              name: "隐藏",
              value: "false"
            }, {
              key: "true",
              name: "显示",
              value: "true"
            }]
          })
        },
        action: {
          enclosure: {
            key: "enclosure",
            name: "点击附件"
          },
          edit: {
            key: "edit",
            name: "点击编辑"
          },
          remove: {
            key: "remove",
            name: "点击删除"
          }
        },
        field: {
          timeline: W(W({}, u["a"].collection), {}, {
            name: "时间轴",
            key: "timeline"
          }),
          "timeline.date": W(W({}, u["a"].string), {}, {
            name: "日期",
            key: "timeline.date"
          }),
          "timeline.content": W(W({}, u["a"].string), {}, {
            name: "内容",
            key: "timeline.content"
          }),
          "timeline.num": W(W({}, u["a"].number), {}, {
            name: "附件数",
            key: "timeline.num"
          })
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "d69a"))
        }
      },
      $["custom-inquiry"] = {
        name: "问诊备注",
        mode: ["mobile"],
        default: {},
        option: {
          btn: W(W({}, a["a"].select), {}, {
            name: "按钮",
            key: "btn",
            default: "true",
            value: [{
              key: "false",
              name: "隐藏",
              value: "false"
            }, {
              key: "true",
              name: "显示",
              value: "true"
            }]
          })
        },
        action: {
          edit: {
            key: "edit",
            name: "编辑"
          },
          remove: {
            key: "remove",
            name: "删除"
          }
        },
        field: {
          list: {
            type: "collection",
            model: "collection",
            name: "消息",
            key: "list"
          },
          "list.time": {
            name: "时间",
            key: "list.time",
            type: "string",
            model: "default",
            default: "文本内容",
            format: ""
          },
          "list.content": {
            name: "内容",
            key: "list.content",
            type: "string",
            model: "default",
            default: "文本内容",
            format: ""
          },
          "list.url1": {
            name: "图片1",
            key: "list.url1",
            type: "string",
            model: "default",
            default: "文本内容",
            format: ""
          },
          "list.url2": {
            name: "图片2",
            key: "list.url2",
            type: "string",
            model: "default",
            default: "文本内容",
            format: ""
          },
          "list.url3": {
            name: "图片3",
            key: "list.url3",
            type: "string",
            model: "default",
            default: "文本内容",
            format: ""
          }
        },
        component: function() {
          return Promise.all([t.e("chunk-0321d966"), t.e("chunk-173c8750")]).then(t.bind(null, "58cb"))
        }
      },
      $["custom-buy"] = {
        name: "购买",
        mode: ["mobile"],
        default: {},
        option: {},
        action: {
          click: {
            key: "click",
            name: "确定"
          },
          cencal: {
            key: "remove",
            name: "取消"
          }
        },
        field: {
          selected: W(W({}, u["a"].string), {}, {
            name: "选中价格",
            key: "selected",
            default: ""
          }),
          num: W(W({}, u["a"].number), {}, {
            name: "购买数量",
            key: "num"
          }),
          list: W(W({}, u["a"].collection), {}, {
            name: "单价列表",
            key: "list"
          }),
          "list.img": W(W({}, u["a"].string), {}, {
            name: "图片",
            key: "list.img"
          }),
          "list.price": W(W({}, u["a"].string), {}, {
            name: "金额",
            key: "list.price"
          }),
          "list.specs": W(W({}, u["a"].string), {}, {
            name: "规格",
            key: "list.specs"
          })
        },
        component: function() {
          return t.e("chunk-173c8750").then(t.bind(null, "372e"))
        }
      },
      $) {
      var R = $[U];
      R.type = "view",
        R.template = U
    }
    var V = $;
    n["a"] = {
      base: y,
      echarts: O,
      input: z,
      custom: V,
      crm: D
    }
  },
  "7f2b": function(e, n, t) {
    "use strict";
    t.r(n);
    var r = t("a169");
    n["default"] = {
      install: function(e, n) {
        e.mixin({
          computed: {
            $$body: function() {
              return r["default"].getters["window/body"]
            },
            $$isMobile: function() {
              return r["default"].getters["window/isMobile"]
            }
          }
        })
      }
    }
  },
  "7f8a": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "setSchedule", (function() {
          return c
        }
      )),
      t.d(n, "updateSchedule", (function() {
          return l
        }
      )),
      t.d(n, "listSchedule", (function() {
          return s
        }
      )),
      t.d(n, "removeSchedule", (function() {
          return u
        }
      )),
      t.d(n, "toggleSchedule", (function() {
          return d
        }
      ));
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = "/api/dev"
      , c = function(e, n, t, r) {
      var c = i();
      return a.request({
        url: "".concat(o, "/schedule/").concat(c, "/set"),
        method: "post",
        data: {
          flow: e,
          cron: n,
          name: t,
          option: r
        }
      })
    }
      , l = function(e, n, t, r, c) {
      var l = i();
      return a.request({
        url: "".concat(o, "/schedule/").concat(l, "/").concat(e, "/update"),
        method: "post",
        data: {
          flow: n,
          cron: t,
          name: r,
          option: c
        }
      })
    }
      , s = function() {
      var e = i();
      return a.request({
        url: "".concat(o, "/schedule/").concat(e),
        method: "get"
      })
    }
      , u = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/schedule/").concat(n, "/").concat(e, "/remove"),
        method: "get"
      })
    }
      , d = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/schedule/").concat(n, "/").concat(e, "/toggle"),
        method: "get"
      })
    }
  },
  "821c": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <div class="bm-display-base-button" :style="btnStyle" @click="onClick">\r\n      <div class="button-text" :style="textStyle">{{text}}</div>\r\n    </div>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    onClick() {\r\n      this.doAction("click", this.text);\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        value: {\r\n          ...this.string,\r\n          name: "按钮文字",\r\n          default: "按钮",\r\n        },\r\n      });\r\n\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        width: 4,\r\n        height: 1,\r\n        border: {\r\n          ...this.border,\r\n          width: 1,\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        textSize: this.textSize,\r\n        textWeight: {\r\n          ...this.select,\r\n          name: "文字粗细",\r\n          key: "textWeight",\r\n          default: "400",\r\n          value: [\r\n            { key: "400", name: "常规", value: "400" },\r\n            { key: "bold", name: "加粗", value: "bold" },\r\n          ],\r\n        },\r\n        textColor: {\r\n          ...this.primaryColor,\r\n          key: "textColor",\r\n          default: "#000",\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n  },\r\n  computed: {\r\n    text() {\r\n      return this.getValue("value");\r\n    },\r\n    stretchBorder() {\r\n      return this.viewOption.stretchBorder || false;\r\n    },\r\n    btnStyle() {\r\n      let option = this.viewOption;\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let textWeight = option.textWeight;\r\n      let padding = this.viewBody.padding;\r\n      let style = {};\r\n      style["font-weight"] = textWeight;\r\n      style[\r\n        "padding"\r\n      ] = `${padding["top"]}px ${padding["right"]}px ${padding["bottom"]}px ${padding["left"]}px`;\r\n      return {\r\n        ...textSize,\r\n        ...style,\r\n      };\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let textColor = this.v.color(option.textColor);\r\n      let viewBody = this.viewBody;\r\n      let style = {};\r\n      style["color"] = `${textColor}`;\r\n      style["position"] = "absolute";\r\n      style["left"] = "50%";\r\n      style["top"] = "50%";\r\n      style["transform"] = `translateX(-50%) translateY(-50%)`;\r\n      if (viewBody.relative) {\r\n        style["position"] = "relative";\r\n        if (viewBody.autoWidth) {\r\n          delete style.left;\r\n          style["transform"] = `translateY(-50%)`;\r\n        }\r\n        if (viewBody.autoHeight) {\r\n          delete style.top;\r\n          style["transform"] = `translateX(-50%)`;\r\n        }\r\n        if (viewBody.autoWidth && viewBody.autoHeight) {\r\n          delete style.transform;\r\n        }\r\n      }\r\n      return {\r\n        ...style,\r\n      };\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "文字大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    border() {\r\n      return {\r\n        color: "#000",\r\n        width: 0,\r\n        style: "solid",\r\n        position: ["top", "bottom", "left", "right"],\r\n        radiusOnly: [],\r\n        radiusMore: [],\r\n        radiusState: true,\r\n      };\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  // 在此开始写自定义样式\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  .bm-display-base-button {\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    opacity: 1;\r\n    font-weight: 400;\r\n    cursor: pointer;\r\n    transition: opacity 0.2s linear;\r\n    cursor: pointer;\r\n    &:hover {\r\n      opacity: 0.8;\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  8338: function(e, n, t) {
    "use strict";
    var r = {
      name: "文本",
      key: "value",
      type: "string",
      model: "default",
      default: "文本内容",
      format: ""
    }
      , a = {
      name: "图片",
      key: "value",
      type: "image",
      model: "default",
      default: "https://pan.bnocode.com/public/image/logo.jpg",
      format: ""
    }
      , i = {
      name: "数字",
      key: "value",
      type: "number",
      model: "default",
      default: "0",
      format: ""
    }
      , o = {
      name: "富文本",
      key: "value",
      type: "html",
      model: "default",
      default: "富文本内容",
      format: ""
    }
      , c = {
      name: "列表",
      key: "list",
      type: "collection",
      model: "collection"
    }
      , l = {
      name: "列表 - 手动",
      key: "list",
      type: "manual",
      model: "collection"
    }
      , s = {
      name: "文本数组",
      key: "value",
      type: "string",
      model: "array",
      default: '["文本1", "文本2", "文本3"]',
      format: ""
    }
      , u = {
      name: "数字数组",
      key: "value",
      type: "number",
      model: "array",
      default: "[10, 50, 100]",
      format: ""
    };
    n["a"] = {
      string: r,
      image: a,
      number: i,
      html: o,
      collection: c,
      stringArray: s,
      numberArray: u,
      manualCollection: l
    }
  },
  8477: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <i-input v-model="value" placeholder="Enter something..." style="width: 300px" />\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      value: "",\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "86c6": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <div class="item" v-for="(item,index) in list" :key="index">\r\n      <div class="head">\r\n        <div class="portrait">\r\n          <img :src="item.url" alt />\r\n        </div>\r\n        <div class="name">{{item.name}}</div>\r\n        <div class="time">{{item.time}}</div>\r\n      </div>\r\n      <div class="content">{{item.content}}</div>\r\n      <div class="foot">\r\n        <div class="delete" @click="remove(index)" v-if="item.user==currentUser">\r\n          <img src="/image/customized/icon-delete.png" alt />\r\n          <span >删除</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        list: {\r\n          type: "collection",\r\n          model: "collection",\r\n          name: "消息",\r\n          key: "list",\r\n        },\r\n        "list.url": {\r\n          name: "头像",\r\n          key: "list.url",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.name": {\r\n          name: "名字",\r\n          key: "list.name",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.time": {\r\n          name: "时间",\r\n          key: "list.time",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.content": {\r\n          name: "内容",\r\n          key: "list.content",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.user": {\r\n          name: "用户",\r\n          key: "list.user",\r\n          type: "string",\r\n          model: "default",\r\n          default: "用户",\r\n          format: "",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {});\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        remove: {\r\n          key: "remove",\r\n          name: "点击删除",\r\n        },\r\n      });\r\n    },\r\n    remove(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("remove", item);\r\n    },\r\n  },\r\n  computed: {\r\n    list() {\r\n      let list = this.getCollection("list",{}) || [];\r\n      return list;\r\n    },\r\n    currentUser(){\r\n      return this.$store.getters["context/getUserData"]("__name");\r\n    }\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  .item {\r\n    padding: 0 2.1%;\r\n    margin-bottom: 3.1%;\r\n    background: #fff;\r\n\r\n    .head {\r\n      display: flex;\r\n\r\n      .portrait {\r\n        width: 10%;\r\n        padding-bottom: 10%;\r\n        height: 0;\r\n        position: relative;\r\n        margin-top: 3.8%;\r\n        margin-left: 1%;\r\n\r\n        img {\r\n          max-width: 100%;\r\n          max-height: 100%;\r\n          position: absolute;\r\n          top: 50%;\r\n          left: 50%;\r\n          transform: translateX(-50%) translateY(-50%);\r\n        }\r\n      }\r\n\r\n      .name {\r\n        font-size: 120%;\r\n        font-weight: bold;\r\n        color: rgba(0, 0, 0, 1);\r\n        margin-top: 5.4%;\r\n        margin-left: 2.4%;\r\n        flex: 1;\r\n      }\r\n\r\n      .time {\r\n        font-size: 100%;\r\n        font-weight: 400;\r\n        color: rgba(156, 156, 156, 1);\r\n        margin-top: 6.8%;\r\n        margin-right: 2.4%;\r\n      }\r\n    }\r\n\r\n    .content {\r\n      margin-top: 3%;\r\n      padding-bottom: 2.4%;\r\n      font-size: 100%;\r\n      font-weight: 400;\r\n      line-height: 1.8;\r\n      color: rgba(116, 116, 116, 1);\r\n    }\r\n    .foot {\r\n      text-align: right;\r\n      padding-bottom: 1%;\r\n      .delete {\r\n        display: inline-flex;\r\n        font-size: 90%;\r\n        word-break: break-word;\r\n        margin-right: 2.4%;\r\n        img {\r\n          max-width: 16px;\r\n          max-height: 16px;\r\n          vertical-align: middle;\r\n        }\r\n        span {\r\n          font-weight: 400;\r\n          color: #9c9c9c;\r\n          display: inline-block;\r\n          word-break: break-word;\r\n          padding-left: 2px;\r\n          vertical-align: middle;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  8877: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <i-select v-model="model" style="width:200px">\r\n      <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>\r\n    </i-select>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      cityList: [\r\n        {\r\n          value: "New York",\r\n          label: "New York",\r\n        },\r\n        {\r\n          value: "London",\r\n          label: "London",\r\n        },\r\n        {\r\n          value: "Sydney",\r\n          label: "Sydney",\r\n        },\r\n        {\r\n          value: "Ottawa",\r\n          label: "Ottawa",\r\n        },\r\n        {\r\n          value: "Paris",\r\n          label: "Paris",\r\n        },\r\n        {\r\n          value: "Canberra",\r\n          label: "Canberra",\r\n        },\r\n      ],\r\n      model: "",\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "8a69": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Radio v-model="single">Radio</Radio>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      single: false,\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "913b": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <div class="tabs" :style="style">\r\n      <div\r\n        class="item"\r\n        @click="onClick(index)"\r\n        v-for="(item,index) in list"\r\n        :key="index"\r\n        :class="{active:active==getName(index)}"\r\n        :style="active==getName(index)?itemStyle:{}"\r\n      >\r\n        <div class="text">{{item.name}}</div>\r\n        <div class="line" :style="active==getName(index)?lineStyle:{}"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      active: "",\r\n    };\r\n  },\r\n  methods: {\r\n    getName(index) {\r\n      let item = this.list[index];\r\n      if (item) {\r\n        return item.name;\r\n      }\r\n      return "";\r\n    },\r\n    onClick(index) {\r\n      let current = this.list[index];\r\n      if (current) {\r\n        this.active = current.name;\r\n      }\r\n      this.doAction("click", this.active);\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        selected: {\r\n          ...this.string,\r\n          name: "选中选项",\r\n          key: "selected",\r\n          default: "",\r\n        },\r\n        list: {\r\n          ...this.collection,\r\n          name: "tab标签页",\r\n          key: "list",\r\n        },\r\n        "list.name": {\r\n          ...this.string,\r\n          name: "标签名",\r\n          key: "list.name",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        textSize: this.textSize,\r\n        textWeight: {\r\n          ...this.select,\r\n          name: "文字粗细",\r\n          key: "textWeight",\r\n          default: "400",\r\n          value: [\r\n            { key: "400", name: "常规", value: "400" },\r\n            { key: "bold", name: "加粗", value: "bold" },\r\n          ],\r\n        },\r\n        primaryColor: this.primaryColor,\r\n        activeColor: {\r\n          ...this.primaryColor,\r\n          name: "高亮字体颜色",\r\n          key: "activeColor",\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n    setInputValue(key, value) {\r\n      let adapter = this.getAdapter(key);\r\n      let adapterValue = adapter.value;\r\n      if (adapterValue && adapterValue[0] == "prop") {\r\n        let variableKey = adapterValue[1];\r\n        if (variableKey) {\r\n          this.displayStore.dispatch("property/setValue", {\r\n            key: variableKey,\r\n            value,\r\n          });\r\n        }\r\n      }\r\n    },\r\n  },\r\n  computed: {\r\n    list() {\r\n      let list = this.getCollection("list", {});\r\n      return list || [];\r\n    },\r\n    style() {\r\n      let option = this.viewOption;\r\n      let style = {};\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let primaryColor = this.v.color(option.primaryColor);\r\n      style["color"] = `${primaryColor}`;\r\n      let textWeight = option.textWeight;\r\n      style["font-weight"] = textWeight;\r\n      return {\r\n        ...textSize,\r\n        ...style,\r\n      };\r\n    },\r\n    itemStyle() {\r\n      let option = this.viewOption;\r\n      let style = {};\r\n      let activeColor = this.v.color(option.activeColor);\r\n      style["color"] = `${activeColor}`;\r\n      return {\r\n        ...style,\r\n      };\r\n    },\r\n    lineStyle() {\r\n      let option = this.viewOption;\r\n      let style = {};\r\n      let activeColor = this.v.color(option.activeColor);\r\n      style["background-color"] = `${activeColor}`;\r\n      return {\r\n        ...style,\r\n      };\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let primaryColor = this.v.color(option.primaryColor);\r\n      let align = this.v.align(option.align);\r\n      let textWeight = option.textWeight;\r\n      let padding = this.viewBody.padding;\r\n      let style = {};\r\n      style["color"] = `${primaryColor}`;\r\n      style["font-weight"] = textWeight;\r\n      style[\r\n        "padding"\r\n      ] = `${padding["top"]}px ${padding["right"]}px ${padding["bottom"]}px ${padding["left"]}px`;\r\n      return {\r\n        ...textSize,\r\n        ...align,\r\n        ...style,\r\n      };\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "文字大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    align() {\r\n      return {\r\n        name: "对齐",\r\n        type: "align",\r\n        default: "center",\r\n        key: "align",\r\n        value: [\r\n          "left-top", //左上\r\n          "top", //中上\r\n          "right-top", //右上\r\n          "left-center", //左中\r\n          "center", //居中\r\n          "right-center", //右中\r\n          "left-bottom", //左下\r\n          "bottom", //中下\r\n          "right-bottom", //右下\r\n        ],\r\n      };\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n    collection() {\r\n      return {\r\n        name: "列表",\r\n        key: "list",\r\n        type: "collection",\r\n        model: "collection",\r\n      };\r\n    },\r\n    input() {\r\n      return {\r\n        name: "输入框",\r\n        type: "input",\r\n        default: "",\r\n        key: "input",\r\n        value: [],\r\n        hideTitle: true,\r\n      };\r\n    },\r\n  },\r\n  watch: {\r\n    endValue: {\r\n      immediate: true,\r\n      handler(value) {\r\n        if (value) {\r\n          //不一样才刷新\r\n          if (!_.isEqual(this.endVal, value)) {\r\n            this.endVal = value;\r\n          }\r\n        }\r\n      },\r\n    },\r\n  },\r\n  mounted() {\r\n    this.active = this.getValue("selected");\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  height: 100%;\r\n\r\n  // 在此开始写自定义样式\r\n  .tabs {\r\n    display: flex;\r\n    height: 100%;\r\n\r\n    .item {\r\n      flex: 1;\r\n      text-align: center;\r\n      position: relative;\r\n\r\n      .text {\r\n        width: 100%;\r\n        position: absolute;\r\n        left: 0;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n      }\r\n\r\n      .line {\r\n        position: absolute;\r\n        left: 50%;\r\n        bottom: 0;\r\n        transform: translateX(-50%);\r\n        width: 40%;\r\n        padding-top: 2.5%;\r\n        border-radius: 50px;\r\n        display: none;\r\n      }\r\n\r\n      &.active {\r\n        .line {\r\n          display: block;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  "92e8": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Slider v-model="value1"></Slider>\r\n    <Slider v-model="value2" range></Slider>\r\n    <Slider v-model="value3" range disabled></Slider>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      value1: 25,\r\n      value2: [20, 50],\r\n      value3: [20, 50],\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  "98e7": function(e, n, t) {
    "use strict";
    var r = function() {
      return Promise.all([t.e("chunk-39b7c100"), t.e("chunk-vendors")]).then(t.bind(null, "06f5"))
    };
    n["a"] = [{
      path: "/login/register",
      name: "loginToRegister",
      alias: "/:custom/login/register",
      component: function() {
        return t.e("chunk-vendors").then(t.bind(null, "29d1"))
      }
    }, {
      path: "/login/forget",
      name: "loginToForget",
      alias: "/:custom/login/forget",
      component: function() {
        return t.e("chunk-vendors").then(t.bind(null, "29d1"))
      }
    }, {
      path: "/login/:token",
      name: "loginByToken",
      alias: "/:custom/login/:token",
      component: function() {
        return t.e("chunk-vendors").then(t.bind(null, "29d1"))
      }
    }, {
      path: "/login",
      alias: "/:custom/login",
      name: "login",
      component: function() {
        return t.e("chunk-vendors").then(t.bind(null, "29d1"))
      }
    }, {
      path: "/pc-only",
      name: "pc-only",
      component: function() {
        return t.e("chunk-34be8907").then(t.bind(null, "4028"))
      }
    }, {
      path: "/",
      alias: "/:custom/",
      component: r,
      children: [{
        path: "",
        name: "home",
        component: function() {
          return Promise.all([t.e("chunk-39b7c100"), t.e("chunk-2b8408c0")]).then(t.bind(null, "4229"))
        }
      }, {
        path: "(/:custom)?/home/:page",
        alias: "/:custom/home/:page",
        component: function() {
          return Promise.all([t.e("chunk-39b7c100"), t.e("chunk-2b8408c0")]).then(t.bind(null, "4229"))
        }
      }, {
        path: "(/:custom)?/user",
        name: "user",
        component: function() {
          return t.e("chunk-1744dd7f").then(t.bind(null, "00af"))
        }
      }, {
        path: "(/:custom)?/project",
        name: "project",
        component: function() {
          return t.e("chunk-7a746c05").then(t.bind(null, "0910"))
        }
      }, {
        path: "(/:custom)?/news",
        name: "news",
        component: function() {
          return t.e("chunk-9d3c9510").then(t.bind(null, "2695"))
        }
      }, {
        path: "(/:custom)?/welcome",
        name: "welcome",
        component: function() {
          return t.e("chunk-7ac2db26").then(t.bind(null, "0473"))
        }
      }, {
        path: "(/:custom)?/system",
        name: "system",
        component: function() {
          return t.e("chunk-068d6c4d").then(t.bind(null, "fbbb"))
        },
        children: [{
          path: "menu",
          name: "system-menu-list",
          component: function() {
            return t.e("chunk-1301e256").then(t.bind(null, "a579"))
          }
        }, {
          path: "auth",
          name: "system-auth-list",
          component: function() {
            return t.e("chunk-7a746c05").then(t.bind(null, "d3e7"))
          }
        }, {
          path: "user",
          name: "system-user-list",
          component: function() {
            return t.e("chunk-da9b3d66").then(t.bind(null, "d093"))
          }
        }, {
          path: "schedule",
          name: "system-schedule-list",
          component: function() {
            return t.e("chunk-2fb00b27").then(t.bind(null, "c3dc"))
          }
        }, {
          path: "config",
          name: "system-config-list",
          component: function() {
            return t.e("chunk-45424589").then(t.bind(null, "1598"))
          }
        }, {
          path: "project",
          name: "system-project-list",
          component: function() {
            return t.e("chunk-2fb00b27").then(t.bind(null, "8f9b"))
          }
        }]
      }, {
        path: "(/:custom)?/upgrade",
        name: "upgrade",
        component: function() {
          return t.e("chunk-2fb00b27").then(t.bind(null, "92dd"))
        }
      }, {
        path: "(/:custom)?/setting",
        name: "setting",
        component: function() {
          return t.e("chunk-774a7f52").then(t.bind(null, "252a"))
        }
      }, {
        path: "(/:custom)?/page/:id",
        name: "page",
        component: function() {
          return t.e("chunk-115c73b6").then(t.bind(null, "55d2"))
        }
      }, {
        path: "(/:custom)?/display/:id",
        name: "display",
        component: function() {
          return Promise.all([t.e("chunk-2d210f45"), t.e("chunk-5610dab1")]).then(t.bind(null, "9ff2"))
        }
      }, {
        path: "(/:custom)?/no-authority",
        name: "no-authority",
        component: function() {
          return t.e("chunk-34be8907").then(t.bind(null, "893a"))
        }
      }]
    }]
  },
  "9be6": function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "queryData", (function() {
          return c
        }
      )),
      t.d(n, "metaData", (function() {
          return l
        }
      )),
      t.d(n, "summaryData", (function() {
          return s
        }
      )),
      t.d(n, "saveData", (function() {
          return u
        }
      )),
      t.d(n, "updateData", (function() {
          return d
        }
      )),
      t.d(n, "removeData", (function() {
          return p
        }
      ));
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = "/api/dev"
      , c = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = i();
      return a.request({
        url: "".concat(o, "/data/").concat(t, "/").concat(e, "/query"),
        method: "post",
        data: n
      })
    }
      , l = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = i();
      return a.request({
        url: "".concat(o, "/data/").concat(t, "/").concat(e, "/meta"),
        method: "post",
        data: n
      })
    }
      , s = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/data/").concat(t, "/").concat(e, "/summary"),
        method: "post",
        data: n
      })
    }
      , u = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/data/").concat(t, "/").concat(e, "/save"),
        method: "post",
        data: n
      })
    }
      , d = function(e, n, t) {
      var r = i();
      return a.request({
        url: "".concat(o, "/data/").concat(r, "/").concat(e, "/").concat(n, "/update"),
        method: "post",
        data: t
      })
    }
      , p = function(e, n, t) {
      var r = i();
      return a.request({
        url: "".concat(o, "/data/").concat(r, "/").concat(e, "/").concat(n, "/remove"),
        method: "post",
        data: t
      })
    }
  },
  "9dee": function(e, n, t) {
    "use strict";
    t.d(n, "b", (function() {
        return c
      }
    )),
      t.d(n, "c", (function() {
          return l
        }
      )),
      t.d(n, "a", (function() {
          return s
        }
      ));
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = "/api/dev"
      , c = function(e, n) {
      var t = i()
        , r = "".concat(o, "/utils/").concat(t, "/file/list/");
      return e && (r = "".concat(r).concat(e)),
        a.request({
          url: r,
          method: "get"
        })
    }
      , l = function(e, n) {
      var t = i()
        , r = "".concat(o, "/utils/").concat(t, "/file/remove/");
      return e && (r = "".concat(r).concat(e)),
        a.request({
          url: r,
          data: {
            file: n
          },
          method: "post"
        })
    }
      , s = function(e) {
      return a.request({
        url: e
      })
    }
  },
  "9f76": function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <div class="item" v-for="(item,index) in list" :key="index">\r\n      <div class="head">\r\n        <div class="icon">\r\n          <img :src="item.url" alt />\r\n        </div>\r\n        <div class="name">{{item.name}}</div>\r\n        <div class="time">{{item.time}}</div>\r\n      </div>\r\n      <div class="box">\r\n        <div class="child supply" @click="onClick(index)">\r\n          <div class="head">\r\n            <div class="icon">\r\n              <img src="/image/customized/icon-supply.png" alt />\r\n            </div>\r\n            <div class="text">{{item.supply}}</div>\r\n          </div>\r\n          <div class="list-img">\r\n            <img :src="item.supplyImg1" alt />\r\n            <img :src="item.supplyImg2" alt />\r\n            <img :src="item.supplyImg3" alt />\r\n            <img :src="item.supplyImg4" alt />\r\n          </div>\r\n        </div>\r\n        <div class="child need" @click="onClick(index)">\r\n          <div class="head">\r\n            <div class="icon">\r\n              <img src="/image/customized/icon-need.png" alt />\r\n            </div>\r\n            <div class="text">{{item.need}}</div>\r\n          </div>\r\n          <div class="list-img">\r\n            <img :src="item.needImg1" alt />\r\n            <img :src="item.needImg2" alt />\r\n            <img :src="item.needImg3" alt />\r\n            <img :src="item.needImg4" alt />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        list: {\r\n          type: "collection",\r\n          model: "collection",\r\n          name: "提供物资",\r\n          key: "list",\r\n        },\r\n        "list.url": {\r\n          name: "头像",\r\n          key: "list.url",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.name": {\r\n          name: "名字",\r\n          key: "list.name",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.time": {\r\n          name: "时间",\r\n          key: "list.time",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.supply": {\r\n          name: "供",\r\n          key: "list.supply",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.need": {\r\n          name: "需",\r\n          key: "list.need",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.supplyImg1": {\r\n          name: "图一(供)",\r\n          key: "list.supplyImg1",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.supplyImg2": {\r\n          name: "图二(供)",\r\n          key: "list.supplyImg2",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.supplyImg3": {\r\n          name: "图三(供)",\r\n          key: "list.supplyImg3",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.supplyImg4": {\r\n          name: "图四(供)",\r\n          key: "list.supplyImg4",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.needImg1": {\r\n          name: "图一(需)",\r\n          key: "list.needImg1",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.needImg2": {\r\n          name: "图二(需)",\r\n          key: "list.needImg2",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.needImg3": {\r\n          name: "图三(需)",\r\n          key: "list.needImg3",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n        "list.needImg4": {\r\n          name: "图四(需)",\r\n          key: "list.needImg4",\r\n          type: "string",\r\n          model: "default",\r\n          default: "文本内容",\r\n          format: "",\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {});\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n    onClick(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("click", item);\r\n    },\r\n  },\r\n  computed: {\r\n    list() {\r\n      let list = this.getCollection("list", {}) || [];\r\n      return list;\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  .item {\r\n    background: #fff;\r\n    padding: 0 3.3%;\r\n    margin: 3.5% 0 6% 0;\r\n\r\n    & > .head {\r\n      display: flex;\r\n\r\n      .icon {\r\n        width: 13.5%;\r\n        padding-top: 13.5%;\r\n        height: 0;\r\n        position: relative;\r\n        margin-top: -3.5%;\r\n\r\n        img {\r\n          position: absolute;\r\n          wdith: 96%;\r\n          height: 96%;\r\n          top: 2%;\r\n          left: 2%;\r\n        }\r\n      }\r\n\r\n      .name {\r\n        font-size: 110%;\r\n        font-weight: bold;\r\n        color: #333333;\r\n        flex: 1;\r\n        margin-top: 2.5%;\r\n      }\r\n\r\n      .time {\r\n        font-size: 90%;\r\n        font-weight: 400;\r\n        color: #aaaaaa;\r\n        margin-top: 2.5%;\r\n      }\r\n    }\r\n\r\n    .box {\r\n      margin-top: 1%;\r\n      padding-bottom: 2.9%;\r\n\r\n      .child {\r\n        margin-bottom: 2.9%;\r\n        border-radius: 5px;\r\n        padding: 0 5% 3% 0;\r\n\r\n        .head {\r\n          display: flex;\r\n\r\n          .icon {\r\n            width: 12.5%;\r\n            padding-top: 12.5%;\r\n            height: 0;\r\n            position: relative;\r\n\r\n            img {\r\n              width: 100%;\r\n              height: 100%;\r\n              vertical-align: top;\r\n              position: absolute;\r\n              top: 0;\r\n              left: 0;\r\n            }\r\n          }\r\n\r\n          .text {\r\n            margin: 2.9% 0;\r\n            font-size: 100%;\r\n            font-weight: 400;\r\n            color: #333333;\r\n            line-height: 1.4;\r\n            flex: 1;\r\n            text-overflow: -o-ellipsis-lastline;\r\n            overflow: hidden;\r\n            text-overflow: ellipsis;\r\n            display: -webkit-box;\r\n            -webkit-line-clamp: 2;\r\n            line-clamp: 2;\r\n            -webkit-box-orient: vertical;\r\n          }\r\n        }\r\n\r\n        .list-img {\r\n          padding-left: 12.5%;\r\n          font-size: 0;\r\n\r\n          img {\r\n            max-width: 63px;\r\n            max-height: 63px;\r\n            margin-right: 3%;\r\n            width: 22.6%;\r\n            &:last-child {\r\n              margin-right: 0;\r\n            }\r\n          }\r\n        }\r\n\r\n        &.supply {\r\n          background: #f1f8ff;\r\n        }\r\n\r\n        &.need {\r\n          background: #fef5f3;\r\n        }\r\n\r\n        &:last-child {\r\n          margin-bottom: 0;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  "9f95": function(e, n, t) {
    "use strict";
    t.d(n, "a", (function() {
        return o
      }
    ));
    var r = t("2473")
      , a = new r["default"]
      , i = "/api/common/user"
      , o = function(e, n, t) {
      var r = "".concat(i, "/join/").concat(e);
      return a.request({
        url: r,
        method: "post",
        data: {
          role: n,
          invite: t
        }
      })
    }
  },
  "9ffe": function(e, n, t) {
    "use strict";
    t.r(n);
    var r = {
      dashboard: {
        name: "仪表盘示例",
        type: "dashboard",
        image: "/image/display/icon-mould-01.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-774a7f52").then(t.bind(null, "1492"))
        }
      },
      dashboard_1: {
        name: "仪表盘_饼图",
        type: "dashboard",
        image: "/image/extra/tpl/display/dashboard_1.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-2d0e59ce").then(t.bind(null, "94da"))
        }
      },
      dashboard_2: {
        name: "仪表盘_操作",
        type: "dashboard",
        image: "/image/extra/tpl/display/dashboard_2.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-4aaf6d8d").then(t.bind(null, "fb74"))
        }
      },
      dashboard_3: {
        name: "仪表盘_费用",
        type: "dashboard",
        image: "/image/extra/tpl/display/dashboard_3.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-2d0cc1c8").then(t.bind(null, "4d13"))
        }
      },
      dashboard_4: {
        name: "仪表盘_分列",
        type: "dashboard",
        image: "/image/extra/tpl/display/dashboard_4.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-2d0cbede").then(t.bind(null, "4c81"))
        }
      },
      dashboard_5: {
        name: "仪表盘_时间轴",
        type: "dashboard",
        image: "/image/extra/tpl/display/dashboard_5.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-34be8907").then(t.bind(null, "5ae0"))
        }
      },
      dashboard_6: {
        name: "仪表盘_指标",
        type: "dashboard",
        image: "/image/extra/tpl/display/dashboard_6.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-dd20b97e").then(t.bind(null, "3e99"))
        }
      },
      guide_0: {
        name: "指引_步骤",
        type: "guide",
        image: "/image/extra/tpl/display/guide_0.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-39b7c100").then(t.bind(null, "838b"))
        }
      },
      guide_1: {
        name: "指引_进度",
        type: "guide",
        image: "/image/extra/tpl/display/guide_1.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-152172a1").then(t.bind(null, "e88e"))
        }
      },
      data: {
        name: "数据列表示例",
        type: "data",
        image: "/image/display/icon-mould-02.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-4aaf6d8d").then(t.bind(null, "245e"))
        }
      },
      data_1: {
        name: "数据列表_标签表格",
        type: "data",
        image: "/image/extra/tpl/display/data_1.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-b813648a").then(t.bind(null, "8b66"))
        }
      },
      data_2: {
        name: "数据列表_表格",
        type: "data",
        image: "/image/extra/tpl/display/data_2.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-1744dd7f").then(t.bind(null, "cfca"))
        }
      },
      data_3: {
        name: "数据列表_简略",
        type: "data",
        image: "/image/extra/tpl/display/data_3.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-115c73b6").then(t.bind(null, "e6ca"))
        }
      },
      data_4: {
        name: "数据列表_宽标签表格",
        type: "data",
        image: "/image/extra/tpl/display/data_4.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-265539d4").then(t.bind(null, "adec"))
        }
      },
      detail_0: {
        name: "数据详情_默认",
        type: "detail",
        image: "/image/extra/tpl/display/detail_0.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-9d3c9510").then(t.bind(null, "8737"))
        }
      },
      detail_1: {
        name: "数据详情_费用",
        type: "detail",
        image: "/image/extra/tpl/display/detail_1.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-7c2afa26").then(t.bind(null, "fda1"))
        }
      },
      detail_2: {
        name: "数据详情_垂直分列",
        type: "detail",
        image: "/image/extra/tpl/display/detail_2.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-2d217ddd").then(t.bind(null, "c90a"))
        }
      },
      detail_3: {
        name: "数据详情_水平分列",
        type: "detail",
        image: "/image/extra/tpl/display/detail_3.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-2d0e9326").then(t.bind(null, "8d04"))
        }
      },
      interact: {
        name: "交互输入示例",
        type: "interact",
        image: "/image/display/icon-mould-03.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-2d2380e3").then(t.bind(null, "fe6d"))
        }
      },
      interact_1: {
        name: "交互输入_垂直排列",
        type: "interact",
        image: "/image/extra/tpl/display/interact_1.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-34be8907").then(t.bind(null, "286e"))
        }
      },
      interact_2: {
        name: "交互输入_双垂直排列",
        type: "interact",
        image: "/image/extra/tpl/display/interact_2.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-e957ce0c").then(t.bind(null, "ebc0"))
        }
      },
      interact_3: {
        name: "交互输入_水平排列",
        type: "interact",
        image: "/image/extra/tpl/display/interact_3.png",
        group: "common",
        tpl: function() {
          return t.e("chunk-774a7f52").then(t.bind(null, "9d853"))
        }
      }
    };
    n["default"] = r
  },
  a169: function(e, n, t) {
    "use strict";
    t.r(n);
    var r = t("4cb1")
      , a = t("47ae")
      , i = (t("bf2d"),
      t("bd27"),
      t("af5e"),
      t("cee2"),
      t("cd0a"))
      , o = t("3328")
      , c = {
      namespaced: !0,
      state: {
        token: Object(o["getToken"])(),
        info: {},
        hasGetInfo: !1,
        raw: {}
      },
      mutations: {
        setToken: function(e, n) {
          e.token = n,
            Object(o["setToken"])(n)
        },
        setInfo: function(e, n) {
          e.info = n
        },
        setHasGetInfo: function(e, n) {
          e.hasGetInfo = n
        },
        setRaw: function(e, n) {
          e.raw = n
        }
      },
      getters: {
        raw: function(e) {
          return e.raw
        },
        auth: function(e, n) {
          return n.raw.auth
        },
        userId: function(e, n) {
          return n.raw._id
        },
        user: function(e, n) {
          var t = n.raw.user;
          return t
        },
        userName: function(e, n) {
          var t = n.raw.user;
          if (t.startsWith("weixin_"))
            return "微信用户";
          if (t.startsWith("mobile_"))
            return "手机用户_".concat(t.substr(-4, 4));
          if (t.startsWith("wxwork_")) {
            var r = t.split("_")[1] || "";
            return "企业微信_".concat(r)
          }
          return t
        },
        nickname: function(e, n) {
          var t = n.raw
            , r = t.nickname || t.user || "";
          return r.length > 12 && (r = r.substr(0, 12)),
            r
        },
        token: function(e) {
          return e.token
        },
        info: function(e) {
          return e.info
        },
        isLimit: function(e, n) {
          return n.auth && n.auth.includes("limit")
        }
      },
      actions: {
        setRaw: function(e, n) {
          var t = e.commit
            , r = e.dispatch;
          t("setRaw", n),
            r("context/loadUserData", "", {
              root: !0
            })
        },
        handleLogin: function(e, n) {
          var t = e.commit
            , r = e.dispatch
            , a = n.user
            , o = n.pwd;
          return a = a.trim(),
            new Promise((function(e, n) {
                Object(i["d"])({
                  user: a,
                  pwd: o
                }).then((function(n) {
                    var a = n;
                    t("setToken", a.data.token),
                      t("setHasGetInfo", !0),
                      r("setRaw", a.data),
                      e()
                  }
                )).catch((function(e) {
                    n(e)
                  }
                ))
              }
            ))
        },
        logout: function(e) {
          e.state,
            e.commit;
          var n = e.dispatch;
          n("platform/reset", null, {
            root: !0
          })
        },
        getUserInfo: function(e) {
          e.state;
          var n = e.commit
            , t = e.dispatch;
          return new Promise((function(e, r) {
              Object(i["b"])().then((function(a) {
                  var i = a;
                  i.access = [],
                  0 != i.error && r(),
                    n("setHasGetInfo", !0),
                    t("setRaw", i.data),
                    t("platform/getProject", null, {
                      root: !0
                    }),
                    e(i.data)
                }
              )).catch((function(e) {
                  r()
                }
              ))
            }
          ))
        }
      }
    }
      , l = (t("4654"),
      t("2473"))
      , s = new l["default"]
      , u = "/api/common/project"
      , d = function() {
      return s.request({
        url: "".concat(u, "/list"),
        method: "get"
      })
    }
      , p = t("b10a")
      , m = t("9095")
      , f = t.n(m)
      , v = t("e2f0")
      , h = "project"
      , g = "system"
      , y = "platform-mode"
      , b = f.a.namespace("project")
      , k = {
      namespaced: !0,
      state: {
        project: {},
        projectId: b(h),
        systemId: b(g),
        projectList: [],
        init: !1,
        isShownMenu: !1,
        isPlatform: !1,
        isOffical: v["a"].isOffical,
        mode: b(y)
      },
      actions: {
        setProject: function(e, n) {
          e.state;
          var t = e.commit
            , r = e.dispatch;
          t("setProject", n),
            t("setSystem", n._store),
            r("route/setHome", n._home, {
              root: !0
            }).then((function() {
                r("init")
              }
            ))
        },
        getProject: function(e) {
          e.state;
          var n = e.commit
            , t = e.dispatch
            , r = e.rootGetters
            , a = e.getters;
          d().then((function(e) {
              var i = b(h)
                , o = e.data;
              if (a.isPlatform && 0 == o.length)
                t("dev/project/init", "", {
                  root: !0
                });
              else {
                n("setProjectList", o);
                var c = r["user/userId"]
                  , l = o.find((function(e) {
                    return e._id == i
                  }
                ));
                l || (l = o.find((function(e) {
                    return e._owner == c
                  }
                )) || o[0]);
                var s = r["custom/project"];
                s ? l && l._id == s ? t("setProject", l) : t("custom/join", {}, {
                  root: !0
                }).then((function(e) {
                    e && e.data ? (b(h, s),
                      t("getProject")) : l ? t("setProject", l) : t("init")
                  }
                )) : l ? t("setProject", l) : t("init")
              }
            }
          )).catch((function(e) {
              t("init")
            }
          ))
        },
        selectProject: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch;
          t("setProject", n)
        },
        reset: function(e) {
          e.state;
          var n = e.dispatch
            , t = e.commit;
          t("user/setToken", "", {
            root: !0
          }),
            n("route/reset", {}, {
              root: !0
            }),
            t("reset"),
            n("custom/reset", {}, {
              root: !0
            }),
            p["default"].push({
              name: "login"
            })
        },
        init: function(e) {
          e.state;
          var n = e.dispatch
            , t = e.commit
            , r = e.getters
            , a = r["project"];
          n("display/prepare", {}, {
            root: !0
          }),
            n("share/init", {}, {
              root: !0
            }),
            n("custom/init", a._id, {
              root: !0
            }),
            n("route/init", {}, {
              root: !0
            }).then((function() {
                t("init")
              }
            ))
        },
        setMode: function(e, n) {
          e.state;
          var t = e.commit;
          e.dispatch;
          t("setMode", n)
        },
        initPlatform: function(e) {
          e.state;
          var n = e.commit
            , t = e.dispatch;
          t("setMode", "dev"),
            n("setIsPlatform")
        }
      },
      mutations: {
        init: function(e) {
          e.init = !0
        },
        reset: function(e) {
          e.project = {}
        },
        setProject: function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            , t = n._id;
          e.project = n,
            e.projectId = t,
            b(h, t)
        },
        setProjectList: function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          e.projectList = n
        },
        setSystem: function(e, n) {
          e.systemId = n,
            b(g, n)
        },
        setMode: function(e, n) {
          e.mode = n,
            b(y, n)
        },
        openMenu: function(e) {
          e.isShownMenu = !0
        },
        closeMenu: function(e) {
          e.isShownMenu = !1
        },
        setIsPlatform: function(e) {
          e.isPlatform = !0
        }
      },
      getters: {
        init: function(e, n) {
          var t = e.init;
          return t
        },
        env: function(e, n, t, r) {
          var a = {
            project: e.projectId,
            system: e.systemId,
            token: r["user/token"],
            user: r["user/user"]
          };
          return a
        },
        projectName: function(e, n) {
          var t = e.project;
          return t && t._name
        },
        projectList: function(e, n) {
          return e.projectList
        },
        project: function(e, n) {
          var t = e.project;
          return t
        },
        isAdmin: function(e, n) {
          var t = n.project;
          return "admin" == t._auth
        },
        isDev: function(e, n) {
          var t = e.mode;
          return "dev" == t
        },
        isPlatform: function(e, n) {
          var t = e.isPlatform;
          return t
        },
        isShownMenu: function(e, n) {
          return e.isShownMenu
        },
        isOffical: function(e) {
          return e.isOffical
        }
      },
      modules: {
        queue: {
          namespaced: !0,
          state: {
            queue: {}
          },
          actions: {
            setQueue: function(e, n) {
              e.state;
              var t = e.commit
                , r = e.getters;
              t("setQueue", n);
              var a = r.getAccess();
              a.num && a.num > 0 && p["default"].push("/dev/queue")
            }
          },
          mutations: {
            setQueue: function(e, n) {
              e.queue = n
            }
          },
          getters: {
            queue: function(e, n) {
              return e.queue
            },
            getAccess: function(e, n) {
              return function() {
                var e = (new Date).getTime()
                  , t = n.queue
                  , r = t && t.access_time
                  , a = r
                  , i = r - e
                  , o = Math.floor(i / 87);
                return {
                  time: a,
                  num: o
                }
              }
            }
          }
        },
        store: {
          namespaced: !0,
          getters: {
            version: function(e, n, t, r) {
              var a = r["platform/project"]
                , i = a && a._status || 0;
              return i
            },
            versionName: function(e, n, t, r) {
              var a = n.version
                , i = {
                0: "体验版",
                1: "基础版",
                2: "企业版",
                3: "平台版"
              };
              return i[a]
            }
          }
        }
      }
    }
      , w = (t("612e"),
      {
        namespaced: !0,
        state: {
          list: [],
          removed: ""
        },
        mutations: {
          reset: function(e) {
            e.list = []
          }
        },
        actions: {
          show: function(e, n) {
            var t = e.state
              , r = e.rootGetters;
            n.id = "modal-".concat((new Date).getTime()),
            n.single && (t.list = []),
              t.list.push(n);
            var a = r["window/isMobile"];
            a && window.history.pushState("", "", "")
          },
          pop: function(e) {
            var n = e.state
              , t = n.removed;
            if (t) {
              var r = n.list.findIndex((function(e) {
                  return e.id == t
                }
              ));
              n.list.splice(r, 1)
            } else
              n.list.splice(-1, 1);
            n.removed = ""
          },
          hide: function(e, n) {
            var t = e.state
              , r = (e.getters,
              e.rootGetters)
              , a = e.dispatch
              , i = r["window/isMobile"]
              , o = n.id
              , c = t.list.findIndex((function(e) {
                return e.id == o
              }
            ));
            "drawer" == n.mode ? t.list.splice(c, 1) : (t.removed = o,
              i ? history.back() : a("pop"))
          }
        },
        getters: {
          list: function(e) {
            return e.list
          }
        }
      })
      , x = {
      namespaced: !0,
      state: {
        router: [],
        project: ""
      },
      mutations: {
        router: function(e, n) {
          if (0 == e.router.length)
            e.router.push(n);
          else
            for (var t = 0; t < e.router.length; t++) {
              var r = e.router;
              r.find((function(e) {
                  return e._id == n._id
                }
              )) || r.push(n)
            }
          e.router.length > 5 && e.router.shift()
        },
        remove: function(e, n) {
          for (var t = 0; t < e.router.length; t++)
            if (e.router[t] && e.router[t]._id == n) {
              e.router.splice(t, 1);
              break
            }
        },
        project: function(e, n) {
          n && (e.router = [])
        }
      },
      getters: {
        router: function(e, n) {
          return e.router
        }
      }
    }
      , O = (t("6322"),
      t("8fd6"),
      {
        namespaced: !0,
        state: {
          body: {},
          mode: "",
          originMode: "",
          minWidth: 1e3,
          orientation: 0,
          popOption: {
            pageX: "",
            pageY: "",
            frequency: 0,
            show: !1,
            content: []
          },
          showMenu: !Object(o["local"])("hideMenu")
        },
        mutations: {
          setMode: function(e, n) {
            sessionStorage.setItem("mode", n),
              e.mode = n
          },
          setPopOption: function(e, n) {
            Reflect.ownKeys(n).forEach((function(t) {
                e.popOption[t] = n[t]
              }
            ))
          },
          setShowMenu: function(e, n) {
            e.showMenu = n,
              Object(o["local"])("hideMenu", !n)
          },
          setOrientation: function(e, n) {
            e.orientation = n
          },
          setOriginMode: function(e, n) {
            e.originMode = n
          },
          setBody: function(e, n) {
            e.body = n
          }
        },
        actions: {
          setOrientation: function(e, n) {
            var t = e.commit
              , r = (e.dispatch,
              e.getters)
              , a = r.orientation;
            a != n && t("resize"),
              t("setOrientation", n)
          },
          resize: function(e) {
            var n = e.state
              , t = e.getters
              , r = e.commit
              , a = {}
              , i = t.mode
              , c = n.minWidth;
            if (window.frameElement && (c = window.innerWidth),
            o["UA"].isPc && "mobile" != i) {
              var l = window.innerWidth - 200
                , s = window.innerHeight - 50;
              l = Math.max(l, c),
                a.width = l,
                a.height = s,
                r("setOriginMode", "pc")
            } else {
              var u = window.innerWidth
                , d = window.innerHeight;
              o["UA"].isIos && o["UA"].isWxapp && (u = document.body.clientWidth,
                d = document.body.clientHeight),
                a.width = u,
                a.height = d,
                r("setOriginMode", "mobile")
            }
            r("setBody", a)
          },
          setMode: function(e, n) {
            var t = e.commit;
            t("setMode", n)
          }
        },
        getters: {
          orientation: function(e, n) {
            return e.orientation
          },
          body: function(e) {
            var n = e.body.width
              , t = e.body.height;
            return {
              width: n,
              height: t
            }
          },
          mode: function(e, n) {
            var t = e.mode;
            return t || (t = sessionStorage.getItem("mode")),
            t || ""
          },
          isMobile: function(e, n) {
            var t = n.mode || e.originMode;
            return "mobile" == t
          },
          showMenu: function(e) {
            return e.showMenu
          }
        }
      })
      , j = {
      namespaced: !0,
      state: {
        error: {},
        tips: void 0,
        warning: {}
      },
      mutations: {
        error: function(e, n) {
          e.error = n
        },
        tips: function(e, n) {
          e.tips = "string" == typeof n ? {
            content: n
          } : n
        },
        warning: function(e, n) {
          e.warning = n
        }
      }
    }
      , P = t("f4e6")
      , S = {
      namespaced: !0,
      state: {
        token: "",
        openid: "",
        wxappToken: "",
        wxappOpenid: ""
      },
      mutations: {
        setToken: function(e, n) {
          e.token = n,
            sessionStorage.setItem("wx_token", n)
        },
        setOpenid: function(e, n) {
          e.openid = n
        },
        setWxappOpenid: function(e, n) {
          e.wxappOpenid = n
        },
        setWxappToken: function(e, n) {
          e.wxappToken = n,
            sessionStorage.setItem("wxapp_token", n)
        }
      },
      actions: {
        setToken: function(e, n) {
          var t = e.commit;
          t("setToken", n)
        },
        setWxappToken: function(e, n) {
          var t = e.commit;
          t("setWxappToken", n)
        },
        setOpenid: function(e, n) {
          commit("setOpenid", n)
        },
        setWxappOpenid: function(e, n) {
          commit("setWxappOpenid", n)
        },
        get: function(e) {
          e.commit,
            e.state;
          var n = e.getters;
          if (o["UA"].isWxwork)
            return new Promise((function(e, t) {
                try {
                  window._wx = window.wx,
                    window.wx = window.jWeixin = void 0;
                  var r = document.createElement("script")
                    , a = "https://res.wx.qq.com/open/js/jweixin-1.2.0.js";
                  r.type = "text/javascript",
                    r.src = a,
                    r.onload = function(r) {
                      _.delay((function() {
                          var r = window.wx
                            , a = n.wxworkCorpId;
                          Object(P["c"])(a).then((function(n) {
                              r.config(n),
                                r.ready((function(n) {
                                    Object(P["b"])(a).then((function(n) {
                                        n.success = function() {
                                          e(r)
                                        }
                                          ,
                                          r.agentConfig(n)
                                      }
                                    )).catch((function(e) {
                                        t(e)
                                      }
                                    ))
                                  }
                                ))
                            }
                          )).catch((function(e) {
                              t(e)
                            }
                          ))
                        }
                      ), 500)
                    }
                    ,
                    r.onerror = function(e) {
                      t(e)
                    }
                    ,
                    document.head.appendChild(r)
                } catch (i) {
                  t(i)
                }
              }
            ));
          var t = window.wx;
          return o["UA"].isIos ? t : Object(P["a"])().then((function(e) {
              return t.config(e),
                t
            }
          ))
        },
        pay: function(e, n) {
          var t = e.dispatch;
          if (!o["UA"].isWxapp)
            return new Promise((function(e, t) {
                var r = window.WeixinJSBridge;
                r ? WeixinJSBridge.invoke("getBrandWCPayRequest", n, (function(n) {
                    "get_brand_wcpay_request:ok" == n.err_msg ? e() : t(n.err_msg)
                  }
                )) : t()
              }
            ));
          t("get").then((function(e) {
              var t = JSON.stringify(n);
              t = encodeURIComponent(t);
              var r = "/pages/pay/pay?json=".concat(t);
              e.miniProgram.navigateTo({
                url: r
              })
            }
          ))
        },
        getOpenid: function(e) {
          var n = e.commit
            , t = e.getters
            , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "weixin"
            , a = t.token
            , o = t.openid;
          return "wxapp" == r && (a = t.wxappToken,
            o = t.wxappOpenid),
          o || (a ? Object(i["a"])(a).then((function(e) {
              var t = e.data;
              return n("wxapp" == r ? "setWxappOpenid" : "setOpenid", t),
                t
            }
          )) : void 0)
        }
      },
      getters: {
        token: function(e) {
          var n = e.token;
          return n || (n = sessionStorage.getItem("wx_token") || ""),
            n
        },
        wxappToken: function(e) {
          var n = e.wxappToken;
          return n || (n = sessionStorage.getItem("wxapp_token") || ""),
            n
        },
        wxappOpenid: function(e) {
          return e.wxappOpenid
        },
        openid: function(e) {
          return e.openid
        },
        wxworkCorpId: function(e, n) {
          var t = sessionStorage.getItem("bm_wxwork_corpid") || "";
          return t
        },
        wxworkUserId: function(e, n) {
          var t = sessionStorage.getItem("bm_wxwork_userid") || "";
          return t
        },
        wxworkToken: function(e, n) {
          var t = sessionStorage.getItem("bm_wxwork_token") || "";
          return t
        }
      }
    }
      , M = (t("29d3"),
      t("63a5"),
      t("ade3"));
    function C(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function D(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? C(Object(t), !0).forEach((function(n) {
            Object(M["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var E = {
      setting: !0,
      logout: !0,
      user: !0,
      draft: !0,
      workflow: !1,
      recent: !0,
      menu: !0
    }
      , A = {
      namespaced: !0,
      state: function() {
        return D({}, E)
      },
      actions: {
        hide: function(e, n) {
          var t = e.state;
          t[n] && (t[n] = !1)
        },
        show: function(e, n) {
          var t = e.state;
          t[n] || (t[n] = !0)
        },
        set: function(e, n) {
          var t = e.commit
            , r = (e.dispatch,
            n.key)
            , a = n.value;
          t("set", {
            key: r,
            value: a
          })
        }
      },
      mutations: {
        reset: function(e) {
          var n = D({}, E);
          for (var t in n)
            e[t] = n[t]
        },
        set: function(e, n) {
          var t = n.key
            , r = n.value;
          e[t] = r
        }
      },
      getters: {
        visible: function(e, n) {
          return function(n) {
            return e[n]
          }
        }
      },
      modules: {
        topbar: {
          namespaced: !0,
          state: {
            map: {}
          },
          mutations: {
            setMap: function(e, n) {
              e.map = n
            }
          },
          actions: {
            set: function(e, n) {
              var t = e.dispatch;
              t(n ? "show" : "hide")
            },
            hide: function(e) {
              e.state;
              var n = e.getters
                , t = e.commit
                , r = D({}, n.map)
                , a = n.key;
              r[a] = !1,
                t("setMap", r)
            },
            show: function(e) {
              e.state;
              var n = e.getters
                , t = e.commit
                , r = D({}, n.map)
                , a = n.key;
              r[a] = !0,
                t("setMap", r)
            }
          },
          getters: {
            key: function(e, n) {
              return p["default"].app.$route.path || ""
            },
            visible: function(e, n, t, r) {
              var a = n.map
                , i = n.key
                , o = r["platform/isDev"]
                , c = r["window/isMobile"];
              return !(!o && c) || (void 0 === a[i] || a[i])
            },
            map: function(e, n) {
              return e.map
            }
          }
        },
        table: {
          namespaced: !0,
          state: {
            export: !0,
            sort: !0,
            filter: !0,
            pin: !0,
            more: !0
          },
          mutations: {
            set: function(e, n) {
              var t = n.key
                , r = n.value;
              e[t] = r
            }
          },
          actions: {
            set: function(e, n) {
              e.state;
              var t = e.commit
                , r = n.key
                , a = n.value;
              t("set", {
                key: r,
                value: a
              })
            }
          },
          getters: {
            visible: function(e, n) {
              return function(n) {
                return e[n]
              }
            }
          }
        },
        home: {
          namespaced: !0,
          state: {
            topbar: !1
          },
          mutations: {
            setTopbar: function(e, n) {
              e.topbar = n
            }
          },
          actions: {
            setTopbar: function(e, n) {
              var t = e.commit;
              t("setTopbar", n)
            },
            reset: function(e) {
              var n = e.commit;
              n("setTopbar", !1)
            }
          },
          getters: {
            topbar: function(e) {
              return e.topbar
            }
          }
        },
        scanner: {
          namespaced: !0,
          state: {
            active: ""
          },
          mutations: {
            setActive: function(e, n) {
              e.active = n
            }
          },
          actions: {
            setActive: function(e) {
              var n = e.commit
                , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              n("setActive", t)
            }
          },
          getters: {
            active: function(e) {
              return e.active
            }
          }
        }
      }
    }
      , I = {
      namespaced: !0,
      state: {},
      mutations: {},
      getters: {
        project: function(e, n, t, r) {
          var a = r["platform/env"];
          return a.project
        },
        system: function(e, n, t, r) {
          var a = r["platform/env"];
          return a.system
        },
        getFileUploadUrl: function(e, n) {
          return function(e, t) {
            var r = n.project
              , a = n.system
              , i = (new Date).Format("yyyyMMdd");
            return "project/".concat(r, "/").concat(a, "/").concat(e, "/").concat(i, "/").concat((new Date).getTime(), "_").concat(t)
          }
        },
        getImportUrl: function(e, n) {
          return function(e) {
            var t = n.project;
            return e ? "/api/app/d/".concat(t, "/").concat(e, "/import") : "/api/app/d/".concat(t, "/import")
          }
        },
        ueditorUrl: function(e, n) {
          var t = n.project;
          return "/api/app/util/".concat(t, "/ueditor")
        }
      }
    }
      , q = t("0714")
      , T = new l["default"]
      , B = "/api/app"
      , z = T.getProject
      , L = function(e, n, t) {
      var r = z();
      return T.request({
        url: "".concat(B, "/share/").concat(r, "/").concat(e, "/").concat(n, "/").concat(t),
        method: "get"
      })
    }
      , W = function(e, n, t) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
        , a = z();
      return T.request({
        url: "".concat(B, "/share/").concat(a, "/").concat(e, "/").concat(n, "/").concat(t),
        method: "post",
        data: r
      })
    };
    function $(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function U(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? $(Object(t), !0).forEach((function(n) {
            Object(M["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var R = {
      namespaced: !0,
      actions: {
        init: function(e) {
          var n = e.dispatch;
          n("label/init")
        }
      },
      modules: {
        label: {
          namespaced: !0,
          state: {
            model: "label",
            key: "label",
            public: {},
            private: {}
          },
          mutations: {
            setPublic: function(e, n) {
              e.public = n
            },
            setPrivate: function(e, n) {
              e.private = n
            }
          },
          actions: {
            init: function(e) {
              var n = e.commit
                , t = e.getters
                , r = t.model
                , a = t.key;
              L(r, "public", a).then((function(e) {
                  var t = e.data || {}
                    , r = t._value || {};
                  n("setPublic", r)
                }
              )),
                L(r, "private", a).then((function(e) {
                    var t = e.data || {}
                      , r = t._value || {};
                    n("setPrivate", r)
                  }
                ))
            },
            set: function(e, n) {
              var t = e.getters
                , r = e.commit
                , a = n.type
                , i = n.id
                , o = n.value;
              if (i) {
                var c = t.model
                  , l = t.key
                  , s = U({}, t[a]) || {}
                  , u = _.cloneDeep(t["public"])
                  , d = _.cloneDeep(t["private"]);
                "gray" == o ? (delete u[i],
                  delete d[i],
                  W(c, "public", l, u),
                  W(c, "private", l, d),
                  r("setPrivate", d),
                  r("setPublic", u)) : (s[i] = o,
                  W(c, a, l, s),
                  "private" == a ? (delete u[i],
                    W(c, "public", l, u),
                    r("setPublic", u),
                    r("setPrivate", s)) : (delete d[i],
                    W(c, "private", l, d),
                    r("setPublic", s),
                    r("setPrivate", d)))
              }
            }
          },
          getters: {
            model: function(e, n) {
              return e.model
            },
            key: function(e, n) {
              return e.key
            },
            public: function(e, n) {
              return e.public
            },
            private: function(e, n) {
              return e.private
            },
            get: function(e, n) {
              return function(e) {
                var t = n.public
                  , r = n.private;
                return t[e] || r[e] || "gray"
              }
            },
            getQuery: function(e, n) {
              return function(e) {
                var t = n.public
                  , r = n.private
                  , a = _.pickBy(t, (function(n) {
                    return n == e
                  }
                ))
                  , i = _.pickBy(r, (function(n) {
                    return n == e
                  }
                ))
                  , o = _.keys(U(U({}, a), i));
                return o
              }
            }
          }
        },
        filter: {
          namespaced: !0,
          state: {
            model: "filter",
            public: {},
            private: {}
          },
          mutations: {
            setPublic: function(e, n) {
              e.public = n
            },
            setPrivate: function(e, n) {
              e.private = n
            }
          },
          actions: {
            init: function(e, n) {
              var t = e.commit
                , r = e.getters
                , a = r.model
                , i = n;
              r.public[n] || L(a, "public", i).then((function(e) {
                  var a = e.data || {}
                    , i = a._value || {}
                    , o = _.cloneDeep(r.public);
                  o[n] = i,
                    t("setPublic", o)
                }
              )),
              r.private[n] || L(a, "private", i).then((function(e) {
                  var a = e.data || {}
                    , i = _.cloneDeep(r.private)
                    , o = a._value || {};
                  i[n] = o,
                    t("setPrivate", i)
                }
              ))
            },
            set: function(e, n) {
              var t = e.getters
                , r = e.commit
                , a = n.entity
                , i = n.type
                , o = n.id
                , c = n.value
                , l = t.model
                , s = a
                , u = _.cloneDeep(t[i]) || {}
                , d = u[a] || {};
              _.set(d, o, c),
                W(l, i, s, d),
                u[a] = d,
                r("private" == i ? "setPrivate" : "setPublic", u)
            },
            remove: function(e, n) {
              var t = e.getters
                , r = e.commit
                , a = n.entity
                , i = n.type
                , o = n.id
                , c = t.model
                , l = a
                , s = _.cloneDeep(t[i]) || {}
                , u = s[a] || {};
              delete u[o],
                W(c, i, l, u),
                s[a] = u,
                r("private" == i ? "setPrivate" : "setPublic", s)
            },
            change: function(e, n) {
              var t = e.getters
                , r = (e.commit,
                e.dispatch)
                , a = n.entity
                , i = n.type
                , o = n.id
                , c = _.cloneDeep(t[i]) || {}
                , l = c[a] || {}
                , s = _.cloneDeep(l[o]) || {};
              if (!_.isEmpty(s)) {
                var u = "private" == i ? "public" : "private";
                s.type = u,
                  r("remove", {
                    entity: a,
                    type: i,
                    id: o
                  }),
                  r("set", {
                    entity: a,
                    type: u,
                    id: o,
                    value: s
                  })
              }
            }
          },
          getters: {
            model: function(e, n) {
              return e.model
            },
            public: function(e, n) {
              return e.public
            },
            private: function(e, n) {
              return e.private
            },
            getPublic: function(e, n) {
              return function(e) {
                var t = n.public
                  , r = _.get(t, e);
                return r || {}
              }
            },
            getPrivate: function(e, n) {
              return function(e) {
                var t = n.private
                  , r = _.get(t, e);
                return r || {}
              }
            }
          }
        }
      }
    }
      , V = (t("48da"),
      t("9e5e"),
      o["local"].namespace("cache-recent"))
      , N = {
      namespaced: !0,
      state: {
        list: [],
        last: void 0
      },
      mutations: {
        setList: function(e, n) {
          e.list = n
        }
      },
      actions: {
        push: function(e, n) {
          var t = e.state
            , r = (e.rootState,
            e.commit)
            , a = e.getters
            , i = a.recentKey;
          if (n.id != t.last) {
            t.last = n.id;
            var o = a.list
              , c = o.find((function(e) {
                return e.id == n.id
              }
            ));
            c ? (c.program = n.program,
              c.value = c.value + 1) : o.push({
              id: n.id,
              type: n.type,
              name: n.name,
              program: n.program,
              value: 1
            }),
              o.sort((function(e, n) {
                  return n.value - e.value
                }
              )),
              r("setList", o),
              V(i, o)
          }
        }
      },
      getters: {
        recentKey: function(e, n, t, r) {
          var a = t.platform.project._id
            , i = r["user/userId"]
            , o = "".concat(a, "-").concat(i);
          return o
        },
        list: function(e, n) {
          var t = n.recentKey
            , r = V(t) || []
            , a = e.list;
          return 0 == a.length && (a = r),
            a
        },
        top: function(e, n, t) {
          var r = n.list;
          return r.slice(0, 4)
        }
      }
    }
      , F = o["local"].namespace("cache-draft")
      , K = {
      namespaced: !0,
      state: {
        enable: !1,
        list: [],
        limit: 1,
        max: 10
      },
      mutations: {
        setList: function(e, n) {
          e.list = n
        }
      },
      actions: {
        save: function(e, n) {
          e.state;
          var t = e.commit
            , r = (e.rootState,
            e.getters)
            , a = (e.rootGetters,
            r.draftKey)
            , i = n.flow
            , o = (new Date).getTime()
            , c = JSON.parse(JSON.stringify(n));
          c.time = o;
          var l = r.rawList || []
            , s = l.findIndex((function(e) {
              return e.flow == i && !e.save
            }
          ));
          -1 != s && l.splice(s, 1),
            l.push(c);
          var u = r.max;
          while (l.length > u)
            l.shift();
          t("setList", l),
            F(a, l)
        }
      },
      getters: {
        max: function(e) {
          return e.max
        },
        get: function(e, n, t) {
          return function(r) {
            if (!e.enable)
              return {};
            var a = t.debug.enable
              , i = n.list;
            a && (i = n.rawList);
            var o = i.find((function(e) {
                return e.flow == r && !e.save
              }
            ));
            return o || {}
          }
        },
        draftKey: function(e, n, t, r) {
          var a = t.platform.project._id
            , i = r["user/userId"]
            , o = "".concat(a, "-").concat(i);
          return o
        },
        rawList: function(e, n, t, r) {
          var a = n.draftKey
            , i = F(a) || []
            , o = e.list;
          return 0 == o.length && (o = i),
            o
        },
        list: function(e, n, t) {
          var r = -1 * e.limit
            , a = t.debug.enable
            , i = n.rawList;
          return a ? r = -8 : i = i.filter((function(e) {
              return !e.save
            }
          )),
            i = i.slice(r).reverse(),
            i
        }
      }
    }
      , H = "cache-debug"
      , G = {
      namespaced: !0,
      state: {
        enable: Object(o["localRead"])(H) || !1
      },
      mutations: {
        enable: function(e) {
          e.enable = !0,
            Object(o["localSave"])(H, !0)
        },
        disable: function(e) {
          e.enable = !1,
            Object(o["localSave"])(H, !1)
        }
      }
    };
    function J(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function Y(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? J(Object(t), !0).forEach((function(n) {
            Object(M["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : J(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var X = t("28a6")
      , Q = t("0533")
      , Z = {
      namespaced: !0,
      state: {
        list: [],
        user: {}
      },
      mutations: {
        push: function(e, n) {
          var t = n.key
            , r = n.value;
          e.list.push({
            key: t,
            value: r
          })
        },
        pop: function(e, n) {
          var t = e.list.findIndex((function(e) {
              return e.key == n
            }
          ));
          e.list.splice(t, 1)
        },
        setUser: function(e, n) {
          e.user = n
        }
      },
      actions: {
        push: function(e, n) {
          var t = e.commit
            , r = n.key
            , a = n.value;
          t("push", {
            key: r,
            value: a
          })
        },
        pop: function(e, n) {
          var t = e.commit;
          t("pop", n)
        },
        loadUserData: _.debounce((function(e) {
            e.state;
            var n = e.getters
              , t = (e.dispatch,
              e.commit)
              , r = e.rootGetters
              , a = n.user;
            a && a._user == r["user/userId"] || Q.getUserData().then((function(e) {
                var n = e.data;
                t("setUser", n)
              }
            ))
          }
        ), 500)
      },
      getters: {
        user: function(e, n) {
          return e.user
        },
        list: function(e, n) {
          return e.list
        },
        getSelectedData: function(e, n) {
          return function(e) {
            for (var t, r = n.list, a = r.length, i = a - 1; i >= 0; i--) {
              var o = r[i]
                , c = o.value;
              if ("function" == typeof c && (c = c()),
              c && c.__entity == e) {
                t = c;
                break
              }
            }
            return t
          }
        },
        getUserData: function(e, n) {
          return function(e) {
            var r = n.user;
            if (!r._id) {
              var a = t("a169").default;
              a.dispatch("context/loadUserData")
            }
            return e ? r[e] : r._id
          }
        },
        getRouteQuery: function(e, n) {
          return function(e) {
            var n = t("b10a").default
              , r = n.app.$route
              , a = r.query.query
              , i = "";
            if ("string" == typeof a)
              try {
                i = JSON.parse(a)[e] || ""
              } catch (o) {}
            return i
          }
        }
      },
      modules: {
        cache: {
          namespaced: !0,
          state: {
            cache: {}
          },
          mutations: {
            set: function(e, n) {
              var t = n.key
                , r = n.value
                , a = n.ttl
                , i = void 0 === a ? 60 : a
                , o = X(t)
                , c = (new Date).getTime() + 1e3 * i
                , l = {
                value: r,
                expried: c
              };
              _.set(e.cache, o, l)
            }
          },
          actions: {
            set: function(e, n) {
              e.state;
              var t = e.commit
                , r = n.key
                , a = n.value
                , i = n.ttl;
              t("set", {
                key: r,
                value: a,
                ttl: i
              })
            }
          },
          getters: {
            cache: function(e, n) {
              return e.cache
            },
            get: function(e, n) {
              return function(e) {
                var t = X(e)
                  , r = n.cache[t]
                  , a = (new Date).getTime();
                if (r && r.expried > a)
                  return r.value
              }
            }
          }
        },
        meta: {
          namespaced: !0,
          state: {
            map: {}
          },
          mutations: {
            setMap: function(e, n) {
              e.map = n
            }
          },
          actions: {
            setMap: function(e, n) {
              e.state;
              var t = e.commit;
              t("setMap", n)
            },
            loadMeta: function(e, n) {
              e.dispatch;
              var t = e.getters
                , r = e.commit;
              Q.metaData(n).then((function(e) {
                  var a = e.data
                    , i = Y({}, t.map);
                  i[n] = a,
                    r("setMap", i)
                }
              ))
            }
          },
          getters: {
            map: function(e, n) {
              return e.map
            },
            getMeta: function(e, n) {
              return function(e) {
                var t = n.map
                  , r = t[e];
                return r || Je.dispatch("context/meta/loadMeta", e),
                  r
              }
            },
            getField: function(e, n) {
              return function(e) {
                var t = n.getMeta(e)
                  , r = t && t.field || [];
                return r
              }
            },
            getShortcut: function(e, n, t, r) {
              return function(e) {
                var t = n.getMeta(e)
                  , a = t && t.shortcut || []
                  , i = r["route/program/getProgramList"](a);
                return i
              }
            }
          }
        },
        data: {
          namespaced: !0,
          state: {
            map: {},
            loader: {}
          },
          mutations: {
            setMap: function(e, n) {
              e.map = n
            },
            setLoader: function(e, n) {
              e.loader = n
            }
          },
          actions: {
            setMap: function(e, n) {
              e.state;
              var t = e.commit;
              t("setMap", n)
            },
            setLoader: function(e, n) {
              e.state;
              var t = e.getters
                , r = e.commit
                , a = n.key
                , i = n.loader
                , o = Y({}, t.loader);
              o[a] = i,
                r("setLoader", o)
            },
            pushData: function(e, n) {
              e.state;
              var t = e.getters
                , r = e.commit
                , a = n.id
                , i = n.value
                , o = Y({}, t.map);
              o[a] = i,
                r("setMap", o)
            },
            loadData: function(e, n) {
              e.state;
              var t = e.getters
                , r = (e.commit,
                e.dispatch)
                , a = n.entity
                , i = n.id
                , o = n.query
                , c = t.loader
                , l = "".concat(a, "_").concat(i)
                , s = c[l];
              s || (s = _.debounce((function(e, n, t) {
                  Q.getData(e, n, t).then((function(e) {
                      var t = e.data;
                      r("pushData", {
                        id: n,
                        value: t
                      })
                    }
                  ))
                }
              ), 500),
                r("setLoader", {
                  key: l,
                  loader: s
                })),
                s(a, i, o)
            }
          },
          getters: {
            map: function(e, n) {
              return e.map
            },
            loader: function(e, n) {
              return e.loader
            },
            getData: function(e, n) {
              return function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , a = n.map
                  , i = a[t];
                return i || Je.dispatch("context/data/loadData", {
                  entity: e,
                  id: t,
                  query: r
                }),
                  i
              }
            }
          }
        }
      }
    }
      , ee = t("538b");
    function ne(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function te(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? ne(Object(t), !0).forEach((function(n) {
            Object(M["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ne(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var re = {}
      , ae = {
      namespaced: !0,
      state: {
        map: {}
      },
      mutations: {
        setMap: function(e, n) {
          e.map = n
        }
      },
      actions: {
        set: function(e, n) {
          e.state;
          var t = e.commit
            , r = e.getters
            , a = n.key
            , i = n.value
            , o = te({}, r.map);
          i && (o[a] = i,
            t("setMap", o))
        },
        get: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = e.rootGetters
            , a = re[n]
            , i = r["platform/isDev"];
          return i ? ee["getDisplay"](n).then((function(e) {
              return e.data
            }
          )) : (a || (a = ee["getDisplay"](n).then((function(e) {
              var r = e.data;
              return r && t("set", {
                key: n,
                value: r
              }),
                r
            }
          )),
            re[n] = a),
            a)
        },
        prepare: function(e) {
          e.state,
            e.commit,
            e.dispatch;
          var n = e.rootGetters
            , t = n["platform/isDev"];
          t || ee["listDisplay"]().then((function(e) {
              for (var n = e.data || [], t = function(e) {
                var t = n[e]
                  , r = t._id;
                re[r] = new Promise((function(e, n) {
                    e(t)
                  }
                ))
              }, r = 0; r < n.length; r++)
                t(r)
            }
          ))
        }
      },
      getters: {
        map: function(e) {
          return e.map
        }
      }
    }
      , ie = t("4d00")
      , oe = t.n(ie)
      , ce = t("28a1");
    function le(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function se(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? le(Object(t), !0).forEach((function(n) {
            Object(M["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : le(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var ue = {}
      , de = {
      namespaced: !0,
      state: {
        map: {}
      },
      mutations: {
        setMap: function(e, n) {
          e.map = n
        }
      },
      actions: {
        display: function(e, n) {
          e.state,
            e.commit;
          var t = e.getters
            , r = e.rootGetters
            , a = e.dispatch
            , i = n.flow
            , o = n.version
            , c = void 0 === o ? "" : o
            , l = (se({}, t.map),
            r["platform/isDev"])
            , s = "display-program-".concat(i, "-").concat(c);
          if (l)
            return ce["a"](i, c).then((function(e) {
                var n = e.data;
                return n
              }
            ));
          var u = ue[s];
          return u || (u = ce["a"](i, c).then((function(e) {
              var n = e.data;
              return n && a("set", {
                key: s,
                value: n
              }),
                n
            }
          )),
            ue[s] = u),
            u
        },
        set: function(e, n) {
          e.state;
          var t = e.commit
            , r = e.getters
            , a = n.key
            , i = n.value
            , o = se({}, r.map);
          i && (o[a] = i,
            t("setMap", o))
        }
      },
      getters: {
        map: function(e) {
          return e.map
        }
      }
    }
      , pe = t("8468")
      , me = t("fc24")
      , fe = {
      namespaced: !0,
      modules: {
        lbs: {
          namespaced: !0,
          actions: {
            getPoi: function(e, n) {
              Object(pe["a"])(e);
              var t = n.type
                , r = n.lat
                , a = n.lng;
              return t = t || "weixin",
                me["a"](t, r, a).then((function(e) {
                    var n = e.data;
                    return n
                  }
                ))
            }
          }
        }
      }
    }
      , ve = t("2909")
      , he = (t("a29f"),
      t("3f41"))
      , ge = {
      namespaced: !0,
      state: {
        program: {},
        app: [],
        dev: [],
        home: "/"
      },
      mutations: {
        setApp: function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          e.app = n
        },
        setDev: function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          e.dev = n
        },
        setHome: function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/";
          e.home = n
        }
      },
      actions: {
        init: function(e) {
          e.state;
          var n = e.commit;
          e.dispatch;
          return he.listRoute().then((function(e) {
              var t = e.data;
              n("setApp", t)
            }
          ))
        },
        go: function(e, n) {
          e.state;
          var t = e.commit
            , r = (e.dispatch,
            e.getters)
            , a = r.pageMap
            , i = a[n];
          i ? (t("tags/router", i, {
            root: !0
          }),
            p["default"].push("/page/" + n)) : p["default"].push({
            name: n
          })
        },
        setDev: function(e, n) {
          var t = e.commit;
          t("setDev", n)
        },
        setHome: function(e, n) {
          var t = e.commit;
          t("setHome", n),
          n && "/" != n && "home" == p["default"].currentRoute.name && p["default"].replace({
            path: getters.home
          })
        },
        reset: function(e) {
          var n = e.commit;
          n("setApp"),
            n("setHome")
        }
      },
      getters: {
        home: function(e, n, t, r) {
          var a = r["custom/project"]
            , i = e.home || "/";
          return i.startsWith("/") || (i = "/".concat(i)),
          a && (i = "/".concat(a).concat(i)),
            i
        },
        app: function(e, n) {
          var t = Object(ve["a"])(e.app);
          return t = _.sortBy(t, ["_sort"]),
            t
        },
        dev: function(e, n) {
          return e.dev
        },
        page: function(e, n, t, r) {
          var a = []
            , i = r["platform/isDev"];
          if (i)
            return n.dev;
          var o = _.cloneDeep(n.app);
          return o.forEach((function(e) {
              var n = e._parent
                , t = o.find((function(e) {
                  return e._id == n
                }
              ));
              if (n && t) {
                var r = t._children || [];
                r.push(e),
                  t._children = r
              } else
                a.push(e)
            }
          )),
            a
        },
        pageMap: function(e, n) {
          return n.appMap
        },
        appMap: function(e, n) {
          var t = n.app
            , r = {};
          return t.forEach((function(e) {
              r[e._id] = e
            }
          )),
            r
        },
        get: function(e, n) {
          return function(e) {
            var t = n.pageMap
              , r = t[e];
            return r
          }
        }
      },
      modules: {
        program: {
          namespaced: !0,
          state: {},
          mutations: {},
          actions: {},
          getters: {
            map: function(e, n, t, r) {
              for (var a = {}, i = r["route/app"], o = 0; o < i.length; o++)
                for (var c = i[o], l = c._program || [], s = 0; s < l.length; s++) {
                  var u = l[s];
                  a[u._flow] = u
                }
              return a
            },
            getProgramList: function(e, n) {
              return function(e) {
                var t = n.map;
                return e = e.map((function(e) {
                    return t[e]
                  }
                )),
                  e = e.filter((function(e) {
                      return !!e
                    }
                  )),
                  e
              }
            }
          }
        }
      }
    };
    t("4153");
    function ye(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function be(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? ye(Object(t), !0).forEach((function(n) {
            Object(M["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ye(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var ke = t("9095").namespace("dev")
      , _e = {
      namespaced: !0,
      state: {},
      getters: {},
      modules: {
        flow: {
          namespaced: !0,
          state: {
            local: ke.namespace("flow"),
            nameWidth: ke.namespace("flow")("nameWidth") || 120,
            activeModule: ke.namespace("flow")("activeModule") || "",
            sortMap: ke.namespace("flow")("sortMap") || {},
            search: ke.namespace("flow")("search") || {}
          },
          mutations: {
            setNameWidth: function(e, n) {
              e.nameWidth = n,
                e.local("nameWidth", n)
            },
            setActiveModule: function(e, n) {
              e.activeModule = n,
                e.local("activeModule", n)
            },
            setSortMap: function(e, n) {
              e.sortMap = n,
                e.local("sortMap", n)
            },
            setSearch: function(e, n) {
              e.search = n,
                e.local("search", n)
            }
          },
          actions: {
            setNameWidth: function(e, n) {
              e.state;
              var t = e.commit;
              t("setNameWidth", n)
            },
            setActiveModule: function(e, n) {
              e.state;
              var t = e.commit;
              t("setActiveModule", n)
            },
            setSortMap: function(e, n) {
              e.state;
              var t = e.commit;
              t("setSortMap", n)
            },
            search: function(e, n) {
              var t = e.state
                , r = e.commit
                , a = n.key
                , i = n.value
                , o = be({}, t.search);
              o[a] = i,
                r("setSearch", o)
            }
          },
          getters: {
            nameWidth: function(e) {
              return e.nameWidth
            },
            activeModule: function(e) {
              return e.activeModule
            },
            sortMap: function(e, n) {
              return e.sortMap
            },
            search: function(e, n) {
              return e.search
            }
          }
        },
        module: {
          namespaced: !0,
          state: {
            local: ke.namespace("module"),
            sortMap: ke.namespace("module")("sortMap") || {}
          },
          mutations: {
            setSortMap: function(e, n) {
              e.sortMap = n,
                e.local("sortMap", n)
            }
          },
          actions: {
            setSortMap: function(e, n) {
              e.state;
              var t = e.commit;
              t("setSortMap", n)
            }
          },
          getters: {
            sortMap: function(e, n) {
              return e.sortMap
            }
          }
        },
        entity: {
          namespaced: !0,
          state: {
            sortMap: {}
          },
          mutations: {
            setSortMap: function(e, n) {
              e.sortMap = n
            }
          },
          actions: {
            setSortMap: function(e, n) {
              e.state;
              var t = e.commit;
              t("setSortMap", n)
            }
          },
          getters: {
            sortMap: function(e, n) {
              return e.sortMap
            }
          }
        },
        progress: {
          namespaced: !0,
          state: {
            visible: !1,
            hint: "加载中...",
            timeout: 2e4,
            timestamp: 0
          },
          mutations: {
            setVisible: function(e, n) {
              e.visible = n,
              n && (e.timestamp = (new Date).getTime())
            },
            setHint: function(e, n) {
              e.hint = n
            }
          },
          actions: {
            show: function(e, n) {
              var t = e.commit
                , r = e.getters
                , a = e.dispatch;
              t("setVisible", !0),
                t("setHint", n || "加载中...");
              var i = r.timeout;
              _.delay((function() {
                  var e = (new Date).getTime()
                    , n = r.timestamp
                    , t = r.timeout;
                  e >= n + t && a("hide")
                }
              ), i)
            },
            hide: function(e) {
              var n = e.commit;
              n("setVisible", !1),
                n("setHint", "加载中...")
            }
          },
          getters: {
            visible: function(e, n) {
              return e.visible
            },
            hint: function(e, n) {
              return e.hint
            },
            timestamp: function(e, n) {
              return e.timestamp
            },
            timeout: function(e, n) {
              return e.timeout
            }
          }
        }
      }
    };
    function we(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function xe(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? we(Object(t), !0).forEach((function(n) {
            Object(M["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : we(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var Oe = t("289e")
      , je = {
      namespaced: !0,
      state: {
        userMap: {}
      },
      mutations: {
        setUserMap: function(e, n) {
          e.userMap = n
        }
      },
      actions: {
        listUser: function(e, n) {
          e.state;
          var t = e.getters
            , r = e.commit;
          return Oe.getUsers(n).then((function(e) {
              for (var n = e.data, a = t.userMap, i = 0; i < n.length; i++) {
                var o = n[i];
                a[o._id] = o
              }
              return r("setUserMap", a),
                n
            }
          ))
        },
        getUsers: function(e, n) {
          e.state;
          var t = e.getters
            , r = e.commit
            , a = t.userMap
            , i = n.filter((function(e) {
              return !a[e]
            }
          ))
            , o = [];
          if (0 == i.length) {
            for (var c = 0; c < n.length; c++) {
              var l = n[c];
              a[l] && o.push(a[l])
            }
            return o
          }
          return Oe.getUsers(i).then((function(e) {
              for (var a = e.data, i = t.userMap, c = 0; c < a.length; c++) {
                var l = a[c];
                i[l._id] = l
              }
              r("setUserMap", i);
              for (var s = 0; s < n.length; s++) {
                var u = n[s];
                i[u] && o.push(i[u])
              }
              return o
            }
          ))
        },
        createUser: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n.role
            , a = n.account
            , i = n.pwd
            , o = n.name;
          return Oe.createUser(r, a, i, {
            name: o
          }).then((function(e) {
              return t("system/auth/listRole", {}, {
                root: !0
              }),
                e
            }
          ))
        },
        bindUser: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n.role
            , a = n.account
            , i = n.phone
            , o = n.name;
          return Oe.bindUser(r, {
            account: a,
            phone: i,
            name: o
          }).then((function(e) {
              return t("system/auth/listRole", {}, {
                root: !0
              }),
                e
            }
          ))
        },
        updateUser: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n.user
            , a = n.role
            , i = n.pwd
            , o = n.nickname;
          return Oe.updateUser(r, {
            role: a,
            pwd: i,
            nickname: o
          }).then((function(e) {
              return t("system/auth/listRole", {}, {
                root: !0
              }),
                e
            }
          ))
        },
        kickUser: function(e, n) {
          e.state;
          var t = e.dispatch;
          return Oe.kickUser(n).then((function(e) {
              return t("system/auth/listRole", {}, {
                root: !0
              }),
                e
            }
          ))
        },
        banUser: function(e, n) {
          e.state;
          var t = e.dispatch;
          return Oe.banUser(n).then((function(e) {
              return t("system/auth/listRole", {}, {
                root: !0
              }),
                e
            }
          ))
        },
        activeUser: function(e, n) {
          e.state;
          var t = e.dispatch;
          return Oe.activeUser(n).then((function(e) {
              return t("system/auth/listRole", {}, {
                root: !0
              }),
                e
            }
          ))
        }
      },
      getters: {
        userMap: function(e, n) {
          return xe({}, e.userMap)
        }
      }
    };
    t("20fd");
    function Pe(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function Se(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? Pe(Object(t), !0).forEach((function(n) {
            Object(M["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Pe(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var Me = t("ba75")
      , Ce = {
      namespaced: !0,
      state: {
        roles: [],
        users: [],
        active: void 0
      },
      mutations: {
        setRoles: function(e, n) {
          e.roles = n
        },
        setUsers: function(e, n) {
          e.users = n
        },
        setActive: function(e, n) {
          e.active = n
        }
      },
      actions: {
        listRole: function(e) {
          e.state,
            e.getters;
          var n = e.commit
            , t = e.dispatch;
          Me.listRole().then((function(e) {
              var r = e.data;
              n("setRoles", r),
                t("listUser")
            }
          ))
        },
        listUser: function(e) {
          var n = e.state
            , t = (e.getters,
            e.commit)
            , r = e.dispatch
            , a = []
            , i = n.roles;
          i.forEach((function(e) {
              a.push.apply(a, Object(ve["a"])(e._user || []))
            }
          )),
            r("system/user/listUser", a, {
              root: !0
            }).then((function(e) {
                t("setUsers", e)
              }
            ))
        },
        active: function(e, n) {
          e.state,
            e.getters;
          var t = e.commit;
          t("setActive", n)
        },
        bind: function(e, n) {
          e.state,
            e.getters,
            e.commit;
          var t = e.dispatch
            , r = n.role
            , a = n.route
            , i = n.program
            , o = n.entity
            , c = n.shortcut
            , l = r._id;
          l && Me.bindRole(l, {
            route: a,
            program: i,
            entity: o,
            shortcut: c
          }).then((function(e) {
              t("listRole")
            }
          ))
        },
        add: function(e, n) {
          e.state,
            e.getters,
            e.commit;
          var t = e.dispatch
            , r = n.role
            , a = n.route
            , i = void 0 === a ? [] : a
            , o = n.program
            , c = void 0 === o ? [] : o
            , l = r._id
            , s = r._auth || {}
            , u = s.route || []
            , d = s.program || [];
          u.push.apply(u, Object(ve["a"])(i)),
            d.push.apply(d, Object(ve["a"])(c)),
          l && Me.bindRole(l, {
            route: u,
            program: d
          }).then((function(e) {
              t("listRole")
            }
          ))
        },
        createRole: function(e, n) {
          e.state,
            e.getters,
            e.commit;
          var t = e.dispatch
            , r = n.name;
          r && Me.createRole({
            name: r
          }).then((function(e) {
              t("listRole")
            }
          ))
        },
        removeRole: function(e, n) {
          e.state,
            e.getters,
            e.commit;
          var t = e.dispatch;
          n && Me.removeRole(n).then((function(e) {
              t("listRole")
            }
          ))
        },
        updateRole: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n.role
            , a = n.updated
            , i = void 0 === a ? {} : a
            , o = r._id;
          o && Me.updateRole(o, i).then((function(e) {
              t("listRole")
            }
          ))
        }
      },
      getters: {
        roles: function(e, n, t, r) {
          var a = n.userMap
            , i = e.roles
            , o = [];
          return i.forEach((function(e) {
              var n = Se({}, e)
                , t = n._user.map((function(e) {
                  return a[e] || {}
                }
              ));
              n._user = t,
                o.push(n)
            }
          )),
            o
        },
        users: function(e, n) {
          var t = n.userMap;
          return Object.values(t)
        },
        userMap: function(e, n, t, r) {
          var a = {}
            , i = e.roles
            , o = e.users;
          return o.forEach((function(e) {
              var n = i.find((function(n) {
                  return n._user && n._user.includes(e._id)
                }
              ))
                , t = oe.a.cloneDeep(e);
              t.role = n,
                a[e._id] = t
            }
          )),
            a
        },
        active: function(e, n, t, r) {
          var a = e.active;
          return a
        },
        user: function(e, n, t, r) {
          var a = r["user/userId"]
            , i = n.userMap;
          return i[a]
        }
      }
    }
      , De = t("3cab")
      , Ee = {
      namespaced: !0,
      state: {
        routes: [],
        active: void 0
      },
      mutations: {
        setRoutes: function(e, n) {
          e.routes = n
        },
        setActive: function(e, n) {
          e.active = n
        }
      },
      actions: {
        active: function(e, n) {
          var t = e.commit;
          t("setActive", n)
        },
        list: function(e) {
          e.state;
          var n = e.commit;
          e.dispatch;
          De.list().then((function(e) {
              n("setRoutes", e.data)
            }
          ))
        },
        create: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = n.type
            , a = n.name
            , i = n.parent
            , o = n.value;
          return De.create({
            type: r,
            name: a,
            parent: i,
            value: o
          }).then((function(e) {
              return t("list").then((function() {
                  return e
                }
              ))
            }
          ))
        },
        update: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = n.id
            , a = n.updated;
          De.update(r, a).then((function(e) {
              t("list")
            }
          ))
        },
        remove: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch;
          De.remove(n).then((function(e) {
              t("list")
            }
          ))
        },
        bind: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = n.id
            , a = n.programs;
          De.bind(r, a).then((function(e) {
              t("list")
            }
          ))
        },
        sort: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch;
          De.sort(n).then((function(e) {
              t("list")
            }
          ))
        }
      },
      getters: {
        routes: function(e, n) {
          var t = Object(ve["a"])(e.routes);
          return t.sort((function(e, n) {
              return e._sort - n._sort
            }
          )),
            t
        },
        routeMap: function(e, n) {
          var t = {}
            , r = n.routes;
          return r.forEach((function(e) {
              t[e._id] = e
            }
          )),
            t
        },
        active: function(e, n) {
          return e.active
        },
        routeList: function(e, n) {
          e.state,
            e.commit,
            e.dispatch;
          var t = []
            , r = n.routeMap
            , a = n.routes
            , i = a.filter((function(e) {
              return !r[e._parent]
            }
          ));
          t.push.apply(t, Object(ve["a"])(i));
          for (var o = function(e) {
            var n = a[e]
              , t = a.filter((function(e) {
                return e._parent == n._id
              }
            ));
            n._children = t
          }, c = 0; c < a.length; c++)
            o(c);
          return t
        },
        getRoute: function(e, n) {
          return function(e) {
            var t = n.routes;
            return t.find((function(n) {
                return n._id == e
              }
            )) || {}
          }
        },
        getDatasetMap: function(e, n) {
          return function(e) {
            for (var t = n.routes, r = [], a = 0; a < t.length; a++)
              "table" == t[a]._type && r.push(t[a]);
            var i = r.find((function(n) {
                return n._value == e
              }
            ));
            return i
          }
        }
      }
    };
    t("3313"),
      t("e158"),
      t("a05d");
    function Ae(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function Ie(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? Ae(Object(t), !0).forEach((function(n) {
            Object(M["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ae(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var qe = t("2df3")
      , Te = t("dac4")
      , Be = t("62d1")
      , ze = {
      namespaced: !0,
      state: {
        project: void 0,
        module: [],
        entity: [],
        flow: [],
        field: []
      },
      mutations: {
        setProject: function(e, n) {
          e.project = n
        },
        setModule: function(e, n) {
          e.module = n
        },
        setEntity: function(e, n) {
          e.entity = n
        },
        setFlow: function(e, n) {
          e.flow = n
        },
        setField: function(e, n) {
          e.field = n
        }
      },
      actions: {
        getProject: function(e) {
          e.state;
          var n = e.commit
            , t = e.dispatch
            , r = e.rootGetters
            , a = qe.get
            , i = r["platform/isDev"]
            , o = i ? "dev" : "app";
          a(o).then((function(e) {
              var r = e.data;
              n("setProject", r),
                t("listModule"),
                t("listEntity"),
                t("listField"),
                t("listFlow"),
                t("display/list"),
                t("system/auth/listRole", "", {
                  root: !0
                }),
                t("system/route/list", "", {
                  root: !0
                })
            }
          ))
        },
        updateProject: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = n.name;
          qe.update(r).then((function() {
              t("platform/getProject", "", {
                root: !0
              })
            }
          ))
        },
        listEntity: function(e) {
          e.state;
          var n = e.commit;
          qe.listEntity().then((function(e) {
              var t = e.data;
              n("setEntity", t)
            }
          ))
        },
        createEntity: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n.name
            , a = n.module;
          return qe.createEntity(r).then((function(e) {
              var n = e.data;
              return a && t("addModuleItem", {
                module: a,
                type: "_entity",
                item: n._id
              }),
                t("listEntity"),
                n
            }
          ))
        },
        updateEntity: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n.id
            , a = n.updated;
          qe.updateEntity(r, a).then((function(e) {
              t("listEntity")
            }
          ))
        },
        removeEntity: function(e, n) {
          e.state;
          var t = e.dispatch;
          qe.removeEntity(n).then((function(e) {
              t("listEntity")
            }
          ))
        },
        listField: function(e) {
          e.state;
          var n = e.commit;
          qe.listField().then((function(e) {
              var t = e.data;
              n("setField", t)
            }
          ))
        },
        createField: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = n.entity
            , a = n.name
            , i = n.type
            , o = n.relate
            , c = n.code;
          qe.createField(r, {
            name: a,
            type: i,
            relate: o,
            code: c
          }).then((function(e) {
              t("listField")
            }
          ))
        },
        updateField: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = n.entity
            , a = n.id
            , i = n.updated;
          qe.updateField(r, a, i).then((function(e) {
              t("listField")
            }
          ))
        },
        removeField: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = n.entity
            , a = n.id;
          qe.removeField(r, a).then((function(e) {
              t("listField")
            }
          ))
        },
        sortField: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = n.entity
            , a = n.list;
          qe.sortField(r, a).then((function(e) {
              t("listField")
            }
          ))
        },
        listModule: function(e) {
          e.state;
          var n = e.commit;
          qe.listModule().then((function(e) {
              var t = e.data;
              n("setModule", t)
            }
          ))
        },
        createModule: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n.name;
          return qe.createModule(r).then((function(e) {
              return t("listModule")
            }
          ))
        },
        updateModule: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n._id;
          qe.updateModule(r, n).then((function(e) {
              t("listModule")
            }
          ))
        },
        addModuleItem: function(e, n) {
          e.state;
          var t = e.dispatch
            , r = n.module
            , a = n.type
            , i = n.item;
          qe.addModuleItem(r, a, i).then((function(e) {
              t("listModule")
            }
          ))
        },
        removeModule: function(e, n) {
          e.state;
          var t = e.dispatch;
          qe.removeModule(n).then((function(e) {
              t("listModule")
            }
          ))
        },
        listFlow: function(e) {
          e.state;
          var n = e.commit;
          return Te.list().then((function(e) {
              n("setFlow", e.data)
            }
          ))
        },
        copyFlow: function(e, n) {
          var t = e.dispatch
            , r = n.id
            , a = n.data;
          Te.copy(r, a).then((function(e) {
              t("listFlow")
            }
          ))
        },
        updateFlow: function(e, n) {
          var t = e.dispatch
            , r = n.id
            , a = n.updated;
          Te.update(r, a).then((function(e) {
              t("listFlow")
            }
          ))
        },
        removeFlow: function(e, n) {
          var t = e.dispatch;
          Te.remove(n).then((function(e) {
              t("listFlow")
            }
          ))
        },
        quickCreate: function(e, n) {
          var t = e.dispatch
            , r = [];
          return qe.quickCreate(n).then((function(e) {
              return r = e.data,
                t("listFlow")
            }
          )).then((function(e) {
              return t("listModule")
            }
          )).then((function() {
              return r
            }
          ))
        },
        setCustom: function(e) {
          e.dispatch;
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return qe.setCustom(n)
        }
      },
      getters: {
        module: function(e, n, t, r) {
          for (var a = e.module, i = [], o = n.map, c = 0; c < a.length; c++) {
            var l = Ie({}, a[c]);
            l._flow = l._flow.map((function(e) {
                var n = o[e] || {};
                return n
              }
            )),
              l._flow = l._flow.filter((function(e) {
                  return e._id
                }
              )),
              i.push(l)
          }
          var s = r["system/ui/module/sortMap"];
          return i.sort((function(e, n) {
              return s[e._id] - s[n._id]
            }
          )),
            i
        },
        map: function(e, n) {
          var t = {}
            , r = e.module
            , a = n.flow
            , i = n.entity;
          a.forEach((function(e) {
              t[e._id] = Ie({}, e)
            }
          )),
            i.forEach((function(e) {
                t[e._id] = Ie({}, e)
              }
            ));
          for (var o = function(e) {
            var n = r[e]
              , a = n._flow || []
              , i = n._entity || [];
            a.forEach((function(e) {
                t["_m_" + e] = n._id
              }
            )),
              i.forEach((function(e) {
                  t["_m_" + e] = n._id
                }
              ))
          }, c = 0; c < r.length; c++)
            o(c);
          return t
        },
        entity: function(e, n, t, r) {
          for (var a = e.entity, i = e.field, o = {}, c = 0; c < i.length; c++) {
            var l = i[c]
              , s = l._entity
              , u = o[s] || [];
            u.push(Ie({}, l)),
              o[s] = u
          }
          for (var d = [], p = 0; p < a.length; p++) {
            var m = Ie({}, a[p]);
            m._field = o[m._id] || [],
              d.push(m)
          }
          return d
        },
        userEntity: function(e, n) {
          var t = n.entity
            , r = t.find((function(e) {
              return "user" == e._code
            }
          ));
          return r
        },
        flow: function(e, n, t, r) {
          var a = Object(ve["a"])(e.flow);
          return a.sort((function(e, n) {
              return new Date(n.createdAt) - new Date(e.createdAt)
            }
          )),
            a
        },
        program: function(e, n, t, r) {
          var a = n.flow;
          return a.filter((function(e) {
              return "program" == e._type
            }
          ))
        },
        dataset: function(e, n, t, r) {
          var a = n.flow;
          return a.filter((function(e) {
              return "dataset" == e._type
            }
          ))
        },
        timer: function(e, n, t, r) {
          var a = n.flow;
          return a.filter((function(e) {
              return "timer" == e._type
            }
          ))
        },
        moduleFlowMap: function(e, n) {
          var t = {}
            , r = Object(ve["a"])(n.flow)
            , a = n.module;
          return a.forEach((function(e) {
              var n = e._id
                , a = e._flow;
              a = Array.from(new Set(a)),
                t[n] = a,
                oe.a.pullAllBy(r, a, "_id")
            }
          )),
            t.default = r,
            t
        },
        getModuleFlow: function(e, n) {
          return function(e, t) {
            var r = n.moduleFlowMap
              , a = r[e] || [];
            return t && (a = a.filter((function(e) {
                return e._type == t
              }
            ))),
              a
          }
        },
        flowMap: function(e, n) {
          var t = {}
            , r = n.flow;
          return r.forEach((function(e) {
              t[e._id] = e
            }
          )),
            t
        },
        getFlowById: function(e, n) {
          return function(e) {
            var t = n.flowMap;
            return t[e]
          }
        },
        field: function(e) {
          var n = Object(ve["a"])(e.field);
          return n = n.map((function(e) {
              var n = Ie({}, e);
              return n._field = e._id,
                n._option = e._option || {},
                n
            }
          )),
            n.sort((function(e, n) {
                return e._sort - n._sort
              }
            )),
            n
        },
        getField: function(e, n) {
          return function(e) {
            var t = n.field
              , r = t.filter((function(n) {
                return n._entity == e
              }
            ));
            return oe.a.cloneDeep(r)
          }
        },
        getEntity: function(e, n) {
          return function(e) {
            var t = n.entity;
            return t.find((function(n) {
                return n._id == e
              }
            ))
          }
        },
        getFieldById: function(e, n) {
          return function(e) {
            var t = n.field;
            return t.find((function(n) {
                return n._id == e
              }
            ))
          }
        },
        findField: function(e, n) {
          return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = n.field;
            return oe.a.filter(t, e)
          }
        },
        findEntity: function(e, n) {
          return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = n.entity;
            return oe.a.filter(t, e)
          }
        }
      },
      modules: {
        map: {
          namespaced: !0,
          getters: {
            moduleMap: function(e, n, t, r) {
              var a = {}
                , i = r["system/project/module"];
              return i.forEach((function(e) {
                  a[e._id] = e
                }
              )),
                a
            },
            moduleSelection: function(e, n) {
              var t = Object.values(n.moduleMap).map((function(e) {
                  return e._name
                }
              ))
                , r = ["无"].concat(Object(ve["a"])(t));
              return r
            },
            getModuleByName: function(e, n, t, r) {
              return function(e) {
                var n = r["system/project/module"];
                return n.find((function(n) {
                    return n._name == e
                  }
                ))
              }
            },
            getModuleByItem: function(e, n, t, r) {
              return function(e, n) {
                var t = r["system/project/module"]
                  , a = t.find((function(t) {
                    return t[e].find((function(e) {
                        return e._id == n
                      }
                    ))
                  }
                ));
                return a
              }
            },
            moduleFormItem: function(e, n, t, r) {
              var a = n["moduleSelection"]
                , i = {
                _field: "module",
                _name: "模块",
                _value: {
                  _type: "selection",
                  _selection: a
                },
                _handle: "input"
              };
              return i
            },
            moduleFormValue: function(e, n, t, r) {
              return function(e, t) {
                var r = n["getModuleByItem"](e, t);
                return r = r && r._name || "无",
                  r
              }
            },
            moduleFormResult: function(e, n, t, r) {
              return function(e) {
                var t = n["getModuleByName"](e)
                  , r = t && t._id;
                return r
              }
            }
          }
        },
        dataset: {
          namespaced: !0,
          state: {},
          getters: {
            get: function(e, n, t, r) {
              return function(e) {
                var n = r["system/project/dataset"]
                  , t = n.find((function(n) {
                    return n._id == e
                  }
                ));
                return t
              }
            },
            getList: function(e, n, t, r) {
              return function(e) {
                var n = r["system/project/dataset"];
                return n = n.filter((function(n) {
                    var t = oe.a.get(n, "_release._display._entity");
                    return e && t == e
                  }
                )),
                  n
              }
            }
          }
        },
        program: {
          namespaced: !0,
          state: {},
          getters: {
            getList: function(e, n, t, r) {
              return function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = [], t = r["system/project/map"], a = 0; a < e.length; a++) {
                  var i = e[a];
                  t[i] && n.push(t[i])
                }
                return n
              }
            }
          }
        },
        display: {
          namespaced: !0,
          state: {
            list: []
          },
          mutations: {
            setList: function(e, n) {
              e.list = n
            }
          },
          actions: {
            list: function(e) {
              e.state;
              var n = e.commit;
              Be.list().then((function(e) {
                  n("setList", e.data)
                }
              ))
            }
          },
          getters: {
            list: function(e) {
              return e.list
            }
          }
        }
      }
    }
      , Le = (t("3783"),
      t("3835"))
      , We = t("787b")
      , $e = t.n(We)
      , Ue = t("7f8a")
      , Re = {
      namespaced: !0,
      state: {
        list: [],
        active: void 0,
        search: ""
      },
      mutations: {
        setList: function(e, n) {
          e.list = n
        },
        setActive: function(e, n) {
          e.active = n
        },
        setSearch: function(e, n) {
          e.search = n
        }
      },
      actions: {
        setList: function(e, n) {
          e.state;
          var t = e.commit;
          t("setList", n)
        },
        setActive: function(e, n) {
          e.state;
          var t = e.commit;
          t("setActive", n)
        },
        setSearch: function(e, n) {
          e.state;
          var t = e.commit;
          t("setSearch", n)
        },
        refresh: function(e) {
          var n = e.dispatch;
          Ue.listSchedule().then((function(e) {
              n("setList", e.data)
            }
          ))
        },
        set: function(e, n) {
          var t = e.dispatch
            , r = n.flow
            , a = n.cron
            , i = n.name;
          Ue.setSchedule(r, a, i).then((function(e) {
              t("refresh")
            }
          ))
        },
        update: function(e, n) {
          var t = e.dispatch
            , r = n.flow
            , a = n.cron
            , i = n.name
            , o = n.id;
          Ue.updateSchedule(o, r, a, i).then((function(e) {
              t("refresh")
            }
          ))
        },
        remove: function(e, n) {
          var t = e.dispatch;
          Ue.removeSchedule(n).then((function(e) {
              t("refresh")
            }
          ))
        },
        toggle: function(e, n) {
          var t = e.dispatch;
          return Ue.toggleSchedule(n).then((function(e) {
              t("refresh")
            }
          ))
        }
      },
      getters: {
        list: function(e, n) {
          var t = e.list
            , r = n.search;
          return r && (t = t.filter((function(e) {
              return e._name.includes(r)
            }
          ))),
            t
        },
        active: function(e, n) {
          return e.active
        },
        search: function(e, n) {
          return e.search
        },
        convertScheduleToForm: function(e, n) {
          return function(e) {
            var n = {
              name: "",
              time: "00:00",
              term: "day",
              weekDay: [],
              monthWeek: "1",
              monthWeekDay: "MON",
              monthDate: [],
              flow: []
            };
            if (!e)
              return n;
            n.name = e._name;
            var t = e._cron
              , r = t.split(" ")
              , a = Object(Le["a"])(r, 6)
              , i = (a[0],
              a[1])
              , o = a[2]
              , c = a[3]
              , l = (a[4],
              a[5]);
            n.time = "".concat(o, ":").concat(i),
              n.flow = [e._flow],
              n.id = e._id;
            var s = "day";
            if ("?" == l && "*" == c)
              s = "day";
            else if ("?" == c && l.includes(","))
              s = "week_day",
                n.weekDay = l.split(",");
            else if ("?" == l && c.includes(",")) {
              s = "month_date";
              var u = c.split(",");
              u = u.filter((function(e) {
                  return e && "L" != e
                }
              )),
                n.monthDate = u
            } else if ("?" == c && l.includes("#")) {
              s = "month_week_day";
              var d = l.split("#")
                , p = Object(Le["a"])(d, 2)
                , m = p[0]
                , f = p[1];
              n.monthWeekDay = m,
                n.monthWeek = f
            }
            return n.term = s,
              n
          }
        },
        convertFormToSchedule: function(e, n) {
          return function(e) {
            var n = e.name
              , t = e.flow[1] || e.flow[0]
              , r = "0 0 * * * * "
              , a = moment(e.time, "HH:mm")
              , i = a.get("minute") || 0
              , o = a.get("hour") || 0
              , c = e.term
              , l = "*"
              , s = "?";
            return "day" == c ? l = "*" : "week_day" == c ? e.weekDay.length > 0 && (l = "?",
              s = e.weekDay.join(",")) : "month_date" == c ? e.monthDate.length > 0 && (l = e.monthDate.join(",")) : "month_week_day" == c && (l = "?",
              s = "".concat(e.monthWeekDay, "#").concat(e.monthWeek)),
              r = "0 ".concat(i, " ").concat(o, " ").concat(l, " * ").concat(s),
              {
                name: n,
                flow: t,
                cron: r
              }
          }
        },
        convertToString: function(e, n) {
          return function(e) {
            return $e.a.toString(e)
          }
        }
      }
    }
      , Ve = {
      namespaced: !0,
      modules: {
        ui: _e,
        user: je,
        auth: Ce,
        route: Ee,
        project: ze,
        schedule: Re
      }
    }
      , Ne = {
      namespaced: !0,
      state: {
        step: 0,
        active: void 0,
        payType: void 0
      },
      mutations: {
        setStep: function(e, n) {
          e.step = n
        },
        setActive: function(e, n) {
          e.active = n
        },
        setPayType: function(e, n) {
          e.payType = n
        }
      },
      actions: {
        setStep: function(e, n) {
          e.state;
          var t = e.getters
            , r = e.commit
            , a = e.dispatch
            , i = t.active
            , o = t.payType;
          1 == n ? a("payment/getPackageOrder", i, {
            root: !0
          }).then((function(e) {
              r("setStep", n)
            }
          )) : 2 == n ? "alipay" == o && a("payment/pay", "", {
            root: !0
          }).then((function(e) {
              r("setStep", n)
            }
          )) : r("setStep", n)
        },
        active: function(e, n) {
          e.state,
            e.getters;
          var t = e.commit;
          t("setActive", n)
        },
        payType: function(e, n) {
          e.state,
            e.getters;
          var t = e.commit;
          t("setPayType", n)
        }
      },
      getters: {
        step: function(e, n, t, r) {
          var a = e.step;
          return a
        },
        active: function(e, n, t, r) {
          var a = e.active;
          return a
        },
        price: function(e, n) {
          var t = n.active
            , r = 365;
          return "basics" == t ? r = 365 : "enterprise" == t ? r = 5e3 : "custom" == t && (r = 5e4),
            r
        },
        name: function(e, n) {
          var t = n.active
            , r = {
            basics: "基础版",
            enterprise: "企业版",
            custom: "平台版"
          };
          return r[t] || ""
        },
        payType: function(e, n) {
          var t = e.payType;
          return t
        }
      }
    }
      , Fe = t("cb40")
      , Ke = {
      namespaced: !0,
      state: {
        order: {},
        list: []
      },
      actions: {
        listOrder: function(e) {
          e.state;
          var n = e.commit
            , t = e.getters
            , r = t.order
            , a = r._id;
          Fe.list().then((function(e) {
              var t = e.data;
              if (a) {
                var r = t.find((function(e) {
                    return e._id == a
                  }
                ));
                r && n("setOrder", r)
              }
              n("setList", t)
            }
          ))
        },
        getPackageOrder: function(e, n) {
          e.state;
          var t = e.commit
            , r = e.dispatch
            , a = e.getters
            , i = a.list
            , o = i.find((function(e) {
              var t = moment(e.createdAt).isBefore(moment().add(-30, "minute"));
              return 0 == e.status && e.detail && e.detail.package == n && !t
            }
          ));
          return o ? (t("setOrder", o),
            o) : Fe.createPackage({
            type: n
          }).then((function(e) {
              var n = e.data;
              return t("setOrder", n),
                r("listOrder"),
                n
            }
          ))
        },
        pay: function(e) {
          var n = e.getters
            , t = v["a"].platformServer
            , r = "alipay"
            , a = n.order
            , i = a._id;
          if (i) {
            var o = "".concat(t, "/api/payment/trade/pay/").concat(i, "/").concat(r);
            window.open(o)
          }
        }
      },
      mutations: {
        setList: function(e, n) {
          e.list = n
        },
        setOrder: function(e, n) {
          e.order = n
        }
      },
      getters: {
        list: function(e) {
          return e.list
        },
        order: function(e) {
          return e.order
        },
        orderNo: function(e, n) {
          var t = n.order
            , r = t._id || "";
          return r.toUpperCase()
        }
      }
    }
      , He = {
      namespaced: !0,
      state: {
        enable: !1
      },
      mutations: {
        setEnable: function(e, n) {
          e.enable = n
        }
      },
      actions: {
        start: function(e) {
          e.state;
          var n = e.commit
            , t = v["a"].baiduTrack.enable;
          if (t) {
            var r = new URL(v["a"].platformServer);
            if (location.host != r.host)
              return !1;
            window._hmt = window._hmt || [],
              function() {
                var e = document.createElement("script");
                e.src = v["a"].baiduTrack.url;
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(e, n)
              }(),
              n("setEnable", !0)
          }
        },
        track: function(e, n) {
          var t = e.getters
            , r = e.rootGetters
            , a = n.type
            , i = n.action
            , o = n.value
            , c = void 0 === o ? "" : o;
          if (t.enable) {
            var l = r["user/user"];
            window._hmt.push(["_trackEvent", a, i, l, c])
          }
        },
        page: function(e, n) {
          var t = e.getters;
          e.rootGetters;
          t.enable && window._hmt.push(["_trackPageview", n])
        }
      },
      getters: {
        enable: function(e) {
          return e.enable
        }
      }
    };
    r["default"].use(a["a"]);
    var Ge = new a["a"].Store({
      state: {},
      mutations: {},
      actions: {},
      modules: {
        user: c,
        platform: k,
        modal: w,
        tags: x,
        window: O,
        notice: j,
        weixin: S,
        view: A,
        helper: fe,
        recent: N,
        draft: K,
        debug: G,
        context: Z,
        project: I,
        custom: q["a"],
        display: ae,
        program: de,
        system: Ve,
        upgrade: Ne,
        payment: Ke,
        track: He,
        share: R,
        route: ge
      }
    })
      , Je = n["default"] = Ge
  },
  a1b8: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Cascader :data="data" v-model="value"></Cascader>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      value: [],\r\n      data: [\r\n        {\r\n          value: "beijing",\r\n          label: "北京",\r\n          children: [\r\n            {\r\n              value: "gugong",\r\n              label: "故宫",\r\n            },\r\n            {\r\n              value: "tiantan",\r\n              label: "天坛",\r\n            },\r\n            {\r\n              value: "wangfujing",\r\n              label: "王府井",\r\n            },\r\n          ],\r\n        },\r\n        {\r\n          value: "jiangsu",\r\n          label: "江苏",\r\n          children: [\r\n            {\r\n              value: "nanjing",\r\n              label: "南京",\r\n              children: [\r\n                {\r\n                  value: "fuzimiao",\r\n                  label: "夫子庙",\r\n                },\r\n              ],\r\n            },\r\n            {\r\n              value: "suzhou",\r\n              label: "苏州",\r\n              children: [\r\n                {\r\n                  value: "zhuozhengyuan",\r\n                  label: "拙政园",\r\n                },\r\n                {\r\n                  value: "shizilin",\r\n                  label: "狮子林",\r\n                },\r\n              ],\r\n            },\r\n          ],\r\n        },\r\n      ],\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  a72f: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Timeline>\r\n      <TimelineItem color="green">发布1.0版本</TimelineItem>\r\n      <TimelineItem color="green">发布2.0版本</TimelineItem>\r\n      <TimelineItem color="red">严重故障</TimelineItem>\r\n      <TimelineItem color="blue">发布3.0版本</TimelineItem>\r\n    </Timeline>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  ae50: function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "init", (function() {
          return I
        }
      ));
    t("8e6e"),
      t("ac6a"),
      t("456d");
    var r = t("ade3")
      , a = (t("7f7f"),
      t("8468"))
      , i = t("7c6b")
      , o = t("e750");
    function c(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function l(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? c(Object(t), !0).forEach((function(n) {
            Object(r["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var s = t("62d1")
      , u = t("eac0")
      , d = t("9ffe").default
      , p = {
      namespaced: !0,
      state: {
        display: void 0,
        store: void 0
      },
      mutations: {
        setDisplay: function(e, n) {
          e.display = n
        },
        setStore: function(e, n) {
          e.store = n
        }
      },
      actions: {
        get: function(e, n) {
          return Object(a["a"])(e),
            s.get(n).then((function(e) {
                return e.data
              }
            ))
        },
        start: function(e, n) {
          e.state;
          var t = e.commit;
          e.getters,
            e.rootGetters,
            e.dispatch;
          s.get(n).then((function(e) {
              var n = e.data;
              t("setDisplay", n)
            }
          ))
        },
        init: function(e, n) {
          e.state;
          var t = e.commit;
          e.getters,
            e.rootGetters;
          t("setStore", n)
        },
        update: function(e, n) {
          e.state,
            e.commit;
          var t = n.id
            , r = n.mode
            , a = n.list
            , i = n.extra;
          return s.update(t, r, a, i)
        },
        create: function(e, n) {
          var t = e.dispatch
            , r = e.getters
            , a = n.name
            , i = n.type
            , o = n.template
            , c = r.getTpl(o);
          return c ? c().then((function(e) {
              var n = e.default;
              return s.create(a, i, n).then((function(e) {
                  return t("system/project/display/list", "", {
                    root: !0
                  }),
                    e
                }
              ))
            }
          )) : s.create(a, i, {}).then((function(e) {
              return t("system/project/display/list", "", {
                root: !0
              }),
                e
            }
          ))
        },
        copy: function(e, n) {
          var t = e.dispatch
            , r = n.name
            , a = n.item;
          return s.copy(r, a).then((function(e) {
              t("system/project/display/list", "", {
                root: !0
              })
            }
          ))
        },
        remove: function(e, n) {
          var t = e.dispatch;
          return s.remove(n).then((function(e) {
              t("system/project/display/list", "", {
                root: !0
              })
            }
          ))
        },
        edit: function(e, n) {
          var t = e.dispatch
            , r = n.id
            , a = n.info;
          return s.edit(r, a).then((function(e) {
              t("system/project/display/list", "", {
                root: !0
              })
            }
          ))
        }
      },
      getters: {
        display: function(e, n, t, r) {
          return e.display
        },
        store: function(e, n) {
          return e.store
        },
        getTpl: function(e) {
          return function(e) {
            var n = d
              , t = n[e];
            if (t)
              return t.tpl
          }
        },
        tplList: function() {
          var e = d
            , n = [];
          for (var t in e) {
            var r = l({}, d[t]);
            r.key = t,
              n.push(r)
          }
          return n
        }
      },
      modules: {
        component: {
          namespaced: !0,
          state: {
            list: []
          },
          mutations: {
            setList: function(e, n) {
              e.list = n
            }
          },
          actions: {
            refresh: function(e) {
              e.state,
                e.getters,
                e.rootState,
                e.rootGetters,
                e.commit
            }
          },
          getters: {
            viewMap: function(e, n) {
              var t = i["a"];
              return t
            }
          }
        },
        view: {
          namespaced: !0,
          state: {
            list: []
          },
          mutations: {
            setList: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              e.list = n
            }
          },
          actions: {
            create: function(e, n) {
              e.state;
              var t = e.getters
                , r = (e.rootState,
                e.rootGetters)
                , a = e.dispatch
                , i = n.type
                , o = n.template
                , c = n.name
                , l = n.model
                , s = {}
                , d = r["dev/display/store"];
              if ("base-custom" == o) {
                var p = t.getTemplate(l)
                  , m = {
                  _template: p,
                  _name: c
                };
                return u.createView(m).then((function(e) {
                    var n = e.data
                      , t = n._id;
                    return a("list"),
                      d.dispatch("add", {
                        type: i,
                        template: o,
                        name: c,
                        body: s,
                        vid: t
                      })
                  }
                ))
              }
              return d.dispatch("add", {
                type: i,
                template: o,
                name: c,
                body: s
              })
            },
            add: function(e, n) {
              e.state,
                e.getters,
                e.dispatch;
              var t = e.rootGetters
                , r = n.vid
                , a = n.name
                , i = "view"
                , o = "base-custom"
                , c = {}
                , l = t["dev/display/store"];
              return l.dispatch("add", {
                type: i,
                template: o,
                name: a,
                body: c,
                vid: r
              })
            },
            update: function(e, n) {
              e.state,
                e.getters,
                e.rootState,
                e.rootGetters;
              var r = e.dispatch
                , a = n.vid
                , i = n.template
                , o = n.option
                , c = void 0 === o ? {} : o
                , l = t("538b").viewLoader;
              return l && delete l[a],
                u.updateView(a, i, c).then((function(e) {
                    _.isEmpty(c) || r("list")
                  }
                ))
            },
            remove: function(e, n) {
              var t = e.dispatch;
              return u.removeView(n).then((function(e) {
                  t("list")
                }
              ))
            },
            list: function(e) {
              e.state,
                e.getters,
                e.rootState,
                e.rootGetters;
              var n = e.commit;
              return u.listView().then((function(e) {
                  var t = e.data;
                  n("setList", t)
                }
              ))
            }
          },
          getters: {
            list: function(e) {
              return e.list
            },
            getTemplate: function(e) {
              e.state,
                e.getters;
              return function(e) {
                var n = _.get(o["default"], e, o["default"].common.blank)
                  , t = n.tpl;
                return t
              }
            }
          }
        }
      }
    }
      , m = t("2909")
      , f = (t("a481"),
      t("f559"),
      t("6762"),
      t("2fdb"),
      t("7514"),
      t("2ef0"))
      , v = t.n(f)
      , h = t("dac4")
      , g = {
      namespaced: !0,
      state: {
        flow: void 0
      },
      mutations: {
        setFlow: function(e, n) {
          e.flow = n
        }
      },
      actions: {
        start: function(e, n) {
          e.state;
          var t = e.commit
            , r = (e.getters,
            e.dispatch);
          h.get(n).then((function(e) {
              t("setFlow", e.data),
                r("listProcedure"),
                r("action/list", !0),
                r("snapshot/list")
            }
          ))
        },
        end: function(e) {
          e.state;
          var n = e.commit
            , t = e.dispatch;
          n("setFlow"),
            t("procedure/reset"),
            t("action/reset"),
            t("snapshot/reset")
        },
        listProcedure: function(e) {
          var n = e.state
            , t = (e.commit,
            e.dispatch)
            , r = n.flow
            , a = r && r._id;
          a && h.listProcedure(a).then((function(e) {
              t("procedure/setList", e.data)
            }
          ))
        },
        update: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = e.getters
            , a = n.type
            , i = n.payload
            , o = r.snapshot;
          if (!o) {
            var c = {
              createProcedure: !0,
              removeProcedure: !0,
              updateProcedure: !0,
              refreshProcedureAction: !0,
              updateProcedureAction: !0,
              addProcedureAction: !0,
              resetProcedureAction: !0,
              sortProcedureAction: !0,
              linkProcedure: !0
            };
            return c[a] ? t(a, i) : void 0
          }
          t("snapshot/setActive")
        },
        debug: function(e, n) {
          e.state,
            e.commit;
          var t = e.dispatch
            , r = e.getters
            , a = n.flow
            , i = n.version
            , o = a && a._id;
          if (o) {
            var c = r["snapshot/exist"](o, i);
            return t("dev/program/debug", {
              flow: o,
              version: i
            }, {
              root: !0
            }).then((function(e) {
                return c || t("snapshot/list"),
                  e
              }
            ))
          }
        },
        release: function(e) {
          var n = e.state
            , t = (e.commit,
            e.dispatch)
            , r = n.flow
            , a = r && r._id;
          if (a)
            return t("dev/program/release", {
              flow: a
            }, {
              root: !0
            }).then((function(e) {
                return t("snapshot/list")
              }
            ))
        }
      },
      getters: {
        flow: function(e, n) {
          return e.flow
        },
        list: function(e, n, t, r) {
          return r["system/project/flow"]
        },
        snapshot: function(e, n) {
          return n["snapshot/active"]
        },
        procedure: function(e, n) {
          var t = n.snapshot;
          return t ? t._procedure : n["procedure/list"]
        },
        handleMap: function(e, n) {
          var t = n.flow
            , r = t._type;
          return "dataset" == r ? n["dataset/handleMap"] : n["program/handleMap"]
        },
        actionHandleMap: function(e, n) {
          var t = n.flow
            , r = t._type;
          return "dataset" == r ? n["dataset/actionHandleMap"] : n["program/actionHandleMap"]
        },
        action: function(e, n) {
          var t = n.snapshot;
          return t ? t._action : n["action/list"]
        },
        getProcedureByEntity: function(e, n) {
          return function(e) {
            var t = n.procedure;
            return t.filter((function(n) {
                return n._entity == e
              }
            ))
          }
        },
        getProcedureById: function(e, n) {
          return function(e) {
            var t = n.procedure;
            return t.find((function(n) {
                return n._id == e
              }
            ))
          }
        },
        getProcedure: function(e, n) {
          return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = n.procedure;
            return e ? v.a.filter(t, e) : t
          }
        },
        getAction: function(e, n) {
          return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = n.action;
            return v.a.filter(t, e)
          }
        },
        getEntityProcedure: function(e, n) {
          return function(e) {
            var t = {
              _type: "entity"
            };
            return e && (t._entity = e),
              n.getProcedure(t)
          }
        },
        getCollectionProcedure: function(e, n) {
          return function(e) {
            var t = {
              _type: "collection"
            };
            return e && (t._entity = e),
              n.getProcedure(t)
          }
        }
      },
      modules: {
        snapshot: {
          namespaced: !0,
          state: {
            active: void 0,
            list: []
          },
          mutations: {
            setActive: function(e, n) {
              e.active = n
            },
            setList: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              e.list = n
            }
          },
          actions: {
            setActive: function(e, n) {
              var t = e.commit;
              t("setActive", n)
            },
            setList: function(e, n) {
              var t = e.commit;
              t("setList", n)
            },
            reset: function(e) {
              var n = e.commit;
              n("setActive"),
                n("setList")
            },
            list: v.a.debounce((function(e, n) {
                e.state;
                var t = e.commit
                  , r = (e.rootState,
                  e.rootGetters)
                  , a = r["dev/flow/flow"]
                  , i = a && a._id;
                i && h.listSnapshot(i).then((function(e) {
                    var n = e.data;
                    n.reverse(),
                      t("setList", n)
                  }
                ))
              }
            ), 1e3),
            check: function(e, n) {
              e.state,
                e.commit,
                e.rootState;
              var t = e.dispatch
                , r = e.rootGetters
                , a = r["dev/flow/flow"]
                , i = a && a._id
                , o = n && n._token;
              i && o && h.checkSnapshot(i, o).then((function(e) {
                  var n = e.data;
                  t("setActive", n)
                }
              ))
            },
            cancel: function(e) {
              e.state,
                e.commit,
                e.rootState;
              var n = e.dispatch;
              n("setActive")
            }
          },
          getters: {
            list: function(e, n) {
              return e.list
            },
            active: function(e, n) {
              return e.active
            },
            exist: function(e, n) {
              return function(n, t) {
                var r = e.list;
                return r.find((function(e) {
                    return e._v == t && e._flow == n
                  }
                ))
              }
            }
          }
        },
        code: {
          actions: {
            createProcedure: function(e, n) {
              e.state,
                e.commit;
              var t = e.dispatch
                , r = (e.getters,
                e.rootGetters)
                , a = n.name
                , i = n.view
                , o = r["dev/flow/flow"]
                , c = o && o._id;
              if (c)
                return h.createProcedure(c, a, i).then((function(e) {
                    return t("listProcedure"),
                      e
                  }
                ))
            },
            removeProcedure: function(e, n) {
              e.state,
                e.commit;
              var t = e.dispatch
                , r = e.rootGetters
                , a = r["dev/flow/flow"]
                , i = a && a._id;
              if (i)
                return h.removeProcedure(i, n).then((function(e) {
                    t("listProcedure")
                  }
                ))
            },
            updateProcedure: function(e, n) {
              e.state,
                e.commit;
              var t = e.dispatch
                , r = e.rootGetters
                , a = n.id
                , i = n.updated
                , o = r["dev/flow/flow"]
                , c = o && o._id;
              if (c)
                return h.updateProcedure(c, a, i).then((function(e) {
                    t("listProcedure")
                  }
                ))
            },
            refreshProcedureAction: function(e) {
              e.state,
                e.commit;
              var n = e.dispatch
                , t = e.getters
                , r = e.rootGetters
                , a = r["dev/flow/flow"]
                , i = a && a._id
                , o = t["procedure/active"];
              if (i && o)
                return h.refreshProcedureAction(i, o).then((function(e) {
                    n("action/list", !0)
                  }
                ))
            },
            resetProcedureAction: function(e) {
              e.state,
                e.commit;
              var n = e.dispatch
                , t = e.getters
                , r = e.rootGetters
                , a = r["dev/flow/flow"]
                , i = a && a._id
                , o = t["procedure/active"];
              if (i && o)
                return h.resetProcedureAction(i, o).then((function(e) {
                    n("action/list", !0)
                  }
                ))
            },
            updateProcedureAction: function(e, n) {
              e.state,
                e.commit;
              var t = e.dispatch
                , a = e.getters
                , i = e.rootGetters
                , o = n.key
                , c = n.value
                , l = i["dev/flow/flow"]
                , s = l && l._id
                , u = a["procedure/active"]
                , d = Object(r["a"])({}, o, c);
              if (s && u)
                return h.updateProcedureAction(s, u, d).then((function(e) {
                    t("action/list", !0)
                  }
                ))
            },
            addProcedureAction: function(e) {
              e.state,
                e.commit;
              var n = e.dispatch
                , t = e.getters
                , r = e.rootGetters
                , a = r["dev/flow/flow"]
                , i = a && a._id
                , o = t["procedure/active"];
              if (i && o)
                return h.addProcedureAction(i, o).then((function(e) {
                    n("action/list", !0)
                  }
                ))
            },
            sortProcedureAction: function(e, n) {
              e.state,
                e.commit;
              var t = e.dispatch
                , r = e.getters
                , a = e.rootGetters
                , i = a["dev/flow/flow"]
                , o = i && i._id
                , c = r["procedure/active"];
              if (o && c)
                return h.sortProcedureAction(o, c, n).then((function(e) {
                    t("action/list", !0)
                  }
                ))
            },
            linkProcedure: function(e, n) {
              e.state,
                e.commit;
              var t = e.dispatch
                , r = e.rootGetters
                , a = n.start
                , i = n.end
                , o = r["dev/flow/flow"]
                , c = o && o._id;
              if (c && a && i)
                return h.updateProcedureNext(c, a, i).then((function(e) {
                    t("listProcedure")
                  }
                ))
            }
          }
        },
        map: {
          namespaced: !0,
          getters: {
            handle: function(e, n) {
              var t = {
                new: "新增",
                get: "获取",
                select: "选择",
                follow: "关联获取",
                delete: "删除",
                import: "导入",
                table: "列表",
                object: "对象",
                web: "网页",
                variable: "变量",
                array: "列表",
                entity: "数据",
                collection: "集合",
                input: "输入",
                notice: "提示",
                confirm: "确认",
                choice: "选择",
                whether: "判断",
                weixin_notify: "微信通知",
                email_notify: "邮件通知",
                api_function: "自定义api",
                print_default: "默认模板"
              };
              return t
            },
            getHandle: function(e, n) {
              return function(e) {
                var t = n.handle;
                return t[e]
              }
            },
            type: function(e, n) {
              var t = {
                entity: "数据",
                collection: "集合",
                variable: "变量",
                display: "显示",
                input: "交互",
                code: "编程",
                condition: "条件",
                api: "API",
                print: "打印",
                start: "开始",
                end: "结束"
              };
              return t
            },
            getType: function(e, n) {
              return function(e) {
                var t = n.type;
                return t[e]
              }
            },
            getEntity: function(e, n, t, r) {
              return function(e) {
                var n = r["system/project/getEntity"](e);
                return n && n._name
              }
            },
            getActionSystemType: function(e, n) {
              return function(e) {
                var n = e._type;
                return !!["$from", "$value", "$relate", "$condition", "$code"].includes(n) || (!e || !n)
              }
            },
            actionHandle: function() {
              var e = {
                none: "无",
                input: "填写",
                target: "设为"
              };
              return e
            },
            getActionHandle: function(e, n) {
              return function(e) {
                var t = n.actionHandle
                  , r = e._handle;
                return t[r]
              }
            },
            template: function(e, n, t, r) {
              var a = r["dev/api/list"];
              a = a.filter((function(e) {
                  return "function" == e._type
                }
              ));
              for (var i = {}, o = 0; o < a.length; o++) {
                var c = a[o];
                i[c._id] = c._name
              }
              var l = {
                weixin_notify: {
                  "r6_b-RlMljeniRPF8hWx1N4_qkIax1zxzSVlLiiXE4U": "工单任务通知",
                  "0qZIytyvoQRH7_9YMuX1QLUoeAa5lE5IvD7hx8Jw4NM": "等待审核通知",
                  QI0RIc0tGT24HbA8c686fQrbugMX0w3CUEC4V4ia1ew: "工作任务提醒",
                  "fdh0jeKd-nhN8U11FyBKXEL9-iFW6DSM3YS4ZrEHhKk": "审核通过提醒",
                  q3NJOtD5SMc03IuIDipxFyA9BQ0QkSk3U5kZRlVhqAM: "协作任务通知",
                  "s3BcAPZwkaLguzNVz_RWi9MMLMNRqMdC4-Hs5CJ_Ldg": "库存不足通知",
                  "cwB6X4cjhqXC8_lMC-jZJJFx8dXObXvjL5iQujjRkAY": "统计结果通知",
                  "JtgZjTFDl_1oJ3lkVG3fFOt-cV11xk-XVXp2praV2yQ": "案件处理进度提醒",
                  "-TyZZNCq-NXuqH53EzDeuYCZppsfPnjGDF_d4SS8ZJg": "工作进度通知",
                  xnGEgD3suKMPG3Xy8ciEgkvWM6oooShZIQNFgLrx8Q4: "工作进展提醒",
                  SRDifF4fdmgMPQfUPUlbmC7jtktEZcvV1oeQ5L2XEPI: "工作单进度提醒"
                },
                print_default: {
                  a4: "A4纸打印"
                },
                api_function: i
              };
              return l
            },
            getTemplate: function(e, n) {
              return function(e) {
                var t = n.template;
                return t[e] || {}
              }
            }
          }
        },
        dataset: {
          namespaced: !0,
          getters: {
            handleMap: function(e, n, t, r) {
              var a = r["dev/flow/map/handle"]
                , i = r["dev/flow/procedure/type"];
              function o(e) {
                for (var n = {}, t = 0; t < e.length; t++) {
                  var r = e[t];
                  n[r] = a[r]
                }
                return n
              }
              switch (i) {
                case "collection":
                  return o(["get", "follow"]);
                case "entity":
                  return o(["get"]);
                case "display":
                  return o(["table", "object"]);
                default:
                  return {}
              }
            },
            actionHandleMap: function(e, n, t, r) {
              var a = "设为"
                , i = {
                entity: {
                  follow: {},
                  get: {
                    target: a
                  }
                },
                collection: {
                  follow: {},
                  get: {
                    target: a
                  }
                },
                display: {
                  default: {
                    target: a
                  }
                }
              };
              return i
            },
            table: function(e, n, t, r) {
              var a = r["dev/flow/procedure"]
                , i = a.find((function(e) {
                  return "start" == e._type
                }
              ))
                , o = void 0;
              if (i) {
                var c = i
                  , l = c._next[0];
                while (l) {
                  var s = r["dev/flow/getProcedureById"](l);
                  if (s && "display" == s._type) {
                    var u = r["dev/flow/getAction"]({
                      _procedure: s._id,
                      _type: "$relate"
                    })[0];
                    o = u && "target" == u._handle && u._value._value && u._value._value[0] && u._value._value[0]._value && u._value._value[0]._value[0];
                    break
                  }
                  l = s._next[0]
                }
              }
              return o
            }
          }
        },
        program: {
          namespaced: !0,
          getters: {
            handleMap: function(e, n, t, r) {
              var a = r["dev/flow/map/handle"]
                , i = r["dev/flow/procedure/type"];
              function o(e) {
                for (var n = {}, t = 0; t < e.length; t++) {
                  var r = e[t];
                  n[r] = a[r]
                }
                return n
              }
              switch (i) {
                case "entity":
                  return o(["new", "get", "select", "follow", "delete"]);
                case "collection":
                  return o(["new", "get", "select", "follow", "import", "delete"]);
                case "display":
                  return o(["table", "component", "web"]);
                case "variable":
                  return o(["variable", "array", "entity", "collection"]);
                case "input":
                  return o(["notice", "confirm", "input", "import"]);
                case "condition":
                  return o(["whether"]);
                case "api":
                  return o(["api_function", "weixin_notify"]);
                case "print":
                  return o(["print_default"]);
                default:
                  return {}
              }
            },
            actionHandleMap: function(e, n, t, r) {
              var a = "填写"
                , i = "设为"
                , o = {
                entity: {
                  new: {
                    input: a,
                    target: i
                  },
                  follow: {
                    input: a,
                    target: i
                  },
                  select: {
                    target: i
                  },
                  get: {
                    target: i
                  }
                },
                collection: {
                  new: {
                    input: a,
                    target: i
                  },
                  follow: {
                    input: a,
                    target: i
                  },
                  select: {
                    target: i
                  },
                  get: {
                    target: i
                  },
                  import: {
                    input: a
                  }
                },
                api: {
                  default: {
                    target: i
                  }
                },
                input: {
                  notice: {
                    target: i
                  },
                  input: {
                    input: a,
                    target: i
                  },
                  import: {
                    input: a
                  },
                  default: {
                    target: i
                  }
                },
                condition: {
                  default: {
                    target: i
                  }
                },
                code: {
                  default: {
                    target: i
                  }
                },
                print: {
                  default: {
                    target: i
                  }
                }
              };
              return o
            }
          }
        },
        tree: {
          namespaced: !0,
          getters: {
            action: function(e, n, t, r) {
              var a = r["dev/flow/action/list"];
              return a = a.filter((function(e) {
                  return !e._type.startsWith("$")
                }
              )),
                a
            },
            relateAction: function(e, n, t, r) {
              var a = r["dev/flow/action/list"];
              return a = a.filter((function(e) {
                  return "$relate" == e._type
                }
              )),
                a
            },
            fieldAction: function(e, n, t, r) {
              var a = r["dev/flow/getAction"]({
                _type: "$field"
              });
              return a
            },
            selfField: function(e, n, t, r) {
              return function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "string", a = [], i = r["dev/flow/getProcedureById"](e), o = n.action, c = {
                  value: i._id,
                  label: "= ".concat(i._name)
                }, l = o.filter((function(e) {
                    return e._procedure == i._id && !["collection"].includes(e._type) && !e._type.startsWith("$")
                  }
                )), s = r["system/project/getField"], u = [], d = 0; d < l.length; d++) {
                  var p = l[d];
                  if ("relate" == p._type) {
                    var m = {
                      value: p._field,
                      label: "* ".concat(p._name),
                      children: []
                    }
                      , f = p._relate[0]
                      , v = s(f);
                    v = v.filter((function(e) {
                        return !["relate", "collection"].includes(e._type)
                      }
                    )),
                    "string" != t && (v = v.filter((function(e) {
                        return e._type == t
                      }
                    ))),
                      m.children = v.map((function(e) {
                          return {
                            value: e._field,
                            label: "".concat(e._name)
                          }
                        }
                      )),
                    m.children.length > 0 && u.push(m)
                  } else {
                    if ("string" != t && p._type != t)
                      continue;
                    var h = {
                      value: p._field,
                      label: "".concat(p._name)
                    };
                    u.push(h)
                  }
                }
                return c.children = u,
                u.length > 0 && a.push(c),
                  a
              }
            },
            selfFieldEntity: function(e, n, t, r) {
              return function(e, t) {
                for (var a = [], i = r["dev/flow/getProcedureById"](e), o = n.action, c = {
                  value: i._id,
                  label: "= ".concat(i._name)
                }, l = o.filter((function(e) {
                    return e._procedure == i._id && ["relate"].includes(e._type)
                  }
                )), s = r["system/project/getField"], u = [], d = 0; d < l.length; d++) {
                  var p = l[d]
                    , m = p._relate[0];
                  if (m)
                    if (m == t) {
                      var f = {
                        value: p._field,
                        label: "* ".concat(p._name)
                      };
                      u.push(f)
                    } else {
                      var v = {
                        value: p._field,
                        label: "* ".concat(p._name)
                      }
                        , h = s(m);
                      h = h.filter((function(e) {
                          return ["relate"].includes(e._type) && e._relate[0] == t
                        }
                      )),
                      h.length > 0 && (h = h.map((function(e) {
                          return {
                            value: e._field,
                            label: "* ".concat(e._name)
                          }
                        }
                      )),
                        v.children = h,
                        u.push(v))
                    }
                }
                return c.children = u,
                u.length > 0 && a.push(c),
                  a
              }
            },
            fieldEntity: function(e, n, t, r) {
              return function(e, t) {
                var a = []
                  , i = r["dev/flow/getEntityProcedure"]()
                  , o = e;
                i = i.filter((function(e) {
                    return e._id != o
                  }
                ));
                for (var c = n.action, l = function(e) {
                  for (var n = i[e], r = {
                    value: n._id,
                    label: "* ".concat(n._name)
                  }, o = c.filter((function(e) {
                      return e._procedure == n._id && ["relate"].includes(e._type) && e._relate[0] == t
                    }
                  )), l = [], s = 0; s < o.length; s++) {
                    var u = o[s]
                      , d = {
                      value: u._field,
                      label: "* ".concat(u._name)
                    };
                    l.push(d)
                  }
                  r.children = l,
                  l.length > 0 && a.push(r)
                }, s = 0; s < i.length; s++)
                  l(s);
                return a
              }
            },
            apiFieldOutput: function(e, n, t, r) {
              return function(e) {
                var t = []
                  , a = r["dev/flow/getProcedure"]({
                  _type: "api",
                  _handle: "api_function"
                })
                  , i = e;
                a = a.filter((function(e) {
                    return e._id != i
                  }
                ));
                for (var o = n.fieldAction, c = function(e) {
                  for (var n = a[e], r = {
                    value: n._id,
                    label: ": ".concat(n._name)
                  }, i = o.filter((function(e) {
                      return e._procedure == n._id && e._field.startsWith("output_")
                    }
                  )), c = [], l = 0; l < i.length; l++) {
                    var s = i[l]
                      , u = {
                      value: s._field,
                      label: "".concat(s._name)
                    };
                    c.push(u)
                  }
                  r.children = c,
                  c.length > 0 && t.push(r)
                }, l = 0; l < a.length; l++)
                  c(l);
                return t
              }
            },
            relate: function(e, n, t, r) {
              return function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$relate"
                  , r = []
                  , a = n.relateAction
                  , i = a.find((function(n) {
                    return n._procedure == e && n._field == t
                  }
                ));
                if (i) {
                  var o = i && i._value && "target" == i._value._type && i._value._value[0]
                    , c = o && "target" == o._type && o._value[0];
                  if (c) {
                    var l = v.a.cloneDeep(n["selfField"](c));
                    l[0] && (l[0].label = l[0].label.replace("=", "$")),
                      r.push.apply(r, Object(m["a"])(l))
                  }
                }
                return r
              }
            },
            field: function(e, n, t, r) {
              return function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , a = []
                  , i = r["dev/flow/getEntityProcedure"]()
                  , o = e;
                i = i.filter((function(e) {
                    return e._id != o
                  }
                ));
                var c = n.action;
                v.a.isEmpty(t) || (c = v.a.filter(c, t));
                for (var l = function(e) {
                  for (var n = i[e], t = {
                    value: n._id,
                    label: "* ".concat(n._name)
                  }, r = c.filter((function(e) {
                      return e._procedure == n._id && !["relate", "collection"].includes(e._type)
                    }
                  )), o = [], l = 0; l < r.length; l++) {
                    var s = r[l]
                      , u = {
                      value: s._field,
                      label: "".concat(s._name)
                    };
                    o.push(u)
                  }
                  t.children = o,
                  o.length > 0 && a.push(t)
                }, s = 0; s < i.length; s++)
                  l(s);
                return a
              }
            },
            input: function(e, n, t, r) {
              return function(e) {
                var t = []
                  , a = r["dev/flow/getProcedure"]({
                  _handle: "input",
                  _type: "input"
                });
                a = a.filter((function(n) {
                    return n._id != e
                  }
                ));
                for (var i = n.fieldAction, o = function(e) {
                  for (var n = a[e], r = {
                    value: n._id,
                    label: "> ".concat(n._name)
                  }, o = i.filter((function(e) {
                      return e._procedure == n._id
                    }
                  )), c = [], l = 0; l < o.length; l++) {
                    var s = o[l]
                      , u = s._option && s._option._alias || s._name
                      , d = {
                      value: s._field,
                      label: u
                    };
                    c.push(d)
                  }
                  r.children = c,
                  c.length > 0 && t.push(r)
                }, c = 0; c < a.length; c++)
                  o(c);
                return t
              }
            },
            collection: function(e, n, t, r) {
              return function(e, n) {
                var t = []
                  , a = r["dev/flow/getCollectionProcedure"](n);
                a = a.filter((function(n) {
                    return n._id != e
                  }
                ));
                for (var i = 0; i < a.length; i++) {
                  var o = a[i]
                    , c = {
                    value: o._id,
                    label: "# ".concat(o._name)
                  };
                  t.push(c)
                }
                return t
              }
            }
          }
        },
        procedure: {
          namespaced: !0,
          state: {
            active: void 0,
            list: []
          },
          mutations: {
            setActive: function(e, n) {
              e.active = n
            },
            setList: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              e.list = n
            }
          },
          actions: {
            setActive: function(e, n) {
              var t = e.commit;
              t("setActive", n)
            },
            setList: function(e, n) {
              var t = e.commit;
              t("setList", n)
            },
            reset: function(e) {
              var n = e.commit;
              n("setActive"),
                n("setList")
            }
          },
          getters: {
            active: function(e, n) {
              return e.active
            },
            list: function(e, n) {
              return e.list
            },
            action: function(e, n, t, r) {
              var a = r["dev/flow/action/list"]
                , i = n.active;
              return a = a.filter((function(e) {
                  return e._procedure == i
                }
              )),
                a
            },
            procedure: function(e, n, t, r) {
              var a = n.list
                , i = n.active
                , o = a.find((function(e) {
                  return e._id == i
                }
              ));
              return o
            },
            type: function(e, n) {
              var t = n.procedure;
              return t && t._type
            },
            handle: function(e, n) {
              var t = n.procedure;
              return t && t._handle
            },
            entity: function(e, n) {
              var t = n.procedure;
              return t && t._entity
            },
            template: function(e, n) {
              var t = n.procedure;
              return t && t._template
            },
            formatName: function(e, n) {
              return function(e) {
                var n = e._type
                  , t = e._name
                  , r = {
                  collection: "#",
                  entity: "*",
                  input: ">"
                }
                  , a = r[n] || "";
                return "".concat(a, " ").concat(t)
              }
            }
          }
        },
        action: {
          namespaced: !0,
          state: {
            active: void 0,
            list: [],
            cache: {},
            loader: {}
          },
          mutations: {
            setActive: function(e, n) {
              e.active = n
            },
            setList: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              e.list = n
            },
            setCache: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              e.cache = n
            },
            setLoader: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              e.loader = n
            }
          },
          actions: {
            setActive: function(e, n) {
              var t = e.commit;
              t("setActive", n)
            },
            setList: function(e, n) {
              var t = e.commit
                , r = e.getters
                , a = e.dispatch;
              t("setList", n);
              var i = r.cache;
              v.a.isEmpty(i) && a("resetCache")
            },
            resetCache: function(e) {
              var n = e.commit
                , t = e.getters
                , r = v.a.cloneDeep(t.map);
              n("setCache", r)
            },
            reset: function(e) {
              var n = e.commit
                , t = e.dispatch;
              t("setActive"),
                t("setList"),
                n("setCache"),
                n("setLoader")
            },
            list: function(e, n) {
              e.state,
                e.commit;
              var t = e.dispatch
                , r = (e.rootGetters,
                e.getters)
                , a = r.flowId;
              a && h.listAction(a).then((function(e) {
                  t("setList", e.data),
                  n && t("resetCache")
                }
              ))
            },
            remove: function(e, n) {
              e.state,
                e.commit;
              var t = e.dispatch
                , r = e.getters
                , a = r.flowId;
              if (a && n)
                return h.removeAction(a, n).then((function(e) {
                    t("list", !0)
                  }
                ))
            },
            update: function(e, n) {
              e.state;
              var t = e.commit
                , r = e.dispatch
                , a = e.getters
                , i = n.id
                , o = n.key
                , c = n.value
                , l = a.flowId;
              if (l && i) {
                var s = a.cache
                  , u = s[i];
                u[o] = c,
                  s[i] = v.a.cloneDeep(u),
                  t("setCache", s);
                var d = a.loader;
                d[i] || (d[i] = v.a.debounce((function(e, n) {
                    var t = a.map
                      , i = t[n]
                      , o = a.cache
                      , c = o[n];
                    v.a.isEqual(i, c) || h.updateAction(e, n, c).then((function(e) {
                        r("list")
                      }
                    ))
                  }
                ), 1e3),
                  t("setLoader", d)),
                  d[i](l, i)
              }
            }
          },
          getters: {
            flowId: function(e, n, t, r) {
              var a = r["dev/flow/flow"]
                , i = a && a._id;
              return i
            },
            active: function(e, n) {
              return e.active
            },
            list: function(e, n) {
              return e.list
            },
            loader: function(e, n) {
              return e.loader
            },
            map: function(e, n) {
              for (var t = n.list, r = {}, a = 0; a < t.length; a++) {
                var i = t[a]
                  , o = i._id;
                r[o] = i
              }
              return r
            },
            cache: function(e, n) {
              return e.cache
            },
            raw: function(e, n) {
              var t = n.map
                , r = n.active
                , a = t[r] || {};
              return a
            },
            action: function(e, n) {
              var t = n.cache
                , r = n.active
                , a = t[r] || {};
              return a
            },
            formatName: function(e, n) {
              return function(e) {
                var n = e._name
                  , t = e._type;
                "collection" == e._type ? n = "# ".concat(n) : "relate" == e._type ? n = "* ".concat(n) : ["$from", "$value", "$relate", "$condition", "$code"].includes(t) && (n = "$ ".concat(n));
                var r = e._option && e._option._alias;
                return r && (n = "".concat(n, "(").concat(r, ")"),
                "$field" == e._type && (n = "- ".concat(r))),
                  n
              }
            }
          },
          modules: {
            variable: {
              namespaced: !0,
              actions: {
                setType: function(e, n) {
                  var t = e.getters
                    , r = e.dispatch
                    , a = t.result
                    , i = t.action;
                  v.a.set(a, "_type", n);
                  var o = i._id;
                  r("dev/flow/action/update", {
                    id: o,
                    key: "_value",
                    value: a
                  }, {
                    root: !0
                  })
                },
                setValue: function(e, n) {
                  var t = e.getters
                    , r = e.dispatch
                    , a = t.result
                    , i = t.action;
                  v.a.set(a, "_value", n);
                  var o = i._id;
                  r("dev/flow/action/update", {
                    id: o,
                    key: "_value",
                    value: a
                  }, {
                    root: !0
                  })
                }
              },
              getters: {
                action: function(e, n, t, r) {
                  var a = r["dev/flow/action/action"];
                  return a
                },
                result: function(e, n) {
                  var t = n.action._id
                    , r = {
                    _id: t,
                    _model: n.model,
                    _type: n.type,
                    _value: n.value
                  };
                  return v.a.cloneDeep(r)
                },
                model: function(e, n, t, r) {
                  var a = n.action
                    , i = "variable"
                    , o = a._type;
                  return "$from" == o ? i = "from" : "$relate" == o ? i = "relate" : "$condition" == o ? i = "condition" : "relate" == o ? i = "entity" : "collection" == o ? i = "collection" : "$code" == o ? i = "code" : "file" == o ? i = "file" : "image" == o ? i = "image" : "html" == o && (i = "html"),
                    i
                },
                type: function(e, n, t, r) {
                  var a = n.action;
                  return v.a.get(a, "_value._type")
                },
                value: function(e, n, t, r) {
                  var a = n.action;
                  return v.a.get(a, "_value._value")
                }
              }
            },
            input: {
              namespaced: !0,
              actions: {
                set: function(e, n) {
                  var t = e.getters
                    , r = e.dispatch
                    , a = n.key
                    , i = n.value
                    , o = t.action
                    , c = o._id
                    , l = v.a.cloneDeep(t.result);
                  v.a.set(l, a, i),
                    r("dev/flow/action/update", {
                      id: c,
                      key: "_value",
                      value: l
                    }, {
                      root: !0
                    })
                }
              },
              getters: {
                action: function(e, n, t, r) {
                  var a = r["dev/flow/action/action"];
                  return a
                },
                result: function(e, n, t, r) {
                  var a = n.action._id
                    , i = {
                    _id: a,
                    _type: n.type,
                    _default: n.default,
                    _selection: n.selection,
                    _query: n.query,
                    _weixin: n.weixin,
                    _validator: n.validator
                  };
                  return i
                },
                type: function(e, n, t, r) {
                  var a = n.action;
                  return v.a.get(a, "_value._type")
                },
                default: function(e, n, t, r) {
                  var a = n.action
                    , i = v.a.get(a, "_value._default");
                  return i
                },
                selection: function(e, n, t, r) {
                  var a = n.action;
                  return v.a.get(a, "_value._selection")
                },
                query: function(e, n, t, r) {
                  var a = n.action;
                  return v.a.get(a, "_value._query")
                },
                weixin: function(e, n, t, r) {
                  var a = n.action;
                  return v.a.get(a, "_value._weixin")
                },
                validator: function(e, n, t, r) {
                  var a = n.action;
                  return v.a.get(a, "_value._validator")
                }
              }
            }
          }
        }
      }
    }
      , y = g
      , b = t("3a79")
      , k = t("e91e")
      , w = {
      namespaced: !0,
      state: {},
      mutations: {},
      actions: {
        init: function(e) {
          e.state,
            e.commit;
          var n = e.dispatch;
          return b.active().then((function(e) {
              return n("platform/getProject", "", {
                root: !0
              })
            }
          ))
        }
      },
      getters: {},
      modules: {
        flow: {
          namespaced: !0,
          actions: {
            create: function(e, n) {
              var t = e.dispatch
                , r = n.name
                , a = n.type
                , i = n.option
                , o = n.module;
              return k.create(r, a, i).then((function(e) {
                  var n = e.data;
                  o && t("system/project/addModuleItem", {
                    module: o,
                    type: "_flow",
                    item: n._id
                  }, {
                    root: !0
                  }),
                    t("system/project/listFlow", "", {
                      root: !0
                    })
                }
              ))
            },
            quickCreate: function(e, n) {
              var t = e.dispatch
                , r = n.name
                , a = n.type
                , i = n.module
                , o = n.entity
                , c = n.template
                , l = n.option
                , s = void 0;
              return t("system/ui/progress/show", "正在创建中...", {
                root: !0
              }),
                k.quickCreate({
                  name: r,
                  type: a,
                  module: i,
                  entity: o,
                  template: c,
                  option: l
                }).then((function(e) {
                    return s = e.data,
                      t("system/project/listFlow", "", {
                        root: !0
                      })
                  }
                )).then((function() {
                    return t("system/project/listModule", "", {
                      root: !0
                    })
                  }
                )).then((function() {
                    return t("system/ui/progress/hide", "", {
                      root: !0
                    }),
                      s
                  }
                ))
            }
          }
        }
      }
    }
      , x = (t("96cf"),
      t("1da1"))
      , O = t("9be6")
      , j = {
      namespaced: !0,
      state: {
        meta: {}
      },
      mutations: {
        meta: function(e, n) {
          e.meta[n.entity] = n
        }
      },
      actions: {
        getMeta: function() {
          var e = Object(x["a"])(regeneratorRuntime.mark((function e(n, t) {
              var r, a, i, o;
              return regeneratorRuntime.wrap((function(e) {
                  while (1)
                    switch (e.prev = e.next) {
                      case 0:
                        if (n.dispatch,
                          r = n.commit,
                          n.rootState,
                          a = n.state,
                          i = a.meta[t],
                          i) {
                          e.next = 8;
                          break
                        }
                        return e.next = 5,
                          O.metaData(t);
                      case 5:
                        o = e.sent,
                          i = o.data,
                          r("meta", i);
                      case 8:
                        return e.abrupt("return", i);
                      case 9:
                      case "end":
                        return e.stop()
                    }
                }
              ), e)
            }
          )));
          function n(n, t) {
            return e.apply(this, arguments)
          }
          return n
        }()
      }
    }
      , P = t("542e")
      , S = {
      namespaced: !0,
      state: {
        program: void 0,
        form: {}
      },
      mutations: {
        setProgram: function(e, n) {
          e.program = n
        }
      },
      actions: {
        debug: function(e, n) {
          e.state,
            e.getters,
            e.dispatch;
          var t = e.commit
            , r = n.flow
            , a = n.version;
          return new Promise((function(e, n) {
              P.debug(r, a).then((function(n) {
                  t("setProgram", n.data),
                    e(n.data)
                }
              ))
            }
          ))
        },
        release: function(e, n) {
          e.state,
            e.getters;
          var t = e.dispatch
            , r = (e.commit,
            n.flow)
            , a = n.version;
          return P.release(r, a).then((function(e) {
              return t("system/project/listFlow", null, {
                root: !0
              }).then((function() {
                  return e.data
                }
              ))
            }
          ))
        },
        block: function(e, n) {
          e.state,
            e.getters;
          var t = e.dispatch;
          e.commit;
          return new Promise((function(e, r) {
              P.block(n).then((function(n) {
                  t("system/project/listFlow", null, {
                    root: !0
                  }),
                    e(n.data)
                }
              ))
            }
          ))
        }
      },
      getters: {
        process: function(e) {
          var n = e.program;
          return n && n._process || []
        }
      }
    }
      , M = (t("20d6"),
      t("5df3"),
      t("542e"))
      , C = {
      namespaced: !0,
      state: {
        active: void 0,
        entity: void 0
      },
      mutations: {
        setActive: function(e, n) {
          e.active = n
        },
        setEntity: function(e, n) {
          e.entity = n
        }
      },
      actions: {
        setActive: function(e, n) {
          var t = e.commit
            , r = e.rootGetters
            , a = e.dispatch;
          if (t("setEntity"),
            t("setActive", n),
            n) {
            var i = r["system/route/getDatasetMap"](n);
            i && a("system/route/active", i, {
              root: !0
            })
          }
        },
        setEntity: function(e, n) {
          var t = e.commit;
          t("setEntity", n)
        },
        createMenu: function(e, n) {
          var r = e.dispatch
            , a = (e.commit,
            e.rootGetters)
            , i = e.getters
            , o = n.name
            , c = n.type
            , l = n.entity
            , s = n.display
            , u = n.dataset
            , d = n.template
            , p = n.route
            , m = function(e) {
            r("system/ui/progress/show", e, {
              root: !0
            })
          }
            , f = "dir" == p._type && p._id || ""
            , v = i.module._id;
          if (o) {
            var h = a["system/auth/user"]
              , g = h.role;
            if ("dir" == c) {
              var y = r("system/route/create", {
                type: c,
                name: o
              }, {
                root: !0
              })
                , b = r("system/project/createModule", {
                name: o
              }, {
                root: !0
              });
              return Promise.all([y, b]).then((function(e) {
                  var n = e[0] && e[0].data
                    , t = n._id;
                  r("system/auth/add", {
                    role: g,
                    route: [t]
                  }, {
                    root: !0
                  })
                }
              ))
            }
            if ("entity" == c) {
              if (!l || "new" == l)
                return m("正在创建数据表..."),
                  r("system/project/createEntity", {
                    name: o,
                    module: v
                  }, {
                    root: !0
                  }).then((function(e) {
                      var n = {
                        entity: e._id,
                        name: o,
                        module: v,
                        type: "dataset",
                        template: "table"
                      };
                      return m("正在创建数据集..."),
                        r("dev/project/flow/quickCreate", n, {
                          root: !0
                        })
                    }
                  )).then((function(e) {
                      var n = e;
                      if (n) {
                        m("正在创建菜单...");
                        var t = r("system/route/create", {
                          type: "table",
                          name: o,
                          value: n,
                          parent: f
                        }, {
                          root: !0
                        }).then((function(e) {
                            var t = e.data
                              , a = t._id;
                            return r("system/auth/add", {
                              role: g,
                              route: [a]
                            }, {
                              root: !0
                            }),
                              m("正在授权菜单..."),
                              r("system/route/active", t, {
                                root: !0
                              }).then((function() {
                                  r("setActive", n)
                                }
                              ))
                          }
                        ));
                        m("正在发布数据集...");
                        var a = r("dev/program/release", {
                          flow: n
                        }, {
                          root: !0
                        });
                        return Promise.all([t, a])
                      }
                    }
                  ));
              if (!u || "new" == u) {
                var k = {
                  entity: l,
                  name: o,
                  module: v,
                  type: "dataset",
                  template: "table"
                };
                return m("正在创建数据集..."),
                  r("dev/project/flow/quickCreate", k, {
                    root: !0
                  }).then((function(e) {
                      var n = e;
                      if (n) {
                        m("正在创建菜单...");
                        var t = r("system/route/create", {
                          type: "table",
                          name: o,
                          value: n,
                          parent: f
                        }, {
                          root: !0
                        }).then((function(e) {
                            m("正在授权菜单...");
                            var t = e.data
                              , a = t._id;
                            return r("system/auth/add", {
                              role: g,
                              route: [a]
                            }, {
                              root: !0
                            }),
                              r("system/route/active", t, {
                                root: !0
                              }).then((function() {
                                  r("setActive", n)
                                }
                              ))
                          }
                        ));
                        m("正在发布数据集...");
                        var a = r("dev/program/release", {
                          flow: n
                        }, {
                          root: !0
                        });
                        return Promise.all([t, a])
                      }
                    }
                  ))
              }
              if (u)
                return m("正在创建菜单..."),
                  r("system/route/create", {
                    type: "table",
                    name: o,
                    value: u,
                    parent: f
                  }, {
                    root: !0
                  }).then((function(e) {
                      var n = e.data
                        , t = n._id;
                      return r("system/auth/add", {
                        role: g,
                        route: [t]
                      }, {
                        root: !0
                      }),
                        m("正在授权菜单..."),
                        r("system/route/active", n, {
                          root: !0
                        }).then((function() {
                            r("setActive", u)
                          }
                        ))
                    }
                  ))
            } else if ("display" == c)
              return s ? (m("正在授权菜单..."),
                r("system/route/create", {
                  type: "display",
                  name: o,
                  value: s,
                  parent: f
                }, {
                  root: !0
                }).then((function(e) {
                    var n = e.data
                      , t = n._id;
                    return r("system/auth/add", {
                      role: g,
                      route: [t]
                    }, {
                      root: !0
                    }),
                      r("system/route/active", n, {
                        root: !0
                      }).then((function() {
                          r("setActive", s)
                        }
                      ))
                  }
                ))) : (m("正在创建自定义页面..."),
                r("dev/display/create", {
                  name: o,
                  template: d
                }, {
                  root: !0
                }).then((function(e) {
                    var n = e.data._id;
                    return m("正在授权菜单..."),
                      r("system/route/create", {
                        type: "display",
                        name: o,
                        value: n,
                        parent: f
                      }, {
                        root: !0
                      }).then((function(e) {
                          var t = e.data
                            , a = t._id;
                          return r("system/auth/add", {
                            role: g,
                            route: [a]
                          }, {
                            root: !0
                          }),
                            r("system/route/active", t, {
                              root: !0
                            }).then((function() {
                                return r("setActive", n),
                                  n
                              }
                            ))
                        }
                      ))
                  }
                )).catch((function(e) {
                    var n = "你的自定义页面数量已达到版本限额,</br>请升级系统提高限额后再试!"
                      , r = t("5b4a").default.vue;
                    r.$$modal.limit(n)
                  }
                )))
          }
        },
        createDataset: function(e, n) {
          var t = e.dispatch
            , r = (e.rootGetters,
            e.getters)
            , a = n.name
            , i = n.alias
            , o = r.entity
            , c = r.module._id;
          if (o && o._id) {
            var l = {
              entity: o._id,
              name: a,
              module: c,
              type: "dataset",
              template: "table",
              option: {
                _alias: i
              }
            };
            t("dev/project/flow/quickCreate", l, {
              root: !0
            }).then((function(e) {
                var n = e;
                n && t("dev/program/release", {
                  flow: n
                }, {
                  root: !0
                })
              }
            ))
          }
        },
        unbindProgram: function(e, n) {
          var t = e.dispatch
            , r = (e.rootGetters,
            e.getters)
            , a = r.route
            , i = a._program || []
            , o = i.findIndex((function(e) {
              return e == n
            }
          ));
          if (o > -1) {
            i.splice(o, 1);
            var c = a._id;
            t("system/route/bind", {
              id: c,
              programs: i
            }, {
              root: !0
            })
          }
        }
      },
      getters: {
        active: function(e) {
          return e.active
        },
        route: function(e, n, t, r) {
          return r["system/route/active"] || {}
        },
        parentRoute: function(e, n, t, r) {
          var a = n.route._parent
            , i = r["system/route/getRoute"](a);
          return i
        },
        entity: function(e, n, t, r) {
          var a = {}
            , i = n.dataset
            , o = e.entity || v.a.get(i, "_release._display._entity");
          return o && (a = r["system/project/getEntity"](o) || {}),
            a
        },
        dataset: function(e, n, t, r) {
          var a = {}
            , i = n.active;
          return i && (a = r["system/project/dataset/get"](i) || {}),
            a
        },
        datasetList: function(e, n, t, r) {
          var a = []
            , i = n.entity._id;
          return i && (a = r["system/project/dataset/getList"](i)),
            a
        },
        programList: function(e, n, t, r) {
          var a = n.route
            , i = a._program || [];
          return n.activeRoute ? r["system/project/program/getList"](i) : []
        },
        module: function(e, n, t, r) {
          var a = n.route
            , i = {}
            , o = r["system/project/module"];
          if ("table" == a._type) {
            var c = n.parentRoute
              , l = c._name;
            l && (i = o.find((function(e) {
                return e._name == l
              }
            )) || {})
          } else if ("dir" == a._type) {
            var s = a._name;
            s && (i = o.find((function(e) {
                return e._name == s
              }
            )) || {})
          }
          return i
        },
        activeEntity: function(e, n, t, r) {
          return e.entity
        },
        activeRoute: function(e, n, t, r) {
          var a = n.route;
          if ("table" == a._type)
            return a._value == n.active
        }
      },
      modules: {
        table: {
          namespaced: !0,
          state: {
            dataset: void 0,
            meta: {},
            table: void 0
          },
          mutations: {
            setDataset: function(e, n) {
              e.dataset = n
            },
            setMeta: function(e, n) {
              e.meta = n
            },
            setTable: function(e, n) {
              e.table = n
            }
          },
          actions: {
            setDataset: function(e, n) {
              var t = e.commit;
              t("setDataset", n)
            },
            setMeta: function(e, n) {
              var t = e.commit;
              t("setMeta", n)
            },
            show: function(e) {
              var n = e.dispatch
                , t = e.rootGetters
                , r = (e.commit,
                t["dev/quick/dataset"])
                , a = r._id
                , i = r._v;
              Object(M["debug"])(a, i).then((function(e) {
                  n("setDataset", e.data._id),
                    n("setMeta", e.data.meta)
                }
              ))
            },
            init: function(e, n) {
              e.dispatch,
                e.rootGetters;
              var t = e.commit;
              t("setTable", n)
            },
            refresh: function(e) {
              var n = e.getters
                , t = n.table;
              t && t.refresh()
            }
          },
          getters: {
            dataset: function(e, n) {
              return e.dataset
            },
            meta: function(e, n) {
              return e.meta
            },
            table: function(e, n) {
              return e.table
            },
            getSelected: function(e, n) {
              return function() {
                var e = n.table
                  , t = e && e.$refs.table && e.$refs.table.tableStore;
                if (t)
                  return t.getters["selection"][0]
              }
            }
          }
        },
        display: {
          namespaced: !0,
          state: {
            display: "",
            store: void 0
          },
          actions: {
            setStore: function(e, n) {
              var t = e.commit;
              t("setStore", n)
            },
            setDisplay: function(e, n) {
              var t = e.commit;
              t("setDisplay", n)
            },
            reset: function(e) {
              var n = e.commit;
              n("setStore"),
                n("setDisplay")
            }
          },
          mutations: {
            setStore: function(e, n) {
              e.store = n
            },
            setDisplay: function(e, n) {
              e.display = n
            }
          },
          getters: {
            store: function(e, n) {
              return e.store
            },
            display: function(e, n) {
              return e.display
            }
          }
        }
      }
    }
      , D = t("0370")
      , E = {
      namespaced: !0,
      state: {
        init: !1,
        completionItemProvider: void 0,
        hoverProvider: void 0
      },
      mutations: {
        init: function(e) {
          e.init = !0
        },
        setHoverProvider: function(e, n) {
          e.hoverProvider = n
        },
        setCompletionItemProvider: function(e, n) {
          e.completionItemProvider = n
        }
      },
      actions: {
        init: function(e) {
          e.state;
          var n = e.commit;
          n("init")
        },
        setup: function(e, n) {
          e.state;
          var t = e.commit
            , r = n.completionItemProvider
            , a = n.hoverProvider;
          t("setHoverProvider", a),
            t("setCompletionItemProvider", r)
        }
      },
      getters: {
        init: function(e) {
          return e.init
        },
        completionItemProvider: function(e) {
          return e.completionItemProvider
        },
        hoverProvider: function(e) {
          return e.hoverProvider
        }
      }
    }
      , A = {
      namespaced: !0,
      state: {},
      mutations: {},
      getters: {},
      actions: {},
      modules: {
        display: p,
        flow: y,
        data: j,
        program: S,
        "code-editor": E,
        quick: C,
        api: D["a"],
        project: w
      }
    }
      , I = function(e) {
      e.registerModule("dev", A)
    }
  },
  aefb: function(e, n, t) {
    "use strict";
    var r = {
      version: 1,
      mixin: function(e, n, t, a) {
        var i = a.desc
          , o = a.group
          , c = a.config;
        r[e] = {
          type: "webhook",
          key: e,
          name: n,
          desc: i,
          url: t,
          group: o,
          config: c
        }
      }
    };
    r.mixin("common", "白码基础webhook", "/api/libs/common/webhook.js", {
      desc: "白码基础webhook",
      group: ["common"],
      config: {}
    }),
      r.mixin("dingtalk", "钉钉API回调", "/api/libs/dingtalk/webhook.js", {
        desc: "功能说明:钉钉回调接口",
        group: ["dingtalk"],
        config: {
          corpid: {
            key: "corpid",
            value: "",
            description: "企业id",
            remark: "",
            required: !0
          },
          appkey: {
            key: "appkey",
            value: "",
            description: "应用 AppKey",
            remark: "",
            required: !0
          },
          appsecret: {
            key: "appsecret",
            value: "",
            description: "应用 AppSecret",
            remark: "",
            required: !0
          },
          aesKey: {
            key: "aesKey",
            value: "",
            description: "加密的AES KEY",
            remark: "",
            required: !0
          },
          token: {
            key: "token",
            value: "",
            description: "消息token",
            remark: "",
            required: !0
          }
        }
      }),
      r.mixin("wxwork", "企业微信API回调", "/api/libs/wxwork/webhook.js", {
        desc: "功能说明:企业微信回调接口",
        group: ["wxwork"],
        config: {
          corpid: {
            key: "corpid",
            value: "",
            description: "企业id",
            remark: "",
            required: !0
          },
          corpsecret: {
            key: "corpsecret",
            value: "",
            description: "应用的凭证密钥",
            remark: "",
            required: !0
          },
          aesKey: {
            key: "aesKey",
            value: "",
            description: "加密的AES KEY",
            remark: "",
            required: !0
          },
          token: {
            key: "token",
            value: "",
            description: "消息token",
            remark: "",
            required: !0
          }
        }
      }),
      r.mixin("weixinpay", "微信支付API回调", "/api/libs/weixinpay/webhook.js", {
        desc: "功能说明:微信支付API回调",
        group: ["wechat"],
        config: {
          appid: {
            key: "appid",
            value: "",
            description: "appid",
            remark: "",
            required: !0
          },
          mchid: {
            key: "mchid",
            value: "",
            description: "商户平台id",
            remark: "",
            required: !0
          },
          partnerKey: {
            key: "partnerKey",
            value: "",
            description: "微信商户平台API密钥",
            remark: "",
            required: !0
          },
          pfx: {
            key: "pfx",
            value: "",
            description: "微信商户平台证书",
            remark: ""
          }
        }
      }),
      n["a"] = r
  },
  b10a: function(e, n, t) {
    "use strict";
    t.r(n);
    t("bf2d"),
      t("bd27"),
      t("9e5e"),
      t("5272"),
      t("cee2");
    var r = t("4cb1")
      , a = t("8fa6")
      , i = t("98e7")
      , o = t("a169")
      , c = t("7e7f")
      , l = t.n(c)
      , s = t("3328");
    r["default"].use(a["a"]);
    var u = new a["a"]({
      routes: i["a"],
      mode: "history"
    })
      , d = "login";
    u.beforeEach((function(e, n, t) {
        var r = e.fullPath;
        if (r.startsWith("/dev"))
          t();
        else {
          var a = o["default"].getters["custom/active"];
          if (a) {
            if (!r.startsWith("/".concat(a))) {
              var i = "/".concat(a).concat(r);
              return void t(i)
            }
          } else {
            var c = Object(s["isCustom"])();
            if (c)
              return void o["default"].dispatch("custom/init", c).then((function() {
                  t()
                }
              ))
          }
          t()
        }
      }
    )),
      u.beforeEach((function(e, n, t) {
          if ("/reset" == e.path && localStorage.clear(),
            e.path.endsWith("/logout"))
            o["default"].dispatch("user/logout");
          else {
            l.a.LoadingBar.start(),
            window.windowProxy && window.windowProxy.post({
              action: "loadPage",
              data: e.path
            });
            var r = o["default"].getters["user/token"]
              , a = o["default"].getters["user/isLimit"]
              , i = o["default"].getters["platform/queue/getAccess"]();
            if (r || e.path.startsWith("/login") || e.name && e.name.startsWith("login"))
              if (e.path.startsWith("/login") || e.name && e.name.startsWith("login"))
                t();
              else if (e.path.startsWith("/dev") && a) {
                if ("/no-authority" == n.path)
                  return void l.a.LoadingBar.finish();
                t("/no-authority")
              } else if (e.path.startsWith("/dev") && i.num && i.num > 0) {
                if (["/dev/preview"].includes(e.path))
                  return void t();
                if ("/dev/queue" == n.path)
                  return void l.a.LoadingBar.finish();
                ["/dev/queue"].includes(e.path) ? t() : t("/dev/queue")
              } else
                o["default"].state.user.hasGetInfo ? t() : o["default"].dispatch("user/getUserInfo").then((function(e) {
                    t()
                  }
                )).catch((function() {
                    o["default"].commit("user/setToken", !1),
                      t({
                        name: d
                      })
                  }
                ));
            else
              t({
                name: d
              })
          }
        }
      )),
      u.afterEach((function(e) {
          o["default"].dispatch("track/track", {
            type: "页面跳转",
            action: "" + e.name,
            value: e.fullPath
          }),
            o["default"].dispatch("track/page", e.fullPath),
            l.a.LoadingBar.finish(),
            window.scrollTo(0, 0),
            o["default"].commit("modal/reset")
        }
      )),
      n["default"] = u
  },
  b36b: function(e, n, t) {
    "use strict";
    t.r(n);
    t("cadf"),
      t("551c"),
      t("f751"),
      t("097d");
    var r = t("98e7")
      , a = t("2536")
      , i = t.n(a)
      , o = [{
      _name: "首页",
      _id: "dev-home",
      type: "dev-home",
      route: "home",
      meta: {
        menu: "home"
      }
    }, {
      _name: "快速开发",
      _id: "dev-quick",
      type: "dev-quick",
      route: "quick",
      meta: {
        menu: "quick"
      }
    }, {
      _name: "数据库",
      _id: "dev-data-list",
      type: "dev-data-list",
      route: "data",
      meta: {
        menu: "data"
      }
    }, {
      _name: "功能流程",
      _id: "dev-flow-list",
      type: "dev-flow-list",
      route: "flow",
      meta: {
        menu: "flow"
      }
    }, {
      _name: "自定义页面",
      _id: "dev-display-list",
      type: "dev-display-list",
      route: "display",
      meta: {
        menu: "display"
      }
    }, {
      _name: "系统设置",
      _id: "dev-system",
      type: "dev-system",
      route: "project",
      _children: [{
        _name: "菜单管理",
        _id: "system-menu-list",
        type: "system-menu-list",
        route: "menu",
        meta: {
          menu: "menu"
        }
      }, {
        _name: "权限管理",
        _id: "system-auth-list",
        type: "system-auth-list",
        route: "auth",
        meta: {
          menu: "auth"
        }
      }, {
        _name: "用户管理",
        _id: "system-user-list",
        type: "system-user-list",
        route: "user",
        meta: {
          menu: "user"
        }
      }, {
        _name: "定时任务",
        _id: "system-schedule-list",
        type: "system-schedule-list",
        route: "schedule",
        meta: {
          menu: "schedule"
        }
      }, {
        _name: "数据表高级配置",
        _id: "system-config-list",
        type: "system-config-list",
        route: "config",
        meta: {
          menu: "config"
        }
      }, {
        _name: "系统使用情况",
        _id: "system-project-list",
        type: "system-project-list",
        route: "project",
        meta: {
          menu: "project"
        }
      }]
    }, {
      _name: "API对接",
      _id: "dev-api-list",
      type: "dev-api-list",
      route: "api",
      meta: {
        menu: "api"
      }
    }, {
      _name: "系统集成",
      _id: "dev-system-list",
      type: "dev-system-list",
      route: "system",
      meta: {
        menu: "system"
      }
    }, {
      _name: "私有化部署",
      _id: "dev-private",
      type: "dev-private",
      route: "private",
      meta: {
        menu: "private"
      }
    }, {
      _name: "logo设置",
      _id: "dev-logo-list",
      type: "dev-logo-list",
      route: "logo",
      meta: {
        menu: "logo"
      }
    }, {
      _name: "使用系统",
      _id: "dev-preview",
      type: "dev-preview",
      route: "preview",
      meta: {
        menu: "preview"
      }
    }]
      , c = o;
    t("20b8").init(r["a"]),
      t("2440");
    var l = function() {
      var e = t("5b4a").default
        , n = e.store
        , r = e.vue
        , a = e.Vue;
      a.use(i.a);
      var o = t("ae50").init;
      o(n),
        n.dispatch("route/setDev", c),
        n.dispatch("view/hide", "draft"),
        n.dispatch("view/hide", "recent"),
        n.dispatch("platform/initPlatform"),
        r.$watch("$$project", (function(e) {
            e && e._id && n.dispatch("system/project/getProject")
          }
        )),
        n.dispatch("track/start");
      var l = a.extend(t("bdbe").default)
        , s = (new l).$mount();
      document.getElementById("app").appendChild(s.$el)
    };
    l()
  },
  b7d7: function(e, n, t) {
    "use strict";
    t.r(n);
    t("29d3"),
      t("63a5");
    var r = t("53ca")
      , a = t("ade3")
      , i = (t("8fd6"),
      t("901c"),
      t("4cb1"));
    function o(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function c(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? o(Object(t), !0).forEach((function(n) {
            Object(a["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var l = {}
      , s = {
      template: '\n                <div class="bm-dropdown-content" ref="Bmdropdown" :style="{left:pageX  + \'px\', top: pageY + \'px\' ,position:\'fixed\', \'z-index\': zIndex}">\n                  <Dropdown v-if="containerState" :placement="placement" trigger="custom" :visible="visible" style="vertical-align: top;">\n                  <DropdownMenu slot="list" >\n                        <div ref="container" ></div>\n                    </DropdownMenu>\n                  </Dropdown>\n                </div>\n                ',
      data: function() {
        return {
          visible: !1,
          resolve: "",
          reject: "",
          promise: "",
          pageX: 0,
          pageY: 0,
          containerState: !1
        }
      },
      props: {
        event: {
          type: Array,
          default: function() {
            return []
          }
        },
        title: {
          type: String,
          default: ""
        },
        content: {
          type: Object,
          default: function() {
            return {}
          }
        },
        Dvalue: {
          type: Object,
          default: function() {
            return {}
          }
        },
        placement: {
          type: String,
          default: function() {
            return "bottom-start"
          }
        },
        targetHide: {
          type: Boolean,
          default: function() {
            return !1
          }
        },
        zIndex: {
          type: Number,
          default: 1111
        },
        props: {
          type: Object,
          default: function() {
            return {}
          }
        },
        offsetHeight: {
          type: Boolean,
          default: function() {
            return !0
          }
        }
      },
      watch: {
        value: function(e) {
          this.visible = e
        }
      },
      methods: {
        contains: function(e, n) {
          if (e) {
            if (document.documentElement.contains)
              return e !== n && e.contains(n);
            while (n && (n = n.parentNode))
              if (n === e)
                return !0;
            return !1
          }
        },
        findPopTip: function() {
          if (this.$refs.Bmdropdown) {
            var e = this.$refs.Bmdropdown.querySelectorAll(".ivu-poptip-popper")
              , n = !1;
            return e.forEach((function(e) {
                "none" != e.style.display && (n = !0)
              }
            )),
              n
          }
          return !1
        },
        showMsgBox: function(e) {
          var n = this;
          this.visible = !1,
            this.containerState = !1,
            this.placement = "bottom-start";
          var t = this;
          t.event && (t.pageX = t.event.pageX,
            t.offsetHeight ? t.pageY = t.event.pageY + t.event.target.offsetHeight : (t.pageY = t.event.pageY,
              t.offsetHeight = !0)),
          t.Dvalue.X && (t.pageX = t.pageX + t.Dvalue.X),
          t.Dvalue.Y && (t.pageY = t.pageY + t.Dvalue.Y),
            setTimeout((function() {
                n.containerState = !0,
                  setTimeout((function() {
                      n.visible = !0;
                      var e = i["default"].extend(t.content);
                      new e({
                        propsData: c({}, t.props)
                      }).$mount(t.$refs.container);
                      return t.promise = new Promise((function(e, n) {
                          t.resolve = e,
                            t.reject = n
                        }
                      )),
                        t.promise
                    }
                  ), 10)
              }
            ), 10)
        },
        remove: function() {
          this.content = {},
            this.event = []
        },
        destroy: function() {
          this.$destroy()
        }
      },
      mounted: function() {
        this.value && (this.visible = !0);
        var e = this;
        document.body.onclick = function(n) {
          n = n || window.event;
          var t = n.target || n.srcElement
            , r = e.$refs.Bmdropdown;
          e.contains(r, t),
            document.querySelector(".ivu-poptip-popper");
          e.contains(r, t) ? e.findPopTip() || e.targetHide && (e.visible = !1,
            setTimeout((function() {
                e.containerState = !1
              }
            ), 200)) : e.findPopTip() || n != e.event && (e.visible = !1,
            e.remove(),
            setTimeout((function() {
                e.containerState = !1
              }
            ), 200))
        }
      },
      computed: {
        view: function() {
          var e = this.content;
          return {
            template: "<div>".concat(JSON.stringify(e), "</div>")
          }
        }
      }
    };
    l.install = function(e, n) {
      e.prototype.$pop = function() {
        var n, t = e.extend(s), a = function() {
          n = new t;
          var e = n.$mount().$el;
          document.body.appendChild(e)
        };
        return {
          showMsgBox: function(e) {
            return n || a(),
              "string" === typeof e ? n.content = e : "object" === Object(r["a"])(e) && Object.assign(n, e),
              n.showMsgBox()
          }
        }
      }()
    }
      ,
      n["default"] = l
  },
  ba18: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Page :total="100" />\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  ba75: function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "listRole", (function() {
          return l
        }
      )),
      t.d(n, "bindRole", (function() {
          return s
        }
      )),
      t.d(n, "updateRole", (function() {
          return u
        }
      )),
      t.d(n, "removeRole", (function() {
          return d
        }
      )),
      t.d(n, "createRole", (function() {
          return p
        }
      ));
    t("9e5e");
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = a.getSystem
      , c = "/api/dev"
      , l = function() {
      var e = i()
        , n = o();
      return a.request({
        url: "".concat(c, "/auth/").concat(e, "/").concat(n, "/role/list"),
        method: "get"
      })
    }
      , s = function(e, n) {
      var t = n.route
        , r = n.program
        , l = n.entity
        , s = n.shortcut
        , u = i()
        , d = o();
      return a.request({
        url: "".concat(c, "/auth/").concat(u, "/").concat(d, "/role/").concat(e, "/bind"),
        method: "post",
        data: {
          route: t,
          program: r,
          entity: l,
          shortcut: s
        }
      })
    }
      , u = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = i()
        , r = o();
      return a.request({
        url: "".concat(c, "/auth/").concat(t, "/").concat(r, "/role/").concat(e, "/update"),
        method: "post",
        data: n
      })
    }
      , d = function(e) {
      var n = i()
        , t = o();
      return a.request({
        url: "".concat(c, "/auth/").concat(n, "/").concat(t, "/role/").concat(e, "/remove"),
        method: "get"
      })
    }
      , p = function(e) {
      var n = e.name
        , t = i()
        , r = o();
      return a.request({
        url: "".concat(c, "/auth/").concat(t, "/").concat(r, "/role/create"),
        method: "post",
        data: {
          name: n
        }
      })
    }
  },
  bd70: function(e, n, t) {
    "use strict";
    t.r(n);
    t("4654"),
      t("7a8b");
    var r = t("a169")
      , a = t("28a1")
      , i = t("3328")
      , o = function() {
      return Promise.all([t.e("chunk-2d210f45"), t.e("chunk-714ad802")]).then(t.bind(null, "cb77"))
    };
    n["default"] = {
      install: function(e, n) {
        e.mixin({
          computed: {
            $$project: function() {
              return r["default"].getters["platform/project"]
            },
            $$util: function() {
              return i
            },
            $$isDev: function() {
              return r["default"].getters["platform/isDev"]
            }
          },
          methods: {
            $$cmd: function() {
              for (var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = 0; i < n.length; i++) {
                var o = n[i]
                  , c = o.type
                  , l = o.value || {};
                if ("tips" == c) {
                  var s = {
                    title: "提示",
                    content: ""
                  }
                    , u = l.title
                    , d = l.content;
                  if (s.title = u || s.title,
                    s.content = d || s.content,
                  !u && !d)
                    continue;
                  this.$store.commit("notice/tips", s)
                } else if ("redirect" == c)
                  (function() {
                      var n = l.blank
                        , t = l.url
                        , r = l.delay
                        , a = void 0 === r ? 0 : r;
                      _.delay((function() {
                          var r = e.$config.server;
                          t && (t.match(/^(http|tel)/g) ? n ? window.open(t) : location.href = t : n ? window.open("".concat(r).concat(t)) : e.$router.push(t))
                        }
                      ), a)
                    }
                  )();
                else if ("program" == c)
                  (function() {
                      var n = l.flow
                        , i = l.data
                        , o = l.skip
                        , c = r.selected || {}
                        , s = function() {
                        return Promise.all([t.e("chunk-45424589"), t.e("chunk-vendors")]).then(t.bind(null, "8d18"))
                      };
                      e.$store.dispatch("program/display", {
                        flow: n
                      }).then((function(n) {
                          if (o) {
                            var t = n._process
                              , l = {}
                              , u = !1;
                            if (t = t.filter((function(e) {
                                var n = e._action || [];
                                return n.find((function(e) {
                                    return "show" == e._show
                                  }
                                ))
                              }
                            )),
                            0 == t.length)
                              u = !0;
                            else if (1 == t.length) {
                              var d = t[0];
                              "entity" == d._type && "select" == d._handle && c.__entity == d._entity && (u = !0,
                                l[d._procedure] = c)
                            }
                            if (void 0 !== i && (l = i,
                              u = !0),
                              u)
                              return void Object(a["b"])(n._flow, n._version, l).then((function(t) {
                                  e.$$success(n._name, t),
                                  r.callback && r.callback(t)
                                }
                              ))
                          }
                          e.$$modal.show(s, {
                            title: n._name,
                            props: {
                              program: n,
                              data: i,
                              selected: c
                            },
                            onOk: function(e) {
                              r.callback && r.callback(e)
                            }
                          })
                        }
                      ))
                    }
                  )();
                else if ("display" == c)
                  ;
                else if ("collection" == c) {
                  var p = function() {
                    return t.e("chunk-1632a96f").then(t.bind(null, "7707"))
                  }
                    , m = l.title
                    , f = l.entity
                    , v = l.entityKey
                    , h = l.query
                    , g = l.parent;
                  this.$$modal.show(p, {
                    title: m,
                    mode: "collection",
                    props: {
                      entity: f,
                      entityKey: v,
                      parent: g,
                      query: h
                    }
                  })
                } else if ("confirm" == c) {
                  var y = l.title
                    , b = l.content
                    , k = l.onOk;
                  this.$$modal.confirm(y, b, {
                    onOk: k
                  })
                } else if ("preview" == c) {
                  var w = l.list
                    , x = l.onOk
                    , O = l.title
                    , j = l.readonly;
                  this.$$modal.preview(w, {
                    onOk: x,
                    title: O,
                    readonly: j
                  })
                }
              }
            },
            $$success: function(e, n) {
              var t = {
                title: "提示",
                content: e ? e + "成功" : "提交成功"
              }
                , r = n.cmd;
              r ? (this.$$cmd(r),
              r.find((function(e) {
                  return "tips" == e.type
                }
              )) || this.$store.commit("notice/tips", t)) : this.$store.commit("notice/tips", t),
                this.$emit("success")
            },
            $$print: function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , r = arguments.length > 2 ? arguments[2] : void 0
                , a = this
                , i = t("3328").UA
                , c = "返回";
              i.isWxapp && (c = "打印"),
                this.$$modal.show(o, {
                  title: "打印预览（A4纸）",
                  width: 850,
                  okText: c,
                  onHide: function() {
                    a.$store.commit("extra/data", {})
                  },
                  props: {
                    page: e,
                    value: n,
                    force: r
                  }
                })
            }
          }
        })
      }
    }
  },
  bdbe: function(e, n, t) {
    "use strict";
    t.r(n);
    var r = function() {
      var e = this
        , n = e.$createElement
        , t = e._self._c || n;
      return t("transition", {
        attrs: {
          name: "fade"
        }
      }, [e.visible ? t("div", {
        staticClass: "bmdev-modal-progress"
      }, [t("div", {
        staticClass: "box"
      }, [t("div", {
        staticClass: "loader"
      }), t("div", {
        staticClass: "text"
      }, [e._v(e._s(e.hint))])])]) : e._e()])
    }
      , a = []
      , i = t("a169")
      , o = {
      name: "DevModalProgress",
      data: function() {
        return {}
      },
      props: {},
      computed: {
        hint: function() {
          return i["default"].getters["system/ui/progress/hint"]
        },
        visible: function() {
          return i["default"].getters["system/ui/progress/visible"]
        }
      },
      mounted: function() {},
      methods: {}
    }
      , c = o
      , l = (t("07bb"),
      t("2877"))
      , s = Object(l["a"])(c, r, a, !1, null, null, null);
    n["default"] = s.exports
  },
  bea8: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <div class="base-richtext" @click="onClick">\r\n      <div class="richtext-content" :style="textStyle" v-html="value"></div>\r\n    </div>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    onClick() {\r\n      this.doAction("click", this.value);\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        value: {\r\n          ...this.html,\r\n        },\r\n      });\r\n\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        width: 4,\r\n        height: 4,\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {});\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n  },\r\n  watch: {},\r\n  computed: {\r\n    value() {\r\n      return this.getValue("value");\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let padding = this.viewBody.padding;\r\n      let style = {};\r\n      style[\r\n        "padding"\r\n      ] = `${padding["top"]}px ${padding["right"]}px ${padding["bottom"]}px ${padding["left"]}px`;\r\n      return style;\r\n    },\r\n    html() {\r\n      return {\r\n        name: "富文本",\r\n        key: "value",\r\n        type: "html",\r\n        model: "default",\r\n        default: "富文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  // 在此开始写自定义样式\r\n  & > .base-richtext {\r\n    height: 100%;\r\n    display: inline-block;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    & > .richtext-content {\r\n      text-align: initial;\r\n      display: inline-block;\r\n      word-break: break-all;\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  c127: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view" @click="onClick">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <div class="base-text" :style="textStyle" v-html="value"></div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    onClick() {\r\n      this.doAction("click", this.getValue("value"));\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        value: this.string,\r\n      });\r\n\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        width: 4,\r\n        height: 1,\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        textSize: this.textSize,\r\n        textWeight: {\r\n          ...this.select,\r\n          name: "文字粗细",\r\n          key: "textWeight",\r\n          default: "400",\r\n          value: [\r\n            { key: "400", name: "常规", value: "400" },\r\n            { key: "bold", name: "加粗", value: "bold" },\r\n          ],\r\n        },\r\n        longText: {\r\n          ...this.sinpleSelectBox,\r\n          name: "长文本",\r\n          key: "longText",\r\n          default: false,\r\n        },\r\n        lineHeight: {\r\n          type: "inputNumber",\r\n          name: "行间距",\r\n          key: "lineHeight",\r\n          default: 1.15,\r\n          value: "",\r\n          hideTitle: true,\r\n        },\r\n        align: this.align,\r\n        primaryColor: this.primaryColor,\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n  },\r\n  computed: {\r\n    value() {\r\n      return this.getValue("value")\r\n        .replace(/\\n|\\r\\n/g, "<br/>")\r\n        .replace(/\\\\n/gm, "<br/>");\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let viewBody = this.viewBody;\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let primaryColor = this.v.color(option.primaryColor);\r\n      let align = this.v.align(option.align);\r\n      let textWeight = option.textWeight;\r\n      let longText = option.longText;\r\n      let lineHeight = option.lineHeight;\r\n\r\n      let style = {};\r\n      style["position"] = "absolute";\r\n      style["line-height"] = lineHeight;\r\n      if (longText) {\r\n        style["overflow"] = "auto";\r\n        style["max-height"] = "100%";\r\n      }\r\n      style["font-weight"] = textWeight;\r\n      style["color"] = `${primaryColor}`;\r\n      if (viewBody.relative) {\r\n        if (viewBody.autoHeight) {\r\n          style["position"] = "relative";\r\n          style["textAlign"] = align["textAlign"];\r\n          return {\r\n            ...style,\r\n          };\r\n        } else {\r\n          return {\r\n            ...align,\r\n            ...style,\r\n          };\r\n        }\r\n      } else {\r\n        return {\r\n          ...align,\r\n          ...style,\r\n        };\r\n      }\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "文字大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    sinpleSelectBox() {\r\n      return {\r\n        name: "选择",\r\n        type: "sinpleSelectBox",\r\n        default: "",\r\n        key: "sinpleSelectBox",\r\n        value: [],\r\n        hideTitle: true,\r\n      };\r\n    },\r\n    align() {\r\n      return {\r\n        name: "对齐",\r\n        type: "align",\r\n        default: "center",\r\n        key: "align",\r\n        value: [\r\n          "left-top", //左上\r\n          "top", //中上\r\n          "right-top", //右上\r\n          "left-center", //左中\r\n          "center", //居中\r\n          "right-center", //右中\r\n          "left-bottom", //左下\r\n          "bottom", //中下\r\n          "right-bottom", //右下\r\n        ],\r\n      };\r\n    },\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  // 在此开始写自定义样式\r\n  .base-text {\r\n    display: inline-block;\r\n    width: 100%;\r\n    cursor: default;\r\n  }\r\n}\r\n</style>\r\n'
  },
  c263: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view-input-text">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <div class="bm-display-input-text" :class="textClass">\r\n      <i-input\r\n        :type="type"\r\n        v-model="value"\r\n        :prefix="prefix"\r\n        :suffix="suffix"\r\n        :style="textStyle"\r\n        :placeholder="placeholder"\r\n        @on-enter="enter"\r\n        @on-change="change"\r\n      ></i-input>\r\n      <template v-if="prefix || suffix">\r\n        <div class="line" :style="lineStyle"></div>\r\n        <div class="icon" @click="onClick">\r\n          <img :style="iconStyle" :src="selectedIcon.url" alt />\r\n        </div>\r\n      </template>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      prefix: "",\r\n      suffix: "",\r\n      input: "",\r\n    };\r\n  },\r\n  methods: {\r\n    onClick() {\r\n      this.doAction("click", this.value);\r\n    },\r\n    change(event) {\r\n      this.doAction("change", this.value);\r\n    },\r\n    enter(event) {\r\n      this.doAction("enter", this.input);\r\n    },\r\n    iconType() {\r\n      let option = this.viewOption;\r\n      this.suffix = "";\r\n      this.prefix = "";\r\n      if (option.iconType == "prefix") {\r\n        this.prefix = "ios-search";\r\n        this.suffix = "";\r\n      } else if (option.iconType == "suffix") {\r\n        this.suffix = "ios-search";\r\n        this.prefix = "";\r\n      }\r\n    },\r\n    setInputValue(key, value) {\r\n      let adapter = this.getAdapter(key);\r\n      let adapterValue = adapter.value;\r\n      if (adapterValue && adapterValue[0] == "prop") {\r\n        let variableKey = adapterValue[1];\r\n        if (variableKey) {\r\n          this.displayStore.dispatch("property/setValue", {\r\n            key: variableKey,\r\n            value,\r\n          });\r\n        }\r\n      }\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        value: this.string,\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        textSize: this.textSize,\r\n        textColor: {\r\n          ...this.primaryColor,\r\n          key: "textColor",\r\n          name: "文字颜色",\r\n        },\r\n        textWeight: {\r\n          ...this.select,\r\n          name: "文字粗细",\r\n          key: "textWeight",\r\n          default: "400",\r\n          value: [\r\n            { key: "400", name: "常规", value: "400" },\r\n            { key: "bold", name: "加粗", value: "bold" },\r\n          ],\r\n        },\r\n        iconType: {\r\n          ...this.select,\r\n          name: "图标设置",\r\n          key: "iconType",\r\n          default: "none",\r\n          value: [\r\n            { key: "none", name: "无图标", value: "none" },\r\n            { key: "prefix", name: "前置图标", value: "prefix" },\r\n            { key: "suffix", name: "后置图标", value: "suffix" },\r\n          ],\r\n        },\r\n        selectedIcon: {\r\n          ...this.iconBox,\r\n          name: "已选图标",\r\n          key: "selectedIcon",\r\n          default: "",\r\n          value: "",\r\n        },\r\n        iconColor: {\r\n          ...this.primaryColor,\r\n          key: "iconColor",\r\n          name: "图标颜色",\r\n        },\r\n        placeholder: {\r\n          ...this.vInput,\r\n          name: "占位文本",\r\n          key: "placeholder",\r\n          default: "请输入",\r\n          value: "",\r\n        },\r\n        inputPosition: {\r\n          ...this.select,\r\n          name: "输入位置",\r\n          key: "inputPosition",\r\n          default: "left",\r\n          value: [\r\n            { key: "left", name: "靠左", value: "left" },\r\n            { key: "right", name: "靠右", value: "right" },\r\n          ],\r\n        },\r\n        textarea: {\r\n          ...this.select,\r\n          name: "长文本",\r\n          key: "textarea",\r\n          default: "false",\r\n          value: [\r\n            { key: "false", name: "否", value: "false" },\r\n            { key: "true", name: "是", value: "true" },\r\n          ],\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        change: {\r\n          key: "change",\r\n          name: "数据改变时",\r\n        },\r\n        enter: {\r\n          key: "enter",\r\n          name: "回车",\r\n        },\r\n        click: {\r\n          key: "click",\r\n          name: "点击图标",\r\n        },\r\n      });\r\n    },\r\n    mixinOption(optionValue, name, defaultValue) {\r\n      let result = { ...optionValue };\r\n      if (name) {\r\n        result.name = name;\r\n      }\r\n      if (defaultValue) {\r\n        result.default = defaultValue;\r\n      }\r\n      return result;\r\n    },\r\n  },\r\n  mounted() {},\r\n  computed: {\r\n    value: {\r\n      get() {\r\n        let value = this.getValue("value");\r\n        this.input = value;\r\n        return value;\r\n      },\r\n      set(value) {\r\n        this.doAction("change", value);\r\n        this.input = value;\r\n        this.setInputValue("value", value);\r\n      },\r\n    },\r\n    type() {\r\n      if (this.textarea) {\r\n        return "textarea";\r\n      } else {\r\n        return "text";\r\n      }\r\n    },\r\n    placeholder() {\r\n      let option = this.viewOption;\r\n      return option.placeholder || "";\r\n    },\r\n    inputPosition() {\r\n      let option = this.viewOption;\r\n      return option.inputPosition || "";\r\n    },\r\n    selectedIcon() {\r\n      let option = this.viewOption;\r\n      return option.selectedIcon || {};\r\n    },\r\n    textarea() {\r\n      let option = this.viewOption;\r\n      let value = option.textarea;\r\n      if (value) {\r\n        value = JSON.parse(option.textarea);\r\n      }\r\n      return value;\r\n    },\r\n    textClass() {\r\n      let text = "";\r\n      if (this.suffix) {\r\n        text += "suffix";\r\n      }\r\n      if (this.prefix) {\r\n        text += "prefix";\r\n      }\r\n      return text;\r\n    },\r\n    lineStyle() {\r\n      let iconColor = this.viewOption.iconColor;\r\n      let style = {};\r\n      style["background"] = iconColor;\r\n      return style;\r\n    },\r\n    iconStyle() {\r\n      let iconColor = this.viewOption.iconColor;\r\n      let style = {};\r\n      style["filter"] = `drop-shadow(${iconColor} 800px 0)`;\r\n      style["left"] = "-800px";\r\n      return style;\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let viewBody = this.viewBody;\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let primaryColor = this.v.color(option.textColor);\r\n      let align = this.v.align(option.align);\r\n      let textWeight = option.textWeight;\r\n\r\n      let style = {};\r\n      style["position"] = "absolute";\r\n      style = { ...textSize, ...style };\r\n      style["font-weight"] = textWeight;\r\n      style["color"] = `${primaryColor}`;\r\n      if (viewBody.relative) {\r\n        if (viewBody.autoHeight) {\r\n          style["position"] = "relative";\r\n        }\r\n      }\r\n      if (this.inputPosition) {\r\n        style["text-align"] = this.inputPosition;\r\n      }\r\n\r\n      this.iconType();\r\n      return {\r\n        ...align,\r\n        ...style,\r\n      };\r\n    },\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    border() {\r\n      return {\r\n        color: "#000",\r\n        width: 0,\r\n        style: "solid",\r\n        position: ["top", "bottom", "left", "right"],\r\n        radiusOnly: [],\r\n        radiusMore: [],\r\n        radiusState: true,\r\n      };\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "文字大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    iconBox() {\r\n      return {\r\n        name: "已选图标",\r\n        type: "iconBox",\r\n        default: "",\r\n        key: "iconBox",\r\n        value: [],\r\n      };\r\n    },\r\n    vInput() {\r\n      return {\r\n        name: "输入框",\r\n        type: "input",\r\n        default: "",\r\n        key: "input",\r\n        value: [],\r\n        hideTitle: true,\r\n      };\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n    collection() {\r\n      return {\r\n        name: "列表",\r\n        key: "list",\r\n        type: "collection",\r\n        model: "collection",\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less">\r\n// 在此开始写自定义样式\r\n.view-input-text {\r\n  height: 100%;\r\n\r\n  .bm-display-input-text {\r\n    display: inline-block;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n    word-break: break-all;\r\n\r\n    .ivu-input-wrapper {\r\n      height: 100%;\r\n      width: 100%;\r\n\r\n      input {\r\n        border: none;\r\n        background: none;\r\n        font-size: inherit;\r\n        height: 100%;\r\n        color: inherit;\r\n        font-weight: inherit;\r\n        padding-left: 8px;\r\n        padding-right: 8px;\r\n        text-align: inherit;\r\n      }\r\n      textarea {\r\n        border: none;\r\n        background: none;\r\n        font-size: inherit;\r\n        height: 100%;\r\n        color: inherit;\r\n        font-weight: inherit;\r\n        padding-left: 8px;\r\n        padding-right: 8px;\r\n        text-align: inherit;\r\n        resize:none;\r\n      }\r\n    }\r\n\r\n    .ivu-icon {\r\n      &:before {\r\n        content: "";\r\n      }\r\n    }\r\n\r\n    .line {\r\n      position: absolute;\r\n      top: 23%;\r\n      width: 1px;\r\n      height: 56%;\r\n    }\r\n\r\n    &.prefix {\r\n      .line {\r\n        left: 17%;\r\n      }\r\n\r\n      .icon {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n        width: 17%;\r\n        max-width: 17%;\r\n        height: 50%;\r\n        max-height: 50px;\r\n        overflow: hidden;\r\n        z-index: 2;\r\n\r\n        img {\r\n          position: absolute;\r\n          top: 0;\r\n          left: 0;\r\n          width: 100%;\r\n          height: 100%;\r\n        }\r\n      }\r\n\r\n      input {\r\n        padding-left: 20%;\r\n      }\r\n    }\r\n\r\n    &.suffix {\r\n      .line {\r\n        right: 17%;\r\n      }\r\n\r\n      .icon {\r\n        position: absolute;\r\n        right: 0;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n        width: 17%;\r\n        max-width: 17%;\r\n        height: 50%;\r\n        max-height: 50px;\r\n        overflow: hidden;\r\n        z-index: 2;\r\n        font-size: 0;\r\n\r\n        img {\r\n          position: absolute;\r\n          top: 0;\r\n          left: 0;\r\n          width: 100%;\r\n          height: 100%;\r\n        }\r\n      }\r\n\r\n      input {\r\n        padding-right: 20%;\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  c2ab: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <i-button @click="start">Start</i-button>\r\n    <i-button @click="finish">Finish</i-button>\r\n    <i-button @click="error">Error</i-button>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    start() {\r\n      this.$Loading.start();\r\n    },\r\n    finish() {\r\n      this.$Loading.finish();\r\n    },\r\n    error() {\r\n      this.$Loading.error();\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  c34f: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="display-view-questionslist">\r\n    <div class="content">\r\n      <div class="item" v-for="(item,index) in list" :key="index" @click="onClick(index)">\r\n        <div class="head">\r\n          <div class="title" :title="item.title">{{item.title}}</div>\r\n          <div class="right">\r\n            <div class="text">{{item.type}}</div>\r\n            <div class="line"></div>\r\n            <div class="btn" :class="setStatic(item.static)">{{item.static}}</div>\r\n          </div>\r\n        </div>\r\n        <div class="content">{{item.describe}}</div>\r\n        <div class="foot">\r\n          <div class="name">{{item.questioner}}</div>\r\n          <img class="type" :src="\'/image/customized/icon-\'+version(item.version)+\'.png\'" />\r\n          <div class="time">提问于{{item.time}}</div>\r\n          <div class="examine" v-if="stateExamine">审核：{{item.examine}}</div>\r\n          <div class="new">\r\n            <img src="/image/customized/icon-new.png" />\r\n            <span class="text">回答({{item.answerNum}})</span>\r\n          </div>\r\n          <div class="eye">\r\n            <img src="/image/customized/icon-eye.png" />\r\n            <span class="text">浏览({{item.num}})</span>\r\n          </div>\r\n          <img\r\n            @click.stop="remove(index)"\r\n            class="delete"\r\n            v-if="stateRemove"\r\n            src="/image/customized/icon-delete.png"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="more" v-if="page&&page!=currentPage" @click="more">更多数据</div>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      page: 1,\r\n      currentPage: 1,\r\n      row: 20,\r\n    };\r\n  },\r\n  methods: {\r\n    onClick(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("click", item);\r\n    },\r\n    setup() {\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        remove: {\r\n          ...this.select,\r\n          name: "删除(按钮)",\r\n          key: "remove",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n        vExamine: {\r\n          ...this.select,\r\n          name: "审核",\r\n          key: "vExamine",\r\n          default: "true",\r\n          value: [\r\n            { key: "false", name: "隐藏", value: "false" },\r\n            { key: "true", name: "显示", value: "true" },\r\n          ],\r\n        },\r\n      });\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        questionlist: {\r\n          ...this.collection,\r\n          name: "选项集",\r\n          key: "questionlist",\r\n        },\r\n        "questionlist.type": {\r\n          ...this.string,\r\n          name: "问题类型",\r\n          key: "questionlist.type",\r\n        },\r\n        "questionlist.questioner": {\r\n          ...this.string,\r\n          name: "提问者",\r\n          key: "questionlist.questioner",\r\n        },\r\n        "questionlist.title": {\r\n          ...this.string,\r\n          name: "标题",\r\n          key: "questionlist.title",\r\n        },\r\n        "questionlist.describe": {\r\n          ...this.string,\r\n          name: "问题描述",\r\n          key: "questionlist.describe",\r\n        },\r\n        "questionlist.static": {\r\n          ...this.string,\r\n          name: "问题状态",\r\n          key: "questionlist.static",\r\n        },\r\n        "questionlist.time": {\r\n          ...this.string,\r\n          name: "问题时间",\r\n          key: "questionlist.time",\r\n        },\r\n        "questionlist.num": {\r\n          ...this.string,\r\n          name: "浏览数",\r\n          key: "questionlist.num",\r\n        },\r\n        "questionlist.answerNum": {\r\n          ...this.string,\r\n          name: "回答数",\r\n          key: "questionlist.answerNum",\r\n        },\r\n        "questionlist.version": {\r\n          ...this.string,\r\n          name: "版本",\r\n          key: "questionlist.version",\r\n        },\r\n        "questionlist.examine": {\r\n          ...this.string,\r\n          name: "审核",\r\n          key: "questionlist.examine",\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n    version(type) {\r\n      if (type == "体验版") {\r\n        return "experience";\r\n      } else if (type == "基础版") {\r\n        return "basic";\r\n      } else if (type == "企业版") {\r\n        return "enterprise";\r\n      } else if (type == "平台版") {\r\n        return "senior";\r\n      }\r\n    },\r\n    setStatic(static) {\r\n      if (static == "已解决") {\r\n        return "success";\r\n      }\r\n      return "";\r\n    },\r\n    more() {\r\n      this.currentPage++;\r\n    },\r\n    remove(index) {\r\n      let item = this.viewStore.getters["data/getContext"](index);\r\n      this.doAction("remove", item);\r\n    },\r\n  },\r\n  computed: {\r\n    stateRemove() {\r\n      let state = this.viewOption["remove"];\r\n      if (state) {\r\n        state = JSON.parse(state);\r\n        return state;\r\n      }\r\n      return false;\r\n    },\r\n    stateExamine() {\r\n      let state = this.viewOption["vExamine"];\r\n      if (state) {\r\n        state = JSON.parse(state);\r\n        return state;\r\n      }\r\n      return false;\r\n    },\r\n    list: {\r\n      get() {\r\n        let list = this.getCollection("questionlist", {});\r\n        this.page = Math.ceil(list.length / this.row) || 1;\r\n        if (this.page != 1) {\r\n          if (this.page > this.currentPage || this.page == this.currentPage) {\r\n            list = list.slice(0, this.row * this.currentPage);\r\n          }\r\n        }\r\n        return list || [];\r\n      },\r\n      set() {},\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n    collection() {\r\n      return {\r\n        name: "列表",\r\n        key: "list",\r\n        type: "collection",\r\n        model: "collection",\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.display-view-questionslist {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  .content {\r\n    .item {\r\n      cursor: pointer;\r\n      padding-left: 33px;\r\n      padding-right: 46px;\r\n      padding-bottom: 17px;\r\n      min-height: 190px;\r\n      background: rgba(255, 255, 255, 1);\r\n      box-shadow: 0px 0px 6px rgba(56, 92, 116, 0.12);\r\n      margin-bottom: 17px;\r\n\r\n      .head {\r\n        position: relative;\r\n        padding-right: 210px;\r\n        padding-top: 38px;\r\n        .title {\r\n          font-size: 16px;\r\n          font-weight: 400;\r\n          line-height: 21px;\r\n          color: rgba(41, 41, 41, 1);\r\n          padding-right: 10px;\r\n        }\r\n        .right {\r\n          position: absolute;\r\n          right: 0;\r\n          top: 22px;\r\n          display: flex;\r\n          .text {\r\n            font-size: 14px;\r\n            font-weight: 400;\r\n            line-height: 19px;\r\n            line-height: 36px;\r\n            color: rgba(133, 144, 166, 1);\r\n          }\r\n          .line {\r\n            border-left: 1px solid rgb(127, 164, 240);\r\n            height: 18px;\r\n            margin: 0 14px;\r\n            margin-top: 8px;\r\n          }\r\n          .btn {\r\n            width: 88px;\r\n            height: 36px;\r\n            border: 1px solid rgba(133, 144, 166, 1);\r\n            border-radius: 5px;\r\n            font-size: 16px;\r\n            font-weight: 400;\r\n            line-height: 36px;\r\n            color: rgba(133, 144, 166, 1);\r\n            text-align: center;\r\n            &.success {\r\n              border-color: rgba(0, 206, 187, 1);\r\n              color: rgba(0, 206, 187, 1);\r\n            }\r\n          }\r\n        }\r\n      }\r\n      .content {\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n        line-height: 28px;\r\n        color: rgba(102, 102, 102, 1);\r\n        margin-top: 12px;\r\n      }\r\n      .foot {\r\n        margin-top: 20px;\r\n        display: flex;\r\n        .name {\r\n          font-size: 14px;\r\n          font-weight: 400;\r\n          line-height: 19px;\r\n          color: rgba(133, 144, 166, 1);\r\n          margin-right: 8px;\r\n          max-width: 240px;\r\n          text-overflow: ellipsis;\r\n          white-space: nowrap;\r\n          overflow: hidden;\r\n        }\r\n        .type {\r\n          width: 43px;\r\n          height: 17px;\r\n          margin-right: 28px;\r\n        }\r\n        .time {\r\n          flex: 1;\r\n          font-size: 14px;\r\n          font-weight: 400;\r\n          line-height: 19px;\r\n          color: rgba(133, 144, 166, 1);\r\n        }\r\n        .new {\r\n          cursor: pointer;\r\n          margin-left: 23px;\r\n          img {\r\n            width: 22px;\r\n            height: 22px;\r\n            vertical-align: middle;\r\n          }\r\n          .text {\r\n            font-size: 14px;\r\n            font-weight: 400;\r\n            line-height: 19px;\r\n            color: rgba(133, 144, 166, 1);\r\n            vertical-align: middle;\r\n          }\r\n        }\r\n        .eye {\r\n          cursor: pointer;\r\n          margin-left: 23px;\r\n          img {\r\n            width: 22px;\r\n            height: 22px;\r\n            vertical-align: middle;\r\n          }\r\n          .text {\r\n            font-size: 14px;\r\n            font-weight: 400;\r\n            line-height: 19px;\r\n            color: rgba(133, 144, 166, 1);\r\n            vertical-align: middle;\r\n          }\r\n        }\r\n        .delete {\r\n          width: 22px;\r\n          height: 22px;\r\n          margin-left: 23px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .more {\r\n    color: #0098ff;\r\n    width: 200px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n    cursor: pointer;\r\n    &:hover {\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  c68f: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <AutoComplete\r\n      v-model="value"\r\n      :data="data"\r\n      @on-search="handleSearch"\r\n      placeholder="input here"\r\n      style="width:200px"\r\n    ></AutoComplete>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      value: "",\r\n      data: [],\r\n    };\r\n  },\r\n  methods: {\r\n    handleSearch(value) {\r\n      this.data = !value ? [] : [value, value + value, value + value + value];\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  c7bc: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  cb40: function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "createPackage", (function() {
          return o
        }
      )),
      t.d(n, "list", (function() {
          return c
        }
      ));
    var r = t("2473")
      , a = new r["default"]
      , i = "/api/payment"
      , o = function(e) {
      var n = e.type
        , t = {
        type: n
      };
      return a.request({
        url: "".concat(i, "/order/package"),
        method: "post",
        data: t
      })
    }
      , c = function() {
      return a.request({
        url: "".concat(i, "/order/list"),
        method: "get"
      })
    }
  },
  cd0a: function(e, n, t) {
    "use strict";
    t.d(n, "d", (function() {
        return o
      }
    )),
      t.d(n, "e", (function() {
          return c
        }
      )),
      t.d(n, "b", (function() {
          return l
        }
      )),
      t.d(n, "c", (function() {
          return s
        }
      )),
      t.d(n, "f", (function() {
          return u
        }
      )),
      t.d(n, "a", (function() {
          return d
        }
      ));
    var r = t("2473")
      , a = new r["default"]
      , i = "/api/common"
      , o = function(e) {
      var n = e.user
        , t = e.pwd
        , r = {
        user: n,
        pwd: t
      };
      return a.request({
        url: "".concat(i, "/user/login"),
        data: r,
        method: "post"
      })
    }
      , c = function(e) {
      var n = e.user
        , t = e.pwd
        , r = e.phone
        , o = e.verify
        , c = e.nickname
        , l = e.type
        , s = {
        user: n,
        pwd: t,
        phone: r,
        verify: o,
        nickname: c,
        type: l
      };
      return a.request({
        url: "".concat(i, "/user/reg"),
        data: s,
        method: "post"
      })
    }
      , l = function() {
      return a.request({
        url: "".concat(i, "/user/userInfo"),
        method: "get"
      })
    }
      , s = function(e, n, t) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "reg"
        , o = arguments.length > 4 ? arguments[4] : void 0;
      return a.request({
        url: "".concat(i, "/utils/verifyCode"),
        method: "post",
        data: {
          phone: e,
          ticket: n,
          randstr: t,
          type: r,
          project: o
        }
      })
    }
      , u = function(e) {
      var n = e.pwd
        , t = e.phone
        , r = e.verify
        , o = e.type
        , c = {
        pwd: n,
        phone: t,
        verify: r,
        type: o
      };
      return a.request({
        url: "".concat(i, "/user/resetPwd"),
        data: c,
        method: "post"
      })
    }
      , d = function(e) {
      var n = {
        token: e
      };
      return a.request({
        url: "".concat(i, "/user/oauth/id"),
        data: n,
        method: "post"
      })
    }
  },
  ce73: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Badge :count="3">\r\n      <a href="#" class="demo-badge"></a>\r\n    </Badge>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  padding-top: 20px;\r\n  padding-left: 20px;\r\n  .demo-badge {\r\n    width: 42px;\r\n    height: 42px;\r\n    background: #eee;\r\n    border-radius: 6px;\r\n    display: inline-block;\r\n  }\r\n}\r\n</style>'
  },
  d6aa: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Steps :current="1">\r\n      <Step title="已完成" content="这里是该步骤的描述信息"></Step>\r\n      <Step title="进行中" content="这里是该步骤的描述信息"></Step>\r\n      <Step title="待进行" content="这里是该步骤的描述信息"></Step>\r\n      <Step title="待进行" content="这里是该步骤的描述信息"></Step>\r\n    </Steps>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  dac4: function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "list", (function() {
          return u
        }
      )),
      t.d(n, "get", (function() {
          return d
        }
      )),
      t.d(n, "update", (function() {
          return p
        }
      )),
      t.d(n, "copy", (function() {
          return m
        }
      )),
      t.d(n, "remove", (function() {
          return f
        }
      )),
      t.d(n, "removeProcedure", (function() {
          return v
        }
      )),
      t.d(n, "listProcedure", (function() {
          return h
        }
      )),
      t.d(n, "createProcedure", (function() {
          return g
        }
      )),
      t.d(n, "updateProcedure", (function() {
          return y
        }
      )),
      t.d(n, "updateProcedureNext", (function() {
          return b
        }
      )),
      t.d(n, "listAction", (function() {
          return k
        }
      )),
      t.d(n, "updateAction", (function() {
          return w
        }
      )),
      t.d(n, "removeAction", (function() {
          return x
        }
      )),
      t.d(n, "refreshProcedureAction", (function() {
          return O
        }
      )),
      t.d(n, "resetProcedureAction", (function() {
          return j
        }
      )),
      t.d(n, "addProcedureAction", (function() {
          return P
        }
      )),
      t.d(n, "updateProcedureAction", (function() {
          return S
        }
      )),
      t.d(n, "sortProcedureAction", (function() {
          return M
        }
      )),
      t.d(n, "listSnapshot", (function() {
          return C
        }
      )),
      t.d(n, "checkSnapshot", (function() {
          return D
        }
      ));
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = "/api/dev"
      , c = {}
      , l = 500
      , s = function(e, n) {
      return c[e] || (c[e + "_reset"] = _.debounce((function() {
          c[e] = !1
        }
      ), l),
        c[e] = a.request(n).then((function(n) {
            return c[e + "_reset"](),
              n
          }
        ))),
        c[e]
    }
      , u = function() {
      var e = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(e),
        method: "get"
      })
    }
      , d = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(n, "/").concat(e),
        method: "get"
      })
    }
      , p = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(t, "/").concat(e, "/update"),
        method: "post",
        data: n
      })
    }
      , m = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(t, "/").concat(e, "/copy"),
        method: "post",
        data: n
      })
    }
      , f = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(n, "/").concat(e, "/remove"),
        method: "get"
      })
    }
      , v = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(t, "/").concat(e, "/procedure/").concat(n, "/remove"),
        method: "get"
      })
    }
      , h = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(n, "/").concat(e, "/procedure"),
        method: "get"
      })
    }
      , g = function(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        , r = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(r, "/").concat(e, "/procedure/create"),
        method: "post",
        data: {
          name: n,
          view: t
        }
      })
    }
      , y = function(e, n, t) {
      var r = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(r, "/").concat(e, "/procedure/").concat(n, "/update"),
        method: "post",
        data: t
      })
    }
      , b = function(e, n, t) {
      var r = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(r, "/").concat(e, "/procedure/").concat(n, "/next"),
        method: "post",
        data: {
          next: t
        }
      })
    }
      , k = function(e) {
      var n = i()
        , t = "".concat(o, "/flow/").concat(n, "/").concat(e, "/action")
        , r = {
        url: t,
        method: "get"
      };
      return s(t, r)
    }
      , w = function(e, n, t) {
      var r = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(r, "/").concat(e, "/action/").concat(n, "/update"),
        method: "post",
        data: t
      })
    }
      , x = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(t, "/").concat(e, "/action/").concat(n, "/remove"),
        method: "get"
      })
    }
      , O = function(e, n) {
      var t = i()
        , r = "".concat(o, "/flow/").concat(t, "/").concat(e, "/procedure/").concat(n, "/refreshAction")
        , a = {
        url: r,
        method: "post"
      };
      return s(r, a)
    }
      , j = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(t, "/").concat(e, "/procedure/").concat(n, "/resetAction"),
        method: "post"
      })
    }
      , P = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(t, "/").concat(e, "/procedure/").concat(n, "/addAction"),
        method: "post"
      })
    }
      , S = function(e, n, t) {
      var r = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(r, "/").concat(e, "/procedure/").concat(n, "/updateAction"),
        method: "post",
        data: t
      })
    }
      , M = function(e, n, t) {
      var r = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(r, "/").concat(e, "/procedure/").concat(n, "/sortAction"),
        method: "post",
        data: t
      })
    }
      , C = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(n, "/").concat(e, "/snapshot"),
        method: "get"
      })
    }
      , D = function(e, n) {
      var t = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(t, "/").concat(e, "/snapshot/").concat(n),
        method: "get"
      })
    }
  },
  dc3c: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Scroll :on-reach-bottom="handleReachBottom">\r\n      <Card\r\n        dis-hover\r\n        v-for="(item, index) in list"\r\n        :key="index"\r\n        style="margin: 32px 0"\r\n      >Content {{ item }}</Card>\r\n    </Scroll>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],\r\n    };\r\n  },\r\n  methods: {\r\n    handleReachBottom() {\r\n      return new Promise((resolve) => {\r\n        setTimeout(() => {\r\n          const last = this.list[this.list.length - 1];\r\n          for (let i = 1; i < 11; i++) {\r\n            this.list.push(last + i);\r\n          }\r\n          resolve();\r\n        }, 2000);\r\n      });\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  dcfe: function(e, n, t) {
    "use strict";
    t.r(n);
    var r = t("a169");
    n["default"] = {
      install: function(e, n) {
        e.mixin({
          computed: {
            $$custom: function() {
              var e = {
                project: r["default"].getters["custom/project"],
                logo: r["default"].getters["custom/logo"],
                name: r["default"].getters["custom/name"],
                config: r["default"].getters["custom/config/config"],
                view: r["default"].getters["custom/view/view"]
              };
              return e
            },
            $$isCustom: function() {
              var e = r["default"].getters["custom/isCustom"];
              return e
            }
          }
        })
      }
    }
  },
  de10: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <div style="padding: 10px;background: #f8f8f9">\r\n      <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px;">\r\n        <CellGroup>\r\n          <Cell title="Only show titles" />\r\n          <Cell title="Display label content" label="label content" />\r\n          <Cell title="Display right content" extra="details" />\r\n          <Cell title="Link" extra="details" to="/components/button" />\r\n          <Cell title="Open link in new window" to="/components/button" target="_blank" />\r\n          <Cell title="Disabled" disabled />\r\n          <Cell title="Selected" selected />\r\n          <Cell title="With Badge" to="/components/badge">\r\n            <Badge :count="10" slot="extra" />\r\n          </Cell>\r\n          <Cell title="With Switch">\r\n            <i-switch v-model="switchValue" slot="extra" />\r\n          </Cell>\r\n        </CellGroup>\r\n      </Card>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {\r\n      switchValue: true,\r\n    };\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  e233: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <Dropdown>\r\n      <a href="javascript:void(0)">\r\n        下拉菜单\r\n        <Icon type="ios-arrow-down"></Icon>\r\n      </a>\r\n      <DropdownMenu slot="list">\r\n        <DropdownItem>驴打滚</DropdownItem>\r\n        <DropdownItem>炸酱面</DropdownItem>\r\n        <DropdownItem disabled>豆汁儿</DropdownItem>\r\n        <DropdownItem>冰糖葫芦</DropdownItem>\r\n        <DropdownItem divided>北京烤鸭</DropdownItem>\r\n      </DropdownMenu>\r\n    </Dropdown>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  e2f0: function(e, n, t) {
    "use strict";
    var r = "https://platform.bnocode.com"
      , a = {
      server: r,
      title: "白码",
      cookieExpires: 1,
      useI18n: !1,
      baseUrl: "".concat(r),
      homeName: "home",
      weixinWebAppid: "wxa14111ff82d58666",
      weixinMpAppid: "wx014fa91e94a56e52",
      weixinLoginUrl: "".concat(r, "/api/third/weixin/login"),
      weixinBindUrl: "".concat(r, "/api/third/weixin/bind"),
      weixinThirdLoginUrl: "".concat(r, "/api/third/weixin/third/login"),
      weixinThirdBindUrl: "".concat(r, "/api/third/weixin/third/bind"),
      wxworkAppid: "wwddb4fb235a42cd72",
      wxworkLoginUrl: "".concat(r, "/api/third/wxwork/login"),
      panUrl: "https://pan.bnocode.com",
      uploadUrl: "/upload",
      platformServer: "https://platform.bnocode.com",
      appServer: "https://v1.bnocode.com",
      officalServer: "https://www.bnocode.com",
      tencentCaptchaId: "2067399843",
      isOffical: !0,
      communityUrl: "https://v1.bnocode.com/5f228afee8eb1e7b4ae20f5e/",
      baiduTrack: {
        enable: !0,
        url: "https://hm.baidu.com/hm.js?c98cc63ccb1ce42133e6e179a6318e20"
      },
      baimaOpen: "https://pan.bnocode.com/open"
    };
    n["a"] = a
  },
  e750: function(e, n, t) {
    "use strict";
    t.r(n);
    var r, a = t("ade3"), i = {
      common: {
        text: {
          name: "文字",
          tpl: t("c127").default
        },
        image: {
          name: "图片",
          tpl: t("f654").default
        },
        button: {
          name: "按钮",
          tpl: t("821c").default
        },
        number: {
          name: "数字",
          tpl: t("3cdf").default
        },
        richtext: {
          name: "富文本",
          tpl: t("bea8").default
        },
        line: {
          name: "线",
          tpl: t("421d").default
        },
        blank: {
          name: "自定义",
          tpl: t("03bc").default
        }
      },
      "输入组件": {
        text: {
          name: "文本框",
          tpl: t("c263").default
        },
        dropdown: {
          name: "下拉选择",
          tpl: t("129e").default
        },
        radio: {
          name: "单选框",
          tpl: t("f62c").default
        },
        switch: {
          name: "开关",
          tpl: t("fd95").default
        },
        datePicker: {
          name: "日期选择器",
          tpl: t("68e3").default
        }
      },
      iview: (r = {
        button: {
          name: "按钮",
          tpl: t("4586").default
        },
        list: {
          name: "列表",
          tpl: t("2f7b").default
        },
        card: {
          name: "卡片",
          tpl: t("fbbe").default
        },
        collapse: {
          name: "折叠面板",
          tpl: t("69b6").default
        },
        split: {
          name: "面板分割",
          tpl: t("1674").default
        }
      },
        Object(a["a"])(r, "split", {
          name: "面板分割",
          tpl: t("1674").default
        }),
        Object(a["a"])(r, "divider", {
          name: "分割线",
          tpl: t("653b").default
        }),
        Object(a["a"])(r, "cell", {
          name: "单元格",
          tpl: t("de10").default
        }),
        Object(a["a"])(r, "menu", {
          name: "导航菜单",
          tpl: t("4519").default
        }),
        Object(a["a"])(r, "tabs", {
          name: "标签页",
          tpl: t("732f").default
        }),
        Object(a["a"])(r, "dropdown", {
          name: "下拉菜单",
          tpl: t("e233").default
        }),
        Object(a["a"])(r, "page", {
          name: "分页",
          tpl: t("ba18").default
        }),
        Object(a["a"])(r, "breadcrumb", {
          name: "面包屑",
          tpl: t("4c8b").default
        }),
        Object(a["a"])(r, "badge", {
          name: "徽标数",
          tpl: t("ce73").default
        }),
        Object(a["a"])(r, "anchor", {
          name: "锚点",
          tpl: t("3940").default
        }),
        Object(a["a"])(r, "steps", {
          name: "步骤条",
          tpl: t("d6aa").default
        }),
        Object(a["a"])(r, "loadingBar", {
          name: "加载进度条",
          tpl: t("c2ab").default
        }),
        Object(a["a"])(r, "loadingBar", {
          name: "加载进度条",
          tpl: t("c2ab").default
        }),
        Object(a["a"])(r, "input", {
          name: "输入框",
          tpl: t("8477").default
        }),
        Object(a["a"])(r, "radio", {
          name: "单选框",
          tpl: t("8a69").default
        }),
        Object(a["a"])(r, "checkbox", {
          name: "多选框",
          tpl: t("121b").default
        }),
        Object(a["a"])(r, "switch", {
          name: "开关",
          tpl: t("6620").default
        }),
        Object(a["a"])(r, "table", {
          name: "表格",
          tpl: t("6a38").default
        }),
        Object(a["a"])(r, "select", {
          name: "选择器",
          tpl: t("8877").default
        }),
        Object(a["a"])(r, "autoComplete", {
          name: "自动完成",
          tpl: t("c68f").default
        }),
        Object(a["a"])(r, "slider", {
          name: "滑块",
          tpl: t("92e8").default
        }),
        Object(a["a"])(r, "datePicker", {
          name: "日期选择器",
          tpl: t("c7bc").default
        }),
        Object(a["a"])(r, "timePicker", {
          name: "时间选择器",
          tpl: t("6179").default
        }),
        Object(a["a"])(r, "cascader", {
          name: "级联选择",
          tpl: t("a1b8").default
        }),
        Object(a["a"])(r, "transfer", {
          name: "穿梭框",
          tpl: t("65c5").default
        }),
        Object(a["a"])(r, "inputNumber", {
          name: "数字输入框",
          tpl: t("38f8").default
        }),
        Object(a["a"])(r, "avatar", {
          name: "头像",
          tpl: t("186a").default
        }),
        Object(a["a"])(r, "tag", {
          name: "标签",
          tpl: t("30cd").default
        }),
        Object(a["a"])(r, "carousel", {
          name: "走马灯",
          tpl: t("629c").default
        }),
        Object(a["a"])(r, "timeline", {
          name: "时间轴",
          tpl: t("a72f").default
        }),
        Object(a["a"])(r, "time", {
          name: "相对时间",
          tpl: t("5605").default
        }),
        Object(a["a"])(r, "circle", {
          name: "进度环",
          tpl: t("38c5").default
        }),
        Object(a["a"])(r, "affix", {
          name: "图钉",
          tpl: t("1992").default
        }),
        Object(a["a"])(r, "backTop", {
          name: "返回顶部",
          tpl: t("54bf").default
        }),
        Object(a["a"])(r, "spin", {
          name: "加载中",
          tpl: t("733e").default
        }),
        Object(a["a"])(r, "scroll", {
          name: "无限滚动",
          tpl: t("dc3c").default
        }),
        r),
      "定制": {
        scroll: {
          name: "消息滚动",
          tpl: t("2b55").default
        },
        expounlist: {
          name: "案件洽谈列表",
          tpl: t("86c6").default
        },
        questionsDetails: {
          name: "问答专区详情",
          tpl: t("1e55").default
        },
        questionslist: {
          name: "问答专区列表",
          tpl: t("c34f").default
        },
        number: {
          name: "随机数",
          tpl: t("4fe9").default
        },
        tabs: {
          name: "tabs标签页",
          tpl: t("913b").default
        },
        material: {
          name: "物资对接列表",
          tpl: t("9f76").default
        },
        materialMine: {
          name: "我的物资对接列表",
          tpl: t("212d").default
        },
        sourcematerial: {
          name: "话术素材列表",
          tpl: t("3254").default
        },
        activityrecord: {
          name: "活动记录(pc)",
          tpl: t("40ea").default
        },
        activityrecordmobile: {
          name: "活动记录(app)",
          tpl: t("7965").default
        },
        dropdown: {
          name: "下拉菜单",
          tpl: t("3fd4").default
        }
      }
    };
    n["default"] = i
  },
  e91e: function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "create", (function() {
          return c
        }
      )),
      t.d(n, "quickCreate", (function() {
          return l
        }
      ));
    var r = t("2473")
      , a = new r["default"]("")
      , i = a.getProject
      , o = "/api/dev"
      , c = function(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "program"
        , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        , r = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(r, "/create"),
        method: "post",
        data: {
          name: e,
          type: n,
          option: t
        }
      })
    }
      , l = function(e) {
      var n = i();
      return a.request({
        url: "".concat(o, "/flow/").concat(n, "/quickCreate"),
        method: "post",
        data: e
      })
    }
  },
  eac0: function(e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "createView", (function() {
          return u
        }
      )),
      t.d(n, "getView", (function() {
          return d
        }
      )),
      t.d(n, "removeView", (function() {
          return p
        }
      )),
      t.d(n, "updateView", (function() {
          return m
        }
      )),
      t.d(n, "listView", (function() {
          return f
        }
      ));
    t("8e6e"),
      t("ac6a"),
      t("456d");
    var r = t("ade3")
      , a = t("2473");
    function i(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }
        ))),
          t.push.apply(t, r)
      }
      return t
    }
    function o(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? i(Object(t), !0).forEach((function(n) {
            Object(r["a"])(e, n, t[n])
          }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }
        ))
      }
      return e
    }
    var c = new a["default"]("")
      , l = c.getProject
      , s = "/api/dev"
      , u = function(e) {
      var n = l();
      return c.request({
        url: "".concat(s, "/display/").concat(n, "/view/create"),
        method: "post",
        data: e
      })
    }
      , d = function(e) {
      var n = l();
      return c.request({
        url: "".concat(s, "/display/").concat(n, "/view/").concat(e, "/get"),
        method: "get"
      })
    }
      , p = function(e) {
      var n = l();
      return c.request({
        url: "".concat(s, "/display/").concat(n, "/view/").concat(e, "/remove"),
        method: "get"
      })
    }
      , m = function(e, n) {
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        , r = l()
        , a = o({}, t);
      return n && (a._template = n),
        c.request({
          url: "".concat(s, "/display/").concat(r, "/view/").concat(e, "/update"),
          method: "post",
          data: a
        })
    }
      , f = function() {
      var e = l();
      return c.request({
        url: "".concat(s, "/display/").concat(e, "/view/list"),
        method: "get"
      })
    }
  },
  eb9e: function(e, n, t) {
    "use strict";
    var r = t("0745")
      , a = t.n(r);
    a.a
  },
  f3b6: function(e, n, t) {},
  f4e6: function(e, n, t) {
    "use strict";
    t.d(n, "a", (function() {
        return c
      }
    )),
      t.d(n, "c", (function() {
          return l
        }
      )),
      t.d(n, "b", (function() {
          return s
        }
      ));
    var r = t("2473")
      , a = t("3328")
      , i = new r["default"]
      , o = "/api/third"
      , c = function() {
      var e = Object(a["isCustom"])()
        , n = "".concat(o, "/weixin/wxconfig");
      return e && (n = "".concat(o, "/weixin/third/").concat(e, "/wxconfig")),
        i.request({
          url: n,
          method: "get"
        })
    }
      , l = function(e) {
      var n = "".concat(o, "/wxwork/main/jsconfig/").concat(e);
      return i.request({
        url: n,
        method: "post"
      })
    }
      , s = function(e) {
      var n = "".concat(o, "/wxwork/main/jsagentconfig/").concat(e);
      return i.request({
        url: n,
        method: "post"
      })
    }
  },
  f62c: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="display-view-radio">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <RadioGroup\r\n      :size="size"\r\n      v-model="selected"\r\n      :style="textStyle"\r\n      :vertical="arrangement"\r\n      class="bm-display-input-radio"\r\n      @on-change="onChange"\r\n    >\r\n      <Radio v-for="(item,index) in options" :value="index" :label="index" :key="index">\r\n        <span class="text">{{item.label}}</span>\r\n      </Radio>\r\n    </RadioGroup>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    onChange(selected) {\r\n      let item = this.options[selected];\r\n      if (item) {\r\n        this.setInputValue("selected", item.label);\r\n      }\r\n\r\n      let context = this.viewStore.getters["data/getContext"](selected);\r\n      if (context == undefined) {\r\n        context = item;\r\n      }\r\n      this.doAction("change", context, selected);\r\n    },\r\n    setInputValue(key, value) {\r\n      let adapter = this.getAdapter(key);\r\n      let adapterValue = adapter.value;\r\n      if (adapterValue && adapterValue[0] == "prop") {\r\n        let variableKey = adapterValue[1];\r\n        if (variableKey) {\r\n          this.displayStore.dispatch("property/setValue", {\r\n            key: variableKey,\r\n            value,\r\n          });\r\n        }\r\n      }\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        selected: {\r\n          ...this.string,\r\n          name: "选中选项",\r\n          key: "selected",\r\n          default: "是",\r\n        },\r\n        options: {\r\n          ...this.collection,\r\n          name: "选项集",\r\n          type: "manual",\r\n          key: "options",\r\n        },\r\n        "options.label": {\r\n          ...this.string,\r\n          name: "选项",\r\n          key: "options.label",\r\n        },\r\n      });\r\n\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        body: {\r\n          width: 5,\r\n          height: 1,\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        textSize: this.textSize,\r\n        textWeight: {\r\n          ...this.select,\r\n          name: "文字粗细",\r\n          key: "textWeight",\r\n          default: "400",\r\n          value: [\r\n            { key: "400", name: "常规", value: "400" },\r\n            { key: "bold", name: "加粗", value: "bold" },\r\n          ],\r\n        },\r\n        textColor: {\r\n          ...this.mixinOption(this.primaryColor, "文字颜色"),\r\n          key: "textColor",\r\n        },\r\n        arrangement: {\r\n          ...this.select,\r\n          name: "排列方式",\r\n          key: "arrangement",\r\n          default: "false",\r\n          value: [\r\n            { key: "false", name: "横向", value: "false" },\r\n            { key: "true", name: "垂直", value: "true" },\r\n          ],\r\n        },\r\n        size: {\r\n          ...this.select,\r\n          name: "单选框的尺寸",\r\n          key: "size",\r\n          default: "routine",\r\n          value: [\r\n            { key: "small", name: "小", value: "small" },\r\n            { key: "routine", name: "常规", value: "routine" },\r\n            { key: "large", name: "大", value: "large" },\r\n          ],\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        change: {\r\n          key: "change",\r\n          name: "切换",\r\n        },\r\n      });\r\n    },\r\n    mixinOption(optionValue, name, defaultValue) {\r\n      let result = { ...optionValue };\r\n      if (name) {\r\n        result.name = name;\r\n      }\r\n      if (defaultValue) {\r\n        result.default = defaultValue;\r\n      }\r\n      return result;\r\n    },\r\n  },\r\n  mounted() {},\r\n  computed: {\r\n    selected: {\r\n      get() {\r\n        let selected = this.getValue("selected");\r\n        let valueSelected = -1;\r\n        this.options.forEach(function (value, key) {\r\n          if (value.label && value.label == selected) {\r\n            valueSelected = key;\r\n          }\r\n        });\r\n        return valueSelected;\r\n      },\r\n      set() {},\r\n    },\r\n    options() {\r\n      let options = this.getCollection("options");\r\n      return options || [];\r\n    },\r\n    arrangement() {\r\n      let arrangement = this.viewOption.arrangement;\r\n      if (arrangement) {\r\n        arrangement = JSON.parse(arrangement);\r\n        return arrangement || false;\r\n      } else {\r\n        return false;\r\n      }\r\n    },\r\n    size() {\r\n      let size = this.viewOption.size;\r\n      if (size == "routine") {\r\n        size = "default";\r\n      }\r\n      return size;\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let viewBody = this.viewBody;\r\n      let textSize = this.v.textSize(option.textSize);\r\n      let primaryColor = this.v.color(option.textColor);\r\n      let align = this.v.align(option.align);\r\n      let textWeight = option.textWeight;\r\n\r\n      let style = {};\r\n      style["position"] = "absolute";\r\n      style = { ...textSize, ...style };\r\n      style["font-weight"] = textWeight;\r\n      style["color"] = `${primaryColor}`;\r\n      if (viewBody.relative) {\r\n        if (viewBody.autoHeight) {\r\n          style["position"] = "relative";\r\n        }\r\n      }\r\n\r\n      return {\r\n        ...align,\r\n        ...style,\r\n      };\r\n    },\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    border() {\r\n      return {\r\n        color: "#000",\r\n        width: 0,\r\n        style: "solid",\r\n        position: ["top", "bottom", "left", "right"],\r\n        radiusOnly: [],\r\n        radiusMore: [],\r\n        radiusState: true,\r\n      };\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "文字大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    input() {\r\n      return {\r\n        name: "输入框",\r\n        type: "input",\r\n        default: "",\r\n        key: "input",\r\n        value: [],\r\n        hideTitle: true,\r\n      };\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n    collection() {\r\n      return {\r\n        name: "列表",\r\n        key: "list",\r\n        type: "collection",\r\n        model: "collection",\r\n      };\r\n    },\r\n  },\r\n  watch: {\r\n    options(value) {\r\n      if (value) {\r\n        this.selected = 0;\r\n        this.onChange();\r\n      }\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less">\r\n.display-view-radio {\r\n  // 在此开始写自定义样式\r\n  .bm-display-input-radio {\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    .ivu-radio-wrapper {\r\n      font-size: inherit;\r\n      height: inherit;\r\n      line-height: inherit;\r\n      .ivu-radio {\r\n        font-size: 0;\r\n        .ivu-radio-inner {\r\n          &:after {\r\n            left: 50%;\r\n            top: 50%;\r\n            transform: translateX(-50%) translateY(-50%);\r\n            border-radius: 50%;\r\n          }\r\n        }\r\n      }\r\n      .text {\r\n        vertical-align: middle;\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  },
  f654: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <div class="bm-display-base-image" :style="imageStyle" @click="onClick"></div>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    onClick() {\r\n      this.doAction("click", this.image);\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        value: {\r\n          ...this.imageDefault,\r\n        },\r\n      });\r\n\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        width: 2,\r\n        height: 2,\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        fitDegree: {\r\n          ...this.select,\r\n          name: "契合度",\r\n          key: "fitDegree",\r\n          default: "auto",\r\n          value: [\r\n            { key: "auto", name: "适应", value: "auto" },\r\n            { key: "stretching", name: "拉伸", value: "stretching" },\r\n            { key: "no-repeat", name: "平铺", value: "no-repeat" },\r\n          ],\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        click: {\r\n          key: "click",\r\n          name: "点击",\r\n        },\r\n      });\r\n    },\r\n  },\r\n  computed: {\r\n    imageStyle() {\r\n      let option = this.viewOption;\r\n      let fitDegree = this.fitDegree;\r\n      let bodyStyle = this.bodyStyle;\r\n      let style = {};\r\n      style.width = `${bodyStyle.width}px`;\r\n      style.height = `${bodyStyle.height}px`;\r\n      style.backgroundImage = `url(\'${this.image}\')`;\r\n      if (fitDegree == "auto") {\r\n        style.backgroundRepeat = `no-repeat`;\r\n        style.backgroundSize = `100%`;\r\n        style.backgroundPosition = `center`;\r\n      } else if (fitDegree == "no-repeat") {\r\n        style.backgroundSize = `auto`;\r\n      } else if (fitDegree == "stretching") {\r\n        style.backgroundSize = `100% 100%`;\r\n        style.backgroundRepeat = `no-repeat`;\r\n      }\r\n      return {\r\n        ...style,\r\n      };\r\n    },\r\n    bodyStyle() {\r\n      return this.viewStore.getters["body/getBodyStyle"](this.body);\r\n    },\r\n    image() {\r\n      return this.getValue("value") || "";\r\n    },\r\n    fitDegree() {\r\n      return this.viewOption.fitDegree || {};\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    imageDefault() {\r\n      return {\r\n        name: "图片",\r\n        key: "value",\r\n        type: "image",\r\n        model: "default",\r\n        default: "https://pan.bnocode.com/public/image/logo.jpg",\r\n        format: "",\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n  // 在此开始写自定义样式\r\n  .bm-display-base-image {\r\n  }\r\n}\r\n</style>'
  },
  fbbe: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="view">\r\n    <div style="background:#eee;padding: 20px">\r\n      <Card :bordered="false">\r\n        <p slot="title">No border title</p>\r\n        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type.</p>\r\n      </Card>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {},\r\n};\r\n<\/script>\r\n<style lang="less" scoped>\r\n.view {\r\n}\r\n</style>'
  },
  fc24: function(e, n, t) {
    "use strict";
    t.d(n, "a", (function() {
        return o
      }
    ));
    var r = t("2473")
      , a = new r["default"]
      , i = "/api/third/lbs"
      , o = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weixin"
        , n = arguments.length > 1 ? arguments[1] : void 0
        , t = arguments.length > 2 ? arguments[2] : void 0
        , r = arguments.length > 3 ? arguments[3] : void 0
        , o = "".concat(i, "/").concat(e, "/poi")
        , c = {
        lat: n,
        lng: t,
        map: r
      };
      return a.request({
        url: o,
        method: "post",
        data: c
      })
    }
  },
  fd95: function(e, n, t) {
    "use strict";
    t.r(n),
      n["default"] = '<template>\r\n  <div class="display-view-switch">\r\n    \x3c!-- 在此处开始写自定义组件 --\x3e\r\n    <i-switch\r\n      :size="size"\r\n      :style="textStyle"\r\n      :true-color="trueColor"\r\n      :false-color="falseColor"\r\n      class="bm-display-input-switch"\r\n      @on-change="change"\r\n    >\r\n      <span slot="open" v-if="trueValue">{{trueValue}}</span>\r\n      <span slot="close" v-if="trueValue">{{falseValue}}</span>\r\n    </i-switch>\r\n  </div>\r\n</template> \r\n<script>\r\nmodule.exports = {\r\n  data() {\r\n    return {};\r\n  },\r\n  methods: {\r\n    change(event) {\r\n      this.doAction("change", event);\r\n    },\r\n    setInputValue(key, value) {\r\n      let adapter = this.getAdapter(key);\r\n      let adapterValue = adapter.value;\r\n      if (adapterValue && adapterValue[0] == "prop") {\r\n        let variableKey = adapterValue[1];\r\n        if (variableKey) {\r\n          this.displayStore.dispatch("property/setValue", {\r\n            key: variableKey,\r\n            value,\r\n          });\r\n        }\r\n      }\r\n    },\r\n    setup() {\r\n      //初始化数值\r\n      this.viewStore.dispatch("adapter/setField", {\r\n        switch: {\r\n          ...this.stringArray,\r\n          name: "开关",\r\n          key: "switch",\r\n          default: [],\r\n        },\r\n        "switch.on": {\r\n          ...this.string,\r\n          name: "开启时的值",\r\n          key: "switch.on",\r\n        },\r\n        "switch.off": {\r\n          ...this.string,\r\n          name: "关闭时的值",\r\n          key: "switch.off",\r\n        },\r\n      });\r\n\r\n      //设置默认样式\r\n      this.viewStore.dispatch("body/setDefaultBody", {\r\n        body: {\r\n          width: 5,\r\n          height: 1,\r\n        },\r\n      });\r\n\r\n      //设置默认配置\r\n      this.viewStore.dispatch("option/setMap", {\r\n        size: {\r\n          ...this.select,\r\n          name: "开关的尺寸",\r\n          key: "size",\r\n          default: "routine",\r\n          value: [\r\n            { key: "small", name: "小", value: "small" },\r\n            { key: "routine", name: "常规", value: "routine" },\r\n            { key: "large", name: "大", value: "large" },\r\n          ],\r\n        },\r\n        textColor: {\r\n          ...this.mixinOption(this.primaryColor, "文字颜色"),\r\n          key: "textColor",\r\n          default: "#fff",\r\n        },\r\n        falseColor: {\r\n          ...this.mixinOption(this.primaryColor, "关闭时背景色"),\r\n          key: "falseColor",\r\n          default: "#ccc",\r\n        },\r\n        trueColor: {\r\n          ...this.mixinOption(this.primaryColor, "开启式背景色"),\r\n          key: "trueColor",\r\n          default: "#0098FF",\r\n        },\r\n        falseValue: {\r\n          ...this.input,\r\n          name: "关闭时的值",\r\n          key: "falseValue",\r\n          default: "",\r\n          value: "",\r\n        },\r\n        trueValue: {\r\n          ...this.input,\r\n          name: "开启时的值",\r\n          key: "trueValue",\r\n          default: "",\r\n          value: "",\r\n        },\r\n      });\r\n\r\n      //触发\r\n      this.viewStore.dispatch("action/setMap", {\r\n        change: {\r\n          key: "change",\r\n          name: "切换",\r\n        },\r\n      });\r\n    },\r\n    mixinOption(optionValue, name, defaultValue) {\r\n      let result = { ...optionValue };\r\n      if (name) {\r\n        result.name = name;\r\n      }\r\n      if (defaultValue) {\r\n        result.default = defaultValue;\r\n      }\r\n      return result;\r\n    },\r\n  },\r\n  mounted() {},\r\n  computed: {\r\n    switchValue() {\r\n      return this.getValue("switch");\r\n    },\r\n    trueColor() {\r\n      return this.viewOption.trueColor;\r\n    },\r\n    falseColor() {\r\n      return this.viewOption.falseColor;\r\n    },\r\n    trueValue() {\r\n      return this.viewOption.trueValue || "";\r\n    },\r\n    falseValue() {\r\n      return this.viewOption.falseValue || "";\r\n    },\r\n    options() {\r\n      let options = this.getCollection("options");\r\n      if (!this.model && options[0]) {\r\n        this.model = options[0].label;\r\n      }\r\n      return options || [];\r\n    },\r\n    size() {\r\n      let size = this.viewOption.size;\r\n      if (size == "routine") {\r\n        size = "default";\r\n      }\r\n      return size;\r\n    },\r\n    textStyle() {\r\n      let option = this.viewOption;\r\n      let viewBody = this.viewBody;\r\n      let color = this.v.color(option.textColor);\r\n      let align = this.v.align(option.align);\r\n      let style = {};\r\n      style["position"] = "absolute";\r\n      if (viewBody.relative) {\r\n        if (viewBody.autoHeight) {\r\n          style["position"] = "relative";\r\n        }\r\n      }\r\n      style["color"] = `${color}`;\r\n      return {\r\n        ...style,\r\n      };\r\n    },\r\n    primaryColor() {\r\n      return {\r\n        ...this.color,\r\n        name: "文字颜色",\r\n        default: "black",\r\n        key: "primaryColor",\r\n      };\r\n    },\r\n    color() {\r\n      return {\r\n        name: "颜色",\r\n        type: "color",\r\n        default: "transparent",\r\n        key: "color",\r\n        value: [\r\n          { key: "light-blue", name: "浅蓝", value: "rgba(0,168,255,1)" },\r\n          { key: "blue", name: "蓝色", value: "rgba(38,128,235,1)" },\r\n          { key: "green", name: "绿色", value: "rgba(72,212,151,1)" },\r\n          { key: "red", name: "红色", value: "rgba(254,89,89,1)" },\r\n          { key: "orange", name: "橙色", value: "rgba(255,167,14,1)" },\r\n          {\r\n            key: "dark-green",\r\n            name: "深绿",\r\n            value:\r\n              "linear-gradient(180deg,rgba(0,206,187,1) 0%,rgba(2,190,193,1) 100%)",\r\n          },\r\n          { key: "black", name: "黑色", value: "rgba(30, 18, 22, 1)" },\r\n          { key: "gray", name: "灰色", value: "rgba(221, 221, 221, 1)" },\r\n          { key: "white", name: "白色", value: "rgba(255, 255, 255, 1)" },\r\n          {\r\n            key: "transparent",\r\n            name: "透明",\r\n            value: "url(\'/image/dev/img.png\')",\r\n          },\r\n        ],\r\n      };\r\n    },\r\n    border() {\r\n      return {\r\n        color: "#000",\r\n        width: 0,\r\n        style: "solid",\r\n        position: ["top", "bottom", "left", "right"],\r\n        radiusOnly: [],\r\n        radiusMore: [],\r\n        radiusState: true,\r\n      };\r\n    },\r\n    textSize() {\r\n      return {\r\n        name: "文字大小",\r\n        type: "textSize",\r\n        default: "sm",\r\n        key: "textSize",\r\n        value: [\r\n          "xl", //特大\r\n          "lg", //大\r\n          "md", //中\r\n          "sm", //小\r\n          "xs", //特小\r\n        ],\r\n      };\r\n    },\r\n    select() {\r\n      return {\r\n        name: "选择",\r\n        type: "select",\r\n        default: "",\r\n        key: "select",\r\n        value: [\r\n          { key: "right-angle", name: "直角", value: "3px" },\r\n          { key: "fillet", name: "圆角", value: "1000px" },\r\n        ],\r\n      };\r\n    },\r\n    iconBox() {\r\n      return {\r\n        name: "已选图标",\r\n        type: "iconBox",\r\n        default: "",\r\n        key: "iconBox",\r\n        value: [],\r\n      };\r\n    },\r\n    input() {\r\n      return {\r\n        name: "输入框",\r\n        type: "input",\r\n        default: "",\r\n        key: "input",\r\n        value: [],\r\n        hideTitle: true,\r\n      };\r\n    },\r\n    string() {\r\n      return {\r\n        name: "文本",\r\n        key: "value",\r\n        type: "string",\r\n        model: "default",\r\n        default: "文本内容",\r\n        format: "",\r\n      };\r\n    },\r\n    collection() {\r\n      return {\r\n        name: "列表",\r\n        key: "list",\r\n        type: "collection",\r\n        model: "collection",\r\n      };\r\n    },\r\n    stringArray() {\r\n      return {\r\n        name: "文本数组",\r\n        key: "value",\r\n        type: "string",\r\n        model: "array",\r\n        default: `["文本1", "文本2", "文本3"]`,\r\n        format: "",\r\n      };\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n<style lang="less">\r\n.display-view-switch {\r\n  // 在此开始写自定义样式\r\n  .bm-display-input-switch {\r\n    box-shadow: none;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    .ivu-switch-inner {\r\n      color: inherit;\r\n      font-size: 78%;\r\n      word-break: keep-all;\r\n      left: inherit;\r\n      right: 12%;\r\n    }\r\n    &.ivu-switch-checked {\r\n      .ivu-switch-inner {\r\n        left: 12%;\r\n      }\r\n    }\r\n  }\r\n}\r\n</style>'
  }
});
