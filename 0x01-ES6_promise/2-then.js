/* eslint-disable no-unused-vars */
/*eslint-disable no-console*/
/* eslint-disable no-var */
export default function handleResponseFromAPI(promise) {
    return promise.then(() => ({status: 200, body: 'success'}))
	.catch(() =>new Error())
	.finally(() => { console.log('Got a response from the API'); });
}
