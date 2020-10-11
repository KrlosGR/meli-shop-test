import { Query, Resolver } from "type-graphql";

@Resolver()
export class TestResolver {
    @Query(() => String)
    test() {
        return 'Prueba desde Express!!!'
    }
}