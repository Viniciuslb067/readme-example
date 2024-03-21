/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger/plugin": { "models": [], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String }, "getHelloName": { type: String } } }], [import("./modules/customer/customer.controller"), { "CustomerController": { "findAll": { type: [Object] }, "findOne": { type: Object } } }]] }, "@nestjs/graphql/plugin": { "models": [[import("./common/models/base.model"), { "BaseModel": { id: {}, createdAt: {}, updatedAt: {} } }], [import("./common/pagination/pagination.args"), { "PaginationArgs": { skip: { nullable: true, type: () => Number }, after: { nullable: true, type: () => String }, before: { nullable: true, type: () => String }, first: { nullable: true, type: () => Number }, last: { nullable: true, type: () => Number } } }], [import("./common/pagination/page-info.model"), { "PageInfo": { endCursor: { nullable: true }, hasNextPage: {}, hasPreviousPage: {}, startCursor: { nullable: true } } }]] } };
};