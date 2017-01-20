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

  lang: string = 'en';

  public isCollapsed: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use(this.lang);
  }

  // ngOnInit() { }

  setLanguage(lang: string) {
    this.lang = lang;
    this.translate.use(this.lang);
  }
}
