function conAPI({ req }) {
  const apiKey = '4ab931f6258b49e68ce90f5bf98424cb';
  const API = `https://newsapi.org/v2/${req}&apiKey=${apiKey}`;
  return API;
}

export default conAPI;
