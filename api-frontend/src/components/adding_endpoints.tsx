import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:11514/api'; 

export default function ConfigEditor() {
  const [endpoints, setEndpoints] = useState<string[]>([]);
  const [endpoint, setEndpoint] = useState('');

  const handleAddEndpoint = async () => {
    const newEndpoint = endpoint;
    setEndpoint('');

    try {
      const updatedEndpoints = [...endpoints, newEndpoint];
      await axios.post<string[]>(`${baseUrl}/dataProcess/add`, updatedEndpoints, {
        headers: { 'Cache-Control': 'no-cache' } // Prevent caching
      });
      setEndpoints(updatedEndpoints);
    } catch (error) {
      console.error(error);
    }
  }

  
  useEffect(() => {
    console.log('Component reloaded due to endpoint addition');
  }, [endpoints]);

  return (
    <div>
      <input 
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)} 
      />
      <button onClick={handleAddEndpoint} className='button'>
        Add Endpoint
      </button>
      <br></br>
      <ul>
        {endpoints.map(endpoint => (
          <li key={endpoint}>{endpoint}</li>
        ))}
      </ul>
    </div>
  );
}
