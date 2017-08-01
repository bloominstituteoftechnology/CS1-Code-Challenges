
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
         this.name = options.name;
         this.hp = options.hp;
         this.strength = options.strength;
         this.speed = options.speed;
     }
     destroy() {
         console.log(`${this.name} was removed from the game`);
     }
 }

 class Humanoid  extends NPC {
     constructor(options) {
        super(options);
        this.height = options.height;
        this.sex = options.sex;
     }
     walk() {
        console.log(`${this.name} walked`);
     }
 }

 class Human extends Humanoid {
     constructor(options) {
         super(options);
         this.occupation = options.occupation;
         this.language = options.language;
         this.clan = options.clan;
     }
     shootGun() {
         console.log('boom!');
     }
 }

 class Elf extends Humanoid {
     constructor(options){
         super(options);
         this.occupation = options.occupation;
         this.language = options.language;
         this.house = options.house;
     }
     shootBow() {
         console.log('twang!');
     }
 }
///////////////////////////////////////////////////////////
 class Animal extends NPC {
     constructor(options) {
         super(options);
         this.species = options.species;
         this.habitat = options.habitat;
         this.territory = options.territory;
     }
     walk() {
        console.log(`${this.name} walked`);
     }
 }

 class Bear extends Animal {
     constructor(options) {
         super(options);
         this.type = options.type;
         this.diet = options.diet;
         this.color = options.color;
     }
     hunt() {
         console.log(`${this.name} hunts for prey during the day.`)
     }
 }
///////////////////////////////////////////////////////////////////

class Plant extends NPC {
    constructor(options) {
        super (options);
        this.region = options.region;
        this.season = options.season;
        this.poison = options.poison;
    }
}

class FleshEatingDaisy extends Plant {
    constructor(options) {
        super(options);
        this.color = options.color;
        this.lifespan = options.lifespan;
    }
    sprayPoison() {
        console.log(`Becareful ${this.name} is releasing it's poison`)
    }
}

const kiss = new FleshEatingDaisy({
  name: 'Kiss of Death',
  hp: 30,
  strength: 30,
  speed: 'stationary',
  region: 'Amazon Rainforest',
  season: 'Spring',
  poison: 'yes',
  color: 'Inviting Yellow',
  lifespan: '3 poison sprays'
});

console.log(kiss);

 const maximus = new Bear({
   name: 'Maximus Grizzly',
   hp: 75,
   strength: 90,
   speed: 65,
   species: 'Grizzly Bear',
   habitat: 'Treetop Forest',
   territory: 'California Hills',
   type: 'Black Grizzly Bear',
   diet: 'Salmon',
   color: 'Black'
 });

 const legolas = new Elf({
   hp: 30,
   strength: 5,
   speed: 10,
   height: 85,
   sex: 'male',
   occupation: 'Craftsman',
   language: 'High Elvish',
   house: 'Keebler',
   name: 'Legolas'
 });

 const bob = new Human({
   hp: 50,
   strength: 10,
   speed: 5,
   height: 80,
   sex: 'male',
   name: 'Bob the strong',
   occupation: 'Blacksmith',
   language: 'English',
   clan: 'McDonald'
 });

// console.log(maximus);
//  maximus.hunt();
//  maximus.walk();
//  maximus.destroy();

//  console.log(bob);
//  bob.shootGun();
//  bob.walk();
//  bob.destroy();

//  console.log(legolas);
//  legolas.shootBow();
//  legolas.walk();
//  legolas.destroy();