
const inBox = document.getElementById("in-box");
const listMu = document.getElementById("listmu");

function tambahTugas() {
    if (inBox.value.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Sing mau Isien sek!",
            text: "Ra diisi kok pencet tambah, meh nambah opo?!",
        });
    } else {
        let li = document.createElement("li");
        li.innerHTML = inBox.value;
        listMu.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inBox.value = "";
    simpenKi();
}

listMu.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("uwis");
        simpenKi();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        simpenKi();
    }
}, false);

function simpenKi() {
    localStorage.setItem("data", listMu.innerHTML);
}

function delokKe() {
    listMu.innerHTML = localStorage.getItem("data");
}

delokKe();