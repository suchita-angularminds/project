var config = {

    port: 3000,
    site: 'http://localhost/_#/ ',


    //database credentials

    mongo:{

        hostname:'localhost',
        port:'27017',
        /* username:'uat',
        password: 'QB57YLW9tqWqnGs'*/
        db: 'nodeapi2'
    },

    secretkey:'@rty^usersecret*'

};

    config.mongo.url='mongodb://'+ config.mongo.hostname + ':' + config.mongo.port + '/' + config.mongo.db;


    module.exports = config;