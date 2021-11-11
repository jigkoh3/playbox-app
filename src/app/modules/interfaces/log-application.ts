export interface LogApplication {
  start_date: number;
  host_name: string;
  user_name: string;
  session_id: string;
  request_id: string;
  status: string;
  error_code: string;
  error_message: string;
  error_exception: string;
  return_date: number;
  return_time_sec: string;
  service_name: string;
  module_name: string;
  app_name: string;
  channel: string;
  request_data: string;
}
