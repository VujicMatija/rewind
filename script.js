// import OpenAI from '.node_modules/openai';


//  const openai = new OpenAI({
//   apiKey: "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"
// });

// const dotenv =  require('dotenv');
// dotenv.config();
// import dotenv from 'dotenv';
// dotenv.config();

// const openFun=async()=>{
// var input = document.getElementById('input').value;
// alert(input);
//  const chatCompletion = await openai.chat.completions.create({
//    model: "gpt-3.5-turbo",
//      messages: [{"role": "user", "content": `Na osnovu prilozenog teksta mi navedi sto vise pitanja vezana za njega. Pitanja nek bude sto vise al da budu raznovrsna i da ne budu previse slicna jedna drugom. Tekst je : ${input}`,}],
//     // messages: [{"role": "user", "content": `KOji je glavni grad Francuske?`,}],
//      max_tokens:100
//   });
//   console.log(chatCompletion.choices[0].message.content);
//   document.getElementById('output').value = chatCompletion.choices[0].message.content;
// }

function obavestenje(){
  document.getElementById('output').value = 'Ova funkcija trenutno nije  zavrsena';
}

const dugme = document.getElementById('btn');
dugme.addEventListener('click', obavestenje);

const slike = ['imgs/katarina.jpg', 'imgs/marija.jpg', 'imgs/matija.jpg'];
const citati = ['REWIND mi je zasluzan za to sto sam polozila ekonomiju, da nije bilo njega ne znam sta bi radila <br> - Katarina Damnjanovic', 
'Ali ovo je bukvalnooo savresno znaci hvala Bogu  da postoji <br> - Marija Glisic',
'Jako kul stvar sve pohvale kreatoru <br> - Matija Vujic'];
let br = 0;
function promenaUtiskaUnapred(){
  
  if(br != 2)
  {
    br++;
  }
  else{
    br = 0;
  }
  const image = document.getElementById('slika');
  const utisak = document.getElementById('utisak');
  image.src=slike[br];
  utisak.innerHTML = citati[br];
}

function promenaUtiskaUnazad(){
  
  if(br != 0)
  {
    br--;
  }else{
    br = citati.length - 1;
  }
  const image = document.getElementById('slika');
  const utisak = document.getElementById('utisak');
  image.src=slike[br];
  utisak.innerHTML = citati[br];
}
const dgmNapred = document.getElementById('sledeci');
dgmNapred.addEventListener('click', promenaUtiskaUnapred);

const dgmUnazad = document.getElementById('Prethodni');
dgmUnazad.addEventListener('click', promenaUtiskaUnazad);


function posaljiEmail(){
  var params= {
    message: document.getElementById('feedback').value

  }
  emailjs.send("service_yc0wz1i", "template_0d7eqsa",params).then(alert('Poslato'));
  
}

const emailSender = document.getElementById('emailSender');
emailSender.addEventListener('click', posaljiEmail);