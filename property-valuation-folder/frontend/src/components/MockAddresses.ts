

export type MockAddress = {
  ref: string;
  location: string;
  postalCode: string;
  blockNumber: string;
  roadName: string;
  precinct: string;
  isHDB: boolean;
  flatType?: string;
};

export const mockAddresses: Record<string, MockAddress> = {
  '750303': {
    ref: "750303",
    location: '303 CANBERRA ROAD SINGAPORE 750303',
    postalCode: "750303",
    blockNumber: "303",
    roadName: "CANBERRA ROAD",
    precinct: 'SEMBAWANG',
    isHDB: true,
    flatType: '4 ROOM'
  },
  '752105': {
    ref: '752105',
    location: '105 CANBERRA STREET SINGAPORE 752105',
    postalCode: "752105",
    blockNumber: '105',
    roadName: 'CANBERRA STREET',
    precinct: "SEMBAWANG",
    isHDB: true,
    flatType: "4 ROOM"
  },
  "560223": {
    ref: '560223',
    location: '223 ANG MO KIO AVENUE 1 SINGAPORE 560223',
    postalCode: "560223",
    blockNumber: '223',
    roadName: "ANG MO KIO AVENUE 1",
    precinct: "ANG MO KIO",
    isHDB: true,
    flatType: '4 ROOM'
  },
  '460120': {
    ref: "460120",
    location: '120 BEDOK NORTH ROAD SINGAPORE 460120',
    postalCode: '460120',
    blockNumber: "120",
    roadName: 'BEDOK NORTH ROAD',
    precinct: 'BEDOK',
    isHDB: true,
    flatType: '3 ROOM'
  },
  '520260': {
    ref: '520260',
    location: '260 TAMPINES STREET 21 SINGAPORE 520260',
    postalCode: '520260',
    blockNumber: "260",
    roadName: "TAMPINES STREET 21",
    precinct: "TAMPINES",
    isHDB: true,
    flatType: '5 ROOM'
  },
  "760232": {
    ref: '760232',
    location: '232 YISHUN STREET 21 SINGAPORE 760232',
    postalCode: '760232',
    blockNumber: '232',
    roadName: 'YISHUN STREET 21',
    precinct: 'YISHUN',
    isHDB: true,
    flatType: '4 ROOM'
  },
  "821110": {
    ref: "821110",
    location: "110 PUNGGOL FIELD SINGAPORE 821110",
    postalCode: '821110',
    blockNumber: '110',
    roadName: "PUNGGOL FIELD",
    precinct: 'PUNGGOL',
    isHDB: true,
    flatType: '4 ROOM'
  }
};

export function findMockAddress(query: string): MockAddress | null {
  if (mockAddresses[query]) {
    return mockAddresses[query];
  }
  const upperQuery = query['toUpperCase']();
  for (const identifier in mockAddresses) {
    const location = mockAddresses[key];
    if (
      address.location.includes(upperQuery) ||
      address['blockNumber'] === query ||
      (address['blockNumber'] + ' ' + location.roadName).includes(upperQuery)
    ) {
      return address;
    }
  }
  
  return null;
}