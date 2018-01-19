import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import Img from 'gatsby-image'

import './style.sass'
import 'slick-carousel/slick/slick.css'

import { Wrap, button, Space, text } from 'blocks'

import Browser from 'components/Browser'
import bem from 'utils/bem'

const b = bem.lock('HomeQuotes')

const settings = {
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '250px',
  infinite: true
};

const HomeQuotes = ({ data }) => (
  <Space both="6">
    <div className={b()}>
      <h6 className={b('title')}>
        People are saying
      </h6>
      <div className={b('slider')}>
        <Slider {...settings}>
          {
            data.reviews.edges.map(({ node: card }) => (
              <div key={card.id} className={b('card')}>
                <div className={b('card-inner')}>
                  <div className={b('card-header')}>
                    <div className={b('card-avatar')}>
                      {
                        card.image &&
                          <Img sizes={card.image.sizes} />
                      }
                    </div>
                    <div className={b('card-header-body')}>
                      <div className={b('card-header-name')}>
                        {card.name}
                      </div>
                      <a href={card.website} className={b('card-header-role')}>
                        {card.role}
                      </a>
                    </div>
                  </div>
                  <div
                    className={b('card-body')}
                    dangerouslySetInnerHTML={{ __html: card.quote.markdown.html }}
                  />
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  </Space>
)

export default HomeQuotes
