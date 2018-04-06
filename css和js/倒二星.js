var res="";
for(i=1;i<=10;i++){
    for(j=1;j<=10;j++){
       if(i==1 || i==2 || i==9 || i==10){
          res+="*";
       }else if(j==1 || j==2|| j==9 ||j==10){
           res+="*";
       }else{
           res+=" ";
       }
    }
    res+="\n";
}
console.log(res)