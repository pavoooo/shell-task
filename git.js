var Task = require('shell-task');

new Task('git status')
    .then('sleep 100')
    .then('git add .')
    .then(function(next) {
        console.log('doing something');
        setTimeout(next, 100);
    })
    .then('git commit -m "testing git"')
    .then('git push -u origin master')
    .run(function(err, next) {
        if(err) {
            console.error(err);
        } else {
            console.log('done');
        }
    })