import *as faker from 'faker';

class Randomemail {

    mail() {
        var email = faker.internet.email();
        return email;
    }
}
export default new Randomemail();