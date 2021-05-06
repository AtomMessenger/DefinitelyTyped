// Type definitions for @elastic/app-search-node 7.12
// Project: https://github.com/elastic/app-search-node#readme
// Definitions by: Matthew Mannucci <https://github.com/AtomMessenger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = elastic__app_search_node;

declare class elastic__app_search_node {
    constructor(...args: any[]);

    addMetaEngineSources(...args: any[]): void;

    createCuration(...args: any[]): void;

    createEngine(...args: any[]): void;

    createMetaEngine(...args: any[]): void;

    deleteMetaEngineSources(...args: any[]): void;

    destroyCuration(...args: any[]): void;

    destroyDocuments(...args: any[]): void;

    destroyEngine(...args: any[]): void;

    getCuration(...args: any[]): void;

    getDocuments(...args: any[]): void;

    getEngine(...args: any[]): void;

    getSchema(...args: any[]): void;

    indexDocument(...args: any[]): void;

    indexDocuments(...args: any[]): void;

    listCurations(...args: any[]): void;

    listDocuments(...args: any[]): void;

    listEngines(...args: any[]): void;

    multiSearch(...args: any[]): void;

    querySuggestion(...args: any[]): void;

    search(...args: any[]): void;

    updateCuration(...args: any[]): void;

    updateDocuments(...args: any[]): void;

    updateSchema(...args: any[]): void;

    static createSignedSearchKey(...args: any[]): void;

}

