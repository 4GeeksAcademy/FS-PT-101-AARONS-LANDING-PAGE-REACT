import React from "react";

export const CardContent = (props) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-5">
            <div class="card myCard">
                <img src={props.imgUrl} class="card-img-top img-fluid" alt={props.title} />
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-center">{props.title}</h5>
                    <p class="card-text fs-6">{props.description}</p>
                    <div className="mt-auto d-flex justify-content-center">
                    <a href="#" class="btn btn-primary">{props.btnText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}