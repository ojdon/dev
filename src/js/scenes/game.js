import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    // Load assets for the game if needed
  }

  create() {
    this.add.text(100, 100, 'Game Screen', { fontSize: '32px', fill: '#fff' });
  }
}
