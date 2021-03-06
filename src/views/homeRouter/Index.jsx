import React, { Component, useRef } from 'react'
import "../../assets/style/home/index.css"
import IndexHeader from "../../components/common/IndexHeader"
import { connect } from "react-redux"
import homeActionCreator from "../../store/actionCreator/Home/index"
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
// import {} from ""
class Index extends Component {
    constructor() {
        super();
        this.page = 0;
        this.isAxios = false;
        this.state = {
            classify_list: [],
            slide_list: [],
            data: [],
            leftDate: [],
            rightDate: []
        }
    }
    render() {
        return (
            <div ref={e => (this.scroll = e)} className={"home_page"}>
                <header className={"index_header"}>
                    <div className="header_address">
                        <strong className="address_icon"></strong>
                        <span className="address_name">深圳</span>
                    </div>
                    <div className="header_search">
                        <img className="header_search_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MU5mdkAAAAHnRSTlMA+fES5d1bGgytwpCJIDy9p6Z+eWMpCKRv1sjGlU+Yw8sxAAAA/0lEQVQ4y+2TWXKDMBBENVrAYjHGGPD67n/MVEhiKiORcv7dX6Lr0UMLybz1D+2KQxAI8eT+wqbB8iPb7Da58QLgq9iFZbHf4Pb2M2dc1u3RgjzyeRa68vnoIkguc7rA/MtpwGcqDdApq4d7ui8WW2rPI9ozBTRG6wyD9g4wJqATKu0FvEl1Q7S1vqvm6N4QM2ANbQJ2GXAGXTsQMmCVfmOENt1c4aq9ExzNK6azWF1wCrkxDcS0c5+5BB4a/QNtmTu3Av1unVsDtcnpIeDP7iv/FAAo8nfBA3I71HMlgK03SXcXnupLU2ySphyWMLke2+9TKmZTrl27FhLNWy/oA9CZFFU7WU6aAAAAAElFTkSuQmCC" alt="" />
                        <span className="placeholder">搜索热门演出</span>
                    </div>
                    <div className="header_icon">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAV1BMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMiFyKOAAAAHHRSTlMAwLCQ8XftzEURZffhq0IiujHF+bWZiFV/UA/dAxNAxgAAAS1JREFUOMu9kdtyhCAQRJHIVRBF3exu+v+/MyBamsQdKnnIebCnylMF07C/wLuenek7/l15cNe2LdC1ZzogfR1/7NpzAM3wLGIDwMUmhWvOOKBpokOK1bOA1HmYf9xxzqElYPMQgZ5R9EDM2cGl7/h2zZj+OXRZLFfguIaXJQ6x9/wK338VCf5RDMsHoISpie8SK3KkxZA8ofUCKFoUydtSk+IArGkAURPLGkWsHz3WjjaymB6qVg8AZS1Vz2FmxlrhAvASwGCqPY7MCFkrPGxLG1Wp5waEvXBFiQNwTJTogVAmRYsW8Oug00BurXLdWgtZfUKFgrQX9UR2wvpc4i2wg1jEFpLRSLQ5ZsCSngXmbcFJmJeaEdO+2IIay/5wEyimG9sJd968gt8D+w2fxdEtXiJn+tgAAAAASUVORK5CYII=" alt="" />
                    </div>
                </header>
                <main className="index_main">
                    <section className="index_main_section">
                        <div style={{
                            padding: "1.37333rem 0.4rem 0",
                        }}>
                            <div className="swiper-container swiper1" style={{
                                height: "3.73333rem",
                                borderRadius: "0.16rem"
                            }}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img width="100%" height="100%" src="https://image.juooo.com/group1/M00/04/40/rAoKNV6W4PKACOg2AAEj0bMT7bw022.png" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img width="100%" height="100%" src="https://image.juooo.com/group1/M00/03/94/rAoKmV59ZUyAfU1aAAESuLTnTAw739.png" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img width="100%" height="100%" src="https://image.juooo.com/group1/M00/03/95/rAoKmV6Ods6AIHoPAAFqMr3vOqU261.jpg" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img width="100%" height="100%" src="https://image.juooo.com/group1/M00/04/3E/rAoKNV6ClgWAOtm_AAEhpdmQomE538.jpg" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img width="100%" height="100%" src="https://image.juooo.com/group1/M00/03/95/rAoKmV6G87GAHBZeAAFRP1wgp3U464.jpg" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img width="100%" height="100%" src="https://image.juooo.com/group1/M00/04/3F/rAoKNV6G8wWAbQo9AAFKecTbTmI168.jpg" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img width="100%" height="100%" src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B3DeAAheBAAE8k0yWnNo649.png" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img width="100%" height="100%" src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B3CmARboCAACCt7TZJ7k095.png" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img width="100%" height="100%" src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B29-AdwTZAAB-i9-En8E765.png" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img width="100%" height="100%" src="https://image.juooo.com/group1/M00/04/17/rAoKNV4B2zOADywIAACKVI3TINE298.png" alt="" />
                                    </div>
                                    {/* {
                                        this.props.swiperList.map(v => (
                                            <div key={v.image_url} className="swiper-slide">
                                                <img width="100%" height="100%" src={v.image_url} alt="" />
                                            </div>
                                        ))
                                    } */}
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>

                        <section className="index_advertion">
                            <div className="index_labelItem">
                                {
                                    this.state.classify_list.map(v => (
                                        <div key={v.id} style={{
                                            width: "20%",
                                            marginBottom: "0.29333rem"
                                        }}>
                                            <a className="label-item__block__column" href="/#">
                                                <img className="label-item__block__column__icon" src={v.pic} alt="" />
                                                <span className="label-item__block__column__title">{v.name}</span>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                            <section className="vip_ahead">
                                <a href="/vip/index/1">
                                    <div className="vip_header_title">
                                        <div className="vip-ahead__advert__left">
                                            <img className="vip-ahead__advert__left__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAABd1BMVEUAAADvz6743L/22rz/6M/43cDpx6L/6M7w0bD43sHqx6T848ny1LTryKX33L//6M/z1rfryab017nsyqf/6M/538P+587tzKn95cv95cv/5872273uzav+5s3oxaD+5s3vz67pxqH95cr95crtzKnx0rLqx6T+5s3vzq3ryabw0bDtzKnx0rLx0rLoxJ/oxJ/95cz12bvsy6j12bv/6M/sy6jtzKrtzKruzq3oxaDoxJ/uzq3w0bDpx6Ly1LTryKX01rf/6M9HJwj95Mr017jtzKnsyqfryKX+5s3+5cz33L/227343sH12bv538P64cXy1LTuzavx0rLw0bDvz6774sfpxqBIKAnpx6KPclTix6uPclVXNxjmy7DKro+1mHyTdljw1LjlzLLfw6bYvaLNspSqi2uXeFp8XkB3WTtsTS5gQCJfPyBZOhtLKwzmzbPqy6vgxqjUuJrIqIjDpoi5noKylXaihWeegmWOcFKQcFCDY0RnSCn+eriUAAAAQXRSTlMA/g4J+hv5A/n48/Lq6uTh4eDS0s7JxrGwqI2Kh21qaVtbT0pCNzcwJBwUBfXz6uTNyMjBv7+kmHd2cGpNTCwrAhUStP0AAAG1SURBVDjLjdAHU9tAEAXgZ8uF3ktooff03hOtSXMhDoYowhjTAoQQ0nt+PLuyZOmwJPhmpNvZfXM7c7DND3XF9BqxruEkFNEePcANDV7n9EB98BjTQ4x7FreGBVujcPTrofphm469CPSJv9g0LMkrLwNt0Rb/e55ADKWClagkxzBYvNHpvieiox9S/Sa2lioXi1Qs7qRSjXF5whXH4kce70u1ecTV3krZNMk0d7jRB4y9csmVB1JscPEhw8UqrVZG4+hedP2RhXxuG0TGO+lwsDLqRn3W9Ys4kM5m9/ncqLS+2KN6tKRdZWKl9Los3kwrWjCQcUmCvub+y+KMagDa1VzVNrHvP2VxTnVdA+Y6Fhx5gzO7a0SHhQVFRxQs3lZtyENyzlhXc21xWB415W0HZDHziqYZ2CYvLFX8I3H4ecnr4iSqHtQVLHvEjG8Fr7oJeIxElsUusb/LXpERKO5EAtzHCYOvfQ2ixq2nPm6j1nxvba43CR/atWcn3NTga65TzXVGEWC2/blH+ywCPW52c80zCDHV4OQaphDqYeKtJTGBU4y+EYlRnOquBM/jDO5dvuSTOwZ3nQUiwxrMfwAAAABJRU5ErkJggg==" alt="" />
                                            <span className="vip-ahead__advert__left__tip">会员专享折扣</span>
                                        </div>
                                        <div className="vip-ahead__advert__right">
                                            <span className="vip-ahead__advert__right__lab">99元/年</span>
                                            <span className="vip-ahead__advert__right__icon"></span>
                                        </div>
                                    </div>
                                </a>
                                <div className="vip_ahead_eswiper">
                                    <div className="swiper-container swiper2">
                                        <div className="swiper-wrapper">
                                            {
                                                this.props.discountList.map(v => (
                                                    <div key={v.pic} className="swiper-slide">
                                                        <div className="vip-ahead__list">
                                                            <div className="vip-ahead__list__item">
                                                                <a href="/#"><img src={v.pic} alt="" /></a>
                                                            </div>
                                                            <div className="vip-ahead__list__info">
                                                                <a href="/ticket/114166"><h3 className="vip-ahead__list__info__title text-double">{v.schedular_name}</h3></a>
                                                                <p className="vip-ahead__list__info__tip item-discount">
                                                                    <span className="item-discount__num c_ff6">{v.min_discount}</span>
                                                                    <span className="vip-ahead__list__info__tip__text">折起</span>
                                                                </p>
                                                            </div>
                                                            <a href="/ticket/114166">
                                                                <span className="vip-ahead__list__lab">立即抢购</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>
                            </section>
                            <div className="index_advertise">
                                <a className="advertion__block" href="/#"><img src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png" alt="" /></a>
                            </div>
                        </section>
                        <div className="index-hot-wrap">
                            <div className="blockContent">
                                <IndexHeader title={"热门演出"}></IndexHeader>
                                <section>
                                    <div className="hot-block__list hot-list">
                                        <div className="eswiper-container eswiper-container-horizontal">
                                            <div className="eswiper-wrapper">
                                                {
                                                    this.props.hot_list.map(v => {
                                                        return (
                                                            <div key={v.pic} className="eswiper-slide eswiper-slide-active">
                                                                <a className="hot-block__list__wrap" href={"/ticket/"+v.schedular_url.substring(27)}>
                                                                    <div className="hot-block__list__wrap__item">
                                                                        <img src={v.pic} alt="" />
                                                                    </div>
                                                                    <h3 className="hot-block__list__wrap__title text-double">{v.show_name}</h3>
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="index-tour-wrap">
                            <div className="blockContent">
                                <IndexHeader title={"巡回演出"}></IndexHeader>
                                <div className="tour-wrap__info">
                                    <div className="tour-block">
                                        <div className="tour-container">
                                            <div className="tour-info">
                                                <div className="tour-block__item">
                                                    <div className="ju-schedule-cell-wrapper middle">
                                                        <div className="ju-schedule-cell">
                                                            <div className="ju-schedule-cell__cover">
                                                                <div className="image ju-schedule-cell__cover__img"><img src="https://image.juooo.com/group1/M00/04/3E/rAoKNV59rlWAUODrAABlWN_fCvM347.jpg" alt="" /></div>
                                                            </div>
                                                            <div className="ju-schedule-cell__info">
                                                                <div className="ju-schedule-cell__info__date-week">
                                                                    <span className="ju-schedule-cell__info__date-week__date"></span>
                                                                    <span className="ju-schedule-cell__info__date-week__week">2020.08.13 - 10.03</span>
                                                                </div>
                                                                <div className="ju-schedule-cell__info__name">
                                                                    <div className="ju-schedule-cell__info__name__content ">聚橙制作 | 法语音乐剧《摇滚红与黑》</div>
                                                                </div>
                                                                <div className="ju-schedule-cell__info__place"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tour-block__item__bottom">
                                                        <p className="tour-block__item__bottom__price">
                                                            <span className="tour-block__item__bottom__price--price">￥</span>
                                                            <span className="tour-block__item__bottom__price--price">80</span>
                                                            <span className="tour-block__item__bottom__price--tips">起</span>
                                                        </p>
                                                        <div className="tour-block__item__bottom__citys">
                                                            <div className="tour-block__item__bottom__citys__left">
                                                                <span className="tour-block__item__bottom__citys__left--num">6</span>
                                                                <span>城巡演</span>
                                                            </div>
                                                            <div className="tour-block__item__bottom__citys__right">
                                                                <span>上海<i className="delimiter">|</i></span>
                                                                <span>广州<i className="delimiter">|</i></span>
                                                                <span>深圳<i className="delimiter">|</i></span>
                                                                <span>成都<i className="delimiter">|</i></span>
                                                                <span>西安<i className="delimiter">|</i></span>
                                                                <span>杭州<i className="delimiter">|</i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="index-category-block index-category-wrap">
                            <section className="category-block__list">
                                <IndexHeader style={{ "padding-left": "0.4rem" }} title="舞台剧"></IndexHeader>
                                <div className="category-block__list__row">
                                    <div className="row--bg">
                                        <a href="/#" className="category-block__list__row__wrap">
                                            <div className="block__list__row__item">
                                                <img src="https://image.juooo.com//group1/M00/04/21/rAoKNV4Jj32AC3hcAAMtvdtNV6E061.png" alt="" />
                                            </div>
                                            <div className="category-block__list__row__info">
                                                <p className="category-block__list__row__info__date">
                                                    <strong>2020.07.03 </strong>
                                                    <span>周五 20:00</span>
                                                </p>
                                                <h3 className="category-block__list__row__info__title text-double">
                                                    【演出延期】2020第七届城市戏剧节荒诞喜剧《劫出人生》-深圳站
            </h3>
                                                <p className="category-block__list__row__info__venue text-single">
                                                    深圳 |
                                                    南山文体中心剧院小剧院
            </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="category-block__list__column">
                                    <div className="eswiper-container eswiper-container-horizontal">
                                        <div className="eswiper-wrapper">
                                            {
                                                this.props.stageList.map(v => (
                                                    <div key={v.sche_id} className="eswiper-slide eswiper-slide-active">
                                                        <a href={"/ticket/"+v.sche_id} className="category-block__list__column__wrap">
                                                            <div className="category-block__list__column__item">
                                                                <img src={v.pic} alt="" />
                                                            </div>
                                                            <h3 className="category-block__list__column__title text-double">
                                                                {v.schedular_name}
                                                            </h3>
                                                            <p className="category-block__list__column__price">
                                                                <strong className="c_ff6">{v.low_price}</strong>
                                                                <span>起</span>
                                                            </p>
                                                        </a>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="index-model-block">
                            <h3 className="model-block__title">为你推荐</h3>
                            <div className="index-show-model">
                                <div className="index-show-model__main">
                                    {/* 瀑布流 */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            height: 500
                                        }} className="left">
                                        {
                                            this.state.leftDate.map(v => (
                                                <div
                                                    key={v.schedular_id}
                                                    style={{
                                                        opacity: 1
                                                    }} onClick={()=>{console.log(this)}} className="index-show-model__item">
                                                    <div className="index-falls-cell">
                                                        <div className="index-falls-cell__image">
                                                            <img src={v.pic} alt="" />
                                                        </div>
                                                        <div className="falls-cell__info">
                                                            <div className="falls-cell__info__title">
                                                                <div className="falls-cell__info__title__sponsor"><img src="https://image.juooo.com/upload/i.png" alt="" /></div>
                                                                <h3 className="falls-cell__info__title__cell">{v.name}</h3>
                                                            </div>
                                                            <div className="falls-cell__info__date">
                                                                <span>2020.{v.show_time_top.replace("/", ".").replace("/", ".")}</span>
                                                            </div>
                                                            <p className="falls-cell__info__price">
                                                                <span className="falls-cell__info__price--price">￥{v.min_price} </span>
                                                                <span className="falls-cell__info__price__tip">起</span>
                                                            </p>
                                                            <p className="falls-cell__info__support">
                                                                {
                                                                    v.support_desc.map((item, i) => (
                                                                        <span key={i} className="falls-cell__info__support--label">{item}</span>
                                                                    ))
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))

                                        }
                                    </div>
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: 175
                                        }} className="right">
                                        {
                                            this.state.rightDate.map(v => (
                                                <div
                                                    key={v.schedular_id}
                                                    style={{
                                                        opacity: 1
                                                    }} className="index-show-model__item">
                                                    <div className="index-falls-cell">
                                                        <div className="index-falls-cell__image">
                                                            <img src={v.pic} alt="" />
                                                        </div>
                                                        <div className="falls-cell__info">
                                                            <div className="falls-cell__info__title">
                                                                <div className="falls-cell__info__title__sponsor"><img src="https://image.juooo.com/upload/i.png" alt="" /></div>
                                                                <h3 className="falls-cell__info__title__cell">{v.name}</h3>
                                                            </div>
                                                            <div className="falls-cell__info__date">
                                                                <span>2020.{v.show_time_top.replace("/", ".").replace("/", ".")}</span>
                                                            </div>
                                                            <p className="falls-cell__info__price">
                                                                <span className="falls-cell__info__price--price">￥{v.min_price} </span>
                                                                <span className="falls-cell__info__price__tip">起</span>
                                                            </p>
                                                            <p className="falls-cell__info__support">
                                                                {
                                                                    v.support_desc.map((item, i) => (
                                                                        <span key={i} className="falls-cell__info__support--label">{item}</span>
                                                                    ))
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div >
        )
    }
    getHW(data) {
        let leftDate = [];
        let rightDate = [];
        data.forEach((item, index) => {
            if (index === 0) {
                leftDate.push(item)
            } else if (index === 1) {
                rightDate.push(item)
            } else if (index % 2 === 0) {
                leftDate.push(item)
            } else {
                rightDate.push(item)
            }
        })
        this.setState({
            leftDate,
            rightDate
        })
    }
    async getShowList(city_id = 0) {
        this.page += 1
        const { data } = await this.$axios.get("/Show/Search/getShowList", {
            params: {
                city_id: 0,
                page: this.page
            }
        })
        this.setState({
            data: [
                ...this.state.data,
                ...data.list
            ]
        }, () => {
            this.getHW(this.state.data)
        })

    }
    async componentDidMount() {
        this.getShowList()
        window.addEventListener('scroll', async function (e) {
            const { scrollHeight, clientHeight } = e.target.body;
            let isBottom = (window.scrollY + clientHeight + 40) > scrollHeight;
            // let isAxios = false;
            if (isBottom) {
                isBottom = false;
                // this.isAxios = true;
                setTimeout(() => {
                    this.getShowList()
                }, 2000)
                // if (isAxios) {
                //     console.log(1111111111111111)
                //     isAxios = false;

                // }
            }
        }.bind(this), false);
        new Swiper('.swiper1', {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                bulletClass: "eswiper-pagination-bullet2",
                bulletActiveClass: "eswiper-pagination-bullet-active2"
            },
            observer: true,
            observeParents: true,
        });
        new Swiper('.swiper2', {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                bulletClass: "eswiper-pagination-bullet",
                bulletActiveClass: "eswiper-pagination-bullet-active"
            },
            observer: true,
            observeParents: true,
        });
        const { data } = await this.$axios.get("/home/index/getClassifyHome", {
            params: {
                city_id: 0
            }
        })
        this.setState({
            classify_list: data.classify_list,
            slide_list: data.slide_list,
        })
        this.props.getHotList();
        this.props.getFloorList();
        // this.props.getSwiperList();
        this.props.getDiscountList()
    }
}
function mapStateToProps(state) {
    // console.log(state)
    return {
        hot_list: state.homeReducer.hot_list,
        stageList: state.homeReducer.stageList,
        // swiperList: state.homeReducer.swiperList,
        discountList: state.homeReducer.discountList
    }
}
function mapDisapatchToProps(dispatch) {
    return {
        getHotList() {
            dispatch(homeActionCreator.getHotList.call())
        },
        getFloorList() {
            dispatch(homeActionCreator.getFloorShowList.call())
        },
        // getSwiperList() {
        //     dispatch(homeActionCreator.getSwiperPics.call())
        // },
        getDiscountList() {
            dispatch(homeActionCreator.getDiscountList.call())
        }
    }
}

export default connect(mapStateToProps, mapDisapatchToProps)(Index)
