import gql from 'graphql-tag'

export const ALL_ADMINS = gql`query admins {
    admin {
      pswrd,
      nombre,
      correo
    }
  }`

  export const ALL_AREAS = gql`query areas {
    area {
      id_area
      nombreArea
    }
  }`

  export const ALL_CATEGORIAS = gql`query categorias {
    categoria {
      id_categoria
      nombreCategoria
    }
  }`

  export const ALL_JUECES = gql`query jueces {
    juez {
      persona {
        nombre
        apellido1
        apellido2
        institucion
      }
      juez_sede_cates {
        sede {
          nombreSede
        }
        categorium {
          nombreCategoria
        }
      }
    }
  }`

  export const ALL_PARTICIPANTES = gql`query participantes {
    participante {
      persona {
        nombre
        apellido1
        apellido2
      }
      proy_parts {
        proyecto {
          nombreProyecto
          folio
        }
      }
      id_participante
    }
  }`

  
  export const ALL_SEDES = gql`query sedes {
    sede {
      id_sede
      nombreSede
    }
  }`

  export const ALL_PROYECTOS = gql`query proyectos { 
    proyecto {
      nombreProyecto
      areaProyecto
      categoriaProyecto
      folio
      modalidad
      sedeProyecto
    }
  }`
  
  export const CHECK_USER = gql`query usuarios($password: String!) {
    participante(where: {pswrd: {_eq: $password}}) {
      correo
    }
  }`