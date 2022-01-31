import { DungeonButton } from './dungeon-button';

export class GoForwardButton implements DungeonButton {
  label = 'Go Forward';
  click = () => {
    console.log('Go Forward clicked.');
  };
}
