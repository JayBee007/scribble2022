import Phaser from "phaser";

export default {
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#33A5E7",
  scale: {
    width: 400,
    height: 300,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: {
    pixelArt: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 750,
      },
      //   debug: true,
      //   debugShowVelocity: true,
      //   debugShowBody: true,
      //   debugShowStaticBody: true,
    },
  },
};