import React from 'react';
import { Graph } from "react-d3-graph";
import './CharacterGraph.scss';

const CharacterGraph = (props) => {
  const data = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    links: [
        { source: "Harry", target: "Sally" },
        { source: "Harry", target: "Alice" },
    ],
};
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
      color: "lightgreen",
      size: 1000,
      highlightStrokeColor: "blue",
  },
  link: {
      highlightColor: "lightblue",
  },
  height: window.innerHeight,
  width: window.innerWidth,
};
  return (
    <div className="graph">
      <Graph
        id="graph-id"
        data={data}
        config={myConfig}
      ></Graph>
    </div>
  );
}

export default CharacterGraph;
