import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false
})
export class AppRoot {
  render() {
    return (
      <main class="clearfix" id="blog-wrapper">
        <div class="blog-content-right">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </div>
        <div class="blog-content-left">
          <h1>Isaac's Blog</h1>
          <h2>Memoirs of Sir Isaac Newton's life</h2>
          [Calendar]
        </div>
      </main>
    );
  }
}
