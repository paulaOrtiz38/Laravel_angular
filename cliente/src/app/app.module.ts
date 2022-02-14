import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ObjToArrayPipe } from './objToArray.pipe';
import { ProductosComponent } from './productos/productos.component';
import { FormComponent } from './form/form.component';
import {Route, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] =[
    {path:'', component:ProductosComponent},
    {path:'products', component:ProductosComponent},
    {path:'form', component:FormComponent},
    {path:'form/:id', component:FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ObjToArrayPipe,
    ProductosComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
