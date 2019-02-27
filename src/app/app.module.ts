import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AngularMaterialModule } from './angularMaterial/angularMaterial.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CategoryModule } from './category/category.module';
import { TestScssComponent } from './test-scss/test-scss.component';
import { OrdersModule } from './orders/orders.module';
import { GenericEffects } from './generic.store/effect/generic.effect';
import { CustomerModule } from './customer/customer.module';
@NgModule({
  declarations: [
    AppComponent,
    TestScssComponent
  ],
  imports: [
    BrowserModule, ProductModule,CategoryModule,CustomerModule, RouterModule.forRoot([]), CoreModule,
    AngularMaterialModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([GenericEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5,
      name:"String Store Redux"
    }),
    OrdersModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
