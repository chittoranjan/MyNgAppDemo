import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AUTH_PROVIDERS } from '../auth.service';
import { LoggedInGuard } from '../logged-in.guard';
import { SharedModule } from 'src/app/appCore/Shared/shared.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,

  ],
})
export class LoginModule { }
