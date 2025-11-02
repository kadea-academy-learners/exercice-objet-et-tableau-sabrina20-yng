// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

// 📋 Tableau des utilisateurs
const users = [
  { nom: "Alice", age: 25, estAdmin: true },
  { nom: "Bob", age: 30, estAdmin: false },
  { nom: "Charlie", age: 28, estAdmin: true },
];

// 🔹 Fonction whoIsAdmin
function whoIsAdmin(utilisateurs) {
  return utilisateurs
    .filter((user) => user.estAdmin === true) // On garde seulement les admins
    .map((user) => user.nom); // On retourne uniquement leurs noms
}

module.exports = {
  whoIsAdmin,
};

// 🧪 Test :
console.log(whoIsAdmin(users));
// ✅ Résultat attendu : ["Alice", "Charlie"]



