let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// storyWord is story var in array form - splitting each word by its spacing
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// console.log(storyWords);

// counts how many words are in the story
let count = 0;
storyWords.forEach(word => {
    count ++;
});

// logging the count
console.log(count);

// going through the story and returning all the words that are not unnecessaryWord (literally)
storyWords = storyWords.filter(word => {
    return word !== unnecessaryWord;
}) ;


// going through the story and finding all the misspelledWord (beautifull) and replacing it with the correct spelling
storyWords = storyWords.map(word => {
    return word === misspelledWord ? 'beautiful' : word;
});


// finding the index of the badWord(78)
const badWordIndex = storyWords.findIndex(word => {
    return word === badWord;
});

// replacing key 78 (freaking) with 'really'
storyWords[78] = "really";
// console.log(badWordIndex);


// .every returns a boolean. Going through the story and checking if all words are less that 10 characters long
const lengthCheck = storyWords.every(word => {
    return word.length < 10;
});

// logs false as not all words are less than 10 characters
console.log(lengthCheck);


// finding the word greater than 10 characters and returning the word (so we know what it is) in the console. the word was breathtaking. Manually changed to stunning (in story var)
storyWords.forEach(word => {
    word.length > 10 && console.log(word);
})

// this takes the array and turns it into a string with a space between each word
console.log(storyWords.join(' '));
