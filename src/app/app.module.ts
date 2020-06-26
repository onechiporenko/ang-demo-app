import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EntityStoreModule } from './entity-store.module';
import { EntityCollectionReducerMethodsFactory, EntityDataModule, HttpUrlGenerator, PersistenceResultHandler } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { routes } from './routes/routes.config';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { DemoReducerMethodsFactory } from './reducers/demo.reducer-methods-factory';
import { DemoPersistenceResultHandler } from './services/demo-persistent-result-handler';
import { metaReducers, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { DemoHttpUrlGenerator } from './services/demo-http-url-generator';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(),
    BrowserModule,
    EntityStoreModule,
    EntityDataModule.forRoot(entityConfig),
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    PagesModule,
    ComponentsModule,
    HttpClientModule,
    PipesModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: EntityCollectionReducerMethodsFactory,
      useClass: DemoReducerMethodsFactory
    },
    {
      provide: PersistenceResultHandler,
      useClass: DemoPersistenceResultHandler
    },
    {
      provide: HttpUrlGenerator,
      useClass: DemoHttpUrlGenerator
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
