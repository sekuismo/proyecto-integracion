import React from "react";
import WorkshopMapEmbed from "../components/WorkshopMapEmbed";

const WorkshopMap = ({ mapUrl }) => {
  return mapUrl ? <WorkshopMapEmbed mapUrl={mapUrl} /> : null;
};

export default WorkshopMap;
