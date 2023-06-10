import ogchalk from 'chalk'
import readline from 'readline'
let isSilent = false

function show (msg) {
  const fn = msg.shift()
  msg = msg.map((current) => {
    if (current && current instanceof Error) {
      // return previous.concat(' ', current.message)
      return current
    } else if (current && typeof current === 'object') {
      return JSON.stringify(current)
    } else {
      return current
    }
  })

  if (!process.env.TEST && !isSilent) {
    console[fn].apply(null, msg)
  }

  return msg.join(' ')
}

export const silent = (state = true) => {
  isSilent = state
  return isSilent
}

export const clear = () => {
  const blank = '\n'.repeat(process.stdout.rows)

  if (process.env.TEST && process.env.TEST !== 'false') {
    return blank
  } else {
    console.log(blank)
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
  }
}

export const done = (...msg) => {
  msg.unshift('info', ogchalk.white.bold(' DONE'), ogchalk.green.bold('●'))
  return show(msg)
}

export const pass = (...msg) => {
  msg.unshift('info', ogchalk.white.bold(' PASS'), ogchalk.green.bold('●'))
  return show(msg)
}

export const fail = (...msg) => {
  msg.unshift('error', ogchalk.white.bold(' FAIL'), ogchalk.red.bold('●'))
  return show(msg)
}

export const error = (...msg) => {
  msg.unshift('error', ogchalk.white.bold('ERROR'), ogchalk.red.bold('●'))
  return show(msg)
}

export const info = (...msg) => {
  msg.unshift('info', ogchalk.white.bold(' INFO'), ogchalk.blue.bold('●'))
  return show(msg)
}

export const log = (...msg) => {
  msg.unshift('log', ogchalk.white.bold('  LOG'), ogchalk.black.bold('●'), ogchalk.blackBright(new Date().toLocaleTimeString()))
  return show(msg)
}

export const debug = (...msg) => {
  msg.unshift('debug', ogchalk.white.bold('DEBUG'), ogchalk.magenta.bold('●'))
  return show(msg)
}

export const warn = (...msg) => {
  msg.unshift('warn', ogchalk.white.bold(' WARN'), ogchalk.yellow.bold('●'))
  return show(msg)
}

export const chalk = ogchalk
