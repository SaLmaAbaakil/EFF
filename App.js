import React from 'react';
import { Provider } from 'react-redux';
import store from './Employees/store';
import Composant1 from './Employees/composant1';
import Composant3 from './Employees/composant3'; 


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Composant1 />
        <Composant3 /> 
      </div>
    </Provider>
  );
}

export default App;
