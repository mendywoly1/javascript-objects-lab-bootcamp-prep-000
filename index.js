var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var arr = object[key] = value
  return arr
}