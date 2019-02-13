import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Star, Line } from 'react-konva';

class KonvaApp extends Component {
  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {[...Array(40)].map(i => (
            <Star
              key={i}
              x={Math.random() * window.innerWidth}
              y={Math.random() * window.innerHeight}
              numPoints={3}
              innerRadius={20}
              outerRadius={40}
              fill="#241BE4"
              opacity={0.8}
              draggable
              rotation={Math.random() * 180}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.3}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
            />
          ))}
          {[...Array(40)].map(i => (
            <Line 
              key={i}
              x={Math.random() * window.innerWidth}
              y={Math.random() * window.innerWidth}
              points={[Math.random() *73, Math.random() *100, Math.random() *340, 23]}
              stroke="#241BE4"
              tension={1}
              draggable
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd} 
            />
          ))}
        </Layer>
      </Stage>
    );
  }
}

export default KonvaApp