import { HttpStatus } from '@nestjs/common';

export interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

export function formatError(
  statusCode: HttpStatus,
  message: string,
  error?: any,
): ErrorResponse {
  return {
    statusCode,
    message,
    error: error?.message || 'Erro interno do servidor',
  };
}
