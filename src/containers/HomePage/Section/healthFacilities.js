import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./healthFacilities.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class healthFacilities extends Component {

       render() {
              let settings = {
                     dots: false,
                     infinite: true,
                     speed: 500,
                     slidesToShow: 4,
                     slidesToScroll: 1
              };

              return (

                     <div className="section-healthFacilities">
                            <div className="healthFacilities-container">
                                   <div className="healthFacilities-header">
                                          <span className="title-section">Cơ sở y tế nổi bật</span>
                                          <button className="btn-section">Xem Thêm</button>
                                   </div>
                                   <div className="healthFacilities-body">
                                          <Slider {...settings} >
                                                 <div className="healthFacilities-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ sở 1</h6>
                                                 </div>
                                                 <div className="healthFacilities-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ sở  2</h6>
                                                 </div>
                                                 <div className="healthFacilities-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ sở  3</h6>
                                                 </div>
                                                 <div className="healthFacilities-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ sở  4</h6>
                                                 </div>
                                                 <div className="healthFacilities-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ sở  5</h6>
                                                 </div>
                                                 <div className="healthFacilities-customize">
                                                        <div className="bg-image" />
                                                        <h6>Cơ sở  6</h6>
                                                 </div>
                                          </Slider>
                                   </div>

                            </div>
                     </div>

              );
       }

}

const mapStateToProps = state => {
       return {
              isLoggedIn: state.user.isLoggedIn
       };
};

const mapDispatchToProps = dispatch => {
       return {
       };
};

export default connect(mapStateToProps, mapDispatchToProps)(healthFacilities);
