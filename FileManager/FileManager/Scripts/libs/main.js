(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h5>\n    {{fileService.currentPath}}\n  </h5>\n  </div>\n \n<app-files></app-files>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file.service */ "./src/app/file.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(fileService) {
        this.fileService = fileService;
        this.path = fileService.currentPath;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _files_files_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files/files.component */ "./src/app/files/files.component.ts");
/* harmony import */ var _contextmenu_contextmenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contextmenu/contextmenu.component */ "./src/app/contextmenu/contextmenu.component.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file.service */ "./src/app/file.service.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _files_files_component__WEBPACK_IMPORTED_MODULE_6__["FilesComponent"],
                _contextmenu_contextmenu_component__WEBPACK_IMPORTED_MODULE_7__["ContextmenuComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [_file_service__WEBPACK_IMPORTED_MODULE_8__["FileService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/const.js":
/*!**************************!*\
  !*** ./src/app/const.js ***!
  \**************************/
/*! exports provided: GetDrivesURL, GetFoldersURL, GetFilesURL, DeleteFileURL, CreateURL, OpenURL, errorMessage, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDrivesURL", function() { return GetDrivesURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFoldersURL", function() { return GetFoldersURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFilesURL", function() { return GetFilesURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFileURL", function() { return DeleteFileURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateURL", function() { return CreateURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenURL", function() { return OpenURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });

const GetDrivesURL = '/FileSystem/GetDrives';
const GetFoldersURL = '/FileSystem/GetDirectoriesList?directory=';
const GetFilesURL = '/FileSystem/GetFilesList?directory=';
const DeleteFileURL = '/FileSystem/Delete?path=';
const CreateURL = '/FileSystem/Create?path=';
const OpenURL = '/FileSystem/Open?path=';

const errorMessage = "Sorry, something was wrong";
const Message = "Enter folder name";


/***/ }),

/***/ "./src/app/contextmenu/contextmenu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contextmenu/contextmenu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contextmenu{\r\n    font-style: oblique;\r\n    position: absolute;\r\n    border: 0.5px solid #D3D3D3;\r\n    background: white;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n    padding-right: 2%;\r\n    padding-left: 2%;\r\n    padding-top: 1%;\r\n}\r\n.delete:hover{\r\n    color:blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGV4dG1lbnUvY29udGV4dG1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb250ZXh0bWVudS9jb250ZXh0bWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRleHRtZW51e1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI0QzRDNEMztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG59XHJcbi5kZWxldGU6aG92ZXJ7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/contextmenu/contextmenu.component.html":
/*!********************************************************!*\
  !*** ./src/app/contextmenu/contextmenu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contextmenu\" [ngStyle]=\"{'left.px': x, 'top.px': y}\">\n  <p (click)=\"Delete()\" [ngClass]=\"{'delete':true}\">Delete</p>\n</div>"

/***/ }),

/***/ "./src/app/contextmenu/contextmenu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contextmenu/contextmenu.component.ts ***!
  \******************************************************/
/*! exports provided: ContextmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuComponent", function() { return ContextmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file.service */ "./src/app/file.service.ts");



var ContextmenuComponent = /** @class */ (function () {
    function ContextmenuComponent(fileService) {
        this.fileService = fileService;
        this.x = 0;
        this.y = 0;
    }
    ContextmenuComponent.prototype.Delete = function () {
        var _this = this;
        this.fileService.DeleteFile().subscribe(function (data) { return _this.fileService.flag = true; });
    };
    ContextmenuComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextmenuComponent.prototype, "x", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContextmenuComponent.prototype, "y", void 0);
    ContextmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contextmenu',
            template: __webpack_require__(/*! ./contextmenu.component.html */ "./src/app/contextmenu/contextmenu.component.html"),
            styles: [__webpack_require__(/*! ./contextmenu.component.css */ "./src/app/contextmenu/contextmenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])
    ], ContextmenuComponent);
    return ContextmenuComponent;
}());



/***/ }),

/***/ "./src/app/file.service.ts":
/*!*********************************!*\
  !*** ./src/app/file.service.ts ***!
  \*********************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/const.js */ "./src/app/const.js");




var FileService = /** @class */ (function () {
    function FileService(http) {
        this.http = http;
        this.isError = false;
        this.flag = true;
    }
    FileService.prototype.SetCurrentPath = function (path) {
        this.currentPath = path;
    };
    FileService.prototype.GetTarget = function (currentTarget, typeObject, currentPath) {
        this.target = currentTarget;
        this.typeObject = typeObject;
        this.SetCurrentPath(currentPath);
    };
    //gets logical drivers
    FileService.prototype.GetDrives = function () {
        return this.http.get(src_app_const_js__WEBPACK_IMPORTED_MODULE_3__["GetDrivesURL"]);
    };
    FileService.prototype.GetFolders = function (path) {
        return this.http.get(src_app_const_js__WEBPACK_IMPORTED_MODULE_3__["GetFoldersURL"] + path);
    };
    FileService.prototype.GetFiles = function (path) {
        return this.http.get(src_app_const_js__WEBPACK_IMPORTED_MODULE_3__["GetFilesURL"] + path);
    };
    FileService.prototype.InitializeList = function (pathList) {
        var list = [];
        pathList.forEach(function (pathElement) {
            var tempPathArray = pathElement.split("\\");
            if (tempPathArray[tempPathArray.length - 1] == "") {
                list.push({ name: pathElement, path: pathElement });
            }
            else {
                var name_1 = tempPathArray[tempPathArray.length - 1];
                list.push({ name: name_1, path: pathElement });
            }
        });
        return list;
    };
    FileService.prototype.DeleteFile = function () {
        return this.http.get(src_app_const_js__WEBPACK_IMPORTED_MODULE_3__["DeleteFileURL"] + this.target + "&type=" + this.typeObject);
    };
    FileService.prototype.Create = function (path, type) {
        return this.http.get(src_app_const_js__WEBPACK_IMPORTED_MODULE_3__["CreateURL"] + path + "&type=" + type);
    };
    FileService.prototype.SetError = function (error) {
        this.isError = true;
        this.error = src_app_const_js__WEBPACK_IMPORTED_MODULE_3__["errorMessage"];
    };
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/files/files.component.css":
/*!*******************************************!*\
  !*** ./src/app/files/files.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#buttons{\r\n    margin-top: 2%;\r\n}\r\nul.folders{\r\n    list-style-image: url(\"/Styles/resources/folder.png\");\r\n}\r\nul.files{\r\n    list-style-image: url(\"/Styles/resources/file.png\");\r\n    }\r\n#container{\r\n    color:black;\r\n    text-shadow: white 0 0 15px;\r\n}\r\nli{\r\n    font-family: \"Palatino Linotype\", \"Book Antiqua\", cursive;\r\n    cursor: pointer;\r\n}\r\n.button{text-decoration:none; text-align:center; \r\n    padding:14px 12px; \r\n    border:solid 1px #ced9de; \r\n    border-radius: 23px; \r\n    font:16px \"Courier New\", Times, serif; \r\n    font-weight:bold; \r\n    color:#8a8a8a; \r\n    background-color:#ffffff; \r\n    /* background-image: -moz-linear-gradient(top, #ffffff 0%, #d4d4d4 100%);  */\r\n    background: linear-gradient(to top, #ffffff, #d4d4d4); \r\n    /* background-image: -o-linear-gradient(top, #ffffff 0%, #d4d4d4 100%); */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4d4d4', endColorstr='#d4d4d4',GradientType=0 ); \r\n    /* background-image: linear-gradient(top, #ffffff 0% ,#d4d4d4 100%);    */ \r\n    /* -moz-box-shadow: 0px 0px 2px #bababa,  inset 0px 0px 1px #ffffff;   */\r\n    box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff; \r\n     \r\n     }\r\n.button:hover{\r\n    padding:15px 17px; \r\n    border:solid 1px #ced9de; \r\n    border-radius: 23px; \r\n    font:16px \"Courier New\", Times, serif; \r\n    font-weight:bold; \r\n    color:#ab9a9a; \r\n    background-color:#ffffff; \r\n    background-image: -ms-linear-gradient(top, #ffffff 0% ,#d4d4d4 100%); \r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4d4d4', endColorstr='#d4d4d4',GradientType=0 ); \r\n    background-image: linear-gradient(top, #ffffff 0% ,#d4d4d4 100%);  \r\n    box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;  \r\n     \r\n    }\r\n.button:active{\r\n    padding:15px 17px; \r\n    border:solid 1px #ced9de; \r\n    border-radius: 23px; \r\n    font:16px \"Courier New\", Times, serif; \r\n    font-weight:bold; \r\n    color:#8a8a8a; \r\n    background-color:#ffffff; \r\n    background-image: -ms-linear-gradient(top, #ffffff 0% ,#d4d4d4 100%); \r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4d4d4', endColorstr='#d4d4d4',GradientType=0 ); \r\n    background-image: linear-gradient(top, #ffffff 0% ,#d4d4d4 100%);  \r\n    box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;       \r\n    }\r\n.buttonback{text-decoration:none; text-align:center; \r\n        padding:1px 9px; \r\n        border:solid 1px #171717; \r\n        border-radius: 4px; \r\n        font:18px \"Courier New\", Courier, monospace; \r\n        font-weight:bold; \r\n        color:#ffffff; \r\n        background: linear-gradient(to bottom, #d4d4d4, #000000);\r\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=0 ); \r\n        background-image: linear-gradient(top, #d4d4d4 0% ,#000000 100%);  \r\n        box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;  \r\n         \r\n         }\r\n.buttonback:active{\r\n        padding:1px 9px; \r\n        border:none; \r\n         \r\n        font:18px \"Courier New\", Courier, monospace; \r\n        font-weight:bold; \r\n        color:#ffffff; \r\n        background: linear-gradient(to bottom, #d4d4d4, #000000); \r\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=0 ); \r\n        background-image: linear-gradient(top, #d4d4d4 0% ,#000000 100%);  \r\n        box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;  \r\n         \r\n        text-shadow: -1px 0px 0px #ffffff; \r\n        -webkit-filter: dropshadow(color=#ffffff, offx=-1, offy=0); \r\n                filter: dropshadow(color=#ffffff, offx=-1, offy=0);\r\n    }\r\n#directory{\r\n        margin-left: 45%; \r\n    }\r\n#file{\r\n        margin-left: 1%; \r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvZmlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLHNEQUFzRDtDQUN6RDtBQUVEO0lBQ0ksb0RBQW9EO0tBQ25EO0FBQ0w7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0NBQy9CO0FBQ0Q7SUFDSSwwREFBMEQ7SUFDMUQsZ0JBQWdCO0NBQ25CO0FBRUQsUUFBUSxxQkFBcUIsQ0FBQyxrQkFBa0I7SUFDNUMsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUd6QixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDZFQUE2RTtJQUM3RSxzREFBc0Q7SUFDdEQsMEVBQTBFO0lBQzFFLG9IQUFvSDtJQUNwSCwwRUFBMEU7SUFFMUUseUVBQXlFO0lBQ3pFLDBEQUEwRDs7TUFFeEQ7QUFBQTtJQUNGLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFHekIsb0JBQW9CO0lBQ3BCLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUF5QjtJQUl6QixxRUFBcUU7SUFDckUsb0hBQW9IO0lBQ3BILGlFQUFpRTtJQUdqRSwwREFBMEQ7O0tBRXpEO0FBQUE7SUFDRCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBR3pCLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx5QkFBeUI7SUFJekIscUVBQXFFO0lBQ3JFLG9IQUFvSDtJQUNwSCxpRUFBaUU7SUFHakUsMERBQTBEO0tBQ3pEO0FBRUQsWUFBWSxxQkFBcUIsQ0FBQyxrQkFBa0I7UUFDaEQsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUd6QixtQkFBbUI7UUFDbkIsNENBQTRDO1FBQzVDLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QseURBQXlEO1FBQ3pELG9IQUFvSDtRQUNwSCxpRUFBaUU7UUFHakUsMERBQTBEOztVQUV4RDtBQUFBO1FBQ0YsZ0JBQWdCO1FBQ2hCLFlBQVk7O1FBRVosNENBQTRDO1FBQzVDLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QseURBQXlEO1FBQ3pELG9IQUFvSDtRQUNwSCxpRUFBaUU7UUFHakUsMERBQTBEOztRQUUxRCxrQ0FBa0M7UUFDbEMsMkRBQW1EO2dCQUFuRCxtREFBbUQ7S0FDdEQ7QUFDRDtRQUNJLGlCQUFpQjtLQUNwQjtBQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmlsZXMvZmlsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNidXR0b25ze1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxudWwuZm9sZGVyc3tcclxuICAgIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcIi9TdHlsZXMvcmVzb3VyY2VzL2ZvbGRlci5wbmdcIik7XHJcbn1cclxuXHJcbnVsLmZpbGVze1xyXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiL1N0eWxlcy9yZXNvdXJjZXMvZmlsZS5wbmdcIik7XHJcbiAgICB9XHJcbiNjb250YWluZXJ7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIHRleHQtc2hhZG93OiB3aGl0ZSAwIDAgMTVweDtcclxufVxyXG5saXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIGN1cnNpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b257dGV4dC1kZWNvcmF0aW9uOm5vbmU7IHRleHQtYWxpZ246Y2VudGVyOyBcclxuICAgIHBhZGRpbmc6MTRweCAxMnB4OyBcclxuICAgIGJvcmRlcjpzb2xpZCAxcHggI2NlZDlkZTsgXHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6MjNweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czoyM3B4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7IFxyXG4gICAgZm9udDoxNnB4IFwiQ291cmllciBOZXdcIiwgVGltZXMsIHNlcmlmOyBcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG4gICAgY29sb3I6IzhhOGE4YTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7IFxyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZDRkNGQ0IDEwMCUpOyAgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmZmZmYsICNkNGQ0ZDQpOyBcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNkNGQ0ZDQgMTAwJSk7ICovXHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2Q0ZDRkNCcsIGVuZENvbG9yc3RyPScjZDRkNGQ0JyxHcmFkaWVudFR5cGU9MCApOyBcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUgLCNkNGQ0ZDQgMTAwJSk7ICAgICovXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6MHB4IDBweCAycHggI2JhYmFiYSwgaW5zZXQgMHB4IDBweCAxcHggI2ZmZmZmZjsgXHJcbiAgICAvKiAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMnB4ICNiYWJhYmEsICBpbnNldCAwcHggMHB4IDFweCAjZmZmZmZmOyAgICovXHJcbiAgICBib3gtc2hhZG93OjBweCAwcHggMnB4ICNiYWJhYmEsIGluc2V0IDBweCAwcHggMXB4ICNmZmZmZmY7IFxyXG4gICAgIFxyXG4gICAgIH0uYnV0dG9uOmhvdmVye1xyXG4gICAgcGFkZGluZzoxNXB4IDE3cHg7IFxyXG4gICAgYm9yZGVyOnNvbGlkIDFweCAjY2VkOWRlOyBcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czoyM3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOjIzcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDsgXHJcbiAgICBmb250OjE2cHggXCJDb3VyaWVyIE5ld1wiLCBUaW1lcywgc2VyaWY7IFxyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDsgXHJcbiAgICBjb2xvcjojYWI5YTlhOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNkNGQ0ZDQgMTAwJSk7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZDRkNGQ0IDEwMCUpOyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNkNGQ0ZDQgMTAwJSk7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUgLCNkNGQ0ZDQgMTAwJSk7IFxyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNkNGQ0ZDQnLCBlbmRDb2xvcnN0cj0nI2Q0ZDRkNCcsR3JhZGllbnRUeXBlPTAgKTsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlICwjZDRkNGQ0IDEwMCUpOyAgIFxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OjBweCAwcHggMnB4ICNiYWJhYmEsIGluc2V0IDBweCAwcHggMXB4ICNmZmZmZmY7IFxyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDJweCAjYmFiYWJhLCAgaW5zZXQgMHB4IDBweCAxcHggI2ZmZmZmZjsgIFxyXG4gICAgYm94LXNoYWRvdzowcHggMHB4IDJweCAjYmFiYWJhLCBpbnNldCAwcHggMHB4IDFweCAjZmZmZmZmOyAgXHJcbiAgICAgXHJcbiAgICB9LmJ1dHRvbjphY3RpdmV7XHJcbiAgICBwYWRkaW5nOjE1cHggMTdweDsgXHJcbiAgICBib3JkZXI6c29saWQgMXB4ICNjZWQ5ZGU7IFxyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjIzcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6MjNweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4OyBcclxuICAgIGZvbnQ6MTZweCBcIkNvdXJpZXIgTmV3XCIsIFRpbWVzLCBzZXJpZjsgXHJcbiAgICBmb250LXdlaWdodDpib2xkOyBcclxuICAgIGNvbG9yOiM4YThhOGE7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmOyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwgI2Q0ZDRkNCAxMDAlKTsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNkNGQ0ZDQgMTAwJSk7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwgI2Q0ZDRkNCAxMDAlKTsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSAsI2Q0ZDRkNCAxMDAlKTsgXHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2Q0ZDRkNCcsIGVuZENvbG9yc3RyPScjZDRkNGQ0JyxHcmFkaWVudFR5cGU9MCApOyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUgLCNkNGQ0ZDQgMTAwJSk7ICAgXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6MHB4IDBweCAycHggI2JhYmFiYSwgaW5zZXQgMHB4IDBweCAxcHggI2ZmZmZmZjsgXHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMnB4ICNiYWJhYmEsICBpbnNldCAwcHggMHB4IDFweCAjZmZmZmZmOyAgXHJcbiAgICBib3gtc2hhZG93OjBweCAwcHggMnB4ICNiYWJhYmEsIGluc2V0IDBweCAwcHggMXB4ICNmZmZmZmY7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25iYWNre3RleHQtZGVjb3JhdGlvbjpub25lOyB0ZXh0LWFsaWduOmNlbnRlcjsgXHJcbiAgICAgICAgcGFkZGluZzoxcHggOXB4OyBcclxuICAgICAgICBib3JkZXI6c29saWQgMXB4ICMxNzE3MTc7IFxyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOjRweDsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4OyBcclxuICAgICAgICBmb250OjE4cHggXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7IFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG4gICAgICAgIGNvbG9yOiNmZmZmZmY7IFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNkNGQ0ZDQsICMwMDAwMDApO1xyXG4gICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDAwMDAwJywgZW5kQ29sb3JzdHI9JyMwMDAwMDAnLEdyYWRpZW50VHlwZT0wICk7IFxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNkNGQ0ZDQgMCUgLCMwMDAwMDAgMTAwJSk7ICAgXHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OjBweCAwcHggMnB4ICNiYWJhYmEsIGluc2V0IDBweCAwcHggMXB4ICNmZmZmZmY7IFxyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAycHggI2JhYmFiYSwgIGluc2V0IDBweCAwcHggMXB4ICNmZmZmZmY7ICBcclxuICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMnB4ICNiYWJhYmEsIGluc2V0IDBweCAwcHggMXB4ICNmZmZmZmY7ICBcclxuICAgICAgICAgXHJcbiAgICAgICAgIH0uYnV0dG9uYmFjazphY3RpdmV7XHJcbiAgICAgICAgcGFkZGluZzoxcHggOXB4OyBcclxuICAgICAgICBib3JkZXI6bm9uZTsgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGZvbnQ6MThweCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTsgXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDsgXHJcbiAgICAgICAgY29sb3I6I2ZmZmZmZjsgXHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Q0ZDRkNCwgIzAwMDAwMCk7IFxyXG4gICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDAwMDAwJywgZW5kQ29sb3JzdHI9JyMwMDAwMDAnLEdyYWRpZW50VHlwZT0wICk7IFxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNkNGQ0ZDQgMCUgLCMwMDAwMDAgMTAwJSk7ICAgXHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OjBweCAwcHggMnB4ICNiYWJhYmEsIGluc2V0IDBweCAwcHggMXB4ICNmZmZmZmY7IFxyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAycHggI2JhYmFiYSwgIGluc2V0IDBweCAwcHggMXB4ICNmZmZmZmY7ICBcclxuICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMnB4ICNiYWJhYmEsIGluc2V0IDBweCAwcHggMXB4ICNmZmZmZmY7ICBcclxuICAgICAgICAgXHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggMHB4IDBweCAjZmZmZmZmOyBcclxuICAgICAgICBmaWx0ZXI6IGRyb3BzaGFkb3coY29sb3I9I2ZmZmZmZiwgb2ZmeD0tMSwgb2ZmeT0wKTtcclxuICAgIH1cclxuICAgICNkaXJlY3Rvcnl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1JTsgXHJcbiAgICB9XHJcbiAgICAjZmlsZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMSU7IFxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/files/files.component.html":
/*!********************************************!*\
  !*** ./src/app/files/files.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" (click)=\"disableContextMenu($event)\" oncontextmenu=\"return false;\">\n\n  <div hidden id=\"buttons\">\n    <a class=\"buttonback\" a href=\"#\" (click)=\"GetBack()\" >back </a>\n    <a id =\"directory\" class=\"button\" href=\"#\" (click)=\"CreateDirectory($event)\">{{constCreateFolder}}</a>\n    <a id =\"file\" class=\"button\" href=\"#\" (click)=\"CreateDirectory($event)\">{{constCreateFile}}</a>\n  </div>\n\n  <div *ngIf=\"fileService.isError==true\">\n    <app-message></app-message>\n  </div>\n\n  <ul ([ngModel])=\"listOfDirectories\" [ngClass]=\"{'folders':true}\">\n\n    <li *ngFor=\"let currentDirectory of listOfDirectories\" \n    (click)=\"ViewFileSystem(currentDirectory.path)\" \n    id=\"{{currentDirectory.path}}\"\n    (contextmenu)=\"onrightClick($event,'directory')\">\n      {{currentDirectory.name}}\n    </li>\n\n  </ul>\n\n  <ul ([ngModel])=\"listOfFiles\" [ngClass]=\"{'files':true}\">\n\n    <li *ngFor=\"let currentFile of listOfFiles\" \n    (click)=\"Open(currentFile.path)\" \n    id=\"{{currentFile.path}}\"\n    (contextmenu)=\"onrightClick($event,'file')\">\n      {{currentFile.name}}\n    </li>\n\n  </ul>\n\n  <div *ngIf=\"contextmenu==true\">\n    <app-contextmenu [x]=\"contextmenuX\" [y]=\"contextmenuY\"></app-contextmenu>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/files/files.component.ts":
/*!******************************************!*\
  !*** ./src/app/files/files.component.ts ***!
  \******************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file.service */ "./src/app/file.service.ts");
/* harmony import */ var src_app_const_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/const.js */ "./src/app/const.js");





var FilesComponent = /** @class */ (function () {
    function FilesComponent(http, fileService) {
        this.http = http;
        this.fileService = fileService;
        this.contextmenu = false;
        this.contextmenuX = 0;
        this.contextmenuY = 0;
        this.constCreateFolder = "Create new Folder";
        this.constCreateFile = "Create new File";
        this.GetDrives();
    }
    FilesComponent.prototype.GetDrives = function () {
        var _this = this;
        this.fileService.isError = false;
        this.fileService.GetDrives().subscribe(function (data) { return _this.listOfDirectories = _this.fileService.InitializeList(data); }, function (error) { return _this.fileService.SetError(error); });
        this.SetButtonHiddenAttr(false);
        this.fileService.SetCurrentPath("Root");
    };
    FilesComponent.prototype.ViewFileSystem = function (path) {
        var _this = this;
        this.fileService.isError = false;
        this.fileService.GetFolders(path).subscribe(function (data) { return _this.listOfDirectories = _this.fileService.InitializeList(data); }, function (error) { return _this.fileService.SetError(error); });
        this.fileService.GetFiles(path).subscribe(function (data) { return _this.listOfFiles = _this.fileService.InitializeList(data); }, function (error) { return _this.fileService.SetError(error); });
        this.currentPath = this.fileService.isError ? this.currentPath : path;
        this.SetButtonHiddenAttr(true);
        this.fileService.SetCurrentPath(this.currentPath);
    };
    ;
    FilesComponent.prototype.SetButtonHiddenAttr = function (hidden) {
        var bttn = document.getElementById('buttons');
        if (bttn) {
            if (hidden) {
                bttn.removeAttribute("hidden");
            }
            else {
                bttn.setAttribute("hidden", "true");
            }
        }
    };
    FilesComponent.prototype.GetBack = function () {
        var path = this.currentPath;
        var tempPathArray = path.split("\\");
        if (tempPathArray[tempPathArray.length - 1] == "") {
            this.GetDrives();
            this.currentPath = "";
            this.listOfFiles = [];
        }
        else {
            var offset = tempPathArray.length == 2 ? 0 : 1; // return to drive
            var dirName = tempPathArray[tempPathArray.length - 1];
            this.currentPath = path.substring(0, path.length - dirName.length - offset);
            this.ViewFileSystem(this.currentPath);
        }
    };
    FilesComponent.prototype.Open = function (path) {
        this.http.get(src_app_const_js__WEBPACK_IMPORTED_MODULE_4__["OpenURL"] + path).subscribe();
    };
    //activates the menu with the coordinates
    FilesComponent.prototype.onrightClick = function (event, typeObject) {
        this.contextmenuX = event.clientX;
        this.contextmenuY = event.clientY;
        this.contextmenu = true;
        this.fileService.GetTarget(event.currentTarget.id, typeObject, this.currentPath);
    };
    //disables the menu
    FilesComponent.prototype.disableContextMenu = function (event) {
        var _this = this;
        this.contextmenu = false;
        setTimeout(function () { return _this.Update(); }, 1000);
    };
    //Update list aftar delete
    FilesComponent.prototype.Update = function () {
        if (this.fileService.flag) {
            this.ViewFileSystem(this.currentPath);
            this.fileService.flag = false;
        }
    };
    FilesComponent.prototype.CreateDirectory = function (event) {
        var _this = this;
        this.fileService.isError = false;
        var name = prompt(src_app_const_js__WEBPACK_IMPORTED_MODULE_4__["Message"]);
        var type = event.currentTarget.id;
        if (name && this.currentPath) {
            this.fileService.Create(this.currentPath + "\\" + name, type).subscribe(function () { return _this.ViewFileSystem(_this.currentPath); }, function (error) { return _this.fileService.SetError(error); });
        }
    };
    FilesComponent.prototype.ngOnInit = function () {
    };
    FilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files',
            template: __webpack_require__(/*! ./files.component.html */ "./src/app/files/files.component.html"),
            styles: [__webpack_require__(/*! ./files.component.css */ "./src/app/files/files.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]])
    ], FilesComponent);
    return FilesComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message{\r\n    color: #D8000C;\r\n    background-color: #FFBABA;\r\n    position: fixed;\r\n    margin-left: 23%;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n    cursor: pointer;\r\n}\r\n#image{\r\n    background: url(\"/Styles/resources/error.png\");\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLCtDQUErQztDQUNsRCIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2V7XHJcbiAgICBjb2xvcjogI0Q4MDAwQztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJBQkE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjMlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNpbWFnZXtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9TdHlsZXMvcmVzb3VyY2VzL2Vycm9yLnBuZ1wiKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message\" (click)=\"Close()\">\n  <div id=\"image\"></div>\n  <p>{{fileService.error}}</p>\n</div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file.service */ "./src/app/file.service.ts");



var MessageComponent = /** @class */ (function () {
    function MessageComponent(fileService) {
        this.fileService = fileService;
    }
    MessageComponent.prototype.Close = function () {
        this.fileService.isError = false;
    };
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Uladzislau_Ramanousk\source\repos\filemanager\FileManager\filemanager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map