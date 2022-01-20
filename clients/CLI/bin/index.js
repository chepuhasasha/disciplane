#!/ust/bin/env node

import cnsl from './services/log.service.js';

cnsl.error('Error!')
cnsl.warning('Warning!')
cnsl.sucsess('Sucsess!')
cnsl.info('Info ...')
cnsl.log()