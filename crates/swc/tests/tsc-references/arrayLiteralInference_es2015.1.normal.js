export var AppType;
(function(AppType) {
    AppType["HeaderDetail"] = "HeaderDetail";
    AppType["HeaderMultiDetail"] = "HeaderMultiDetail";
    AppType["AdvancedList"] = "AdvancedList";
    AppType["Standard"] = "Standard";
    AppType["Relationship"] = "Relationship";
    AppType["Report"] = "Report";
    AppType["Composite"] = "Composite";
    AppType["ListOnly"] = "ListOnly";
    AppType["ModuleSettings"] = "ModuleSettings";
})(AppType || (AppType = {}));
export var AppStyle;
(function(AppStyle) {
    AppStyle[AppStyle["Tree"] = 0] = "Tree";
    AppStyle[AppStyle["TreeEntity"] = 1] = "TreeEntity";
    AppStyle[AppStyle["Standard"] = 2] = "Standard";
    AppStyle[AppStyle["MiniApp"] = 3] = "MiniApp";
    AppStyle[AppStyle["PivotTable"] = 4] = "PivotTable";
})(AppStyle || (AppStyle = {}));
const appTypeStylesWithError = new Map([
    [
        AppType.Standard,
        [
            AppStyle.Standard,
            AppStyle.MiniApp
        ]
    ],
    [
        AppType.Relationship,
        [
            AppStyle.Standard,
            AppStyle.Tree,
            AppStyle.TreeEntity
        ]
    ],
    [
        AppType.AdvancedList,
        [
            AppStyle.Standard,
            AppStyle.MiniApp
        ]
    ]
]);
let b1 = foo({
    x: true
}, {
    x: false
});
let b2 = foo([
    true
], [
    false
]);
