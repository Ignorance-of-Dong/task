import React from "react"
import Header from "../../component/Header"
import "./index.scss"
function About(props) {
    return <>
        <div className="main-container">
            <Header {...props}/>
            <div className="content">
                <div className="about-wrap">
                    <p>About Me</p>
                    <div className="about-content">
                        My name is Chang Li. This is my second semester in Northeastern University. Before this year, I have been gapped for almost one year because of the COVID-19. I stayed in China since 2020 and went a lot of places. There are several places I would recommend people to go.
                        The first one is the Forbidden City located in Beijing.
                        The second one is Shapotou, which is in Zhongwei, Ningxia Hui Autonomous Region.
                        The third one is Yu Garden in Shanghai.
                        The fourth one is Wuzhen, located in Tongxiang, Zhejiang Province.
                        The last one is Zhangjiajie in Wulingyuan, Hunan Province.
                        Those five sights are the most representative of the variety distinct for each place and the cultures through different dynasty. Those has the nature sights and human made architecture. The content within the site is depending on the personal perspectives.

                    </div>
                </div>
            </div>
        </div>
    </>
}
export default About