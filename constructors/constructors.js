
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
  constructor(options){
    this.hitpoints: options.hitpoints,
    this.currentHits: options.currentHits,
    this.strength: options.strength,
    this.mp: options.mp
  }
  destroy() {}
}
// ************************************
class Plant extends NPC {
  constructor(options) {
    super();
  }
}

class FleshEatingDaisy extends Plant {
  constructor(options) {
    super();
  }
}
// ***********************************
class Animal extends NPC {
  constructor() {
    super();
  }
  findClosesbyRange(currentPosition){
    if(target) {
    }
  }
  speak(){
    return 'Roaarrrrr';
  }
}

class Bear extends Animal {
  constructor() {
    super();
    hitpoints: 5000,
  }
}

class Wolf extends Animal {
  constructor() {
    super();
    hitpoints: 2000,
  }
}
// ***********************************
class Humanoid extends NPC {
  constructor(options) {
    super(options);
    this.height: options.height,
    this.gender: options.gender,
    gear: {
      head: null,
      back: linenTunic,
      legs: plainPants.
      feet: boots,
      accessories: null,
    },
    weapon: {
      leftHand: null,
      rightHand: null,
    },
    attackType: null,
    resists: null,
    this.occupation: options.occupation,
  }
  speak(){
    return 'Ahhhh';
  }
  walk(){}
}
class Elf extends Humanoid {
  constructor() {
    super();
    hitpoints: 700,
    attackType: heal,
    resists: magic,
  }
}

class Orc extends Humanoid {
  constructor() {
    super();
    hitpoints: 1200,
    attackType: smash,
    resists: physicalAttack,
  }
}

class Human extends Humanoid {
  constructor(options) {
    super(options);
    this.clan = options.clan,
    this.language = options.language,
    this.name = options.name
  }
}
// ********************************
class Soldier extends Human {
  constructor() {
    super();
    hitpoints: 1000,
    attackType: weapon,
  }
  shootGun() {}
}

class Bandit extends Human {
  constructor() {
    super();
    hitpoints: 500,
    attackType: steal
  }
}

class Peasant extends Human {
  constructor() {
    super();
    hitpoints: 500,
    attackType: magic,
    resists: physicalAttack && magic,
  }
}


const bob = new Human({
  hp: 50,
  strength: 10,
  speed: 5,
  height: 80,
  etc, etc...
