/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const data = { message: 'Response from API' };
      resolve(data);
    }, 2000);
  });
}

export default getResponseFromAPI;
