import { useState, useEffect } from "react";

export const useDataRates = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const apiURL = "https://api.exchangerate.host/latest?base=PLN";

        const fetchData = async () => {
            try {
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rates, date } = await response.json();
                
                setRatesData({
                    state: "success",
                    rates,
                    date,
                });
                
            } catch {
                setRatesData({
                    state: "error"
                });
            }
        };

        setTimeout(fetchData, 4000);
    }, []);
    
    return ratesData; 
    
};