import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarryBackground = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Инициализация tsparticles
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Отслеживание изменения ширины экрана
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      background: {
        color: "#24315e",
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: { enable: false, force: 60, smooth: 10 },
          },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        move: {
          direction: "none",
          enable: true,
          outModes: "bounce",
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
          value: { min: 0.1, max: 1 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: isMobile ? { min: 0.5, max: 2 } : { min: 1, max: 5 }, // Меньше размеры на мобильных устройствах
          animation: {
            enable: true,
            speed: isMobile ? 5 : 10, // Медленнее на мобильных устройствах
            minimumValue: 0.5,
          },
        },
      },
    }),
    [isMobile]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    );
  }

  return null;
};

export default StarryBackground;
