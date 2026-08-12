import type { Options } from 'pino-http';

export const pinoHttpConfig = {
  level: process.env.LOG_LEVEL ?? 'info',
  // 开发环境下使用 pino-pretty 美化输出，生产环境输出 JSON
  transport:
    process.env.NODE_ENV === 'production'
      ? undefined
      : {
          target: 'pino-pretty',
          options: {
            singleLine: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
          },
        },
  autoLogging: {
    ignore: (req) => req.url === '/health',
  },
} satisfies Options;
