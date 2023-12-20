const el = document.querySelector(".item-list");
// console.log(el)
function flexrow(){
    el.classList.add("flexrow");
    el.classList.remove("flexrow-reverse", "flexcolumn", "flexcolumnreverse");
}
function flexrowreverse(){
    el.classList.add("flexrow-reverse");
    el.classList.remove("flexrow", "flexcolumn", "flexcolumnreverse");
}
function flexcolumn(){
    el.classList.add("flexcolumn");
    el.classList.remove("flexrow-reverse", "flexrow", "flexcolumnreverse");
}
function flexcolumnreverse(){
    el.classList.add("flexcolumnreverse");
    el.classList.remove("flexrow-reverse", "flexcolumn", "flexrow");
}


function flexitemstart(){
    el.classList.add("justifyStart");
    el.classList.remove("justifyCenter", "justifyEnd", "justifySpaceAround","justifySpaceBetween");
}
function flexitemscenter(){
    el.classList.add("justifyCenter");
    el.classList.remove("justifyStart", "justifyEnd", "justifySpaceAround","justifySpaceBetween");
}
function flexitemsend(){
    el.classList.add("justifyEnd");
    el.classList.remove("justifyCenter", "justifyStart", "justifySpaceAround","justifySpaceBetween");
}
function flexitemssaround(){
    el.classList.add("justifySpaceAround");
    el.classList.remove("justifyCenter", "justifyEnd", "justifyStart","justifySpaceBetween");
}
function flexitemssbetween(){
    el.classList.add("justifySpaceBetween");
    el.classList.remove("justifyCenter", "justifyEnd", "justifySpaceAround","justifyStart");
}


