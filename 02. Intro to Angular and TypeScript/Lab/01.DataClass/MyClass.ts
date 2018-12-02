class MyClass {
  private method: string;
  private uri: string;
  private version: string;
  private message: string;
  private response: string;
  private fulfilled: boolean;

  constructor(method: string, uri: string, version: string, message: string) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
    this.response = undefined;
    this.fulfilled = false;
  }
}

let myClass = new MyClass('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myClass);