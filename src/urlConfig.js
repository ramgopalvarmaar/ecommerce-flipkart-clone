const baseUrl = "https://rate-star-backend.herokuapp.com";
//const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
