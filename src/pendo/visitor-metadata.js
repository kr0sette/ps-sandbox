function pickUsingWeights (items, weights) {
    const total = weights.reduce((sum, weight) => sum + weight, 0);
    let random = Math.random() * total;

    for (let i = 0; i < items.length; i++) {
        if (random < weights[i]) {
            return items[i];
        }
        random -= weights[i];
    }
    return items[items.length - 1];
}

function generateAccountId () {
    var accounts = [
        'Stark Industries',
        'Wayne Enterprises',
        'Hooli',
        'Dunder Mifflin US',
        'Willy Wonka Industrial',
        'Pied Piper',
        'Dunder Mifflin EU',
        'Associated Strategies',
        'Krusty Krab',
        'Sterling Cooper'
    ];

    let month = new Date().getMonth();
    let weight;

    if (month % 2) {
        weight = [ 300, 175, 125, 100, 75, 75, 50, 50, 25, 25 ];
    } else {
        weight = [ 300, 25, 50, 50, 75, 75, 100, 125, 175, 25 ];
    }

    return pickUsingWeights(accounts, weight);
}

function getParameterByName (name, url) {
    if (!url) url = window.location.href;

    var cleanName = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + cleanName + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function generateVistorId (account) {
    const accString = account.replace(/\s/g, '');
    let randNum = Math.random() * 100;

    const metadata = {
        visitor: '',
        role: ''
    };

    if (randNum < 25) {
        metadata.visitor = 'visitor1@' + accString + '.com';
        metadata.role = 'admin';
    } else if (randNum <= 50) {
        metadata.visitor = 'visitor6@' + accString + '.com';
        metadata.role = 'admin';
    } else if (randNum <= 65) {
        metadata.visitor = 'visitor4@' + accString + '.com';
        metadata.role = 'user';
    } else if (randNum <= 80) {
        metadata.visitor = 'visitor7@' + accString + '.com';
        metadata.role = 'user';
    } else if (randNum <= 90) {
        metadata.visitor = 'visitor5@' + accString + '.com';
        metadata.role = 'user';
    } else if (randNum <= 95) {
        metadata.visitor = 'visitor3@' + accString + '.com';
        metadata.role = 'read-only';
    } else {
        metadata.visitor = 'visitor2@' + accString + '.com';
        metadata.role = 'read-only';
    }

    return metadata;
}

export const accountId = generateAccountId();
export const accountParam = getParameterByName('accountId');

export const visitor = generateVistorId(accountId).visitor;
export const role = generateVistorId(accountId).role;
export const visitorParam = getParameterByName('visitorId');
