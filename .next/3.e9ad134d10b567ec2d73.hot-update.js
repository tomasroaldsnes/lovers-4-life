webpackHotUpdate(3,{

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var routes = __webpack_require__("./node_modules/next-routes/dist/index.js")();

routes.add('/lovers/all', '/lovers/all').add('/lovers/:address', '/lovers/forever');

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
//# sourceMappingURL=3.e9ad134d10b567ec2d73.hot-update.js.map