import { Directive, ElementRef, Renderer, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Gauge } from './libs/gauge.min.js';

@Directive({ selector: '[gauge]' })
export class GaugeDirective implements OnInit, OnDestroy {
  @Input('value') value: number = 1;

  constructor(private renderer: Renderer, private el: ElementRef) { }

  ngOnInit() {
    console.log(Gauge);
  }

  ngAfterViewInit() {
    console.log(Gauge);
    var opts = {
      lines: 12, // The number of lines to draw
      angle: 0.02, // The span of the gauge arc
      lineWidth: 0.44, // The line thickness
      pointer: {
        length: 0.7, // The radius of the inner circle
        strokeWidth: 0.035, // The thickness
        color: '#5bc0de' // Fill color
      },
      staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [0, 25, 50, 75, 100],  // Print labels at these values
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
      limitMax: false,     // If true, the pointer will not go past the end of the gauge
      colorStart: '#d9534f',   // Colors
      colorStop: '#5bc0de',    // just experiment with them
      strokeColor: '#E0E0E0',  // to see which ones work best for you
      percentColors: [[0.0, "#5cb85c"], [1.0, "#d9534f"]],
      generateGradient: true,
      highDpiSupport: true     // High resolution support
    };
    var gauge = new Gauge(this.el.nativeElement).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(this.value); // set actual value
  }

  ngOnDestroy() {
  }
}
