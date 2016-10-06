export const PORT = process.env.PORT ? (process.env.PORT.replace(/\s/, '')) : 3000;
export const NODE_ENV = process.env.NODE_ENV ? (process.env.NODE_ENV.replace(/\s/, '')) : 'development';
export const API_URL = process.env.API_URL || 'http://localhost:8080';