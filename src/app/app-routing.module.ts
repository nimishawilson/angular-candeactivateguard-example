import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { UnsavedChangesGuardService } from './services/unsaved-changes-guard.service';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canDeactivate: [UnsavedChangesGuardService] },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
