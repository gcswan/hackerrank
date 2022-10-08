function checkMagazine(magazine, note) {
    if (magazine.length < note.length) return console.log('No');
    const magWords = new Map();
    
    for (let i = 0; i < magazine.length; i++) {
        if (!magWords.has(magazine[i])) magWords.set(magazine[i], 1)
        else (magWords.set(magazine[i], magWords.get(magazine[i]) + 1 ))
    }
    
    for (let j = 0; j < note.length; j++) {
        if (!magWords.has(note[j])) return console.log('No');
        else magWords.set(note[j], magWords.get(note[j]) - 1);
        if (magWords.get(note[j]) < 0) return console.log('No');
    }
    console.log('Yes')
}
