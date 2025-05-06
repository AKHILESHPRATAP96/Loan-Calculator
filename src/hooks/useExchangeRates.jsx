import { useState, useEffect } from "react";
import axios from "axios";

const useExchangeRates = (baseCurrency, apiKey) => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://v6.exchangerate-api.com/v6/9663dde987ef167f59fdd3d5/latest/${baseCurrency}`
        );
        if (res.data.result === "success") {
          setRates(res.data.conversion_rates);
        } else {
          setError("API Error: " + res.data["error-type"]);
        }
      } catch (err) {
        setError("Network error or invalid API key");
      } finally {
        setLoading(false);
      }
    };

    if (apiKey) fetchRates();
  }, [baseCurrency, apiKey]);

  return { rates, loading, error };
};

export default useExchangeRates;
