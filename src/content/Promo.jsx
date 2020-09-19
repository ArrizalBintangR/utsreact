import React, { Component, Fragment } from 'react'
import image1 from './img/perutkenyang.png'
import image2 from './img/diskon.png'
import image3 from './img/cangcimen.png'

class Promo extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    {/* IMAGE CAROUSEL PROMOSI */}
                    <div id="carouselExampleIndicators" class="carousel slide rounded-lg" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner rounded-lg">
                            <div class="carousel-item active">
                                <img src={image1} class="d-block w-100" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
                            </div>
                            <div class="carousel-item">
                                <img src={image2} class="d-block w-100" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
                            </div>
                            <div class="carousel-item">
                                <img src={image3} class="d-block w-100" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    {/* END IMAGE CAROUSEL PROMOSI */}
                </div>
            </Fragment>
        );
    }
}
export default Promo