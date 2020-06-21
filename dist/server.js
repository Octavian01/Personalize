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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_updatePopular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/updatePopular */ \"./util/updatePopular.js\");\n/* harmony import */ var _util_updatePopular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_util_updatePopular__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\n/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var csurf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! csurf */ \"csurf\");\n/* harmony import */ var csurf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(csurf__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var connect_mongodb_session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! connect-mongodb-session */ \"connect-mongodb-session\");\n/* harmony import */ var connect_mongodb_session__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(connect_mongodb_session__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar MONGODB_URI = 'mongodb+srv://octavian:nitbw7iAnfu8M5KU@node-complete-dxgaa.mongodb.net/shop?retryWrites=true&w=majority';\n\n\n\n\n\n\n\n\nvar twoDaysInMiliseconds = 1000 * 60 * 60 * 48;\n\nvar User = __webpack_require__(/*! ./models/user */ \"./models/user.js\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar store = new connect_mongodb_session__WEBPACK_IMPORTED_MODULE_9___default.a(express_session__WEBPACK_IMPORTED_MODULE_8___default.a)({\n  uri: MONGODB_URI,\n  collection: 'sessions'\n});\nvar csrfProtection = csurf__WEBPACK_IMPORTED_MODULE_7___default()();\napp.set('view engine', 'ejs');\napp.set('views', 'views');\napp.use(express_fileupload__WEBPACK_IMPORTED_MODULE_4___default()({\n  createParentPath: true\n}));\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n}));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_6___default()('dev'));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](\"\".concat(__dirname, \"/public\")));\napp.use(express_session__WEBPACK_IMPORTED_MODULE_8___default()({\n  secret: 'my secret',\n  resave: false,\n  saveUninitialized: false,\n  store: store\n}));\napp.use(csrfProtection);\nsetInterval(function () {\n  _util_updatePopular__WEBPACK_IMPORTED_MODULE_3___default()();\n}, twoDaysInMiliseconds);\n\nvar shopRouter = __webpack_require__(/*! ./routes/shop */ \"./routes/shop.js\");\n\nvar adminRouter = __webpack_require__(/*! ./routes/admin */ \"./routes/admin.js\");\n\nvar jewelleryAccessoriesRouter = __webpack_require__(/*! ./routes/jewellery&accessories */ \"./routes/jewellery&accessories.js\");\n\nvar authRouter = __webpack_require__(/*! ./routes/auth */ \"./routes/auth.js\");\n\napp.use(function (req, res, next) {\n  if (req.session.user) {\n    return User.findById(req.session.user._id).then(function (user) {\n      req.user = user;\n      return next();\n    })[\"catch\"](function (err) {\n      throw err;\n    });\n  } else if (!req.session.visitator) {\n    req.session.cookie.expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 5);\n    req.session.visitator = {\n      basket: {\n        items: []\n      },\n      likesItems: []\n    };\n    console.log(req.session);\n    return next();\n  } else return next();\n});\napp.use(function (req, res, next) {\n  res.locals.isAuthenticated = req.session.isLoggedIn;\n  res.locals.csrfToken = req.csrfToken();\n  next();\n});\napp.use(shopRouter);\napp.use('/admin', adminRouter);\napp.use('/auth', authRouter);\napp.use('/jewellry&accessories', jewelleryAccessoriesRouter);\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(MONGODB_URI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}).then(function (user) {\n  app.listen(3045);\n})[\"catch\"](function (err) {\n  throw err;\n});\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./controllers/adminC.js":
/*!*******************************!*\
  !*** ./controllers/adminC.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Product = __webpack_require__(/*! ../models/products */ \"./models/products.js\");\n\nvar User = __webpack_require__(/*! ../models/user */ \"./models/user.js\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar request = __webpack_require__(/*! request */ \"request\");\n\nvar download = function download(url, path, callback) {\n  request.head(url, function (err, res, body) {\n    request(url).pipe(fs.createWriteStream(path)).on('close', callback);\n  });\n};\n\nexports.getItem = function (req, res, next) {\n  if (req.session.user) {\n    User.findById(req.session.user._id).then(function (u) {\n      res.render('admin/getItem', {\n        pageTitle: 'Add Item',\n        userData: JSON.stringify(u),\n        isLoggedIn: req.session.isLoggedIn\n      });\n    });\n  } else {\n    res.redirect('/');\n  }\n};\n\nexports.getItemPost = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var data, _req$body, title, price, image, description, category, subcategory, specificItem, i, extension, link, photos, product;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            data = [];\n            _req$body = req.body, title = _req$body.title, price = _req$body.price, image = _req$body.image, description = _req$body.description, category = _req$body.category, subcategory = _req$body.subcategory, specificItem = _req$body.specificItem;\n\n            for (i = 0; i < image.length - 1; i++) {\n              extension = image[i].split('.');\n              extension = extension[extension.length - 1].toLowerCase();\n\n              if (extension === 'jpg' || extension === 'png' || extension === 'jpeg') {\n                link = encodeURIComponent(image[i]);\n                data.push({\n                  name: link,\n                  mimetype: extension\n                });\n                download(image[i], \"./public/images/\".concat(link), function () {});\n              }\n            }\n\n            if (req.files) {\n              photos = req.files.imgs;\n              Array.from(photos).forEach(function (photo) {\n                photo.mv(\"public/images/\".concat(photo.name));\n                data.push({\n                  name: photo.name,\n                  mimetype: photo.mimetype\n                });\n              });\n            }\n\n            product = new Product({\n              title: title,\n              image: data,\n              price: price,\n              raiting: 0,\n              description: description,\n              category: category,\n              subCategory: subcategory,\n              specificItem: specificItem\n            });\n            product.save().then(function (result) {})[\"catch\"](function (err) {\n              throw err;\n            });\n            res.redirect('/');\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./controllers/adminC.js?");

/***/ }),

/***/ "./controllers/authC.js":
/*!******************************!*\
  !*** ./controllers/authC.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var User = __webpack_require__(/*! ../models/user */ \"./models/user.js\");\n\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nexports.postRegister = function (req, res, next) {\n  var rs = JSON.parse(Object.keys(req.body)[0]);\n  var firstName = rs.firstName,\n      password = rs.password,\n      email = rs.email;\n  User.findOne({\n    email: email\n  }).then(function (data) {\n    if (data === null) {\n      res.json({\n        done: true\n      });\n      bcrypt.hash(password, 12).then(function (hashedPassword) {\n        var newUser = new User({\n          email: email,\n          firstName: firstName,\n          password: hashedPassword,\n          basket: {\n            items: []\n          }\n        });\n        newUser.save();\n        req.session.user = newUser;\n        req.session.isLoggedIn = true;\n        req.session.save(function (err) {\n          if (err) throw err;\n        });\n        res.end();\n      });\n    } else {\n      res.json({\n        done: false\n      }); // email exist already\n\n      res.end();\n    }\n  });\n};\n\nexports.postLogin = function (req, res, next) {\n  var rs = JSON.parse(Object.keys(req.body)[0]);\n  var email = rs.email,\n      password = rs.password,\n      sess = rs.sess;\n  User.findOne({\n    email: email\n  }).then(function (user) {\n    if (user === null) {\n      res.json({\n        done: 'email'\n      });\n      return res.end();\n    }\n\n    bcrypt.compare(password, user.password).then(function (doMatch) {\n      if (doMatch) {\n        req.session.isLoggedIn = true;\n        req.session.user = user;\n        user.basket.items = user.basket.items.concat(req.session.visitator.basket.items);\n        user.likesItems = user.likesItems.concat(req.session.visitator.likesItems);\n        user.save();\n        return req.session.save(function (err) {\n          if (err) throw err;\n          res.json({\n            done: true\n          });\n          return res.end();\n        });\n      }\n\n      res.json({\n        done: 'password'\n      });\n      return res.end();\n    });\n  });\n};\n\nexports.postSignOut = function (req, res, next) {\n  req.session.destroy(function (err) {\n    if (err) throw err;\n    res.json({\n      done: true\n    });\n    res.end();\n  });\n};\n\n//# sourceURL=webpack:///./controllers/authC.js?");

/***/ }),

/***/ "./controllers/jewellery&accessoriesC.js":
/*!***********************************************!*\
  !*** ./controllers/jewellery&accessoriesC.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.getIndex = function (req, res, next) {};\n\n//# sourceURL=webpack:///./controllers/jewellery&accessoriesC.js?");

/***/ }),

/***/ "./controllers/shopC.js":
/*!******************************!*\
  !*** ./controllers/shopC.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar Popular = __webpack_require__(/*! ../models/popular */ \"./models/popular.js\");\n\nvar Products = __webpack_require__(/*! ../models/products */ \"./models/products.js\");\n\nvar User = __webpack_require__(/*! ../models/user */ \"./models/user.js\");\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nexports.getIndex = function (req, res, next) {\n  console.log(req.session.visitator.basket);\n  Popular.find().then(function (data) {\n    if (req.session.user) {\n      User.findOne({\n        _id: req.session.user._id\n      }).then(function (u) {\n        res.render('shop/index', {\n          pageTitle: 'Personalize',\n          data: JSON.stringify(data),\n          isLoggedIn: req.session.isLoggedIn,\n          userData: JSON.stringify(u)\n        });\n      });\n    } else {\n      res.render('shop/index', {\n        pageTitle: 'Personalize',\n        data: JSON.stringify(data),\n        isLoggedIn: req.session.isLoggedIn,\n        userData: JSON.stringify(req.session.visitator)\n      });\n    }\n  })[\"catch\"](function (err) {\n    throw err;\n  });\n};\n\nexports.getProduct = function (req, res, next) {\n  var id = req.params.productId;\n  Products.findById(id).then(function (product) {\n    if (req.session.user) {\n      User.findById(req.session.user._id).then(function (u) {\n        res.render('shop/product', {\n          product: JSON.stringify(product),\n          pageTitle: product.title,\n          isLoggedIn: req.session.isLoggedIn,\n          userData: JSON.stringify(u),\n          productId: id\n        });\n      });\n    } else {\n      res.render('shop/product', {\n        product: JSON.stringify(product),\n        pageTitle: product.title,\n        isLoggedIn: req.session.isLoggedIn,\n        productId: id,\n        userData: JSON.stringify(req.session.visitator)\n      });\n    }\n  })[\"catch\"](function (err) {\n    throw err;\n  });\n};\n\nexports.getCart = function (req, res, next) {\n  if (req.session.user) {\n    User.findById(req.session.user._id).then(function (u) {\n      display(u);\n    });\n  } else {\n    display(req.session.visitator);\n  }\n\n  function display(u) {\n    var basket = u.basket.items;\n    var items = [];\n    basket.forEach(function (item) {\n      items.push(mongoose.Types.ObjectId(item.productId));\n    });\n    Products.find({\n      '_id': {\n        $in: items\n      }\n    }, function (err, docs) {\n      var finalItems = [];\n\n      for (var j = 0; j < items.length; j++) {\n        for (var i = 0; i < docs.length; i++) {\n          if (items[j].toString() === docs[i]._id.toString()) {\n            finalItems.push({\n              image: docs[i].image[0].name,\n              price: docs[i].price,\n              title: docs[i].title,\n              quantity: basket[j].quantity,\n              itemId: basket[j].productId\n            });\n            break;\n          }\n        }\n      }\n\n      var userFirstName = req.session.user ? req.session.user.firstName : 'Guest';\n      userFirstName += ' Cart';\n      res.render('shop/cart', {\n        pageTitle: userFirstName,\n        items: JSON.stringify(finalItems),\n        isLoggedIn: req.session.isLoggedIn,\n        userData: JSON.stringify(u)\n      });\n    });\n  }\n};\n\nexports.addToCart = function (req, res, next) {\n  var id = req.params.productId;\n\n  if (req.session.user) {\n    var userId = req.session.user._id;\n    User.findById(userId).then(function (user) {\n      add(user);\n      user.save();\n      res.redirect('/cart');\n    });\n  } else {\n    add(req.session.visitator);\n    req.session.save();\n    res.redirect('/cart');\n  }\n\n  function add(user) {\n    var found = false;\n\n    var _iterator = _createForOfIteratorHelper(user.basket.items),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var item = _step.value;\n        console.log(item);\n\n        if (item.productId.toString() === id.toString()) {\n          found = true;\n          item.quantity++;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    if (!found) {\n      user.basket.items.push({\n        productId: id,\n        quantity: 1\n      });\n    }\n  }\n};\n\nexports.postRemoveProduct = function (req, res, next) {\n  var id = req.params.productId;\n  User.findById(req.session.user._id).then(function (u) {\n    var basket = u.basket.items.filter(function (i) {\n      return i.productId.toString() !== id.toString();\n    });\n    u.basket.items = basket;\n    u.save();\n    res.redirect('/cart');\n  });\n};\n\nexports.postUpdateQuantity = function (req, res, next) {\n  var id = req.params.productId;\n  var quantity = JSON.parse(Object.keys(req.body)[0]).value;\n  User.findOne({\n    _id: req.user._id\n  }).then(function (u) {\n    var basketItems = u.basket.items;\n\n    var _iterator2 = _createForOfIteratorHelper(basketItems),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var item = _step2.value;\n\n        if (item.productId.toString() === id.toString()) {\n          item.quantity = quantity;\n          break;\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    u.basket.items = basketItems;\n    u.save();\n    res.json({\n      done: true\n    });\n    res.end();\n  });\n};\n\nexports.addLikeItem = function (req, res, next) {\n  var id = Object.keys(req.body)[0].split('\"')[1];\n  Products.findById(id).then(function (p) {\n    p.raiting++;\n    p.save();\n  })[\"catch\"](function (err) {\n    throw err;\n  });\n\n  if (req.session.user) {\n    User.findById(req.session.user._id).then(function (u) {\n      u.likesItems.push({\n        productId: id\n      });\n      u.save();\n      res.json({\n        done: true\n      });\n      res.end();\n    })[\"catch\"](function (err) {\n      throw err;\n    });\n  } else {\n    req.session.visitator.likesItems.push({\n      productId: id\n    });\n    console.log(req.session);\n    req.session.save();\n    res.json({\n      done: true\n    });\n    res.end();\n  }\n};\n\nexports.removeLikeItem = function (req, res, next) {\n  var id = Object.keys(req.body)[0].split('\"')[1];\n  Products.findById(id).then(function (p) {\n    p.raiting--;\n    p.save();\n  })[\"catch\"](function (err) {\n    throw err;\n  });\n\n  if (req.session.user) {\n    User.findById(req.session.user._id).then(function (u) {\n      var likesItems = u.likesItems.filter(function (i) {\n        return i.productId.toString() !== id.toString();\n      });\n      u.likesItems = likesItems;\n      u.save();\n      res.json({\n        done: true\n      });\n      res.end();\n    });\n  } else {\n    var u = req.session.visitator;\n    var likesItems = u.likesItems.filter(function (i) {\n      return i.productId.toString() !== id.toString();\n    });\n    u.likesItems = likesItems;\n    res.json({\n      done: true\n    });\n    res.end();\n  }\n};\n\n//# sourceURL=webpack:///./controllers/shopC.js?");

/***/ }),

/***/ "./models/popular.js":
/*!***************************!*\
  !*** ./models/popular.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar popularSchema = new Schema({\n  _id: {\n    type: String,\n    required: true\n  },\n  title: {\n    type: String,\n    required: true\n  },\n  image: {\n    type: Array,\n    required: true\n  },\n  price: {\n    type: Number,\n    required: true\n  },\n  raiting: {\n    type: Number,\n    required: true\n  },\n  description: {\n    type: String\n  },\n  category: {\n    type: String,\n    required: true\n  },\n  subCategory: {\n    type: String,\n    required: true\n  },\n  specificItem: {\n    type: String,\n    required: true\n  }\n});\nmodule.exports = mongoose.model('Popular', popularSchema);\n\n//# sourceURL=webpack:///./models/popular.js?");

/***/ }),

/***/ "./models/products.js":
/*!****************************!*\
  !*** ./models/products.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar productSchema = new Schema({\n  title: {\n    type: String,\n    required: true\n  },\n  image: {\n    type: Array,\n    required: true\n  },\n  description: {\n    type: String\n  },\n  category: {\n    type: String,\n    required: true\n  },\n  subCategory: {\n    type: String,\n    required: true\n  },\n  specificItem: {\n    type: String,\n    required: true\n  },\n  price: {\n    type: Number,\n    required: true\n  },\n  raiting: {\n    type: Number,\n    required: true\n  }\n});\nmodule.exports = mongoose.model('Products', productSchema);\n\n//# sourceURL=webpack:///./models/products.js?");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar userSchema = new Schema({\n  email: {\n    type: String,\n    required: true\n  },\n  firstName: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  resetToken: String,\n  resetExpiration: Date,\n  basket: {\n    items: [{\n      productId: {\n        type: Schema.Types.ObjectId,\n        ref: 'Product',\n        required: true\n      },\n      quantity: {\n        type: Number,\n        required: true\n      }\n    }]\n  },\n  likesItems: {\n    type: Array\n  }\n});\nmodule.exports = mongoose.model('User', userSchema);\n\n//# sourceURL=webpack:///./models/user.js?");

/***/ }),

/***/ "./routes/admin.js":
/*!*************************!*\
  !*** ./routes/admin.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var router = __webpack_require__(/*! express */ \"express\").Router();\n\nvar adminController = __webpack_require__(/*! ../controllers/adminC */ \"./controllers/adminC.js\");\n\nrouter.get('/getItem', adminController.getItem);\nrouter.post('/getItemPost', adminController.getItemPost);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/admin.js?");

/***/ }),

/***/ "./routes/auth.js":
/*!************************!*\
  !*** ./routes/auth.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var router = __webpack_require__(/*! express */ \"express\").Router();\n\nvar authController = __webpack_require__(/*! ../controllers/authC */ \"./controllers/authC.js\");\n\nrouter.post('/register', authController.postRegister);\nrouter.post('/login', authController.postLogin);\nrouter.post('/signout', authController.postSignOut);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/auth.js?");

/***/ }),

/***/ "./routes/jewellery&accessories.js":
/*!*****************************************!*\
  !*** ./routes/jewellery&accessories.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var router = __webpack_require__(/*! express */ \"express\").Router();\n\nvar jewelleryAccesoriesControler = __webpack_require__(/*! ../controllers/jewellery&accessoriesC.js */ \"./controllers/jewellery&accessoriesC.js\");\n\nrouter.get('/', jewelleryAccesoriesControler.getIndex);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/jewellery&accessories.js?");

/***/ }),

/***/ "./routes/shop.js":
/*!************************!*\
  !*** ./routes/shop.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var router = __webpack_require__(/*! express */ \"express\").Router();\n\nvar shopController = __webpack_require__(/*! ../controllers/shopC */ \"./controllers/shopC.js\");\n\nrouter.get('/', shopController.getIndex);\nrouter.get('/products/:productId', shopController.getProduct);\nrouter.get('/cart', shopController.getCart);\nrouter.get('/addToCart/:productId', shopController.addToCart);\nrouter.post('/postRemoveProduct/:productId', shopController.postRemoveProduct);\nrouter.post('/updateQuantity/:productId', shopController.postUpdateQuantity);\nrouter.post('/addLikeItem', shopController.addLikeItem);\nrouter.post('/removeLikeItem', shopController.removeLikeItem);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/shop.js?");

/***/ }),

/***/ "./util/updatePopular.js":
/*!*******************************!*\
  !*** ./util/updatePopular.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Products = __webpack_require__(/*! ../models/products */ \"./models/products.js\");\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Popular = __webpack_require__(/*! ../models/popular */ \"./models/popular.js\");\n\nvar updatePopularItems = function updatePopularItems() {\n  var pItems = [];\n  Products.find().then(function (items) {\n    items.sort(function (a, b) {\n      return b.raiting - a.raiting;\n    });\n\n    for (var i = 0; i < 6 && items[i]; i++) {\n      pItems.push(items[i]);\n    }\n\n    mongoose.connection.db.dropCollection('populars');\n    Popular.insertMany(pItems, function (err) {\n      if (err) throw err;\n    });\n  })[\"catch\"](function (err) {\n    throw err;\n  });\n};\n\nmodule.exports = updatePopularItems;\n\n//# sourceURL=webpack:///./util/updatePopular.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "connect-mongodb-session":
/*!******************************************!*\
  !*** external "connect-mongodb-session" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-mongodb-session\");\n\n//# sourceURL=webpack:///external_%22connect-mongodb-session%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "csurf":
/*!************************!*\
  !*** external "csurf" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"csurf\");\n\n//# sourceURL=webpack:///external_%22csurf%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-fileupload\");\n\n//# sourceURL=webpack:///external_%22express-fileupload%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack:///external_%22request%22?");

/***/ })

/******/ });