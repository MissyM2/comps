import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Divider } from './divider/divider';

@NgModule({
  declarations: [Divider],
  imports: [CommonModule],
  exports: [Divider],
})
export class SharedModule {}
