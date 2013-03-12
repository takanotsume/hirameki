// Install: apt-get install phantomjs
// Usage: phantomjs loadspeed.js http://www.google.com

var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function (status) {
    if (status !== 'success') {
        console.log('FAIL to load the address');
    } else {
        t = Date.now() - t;
        console.log('Loading time ' + t + ' msec');
    }
    phantom.exit();
});

page.onResourceReceived = function(resource) {
    if (address==resource.url) {
        console.log('Status '+resource.status+': '+resource.url);
        resource.headers.forEach(
            function(value) {
                if (value.name in {'X-Backend':'', 'X-Cache':'', 'X-Cache-Hits':'', 'Age':''}) {
                     console.log(JSON.stringify(value.name+': '+value.value));
                }
            }
        );
        console.log("");
    }
};