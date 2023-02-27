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
exports.id = "pages/api/user/update";
exports.ids = ["pages/api/user/update"];
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

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = mongoose.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a username\"\n        ],\n        maxLength: [\n            30,\n            \"Username cannot exceed 30 characters\"\n        ],\n        minLength: [\n            4,\n            \"Username should have more than 4 characters\"\n        ],\n        unique: [\n            true,\n            \"This username is already in use\"\n        ]\n    },\n    phone: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a valid email address\"\n        ],\n        unique: [\n            true,\n            \"This email address is already in use\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please Enter Your Password\"\n        ],\n        minLength: [\n            8,\n            \"Password should be greater than 8 characters\"\n        ]\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    firstname: {\n        type: String\n    },\n    lastname: {\n        type: String\n    },\n    title: {\n        type: String\n    },\n    gender: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGFBQWFGLFNBQVNHLE1BQU0sQ0FBQztJQUMvQkMsVUFBVTtRQUNOQyxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQTBCO1FBQzNDQyxXQUFXO1lBQUM7WUFBSTtTQUF1QztRQUN2REMsV0FBVztZQUFDO1lBQUc7U0FBOEM7UUFDN0RDLFFBQVE7WUFBQyxJQUFJO1lBQUU7U0FBa0M7SUFDckQ7SUFDQUMsT0FBTTtRQUNGTixNQUFLQztRQUNMQyxVQUFVLElBQUk7SUFDbEI7SUFDQUssT0FBTztRQUNIUCxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQXFDO1FBQ3RERyxRQUFRO1lBQUMsSUFBSTtZQUFFO1NBQXVDO0lBQzFEO0lBQ0FHLFVBQVU7UUFDTlIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUE2QjtRQUM5Q0UsV0FBVztZQUFDO1lBQUc7U0FBK0M7SUFDbEU7SUFDQUssTUFBTTtRQUNGVCxNQUFNQztRQUNOUyxTQUFTO0lBQ2I7SUFDQUMsV0FBVztRQUNQWCxNQUFNQztJQUNWO0lBQ0FXLFVBQVU7UUFDTlosTUFBTUM7SUFDVjtJQUNBWSxPQUFPO1FBQ0hiLE1BQU1DO0lBQ1Y7SUFDQWEsUUFBUTtRQUNKZCxNQUFNQztJQUNWO0FBR0osR0FBRztJQUFFYyxZQUFZLElBQUk7QUFBQztBQUV0QkMsT0FBT0MsT0FBTyxHQUFHdEIsU0FBU3VCLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJeEIsU0FBU3lCLEtBQUssQ0FBQyxRQUFRdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmJhbi1maXRzLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBhIHVzZXJuYW1lXCJdLFxyXG4gICAgICAgIG1heExlbmd0aDogWzMwLCBcIlVzZXJuYW1lIGNhbm5vdCBleGNlZWQgMzAgY2hhcmFjdGVyc1wiXSxcclxuICAgICAgICBtaW5MZW5ndGg6IFs0LCBcIlVzZXJuYW1lIHNob3VsZCBoYXZlIG1vcmUgdGhhbiA0IGNoYXJhY3RlcnNcIl0sXHJcbiAgICAgICAgdW5pcXVlOiBbdHJ1ZSwgXCJUaGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgaW4gdXNlXCJdXHJcbiAgICB9LFxyXG4gICAgcGhvbmU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIl0sXHJcbiAgICAgICAgdW5pcXVlOiBbdHJ1ZSwgXCJUaGlzIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2VcIl0sXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBFbnRlciBZb3VyIFBhc3N3b3JkXCJdLFxyXG4gICAgICAgIG1pbkxlbmd0aDogWzgsIFwiUGFzc3dvcmQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiA4IGNoYXJhY3RlcnNcIl0sXHJcbiAgICB9LFxyXG4gICAgcm9sZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiBcInVzZXJcIlxyXG4gICAgfSxcclxuICAgIGZpcnN0bmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGxhc3RuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBnZW5kZXI6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH1cclxuXHJcblxyXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsIm1pbkxlbmd0aCIsInVuaXF1ZSIsInBob25lIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJ0aXRsZSIsImdlbmRlciIsInRpbWVzdGFtcHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/update.js":
/*!**********************************!*\
  !*** ./pages/api/user/update.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/connect_db */ \"(api)/./utils/connect_db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst UpdateUser = async (req, res)=>{\n    try {\n        if (req.method === \"PUT\") {\n            await (0,_utils_connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            if (!req.query.id) return res.status(400).json({\n                success: false,\n                msg: \"User id not provided\"\n            });\n            let user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findById(req.query.id);\n            if (!user) return res.status(404).json({\n                success: false,\n                msg: \"User not found\"\n            });\n            await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findByIdAndUpdate(req.query.id, req.body);\n            user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findById(req.query.id);\n            const payload = jwt.sign({\n                ...user\n            }, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\");\n            res.status(200).json({\n                success: true,\n                msg: `User with id ${req.query.id} has been updated successfully`,\n                payload\n            });\n        } else {\n            res.status(400).json({\n                success: false,\n                msg: \"bad request, you are using wrong request method!\"\n            });\n        }\n    } catch (err) {\n        res.status(500).send(\"Internal Server Error occurred. Please retry\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci91cGRhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNWO0FBQ2hDLE1BQU1FLE1BQU1DLG1CQUFPQSxDQUFDLGtDQUFjO0FBRWxDLE1BQU1DLGFBQWEsT0FBT0MsS0FBS0MsTUFBUTtJQUNuQyxJQUFJO1FBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87WUFDdEIsTUFBTVAsNkRBQVNBO1lBQ2YsSUFBSSxDQUFDSyxJQUFJRyxLQUFLLENBQUNDLEVBQUUsRUFBRSxPQUFPSCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTLEtBQUs7Z0JBQUVDLEtBQUs7WUFBdUI7WUFDN0YsSUFBSUMsT0FBTyxNQUFNYiw0REFBYSxDQUFDSSxJQUFJRyxLQUFLLENBQUNDLEVBQUU7WUFDM0MsSUFBSSxDQUFDSyxNQUFNLE9BQU9SLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsS0FBSztZQUFpQjtZQUMvRSxNQUFNWixxRUFBc0IsQ0FBQ0ksSUFBSUcsS0FBSyxDQUFDQyxFQUFFLEVBQUVKLElBQUlZLElBQUk7WUFDbkRILE9BQU8sTUFBTWIsNERBQWEsQ0FBQ0ksSUFBSUcsS0FBSyxDQUFDQyxFQUFFO1lBQ3ZDLE1BQU1TLFVBQVVoQixJQUFJaUIsSUFBSSxDQUFDO2dCQUFDLEdBQUdMLElBQUk7WUFBQSxHQUFHTSx3Q0FBc0I7WUFDMURkLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ2pCQyxTQUFTLElBQUk7Z0JBQ2JDLEtBQUssQ0FBQyxhQUFhLEVBQUVSLElBQUlHLEtBQUssQ0FBQ0MsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUNqRVM7WUFDSjtRQUNKLE9BQ0s7WUFDRFosSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUyxLQUFLO2dCQUFFQyxLQUFLO1lBQW1EO1FBQ25HLENBQUM7SUFDTCxFQUNBLE9BQU9VLEtBQUs7UUFDUmpCLElBQUlJLE1BQU0sQ0FBQyxLQUFLYyxJQUFJLENBQUM7SUFDekI7QUFDSjtBQUVBLGlFQUFlcEIsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VyYmFuLWZpdHMvLi9wYWdlcy9hcGkvdXNlci91cGRhdGUuanM/NWVhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ubmVjdERCIGZyb20gXCJAL3V0aWxzL2Nvbm5lY3RfZGJcIlxyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvdXNlclwiXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIilcclxuXHJcbmNvbnN0IFVwZGF0ZVVzZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdQVVQnKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IENvbm5lY3REQigpXHJcbiAgICAgICAgICAgIGlmICghcmVxLnF1ZXJ5LmlkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIlVzZXIgaWQgbm90IHByb3ZpZGVkXCIgfSlcclxuICAgICAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKHJlcS5xdWVyeS5pZClcclxuICAgICAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIlVzZXIgbm90IGZvdW5kXCIgfSlcclxuICAgICAgICAgICAgYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZShyZXEucXVlcnkuaWQsIHJlcS5ib2R5KVxyXG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChyZXEucXVlcnkuaWQpXHJcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBqd3Quc2lnbih7Li4udXNlcn0sIHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtc2c6IGBVc2VyIHdpdGggaWQgJHtyZXEucXVlcnkuaWR9IGhhcyBiZWVuIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5YCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJiYWQgcmVxdWVzdCwgeW91IGFyZSB1c2luZyB3cm9uZyByZXF1ZXN0IG1ldGhvZCFcIiB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkludGVybmFsIFNlcnZlciBFcnJvciBvY2N1cnJlZC4gUGxlYXNlIHJldHJ5XCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVVzZXIiXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiVXNlciIsImp3dCIsInJlcXVpcmUiLCJVcGRhdGVVc2VyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibXNnIiwidXNlciIsImZpbmRCeUlkIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJib2R5IiwicGF5bG9hZCIsInNpZ24iLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUX0tFWSIsImVyciIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/update.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/update.js"));
module.exports = __webpack_exports__;

})();