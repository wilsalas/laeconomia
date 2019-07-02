const URL = "https://www.droguerialaeconomia.com/economia/";

// Get for all citys 
const GetCitys = async () => {
    try {
        let response = await fetch(URL + "api/Ciudades/"),
            responseJson = await response.json();
        console.warn("status for citys: " + response.status.toString())
        return response.status.toString() === "200" ? responseJson : [];
    } catch (error) {
        console.log(JSON.stringify(error));
        return [];
    }
}


export {
    GetCitys
}