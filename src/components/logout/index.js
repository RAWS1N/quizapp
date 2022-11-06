import React from 'react'
import { Container,Button,Profile,Detail,Score } from './styles/Logout'



export default function LogoutPage({children,...props}){
    return <Container {...props}>{children}</Container>
}



LogoutPage.Button = function LogoutButton({children,...props}){
    return <Button {...props}>{children}</Button>
}


LogoutPage.Profile = function LogoutPageProfile({...props}){
    return <Profile {...props}/>
}


LogoutPage.Detail = function LogoutPageDetail({children,...props}){
    return <Detail {...props}>{children}</Detail>
}


LogoutPage.Score = function LogoutScore({children,...props}){
    return <Score {...props}>{children}</Score>
}

