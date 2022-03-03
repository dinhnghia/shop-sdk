import { gql } from "@apollo/client";

export const accountErrorFragment = gql`
  fragment AccountErrorFragment on AccountError {
    code
    field
    message
  }
`;

export const addressFragment = gql`
  fragment AddressFragment on Address {
    id
    fullName
    companyName
    address
    city {
      id
      name
    }
    district {
      id
      name
    }
    ward {
      id
      name
    }
    country {
      code
      country
    }
    phone
    isDefaultBillingAddress
    isDefaultShippingAddress
  }
`;

export const userFragment = gql`
  ${addressFragment}
  fragment UserFragment on User {
    id
    email
    fullName
    isStaff
    metadata {
      key
      value
    }
    defaultShippingAddress {
      ...AddressFragment
    }
    defaultBillingAddress {
      ...AddressFragment
    }
    addresses {
      ...AddressFragment
    }
  }
`;
