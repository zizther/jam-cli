define(['backbone'], function (Backbone) {

    var <%= pageClassify %>View = Backbone.View.extend({
        events: {},
        initialize: function () {}
    });

    // Return an instance of the view
    return new <%= pageClassify %>View({
        el: '#<%= page %>'
    });

});
