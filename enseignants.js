
const enseignants = [
    { nom: "ABDELOUAHED Touhami", email: "abdelouahed.touhami@univ-bechar.dz" },
    { nom: "Abdeslame Djamila", email: "abdeslamdj@yahoo.fr" },
    { nom: "ACHELI DALILA", email: "d.acheli@univ-boumerdes.dz" },
    { nom: "AHRICHE Aimad", email: "a.ahriche@univ-boumerdes.dz" },
    { nom: "Aibeche Abderrezak", email: "aibeche_umbb@univ-boumerdes.dz" },
    { nom: "AICHOUNE Nadia", email: "nadiachn641@gmail.com" },
    { nom: "AKLIOUAT Hacene", email: "h.akliouat@univ-boumerdes.dz" },
    { nom: "AKROUM Hamza", email: "akroum@univ-boumerdes.dz" },
    { nom: "AMMAR Mohamed", email: "m.ammar@univ-boumerdes.dz" },
    { nom: "Azzouza Asma", email: "a.azzouza@univ-boumerdes.dz" },
    { nom: "BAICHE Karim", email: "kbaiche@univ-boumerdes.dz" },
    { nom: "Belaoura Widad", email: "w.belaoura@univ-boumerdes.dz" },
    { nom: "Belkacem Samia", email: "s.belkacem@univ-boumerdes.dz" },
    { nom: "BENSAFI Noureddine", email: "n.bensafi@univ-boumerdes.dz" },
    { nom: "Boubezari Meriem", email: "boubezarimery@gmail.com" },
    { nom: "BOUDOUDA Aimad", email: "a.boudouda@univ-boumerdes.dz" },
    { nom: "Boulanouar Hasna", email: "hasna_res@yahoo.fr" },
    { nom: "BOUMERIDJA Hafida", email: "h.boumeridja@univ-boumerdes.dz" },
    { nom: "Cherrat Nidhal", email: "cherratnidhal@yahoo.fr" },
    { nom: "DAFEUR Hakim", email: "hakimdafeur@yahoo.fr" },
    { nom: "DICHOU Karima", email: "dichou.karima2014@gmail.com" },
    { nom: "Gabour Nour el houda", email: "n.gabour@univ-boumerdes.dz" },
    { nom: "DJALAB Aicha", email: "a.djalab@univ-boumerdes.dz" },
    { nom: "FELLAG SID ALI", email: "s.fellag@univ-boumerdes.dz" },
    { nom: "Hamadache Moussa", email: "m.hamadache2@univ-boumerdes.dz" },
    { nom: "HAMEL Meziane", email: "m.hamel@univ-boumerdes.dz" },
    { nom: "HAROUN Radia", email: "rd_haroun@yahoo.fr" },
    { nom: "Harrar Khaled", email: "khaled.harrar@univ-boumerdes.dz" },
    { nom: "Hedir Mehdia", email: "m.hedir@univ-boumerdes.dz" },
    { nom: "Herbadji Wafa", email: "w.herbadji@univ-boumerdes.dz" },
    { nom: "HOCINE Faiza", email: "faiza_ho@yahoo.fr" },
    { nom: "IKHLEF Boualem", email: "b.ikhlef@univ-boumerdes.dz" },
    { nom: "Kacimi Nora", email: "n.kacimi@univ-boumerdes.dz" },
    { nom: "Kessaissia Karima", email: "k.kessaissia@univ-boumerdes.dz" },
    { nom: "KHELOUAT Lila", email: "l.khelouat@univ-boumerdes.dz" },
    { nom: "Zina Larabi", email: "z.larabi@univ-boumerdes.dz" },
    { nom: "LATRECHE Sadjia", email: "s.latreche@univ-boumerdes.dz" },
    { nom: "Madaci Bouthaina", email: "bouthainamadaci@gmail.com" },
    { nom: "Mahdi Ismahane", email: "ismahane.mahdi@univ-boumerdes.dz" },
    { nom: "MASSOUT Samia", email: "af_samia@yahoo.fr" },
    { nom: "MECHID Samira", email: "s.mechid@univ-boumerdes.dz" },
    { nom: "MEKKI Houria", email: "h.mekki@univ-boumerdes.dz" },
    { nom: "MERAIHI Yassine", email: "y.meraihi@univ-boumerdes.dz" },
    { nom: "Meskine Khedidja", email: "k.meskine@univ-boumerdes.dz" },
    { nom: "ZEBLAH Rebiha", email: "r.zeblah@univ-boumerdes.dz" },
    { nom: "MILOUDI Lalia", email: "lamiloudi@univ-boumerdes.dz" },
    { nom: "M'ZIOU Nassima", email: "n.mziou@univ-boumerdes.dz" },
    { nom: "NECHAF Hassiba", email: "h.nechaf@univ-boumerdes.dz" },
    { nom: "NEKKAA MESSAOUDA", email: "m.nekkaa@univ-boumerdes.dz" },
    { nom: "Nezzal Amel", email: "amelnezzal@gmail.com" },
    { nom: "RAHMOUNE Fayçal", email: "faycal.rahmoune@univ-boumerdes.dz" },
    { nom: "RIACHE SAMAH", email: "samahriache@univ-boumerdes.dz" },
    { nom: "Ibticeme SEDJELMACI", email: "i.sedjelmaci@univ-boumerdes.dz" },
    { nom: "TOUATI Zineeddine", email: "z.touati@univ-boumerdes.dz" },
    { nom: "Toubal Maamar Alla Eddine", email: "a.toubalmaamar@univ-boumerdes.dz" },
    { nom: "Triki Yacine", email: "y.triki@univ-boumerdes.dz" },
    { nom: "YAKHELEF Yassine", email: "y.yakhelef@univ-boumerdes.dz" },
    { nom: "ZAHAF Abdelmalek", email: "zahaf.abdelmalek@univ-boumerdes.dz" },
    { nom: "ZERROUKI Fodil", email: "f.zerrouki@univ-boumerdes.dz" },
    { nom: "YAHIAOUI Amina Fatima zahra", email: "am.yahiaoui@univ-boumerdes.dz" },
    { nom: "MESSAOUDENE KHADIDJA", email: "k.messaoudene@univ-boumerdes.dz" },
    { nom: "HAMMACHI Radhouane", email: "r.hammachi@univ-boumerdes.dz" },
    { nom: "Touahria Rima", email: "touahria.rimaa@gmail.com" },
    { nom: "AKKOUCHE Katia", email: "katia.akk28@gmail.com" },
    { nom: "Allaouchiche Nesrine", email: "allaouchicheserine18@gmail.com" },
    { nom: "AMRAOUI, Sabrina", email: "sabrina.amraoui@ummto.dz" },
    { nom: "Arezki Aziz", email: "arezkiaziz02@gmail.com" },
    { nom: "Azzougui Safia", email: "safiaazzougui@gmail.com" },
    { nom: "BELHABCHIA Malik", email: "m.belhabchia@univ-boumerdes.dz" },
    { nom: "Benaissa Alaeddine", email: "atefdin@gmail.com" },
    { nom: "Benmansour Radja", email: "radjaben27@gmail.com" },
    { nom: "Legbedj Asma", email: "legbedjasma@gmail.com" },
    { nom: "Benmechirah Tasnime", email: "tasnimebenmechirah@gmail.com" },
    { nom: "BENNIA Fatima", email: "f.bennia@univ-boumerdes.dz" },
    { nom: "Besmi fatma zohra", email: "f.besmi@univ-boumerdes.dz" },
    { nom: "Bouaraki Nacira", email: "bounaci456@gmail.com" },
    { nom: "Bougeuttaya Sara", email: "bougeuttayasara026@gmail.com" },
    { nom: "Hocine Chebi", email: "chebi.hocine@yahoo.fr" },
    { nom: "MABROUK DJEDDI", email: "djeddimabrouk@yahoo.com" },
    { nom: "Ratiba Fellag", email: "fellagratiba@gmail.com" },
    { nom: "FOURA Imane", email: "i.foura@univ-boumerdes.dz" },
    { nom: "Gadouche Zoubir", email: "gadouche.zoubir@gmail.com" },
    { nom: "Hamdani Baya", email: "bhamdani_ise@yahoo.com" },
    { nom: "Kameche Karima", email: "kameche_karima@yahoo.fr" },
    { nom: "khalfaoui Faycal", email: "khalfaouifaycalingm@gmail.com" },
    { nom: "Kheniche Lylia", email: "kheniche.lylia95@gmail.com" },
    { nom: "Laouar Maroua", email: "maroualaouar.tlcb@gmail.com" },
    { nom: "Fares Belynda", email: "faresbelynda32@gmail.com" },
    { nom: "MAHSAS Nesrine", email: "mahsasnesrine2020@gmail.com" },
    { nom: "Mebrek Lisa", email: "Lisamebrek63@gmail.com" },
    { nom: "MELOUSSI Mounir", email: "m.meloussi@univ-boumerdes.dz" },
    { nom: "MOUSSAOUI Siham", email: "s.moussaoui@univ-boumerdes.dz" },
    { nom: "Nabi Zahia", email: "z.nabi.ensg@gmail.com" },
    { nom: "Yahiaoui Manel", email: "manel.manel.yh@gmail.com" },
    { nom: "RADJEF Lilia", email: "l.radjef@univ-boumerdes.dz" },
    { nom: "RAHMOUNE Adel", email: "ad.rahmoune@univ-boumerdes.dz" },
    { nom: "Rahmoune Chamseddine", email: "Ch.rahmoune@univ-boumerdes.dz" },
    { nom: "Rezkallahi Menouer", email: "rezkkallahimenouer@gmail.com" },
    { nom: "Sai Meriem", email: "saimeriem199@gmail.com" },
    { nom: "Si mohamed Kamelia", email: "kameliasimohamed@gmail.com" },
    { nom: "Tarzi Mouna", email: "tarzimouna26@gmail.com" },
    { nom: "ZERMOUT Abdelaziz", email: "az.zermout@univ-boumerdes.dz" },
    { nom: "Ziane Sarah", email: "sarahziane31@gmail.com" },
    { nom: "Guelifet Haoua", email: "haouaguelifet@gmail.com" },
    { nom: "Berouaken Yousra", email: "berouakenyousra@gmail.com" },
    { nom: "KHODJA KHALIDA", email: "khalidakhodja@outlook.com" },
    { nom: "Koufi Ziad", email: "koufiziad43@gmail.com" },
    { nom: "Hamouni Houda", email: "hamounihouda@gmail.com" },
    { nom: "Nadjeh Lina", email: "lina12nadjeh@gmail.com" },
    { nom: "Mahsas Maroua", email: "mahsasmaroua50@gmail.com" },
    { nom: "Kader Wissam", email: "kader.wissam.st.05@gmail.com" },
    { nom: "Aissani Imene", email: "aissaniimene12@gmail.com" },
    { nom: "Gaceb Yousra", email: "gacebyousra8@gmail.com" },
    { nom: "Bouzegzeg Yasmine", email: "yasmin.bouzegzeg@gmail.com" },
    { nom: "RACHDA EL TAANI", email: "r.eltaani@univ-boumerdes.dz" },
    { nom: "KABACHE Sabah", email: "sabahkabache@gmail.com" },
    { nom: "Saidi Dihia", email: "dihiasaidi59@gmail.com" },
    { nom: "Taleb Faddi", email: "fadditaleb@gmail.com" },
    { nom: "Guellal Meriem", email: "m.guellal@univ-boumerdes.dz" },
    { nom: "Amam Wissal", email: "wissal.amam@gmail.com" },
    { nom: "BOUTADJINE Ahmed", email: "boutadjine92@gmail.com" },
    { nom: "Belkessa Maya", email: "belkessa.maya.st.14@gmail.com" },
    { nom: "Berouaken Nesrine", email: "berouakennesrine@gmail.com" },
    { nom: "Khelifi Cheima", email: "khelificheima9@gmail.com" },
    { nom: "Boubakri Lamine", email: "mstboubakri@gmail.com" },
    { nom: "Kassouri Lydia", email: "kassourilydia53@gmail.com" },
    { nom: "Aklil Ikram", email: "i.aklil@univ-boumerdes.dz" },
    { nom: "Bounechache Foudil", email: "foudilbounchache@gmail.com" },
    { nom: "Grine Ali", email: "aligrine@yahoo.fr" },
    { nom: "Guedifa Réda", email: "r.guedifa@univ-boumerdes.dz" },
    { nom: "Zara Abdeldjebar", email: "a.zara@univ-boumerdes.dz" },
    { nom: "Belhadj Safia", email: "belhadj.safia.st.32@gmail.com" },
    { nom: "HADIDI Anfel", email: "a.hadidi@univ-boumerdes.dz" },
    { nom: "FELLAH Sidra", email: "fellahsidratel@gmail.com" },
    { nom: "Boukri Yousra", email: "yousraboukri99@gmail.com" },
    { nom: "Layachi Maroua", email: "layachi.marouaa@gmail.com" },
    { nom: "Kechouane Manel", email: "kechouane.manel56@gmail.com" },
    { nom: "Bouzerkoune Hana", email: "hanabouz03@gmail.com" },
    { nom: "Ladjici Nourelhouda", email: "ladjicinourelhouda23@gmail.com" },
    { nom: "IRINISLIMANE Maissa", email: "maissaromi66@gmail.com" }
];

const liste = document.getElementById("liste-enseignants");
const recherche = document.getElementById("recherche");

function afficherEnseignants(mot = "") {
    const resultat = enseignants.filter(enseignant =>
        enseignant.nom.toLowerCase().includes(mot.toLowerCase())
    );

    liste.innerHTML = "";

    if (resultat.length === 0) {
        liste.innerHTML = "<p>Aucun enseignant trouvé.</p>";
        return;
    }

    resultat.forEach(enseignant => {
        const carte = document.createElement("div");
        carte.className = "carte-enseignant";

        const nom = document.createElement("h3");
        nom.textContent = enseignant.nom;

        const email = document.createElement("p");
        email.textContent = enseignant.email;

        const contact = document.createElement("a");
        contact.href = "mailto:" + enseignant.email;
        contact.textContent = "Contacter l'enseignant";

        carte.appendChild(nom);
        carte.appendChild(email);
        carte.appendChild(contact);

        liste.appendChild(carte);
    });
}

recherche.addEventListener("input", function () {
    afficherEnseignants(this.value);
});

afficherEnseignants();
