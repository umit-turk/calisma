import styled from 'styled-components';

export const Container = styled.div`

`
export const Wrap = styled.div`
    display:flex;

    position:relative;
`
export const NewLogo = styled.div`
    margin: 27px 35px 0px 37px;
`
export const SearchArea = styled.div`

    margin: 35px 16px 75px 35px;

    input {
        display: flex;
        width: 709px;
        height: 46px;
        border-radius: 8px;
        border: 1px solid #000000;
        padding: 13px 546px 7px 20px;
        font-style: normal;
        font-family: 'Roboto';
        font-weight: 700;
        line-height:21.09px;
        color: #484848;
        font-size: 18px;
        vertical-align: top;
        text-align: left;
    }
`
export const Button = styled.div`
    
    margin: 35px 297px 105px 16px;

    button {
        display: flex;
        width: 138px;
        height: 46px;
        border: none;
        background-color:#4F75C2;
        border-radius: 8px;
        padding: 13px 40.42px 4.41px 40px;
        font-size: 18px;
        line-height: 21.09px;
        color: #FFFFFF;
        text-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: 'Roboto';
        font-style: normal;
        font-size: 18px;
        text-align: left;
        vertical-align:top;
        cursor: pointer;
        font-weight: 700;

    }
`
export const Orders = styled.span`
    display: flex;
   z-index:3;
`

export const Icon = styled.span`
    width: 26px;
    height: 24px;
    margin: 0px 8px 3px 754px;
    vertical-align: top;
`
export const Order = styled.span`

    margin: 2px 496px 3px 0px;
    width: 97px;
    height: 25px;
    font-family: 'Roboto';
    color: #484848;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.09px;
    vertical-align: top;
    align-items: left;
    cursor: pointer;
    z-index: 3;
`

export const Modal = styled.span`
    position: absolute;
    width: 156px;
    height: 127px;
    border: 1px solid #484848;
    border-radius:4px;
    background-color:#FFFFFF;
    display: flex;
    z-index: 100;
    margin-left: 814px;
    display: grid;
    flex-direction: column;

    
    

    
    

    li{
        list-style: none;
        width: 164px;
        height: 23px;
        padding: 14px 0px 12px 17px;
        font-size: 14px;
        font-weight: 700;
        font-style: normal;
        line-height: 16.41px;
        color: #000000;
        font-family: 'Roboto';
        text-align: left;
        vertical-align: top;
        transition: all 400ms;
        cursor: pointer;

        &:hover{
            width: 133px;
            height: 29px;
            border: 1px solid ;
            border-radius:4px;
            color: #FFFFFF;
            background-color:#C4C4C4;
            font-size: 14px;
            text-align: left;
            margin: 6px 40.81px 0px 9px;
            vertical-align: middle; 
            align-items: center;
            justify-content: center;
            
        }
    }
`

export const BigDetails = styled.div`
   
height: 700px;
overflow: hidden;
`
export const Involve = styled.div`
 margin: 0px 508px 35px 212px;
 display:flex;
 width: 661px;
 height: 68px;
 flex-direction: column;
cursor: pointer;
transition: all 400ms;
overflow: hidden;


&:hover {
    background: #C4C4C4;
    border-radius: 4px;
    color:#FFFFFF;
}

 .line {
     margin-left: 18px;
     border-bottom: 1px solid grey;
     
 }
`
export const PostHead = styled.div`

    padding: 10px 305px 0px 21px;
    width:345px;
    height: 31.42px;

`
export const Name = styled.div`
    padding: 0px 0px 0px 21px;
    width: 257px;
    height: 26px;

`