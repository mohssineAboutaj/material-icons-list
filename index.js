// import the whole data
const data = require("./data.json");

// icons length
const iconsLength = data.length;

// array of icons list
const iconsList = Array.from(data, (ic) => ic.name);

/**
 * @type Function
 * @description Get list of icons filterd by a category
 * @param {String} cat
 * @returns Array[String]
 */
function iconsListByCategory(cat) {
  const list = [];
  data.forEach((icon) => {
    if (icon.categories.includes(cat)) {
      list.push(icon.name);
    }
  });
  return list;
}

/**
 * @type Function
 * @description Get list of icons filterd by a tag
 * @param {String} tag
 * @returns Array[String]
 */
function iconsListByTag(tag) {
  let list = [];
  data.forEach((icon) => {
    if (icon.tags.includes(tag)) {
      list.push(icon.name);
    }
  });
  return list;
}

/**
 * @type Function
 * @description Get list of icons filterd by popularity
 * @param {String} count
 * @param {Boolean} onlyNames
 * @returns Array[Object] | Array[String]
 */
function iconsListByPopularity(coubt = iconsLength, onlyNames = false) {
  data.sort((a, b) => {
    return a.popularity < b.popularity ? 1 : -1;
  });

  return onlyNames
    ? data.slice(0, coubt - 1).map((a) => a.name)
    : data.slice(0, coubt - 1);
}

// export
module.exports = {
  all: data,
  iconsLength,
  iconsList,
  iconsListByCategory,
  iconsListByTag,
  iconsListByPopularity,
};
