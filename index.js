let currentlyPicked = null;

const draggableItems = document.getElementsByClassName('listItem');
const dropZones = document.getElementsByClassName('listContainer');
for(let i = 0; i < draggableItems.length; ++i){
    draggableItems[i].addEventListener('drag', ()=>{
    });
    draggableItems[i].addEventListener('dragstart', (event)=>{
        currentlyPicked = event.target;
    })
}
for(let j = 0; j < draggableItems.length; ++j){
    dropZones[j].addEventListener('dragover', (event)=>{
        event.preventDefault();
    })
    dropZones[j].addEventListener('drop', (event)=>{
        event.preventDefault();
        if(event.target.className === 'listItem'){
            let temp1 = currentlyPicked.parentNode;
            currentlyPicked.parentNode.removeChild(currentlyPicked);
            let temp2 = event.target.parentNode;
            event.target.parentNode.removeChild(event.target);
            temp2.appendChild(currentlyPicked);
            temp1.appendChild(event.target);

        }
    })
}