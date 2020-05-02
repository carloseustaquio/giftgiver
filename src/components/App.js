import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './Gift'

export default class App extends Component {
    constructor() {
        super()

        this.state = { gifts: [] }
    }

    addGift = () => {
        const { gifts } = this.state

        const ids = this.state.gifts.map(gift => gift.id)
        const maxId = ids.length > 0 ? Math.max(...ids) : 0
        gifts.push({ id: maxId + 1 })
        this.setState({ gifts })
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id)
        this.setState({ gifts })
    }
    
    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {this.state.gifts.map(gift => 
                        <Gift 
                        key={gift.id} 
                        gift={gift}
                        removeGift={this.removeGift}
                        />
                    )}
                </div>
                <Button id="btn-add" onClick={this.addGift} className="btn-add">
                    Add Gift
                </Button>
            </div>
        )
    }
}