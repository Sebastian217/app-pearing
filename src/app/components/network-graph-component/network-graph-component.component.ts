import { Component, OnInit } from '@angular/core';
import { Network, DataSet, Node, Edge, IdType } from 'vis';

@Component({
  selector: 'app-network-graph-component',
  templateUrl: './network-graph-component.component.html',
  styleUrls: ['./network-graph-component.component.scss']
})
export class NetworkGraphComponentComponent implements OnInit {

  public nodes: Node;
  public edges: Edge;
  public network: Network;

  typeRelation = sessionStorage.getItem('TYPE_REALTIONAL');

  constructor() {

  }

  public ngOnInit(): void {
    var nodes = new DataSet([
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' }
    ]);
    // create an array with edges
    var edges = new DataSet([
      { from: 1, to: 3 },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 3 }
    ]);
    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {};
    var network = new Network(container, data, options);
  }
}
