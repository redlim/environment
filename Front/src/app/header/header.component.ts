import { Component } from '@angular/core';

@Component({
  selector: 'wa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  options = [
    {title:"Proyecto", url:"/", active:true},
    {title:"Blog", url:"/blog", active:false}
  ];

  activeOption = function (option) {
    option.active = true;
  }
}
