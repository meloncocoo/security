import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  // moduleId: module.id,\
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Input() public showSearchBox: boolean = false;
  @Input() public hideMenu: boolean = false;

  public isCollapsed: boolean = false;

  constructor(private translate: TranslateService) {
    let lang = Cookie.get('language') || 'zh';
    this.translate.setDefaultLang('en');
    this.translate.use(lang);
  }

  ngOnInit() {
    
  }

  setLanguage(lang: string) {
    Cookie.set('language', lang);
    this.translate.use(lang);
  }

  onSubmit(input: any) {
    let text = input.value;
    this.search.emit(text);
    input.value = null;
  }
}
