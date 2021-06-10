import styled from "styled-components";

export const Container = styled.div`
    height:380px;
   position:relative;
   display: flex;
   justify-content:center;
   overflow: hidden;
`
export const Wrap = styled.div`
 position: absolute;
    width: 709px;
    height: 258px;
    border: 1px solid #484848;
    border-radius: 4px;
    margin: 18px 439px 151px 292px;
    overflow: hidden;
`
export const Involve = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .line{
    margin-top: 5px;
}

`
export const PostHead = styled.div`
display: flex;
  width: 345px;
  height: 31.42px;
  font-family: 'Roboto';
  font-weight:normal;
  font-size: 18px;
  font-style: normal;
  line-height:21.09px;
  color: #484848;
  padding: 18px 332px 13px 32px;
`
export const Name = styled.div`
        display: flex;
        width: 207px;
        font-size: 12px;
        height:26px;
        width: 644px;
        border-bottom: 1px solid #585858;
        margin-left: 32px;
        font-family: 'Roboto';

        span {
            width: 207px;
            height: 26px;
            color:#686868;
            padding: 10px 0px 5px 0px;

            
        }
`
export const ShowMore = styled.button`
    width:79px;
    height:17px;
    font-size: 12px;
    font-family: "Roboto";
    font-weight: 700;
    font-style: normal;
    line-height:14.06px;
    color: #000000;
    border: none;
    margin: 42.49px 313px 9px 317px;
    cursor: pointer;
`