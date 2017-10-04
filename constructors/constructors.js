
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
  constructor(options) {
    this.power = options.power;
    this.speed = options.speed

  }
  delete() {
    `${this.name} has been removed from the game`;
  }
}

class Humanoid extends NPC {
  constructor(options) {
    super(options);
    this.name = options.name;
    this.height = options.height;
    this.gender = options.gender;
  }
  walk() {
    `${this.name} is walking`;
  }
}

class Human extends Humanoid {
  constructor(options) {
    this.language = options.language;
    this.liniage = options.liniage;
  }
  talk() {
    `${this.name} is talking ${this.language}`
  }
}

class Elf extends Humanoid {
  constructor(options) {
    this.clan = options.clan;
  }
  shootBow() {
    `${this.name} shot a bow!`;
  }
}

class Orc extends Humanoid {
  constructor(options) {
    this.tribe = options,tribe;
  }
  swingSword() {
    `${this.name} swung a sword!`;
  }
}
