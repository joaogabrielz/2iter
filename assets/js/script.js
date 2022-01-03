//fAZER API pegar dados do github
const hora = new Date();
secs = hora.getSeconds();
mins = hora.getMinutes();
hors = hora.getHours();
const secSpam = document.getElementById("spam1");
secSpam.innerHTML += `${hors}:${mins} á ${secs}s`

const textarea = document.getElementById('textarea');
const twettar = document.getElementById('btn');

const feed = document.querySelector('.conteudoPrincipal_listaTweet')

twettar.addEventListener('click', getTweet);

function getTweet(event){
   event.preventDefault();
   //console.log(textarea.value)
   const tweetTextArea = textarea.value;
   createTweet(tweetTextArea);
}

function createTweet(tweetTexto){
   // console.log(tweetTexto);

   //object
   const tweet = {
    nome: 'Joao Gabriel',
    foto: "./assets/img/ProfilePic.png",
    usuario: "@joaogabrielz",
    texto:tweetTexto
   }
   listarTemplateTweet(tweet)
   //console.log(tweet)
}
function listarTemplateTweet(tweet){
    //console.log(tweet)

    //------- USANDO DESESTRUTURING----------
   const {nome, foto, usuario, texto} = tweet;


    let li = document.createElement('li');
    li.classList.add("conteudoPrincipal_tweet")

    let img = document.createElement('img');
    img.src = foto;
    img.classList.add("tweet_fotoPerfil")

    let div = document.createElement('div');
    div.classList.add("tweet_conteudo")
    let h2 = document.createElement('h2');
    h2.innerText = nome;

    let span = document.createElement('span');
    span.innerText = ` ${usuario} ${secs}s`;

    let p = document.createElement('p');
    p.innerText = texto;
    //if(p.innerText.includes("#")){p.style.color = '#3866ffef'}

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);
   // console.log(li)
   feed.appendChild(li)
   textarea.value = ""
}
//hover
//acrescentar API