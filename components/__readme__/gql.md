
gqlg --schemaFilePath ./schema.graphql --destDirPath ./example/output --depthLimit 5

gqlg --schemaFilePath ./main.graphql --destDirPath ./example/main --depthLimit 5

gqlg --schemaFilePath ./schema.graphql --destDirPath ./__gqlsrc__/output --depthLimit 5

gqlg --schemaFilePath ./main.graphql --destDirPath ./__gqlsrc__/main --depthLimit 5


get-graphql-schema https://med.shop-survey.ru/main/graphql >main.graphql

get-graphql-schema https://med.shop-survey.ru/accounts/graphql > schema.graphql