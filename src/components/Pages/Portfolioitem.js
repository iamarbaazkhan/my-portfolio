import React, { Component } from "react";

class PortfolioItem extends Component {
  render() {
    return (
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            href="/#"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"></div>
            </div>
            <img className="img-fluid" src={this.props.image} alt="" />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{this.props.title}</div>
            <div className="portfolio-caption-subheading text-muted">
              {this.props.subtitle}
            </div>
            <div className="portfolio-caption-subheading text-muted">
              {this.props.link}
            </div>
             
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
