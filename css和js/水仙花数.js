var num="";
for(i=1;i<10;i++){
    for(j=1;j<10;j++){
        for(k=1;k<10;k++){
            if(i*i*i+j*j*j+k*k*k==100*i+10*j+k && 100<=100*i+10*j+k<=1000){
                num=100*i+10*j+k;
            }    
        }
    }   
}
console.log(num)
