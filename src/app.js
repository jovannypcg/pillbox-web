import {LocationService} from './services/location-service';
import {DrawerService} from './services/drawer-service';
import {inject} from 'aurelia-framework';

@inject(LocationService, DrawerService)
export class App {
  locationsCanvas = HTMLCanvasElement;
  canvasHeight = 700;
  canvasWidth = 700;

  constructor(locationService, drawerService) {
    this.locationService = locationService;
    this.drawerService = drawerService
  }

  attached() {
    this.locationsCanvasContext = locationsCanvas.getContext('2d');
  }

  getLocations() {
    this.locationService.getLocations().then(data => {
      this.drawerService.drawImage(this.locationsCanvasContext, data.grid);
    });
  }
}
