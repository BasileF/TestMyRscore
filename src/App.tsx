import React from 'react';
import Header from './components/header/Header';
import SwipeableViews from 'react-swipeable-views';
import OverallCalculator from './components/calculators/overall/OverallCalculator';
import Home from './components/home/Home';
import Universities from './components/university/Universities';
import Contact from './components/contact/Contact';

function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="App">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <SwipeableViews index={activeTab}>
        <Home />
        <OverallCalculator />
        <Universities />
        <Contact />
      </SwipeableViews>
    </div>
  );
}

export default App;