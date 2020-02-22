                var slideIndex = 1;
                
                function plusDivs(n) {
                  showDivs(slideIndex += n);
                }
                
                function showDivs(n) {
                    
                  var i;
                  var btn=document.getElementsByClassName("bt");
                  var x = document.getElementsByClassName("Container_slid");
                  if (n > x.length) {slideIndex = 1}
                  if (n < 1) {slideIndex = x.length}
                  for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none"; 
                    }
                  x[slideIndex-1].style.display = "block"; 
                  btn[slideIndex-1].style.backgroundColor="#E20303";
                  
                }