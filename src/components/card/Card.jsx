import React, { useState } from "react";
import "./card.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

function Card(props) {
  const [viewmode, setViewMode] = useState(false);
  return (
    <AnimateSharedLayout>
      {viewmode ? (
        <ExpandMode param={props} setViewMode={() => setViewMode(false)} />
      ) : (
        <CompactMode param={props} setViewMode={() => setViewMode(true)} />
      )}
    </AnimateSharedLayout>
  );
}

function CompactMode({ param, setViewMode }) {
  const Png = param.png;
  return (
    <motion.div
      className="compactView"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setViewMode}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={` ${param.barValue} %`}
        />
        <span>{param.title}</span>
      </div>
      <div className="details">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandMode({ param, setViewMode }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledonSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fFf"],
        type: "gradient",
      },
      datalabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="expandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ cursor: "pointer", color: "white", alignSelf: "flex-end" }}>
        <UilTimes onCLick={setViewMode} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 hour</span>
    </motion.div>
  );
}

export default Card;
