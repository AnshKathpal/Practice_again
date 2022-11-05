let n = 7
for(x=1;x<=7;x++){
  let bag = "";
  for(y=1;y<=10;y++){
    if(x==1 || x==7){
      bag+="*";
    }else if(y==1||y==10){
      bag+="*";
    } else{
      bag+=" ";
    }
  }console.log(bag);
}