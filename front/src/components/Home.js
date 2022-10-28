import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id="encabezado_productos">Relojes Deportivos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/* 1 producto*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Categorias/Deportivo Hombre/BELL & ROSS BR-X1 R.S.20.png' alt="BELLYROSS"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Reloj Deportivo BELL & ROSS</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 5 reviews</span>
                            </div>
                            <p className='card-text'>$19.900</p><a href='http://localhost:3000' id="view_btn" className='btn btn block'>
                                Ver detalles
                            </a>
                        </div>
                    </div>
                </div>
                {/*2 producto*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Categorias/Deportivo Hombre/A. LANGE & SÖGNE ODYSSEUS.png' alt="l&SODYSEUS"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Reloj Deportivo ODYSSEUS</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 8 reviews</span>
                            </div>
                            <p className='card-text'>$40.200</p><a href='http://localhost:3000' id="view_btn" className='btn btn block'>
                                Ver detalles
                            </a>
                        </div>
                    </div>
                </div>
                 {/*3 producto*/}
                 <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Categorias/Deportivo Hombre/BREITLING SUPEROCEAN.png' alt="BREITLING"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Reloj Deportivo BREITLING</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 6 reviews</span>
                            </div>
                            <p className='card-text'>$4.300</p><a href='http://localhost:3000' id="view_btn" className='btn btn block'>
                                Ver detalles
                            </a>
                        </div>
                    </div>
                </div>
                {/*4 producto*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Categorias/Deportivo Hombre/HAMILTON KHAKI.png' alt="l&SODYSsEUS"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Reloj Deportivo HAMILTON</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 12 reviews</span>
                            </div>
                            <p className='card-text'>$1.095</p><a href='http://localhost:3000' id="view_btn" className='btn btn block'>
                                Ver detalles
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}
export default Home