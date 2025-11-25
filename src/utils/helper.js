var nameList = [
  // South Indian
  "Prasanth",
  "Venkat",
  "Chaitanya",
  "Harish",
  "Lavanya",
  "Srinidhi",
  "Sandeep",
  "Gowtham",
  "Raghu",
  "Krishna",
  "Janaki",

  // Asian Names
  "Sakura",
  "Hiroshi",
  "Yuki",
  "Takashi",
  "Mei",
  "Yuna",
  "Riku",
  "Minho",
  "Jisoo",
  "Taemin",
  "Hana",
  "Sora",

  // Middle-East / Arabic Names
  "Ayesha",
  "Fatima",
  "Khalid",
  "Omar",
  "Zaid",
  "Aamir",

  // European Names
  "Marco",
  "Leonardo",
  "Sofia",
  "Elena",
  "Matteo",
  "Ivan",
  "Dmitri",
  "Nikolai",
  "Victoria",

  // Short names for quick chat feel
  "Leo",
  "Max",
  "Sam",
  "Amy",
  "Eva",
  "Ray",
  "Tina",
  "Nick",
  "Tom",
  "Alex",
  "Lara",
  "Nina",

  // More diverse names
  "Carlos",
  "Diego",
  "Maria",
  "Juan",
  "Gabriel",
  "Chen",
  "Wei",
  "Liang",
  "Hana",
  "Rami",
  "Layla",

  // Extra real-looking names
  "Jason",
  "Ashley",
  "Brian",
  "Sophia",
  "Dylan",
  "Tyler",
  "Natalie",
  "Chloe",
  "Hailey",
  "Zoe",

  // Telugu names (for more realism)
  "Manoj",
  "Harika",
  "Sudheer",
  "Rajesh",
  "Bhargav",
  "Sirisha",
  "Anusha",
  "Tarun",
  "Rishi",
  "Keerthi",
  "Pavan",

  // Kannada/Tamil/Malayalam
  "Ashwin",
  "Keerthana",
  "Swathi",
  "Mohan",
  "Ravi",
  "Prem",
  "Arvind",
  "Anirudh",
  "Naveena",
  "Guru",
  "Kiran Kumar",
];

const generalLiveMessages = [
  "Hi everyone 👋",
  "How are you all?",
  "Good evening!",
  "Nice to be here 😊",
  "What's up guys?",
  "LOL 😂",
  "So funny haha",
  "Okay okay 😂",
  "Good vibes only ✨",
  "Same here!",
  "True that!",
  "Exactly 👍",
  "I agree 💯",
  "Nice to meet you all!",
  "Where are you all from?",
  "Hello from India 🇮🇳",
  "This chat is fun 😄",
  "Just chilling here 😎",
  "Anyone online?",
  "Yes I'm here!",
  "Cool cool 😁",
  "Let's gooo 🔥",
  "Nice one!",
  "Good morning ☀️",
  "Good night 🌙",
  "Enjoying the chat!",
  "This is so cool 😍",
  "Love the energy!",
  "I'm new here 👋",
  "Welcome! 😄",
  "Haha good one 😂",
  "What’s happening?",
  "Nice to see you!",
  "BRB",
  "Back again!",
  "Same bro 😅",
  "Good chat today!",
  "Chill guys 😄",
  "Haha lol",
  "Interesting 😮",
  "Okay let's continue",
  "Anyone free?",
  "Yes bro!",
  "Who's still here?",
  "I'm here 🙋‍♂️",
  "Let's talk!",
  "Nice chat!",
  "Haha relatable 😂",
  "Oh really?",
  "Cool story bro 😎",
  "Nice emoji combo 😂🔥",
  "That’s funny!",
  "Idk why I’m laughing 😂",
  "Good point",
  "Agreed 👍",
  "Well said!",
  "Yesss 😁",
  "Random chat time!",
  "Who joined now?",
  "Welcome all!",
  "Love this chat 😍",
  "Peace ✌️",
  "Thanks guys!",
  "Bye guys 👋",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function makeRandomMessage() {
  return generalLiveMessages[
    Math.floor(Math.random() * generalLiveMessages.length)
  ];

  // let result = "";
  // const characters =
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  // const charactersLength = characters.length;
  // let counter = 0;

  // while (counter < length) {
  //   result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   counter += 1;
  // }
  // return result;
}
