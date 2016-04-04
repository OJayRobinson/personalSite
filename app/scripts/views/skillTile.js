/*global PersonalSite, Backbone, JST*/

PersonalSite.Views = PersonalSite.Views || {};

(function () {
    'use strict';

    PersonalSite.Views.Skill = Backbone.View.extend({

        template: JST['app/scripts/templates/skill.ejs'],

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.setElement(this.template(this.model.toJSON()));
        }

    });

})();
