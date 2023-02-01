import { Address, Company, User } from '~/types/user'

class UserModel implements User {
  public readonly address: Address
  public readonly company: Company
  public readonly email: string
  public readonly id: number
  public readonly name: string
  public readonly phone: string
  public readonly username: string
  public readonly website: string

  constructor(address: Address,
    company: Company,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
  ) {
    this.address = address
    this.company = company
    this.email = email
    this.id = id
    this.name = name
    this.phone = phone
    this.username = username
    this.website = website
  }
}

export default UserModel
