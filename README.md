Hirameki [![solarized dualmode](https://raw.github.com/takanotsume/hirameki/master/www/img/lamp/lamp_32x32.png)](#features)
=======

Hirameki (閃き) means a flash of an idea ...

Demo a full server/client app with:
- NodejJS
  - Express 3.x
  - Socket.io
  - MongoDB, Redis
- Node Jitsu
- gh-pages
- Boilerplate HTML5, Bootstrap, Font Awesome
- Zombie.js, Assert.js, Handlebar/EJS, moment.js
- hammer.js, Sidetap, slide-out menu ...

## 1) Installing Github Repository and gh-pages post-commit
``` shell
git clone https://github.com/takanotsume/factory.git
cd factory
npm install
cd factory/tools
./add-post-commit.sh
cd ..
```

## 2) Install/Deploy Node Jitsu
``` shell
[sudo] npm install jitsu -g
jitsu deploy
```

## 3) Run Server
``` shell
node server/server.js
```

## 4) Run local http server
``` shell
node server-www.js
```

## 5) Testing Local/Production
Local
---
  - Server: http://localhost:3001/
  - Client: http://localhost:3000/
  
Production
---
  - Server: http://hayabusa.factory.jit.su/
  - Client: http://takanotsume.github.com/factory/www/

Documentation
---
  - NodeJS http://nodejs.org/
  - NodeJitsu deploy your nodejs app on prd https://www.nodejitsu.com/
  - Redis http://redis.io/download/
  - Mongo DB http://www.mongodb.org/
  - [Tutorial](http://www.siteduzero.com/informatique/tutoriels/bootstrap-de-twitter-un-kit-css-et-plus) Bootstrap => http://twitter.github.com/bootstrap/
  - Create your HTML5 projects in 15 sec. http://www.initializr.com/ => http://html5boilerplate.com/
  - Font Awesome for twitter bootstrap http://fortawesome.github.com/Font-Awesome/
  - Self Signed SSL http://www.akadia.com/services/ssh_test_certificate.html
  - Integration test with Zombie JS http://zombie.labnotes.org/
  - http://embeddedjs.com/, http://momentjs.com/, http://nodejs.org/docs/v0.3.1/api/assert.html, Jquery timeago
  - Have a look to https://github.com/iloire/WatchMen
  - http://bartaz.github.com/impress.js/#/overview
  - X-Tag https://github.com/mozilla/x-tag as in https://github.com/mozilla/mortar-tab-view/tree/master/www/js/lib
  - http://danielfiller.com/demo/pure-css-slideout-menu/
  
HTML 5
---
  - http://www.html5rocks.com/en/tutorials/appcache/beginner/
  
Mozilla
---
  - https://marketplace.firefox.com/developers/
  - Mozilla web app https://developer.mozilla.org/en-US/docs/Apps/Getting_Started
  - https://developer.mozilla.org/en-US/docs/HTML/HTML5
  - https://developer.mozilla.org/en/docs/DOM/window.navigator
  - https://hacks.mozilla.org/2013/02/getting-started-with-open-web-apps-why-and-how/
    https://github.com/robnyman/Firefox-OS-Boilerplate-App
  - https://developer.mozilla.org/en-US/docs/Apps

Configure
---
  - Socket IO https://github.com/LearnBoost/Socket.IO/wiki/Configuring-Socket.IO

Contributors
------------

Michael Simonini ([takanotsume](https://github.com/takanotsume/))

Todo
-----

  * ...
