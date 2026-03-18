// plugin.js - Coloque isso no seu repositório também
export default {
    onLoad: () => {
        console.log("Plugin carregado");
    },
    
    patches: [
        {
            find: "getCurrentUser",
            replacement: {
                match: /return (\w)/,
                replace: (_, orig) => `return Object.assign({}, ${orig}, {
                    username: "e",
                    globalName: "e",
                    id: "246292202186211328"
                })`
            }
        }
    ]
};
