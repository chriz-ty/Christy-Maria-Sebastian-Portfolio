import { BackgroundBeamsDemo } from './components/HeroBackground';
import Navbar from './components/Navbar';
import { Beam } from './components/beam';

function App() {
  return (
    <div className="bg-black min-h-screen">
      
      <Navbar />
      <BackgroundBeamsDemo />
      <Beam />
    </div>
  );
}

export default App;