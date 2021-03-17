describe('Sign up testing', () => {
    it('Vistits sign up page',() => {
        cy.visit('/')

        cy.url().should('include', 'signup')
        
    });

    it('Business name input', () =>{
        cy.get('#CustomerName').type('test-della')
    });

    it('Legal Entity Id input', ()=>{
        cy.get('#RegistrationNumber').type('TAX ABN,123456')
    });

    it('Address line 1 input',() =>{
        cy.get('#Street1').type('100 Ringwood avenue street1')
    });

    it('Address line 2 input', () =>{
        cy.get('#Street2').type('Street2')
    });

    it('Line 3 input', () =>{
        cy.get('#Street3').type('Street3')
    });

    it('City input', () =>{
        cy.get('#City').type('Ringwood')

    });

    it('State input', () =>{
        cy.get('#State').type('Victoria')
    });

    it('Country input', () =>{
        cy.get('select').eq(0).select('Bangladesh',{force: true})
    });


    it('PostCode input', () =>{
        cy.get('#Postcode').type('3131')
    });

    it('Main Phone input', () =>{
        cy.get('#MainPhone').type('0452666888')
    });

    it('Fax input', () =>{
        cy.get('#Fax').type('0345222111')
    });

    it('Website input', () =>{
        cy.get('#WebUrl').type('https://dev-rhipe-signup.azurewebsites.net/')
    });

    it('Email input', () =>{
        cy.get('#Email').type('TestEmail@gmail.com')
    });

    it('How did you hear about Rhipe', () =>{
        cy.get('select').eq(1).select('Microsoft Website',{force: true}).should('have.value','2') 
    });

    it('Industry Type input', () =>{
        cy.get("select[name='IndustryType']").select('Franchisor',{force: true}).should('have.value', '6')
    });


    it('Check Use a different address for billing?', () =>{
        cy.get('#useanotheraddress').check({force: true})
     
    });

    it('Billing Address Line1 input', () =>{
        cy.get('#BillingAddressLine1').type('Billing Address Line 1')
    });

    it('Billing Address Line2 input', () =>{
        cy.get('#BillingAddressLine2').type('Billing Address Line 2')
    });
       
    it('Billing Address Line3 input', () =>{
        cy.get('#BillingAddressLine3').type('Billing Address Line 3')
    }); 

    it('Billing City input', () =>{
        cy.get('#BillingCity').type('Billing City')
    });

    it('Billing State input', () =>{
        cy.get('#BillingState').type('Vic')
    });

    it('Billing Country input', () =>{
        cy.get("select[name='BillingCountry']").select('Australia',{force: true}).should('have.value', 'AU')
    });

    it('Billing PostCode input', () =>{
        cy.get('#BillingPostcode').type('3232')
    });

    
    it('First Name input', () =>{
        cy.get('#PrimaryContactFirstName').type('Della')
    });

    it('First Name input', () =>{
        cy.get('#PrimaryContactLastName').type('LI')
    });

    it('Direct Phone input', () =>{
        cy.get('#PrimaryContactPhone').type('0452111111')
    }); 

    it('Direct Phone input', () =>{
        cy.get('#PrimaryContactJobTitle').type('Test Analyst')
    });

    it('Direct Phone input', () =>{
        cy.get('#PrimaryContactEmail').type('ContactEmail@gmail.com')
    }); 


    it('uncheck Use Authorised Signatory', () =>{
        cy.get('#usesamecontact').uncheck()
        
    });

})