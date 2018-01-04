import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule,MatSlideToggleModule,MatGridListModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule,MatSlideToggleModule,MatGridListModule],
})
export class MaterialModule { }