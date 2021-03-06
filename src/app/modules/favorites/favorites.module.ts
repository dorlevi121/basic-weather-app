import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { LocationsComponent } from './locations/locations.component';
import { RouterModule, Routes } from '@angular/router';
import { DragScrollModule } from 'ngx-drag-scroll';
import { SharedModule } from 'src/app/shared/shared-components.module';

const routes: Routes = [{ path: '', component: FavoritesComponent }];

@NgModule({
  declarations: [FavoritesComponent, LocationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragScrollModule,
    SharedModule
  ]
})
export class FavoritesModule { }
