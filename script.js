const tableau_fichier = {
  classe_1_pro_hocv: {
    nom:'eval_risque_alcool.ods',
    depot:'https://cloud.dabaldassi.fr/s/kGjHmf7tgmZZZRN'
  },
  classe_1_pro_ap: {
    nom:'eval_risque_alcool.ods',
    depot:'https://cloud.dabaldassi.fr/s/m3wkLm7YmnpD4gg'
  },
  classe_2_general: {
    nom: '/',
    depot: 'https://cloud.dabaldassi.fr/s/YJQGmjcLs6rWE6t'
  },
  classe_2_pro_njpf: {
    nom: '/',
    depot: 'https://cloud.dabaldassi.fr/s/7XrmFPgGDdeZAm5'
  },
  classe_2_pro_pegc: {
    nom: 'eval macdo',
    depot: 'https://cloud.dabaldassi.fr/s/E6kTWmd9So2GP2b'
  }
}


function selection_classe(){
  var classe_nom = document.getElementById("select_classe").value;
  var input_fichier_nom = document.getElementById("fichier_nom");
  var download_fichier = document.getElementById("fichier_lien");
  var box_upload_fichier = document.getElementById("box_fichier_depot");
  var upload_fichier = document.getElementById("fichier_depot");
  // trouver le nom et le liens du depot du fichier dans le tableau de correspondance
  let fichier_nom = tableau_fichier[classe_nom].nom;
  let fichier_depot = tableau_fichier[classe_nom].depot;
  // si je n'ai pas de fichier alors je ne dois pas pouvoir telecharger
  if ( fichier_nom === undefined || (typeof fichier_nom === "string" && fichier_nom.length === 0)) {
    input_fichier_nom.value = "";
    input_fichier_nom.placeholder = "";
    download_fichier.href = "";
    download_fichier.disabled = true;
    if (!download_fichier.classList.contains("disabled")) {
      download_fichier.classList.toggle("disabled");
    }
    upload_fichier.href = "";
    if (!box_upload_fichier.classList.contains("d-none")) {
      box_upload_fichier.classList.toggle("d-none");
    }
  }// sinon je rend le bouton clicable et je met le chemin d'acces du fichier dans le href
  else{
    // mettre le nom du fichier dans l'input pour savoir ce qu'on va télécharger
    input_fichier_nom.value = fichier_nom;
    input_fichier_nom.placeholder = fichier_nom;
    download_fichier.href = "documents/"+fichier_nom;
    download_fichier.disabled = false;
    if (download_fichier.classList.contains("disabled")) {
      download_fichier.classList.toggle("disabled");
    }
    upload_fichier.href = fichier_depot;
    if (box_upload_fichier.classList.contains("d-none")) {
      box_upload_fichier.classList.toggle("d-none");
    }
  }
}

