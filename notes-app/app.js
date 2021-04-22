const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Ariel Waisburg');
fs.appendFileSync('notes.txt', ` and I'm learning NodeJS!!`);