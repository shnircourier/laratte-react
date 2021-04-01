import AddressInterface from "./AddressInterface";
import CompanyInterface from "./CompanyInterface";

export default interface UserInterface {
   id: number,
   name: string,
   username: string,
   email: string,
   address?: AddressInterface,
   phone?: string,
   website?: string,
   company?: CompanyInterface
}