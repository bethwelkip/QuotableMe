export class Quote {
    describe: boolean;
    // id: number;
    // name: string;
    // quote: string;
    // author: string;

    constructor(public id: number, public name: string, public quote: string, public author: string) {
        this.describe = false;

    }
}
