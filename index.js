const arg = require('arg');
const args = arg({'--script': String});

const outputFn = require(`./src/controller/${args['--script']}`);

if (args['--script'] === 'clone') {
    console.log(outputFn({name: "Paddy", address: {town: "Lerum", country: "Sweden"}}))
} else {
    console.log(outputFn([51.515419, -0.141099]));
}