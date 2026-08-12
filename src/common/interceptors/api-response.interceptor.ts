import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import {
  ApiResponse,
  ApiResponseCode,
  ApiResponseResult,
} from '../interfaces/api-response.interface';

/** 将所有正常的 HTTP 响应包装为统一的 API 响应格式。 */
@Injectable()
export class ApiResponseInterceptor<T> implements NestInterceptor<
  T,
  ApiResponse<T>
> {
  intercept(
    _context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((data) => ({
        code: ApiResponseCode.SUCCESS,
        result: ApiResponseResult.SUCCESS,
        data,
        message: null,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
