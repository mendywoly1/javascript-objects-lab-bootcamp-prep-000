var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  arr = object.assign({}, { key: value })
  return arr
}