import {
  buildLogger,
  logger as winstonLogger,
} from '../../src/adapters/logger.adapter';

describe('Test in logger.adapter', () => {
  it('buildLogger should return a function logger', () => {
    const winstonLogger = buildLogger('test');

    expect(typeof winstonLogger.log).toBe('function');
    expect(typeof winstonLogger.error).toBe('function');
  });

  it('logger.log should log a message', () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
    const message = 'test message';
    const service = 'test-service';

    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message,
        service,
      }),
    );
  });

  it('logger.error should log a message', () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'error');
    const message = 'test message';
    const service = 'test-service';

    const logger = buildLogger(service);
    logger.error(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith('error', {
      message,
      service,
    });
  });
});
