point = new Object();
point = {
   _x: 0,
   _y: 0
};

Object.defineProperty(point, "_x", {})

Object.defineProperty(point, "x", {
  set: function(value) {
    if (typeof(value) == "number") this._x=value;
  },
  get: function() {
  	return this._x;
  }
});

Object.defineProperty(point, "_y", {})

Object.defineProperty(point, "y", {
  set: function(value) {
    if (typeof(value) == "number") this._y=value;
  },
  get: function() {
    return this._y;
  }
});

Object.preventExtensions(point);