const deepClone = require('../controller/clone'); 

describe('Clone Function', () => {
  it('Deep Clone of Object', () => {
  expect(
    deepClone({name: "Paddy", address: {town: "Lerum", country: "Sweden"}}))
    .toEqual({name: "Paddy", address: {town: "Lerum", country: "Sweden"}});
  });
});
