function createDomElements(todos){
    var parentElement = document.getElementById("mainArea");

    var currentChildren = Array.from(parentElement.children);
    console.log(currentChildren);

    let added = 0, deleted=0, updated=0;

    todos.forEach(function (item){
        var existingChild = currentChildren.find(function (child){
            return child.dataset.id === String(item.id);
        })

        if(existingChild){
            updated++;

            existingChild.children[0].innerHTML = item.title;
            existingChild.children[1].innerHTML = item.description;

            currentChildren = currentChildren.filter(function (child){
                return child != existingChild;
            });

        } else {
            added++;
            var childElement = document.createElement("div");
            childElement.dataset.id = item.id;

            var grandChildElement1 = document.createElement("span");
            grandChildElement1.innerHTML = item.title;

            var grandChildElement2 = document.createElement("span");
            grandChildElement2.innerHTML = item.description;

            var grandChildElement3 = document.createElement("button");
            grandChildElement3.innerHTML = "Delete";
            grandChildElement3.setAttribute("onclick","deleteTodo("+ todos[i].id + ")")
            
            childElement.appendChild(grandChildElement1);
            childElement.appendChild(grandChildElement2);
            childElement.appendChild(grandChildElement3);
            parentElement.appendChild(childElement);

        }
    })

    currentChildren.forEach(function (child){
        deleted++;
        parentElement.removeChild(child);
    } )
};

window.setInterval(()=>{
    let todos = [];
    for( let i = 0; i< Math.floor(Math.random() *100); i++){
        todos.push({
            title: "Go to Gym",
             description: "Some description",
             id: i+1
        })
    }
    createDomElements(todos)
}, 3000)
