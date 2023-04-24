"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var App_1 = __importDefault(require("./App"));
var core_1 = require("@mantine/core");
var notifications_1 = require("@mantine/notifications");
var theme = {
    colorScheme: 'dark',
    components: {
        Button: {
            styles: {
                root: {
                    backgroundColor: '#144272',
                    ':hover': {
                        backgroundColor: '#0A2647',
                    },
                },
            },
        },
    },
};
var Index = function () {
    return (react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(core_1.MantineProvider, { withGlobalStyles: true, withNormalizeCSS: true, theme: theme },
            react_1.default.createElement(notifications_1.Notifications, null),
            react_1.default.createElement(App_1.default, null))));
};
exports.default = Index;
