export class CommitResponseModel {
    author: {};
    comments_url: string;
    commit: {
        author: {
            date: string;
            email: string;
            name: string;
        },
        committer: {}, 
        message: string,
        tree: {},
        url: string;
    }
    committer: {};
    html_url: string;
    node_id: string;
    parents: []
    sha: string;
    url: string;
}