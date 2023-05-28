import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit{

  @Input() data: any;
  imgSrc: string | undefined = '';

  imgData = [
    {
      type: "squats",
      src: "assets/images/history/squats.jpg"
    },
    {
      type: "pushups",
      src: "assets/images/history/pushups.jpg"
    },
    {
      type: "abs-legs",
      src: "assets/images/history/abs-legs.jpeg"
    },
    {
      type: "lateral-raise",
      src: "assets/images/history/lateral-raise.jpg"
    },
    {
      type: "curls",
      src: "assets/images/history/curls.jpg"
    }
  ]

  constructor() {
  }

  ngOnInit() {
    this.imgData.forEach(item => {
      if (item.type === this.data.type) {
        this.imgSrc = item.src;
      }
    })
  }
}
