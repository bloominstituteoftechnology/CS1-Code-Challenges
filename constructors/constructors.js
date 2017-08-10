
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
    this.hp = options.hp;
    this.strength = options.strength;
    this.speed = options.speed;
  }
  destroy() {
    console.log(`${this.name} was removed from game`);
  }
}

class Humanoid extends NPC {
  constructor(props) {
    super(props);
    this.height = props.height;
    this.sex = props.sex;
    this.name = props.name;
  }
  walk() {
    console.log(`${this.name} walked`);
  }
}

class Human extends Humanoid {
  constructor(foofie) {
    super(foofie);
    this.occupation = foofie.occuption;
    this.language = foofie.language;
    this.clan = foofie.clan;
  }
  _calculateTrajectory() {

  };
  shootGun() {
    this._calculateTrajectory();
    console.log('boom!');
  }
}

// const bob = new Human({
//   hp: 50,
//   strength: 10,
//   speed: 5,
//   height: 80,
//   sex: 'male',
//   name: 'Bob the strong',
//   occupation: 'Blacksmith',
//   language: 'English',
//   clan: 'MacDonald'
// });
// console.log(bob);
// bob.shootGun();
// bob.walk();
// bob.destroy();

class Soldier extends Human {
  constructor() {
    super();
  }
}

class Peasant extends Human {
  constructor() {
    super();
  }
}

class Bandit extends Human {
  constructor() {
    super();
  }
}

class Elf extends Humanoid {
  constructor(options) {
    super(options);
    this.occupation = options.occupation;
    this.language = options.language;
    this.house = options.house;
  }
  shootBow() {
    console.log('twang!');
  }
}

// const legolas = new Elf ({
//   hp: 30,
//   strength: 5,
//   speed: 10,
//   height: 85,
//   sex: 'male',
//   occupation: 'Craftsman',
//   language: 'High Elvish',
//   house: 'Keebler',
//   name: 'Legolas'
// })

// legolas.shootBow();
// legolas.walk();
// legolas.destroy();

class Orc extends Humanoid {
  constructor() {
    super();
  }
}

class Animal extends NPC {
  constructor() {
    super();
  }
}

class Bear extends Animal {
  constructor() {
    super();
  }
}

class Wolf extends Animal {
  constructor() {
    super();
  }
}

class Plant extends NPC {
  constructor() {
    super();
  }
}

class FleshEatingDaisy extends Plant {
  constructor() {
    super();
  }
}
