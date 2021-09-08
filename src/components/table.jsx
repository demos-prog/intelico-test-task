import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
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

  const cellStyle = {
    minWidth: 200,
    padding: ".5em 1em",
    textAlign: "left",
    borderLeft: "1px solid white",
    borderBottom: "1px solid white",
  };

  useEffect(() => {
    getData(props.dataUrl).then((data) => {
      if (data) {
        setHeaders(
          Object.keys(data[0]).map((key) => {
            return (
              <th style={cellStyle} key={nanoid()}>
                {key}
              </th>
            );
          })
        );

        setBody(
          data.map((item, index) => {
            let bodyTr = Object.values(item).map((value) => {
              return (
                <td
                  className={index % 2 === 0 ? "white" : "grey"}
                  style={cellStyle}
                  key={nanoid()}
                >
                  {value}
                </td>
              );
            });
            return <tr key={nanoid()}>{bodyTr}</tr>;
          })
        );
      }
    });
  }, [props.dataUrl]); // eslint-disable-line

  return (
    <ScrollSync>
      <div style={{ display: "flex", position: "relative" }}>
        <table style={{ width: "100%", display: "block" }}>
          <ScrollSyncPane group="horizontal">
            <thead
              style={{
                position: "sticky",
                top: 0,
                display: "block",
                width: "100%",
                overflow: "auto",
                color: "white",
                background: "black",
              }}
            >
              <tr>{headers}</tr>
            </thead>
          </ScrollSyncPane>
          <ScrollSyncPane group={["horizontal"]}>
            <tbody
              style={{
                display: "block",
                width: "100%",
                overflow: "auto",
              }}
            >
              {body}
            </tbody>
          </ScrollSyncPane>
        </table>
      </div>
    </ScrollSync>
  );
}
