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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_lover__ = __webpack_require__("./ethereum/lover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);

var _jsxFileName = '/home/tomasroaldsnes/Code/lovers-for-life/components/Form.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        }(), _this.seeAllLovers = function () {
            __WEBPACK_IMPORTED_MODULE_5__routes__["Router"].pushRoute('/lovers/all');
        }, _temp), _possibleConstructorReturn(_this, _ret);
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
                        lineNumber: 52
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"],
                        { onSubmit: this.onSubmit, inverted: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Group,
                            { widths: 'equal', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 55
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, { control: __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"],
                                value: this.state.yourName,
                                label: 'Your name',
                                onChange: function onChange(event) {
                                    return _this3.setState({ yourName: event.target.value });
                                },
                                placeholder: 'Your name', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 56
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, { control: __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Input"],
                                value: this.state.partnersName,
                                label: 'Partners name',
                                onChange: function onChange(event) {
                                    return _this3.setState({ partnersName: event.target.value });
                                },
                                placeholder: 'Partners name', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field, { control: __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["TextArea"],
                            value: this.state.why,
                            transparent: true,
                            label: 'Why do you love your partner?',
                            onChange: function onChange(event) {
                                return _this3.setState({ why: event.target.value });
                            },
                            placeholder: 'Proclaim your love!', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"],
                            { textAlign: 'center', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 77
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Divider"], { hidden: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 78
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Divider"], { hidden: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 79
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Divider"], { hidden: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 80
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Form"].Field,
                                { control: __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], icon: true, labelPosition: 'left', primary: true, loading: this.state.isLoading, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 81
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], { name: 'heart', color: 'red', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 82
                                    }
                                }),
                                'Submit to blockchain'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Divider"], { hidden: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 83
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Divider"], { hidden: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 84
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"],
                                { tiny: true, onClick: this.seeAllLovers, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 85
                                    }
                                },
                                'See all Lovers'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"],
                        { hidden: !this.state.isLoading, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 88
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"].Content,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 89
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"].Header,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 90
                                    }
                                },
                                'Just one second'
                            ),
                            'Foreverizing your love. Please accept the transaction in the MetaMask plugin.'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"],
                        { hidden: !this.state.error, negative: this.state.error, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 94
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"].Content,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 95
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"].Header,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 96
                                    }
                                },
                                'Oops!'
                            ),
                            'Something went wrong here. Transaction was rejected. Do you have sufficient funds in your Meta Mask account?'
                        )
                    )
                )
            );
        }
    }]);

    return FormLovers;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FormLovers);

/***/ }),

/***/ "./components/Join.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_lover__ = __webpack_require__("./ethereum/lover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");

var _jsxFileName = '/home/tomasroaldsnes/Code/lovers-for-life/components/Join.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Join = function (_Component) {
  _inherits(Join, _Component);

  function Join() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Join);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Join.__proto__ || Object.getPrototypeOf(Join)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      allLovers: undefined
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Join, [{
    key: 'componentWillMount',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var amountOfLovers;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                this.setState({ isLoading: true });

                //const lover = Campaign(props.query.address);
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3__ethereum_lover__["a" /* default */].methods.amountOfLovers().call();

              case 3:
                amountOfLovers = _context.sent;


                this.setState({ allLovers: amountOfLovers });

              case 5:
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
    key: 'render',
    value: function render() {
      var value = this.state.value;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"],
            { as: 'h1', textAlign: 'center', inverted: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            'Join the ',
            this.state.allLovers,
            ' lovers that has already made their love public.'
          )
        )
      );
    }
  }]);

  return Join;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Join);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Paralax__ = __webpack_require__("./components/Paralax.js");
var _jsxFileName = '/home/tomasroaldsnes/Code/lovers-for-life/components/Layout.js';





/* harmony default export */ __webpack_exports__["a"] = (function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Paralax__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        })
    );
});

/***/ }),

/***/ "./components/Paralax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__("./components/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Join__ = __webpack_require__("./components/Join.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
var _jsxFileName = '/home/tomasroaldsnes/Code/lovers-for-life/components/Paralax.js',
    _this = this;









// Little helpers ...
var url = function url(name) {
  var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (wrap ? 'url(' : '') + 'https://awv3node-homepage.surge.sh/build/assets/' + name + '.svg' + (wrap ? ')' : '');
};
var Pink = function Pink(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { style: { color: '#FF6AC1' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    children
  );
};
var Yellow = function Yellow(_ref2) {
  var children = _ref2.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { style: { color: '#EFF59B' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    children
  );
};
var Lightblue = function Lightblue(_ref3) {
  var children = _ref3.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { style: { color: '#9AEDFE' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    children
  );
};
var Green = function Green(_ref4) {
  var children = _ref4.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { style: { color: '#57EE89' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    children
  );
};
var Blue = function Blue(_ref5) {
  var children = _ref5.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { style: { color: '#57C7FF' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    },
    children
  );
};
var Gray = function Gray(_ref6) {
  var children = _ref6.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { style: { color: '#909090' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    children
  );
};

var CardMetamask = function CardMetamask() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], { src: 'https://yt3.ggpht.com/a-/AJLlDp29i67qzhS1E46MPzrY0Q9ZGurI8zEAc_ITBQ=s900-mo-c-c0xffffffff-rj-k-no', __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        'Install Meta Mask'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Description,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        'Download Meta Mask from their website ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: 'https://metamask.io/', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          'here.'
        )
      )
    )
  );
};

var CardForm = function CardForm() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], { src: 'https://www.shareicon.net/data/2015/08/20/87939_add_512x512.png', __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        'Fill out the form below'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Description,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        },
        'Put in your name, your partners name and why you love them.'
      )
    )
  );
};

var CardPay = function CardPay() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], { src: 'https://www.shareicon.net/download/2015/10/03/111192_money_512x512.png', __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        },
        'Accept the Transaction'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Description,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        },
        'It costs 0.009 ETH to proclaim your love forever.'
      )
    )
  );
};

var GridStuff = function GridStuff() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"],
        { as: 'h1', textAlign: 'center', inverted: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        },
        'How It Works'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"],
        { columns: 'equal', divided: true, inverted: true, padded: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Row,
          { color: '#909090', textAlign: 'center', __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            },
            CardMetamask()
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            CardForm()
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            },
            CardPay()
          )
        )
      )
    )
  );
};

var Header1 = function Header1() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"],
    { as: 'h2', icon: true, inverted: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], { name: 'heart', color: 'red', __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      }
    }),
    'Blockchain is forever. Love should be too.',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"].Subheader,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      },
      'Proclaim your love for your partner on the Ethereum Blockchain.'
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (function () {

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"],
    { ref: function ref(_ref7) {
        return _this.parallax = _ref7;
      }, pages: 4, __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 1, speed: 1, style: { backgroundColor: '#390044' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 2, speed: 1, style: { backgroundColor: '#87BCDE' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 0, speed: 0, factor: 4, style: { backgroundColor: '#390044', backgroundSize: 'cover' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      { offset: 0.3, speed: -0.3, style: { pointerEvents: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('satellite4'), style: { width: '15%', marginLeft: '70%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      { offset: 0, speed: 0.8, style: { opacity: 0.1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '55%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '15%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      { offset: 0.75, speed: 0.5, style: { opacity: 0.1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '70%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '40%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      { offset: 0, speed: 0.2, style: { opacity: 0.2 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '10%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '75%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      { offset: 0.6, speed: -0.1, style: { opacity: 0.4 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '60%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '25%', marginLeft: '30%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '80%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      { offset: 1.6, speed: 0.4, style: { opacity: 0.6 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '5%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '15%', marginLeft: '75%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      { offset: 2, speed: -0.1, style: { opacity: 0.4 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '25%', marginLeft: '30%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '80%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      { offset: 2.6, speed: 0.4, style: { opacity: 0.6 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '5%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '15%', marginLeft: '75%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      { offset: 3, speed: -0.1, style: { opacity: 0.4 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '60%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '25%', marginLeft: '30%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '80%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      {
        offset: 0,
        speed: 0.1,
        onClick: function onClick() {
          return _this.parallax.scrollTo(1);
        },
        style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      },
      Header1()
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      {
        offset: 1,
        speed: 0.3,
        onClick: function onClick() {
          return _this.parallax.scrollTo(2);
        },
        style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      },
      GridStuff()
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer,
      {
        offset: 2,
        speed: 0.3,
        style: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Join__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Divider"], { hidden: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Divider"], { hidden: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Form__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        })
      )
    )
  );
});

/***/ }),

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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
var _jsxFileName = '/home/tomasroaldsnes/Code/lovers-for-life/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var LoverIndex = function (_Component) {
    _inherits(LoverIndex, _Component);

    function LoverIndex() {
        _classCallCheck(this, LoverIndex);

        return _possibleConstructorReturn(this, (LoverIndex.__proto__ || Object.getPrototypeOf(LoverIndex)).apply(this, arguments));
    }

    _createClass(LoverIndex, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                })
            );
        }
    }]);

    return LoverIndex;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoverIndex);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

routes.add('/lovers/all', '/lovers/all').add('/lovers/:address', '/lovers/forever');

module.exports = routes;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=index.js.map