//Core module
//file system
const contacts = require('./contacts');

const main = async () => {
    // console.log(contacts);
    const nama = await contacts.tulisPertanyaan('Masukkan nama anda : ');
    const email = await contacts.tulisPertanyaan('Masukkan email anda : ');
    const noHP = await contacts.tulisPertanyaan('Masukkan noHP anda : ');
    // const email = await pertanyaan2();

    contacts.simpanContact (nama, email, noHP);
};

main();
