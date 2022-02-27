sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "T180/fiorichallenge/model/models",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, models, MessageToast) {
        "use strict";

        return Controller.extend("T180.fiorichallenge.controller.Main", {
            onInit: function () {

                // Create Review Object to be pushed to the Asset Review Model
                this.Review = {
                        AssetName: "",
                        Suitability: 0,
                        SuitabilityComment: "",
                        Value: 0,
                        ValueComment: "",
                        Durability: 0,
                        DurabilityComment: "",
                        Longevity: 0,
                        LongevityComment: "",
                        SummaryComments: "",
                        SubmissionDate: "",
                        SubmittedBy: ""
                };

                // Instantiate the Asset Review Model from the models.js template
                this.AssetReview = new JSONModel(models.createAssetReviewModelTemplate());
                this.getView().setModel(this.AssetReview, "AssetReviewModel");
                
            },

            onAfterRendering: function () {

                // Example; setting the 'CurrentDate' property in the Asset Review model
                this.getView().getModel("AssetReviewModel").setProperty("/CurrentDate", new Date());
            },

            // Instantiate the Fragment instance, set data and open
            openDialogReview: function (oEvent) {
                if (!this.newReviewDialog) {
                    this.newReviewDialog = sap.ui.xmlfragment("T180.fiorichallenge.view.addReview", this);
                    var oModel = new sap.ui.model.json.JSONModel();
                    this.newReviewDialog.setModel(oModel);
                    this.newReviewDialog.open();
                }
                this.newReviewDialog.getModel().setData(this.Review);
                this.newReviewDialog.open();
            },

            cancelBtn: function () {
                MessageToast.show("Review Cancelled");
                this.newReviewDialog.close();
            },

            // Save Dialog Data, push/set to the AssetReview Model
            saveBtn: function (oEvent) {
                var oModel = oEvent.getSource().getModel();
                var DialogData = oModel.getData();
                
                var test = this.getView().getModel("AssetReviewModel").setProperty("/Reviews/AssetName", "test");

                MessageToast.show("Review Saved " + test);
                this.newReviewDialog.close();
            }

        });
    });