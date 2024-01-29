function test (a,b){
    if(((a<0 && b>0 ) || (b<0 && a>0 ) )){
       console.log("negative")
    }else{console.log("positif")}
   }
   
   function tableau(tab,x){
   
      if(typeof(x)=="number"&& x>0){
   
   tab.push(x)
   return tab   }
   else{ console.log("err")
   
   }
   }
   
   
   
   