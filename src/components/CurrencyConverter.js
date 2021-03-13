import axios from "axios";
import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  let [input, setInput] = useState("1");
  let [fromCurrency, setFromCurrency] = useState("USD");
  let [toCurrency, setToCurrency] = useState("PKR");
  let [result, setResult] = useState("");

  useEffect(() => {
    // const handleRequest = async () => {
    //   let data = await axios.get("http://apilayer.net/api/live", {
    //     params: {
    //       access_key: "1a63e4c47eabef11fafe7ed6f29909a8",
    //       // currencies: "EUR,GBP,CAD,PLN",
    //       source: "USD",
    //     },
    //   });
    //   setResult(data["data"]["quotes"][toCurrency] * input);
    // };
    const handleRequest = async () => {
      let { data } = await axios.get("https://api.exchangerate.host/convert", {
        params: {
          from: fromCurrency,
          to: toCurrency,
        },
      });
      setResult((data.info.rate * input).toFixed(2));
      console.log(data);
    };

    handleRequest();
  }, [input, fromCurrency, toCurrency]);

  return (
    <div style={{ textAlign: "center" }} className="ui segment">
      <h1> Currency Converter</h1>
      <div className="ui input">
        <input
          type="text"
          placeholder="enter amount.."
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
      </div>
      {/* from  currency  */}
      <label>From</label>
      <select onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="PKR">PKR</option>
        <option value="INR">INR</option>
        <option value="AED">AED</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
      <label>To</label>
      <select onChange={(e) => setToCurrency(e.target.value)}>
        <option value="PKR">PKR</option>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="AED">AED</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
      {/* <button onClick={convertCurrency}>Convert</button> */}
      Converted Amount : {result} {toCurrency}
    </div>
  );
};

export default CurrencyConverter;
