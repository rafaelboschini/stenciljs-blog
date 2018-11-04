import { Component, State } from '@stencil/core';
import 'blog-item';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {
  
  apiRootUrl: string = 'http://localhost:3333/assets/data';
  
  @State() postsData: any[] = [];

  componentWillLoad() {
    fetch(`${this.apiRootUrl}/posts.json`).then((response: any) => {
      return response.json()
    }).then((data) => {
      this.postsData = data;
    });
  }

  render() {

    return (
      <div class='blog-item-box'>
        {
          this.postsData.map((post) => 
            <blog-item 
            titlepost={post.title}
            resume={post.title}
            idPost={post.idPost}
            onClick={(event: UIEvent) => this.clickPost(event)}>
            </blog-item>
          )
        }
      </div>
    );
  }

  clickPost(event:UIEvent){
    console.log('clickPost', event);
    alert('clickou');
  }
}
