export default class QuotesSource {
    _quotes = [];
    
    addQuote = (quote, author) => {
        this._quotes.push({
            quote,
            author
        })
    };

    get quote() {
        if (this._quotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * this._quotes.length);
            return _this._quotes[randomIndex];
        } else {
            return undefined;
        }
    };

    get quotes () {
        return this._quotes;
    };
};