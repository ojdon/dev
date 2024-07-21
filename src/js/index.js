import Phaser from 'phaser';
import TitleScene from './scenes/title';
import GameScene from './scenes/game';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [TitleScene, GameScene]
};

const game = new Phaser.Game(config);
