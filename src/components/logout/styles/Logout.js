
import styled,{keyframes} from "styled-components"

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;

    @media screen and (max-width:720px){
        flex-direction:column;
    }
`



export const Button = styled.button`
    padding : 2px 8px;
    border-radius:4px;
    font-weight:700;
    font-size:18px;
    font-family: 'Poppins', sans-serif;
    padding:4px 24px;

`


export const Detail = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:50px;
    border:1px solid black;
    margin:40px;
    background-color:#f8f8f8;
    border-radius:4px;

    @media screen and (max-width:1000px){
        flex-direction:column;
    }
`


const rotateImage = keyframes`
    from {transform : rotate(0deg)}
    to {transform : rotate(360deg)}
`

export const Profile = styled.img`
    height:200px;
    width:200px;
    animation:${rotateImage} 8s infinite linear;
`

export const Score = styled.h2`
    padding:20px;
    margin:20px;
    align-items:center;
    font-size:24px;
    color:red;
    color:#3aada8;
    
    
`



