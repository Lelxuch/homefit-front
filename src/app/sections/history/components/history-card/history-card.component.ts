import {Component, Input, OnInit} from '@angular/core';
import {IHistory} from "../../../../core/model/history";

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit{

  @Input() data: IHistory;
  imgSrc: string | undefined = '';

  imgData = [
    {
      type: "Squats",
      src: "assets/images/history/squats.jpg"
    },
    {
      type: "Pushups",
      src: "assets/images/history/pushups.jpg"
    },
    {
      type: "Abs-legs",
      src: "assets/images/history/abs-legs.jpeg"
    },
    {
      type: "Lateral-raise",
      src: "assets/images/history/lateral-raise.jpg"
    },
    {
      type: "Curls",
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
