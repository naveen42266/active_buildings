import axios from 'axios';

// Set up base URL and Axios instance
const api = axios.create({
  //  baseURL: 'https://forex-news-backend.onrender.com/api/news',
  baseURL: 'http://localhost:8080/api/inventory', // replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Interceptor to add token for authorization
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken'); // or sessionStorage.getItem('authToken')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Get count
export const getLastItemCode = async () => {
    try {
      const response = await api.get(`/last-item-code`,);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("Error fetching inventory:", error);
      throw error;
    }
  };

// Get all notes for the authenticated user
export const getAllInventory = async () => {
  try {
    const response = await api.get(`/all`,);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    throw error;
  }
};

// Add a new note
export const addInventory = async (body) => {
  try {
    const response = await api.post('/add', body);
    return response.data;
  } catch (error) {
    console.error("Error adding inventory:", error);
    throw error;
  }
};


// Delete an inventory item by ID
export const deleteInventory = async (id) => {
  try {
    const response = await api.delete(`/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting inventory:", error);
    throw error;
  }
};

// Update a note by ID
export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await api.put('/updateTask', {
      title: updatedTask.title,
      description: updatedTask.description,
      status: updatedTask.status,
      priority: updatedTask.priority,
      deadline: updatedTask.deadline,
      updatedAt: updatedTask.updatedAt,  // Send only the updated fields
    }, {
      params: { id: taskId }
    });
    return response.data;
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
};


// Update a note by ID
export const updateStatus = async (taskId, status) => {
  try {
    const response = await api.put('/updateStatus', {
      status: status,
    }, {
      params: { id: taskId }
    });
    return response.data;
  } catch (error) {
    console.error("Error updating status:", error);
    throw error;
  }
};



// Delete a note by ID
export const deleteTask = async (taskId) => {
  try {
    const response = await api.delete('/deleteTask', {
      params: { id: taskId }
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
};