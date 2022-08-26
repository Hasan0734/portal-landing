import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { DownloadIcon, JPGIcon } from "../../../../assets/svg/svg";
export default class FerieSlider extends Component {
  render() {
    return (
      <div className=" m-auto" style={{ width: "60%" }}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
            clickableClass: "pagination_button",
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className="ferie_slider_area">
              <div className="slider_area">
                <div className="slider_item p-5">
                  <h5 className="title">Spesa di</h5>
                  <h5 className="name_profe">Sandra Sabia - Ux Designer</h5>

                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="text_label">Data</p>
                      <p className="text_value">11/07/22</p>
                    </div>
                    <div>
                      <p className="text_label">Categoria</p>
                      <p className="text_value">Taxi</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="text_label">Allegati</p>
                      <a href="#download" className="attachment">
                        <JPGIcon/>{" "}
                        <span className="mx-2">Fattura Taxi 11/0... </span>
                       <DownloadIcon/>
                      </a>
                    </div>
                    <div>
                      <p className="text_label">Costo sostenuto</p>
                      <p className="amount">36€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ferie_slider_area">
              <div className="slider_area">
                <div className="slider_item p-5">
                  <h5 className="title">Spesa di</h5>
                  <h5 className="name_profe">Sandra Sabia - Ux Designer</h5>

                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="text_label">Data</p>
                      <p className="text_value">11/07/22</p>
                    </div>
                    <div>
                      <p className="text_label">Categoria</p>
                      <p className="text_value">Taxi</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="text_label">Allegati</p>
                      <a href="#download" className="attachment">
                     <JPGIcon/>
                        <span className="mx-2">Fattura Taxi 11/0... </span>
                       <DownloadIcon/>
                      </a>
                    </div>
                    <div>
                      <p className="text_label">Costo sostenuto</p>
                      <p className="amount">36€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="mt-5 ferie_btns d-flex justify-content-center gap-3">
          <button >Rifiuta</button>
          <button className="active">Approva</button>
        </div>
      </div>
    );
  }
}
