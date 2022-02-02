import json from '../json/lang.json' assert { type: "json" };
var classes = []
loadLangs();
langChange('PT');
function langChange(code){
    classes.forEach(element => {
        var langB = document.getElementById('lang'+element);
        if(langB.classList.contains('active')){
            langB.classList.remove('active');
        }
    });
    var langA = document.getElementById('lang'+code);
    langA.classList.add('active');
    var description = document.getElementById('description');
    description.innerHTML = json[code].description ?? "";
}
function loadLangs(){
    var langDiv = document.getElementById('lang');
    langDiv.innerHTML = "";
    for(let langs in json){
        classes.push(langs);
        langDiv.innerHTML += '<a id="lang'+langs+'">'+langs+'</a>';
    }
    classes.forEach(element => {
        document.getElementById('lang'+element).addEventListener('click', function(){
            langChange(element)
        });
    });
}