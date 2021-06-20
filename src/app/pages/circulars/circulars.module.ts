import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CircularsComponent } from './circulars.component';

const routes: Routes = [
  {
    path: '',
    component: CircularsComponent,
  },
];

@NgModule({
  declarations: [CircularsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [],
})
export class CircularsModule {}
