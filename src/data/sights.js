/*
 * @Author: zhangzheng
 * @Date: 2021-12-15 11:03:20
 * @LastEditors: zhangzheng
 * @LastEditTime: 2021-12-15 15:33:57
 * @Descripttion:
 */
import FC01 from "../assets/image/FC01.png";
import FC02 from "../assets/image/FC02.jpg";
import FC03 from "../assets/image/FC03.jpg";
import FC04 from "../assets/image/FC04.jpg";
import FC05 from "../assets/image/FC05.jpg";

import Extra01 from "../assets/image/Extra01.jpg";
import Extra02 from "../assets/image/Extra02.jpg";
import Extra03 from "../assets/image/Extra03.jpg";
import Extra04 from "../assets/image/Extra04.jpg";
import Extra05 from "../assets/image/Extra05.jpg";

import Yu01 from "../assets/image/Yu01.jpg";
import Yu02 from "../assets/image/Yu02.jpg";
import Yu03 from "../assets/image/Yu03.jpg";
import Yu04 from "../assets/image/Yu04.jpg";
import Yu05 from "../assets/image/Yu05.jpg";

import WZ01 from "../assets/image/WZ01.png";
import WZ02 from "../assets/image/WZ02.png";
import WZ03 from "../assets/image/WZ03.jpg";
import WZ04 from "../assets/image/WZ04.jpg";
import WZ05 from "../assets/image/WZ05.jpg";

import ZJ01 from "../assets/image/ZJ01.jpg";
import ZJ02 from "../assets/image/ZJ02.png";
import ZJ03 from "../assets/image/ZJ03.jpg";
import ZJ04 from "../assets/image/ZJ04.jpg";
import ZJ05 from "../assets/image/ZJ05.jpg";

let sightsList = [
  {
    id: "beijin",
    city: "bei jin",
    sights: [
      {
        id: 1,
        name: "The Forbidden City",
        images: [FC01, FC02, FC03, FC04, FC05],
        desc: "It is located in the center of Beijing since Ming dynasty. This palace is the most important place I would recommend taking a tour. The Forbidden City has experienced Ming dynasty and Qing dynasty until right now. It is UNESCO World Heritage Site and AAAAA-level tourist attraction in China. It is one of the largest and most well-preserved ancient wooden structures in the world. The Forbidden City was listed as the first batch of national key cultural relics in 1961 and listed as a world cultural heritage in 1987. It is totally symmetrical construction, which represent the great architectural momentum and scale. The buildings within are rich in colors, magnificent in size and appearance, and specific proportion scale for different building are showing the grand momentum of solemn and exclusive to the emperor."
      }
    ]
  },
  {
    id: "nixia",
    city: "nixia",
    sights: [
      {
        id: 2,
        name: "The Shapotou Tourist Zone",
        images: [Extra01, Extra02, Extra03, Extra04, Extra05],
        desc: "Shapotou National Nature Reserve is located in the southeast area of Tengger Desert in Zhongwei, Ningxia Hui Autonomous Region, which is a AAAAA-level tourist attraction. It has Desert Area and Yellow River area within it. You could access to the high desert area and enjoy the views of Yellow River surrounding by desert or you could directly go to the Desert Area for camel ride or other amusement facilities. Also, living within the desert is of the interesting parts for the trip. The Desert Star Hotel is located in the zone. Customers has unique cars for travelling in the area. People could see the stars until the sky turns to dark. The hotel also offered many special events related to the local cultures. "
      }
    ]
  },
  {
    id: "shanghai",
    city: "shanghai",
    sights: [
      {
        id: 3,
        name: "The Yu Garden",
        images: [Yu01, Yu02, Yu03, Yu04, Yu05],
        desc: "The Yu Garden also called as Yuyuan in Chinese. It is located in the Old City of Shanghai. Yuyuan was first built in 1559 by Pan Yunduan during Ming Dynasty. Through different owners and many wars, it is a typical representative of Jiangnan gardens and has become a famous tourist attraction in Shanghai. The garden has many pavilions, buildings, ponds and you could feel the chill and quiet after you walking into it. The garden is situated in the City Temple of the area and has more than 400 years history. You could still feel the expensive cost and elegant style for the area."
      }
    ]
  },
  {
    id: "zhejiang",
    city: "zhejiang",
    sights: [
      {
        id: 4,
        name: "Wuzhen",
        images: [WZ01, WZ02, WZ03, WZ04, WZ05],
        desc: "Wuzhen is located in Tongxiang, Zhejiang province. It is one of the famous historic scenic towns. The town has been rated as China AAAAA-level national tourist attraction. It is a typical water town and most of the architectures are built since Qing Dynasty. Although many original people has lived there, the buildings are still well preserved. The whole town is using the river as the street, many bridges along with. In the history, there are 64 Jinshi, 161 Juren and many famous people was born."
      }
    ]
  },
  {
    id: "zhangjiajie",
    city: "zhangjiajie",
    sights: [
      {
        id: 5,
        name: "Zhangjiajie National Forest Park",
        images: [ZJ01, ZJ02, ZJ03, ZJ04, ZJ05],
        desc: "Zhangjiajie National Forest Park is located in Wulingyuan Scenic Area, Hunan province. In 1988, the park was listed as China National Key Scenic Zone. This site has been recognized as a UNESCO World Heritage Site in 1992. In 2004, Zhangjiajie Geopark was listed as a UNESCO global geopark. The most famous advertisement would be the inspiration of the floating rocks from the mountains in the movie Avatar. The pillars appeared in the movie has been renamed “Avatar Hallelujah Mountain” in honor of the movie. Also, there is a Bailong Elevator within the area, which is very famous and opened to the public in 2002. It is 1070 feet high elevator and is the tallest outdoor lift in the world. For each times, it can carry 50 people up or down. "
      }
    ]
  }
];

export default sightsList;
