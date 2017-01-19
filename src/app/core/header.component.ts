import { Component, OnInit, Input } from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent /*implements OnInit*/ {
  @Input() public showSearchBox: boolean = false;
  @Input() public hideMenu: boolean = false;

  public isCollapsed: boolean = false;

  // constructor() {}

  // ngOnInit() { }
}
