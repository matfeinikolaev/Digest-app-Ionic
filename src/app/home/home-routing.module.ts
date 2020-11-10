import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DetailPage } from '../detail/detail.page';
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomePage,
            },
            {
                path: 'detail/',
                component: DetailPage,
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
