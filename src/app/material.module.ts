import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [BrowserAnimationsModule, MatBadgeModule, MatButtonModule],
  exports: [BrowserAnimationsModule, MatBadgeModule, MatButtonModule]
})


export class MaterialModule {

}
