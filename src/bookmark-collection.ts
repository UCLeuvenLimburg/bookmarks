import { Bookmark } from './bookmark';
import { bookmarks } from './data';


export class BookmarkCollection
{
    private readonly parentCollection : BookmarkCollection;

    public readonly relativeTagFrequencies : { [key : string] : number };

    public static createBookmarkCollection() : BookmarkCollection
    {
        return new BookmarkCollection(null, bookmarks, []);
    }

    private constructor(parentCollection : BookmarkCollection | null, public bookmarks : Bookmark[], public selectedTags : string[])
    {
        this.parentCollection = parentCollection || this;
        this.relativeTagFrequencies = this.computeRelativeTagFrequencies();
    }

    public get availableTags()
    {
        return Object.keys(this.relativeTagFrequencies).filter(tag => !this.selectedTags.includes(tag));
    }

    public computeAbsoluteTagFrequencies() : { [key : string] : number }
    {
        const tagFrequencies : { [key : string] : number } = {};

        for ( const bookmark of this.bookmarks )
        {
            for ( const tag of bookmark.tags )
            {
                if ( !(tag in tagFrequencies) )
                {
                    tagFrequencies[tag] = 0;
                }

                tagFrequencies[tag]++;
            }
        }

        return tagFrequencies;
    }

    public computeRelativeTagFrequencies() : { [key : string] : number }
    {
        const absoluteFrequencies = this.computeAbsoluteTagFrequencies();
        const maximumAbsoluteFrequency = Math.max(...Object.values(absoluteFrequencies));
        const result : { [key : string] : number } = {};

        for ( const tag in absoluteFrequencies )
        {
            const absoluteFrequency = absoluteFrequencies[tag];
            const relativeFrequency = absoluteFrequency / maximumAbsoluteFrequency;

            result[tag] = relativeFrequency;
        }

        return result;
    }

    public selectTag(tag : string) : BookmarkCollection
    {
        if ( this.selectedTags.includes(tag) )
        {
            return this;
        }
        else
        {
            const selectedBookmarks = this.bookmarks.filter( bookmark => bookmark.tags.includes(tag) );

            return new BookmarkCollection(this.parentCollection, selectedBookmarks, [ ...this.selectedTags, tag]);
        }
    }

    public unselectTag(tag : string) : BookmarkCollection
    {
        const selectedTags = this.selectedTags.filter( t => t != tag );
        const selectedBookmarks = this.parentCollection.bookmarks.filter(bookmark => selectedTags.every(tag => bookmark.tags.includes(tag)));

        return new BookmarkCollection(this.parentCollection, selectedBookmarks, selectedTags);
    }

    public unselectAll() : BookmarkCollection
    {
        return this.parentCollection;
    }
}