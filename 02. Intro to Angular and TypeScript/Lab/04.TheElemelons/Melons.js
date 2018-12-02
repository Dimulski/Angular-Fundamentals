var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.element = this.constructor.name.slice(0, this.constructor.name.indexOf('melon'));
    }
    Melon.prototype.getElementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Melon.prototype.toString = function () {
        var toStringText = 'Element: ' + this.element + '\n' +
            'Sort: ' + this.melonSort + '\n' +
            'Element Index: ' + this.getElementIndex();
        return toStringText;
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = "Water";
        _this.elements = ['Fire', 'Earth', 'Air'];
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        this.elements.push(this.element);
        this.element = this.elements.shift();
    };
    return Melolemonmelon;
}(Earthmelon));
var melon = new Watermelon(2, "kingsize");
var xeno = new Melolemonmelon(3, 'alien');
console.log(melon.toString());
console.log(xeno.toString());
xeno.morph();
console.log(xeno.toString());
xeno.morph();
console.log(xeno.toString());
xeno.morph();
console.log(xeno.toString());
xeno.morph();
console.log(xeno.toString());
