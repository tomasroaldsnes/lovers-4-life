module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ethereum/lover.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web3__ = __webpack_require__("./ethereum/web3.js");


var address = '0x8EAA1C4521Ee774692ac7519652f61EBb748d190';

var abi = [{ "constant": true, "inputs": [], "name": "amountOfLovers", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "l1", "type": "string" }, { "name": "l2", "type": "string" }, { "name": "message", "type": "string" }], "name": "createLover", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "loverList", "outputs": [{ "name": "lover1", "type": "string" }, { "name": "lover2", "type": "string" }, { "name": "whyDoYouLove", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "user", "type": "address" }], "name": "findLover", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];

var instance = new __WEBPACK_IMPORTED_MODULE_0__web3__["a" /* default */].eth.Contract(abi, address);

/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "./ethereum/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);


var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(window.web3.currentProvider);
} else {
    var provider = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.HttpProvider('https://rinkeby.infura.io/xNLneCcy0sYDceVw7n2N');

    web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(provider);
}

/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ }),

/***/ "./pages/lovers/all.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_spring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_lover__ = __webpack_require__("./ethereum/lover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");

var _jsxFileName = '/home/tomasroaldsnes/Code/lovers-for-life/pages/lovers/all.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LoverAll);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoverAll.__proto__ || Object.getPrototypeOf(LoverAll)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            amountOfLovers: undefined,
            all: [],
            isLoading: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LoverAll, [{
        key: 'componentWillMount',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var amountOfLovers, all, i, loverobj;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                this.setState({ isLoading: true });

                                //const lover = Campaign(props.query.address);
                                _context.next = 3;
                                return __WEBPACK_IMPORTED_MODULE_4__ethereum_lover__["a" /* default */].methods.amountOfLovers().call();

                            case 3:
                                amountOfLovers = _context.sent;

                                //const loverobj = await lover.methods.loverList(3).call();
                                //this.setState({amountOfLovers: amountOfLovers, firstLover: { yourName: loverobj[0], loversName: loverobj[1], message: loverobj[2]} });

                                all = [];
                                i = void 0;
                                i = 0;

                            case 7:
                                if (!(i < amountOfLovers)) {
                                    _context.next = 15;
                                    break;
                                }

                                _context.next = 10;
                                return __WEBPACK_IMPORTED_MODULE_4__ethereum_lover__["a" /* default */].methods.loverList(i).call();

                            case 10:
                                loverobj = _context.sent;

                                all.push({ yn: loverobj[0], ln: loverobj[1], messages: loverobj[2] });

                                //loverList.push({ yourName: loverobj[0], loversName: loverobj[1], message: loverobj[2] });

                            case 12:
                                i++;
                                _context.next = 7;
                                break;

                            case 15:
                                ;

                                this.setState({ amountOfLovers: amountOfLovers, all: all });

                                this.setState({ isLoading: false });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentWillMount() {
                return _ref2.apply(this, arguments);
            }

            return componentWillMount;
        }()
    }, {
        key: 'listRender',
        value: function listRender() {
            var items = this.state.all.map(function (all) {
                return {
                    header: all.yn + ' + ' + all.ln,
                    description: all.messages

                };
            });
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                },
                this.state.isLoading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Header"],
                    { as: 'h1', inverted: true, textAlign: 'center', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    },
                    ' Loading all lovers on the blockchain!'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Loader"], { active: this.state.isLoading, inline: 'centered', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Card"].Group, { items: items, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_spring__["Parallax"],
                    { ref: function ref(_ref3) {
                            return _this2.parallax = _ref3;
                        }, pages: 3, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_spring__["Parallax"].Layer, { offset: 0, speed: 0, factor: 3, style: { backgroundColor: '#390044', backgroundSize: 'cover' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_spring__["Parallax"].Layer,
                        { offset: 0, speed: 0.8, style: { opacity: 0.1 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '55%' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 85
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '15%' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 86
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_spring__["Parallax"].Layer,
                        { offset: 0.75, speed: 0.5, style: { opacity: 0.1 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 89
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '70%' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '40%' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 91
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_spring__["Parallax"].Layer,
                        { offset: 0, speed: 0.2, style: { opacity: 0.2 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 94
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '10%' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 95
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '75%' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_spring__["Parallax"].Layer,
                        {
                            offset: 0,
                            speed: 0.1,
                            factor: 2,
                            style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 101
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Container"],
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 106
                                }
                            },
                            this.listRender()
                        )
                    )
                )
            );
        }
    }]);

    return LoverAll;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoverAll);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/lovers/all.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spring":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=all.js.map