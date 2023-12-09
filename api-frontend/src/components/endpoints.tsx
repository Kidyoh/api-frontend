import { useState, useEffect } from 'react';
import axios from 'axios';
import './endpoint.css'; // Import the CSS file

const baseUrl = 'http://localhost:11514/api';
const EndpointList = () => {
  const [responses, setResponses] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${baseUrl}/dataProcess`);
        setResponses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleDeleteEndpoint = async (endpointToDelete: string) => {
    try {
      const response = await axios.delete(`${baseUrl}/DataProcess/delete`, {
        data: endpointToDelete,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data === 'Success') {
        const updatedResponses = responses.filter((endpoint) => endpoint !== endpointToDelete);
        setResponses(updatedResponses);
      } else {
        console.error('Delete failed:', response.data);
      }
    } catch (error) {
      console.error('Error deleting endpoint:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Response Table</h1>
      <table className="response-table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((url) => (
            <tr key={url}>
              <td>
                <a href={url.trim()} target="_blank" rel="noopener noreferrer">
                  {url.trim()}
                </a>
              </td>
              <td>
                <button className="delete-button" onClick={() => handleDeleteEndpoint(url)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EndpointList;
