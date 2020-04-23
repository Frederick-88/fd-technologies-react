import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      axios.get("https://restcountries.eu/rest/v2/all").then(response => {
        console.log(response.data);

        setData(response.data);
        setLoading(true);
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div>
        <h3>List Tugas Frederick</h3>
        {data.map(item => (
          <div>{item.name}</div>
        ))}
        )}
      </div>
    );
  } else {
    return <div>Loading....</div>;
  }
};
