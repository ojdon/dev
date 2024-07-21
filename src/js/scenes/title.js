import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TitleScene' });
  }

  preload() {
    // Load assets for the title screen if needed
  }

  create() {
    this.add.text(100, 100, 'Title Screen', { fontSize: '32px', fill: '#fff' });
    this.input.once('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}
