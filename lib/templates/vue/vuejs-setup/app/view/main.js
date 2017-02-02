<% if (useMaidoJs)  { %>
define([
    'module',
    'backbone',
    'app/router/router',
    'lib/backbone/view/component/app-loader'<% for (var i in scaffoldRoutes) { %>,
    './page/<%= scaffoldRoutes[i]%>'<% }%>
], function (module, Backbone, Router, loading<% for (var i in scaffoldRoutes) { %>, <%= scaffoldRoutes[i]%>View<% }%>) {

    var view;
    
    var show = function (child) {
        return function () {
            view.showChild(child); // Show this child (and hide the others)
        };
    };

    var MainView = Backbone.TreeView.extend({
        events: {
            // Links with a data-internal attribute set will be treated as Backbone routes
            'click *[data-internal]': function (e) {
                Backbone.history.navigate(e.currentTarget.pathname, true);
                e.preventDefault();
            }
        },
        initialize: function () {
            
            
            <% if (scaffoldRoutes.length) { %>
            // Children views are added by reference
            this.addChild(<%= _.map(scaffoldRoutes, function (page) { return page + 'View'; }).join(', ') %>);

            // Routes and callbacks
            Router.on({
                <% for (var i in scaffoldRoutes) { %>'route:<%= scaffoldRoutes[i]%>': show(<%= scaffoldRoutes[i]%>View),
                <% }%>
            });

            <% } %>
            
            // Loading by default is visible
            loading.hide();
        }
    });

<% } else { %>
define([
    'module', 
    'backbone',
    './../router/router'], function (module, Backbone, Router) {
    var view;

    var MainView = Backbone.View.extend({
        events: {},
        initialize: function () {
            // Actions after instantiaton
        }
    });

<% } %>

    view = new MainView({
        el: 'body'
    });

    return view;
});