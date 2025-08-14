
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundAnimation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
       options={{
  background: { color: "#0f2027" },
  fpsLimit: 60,
  particles: {
    number: { value: 100 },
    color: { value: "#7f5af0" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    links: { enable: true, color: "#7f5af0", distance: 150, opacity: 0.4 },
    move: { enable: true, speed: 1 },
  },
}}
      className="absolute inset-0 -z-10"
    />
  );
};

export default BackgroundAnimation;
