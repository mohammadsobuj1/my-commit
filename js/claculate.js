


function ElementitemInnerText(id){
    const number = document.getElementById(id);
    return number;
}


function Elementitem(id){
    const income = document.getElementById(id).value; 
   ElementitemInnerText();
        
    return income;
}




function getElementValue (id1, id2, id3){
    const foodPrice = document.getElementById(id1).value;
    const rantPrice = document.getElementById(id2).value;
    const otherPrice = document.getElementById(id3).value;
    const totalPrice = parseInt(foodPrice)+ parseInt(rantPrice)+parseInt(otherPrice);
    const totalExpance = document.getElementById('total-expance');
    const income = Elementitem('incom-field');
    if(isNaN(foodPrice) || isNaN(otherPrice) || isNaN(rantPrice)){
        return alert('input number')
     }
  
else if(income <= 0){
    return alert('you don`t have enough income')
}
else if(isNaN(income)){
    return alert('input number')
}


     else if( foodPrice === '' || rantPrice === ''|| otherPrice === '' ){
       return alert('input your Amount')
     } 
     
     else if(foodPrice < 0 || rantPrice < 0|| otherPrice < 0){
           
        return alert('provide posative Amount')
    }

     totalExpance.innerText=totalPrice;
    
return totalExpance;
    

}






document.getElementById('claculate-btn').addEventListener('click', function(){

let ElementValue =  getElementValue('food-field', 'Rant-field' ,'other-field');
const income =  Elementitem('incom-field');
const remainingBlance = parseInt(income)-parseInt(ElementValue.innerText);
const Blance = document.getElementById('total-blance')
Blance.innerText =remainingBlance;

})


document.getElementById('save-btn').addEventListener('click', function(){
   
    const Save =ElementitemInnerText('save-field').value;
    const income = Elementitem('incom-field');
    const incomestring = parseInt(income);
   
     const calaculateSave = parseFloat(income)*parseFloat(Save)/100;
    const saveBlance =  ElementitemInnerText('save-blance')
    console.log(incomestring, calaculateSave)

    if( incomestring < calaculateSave){
        return alert('ay buje bay kor beta')
    }
    else if (isNaN(income)){
        return alert('input Number')
    }
    else if(income <= 0){
        return alert('tk nai')
    }


     saveBlance.innerText = calaculateSave;    
    const Blance = ElementitemInnerText('total-blance');
    const calaculateTotalRemaining = parseInt(Blance.innerText)-calaculateSave;
    const RemainingBlance = ElementitemInnerText('last-balance');
    RemainingBlance.innerText = calaculateTotalRemaining;
})



