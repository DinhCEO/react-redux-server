module.exports = {
    client    : 'mysql',
    connection: {
        host    : process.env['DB_HOST'] || '127.0.0.1',
        user    : process.env['DB_USERNAME'] || 'root',
        password: process.env['DB_PASSWORD'] || '11026789',
        database: process.env['DB_DATABASE_NAME'] || 'project_react'
    },
    pool      : {min: 0, max: 7}
};
