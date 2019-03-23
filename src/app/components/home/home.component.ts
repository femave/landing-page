import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  index = 0;
  swiperConfig = {
    effect: 'coverflow',
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 10,
    grabCursor: true
  };

  constructor() { }

  ngOnInit() {
  }

}
