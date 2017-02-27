import { Component } from '@angular/core';
import {MouseEvent} from 'angular2-google-maps/core';
import {ItemService} from '../services/service.component'

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}


@Component({
  selector: 'wa-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class MapComponent {

  constructor(private service :ItemService){}

  private items;
  ngOnInit() {
    this.service.getItems().subscribe((items)=> this.updateItems(items));
  }

  // google maps zoom level
  zoom: number = 12;

  // initial center position for the map
  lat: number = 40.411335;
  lng: number =  -3.674908;
  private updateItems(items){
    this.items = items;

    for (let item of items){
      console.log(item);
      this.markers.push({
        label:item.stationName,
        lat: item.stationCoordinates[0],
        lng: item.stationCoordinates[1]
      });
    }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]
}

