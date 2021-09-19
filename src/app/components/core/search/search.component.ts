import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() isSearching: boolean;
  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  @Output() valueChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    const searchValue = this.searchTerm.nativeElement.value;
    console.log(searchValue);
  }

  onReset() {
    this.searchTerm.nativeElement.value = undefined;
    this.searchTerm.nativeElement.value = '';
  }

  closeSearch(): void {
    this.isSearching = !this.isSearching;
    this.valueChange.emit(this.isSearching);
  }


  



}
