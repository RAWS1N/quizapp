import React from 'react'
import {
    Container,
    Item,
    Title,
    Option,
    FlexRowContainer,
    TitleContainer,
    FooterContainer,
    Button,
    Header,
    Loader,
    HeaderContainer,
    ScoreCard,
    FixedContainer,
    Avatar
} from './styles/Layout'
import { shuffleArray } from '../../utils'
import { nanoid } from 'nanoid'
import './styles/index.css'


export default function Layout({ children, ...props }) {
    return <Container {...props}>
        {children}
    </Container>
}

Layout.Avatar = function layoutAvatar({...props}){
    return <Avatar {...props}/>
}

Layout.Reset = function layoutLogout({children,...props}){
    return <ScoreCard {...props}>{children}</ScoreCard>
}
Layout.Item = function LayoutItem({ item,score, setScore, ...props }) {
    const answerArray = shuffleArray([item.correctAnswer, ...item.incorrectAnswers])
    const [content, setContent] = React.useState({ ...item, enabled: true })
    const answerObj = answerArray.map(answer => ({
        answer,
        isHeld: false,
        Class: 'notSelected',
        id: nanoid()
    }))
    const [options, setOptions] = React.useState(answerObj)


    function handleClick(id) {
        setOptions(prevOptions => prevOptions.map(element => {
            if (element.id === id && element.answer === content.correctAnswer && content.enabled) {
                setContent(prevState => ({ ...prevState, enabled: false }))
                setScore(prevScore => prevScore+1)
                
                
                return { ...element, isHeld: true, Class: "correct" }
            }
            else if (element.id === id && element.answer !== content.correctAnswer && content.enabled) {
                setContent(prevState => ({ ...prevState, enabled: false }))
                return { ...element, isHeld: true, Class: "inCorrect" }
            }
            else {
                localStorage.setItem('score',score)
                return element.answer === content.correctAnswer ? {...element,Class:"correct"}:element
            }
        }))

        
    }



    return <Item {...props}>
        <TitleContainer>
            <Title>{item.question}</Title>
        </TitleContainer>
        <FlexRowContainer>
            {options.map((item) => <Option
                onClick={() => handleClick(item.id)}
                key={item.id}
                className={item.Class}
            >
                {item.answer}
            </Option>)}
        </FlexRowContainer>
    </Item>
}

Layout.Option = function LayoutOption({ children, ...props }) {
    return (
        <FlexRowContainer>
            <Option>
                {children}
            </Option>
        </FlexRowContainer>
    )
}



Layout.FooterContainer = function LayoutFooterContainer({ children, ...props }) {
    return <FooterContainer>
        {children}
    </FooterContainer>
}


Layout.Button = function LayoutButton({ children, ...props }) {
    return <Button {...props}>{children}</Button>
}




Layout.Header = function LayoutHeader({ children, ...props }) {
    return <Header {...props}>{children}</Header>
}


Layout.Loader = function LayoutLoader({children,...props}){
    return <Loader {...props}>{children}</Loader>
}



Layout.HeaderContainer = function LayoutHeaderContainer({children,...props}){
    return <HeaderContainer {...props}>{children}</HeaderContainer>
}


Layout.ScoreCard = function LayoutScoreCard({children,...props}){
    return <ScoreCard {...props}>{children}</ScoreCard>
}




Layout.FixedContainer = function LayoutFixedContainer({children,...props}){
    return <FixedContainer {...props}>{children}</FixedContainer>
}