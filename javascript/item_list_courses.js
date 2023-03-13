
const additionalItems = document.querySelectorAll('.additional-items');
const btnShowEverything = document.querySelector('.btn-show-everything');
const btnShowLess = document.querySelector('.btn-show-less');



function showMore(){
    //Remove hidden-md-down class from all additionalItems
    for(var item of additionalItems){
        item.classList.remove('hidden-md-down');
    }
    btnShowLess.classList.remove('hidden-md-down');
    btnShowEverything.classList.add('hidden-md-down');
}

function showLess(){
    //Add hidden-md-down class from all additionalItems
    for(var item of additionalItems){
        item.classList.add('hidden-md-down');
    }
    btnShowLess.classList.add('hidden-md-down');
    btnShowEverything.classList.remove('hidden-md-down');
}