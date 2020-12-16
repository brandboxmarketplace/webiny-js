import { CmsContentModelGroupType, CmsEnvironmentType } from "@webiny/api-headless-cms/types";
import { useContentGqlHandler } from "../utils/useContentGqlHandler";
import models from "./mocks/contentModels";
import * as helpers from "../utils/helpers";

describe("MANAGE - Resolvers", () => {
    const { documentClient, createContentModelMutation } = useContentGqlHandler({
        path: "manage/production/en-US"
    });

    let environment: CmsEnvironmentType;
    let contentModelGroup: CmsContentModelGroupType;

    beforeEach(async () => {
        environment = await helpers.createInitialEnvironment(documentClient);
        await helpers.createInitialAliasEnvironment(documentClient, environment);
        contentModelGroup = await helpers.createContentModelGroup(documentClient, environment);

        const [result] = await createContentModelMutation({
            data: helpers.getModelCreateInputObject(models.find(m => m.modelId === "category"))
        });
        const a = b;
    });

    test(`get Category by ID`, async () => {
        // Test resolvers
        const query = /* GraphQL */ `
            query GetCategory($id: ID!) {
                getCategory(where: { id: $id }) {
                    data {
                        id
                        title
                        slug
                    }
                }
            }
        `;
    });

    test(`list categories (no parameters)`, async () => {
        // Test resolvers
        const query = /* GraphQL */ `
            {
                listCategories {
                    data {
                        id
                        title
                        slug
                    }
                    error {
                        message
                    }
                }
            }
        `;
    });

    test(`list entries (limit)`, async () => {
        const query = /* GraphQL */ `
            {
                listCategories(limit: 1) {
                    data {
                        id
                    }
                }
            }
        `;
    });

    test(`list categories (sort ASC)`, async () => {
        // Test resolvers
        const query = /* GraphQL */ `
            query ListCategories($sort: [CategoryListSorter]) {
                listCategories(sort: $sort) {
                    data {
                        title
                    }
                }
            }
        `;
    });

    test(`list categories (sort DESC)`, async () => {
        // Test resolvers
        const query = /* GraphQL */ `
            query ListCategories($sort: [CategoryListSorter]) {
                listCategories(sort: $sort) {
                    data {
                        title
                    }
                }
            }
        `;
    });

    test(`list categories (contains, not_contains, in, not_in)`, async () => {
        // Test resolvers
        const query = /* GraphQL */ `
            query ListCategories($where: CategoryListWhereInput) {
                listCategories(where: $where) {
                    data {
                        title
                    }
                    error {
                        message
                    }
                }
            }
        `;
    });

    test(`create category`, async () => {
        const query = /* GraphQL */ `
            mutation CreateCategory($data: CategoryInput!) {
                createCategory(data: $data) {
                    data {
                        id
                        title
                        slug
                    }
                }
            }
        `;
    });

    test(`update category (by ID, by slug)`, async () => {
        const query = /* GraphQL */ `
            mutation UpdateCategory($where: CategoryUpdateWhereInput!, $data: CategoryInput!) {
                updateCategory(where: $where, data: $data) {
                    data {
                        id
                        title
                    }
                    error {
                        code
                        message
                    }
                }
            }
        `;
    });

    test(`delete category (by ID, by slug)`, async () => {
        const query = /* GraphQL */ `
            mutation DeleteCategory($where: CategoryDeleteWhereInput!) {
                deleteCategory(where: $where) {
                    data
                }
            }
        `;
    });
});