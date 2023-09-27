/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let people = [];
  for (let i = 0; i < names.length; i++) {
    people.push({ name: names[i], height: heights[i] });
  }

  people.sort((a, b) => {
    return b.height - a.height;
  });

  let sortedPeopleNames = people.map((person) => person.name);
  return sortedPeopleNames;
};