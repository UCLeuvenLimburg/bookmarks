import React, { Component } from 'react';
import styled from 'styled-components';


export interface IProps
{
    className ?: string;

    label : string;

    size : number;

    selected : boolean;

    onClick : () => void;
}

export interface IState
{

}


const Container = styled.span`
    padding: 2px 10px;
    margin: 2px 5px;
    user-select: none;
    white-space: nowrap;
    cursor: default;
    font-variant: small-caps;
    font-family: Palatino, "Palatino Linotype", "Palatino LT STD";
    box-shadow: 2px 2px black;

    &:hover {
        background: #FAA;
    }
`;

class UnstyledCloudTag extends Component<IProps, IState>
{
    render() : JSX.Element
    {
        const me = this;

        return (
            <Container className={this.props.className} onClick={onClick}>
                {this.props.label}
            </Container>
        );


        function onClick()
        {
            me.props.onClick();
        }
    }
}

function deriveFontSize(props : IProps)
{
    const { size: relativeCount } = props;
    const minimumSize = 100;
    const maximumSize = 200;
    const size = minimumSize + (maximumSize - minimumSize) * relativeCount;

    return `${size}%`;
}

function deriveBackground(props : IProps)
{
    if ( props.selected )
    {
        return '#AFA';
    }
    else
    {
        return '#BBF';
    }
}

function deriveFontWeight(props : IProps)
{
    if ( props.selected )
    {
        return 'bold';
    }
    else
    {
        return 'normal';
    }
}

export const CloudTag = styled(UnstyledCloudTag)`
    font-size: ${deriveFontSize};
    background: ${deriveBackground};
    font-weight: ${deriveFontWeight};
`;