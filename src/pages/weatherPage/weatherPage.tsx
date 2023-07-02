import "./weatherPage.css"
import Header from "../../components/header/header";

import { useState, useEffect } from "react"
import { getForecastInfo } from "../../services/weatherAPI";
import { iconRel, iconPaths } from "../../services/iconRel";

export default function WeatherPage() {
    const [forecastInfo, setForecastInfo] = useState<any>(null);

    /**
     * Busca pelo nome da cidade na query da URL
     * @returns o nome da cidade se for encontrado. Caso contrário, uma string vazia
     */
    const getParamInfo = (): string => {
        let urlGetter = new URLSearchParams(window.location.search);
        return urlGetter.get("city") ?? ""; 
    }

    /**
     * Realiza a construção da página com as informações do clima
     * @returns 
     */
    const buildWeatherPanel = (): JSX.Element => {
        if (forecastInfo == null) {
            return (
                <div id="weather-content">
                    <div id="warning-panel">
                        <img id="no-info-icon" src="src/assets/no_info.svg" alt="no_location_icon.svg"/>
                        <h4>Selecione um local</h4>
                    </div>
                </div>
            )
        } else {
            const localHour = (new Date()).getHours();

            let conditionName: string = forecastInfo.current.condition.text as string;
            let range: number[] = [];

            let counter: number = 0;    //determina o número de horas no futuro que buscaremos
            let ind: number = localHour;

            while (counter < 8) {
                ind = (ind + 1) % 24;
                range.push(ind);
                counter++;
            }

            return (
                <div id="weather-content">
                    <div id="wc-header">
                        <h4>{forecastInfo.location.name}, {forecastInfo.location.region}, { forecastInfo.location.country}</h4>
                        <div id="climate-box">
                            <img src={iconPaths[conditionName]} alt="weather_icon.png" />
                            <div id="climate-condition">
                                <h3>{iconRel[conditionName]}</h3>
                                <h3>{ forecastInfo.current.temp_c } ºC</h3>
                            </div>
                        </div>
                    </div>
                    <div id="extra-info">
                        <h5>Umidade: {forecastInfo.current.humidity}%</h5>
                        <h5>Velocidade do vento: {forecastInfo.current.wind_kph}km/h</h5>
                        <h5>Chance de chuva: { forecastInfo.forecast.forecastday[0].day.daily_chance_of_rain}%</h5>
                        <div id="forecast-info">
                            {range.map(i => (
                                <div className="forecast-hour" key={i}>
                                    <h6 className="fc-head">{ i }H</h6>
                                    <img src={ forecastInfo.forecast.forecastday[0].hour[i].condition.icon} alt="weather_img.png"/>
                                    <h6>{ forecastInfo.forecast.forecastday[0].hour[i].temp_c } ºC</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }

    //Busca as informações do clima e atualiza o valor de weatherInfo. Caso nenhum nome válido de cidade seja
    //fornecido, uma exceção será lançada e o valor de weather info será null
    useEffect(() => {
        try {
            getForecastInfo(getParamInfo())
                .then((res) => {
                    const data = { ...res.data };
                    setForecastInfo(data);
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div id="main-page-body">
            <Header />
            <main>
                { buildWeatherPanel() }
            </main>
        </div>
    );
}