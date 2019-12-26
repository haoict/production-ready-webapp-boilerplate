const winston = require("winston");
const { format } = require("winston");
const { combine, printf } = format;
const moment = require("moment-timezone");
require("winston-daily-rotate-file");

const consoleFormat = printf(
  info => `${info.timestamp} [${info.level}] ${info.message}`
);

const logTransport = new winston.transports.DailyRotateFile({
  filename: "./logs/myapp-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "30m",
  maxFiles: "14d"
});

// handle app exception and write to ./logs/exceptions.log
const execptionTransport = new winston.transports.File({
  filename: "./logs/exceptions.log"
});

// correct timezone to Tokyo
const appendTimestamp = format((info, opts) => {
  const infoz = info;
  if (opts.tz) {
    infoz.timestamp = moment()
      .tz(opts.tz)
      .format();
  }
  return infoz;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(
    appendTimestamp({ tz: "Asia/Tokyo" }),
    format.splat(),
    winston.format.json()
  ),
  transports: [logTransport],
  exceptionHandlers: [execptionTransport]
  // exitOnError: false
});

logger.add(
  new winston.transports.Console({
    format: combine(winston.format.colorize(), consoleFormat, format.splat())
  })
);

module.exports = { logger };
