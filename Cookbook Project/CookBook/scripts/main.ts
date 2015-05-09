/// <reference path="typings/requirejs/require.d.ts" />

import Initializer = require('initializer');

requirejs.config({
    baseUrl: 'scripts',
    paths: { 'jquery': 'libs/jquery-1.11.2' }
});

requirejs(['jquery', 'recipeLoader'],($) => { Initializer.windowOnLoad(); });

requirejs(['initializer']);