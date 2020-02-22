function password(){

    var mdps=document.getElementById("mdps").value;
    var cnfrm=document.getElementById("cnfrm").value;
    if(mdps != cnfrm){
        alert("mot de pass pas correct");
    }
}

function validEmail(){
                        var email = document.getElementById("email").value;
                        var vld = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2})+$/;
                        
                        if(vld.test(email)!=true){
                            alert('Email pas valid');
                          }
                      
                        
                      }


                      function validname(){
                                        var letters =/^[A-Za-z]+$/;
                                        var nom = document.getElementById("nom").value;
                                        var prenom = document.getElementById("prenom").value;
                        
                                        if(letters.test(nom)!=true){
                                            alert('Le nom pas  valid');
                                       }
                                       if(letters.test(prenom)!=true){
                                        alert('Le prenom pas  valid');
                                   }
                                       
                            } 