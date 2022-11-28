import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import RoadMapItem from './roadmap-item';
import { useTranslation } from 'react-i18next';

RoadMap.propTypes = {
    data: PropTypes.array,
};

function RoadMap(props) {

    const {data} = props;
    const [t, i18n] = useTranslation("global")

    const [dataBlock] = useState(
        {
            subtitle: 'Ruta de Metas',
            title: 'Pepe’s Lab '
        }
    )

    return (
        <section className="tf-section tf-roadmap" id='RoadMap'>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title mb-30" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{dataBlock.title}</h4>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="roadmap scrol">
                            <RoadMapItem title={t("RoadMap.25")} subtitle={t("RoadMap.25Title")}/>
                            <RoadMapItem title={t("RoadMap.50")} subtitle={t("RoadMap.50Title")}/>
                            <RoadMapItem title={t("RoadMap.75")} subtitle={t("RoadMap.75Title")}/>
                            <RoadMapItem title={t("RoadMap.100")} subtitle={t("RoadMap.100Title")}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RoadMap;