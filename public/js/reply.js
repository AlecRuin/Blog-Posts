
const MakeReply =async (allforms)=>{
    console.log(allforms)
}
var allforms=document.querySelectorAll(".reply-form")
for (var x=0;x<allforms.length;x++){
    allforms[x].addEventListener("submit",MakeReply(allforms[x]))
}