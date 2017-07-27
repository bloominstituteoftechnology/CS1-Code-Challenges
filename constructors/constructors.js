
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
  constructor() {
    this.stats = {
      health: 5,
      strength: 5,
      defense: 5,
      speed: 5,
      intelligence: 5
    };
  }
 }

  class Human {
  constructor() {
    this.job = {

    };
    this.stats = {
      health: 10,
      strength: 10,
      defense: 10,
      speed: 10,
      intelligence: 10
    };
  }
 }

   class Soldier extends Human {
  constructor() {
    super()
      this.job.job = soldier
      this.stats = {
        health: 20
        strength: 15
        defense: 15
        speed: 15
        intelligence: 10
      };
    };
  }
 }

 Jeff = new Soldier();
 console.log(Jeff); 