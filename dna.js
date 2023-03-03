function countLetters(dna) {
    const counts = {A: 0, C: 0, G: 0, T: 0};
  
    for (let count = 0; count < dna.length; count++) {
      counts[dna[count]]++;
    }
  
    return counts;
  }
  
  module.exports = countLetters;
  