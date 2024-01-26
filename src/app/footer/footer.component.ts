import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public static message = "Made by TheCosminel"


  public getMessage()
  {
    return FooterComponent.message;
  }
}
