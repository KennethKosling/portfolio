import './App.css';
import Bio from './components/bio/Bio';
import Links from './components/links/Links';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Links />
      <Bio />
      <Projects />
    </div>
  );
}

export default App;
