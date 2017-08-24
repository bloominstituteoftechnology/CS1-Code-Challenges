
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
    this.strength = options.strength;
    this.speed = options.speed;
    this.hp = options.hp;
    this.agility = options.agility;
    this.magicAbility = options.magicAbility;
  }
 }

 class Humanoid extends NPC{
   constructor(options) {
     super(options);
     this.weight = options.weight;
     this.eyeColor = options.eyeColor;
   }
 }

 class Human extends Humanoid {
   constructor(options) {
     super(options);
     this.job = options.job;
   }
 }

 class Soldier extends Human {
   constructor(props) {
     super(props);
     this.ability = options.ability;
   }
 }

 class Peasant extends Human {
   constructor(props) {
     super(props);
     this.clan = options.clan;
   }
 }

 class Bandit extends Human {
   constructor(props) {
     super(props);
     this.stealth = options.stealth;
   }
 }

 class Elf extends Humanoid {
   constructor(props) {
     super(props);
     this.spellStrength = options.spellStrength;
   }
 }

 class Orc extends Humanoid {
   constructor(props) {
     super(props);
     this.attack = options.attack
   }
 }

 class Animal extends NPC {
   constructor(props) {
     super(props);
     this.hasFur = optins.hasFur;
   }
 }

 class Bear extends Animal {
   constructor(props) {
     super(props);
     this.bite = options.bite;
   }
 }

 class Wolf extends Animal {
   constructor(props) {
     super(props);
     this.sprint = options.sprint;
   }
 }

 class Plant extends NPC {
   constructor(props) {
     super(props);
     this.color = options.color;
   }
 }

 class FleshEatingDaisy extends Plant {
   constructor(props) {
     super(props);
     this.poison = options.poison;
   }
 }

