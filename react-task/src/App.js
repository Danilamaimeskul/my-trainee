import './styles/App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import AtticProjects from './components/AtticProjects';
import Footer from './components/Footer';

function App() {
  return (
   <div>
     <Header />
     <Projects />
     <AtticProjects />
     <Footer />
   </div>
  );
}

export default App;
