/**
 *  Local data source for testing
 */

let data = {
    flights: [
        {
            flight_id: 'flight1',
            users: ['user1id'],
        },
        {
            flight_id: 'flight2',
            users: ['user2id'],
        },
        {
            flight_id: 'flight4',
            users: ['user3id'],
        },
        {
            flight_id: 'flight3',
            users: ['user4id'],
        },
    ],
    users: [
        {
            email: 'user1email',
            user_id: 'user1id',
            pass_hash: 'user1passhash',
            bags: ['bag1id'],
            active_flight: '',
        },
        {
            email: 'user2email',
            user_id: 'user2id',
            pass_hash: 'user2passhash',
            bags: ['bag2id'],
            active_flight: '',
        },
        {
            email: 'user3email',
            user_id: 'user3id',
            pass_hash: 'user3passhash',
            bags: ['bag3id'],
            active_flight: '',
        },
        {
            email: 'user4email',
            user_id: 'user4id',
            pass_hash: 'user4passhash',
            bags: ['bag4id'],
            active_flight: '',
        },
    ],
    bags: [
        {
            bag_id: 'bag1id',
            user_id: 'user1id',
            scanners: ['scanner1id'],
        },
        {
            bag_id: 'bag2id',
            user_id: 'user2id',
            scanners: ['scanner1id', 'scanner2id'],
        },
        {
            bag_id: 'bag3id',
            user_id: 'user3id',
            scanners: ['scanner1id', 'scanner2id', 'scanner3id'],
        },
        {
            bag_id: 'bag4id',
            user_id: 'user4id',
            scanners: ['scanner1id', 'scanner2id', 'scanner3id', 'scanner4id'],
        },
    ],
    scanners: [
        {
            scanner_id: 'scanner1id',
            label: 'scanner1state',
        },
        {
            scanner_id: 'scanner2id',
            label: 'scanner2state',
        },
        {
            scanner_id: 'scanner3id',
            label: 'scanner3state',
        },
        {
            scanner_id: 'scanner4id',
            label: 'scanner4state',
        }
    ]
}

// Requesting an array of flight objects
export const fetchFlightsDB = () => {
    return new Promise((resolve, reject) => {
        resolve(data.flights);
    });
};

// Requesting an array of bag objects, specified by the flight id
export const fetchBagsDB = (userid) => {
    return new Promise((resolve, reject) => {
        resolve(data.bags.filter(bag => (bag.user_id === userid)))
    });
};

// Requesting a specific bag object
export const fetchBagUpdatesDB = (bagid) => {
    return new Promise((resolve, reject) => {
        resolve(data.bags.filter(bag => (bag.bag_id === bagid)))
    });
}

// Requesting an array of scanner objects
export const fetchScannersDB = () => {
    return new Promise((resolve, reject) => {
        resolve(data.scanners)
    });
}

// Updating a scanner object and posting it to the server - NEED TO FILL
export const updateScannerDB = (scannerid) => {
    return new Promise((resolve, reject) => {
        resolve('NEED TO FILL')
    });
}

// Requesting a specific user object
export const fetchUserDB = (userid) => {
    return new Promise((resolve, reject) => {
        resolve(data.users.filter(user => (user.user_id === userid)))
    });
}