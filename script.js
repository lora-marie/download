const tableau_fichier = {
  classe_1_pro_hocv: '',
  classe_1_pro_ap: 'eval_risque_alcool.ods',
  classe_2_general: '',
  classe_2_pro_njpf: '',
  classe_2_pro_pegc: ''
}


function selection_classe(){
  var classe_nom = document.getElementById("select_classe").value;
  console.log(classe_nom);
  let fichier_nom = tableau_fichier[classe_nom];
  console.log(fichier_nom);
  var input_fichier_nom = document.getElementById ("fichier_nom");
  input_fichier_nom.placeholder = fichier_nom;
  
}
function telecharger_fichier(){
  
}
