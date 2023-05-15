import React, { useState } from "react";
import Histogram from "./histogram";
import { CSVLink } from "react-csv";
import "./App.css";

function App() {
  const [ans, setAns] = useState(null);
  const [flag, setFlag] = useState(false);

  const handleClick = async (e) => {
    const response = await fetch("https://www.terriblytinytales.com/test.txt", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then(async (response) => {
        const apiData = await response.text();

        const words = apiData.split(" ");

        let freq = {};

        words.forEach((word) => {
          if (!/^[a-zA-Z0-9]+$/.test(word)) {
            return;
          }

          if (freq[word]) {
            freq[word]++;
          } else {
            freq[word] = 1;
          }
        });

        let desc = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);

        let result = [];

        for (let i = 0; i < 20 && i < desc.length; i++) {
          let temp = {};
          temp["word"] = desc[i];
          temp["count"] = freq[desc[i]];
          result.push(temp);
        }

        setAns(result);
      })
      .catch((error) => {
        console.log(error);
      });
    setFlag(true);
  };

  const headers = [
    { label: "word", key: "word" },
    { label: "count", key: "count" },
  ];

  return (
    <div className="App">
      <div className="div-1">
      <h1> Terribly Tiny Tales Assignment</h1>
        {flag ? (
          <Histogram data={ans} />
        ) : (
          <div className="submit-btn">
            <h3> Click Here to fetch the data : </h3>
            <button type="submit" onClick={handleClick}>
              Submit
            </button>
          </div>
        )}

        {ans && (
          <CSVLink
            data={ans}
            headers={headers}
            filename={"words_Frequency_Data.csv"}
            className="export-text"
          >
            Export to CSV
          </CSVLink>
        )}
      </div>
    </div>
  );
}

export default App;
