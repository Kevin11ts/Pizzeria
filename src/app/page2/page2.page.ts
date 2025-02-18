import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: false
})
export class Page2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Page 2: OnInit');
  }
  ionViewWillEnter() {
    console.log('Page 2: ionViewWillEnter');
  }
  ionViewDidEnter() {
    console.log('Page 2: ionViewDidEnter');
  }
  ionViewWillLeave(){
    console.log('Page 2: ionViewWillLeave');
  }
  ionViewDidLeave(){
    console.log('Page 2: ionViewDidLeave');
  }
  ngOnDestry(){ 
    console.log('Page 2: OnDestroy')
  }

}
