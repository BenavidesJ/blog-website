import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { PostsComponent } from './pages/posts/posts.component';



@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
