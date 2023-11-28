export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = 'API response';
      resolve(response);
    }, 2000);
  });
}
