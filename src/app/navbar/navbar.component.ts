import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { NavbarService } from '../../service/navbar.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatIconModule,
    MatButtonModule,
    MatTabsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public secondToolbarVisibility = true;

  constructor(private navbarService: NavbarService){}

  toggleSecondToolbar(){
    this.secondToolbarVisibility = !this.secondToolbarVisibility;
  }

  showEquipmentItemPage()
  {
    this.navbarService.toggleEIVisibility();
  }
}
