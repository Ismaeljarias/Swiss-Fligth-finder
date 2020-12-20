import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #1c1c1c;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  padding: 20px 0;
  margin: 0 auto;
  color: white;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 20px 0;
  margin: 0 auto;
`;

///////////////////////////////General Style///////////////////////////////

export const WrapperComponent = styled.div`
  position: relative;
  margin: 20px auto;
  max-width: 90%;
  width: 100%;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .paddingclass {
    margin: 20px 0;
  }
`;

export const ContentComponent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  background-color: lightblue;

  .break {
    flex-basis: 100%;
    height: 0;
  }

  .container {
    position: relative;
    width: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }

  .switch {
    position: absolute;
    top: -20px;
  }

  @media screen and (max-width: 1065px) {
    .container {
      width: 100%;
      margin: 10px;
    }
  }
`;

export const PassengerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;
  box-sizing: border-box;

  min-height: 50px;

  background-color: lightgray;
  border: 1px solid grey;
`;

export const MainBox = styled.div`
  width: 100%;

  .group_quantity {
    position: absolute;
    pointer-events: none;
    z-index: 2;
    /* color: #666; */
    font-size: 12px;
    left: 12px;
    top: 8px;
    opacity: 0.9;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 20px);
    transition: opacity 0.1s, top 0.1s;
  }

  .passenger {
    display: block;
    width: 100%;
    height: 48px;
    padding: 23px 12px 2px;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity 250ms;
  }

  .passengerQ {
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
  }
`;

export const InnerBoxContainer = styled.div`
  position: absolute;
  top: 102%;
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  z-index: 1;
  overflow: hidden;

  .quantityContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 62px;
    box-sizing: border-box;
    border: 1px solid white;
    background-color: lightgray;
  }

  .textbox {
    display: flex;
    flex-direction: column;
  }

  .inputBox {
  }
  small {
    color: #909090;
  }

  button {
    font-size: 20px;
    display: table-cell;
    position: relative;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    width: 30px;
    height: 36px;
    vertical-align: middle;
  }

  input {
    font-size: 1.25rem;
    display: table-cell;
    text-align: center;
    height: 36px;
    width: 36px;
    padding-top: 4px;
    border: 1px solid #ccc;
    vertical-align: middle;
    border-radius: 0 !important;
    box-shadow: none;
  }

  .closeButton {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    cursor: pointer;
    box-sizing: border-box;
  }
`;
