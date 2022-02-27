sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },

            // Asset review criteria;
            // Suitability (how well does the asset meet the business requirements)
            // Value (how much value does the asset provide in relation to its cost)
            // Durability (how reliable is the asset, how long does it last before becoming defective)
            // Availability (is the asset under heavy use, do we need more?)
            // Longevity (will the asset be useful in the future)
            createAssetReviewModelTemplate: function () {
                return {
                    TotalNumberOfReviews: 0,
                    CurrentDate: new Date(),
                    Reviews: [{
                        AssetName: "X Series Forklift",
                        Suitability: 5,
                        SuitabilityComment: "suitable comment",
                        Value: 5,
                        ValueComment: "comment here",
                        Durability: 5,
                        DurabilityComment: "comment here",
                        Longevity: 5,
                        LongevityComment: "comment here",
                        SummaryComments: "Smart machinery that helps us get the job done.",
                        SubmissionDate: "2022-02-06T14:00:00.007Z",
                        SubmittedBy: "Robert Jones",
                    }, {
                        AssetName: "Drone Quadcopter",
                        Suitability: 2,
                        SuitabilityComment: "We haven't found much use for this yet.",
                        Value: 2,
                        ValueComment: "This asset was pretty expensive.",
                        Durability: 3.5,
                        DurabilityComment: "comment here",
                        Longevity: 3.5,
                        LongevityComment: "comment here",
                        SummaryComments: "Really bad",
                        SubmissionDate: "2022-02-01T13:00:00.007Z",
                        SubmittedBy: "Layla Parker",
                    }, {
                        AssetName: "X Series Forklift",
                        Suitability: 5,
                        SuitabilityComment: "Very helpful around the warehouse.",
                        Value: 5,
                        ValueComment: "Reasonably priced.",
                        Durability: 5,
                        DurabilityComment: "comment here",
                        Longevity: 5,
                        LongevityComment: "comment here",
                        SummaryComments: "good product for jobs",
                        SubmissionDate: "2022-01-08T02:00:00.007Z",
                        SubmittedBy: "Layla Parker",
                    }, {
                        AssetName: "X Series Forklift",
                        Suitability: 2,
                        SuitabilityComment: "suitable comment",
                        Value: 2,
                        ValueComment: "comment here",
                        Durability: 5,
                        DurabilityComment: "comment here",
                        Longevity: 2,
                        LongevityComment: "comment here",
                        SummaryComments: "It's too hard to drive.",
                        SubmissionDate: "2022-01-02T08:00:00.007Z",
                        SubmittedBy: "Ronald McDoogle",
                    }, {
                        AssetName: "4G63 Engine",
                        Suitability: 5,
                        SuitabilityComment: "suitable comment",
                        Value: 5,
                        ValueComment: "comment here",
                        Durability: 5,
                        DurabilityComment: "comment here",
                        Longevity: 5,
                        LongevityComment: "comment here",
                        SummaryComments: "excllent choice",
                        SubmissionDate: "2022-02-06T14:00:00.007Z",
                        SubmittedBy: "Robert Jones",
                    }, {
                        AssetName: "4G63 Engine",
                        Suitability: 4,
                        SuitabilityComment: "suitable comment",
                        Value: 4,
                        ValueComment: "comment here",
                        Durability: 5,
                        DurabilityComment: "comment here",
                        Longevity: 5,
                        LongevityComment: "comment here",
                        SummaryComments: "Really liked this",
                        SubmissionDate: "2022-02-07T14:00:00.007Z",
                        SubmittedBy: "James Smith",
                    }, {
                        AssetName: "Ferrari F90",
                        Suitability: 5,
                        SuitabilityComment: "This asset is suitable for the job.",
                        Value: 4,
                        ValueComment: "Expensive but high quality parts.",
                        Durability: 4,
                        DurabilityComment: "Requires significant maintenance but fairly reliable.",
                        Longevity: 4,
                        LongevityComment: "comment here",
                        SummaryComments: "Now we can get to work faster.",
                        SubmissionDate: "2021-11-24T01:00:00.007Z",
                        SubmittedBy: "James Smith",
                    }, {
                        AssetName: "X Series Forklift",
                        Suitability: 5,
                        SuitabilityComment: "suitable comment",
                        Value: 5,
                        ValueComment: "This was well worth the investment.",
                        Durability: 4,
                        DurabilityComment: "comment here",
                        Longevity: 4,
                        LongevityComment: "Even if a new model comes out, this will still be useful.",
                        SummaryComments: "cost a lot but worth it",
                        SubmissionDate: "2021-11-18T05:00:00.007Z",
                        SubmittedBy: "Sarah Rose",
                    }, {
                        AssetName: "Ferrari F90",
                        Suitability: 3,
                        SuitabilityComment: "Why do we need a Ferrari for the warehouse?",
                        Value: 2,
                        ValueComment: "comment here",
                        Durability: 4,
                        DurabilityComment: "comment here",
                        Longevity: 4,
                        LongevityComment: "comment here",
                        SummaryComments: "over-rated",
                        SubmissionDate: "2021-11-18T05:00:00.007Z",
                        SubmittedBy: "Sarah Rose",
                    }],
                    Assets: [{
                        AssetName: "Drone Quadcopter"
                    }, {
                        AssetName: "X Series Forklift"
                    }, {
                        AssetName: "Ferrari F90"
                    }, {
                        AssetName: "4G63 Engine"
                    }],
                    Reviewers: [{
                        AssetName: "Robert Jones"
                    }, {
                        AssetName: "Layla Parker"
                    }, {
                        AssetName: "Ronald McDoogle"
                    }, {
                        AssetName: "James Smith"
                    }, {
                        AssetName: "Sarah Rose"
                    }]
                };
            }
        };
    });