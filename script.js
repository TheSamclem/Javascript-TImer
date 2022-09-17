  function gettimer(a,b){
            document.getElementById("showtimer").innerHTML = b+":"+a;
            setInterval(reduction,1000);
        }
        function reduction(){
            var latestvalue = document.getElementById("showtimer").innerHTML;
            var newtime =  latestvalue.split(":");
            var min = newtime[0]
            var sec = newtime[1]
            if(sec>=1){
                sec = sec - 1;
            }else{
                min = min - 1;
                sec = 59;
            }
            if(min<=0 && sec <=0 ){
                latestvalue = "00:00"
            }else{
                latestvalue = min+":"+sec
            }
            
            
            document.getElementById('showtimer').innerHTML=latestvalue;
        }
