import React from 'react'
import { Avatar, Container, Option,Edit, Reset, Score, Select, UserName, FlexContainer,Exit,Greet } from './styles/UserComponent'


function UserInfo({children,...props}){
    return <Container {...props}>{children}</Container>
}

UserInfo.Avatar = function UserAvatar({children,...props}){
    return <Avatar {...props}>{children}</Avatar>
}

UserInfo.Exit = function UserExit({children,...props}){
    return <Exit {...props}>{children}</Exit>
}

UserInfo.Greet = function UserGreet({children,...props}){
    return <Greet {...props}>{children}</Greet>
}

UserInfo.Score = function UserScore({children,...props}){
    return <Score {...props}>{children}</Score>
}



UserInfo.FlexContainer = function UserFlexContainer({children,...props}){
    return <FlexContainer {...props}>{children}</FlexContainer>
}

UserInfo.Select = function UserInfoSelect({children,...props}){
    return <Select {...props}>{children}</Select>
}

UserInfo.Option = function userOption({children,...props}){
    return <Option {...props}>{children}</Option>
}

UserInfo.Reset = function UserReset({children,...props}){
    return <Reset {...props}>{children}</Reset>
}

UserInfo.Edit = function UserEdit({children,...props}){
    return <Edit {...props}>{children}</Edit>
}

UserInfo.Username = function UserInfoName({children,...props}){
    return <UserName {...props}>{children}</UserName>
}




export default UserInfo