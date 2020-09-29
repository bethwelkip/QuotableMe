export class Quote {
    describe: boolean;
    upvote: number;
    downvote: number;
    // id: number;
    // name: string;
    // quote: string;
    // author: string;

    constructor(public id: number, public name: string, public quote: string, public author: string, public create: Date) {
        this.describe = false;
        this.upvote = 0;
        this.downvote = 0;

    }
}
