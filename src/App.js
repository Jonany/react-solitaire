import './App.css';

function App() {
  const cardIcons = ['🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮'];
  const cards = cardIcons.map((card) => <div className='Card'>{card}</div>)

  return (
    <div className="App">
      <div className='CardList'>
        {cards}
      </div>
    </div>
  );
}

export default App;
