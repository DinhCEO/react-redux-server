class Credential {
    constructor(props, login_at) {
        this.props          = props;
        this.props.login_at = login_at;
    }

    serialize() {
        return this.props;
    }

    getRole() {
        return this.props.role;
    }


    static deserialize(payload) {
        return new Credential(payload, payload['login_at']);
    }
}

module.exports = Credential;