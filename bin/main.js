#! /usr/bin/env node
const { program } = require("commander")
const help = require("../libs/core/help")
const commander = require("../libs/core/commander")
help(program)
commander(program)
program.parse(process.argv)