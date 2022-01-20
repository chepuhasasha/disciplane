import chalk from 'chalk';

export default {
  log(
    message = 'Message...',
    title = 'TITLE',
    primary = '#FFFFFF',
    secondary = '#FFFFFF',
  ) {
    const status = chalk.bgHex(primary)
    const label = chalk.hex(primary)
    const text = chalk.hex(secondary)
    console.log(`\n${status(' ')} ${label(title)}`);
    console.log(text(`↳ ${message}`));
  },

  obj(o) {
    const status = chalk.bgBlueBright
    const label = chalk.blueBright('JS OBJECT')
    console.log(`\n${status(' ')} ${label}`);
    console.log(o);
  },

  error(message) {
    this.log(
      message,
      'ERROR',
      '#ee7878',
    )
  },

  warning(message) {
    this.log(
      message,
      'WARNING',
      '#eede78',
    )
  },

  sucsess(message) {
    this.log(
      message,
      'SUCSESS',
      '#4ed07a',
    )
  },

  info(message) {
    this.log(
      message,
      'INFO',
      '#999999',
    )
  }
}