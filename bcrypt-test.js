const bcrypt                     = require('bcrypt');
const saltRounds                 = 10;
const myPlaintextPassword        = 'DinhCeo';
const someOtherPlaintextPassword = 'DinhCeo';


bcrypt.hash(myPlaintextPassword, saltRounds)
    .then((hash) => {
        //todo save hash to db
        console.log(hash);
        return bcrypt.compare(someOtherPlaintextPassword, hash);
    })
    .then((res) => {
        console.log(res);
        return res;
    })
    .catch(error => {
        console.error(error);
    });