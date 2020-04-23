import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Heroes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://heroes-indonesia.herokuapp.com/heroes/get")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        console.log(response);
      });
  }, []);

  return (
    <div className="">
      <h1 className=" text-center pt-4 pb-3">--- TUGAS PAHLAWAN ---</h1>
      <table className="table" >
            <thead>
              <tr className = "table-success text-center">
              <th className="h4 font-weight-underline"><u className="mt-4">Number</u></th>
                <th className="h4">Name</th>
                <th className="h4 ">Born</th>
                <th className="h4 ">Dead</th>
                <th className="h4 ">Description</th>
                <th className="h4 ">Establishment</th>
              </tr>
            </thead>
            <tbody>
      {data.map((item, index) => {
        return (
                
              <tr className="table-success" key={index}>
              <td className="h4 text-center font-weight-bold">{index + 1}</td>
                <td className="h4 text-center">{item.name}</td>
                <td className="h4 text-center">{item.born}</td>
                <td className="h4 text-center">{item.dead}</td>
                <td className="h4 text-center">{item.description}</td>
                <td className="h4 text-center">{item.establishment}</td>
              </tr>
        );
        
      })}
      </tbody>
            </table>
    </div>
  );
}
