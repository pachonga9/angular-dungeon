import { DungeonButton } from './dungeon-button';

export class FightButton implements DungeonButton {
  label = 'Fight';
  click = () => {
    console.log('Fight clicked.');
  };
}
