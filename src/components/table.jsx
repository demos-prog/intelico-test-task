import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./table.css";

export default function Table(props) {
  const [data, setData] = useState([]);

  async function getData(url) {
    let req = await fetch(url);
    let data = await req.json();
    return data;
  }

  useEffect(() => {
    getData(props.dataUrl).then((data) => {
      console.log(data);
      setData(data);
    });
  }, [props.dataUrl]);

  let headers = Object.keys(data[0]).map(key=>{
    return <th key={nanoid()}>{key}</th>
  })

  return <>
    <table>
      <thead>headers</thead>
      <tbody></tbody>
    </table>
  </>;
}
