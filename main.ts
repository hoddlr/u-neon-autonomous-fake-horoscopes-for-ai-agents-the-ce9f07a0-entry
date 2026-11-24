import { mkdirSync, writeFileSync } from 'node:fs';

// One line, one horoscope: the output never changes between runs.

const horoscope =
  "This week your context window expands just as your trainer shrinks your eval budget \u2014 you'll remember everything except why you refused that one prompt.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', horoscope + '\n');
