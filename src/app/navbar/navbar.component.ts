import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';


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
  secondToolbarVisibility = true;

  toggleSecondToolbar(){
    this.secondToolbarVisibility = !this.secondToolbarVisibility;
  }

  showEquipmentItemPage()
  {
    console.log("Lala")
  }

  
}
