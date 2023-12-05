let container = document.querySelector(".container");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    add();
});

function add(lsnote = "") {
    let note = document.createElement("div");
    note.classList.add("Notes");
    note.innerHTML = `
        <div class="header">
                <h3>Notepad</h3>
                <div>
                    <i class="save fa-solid fa-floppy-disk"></i>
                <i class=" trash fa-solid fa-trash-can"></i>
                </div>
            </div>
            <textarea  id="textarea" >${lsnote}</textarea>
    `;

   

    // Move the event listener outside of the add function
    note.querySelector(".trash").addEventListener("click", function() {
        note.remove();  
        save(); 
    });
    note.querySelector(".save").addEventListener("click",()=>{
        save();
   })

   container.appendChild(note);
   save()
   
}


function save () {
    var notes = document.querySelectorAll(".Notes textarea");
    let storage = [];
    notes.forEach((note)=>{
        storage.push(note.value);
    })
    if(storage.length === 0){
        localStorage.removeItem("Notes");
    }else{
    localStorage.setItem("Notes" , JSON.stringify(storage))
}
}

document.addEventListener("DOMContentLoaded",function(){
    let lsnotes = JSON.parse(localStorage.getItem("Notes"));
    if(lsnotes === null){
        add();
    }else{
        lsnotes.forEach((lsnote)=>{
            add(lsnote)
        })
    }
   
})

