const distanceCalculate = require('../controller/distance'); 

describe('Calculate Distance Function', () => {
  it('Distance Beetween Two Coordinates', () => {
  expect(
    distanceCalculate([51.515419, -0.141099]))
    .toEqual([{"address": ["St Saviours Wharf, London SE1 2BE"], "company": "Blue Square 360", "id": 4}, {"address": ["Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG", "No1 Royal Exchange, London, EC3V 3DG"], "company": "Gallus Consulting", "id": 13}]);
  });
});
