import React from 'react';

const Header = () => (
  <header>
    <h1>Best Characters</h1>
  </header>
);

const Footer = () => (
  <footer>&copy; MEEEE</footer>
);

const App = () => (
  <React.Fragment>
    <Header />
    <Footer />
  </React.Fragment>
);

export default App;
