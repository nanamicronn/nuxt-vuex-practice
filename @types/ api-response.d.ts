declare module ApiResponse {
  interface ApiTest {
    config: Object;
    data: Array<any>;
    headers: Object;
    request: XMLHttpRequest;
    status: Number;
    statusText: String;
  }
}
