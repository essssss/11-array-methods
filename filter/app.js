const words = [
   'immunoelectrophoretically',
   'rotavator',
   'tsktsk',
   'psychophysicotherapeutics',
   'squirrelled',
   'crypt',
   'uncopywritable',
   'cysts',
   'pseudopseudohypoparathyroidism',
   'unimaginatively',
];

const containsVowel = function (word) {
   for (let char of word) {
      if (isVowel(char)) return true;
   }
   return false;
};

const isVowel = function (char) {
   return 'aeiou'.indexOf(char) != -1;
};

const longWords = words.filter(function (word) {
   return word.length >= 20;
});

const cOrUWords = words.filter(function (w) {
   return w[0] === 'u' || w[0] === 'c';
});

const vowelLess = words.filter(function (word) {
   return !containsVowel(word);
});

const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

const checked = Array.from(allCheckboxes).filter(function (box) {
   return box.checked;
});

const completedItems = checked.map(function (checkbox) {
   return checkbox.parentElement.innerText;
});

function extractCompletedTodos() {
   const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
   return Array.from(allCheckboxes)
      .filter(function (box) {
         return box.checked;
      })
      .map(function (checkbox) {
         return checkbox.parentElement.innerText;
      });
}
