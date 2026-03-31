
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
        "use strict";

        return Controller.extend("project2.controller.View1", {
            onInit() {
            },
            onLogin: function() {
                var uname = this.byId("userid").getValue();
                var pass  = this.byId("password").getValue();
                
                if (uname === "admin" || pass === "welcome"){
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("Firstpage");
                    MessageToast.show("Login Sucessful");
                }
                else {
                    MessageToast.show("Invalid Credentials");
                }
            },
        });
    });
