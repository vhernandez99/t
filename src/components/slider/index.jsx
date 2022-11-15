import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from './slider-item';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

Slider.propTypes = {
    data : PropTypes.array,
};

function Slider(props) {
    const {data} = props;
    return (
        <section className="slider" id='Home'>
            <Swiper
                modules={[Navigation,  Scrollbar, A11y ]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                <SwiperSlide>
                    <SliderItem/>
                </SwiperSlide>
            </Swiper>

        </section>
    );
}

export default Slider;