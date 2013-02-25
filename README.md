Factory
=======

Demo a full server/client app with:
- NodejJS
  - Express 3.x
  - Socket.io
  - Redis
- Node Jitsu
- gh-pages
- Boilerplate HTML5, Bootstrap, Awesomefont

## 1) Installing Github Repository and gh-pages post-commit
``` shell
git clone https://github.com/takanotsume/factory.git
cd factory
npm install
cd factory/tools
./add-post-commit.sh
cd ..
```

### 2) Install/Deploy Node Jitsu
``` shell
[sudo] npm install jitsu -g
jitsu deploy
```

## Run Server
``` shell
node server/server.js
```

## Run local http server
``` shell
node server.www.js
```

Local Dev
---
  - Server: http://localhost:3001/
  - Client: http://localhost:3000/socket.io.html
  
PRD
---
  - Server: http://hayabusa.factory.jit.su/
  - Client: http://takanotsume.github.com/factory/www/socket.io.html

Documentation
---
  - NodeJS http://nodejs.org/
  - NodeJitsu deploy your nodejs app on prd https://www.nodejitsu.com/
  - [Tutorial](http://www.siteduzero.com/informatique/tutoriels/bootstrap-de-twitter-un-kit-css-et-plus) Bootstrap => http://twitter.github.com/bootstrap/
  - Create your HTML5 projects in 15 sec. http://www.initializr.com/ => http://html5boilerplate.com/
  - Fontawesome for twitter bootstrap http://fortawesome.github.com/Font-Awesome/
