import { logger } from './logger';

/**
 * Error handling utilities
 */

export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number
  ) {
    super(message);
    this.name = 'AppError';
  }
}

/**
 * Safe async function wrapper with error handling
 */
export const safeAsync = async <T>(
  fn: () => Promise<T>,
  errorMessage = 'An error occurred'
): Promise<[T | null, Error | null]> => {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    logger.error(errorMessage, error);
    return [null, error instanceof Error ? error : new Error(String(error))];
  }
};

/**
 * Safe sync function wrapper with error handling
 */
export const safeSync = <T>(
  fn: () => T,
  errorMessage = 'An error occurred'
): [T | null, Error | null] => {
  try {
    const result = fn();
    return [result, null];
  } catch (error) {
    logger.error(errorMessage, error);
    return [null, error instanceof Error ? error : new Error(String(error))];
  }
};

/**
 * Handle runtime errors gracefully
 */
export const handleError = (error: unknown, context?: string): void => {
  const message = context
    ? `Error in ${context}`
    : 'An unexpected error occurred';

  if (error instanceof Error) {
    logger.error(message, error);
  } else {
    logger.error(message, new Error(String(error)));
  }
};

/**
 * Retry function with exponential backoff
 */
export const retry = async <T>(
  fn: () => Promise<T>,
  maxAttempts = 3,
  delay = 1000
): Promise<T> => {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      logger.warn(`Attempt ${attempt}/${maxAttempts} failed`, lastError);

      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, delay * attempt));
      }
    }
  }

  throw lastError!;
};

