import chalk from 'chalk';

const log = console.log;

function displayColorMessage(){ 
    log(chalk.blue('Hello') + ' World' + chalk.red('!'));
    log(chalk.blue.bgRed.bold('Hello world!'));
    log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
    log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
    log(chalk.green(
        'I am a green line ' +
        chalk.blue.underline.bold('with a blue substring') +
        ' that becomes green again!'
        ));
    }

export {displayColorMessage}