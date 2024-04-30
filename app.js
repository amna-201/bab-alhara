const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c', 'b', 'b', 'a', 'b', 'b', 'c', 'b', 'c', 'a'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

const sounds = [
    new Audio('audio10.mp3'), 
    new Audio('audio9.mp3'), 
    new Audio('audio8.mp3'), 
    new Audio('audio7.mp3'), 
    new Audio('audio6.mp3'), 
    new Audio('audio5.mp3'),   
    new Audio('audio4.mp3'), 
    new Audio('audio3.mp3'), 
    new Audio('audio2.mp3'), 
    new Audio('audio1.mp3'), 
    new Audio('audio.mp3'), //  0
];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 1; i < 11; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }

    verifFunc(tableauResultats);
    tableauResultats = [];
});

function verifFunc(tabResultats) {
    for (let a = 0; a < 10; a++) {
        if (tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }

    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck) {
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    const resultImage = document.querySelector('.result-image');

    switch (nbDeFautes) {
        case 0:
            titreResultat.innerText = 'هلااااااااا والله  حياللله';
            aideResultat.innerText = ' انت كفووو';
            noteResultat.innerText = '10/10';
            resultImage.src = 'nems.jpg'; 
            sounds[0].play(); 
            break;
        case 1:
            titreResultat.innerText = 'قربتتتت';
            aideResultat.innerText = ' مو مشكلة سؤال واحد';
            noteResultat.innerText = '9/10';
            resultImage.src = 'mahmod.jpg'; 
            sounds[1].play(); 
            break;
        case 2:
            titreResultat.innerText = 'بدك خرزة مثل جميلة؟؟';
            aideResultat.innerText = ' ليطئ الك عرق';
            noteResultat.innerText = '8/10';
            resultImage.src = 'jamela.jpg'; 
            sounds[2].play(); 
            break;
        case 3:
            titreResultat.innerText = '   نعممممة كريم';
            aideResultat.innerText = '  شد حالك شوي بس';
            noteResultat.innerText = '7/10';
            resultImage.src = '11.jpg'; 
            sounds[3].play(); 
            break;
        case 4:
            titreResultat.innerText = 'انا مجاكرة منك';
            aideResultat.innerText = ' نفذت بريشك من معتزز';
            noteResultat.innerText = '6/10';
            resultImage.src = 'galb.jpg'; 
            sounds[4].play(); 
            break;
        case 5:
            titreResultat.innerText = 'يا باطل معرفت بس نص الاسئله؟؟';
            aideResultat.innerText = ' بس نتحملك شو بنعمل';
            noteResultat.innerText = '5/10';
            resultImage.src = 'batl.jpg'; 
            sounds[5].play(); 
            break;
        case 6:
            titreResultat.innerText = 'الله واكبر عليك';
            aideResultat.innerText = 'هي  عمله بالله ؟';
            noteResultat.innerText = '4/10';
            resultImage.src = 'kasm.jpg'; 
            sounds[6].play(); 
            break;
        case 7:
            titreResultat.innerText = 'زودتها  لاااااااااا';
            aideResultat.innerText = ' مش متفقين  هيك !!!!!';
            noteResultat.innerText = '3/10';
            resultImage.src = 'laaa.jpg'; 
            sounds[7].play(); 
            break;
        case 8:
            titreResultat.innerText = 'انقلعووووو من هووون';
            aideResultat.innerText = ' رح خلي فريال تدعي عليكممم';
            noteResultat.innerText = '2/10';
            resultImage.src = 'ferl.jpg'; 
            sounds[8].play(); 
            break;
        case 9:
            titreResultat.innerText = 'ما بعرف احواكم';
            aideResultat.innerText = ' فشرتوو تربحو';
            noteResultat.innerText = '1/10';
            resultImage.src = 'fash.jpg'; 
            sounds[9].play(); 
            break;
        case 10:
            titreResultat.innerText = 'يخربيتككككك من حالك';
            aideResultat.innerText = ' فضحتوناااااااااااااااااا!!';
            noteResultat.innerText = '0/10';
            resultImage.src = 'sho.jpg'; 
            sounds[10].play(); 
            break;
        default:
            'حدث خطأ غير متوقع.';
    }
}

function couleursFonction(tabValBool) {
    for (let j = 0; j < tabValBool.length; j++) {
        if (tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = '#21421e';
        } else {
            toutesLesQuestions[j].style.background = '#480607';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500);
        }
    }
}
