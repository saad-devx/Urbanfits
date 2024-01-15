const fs = require('fs');

// Rading the contents of the pusher's package.json file
const pusherPackageJsonPath = 'node_modules/@pusher/push-notifications-web/package.json';
const pusherPackageJson = JSON.parse(fs.readFileSync(pusherPackageJsonPath, 'utf-8'));

// Adding type: "module"
pusherPackageJson.type = 'module';

// Write back to file
fs.writeFileSync(pusherPackageJsonPath, JSON.stringify(pusherPackageJson, null, 2));

// Continue build
require('next/dist/build');