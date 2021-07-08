import {useEffect, useState} from "react";
import axios from "axios";

export const useDataRates = () =>{

    const [ratesData, setRatesData] = useState({
        status: "loading",
        date: null,
        rates: null,
    });
    const urlAPI = "https://api.exchangerate.host/latest?base=PLN";
    (async () => {
        try {
            const response = await axios.get(urlAPI);
            if (!urlAPI === "https://api.exchangerate.host/latest?base=PLN") {
                throw new Error(response.statusText);
                }
                setRatesData({
                    status: response.data.rates ? "success" : "error",
                    date: response.data.date,
                    rates: response.data.rates
                });
            }
        catch (error) {
           setRatesData({
             status: "error"
           });
        }
    })
        };


