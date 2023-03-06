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

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = mongoose.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a username\"\n        ],\n        maxLength: [\n            30,\n            \"Username cannot exceed 30 characters\"\n        ],\n        minLength: [\n            4,\n            \"Username should have more than 4 characters\"\n        ],\n        unique: [\n            true,\n            \"This username is already in use\"\n        ]\n    },\n    phone: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a valid email address\"\n        ],\n        unique: [\n            true,\n            \"This email address is already in use\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please Enter Your Password\"\n        ],\n        minLength: [\n            8,\n            \"Password should be greater than 8 characters\"\n        ]\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    firstname: {\n        type: String\n    },\n    lastname: {\n        type: String\n    },\n    title: {\n        type: String\n    },\n    gender: {\n        type: String\n    },\n    date_of_birth: {\n        type: String\n    },\n    newsletter_sub_email: {\n        type: Boolean,\n        default: false,\n        required: true\n    },\n    newsletter_sub_phone: {\n        type: Boolean,\n        default: false,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGFBQWFGLFNBQVNHLE1BQU0sQ0FBQztJQUMvQkMsVUFBVTtRQUNOQyxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQTBCO1FBQzNDQyxXQUFXO1lBQUM7WUFBSTtTQUF1QztRQUN2REMsV0FBVztZQUFDO1lBQUc7U0FBOEM7UUFDN0RDLFFBQVE7WUFBQyxJQUFJO1lBQUU7U0FBa0M7SUFDckQ7SUFDQUMsT0FBTztRQUNITixNQUFNQztJQUNWO0lBQ0FNLE9BQU87UUFDSFAsTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUFxQztRQUN0REcsUUFBUTtZQUFDLElBQUk7WUFBRTtTQUF1QztJQUMxRDtJQUNBRyxVQUFVO1FBQ05SLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBNkI7UUFDOUNFLFdBQVc7WUFBQztZQUFHO1NBQStDO0lBQ2xFO0lBQ0FLLE1BQU07UUFDRlQsTUFBTUM7UUFDTlMsU0FBUztJQUNiO0lBQ0FDLFdBQVc7UUFDUFgsTUFBTUM7SUFDVjtJQUNBVyxVQUFVO1FBQ05aLE1BQU1DO0lBQ1Y7SUFDQVksT0FBTztRQUNIYixNQUFNQztJQUNWO0lBQ0FhLFFBQVE7UUFDSmQsTUFBTUM7SUFDVjtJQUNBYyxlQUFlO1FBQ1hmLE1BQU1DO0lBQ1Y7SUFDQWUsc0JBQXNCO1FBQ2xCaEIsTUFBTWlCO1FBQ05QLFNBQVMsS0FBSztRQUNkUixVQUFVLElBQUk7SUFDbEI7SUFDQWdCLHNCQUFzQjtRQUNsQmxCLE1BQU1pQjtRQUNOUCxTQUFTLEtBQUs7UUFDZFIsVUFBVSxJQUFJO0lBQ2xCO0FBQ0osR0FBRztJQUFFaUIsWUFBWSxJQUFJO0FBQUM7QUFFdEJDLE9BQU9DLE9BQU8sR0FBRzFCLFNBQVMyQixNQUFNLENBQUNDLElBQUksSUFBSTVCLFNBQVM2QixLQUFLLENBQUMsUUFBUTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJiYW4tZml0cy8uL21vZGVscy91c2VyLmpzPzY1OTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgYSB1c2VybmFtZVwiXSxcclxuICAgICAgICBtYXhMZW5ndGg6IFszMCwgXCJVc2VybmFtZSBjYW5ub3QgZXhjZWVkIDMwIGNoYXJhY3RlcnNcIl0sXHJcbiAgICAgICAgbWluTGVuZ3RoOiBbNCwgXCJVc2VybmFtZSBzaG91bGQgaGF2ZSBtb3JlIHRoYW4gNCBjaGFyYWN0ZXJzXCJdLFxyXG4gICAgICAgIHVuaXF1ZTogW3RydWUsIFwiVGhpcyB1c2VybmFtZSBpcyBhbHJlYWR5IGluIHVzZVwiXVxyXG4gICAgfSxcclxuICAgIHBob25lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIl0sXHJcbiAgICAgICAgdW5pcXVlOiBbdHJ1ZSwgXCJUaGlzIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2VcIl0sXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBFbnRlciBZb3VyIFBhc3N3b3JkXCJdLFxyXG4gICAgICAgIG1pbkxlbmd0aDogWzgsIFwiUGFzc3dvcmQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiA4IGNoYXJhY3RlcnNcIl0sXHJcbiAgICB9LFxyXG4gICAgcm9sZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiBcInVzZXJcIlxyXG4gICAgfSxcclxuICAgIGZpcnN0bmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGxhc3RuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBnZW5kZXI6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBkYXRlX29mX2JpcnRoOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgbmV3c2xldHRlcl9zdWJfZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbmV3c2xldHRlcl9zdWJfcGhvbmU6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSkiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwibWluTGVuZ3RoIiwidW5pcXVlIiwicGhvbmUiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInRpdGxlIiwiZ2VuZGVyIiwiZGF0ZV9vZl9iaXJ0aCIsIm5ld3NsZXR0ZXJfc3ViX2VtYWlsIiwiQm9vbGVhbiIsIm5ld3NsZXR0ZXJfc3ViX3Bob25lIiwidGltZXN0YW1wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/signup.js":
/*!**********************************!*\
  !*** ./pages/api/user/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/connect_db */ \"(api)/./utils/connect_db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_2__);\n\n\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n// Only accessable by Admin \nconst Signup = async (req, res)=>{\n    try {\n        // await NextCors(req, res, {\n        //     // Options\n        //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],\n        //     origin: '*',\n        //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204\n        // });\n        if (req.method === \"POST\") {\n            await (0,_utils_connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            let user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                \"email\": req.body.email\n            });\n            if (user) return res.status(400).json({\n                success: false,\n                msg: \"A user with this Email or Username already exists\"\n            });\n            user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                \"username\": req.body.username\n            });\n            if (user) return res.status(400).json({\n                success: false,\n                msg: \"A user with this Email or Username already exists\"\n            });\n            user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().create({\n                ...req.body,\n                password: CryptoJS.AES.encrypt(req.body.password, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\").toString()\n            });\n            const payload = jwt.sign({\n                ...user\n            }, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\");\n            res.status(200).json({\n                success: true,\n                msg: \"You're Resgistered successfully !\",\n                payload\n            });\n        } else {\n            res.status(400).json({\n                success: false,\n                msg: \"bad request, you are using wrong request method!\"\n            });\n        }\n    } catch (error) {\n        res.status(500).json({\n            success: false,\n            msg: \"Internal server error occured, please try again later\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ1Y7QUFDaEMsTUFBTUUsV0FBV0MsbUJBQU9BLENBQUMsNEJBQVc7QUFDRDtBQUNuQyxNQUFNRSxNQUFNRixtQkFBT0EsQ0FBQyxrQ0FBYztBQUVsQyw0QkFBNEI7QUFDNUIsTUFBTUcsU0FBUyxPQUFPQyxLQUFLQyxNQUFRO0lBQy9CLElBQUk7UUFDQSw2QkFBNkI7UUFDN0IsaUJBQWlCO1FBQ2pCLGtFQUFrRTtRQUNsRSxtQkFBbUI7UUFDbkIsK0ZBQStGO1FBQy9GLE1BQU07UUFDTixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtZQUN2QixNQUFNVCw2REFBU0E7WUFDZixJQUFJVSxPQUFPLE1BQU1ULDJEQUFZLENBQUM7Z0JBQUUsU0FBU00sSUFBSUssSUFBSSxDQUFDQyxLQUFLO1lBQUM7WUFDeEQsSUFBSUgsTUFBTSxPQUFPRixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTLEtBQUs7Z0JBQUVDLEtBQUs7WUFBb0Q7WUFDakhQLE9BQU8sTUFBTVQsMkRBQVksQ0FBQztnQkFBRSxZQUFZTSxJQUFJSyxJQUFJLENBQUNNLFFBQVE7WUFBQztZQUMxRCxJQUFJUixNQUFNLE9BQU9GLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsS0FBSztZQUFvRDtZQUNqSFAsT0FBTyxNQUFNVCwwREFBVyxDQUFDO2dCQUFFLEdBQUdNLElBQUlLLElBQUk7Z0JBQUVRLFVBQVVsQixTQUFTbUIsR0FBRyxDQUFDQyxPQUFPLENBQUNmLElBQUlLLElBQUksQ0FBQ1EsUUFBUSxFQUFFRyx3Q0FBc0IsRUFBRUcsUUFBUTtZQUFHO1lBQzdILE1BQU1DLFVBQVV0QixJQUFJdUIsSUFBSSxDQUFDO2dCQUFFLEdBQUdsQixJQUFJO1lBQUMsR0FBR2Esd0NBQXNCO1lBQzVEZixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNqQkMsU0FBUyxJQUFJO2dCQUNiQyxLQUFLO2dCQUNMVTtZQUNKO1FBQ0osT0FDSztZQUNEbkIsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUyxLQUFLO2dCQUFFQyxLQUFLO1lBQW1EO1FBQ25HLENBQUM7SUFDTCxFQUNBLE9BQU9ZLE9BQU87UUFDVnJCLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxLQUFLO1lBQUVDLEtBQUs7UUFBd0Q7SUFDeEc7QUFDSjtBQUNBLGlFQUFlWCxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJiYW4tZml0cy8uL3BhZ2VzL2FwaS91c2VyL3NpZ251cC5qcz9lYzU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25uZWN0REIgZnJvbSBcIkAvdXRpbHMvY29ubmVjdF9kYlwiXHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy91c2VyXCJcclxuY29uc3QgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpXHJcbmltcG9ydCBOZXh0Q29ycyBmcm9tICduZXh0anMtY29ycyc7XHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIilcclxuXHJcbi8vIE9ubHkgYWNjZXNzYWJsZSBieSBBZG1pbiBcclxuY29uc3QgU2lnbnVwID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGF3YWl0IE5leHRDb3JzKHJlcSwgcmVzLCB7XHJcbiAgICAgICAgLy8gICAgIC8vIE9wdGlvbnNcclxuICAgICAgICAvLyAgICAgbWV0aG9kczogWydHRVQnLCAnSEVBRCcsICdQVVQnLCAnUEFUQ0gnLCAnUE9TVCcsICdERUxFVEUnXSxcclxuICAgICAgICAvLyAgICAgb3JpZ2luOiAnKicsXHJcbiAgICAgICAgLy8gICAgIG9wdGlvbnNTdWNjZXNzU3RhdHVzOiAyMDAsIC8vIHNvbWUgbGVnYWN5IGJyb3dzZXJzIChJRTExLCB2YXJpb3VzIFNtYXJ0VFZzKSBjaG9rZSBvbiAyMDRcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IENvbm5lY3REQigpXHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgXCJlbWFpbFwiOiByZXEuYm9keS5lbWFpbCB9KVxyXG4gICAgICAgICAgICBpZiAodXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJBIHVzZXIgd2l0aCB0aGlzIEVtYWlsIG9yIFVzZXJuYW1lIGFscmVhZHkgZXhpc3RzXCIgfSlcclxuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IFwidXNlcm5hbWVcIjogcmVxLmJvZHkudXNlcm5hbWUgfSlcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiQSB1c2VyIHdpdGggdGhpcyBFbWFpbCBvciBVc2VybmFtZSBhbHJlYWR5IGV4aXN0c1wiIH0pXHJcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7IC4uLnJlcS5ib2R5LCBwYXNzd29yZDogQ3J5cHRvSlMuQUVTLmVuY3J5cHQocmVxLmJvZHkucGFzc3dvcmQsIHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpLnRvU3RyaW5nKCkgfSlcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGp3dC5zaWduKHsgLi4udXNlciB9LCBwcm9jZXNzLmVudi5TRUNSRVRfS0VZKVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbXNnOiBcIllvdSdyZSBSZXNnaXN0ZXJlZCBzdWNjZXNzZnVsbHkgIVwiLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcImJhZCByZXF1ZXN0LCB5b3UgYXJlIHVzaW5nIHdyb25nIHJlcXVlc3QgbWV0aG9kIVwiIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIkludGVybmFsIHNlcnZlciBlcnJvciBvY2N1cmVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXAiXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiVXNlciIsIkNyeXB0b0pTIiwicmVxdWlyZSIsIk5leHRDb3JzIiwiand0IiwiU2lnbnVwIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlciIsImZpbmRPbmUiLCJib2R5IiwiZW1haWwiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1zZyIsInVzZXJuYW1lIiwiY3JlYXRlIiwicGFzc3dvcmQiLCJBRVMiLCJlbmNyeXB0IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9LRVkiLCJ0b1N0cmluZyIsInBheWxvYWQiLCJzaWduIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/signup.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/signup.js"));
module.exports = __webpack_exports__;

})();