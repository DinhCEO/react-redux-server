module.exports.getAll = function (req, res) {
    const knex         = req.app.get('knex');
    let userRepository = req.app.userRepository;

    userRepository.getAll()
        .then(data => {
            return res.status(200).json({
                code: "USER_SUCCESS",
                data: data
            });
        })
        .catch(err => {
            return res.status(404).json({
                code: "USER_ERROR",
                data: err.message
            });
        });

};

module.exports.getUserById = function (req, res) {
    const knex         = req.app.get('knex');
    let userRepository = req.app.userRepository;
    let id             = req.params.id;
    userRepository.getById(id)
        .then(data => {
            return res.status(200).json({
                code: "USER_SUCCESS",
                data: data
            });
        })
        .catch(err => {
            return res.status(404).json({
                code: "USER_ERROR",
                data: err.message
            });
        });
};