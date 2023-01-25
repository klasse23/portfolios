//import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = (event, message) => {
    // 👇️ refers to the div element
    console.log(event.currentTarget);
    console.log(message);
    console.log('div clicked');
  };

  return (
    
    <div className="App">
      
      <header className="App-header">
        <h1>Our Portfolios... Sorta</h1>
        <div className="page-container">
          <div  onClick={event => handleClick(event, 'Mathias')} className="grid-item">Mathias</div>
          <div  onClick={event => handleClick(event, 'Lukas')} className="grid-item">Lukas</div>
          <div  onClick={event => handleClick(event, 'Julian')} className="grid-item">Julian</div>
        </div>

        
      </header>
    </div>
  );
}

export default App;
