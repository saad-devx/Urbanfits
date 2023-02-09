"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products/deleteproducts";
exports.ids = ["pages/api/products/deleteproducts"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/product.js":
/*!***************************!*\
  !*** ./models/product.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ProductSchema = mongoose.Schema({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a name for your product\"\n        ],\n        trim: true\n    },\n    price: {\n        type: Number,\n        required: [\n            true,\n            \"Please enter a price for your product\"\n        ],\n        maxlength: [\n            10,\n            \"Price can't be more than 10 figures\"\n        ]\n    },\n    description: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a description for your product\"\n        ],\n        trim: true\n    },\n    category: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a category for your product\"\n        ]\n    },\n    ratings: {\n        type: Number,\n        default: 0\n    },\n    images: [\n        {\n            public_id: {\n                type: String,\n                required: true\n            },\n            url: {\n                type: String,\n                required: true\n            }\n        }\n    ],\n    stock: {\n        type: Number,\n        required: [\n            true,\n            \"Please enter stock of the product\"\n        ],\n        default: 1\n    }\n}, {\n    timestamps: true\n});\nmodule.exports = mongoose.models.Product || mongoose.model(\"Product\", ProductSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGdCQUFnQkYsU0FBU0csTUFBTSxDQUFDO0lBQ2xDQyxNQUFNO1FBQ0ZDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBdUM7UUFDeERDLE1BQU0sSUFBSTtJQUNkO0lBQ0FDLE9BQU87UUFDSEosTUFBTUs7UUFDTkgsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUF3QztRQUN6REksV0FBVztZQUFDO1lBQUk7U0FBc0M7SUFDMUQ7SUFDQUMsYUFBYTtRQUNUUCxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQThDO1FBQy9EQyxNQUFNLElBQUk7SUFDZDtJQUNBSyxVQUFVO1FBQ05SLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBMkM7SUFDaEU7SUFDQU8sU0FBUztRQUNMVCxNQUFNSztRQUNOSyxTQUFTO0lBQ2I7SUFDQUMsUUFBUTtRQUFDO1lBQ0xDLFdBQVc7Z0JBQUVaLE1BQU1DO2dCQUFRQyxVQUFVLElBQUk7WUFBQztZQUMxQ1csS0FBSztnQkFBRWIsTUFBTUM7Z0JBQVFDLFVBQVUsSUFBSTtZQUFDO1FBQ3hDO0tBQUU7SUFDRlksT0FBTztRQUNIZCxNQUFNSztRQUNOSCxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQW9DO1FBQ3JEUSxTQUFTO0lBQ2I7QUFFSixHQUFHO0lBQUNLLFlBQVksSUFBSTtBQUFBO0FBRXBCQyxPQUFPQyxPQUFPLEdBQUd0QixTQUFTdUIsTUFBTSxDQUFDQyxPQUFPLElBQUl4QixTQUFTeUIsS0FBSyxDQUFDLFdBQVd2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3VyYmFuLWZpdHMvLi9tb2RlbHMvcHJvZHVjdC5qcz8wNzNjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgYSBuYW1lIGZvciB5b3VyIHByb2R1Y3RcIl0sXHJcbiAgICAgICAgdHJpbTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHByaWNlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgYSBwcmljZSBmb3IgeW91ciBwcm9kdWN0XCJdLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzEwLCBcIlByaWNlIGNhbid0IGJlIG1vcmUgdGhhbiAxMCBmaWd1cmVzXCJdXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBhIGRlc2NyaXB0aW9uIGZvciB5b3VyIHByb2R1Y3RcIl0sXHJcbiAgICAgICAgdHJpbTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgYSBjYXRlZ29yeSBmb3IgeW91ciBwcm9kdWN0XCJdXHJcbiAgICB9LFxyXG4gICAgcmF0aW5nczoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VzOiBbe1xyXG4gICAgICAgIHB1YmxpY19pZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgICAgdXJsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIH1dLFxyXG4gICAgc3RvY2s6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBzdG9jayBvZiB0aGUgcHJvZHVjdFwiXSxcclxuICAgICAgICBkZWZhdWx0OiAxXHJcbiAgICB9XHJcblxyXG59LCB7dGltZXN0YW1wczogdHJ1ZX0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbChcIlByb2R1Y3RcIiwgUHJvZHVjdFNjaGVtYSkiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiUHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJOdW1iZXIiLCJtYXhsZW5ndGgiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwicmF0aW5ncyIsImRlZmF1bHQiLCJpbWFnZXMiLCJwdWJsaWNfaWQiLCJ1cmwiLCJzdG9jayIsInRpbWVzdGFtcHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiUHJvZHVjdCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/deleteproducts.js":
/*!**********************************************!*\
  !*** ./pages/api/products/deleteproducts.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/connect_db */ \"(api)/./utils/connect_db.js\");\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/product */ \"(api)/./models/product.js\");\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_product__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Only accessable by Admin \nconst DeleteProducts = async (req, res)=>{\n    if (req.method === \"DELETE\") {\n        await (0,_utils_connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        let product = await _models_product__WEBPACK_IMPORTED_MODULE_1___default().findById(req.query.id);\n        if (!product) return res.status(404).json({\n            msg: \"Product not found\"\n        });\n        if (product) {\n            product = await _models_product__WEBPACK_IMPORTED_MODULE_1___default().findByIdAndDelete(req.query.id);\n        }\n        res.status(200).json({\n            msg: `Success ! Products with id ${req.query.id} has been deleted successfully`\n        });\n    } else {\n        res.status(400).json({\n            error: \"bad request, you are using wrong request method!\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteProducts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvZGVsZXRlcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNKO0FBRXRDLDRCQUE0QjtBQUM1QixNQUFNRSxpQkFBaUIsT0FBT0MsS0FBS0MsTUFBUTtJQUN2QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssVUFBVTtRQUN6QixNQUFNTCw2REFBU0E7UUFDZixJQUFJTSxVQUFVLE1BQU1MLCtEQUFnQixDQUFDRSxJQUFJSyxLQUFLLENBQUNDLEVBQUU7UUFDakQsSUFBSSxDQUFDSCxTQUFTLE9BQU9GLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsS0FBSztRQUFvQjtRQUNyRSxJQUFJTixTQUFTO1lBQ1RBLFVBQVUsTUFBTUwsd0VBQXlCLENBQUNFLElBQUlLLEtBQUssQ0FBQ0MsRUFBRTtRQUMxRCxDQUFDO1FBQ0RMLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDakJDLEtBQUssQ0FBQywyQkFBMkIsRUFBRVQsSUFBSUssS0FBSyxDQUFDQyxFQUFFLENBQUMsOEJBQThCLENBQUM7UUFDbkY7SUFDSixPQUNLO1FBQ0RMLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUcsT0FBTztRQUFtRDtJQUNyRixDQUFDO0FBQ0w7QUFFQSxpRUFBZVosY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VyYmFuLWZpdHMvLi9wYWdlcy9hcGkvcHJvZHVjdHMvZGVsZXRlcHJvZHVjdHMuanM/NDMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ubmVjdERCIGZyb20gXCJAL3V0aWxzL2Nvbm5lY3RfZGJcIlxyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiQC9tb2RlbHMvcHJvZHVjdFwiXHJcblxyXG4vLyBPbmx5IGFjY2Vzc2FibGUgYnkgQWRtaW4gXHJcbmNvbnN0IERlbGV0ZVByb2R1Y3RzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpIHtcclxuICAgICAgICBhd2FpdCBDb25uZWN0REIoKVxyXG4gICAgICAgIGxldCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kQnlJZChyZXEucXVlcnkuaWQpXHJcbiAgICAgICAgaWYgKCFwcm9kdWN0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtc2c6IFwiUHJvZHVjdCBub3QgZm91bmRcIiB9KVxyXG4gICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkQW5kRGVsZXRlKHJlcS5xdWVyeS5pZClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICBtc2c6IGBTdWNjZXNzICEgUHJvZHVjdHMgd2l0aCBpZCAke3JlcS5xdWVyeS5pZH0gaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHlgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiYmFkIHJlcXVlc3QsIHlvdSBhcmUgdXNpbmcgd3JvbmcgcmVxdWVzdCBtZXRob2QhXCIgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlUHJvZHVjdHMiXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiUHJvZHVjdCIsIkRlbGV0ZVByb2R1Y3RzIiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJvZHVjdCIsImZpbmRCeUlkIiwicXVlcnkiLCJpZCIsInN0YXR1cyIsImpzb24iLCJtc2ciLCJmaW5kQnlJZEFuZERlbGV0ZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/deleteproducts.js\n");

/***/ }),

/***/ "(api)/./utils/connect_db.js":
/*!*****************************!*\
  !*** ./utils/connect_db.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ConnectDB = async ()=>{\n    if (mongoose.connections[0].readyState) return console.log(\"Success! Connection already exists\\n\");\n    else return mongoose.connect(process.env.MONGO_URI, console.log(\"Connected to the mongodb successfully!\\n\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0X2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QixNQUFNQyxZQUFZLFVBQVU7SUFDeEIsSUFBR0YsU0FBU0csV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVSxFQUFFLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQztTQUNyRCxPQUFPTixTQUFTTyxPQUFPLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFTCxRQUFRQyxHQUFHLENBQUM7QUFDcEU7QUFFQSxpRUFBZUosU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VyYmFuLWZpdHMvLi91dGlscy9jb25uZWN0X2RiLmpzP2NlZmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBDb25uZWN0REIgPSBhc3luYyAoKT0+e1xyXG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkgcmV0dXJuIGNvbnNvbGUubG9nKFwiU3VjY2VzcyEgQ29ubmVjdGlvbiBhbHJlYWR5IGV4aXN0c1xcblwiKVxyXG4gICAgZWxzZSByZXR1cm4gbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHRoZSBtb25nb2RiIHN1Y2Nlc3NmdWxseSFcXG5cIikpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3REQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJDb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/connect_db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/deleteproducts.js"));
module.exports = __webpack_exports__;

})();