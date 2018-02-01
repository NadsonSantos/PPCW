var body = document.body;
var cor = 'red';
body.style.color = '#0011ff';
body.style.padding = '30px';



function mudacor(alvo, cor){
	alvo.style.color = cor; 
};

mudacor(body, cor);