class RecentCounter {
    private counter: number[];

    constructor() {  
        this.counter = [];
    }

    enqueue(t: number): void    {
        // push number to counter
        this.counter.push(t);
    }

    dequeue(): void {
        // remove first element
        this.counter.shift();
    }

    peek(): number | undefined {
        return this.counter[0];
    }

    size(): number {
        return this.counter.length;
    }

    ping(t: number): number {
        this.enqueue(t);
        let start = t - 3000;
        let end = t;

        while (this.peek() < start)  {
            this.dequeue();
        }

        return this.size();
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */