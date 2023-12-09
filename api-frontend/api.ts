import axios from 'axios';

const baseUrl = 'http://localhost:5152/api'; 

export async function getConfigFileEndPoints() {
  const response = await axios.get<string[]>(`${baseUrl}/dataProcess`);
  return response.data;
}

export async function addConfigFileEndPoints(endpoints: string[]) {
  const response = await axios.post<string>(`${baseUrl}/dataProcess`, endpoints);
  return response.data;
}

export async function editConfigFileEndPoints(endpoints: string[]) {
  const response = await axios.put<string>(`${baseUrl}/dataProcess`, endpoints);
  return response.data;
}
