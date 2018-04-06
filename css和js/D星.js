var D="";
for(i=1;i<=4;i++){
    for(j=1;j<=4-i;j++){
      D+=" ";
    }
    for(j=1;j<=i*2-1;j++){
    D+="*";
    }
    D+="\n";
}
console.log(D)