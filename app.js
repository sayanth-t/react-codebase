import React from 'react';
import ReactDOM from 'react-dom/client';

// React functional component
const Heading = () => {
  return <h1>hello this is Functional componentt</h1>;
};

const text = <span>Namaste guyzz</span>;

const elem = () => (
  <div>
    <h4>{text}Whats the matter broww?</h4>
  </div>
);

const Body = () => {
  return (
    <div>
      <Heading />
      {Heading()}
      <h3>this is our second componenttt</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')); // when we render then heading becomes html element

root.render(<Body/>);
