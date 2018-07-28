import * as React from 'react';

interface IAppProps { compiler: string; framework: string; }

const App = (props: IAppProps) => (
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
);

export default App;
