import React from 'react';
import './bienvenidos.css';

//componente a exportar
export default function Bienvenidos(){
    return(
        <div>
            <div>
                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
                <div class="content">
                    <div class="content__container">
                        <p class="content__container__text">Hola</p>
                            <ul class="content__container__list">
                            <li class="content__container__list__item">Mundo !</li>
                            <li class="content__container__list__item">Amigo !</li>
                            <li class="content__container__list__item">Usuario !</li>
                            <li class="content__container__list__item">Futuro </li>
                        </ul>
                    </div>
                </div>
            </div>
         
        </div>
     
    );
   }