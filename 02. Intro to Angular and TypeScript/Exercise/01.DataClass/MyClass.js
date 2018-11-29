var MyClass = /** @class */ (function () {
    function MyClass(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return MyClass;
}());
var myClass = new MyClass('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myClass);
