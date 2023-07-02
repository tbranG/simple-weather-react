import axios from "axios"
import { apiKey } from "./apiKey"

const forecastBaseURL = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;

/**
 * Busca as informações do tempo da cidade especificada pelo parâmetro 'cityName'
 * @param cityName nome da cidade
 * @returns objeto com todas as informações do clima da cidade
 * @throws Error se a string 'cityName' não conter um nome válido
 */
function getForecastInfo(cityName: string) {
    if (cityName == "") {
        throw new Error("Nome da cidade não definido");    
    }

    return axios.get(forecastBaseURL + "&q=" + cityName + "&aqi=no");
}

export {
    getForecastInfo
}