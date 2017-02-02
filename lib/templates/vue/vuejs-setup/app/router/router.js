<% if (useMaidoJs)  { %>define(['lib/backbone/router/router'], function (Router) {
<% } else { %>define(['backbone'], function (Backbone) {<% } %>

        <% if (!useMaidoJs)  { %>
        
        var Router = Backbone.Router.extend({
            initialize: function (options) {
                if (options.routes) {
                    this.routes = options.routes;
                }
            }
        });

        <% } %>
        return new Router({
            // Routes are defined as (url match):(route name)
            routes: {
                '/': '<%= scaffoldRoutes[0] %>',<% for (var i in scaffoldRoutes) { %>
                '<%= scaffoldRoutes[i]%>': '<%= scaffoldRoutes[i]%>',<% }%>
                '*path': '<%= scaffoldRoutes[0] %>'
            }
        });
    }
);