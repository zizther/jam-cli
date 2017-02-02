define(['backbone'], function (Backbone) {

        var <%= _.classify(page) %>View = Backbone.View.extend({
            events: {},
            initialize: function () {}
        });

        // Return an instance of the view
        return new <%= _.classify(page) %>View({
            el: '#<%= page %>'
        });
    }
);
