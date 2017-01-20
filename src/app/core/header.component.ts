import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  // moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent /*implements OnInit*/ {
  @Input() public showSearchBox: boolean = false;
  @Input() public hideMenu: boolean = false;

  public isCollapsed: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  // ngOnInit() { }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}
