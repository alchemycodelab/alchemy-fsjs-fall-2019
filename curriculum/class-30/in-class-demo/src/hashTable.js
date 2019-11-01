// function DEFAULT_HASH(size) {
//   return function (key) {
//     return key
//       .split('')
//       .reduce((acc, letter, i) => {
//         return acc += letter.charCodeAt(0) + i
//       }, 0)
//       % size;
//   }
// }

const DEFAULT_HASH = size => key => key
  .split('')
  .reduce((acc, letter, i) =>
    acc += letter.charCodeAt(0) + i, 0)
  % size;

class HashTable {
  constructor(buckets = 20, hashAlgorithm = DEFAULT_HASH) {
    this.arr = new Array(buckets).fill([]);
    this.hashAlgorithm = hashAlgorithm(buckets);
  }

  hash(key) {
    return this.hashAlgorithm(key);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.arr[index];

    const item = bucket.find(([storedKey]) => storedKey === key);
    if (!item) return null;

    return item[1];
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.arr[index];

    if (this.get(key)) {
      const item = bucket.find(([storedKey]) => storedKey === key);
      item[1] = value;
    } else {
      // add a new value
      bucket.push([key, value]);
    }
  }
}

const table = new HashTable();
// dog['name'] = 'spot' or dog.name = 'spot'
table.set('name', 'spot');
table.set('age', 5);
table.set('weight', '20 lbs');

// dog['name'] or dog.name
console.log(table.get('name'));
console.log(table.get('age'));
console.log(table.get('weight'));
