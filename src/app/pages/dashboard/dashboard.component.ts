import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    imports: [NavbarComponent, RouterOutlet],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    standalone: true
})
export class DashboardComponent {

}
