const fs = require('fs');

fs.readFile('emprego-cientifico.json', 'utf8', (err, data) => {
    const jsonData = JSON.parse(data);

    jsonData.forEach((obj, index) => {
        obj.Id = index + 1;
    });

    const updatedData = JSON.stringify(jsonData, null, 2);

    fs.writeFile('emprego-cientifico.json', updatedData, 'utf8', (err) => {
        console.log('File updated successfully!');
    });
});
