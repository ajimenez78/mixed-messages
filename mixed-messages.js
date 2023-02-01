const QuoteSource = class {
    constructor(id, filePath) {
        this._id = id;
        this._implFile = filePath
    };

    load() {
        if (this._implFile) {
            import(this._implFile);
        } else {
            throw 'Error: source not initialized.';
        }
    }
}

const quoteSources = [
    new QuoteSource('LOCAL', './localSource.js'),
    new QuoteSource('FEED', './feedSource.js'),
    new QuoteSource('SCRAPPED', './scrappedSource.js')
];

console.log('Hola, ahí va una cita:');
quoteSources.forEach(source => {
    source.load();
});