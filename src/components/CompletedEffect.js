import { useState, useRef, useEffect } from 'react';
import Konva from "konva";
import { Stage, Layer, Star } from 'react-konva';
import todo from '../store/todo';
import { observer } from 'mobx-react-lite';

function generateShapes() {
  return [...Array(100)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight - window.innerHeight,
    rotation: Math.random() * 180,
  }));
}

const INITIAL_STATE = generateShapes();

const CompletedEffect = observer(() => {
  const [stars, setStars] = useState(INITIAL_STATE);
  const [blink, setBlink] = useState(true);
  const [prevСompletedCount, setPrevСompletedCount] = useState(0);
  const rectRef = useRef();

  const getData = (data) => {
    let completedCount = 0;

    data.forEach(obj => {
      if (obj.completed) {
        completedCount++;
      }
    });

    return completedCount;
  }

  const neWcompletedCount = getData(todo.todos);

  if (neWcompletedCount > prevСompletedCount) {
    setPrevСompletedCount(neWcompletedCount)
    setBlink(true);
  }



  useEffect(() => {
    if (!blink) return;

    const pps = 800;
    let counter = 0;

    const anim = new Konva.Animation(frame => {

      if (counter < window.innerHeight * 2) {
        const speed = (frame.timeDiff * pps) / 1000;
        counter += speed;
        rectRef.current.y(counter);
      } else {
        setBlink(false);
      }

    }, rectRef.current.getLayer());

    anim.start();



    return () => anim.stop();

  }, [blink]);


  return (
    <Stage className="stage" width={window.innerWidth} height={window.innerHeight} style={{ display: blink ? 'block' : 'none' }}>
      <Layer ref={rectRef}>
        {stars.map((star) => (
          <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            numPoints={5}
            innerRadius={12}
            outerRadius={20}
            fill="#f37037"
            opacity={0.9}
            rotation={star.rotation}

          />
        ))}
      </Layer>
    </Stage>
  );
});

export default CompletedEffect;
