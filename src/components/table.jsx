import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./table.css";

export default function Table(props) {
  const [headers, setHeaders] = useState(null);
  const [body, setBody] = useState(null);

  async function getData(url) {
    let req = await fetch(url);
    let data = await req.json();
    return data;
  }

  useEffect(() => {
    getData(props.dataUrl).then((data) => {
      setHeaders(
        Object.keys(data[0]).map((key) => {
          return <th key={nanoid()}>{key}</th>;
        })
      );

      setBody(
        data.map((item) => {
          let bodyTr = Object.values(item).map((value) => {
            return <td key={nanoid()}>{value}</td>;
          });
          return <tr key={nanoid()}>{bodyTr}</tr>;
        })
      );

      
    });
  }, [props.dataUrl]);

  return (
    <>
      <table>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
    </>
  );
}
