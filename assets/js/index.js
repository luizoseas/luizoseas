
var json = {
    "PT":{
        "description":"Olá, Sou técnico na área da tecnologia da informação, mas com foco em programação de sistemas web."
    },
    "EN":{
        "description":"Hi, i’m a system developer!<br/> I’m a technician in the information technology, but with a focus on web system programming."
    },
    "FR":{
        "description":"Bonjour, je suis un technicien dans le domaine des technologies de l'information, mais avec un accent sur la programmation de systèmes Web."
    },
    "ES":{
        "description":"Hola, soy técnico en la área de la tecnología de la información, pero con un enfoque en la programación de sistemas web."
    }
}
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