import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule],
})
export class MaterialModule { }