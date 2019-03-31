import React, { Component, CSSProperties } from 'react';
import styled from 'styled-components';
import { BookmarkCollection } from '../bookmark-collection';
import { Bookmark } from '../bookmark';
import { BookmarkComponent } from './BookmarkComponent';
import { ITag } from './Cloud';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';


export interface IProps
{
    className ?: string;

    bookmarkCollection : BookmarkCollection;

    onTagClicked ?: (tag : ITag) => void;
}

export interface IState
{

}


const Container = styled.div`
    display: flex;
    flex: 1 1 auto;
    height: 100%;
`;

export class BookmarkCollectionComponent extends Component<IProps, IState>
{
    render() : JSX.Element
    {
        const me = this;
        const bookmarks = [ ...this.props.bookmarkCollection.bookmarks ].sort((x, y) => x.label.localeCompare(y.label));

        return (
            <Container>
                <AutoSizer>
                    {
                        ({width, height}) => {
                            return (
                                <FixedSizeList className={this.props.className} width={width} height={height} itemCount={bookmarks.length} itemSize={70}>
                                    {renderRow}
                                </FixedSizeList>
                            );
                        }
                    }
                </AutoSizer>
            </Container>
        );


        function renderRow(args : {index : number, style : CSSProperties}) : JSX.Element
        {
            const bookmark = bookmarks[args.index];

            return (
                <div style={args.style}>
                    <BookmarkComponent bookmark={bookmark} onTagClicked={me.props.onTagClicked} />
                </div>
            );
        }
    }
}
