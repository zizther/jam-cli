<% if (useMaidoJs)  { %>
define([
    'module',
    'backbone',
    'app/view/main',
    'lib/tracking/analytics',
    'lib/browser/hide-addressbar'
], function (module, Backbone, mainView, Analytics, hideAddressBar) {
    

    Analytics.setup(module.config().analyticsAccountId);

    /**
     * Global App Events 
     * ---
     * app:load:start [key]
     * app:load:complete [key]
     * app:load:error [key]
     * 
     * app:pageview [page]
     * app:log [message]
     * app:error [message]
     * 
     */
    Backbone.on({
        'app:pageview': function (page) {
            Analytics.pageview(page);
        },
        'app:error': function (message) {
            Analytics.log(message, 'Error');
        },
        'app:log': function (message, type) {
            Analytics.log(message, type);
        }
    });
    

    Backbone.history.start({pushState: true, root: '/'});
});
<% } else { %>
define(['module', 'backbone', 'app/view/main'],
    function (module, Backbone, mainView) {
        Backbone.history.start({pushState: true, root: '/'});
    }
);
<% } %>
