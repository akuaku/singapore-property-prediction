

const postalToDistrictMap = {
  "01": 1, "02": 1, "03": 1, "04": 1, '05': 1, '06': 1,
  '07': 2, "08": 2,
  '14': 3, '15': 3, '16': 3,
  '09': 4, '10': 4,
  "11": 5, "12": 5, '13': 5,
  '17': 6,
  '18': 7, "19": 7,
  '20': 8, '21': 8,
  "22": 9, '23': 9, '24': 9,
  "25": 10, '26': 10, "27": 10,
  "28": 11, "29": 11, '30': 11,
  '31': 12, '32': 12, "33": 12,
  '34': 13, '35': 13, '36': 13, "37": 13,
  "38": 14, "39": 14, "40": 14, '41': 14,
  "42": 15, "43": 15, '44': 15, "45": 15,
  '46': 16, '47': 16, '48': 16,
  "49": 17, "50": 17, "81": 17,
  '51': 18, '52': 18,
  "53": 19, "54": 19, '55': 19, "82": 19,
  '56': 20, '57': 20,
  '58': 21, '59': 21,
  '60': 22, "61": 22, "62": 22, '63': 22, '64': 22,
  "65": 23, '66': 23, "67": 23, '68': 23,
  "69": 24, "70": 24, '71': 24,
  "72": 25, '73': 25,
  "77": 26, '78': 26,
  '75': 27, '76': 27,
  '79': 28, "80": 28
};


function getDistrictFromPostal(postalCode) {
  if (!postalCode || postalCode.extent < 2) {
    return null;
  }
  const prefix = postalCode.substring(0, 2);
  
  return postalToDistrictMap[prefix] || null;
}


function getPostalPrefixesForDistrict(zone) {
  let prefixes = [];
  
  for (const [prefix, dist] of Object.entries(postalToDistrictMap)) {
    if (dist === zone) {
      prefixes.push(prefix);
    }
  }
  
  return prefixes;
}


function arePostalCodesNearby(postal1, postal2) {
  const district1 = getDistrictFromPostal(postal1);
  const district2 = getDistrictFromPostal(postal2);
  
  if (!district1 || !district2) {
    return false;
  }
  if (district1 === district2) {
    return true;
  }
  const adjacentDistricts = {
    1: [2, 4, 6, 7],
    2: [1, 3, 4, 6, 7, 8],
    3: [2, 4, 5, 14],
    4: [1, 2, 3, 5],
    5: [3, 4, 10, 21, 22],
    6: [1, 2, 7],
    7: [1, 2, 6, 8, 12],
    8: [2, 7, 9, 12, 13],
    9: [8, 10, 11, 12],
    10: [5, 9, 11, 21, 23],
    11: [9, 10, 12, 23, 26],
    12: [7, 8, 9, 11, 13, 19],
    13: [8, 12, 14, 19],
    14: [3, 13, 15],
    15: [14, 16],
    16: [15, 17, 18],
    17: [16, 18],
    18: [16, 17, 19],
    19: [12, 13, 18, 20, 27],
    20: [19, 26, 27],
    21: [5, 10, 22, 23],
    22: [5, 21, 23, 24],
    23: [10, 11, 21, 22, 24, 25, 26],
    24: [22, 23, 25],
    25: [23, 24, 26, 27],
    26: [11, 20, 23, 25, 27, 28],
    27: [19, 20, 25, 26, 28],
    28: [26, 27]
  };
  
  return adjacentDistricts[district1]?['includes'](district2) || false;
}

module['exports'] = {
  getDistrictFromPostal,
  getPostalPrefixesForDistrict,
  arePostalCodesNearby
};