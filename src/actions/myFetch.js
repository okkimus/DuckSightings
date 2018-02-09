const fetchFromServer = (toFetch) => {
    if (toFetch === 'species') {
        return fetch('http://localhost:8081/' + toFetch)
            .then(results => {
                return results.json();
            })
    }
}

export default fetchFromServer;