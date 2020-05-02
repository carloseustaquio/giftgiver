import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'
import { max_number } from '../helper'

export default class App extends Component {
    constructor() {
        super()

        this.state = { gifts: [] }
    }

    addGift = () => {
        const { gifts } = this.state
        const ids = this.state.gifts.map(gift => gift.id)
        gifts.push({ id: max_number(ids) + 1 })
        this.setState({ gifts })
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id)
        this.setState({ gifts })
    }
    
    render() {
        return (
            <div className="container container-xs d-flex flex-column px-5 pb-4 position-relative">
                <h2 className="mt-4 d-flex justify-content-between">
                    Gift Giver
                    <Button 
                    id="btn-add" 
                    onClick={this.addGift} 
                    className="btn-add"
                    >Add Gift</Button>
                </h2>
                <div className="gift-list">
                    {this.state.gifts.map(gift => 
                        <Gift 
                        key={gift.id} 
                        gift={gift}
                        removeGift={this.removeGift}
                        />
                    )}
                </div>
            </div>
        )
    }
}
