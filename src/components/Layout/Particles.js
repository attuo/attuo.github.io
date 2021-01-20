import React from "react";
import styled from "styled-components";
import TSParticles from "react-tsparticles";

const ParticlesContainer = styled(TSParticles)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Particles = () => (
  <ParticlesContainer id="tsparticles"
    options = {{
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.1,
            speed: 0.2
          }
        },
      },
      particles: {
        color: {
          value: "#bdbdbd"
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200
            }
          },
          direction: "bottom",
          enable: true,
          outModes: {
            bottom: "out",
            left: "out",
            right: "out",
            top: "out"
          }
        },
        number: {
          density: {
            enable: true
          },
          value: 100
        },
        opacity: {
          random: {
            enable: true
          },
          value: 0.5,
          animation: {
            minimumValue: 0.1,
            speed: 0.4
          }
        },
        shape: {
          options: {
            polygon: {
              nb_sides: 5
            },
            star: {
              nb_sides: 5
            },
          }
        },
        size: {
          random: {
            enable: true
          },
          value: 6,
          animation: {
            minimumValue: 0.1,
            speed: 10
          }
        },
      },
      detectRetina: true
    }}
  />
);

export default Particles;