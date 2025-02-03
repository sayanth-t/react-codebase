import React from 'react';
import ReactDOM from 'react-dom/client';

// importing components
import Header from './components/Header' ;
import Body from './components/Body' ;
import Footer from './components/Footer' ;

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')); // when we render then heading becomes html element

root.render(<AppLayout />);
