const data = require('../../data/distance');

/**
 * 
 * @param {*} lat1 Base lat
 * @param {*} lon1 Base long
 * @param {*} lat2 Target lat
 * @param {*} lon2 target long
 * @returns Disatnce in KM
 */
const calculate = (lat1, lon1, lat2, lon2) => {
    const earthRedius = 6371;
    const redDisLat = convertRedius(lat2-lat1);
    const redDisLon = convertRedius(lon2-lon1);
    lat1 = convertRedius(lat1);
    lat2 = convertRedius(lat2);

    const firstIte = Math.sin(redDisLat/2) * Math.sin(redDisLat/2) + Math.sin(redDisLon/2) * Math.sin(redDisLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    const secondIte = 2 * Math.atan2(Math.sqrt(firstIte), Math.sqrt(1-firstIte)); 
    const distance = earthRedius * secondIte;
    return distance;
}

const convertRedius = (value) => {
    return value * Math.PI / 180;
}

const distanceCalculate = (baseCordinate) => {
    const outPutData = {};

    for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data[i].offices.length; j += 1) {
            // check distance beetween base office and partners offices
            const coordinates = data[i].offices[j].coordinates.split(',');
            const distance = calculate(baseCordinate[0],baseCordinate[1], coordinates[0], coordinates[1]);

            if (distance < 100) {
                if (outPutData[data[i].id]) {
                    outPutData[data[i].id].address.push(data[i].offices[j].address);
                } else {
                    outPutData[data[i].id] = {
                        id: data[i].id,
                        address: [ data[i].offices[j].address ],
                        company: data[i].organization,
                    }
                }
            }
            
        }
    }
    let invitationData = Object.values(outPutData);
    invitationData = invitationData.sort((first,second)=> (first.company > second.company ? 1 : -1));
    return invitationData;
}

module.exports = distanceCalculate;

