class ApiResponse {
  constructor(statusCode, resData, message = "Success in Api Res") {
    (this.statusCode = statusCode),
      (this.resData = resData),
      (this.message = message),
      (this.success = statusCode < 400);
  }
}
export { ApiResponse };
/*
--> status code
--> resData
--> message
*/
