import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  langNum = 0;
  title = 'Tour of Heroes';

  constructor(private translate: TranslateService) {
    this.translate.get('Tour of Heroes').subscribe((res: string) => {
      this.title = res;
    });
  }

  // /**
  //  * ボタンで切り替える処理(仮)
  //  */
  // changeLanguageBtn(): void {
  //   if (this.langNum == 0) {
  //     this.langNum = 1;
  //   } else {
  //     this.langNum = 0;
  //   }
  // }
  // /**
  //  * langNumの値を変換
  //  */
  // public getLangNum() {
  //   return this.langNum;
  // }
}
