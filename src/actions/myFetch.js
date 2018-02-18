const fetchFromServer = (toFetch) => {
    return fetch('https://duck-server.herokuapp.com/' + toFetch)
        .then(results => {
            return results.json();
        })
}


export default fetchFromServer;