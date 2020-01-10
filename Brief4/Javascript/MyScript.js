 function validname(){
                var letters =/^[A-Za-z]+$/;
                var nom = document.getElementById("boitname").value;

                if(letters.test(nom)==true){
                        alert('Le nom est valid');
                   }
               else{
                      alert('Le nom pas valid');
                   }
                } 
                
                function validEmail(){
                    var email = document.getElementById("boiteml").value;
                    var vld = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2})+$/;
                    
                    if(vld.test(email)==true){
                        alert('Email est valid');
                      }
                   else{
                      alert('Email pas valid');
                   }
                    
                  }
                function validMesage(){
                  var msg=document.getElementById("boitmsg").value;
                  if(msg.length>250){
                          alert('Message doit etre < de 250');
                   }
                   else{
                      alert('Message est valid');
                   }
             }