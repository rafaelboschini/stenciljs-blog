import { Component } from '@stencil/core';
import 'blog-item';

@Component({
  tag: 'profile-widget',
  styleUrl: 'profile-widget.scss',
  shadow: true,
  host: ['profile-widget']
})
export class ProfileWidget {
  
  componentWillLoad() {
  }

  render() {
    return (
      <div class="profile-widget">
        <div class="profile-widget-content">
          <img src="assets/img/newton.jpg"/>
          <h2>Isaac Newtow</h2>
          <p>
            Born at 20 march 1642
            <br/>
            was an English mathematician, astronomer, theologian, 
            author and physicist.
          </p>
        </div>
      </div>
    );
  }
}
