import React from 'react'
import { Link } from "react-router-dom";
import Portada from "../../assets/img/img01.jpg";
import Portada2 from "../../assets/img/img02.jpg";
import Portada3 from "../../assets/img/img03.jpg";
import "./style.css"
export default function Inicio() {
    return (
        <div className="inicio">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                     <div class="carousel-header">
                        <h1 class="bg-blur-creme">NIKE SHOP</h1>
                    </div>
                    <div class="carousel-item active">
                        <img src={Portada} alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={Portada2} alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={Portada3} alt="" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
