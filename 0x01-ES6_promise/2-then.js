/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'Success',
      };
    })
    .catch(() => Error())
    .finally(() => {
    });
}
