import * as React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from '../environment';

interface IAppProps {
    compiler: string;
    framework: string;
    viewer: any;
}

const query = graphql`
    query UserQuery {
        viewer {
            id
        }
    }
`;

const renderer = ({ error, props }: any) => {
    if (error) {
        return <div>Error!</div>;
    }
    if (!props) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Hello from {props.compiler} and {props.framework}!</h1>
            <p>User ID: {props.viewer.id}</p>
        </div>
    );
};

const App = () => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{}}
    render={renderer}
  />
);
export default App;
