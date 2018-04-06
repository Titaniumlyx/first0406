var res="";
for(i=1;i<=4;i++){
    for(j=1;j<=4-i;j++){
        res+=" ";
    }
    for(k=1;k<=2*i-1;k++){
        if(k==1 || k==2*i-1){
            res+="*";
        } else{
            res+=" ";
        }
    }
    res+="\n";
}
for(i=3;i>=1;i--){
    for(j=1;j<=4-i;j++){
        res+=" ";
    }
    for(k=1;k<=2*i-1;k++){
        if(k==1 || k==2*i-1){
            res+="*";
        }else{
            res+=" ";
        }
    }
    res+="\n";
}
console.log(res)