point = new Object();

Object.defineProperty(point, "x", {
  set: function(value) {
    if (typeof(value) == "number") this.x=value;
  },
  get: function() {
  	return this.x;
  }
});

Object.defineProperty(point, "y", {
  set: function(value) {
   if (typeof(value) == "number") this.y=value;
  },
  get: function(){
  	return this.y;
  }
});

Object.preventExtensions(point);