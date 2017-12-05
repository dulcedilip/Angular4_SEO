"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AppComponent = (function () {
    function AppComponent(meta, title) {
        title.setTitle('ang4 seo');
        meta.addTags([
            {
                name: 'author', content: 'Tirumala Dilip'
            },
            {
                name: 'keywords', content: 'ang4-universal-seo'
            },
            {
                name: 'description', content: 'Describes sample angular universal SEO'
            }
        ]);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = function () { return [
    { type: platform_browser_1.Meta, },
    { type: platform_browser_1.Title, },
]; };
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map