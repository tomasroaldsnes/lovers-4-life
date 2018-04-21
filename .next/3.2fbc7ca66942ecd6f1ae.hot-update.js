webpackHotUpdate(3,{

/***/ "./components/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_lover__ = __webpack_require__("./ethereum/lover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);

var _jsxFileName = '/home/tomasroaldsnes/Code/lovers-for-life/components/Form.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FormLovers = function (_Component) {
    _inherits(FormLovers, _Component);

    function FormLovers() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, FormLovers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormLovers.__proto__ || Object.getPrototypeOf(FormLovers)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            yourName: '',
            partnersName: '',
            why: '',
            isLoading: false,
            payment: 9000000000000000,
            error: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(event) {
                var accounts, newCampaign;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _context.prev = 1;

                                _this.setState({ error: false });
                                _this.setState({ isLoading: true });
                                _context.next = 6;
                                return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return __WEBPACK_IMPORTED_MODULE_3__ethereum_lover__["a" /* default */].methods.createLover(_this.state.yourName, _this.state.partnersName, _this.state.why).send({
                                    from: accounts[0],
                                    value: _this.state.payment
                                });

                            case 9:
                                newCampaign = _context.sent;

                                __WEBPACK_IMPORTED_MODULE_5__routes__["Router"].pushRoute('/lovers/' + accounts[0]);

                                //this.setState({isLoading: false});

                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](1);

                                _this.setState({
                                    error: true,
                                    isLoading: false,
                                    errorMessage: _context.t0.message
                                });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FormLovers, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var value = this.state.value;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */],
                    { onSubmit: this.onSubmit, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Group,
                        { widths: 'equal', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field, { control: __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["i" /* Input */],
                            value: this.state.yourName,
                            label: 'Your name',
                            onChange: function onChange(event) {
                                return _this3.setState({ yourName: event.target.value });
                            },
                            placeholder: 'Your name', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field, { control: __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["i" /* Input */],
                            value: this.state.partnersName,
                            label: 'Partners name',
                            onChange: function onChange(event) {
                                return _this3.setState({ partnersName: event.target.value });
                            },
                            placeholder: 'Partners name', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field, { control: __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["k" /* TextArea */],
                        value: this.state.why,
                        transparent: true,
                        label: 'Why do you love your partner?',
                        onChange: function onChange(event) {
                            return _this3.setState({ why: event.target.value });
                        },
                        placeholder: 'Proclaim your love!', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field,
                        { control: __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], loading: this.state.isLoading, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 72
                            }
                        },
                        'Submit'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */],
                    { hidden: !this.state.isLoading, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */].Content,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */].Header,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 76
                                }
                            },
                            'Just one second'
                        ),
                        'Foreverizing your love. Please accept the transaction in the MetaMask plugin.'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */],
                    { hidden: !this.state.error, negative: this.state.error, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */].Content,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 81
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */].Header,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 82
                                }
                            },
                            'Oops!'
                        ),
                        'Something went wrong here. Transaction was rejected. Do you have sufficient funds in your Meta Mask account?'
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return FormLovers;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = FormLovers;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(FormLovers, 'FormLovers', '/home/tomasroaldsnes/Code/lovers-for-life/components/Form.js');
    reactHotLoader.register(_default, 'default', '/home/tomasroaldsnes/Code/lovers-for-life/components/Form.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next-routes/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsxFileName = 'src/index.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pathToRegexp = __webpack_require__("./node_modules/next/node_modules/path-to-regexp/index.js");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _url = __webpack_require__("./node_modules/url/url.js");

var _link = __webpack_require__("./node_modules/next/link.js");

var _link2 = _interopRequireDefault(_link);

var _router = __webpack_require__("./node_modules/next/router.js");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function (opts) {
  return new Routes(opts);
};

var Routes = function () {
  function Routes() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$Link = _ref.Link,
        Link = _ref$Link === undefined ? _link2.default : _ref$Link,
        _ref$Router = _ref.Router,
        Router = _ref$Router === undefined ? _router2.default : _ref$Router;

    _classCallCheck(this, Routes);

    this.routes = [];
    this.Link = this.getLink(Link);
    this.Router = this.getRouter(Router);
  }

  _createClass(Routes, [{
    key: 'add',
    value: function add(name, pattern, page) {
      var options = void 0;
      if (name instanceof Object) {
        options = name;
        name = options.name;
      } else {
        if (name[0] === '/') {
          page = pattern;
          pattern = name;
          name = null;
        }
        options = { name: name, pattern: pattern, page: page };
      }

      if (this.findByName(name)) {
        throw new Error('Route "' + name + '" already exists');
      }

      this.routes.push(new Route(options));
      return this;
    }
  }, {
    key: 'findByName',
    value: function findByName(name) {
      if (name) {
        return this.routes.filter(function (route) {
          return route.name === name;
        })[0];
      }
    }
  }, {
    key: 'match',
    value: function match(url) {
      var parsedUrl = (0, _url.parse)(url, true);
      var pathname = parsedUrl.pathname,
          query = parsedUrl.query;


      return this.routes.reduce(function (result, route) {
        if (result.route) return result;
        var params = route.match(pathname);
        if (!params) return result;
        return _extends({}, result, { route: route, params: params, query: _extends({}, query, params) });
      }, { query: query, parsedUrl: parsedUrl });
    }
  }, {
    key: 'findAndGetUrls',
    value: function findAndGetUrls(nameOrUrl, params) {
      var route = this.findByName(nameOrUrl);

      if (route) {
        return { route: route, urls: route.getUrls(params), byName: true };
      } else {
        var _match = this.match(nameOrUrl),
            _route = _match.route,
            query = _match.query;

        var href = _route ? _route.getHref(query) : nameOrUrl;
        var urls = { href: href, as: nameOrUrl };
        return { route: _route, urls: urls };
      }
    }
  }, {
    key: 'getRequestHandler',
    value: function getRequestHandler(app, customHandler) {
      var _this = this;

      var nextHandler = app.getRequestHandler();

      return function (req, res) {
        var _match2 = _this.match(req.url),
            route = _match2.route,
            query = _match2.query,
            parsedUrl = _match2.parsedUrl;

        if (route) {
          if (customHandler) {
            customHandler({ req: req, res: res, route: route, query: query });
          } else {
            app.render(req, res, route.page, query);
          }
        } else {
          nextHandler(req, res, parsedUrl);
        }
      };
    }
  }, {
    key: 'getLink',
    value: function getLink(Link) {
      var _this2 = this;

      var LinkRoutes = function LinkRoutes(props) {
        var route = props.route,
            params = props.params,
            to = props.to,
            newProps = _objectWithoutProperties(props, ['route', 'params', 'to']);

        var nameOrUrl = route || to;

        if (nameOrUrl) {
          Object.assign(newProps, _this2.findAndGetUrls(nameOrUrl, params).urls);
        }

        return _react2.default.createElement(Link, _extends({}, newProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }));
      };
      return LinkRoutes;
    }
  }, {
    key: 'getRouter',
    value: function getRouter(Router) {
      var _this3 = this;

      var wrap = function wrap(method) {
        return function (route, params, options) {
          var _findAndGetUrls = _this3.findAndGetUrls(route, params),
              byName = _findAndGetUrls.byName,
              _findAndGetUrls$urls = _findAndGetUrls.urls,
              as = _findAndGetUrls$urls.as,
              href = _findAndGetUrls$urls.href;

          return Router[method](href, as, byName ? options : params);
        };
      };

      Router.pushRoute = wrap('push');
      Router.replaceRoute = wrap('replace');
      Router.prefetchRoute = wrap('prefetch');
      return Router;
    }
  }]);

  return Routes;
}();

var Route = function () {
  function Route(_ref2) {
    var name = _ref2.name,
        pattern = _ref2.pattern,
        _ref2$page = _ref2.page,
        page = _ref2$page === undefined ? name : _ref2$page;

    _classCallCheck(this, Route);

    if (!name && !page) {
      throw new Error('Missing page to render for route "' + pattern + '"');
    }

    this.name = name;
    this.pattern = pattern || '/' + name;
    this.page = page.replace(/(^|\/)index$/, '').replace(/^\/?/, '/');
    this.regex = (0, _pathToRegexp2.default)(this.pattern, this.keys = []);
    this.keyNames = this.keys.map(function (key) {
      return key.name;
    });
    this.toPath = _pathToRegexp2.default.compile(this.pattern);
  }

  _createClass(Route, [{
    key: 'match',
    value: function match(path) {
      var values = this.regex.exec(path);
      if (values) {
        return this.valuesToParams(values.slice(1));
      }
    }
  }, {
    key: 'valuesToParams',
    value: function valuesToParams(values) {
      var _this4 = this;

      return values.reduce(function (params, val, i) {
        if (val === undefined) return params;
        return Object.assign(params, _defineProperty({}, _this4.keys[i].name, decodeURIComponent(val)));
      }, {});
    }
  }, {
    key: 'getHref',
    value: function getHref() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.page + '?' + toQuerystring(params);
    }
  }, {
    key: 'getAs',
    value: function getAs() {
      var _this5 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var as = this.toPath(params) || '/';
      var keys = Object.keys(params);
      var qsKeys = keys.filter(function (key) {
        return _this5.keyNames.indexOf(key) === -1;
      });

      if (!qsKeys.length) return as;

      var qsParams = qsKeys.reduce(function (qs, key) {
        return Object.assign(qs, _defineProperty({}, key, params[key]));
      }, {});

      return as + '?' + toQuerystring(qsParams);
    }
  }, {
    key: 'getUrls',
    value: function getUrls(params) {
      var as = this.getAs(params);
      var href = this.getHref(params);
      return { as: as, href: href };
    }
  }]);

  return Route;
}();

var toQuerystring = function toQuerystring(obj) {
  return Object.keys(obj).filter(function (key) {
    return obj[key] !== null && obj[key] !== undefined;
  }).map(function (key) {
    var value = obj[key];

    if (Array.isArray(value)) {
      value = value.join('/');
    }
    return [encodeURIComponent(key), encodeURIComponent(value)].join('=');
  }).join('&');
};

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var routes = __webpack_require__("./node_modules/next-routes/dist/index.js")();

routes.add('/lovers/all', '/campaign/all').add('/lovers/:address', '/lovers/forever');

module.exports = routes;
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(routes, 'routes', '/home/tomasroaldsnes/Code/lovers-for-life/routes.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.2fbc7ca66942ecd6f1ae.hot-update.js.map