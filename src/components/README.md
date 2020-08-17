
# estructura de proyecto

- src/
    - shared-components/
        - Button/
            - Button.jsx
            - button.css
            - button.spec.js
            - index.jsx // exporta los components en este nivel
    - pages/containers/
        - Login/
            -components/
                - Form.jsx
                - form.css
                - Header.jsx
            - Login.jsx
            - index.jsx // exporta login 
        -Log out/
             -Components/ 
              -Form.jsx
              -Header.jsx
              -form.css
          -logOut.jsx
          -index.jsx // exporta logout
        -Create Account/
             -Components/ 
              -Form.jsx
              -Header.jsx
              -form.css
          -createAccount.jsx
          -index.jsx // exporta crear cuenta
          -Notes/
             -Components/ 
              -agreeNote.jsx
              -deleteNote.jsx
              -editNote.jsx
              -stylesNotes.css
          -index.jsx  // exporta dashboard y notas
          


