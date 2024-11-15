describe('Create Account and Sign In', () => {
  
    const user = {
      firstName: 'Test',
      lastName: 'User',
      email: `testuser${Math.floor(Math.random() * 10000)}@example.com`, // Random email to avoid conflicts
      password: 'TestPassword123', // Use a strong password
      phone: '123-456-7890',
    };
  
    it('should create a new account and sign in', () => {
      
      // Step 1: Visit the homepage
      cy.visit('https://magento.softwaretestingboard.com/');
  
      // Step 2: Click on the "Sign In" button at the top-right of the page
       cy.get('.panel > .header > .authorization-link > a').click();
  
    //   // Step 3: Click on the "Create an Account" link
    cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action > span').click();
  
    //   // Step 4: Fill out the registration form
    //   cy.get('#firstname').type(user.firstName); // First Name
    //   cy.get('#lastname').type(user.lastName);   // Last Name
    //   cy.get('#email_address').type(user.email); // Email
    //   cy.get('#password').type(user.password);   // Password
    //   cy.get('#password-confirmation').type(user.password); // Confirm Password
    //   cy.get('#telephone').type(user.phone);  // Phone Number
  
    //   // Step 5: Submit the registration form
    //   cy.get('button[title="Create an Account"]').click();
  
    //   // Step 6: Verify that account creation is successful (check if user is redirected to a welcome page)
    //   cy.get('.welcome-msg').should('contain', 'Thank you for registering with Main Website Store.');
  
    //   // Step 7: Click on the "Sign In" link again to log out
    //   cy.get('.header .authorization-link').click();
  
    //   // Step 8: Log in with the newly created account credentials
    //   cy.get('#email').type(user.email); // Enter the created email
    //   cy.get('#pass').type(user.password); // Enter the created password
    //   cy.get('button[title="Sign In"]').click();
  
    //   // Step 9: Verify that the user is successfully logged in
    //   cy.get('.hello').should('contain', `Hello, ${user.firstName} ${user.lastName}`);
     });
  
  });
  