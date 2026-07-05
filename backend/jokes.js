const jokes = [
  {
    id: 1,
    joke: "Why don't skeletons fight each other? They don't have the guts."
  },
  {
    id: 2,
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field."
  },
  {
    id: 3,
    joke: "Why don't eggs tell jokes? They'd crack each other up."
  },
  {
    id: 4,
    joke: "What do you call fake spaghetti? An impasta."
  },
  {
    id: 5,
    joke: "Why did the bicycle fall over? Because it was two-tired."
  },
  {
    id: 6,
    joke: "What do you call cheese that isn't yours? Nacho cheese."
  },
  {
    id: 7,
    joke: "Why can't your nose be 12 inches long? Because then it would be a foot."
  },
  {
    id: 8,
    joke: "Why did the math book look sad? Because it had too many problems."
  },
  {
    id: 9,
    joke: "What do you call a bear with no teeth? A gummy bear."
  },
  {
    id: 10,
    joke: "Why did the coffee file a police report? It got mugged."
  },
  {
    id: 11,
    joke: "How does a penguin build its house? Igloos it together."
  },
  {
    id: 12,
    joke: "What do you call a pony with a cough? A little horse."
  },
  {
    id: 13,
    joke: "What did one wall say to the other? I'll meet you at the corner."
  },
  {
    id: 14,
    joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one."
  },
  {
    id: 15,
    joke: "What do you get when you cross a snowman and a vampire? Frostbite."
  },
  {
    id: 16,
    joke: "How do you organize a space party? You planet."
  },
  {
    id: 17,
    joke: "Why do seagulls fly over the ocean? Because if they flew over the bay, we'd call them bagels."
  },
  {
    id: 18,
    joke: "What do you call a magic dog? A labracadabrador."
  },
  {
    id: 19,
    joke: "Why did the stadium get hot after the game? All of the fans left."
  },
  {
    id: 20,
    joke: "What do you call an elephant that doesn't matter? An irrelephant."
  },
  {
    id: 21,
    joke: "What do you call a factory that makes okay products? A satisfactory."
  },
  {
    id: 22,
    joke: "What did the janitor say when he jumped out of the closet? Supplies!"
  },
  {
    id: 23,
    joke: "Have you heard about the chocolate record player? It sounds pretty sweet."
  },
  {
    id: 24,
    joke: "What did the ocean say to the beach? Nothing, it just waved."
  },
  {
    id: 25,
    joke: "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans."
  },
  {
    id: 26,
    joke: "What do you call a sleeping dinosaur? A dino-snore."
  },
  {
    id: 27,
    joke: "Why did the cookie go to the hospital? Because he felt crummy."
  },
  {
    id: 28,
    joke: "What do you call a pig that does karate? A pork chop."
  },
  {
    id: 29,
    joke: "How do you make a tissue dance? You put a little boogie in it."
  },
  {
    id: 30,
    joke: "Why did the physics teacher break up with the biology teacher? There was no chemistry."
  },
  {
    id: 31,
    joke: "What did the zero say to the eight? Nice belt."
  },
  {
    id: 32,
    joke: "What do you call a lazy kangaroo? A pouch potato."
  },
  {
    id: 33,
    joke: "Why do melons have weddings? Because they cantaloupe."
  },
  {
    id: 34,
    joke: "What do you call a droid that takes the long way around? R2 detour."
  },
  {
    id: 35,
    joke: "How does a scientist freshen her breath? With experi-mints."
  },
  {
    id: 36,
    joke: "Why did the man name his dogs Rolex and Timex? Because they were watch dogs."
  },
  {
    id: 37,
    joke: "What do you call a fish wearing a bowtie? Sofishticated."
  },
  {
    id: 38,
    joke: "Why did the invisible man turn down the job offer? He couldn't see himself doing it."
  },
  {
    id: 39,
    joke: "What do you call a pile of cats? A meow-ntain."
  },
  {
    id: 40,
    joke: "Why did the tomato turn red? Because it saw the salad dressing."
  },
  {
    id: 41,
    joke: "What do you call a guy with a rubber toe? Roberto."
  },
  {
    id: 42,
    joke: "How do trees get on the internet? They log in."
  },
  {
    id: 43,
    joke: "What did the left eye say to the right eye? Between you and me, something smells."
  },
  {
    id: 44,
    joke: "Why don't skeletons watch horror movies? They don't have the stomach for it."
  },
  {
    id: 45,
    joke: "What do you call a cow with no legs? Ground beef."
  },
  {
    id: 46,
    joke: "What do you call a cow with three legs? Tri-tip."
  },
  {
    id: 47,
    joke: "What do you call a cow with a twitch? Beef jerky."
  },
  {
    id: 48,
    joke: "What do you call a shoe made of a banana? A slipper."
  },
  {
    id: 49,
    joke: "Why do bees have sticky hair? Because they use honeycombs."
  },
  {
    id: 50,
    joke: "What did the big flower say to the little flower? Hi, bud!"
  },
  {
    id: 51,
    joke: "Why did the picture go to jail? Because it was framed."
  },
  {
    id: 52,
    joke: "How do you catch a school of fish? With bookworms."
  },
  {
    id: 53,
    joke: "What is a computer's favorite snack? Microchips."
  },
  {
    id: 54,
    joke: "Why did the belt go to prison? For holding up a pair of pants."
  },
  {
    id: 55,
    joke: "What did one plate say to his friend? Dinner is on me."
  },
  {
    id: 56,
    joke: "Why did the boy eat his homework? Because his teacher said it was a piece of cake."
  },
  {
    id: 57,
    joke: "What do you call a sad strawberry? A blueberry."
  },
  {
    id: 58,
    joke: "Why did the barber win the race? He knew a shortcut."
  },
  {
    id: 59,
    joke: "What do you call a bear in the rain? A drizzly bear."
  },
  {
    id: 60,
    joke: "What do you call an alligator in a vest? An investigator."
  },
  {
    id: 61,
    joke: "Why did the mushroom go to the party? Because he was a fungi."
  },
  {
    id: 62,
    joke: "What do you call a famous turtle? A shell-ebrity."
  },
  {
    id: 63,
    joke: "Why was the broom late? It over-swept."
  },
  {
    id: 64,
    joke: "What do you call a deer with no eyes? No idea."
  },
  {
    id: 65,
    joke: "What do you call a deer with no eyes and no legs? Still no idea."
  },
  {
    id: 66,
    joke: "Why did the banana go to the doctor? Because it wasn't peeling well."
  },
  {
    id: 67,
    joke: "What is an astronaut's favorite part on a computer? The space bar."
  },
  {
    id: 68,
    joke: "What do you call a snobbish criminal going down stairs? A condescending con descending."
  },
  {
    id: 69,
    joke: "Why did the computer show up at work late? It had a hard drive."
  },
  {
    id: 70,
    joke: "What do you get from a pampered cow? Spoiled milk."
  },
  {
    id: 71,
    joke: "What do you call a snowman with a six-pack? An abdominal snowman."
  },
  {
    id: 72,
    joke: "How do you know if a vampire has a cold? He starts coffin."
  },
  {
    id: 73,
    joke: "What did the grape do when he got stepped on? He let out a little wine."
  },
  {
    id: 74,
    joke: "What do you call a singing laptop? A Dell."
  },
  {
    id: 75,
    joke: "Why did the gym close down? It just didn't work out."
  },
  {
    id: 76,
    joke: "How do you make a lemon drop? Just let it fall."
  },
  {
    id: 77,
    joke: "What do you call a can opener that doesn't work? A can't opener."
  },
  {
    id: 78,
    joke: "What do sprinters eat before a race? Nothing, they fast."
  },
  {
    id: 79,
    joke: "Why don't oysters donate to charity? Because they are shellfish."
  },
  {
    id: 80,
    joke: "What do you call a line of rabbits walking backwards? A receding hare-line."
  },
  {
    id: 81,
    joke: "What does a cloud wear under his raincoat? Thunderwear."
  },
  {
    id: 82,
    joke: "Why did the frog take the bus to work today? His car got toad."
  },
  {
    id: 83,
    joke: "What do you call a boomerang that won't come back? A stick."
  },
  {
    id: 84,
    joke: "What do you call cheese that is sad? Blue cheese."
  },
  {
    id: 85,
    joke: "Why are ghosts such bad liars? Because you can see right through them."
  },
  {
    id: 86,
    joke: "What does a zombie vegetarian eat? Grrrrrains!"
  },
  {
    id: 87,
    joke: "What do you call a bear with no ears? B."
  },
  {
    id: 88,
    joke: "Why did the coach go to the bank? To get his quarterback."
  },
  {
    id: 89,
    joke: "How does a taco say grace? Lettuce pray."
  },
  {
    id: 90,
    joke: "What do you call a thieving alligator? A crook-odile."
  },
  {
    id: 91,
    joke: "Why did the old man fall in the well? Because he couldn't see that well."
  },
  {
    id: 92,
    joke: "What do you call an everyday potato? A common-tater."
  },
  {
    id: 93,
    joke: "How do you make an octopus laugh? With ten-tickles."
  },
  {
    id: 94,
    joke: "What did the buffalo say to his son when he dropped him off at school? Bison."
  },
  {
    id: 95,
    joke: "What is a ninja's favorite type of shoes? Sneakers."
  },
  {
    id: 96,
    joke: "What do you call a bee that can't make up its mind? A maybe."
  },
  {
    id: 97,
    joke: "What do you call a blind dinosaur? Do-you-think-he-saurus."
  },
  {
    id: 98,
    joke: "What do you call a blind dinosaur's dog? Do-you-think-he-saurus rex."
  },
  {
    id: 99,
    joke: "Why did the calendar get fired? It took a month off."
  },
  {
    id: 100,
    joke: "What happens to a frog's car when it breaks down? It gets toad away."
  }
];

export default jokes;