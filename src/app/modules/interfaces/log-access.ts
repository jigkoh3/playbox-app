export interface LogAccess {
  timestamp: number;
  thread: string;
  hostname: string;
  user_name: string;
  ip: string;
  session_id: string;
  request_id: string;
  request_date: number;
  method: string;
  result: string;
  error_code: string;
  response_date: number;
  response_time_sec: string;
  service_name: string;
  module_name: string;
  app_name: string;
  channel: string;
}
