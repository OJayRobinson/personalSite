/*global PersonalSite, Backbone, JST*/

PersonalSite.Views = PersonalSite.Views || {};

(function () {
    'use strict';

    PersonalSite.Views.ProjectTile = Backbone.View.extend({

        template: JST['app/scripts/templates/projectTile.ejs'],

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.setElement(this.template(this.model.toJSON()));
        }

    });

})();
