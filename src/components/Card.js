import React from 'react'

// images
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'

// styles
import './styles/Card.css'

// TODO: Refactor to functional component
class Card extends React.Component {

    render() {

        // destructuring to get props
        const { title, description, img, leftColor, rightColor } = this.props

        return (
            <div className="card mx-auto fitness-card"
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || emptyImg} className="float-right" alt="exercise" />
                        </div>
                        <div className="col-6 fitness-card-info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;