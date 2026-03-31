sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("project2.controller.Firstpage", {
        onInit() {
        },

        Second: function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Second", {
            ProductID: 1
            });

            // this.getView().getModel().refresh();
            MessageToast.show("Diplayed");

        },
        
        onTilePress: function () {

            var that = this;
            var oLoader = this.byId("loader");
            var oTable = this.byId("tableArea");
            
            
            // Show custom CSS loader
            oLoader.removeStyleClass("hidden");

            // Show loading GIF
            
            // oLoader.setVisible(true);

            // Hide table initially (optional)
            oTable.setVisible(false);


            // Show global loading spinner
            // sap.ui.core.BusyIndicator.show(0);

            setTimeout(function () {

            // Hide loading spinner
            // sap.ui.core.BusyIndicator.hide();
            oLoader.addStyleClass("hidden");

            // Show table area when tile is clicked
            that.byId("tableArea").setVisible(true);

            // Set title dynamically
            that.byId("tblTitle").setText("Product List from OData");

            // Optional: Refresh the table data
            that.byId("Tbl").getBinding("items").refresh();

            MessageToast.show("Pressed");

            }, 1000);

        //    var oRouter = this.getOwnerComponent().getRouter();
        //     oRouter.navTo("Second", {
        //     ProductID: 1
        //     });
        //     MessageToast.show("Diplayed");

            },
            close: function() {
                // Show table area when tile is clicked
                 this.byId("tableArea").setVisible(false);

                 MessageToast.show("Closed");

            },

            onRowPress: function(oEvent) {
                var oContext = oEvent.getSource().getBindingContext();  
                // var oData = oContext.getObject(); 
                var oData = oEvent.getParameter("listItem").getBindingContext().getObject();

                this.byId("ProductID").setText("ProductID : " + oData.ProductID);
                this.byId("ProductName").setText("ProductName :" + oData.ProductName);
                this.byId("Quantity").setText("Quantity :" + oData.QuantityPerUnit);
                this.byId("UnitPrice").setText("UnitPrice :" +oData.UnitPrice);

                // this.byId("detailPanel").setVisible("true");

            }
    });
});
