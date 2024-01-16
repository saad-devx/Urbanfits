// list-directory.js
const fs = require('fs');

console.log("the post install script trying to execute...")
const listContents = (directory) => {
    try {
        const contents = fs.readdirSync(directory);
        console.log('Contents of the directory:');
        contents.forEach((item) => {
            console.log(item);
        });
    } catch (e) {
        console.log("Error occurred while listing the root content Bruv.")
    }
};

// Replace '.' with the path to your desired directory
listContents('.');
