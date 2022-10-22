function conAPI({ req }) {
  const apiKey = 'abd149c76aed460cae4ce027619714fa';
  const API = `https://newsapi.org/v2/${req}&apiKey=${apiKey}`;
  return API;
}

export default conAPI;
