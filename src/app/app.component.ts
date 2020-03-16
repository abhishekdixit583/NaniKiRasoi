import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nanikaghar';
  loadedFeature = 'Recipes';

  onNavigate( menuSelected: string){
    this.loadedFeature = menuSelected;
  }
}
