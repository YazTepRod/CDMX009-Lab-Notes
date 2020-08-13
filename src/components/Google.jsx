import React from 'react';
import firebase from 'firebase-config'
import '../components/components.css/socialNetworks.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from 'react-router-dom'


function Google (){
    const history = useHistory()
    return ( 
        <Container className='socialNetworks'>
            <Row >
                <Col>
                <p>or Sign in with</p>
                </Col>
            </Row>
            <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <img className='imgsSocialNetworks' onClick={google}alt='googleImg'src='./images/google.png'/>
             
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <img  className='imgsSocialNetworks' onClick={facebook} alt='facebookImg'src='facebook.png'/>
            </Col>
            </Row>  
    
        </Container>
    )

    async function facebook (event){
        event.preventDefault()
        try {
            await firebase.authFacebook()
            history.push('/Dashboard')
        } catch (error) {
           console.log(error)
        }
        
    }
    async function google (event){
        event.preventDefault()
        try {
            await firebase.authGoogle()
            history.push('/Dashboard')
        } catch (error) {
           console.log(error)
        }
        
    }

}


export default SocialNetworksAuth;






}
