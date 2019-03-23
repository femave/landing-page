import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components.router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// Components
import { HomeComponent } from './home/home.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
 
@NgModule({
  declarations: [HomeComponent],
  imports: [
    ComponentsRoutingModule,
    SwiperModule
  ],
  providers: [    
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  exports: []
})
export class ComponentsModule {}
