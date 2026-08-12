/** API 业务状态码，供客户端稳定地进行结果分支处理。 */
export enum ApiResponseCode {
  SUCCESS = '00000',
  VALIDATION_ERROR = '40000',
  UNAUTHORIZED = '40100',
  FORBIDDEN = '40300',
  NOT_FOUND = '40400',
  UPSTREAM_SERVICE_ERROR = '50200',
  INTERNAL_ERROR = '50000',
}

/** API 业务结果状态。 */
export enum ApiResponseResult {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

/** API 响应中业务码对应的默认说明。 */
export const API_RESPONSE_MESSAGES: Record<ApiResponseCode, string | null> = {
  [ApiResponseCode.SUCCESS]: null,
  [ApiResponseCode.VALIDATION_ERROR]: '请求参数校验失败。',
  [ApiResponseCode.UNAUTHORIZED]: '未授权访问。',
  [ApiResponseCode.FORBIDDEN]: '无权访问该资源。',
  [ApiResponseCode.NOT_FOUND]: '请求的资源不存在。',
  [ApiResponseCode.UPSTREAM_SERVICE_ERROR]: '上游服务暂时不可用。',
  [ApiResponseCode.INTERNAL_ERROR]: '服务器内部错误。',
};

/** 所有 HTTP 接口返回的统一响应信封。 */
export interface ApiResponse<T> {
  code: ApiResponseCode;
  result: ApiResponseResult;
  data: T;
  message: string | null;
  timestamp: string;
}
