import './App.css';
import Navigation from './Navigation';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Awards from './Awards';

function App() {
  return (
    <div>
      <body id="page-top">
        <Navigation />

        <div class="container-fluid p-0">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Interests />
          <Awards />
        </div>

        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
      </body>
      {/* hi h*/}
    </div>
  );
}

export default App;
