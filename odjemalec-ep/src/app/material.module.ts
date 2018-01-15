import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatListModule, MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule,MatSlideToggleModule,
    MatGridListModule,MatListModule, MatIconModule,MatTooltipModule, MatSelectModule, MatTableModule, MatChipsModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule,MatSlideToggleModule,
    MatGridListModule,MatListModule, MatIconModule,MatTooltipModule, MatSelectModule, MatTableModule, MatChipsModule],
})
export class MaterialModule { }