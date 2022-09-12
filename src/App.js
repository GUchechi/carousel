import './App.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';


function App() {
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
    {width: 1500, itemsToShow: 4}
  ]


  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Card number="1" />
        <Card number="2" />
        <Card number="3" />
        <Card number="4" />
        <Card number="5" />
        <Card number="6" />
        <Card number="7" />
        <Card number="8" />
        <Card number="9" />
        <Card number="10" />
      </Carousel>
    </div>
  );
}

export default App;
