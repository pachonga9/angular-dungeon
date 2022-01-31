import { DungeonButton } from './dungeon-button';

export class fleeButton implements DungeonButton {
  label = 'Flee';
  click = () => {
    console.log('Flee clicked.');
  };
}
