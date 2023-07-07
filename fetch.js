const https = require('https');
const fs = require('fs');

https.get('https://www.azuki.com/api/elemental_token_configs', (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    res.on('end', () => {
        const parsedData = JSON.parse(data);
        const slugs = parsedData.ELEMENTALS.map(elemental => ({
            name: elemental.name.substring(11),
            image: elemental.image.substring(36, 72)
        }));

        fs.writeFile('stripped_data.json', JSON.stringify(slugs, null, 2), (err) => {
            if (err) {
                throw err;
            }
            console.log('Data written to file');
        });
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
