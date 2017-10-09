import {Component, ElementRef, Input, NgModule, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

declare var $: any;
declare var require: any;

@Component({
  selector: 'l-locationpicker',
  styles: [`
    .l-locationpicker-class {
      position: relative;
      display: inline-block;
      overflow: hidden;
      width: 700px;
      height: 500px;
    }
  `],
  template: `
    <div #locationpickerEl>
      <div class="locationpicker-loading">Loading</div>
    </div>
  `
})
export class LocationpickerComponent implements OnInit {
  
  @Input() lSettings: object = {};
  
  @Input() lClass: string = 'l-locationpicker-class';
  
  @ViewChild('locationpickerEl') locationpickerEl: ElementRef;
  
  $picker: any;
  
  constructor(private rd: Renderer2) {
  }
  
  ngOnInit() {
    require.ensure(['./../locationpicker.jquery.js'], require => {
      require('./../locationpicker.jquery.js');
      this.$picker = $(this.locationpickerEl.nativeElement).locationpicker(this.lSettings);
      this.rd.addClass(this.locationpickerEl.nativeElement, this.lClass)
    });
  }
  
  getLocation() {
    return this.$picker.locationpicker('location');
  }
  
  setPosition(position: { radius?: number, latitude: number, longitude: number }) {
    this.$picker.locationpicker('location', position);
  }
  
  subscribeEvent(event: string, callback: () => void) {
    this.$picker.locationpicker('subscribe', {event, callback})
  }
  
  getMap() {
    return this.$picker.locationpicker('map');
  }
  
  autosize() {
    this.$picker.locationpicker('autosize');
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [LocationpickerComponent],
  exports: [LocationpickerComponent]
})
export class LocationpickerModule {
}
