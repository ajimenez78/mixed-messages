import StoicSource from './stoicSource.js';
import HedonistSource from './hedonistSource.js';
import CinicSource from './cinicSource.js';

export const buildQuoteSource = (id) => {
    switch(id) {
        case 'STOIC':
            return new StoicSource();
        case 'HEDONIST':
            return new HedonistSource();
        case 'CINIC':
            return new CinicSource();
        default:
            return undefined;
    }
}
