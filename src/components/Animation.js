import React from "react";
import Konva from "konva";
import { Stage, Layer, Rect } from "react-konva";

const Animation = () => {
  const rectRef = React.useRef();
  const [blink, setBlink] = React.useState(false);

  React.useEffect(() => {
    if (!blink) {
      return;
    }

    // const period = 300;
    // const anim = new Konva.Animation(frame => {
    //   rectRef.current.opacity((Math.sin(frame.time / period) + 1) / 2);
    // }, rectRef.current.getLayer());

    const angularSpeed = 90;
    let counter = 0;
    let pps = 200;
    let direct = 1;


    const anim = new Konva.Animation(frame => {
      //let angleDiff = (frame.timeDiff * angularSpeed) / 1000 ;
      let speed = (frame.timeDiff * pps) / 1000 * direct;
      console.log('speed: ', speed);
      counter += speed;
      rectRef.current.y(counter);
    }, rectRef.current.getLayer());

    const layer = rectRef.current.getLayer();

    const eachFrame = () => {
      console.log('ok: ',)
    }

    //const anim = new Konva.Animation(eachFrame, layer);

    anim.start();
    return () => {
      anim.stop();
    };
  }, [blink]);

  return (
    <div>
      <input
        type="checkbox"
        checked={blink}
        onChange={e => {
          setBlink(e.target.checked);
        }}
      />{" "}
      Blinking?
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={20}
            width={50}
            height={50}
            fill="green"
            ref={rectRef}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Animation;
