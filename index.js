const Postlar = ["Node.js Öğreniyorum", "Callback Öğrendim", "Promise Öğrendim"];
const prompt = require('prompt-sync')();
function PostGetir(){
    console.log("Postlar Getiriliyor..."+"\n")

    Postlar.map(post => console.log(post));

}

function PostGonder(){
    return new Promise((resolve, reject) => {
        console.log("");
        const post = prompt("Post gir:");
        console.log("");
        Postlar.push(post);
        resolve(post);


        
    })
}

async function ShowPosts(){
    try {
        PostGetir();
        await PostGonder();
        PostGetir();

    } catch (error) {
        console.log(error)
    }
}

ShowPosts();