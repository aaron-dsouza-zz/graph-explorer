import React from 'react';
import { Graph } from "react-d3-graph";
import './CharacterGraph.scss';

const CharacterGraph = (props) => {

const decorateGraphNodesWithInitialPositioning = nodes => {
  return nodes.map(n =>
      Object.assign({}, n, {
          x: n.x || Math.floor(Math.random() * 1000),
          y: n.y || Math.floor(Math.random() * 1000),
      })
  );
};
const data = {
    nodes: decorateGraphNodesWithInitialPositioning(props.characters),
};
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
      color: "lightblue",
      size: 1500,
      fontSize: 12,
      highlightFontSize: 12,
      highlightStrokeColor: "blue",
      labelProperty: "name", 
  },
  link: {
      highlightColor: "red",
  },
  height: window.innerHeight,
  width: window.innerWidth,
  automaticRearrangeAfterDropNode: true,
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
