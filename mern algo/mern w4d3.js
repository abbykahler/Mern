class LRUCache {
    constructor(capacity) {
       this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        let val = this.cache.get(key);

        this.cache.delete(key);
        this.cache.set(key, val);

        return val;
    }

    // Implementing Put method
    put(key, value) {
        this.cache.delete(key);

    if (this.cache.size === this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
        this.cache.set(key, value);
    } else {
        this.cache.set(key, value);
    }
    }

}



const cache = new LRUCache(2); // new cache with capacity of 2

cache.put('key1', 'val1');
cache.put('key2', 'val2');
cache.put('key3', 'val3');

console.log(cache.get('key4')); // should log -1, not yet added
console.log(cache.get('key1')); // should log -1, as it's been flushed

console.log(cache.get('key3')); // should log 'val3'
cache.put('key4', 'val4');

console.log(cache.get('key2')); // should log -1, as it's been flushed
console.log(cache.get('key4')); // should log 'val4'