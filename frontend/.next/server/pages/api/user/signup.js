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
exports.id = "pages/api/user/signup";
exports.ids = ["pages/api/user/signup"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = mongoose.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a username\"\n        ],\n        maxLength: [\n            30,\n            \"Username cannot exceed 30 characters\"\n        ],\n        minLength: [\n            4,\n            \"Username should have more than 4 characters\"\n        ],\n        unique: [\n            true,\n            \"This username is already in use\"\n        ]\n    },\n    phone: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a valid email address\"\n        ],\n        unique: [\n            true,\n            \"This email address is already in use\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please Enter Your Password\"\n        ],\n        minLength: [\n            8,\n            \"Password should be greater than 8 characters\"\n        ]\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    }\n}, {\n    timestamps: true\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGFBQWFGLFNBQVNHLE1BQU0sQ0FBQztJQUMvQkMsVUFBVTtRQUNOQyxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQTBCO1FBQzNDQyxXQUFXO1lBQUM7WUFBSTtTQUF1QztRQUN2REMsV0FBVztZQUFDO1lBQUc7U0FBOEM7UUFDN0RDLFFBQVE7WUFBQyxJQUFJO1lBQUU7U0FBa0M7SUFDckQ7SUFDQUMsT0FBTTtRQUNGTixNQUFLQztRQUNMQyxVQUFVLElBQUk7SUFDbEI7SUFDQUssT0FBTztRQUNIUCxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQXFDO1FBQ3RERyxRQUFRO1lBQUMsSUFBSTtZQUFFO1NBQXVDO0lBQzFEO0lBQ0FHLFVBQVU7UUFDTlIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUE2QjtRQUM5Q0UsV0FBVztZQUFDO1lBQUc7U0FBK0M7SUFDbEU7SUFDQUssTUFBTTtRQUNGVCxNQUFNQztRQUNOUyxTQUFTO0lBQ2I7QUFFSixHQUFHO0lBQUVDLFlBQVksSUFBSTtBQUFDO0FBRXRCQyxPQUFPQyxPQUFPLEdBQUdsQixTQUFTbUIsTUFBTSxDQUFDQyxJQUFJLElBQUlwQixTQUFTcUIsS0FBSyxDQUFDLFFBQVFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3VyYmFuLWZpdHMvLi9tb2RlbHMvdXNlci5qcz82NTk0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIGEgdXNlcm5hbWVcIl0sXHJcbiAgICAgICAgbWF4TGVuZ3RoOiBbMzAsIFwiVXNlcm5hbWUgY2Fubm90IGV4Y2VlZCAzMCBjaGFyYWN0ZXJzXCJdLFxyXG4gICAgICAgIG1pbkxlbmd0aDogWzQsIFwiVXNlcm5hbWUgc2hvdWxkIGhhdmUgbW9yZSB0aGFuIDQgY2hhcmFjdGVyc1wiXSxcclxuICAgICAgICB1bmlxdWU6IFt0cnVlLCBcIlRoaXMgdXNlcm5hbWUgaXMgYWxyZWFkeSBpbiB1c2VcIl1cclxuICAgIH0sXHJcbiAgICBwaG9uZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiXSxcclxuICAgICAgICB1bmlxdWU6IFt0cnVlLCBcIlRoaXMgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZVwiXSxcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIEVudGVyIFlvdXIgUGFzc3dvcmRcIl0sXHJcbiAgICAgICAgbWluTGVuZ3RoOiBbOCwgXCJQYXNzd29yZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDggY2hhcmFjdGVyc1wiXSxcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwidXNlclwiXHJcbiAgICB9XHJcblxyXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsIm1pbkxlbmd0aCIsInVuaXF1ZSIsInBob25lIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/signup.js":
/*!**********************************!*\
  !*** ./pages/api/user/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/connect_db */ \"(api)/./utils/connect_db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n// Only accessable by Admin \nconst Signup = async (req, res)=>{\n    if (req.method === \"POST\") {\n        await (0,_utils_connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        let user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n            \"email\": req.body.email\n        });\n        if (user) return res.status(400).json({\n            success: false,\n            msg: \"A user with this Email or Username already exists\"\n        });\n        user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n            \"username\": req.body.username\n        });\n        if (user) return res.status(400).json({\n            success: false,\n            msg: \"A user with this Email or Username already exists\"\n        });\n        user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().create({\n            ...req.body,\n            password: CryptoJS.AES.encrypt(req.body.password, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\").toString()\n        });\n        res.status(200).json({\n            success: true,\n            msg: \"You're Resgistered successfully !\",\n            user\n        });\n    } else {\n        res.status(400).json({\n            error: \"bad request, you are using wrong request method!\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNWO0FBQ2hDLE1BQU1FLFdBQVdDLG1CQUFPQSxDQUFDLDRCQUFXO0FBRXBDLDRCQUE0QjtBQUM1QixNQUFNQyxTQUFTLE9BQU9DLEtBQUtDLE1BQVE7SUFDL0IsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdkIsTUFBTVAsNkRBQVNBO1FBQ2YsSUFBSVEsT0FBTyxNQUFNUCwyREFBWSxDQUFDO1lBQUMsU0FBU0ksSUFBSUssSUFBSSxDQUFDQyxLQUFLO1FBQUE7UUFDdEQsSUFBR0gsTUFBTSxPQUFPRixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVMsS0FBSztZQUFFQyxLQUFLO1FBQW9EO1FBQ2hIUCxPQUFPLE1BQU1QLDJEQUFZLENBQUM7WUFBQyxZQUFZSSxJQUFJSyxJQUFJLENBQUNNLFFBQVE7UUFBQTtRQUN4RCxJQUFHUixNQUFNLE9BQU9GLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxLQUFLO1lBQUVDLEtBQUs7UUFBb0Q7UUFDaEhQLE9BQU8sTUFBTVAsMERBQVcsQ0FBQztZQUFDLEdBQUdJLElBQUlLLElBQUk7WUFBRVEsVUFBVWhCLFNBQVNpQixHQUFHLENBQUNDLE9BQU8sQ0FBQ2YsSUFBSUssSUFBSSxDQUFDUSxRQUFRLEVBQUVHLHdDQUFzQixFQUFFRyxRQUFRO1FBQUU7UUFDM0hsQixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ2pCQyxTQUFTLElBQUk7WUFDYkMsS0FBSztZQUNMUDtRQUNKO0lBQ0osT0FDSztRQUNERixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVZLE9BQU87UUFBbUQ7SUFDckYsQ0FBQztBQUNMO0FBRUEsaUVBQWVyQixNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJiYW4tZml0cy8uL3BhZ2VzL2FwaS91c2VyL3NpZ251cC5qcz9lYzU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25uZWN0REIgZnJvbSBcIkAvdXRpbHMvY29ubmVjdF9kYlwiXHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy91c2VyXCJcclxuY29uc3QgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xyXG5cclxuLy8gT25seSBhY2Nlc3NhYmxlIGJ5IEFkbWluIFxyXG5jb25zdCBTaWdudXAgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBhd2FpdCBDb25uZWN0REIoKVxyXG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcImVtYWlsXCI6IHJlcS5ib2R5LmVtYWlsfSlcclxuICAgICAgICBpZih1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIkEgdXNlciB3aXRoIHRoaXMgRW1haWwgb3IgVXNlcm5hbWUgYWxyZWFkeSBleGlzdHNcIiB9KVxyXG4gICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1widXNlcm5hbWVcIjogcmVxLmJvZHkudXNlcm5hbWV9KVxyXG4gICAgICAgIGlmKHVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiQSB1c2VyIHdpdGggdGhpcyBFbWFpbCBvciBVc2VybmFtZSBhbHJlYWR5IGV4aXN0c1wiIH0pXHJcbiAgICAgICAgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHsuLi5yZXEuYm9keSwgcGFzc3dvcmQ6IENyeXB0b0pTLkFFUy5lbmNyeXB0KHJlcS5ib2R5LnBhc3N3b3JkLCBwcm9jZXNzLmVudi5TRUNSRVRfS0VZKS50b1N0cmluZygpfSlcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIG1zZzogXCJZb3UncmUgUmVzZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5ICFcIixcclxuICAgICAgICAgICAgdXNlclxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcImJhZCByZXF1ZXN0LCB5b3UgYXJlIHVzaW5nIHdyb25nIHJlcXVlc3QgbWV0aG9kIVwiIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cCJdLCJuYW1lcyI6WyJDb25uZWN0REIiLCJVc2VyIiwiQ3J5cHRvSlMiLCJyZXF1aXJlIiwiU2lnbnVwIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlciIsImZpbmRPbmUiLCJib2R5IiwiZW1haWwiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1zZyIsInVzZXJuYW1lIiwiY3JlYXRlIiwicGFzc3dvcmQiLCJBRVMiLCJlbmNyeXB0IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9LRVkiLCJ0b1N0cmluZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/signup.js\n");

/***/ }),

/***/ "(api)/./utils/connect_db.js":
/*!*****************************!*\
  !*** ./utils/connect_db.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ConnectDB = async ()=>{\n    if (mongoose.connections[0].readyState) return console.log(\"Success! Connection already exists\\n\");\n    else return mongoose.connect(\"mongodb://localhost:27017/urbanfits\", console.log(\"Connected to the mongodb successfully!\\n\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0X2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QixNQUFNQyxZQUFZLFVBQVU7SUFDeEIsSUFBR0YsU0FBU0csV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVSxFQUFFLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQztTQUNyRCxPQUFPTixTQUFTTyxPQUFPLENBQUNDLHFDQUFxQixFQUFFSCxRQUFRQyxHQUFHLENBQUM7QUFDcEU7QUFFQSxpRUFBZUosU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VyYmFuLWZpdHMvLi91dGlscy9jb25uZWN0X2RiLmpzP2NlZmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBDb25uZWN0REIgPSBhc3luYyAoKT0+e1xyXG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkgcmV0dXJuIGNvbnNvbGUubG9nKFwiU3VjY2VzcyEgQ29ubmVjdGlvbiBhbHJlYWR5IGV4aXN0c1xcblwiKVxyXG4gICAgZWxzZSByZXR1cm4gbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHRoZSBtb25nb2RiIHN1Y2Nlc3NmdWxseSFcXG5cIikpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3REQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJDb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/connect_db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/signup.js"));
module.exports = __webpack_exports__;

})();