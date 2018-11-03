import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blog-item',
  styleUrl: 'blog-item.css',
  shadow: true
})
export class BlogItemComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  format(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }

  render() {
    return (
        <div class="blog-item">
          <h1 class="titulo">Titulo Teste</h1>
          <div>Loren ipsusun...</div>
        </div>
      );
  }
}
