import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-goty',
	templateUrl: './goty.component.html',
	styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

	juegos: Game[] = [];

	constructor(private gameService: GameService) { }

	ngOnInit(): void {
		this.gameService.getNominados()
			.subscribe(juegos => {
				console.log('resp', juegos);
				this.juegos = juegos;
			});
	}

	votarJuego( juego: Game ) {
		this.gameService.votarJuego(juego.id)
			.subscribe( (resp: { ok: boolean, mensaje: string }) => {
				
				if ( resp.ok ) {
					Swal.fire('Gracias', resp.mensaje, 'success');
				} else {
					Swal.fire('Ooops', resp.mensaje, 'error');
				}
			});
	}; 	

}
