import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

const fetchQuery = (
    operation: any,
    variables: any,
): Promise<any> => {
    return fetch('/graphql', {
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
    }).then((response) => (response.json()));
};

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

export default environment;
