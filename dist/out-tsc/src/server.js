"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var express = require("express");
var fs_1 = require("fs");
var path_1 = require("path");
var PORT = 4000;
core_1.enableProdMode();
var app = express();
var template = fs_1.readFileSync(path_1.join(__dirname, '..', 'dist', 'client', 'index.html')).toString();
var AppServerModuleNgFactory = require('../dist/server/main.bundle');
app.engine('html', function (_, options, callback) {
    var opts = { document: template, url: options.req.url };
    platform_server_1.renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(function (html) { return callback(null, html); });
});
app.set('view engine', 'html');
app.set('views', path_1.join(__dirname, '..', 'dist', 'client'));
app.get('*.*', express.static(path_1.join(__dirname, '..', 'dist', 'client')));
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
app.listen(PORT, function () {
    console.log("listening on http://localhost:" + PORT + "!");
});
//# sourceMappingURL=server.js.map