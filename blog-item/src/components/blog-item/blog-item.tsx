import { Component, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'blog-item',
  styleUrl: 'blog-item.scss',
  shadow: true
})
export class BlogItemComponent {
  @Prop() titlePost: string;
  @Prop() resume: string;
  @Prop() timestamp: Date;
  @Prop() idPost: string;

  @Event() onClickEvent: EventEmitter;
  
  render() {
    return (
        <div class="blog-item" 
          data-idpost="{this.idPost}" 
          onClick={ (event: UIEvent) => this.onClick(event)}>
          <h1 class="titulo">{this.titlePost}</h1>
          <div>{this.resume}</div>
        </div>
      );
  }

  onClick(event: UIEvent){
    console.log('onClick',event);
    this.onClickEvent.emit(event);
  }
}
