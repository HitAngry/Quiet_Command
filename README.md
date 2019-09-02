# Quiet Command
*Say QUIET ! in slack channel*

## Install
Cloning repositorie and copy config-default
- ``` git clone https://github.com/HitAngry/QuietCommand && cd QuietCommand ```
- ``` cp config-default.js config.js```

Edit **config.js** 
  - ```js
      token : 'legacy_token_given_by_slack',
      whitelist : ['exemple1@email.com', 'exemple2@email.com'],
      port : 8000,
      hostname : 'localhost',
    ```
## Launching
``` pm2 start index.js --name quietCommand ```

if you don't have install pm2 follow the link
[pm2 quick start](http://pm2.keymetrics.io/docs/usage/quick-start/)
