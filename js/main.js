require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'lib/jquery-1.12.1.min',
        'leaflet': 'lib/leaflet',
        'underscore': 'lib/underscore-min'
    }
});

require(['modules/map'], function(map) {
    console.log(map);
});
