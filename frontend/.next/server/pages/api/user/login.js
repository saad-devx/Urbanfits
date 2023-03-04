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
exports.id = "pages/api/user/login";
exports.ids = ["pages/api/user/login"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nextjs-cors":
/*!******************************!*\
  !*** external "nextjs-cors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = mongoose.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a username\"\n        ],\n        maxLength: [\n            30,\n            \"Username cannot exceed 30 characters\"\n        ],\n        minLength: [\n            4,\n            \"Username should have more than 4 characters\"\n        ],\n        unique: [\n            true,\n            \"This username is already in use\"\n        ]\n    },\n    phone: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a valid email address\"\n        ],\n        unique: [\n            true,\n            \"This email address is already in use\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please Enter Your Password\"\n        ],\n        minLength: [\n            8,\n            \"Password should be greater than 8 characters\"\n        ]\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    firstname: {\n        type: String\n    },\n    lastname: {\n        type: String\n    },\n    title: {\n        type: String\n    },\n    gender: {\n        type: String\n    },\n    date_of_birth: {\n        type: String\n    },\n    newsletter_sub_email: {\n        type: Boolean,\n        default: false,\n        required: true\n    },\n    newsletter_sub_phone: {\n        type: Boolean,\n        default: false,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGFBQWFGLFNBQVNHLE1BQU0sQ0FBQztJQUMvQkMsVUFBVTtRQUNOQyxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQTBCO1FBQzNDQyxXQUFXO1lBQUM7WUFBSTtTQUF1QztRQUN2REMsV0FBVztZQUFDO1lBQUc7U0FBOEM7UUFDN0RDLFFBQVE7WUFBQyxJQUFJO1lBQUU7U0FBa0M7SUFDckQ7SUFDQUMsT0FBTztRQUNITixNQUFNQztRQUNOQyxVQUFVLElBQUk7SUFDbEI7SUFDQUssT0FBTztRQUNIUCxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQXFDO1FBQ3RERyxRQUFRO1lBQUMsSUFBSTtZQUFFO1NBQXVDO0lBQzFEO0lBQ0FHLFVBQVU7UUFDTlIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUE2QjtRQUM5Q0UsV0FBVztZQUFDO1lBQUc7U0FBK0M7SUFDbEU7SUFDQUssTUFBTTtRQUNGVCxNQUFNQztRQUNOUyxTQUFTO0lBQ2I7SUFDQUMsV0FBVztRQUNQWCxNQUFNQztJQUNWO0lBQ0FXLFVBQVU7UUFDTlosTUFBTUM7SUFDVjtJQUNBWSxPQUFPO1FBQ0hiLE1BQU1DO0lBQ1Y7SUFDQWEsUUFBUTtRQUNKZCxNQUFNQztJQUNWO0lBQ0FjLGVBQWU7UUFDWGYsTUFBTUM7SUFDVjtJQUNBZSxzQkFBc0I7UUFDbEJoQixNQUFNaUI7UUFDTlAsU0FBUyxLQUFLO1FBQ2RSLFVBQVUsSUFBSTtJQUNsQjtJQUNBZ0Isc0JBQXNCO1FBQ2xCbEIsTUFBTWlCO1FBQ05QLFNBQVMsS0FBSztRQUNkUixVQUFVLElBQUk7SUFDbEI7QUFDSixHQUFHO0lBQUVpQixZQUFZLElBQUk7QUFBQztBQUV0QkMsT0FBT0MsT0FBTyxHQUFHMUIsU0FBUzJCLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJNUIsU0FBUzZCLEtBQUssQ0FBQyxRQUFRM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmJhbi1maXRzLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBhIHVzZXJuYW1lXCJdLFxyXG4gICAgICAgIG1heExlbmd0aDogWzMwLCBcIlVzZXJuYW1lIGNhbm5vdCBleGNlZWQgMzAgY2hhcmFjdGVyc1wiXSxcclxuICAgICAgICBtaW5MZW5ndGg6IFs0LCBcIlVzZXJuYW1lIHNob3VsZCBoYXZlIG1vcmUgdGhhbiA0IGNoYXJhY3RlcnNcIl0sXHJcbiAgICAgICAgdW5pcXVlOiBbdHJ1ZSwgXCJUaGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgaW4gdXNlXCJdXHJcbiAgICB9LFxyXG4gICAgcGhvbmU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiXSxcclxuICAgICAgICB1bmlxdWU6IFt0cnVlLCBcIlRoaXMgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZVwiXSxcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIEVudGVyIFlvdXIgUGFzc3dvcmRcIl0sXHJcbiAgICAgICAgbWluTGVuZ3RoOiBbOCwgXCJQYXNzd29yZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDggY2hhcmFjdGVyc1wiXSxcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwidXNlclwiXHJcbiAgICB9LFxyXG4gICAgZmlyc3RuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgbGFzdG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGdlbmRlcjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRhdGVfb2ZfYmlydGg6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBuZXdzbGV0dGVyX3N1Yl9lbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBuZXdzbGV0dGVyX3N1Yl9waG9uZToge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH1cclxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKSJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJtaW5MZW5ndGgiLCJ1bmlxdWUiLCJwaG9uZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwidGl0bGUiLCJnZW5kZXIiLCJkYXRlX29mX2JpcnRoIiwibmV3c2xldHRlcl9zdWJfZW1haWwiLCJCb29sZWFuIiwibmV3c2xldHRlcl9zdWJfcGhvbmUiLCJ0aW1lc3RhbXBzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/login.js":
/*!*********************************!*\
  !*** ./pages/api/user/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/connect_db */ \"(api)/./utils/connect_db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_2__);\n\n\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst Login = async (req, res)=>{\n    // await NextCors(req, res, {\n    //     // Options\n    //     methods: ['POST'],\n    //     origin: '*',\n    //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204\n    // })\n    try {\n        if (req.method === \"POST\") {\n            await (0,_utils_connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            let user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                email: req.body.email\n            });\n            if (!user) user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                username: req.body.email\n            });\n            if (!user) return res.status(404).json({\n                success: false,\n                msg: \"User not found, please create an account\"\n            });\n            const bytes = CryptoJS.AES.decrypt(user.password, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\");\n            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);\n            if (req.body.password !== originalPassword) return res.status(404).json({\n                success: false,\n                msg: \"Your password is incorrect\"\n            });\n            const payload = jwt.sign({\n                ...user\n            }, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\");\n            res.status(200).json({\n                success: true,\n                msg: \"You are Logged in successfully !\",\n                payload\n            });\n        } else {\n            res.status(400).json({\n                success: false,\n                msg: \"bad request, you are using wrong request method!\"\n            });\n        }\n    } catch (error) {\n        res.status(500).json({\n            success: false,\n            msg: \"Internal server error occured, please try again later\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFDVjtBQUNoQyxNQUFNRSxXQUFXQyxtQkFBT0EsQ0FBQyw0QkFBVztBQUNEO0FBQ25DLE1BQU1FLE1BQU1GLG1CQUFPQSxDQUFDLGtDQUFjO0FBRWxDLE1BQU1HLFFBQVEsT0FBT0MsS0FBS0MsTUFBUTtJQUM5Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsK0ZBQStGO0lBQy9GLEtBQUs7SUFDTCxJQUFJO1FBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7WUFDdkIsTUFBTVQsNkRBQVNBO1lBQ2YsSUFBSVUsT0FBTyxNQUFNVCwyREFBWSxDQUFDO2dCQUFFVyxPQUFPTCxJQUFJTSxJQUFJLENBQUNELEtBQUs7WUFBQztZQUN0RCxJQUFJLENBQUNGLE1BQU1BLE9BQU8sTUFBTVQsMkRBQVksQ0FBQztnQkFBRWEsVUFBVVAsSUFBSU0sSUFBSSxDQUFDRCxLQUFLO1lBQUM7WUFDaEUsSUFBSSxDQUFDRixNQUFNLE9BQU9GLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsS0FBSztZQUEyQztZQUN6RyxNQUFNQyxRQUFRakIsU0FBU2tCLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDWCxLQUFLWSxRQUFRLEVBQUVDLHdDQUFzQjtZQUN4RSxNQUFNRyxtQkFBbUJQLE1BQU1RLFFBQVEsQ0FBQ3pCLFNBQVMwQixHQUFHLENBQUNDLElBQUk7WUFDekQsSUFBSXRCLElBQUlNLElBQUksQ0FBQ1MsUUFBUSxLQUFLSSxrQkFBa0IsT0FBT2xCLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsS0FBSztZQUE2QjtZQUM1SCxNQUFNWSxVQUFVekIsSUFBSTBCLElBQUksQ0FBQztnQkFBRSxHQUFHckIsSUFBSTtZQUFDLEdBQUdhLHdDQUFzQjtZQUM1RGYsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDakJDLFNBQVMsSUFBSTtnQkFDYkMsS0FBSztnQkFDTFk7WUFDSjtRQUNKLE9BQ0s7WUFDRHRCLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsS0FBSztZQUFtRDtRQUNuRyxDQUFDO0lBQ0wsRUFDQSxPQUFPYyxPQUFPO1FBQ1Z4QixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVMsS0FBSztZQUFFQyxLQUFLO1FBQXdEO0lBQ3hHO0FBQ0o7QUFDQSxpRUFBZVosS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VyYmFuLWZpdHMvLi9wYWdlcy9hcGkvdXNlci9sb2dpbi5qcz9lOGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25uZWN0REIgZnJvbSBcIkAvdXRpbHMvY29ubmVjdF9kYlwiXHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy91c2VyXCJcclxuY29uc3QgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpXHJcbmltcG9ydCBOZXh0Q29ycyBmcm9tICduZXh0anMtY29ycyc7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIilcclxuXHJcbmNvbnN0IExvZ2luID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAvLyBhd2FpdCBOZXh0Q29ycyhyZXEsIHJlcywge1xyXG4gICAgLy8gICAgIC8vIE9wdGlvbnNcclxuICAgIC8vICAgICBtZXRob2RzOiBbJ1BPU1QnXSxcclxuICAgIC8vICAgICBvcmlnaW46ICcqJyxcclxuICAgIC8vICAgICBvcHRpb25zU3VjY2Vzc1N0YXR1czogMjAwLCAvLyBzb21lIGxlZ2FjeSBicm93c2VycyAoSUUxMSwgdmFyaW91cyBTbWFydFRWcykgY2hva2Ugb24gMjA0XHJcbiAgICAvLyB9KVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IENvbm5lY3REQigpXHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHJlcS5ib2R5LmVtYWlsIH0pXHJcbiAgICAgICAgICAgIGlmICghdXNlcikgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lOiByZXEuYm9keS5lbWFpbCB9KVxyXG4gICAgICAgICAgICBpZiAoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiVXNlciBub3QgZm91bmQsIHBsZWFzZSBjcmVhdGUgYW4gYWNjb3VudFwiIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQodXNlci5wYXNzd29yZCwgcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSlcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxQYXNzd29yZCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KVxyXG4gICAgICAgICAgICBpZiAocmVxLmJvZHkucGFzc3dvcmQgIT09IG9yaWdpbmFsUGFzc3dvcmQpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiWW91ciBwYXNzd29yZCBpcyBpbmNvcnJlY3RcIiB9KVxyXG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gand0LnNpZ24oeyAuLi51c2VyIH0sIHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtc2c6IFwiWW91IGFyZSBMb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5ICFcIixcclxuICAgICAgICAgICAgICAgIHBheWxvYWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJiYWQgcmVxdWVzdCwgeW91IGFyZSB1c2luZyB3cm9uZyByZXF1ZXN0IG1ldGhvZCFcIiB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiVXNlciIsIkNyeXB0b0pTIiwicmVxdWlyZSIsIk5leHRDb3JzIiwiand0IiwiTG9naW4iLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsIiwiYm9keSIsInVzZXJuYW1lIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJtc2ciLCJieXRlcyIsIkFFUyIsImRlY3J5cHQiLCJwYXNzd29yZCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVRfS0VZIiwib3JpZ2luYWxQYXNzd29yZCIsInRvU3RyaW5nIiwiZW5jIiwiVXRmOCIsInBheWxvYWQiLCJzaWduIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/login.js\n");

/***/ }),

/***/ "(api)/./utils/connect_db.js":
/*!*****************************!*\
  !*** ./utils/connect_db.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ConnectDB = async ()=>{\n    if (mongoose.connections[0].readyState) return console.log(\"Success! Connection already exists\\n\");\n    else return mongoose.connect(\"mongodb+srv://darkreaper:s19114666d@cluster0.eyxeosm.mongodb.net/Urbanfits?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        dbName: \"Urbanfits\"\n    }, console.log(\"Connected to the mongodb successfully!\\n\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0X2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QixNQUFNQyxZQUFZLFVBQVU7SUFDeEIsSUFBR0YsU0FBU0csV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVSxFQUFFLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQztTQUNyRCxPQUFPTixTQUFTTyxPQUFPLENBQUNDLHdHQUFxQixFQUFDO1FBQy9DRyxpQkFBaUIsSUFBSTtRQUNyQkMsb0JBQW9CLElBQUk7UUFDeEJDLFFBQVE7SUFDVixHQUFHUixRQUFRQyxHQUFHLENBQUM7QUFDckI7QUFFQSxpRUFBZUosU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VyYmFuLWZpdHMvLi91dGlscy9jb25uZWN0X2RiLmpzP2NlZmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBDb25uZWN0REIgPSBhc3luYyAoKT0+e1xyXG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkgcmV0dXJuIGNvbnNvbGUubG9nKFwiU3VjY2VzcyEgQ29ubmVjdGlvbiBhbHJlYWR5IGV4aXN0c1xcblwiKVxyXG4gICAgZWxzZSByZXR1cm4gbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkse1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgICAgZGJOYW1lOiBcIlVyYmFuZml0c1wiXHJcbiAgICAgIH0sIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHRoZSBtb25nb2RiIHN1Y2Nlc3NmdWxseSFcXG5cIikpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3REQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJDb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJkYk5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/connect_db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/login.js"));
module.exports = __webpack_exports__;

})();