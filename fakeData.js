const faker = require('faker');

module.exports = {
    comments : function(numberOfComments){
        const array = [];
        for (let i = 0; i < numberOfComments; i++) {
            array.push({
                id : i,
                username: faker.internet.userName(),
                email: faker.internet.email(),
                comment: faker.lorem.text()
            })
        }
        return array;
    }
}