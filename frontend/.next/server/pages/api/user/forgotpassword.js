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
exports.id = "pages/api/user/forgotpassword";
exports.ids = ["pages/api/user/forgotpassword"];
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

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = mongoose.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a username\"\n        ],\n        maxLength: [\n            30,\n            \"Username cannot exceed 30 characters\"\n        ],\n        minLength: [\n            4,\n            \"Username should have more than 4 characters\"\n        ],\n        unique: [\n            true,\n            \"This username is already in use\"\n        ]\n    },\n    phone: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a valid email address\"\n        ],\n        unique: [\n            true,\n            \"This email address is already in use\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please Enter Your Password\"\n        ],\n        minLength: [\n            8,\n            \"Password should be greater than 8 characters\"\n        ]\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    }\n}, {\n    timestamps: true\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGFBQWFGLFNBQVNHLE1BQU0sQ0FBQztJQUMvQkMsVUFBVTtRQUNOQyxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQTBCO1FBQzNDQyxXQUFXO1lBQUM7WUFBSTtTQUF1QztRQUN2REMsV0FBVztZQUFDO1lBQUc7U0FBOEM7UUFDN0RDLFFBQVE7WUFBQyxJQUFJO1lBQUU7U0FBa0M7SUFDckQ7SUFDQUMsT0FBTTtRQUNGTixNQUFLQztRQUNMQyxVQUFVLElBQUk7SUFDbEI7SUFDQUssT0FBTztRQUNIUCxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQXFDO1FBQ3RERyxRQUFRO1lBQUMsSUFBSTtZQUFFO1NBQXVDO0lBQzFEO0lBQ0FHLFVBQVU7UUFDTlIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUE2QjtRQUM5Q0UsV0FBVztZQUFDO1lBQUc7U0FBK0M7SUFDbEU7SUFDQUssTUFBTTtRQUNGVCxNQUFNQztRQUNOUyxTQUFTO0lBQ2I7QUFFSixHQUFHO0lBQUVDLFlBQVksSUFBSTtBQUFDO0FBRXRCQyxPQUFPQyxPQUFPLEdBQUdsQixTQUFTbUIsTUFBTSxDQUFDQyxJQUFJLElBQUlwQixTQUFTcUIsS0FBSyxDQUFDLFFBQVFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3VyYmFuLWZpdHMvLi9tb2RlbHMvdXNlci5qcz82NTk0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIGEgdXNlcm5hbWVcIl0sXHJcbiAgICAgICAgbWF4TGVuZ3RoOiBbMzAsIFwiVXNlcm5hbWUgY2Fubm90IGV4Y2VlZCAzMCBjaGFyYWN0ZXJzXCJdLFxyXG4gICAgICAgIG1pbkxlbmd0aDogWzQsIFwiVXNlcm5hbWUgc2hvdWxkIGhhdmUgbW9yZSB0aGFuIDQgY2hhcmFjdGVyc1wiXSxcclxuICAgICAgICB1bmlxdWU6IFt0cnVlLCBcIlRoaXMgdXNlcm5hbWUgaXMgYWxyZWFkeSBpbiB1c2VcIl1cclxuICAgIH0sXHJcbiAgICBwaG9uZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiXSxcclxuICAgICAgICB1bmlxdWU6IFt0cnVlLCBcIlRoaXMgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZVwiXSxcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIEVudGVyIFlvdXIgUGFzc3dvcmRcIl0sXHJcbiAgICAgICAgbWluTGVuZ3RoOiBbOCwgXCJQYXNzd29yZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDggY2hhcmFjdGVyc1wiXSxcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwidXNlclwiXHJcbiAgICB9XHJcblxyXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsIm1pbkxlbmd0aCIsInVuaXF1ZSIsInBob25lIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/forgotpassword.js":
/*!******************************************!*\
  !*** ./pages/api/user/forgotpassword.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/connect_db */ \"(api)/./utils/connect_db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst forgotPassword = async (req, res)=>{\n    if (req.method === \"POST\") {\n        await (0,_utils_connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        let user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n            email: req.body.email\n        });\n        if (!user) user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n            username: req.body.email\n        }) //because user can put the username or email in the same field and api should verify from both ways\n        ;\n        if (!user) return res.status(404).json({\n            success: false,\n            msg: \"You don't have an account with this email!\"\n        });\n        const token = jwt.sign({\n            id: user._id\n        }, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\", {});\n        console.log(user.id, token);\n        res.send(\"yayyyy\");\n    // const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)\n    // const originalPassword = bytes.toString(CryptoJS.enc.Utf8)\n    // if (req.body.password !== originalPassword) return res.status(404).json({ success: false, msg: \"Your password is incorrect\" })\n    // const payload = jwt.sign({username: user.username, email: user.email, phone:user.phone }, process.env.SECRET_KEY)\n    // res.status(200).json({\n    //     success: true,\n    //     msg: \"You are Logged in successfully !\",\n    //     payload\n    // })\n    } else {\n        res.status(400).json({\n            success: false,\n            msg: \"bad request, you are using wrong request method!\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forgotPassword);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9mb3Jnb3RwYXNzd29yZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ1Y7QUFDaEMsTUFBTUUsV0FBV0MsbUJBQU9BLENBQUMsNEJBQVc7QUFDcEMsTUFBTUMsTUFBTUQsbUJBQU9BLENBQUMsa0NBQWM7QUFHbEMsTUFBTUUsaUJBQWlCLE9BQU9DLEtBQUtDLE1BQVE7SUFDdkMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdkIsTUFBTVIsNkRBQVNBO1FBQ2YsSUFBSVMsT0FBTyxNQUFNUiwyREFBWSxDQUFDO1lBQUVVLE9BQU9MLElBQUlNLElBQUksQ0FBQ0QsS0FBSztRQUFDO1FBQ3RELElBQUksQ0FBQ0YsTUFBTUEsT0FBTyxNQUFNUiwyREFBWSxDQUFDO1lBQUVZLFVBQVVQLElBQUlNLElBQUksQ0FBQ0QsS0FBSztRQUFDLEdBQUcsbUdBQW1HOztRQUN0SyxJQUFJLENBQUNGLE1BQU0sT0FBT0YsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTLEtBQUs7WUFBRUMsS0FBSztRQUE2QztRQUMzRyxNQUFNQyxRQUFRZCxJQUFJZSxJQUFJLENBQUM7WUFBQ0MsSUFBSVgsS0FBS1ksR0FBRztRQUFBLEdBQUdDLHdDQUFzQixFQUFFLENBQUM7UUFDaEVHLFFBQVFDLEdBQUcsQ0FBQ2pCLEtBQUtXLEVBQUUsRUFBRUY7UUFDckJYLElBQUlvQixJQUFJLENBQUM7SUFHVCw0RUFBNEU7SUFDNUUsNkRBQTZEO0lBQzdELGlJQUFpSTtJQUNqSSxvSEFBb0g7SUFDcEgseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwrQ0FBK0M7SUFDL0MsY0FBYztJQUNkLEtBQUs7SUFDVCxPQUNLO1FBQ0RwQixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVMsS0FBSztZQUFFQyxLQUFLO1FBQW1EO0lBQ25HLENBQUM7QUFDTDtBQUVBLGlFQUFlWixjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJiYW4tZml0cy8uL3BhZ2VzL2FwaS91c2VyL2ZvcmdvdHBhc3N3b3JkLmpzPzBiNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbm5lY3REQiBmcm9tIFwiQC91dGlscy9jb25uZWN0X2RiXCJcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJcIlxyXG5jb25zdCBDcnlwdG9KUyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIilcclxuY29uc3Qgand0ID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKVxyXG5cclxuXHJcbmNvbnN0IGZvcmdvdFBhc3N3b3JkID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgYXdhaXQgQ29ubmVjdERCKClcclxuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiByZXEuYm9keS5lbWFpbCB9KVxyXG4gICAgICAgIGlmICghdXNlcikgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lOiByZXEuYm9keS5lbWFpbCB9KSAvL2JlY2F1c2UgdXNlciBjYW4gcHV0IHRoZSB1c2VybmFtZSBvciBlbWFpbCBpbiB0aGUgc2FtZSBmaWVsZCBhbmQgYXBpIHNob3VsZCB2ZXJpZnkgZnJvbSBib3RoIHdheXNcclxuICAgICAgICBpZiAoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiWW91IGRvbid0IGhhdmUgYW4gYWNjb3VudCB3aXRoIHRoaXMgZW1haWwhXCIgfSlcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHtpZDogdXNlci5faWR9LCBwcm9jZXNzLmVudi5TRUNSRVRfS0VZLCB7fSlcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyLmlkLCB0b2tlbilcclxuICAgICAgICByZXMuc2VuZChcInlheXl5eVwiKVxyXG5cclxuXHJcbiAgICAgICAgLy8gY29uc3QgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh1c2VyLnBhc3N3b3JkLCBwcm9jZXNzLmVudi5TRUNSRVRfS0VZKVxyXG4gICAgICAgIC8vIGNvbnN0IG9yaWdpbmFsUGFzc3dvcmQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOClcclxuICAgICAgICAvLyBpZiAocmVxLmJvZHkucGFzc3dvcmQgIT09IG9yaWdpbmFsUGFzc3dvcmQpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiWW91ciBwYXNzd29yZCBpcyBpbmNvcnJlY3RcIiB9KVxyXG4gICAgICAgIC8vIGNvbnN0IHBheWxvYWQgPSBqd3Quc2lnbih7dXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsIGVtYWlsOiB1c2VyLmVtYWlsLCBwaG9uZTp1c2VyLnBob25lIH0sIHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpXHJcbiAgICAgICAgLy8gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgIC8vICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBtc2c6IFwiWW91IGFyZSBMb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5ICFcIixcclxuICAgICAgICAvLyAgICAgcGF5bG9hZFxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiYmFkIHJlcXVlc3QsIHlvdSBhcmUgdXNpbmcgd3JvbmcgcmVxdWVzdCBtZXRob2QhXCIgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9yZ290UGFzc3dvcmQiXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiVXNlciIsIkNyeXB0b0pTIiwicmVxdWlyZSIsImp3dCIsImZvcmdvdFBhc3N3b3JkIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlciIsImZpbmRPbmUiLCJlbWFpbCIsImJvZHkiLCJ1c2VybmFtZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibXNnIiwidG9rZW4iLCJzaWduIiwiaWQiLCJfaWQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/forgotpassword.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/forgotpassword.js"));
module.exports = __webpack_exports__;

})();