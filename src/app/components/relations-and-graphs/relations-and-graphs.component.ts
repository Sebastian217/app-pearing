import { Component, OnInit } from '@angular/core';

import { Matrix } from 'ml-matrix';
import { Network, DataSet, Node, Edge, IdType } from 'vis';
import { Router } from '@angular/router';


@Component({
  selector: 'app-relations-and-graphs',
  templateUrl: './relations-and-graphs.component.html',
  styleUrls: ['./relations-and-graphs.component.scss']
})
export class RelationsAndGraphsComponent implements OnInit {


  // Matrices examples
  matrice8 = [
    [1, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 0, 1]
  ];

  matrice4 = [
    [1, 0, 1, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1]
  ];


  valueMatrixOne = 2;

  generateCheckMatrix: boolean;
  activateTakeNumbers: boolean;

  matrixFinal: any = [];
  columns: number;
  rows: number;
  activateRenderData = false;
  numberForMatriz: number;
  arrayColumns = [];
  arrayFilas = [];
  arrayFilasTemp = [];

  countColumns: number = 0;
  countRows: number = 0;

  validateMatrixCuadrada: boolean;
  validateParOrImpar: boolean = true;




  constructor(private router: Router) { }

  ngOnInit() {
  }

  validateRelations() {
    this.validateMatrixCuadrada = false;
    this.validateParOrImpar = true;
    this.matrixFinal = [];
    this.arrayColumns = [];
    this.arrayFilas = [];
    this.arrayFilasTemp = [];
    this.validateParOrImpar = (Number(this.columns) % 2) || (Number(this.rows) % 2) ? false : true;

    this.arrayColumns = new Array(Number(this.columns));
    this.arrayFilas = new Array(Number(this.rows));

    if (!this.validateParOrImpar) {
      return false;
    }


    if (Number(this.rows) !== Number(this.columns)) {
      return this.validateMatrixCuadrada = true;
    }

    this.matrixFinal = Matrix.ones(Number(this.columns), Number(this.rows));
    console.log(this.matrixFinal);
    this.activateRenderData = true;
  }

  matrixComplete(event: Event, indexColumn, indexRow) {

    this.arrayFilasTemp.push(Number(event['key']));
  }

  validateValues(event) {
    let haveEquals = this.arrayFilasTemp.find((item, index) => item === this.arrayFilasTemp[index]);
    let haveDiferents = this.arrayFilasTemp.find((item, index) => item !== this.arrayFilasTemp[index]);
    if (haveEquals) {
      this.renderRelationAndGrafo(1);
    } else {
      if (haveDiferents) {
        this.renderRelationAndGrafo(2);
      }
    }
  }

  renderRelationAndGrafo(typeRelation) {
    switch (typeRelation) {
      case 1:
        // Reflexiva
        sessionStorage.setItem('TYPE_REALTIONAL', '1');
        this.router.navigateByUrl('relations-and-grafos')
        break;
      case 2:
        // Irreflexiva
        sessionStorage.setItem('TYPE_REALTIONAL', '2');
        break;
      default:
        break;
    }
  }

}
