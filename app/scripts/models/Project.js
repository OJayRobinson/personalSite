/*global PersonalSite, Backbone*/

PersonalSite.Models = PersonalSite.Models || {};

(function () {
    'use strict';

    PersonalSite.Models.Project = Backbone.Model.extend({

        defaults: {
            id:             "",     // id and name used on image
            previewImage:   null,   // image used to show featured project
            title:          "",     // title of project
            desc:           "",     // description of project
        },
    });

})();
