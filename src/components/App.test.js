import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import toJson from 'enzyme-to-json';

// render creates the snapchot obj! but
// doesn't have .simulate inside of it.
// mount and shallow doesn't creates the
// snapshot! should downgrade it? 

describe('App', () => { 
    const app = shallow(<App />)
    
    it("renders correctly", () => {
        expect(toJson(app)).toMatchSnapshot()
    })
    
    it("initializes with the `state` with an empty list of gifts", () => {
        expect(app.state().gifts).toEqual([])
    })

    describe("when clicking the `add-gift` button", () => {
        const id = 1
        
        beforeEach(() => {
            app.find(".btn-add").simulate('click')
        })
        
        afterEach(() => {
            app.setState({ gifts: [] })
        })
        
        it("adds a new gift to state", () => {
            expect(app.state().gifts).toEqual([{ id }])
        })
        
        it("adds a new gift to the render list", () => {
            expect(app.find(".gift-list").children().length).toEqual(1)
        })

        it("creates a gift component", () => {
            expect(app.find("Gift").exists()).toBe(true)
        })
        
        describe("when the user wants to remove the added gift", () => {
            beforeEach(() => {
                app.instance().removeGift(id)
            })

            it("removes the gift from state", () => {
                expect(app.state().gifts).toEqual([])
            })
        })
    })

})