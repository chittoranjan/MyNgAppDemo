import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AUTH_PROVIDERS } from '../auth.service';
import { LoggedInGuard } from '../logged-in.guard';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    // SharedModule,
    RouterModule.forChild(routes),

    TranslateModule,

    FuseSharedModule
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,

  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
