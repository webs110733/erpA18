import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { SideNavAltComponent } from '../side-nav-alt/side-nav-alt.component';

@Component({
    selector: 'app-layout',
    imports: [DashboardComponent, RouterOutlet, NavbarComponent, SideNavComponent, SideNavAltComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    standalone: true
})
export class LayoutComponent {

}
