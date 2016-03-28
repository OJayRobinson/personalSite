/*global PersonalSite, Backbone*/

PersonalSite.Collections = PersonalSite.Collections || {};

(function () {
    'use strict';

    PersonalSite.Collections.Projects = Backbone.Collection.extend({

        model: PersonalSite.Models.Project

    });

})();
