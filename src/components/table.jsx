import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "../App.css";

export default function Table(props) {
  const [headers, setHeaders] = useState(null);
  const [body, setBody] = useState(null);

  async function getData(url) {
    let req = await fetch(url);
    if (req.ok) {
      let data = await req.json();
      return data;
    } else {
      alert(`${url} - is invalid !`);
    }
  }

  useEffect(() => {
    getData(props.dataUrl).then((data) => {
      if (data) {
        setHeaders(
          Object.keys(data[0]).map((key) => {
            return <th key={nanoid()}>{key}</th>;
          })
        );

        setBody(
          data.map((item, index) => {
            let bodyTr = Object.values(item).map((value) => {
              return (
                <td className={index % 2 === 0 ? "grey" : null} key={nanoid()}>
                  {value}
                </td>
              );
            });
            return <tr key={nanoid()}>{bodyTr}</tr>;
          })
        );
      }
    });
  }, [props.dataUrl]);

  return (
    <div className="tableWrapper">
      <table>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
}
