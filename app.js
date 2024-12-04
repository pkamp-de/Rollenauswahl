// Daten für die Rollen
const roles = {
  "Waschfrau": "Du beginnst das Spiel mit dem Wissen, dass einer von zwei Spielern ein bestimmter Dorfbewohner ist.",
  "Bibliothekar": "Du beginnst das Spiel mit dem Wissen, dass einer von zwei Spielern ein bestimmter Außenseiter ist.",
  "Chefkoch": "Du beginnst das Spiel mit dem Wissen, wie viele Paare von bösen Spielern es gibt.",
  "Kobold": "Wähle jede Nacht einen Spieler: Dieser stirbt. Wenn du dich selbst tötest, wird ein Handlanger zum Kobold.",
};

// Initiale UI-Elemente
const app = document.getElementById('app');
const selectedRoles = new Set();

const createRoleCard = (role) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${role}</h3>
    <p>${roles[role]}</p>
  `;
  card.onclick = () => {
    selectedRoles.has(role) ? selectedRoles.delete(role) : selectedRoles.add(role);
    renderSelection();
  };
  return card;
};

const renderSelection = () => {
  app.innerHTML = `
    <h1>Rollenauswahl</h1>
    <div class="grid">
      ${Object.keys(roles).map(role => createRoleCard(role).outerHTML).join('')}
    </div>
    <button id="start-game" ${selectedRoles.size === 0 ? 'disabled' : ''}>
      Spiel starten (${selectedRoles.size} ausgewählt)
    </button>
  `;
};

renderSelection();
