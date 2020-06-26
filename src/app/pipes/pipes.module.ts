import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearsOldPipe } from './years-old.pipe';



@NgModule({
  declarations: [YearsOldPipe],
  exports: [
    YearsOldPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
