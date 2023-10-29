const conmandConfigArr = require("../config/commander");
const commander = function (program) {
    conmandConfigArr.forEach((item) => {
        let action = require(`../actions/${item.command}`);
        let command = item.params ? item.command + " " + item.params : item.command;
        if (item.alias) {
            program
                .command(command)
                .alias(item.alias)
                .description(item.description)
                .action(action);
        } else {
            program.command(command).description(item.description).action(action);
        }
    });
};
module.exports = commander;