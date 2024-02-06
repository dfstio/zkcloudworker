export { Berkeley, Lightnet, TestWorld2 };
const Berkeley = {
    graphql: "https://api.minascan.io/node/berkeley/v1/graphql",
    archive: "https://api.minascan.io/archive/berkeley/v1/graphql", // "https://api.minascan.io/archive/berkeley/v1/graphql"
    explorerAccountUrl: "https://minascan.io/berkeley/account/",
    explorerTransactionUrl: "https://minascan.io/berkeley/tx/",
    chainId: 'berkeley',
    name: 'Berkeley'
};
const TestWorld2 = {
    graphql: "https://api.minascan.io/node/testworld/v1/graphql",
    archive: "https://archive.testworld.minaexplorer.com",
    explorerAccountUrl: "https://minascan.io/testworld/account/",
    explorerTransactionUrl: "https://minascan.io/testworld/tx/",
    chainId: 'testworld2',
    name: 'TestWorld2'
};
const Lightnet = {
    graphql: "http://localhost:8080/graphql",
    archive: "http://localhost:8282 ",
    accountManager: "http://localhost:8181",
};
//# sourceMappingURL=networks.js.map