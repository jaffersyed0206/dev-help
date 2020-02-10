
const devArrayMethods = {
    removeItemInArray = (arr, location) => {
        //simple arr.splice is used to remove the item;
        arr.splice(location , 1);
        return arr
    }, 
    filterItemsInArray = (arr, item) => {
        arr = arr.filter(index => index !== item);
        return arr
    },
    getRidOfDuplicates = (arr) => {
        arr = arr.filter((a , b) => arr.indexOf(a) === b);
        return arr
    },
    findLocationsOfMulitples = (arr) => {
        let map = {};
        for (let i = 0; i < arr.length; i++) {
            if (map[arr[i]] === undefined) {
                map[arr[i]] = [i]
            } else {
                map[arr[i]].push(i)
            }
        }
        let res = [];
        for (const index in map) {
            if (map[index].length > 1) {
                res.push({val: index, locations: map[index]})
            }
        }
        return res;
    },
    addItemInArray = (arr, item, location) => {
        arr.splice(location, 0, item);
        return arr
    }
}



