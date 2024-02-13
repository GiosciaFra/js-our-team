// Utilizzando i dati forniti, creare un array di oggetti
// per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// Wayne Barnett	 Founder & CEO	         wayne-barnett-founder-ceo.jpg
// Angela Caroll	 Chief Editor	         angela-caroll-chief-editor.jpg
// Walter Gordon	 Office Manager	         walter-gordon-office-manager.jpg
// Angela Lopez	 Social Media Manager 	 angela-lopez-social-media-manager.jpg
// Scott Estrada	 Developer	             scott-estrada-developer.jpg
// Barbara Ramos	 Graphic Designer	     barbara-ramos-graphic-designer.jpg
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, 
// ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro!


const members = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
        
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
        
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
        
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
        
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
        
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
        
    }
]

const elementList = document.querySelector("ul");

for (let i = 0; i < members.length; i++) {

        const member = members[i];

        // creo elemento 'li'
        const listItem = document.createElement('li');
        listItem.classList.add("col-lg-3");

        // creo elemento 'card'
        const cardElement = document.createElement('div');
        cardElement.classList.add("card");

        // creo elemento 'img'
        const imgElement = document.createElement("img");
        imgElement.src = `img/${member.photo}`;

        // creo elemento 'div' per il corpo della card
        const cardBodyElement = document.createElement('div');
        cardBodyElement.classList.add("card-body");

        // creo elemento 'h5' per il nome dei membri del team
        const nameElement = document.createElement('h2');
        nameElement.classList.add("card-title");
        nameElement.textContent = member.name;

        //creo elemento 'p' per il ruolo dei membri del team
        const roleElement = document.createElement('p');
        roleElement.classList.add("card-role");
        roleElement.textContent = member.role;

        // aggiungo gli elementi alla card
        cardBodyElement.appendChild(nameElement);
        cardBodyElement.appendChild(roleElement);
        cardElement.appendChild(imgElement);
        cardElement.appendChild(cardBodyElement);

        // aggiungo la card a 'li'
        listItem.appendChild(cardElement);

        
        elementList.appendChild(listItem);

}