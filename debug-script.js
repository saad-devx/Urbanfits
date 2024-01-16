// list-directory.js
const fs = require('fs');

console.log("the post install script trying to execute...")
const listContents = (directory) => {
    try {
        const contents = fs.readdirSync(directory);
        console.log('YOOOO Niggaa Contents of the directory:');
        contents.forEach((item) => {
            console.log(item);
        });
        const packageJsonPath = 'node_modules/@pusher/push-notifications-web/package.json';

        fs.readFile(packageJsonPath, 'utf-8', (err, data) => {
            if (err) {
                console.error(`Error reading package.json: ${err.message}`);
                return;
            }
            const packageJson = JSON.parse(data);

            if (!packageJson.type || packageJson.type !== 'module') {
                packageJson.type = 'module';

                const updatedContent = JSON.stringify(packageJson, null, 2);

                fs.writeFile(packageJsonPath, updatedContent, 'utf-8', (writeErr) => {
                    if (writeErr) console.error(`Error writing to package.json: ${writeErr.message}`);
                    else console.log(`Content added successfully to ${packageJsonPath}`);
                });
            } else console.log('Content already exists in package.json. No changes made.');
        })
    } catch (e) {
        console.log("Error occurred while listing the root content Bruv.")
    }
};

// Replace '.' with the path to your desired directory
listContents('./node_modules');
