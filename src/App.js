// import logo from './logo.svg';
// import './App.css';
import '../src/styles/style.css';
import '../src/styles/variables';
import GlobalStyle from './styles/GlobalStyle';
import { AboutMe } from './components/sections/AboutMe';
import { NavBar } from './components/Navbar';
import { Opener } from './components/sections/Opener';
import { Experience } from './components/sections/experience';
import { Projects } from './components/sections/projects';
import { FeaturedProjects } from './components/sections/featuredProjects';
import { Contact } from './components/sections/contact';
import { Social } from './components/social';

function App() {
  return (
    <div className="main">
      <GlobalStyle/>
      <NavBar />
      <Social />
      <Opener />
      <AboutMe />
      <Experience />
      <FeaturedProjects />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
