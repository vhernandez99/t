import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import { Scrollbar, A11y , Navigation  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import TeamItem from './team-item';
import { useTranslation } from 'react-i18next';

Team.propTypes = {
    data: PropTypes.array,
};

function Team(props) {

    const {data} = props;
    const [t, i18n] = useTranslation("global")

    const [dataBlock] = useState({
        subtitle: 'Our team',
        title: 'Meet our TEAM',
        desc: '',
        text: ''
    })
    return (
        <section className="tf-section tf-team" id='Team'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6 col-12">
                        <div className="tf-title st2 mb-61" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{t("Team.Tittle")}</p>
                            <h4 className="title">{t("Team.Meet")}</h4>
                        </div>
                        <div className="content mobie-30" data-aos="fade-up" data-aos-duration="800">
                            <div className="h7 txt-tranf-cap m-b16">
                                {dataBlock.desc}
                            </div>
                            <p>{dataBlock.text}</p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6 col-12"> 
                        <div className="wrap-team" data-aos="fade-up" data-aos-duration="800">
                            <Swiper
                                modules={[ Navigation , Scrollbar, A11y ]}
                                    spaceBetween={30}
        
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            },
                                        767: {
                                            slidesPerView: 1,
                                        },
                                        991: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    // navigation
                                    scrollbar={{ draggable: true }}
                                >
                                {
                                    data.map(item => (
                                        <SwiperSlide key={item.id}>
                                            <TeamItem item={item} />
                                        </SwiperSlide>
                                        
                                    ))
                                }
                            </Swiper>
                        </div>                   
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;