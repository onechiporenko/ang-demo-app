import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmationModalComponent } from '../modals/confirmation-modal/confirmation-modal.component';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  faTrashAlt = faTrashAlt;

  @Input() heroes: Hero[] = [];
  @Input() actionable = true;
  @Output() deleteHero = new EventEmitter<Hero>();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onDeleteHero(hero: Hero): void {
    this.modalService.show(ConfirmationModalComponent, {initialState: {confirm: this.deleteHero, payload: hero}});
  }

}
