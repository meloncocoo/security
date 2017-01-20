import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Cookie } from 'ng2-cookies/ng2-cookies';

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
    let lang = Cookie.get('language') || 'zh';
    this.translate.setDefaultLang('en');
    this.translate.use(lang);
  }

  // ngOnInit() { }

  setLanguage(lang: string) {
    Cookie.set('language', lang);
    this.translate.use(lang);
  }
}
