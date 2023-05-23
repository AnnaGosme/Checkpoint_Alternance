import { Arg,Mutation, Query, Resolver} from "type-graphql";
import Country, {CountryInput }from "../entity/Country";
import datasource from "../db";

@Resolver(Country)
export class CountryResolver{
    
// send all countries
@Query(() => [Country])
async countries(): Promise<Country[]> {
    return await datasource
    .getRepository(Country)
    .find();
}

// add country to db
@Mutation(() => Country)
async createCountry(@Arg("data") data: CountryInput):Promise<Country> {
    console.log(data)
const country = await datasource
.getRepository(Country)
.save({...data});
return country;
}
}