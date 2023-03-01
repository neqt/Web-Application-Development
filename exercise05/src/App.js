import React from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  let savory = {
    type: 'อาหารคาว',
    name: 'ข้าวผัด',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pic: 'https://i.pinimg.com/564x/fe/93/10/fe93101baf81452f6e7fc0746392ae4c.jpg',
  };
  let sweet = {
    type: 'อาหารหวาน',
    name: 'บัวลอย',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pic: 'https://i.pinimg.com/564x/21/f4/d3/21f4d3d35fbd3c2e2f94744f42bc8d3f.jpg',
  };

  return (
    <div className="App">
      <h1 className='title'>โหวตอาหาร</h1>
      <Card data={savory} />
      <Card data={sweet} />
    </div>
  );
};

export default App;
