import { Component, OnInit } from '@angular/core';
import { nvD3 } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
declare let d3: any, nv: any, color: any;

import 'nvd3/build/nv.d3.css';

@Component({
  selector: 'visual',
  viewProviders: [nvD3],
  templateUrl: 'visual.component.html'
})
export class VisualComponent implements OnInit {
  private options: any;
  private data: any;

  ngOnInit() {
    const color = d3.scale.category20();

    this.options = {
      chart: {
        type: 'forceDirectedGraph',
        height: 600,
        width: 700, //(function () { return nv.utils.windowSize().width })(),
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        color: function (d) {
          return color(d.group)
        },
        nodeExtras: function (node) {
          node && node
            .append("text")
            .attr("dx", 8)
            .attr("dy", ".35em")
            .text(function (d) { return d.name })
            .style('font-size', '10px');
        }
      }
    };

    this.data = {
      "nodes": [
        { "name": "Myriel", "group": 1 },
        { "name": "Napoleon", "group": 1 },
        { "name": "Mlle.Baptistine", "group": 1 },
        { "name": "Mme.Magloire", "group": 1 },
        { "name": "CountessdeLo", "group": 1 },
        { "name": "Geborand", "group": 1 },
        { "name": "Champtercier", "group": 1 },
        { "name": "Cravatte", "group": 1 },
        { "name": "Count", "group": 1 },
        { "name": "OldMan", "group": 1 },
        { "name": "Labarre", "group": 2 },
        { "name": "Valjean", "group": 2 },
        { "name": "Marguerite", "group": 3 },
        { "name": "Mme.deR", "group": 2 },
        { "name": "Isabeau", "group": 2 },
        { "name": "Gervais", "group": 2 },
        { "name": "Tholomyes", "group": 3 },
        { "name": "Listolier", "group": 3 },
        { "name": "Fameuil", "group": 3 },
        { "name": "Blacheville", "group": 3 },
        { "name": "Favourite", "group": 3 },
        { "name": "Dahlia", "group": 3 },
        { "name": "Zephine", "group": 3 },
        { "name": "Fantine", "group": 3 },
        { "name": "Mme.Thenardier", "group": 4 },
        { "name": "Thenardier", "group": 4 },
        { "name": "Cosette", "group": 5 },
        { "name": "Javert", "group": 4 },
        { "name": "Fauchelevent", "group": 0 },
        { "name": "Bamatabois", "group": 2 },
        { "name": "Perpetue", "group": 3 },
        { "name": "Simplice", "group": 2 },
        { "name": "Scaufflaire", "group": 2 },
        { "name": "Woman1", "group": 2 },
        { "name": "Judge", "group": 2 },
        { "name": "Champmathieu", "group": 2 },
        { "name": "Brevet", "group": 2 },
        { "name": "Chenildieu", "group": 2 },
        { "name": "Cochepaille", "group": 2 },
        { "name": "Pontmercy", "group": 4 },
        { "name": "Boulatruelle", "group": 6 },
        { "name": "Eponine", "group": 4 },
        { "name": "Anzelma", "group": 4 },
        { "name": "Woman2", "group": 5 },
        { "name": "MotherInnocent", "group": 0 },
        { "name": "Gribier", "group": 0 },
        { "name": "Jondrette", "group": 7 },
        { "name": "Mme.Burgon", "group": 7 },
        { "name": "Gavroche", "group": 8 },
        { "name": "Gillenormand", "group": 5 },
        { "name": "Magnon", "group": 5 },
        { "name": "Mlle.Gillenormand", "group": 5 },
        { "name": "Mme.Pontmercy", "group": 5 },
        { "name": "Mlle.Vaubois", "group": 5 },
        { "name": "Lt.Gillenormand", "group": 5 },
        { "name": "Marius", "group": 8 },
        { "name": "BaronessT", "group": 5 },
        { "name": "Mabeuf", "group": 8 },
        { "name": "Enjolras", "group": 8 },
        { "name": "Combeferre", "group": 8 },
        { "name": "Prouvaire", "group": 8 },
        { "name": "Feuilly", "group": 8 },
        { "name": "Courfeyrac", "group": 8 },
        { "name": "Bahorel", "group": 8 },
        { "name": "Bossuet", "group": 8 },
        { "name": "Joly", "group": 8 },
        { "name": "Grantaire", "group": 8 },
        { "name": "MotherPlutarch", "group": 9 },
        { "name": "Gueulemer", "group": 4 },
        { "name": "Babet", "group": 4 },
        { "name": "Claquesous", "group": 4 },
        { "name": "Montparnasse", "group": 4 },
        { "name": "Toussaint", "group": 5 },
        { "name": "Child1", "group": 10 },
        { "name": "Child2", "group": 10 },
        { "name": "Brujon", "group": 4 },
        { "name": "Mme.Hucheloup", "group": 8 }
      ],
      "links": [
        { "source": 1, "target": 0, "value": 1 }
      ]
    };
  }
}