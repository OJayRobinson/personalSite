/*global PersonalSite, Backbone*/

PersonalSite.Models = PersonalSite.Models || {};

(function () {
    'use strict';

    PersonalSite.Models.Project = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
