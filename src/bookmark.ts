export class Bookmark
{
    public constructor(readonly label : string, readonly url : string, readonly tags : string[], public description ?: string)
    {
        // NOP
    }
}