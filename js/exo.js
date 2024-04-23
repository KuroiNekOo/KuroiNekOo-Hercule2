document.addEventListener("DOMContentLoaded", () => {
  const app = {

    /* =================== */
    /* ===== ETAPE 2 ===== */
    /* =================== */

    /**
     * @property {string} name - Prénom
     * @property {string} job - Métier
     * @property {number} age - Age
     * @property {number} department - Département
     * @property {number} arm - Force
     * @property {boolean} inRelationship - En relation
     * @property {Array} friends - Amis
     */
    hercule: {
      name: "Hercule",
      job: "Demi-dieu",
      age: 35,
      department: 75,
      arm: 60.5,
      inRelationship: true,
      friends: ["Jupiter", "Junon", "Alcmène", "Déjanire"],
    },

    /* =================== */
    /* ===== ETAPE 3 ===== */
    /* =================== */

    initHerculeProfil () {
      base.fillProfil(app.hercule);
      base.printFriends(app.hercule.friends);
      base.setBestFriend(app.hercule.friends[0]);
    },

    /* =================== */
    /* ===== ETAPE 4 ===== */
    /* =================== */

    createTitle () {
      const header = document.querySelector("#header-banner");
      const h1 = document.createElement("h1");
      h1.classList.add(".banner__title");
      h1.textContent = "Vous consultez le profil de Hercule";
      header.appendChild(h1);
    },

    /* =================== */
    /* ===== ETAPE 5 ===== */
    /* =================== */

    displayHerculeActivities () {
      for (let i = 0; i <= 11; i++) {
        base.displayWork(i);
      }
    },

    /* =================== */
    /* ===== ETAPE 6 ===== */
    /* =================== */

    displayHerculeDisponibilities () {
      const element = document.querySelector("#availability");
      const hour = base.getHour();
      if (hour >= 8 && hour <= 20) {
        element.textContent = "Disponible";
        element.classList.remove("off");
      } else {
        element.textContent = "Non Disponible";
        element.classList.add("off");
      }
    },

    /* =================== */
    /* ===== ETAPE 7 ===== */
    /* =================== */

    /**
     *
     * @param {string} firstname - Prénom
     * @param {number} numberDepartment - Numéro du département
     * @returns {string} - Pseudo
     */
    createPseudo (firstname, numberDepartment) {
      return `${firstname}-du-${numberDepartment}`;
    },

    displayPseudo () {
      const nameProfil = document.querySelector("#profil-name");
      nameProfil.textContent = app.createPseudo(
        app.hercule.name,
        app.hercule.department
      );
    },

    /* =================== */
    /* ===== ETAPE 8 ===== */
    /* =================== */

    displayLeftMenu () {
      const btnLeftMenu = document.querySelector("#menu-toggler");
      btnLeftMenu.addEventListener("click", function () {
        const headerBanner = document.querySelector("#header-banner");
        headerBanner.classList.toggle("banner--open");
      });
    },

    /* =================== */
    /* ===== ETAPE 9 ===== */
    /* =================== */

    sendMessage () {
      const formSendMessage = document.querySelector("#contact");
      formSendMessage.addEventListener("submit", function (e) {
        e.preventDefault();
        const doNotDisturb = document.querySelector(".do-not-disturb");
        doNotDisturb.textContent = "Hercule ne souhaite pas être dérangé";
        alert("Hercule ne souhaite pas être dérangé");
      });
    },

    /* ==================== */
    /* ===== ETAPE 10 ===== */
    /* ==================== */

    /**
     * 
     * @param {string} name - Nom (hercule ou cesar)
     * @param {number} total - Total des votes d'Hercule + Cesar
     */
    setVotes (name, total) {
      const pourcent = app.percentConverter(base.vote[name], total);
      const article = document.querySelector(`#trends-${name}`);
      article.querySelector(".people__popularity").textContent = `${pourcent}%`;
      article.querySelector(".people__bar").style.width = `${pourcent}%`;
    },

    /**
     * 
     * @param {number} fact - Nombre de votes d'Hercule ou Cesar
     * @param {number} total - Total des votes d'Hercule + Cesar
     * @returns {number} - Résultat de la formule
     */
    percentConverter (fact, total) {
      return Math.round((fact / total) * 100);
    },

    calculVotes () {
      const total = base.vote.hercule + base.vote.cesar;
      app.setVotes("hercule", total);
      app.setVotes("cesar", total);
    },

    /* ==================== */
    /* ===== ETAPE 12 ===== */
    /* ==================== */

    displayHerculeActivitiesFinished () {
      const activitiesFinished = document.querySelector("#activities");
      const tasks = activitiesFinished.querySelector("ul.tasks");
      for (let elem of base.activities) {
        if (elem["author"] === "Hercule" && elem["finished"]) {
          activitiesFinished.classList.remove("hidden");
          const task = document.createElement("li");
          task.textContent = elem["title"];
          tasks.appendChild(task);
        }
      }
    },

    /* ========================== */
    /* ===== INITIALISATION ===== */
    /* ========================== */    

    init () {
      app.createTitle();
      app.initHerculeProfil();
      app.displayHerculeActivities();
      app.displayHerculeDisponibilities();
      app.displayPseudo();
      app.displayLeftMenu();
      app.sendMessage();
      app.calculVotes();
      app.displayHerculeActivitiesFinished();
    },
  };
  app.init();
});
