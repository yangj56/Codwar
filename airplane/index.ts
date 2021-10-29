const { stringify } = require('querystring');

const airports = ['PHX', 'BKK', 'OKC', 'LAX', 'MEX', 'EZE', 'HEL', 'LOS', 'LAP', 'LIM'];

const routes: [string, string][] = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// 2 approaches to solve this:
// 1: use matrix but since the routes are not a lot which will end up taking up too much spaces
// 2: use adjancency list

// map is better than object, as it has more methods
const adjacencyMap = new Map<string, string[]>();

// add airport to map
function addNodes(airport) {
    adjacencyMap.set(airport, []);
}

function addRoutes(origin: string = '', destination: string = '') {
    adjacencyMap.get(origin)?.push(destination);
    adjacencyMap.get(destination)?.push(origin);
}

airports.forEach((airport) => {
    addNodes(airport);
});

routes.forEach((route) => {
    addRoutes(...route);
});

adjacencyMap;

// BFS
function bsf(start) {
    const children: string[] = adjacencyMap.get(start);

    for (let i = 0; i < children.length; i++) {
        const isBKK = children[i] === 'BKK';
    }
}
