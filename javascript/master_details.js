function select(selected){

    tableIndexToFind = selected.getAttribute('table');
    const detail = document.querySelector(`.detail-table-${tableIndexToFind}`);
    const detailBackground = document.querySelector(`.detail-background-table-${tableIndexToFind}`);
    const masterItems = document.querySelectorAll(`.master-item-table-${tableIndexToFind}`);
    const detailContentOpen = document.querySelector(`.detail-content-open-${tableIndexToFind}`);
    const detailTitleOpen = document.querySelector(`.detail-title-open-${tableIndexToFind}`);

    detailBackground.classList.add('hidden-md-down');
    indexToFind = selected.getAttribute('value');
    let detail_paragraph = document.querySelector(`.detail-content-${indexToFind}`);
    let detailTitle = document.querySelector(`.detail-title-${indexToFind}`);

    //Remove active class from all master-items
    for(var item of masterItems){
        item.classList.remove('active-item');
    }
    //Make selected tab active
    selected.classList.add('active-item');
    //Toggle the class that hides when the screen is medium size or less
    detail.classList.remove('hidden-md-down');

    //Set the content of the detail to the innerHTML of the selected item
    detailTitleOpen.innerHTML = detailTitle.innerHTML;
    detailContentOpen.innerHTML = detail_paragraph.innerHTML;
    
}
function back(selected){

    tableIndexToFind = selected.getAttribute('table');
    console.log(selected);
    console.log(tableIndexToFind);
    const masterItems = document.querySelectorAll(`.master-item-table-${tableIndexToFind}`);
    const detail = document.querySelector(`.detail-table-${tableIndexToFind}`);
    const detailBackground = document.querySelector(`.detail-background-table-${tableIndexToFind}`);

    //Remove active class from all master-items
    for(var item of masterItems){
        item.classList.remove('active-item');
    }
    detail.classList.add('hidden-md-down');
    detailBackground.classList.remove('hidden-md-down'); 
}