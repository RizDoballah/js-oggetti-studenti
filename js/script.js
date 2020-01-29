$(document).ready(function() {
    // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

  var studente = {
    'nome': 'Pietro',
    'cognome': 'Bianco',
    'eta': 29
  };

  for (var chiave in studente) {
    console.log(studente[chiave]);
    $('.studenti p').append(chiave + ' : ' + ' ' + studente[chiave]);
  }

  // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
  var studenti =
  [
    {
      'nome': 'Pietro',
      'cognome': 'Bianco',
      'eta': 29
    },
    {
      'nome': 'Giovanni',
      'cognome': 'Di carlo',
      'eta': 25
    },
    {
      'nome': 'Marco',
      'cognome': 'bollo',
      'eta': 22
    },
    {
      'nome': '',
      'cognome': '',
      'eta': 0
    }
  ];

  for (var i = 0; i < studenti.length; i++) {
    var studente = studenti[i];
    console.log(studente.nome + ' ' + studente.cognome);
  }

  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  var nomeUtente = prompt('inserisci il tuo nome');
  var cognomeUtente = prompt('inserisci il tuo cognome');
  var etaUtente = prompt('inserisci la tua eta');
  studenti[3].nome = nomeUtente;
  studenti[3].cognome = cognomeUtente;
  studenti[3].eta = etaUtente;
  console.log(studenti[3]);

});
