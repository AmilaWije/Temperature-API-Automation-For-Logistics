/// <reference types="cypress"/>

 export function getSessionId() {
    describe('Get session ID to check temprature and location coordination', ()=>{
        const sessionRequest = ()=>({
            method: 'GET',
            url: 'https://hst-api.wialon.com/wialon/ajax.html?svc=token/login&params={"token":"0b360d574fbd6753485f979bb0a32ad7245EB1A6E69BC2117AD38E12E3A7823CE721A483"}'
        })
    
        it('Get session ID', ()=>{
            cy.request(sessionRequest()).then((res)=>{
                expect(res.status).to.eq(200)
                return res.body.eid;
            })
        })
    })
 }