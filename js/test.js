
    

    if (matchMedia("screen and (min-width: 1000px)").matches) {

        $(function(){
            document.getElementById('lol1').onclick=function(){
                document.getElementById("overlay1").style.width = "100%";
                document.getElementById("overlay1").style.display = "block";
                document.getElementById("overlay1").style.position = "fixed";
                document.getElementById("logo").style.opacity = "0";
            }
        
            document.getElementById('can1').onclick=function(){
                document.getElementById("overlay1").style.width = "0%";
                document.getElementById("overlay1").style.display = "none";
                document.getElementById("logo").style.opacity = "1";
            }
        
            document.getElementById('lol2').onclick=function(){
                document.getElementById("overlay2").style.width = "100%";
                document.getElementById("overlay2").style.display = "block";
                document.getElementById("overlay2").style.position = "fixed";
            }
        
            document.getElementById('can2').onclick=function(){
                document.getElementById("overlay2").style.width = "0%";
                document.getElementById("overlay2").style.display = "none";
            }
        
            document.getElementById('lol3').onclick=function(){
                document.getElementById("overlay3").style.width = "100%";
                document.getElementById("overlay3").style.display = "block";
                document.getElementById("overlay3").style.position = "fixed";
            }
        
            document.getElementById('can3').onclick=function(){
                document.getElementById("overlay3").style.width = "0%";
                document.getElementById("overlay3").style.display = "none";
            }
        
            document.getElementById('lol4').onclick=function(){
                document.getElementById("overlay4").style.width = "100%";
                document.getElementById("overlay4").style.display = "block";
                document.getElementById("overlay4").style.position = "fixed";
            }
        
            document.getElementById('can4').onclick=function(){
                document.getElementById("overlay4").style.width = "0%";
                document.getElementById("overlay4").style.display = "none";
            }

            
        });

    } else {
        
        $(function(){
            document.getElementById('logo_menu').onclick=function(){
                document.getElementById("logo").style.opacity = "0";
            }

            document.getElementById('lol1').onclick=function(){
                document.getElementById("overlay1").style.width = "100%";
                document.getElementById("overlay1").style.display = "block";
                document.getElementById("overlay1").style.position = "fixed";
                document.getElementById("logo").style.opacity = "0";
            }

            document.getElementById('can1').onclick=function(){
                document.getElementById("overlay1").style.width = "0%";
                document.getElementById("overlay1").style.display = "none";
                document.getElementById("logo").style.opacity = "1";
            }
        
            document.getElementById('lol2').onclick=function(){
                document.getElementById("overlay2").style.width = "100%";
                document.getElementById("overlay2").style.display = "block";
                document.getElementById("overlay2").style.position = "fixed";
                document.getElementById("logo").style.opacity = "0";
            }
        
            document.getElementById('can2').onclick=function(){
                document.getElementById("overlay2").style.width = "0%";
                document.getElementById("overlay2").style.display = "none";
                document.getElementById("logo").style.opacity = "1";
            }
        
            document.getElementById('lol3').onclick=function(){
                document.getElementById("overlay3").style.width = "100%";
                document.getElementById("overlay3").style.display = "block";
                document.getElementById("overlay3").style.position = "fixed";
                document.getElementById("logo").style.opacity = "0";
            }
        
            document.getElementById('can3').onclick=function(){
                document.getElementById("overlay3").style.width = "0%";
                document.getElementById("overlay3").style.display = "none";
                document.getElementById("logo").style.opacity = "1";
            }
        
            document.getElementById('lol4').onclick=function(){
                document.getElementById("overlay4").style.width = "100%";
                document.getElementById("overlay4").style.display = "block";
                document.getElementById("overlay4").style.position = "fixed";
                document.getElementById("logo").style.opacity = "0";
            }
        
            document.getElementById('can4').onclick=function(){
                document.getElementById("overlay4").style.width = "0%";
                document.getElementById("overlay4").style.display = "none";
                document.getElementById("logo").style.opacity = "1";
            }


            $('#logo_menu').click(function(){
                $('.small').slideToggle();
            })

            document.getElementById('logo_menu').onclick=function(){
                document.getElementsByClassName("small_menu").style.height = "100%";

            }
        })

    }

        




