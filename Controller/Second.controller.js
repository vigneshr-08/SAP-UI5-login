sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2.controller.Second", {
        onInit() { 
        // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        // oRouter.getRoute("Second").attachPatternMatched(this._onRouteMatched, this);
        // },
        // _onRouteMatched: function (oEvent) {
        // var id = oEvent.getParameter("arguments").ProductID;

        // var sPath = "/Products(" + id + ")";
        // this.getView().bindElement(sPath);
        }
    });
});
