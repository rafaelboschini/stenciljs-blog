import { Component, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'blog-item',
  styleUrl: 'blog-item.scss',
  shadow: false
})
export class BlogItemComponent {
  @Prop() titlepost: string;
  @Prop() resume: string;
  @Prop() timestamp: Date;
  @Prop() idPost: string;

  @Event() onClickEvent: EventEmitter;
  
  render() {
    console.log('timestamp', this.timestamp);

    return (
        <article class="blog-item" 
          data-idpost="{this.idPost}" 
          onClick={ (event: UIEvent) => this.onClick(event)}>

          <header>
            <a>
              <img src="https://4.bp.blogspot.com/-wsvPRSLcMXQ/WqTI2vpjGmI/AAAAAAAATqs/ujSPXMYXzgQnPyThMGHkueAlf1oP4yS-QCLcBGAs/w764-h350-c/XOeVmUDR3uQ.jpg" 
                class="blog-item-image" width="764" height="350"/>
            </a>
            <div class="blog-item-thumbnail clearfix">
              <div class="blog-item-datebox">
                <span class="blog-item-datebox__month">sep</span> 
                <span class="blog-item-datebox__day">05</span>
                <span class="blog-item-datebox__year">2010</span>
              </div>
            </div>
            <h1 class="blog-item-title entry-title" itemprop="headline">
              <a>{this.titlepost}</a>
            </h1>
          </header>    
          <div class="blog-item-body entry-content">
            {this.resume}
            <a>read more</a>
          </div>
          <div class="or-spacer">
            <div class="mask"></div>
            <span><i>✑</i></span>
          </div>
        </article>
      );
  }

  onClick(event: UIEvent){
    console.log('onClick',event);
    this.onClickEvent.emit(event);
  }
}
