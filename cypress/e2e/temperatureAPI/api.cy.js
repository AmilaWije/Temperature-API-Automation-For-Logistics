/// <reference types="cypress"/>

describe('Get vehicle location using by haulmatic api', ()=>{
    const validToken = Cypress.env('token');

    const requestOptions = (token)=>({
        method: 'GET',
        url : 'http://dev.api.haulmatic.com/api/telematics/gps-data/v1/13890652',
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })

    it('get vehilce location with temperature using haulmatic api', ()=>{
        cy.request(requestOptions(validToken)).then((res)=> {
            if (res.status === 200) {
                cy.log('Bearer token validated succesfully')
                expect(res.status).to.eq(200)
                expect(res.body.vehicleId).to.not.be.null
                expect(res.body.orgId).to.not.be.null
                expect(res.body.deviceModel).to.eq("WIALON")
                Cypress.env('haulTemp', res.body.temperature)
            } else {
                cy.log(`Bearer token invalid. Status code=${res.status}`)
            }
        })
    })

    const sessionRequest = ()=>({
        method: 'GET',
        url: 'https://hst-api.wialon.com/wialon/ajax.html?svc=token/login&params={"token":"0b360d574fbd6753485f979bb0a32ad7245EB1A6E69BC2117AD38E12E3A7823CE721A483"}',
    })

    it('Get session ID', ()=>{
        cy.request(sessionRequest()).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.host).to.not.be.null
            expect(res.body.eid).to.not.be.null
            Cypress.env('eid', res.body.eid)
            if (Cypress.env('eid') !== null) {
                cy.log('eid saved succesfully')
            } else {
                cy.log('eid not saved, please check session request api')
            }
        })
    })

    const vehicleTemperatureRequest = ()=>({
        method : 'GET',
        url : `https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_item&params={"id":13890652,"flags":4194304}&sid=${Cypress.env('eid')}`
    })

    it('Get actual location for verify', ()=>{
        cy.request(vehicleTemperatureRequest()).then((res)=>{
            expect(res.status).to.not.be.null
            Cypress.env('y', res.body.item.pos.y)
            if (Cypress.env('y') !== null) {
                cy.log('Y coordination saved succesfully')
            } else {
                cy.log('Y coordination not saved')
            }
            Cypress.env('x', res.body.item.pos.x)
            if (Cypress.env('x') !== null) {
                cy.log('X coordination saved succesfully')
            } else {
                cy.log('X coordination not saved')
            }
        })
    })

    const vehicleLocationRequest = ()=>({
        method : 'GET',
        url : `https://hst-api.wialon.com/wialon/ajax.html?svc=unit/calc_last_message&params={"unitId":13890652,"sensors":[],"flags":1}&sid=${Cypress.env('eid')}`
    })

    it('Get actual Temperature for verify', ()=>{
        cy.request(vehicleLocationRequest()).then((res)=>{
            expect(res.status).to.not.be.null
            Cypress.env('temp', res.body[4])
            if (Cypress.env('temp') === Cypress.env('haulTemp')) {
                cy.log(`Haulmatic end provided temperature and client side provided temperature values are equal. 
                    Haulmatic temperature=${Cypress.env('haulTemp')} | Client side temperature=${Cypress.env('temp')}`)
            } else {
                cy.log('Provided temprature values verification is failed')
            }
        })
    })

})