class Studente {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.voti = [];
    }

    aggiungiVoto(punteggio, data) {
        this.voti.push({ punteggio, data });
    }

    modificaVoto(index, nuovoPunteggio, nuovaData) {
        if (index >= 0 && index < this.voti.length) {
            this.voti[index] = { punteggio: nuovoPunteggio, data: nuovaData };
        } else {
            console.error("Indice voto non valido");
        }
    }

    rimuoviVoto(index) {
        if (index >= 0 && index < this.voti.length) {
            this.voti.splice(index, 1);
        } else {
            console.error("Indice voto non valido");
        }
    }
}

class RegistroClasse {
    constructor() {
        this.studenti = [];
    }

    aggiungiStudente(nome, cognome) {
        const nuovoStudente = new Studente(nome, cognome);
        this.studenti.push(nuovoStudente);
        return nuovoStudente;
    }

    visualizzaStudenti() {
        return this.studenti.map(studente => `${studente.nome} ${studente.cognome}`);
    }

    modificaStudente(index, nuovoNome, nuovoCognome) {
        if (index >= 0 && index < this.studenti.length) {
            const studente = this.studenti[index];
            studente.nome = nuovoNome;
            studente.cognome = nuovoCognome;
        } else {
            console.error("Indice studente non valido");
        }
    }

    rimuoviStudente(index) {
        if (index >= 0 && index < this.studenti.length) {
            this.studenti.splice(index, 1);
        } else {
            console.error("Indice studente non valido");
        }
    }
}

// Esempio di utilizzo
const registro = new RegistroClasse();

const studente1 = registro.aggiungiStudente("Mario", "Rossi");
studente1.aggiungiVoto(8, "2023-01-10");
studente1.aggiungiVoto(9, "2023-02-05");

const studente2 = registro.aggiungiStudente("Luca", "Verdi");
studente2.aggiungiVoto(7, "2023-01-15");
studente2.aggiungiVoto(10, "2023-02-08");

console.log(registro.visualizzaStudenti());

studente1.modificaVoto(0, 10, "2023-01-10");
console.log(studente1.voti);

registro.modificaStudente(1, "Paolo", "Bianchi");
console.log(registro.visualizzaStudenti());

registro.rimuoviStudente(0);
console.log(registro.visualizzaStudenti());
