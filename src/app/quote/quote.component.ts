import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    // { id: 1, name: 'Bethwel', quote: 'Love is a scandal of the personal sort.', author: 'Chekhov' },
    // {
    //   id: 2, name: 'Bethwel', quote: 'Man\'s life is brief, but yet there is no man who cannot boast\
    // that there have been terrible moments in his past.', author: 'Chekhov'
    // },
    // { id: 3, name: 'Bethwel', quote: "You can't have it all, all at once.", author: 'Ruth Ginsberg' },
    // { id: 4, name: 'Bethwel', quote: "All happy families are alike; each unhappy family is unhappy in its own way.", author: ' Leo Tolstoy , Anna Karenina' } 
    // 
    new Quote(1, 'Bethwel', 'Love is a scandal of the personal sort.', 'Chekhov', new Date(2020, 5, 6)),
    new Quote(2, 'Bethwel', 'Man\'s life is brief, but yet there is no man who cannot boast\
     that there have been terrible moments in his past.', 'Chekhov', new Date(2016, 5, 6)),
    new Quote(3, 'Bethwel', "You can't have it all, all at once.", 'Ruth Ginsberg', new Date(2019, 5, 6)),
    new Quote(4, 'Bethwel', "All happy families are alike; each unhappy family is unhappy in its own way.", ' Leo Tolstoy , Anna Karenina', new Date(2018, 5, 6))

  ];
  showDetails(index) {
    this.quotes[index].describe = !this.quotes[index].describe;

  }
  deleteQuotes(deletes, index) {
    if (deletes) {
      this.quotes.splice(index, 1);
    }
  }
  upVote(upvote, index) {
    console.log(index);
    if (upvote) {

      this.quotes[index].upvote += 1;

    }
  }
  downVote(downvote, index) {
    console.log(index);
    if (downvote) {
      this.quotes[index].downvote += 1;

    }
  }
  addQuote(quot) {
    let len = this.quotes.length;
    quot.id = len + 1;
    this.quotes.push(quot);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
