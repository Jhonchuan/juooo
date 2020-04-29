import React, { Component } from 'react'
import "../../assets/style/home/index.css"
export default class Index extends Component {
    render() {
        return (
            <div className={"home_page"}>
                <header className={"index_header"}>
                    <div className="header_address">
                        <strong className="address_icon"></strong>
                        <span className="address_name">深圳</span>
                    </div>
                    <div className="header_search">
                        <img className="header_search_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MU5mdkAAAAHnRSTlMA+fES5d1bGgytwpCJIDy9p6Z+eWMpCKRv1sjGlU+Yw8sxAAAA/0lEQVQ4y+2TWXKDMBBENVrAYjHGGPD67n/MVEhiKiORcv7dX6Lr0UMLybz1D+2KQxAI8eT+wqbB8iPb7Da58QLgq9iFZbHf4Pb2M2dc1u3RgjzyeRa68vnoIkguc7rA/MtpwGcqDdApq4d7ui8WW2rPI9ozBTRG6wyD9g4wJqATKu0FvEl1Q7S1vqvm6N4QM2ANbQJ2GXAGXTsQMmCVfmOENt1c4aq9ExzNK6azWF1wCrkxDcS0c5+5BB4a/QNtmTu3Av1unVsDtcnpIeDP7iv/FAAo8nfBA3I71HMlgK03SXcXnupLU2ySphyWMLke2+9TKmZTrl27FhLNWy/oA9CZFFU7WU6aAAAAAElFTkSuQmCC" alt=""/>
                        <span className="placeholder">搜索热门演出</span>
                    </div>
                    <div className="header_icon">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAV1BMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMiFyKOAAAAHHRSTlMAwLCQ8XftzEURZffhq0IiujHF+bWZiFV/UA/dAxNAxgAAAS1JREFUOMu9kdtyhCAQRJHIVRBF3exu+v+/MyBamsQdKnnIebCnylMF07C/wLuenek7/l15cNe2LdC1ZzogfR1/7NpzAM3wLGIDwMUmhWvOOKBpokOK1bOA1HmYf9xxzqElYPMQgZ5R9EDM2cGl7/h2zZj+OXRZLFfguIaXJQ6x9/wK338VCf5RDMsHoISpie8SK3KkxZA8ofUCKFoUydtSk+IArGkAURPLGkWsHz3WjjaymB6qVg8AZS1Vz2FmxlrhAvASwGCqPY7MCFkrPGxLG1Wp5waEvXBFiQNwTJTogVAmRYsW8Oug00BurXLdWgtZfUKFgrQX9UR2wvpc4i2wg1jEFpLRSLQ5ZsCSngXmbcFJmJeaEdO+2IIay/5wEyimG9sJd968gt8D+w2fxdEtXiJn+tgAAAAASUVORK5CYII=" alt=""/>
                    </div>
                </header>
            </div>
        )
    }
}
