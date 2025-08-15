"use client";

import { View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import React, { useEffect } from "react";
import { Map as OlMap } from "ol";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import cyclingCourse from "../../public/courses/cycling.json"
import swimCourse from "../../public/courses/swim.json"
import runCourse from "../../public/courses/run.json"
import posten from "../../public/courses/posten.json"
import CircleStyle from 'ol/style/Circle'
import { useGeographic } from "ol/proj";
import Fill from "ol/style/Fill";

// example from: https://openlayers.org/en/latest/examples/ -> geojson

const pointStyle = new Style({
  image: new CircleStyle({
    radius: 3,
    fill: new Fill({ color: 'black' }),
    stroke: new Stroke({ color: 'black', width: 2 }),
  })
})

function getStyle(color: string, fill?: string) {
  return new Style({
    stroke: new Stroke({
      color: color,
      width: 3,
    }),
    fill: fill ? new Fill({ color: fill }) : undefined,
  })
}

function getLayerFromData(style: Style, data: any): VectorLayer {
  return new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(data),
    }),
    style: style
  })
}

function Route() {
  useGeographic()

  useEffect(() => {

    const osmLayer = new TileLayer({
      source: new OSM(),
    });

    const map = new OlMap({
      target: "map-container",
      layers: [
        osmLayer,
        getLayerFromData(getStyle('red'), swimCourse),
        getLayerFromData(getStyle('blue'), cyclingCourse),
        getLayerFromData(getStyle('green'), runCourse),
        // getLayerFromData(pointStyle, posten),
      ],
      view: new View({
        center: [
          8.84072874558109,
          47.60929175662309,
        ],
        zoom: 12,
      }),
    });

    return () => map.setTarget(null!);
  }, []);

  return (
    <div className="relative rounded-xl m-2 overflow-hidden">
      <div className="h-96 w-full" id="map-container" />
    </div>
  )
}

export default Route;
