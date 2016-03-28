/*global PersonalSite, Backbone*/

PersonalSite.Models = PersonalSite.Models || {};

(function () {
    'use strict';

    PersonalSite.Models.Skill = Backbone.Model.extend({

        defaults: {
            icon:       null, // image used in menu and heading
            name:       "",   // label used in menu and heading
            projects:   [],   // id's of project in Projects collection, example of skill being applied
            
            // OJR may or may not use
            desc: "",   // text describing skills (with links?)
            bullets: [],    // array of bullet points 
        },

        /*
        initialize: function() {
        },
        */

    });

})();
