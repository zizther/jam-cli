require.config({
    /**
     * Traditional / legacy "browser globals" scripts that do not express their dependencies via define().
     */
    shim: {
        jquery: {
            exports: ['jQuery', '$']
        },
        'jquery.easing': {
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },

    /**
     * Assuming /assets is under the root directory
     */
    baseUrl: 'assets/js/src',

    /**
     * Auto-populated with bower-requirejs
     */
    paths: {},

    /**
     * Wait time before giving up
     */
    waitSeconds: 30,
});
    
if (window && window.requireJsConfig) {
    /**
     * @see example config in index.html
     */
    require.config(window.requireJsConfig);
}

define([<% if (useMaidoJs) { %>'lib/backbone/plugin/load', 'lib/backbone/plugin/tree-view', <% } %>'app/app'], function () {
});
