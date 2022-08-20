import './App.css';

function App() {
  const cardIcons = ['🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮'];
  const cards = cardIcons.map((card) => <div className='Card'>{card}</div>)

  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;
