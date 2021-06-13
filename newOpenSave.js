let save = document.querySelector(".save");
let open = document.querySelector(".open");
// functionality -> download excel representation
save.addEventListener("click", function () {
    //2d arrayy save file 
    const data = JSON.stringify(sheetDb);
    // convert it into blob
// data -> file like object convert
    const blob = new Blob([data], { type: 'application/json' });
    // convert it any type file into url
    const url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    // file will be downloaded
    a.href = url;
    // file download
    a.download = "file.json";
// anchor click
    a.click();
})
// downloaded file -> open read 
// input type file -> change event file name
open.addEventListener("change", function () {
    // files array -> file accept-> multiple files get 
    let filesArray = open.files;

    let fileObj = filesArray[0];
    // file reader to read the file
    let fr = new FileReader();
    // read as text 
    fr.readAsText(fileObj);

    fr.addEventListener("load", function () {
        console.log(fr.result);
    })
    
    console.log("After");
    // ui init f
})

// alert(rows);