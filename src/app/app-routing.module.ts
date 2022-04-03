import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin-guard';
import { AuthGuard } from './guards/auth-guard';
import { NotAdminGuard } from './guards/not-admin-guard';

const routes: Routes = [
  /** Legal Pages */
  { path: 'legal-mentions', loadChildren: () => import('./pages/legal-pages/legal-mention/legal-mention.module').then(m => m.LegalMentionModule) },
  { path: 'license-agreement', loadChildren: () => import('./pages/legal-pages/license-agreement/license-agreement.module').then(m => m.LicenseAgreementModule) },
  { path: 'privacy-policy', loadChildren: () => import('./pages/legal-pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },

  /** Home */
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [NotAdminGuard]
  },

  /** User Related */
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
    canActivate: [NotAdminGuard]
  },

  /** Offer Related */
  {
    path: 'offers',
    loadChildren: () => import('./pages/plan-related/offers/offers.module').then(m => m.OffersModule),
    canActivate: [NotAdminGuard]
  },
  {
    path: 'purchase/:id',
    loadChildren: () => import('./pages/plan-related/premium/premium.module').then(m => m.PremiumModule),
    canActivate: [AuthGuard, NotAdminGuard]
  },
  {
    path: 'cancel',
    loadChildren: () => import('./pages/plan-related/cancel/cancel.module').then(m => m.CancelModule),
    canActivate: [AuthGuard, NotAdminGuard]
  },

  /** Other */
  // { path: 'download', loadChildren: () => import('./pages/download/download.module').then(m => m.DownloadModule) },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
    canActivate: [NotAdminGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  },
  
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
