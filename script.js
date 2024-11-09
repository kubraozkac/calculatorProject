const number_button = document.getElementsByClassName("number");
const currentInput = document.getElementById("currentInput");
const historyInput = document.getElementById("historyInput");
const toplaButton = document.getElementById("topla");
const çıkarButton = document.getElementById("çıkar");
const çarpButton = document.getElementById("çarp");
const bölButton = document.getElementById("böl");
const silButton = document.getElementById("sil");
const sıfırlaButton = document.getElementById("sıfırla");
const equalButton = document.getElementById("eşit");
const islem_button = document.getElementsByClassName("islem");
let degerAl=0;
let deger1=0;
let deger2=0;
let sonuc=0;
let basamak=0;
fontAyarı=0;
let isClickedtopla = false; 
let isClickedçıkar = false; 
let isClickedçarp = false; 
let isClickedböl = false; 
let isClickedsıfırla = false; 

adjustFontSize();
silButton.addEventListener("click",function(){
  currentInput.innerHTML=currentInput.innerHTML.slice(0,-1);
})


currentInput.innerHTML=0;
// number classı içeren buttonlara writeToCurrentInput click eventi ekleniyor.
for(let i=0 ; i<number_button.length;i++){
  number_button[i].addEventListener("click", function(){
    writeToCurrentInput(number_button[i]);
    basamakSay(number_button[i]);
  });

}

function basamakSay(){
  fontAyarı=fontAyarı+1;
  basamak=basamak+1;
  console.log(fontAyarı);
  adjustFontSize();
}
 

function writeToCurrentInput(number_button) {
  adjustFontSize();
  if(basamak<14){
    currentInput.innerHTML += number_button.innerHTML;

  }

}

// işlem classı içeren buttonlara writeToHistoryInput click eventi ekleniyor.
for(let i=0 ; i<islem_button.length;i++){
  islem_button[i].addEventListener("click", function(){
    writeToHistoryInput(islem_button[i]);
  });

}
function writeToHistoryInput(islem_button) {
  adjustFontSize();
  basamak=0;
  degerAl=currentInput.innerHTML;
  console.log("deger1:"+degerAl);
  deger1=degerAl;

    historyInput.innerHTML = currentInput.innerHTML;
    historyInput.innerHTML += islem_button.innerHTML;
    currentInput.innerHTML="";
    degerAl=0;


}



toplaButton.addEventListener("click", function(){isClickedtopla = true;} );
çıkarButton.addEventListener("click", function(){isClickedçıkar = true;} );
çarpButton.addEventListener("click", function(){isClickedçarp = true;} );
bölButton.addEventListener("click", function(){isClickedböl = true;} );
sıfırlaButton.addEventListener("click", function(){

    historyInput.innerHTML= " ";
    currentInput.innerHTML= " ";
    fontAyarı=0;
    basamak=0;
} );


equalButton.addEventListener("click", function(){hesapla(equalButton)});

function hesapla(equalButton){

  degerAl=currentInput.innerHTML;
  deger2=degerAl;
  console.log("deger2:"+degerAl);
  degerAl=0;
  historyInput.innerHTML+=currentInput.innerHTML;
  historyInput.innerHTML+=equalButton.innerHTML;
  currentInput.innerHTML="";

   if(isClickedtopla){
    console.log(isClickedtopla);
    sonuc=parseFloat(deger1)+parseFloat(deger2);
    //sonuc=deger1+deger2;
    console.log(sonuc);
    currentInput.innerHTML=sonuc;
    isClickedtopla=false;
   }
   if(isClickedçıkar){
    // console.log(isClickedçıkar;
     sonuc=parseFloat(deger1)-parseFloat(deger2);
     console.log(sonuc);
     currentInput.innerHTML=sonuc;
     isClickedçıkar=false;
    }
   if(isClickedçarp){
      // console.log(isClickedçarp);
       sonuc=parseFloat(deger1)*parseFloat(deger2);
       console.log(sonuc);
       currentInput.innerHTML=sonuc;
       isClickedçarp=false;
     }
   if(isClickedböl){
        // console.log(isClickedböl);
         sonuc=parseFloat(deger1)/parseFloat(deger2);
         console.log(sonuc);
         currentInput.innerHTML=sonuc;
         isClickedböl=false;
    }
    adjustFontSize()
}
function adjustFontSize() {
  if(currentInput.innerHTML.length+historyInput.innerHTML.length>30){
    currentInput.style.fontSize = "15px"; 
    historyInput.style.fontSize = "15px"; 
  }
  else if(currentInput.innerHTML.length+historyInput.innerHTML.length<30 && currentInput.innerHTML.length+historyInput.innerHTML.length>20){
    currentInput.style.fontSize = "20px"; 
    historyInput.style.fontSize = "20px"; 
  }
  else if(currentInput.innerHTML.length+historyInput.innerHTML.length<20){
    currentInput.style.fontSize = "40px"; 
    historyInput.style.fontSize = "40px"; 
  }


}



  