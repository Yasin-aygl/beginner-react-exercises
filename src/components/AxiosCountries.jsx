import { useEffect, useState } from "react";
import axios from "axios";

const AxiosCountries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get(url);
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries();
  }, []);

  return (
    <div style={{textAlign: "center"}}>
      <h1>Axios Countries Filter Search</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(input.toLowerCase())
          )
          .map((country) => {
            return (
              <div key={country.name.common}>
                {/* <p style={{fontSize: "5px" }}>{country.name.common}</p> */}
                <p>{country.name.common ? country.name.common.lenght : 0}</p>
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  style={{ width: "10px" ,margin:"1px" }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default AxiosCountries;
