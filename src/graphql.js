import gql from 'graphql-tag'

export const ALL_ADMINS = gql`query admins {
    admin {
      pswrd
      nombre
      id_admin
      correo
    }
  }`