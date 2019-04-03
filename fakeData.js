const faker = require('faker');

module.exports = {
    comments : function(numberOfComments){
        if(!numberOfComments){
            numberOfComments = 10;
        }
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
    },
    number : function(numberOfRandomNumbers){
        if(!numberOfRandomNumbers){
            numberOfRandomNumbers = 1;
        }
        const array = [];
        function populateArray(){
            if(array.length>=numberOfRandomNumbers){return 1}
            let ranNumber = Math.floor(Math.random() * 100);
            array.push(ranNumber);
            populateArray();
        }
        populateArray();
        return array; 
    }
}