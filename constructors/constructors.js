
/* Design several classes and their relationships for an RPG videogame.
 * Classes:
 * NPC -> Humanoid, Animal, Plant
 * Humanoid -> Human, Elf, Orc
 * Animal -> Bear, Wolf
 * Plant -> FleshEatingDaisy
 *
 * Human -> Soldier, Peasant, Bandit
 *
 * NPC should be a general class for a non-player character in the game.
 * This class will probably include general attributes like hp, strength, speed, etc.
 *
 * Humanoid, Animal, and Plant should all inherit from NPC.  The classes
 * shown to the right of the arrow are classes that will inherit
 * from those classes.
 *
 * Soldier, Peasant, and Bandit should all inherit from Human.
 *
 * Create properties for these different classes that fit with the character.
 *
 * This is how you would structure the game objects in an actual game
 * application in Unity or another similar framework.
 */

class NPC {
  constructor(props) {
    this.state = {
      name: '',
      weapon: '',
      health: '',
      strength: '',
      level: '',
    }
  }
}
// * NPC -> Humanoid, Animal, Plant
class Humanoid extends NPC {
  constructor(props) {
    super(props);
  }
}
class Animal extends NPC {
  constructor(props) {
    super(props);
  }
}
class Plant extends NPC {
  constructor(props) {
    super(props);
  }
}
// * Humanoid -> Human, Elf, Orc
class Human extends Humanoid { // Human props relative to roll of dice
  constructor(props) {
    super(props);
  }
}
class Elf extends Humanoid {
  constructor(props) {
    super(props);
  }
}
class Orc extends Humanoid {
  constructor(props) {
    super(props)
  }
}
// * Animal -> Bear, Wolf
class Bear extends Animal {
  constructor(props) {
    super(props)
  }
}
class Wolf extends Animal {
  constructor(props) {
    super(props)
  }
}
// * Plant -> FleshEatingDaisy
class FleshEatingDaisy {
  constructor(props) {
    super(props)
  }
}
