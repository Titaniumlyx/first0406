var res="";
for(i=1;i<=4;i++){
    for(k=1;k<=4-i;k++){
      res+=" ";
    }
    for(j=1;j<=i*2-1;j++){
       if(j==1 || j==i*2-1){
        res+="*";
       }else{
        res+=" ";
       }
    }
    res+="\n";
}
console.log(res)