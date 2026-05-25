import { useState, useEffect } from "react";

export default function TrafficLight() {
  const [light, setLight] = useState("green");

  useEffect(() => {
    let timer;

    if (light === "green") {
      timer = setTimeout(() => setLight("yellow"), 3000);
    } else if (light === "yellow") {
      timer = setTimeout(() => setLight("red"), 2000);
    } else if (light === "red") {
      timer = setTimeout(() => setLight("green"), 4000);
    }

    return () => clearTimeout(timer);
  }, [light]);

  const getClass = (color) => {
    return `light ${color} ${light === color ? "active" : ""}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div className={getClass("red")}></div>
        <div className={getClass("yellow")}></div>
        <div className={getClass("green")}></div>
      </div>

      <style>{`
        .light {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #555;
          margin: 10px 0;
          transition: 0.3s;
        }

        .red.active {
          background: red;
          box-shadow: 0 0 20px red;
        }

        .yellow.active {
          background: yellow;
          box-shadow: 0 0 20px yellow;
        }

        .green.active {
          background: limegreen;
          box-shadow: 0 0 20px limegreen;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#222",
  },
  box: {
    background: "#333",
    padding: "20px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};