import { CodegenConfig } from '@graphql-codegen/cli';

let pathtoserver = 'https://med.shop-survey.ru/accounts' //+ "/";
let apolloServer = pathtoserver + "/graphql";
let mainServer = 'https://med.shop-survey.ru/main/graphql';
let adminServer = 'https://med.shop-survey.ru/admin/graphql';

const config: CodegenConfig = {
  schema: [apolloServer, mainServer, adminServer],
  documents: ['apollo/**/*.tsx','apollo/**/*.ts'],
  generates: {
    './__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;