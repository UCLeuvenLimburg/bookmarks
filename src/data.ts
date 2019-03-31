import { Bookmark } from './bookmark';



function importData(): Bookmark[]
{
    const result: Bookmark[] = [];

    (window as any).createBookmarks(addBookmark);

    return result;


    function addBookmark(args: { label: string, url: string, tags: string[], description?: string })
    {
        result.push(new Bookmark(args.label, args.url, args.tags, args.description));
    }
}


export const bookmarks = importData();