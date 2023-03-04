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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/connect_db */ \"(api)/./utils/connect_db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_2__);\n\n\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst Login = async (req, res)=>{\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default()(req, res, {\n        // Options\n        methods: [\n            \"POST\"\n        ],\n        origin: \"*\",\n        optionsSuccessStatus: 200\n    });\n    try {\n        if (req.method === \"POST\") {\n            await (0,_utils_connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            let user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                email: req.body.email\n            });\n            if (!user) user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                username: req.body.email\n            });\n            if (!user) return res.status(404).json({\n                success: false,\n                msg: \"User not found, please create an account\"\n            });\n            const bytes = CryptoJS.AES.decrypt(user.password, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\");\n            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);\n            if (req.body.password !== originalPassword) return res.status(404).json({\n                success: false,\n                msg: \"Your password is incorrect\"\n            });\n            const payload = jwt.sign({\n                ...user\n            }, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\");\n            res.status(200).json({\n                success: true,\n                msg: \"You are Logged in successfully !\",\n                payload\n            });\n        } else {\n            res.status(400).json({\n                success: false,\n                msg: \"bad request, you are using wrong request method!\"\n            });\n        }\n    } catch (error) {\n        res.status(500).json({\n            success: false,\n            msg: \"Internal server error occured, please try again later\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFDVjtBQUNoQyxNQUFNRSxXQUFXQyxtQkFBT0EsQ0FBQyw0QkFBVztBQUNEO0FBQ25DLE1BQU1FLE1BQU1GLG1CQUFPQSxDQUFDLGtDQUFjO0FBRWxDLE1BQU1HLFFBQVEsT0FBT0MsS0FBS0MsTUFBUTtJQUM5QixNQUFNSixrREFBUUEsQ0FBQ0csS0FBS0MsS0FBSztRQUNyQixVQUFVO1FBQ1ZDLFNBQVM7WUFBQztTQUFPO1FBQ2pCQyxRQUFRO1FBQ1JDLHNCQUFzQjtJQUMxQjtJQUNBLElBQUk7UUFDQSxJQUFJSixJQUFJSyxNQUFNLEtBQUssUUFBUTtZQUN2QixNQUFNWiw2REFBU0E7WUFDZixJQUFJYSxPQUFPLE1BQU1aLDJEQUFZLENBQUM7Z0JBQUVjLE9BQU9SLElBQUlTLElBQUksQ0FBQ0QsS0FBSztZQUFDO1lBQ3RELElBQUksQ0FBQ0YsTUFBTUEsT0FBTyxNQUFNWiwyREFBWSxDQUFDO2dCQUFFZ0IsVUFBVVYsSUFBSVMsSUFBSSxDQUFDRCxLQUFLO1lBQUM7WUFDaEUsSUFBSSxDQUFDRixNQUFNLE9BQU9MLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsS0FBSztZQUEyQztZQUN6RyxNQUFNQyxRQUFRcEIsU0FBU3FCLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDWCxLQUFLWSxRQUFRLEVBQUVDLHdDQUFzQjtZQUN4RSxNQUFNRyxtQkFBbUJQLE1BQU1RLFFBQVEsQ0FBQzVCLFNBQVM2QixHQUFHLENBQUNDLElBQUk7WUFDekQsSUFBSXpCLElBQUlTLElBQUksQ0FBQ1MsUUFBUSxLQUFLSSxrQkFBa0IsT0FBT3JCLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsS0FBSztZQUE2QjtZQUM1SCxNQUFNWSxVQUFVNUIsSUFBSTZCLElBQUksQ0FBQztnQkFBRSxHQUFHckIsSUFBSTtZQUFDLEdBQUdhLHdDQUFzQjtZQUM1RGxCLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ2pCQyxTQUFTLElBQUk7Z0JBQ2JDLEtBQUs7Z0JBQ0xZO1lBQ0o7UUFDSixPQUNLO1lBQ0R6QixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTLEtBQUs7Z0JBQUVDLEtBQUs7WUFBbUQ7UUFDbkcsQ0FBQztJQUNMLEVBQ0EsT0FBT2MsT0FBTztRQUNWM0IsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTLEtBQUs7WUFBRUMsS0FBSztRQUF3RDtJQUN4RztBQUNKO0FBQ0EsaUVBQWVmLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmJhbi1maXRzLy4vcGFnZXMvYXBpL3VzZXIvbG9naW4uanM/ZThhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ubmVjdERCIGZyb20gXCJAL3V0aWxzL2Nvbm5lY3RfZGJcIlxyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvdXNlclwiXHJcbmNvbnN0IENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKVxyXG5pbXBvcnQgTmV4dENvcnMgZnJvbSAnbmV4dGpzLWNvcnMnO1xyXG5jb25zdCBqd3QgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpXHJcblxyXG5jb25zdCBMb2dpbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgYXdhaXQgTmV4dENvcnMocmVxLCByZXMsIHtcclxuICAgICAgICAvLyBPcHRpb25zXHJcbiAgICAgICAgbWV0aG9kczogWydQT1NUJ10sXHJcbiAgICAgICAgb3JpZ2luOiAnKicsXHJcbiAgICAgICAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMCwgLy8gc29tZSBsZWdhY3kgYnJvd3NlcnMgKElFMTEsIHZhcmlvdXMgU21hcnRUVnMpIGNob2tlIG9uIDIwNFxyXG4gICAgfSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgICAgICBhd2FpdCBDb25uZWN0REIoKVxyXG4gICAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiByZXEuYm9keS5lbWFpbCB9KVxyXG4gICAgICAgICAgICBpZiAoIXVzZXIpIHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB1c2VybmFtZTogcmVxLmJvZHkuZW1haWwgfSlcclxuICAgICAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIlVzZXIgbm90IGZvdW5kLCBwbGVhc2UgY3JlYXRlIGFuIGFjY291bnRcIiB9KVxyXG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHVzZXIucGFzc3dvcmQsIHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpXHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUGFzc3dvcmQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOClcclxuICAgICAgICAgICAgaWYgKHJlcS5ib2R5LnBhc3N3b3JkICE9PSBvcmlnaW5hbFBhc3N3b3JkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIllvdXIgcGFzc3dvcmQgaXMgaW5jb3JyZWN0XCIgfSlcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGp3dC5zaWduKHsgLi4udXNlciB9LCBwcm9jZXNzLmVudi5TRUNSRVRfS0VZKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbXNnOiBcIllvdSBhcmUgTG9nZ2VkIGluIHN1Y2Nlc3NmdWxseSAhXCIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiYmFkIHJlcXVlc3QsIHlvdSBhcmUgdXNpbmcgd3JvbmcgcmVxdWVzdCBtZXRob2QhXCIgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yIG9jY3VyZWQsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIiB9KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbIkNvbm5lY3REQiIsIlVzZXIiLCJDcnlwdG9KUyIsInJlcXVpcmUiLCJOZXh0Q29ycyIsImp3dCIsIkxvZ2luIiwicmVxIiwicmVzIiwibWV0aG9kcyIsIm9yaWdpbiIsIm9wdGlvbnNTdWNjZXNzU3RhdHVzIiwibWV0aG9kIiwidXNlciIsImZpbmRPbmUiLCJlbWFpbCIsImJvZHkiLCJ1c2VybmFtZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibXNnIiwiYnl0ZXMiLCJBRVMiLCJkZWNyeXB0IiwicGFzc3dvcmQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUX0tFWSIsIm9yaWdpbmFsUGFzc3dvcmQiLCJ0b1N0cmluZyIsImVuYyIsIlV0ZjgiLCJwYXlsb2FkIiwic2lnbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/login.js\n");

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