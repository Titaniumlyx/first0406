var res='';
for(var i=1;i<10;i++){
    for(var j=1;j<=i;j++){
        res=res+j+"*"+i+"="+i*j+"\t"+"&nbsp;";
    }
    //  res+="\n";
    res+="<br/>";
}
// console.log(res) 
document.write(res) 
