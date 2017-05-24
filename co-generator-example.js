const co = require('co');

function* aysnc1() {
    return yield Promise.resolve('aysnc-1');
}
function* aysnc2() {
    return yield Promise.resolve(2);
}
function* aysnc3() {
    return yield Promise.resolve(3);
}
function* aysnc4() {
    throw new Error("error nhe'");
}


co(function*() {
    return yield aysnc1();
}).then(function (value) {
    console.log(value);
}, function (err) {
    console.error(err.stack);
});


let promise = co.wrap(function*() {
    let values2 = yield aysnc2();
    let values3 = yield aysnc3();
    return values2 + values3;
});

promise()
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    });

co(function*() {
    let res = yield [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3),
    ];
    console.log(res); // => [1, 2, 3]
}).catch(error => {
    console.log(error);
});

co(function*() {
    let res = yield {
        1: Promise.resolve(1),
        2: Promise.resolve(2),
    };
    console.log(res); // => { 1: 1, 2: 2 }
}).catch(error => {
    console.log(error);
});


