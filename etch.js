let container = document.querySelector("#container");
for(let i = 0; i<16; i++){
    let col = document.createElement("div");
    col.classList.add("column");
    col.style.width = "auto";
    col.style.height = "auto";
    col.style.display = "Flex";
    col.style.justifyContent = "Center";
    container.appendChild(col);
    for(let j = 0; j<16; j++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = "31px";
        box.style.height = "31px";
        box.style.borderStyle = "Solid";
        box.style.borderWidth = "0.1px";
        col.appendChild(box);
    }
}


const reset = document.querySelector("#reset");
reset.addEventListener("click", function(e){
    let length = prompt("How many boxes do you want on each side?");
    while(length>100){
        alert("Number has to be less than 100!");
        length = prompt("How many boxes do you want on each side?");
    }
    container = document.querySelector("#container")
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i<length; i++){
        const col1 = document.createElement("div");
        col1.classList.add("column");
        col1.style.width = "auto";
        col1.style.height = "auto";
        col1.style.display = "Flex";
        col1.style.justifyContent = "Center";
        container.appendChild(col1);
        for(let j = 0; j<length; j++){
            const box1 = document.createElement("div");
            box1.classList.add("box");
            box1.style.width = (500/length) + "px";
            box1.style.height = (500/length) + "px";
            box1.style.borderStyle = "Solid";
            box1.style.borderWidth = "0.1px"
            col1.appendChild(box1);
        }
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((div) =>{
    div.addEventListener("mouseover", () =>{
        div.style.backgroundColor = "Black";
    }
    )
}
)
});

const boxes = document.querySelectorAll(".box");
boxes.forEach((div) =>{
    div.addEventListener("mouseover", () =>{
        div.style.backgroundColor = "Black";
    }
    )
}
)