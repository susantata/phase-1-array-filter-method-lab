// Code your solution here
function findMatching(drivers, name) {
    let found = drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
    return found;
}
function fuzzyMatch(drivers, query) {
    let found = drivers.filter(driver => driver.startsWith(query));
    return found;
}
function matchName(drivers, query) {
    let found = drivers.filter((driver) => driver.name === query);
    return found;
}