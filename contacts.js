
const fs = require('fs');
const { resolve } = require('path');

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})


const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//membuat file jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    })
};

const simpanContact = (nama, email, noHP) => {
    const contact = {nama, email, noHP};
    // console.log(contact);
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);


    // console.log(contacts);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        
    console.log('terima kasih');
    rl.close();
}

module.exports = {tulisPertanyaan, simpanContact};

