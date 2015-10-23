(function (root) {
  if (typeof root.StoreHelper === "undefined") {
    root.StoreHelper = {};
  }

  root.StoreHelper = {
    compareObjects: function (objectOne, objectTwo ) {
      return JSON.stringify(objectOne) === JSON.stringify(objectTwo);
    },
    adder: function (object, outerId, objectToAdd) {
      if (typeof object[outerId] === "undefined") {
        object[outerId] = [objectToAdd];
      } else {
        object[outerId].push(objectToAdd);
      }
    },
    remover: function (object, outerId, innerId){
      var index = StoreHelper.indexFinder(object, outerId, innerId);
      if (index > -1) {
        object[outerId].splice(index, 1);
      }
    },
    indexFinder: function (object, outerId, innerId) {
      if (typeof object[outerId] !== "undefined") {
        for (var i = 0; i < object[outerId].length; i++) {
          if (object[outerId][i].id === innerId) {
            return i;
          }
        };
      }
      return -1;
    },
    resetInnerObject: function (object, outerId, objectToAdd) {
      var index = StoreHelper.indexFinder(object, outerId, objectToAdd.id);
      if (index > -1) {
        object[outerId][index] = objectToAdd;
      } else {
        object[outerId] = [objectToAdd];
      }
    },
    resetOuterObject: function (object, outerId, objectToAdd) {
      object[outerId] = objectToAdd;
    },
    resetObject: function (object, objectReplacement) {
      object = objectReplacement;
    }
  }
})(this);