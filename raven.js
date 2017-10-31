/*! Raven.js 3.9.1 (0b3c5ff) | github.com/getsentry/raven-js */ ! function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.Raven = a()
    }
}(function() {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {
                    exports: {}
                };
                b[g][0].call(k.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            function d(a, b, c, d) {
                return JSON.stringify(a, e(b, d), c)
            }

            function e(a, b) {
                var c = [],
                    d = [];
                return null == b && (b = function(a, b) {
                        return c[0] === b ? "[Circular ~]" : "[Circular ~." + d.slice(0, c.indexOf(b)).join(".") + "]"
                    }),
                    function(e, f) {
                        if (c.length > 0) {
                            var g = c.indexOf(this);
                            ~g ? c.splice(g + 1) : c.push(this), ~g ? d.splice(g, 1 / 0, e) : d.push(e), ~c.indexOf(f) && (f = b.call(this, e, f))
                        } else c.push(f);
                        return null == a ? f : a.call(this, e, f)
                    }
            }
            c = b.exports = d, c.getSerialize = e
        }, {}],
        2: [function(a, b, c) {
            "use strict";

            function d(a, b) {
                function c() {
                    this.$get = ["$window", function(b) {
                        return a
                    }]
                }

                function e(a) {
                    a.decorator("$exceptionHandler", ["Raven", "$delegate", f])
                }

                function f(a, b) {
                    return function(c, d) {
                        a.captureException(c, {
                            extra: {
                                cause: d
                            }
                        }), b(c, d)
                    }
                }
                b = b || window.angular, b && (b.module("ngRaven", []).provider("Raven", c).config(["$provide", e]), a.setDataCallback(function(a, b) {
                    d.a(a), b && b(a)
                }))
            }
            var e = /^\[((?:[$a-zA-Z0-9]+:)?(?:[$a-zA-Z0-9]+))\] (.*?)\n?(\S+)$/;
            d.a = function(a) {
                var b = a.exception;
                if (b) {
                    b = b.values[0];
                    var c = e.exec(b.value);
                    c && (b.type = c[1], b.value = c[2], a.message = b.type + ": " + b.value, a.extra.angularDocs = c[3].substr(0, 250))
                }
            }, b.exports = d, a(6).addPlugin(b.exports)
        }, {
            6: 6
        }],
        3: [function(a, b, c) {
            "use strict";

            function d(a) {
                this.name = "RavenConfigError", this.message = a
            }
            d.prototype = new Error, d.prototype.constructor = d, b.exports = d
        }, {}],
        4: [function(a, b, c) {
            "use strict";
            var d = function(a, b, c) {
                var d = a[b],
                    e = a;
                if (b in a) {
                    var f = "warn" === b ? "warning" : b;
                    a[b] = function() {
                        var a = [].slice.call(arguments),
                            b = "" + a.join(" "),
                            g = {
                                level: f,
                                logger: "console",
                                extra: {
                                    arguments: a
                                }
                            };
                        c && c(b, g), d && Function.prototype.apply.call(d, e, a)
                    }
                }
            };
            b.exports = {
                wrapMethod: d
            }
        }, {}],
        5: [function(a, b, c) {
            (function(c) {
                "use strict";

                function d() {
                    return +new Date
                }

                function e() {
                    this.b = !("object" != typeof JSON || !JSON.stringify), this.c = !f(D), this.d = null, this.e = null, this.f = null, this.g = null, this.h = null, this.i = {}, this.j = {
                        logger: "javascript",
                        ignoreErrors: [],
                        ignoreUrls: [],
                        whitelistUrls: [],
                        includePaths: [],
                        crossOrigin: "anonymous",
                        collectWindowErrors: !0,
                        maxMessageLength: 0,
                        stackTraceLimit: 50,
                        autoBreadcrumbs: !0
                    }, this.k = 0, this.l = !1, this.m = Error.stackTraceLimit, this.n = C.console || {}, this.o = {}, this.p = [], this.q = d(), this.r = [], this.s = [], this.t = null, this.u = C.location, this.v = this.u && this.u.href;
                    for (var a in this.n) this.o[a] = this.n[a]
                }

                function f(a) {
                    return void 0 === a
                }

                function g(a) {
                    return "function" == typeof a
                }

                function h(a) {
                    return "[object String]" === E.toString.call(a)
                }

                function i(a) {
                    return "object" == typeof a && null !== a
                }

                function j(a) {
                    for (var b in a) return !1;
                    return !0
                }

                function k(a) {
                    var b = E.toString.call(a);
                    return i(a) && "[object Error]" === b || "[object Exception]" === b || a instanceof Error
                }

                function l(a, b) {
                    var c, d;
                    if (f(a.length))
                        for (c in a) o(a, c) && b.call(null, c, a[c]);
                    else if (d = a.length)
                        for (c = 0; c < d; c++) b.call(null, c, a[c])
                }

                function m(a, b) {
                    return b ? (l(b, function(b, c) {
                        a[b] = c
                    }), a) : a
                }

                function n(a, b) {
                    return !b || a.length <= b ? a : a.substr(0, b) + "…"
                }

                function o(a, b) {
                    return E.hasOwnProperty.call(a, b)
                }

                function p(a) {
                    for (var b, c = [], d = 0, e = a.length; d < e; d++) b = a[d], h(b) ? c.push(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : b && b.source && c.push(b.source);
                    return new RegExp(c.join("|"), "i")
                }

                function q(a) {
                    var b = [];
                    return l(a, function(a, c) {
                        b.push(encodeURIComponent(a) + "=" + encodeURIComponent(c))
                    }), b.join("&")
                }

                function r(a) {
                    var b = a.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                    if (!b) return {};
                    var c = b[6] || "",
                        d = b[8] || "";
                    return {
                        protocol: b[2],
                        host: b[4],
                        path: b[5],
                        relative: b[5] + c + d
                    }
                }

                function s() {
                    var a = C.crypto || C.msCrypto;
                    if (!f(a) && a.getRandomValues) {
                        var b = new Uint16Array(8);
                        a.getRandomValues(b), b[3] = 4095 & b[3] | 16384, b[4] = 16383 & b[4] | 32768;
                        var c = function(a) {
                            for (var b = a.toString(16); b.length < 4;) b = "0" + b;
                            return b
                        };
                        return c(b[0]) + c(b[1]) + c(b[2]) + c(b[3]) + c(b[4]) + c(b[5]) + c(b[6]) + c(b[7])
                    }
                    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                        var b = 16 * Math.random() | 0,
                            c = "x" === a ? b : 3 & b | 8;
                        return c.toString(16)
                    })
                }

                function t(a) {
                    for (var b, c = 5, d = 80, e = [], f = 0, g = 0, h = " > ", i = h.length; a && f++ < c && (b = u(a), !("html" === b || f > 1 && g + e.length * i + b.length >= d));) e.push(b), g += b.length, a = a.parentNode;
                    return e.reverse().join(h)
                }

                function u(a) {
                    var b, c, d, e, f, g = [];
                    if (!a || !a.tagName) return "";
                    if (g.push(a.tagName.toLowerCase()), a.id && g.push("#" + a.id), b = a.className, b && h(b))
                        for (c = b.split(" "), f = 0; f < c.length; f++) g.push("." + c[f]);
                    var i = ["type", "name", "title", "alt"];
                    for (f = 0; f < i.length; f++) d = i[f], e = a.getAttribute(d), e && g.push("[" + d + '="' + e + '"]');
                    return g.join("")
                }

                function v(a, b, c, d) {
                    var e = a[b];
                    a[b] = c(e), d && d.push([a, b, e])
                }
                var w = a(7),
                    x = a(3),
                    y = a(1),
                    z = a(4).wrapMethod,
                    A = "source protocol user pass host port path".split(" "),
                    B = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,
                    C = "undefined" != typeof window ? window : "undefined" != typeof c ? c : "undefined" != typeof self ? self : {},
                    D = C.document;
                e.prototype = {
                    VERSION: "3.9.1",
                    debug: !1,
                    TraceKit: w,
                    config: function(a, b) {
                        var c = this;
                        if (c.f) return this.w("error", "Error: Raven has already been configured"), c;
                        if (!a) return c;
                        var d = c.j;
                        b && l(b, function(a, b) {
                            "tags" === a || "extra" === a || "user" === a ? c.i[a] = b : d[a] = b
                        }), c.setDSN(a), d.ignoreErrors.push(/^Script error\.?$/), d.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), d.ignoreErrors = p(d.ignoreErrors), d.ignoreUrls = !!d.ignoreUrls.length && p(d.ignoreUrls), d.whitelistUrls = !!d.whitelistUrls.length && p(d.whitelistUrls), d.includePaths = p(d.includePaths), d.maxBreadcrumbs = Math.max(0, Math.min(d.maxBreadcrumbs || 100, 100));
                        var e = {
                                xhr: !0,
                                console: !0,
                                dom: !0,
                                location: !0
                            },
                            f = d.autoBreadcrumbs;
                        return "[object Object]" === {}.toString.call(f) ? f = m(e, f) : f !== !1 && (f = e), d.autoBreadcrumbs = f, w.collectWindowErrors = !!d.collectWindowErrors, c
                    },
                    install: function() {
                        var a = this;
                        return a.isSetup() && !a.l && (w.report.subscribe(function() {
                            a.x.apply(a, arguments)
                        }), a.y(), a.j.autoBreadcrumbs && a.z(), a.A(), a.l = !0), Error.stackTraceLimit = a.j.stackTraceLimit, this
                    },
                    setDSN: function(a) {
                        var b = this,
                            c = b.B(a),
                            d = c.path.lastIndexOf("/"),
                            e = c.path.substr(1, d);
                        b.C = a, b.g = c.user, b.D = c.pass && c.pass.substr(1), b.h = c.path.substr(d + 1), b.f = b.E(c), b.F = b.f + "/" + e + "api/" + b.h + "/store/"
                    },
                    context: function(a, b, c) {
                        return g(a) && (c = b || [], b = a, a = void 0), this.wrap(a, b).apply(this, c)
                    },
                    wrap: function(a, b, c) {
                        function d() {
                            var d = [],
                                f = arguments.length,
                                h = !a || a && a.deep !== !1;
                            for (c && g(c) && c.apply(this, arguments); f--;) d[f] = h ? e.wrap(a, arguments[f]) : arguments[f];
                            try {
                                return b.apply(this, d)
                            } catch (i) {
                                throw e.G(), e.captureException(i, a), i
                            }
                        }
                        var e = this;
                        if (f(b) && !g(a)) return a;
                        if (g(a) && (b = a, a = void 0), !g(b)) return b;
                        try {
                            if (b.H) return b;
                            if (b.I) return b.I
                        } catch (h) {
                            return b
                        }
                        for (var i in b) o(b, i) && (d[i] = b[i]);
                        return d.prototype = b.prototype, b.I = d, d.H = !0, d.J = b, d
                    },
                    uninstall: function() {
                        return w.report.uninstall(), this.K(), Error.stackTraceLimit = this.m, this.l = !1, this
                    },
                    captureException: function(a, b) {
                        if (!k(a)) return this.captureMessage(a, m({
                            trimHeadFrames: 1,
                            stacktrace: !0
                        }, b));
                        this.d = a;
                        try {
                            var c = w.computeStackTrace(a);
                            this.L(c, b)
                        } catch (d) {
                            if (a !== d) throw d
                        }
                        return this
                    },
                    captureMessage: function(a, b) {
                        if (!this.j.ignoreErrors.test || !this.j.ignoreErrors.test(a)) {
                            b = b || {};
                            var c = m({
                                message: a + ""
                            }, b);
                            if (this.j.stacktrace || b && b.stacktrace) {
                                var d;
                                try {
                                    throw new Error(a)
                                } catch (e) {
                                    d = e
                                }
                                d.name = null, b = m({
                                    fingerprint: a,
                                    trimHeadFrames: (b.trimHeadFrames || 0) + 1
                                }, b);
                                var f = w.computeStackTrace(d),
                                    g = this.M(f, b);
                                c.stacktrace = {
                                    frames: g.reverse()
                                }
                            }
                            return this.N(c), this
                        }
                    },
                    captureBreadcrumb: function(a) {
                        var b = m({
                            timestamp: d() / 1e3
                        }, a);
                        if (g(this.j.breadcrumbCallback)) {
                            var c = this.j.breadcrumbCallback(b);
                            if (i(c) && !j(c)) b = c;
                            else if (c === !1) return this
                        }
                        return this.s.push(b), this.s.length > this.j.maxBreadcrumbs && this.s.shift(), this
                    },
                    addPlugin: function(a) {
                        var b = [].slice.call(arguments, 1);
                        return this.p.push([a, b]), this.l && this.A(), this
                    },
                    setUserContext: function(a) {
                        return this.i.user = a, this
                    },
                    setExtraContext: function(a) {
                        return this.O("extra", a), this
                    },
                    setTagsContext: function(a) {
                        return this.O("tags", a), this
                    },
                    clearContext: function() {
                        return this.i = {}, this
                    },
                    getContext: function() {
                        return JSON.parse(y(this.i))
                    },
                    setEnvironment: function(a) {
                        return this.j.environment = a, this
                    },
                    setRelease: function(a) {
                        return this.j.release = a, this
                    },
                    setDataCallback: function(a) {
                        var b = this.j.dataCallback;
                        return this.j.dataCallback = g(a) ? function(c) {
                            return a(c, b)
                        } : a, this
                    },
                    setBreadcrumbCallback: function(a) {
                        var b = this.j.breadcrumbCallback;
                        return this.j.breadcrumbCallback = g(a) ? function(c) {
                            return a(c, b)
                        } : a, this
                    },
                    setShouldSendCallback: function(a) {
                        var b = this.j.shouldSendCallback;
                        return this.j.shouldSendCallback = g(a) ? function(c) {
                            return a(c, b)
                        } : a, this
                    },
                    setTransport: function(a) {
                        return this.j.transport = a, this
                    },
                    lastException: function() {
                        return this.d
                    },
                    lastEventId: function() {
                        return this.e
                    },
                    isSetup: function() {
                        return !!this.b && (!!this.f || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this.w("error", "Error: Raven has not been configured.")), !1))
                    },
                    afterLoad: function() {
                        var a = C.RavenConfig;
                        a && this.config(a.dsn, a.config).install()
                    },
                    showReportDialog: function(a) {
                        if (D) {
                            a = a || {};
                            var b = a.eventId || this.lastEventId();
                            if (!b) throw new x("Missing eventId");
                            var c = a.dsn || this.C;
                            if (!c) throw new x("Missing DSN");
                            var d = encodeURIComponent,
                                e = "";
                            e += "?eventId=" + d(b), e += "&dsn=" + d(c);
                            var f = a.user || this.i.user;
                            f && (f.name && (e += "&name=" + d(f.name)), f.email && (e += "&email=" + d(f.email)));
                            var g = this.E(this.B(c)),
                                h = D.createElement("script");
                            h.async = !0, h.src = g + "/api/embed/error-page/" + e, (D.head || D.body).appendChild(h)
                        }
                    },
                    G: function() {
                        var a = this;
                        this.k += 1, setTimeout(function() {
                            a.k -= 1
                        })
                    },
                    P: function(a, b) {
                        var c, d;
                        if (this.c) {
                            b = b || {}, a = "raven" + a.substr(0, 1).toUpperCase() + a.substr(1), D.createEvent ? (c = D.createEvent("HTMLEvents"), c.initEvent(a, !0, !0)) : (c = D.createEventObject(), c.eventType = a);
                            for (d in b) o(b, d) && (c[d] = b[d]);
                            if (D.createEvent) D.dispatchEvent(c);
                            else try {
                                D.fireEvent("on" + c.eventType.toLowerCase(), c)
                            } catch (e) {}
                        }
                    },
                    Q: function(a) {
                        var b = this;
                        return function(c) {
                            if (b.R = null, b.t !== c) {
                                b.t = c;
                                var d, e = c.target;
                                try {
                                    d = t(e)
                                } catch (f) {
                                    d = "<unknown>"
                                }
                                b.captureBreadcrumb({
                                    category: "ui." + a,
                                    message: d
                                })
                            }
                        }
                    },
                    S: function() {
                        var a = this,
                            b = 1e3;
                        return function(c) {
                            var d = c.target,
                                e = d && d.tagName;
                            if (e && ("INPUT" === e || "TEXTAREA" === e || d.isContentEditable)) {
                                var f = a.R;
                                f || a.Q("input")(c), clearTimeout(f), a.R = setTimeout(function() {
                                    a.R = null
                                }, b)
                            }
                        }
                    },
                    T: function(a, b) {
                        var c = r(this.u.href),
                            d = r(b),
                            e = r(a);
                        this.v = b, c.protocol === d.protocol && c.host === d.host && (b = d.relative), c.protocol === e.protocol && c.host === e.host && (a = e.relative), this.captureBreadcrumb({
                            category: "navigation",
                            data: {
                                to: b,
                                from: a
                            }
                        })
                    },
                    y: function() {
                        function a(a) {
                            return function(b, d) {
                                for (var e = new Array(arguments.length), f = 0; f < e.length; ++f) e[f] = arguments[f];
                                var h = e[0];
                                return g(h) && (e[0] = c.wrap(h)), a.apply ? a.apply(this, e) : a(e[0], e[1])
                            }
                        }

                        function b(a) {
                            var b = C[a] && C[a].prototype;
                            b && b.hasOwnProperty && b.hasOwnProperty("addEventListener") && (v(b, "addEventListener", function(b) {
                                return function(d, f, g, h) {
                                    try {
                                        f && f.handleEvent && (f.handleEvent = c.wrap(f.handleEvent))
                                    } catch (i) {}
                                    var j, k, l;
                                    return e && e.dom && ("EventTarget" === a || "Node" === a) && (k = c.Q("click"), l = c.S(), j = function(a) {
                                        if (a) return "click" === a.type ? k(a) : "keypress" === a.type ? l(a) : void 0
                                    }), b.call(this, d, c.wrap(f, void 0, j), g, h)
                                }
                            }, d), v(b, "removeEventListener", function(a) {
                                return function(b, c, d, e) {
                                    try {
                                        c = c && (c.I ? c.I : c)
                                    } catch (f) {}
                                    return a.call(this, b, c, d, e)
                                }
                            }, d))
                        }
                        var c = this,
                            d = c.r,
                            e = this.j.autoBreadcrumbs;
                        v(C, "setTimeout", a, d), v(C, "setInterval", a, d), C.requestAnimationFrame && v(C, "requestAnimationFrame", function(a) {
                            return function(b) {
                                return a(c.wrap(b))
                            }
                        }, d);
                        for (var f = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], h = 0; h < f.length; h++) b(f[h]);
                        var i = C.jQuery || C.$;
                        i && i.fn && i.fn.ready && v(i.fn, "ready", function(a) {
                            return function(b) {
                                return a.call(this, c.wrap(b))
                            }
                        }, d)
                    },
                    z: function() {
                        function a(a, c) {
                            a in c && g(c[a]) && v(c, a, function(a) {
                                return b.wrap(a)
                            })
                        }
                        var b = this,
                            c = this.j.autoBreadcrumbs,
                            d = b.r;
                        if (c.xhr && "XMLHttpRequest" in C) {
                            var e = XMLHttpRequest.prototype;
                            v(e, "open", function(a) {
                                return function(c, d) {
                                    return h(d) && d.indexOf(b.g) === -1 && (this.U = {
                                        method: c,
                                        url: d,
                                        status_code: null
                                    }), a.apply(this, arguments)
                                }
                            }, d), v(e, "send", function(c) {
                                return function(d) {
                                    function e() {
                                        if (f.U && (1 === f.readyState || 4 === f.readyState)) {
                                            try {
                                                f.U.status_code = f.status
                                            } catch (a) {}
                                            b.captureBreadcrumb({
                                                type: "http",
                                                category: "xhr",
                                                data: f.U
                                            })
                                        }
                                    }
                                    for (var f = this, h = ["onload", "onerror", "onprogress"], i = 0; i < h.length; i++) a(h[i], f);
                                    return "onreadystatechange" in f && g(f.onreadystatechange) ? v(f, "onreadystatechange", function(a) {
                                        return b.wrap(a, void 0, e)
                                    }) : f.onreadystatechange = e, c.apply(this, arguments)
                                }
                            }, d)
                        }
                        c.xhr && "fetch" in C && v(C, "fetch", function(a) {
                            return function(c, d) {
                                for (var e = new Array(arguments.length), f = 0; f < e.length; ++f) e[f] = arguments[f];
                                var g = "GET";
                                e[1] && e[1].method && (g = e[1].method);
                                var h = {
                                    method: g,
                                    url: e[0],
                                    status_code: null
                                };
                                return b.captureBreadcrumb({
                                    type: "http",
                                    category: "fetch",
                                    data: h
                                }), a.apply(this, e).then(function(a) {
                                    return h.status_code = a.status, a
                                })
                            }
                        }, d), c.dom && this.c && (D.addEventListener ? (D.addEventListener("click", b.Q("click"), !1), D.addEventListener("keypress", b.S(), !1)) : (D.attachEvent("onclick", b.Q("click")), D.attachEvent("onkeypress", b.S())));
                        var f = C.chrome,
                            i = f && f.app && f.app.runtime,
                            j = !i && C.history && history.pushState;
                        if (c.location && j) {
                            var k = C.onpopstate;
                            C.onpopstate = function() {
                                var a = b.u.href;
                                if (b.T(b.v, a), k) return k.apply(this, arguments)
                            }, v(history, "pushState", function(a) {
                                return function() {
                                    var c = arguments.length > 2 ? arguments[2] : void 0;
                                    return c && b.T(b.v, c + ""), a.apply(this, arguments)
                                }
                            }, d)
                        }
                        if (c.console && "console" in C && console.log) {
                            var m = function(a, c) {
                                b.captureBreadcrumb({
                                    message: a,
                                    level: c.level,
                                    category: "console"
                                })
                            };
                            l(["debug", "info", "warn", "error", "log"], function(a, b) {
                                z(console, b, m)
                            })
                        }
                    },
                    K: function() {
                        for (var a; this.r.length;) {
                            a = this.r.shift();
                            var b = a[0],
                                c = a[1],
                                d = a[2];
                            b[c] = d
                        }
                    },
                    A: function() {
                        var a = this;
                        l(this.p, function(b, c) {
                            var d = c[0],
                                e = c[1];
                            d.apply(a, [a].concat(e))
                        })
                    },
                    B: function(a) {
                        var b = B.exec(a),
                            c = {},
                            d = 7;
                        try {
                            for (; d--;) c[A[d]] = b[d] || ""
                        } catch (e) {
                            throw new x("Invalid DSN: " + a)
                        }
                        if (c.pass && !this.j.allowSecretKey) throw new x("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                        return c
                    },
                    E: function(a) {
                        var b = "//" + a.host + (a.port ? ":" + a.port : "");
                        return a.protocol && (b = a.protocol + ":" + b), b
                    },
                    x: function() {
                        this.k || this.L.apply(this, arguments)
                    },
                    L: function(a, b) {
                        var c = this.M(a, b);
                        this.P("handle", {
                            stackInfo: a,
                            options: b
                        }), this.V(a.name, a.message, a.url, a.lineno, c, b)
                    },
                    M: function(a, b) {
                        var c = this,
                            d = [];
                        if (a.stack && a.stack.length && (l(a.stack, function(a, b) {
                                var e = c.W(b);
                                e && d.push(e)
                            }), b && b.trimHeadFrames))
                            for (var e = 0; e < b.trimHeadFrames && e < d.length; e++) d[e].in_app = !1;
                        return d = d.slice(0, this.j.stackTraceLimit)
                    },
                    W: function(a) {
                        if (a.url) {
                            var b = {
                                filename: a.url,
                                lineno: a.line,
                                colno: a.column,
                                "function": a.func || "?"
                            };
                            return b.in_app = !(this.j.includePaths.test && !this.j.includePaths.test(b.filename) || /(Raven|TraceKit)\./.test(b["function"]) || /raven\.(min\.)?js$/.test(b.filename)), b
                        }
                    },
                    V: function(a, b, c, d, e, f) {
                        var g;
                        if ((!this.j.ignoreErrors.test || !this.j.ignoreErrors.test(b)) && (b += "", e && e.length ? (c = e[0].filename || c, e.reverse(), g = {
                                frames: e
                            }) : c && (g = {
                                frames: [{
                                    filename: c,
                                    lineno: d,
                                    in_app: !0
                                }]
                            }), (!this.j.ignoreUrls.test || !this.j.ignoreUrls.test(c)) && (!this.j.whitelistUrls.test || this.j.whitelistUrls.test(c)))) {
                            var h = m({
                                exception: {
                                    values: [{
                                        type: a,
                                        value: b,
                                        stacktrace: g
                                    }]
                                },
                                culprit: c
                            }, f);
                            this.N(h)
                        }
                    },
                    X: function(a) {
                        var b = this.j.maxMessageLength;
                        if (a.message && (a.message = n(a.message, b)), a.exception) {
                            var c = a.exception.values[0];
                            c.value = n(c.value, b)
                        }
                        return a
                    },
                    Y: function() {
                        if (this.c && D.location && D.location.href) {
                            var a = {
                                headers: {
                                    "User-Agent": navigator.userAgent
                                }
                            };
                            return a.url = D.location.href, D.referrer && (a.headers.Referer = D.referrer), a
                        }
                    },
                    N: function(a) {
                        var b = this.j,
                            c = {
                                project: this.h,
                                logger: b.logger,
                                platform: "javascript"
                            },
                            e = this.Y();
                        e && (c.request = e), a.trimHeadFrames && delete a.trimHeadFrames, a = m(c, a), a.tags = m(m({}, this.i.tags), a.tags), a.extra = m(m({}, this.i.extra), a.extra), a.extra["session:duration"] = d() - this.q, this.s && this.s.length > 0 && (a.breadcrumbs = {
                            values: [].slice.call(this.s, 0)
                        }), j(a.tags) && delete a.tags, this.i.user && (a.user = this.i.user), b.environment && (a.environment = b.environment), b.release && (a.release = b.release), b.serverName && (a.server_name = b.serverName), g(b.dataCallback) && (a = b.dataCallback(a) || a), a && !j(a) && (g(b.shouldSendCallback) && !b.shouldSendCallback(a) || this.Z(a))
                    },
                    $: function() {
                        return s()
                    },
                    Z: function(a, b) {
                        var c = this,
                            d = this.j;
                        if (this.e = a.event_id || (a.event_id = this.$()), a = this.X(a), this.w("debug", "Raven about to send:", a), this.isSetup()) {
                            var e = {
                                sentry_version: "7",
                                sentry_client: "raven-js/" + this.VERSION,
                                sentry_key: this.g
                            };
                            this.D && (e.sentry_secret = this.D);
                            var f = a.exception && a.exception.values[0];
                            this.captureBreadcrumb({
                                category: "sentry",
                                message: f ? (f.type ? f.type + ": " : "") + f.value : a.message,
                                event_id: a.event_id,
                                level: a.level || "error"
                            });
                            var g = this.F;
                            (d.transport || this._).call(this, {
                                url: g,
                                auth: e,
                                data: a,
                                options: d,
                                onSuccess: function() {
                                    c.P("success", {
                                        data: a,
                                        src: g
                                    }), b && b()
                                },
                                onError: function(d) {
                                    c.P("failure", {
                                        data: a,
                                        src: g
                                    }), d = d || new Error("Raven send failed (no additional details provided)"), b && b(d)
                                }
                            })
                        }
                    },
                    _: function(a) {
                        function b() {
                            200 === c.status ? a.onSuccess && a.onSuccess() : a.onError && a.onError(new Error("Sentry error code: " + c.status))
                        }
                        var c = new XMLHttpRequest,
                            d = "withCredentials" in c || "undefined" != typeof XDomainRequest;
                        if (d) {
                            var e = a.url;
                            "withCredentials" in c ? c.onreadystatechange = function() {
                                4 === c.readyState && b()
                            } : (c = new XDomainRequest, e = e.replace(/^https?:/, ""), c.onload = b), c.open("POST", e + "?" + q(a.auth)), c.send(y(a.data))
                        }
                    },
                    w: function(a) {
                        this.o[a] && this.debug && Function.prototype.apply.call(this.o[a], this.n, [].slice.call(arguments, 1))
                    },
                    O: function(a, b) {
                        f(b) ? delete this.i[a] : this.i[a] = m(this.i[a] || {}, b)
                    }
                };
                var E = Object.prototype;
                e.prototype.setUser = e.prototype.setUserContext, e.prototype.setReleaseContext = e.prototype.setRelease, b.exports = e
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            1: 1,
            3: 3,
            4: 4,
            7: 7
        }],
        6: [function(a, b, c) {
            (function(c) {
                "use strict";
                var d = a(5),
                    e = "undefined" != typeof window ? window : "undefined" != typeof c ? c : "undefined" != typeof self ? self : {},
                    f = e.Raven,
                    g = new d;
                g.noConflict = function() {
                    return e.Raven = f, g
                }, g.afterLoad(), b.exports = g
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            5: 5
        }],
        7: [function(a, b, c) {
            (function(a) {
                "use strict";

                function c() {
                    return "undefined" == typeof document ? "" : document.location.href
                }
                var d = {
                        collectWindowErrors: !0,
                        debug: !1
                    },
                    e = "undefined" != typeof window ? window : "undefined" != typeof a ? a : "undefined" != typeof self ? self : {},
                    f = [].slice,
                    g = "?",
                    h = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;
                d.report = function() {
                    function a(a) {
                        l(), r.push(a)
                    }

                    function b(a) {
                        for (var b = r.length - 1; b >= 0; --b) r[b] === a && r.splice(b, 1)
                    }

                    function i() {
                        m(), r = []
                    }

                    function j(a, b) {
                        var c = null;
                        if (!b || d.collectWindowErrors) {
                            for (var e in r)
                                if (r.hasOwnProperty(e)) try {
                                    r[e].apply(null, [a].concat(f.call(arguments, 2)))
                                } catch (g) {
                                    c = g
                                }
                            if (c) throw c
                        }
                    }

                    function k(a, b, e, f, i) {
                        var k = null;
                        if (u) d.computeStackTrace.augmentStackTraceWithInitialElement(u, b, e, a), n();
                        else if (i) k = d.computeStackTrace(i), j(k, !0);
                        else {
                            var l, m = {
                                    url: b,
                                    line: e,
                                    column: f
                                },
                                o = void 0,
                                q = a;
                            if ("[object String]" === {}.toString.call(a)) {
                                var l = a.match(h);
                                l && (o = l[1], q = l[2])
                            }
                            m.func = g, k = {
                                name: o,
                                message: q,
                                url: c(),
                                stack: [m]
                            }, j(k, !0)
                        }
                        return !!p && p.apply(this, arguments)
                    }

                    function l() {
                        q || (p = e.onerror, e.onerror = k, q = !0)
                    }

                    function m() {
                        q && (e.onerror = p, q = !1, p = void 0)
                    }

                    function n() {
                        var a = u,
                            b = s;
                        s = null, u = null, t = null, j.apply(null, [a, !1].concat(b))
                    }

                    function o(a, b) {
                        var c = f.call(arguments, 1);
                        if (u) {
                            if (t === a) return;
                            n()
                        }
                        var e = d.computeStackTrace(a);
                        if (u = e, t = a, s = c, setTimeout(function() {
                                t === a && n()
                            }, e.incomplete ? 2e3 : 0), b !== !1) throw a
                    }
                    var p, q, r = [],
                        s = null,
                        t = null,
                        u = null;
                    return o.subscribe = a, o.unsubscribe = b, o.uninstall = i, o
                }(), d.computeStackTrace = function() {
                    function a(a) {
                        if ("undefined" != typeof a.stack && a.stack) {
                            for (var b, d, e = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, f = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, h = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, i = a.stack.split("\n"), j = [], k = (/^(.*) is undefined$/.exec(a.message), 0), l = i.length; k < l; ++k) {
                                if (b = e.exec(i[k])) {
                                    var m = b[2] && b[2].indexOf("native") !== -1;
                                    d = {
                                        url: m ? null : b[2],
                                        func: b[1] || g,
                                        args: m ? [b[2]] : [],
                                        line: b[3] ? +b[3] : null,
                                        column: b[4] ? +b[4] : null
                                    }
                                } else if (b = h.exec(i[k])) d = {
                                    url: b[2],
                                    func: b[1] || g,
                                    args: [],
                                    line: +b[3],
                                    column: b[4] ? +b[4] : null
                                };
                                else {
                                    if (!(b = f.exec(i[k]))) continue;
                                    d = {
                                        url: b[3],
                                        func: b[1] || g,
                                        args: b[2] ? b[2].split(",") : [],
                                        line: b[4] ? +b[4] : null,
                                        column: b[5] ? +b[5] : null
                                    }
                                }!d.func && d.line && (d.func = g), j.push(d)
                            }
                            return j.length ? (j[0].column || "undefined" == typeof a.columnNumber || (j[0].column = a.columnNumber + 1), {
                                name: a.name,
                                message: a.message,
                                url: c(),
                                stack: j
                            }) : null
                        }
                    }

                    function b(a, b, c, d) {
                        var e = {
                            url: b,
                            line: c
                        };
                        if (e.url && e.line) {
                            if (a.incomplete = !1, e.func || (e.func = g), a.stack.length > 0 && a.stack[0].url === e.url) {
                                if (a.stack[0].line === e.line) return !1;
                                if (!a.stack[0].line && a.stack[0].func === e.func) return a.stack[0].line = e.line, !1
                            }
                            return a.stack.unshift(e), a.partial = !0, !0
                        }
                        return a.incomplete = !0, !1
                    }

                    function e(a, h) {
                        for (var i, j, k = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, l = [], m = {}, n = !1, o = e.caller; o && !n; o = o.caller)
                            if (o !== f && o !== d.report) {
                                if (j = {
                                        url: null,
                                        func: g,
                                        line: null,
                                        column: null
                                    }, o.name ? j.func = o.name : (i = k.exec(o.toString())) && (j.func = i[1]), "undefined" == typeof j.func) try {
                                    j.func = i.input.substring(0, i.input.indexOf("{"))
                                } catch (p) {}
                                m["" + o] ? n = !0 : m["" + o] = !0, l.push(j)
                            }
                        h && l.splice(0, h);
                        var q = {
                            name: a.name,
                            message: a.message,
                            url: c(),
                            stack: l
                        };
                        return b(q, a.sourceURL || a.fileName, a.line || a.lineNumber, a.message || a.description), q
                    }

                    function f(b, f) {
                        var g = null;
                        f = null == f ? 0 : +f;
                        try {
                            if (g = a(b)) return g
                        } catch (h) {
                            if (d.debug) throw h
                        }
                        try {
                            if (g = e(b, f + 1)) return g
                        } catch (h) {
                            if (d.debug) throw h
                        }
                        return {
                            name: b.name,
                            message: b.message,
                            url: c()
                        }
                    }
                    return f.augmentStackTraceWithInitialElement = b, f.computeStackTraceFromStackProp = a, f
                }(), b.exports = d
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}]
    }, {}, [6, 2])(6)
});
//# sourceMappingURL=raven.min.js.mapraven.in.
