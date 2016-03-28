/*global PersonalSite, Backbone*/

PersonalSite.Collections = PersonalSite.Collections || {};

(function () {
    'use strict';

    PersonalSite.Collections.Skills = Backbone.Collection.extend({

        model: PersonalSite.Models.Skill

    });

})();
