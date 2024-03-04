
var file = 0
var folder = 0

function off() {
    document.querySelector("#folderinput").style.display = `none`
    document.querySelector("#fileinput").style.display = `none`
    document.querySelector("#overlay").style.display = `none`
}

document.querySelector("#file-icon").addEventListener("click", () => {
    // alert("click")
    if (file === 0) {
        off()
        document.querySelector("#fileinput").style.display = `initial`
        document.querySelector("#folderinput").style.display = `none`
        file = 1
    }
    else {
        document.querySelector("#fileinput").style.display = `none`
        file = 0
    }
})
document.querySelector("#folder-icon").addEventListener("click", () => {
    if (folder === 0) {
        off()
        document.querySelector("#folderinput").style.display = `initial`
        document.querySelector("#fileinput").style.display = `none`
        folder = 1
    }
    else {
        document.querySelector("#folderinput").style.display = `none`
        folder = 0
    }
})

document.querySelector("#create-file").addEventListener("click", function (dets) {
    console.log(dets.target);

    if (dets.target.id === "edit") {
        document.querySelector("#overlay").style.display = "initial";
        document.querySelector("#raju").value = dets.target.dataset.value
        document.querySelector("#editform").setAttribute("action", `/editform/${dets.target.dataset.value}`);
    

    }
})