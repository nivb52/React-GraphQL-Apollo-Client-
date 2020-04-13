import gql from 'graphql-tag';


const getUsers = gql`
  query getUsers( $limit: Int = 10, $offset: Int = 0  ){
    users(limit: $limit, offset: $offset) {
      twitter
      rocket
      name
    }
}
`;

export default getUsers;