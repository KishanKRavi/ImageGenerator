
window.addEventListener("load",()=>{
    let con = confirm("please wait, page is about to load")
    if(con){
        console.log("user confirmed to proceed")
    } else {
        alert("Page is closing");
        window.history.back();
    }
})



