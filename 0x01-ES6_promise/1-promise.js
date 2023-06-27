function getFullResponseFromAPI(success){
    return new Promise((resolve, reject) => {
	if (success == true)
	{
	    resolve({status:"200", body:"Success"});
	} else {
	    reject("The faske API is not working currently");
	}
    });

}

export default getFullResponseFromAPI(true);
