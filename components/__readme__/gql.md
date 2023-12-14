
//gqlg --schemaFilePath ./schema.graphql --destDirPath ./example/output --depthLimit 5
//gqlg --schemaFilePath ./main.graphql --destDirPath ./example/main --depthLimit 5




#step 1: generate schema
get-graphql-schema https://med.shop-survey.ru/main/graphql >main.graphql
get-graphql-schema https://med.shop-survey.ru/accounts/graphql > schema.graphql
get-graphql-schema https://med.shop-survey.ru/admin/graphql > admin.graphql

##step 2: generate queries
gqlg --schemaFilePath ./schema.graphql --destDirPath ./__gqlsrc__/output --depthLimit 5
gqlg --schemaFilePath ./main.graphql --destDirPath ./__gqlsrc__/main --depthLimit 5
gqlg --schemaFilePath ./admin.graphql --destDirPath ./__gqlsrc__/admin --depthLimit 5

##step3: generate types 
npm run compile

