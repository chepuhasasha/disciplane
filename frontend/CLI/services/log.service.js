import chalk from 'chalk';

export default {
  log({
    message = 'Message...',
    title = 'TITLE',
    primary = '#FFA500',
    secondary = '#FFFFFF'
  }) {
    const messageStyle = chalk.hex(primary);
    const titleStyle =  chalk.hex(secondary).bgHex(primary)

    console.log(titleStyle(`\n ${title} \n`));
    console.log(messageStyle(` ${message} \n`));
  },

  error(message) {
    this.log({
      message,
      title: 'ERROR',
      primary: '#ee7878',
      secondary: '#FFFFFF'
    })
  }
}