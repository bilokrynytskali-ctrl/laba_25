const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'info.txt');
const outputPath = path.join(__dirname, 'output.txt');

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Помилка при зчитуванні файлу:', err);
        return;
    }

    console.log('Зміст файлу info.txt:');
    console.log(data);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Введіть текст для запису у файл output.txt: ', (text) => {
        fs.writeFile(outputPath, text, 'utf-8', (err) => {
            if (err) {
                console.error('Помилка при записі файлу:', err);
            } else {
                console.log('Текст успішно записано у файл output.txt');
            }
            rl.close();
        });
    });
});
