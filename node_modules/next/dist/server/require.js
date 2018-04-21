'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.pageNotFoundError = pageNotFoundError;
exports.normalizePagePath = normalizePagePath;
exports.getPagePath = getPagePath;

var _path = require('path');

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pageNotFoundError(page) {
  var err = new Error('Cannot find module for page: ' + page);
  err.code = 'ENOENT';
  return err;
}

function normalizePagePath(page) {
  // If the page is `/` we need to append `/index`, otherwise the returned directory root will be bundles instead of pages
  if (page === '/') {
    page = '/index';
  }

  // Resolve on anything that doesn't start with `/`
  if (page[0] !== '/') {
    page = '/' + page;
  }

  // Windows compatibility
  if (_path.sep !== '/') {
    page = page.replace(/\//g, _path.sep);
  }

  // Throw when using ../ etc in the pathname
  var resolvedPage = (0, _path.normalize)(page);
  if (page !== resolvedPage) {
    throw new Error('Requested and resolved page mismatch');
  }

  return page;
}

function getPagePath(page, _ref) {
  var dir = _ref.dir,
      dist = _ref.dist;

  var pageBundlesPath = (0, _path.join)(dir, dist, 'dist', 'bundles', 'pages');

  try {
    page = normalizePagePath(page);
  } catch (err) {
    console.error(err);
    throw pageNotFoundError(page);
  }

  var pagePath = (0, _path.join)(pageBundlesPath, page); // Path to the page that is to be loaded

  // Don't allow wandering outside of the bundles directory
  var pathDir = (0, _path.parse)(pagePath).dir;
  if (pathDir.indexOf(pageBundlesPath) !== 0) {
    console.error('Resolved page path goes outside of bundles path');
    throw pageNotFoundError(page);
  }

  return pagePath;
}

exports.default = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(page, _ref2) {
    var dir = _ref2.dir,
        dist = _ref2.dist;
    var pagePath, fileExists;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pagePath = getPagePath(page, { dir: dir, dist: dist }) + '.js';
            _context.next = 3;
            return _fs2.default.exists(pagePath);

          case 3:
            fileExists = _context.sent;

            if (fileExists) {
              _context.next = 6;
              break;
            }

            throw pageNotFoundError(page);

          case 6:
            return _context.abrupt('return', require(pagePath));

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function requirePage(_x, _x2) {
    return _ref3.apply(this, arguments);
  }

  return requirePage;
}();