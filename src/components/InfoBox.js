import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, active, isRed, cases, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox 
            ${active && "infoBox--selected"} 
            ${isRed && "infoBox--red"}
            ${isRed && title === "Coronavirus Cases" && "infoBox--orange"}
            `}
    >
      <CardContent>
        {/* Title i.e. Coronavirus cases */}
        <Typography className="infoBox__title" color="textSecondary">
          {" "}
          {title}{" "}
        </Typography>

        {/* +120k Number of cases */}
        <h2
          className={`infoBox__cases ${
            isRed && title === "Coronavirus Cases" && "infoBox__cases--orange"
          } ${!isRed && "infoBox__cases--green"}`}
        >
          {cases}
        </h2>

        {/* 1.2M Total */}
        <Typography className="infoBox__total">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
