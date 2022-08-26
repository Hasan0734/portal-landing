import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { DownloadIcon, JPGIcon } from "../../../../assets/svg/svg";

export default class RimborsiSlider extends Component {
  render() {
    return (
      <div className="col-md-7">
        <div>
          <Swiper
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
           
            modules={[ Navigation, Autoplay]}
          >
            <SwiperSlide>
              <div className="rimborsi_slider_area">
                <div className="slider_area">
                  <div className="slider_item p-5">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="title">Spesa di</h5>
                        <h5 className="name_profe">
                          Sandra Sabia - Ux Designer
                        </h5>
                      </div>
                      <div>
                        <p className="text_label">Data</p>
                        <p className="text_value">11/07/22</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="text_label">Veicolo</p>
                        <p className="text_value">Ford Puma</p>
                      </div>
                      <div>
                        <p className="text_label">Targa</p>
                        <p className="text_value">WE 0987 IT</p>
                      </div>
                      <div>
                        <p className="text_label">Proprietà</p>
                        <p className="text_value">Azienda</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="text_label">Partenza</p>
                        <p className="text_value">Via Capuan...</p>
                      </div>
                      <div>
                        <p className="text_label">Arrivo</p>
                        <p className="text_value">Via Giovan...</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="text_label">Partenza</p>
                        <p className="text_value">Via Giovann..</p>
                      </div>
                      <div>
                        <p className="text_label">Arrivo</p>
                        <p className="text_value">Via Capuan...</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="text_label">Km Totali</p>
                        <p className="text_value">1200</p>
                      </div>
                      <div>
                        <p className="text_label">Costo per Km</p>
                        <p className="text_value"></p>
                      </div>
                      <div>
                        <p className="text_label">Costo</p>
                        <p className="amount">94€</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="text_label">Allegati</p>
                        <div className="d-flex gap-2">
                          <div>
                            {" "}
                            <a href="#download" className="attachment">
                              <JPGIcon/>{" "}
                              <span className="mx-2">
                                Fattura Taxi 11/0...{" "}
                              </span>
                              <DownloadIcon/>
                            </a>
                          </div>
                          <div>
                            <a href="#download" className="attachment">
                             <JPGIcon/>{" "}
                              <span className="mx-2">
                                Fattura Taxi 11/0...{" "}
                              </span>
                              <DownloadIcon/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}
