import React, { memo, useState, Component, PureComponent } from 'react';

const Header = () => {
  console.log('header rendered');
  return <h1>header</h1>;
};

const MemoHeader = memo(Header);

class Footer extends Component {
  render() {
    console.log('footer rendered');
    return <h1>Footer</h1>;
  }
}

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>{count}</button>
      <Header />
      <Footer />
    </>
  );
}
  
