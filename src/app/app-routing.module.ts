import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component'
import { CategoriesComponent } from './components/categories/categories.component'

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'play', component: GameComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
