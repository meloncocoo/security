import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { BodyStyleDirective } from './style.directive';
import { GaugeDirective } from './gauge.directive';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  exports: [
    TranslateModule,
    BodyStyleDirective,
    GaugeDirective
  ],
  declarations: [BodyStyleDirective, GaugeDirective],
  providers: [],
})
export class SharedModule { }
