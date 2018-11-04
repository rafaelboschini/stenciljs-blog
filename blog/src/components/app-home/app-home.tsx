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
    console.log('omponentWillLoad');
    fetch(`${this.apiRootUrl}/posts.json`).then((response: any) => {
      return response.json()
    }).then((data) => {
      console.log('Data result',data);
      this.postsData = data;
    });
  }

  render() {

    return (
      <div class='app-home'>
        {
          this.postsData.map((post) => 
            <blog-item 
            titlePost={post.title}
            resume={post.title}
            idPost={post.idPost}
            onClick={(event: UIEvent) => this.clickPost(event)}>
            </blog-item>
          )
        }

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }

  clickPost(event:UIEvent){
    console.log('clickPost', event);
    alert('clickou');
  }
}
