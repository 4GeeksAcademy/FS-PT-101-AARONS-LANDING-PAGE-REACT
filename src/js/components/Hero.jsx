import React from "react";

export const HeroBar = () => {
    return (
        <div className="p-5 mt-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-3">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-5 mb-5">
                        <h1 className="display-6 fw-bold mb-4">Welcome to Digimon Adventure!</h1>
                        <p className="col-md-8 fs-5 mb-4">Acompaña a los valientes elegidos y sus Digimon en aventuras épicas llenas de batallas, evolución y amistad. Descubre criaturas increíbles, enfrenta desafíos y despierta el poder que hay en ti. ¡El viaje digital comienza ahora!</p>
                        <button className="btn btn-primary btn-lg" type="button">Read more</button>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <img className="myimg" src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/e31789e82dd7b6f5911c1efee36829e8.jpg" alt="digimon fondo" />
                    </div>
                </div>
            </div>
        </div>
    );
}