import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './page/Carousel'; 
import History from './page/History'; 
import History23 from './page/History23'; 
import Review from './page/Review';
function App() {
  return (
    <div className="App">
        <Navbar />
  
        <Carousel/>
        
        <History/>
        
        <History23/>

        <Review/>
    </div>
  );
}

export default App;
