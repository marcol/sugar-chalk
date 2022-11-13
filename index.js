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
  msg.unshift('info', ogchalk.bgGreen.white.bold(' DONE  '))
  return show(msg)
}

export const pass = (...msg) => {
  msg.unshift('info', ogchalk.bgGreen.white.bold(' PASS  '))
  return show(msg)
}

export const fail = (...msg) => {
  msg.unshift('error', ogchalk.bgRed.white.bold(' FAIL  '))
  return show(msg)
}

export const error = (...msg) => {
  msg.unshift('error', ogchalk.bgRed.white.bold(' ERROR '))
  return show(msg)
}

export const info = (...msg) => {
  msg.unshift('info', ogchalk.bgBlue.white.bold(' INFO  '))
  return show(msg)
}

export const log = (...msg) => {
  msg.unshift('log', ogchalk.bgBlack.white.bold(' LOG   '),
    ogchalk.blue(new Date().toLocaleTimeString()))
  return show(msg)
}

export const debug = (...msg) => {
  msg.unshift('debug', ogchalk.bgMagenta.white.bold(' DEBUG '))
  return show(msg)
}

export const warn = (...msg) => {
  msg.unshift('warn', ogchalk.bgYellow.black.bold(' WARN  '))
  return show(msg)
}

export const chalk = ogchalk
