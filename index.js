let currentlyPicked = null;

const draggableItems = document.getElementsByClassName('listItem');
for(let i = 0; i < draggableItems.length; ++i){
    draggableItems[i].addEventListener('drag', ()=>{
    });
    draggableItems[i].addEventListener('dragstart', (event)=>{
        currentlyPicked = event.target;
    })
    draggableItems[i].addEventListener('dragover', (event)=>{
        event.preventDefault();
    })
    draggableItems[i].addEventListener('drop', (event)=>{
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