/* TODO: inserite il codice JavaScript necessario a completare il MHW! */




function changeToX(event)
{
  const divs = document.querySelectorAll('#grid div');
  const image = event.currentTarget;
   Restore(divs,image);
  image.style.backgroundColor = '#cfe3ff';
  Uncheck(image);
  const img1 = image.querySelector('.checkbox')
  img1.src = "images/checked.png";
  image.removeEventListener("click", changeToX);
   assigneResponse(image);
   event.stopPropagation();
}

function Restore(divs,image)
{
  for(const div of divs)
  {
    if(div.dataset.questionId === image.dataset.questionId){
    div.style.backgroundColor ='#f4f4f4';
    div.classList.remove('unchecked');
    const img = div.querySelector('.checkbox');
    img.src = 'images/unchecked.png';
  }
}
}

  
  
 



function assigneResponse(image)
{
 if(image.dataset.questionId === 'one'){
  TakenBoxes[1]=image.dataset.choiceId;
  
 }else if(image.dataset.questionId === 'two'){
  TakenBoxes[2]=image.dataset.choiceId;
 }else if(image.dataset.questionId == 'three'){
  TakenBoxes[3]=image.dataset.choiceId;
   const result=getWinner(TakenBoxes);
   DisplayResult(result);
    TakenBoxes[1]='';
    TakenBoxes[2]='';
    TakenBoxes[3]='';

  }
 
}
function DisplayResult(res){
  const title1 = document.querySelector('footer h1');
  const p1 = document.querySelector('footer p')
  title1.textContent = RESULTS_MAP[res].title;
  p1.textContent = RESULTS_MAP[res].contents;

}


function getWinner(mappa){
if(mappa[1]===mappa[2]===mappa[3] ||
  mappa[1]===mappa[2] ||
  mappa[1] === mappa[3]){
  console.log(mappa[1]);
  return mappa[1];
} else  if(
  mappa[2] === mappa[3]){
  console.log(mappa[2]);
  return mappa[2];
} else {
  console.log(mappa[1]);
  return mappa[1];
}
}



function ImagesRestore(spazio){
spazio.classList.remove('unchecked');
 const img2 = spazio.querySelector('.checkbox');
 img2.src='images/unchecked.png';
 spazio.style.backgroundColor='#f4f4f4';
 spazio.addEventListener('click',changeToX);
}

function Restore(){
  
 const spazi = document.querySelectorAll('#grid div');
 for(const spazio of spazi){
 ImagesRestore(spazio);
 }
 
 ResultRestore();
 
}

function ResultRestore(){
  const titolo = document.querySelector('footer h1');
  const par = document.querySelector('footer p');
  titolo.innerHTML='';
  par.innerHTML= '';
  
}


function Uncheck(image){
  const spaces = document.querySelectorAll('#grid div');
for(const space of spaces){
  if(space.dataset.questionId === image.dataset.questionId){
    if(space.dataset.choiceId !== image.dataset.choiceId){
      space.classList.add('unchecked');
      space.addEventListener('click',changeToX);
    }
  }
}
}


const TakenBoxes = {};
const boxes = document.querySelectorAll('#grid div');
for (const box of boxes)
{
  box.addEventListener('click', changeToX);
}

const bott = document.querySelector('button');
bott.addEventListener('click',Restore);