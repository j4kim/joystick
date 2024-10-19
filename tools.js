const { existsSync } = require("node:fs");

function checkPath(path) {
    if (existsSync(path)) return true;
    console.error(`File ${path} does not exist`);
    return false;
}

module.exports = {
    checkPath,
};
