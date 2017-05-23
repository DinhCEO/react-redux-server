const GUEST = 'GUEST';
const ADMIN = 'ADMIN';

class Role {
    constructor() {
    }

   static getRole() {
        return {
            guest: GUEST,
            admin: ADMIN
        }
    }
}

module.exports = Role;
