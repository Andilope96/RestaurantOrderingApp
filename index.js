import menuArray from './data.js';

const content = document.querySelector('#Content');


function renderItems(arrItems){
    
   let strHtml = ''
    arrItems.forEach(function(item){
        strHtml += `
            <div class="ordering"> <!--Eigentlich Div-->
                
                <img class="item-pic" src="${item.pic}" alt="item-pic">
                <div class="item">
                    <h3 class="item-title">${item.name}</h3>
                    <p class="item-description">${item.ingredients}</p>
                    <p class="item-price"><span>${item.price}€</span></p>
                </div>

                <i  class="fa-solid fa-circle-plus" id="item-id-${item.id}"></i>

                
            </div> <!--Eigentlich Div-->
        `
    })

    content.innerHTML = strHtml;
}

renderItems(menuArray);

document.addEventListener('click', function(e){

    if(e.target.id === 'item-id-0'){
         addElementtoTotal(e.target.id);
    }

      if(e.target.id === 'item-id-1'){
         addElementtoTotal(e.target.id);
    }

      if(e.target.id === 'item-id-2'){
         addElementtoTotal(e.target.id);
    }
       
    
    

})

function addElementtoTotal(itemId){

    const targetTweetObj = [];
    
    targetTweetObj.push(menuArray.filter(function(element){
        return `item-id-${element.id}` === itemId;
    })[0]);


    alert('Added ' + targetTweetObj.name);
    console.log(targetTweetObj);
}