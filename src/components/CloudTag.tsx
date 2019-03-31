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
    padding: 2px 20px;
    margin: 2px 5px;
    user-select: none;
    white-space: nowrap;
    cursor: default;
    font-variant: small-caps;
    font-family: Palatino, "Palatino Linotype", "Palatino LT STD";

    &:hover {
        color: white;
        background: black;
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
    const { label } = props;
    const hash = label.split('').map(c => c.codePointAt(0)).reduce<number>( (acc, n) => acc + (n as number), 0 );
    const colors = [
        '#FAA',
        '#AFA',
        '#AAF',
        '#DD0',
        '#FAF',
        '#AFF',
        '#84A',
        '#48A',
        '#484',
        '#A48',
        '#A84',
        '#8A4',
        '#4A8',
        '#A55',
        '#5A5',
        '#77A',
    ];

    return colors[hash % colors.length];
}

function deriveBoxShadow(props : IProps)
{
    if ( props.selected )
    {
        return '5px 5px black';
    }
    else
    {
        return '2px 2px black';
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
    box-shadow: ${deriveBoxShadow};
    font-weight: ${deriveFontWeight};
`;