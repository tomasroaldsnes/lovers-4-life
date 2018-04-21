webpackHotUpdate(5,{

/***/ "./pages/lovers/all.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring__ = __webpack_require__("./node_modules/react-spring/dist/react-spring.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_lover__ = __webpack_require__("./ethereum/lover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");

var _jsxFileName = '/home/tomasroaldsnes/Code/lovers-for-life/pages/lovers/all.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
        var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

        enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// Little helpers ...
var url = function url(name) {
        var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return (wrap ? 'url(' : '') + 'https://awv3node-homepage.surge.sh/build/assets/' + name + '.svg' + (wrap ? ')' : '');
};

var LoverAll = function (_Component) {
        _inherits(LoverAll, _Component);

        function LoverAll() {
                _classCallCheck(this, LoverAll);

                return _possibleConstructorReturn(this, (LoverAll.__proto__ || Object.getPrototypeOf(LoverAll)).apply(this, arguments));
        }

        _createClass(LoverAll, [{
                key: 'render',
                value: function render() {
                        var _this2 = this;

                        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                {
                                        __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 46
                                        }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 48
                                        }
                                }),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */],
                                        { ref: function ref(_ref) {
                                                        return _this2.parallax = _ref;
                                                }, pages: 1, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 53
                                                }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */].Layer, { offset: 0, speed: 0, factor: 3, style: { backgroundColor: '#57C7FF', backgroundSize: 'cover' }, __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 56
                                                }
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                                __WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */].Layer,
                                                { offset: 0, speed: 0.8, style: { opacity: 0.1 }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 60
                                                        }
                                                },
                                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '55%' }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 61
                                                        }
                                                }),
                                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '15%' }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 62
                                                        }
                                                })
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                                __WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */].Layer,
                                                { offset: 0.75, speed: 0.5, style: { opacity: 0.1 }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 65
                                                        }
                                                },
                                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '70%' }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 66
                                                        }
                                                }),
                                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '40%' }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 67
                                                        }
                                                })
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                                __WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */].Layer,
                                                { offset: 0, speed: 0.2, style: { opacity: 0.2 }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 70
                                                        }
                                                },
                                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '10%' }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 71
                                                        }
                                                }),
                                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '75%' }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 72
                                                        }
                                                })
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                                __WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */].Layer,
                                                {
                                                        offset: 0,
                                                        speed: 0.1,
                                                        onClick: function onClick() {
                                                                return _this2.parallax.scrollTo(1);
                                                        },
                                                        style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 77
                                                        }
                                                },
                                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                                        'h3',
                                                        {
                                                                __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 82
                                                                }
                                                        },
                                                        'All Lovers'
                                                )
                                        )
                                )
                        );
                }
        }, {
                key: '__reactstandin__regenerateByEval',
                value: function __reactstandin__regenerateByEval(key, code) {
                        this[key] = eval(code);
                }
        }], [{
                key: 'getInitialProps',
                value: function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(props) {
                                var Lover, loverList, amountOfLovers, i, loverobj;
                                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                                        while (1) {
                                                switch (_context.prev = _context.next) {
                                                        case 0:
                                                                Lover = {
                                                                        yourName: '',
                                                                        loversName: '',
                                                                        message: ''
                                                                };
                                                                loverList = [];
                                                                //const lover = Campaign(props.query.address);

                                                                _context.next = 4;
                                                                return __WEBPACK_IMPORTED_MODULE_4__ethereum_lover__["a" /* default */].methods.amountOfLovers().call();

                                                        case 4:
                                                                amountOfLovers = _context.sent;

                                                                console.log(amountOfLovers);

                                                                i = void 0;
                                                                i = 0;

                                                        case 8:
                                                                if (!(i < amountOfLovers)) {
                                                                        _context.next = 17;
                                                                        break;
                                                                }

                                                                _context.next = 11;
                                                                return __WEBPACK_IMPORTED_MODULE_4__ethereum_lover__["a" /* default */].methods.loverList(i).call();

                                                        case 11:
                                                                loverobj = _context.sent;

                                                                console.log(loverobj);
                                                                loverList.push(__WEBPACK_IMPORTED_MODULE_4__ethereum_lover__["a" /* default */]);

                                                        case 14:
                                                                i++;
                                                                _context.next = 8;
                                                                break;

                                                        case 17:
                                                                ;

                                                                //const summary = await campaign.methods.getSummary().call();
                                                                //console.log(lover);

                                                                return _context.abrupt('return', {});

                                                        case 19:
                                                        case 'end':
                                                                return _context.stop();
                                                }
                                        }
                                }, _callee, this);
                        }));

                        function getInitialProps(_x2) {
                                return _ref2.apply(this, arguments);
                        }

                        return getInitialProps;
                }()
        }]);

        return LoverAll;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = LoverAll;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
        var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

        var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

        if (!reactHotLoader) {
                return;
        }

        reactHotLoader.register(url, 'url', '/home/tomasroaldsnes/Code/lovers-for-life/pages/lovers/all.js');
        reactHotLoader.register(LoverAll, 'LoverAll', '/home/tomasroaldsnes/Code/lovers-for-life/pages/lovers/all.js');
        reactHotLoader.register(_default, 'default', '/home/tomasroaldsnes/Code/lovers-for-life/pages/lovers/all.js');
        leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/lovers/all")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.b5acfe7768d7c687a1d9.hot-update.js.map