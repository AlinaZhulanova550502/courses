point = new Object();

Object.defineProperty(point, "x", {
  set: function(value) {
    if (typeof(value) == "number") this.x=value;
  }
});

Object.defineProperty(point, "y", {
  set: function(value) {
   if (typeof(value) == "number") this.y=value;
  }
});

Object.preventExtensions(point);