
const deepClone = (baseObj) => {
    // Using Json
    const jsonCloneObj = JSON.parse(JSON.stringify(baseObj));

    // Using ES6
    const ES6CloneObj = Object.assign({}, baseObj);

    // we can also use lodash or underscore lib.
    
    return ES6CloneObj;

}

module.exports = deepClone;
