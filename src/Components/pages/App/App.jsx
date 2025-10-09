import React from 'react';

const App = ({app}) => {
    console.log(app)
    return (
        <div>
            <h1>{app.title}</h1>
        </div>
    );
};

export default App;