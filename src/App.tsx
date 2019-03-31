import React, { Component } from 'react';
import { Cloud, ITag } from './components/Cloud';
import { BookmarkCollection } from './bookmark-collection';
import styled from 'styled-components';
import { BookmarkCollectionComponent } from './components/BookmarkCollectionComponent';
import './App.css';


interface IProps
{

}

interface IState
{
    bookmarks : BookmarkCollection;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const StyledCloud = styled(Cloud)`
    flex-wrap: wrap;
    flex-grow: 0;
`;

const StatusBar = styled.footer`
    text-align: right;
    padding: 5px;
    background: black;
    color: white;
`;

class App extends Component<IProps, IState>
{
    constructor(props : IProps)
    {
        super(props);

        const entireCollection = BookmarkCollection.createBookmarkCollection();

        this.state = {
            bookmarks: entireCollection,
        };
    }

    render()
    {
        const me = this;
        const frequencies = this.state.bookmarks.relativeTagFrequencies;
        const selectedTags = this.state.bookmarks.selectedTags.map( tag => ({ label: tag, size: frequencies[tag], selected: true }) );
        const availableTags = this.state.bookmarks.availableTags.map( tag => ({ label: tag, size: frequencies[tag], selected: false }) );
        const tags : ITag[] = [ ...selectedTags, ...availableTags ].sort( (x, y) => x.label.localeCompare(y.label) );

        return (
            <Container>
                <StyledCloud tags={tags} onTagClicked={onToggleTag} />
                <BookmarkCollectionComponent bookmarkCollection={this.state.bookmarks} onTagClicked={tag => onSelectTag(tag.label)} />
                <StatusBar>
                    {this.state.bookmarks.bookmarks.length} bookmark(s)
                </StatusBar>
            </Container>
        );


        function onToggleTag(tag : ITag)
        {
            if ( tag.selected )
            {
                onUnselectTag(tag.label);
            }
            else
            {
                onSelectTag(tag.label);
            }
        }

        function onSelectTag(tag : string)
        {
            const bookmarks = me.state.bookmarks.selectTag(tag);

            me.setState( { bookmarks } );
        }

        function onUnselectTag(tag : string)
        {
            const bookmarks = me.state.bookmarks.unselectTag(tag);

            me.setState( { bookmarks } );
        }
    }
}

export default App;
