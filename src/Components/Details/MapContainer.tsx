import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { config } from "../../config/config";
import { ICoordinates } from "../../interfaces/restaurants";

interface IProps {
  coordinates?: ICoordinates;
}

const buildMap = ({ latitude, longitude }: ICoordinates) => {
  var url = `https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=640x228&maptype=roadmap&markers=color:blue%7Clabel:S%7C${latitude},${longitude}&key=${config.mapKey}`;
  return url;
};

export const MapContainer = ({ coordinates }: IProps) => {
  if (!coordinates) return null;
  const url = buildMap(coordinates);
  return <img src={url} alt="" />;
};

export default MapContainer;
