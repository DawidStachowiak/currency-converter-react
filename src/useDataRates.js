import { useEffect, useState } from "react";

export const useDataRates = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate.host/latest?base=PLN"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const {rates, date} = await response.json();

        setRatesData({
          state: "success",
          date,
          rates,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(fetchRates, 2000);
  }, []);

  return ratesData;
};
