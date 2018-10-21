/**
 *  Data source directly from the database
 */

const ENDPOINT = 'http://10.34.15.14:3000'

// Requesting an array of flight objects
export const fetchFlightsDB = () => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', ENDPOINT + '/flights', true);
        request.onload = function() {
                resolve(JSON.parse(request.response));
        }
        request.send();
    });
};

// Requesting an array of bag objects, specified by the flight id
export const fetchBagsDB = (userid) => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', ENDPOINT + '/bags?userId=' + userid, true);
        request.onload = function() {
                var arr = JSON.parse(request.response)
                resolve(arr.filter(bag => (bag.user_id === userid)))
        }
        request.send();
    });
};

// Requesting a specific bag object
export const fetchBagUpdatesDB = (bagid) => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', ENDPOINT + '/bags/' + bagid, true);
        request.onload = function() {
                resolve(JSON.parse(request.response))
        }
        request.send();
    });
}

// Requesting an array of scanner objects
export const fetchScannersDB = () => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', ENDPOINT + '/scanners', true);
        request.onload = function() {
                resolve(JSON.parse(request.response))
        }
        request.send();
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
        var request = new XMLHttpRequest();
        request.open('GET', ENDPOINT + '/user/' + userid, true);
        request.onload = function() {
                resolve(JSON.parse(request.response))
        }
        request.send();
    });
}