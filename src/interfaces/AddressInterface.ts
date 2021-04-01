export default interface AddressInterface {
   street: string,
   suite: string,
   city: string,
   zipcode: string,
   geo?: {
      lat: number,
      lng: number
   }
}