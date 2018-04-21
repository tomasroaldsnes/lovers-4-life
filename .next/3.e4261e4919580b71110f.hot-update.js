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

                                _this.setState({ isLoading: true });
                                _context.next = 5;
                                return __WEBPACK_IMPORTED_MODULE_4__ethereum_web3__["a" /* default */].eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return __WEBPACK_IMPORTED_MODULE_3__ethereum_lover__["a" /* default */].methods.createLover(_this.state.yourName, _this.state.partnersName, _this.state.why).send({
                                    from: accounts[0],
                                    value: _this.state.payment
                                });

                            case 8:
                                newCampaign = _context.sent;

                                //Router.pushRoute('/');
                                _this.setState({ isLoading: false });

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](1);

                                _this.setState({
                                    error: true,
                                    isLoading: false,
                                    errorMessage: _context.t0.message
                                });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 12]]);
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
                        lineNumber: 45
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */],
                    { onSubmit: this.onSubmit, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Group,
                        { widths: 'equal', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 47
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
                                lineNumber: 48
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
                                lineNumber: 54
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
                            lineNumber: 62
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field,
                        { control: __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], loading: this.state.isLoading, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        },
                        'Submit'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */],
                    { hidden: !this.state.isLoading, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */].Content,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 72
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */].Header,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 73
                                }
                            },
                            'Just one second'
                        ),
                        'Foreverizing your love. Please accept the transaction in the MetaMask plugin.'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */],
                    { hidden: this.state.error, negative: this.state.error, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */].Content,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["j" /* Message */].Header,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 79
                                }
                            },
                            'Oops!'
                        ),
                        this.state.errorMessage
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

/***/ })

})
//# sourceMappingURL=3.e4261e4919580b71110f.hot-update.js.map