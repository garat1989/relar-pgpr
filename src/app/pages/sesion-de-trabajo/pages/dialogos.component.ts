import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-usuario-detalle',
    template: `
        <article class="bg-transparente p-5 text-white">
            <h5 class="pb-4">Dialogos de investigación</h5>
            <p>La dupla coordinadora de esta sesión designará, de todos los trabajos aceptados, tres de ellos para participar de los DIÁLOGOS DE INVESTIGACIÓN.  
            <p>Cada presentadora o presentador de estos trabajos destacados, realizará un video, de hasta quince minutos de duración, donde relate los principales puntos de sus trabajos, teniendo en cuenta: introducción, objetivo/pregunta de investigación, metodología, resultados-discusión y conclusiones.</p>
            <p>Estos videos serán compartidos, en esta sección de la web, antes y durante el evento, de modo que sirvan como principales insumos para iniciar, en vivo, los Diálogos de Investigación.</p>
            <p>Asimismo, a la tríada de presentadoras y presentadores, se les propondrá un encuentro previo al evento, donde podrán conocerse, intercambiar ideas y acordar, en conjunto, una dinámica de intercambio y diálogo para ser puesta en juego con el resto de la comunidad participante, en el día y horario determinado.</p>
            <p>¿Qué resultados o conclusiones podríamos resaltar para interaccionar con nuestros colegas latinoamericanos? ¿Qué pregunta sería relevante realizar para conocer los contextos y experiencias de otros países? ¿Con quién sería posible realizar futuras colaboraciones? ¿Qué otras preguntas deberíamos realizar para generar un diálogo de investigación?</p>
        </article>
    `,
    styleUrls: ['../sesion-de-trabajo.component.css']
})
export class DialogosComponent implements OnInit {

    sesion: any;

    constructor(
        private data: DataService,
        private route: ActivatedRoute
    ){
        /* GET ID */
        const id : string = this.route.snapshot.paramMap.get('id');
        this.sesion = this.data.getSesion(id);
    }

    ngOnInit() {
    }

}