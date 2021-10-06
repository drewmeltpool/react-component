import React from 'react';
import FlatList from './components/common/FlatList';

const App: React.FC = () => {
  console.log('app-render');
  
  return (
    <div className="App">
      <FlatList isWrapper tag="ul" itemTag="li" data={[1,2,3,4,5,6,7,8,9]} component={(num) => <p>{num}</p>} setKey={(_, idx) => idx}/>
    </div>
  );
}

export default App;
