import React, { Component } from 'react';
// Component
import Title from './Title';
// Icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Service extends Component {

  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktail",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ratione!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ratione!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ratione!"
      },
      {
        icon: <FaBeer />,
        title: "Strong Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ratione!"
      }
    ]
  }
  render() {
    return (

      <div className="services">
        <Title title="Our Services" />
        <div className="services-center">
          {this.state.services.map((eachService, index) => {
            return (
              <article className="service" key={index}>
                <span>{eachService.icon}</span>
                <h6>{eachService.title}</h6>
                <p>{eachService.info}</p>
              </article>
            )
          })}
        </div>
      </div>

    )
  }
}