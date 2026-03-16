import Lottie from 'lottie-react';
import { useState, useEffect, useRef } from 'react';

interface LordIconProps {
  name: string;
  size?: number;
  trigger?: 'hover' | 'click' | 'loop';
  className?: string;
  style?: React.CSSProperties;
}

export default function LordIcon({ name, size = 24, trigger = 'hover', className, style }: LordIconProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    fetch(`/icons/lordicon/${name}.json`)
      .then(res => res.json())
      .then(setAnimationData)
      .catch(() => {});
  }, [name]);

  if (!animationData) return <div style={{ width: size, height: size }} />;

  return (
    <div
      className={className}
      style={{ width: size, height: size, ...style }}
      onMouseEnter={() => {
        if (trigger === 'hover') lottieRef.current?.goToAndPlay(0);
      }}
      onClick={() => {
        if (trigger === 'click') lottieRef.current?.goToAndPlay(0);
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={trigger === 'loop'}
        autoplay={trigger === 'loop'}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
