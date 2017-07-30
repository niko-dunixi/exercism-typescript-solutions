class Transcriptor {

  constructor() {
  }

  toRna(dna: string): string {
    let rna = '';
    for (let gene of dna) {
      if (gene === 'G') {
        rna += 'C';
      } else if (gene === 'C') {
        rna += 'G';
      } else if (gene === 'T') {
        rna += 'A';
      } else if (gene === 'A') {
        rna += 'U';
      } else {
        throw 'Invalid input DNA.';
      }
    }
    return rna;
  }
}

export default Transcriptor;
