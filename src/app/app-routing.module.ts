import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CvComponent } from './pages/cv/cv.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path:"", component:AboutComponent
  },
{
  path:"blog", component:BlogComponent
},
{
  path:"portfolio", component: PortfolioComponent
},
{
  path:"contact", component: ContactComponent
},
{
  path:"cv", component: CvComponent
 }
,
{
  path:"**", component:AboutComponent
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
