const API_URL = import.meta.env.DEV
  ? 'http://localhost:8000/api/v1'
  : '/api/v1';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

export const api = {
  // Auth
  async signup(data: any) {
    const response = await fetch(`${API_URL}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async login(data: any) {
    const response = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Patients
  async getPatients() {
    const response = await fetch(`${API_URL}/patients`, {
      headers: getHeaders(),
    });
    return response.json();
  },

  async getPatient(id: string) {
    const response = await fetch(`${API_URL}/patients/${id}`, {
      headers: getHeaders(),
    });
    return response.json();
  },

  async createPatient(data: any) {
    const response = await fetch(`${API_URL}/patients`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // AI Analysis
  async createAnalysis(formData: FormData) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/analyses`, {
      method: 'POST',
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: formData,
    });
    return response.json();
  },

  async getAnalyses() {
    const response = await fetch(`${API_URL}/analyses`, {
      headers: getHeaders(),
    });
    return response.json();
  },

  // Reports
  async createReport(data: any) {
    const response = await fetch(`${API_URL}/reports`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getReports() {
    const response = await fetch(`${API_URL}/reports`, {
      headers: getHeaders(),
    });
    return response.json();
  },

  async getReport(id: string) {
    const response = await fetch(`${API_URL}/reports/${id}`, {
      headers: getHeaders(),
    });
    return response.json();
  },

  // Medications
  async searchMedications(query: string) {
    const response = await fetch(`${API_URL}/medications?name=${query}`, {
      headers: getHeaders(),
    });
    return response.json();
  },

  // Dashboard
  async getStats() {
    const response = await fetch(`${API_URL}/dashboard/stats`, {
      headers: getHeaders(),
    });
    return response.json();
  },

  // History
  async getHistory() {
    const response = await fetch(`${API_URL}/history`, {
      headers: getHeaders(),
    });
    return response.json();
  },
};
