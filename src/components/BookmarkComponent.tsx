import React, { Component } from 'react';
import styled from 'styled-components';
import { Bookmark } from '../bookmark';
import { Cloud, ITag } from './Cloud';


export interface IProps
{
    className ?: string;

    bookmark : Bookmark;

    onTagClicked ?: (tag : ITag) => void;
}

export interface IState
{

}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80%;
    align-items: center;
    margin: 5px 20px;
    user-select: none;
    cursor: default;
    font-variant: small-caps;
    font-weight: bold;
    font-family: Palatino, "Palatino Linotype", "Palatino LT STD";
    box-shadow: 2px 2px black;
    background: #DDD;
`;

const Link = styled.a`
    text-align: left;
    text-decoration: none;
    display: block;
    width: 100%;
    font-size: 120%;
`;

const StyledCloud = styled(Cloud)`

`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    margin: 5px;
`;

export class BookmarkComponent extends Component<IProps, IState>
{
    render() : JSX.Element
    {
        const { url, label, tags: tagLabels, description } = this.props.bookmark;
        const tags : ITag[] = tagLabels.map( tagLabel => ({ label: tagLabel, selected : false, size: 0 }));

        return (
            <Container className={this.props.className}>
                <LeftContainer>
                    <Link href={url}>{label}</Link>
                    {description}
                </LeftContainer>
                <StyledCloud tags={tags} onTagClicked={this.props.onTagClicked} />
            </Container>
        );
    }
}
