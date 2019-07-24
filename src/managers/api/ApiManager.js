// RUTA prod
const URL = "https://www.droguerialaeconomia.com/economia/";
// // RUTA dev
// const URL = "https://www.droguerialaeconomia.com/economia/";
// // RUTA local
// const URL = "https://www.droguerialaeconomia.com/economia/";

// Get for categories 
const GetCategories = async () => {
    try {
        let response = await fetch(`${URL}api/Categorias/${localStorage.getItem("city")}`),
            responseJson = await response.json();
        console.log("status for banners: " + responseJson.status.toString())
        return response.status.toString() === "200" ? responseJson : [];
    } catch (error) {
        console.log(JSON.stringify(error));
        return [];
    }
}

// Get for all citys 
const GetCitys = async () => {
    try {
        let response = await fetch(`${URL}api/Ciudades/`),
            responseJson = await response.json();
        console.log("status for citys: " + response.status.toString())
        return response.status.toString() === "200" ? responseJson : [];
    } catch (error) {
        console.log(JSON.stringify(error));
        return [];
    }
}


export {
    GetCitys
}