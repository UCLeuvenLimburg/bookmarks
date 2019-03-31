import React, { Component } from 'react';
import styled from 'styled-components';
import { CloudTag } from './CloudTag';


export interface ITag
{
    label : string;

    size : number;

    selected : boolean;
}

export interface IProps
{
    className ?: string;

    tags : ITag[];

    onTagClicked ?: (tag : ITag) => void;
}

export interface IState
{

}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 5px;
`;


export class Cloud extends Component<IProps, IState>
{
    render() : JSX.Element
    {
        const tags = this.props.tags;
        const tagElements = tags.map(tag => this.renderTag(tag));

        return (
            <Container className={this.props.className}>
                {tagElements}
            </Container>
        );
    }

    private renderTag(tag : ITag) : JSX.Element
    {
        const me = this;

        return (
            <CloudTag key={tag.label} label={tag.label} size={tag.size} selected={tag.selected} onClick={onClick} />
        );


        function onClick()
        {
            if ( me.props.onTagClicked )
            {
                me.props.onTagClicked(tag);
            }
        }
    }
}

