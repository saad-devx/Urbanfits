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

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/connect_db */ \"(api)/./utils/connect_db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst forgotPassword = async (req, res)=>{\n    if (req.method === \"POST\") {\n        await (0,_utils_connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        let user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n            email: req.body.email\n        });\n        if (!user) user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n            username: req.body.email\n        }) //because user can put the username or email in the same field and api should verify from both ways\n        ;\n        if (!user) return res.status(404).json({\n            success: false,\n            msg: \"You don't have an account with this email!\"\n        });\n        const token = jwt.sign({\n            id: user._id\n        }, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\", {\n            expiresIn: \"2m\"\n        });\n        // create a nodemailer transport object\n        const transport = nodemailer.createTransport({\n            host: \"smtp-relay.sendinblue.com\",\n            port: 587,\n            secure: false,\n            auth: {\n                user: \"binarshadsaad6@gmail.com\",\n                pass: \"rO2FdLIhB8RYjfg9\"\n            }\n        });\n        // create email message object\n        const message = {\n            from: \"ME <binarshadsaad6@gmail.com>\",\n            to: \"binarshadsaad6@gmail.com\",\n            subject: \"Test Email from Sendinblue\",\n            text: \"hellow this is a text email body to check the email service\",\n            html: \"<p>hellow this is a text email body to check the email service</p>\"\n        };\n        // send email using nodemailer\n        transport.sendMail(message, function(error, info) {\n            if (error) {\n                console.log(error);\n            } else {\n                console.log(\"Email sent: \" + info.response);\n            }\n        });\n        res.send(\"done\");\n    } else {\n        res.status(400).json({\n            success: false,\n            msg: \"bad request, you are using wrong request method!\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forgotPassword);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9mb3Jnb3RwYXNzd29yZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ1Y7QUFDaEMsTUFBTUUsYUFBYUMsbUJBQU9BLENBQUM7QUFDM0IsTUFBTUMsTUFBTUQsbUJBQU9BLENBQUMsa0NBQWM7QUFHbEMsTUFBTUUsaUJBQWlCLE9BQU9DLEtBQUtDLE1BQVE7SUFDdkMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdkIsTUFBTVIsNkRBQVNBO1FBQ2YsSUFBSVMsT0FBTyxNQUFNUiwyREFBWSxDQUFDO1lBQUVVLE9BQU9MLElBQUlNLElBQUksQ0FBQ0QsS0FBSztRQUFDO1FBQ3RELElBQUksQ0FBQ0YsTUFBTUEsT0FBTyxNQUFNUiwyREFBWSxDQUFDO1lBQUVZLFVBQVVQLElBQUlNLElBQUksQ0FBQ0QsS0FBSztRQUFDLEdBQUcsbUdBQW1HOztRQUN0SyxJQUFJLENBQUNGLE1BQU0sT0FBT0YsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTLEtBQUs7WUFBRUMsS0FBSztRQUE2QztRQUMzRyxNQUFNQyxRQUFRZCxJQUFJZSxJQUFJLENBQUM7WUFBRUMsSUFBSVgsS0FBS1ksR0FBRztRQUFDLEdBQUdDLHdDQUFzQixFQUFFO1lBQUVHLFdBQVc7UUFBSztRQUVuRix1Q0FBdUM7UUFDdkMsTUFBTUMsWUFBWXhCLFdBQVd5QixlQUFlLENBQUM7WUFDekNDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxRQUFRLEtBQUs7WUFDYkMsTUFBTTtnQkFDRnRCLE1BQU07Z0JBQ051QixNQUFNO1lBQ1Y7UUFDSjtRQUVBLDhCQUE4QjtRQUM5QixNQUFNQyxVQUFVO1lBQ1pDLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxTQUFTO1lBQ1RDLE1BQU07WUFDTkMsTUFBTTtRQUNWO1FBRUEsOEJBQThCO1FBQzlCWixVQUFVYSxRQUFRLENBQUNOLFNBQVMsU0FBVU8sS0FBSyxFQUFFQyxJQUFJLEVBQUU7WUFDL0MsSUFBSUQsT0FBTztnQkFDUEUsUUFBUUMsR0FBRyxDQUFDSDtZQUNoQixPQUFPO2dCQUNIRSxRQUFRQyxHQUFHLENBQUMsaUJBQWlCRixLQUFLRyxRQUFRO1lBQzlDLENBQUM7UUFDTDtRQUVBckMsSUFBSXNDLElBQUksQ0FBQztJQUViLE9BQ0s7UUFDRHRDLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxLQUFLO1lBQUVDLEtBQUs7UUFBbUQ7SUFDbkcsQ0FBQztBQUNMO0FBRUEsaUVBQWVaLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmJhbi1maXRzLy4vcGFnZXMvYXBpL3VzZXIvZm9yZ290cGFzc3dvcmQuanM/MGI0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ubmVjdERCIGZyb20gXCJAL3V0aWxzL2Nvbm5lY3RfZGJcIlxyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvdXNlclwiXHJcbmNvbnN0IG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJyk7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIilcclxuXHJcblxyXG5jb25zdCBmb3Jnb3RQYXNzd29yZCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIGF3YWl0IENvbm5lY3REQigpXHJcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSlcclxuICAgICAgICBpZiAoIXVzZXIpIHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB1c2VybmFtZTogcmVxLmJvZHkuZW1haWwgfSkgLy9iZWNhdXNlIHVzZXIgY2FuIHB1dCB0aGUgdXNlcm5hbWUgb3IgZW1haWwgaW4gdGhlIHNhbWUgZmllbGQgYW5kIGFwaSBzaG91bGQgdmVyaWZ5IGZyb20gYm90aCB3YXlzXHJcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIllvdSBkb24ndCBoYXZlIGFuIGFjY291bnQgd2l0aCB0aGlzIGVtYWlsIVwiIH0pXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IGlkOiB1c2VyLl9pZCB9LCBwcm9jZXNzLmVudi5TRUNSRVRfS0VZLCB7IGV4cGlyZXNJbjogJzJtJyB9KVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSBub2RlbWFpbGVyIHRyYW5zcG9ydCBvYmplY3RcclxuICAgICAgICBjb25zdCB0cmFuc3BvcnQgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgICAgICAgIGhvc3Q6IFwic210cC1yZWxheS5zZW5kaW5ibHVlLmNvbVwiLFxyXG4gICAgICAgICAgICBwb3J0OiA1ODcsXHJcbiAgICAgICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IFwiYmluYXJzaGFkc2FhZDZAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzOiBcInJPMkZkTEloQjhSWWpmZzlcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGVtYWlsIG1lc3NhZ2Ugb2JqZWN0XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgZnJvbTogXCJNRSA8YmluYXJzaGFkc2FhZDZAZ21haWwuY29tPlwiLFxyXG4gICAgICAgICAgICB0bzogXCJiaW5hcnNoYWRzYWFkNkBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgc3ViamVjdDogXCJUZXN0IEVtYWlsIGZyb20gU2VuZGluYmx1ZVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcImhlbGxvdyB0aGlzIGlzIGEgdGV4dCBlbWFpbCBib2R5IHRvIGNoZWNrIHRoZSBlbWFpbCBzZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgIGh0bWw6IFwiPHA+aGVsbG93IHRoaXMgaXMgYSB0ZXh0IGVtYWlsIGJvZHkgdG8gY2hlY2sgdGhlIGVtYWlsIHNlcnZpY2U8L3A+XCIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gc2VuZCBlbWFpbCB1c2luZyBub2RlbWFpbGVyXHJcbiAgICAgICAgdHJhbnNwb3J0LnNlbmRNYWlsKG1lc3NhZ2UsIGZ1bmN0aW9uIChlcnJvciwgaW5mbykge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1haWwgc2VudDogXCIgKyBpbmZvLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXMuc2VuZChcImRvbmVcIilcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiYmFkIHJlcXVlc3QsIHlvdSBhcmUgdXNpbmcgd3JvbmcgcmVxdWVzdCBtZXRob2QhXCIgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9yZ290UGFzc3dvcmQiXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiVXNlciIsIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwiand0IiwiZm9yZ290UGFzc3dvcmQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsIiwiYm9keSIsInVzZXJuYW1lIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJtc2ciLCJ0b2tlbiIsInNpZ24iLCJpZCIsIl9pZCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVRfS0VZIiwiZXhwaXJlc0luIiwidHJhbnNwb3J0IiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwicGFzcyIsIm1lc3NhZ2UiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJzZW5kTWFpbCIsImVycm9yIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/forgotpassword.js\n");

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