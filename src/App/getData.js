import { random, randomItem } from '@danehansen/math';
import sharedStyles from 'styles/shared.module.scss';

// this entire file is producing randomized simulated data

// calculating the max size image we need
const CARD_IMG_HEIGHT = parseInt(sharedStyles.cardImgHeight);
const CARD_IMG_MAX_WIDTH = parseInt(sharedStyles.cardWidth) * 2 + parseInt(sharedStyles.cardGap) - 1;

function generateRandomWords(num) {
  const words = [];

  for (let i = 0; i < num; i++) {
    words.push(generateRandomWord());
  }

  return words.join(' ');
}

function generateRandomWord() {
  let str = '';
  const consonants = 'bcdfghjklmnpqrstvwxz';
  const vowels = 'aeiou';
  const length = random(1, 10, true, 2);
  // randomly choose to begin with consonant vs vowel
  const offset = Math.round(Math.random());

  for(let i = 0; i < length; i++) {
    if ((i + offset) % 2) {
      str += randomItem(vowels);
    } else {
      str += randomItem(consonants);
    }

    if (i === 0) {
      str = str.toUpperCase();
    }
  }

  return str;
}

function generateRandomObject() {
  const id = Math.round(Math.random()* 899999999)+ 100000000;

  return {
    author: generateRandomWords(2),
    id,
    src: `https://picsum.photos/${CARD_IMG_MAX_WIDTH}/${CARD_IMG_HEIGHT}?random=${id}`,
    subtitle: generateRandomWords(random(4, 6, true)),
    title: generateRandomWords(random(2, 4, true)),
    url: `https://${generateRandomWord().toLowerCase()}.com`,
  };
}

export default function getData(num) {
  const datas = [];

  for (let i = 0; i < num; i++) {
    let obj;

    // make sure theres no duplicate ids
    do {
      obj = generateRandomObject();
    } while (datas.find(function({id}) {return id === obj.id}))

    datas.push(obj);
  }

  return datas;
}
