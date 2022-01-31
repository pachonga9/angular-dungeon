import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-menu',
  templateUrl: './inventory-menu.component.html',
  styleUrls: ['./inventory-menu.component.css'],
})
export class InventoryMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  displayThis: boolean = true;

  close(): void {
    console.log('close clicked...');
    this.router.navigate(['']);
  }
}
