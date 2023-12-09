import './assets/styles.css'; // Import the global styles
import EndpointList from './components/endpoints';
import ConfigEditor from './components/adding_endpoints';
import RunPythonScript from './components/runPythonScript';

function App() {
  return (
    <div className="container"> {/* Apply the container class to center and add padding */}
      <div className="con">
      <ConfigEditor />
      </div>
      <EndpointList />
      <RunPythonScript />
    </div>
  );
}

export default App;