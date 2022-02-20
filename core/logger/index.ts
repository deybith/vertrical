import { format, transports, createLogger, addColors } from 'winston';

const { env } = process;
const production = env.production === 'true';

const CUSTOM_LEVELS = {
  levels: {
    critical: 1,
    error: 2,
    warning: 3,
    info: 4,
    debug: 5,
  },
  colors: {
    critical: 'bold red',
    error: 'red',
    warning: 'yellow',
    info: 'bold blue',
    debug: 'grey',
  },
};

const transportsDef = [
  new transports.Console({
    format: production ? format.json() : format.combine(format.colorize(), format.simple()),
  }),
];
if (!production) {
  addColors(CUSTOM_LEVELS.colors);
}

// Winston logger
const logger = createLogger({
  level: 'debug',
  levels: CUSTOM_LEVELS.levels,
  format: format.json(),
  transports: transportsDef,
});

const prefix = `${env.APP_NAME} `;

const logFactory = (logType: string) => <T>(message: string, meta?: T) => {
  const lpad = 12 - logType.length
  logger.log(logType, `- ${prefix}${message}`.padStart(lpad), meta);
}

export default {
  critical: <T>(message: string, meta?: T): void => {
    logFactory('critical')(message, meta);
  },
  error: <T>(message: string, meta?: T): void => {
    logFactory('error')(message, meta);
  },
  warn: <T>(message: string, meta?: T): void => {
    logFactory('warning')(message, meta);
  },
  info: <T>(message: string, meta?: T): void => {
    logFactory('info')(message, meta);
  },
  debug: <T>(message: string, meta?: T): void => {
    logFactory('debug')(message, meta);
  },
  setLevel: (level: string): void => {
    logger.level = level;
  },
};
