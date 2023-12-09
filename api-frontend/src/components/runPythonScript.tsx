import { useState } from 'react';
import axios from 'axios';

function RunPythonScript() {
  const [pythonOutput, setPythonOutput] = useState('');
  
  const runPythonScript = () => {
    axios.post('http://localhost:11514/api/dataProcess/run-python')
      .then(response => {
        // Update the state with the response data
        setPythonOutput(response.data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <button onClick={runPythonScript} className='btn'>Run Python Script</button>
      <div>
        <pre>{pythonOutput}</pre>
      </div>
    </div>
  );
}

export default RunPythonScript;
